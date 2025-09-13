import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import axios from 'axios';

@Injectable()
export class ProxyService {
  async proxyRequest(
    req: Request,
    res: Response,
    serviceName: string,
    port: number,
  ): Promise<void> {
    try {
      const serviceUrl = process.env[`${serviceName.toUpperCase().replace('-', '_')}_URL`] || 
                        `http://localhost:${port}`;
      
      // Extract the path without the service prefix
      const originalUrl = req.originalUrl;
      const apiPrefix = '/api';
      const servicePath = originalUrl.replace(apiPrefix, '');
      const targetPath = servicePath.substring(servicePath.indexOf('/', 1));
      
      const targetUrl = `${serviceUrl}${targetPath}`;

      // Forward the request
      const response = await axios({
        method: req.method,
        url: targetUrl,
        data: req.body,
        headers: {
          ...req.headers,
          host: undefined, // Remove host header to avoid conflicts
        },
        validateStatus: () => true, // Don't throw on HTTP error codes
      });

      // Forward response headers (excluding hop-by-hop headers)
      const hopByHopHeaders = [
        'connection',
        'keep-alive',
        'proxy-authenticate',
        'proxy-authorization',
        'te',
        'trailers',
        'transfer-encoding',
        'upgrade',
      ];

      Object.keys(response.headers).forEach(header => {
        if (!hopByHopHeaders.includes(header.toLowerCase())) {
          res.set(header, response.headers[header]);
        }
      });

      // Set status code and send response
      res.status(response.status);
      res.send(response.data);
    } catch (error) {
      console.error(`Proxy error for ${serviceName}:`, error.message);
      
      if (error.code === 'ECONNREFUSED') {
        throw new HttpException(
          `Service ${serviceName} is not available`,
          HttpStatus.SERVICE_UNAVAILABLE,
        );
      }
      
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}