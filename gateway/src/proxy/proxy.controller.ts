import {
  Controller,
  All,
  Req,
  Res,
  UseGuards,
  Param,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ProxyService } from './proxy.service';

@ApiTags('proxy')
@Controller()
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class ProxyController {
  constructor(private readonly proxyService: ProxyService) {}

  @All('properties/*')
  async proxyToPropertyService(
    @Req() req: Request,
    @Res() res: Response,
    @Param() params: any,
  ) {
    return this.proxyService.proxyRequest(req, res, 'property-service', 3002);
  }

  @All('tenants/*')
  async proxyToTenantService(
    @Req() req: Request,
    @Res() res: Response,
  ) {
    return this.proxyService.proxyRequest(req, res, 'tenant-service', 3003);
  }

  @All('payments/*')
  async proxyToPaymentService(
    @Req() req: Request,
    @Res() res: Response,
  ) {
    return this.proxyService.proxyRequest(req, res, 'payment-service', 3004);
  }

  @All('maintenance/*')
  async proxyToMaintenanceService(
    @Req() req: Request,
    @Res() res: Response,
  ) {
    return this.proxyService.proxyRequest(req, res, 'maintenance-service', 3005);
  }

  @All('vendors/*')
  async proxyToVendorService(
    @Req() req: Request,
    @Res() res: Response,
  ) {
    return this.proxyService.proxyRequest(req, res, 'vendor-service', 3006);
  }

  @All('communications/*')
  async proxyCommunicationService(
    @Req() req: Request,
    @Res() res: Response,
  ) {
    return this.proxyService.proxyRequest(req, res, 'communication-service', 3007);
  }

  @All('reports/*')
  async proxyToReportingService(
    @Req() req: Request,
    @Res() res: Response,
  ) {
    return this.proxyService.proxyRequest(req, res, 'reporting-service', 3008);
  }
}