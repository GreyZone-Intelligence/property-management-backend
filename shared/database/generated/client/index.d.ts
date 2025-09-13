
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model Unit
 * 
 */
export type Unit = $Result.DefaultSelection<Prisma.$UnitPayload>
/**
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model Lease
 * 
 */
export type Lease = $Result.DefaultSelection<Prisma.$LeasePayload>
/**
 * Model Vendor
 * 
 */
export type Vendor = $Result.DefaultSelection<Prisma.$VendorPayload>
/**
 * Model MaintenanceRequest
 * 
 */
export type MaintenanceRequest = $Result.DefaultSelection<Prisma.$MaintenanceRequestPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  LANDLORD: 'LANDLORD',
  MANAGER: 'MANAGER',
  TENANT: 'TENANT',
  VENDOR: 'VENDOR',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const PropertyType: {
  APARTMENT: 'APARTMENT',
  HOUSE: 'HOUSE',
  CONDO: 'CONDO',
  TOWNHOME: 'TOWNHOME',
  COMMERCIAL: 'COMMERCIAL'
};

export type PropertyType = (typeof PropertyType)[keyof typeof PropertyType]


export const MaintenancePriority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  URGENT: 'URGENT'
};

export type MaintenancePriority = (typeof MaintenancePriority)[keyof typeof MaintenancePriority]


export const MaintenanceStatus: {
  PENDING: 'PENDING',
  ASSIGNED: 'ASSIGNED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type MaintenanceStatus = (typeof MaintenanceStatus)[keyof typeof MaintenanceStatus]


export const PaymentType: {
  RENT: 'RENT',
  DEPOSIT: 'DEPOSIT',
  FEE: 'FEE',
  MAINTENANCE: 'MAINTENANCE',
  UTILITY: 'UTILITY'
};

export type PaymentType = (typeof PaymentType)[keyof typeof PaymentType]


export const PaymentStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED',
  OVERDUE: 'OVERDUE'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type PropertyType = $Enums.PropertyType

export const PropertyType: typeof $Enums.PropertyType

export type MaintenancePriority = $Enums.MaintenancePriority

export const MaintenancePriority: typeof $Enums.MaintenancePriority

export type MaintenanceStatus = $Enums.MaintenanceStatus

export const MaintenanceStatus: typeof $Enums.MaintenanceStatus

export type PaymentType = $Enums.PaymentType

export const PaymentType: typeof $Enums.PaymentType

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organization.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs>;

  /**
   * `prisma.unit`: Exposes CRUD operations for the **Unit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Units
    * const units = await prisma.unit.findMany()
    * ```
    */
  get unit(): Prisma.UnitDelegate<ExtArgs>;

  /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs>;

  /**
   * `prisma.lease`: Exposes CRUD operations for the **Lease** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leases
    * const leases = await prisma.lease.findMany()
    * ```
    */
  get lease(): Prisma.LeaseDelegate<ExtArgs>;

  /**
   * `prisma.vendor`: Exposes CRUD operations for the **Vendor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendors
    * const vendors = await prisma.vendor.findMany()
    * ```
    */
  get vendor(): Prisma.VendorDelegate<ExtArgs>;

  /**
   * `prisma.maintenanceRequest`: Exposes CRUD operations for the **MaintenanceRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaintenanceRequests
    * const maintenanceRequests = await prisma.maintenanceRequest.findMany()
    * ```
    */
  get maintenanceRequest(): Prisma.MaintenanceRequestDelegate<ExtArgs>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Organization: 'Organization',
    User: 'User',
    Property: 'Property',
    Unit: 'Unit',
    Tenant: 'Tenant',
    Lease: 'Lease',
    Vendor: 'Vendor',
    MaintenanceRequest: 'MaintenanceRequest',
    Payment: 'Payment',
    Message: 'Message',
    ActivityLog: 'ActivityLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "organization" | "user" | "property" | "unit" | "tenant" | "lease" | "vendor" | "maintenanceRequest" | "payment" | "message" | "activityLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      Unit: {
        payload: Prisma.$UnitPayload<ExtArgs>
        fields: Prisma.UnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findFirst: {
            args: Prisma.UnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findMany: {
            args: Prisma.UnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          create: {
            args: Prisma.UnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          createMany: {
            args: Prisma.UnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          delete: {
            args: Prisma.UnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          update: {
            args: Prisma.UnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          deleteMany: {
            args: Prisma.UnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          aggregate: {
            args: Prisma.UnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnit>
          }
          groupBy: {
            args: Prisma.UnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitCountArgs<ExtArgs>
            result: $Utils.Optional<UnitCountAggregateOutputType> | number
          }
        }
      }
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      Lease: {
        payload: Prisma.$LeasePayload<ExtArgs>
        fields: Prisma.LeaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          findFirst: {
            args: Prisma.LeaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          findMany: {
            args: Prisma.LeaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>[]
          }
          create: {
            args: Prisma.LeaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          createMany: {
            args: Prisma.LeaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>[]
          }
          delete: {
            args: Prisma.LeaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          update: {
            args: Prisma.LeaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          deleteMany: {
            args: Prisma.LeaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LeaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          aggregate: {
            args: Prisma.LeaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLease>
          }
          groupBy: {
            args: Prisma.LeaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaseCountArgs<ExtArgs>
            result: $Utils.Optional<LeaseCountAggregateOutputType> | number
          }
        }
      }
      Vendor: {
        payload: Prisma.$VendorPayload<ExtArgs>
        fields: Prisma.VendorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findFirst: {
            args: Prisma.VendorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findMany: {
            args: Prisma.VendorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          create: {
            args: Prisma.VendorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          createMany: {
            args: Prisma.VendorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VendorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          delete: {
            args: Prisma.VendorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          update: {
            args: Prisma.VendorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          deleteMany: {
            args: Prisma.VendorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VendorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          aggregate: {
            args: Prisma.VendorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendor>
          }
          groupBy: {
            args: Prisma.VendorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendorGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendorCountArgs<ExtArgs>
            result: $Utils.Optional<VendorCountAggregateOutputType> | number
          }
        }
      }
      MaintenanceRequest: {
        payload: Prisma.$MaintenanceRequestPayload<ExtArgs>
        fields: Prisma.MaintenanceRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaintenanceRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaintenanceRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>
          }
          findFirst: {
            args: Prisma.MaintenanceRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaintenanceRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>
          }
          findMany: {
            args: Prisma.MaintenanceRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>[]
          }
          create: {
            args: Prisma.MaintenanceRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>
          }
          createMany: {
            args: Prisma.MaintenanceRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaintenanceRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>[]
          }
          delete: {
            args: Prisma.MaintenanceRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>
          }
          update: {
            args: Prisma.MaintenanceRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>
          }
          deleteMany: {
            args: Prisma.MaintenanceRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaintenanceRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MaintenanceRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>
          }
          aggregate: {
            args: Prisma.MaintenanceRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenanceRequest>
          }
          groupBy: {
            args: Prisma.MaintenanceRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaintenanceRequestCountArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceRequestCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    users: number
    properties: number
    vendors: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | OrganizationCountOutputTypeCountUsersArgs
    properties?: boolean | OrganizationCountOutputTypeCountPropertiesArgs
    vendors?: boolean | OrganizationCountOutputTypeCountVendorsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountVendorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    maintenanceRequests: number
    payments: number
    messages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maintenanceRequests?: boolean | UserCountOutputTypeCountMaintenanceRequestsArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMaintenanceRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type PropertyCountOutputType
   */

  export type PropertyCountOutputType = {
    units: number
    maintenanceRequests: number
    payments: number
  }

  export type PropertyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    units?: boolean | PropertyCountOutputTypeCountUnitsArgs
    maintenanceRequests?: boolean | PropertyCountOutputTypeCountMaintenanceRequestsArgs
    payments?: boolean | PropertyCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCountOutputType
     */
    select?: PropertyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountMaintenanceRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceRequestWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type UnitCountOutputType
   */

  export type UnitCountOutputType = {
    leases: number
    maintenanceRequests: number
  }

  export type UnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leases?: boolean | UnitCountOutputTypeCountLeasesArgs
    maintenanceRequests?: boolean | UnitCountOutputTypeCountMaintenanceRequestsArgs
  }

  // Custom InputTypes
  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitCountOutputType
     */
    select?: UnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountLeasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseWhereInput
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountMaintenanceRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceRequestWhereInput
  }


  /**
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    leases: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leases?: boolean | TenantCountOutputTypeCountLeasesArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountLeasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseWhereInput
  }


  /**
   * Count Type LeaseCountOutputType
   */

  export type LeaseCountOutputType = {
    payments: number
  }

  export type LeaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | LeaseCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * LeaseCountOutputType without action
   */
  export type LeaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseCountOutputType
     */
    select?: LeaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeaseCountOutputType without action
   */
  export type LeaseCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type VendorCountOutputType
   */

  export type VendorCountOutputType = {
    maintenanceRequests: number
    payments: number
  }

  export type VendorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maintenanceRequests?: boolean | VendorCountOutputTypeCountMaintenanceRequestsArgs
    payments?: boolean | VendorCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorCountOutputType
     */
    select?: VendorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountMaintenanceRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceRequestWhereInput
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type MaintenanceRequestCountOutputType
   */

  export type MaintenanceRequestCountOutputType = {
    payments: number
  }

  export type MaintenanceRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | MaintenanceRequestCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * MaintenanceRequestCountOutputType without action
   */
  export type MaintenanceRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequestCountOutputType
     */
    select?: MaintenanceRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MaintenanceRequestCountOutputType without action
   */
  export type MaintenanceRequestCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    logo: string | null
    allowTenantRegistration: boolean | null
    requireVendorApproval: boolean | null
    enableAutomatedPayments: boolean | null
    timezone: string | null
    currency: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    logo: string | null
    allowTenantRegistration: boolean | null
    requireVendorApproval: boolean | null
    enableAutomatedPayments: boolean | null
    timezone: string | null
    currency: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    type: number
    logo: number
    allowTenantRegistration: number
    requireVendorApproval: number
    enableAutomatedPayments: number
    timezone: number
    currency: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    logo?: true
    allowTenantRegistration?: true
    requireVendorApproval?: true
    enableAutomatedPayments?: true
    timezone?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    logo?: true
    allowTenantRegistration?: true
    requireVendorApproval?: true
    enableAutomatedPayments?: true
    timezone?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    logo?: true
    allowTenantRegistration?: true
    requireVendorApproval?: true
    enableAutomatedPayments?: true
    timezone?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    type: string
    logo: string | null
    allowTenantRegistration: boolean
    requireVendorApproval: boolean
    enableAutomatedPayments: boolean
    timezone: string
    currency: string
    createdAt: Date
    updatedAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    logo?: boolean
    allowTenantRegistration?: boolean
    requireVendorApproval?: boolean
    enableAutomatedPayments?: boolean
    timezone?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Organization$usersArgs<ExtArgs>
    properties?: boolean | Organization$propertiesArgs<ExtArgs>
    vendors?: boolean | Organization$vendorsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    logo?: boolean
    allowTenantRegistration?: boolean
    requireVendorApproval?: boolean
    enableAutomatedPayments?: boolean
    timezone?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    logo?: boolean
    allowTenantRegistration?: boolean
    requireVendorApproval?: boolean
    enableAutomatedPayments?: boolean
    timezone?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Organization$usersArgs<ExtArgs>
    properties?: boolean | Organization$propertiesArgs<ExtArgs>
    vendors?: boolean | Organization$vendorsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      properties: Prisma.$PropertyPayload<ExtArgs>[]
      vendors: Prisma.$VendorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      logo: string | null
      allowTenantRegistration: boolean
      requireVendorApproval: boolean
      enableAutomatedPayments: boolean
      timezone: string
      currency: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Organization$usersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    properties<T extends Organization$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany"> | Null>
    vendors<T extends Organization$vendorsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$vendorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */ 
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly type: FieldRef<"Organization", 'String'>
    readonly logo: FieldRef<"Organization", 'String'>
    readonly allowTenantRegistration: FieldRef<"Organization", 'Boolean'>
    readonly requireVendorApproval: FieldRef<"Organization", 'Boolean'>
    readonly enableAutomatedPayments: FieldRef<"Organization", 'Boolean'>
    readonly timezone: FieldRef<"Organization", 'String'>
    readonly currency: FieldRef<"Organization", 'String'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
  }

  /**
   * Organization.users
   */
  export type Organization$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Organization.properties
   */
  export type Organization$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Organization.vendors
   */
  export type Organization$vendorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    where?: VendorWhereInput
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    cursor?: VendorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.UserRole | null
    avatar: string | null
    emailVerified: boolean | null
    phone: string | null
    organizationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.UserRole | null
    avatar: string | null
    emailVerified: boolean | null
    phone: string | null
    organizationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    role: number
    avatar: number
    emailVerified: number
    phone: number
    organizationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    avatar?: true
    emailVerified?: true
    phone?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    avatar?: true
    emailVerified?: true
    phone?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    avatar?: true
    emailVerified?: true
    phone?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    avatar: string | null
    emailVerified: boolean
    phone: string | null
    organizationId: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    avatar?: boolean
    emailVerified?: boolean
    phone?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    tenantProfile?: boolean | User$tenantProfileArgs<ExtArgs>
    vendorProfile?: boolean | User$vendorProfileArgs<ExtArgs>
    maintenanceRequests?: boolean | User$maintenanceRequestsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    avatar?: boolean
    emailVerified?: boolean
    phone?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    avatar?: boolean
    emailVerified?: boolean
    phone?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    tenantProfile?: boolean | User$tenantProfileArgs<ExtArgs>
    vendorProfile?: boolean | User$vendorProfileArgs<ExtArgs>
    maintenanceRequests?: boolean | User$maintenanceRequestsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      tenantProfile: Prisma.$TenantPayload<ExtArgs> | null
      vendorProfile: Prisma.$VendorPayload<ExtArgs> | null
      maintenanceRequests: Prisma.$MaintenanceRequestPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      firstName: string
      lastName: string
      role: $Enums.UserRole
      avatar: string | null
      emailVerified: boolean
      phone: string | null
      organizationId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tenantProfile<T extends User$tenantProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$tenantProfileArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    vendorProfile<T extends User$vendorProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$vendorProfileArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    maintenanceRequests<T extends User$maintenanceRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$maintenanceRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findMany"> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany"> | Null>
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly phone: FieldRef<"User", 'String'>
    readonly organizationId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.tenantProfile
   */
  export type User$tenantProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    where?: TenantWhereInput
  }

  /**
   * User.vendorProfile
   */
  export type User$vendorProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    where?: VendorWhereInput
  }

  /**
   * User.maintenanceRequests
   */
  export type User$maintenanceRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    where?: MaintenanceRequestWhereInput
    orderBy?: MaintenanceRequestOrderByWithRelationInput | MaintenanceRequestOrderByWithRelationInput[]
    cursor?: MaintenanceRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceRequestScalarFieldEnum | MaintenanceRequestScalarFieldEnum[]
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    totalUnits: number | null
    yearBuilt: number | null
    squareFeet: number | null
  }

  export type PropertySumAggregateOutputType = {
    totalUnits: number | null
    yearBuilt: number | null
    squareFeet: number | null
  }

  export type PropertyMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    type: $Enums.PropertyType | null
    description: string | null
    totalUnits: number | null
    yearBuilt: number | null
    squareFeet: number | null
    organizationId: string | null
    managerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    type: $Enums.PropertyType | null
    description: string | null
    totalUnits: number | null
    yearBuilt: number | null
    squareFeet: number | null
    organizationId: string | null
    managerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    name: number
    address: number
    city: number
    state: number
    zipCode: number
    type: number
    description: number
    totalUnits: number
    yearBuilt: number
    squareFeet: number
    amenities: number
    images: number
    organizationId: number
    managerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    totalUnits?: true
    yearBuilt?: true
    squareFeet?: true
  }

  export type PropertySumAggregateInputType = {
    totalUnits?: true
    yearBuilt?: true
    squareFeet?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    type?: true
    description?: true
    totalUnits?: true
    yearBuilt?: true
    squareFeet?: true
    organizationId?: true
    managerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    type?: true
    description?: true
    totalUnits?: true
    yearBuilt?: true
    squareFeet?: true
    organizationId?: true
    managerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    type?: true
    description?: true
    totalUnits?: true
    yearBuilt?: true
    squareFeet?: true
    amenities?: true
    images?: true
    organizationId?: true
    managerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: string
    name: string
    address: string
    city: string
    state: string
    zipCode: string
    type: $Enums.PropertyType
    description: string | null
    totalUnits: number
    yearBuilt: number | null
    squareFeet: number | null
    amenities: string[]
    images: string[]
    organizationId: string
    managerId: string | null
    createdAt: Date
    updatedAt: Date
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    type?: boolean
    description?: boolean
    totalUnits?: boolean
    yearBuilt?: boolean
    squareFeet?: boolean
    amenities?: boolean
    images?: boolean
    organizationId?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    units?: boolean | Property$unitsArgs<ExtArgs>
    maintenanceRequests?: boolean | Property$maintenanceRequestsArgs<ExtArgs>
    payments?: boolean | Property$paymentsArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    type?: boolean
    description?: boolean
    totalUnits?: boolean
    yearBuilt?: boolean
    squareFeet?: boolean
    amenities?: boolean
    images?: boolean
    organizationId?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    type?: boolean
    description?: boolean
    totalUnits?: boolean
    yearBuilt?: boolean
    squareFeet?: boolean
    amenities?: boolean
    images?: boolean
    organizationId?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    units?: boolean | Property$unitsArgs<ExtArgs>
    maintenanceRequests?: boolean | Property$maintenanceRequestsArgs<ExtArgs>
    payments?: boolean | Property$paymentsArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      units: Prisma.$UnitPayload<ExtArgs>[]
      maintenanceRequests: Prisma.$MaintenanceRequestPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      city: string
      state: string
      zipCode: string
      type: $Enums.PropertyType
      description: string | null
      totalUnits: number
      yearBuilt: number | null
      squareFeet: number | null
      amenities: string[]
      images: string[]
      organizationId: string
      managerId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFindManyArgs>(args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends PropertyCreateArgs>(args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCreateManyArgs>(args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {PropertyCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends PropertyDeleteArgs>(args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyUpdateArgs>(args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    units<T extends Property$unitsArgs<ExtArgs> = {}>(args?: Subset<T, Property$unitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany"> | Null>
    maintenanceRequests<T extends Property$maintenanceRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Property$maintenanceRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findMany"> | Null>
    payments<T extends Property$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Property$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Property model
   */ 
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'String'>
    readonly name: FieldRef<"Property", 'String'>
    readonly address: FieldRef<"Property", 'String'>
    readonly city: FieldRef<"Property", 'String'>
    readonly state: FieldRef<"Property", 'String'>
    readonly zipCode: FieldRef<"Property", 'String'>
    readonly type: FieldRef<"Property", 'PropertyType'>
    readonly description: FieldRef<"Property", 'String'>
    readonly totalUnits: FieldRef<"Property", 'Int'>
    readonly yearBuilt: FieldRef<"Property", 'Int'>
    readonly squareFeet: FieldRef<"Property", 'Int'>
    readonly amenities: FieldRef<"Property", 'String[]'>
    readonly images: FieldRef<"Property", 'String[]'>
    readonly organizationId: FieldRef<"Property", 'String'>
    readonly managerId: FieldRef<"Property", 'String'>
    readonly createdAt: FieldRef<"Property", 'DateTime'>
    readonly updatedAt: FieldRef<"Property", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property createManyAndReturn
   */
  export type PropertyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
  }

  /**
   * Property.units
   */
  export type Property$unitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    cursor?: UnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Property.maintenanceRequests
   */
  export type Property$maintenanceRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    where?: MaintenanceRequestWhereInput
    orderBy?: MaintenanceRequestOrderByWithRelationInput | MaintenanceRequestOrderByWithRelationInput[]
    cursor?: MaintenanceRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceRequestScalarFieldEnum | MaintenanceRequestScalarFieldEnum[]
  }

  /**
   * Property.payments
   */
  export type Property$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
  }


  /**
   * Model Unit
   */

  export type AggregateUnit = {
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  export type UnitAvgAggregateOutputType = {
    floor: number | null
    bedrooms: number | null
    bathrooms: Decimal | null
    squareFeet: number | null
    monthlyRent: Decimal | null
    securityDeposit: Decimal | null
  }

  export type UnitSumAggregateOutputType = {
    floor: number | null
    bedrooms: number | null
    bathrooms: Decimal | null
    squareFeet: number | null
    monthlyRent: Decimal | null
    securityDeposit: Decimal | null
  }

  export type UnitMinAggregateOutputType = {
    id: string | null
    number: string | null
    floor: number | null
    bedrooms: number | null
    bathrooms: Decimal | null
    squareFeet: number | null
    monthlyRent: Decimal | null
    securityDeposit: Decimal | null
    isOccupied: boolean | null
    propertyId: string | null
    currentLeaseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnitMaxAggregateOutputType = {
    id: string | null
    number: string | null
    floor: number | null
    bedrooms: number | null
    bathrooms: Decimal | null
    squareFeet: number | null
    monthlyRent: Decimal | null
    securityDeposit: Decimal | null
    isOccupied: boolean | null
    propertyId: string | null
    currentLeaseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnitCountAggregateOutputType = {
    id: number
    number: number
    floor: number
    bedrooms: number
    bathrooms: number
    squareFeet: number
    monthlyRent: number
    securityDeposit: number
    isOccupied: number
    features: number
    propertyId: number
    currentLeaseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UnitAvgAggregateInputType = {
    floor?: true
    bedrooms?: true
    bathrooms?: true
    squareFeet?: true
    monthlyRent?: true
    securityDeposit?: true
  }

  export type UnitSumAggregateInputType = {
    floor?: true
    bedrooms?: true
    bathrooms?: true
    squareFeet?: true
    monthlyRent?: true
    securityDeposit?: true
  }

  export type UnitMinAggregateInputType = {
    id?: true
    number?: true
    floor?: true
    bedrooms?: true
    bathrooms?: true
    squareFeet?: true
    monthlyRent?: true
    securityDeposit?: true
    isOccupied?: true
    propertyId?: true
    currentLeaseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnitMaxAggregateInputType = {
    id?: true
    number?: true
    floor?: true
    bedrooms?: true
    bathrooms?: true
    squareFeet?: true
    monthlyRent?: true
    securityDeposit?: true
    isOccupied?: true
    propertyId?: true
    currentLeaseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnitCountAggregateInputType = {
    id?: true
    number?: true
    floor?: true
    bedrooms?: true
    bathrooms?: true
    squareFeet?: true
    monthlyRent?: true
    securityDeposit?: true
    isOccupied?: true
    features?: true
    propertyId?: true
    currentLeaseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unit to aggregate.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Units
    **/
    _count?: true | UnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitMaxAggregateInputType
  }

  export type GetUnitAggregateType<T extends UnitAggregateArgs> = {
        [P in keyof T & keyof AggregateUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnit[P]>
      : GetScalarType<T[P], AggregateUnit[P]>
  }




  export type UnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithAggregationInput | UnitOrderByWithAggregationInput[]
    by: UnitScalarFieldEnum[] | UnitScalarFieldEnum
    having?: UnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitCountAggregateInputType | true
    _avg?: UnitAvgAggregateInputType
    _sum?: UnitSumAggregateInputType
    _min?: UnitMinAggregateInputType
    _max?: UnitMaxAggregateInputType
  }

  export type UnitGroupByOutputType = {
    id: string
    number: string
    floor: number | null
    bedrooms: number
    bathrooms: Decimal
    squareFeet: number
    monthlyRent: Decimal
    securityDeposit: Decimal
    isOccupied: boolean
    features: string[]
    propertyId: string
    currentLeaseId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  type GetUnitGroupByPayload<T extends UnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitGroupByOutputType[P]>
            : GetScalarType<T[P], UnitGroupByOutputType[P]>
        }
      >
    >


  export type UnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    floor?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    squareFeet?: boolean
    monthlyRent?: boolean
    securityDeposit?: boolean
    isOccupied?: boolean
    features?: boolean
    propertyId?: boolean
    currentLeaseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    leases?: boolean | Unit$leasesArgs<ExtArgs>
    maintenanceRequests?: boolean | Unit$maintenanceRequestsArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    floor?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    squareFeet?: boolean
    monthlyRent?: boolean
    securityDeposit?: boolean
    isOccupied?: boolean
    features?: boolean
    propertyId?: boolean
    currentLeaseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectScalar = {
    id?: boolean
    number?: boolean
    floor?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    squareFeet?: boolean
    monthlyRent?: boolean
    securityDeposit?: boolean
    isOccupied?: boolean
    features?: boolean
    propertyId?: boolean
    currentLeaseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    leases?: boolean | Unit$leasesArgs<ExtArgs>
    maintenanceRequests?: boolean | Unit$maintenanceRequestsArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $UnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Unit"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
      leases: Prisma.$LeasePayload<ExtArgs>[]
      maintenanceRequests: Prisma.$MaintenanceRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      number: string
      floor: number | null
      bedrooms: number
      bathrooms: Prisma.Decimal
      squareFeet: number
      monthlyRent: Prisma.Decimal
      securityDeposit: Prisma.Decimal
      isOccupied: boolean
      features: string[]
      propertyId: string
      currentLeaseId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["unit"]>
    composites: {}
  }

  type UnitGetPayload<S extends boolean | null | undefined | UnitDefaultArgs> = $Result.GetResult<Prisma.$UnitPayload, S>

  type UnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UnitFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UnitCountAggregateInputType | true
    }

  export interface UnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Unit'], meta: { name: 'Unit' } }
    /**
     * Find zero or one Unit that matches the filter.
     * @param {UnitFindUniqueArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitFindUniqueArgs>(args: SelectSubset<T, UnitFindUniqueArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Unit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UnitFindUniqueOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Unit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitFindFirstArgs>(args?: SelectSubset<T, UnitFindFirstArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Unit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Units
     * const units = await prisma.unit.findMany()
     * 
     * // Get first 10 Units
     * const units = await prisma.unit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unitWithIdOnly = await prisma.unit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnitFindManyArgs>(args?: SelectSubset<T, UnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Unit.
     * @param {UnitCreateArgs} args - Arguments to create a Unit.
     * @example
     * // Create one Unit
     * const Unit = await prisma.unit.create({
     *   data: {
     *     // ... data to create a Unit
     *   }
     * })
     * 
     */
    create<T extends UnitCreateArgs>(args: SelectSubset<T, UnitCreateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Units.
     * @param {UnitCreateManyArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitCreateManyArgs>(args?: SelectSubset<T, UnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Units and returns the data saved in the database.
     * @param {UnitCreateManyAndReturnArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnitCreateManyAndReturnArgs>(args?: SelectSubset<T, UnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Unit.
     * @param {UnitDeleteArgs} args - Arguments to delete one Unit.
     * @example
     * // Delete one Unit
     * const Unit = await prisma.unit.delete({
     *   where: {
     *     // ... filter to delete one Unit
     *   }
     * })
     * 
     */
    delete<T extends UnitDeleteArgs>(args: SelectSubset<T, UnitDeleteArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Unit.
     * @param {UnitUpdateArgs} args - Arguments to update one Unit.
     * @example
     * // Update one Unit
     * const unit = await prisma.unit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitUpdateArgs>(args: SelectSubset<T, UnitUpdateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Units.
     * @param {UnitDeleteManyArgs} args - Arguments to filter Units to delete.
     * @example
     * // Delete a few Units
     * const { count } = await prisma.unit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitDeleteManyArgs>(args?: SelectSubset<T, UnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitUpdateManyArgs>(args: SelectSubset<T, UnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Unit.
     * @param {UnitUpsertArgs} args - Arguments to update or create a Unit.
     * @example
     * // Update or create a Unit
     * const unit = await prisma.unit.upsert({
     *   create: {
     *     // ... data to create a Unit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unit we want to update
     *   }
     * })
     */
    upsert<T extends UnitUpsertArgs>(args: SelectSubset<T, UnitUpsertArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitCountArgs} args - Arguments to filter Units to count.
     * @example
     * // Count the number of Units
     * const count = await prisma.unit.count({
     *   where: {
     *     // ... the filter for the Units we want to count
     *   }
     * })
    **/
    count<T extends UnitCountArgs>(
      args?: Subset<T, UnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnitAggregateArgs>(args: Subset<T, UnitAggregateArgs>): Prisma.PrismaPromise<GetUnitAggregateType<T>>

    /**
     * Group by Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitGroupByArgs['orderBy'] }
        : { orderBy?: UnitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Unit model
   */
  readonly fields: UnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    leases<T extends Unit$leasesArgs<ExtArgs> = {}>(args?: Subset<T, Unit$leasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findMany"> | Null>
    maintenanceRequests<T extends Unit$maintenanceRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Unit$maintenanceRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Unit model
   */ 
  interface UnitFieldRefs {
    readonly id: FieldRef<"Unit", 'String'>
    readonly number: FieldRef<"Unit", 'String'>
    readonly floor: FieldRef<"Unit", 'Int'>
    readonly bedrooms: FieldRef<"Unit", 'Int'>
    readonly bathrooms: FieldRef<"Unit", 'Decimal'>
    readonly squareFeet: FieldRef<"Unit", 'Int'>
    readonly monthlyRent: FieldRef<"Unit", 'Decimal'>
    readonly securityDeposit: FieldRef<"Unit", 'Decimal'>
    readonly isOccupied: FieldRef<"Unit", 'Boolean'>
    readonly features: FieldRef<"Unit", 'String[]'>
    readonly propertyId: FieldRef<"Unit", 'String'>
    readonly currentLeaseId: FieldRef<"Unit", 'String'>
    readonly createdAt: FieldRef<"Unit", 'DateTime'>
    readonly updatedAt: FieldRef<"Unit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Unit findUnique
   */
  export type UnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findUniqueOrThrow
   */
  export type UnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findFirst
   */
  export type UnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findFirstOrThrow
   */
  export type UnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findMany
   */
  export type UnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Units to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit create
   */
  export type UnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to create a Unit.
     */
    data: XOR<UnitCreateInput, UnitUncheckedCreateInput>
  }

  /**
   * Unit createMany
   */
  export type UnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Unit createManyAndReturn
   */
  export type UnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Unit update
   */
  export type UnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to update a Unit.
     */
    data: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
    /**
     * Choose, which Unit to update.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit updateMany
   */
  export type UnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
  }

  /**
   * Unit upsert
   */
  export type UnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The filter to search for the Unit to update in case it exists.
     */
    where: UnitWhereUniqueInput
    /**
     * In case the Unit found by the `where` argument doesn't exist, create a new Unit with this data.
     */
    create: XOR<UnitCreateInput, UnitUncheckedCreateInput>
    /**
     * In case the Unit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
  }

  /**
   * Unit delete
   */
  export type UnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter which Unit to delete.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit deleteMany
   */
  export type UnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Units to delete
     */
    where?: UnitWhereInput
  }

  /**
   * Unit.leases
   */
  export type Unit$leasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    where?: LeaseWhereInput
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    cursor?: LeaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Unit.maintenanceRequests
   */
  export type Unit$maintenanceRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    where?: MaintenanceRequestWhereInput
    orderBy?: MaintenanceRequestOrderByWithRelationInput | MaintenanceRequestOrderByWithRelationInput[]
    cursor?: MaintenanceRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceRequestScalarFieldEnum | MaintenanceRequestScalarFieldEnum[]
  }

  /**
   * Unit without action
   */
  export type UnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
  }


  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
    userId: string | null
    phone: string | null
    moveInDate: Date | null
    moveOutDate: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    phone: string | null
    moveInDate: Date | null
    moveOutDate: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    userId: number
    phone: number
    emergencyContact: number
    moveInDate: number
    moveOutDate: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantMinAggregateInputType = {
    id?: true
    userId?: true
    phone?: true
    moveInDate?: true
    moveOutDate?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    userId?: true
    phone?: true
    moveInDate?: true
    moveOutDate?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    userId?: true
    phone?: true
    emergencyContact?: true
    moveInDate?: true
    moveOutDate?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: string
    userId: string
    phone: string | null
    emergencyContact: JsonValue | null
    moveInDate: Date | null
    moveOutDate: Date | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    phone?: boolean
    emergencyContact?: boolean
    moveInDate?: boolean
    moveOutDate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    leases?: boolean | Tenant$leasesArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    phone?: boolean
    emergencyContact?: boolean
    moveInDate?: boolean
    moveOutDate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    userId?: boolean
    phone?: boolean
    emergencyContact?: boolean
    moveInDate?: boolean
    moveOutDate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    leases?: boolean | Tenant$leasesArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      leases: Prisma.$LeasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      phone: string | null
      emergencyContact: Prisma.JsonValue | null
      moveInDate: Date | null
      moveOutDate: Date | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    leases<T extends Tenant$leasesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$leasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tenant model
   */ 
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'String'>
    readonly userId: FieldRef<"Tenant", 'String'>
    readonly phone: FieldRef<"Tenant", 'String'>
    readonly emergencyContact: FieldRef<"Tenant", 'Json'>
    readonly moveInDate: FieldRef<"Tenant", 'DateTime'>
    readonly moveOutDate: FieldRef<"Tenant", 'DateTime'>
    readonly notes: FieldRef<"Tenant", 'String'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
    readonly updatedAt: FieldRef<"Tenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
  }

  /**
   * Tenant.leases
   */
  export type Tenant$leasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    where?: LeaseWhereInput
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    cursor?: LeaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model Lease
   */

  export type AggregateLease = {
    _count: LeaseCountAggregateOutputType | null
    _avg: LeaseAvgAggregateOutputType | null
    _sum: LeaseSumAggregateOutputType | null
    _min: LeaseMinAggregateOutputType | null
    _max: LeaseMaxAggregateOutputType | null
  }

  export type LeaseAvgAggregateOutputType = {
    monthlyRent: Decimal | null
    securityDeposit: Decimal | null
    lateFeeDays: number | null
    lateFeeAmount: Decimal | null
  }

  export type LeaseSumAggregateOutputType = {
    monthlyRent: Decimal | null
    securityDeposit: Decimal | null
    lateFeeDays: number | null
    lateFeeAmount: Decimal | null
  }

  export type LeaseMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    unitId: string | null
    startDate: Date | null
    endDate: Date | null
    monthlyRent: Decimal | null
    securityDeposit: Decimal | null
    lateFeeDays: number | null
    lateFeeAmount: Decimal | null
    terms: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeaseMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    unitId: string | null
    startDate: Date | null
    endDate: Date | null
    monthlyRent: Decimal | null
    securityDeposit: Decimal | null
    lateFeeDays: number | null
    lateFeeAmount: Decimal | null
    terms: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeaseCountAggregateOutputType = {
    id: number
    tenantId: number
    unitId: number
    startDate: number
    endDate: number
    monthlyRent: number
    securityDeposit: number
    lateFeeDays: number
    lateFeeAmount: number
    terms: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LeaseAvgAggregateInputType = {
    monthlyRent?: true
    securityDeposit?: true
    lateFeeDays?: true
    lateFeeAmount?: true
  }

  export type LeaseSumAggregateInputType = {
    monthlyRent?: true
    securityDeposit?: true
    lateFeeDays?: true
    lateFeeAmount?: true
  }

  export type LeaseMinAggregateInputType = {
    id?: true
    tenantId?: true
    unitId?: true
    startDate?: true
    endDate?: true
    monthlyRent?: true
    securityDeposit?: true
    lateFeeDays?: true
    lateFeeAmount?: true
    terms?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeaseMaxAggregateInputType = {
    id?: true
    tenantId?: true
    unitId?: true
    startDate?: true
    endDate?: true
    monthlyRent?: true
    securityDeposit?: true
    lateFeeDays?: true
    lateFeeAmount?: true
    terms?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeaseCountAggregateInputType = {
    id?: true
    tenantId?: true
    unitId?: true
    startDate?: true
    endDate?: true
    monthlyRent?: true
    securityDeposit?: true
    lateFeeDays?: true
    lateFeeAmount?: true
    terms?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LeaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lease to aggregate.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leases
    **/
    _count?: true | LeaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaseMaxAggregateInputType
  }

  export type GetLeaseAggregateType<T extends LeaseAggregateArgs> = {
        [P in keyof T & keyof AggregateLease]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLease[P]>
      : GetScalarType<T[P], AggregateLease[P]>
  }




  export type LeaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseWhereInput
    orderBy?: LeaseOrderByWithAggregationInput | LeaseOrderByWithAggregationInput[]
    by: LeaseScalarFieldEnum[] | LeaseScalarFieldEnum
    having?: LeaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaseCountAggregateInputType | true
    _avg?: LeaseAvgAggregateInputType
    _sum?: LeaseSumAggregateInputType
    _min?: LeaseMinAggregateInputType
    _max?: LeaseMaxAggregateInputType
  }

  export type LeaseGroupByOutputType = {
    id: string
    tenantId: string
    unitId: string
    startDate: Date
    endDate: Date
    monthlyRent: Decimal
    securityDeposit: Decimal
    lateFeeDays: number
    lateFeeAmount: Decimal
    terms: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: LeaseCountAggregateOutputType | null
    _avg: LeaseAvgAggregateOutputType | null
    _sum: LeaseSumAggregateOutputType | null
    _min: LeaseMinAggregateOutputType | null
    _max: LeaseMaxAggregateOutputType | null
  }

  type GetLeaseGroupByPayload<T extends LeaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaseGroupByOutputType[P]>
            : GetScalarType<T[P], LeaseGroupByOutputType[P]>
        }
      >
    >


  export type LeaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    unitId?: boolean
    startDate?: boolean
    endDate?: boolean
    monthlyRent?: boolean
    securityDeposit?: boolean
    lateFeeDays?: boolean
    lateFeeAmount?: boolean
    terms?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    payments?: boolean | Lease$paymentsArgs<ExtArgs>
    _count?: boolean | LeaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lease"]>

  export type LeaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    unitId?: boolean
    startDate?: boolean
    endDate?: boolean
    monthlyRent?: boolean
    securityDeposit?: boolean
    lateFeeDays?: boolean
    lateFeeAmount?: boolean
    terms?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lease"]>

  export type LeaseSelectScalar = {
    id?: boolean
    tenantId?: boolean
    unitId?: boolean
    startDate?: boolean
    endDate?: boolean
    monthlyRent?: boolean
    securityDeposit?: boolean
    lateFeeDays?: boolean
    lateFeeAmount?: boolean
    terms?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LeaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    payments?: boolean | Lease$paymentsArgs<ExtArgs>
    _count?: boolean | LeaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LeaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }

  export type $LeasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lease"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      unit: Prisma.$UnitPayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      unitId: string
      startDate: Date
      endDate: Date
      monthlyRent: Prisma.Decimal
      securityDeposit: Prisma.Decimal
      lateFeeDays: number
      lateFeeAmount: Prisma.Decimal
      terms: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lease"]>
    composites: {}
  }

  type LeaseGetPayload<S extends boolean | null | undefined | LeaseDefaultArgs> = $Result.GetResult<Prisma.$LeasePayload, S>

  type LeaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LeaseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LeaseCountAggregateInputType | true
    }

  export interface LeaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lease'], meta: { name: 'Lease' } }
    /**
     * Find zero or one Lease that matches the filter.
     * @param {LeaseFindUniqueArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaseFindUniqueArgs>(args: SelectSubset<T, LeaseFindUniqueArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Lease that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LeaseFindUniqueOrThrowArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaseFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Lease that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFindFirstArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaseFindFirstArgs>(args?: SelectSubset<T, LeaseFindFirstArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Lease that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFindFirstOrThrowArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaseFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Leases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leases
     * const leases = await prisma.lease.findMany()
     * 
     * // Get first 10 Leases
     * const leases = await prisma.lease.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaseWithIdOnly = await prisma.lease.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaseFindManyArgs>(args?: SelectSubset<T, LeaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Lease.
     * @param {LeaseCreateArgs} args - Arguments to create a Lease.
     * @example
     * // Create one Lease
     * const Lease = await prisma.lease.create({
     *   data: {
     *     // ... data to create a Lease
     *   }
     * })
     * 
     */
    create<T extends LeaseCreateArgs>(args: SelectSubset<T, LeaseCreateArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Leases.
     * @param {LeaseCreateManyArgs} args - Arguments to create many Leases.
     * @example
     * // Create many Leases
     * const lease = await prisma.lease.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaseCreateManyArgs>(args?: SelectSubset<T, LeaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leases and returns the data saved in the database.
     * @param {LeaseCreateManyAndReturnArgs} args - Arguments to create many Leases.
     * @example
     * // Create many Leases
     * const lease = await prisma.lease.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leases and only return the `id`
     * const leaseWithIdOnly = await prisma.lease.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaseCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Lease.
     * @param {LeaseDeleteArgs} args - Arguments to delete one Lease.
     * @example
     * // Delete one Lease
     * const Lease = await prisma.lease.delete({
     *   where: {
     *     // ... filter to delete one Lease
     *   }
     * })
     * 
     */
    delete<T extends LeaseDeleteArgs>(args: SelectSubset<T, LeaseDeleteArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Lease.
     * @param {LeaseUpdateArgs} args - Arguments to update one Lease.
     * @example
     * // Update one Lease
     * const lease = await prisma.lease.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaseUpdateArgs>(args: SelectSubset<T, LeaseUpdateArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Leases.
     * @param {LeaseDeleteManyArgs} args - Arguments to filter Leases to delete.
     * @example
     * // Delete a few Leases
     * const { count } = await prisma.lease.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaseDeleteManyArgs>(args?: SelectSubset<T, LeaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leases
     * const lease = await prisma.lease.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaseUpdateManyArgs>(args: SelectSubset<T, LeaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lease.
     * @param {LeaseUpsertArgs} args - Arguments to update or create a Lease.
     * @example
     * // Update or create a Lease
     * const lease = await prisma.lease.upsert({
     *   create: {
     *     // ... data to create a Lease
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lease we want to update
     *   }
     * })
     */
    upsert<T extends LeaseUpsertArgs>(args: SelectSubset<T, LeaseUpsertArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Leases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseCountArgs} args - Arguments to filter Leases to count.
     * @example
     * // Count the number of Leases
     * const count = await prisma.lease.count({
     *   where: {
     *     // ... the filter for the Leases we want to count
     *   }
     * })
    **/
    count<T extends LeaseCountArgs>(
      args?: Subset<T, LeaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeaseAggregateArgs>(args: Subset<T, LeaseAggregateArgs>): Prisma.PrismaPromise<GetLeaseAggregateType<T>>

    /**
     * Group by Lease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaseGroupByArgs['orderBy'] }
        : { orderBy?: LeaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lease model
   */
  readonly fields: LeaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lease.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    unit<T extends UnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnitDefaultArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    payments<T extends Lease$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Lease$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lease model
   */ 
  interface LeaseFieldRefs {
    readonly id: FieldRef<"Lease", 'String'>
    readonly tenantId: FieldRef<"Lease", 'String'>
    readonly unitId: FieldRef<"Lease", 'String'>
    readonly startDate: FieldRef<"Lease", 'DateTime'>
    readonly endDate: FieldRef<"Lease", 'DateTime'>
    readonly monthlyRent: FieldRef<"Lease", 'Decimal'>
    readonly securityDeposit: FieldRef<"Lease", 'Decimal'>
    readonly lateFeeDays: FieldRef<"Lease", 'Int'>
    readonly lateFeeAmount: FieldRef<"Lease", 'Decimal'>
    readonly terms: FieldRef<"Lease", 'String'>
    readonly isActive: FieldRef<"Lease", 'Boolean'>
    readonly createdAt: FieldRef<"Lease", 'DateTime'>
    readonly updatedAt: FieldRef<"Lease", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lease findUnique
   */
  export type LeaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease findUniqueOrThrow
   */
  export type LeaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease findFirst
   */
  export type LeaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leases.
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leases.
     */
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Lease findFirstOrThrow
   */
  export type LeaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leases.
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leases.
     */
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Lease findMany
   */
  export type LeaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Leases to fetch.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leases.
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leases.
     */
    skip?: number
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Lease create
   */
  export type LeaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Lease.
     */
    data: XOR<LeaseCreateInput, LeaseUncheckedCreateInput>
  }

  /**
   * Lease createMany
   */
  export type LeaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leases.
     */
    data: LeaseCreateManyInput | LeaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lease createManyAndReturn
   */
  export type LeaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Leases.
     */
    data: LeaseCreateManyInput | LeaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lease update
   */
  export type LeaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Lease.
     */
    data: XOR<LeaseUpdateInput, LeaseUncheckedUpdateInput>
    /**
     * Choose, which Lease to update.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease updateMany
   */
  export type LeaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leases.
     */
    data: XOR<LeaseUpdateManyMutationInput, LeaseUncheckedUpdateManyInput>
    /**
     * Filter which Leases to update
     */
    where?: LeaseWhereInput
  }

  /**
   * Lease upsert
   */
  export type LeaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Lease to update in case it exists.
     */
    where: LeaseWhereUniqueInput
    /**
     * In case the Lease found by the `where` argument doesn't exist, create a new Lease with this data.
     */
    create: XOR<LeaseCreateInput, LeaseUncheckedCreateInput>
    /**
     * In case the Lease was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaseUpdateInput, LeaseUncheckedUpdateInput>
  }

  /**
   * Lease delete
   */
  export type LeaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter which Lease to delete.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease deleteMany
   */
  export type LeaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leases to delete
     */
    where?: LeaseWhereInput
  }

  /**
   * Lease.payments
   */
  export type Lease$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Lease without action
   */
  export type LeaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
  }


  /**
   * Model Vendor
   */

  export type AggregateVendor = {
    _count: VendorCountAggregateOutputType | null
    _avg: VendorAvgAggregateOutputType | null
    _sum: VendorSumAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  export type VendorAvgAggregateOutputType = {
    serviceRadius: number | null
    hourlyRate: Decimal | null
    rating: Decimal | null
    completedJobs: number | null
  }

  export type VendorSumAggregateOutputType = {
    serviceRadius: number | null
    hourlyRate: Decimal | null
    rating: Decimal | null
    completedJobs: number | null
  }

  export type VendorMinAggregateOutputType = {
    id: string | null
    userId: string | null
    businessName: string | null
    businessLicense: string | null
    serviceRadius: number | null
    hourlyRate: Decimal | null
    rating: Decimal | null
    completedJobs: number | null
    isVerified: boolean | null
    organizationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VendorMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    businessName: string | null
    businessLicense: string | null
    serviceRadius: number | null
    hourlyRate: Decimal | null
    rating: Decimal | null
    completedJobs: number | null
    isVerified: boolean | null
    organizationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VendorCountAggregateOutputType = {
    id: number
    userId: number
    businessName: number
    businessLicense: number
    specialties: number
    serviceRadius: number
    hourlyRate: number
    rating: number
    completedJobs: number
    isVerified: number
    availability: number
    organizationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VendorAvgAggregateInputType = {
    serviceRadius?: true
    hourlyRate?: true
    rating?: true
    completedJobs?: true
  }

  export type VendorSumAggregateInputType = {
    serviceRadius?: true
    hourlyRate?: true
    rating?: true
    completedJobs?: true
  }

  export type VendorMinAggregateInputType = {
    id?: true
    userId?: true
    businessName?: true
    businessLicense?: true
    serviceRadius?: true
    hourlyRate?: true
    rating?: true
    completedJobs?: true
    isVerified?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VendorMaxAggregateInputType = {
    id?: true
    userId?: true
    businessName?: true
    businessLicense?: true
    serviceRadius?: true
    hourlyRate?: true
    rating?: true
    completedJobs?: true
    isVerified?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VendorCountAggregateInputType = {
    id?: true
    userId?: true
    businessName?: true
    businessLicense?: true
    specialties?: true
    serviceRadius?: true
    hourlyRate?: true
    rating?: true
    completedJobs?: true
    isVerified?: true
    availability?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VendorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendor to aggregate.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vendors
    **/
    _count?: true | VendorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VendorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VendorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorMaxAggregateInputType
  }

  export type GetVendorAggregateType<T extends VendorAggregateArgs> = {
        [P in keyof T & keyof AggregateVendor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendor[P]>
      : GetScalarType<T[P], AggregateVendor[P]>
  }




  export type VendorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorWhereInput
    orderBy?: VendorOrderByWithAggregationInput | VendorOrderByWithAggregationInput[]
    by: VendorScalarFieldEnum[] | VendorScalarFieldEnum
    having?: VendorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorCountAggregateInputType | true
    _avg?: VendorAvgAggregateInputType
    _sum?: VendorSumAggregateInputType
    _min?: VendorMinAggregateInputType
    _max?: VendorMaxAggregateInputType
  }

  export type VendorGroupByOutputType = {
    id: string
    userId: string
    businessName: string
    businessLicense: string | null
    specialties: string[]
    serviceRadius: number | null
    hourlyRate: Decimal | null
    rating: Decimal | null
    completedJobs: number
    isVerified: boolean
    availability: JsonValue | null
    organizationId: string
    createdAt: Date
    updatedAt: Date
    _count: VendorCountAggregateOutputType | null
    _avg: VendorAvgAggregateOutputType | null
    _sum: VendorSumAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  type GetVendorGroupByPayload<T extends VendorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorGroupByOutputType[P]>
            : GetScalarType<T[P], VendorGroupByOutputType[P]>
        }
      >
    >


  export type VendorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    businessName?: boolean
    businessLicense?: boolean
    specialties?: boolean
    serviceRadius?: boolean
    hourlyRate?: boolean
    rating?: boolean
    completedJobs?: boolean
    isVerified?: boolean
    availability?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    maintenanceRequests?: boolean | Vendor$maintenanceRequestsArgs<ExtArgs>
    payments?: boolean | Vendor$paymentsArgs<ExtArgs>
    _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    businessName?: boolean
    businessLicense?: boolean
    specialties?: boolean
    serviceRadius?: boolean
    hourlyRate?: boolean
    rating?: boolean
    completedJobs?: boolean
    isVerified?: boolean
    availability?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectScalar = {
    id?: boolean
    userId?: boolean
    businessName?: boolean
    businessLicense?: boolean
    specialties?: boolean
    serviceRadius?: boolean
    hourlyRate?: boolean
    rating?: boolean
    completedJobs?: boolean
    isVerified?: boolean
    availability?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VendorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    maintenanceRequests?: boolean | Vendor$maintenanceRequestsArgs<ExtArgs>
    payments?: boolean | Vendor$paymentsArgs<ExtArgs>
    _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VendorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $VendorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vendor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      organization: Prisma.$OrganizationPayload<ExtArgs>
      maintenanceRequests: Prisma.$MaintenanceRequestPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      businessName: string
      businessLicense: string | null
      specialties: string[]
      serviceRadius: number | null
      hourlyRate: Prisma.Decimal | null
      rating: Prisma.Decimal | null
      completedJobs: number
      isVerified: boolean
      availability: Prisma.JsonValue | null
      organizationId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vendor"]>
    composites: {}
  }

  type VendorGetPayload<S extends boolean | null | undefined | VendorDefaultArgs> = $Result.GetResult<Prisma.$VendorPayload, S>

  type VendorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VendorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VendorCountAggregateInputType | true
    }

  export interface VendorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vendor'], meta: { name: 'Vendor' } }
    /**
     * Find zero or one Vendor that matches the filter.
     * @param {VendorFindUniqueArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendorFindUniqueArgs>(args: SelectSubset<T, VendorFindUniqueArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Vendor that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VendorFindUniqueOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendorFindUniqueOrThrowArgs>(args: SelectSubset<T, VendorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Vendor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendorFindFirstArgs>(args?: SelectSubset<T, VendorFindFirstArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Vendor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendorFindFirstOrThrowArgs>(args?: SelectSubset<T, VendorFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Vendors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendors
     * const vendors = await prisma.vendor.findMany()
     * 
     * // Get first 10 Vendors
     * const vendors = await prisma.vendor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorWithIdOnly = await prisma.vendor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VendorFindManyArgs>(args?: SelectSubset<T, VendorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Vendor.
     * @param {VendorCreateArgs} args - Arguments to create a Vendor.
     * @example
     * // Create one Vendor
     * const Vendor = await prisma.vendor.create({
     *   data: {
     *     // ... data to create a Vendor
     *   }
     * })
     * 
     */
    create<T extends VendorCreateArgs>(args: SelectSubset<T, VendorCreateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Vendors.
     * @param {VendorCreateManyArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendor = await prisma.vendor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendorCreateManyArgs>(args?: SelectSubset<T, VendorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vendors and returns the data saved in the database.
     * @param {VendorCreateManyAndReturnArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendor = await prisma.vendor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vendors and only return the `id`
     * const vendorWithIdOnly = await prisma.vendor.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VendorCreateManyAndReturnArgs>(args?: SelectSubset<T, VendorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Vendor.
     * @param {VendorDeleteArgs} args - Arguments to delete one Vendor.
     * @example
     * // Delete one Vendor
     * const Vendor = await prisma.vendor.delete({
     *   where: {
     *     // ... filter to delete one Vendor
     *   }
     * })
     * 
     */
    delete<T extends VendorDeleteArgs>(args: SelectSubset<T, VendorDeleteArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Vendor.
     * @param {VendorUpdateArgs} args - Arguments to update one Vendor.
     * @example
     * // Update one Vendor
     * const vendor = await prisma.vendor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendorUpdateArgs>(args: SelectSubset<T, VendorUpdateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Vendors.
     * @param {VendorDeleteManyArgs} args - Arguments to filter Vendors to delete.
     * @example
     * // Delete a few Vendors
     * const { count } = await prisma.vendor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendorDeleteManyArgs>(args?: SelectSubset<T, VendorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendorUpdateManyArgs>(args: SelectSubset<T, VendorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vendor.
     * @param {VendorUpsertArgs} args - Arguments to update or create a Vendor.
     * @example
     * // Update or create a Vendor
     * const vendor = await prisma.vendor.upsert({
     *   create: {
     *     // ... data to create a Vendor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendor we want to update
     *   }
     * })
     */
    upsert<T extends VendorUpsertArgs>(args: SelectSubset<T, VendorUpsertArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorCountArgs} args - Arguments to filter Vendors to count.
     * @example
     * // Count the number of Vendors
     * const count = await prisma.vendor.count({
     *   where: {
     *     // ... the filter for the Vendors we want to count
     *   }
     * })
    **/
    count<T extends VendorCountArgs>(
      args?: Subset<T, VendorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VendorAggregateArgs>(args: Subset<T, VendorAggregateArgs>): Prisma.PrismaPromise<GetVendorAggregateType<T>>

    /**
     * Group by Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VendorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorGroupByArgs['orderBy'] }
        : { orderBy?: VendorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VendorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vendor model
   */
  readonly fields: VendorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vendor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    maintenanceRequests<T extends Vendor$maintenanceRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$maintenanceRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findMany"> | Null>
    payments<T extends Vendor$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vendor model
   */ 
  interface VendorFieldRefs {
    readonly id: FieldRef<"Vendor", 'String'>
    readonly userId: FieldRef<"Vendor", 'String'>
    readonly businessName: FieldRef<"Vendor", 'String'>
    readonly businessLicense: FieldRef<"Vendor", 'String'>
    readonly specialties: FieldRef<"Vendor", 'String[]'>
    readonly serviceRadius: FieldRef<"Vendor", 'Int'>
    readonly hourlyRate: FieldRef<"Vendor", 'Decimal'>
    readonly rating: FieldRef<"Vendor", 'Decimal'>
    readonly completedJobs: FieldRef<"Vendor", 'Int'>
    readonly isVerified: FieldRef<"Vendor", 'Boolean'>
    readonly availability: FieldRef<"Vendor", 'Json'>
    readonly organizationId: FieldRef<"Vendor", 'String'>
    readonly createdAt: FieldRef<"Vendor", 'DateTime'>
    readonly updatedAt: FieldRef<"Vendor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vendor findUnique
   */
  export type VendorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findUniqueOrThrow
   */
  export type VendorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findFirst
   */
  export type VendorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findFirstOrThrow
   */
  export type VendorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findMany
   */
  export type VendorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendors to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor create
   */
  export type VendorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The data needed to create a Vendor.
     */
    data: XOR<VendorCreateInput, VendorUncheckedCreateInput>
  }

  /**
   * Vendor createMany
   */
  export type VendorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vendors.
     */
    data: VendorCreateManyInput | VendorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vendor createManyAndReturn
   */
  export type VendorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Vendors.
     */
    data: VendorCreateManyInput | VendorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vendor update
   */
  export type VendorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The data needed to update a Vendor.
     */
    data: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
    /**
     * Choose, which Vendor to update.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor updateMany
   */
  export type VendorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vendors.
     */
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyInput>
    /**
     * Filter which Vendors to update
     */
    where?: VendorWhereInput
  }

  /**
   * Vendor upsert
   */
  export type VendorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The filter to search for the Vendor to update in case it exists.
     */
    where: VendorWhereUniqueInput
    /**
     * In case the Vendor found by the `where` argument doesn't exist, create a new Vendor with this data.
     */
    create: XOR<VendorCreateInput, VendorUncheckedCreateInput>
    /**
     * In case the Vendor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
  }

  /**
   * Vendor delete
   */
  export type VendorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter which Vendor to delete.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor deleteMany
   */
  export type VendorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendors to delete
     */
    where?: VendorWhereInput
  }

  /**
   * Vendor.maintenanceRequests
   */
  export type Vendor$maintenanceRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    where?: MaintenanceRequestWhereInput
    orderBy?: MaintenanceRequestOrderByWithRelationInput | MaintenanceRequestOrderByWithRelationInput[]
    cursor?: MaintenanceRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceRequestScalarFieldEnum | MaintenanceRequestScalarFieldEnum[]
  }

  /**
   * Vendor.payments
   */
  export type Vendor$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Vendor without action
   */
  export type VendorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
  }


  /**
   * Model MaintenanceRequest
   */

  export type AggregateMaintenanceRequest = {
    _count: MaintenanceRequestCountAggregateOutputType | null
    _avg: MaintenanceRequestAvgAggregateOutputType | null
    _sum: MaintenanceRequestSumAggregateOutputType | null
    _min: MaintenanceRequestMinAggregateOutputType | null
    _max: MaintenanceRequestMaxAggregateOutputType | null
  }

  export type MaintenanceRequestAvgAggregateOutputType = {
    estimatedCost: Decimal | null
    actualCost: Decimal | null
  }

  export type MaintenanceRequestSumAggregateOutputType = {
    estimatedCost: Decimal | null
    actualCost: Decimal | null
  }

  export type MaintenanceRequestMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    priority: $Enums.MaintenancePriority | null
    status: $Enums.MaintenanceStatus | null
    propertyId: string | null
    unitId: string | null
    tenantId: string | null
    assignedVendorId: string | null
    estimatedCost: Decimal | null
    actualCost: Decimal | null
    scheduledDate: Date | null
    completedDate: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaintenanceRequestMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    priority: $Enums.MaintenancePriority | null
    status: $Enums.MaintenanceStatus | null
    propertyId: string | null
    unitId: string | null
    tenantId: string | null
    assignedVendorId: string | null
    estimatedCost: Decimal | null
    actualCost: Decimal | null
    scheduledDate: Date | null
    completedDate: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaintenanceRequestCountAggregateOutputType = {
    id: number
    title: number
    description: number
    category: number
    priority: number
    status: number
    propertyId: number
    unitId: number
    tenantId: number
    assignedVendorId: number
    estimatedCost: number
    actualCost: number
    scheduledDate: number
    completedDate: number
    images: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MaintenanceRequestAvgAggregateInputType = {
    estimatedCost?: true
    actualCost?: true
  }

  export type MaintenanceRequestSumAggregateInputType = {
    estimatedCost?: true
    actualCost?: true
  }

  export type MaintenanceRequestMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    priority?: true
    status?: true
    propertyId?: true
    unitId?: true
    tenantId?: true
    assignedVendorId?: true
    estimatedCost?: true
    actualCost?: true
    scheduledDate?: true
    completedDate?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaintenanceRequestMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    priority?: true
    status?: true
    propertyId?: true
    unitId?: true
    tenantId?: true
    assignedVendorId?: true
    estimatedCost?: true
    actualCost?: true
    scheduledDate?: true
    completedDate?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaintenanceRequestCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    priority?: true
    status?: true
    propertyId?: true
    unitId?: true
    tenantId?: true
    assignedVendorId?: true
    estimatedCost?: true
    actualCost?: true
    scheduledDate?: true
    completedDate?: true
    images?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MaintenanceRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceRequest to aggregate.
     */
    where?: MaintenanceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceRequests to fetch.
     */
    orderBy?: MaintenanceRequestOrderByWithRelationInput | MaintenanceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaintenanceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaintenanceRequests
    **/
    _count?: true | MaintenanceRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaintenanceRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaintenanceRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintenanceRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintenanceRequestMaxAggregateInputType
  }

  export type GetMaintenanceRequestAggregateType<T extends MaintenanceRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenanceRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenanceRequest[P]>
      : GetScalarType<T[P], AggregateMaintenanceRequest[P]>
  }




  export type MaintenanceRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceRequestWhereInput
    orderBy?: MaintenanceRequestOrderByWithAggregationInput | MaintenanceRequestOrderByWithAggregationInput[]
    by: MaintenanceRequestScalarFieldEnum[] | MaintenanceRequestScalarFieldEnum
    having?: MaintenanceRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenanceRequestCountAggregateInputType | true
    _avg?: MaintenanceRequestAvgAggregateInputType
    _sum?: MaintenanceRequestSumAggregateInputType
    _min?: MaintenanceRequestMinAggregateInputType
    _max?: MaintenanceRequestMaxAggregateInputType
  }

  export type MaintenanceRequestGroupByOutputType = {
    id: string
    title: string
    description: string
    category: string
    priority: $Enums.MaintenancePriority
    status: $Enums.MaintenanceStatus
    propertyId: string
    unitId: string | null
    tenantId: string
    assignedVendorId: string | null
    estimatedCost: Decimal | null
    actualCost: Decimal | null
    scheduledDate: Date | null
    completedDate: Date | null
    images: string[]
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: MaintenanceRequestCountAggregateOutputType | null
    _avg: MaintenanceRequestAvgAggregateOutputType | null
    _sum: MaintenanceRequestSumAggregateOutputType | null
    _min: MaintenanceRequestMinAggregateOutputType | null
    _max: MaintenanceRequestMaxAggregateOutputType | null
  }

  type GetMaintenanceRequestGroupByPayload<T extends MaintenanceRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenanceRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintenanceRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintenanceRequestGroupByOutputType[P]>
            : GetScalarType<T[P], MaintenanceRequestGroupByOutputType[P]>
        }
      >
    >


  export type MaintenanceRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    propertyId?: boolean
    unitId?: boolean
    tenantId?: boolean
    assignedVendorId?: boolean
    estimatedCost?: boolean
    actualCost?: boolean
    scheduledDate?: boolean
    completedDate?: boolean
    images?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    unit?: boolean | MaintenanceRequest$unitArgs<ExtArgs>
    tenant?: boolean | UserDefaultArgs<ExtArgs>
    assignedVendor?: boolean | MaintenanceRequest$assignedVendorArgs<ExtArgs>
    payments?: boolean | MaintenanceRequest$paymentsArgs<ExtArgs>
    _count?: boolean | MaintenanceRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceRequest"]>

  export type MaintenanceRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    propertyId?: boolean
    unitId?: boolean
    tenantId?: boolean
    assignedVendorId?: boolean
    estimatedCost?: boolean
    actualCost?: boolean
    scheduledDate?: boolean
    completedDate?: boolean
    images?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    unit?: boolean | MaintenanceRequest$unitArgs<ExtArgs>
    tenant?: boolean | UserDefaultArgs<ExtArgs>
    assignedVendor?: boolean | MaintenanceRequest$assignedVendorArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceRequest"]>

  export type MaintenanceRequestSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    propertyId?: boolean
    unitId?: boolean
    tenantId?: boolean
    assignedVendorId?: boolean
    estimatedCost?: boolean
    actualCost?: boolean
    scheduledDate?: boolean
    completedDate?: boolean
    images?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MaintenanceRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    unit?: boolean | MaintenanceRequest$unitArgs<ExtArgs>
    tenant?: boolean | UserDefaultArgs<ExtArgs>
    assignedVendor?: boolean | MaintenanceRequest$assignedVendorArgs<ExtArgs>
    payments?: boolean | MaintenanceRequest$paymentsArgs<ExtArgs>
    _count?: boolean | MaintenanceRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MaintenanceRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    unit?: boolean | MaintenanceRequest$unitArgs<ExtArgs>
    tenant?: boolean | UserDefaultArgs<ExtArgs>
    assignedVendor?: boolean | MaintenanceRequest$assignedVendorArgs<ExtArgs>
  }

  export type $MaintenanceRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaintenanceRequest"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
      unit: Prisma.$UnitPayload<ExtArgs> | null
      tenant: Prisma.$UserPayload<ExtArgs>
      assignedVendor: Prisma.$VendorPayload<ExtArgs> | null
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      category: string
      priority: $Enums.MaintenancePriority
      status: $Enums.MaintenanceStatus
      propertyId: string
      unitId: string | null
      tenantId: string
      assignedVendorId: string | null
      estimatedCost: Prisma.Decimal | null
      actualCost: Prisma.Decimal | null
      scheduledDate: Date | null
      completedDate: Date | null
      images: string[]
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["maintenanceRequest"]>
    composites: {}
  }

  type MaintenanceRequestGetPayload<S extends boolean | null | undefined | MaintenanceRequestDefaultArgs> = $Result.GetResult<Prisma.$MaintenanceRequestPayload, S>

  type MaintenanceRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MaintenanceRequestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MaintenanceRequestCountAggregateInputType | true
    }

  export interface MaintenanceRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaintenanceRequest'], meta: { name: 'MaintenanceRequest' } }
    /**
     * Find zero or one MaintenanceRequest that matches the filter.
     * @param {MaintenanceRequestFindUniqueArgs} args - Arguments to find a MaintenanceRequest
     * @example
     * // Get one MaintenanceRequest
     * const maintenanceRequest = await prisma.maintenanceRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaintenanceRequestFindUniqueArgs>(args: SelectSubset<T, MaintenanceRequestFindUniqueArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MaintenanceRequest that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MaintenanceRequestFindUniqueOrThrowArgs} args - Arguments to find a MaintenanceRequest
     * @example
     * // Get one MaintenanceRequest
     * const maintenanceRequest = await prisma.maintenanceRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaintenanceRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, MaintenanceRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MaintenanceRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestFindFirstArgs} args - Arguments to find a MaintenanceRequest
     * @example
     * // Get one MaintenanceRequest
     * const maintenanceRequest = await prisma.maintenanceRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaintenanceRequestFindFirstArgs>(args?: SelectSubset<T, MaintenanceRequestFindFirstArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MaintenanceRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestFindFirstOrThrowArgs} args - Arguments to find a MaintenanceRequest
     * @example
     * // Get one MaintenanceRequest
     * const maintenanceRequest = await prisma.maintenanceRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaintenanceRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, MaintenanceRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MaintenanceRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaintenanceRequests
     * const maintenanceRequests = await prisma.maintenanceRequest.findMany()
     * 
     * // Get first 10 MaintenanceRequests
     * const maintenanceRequests = await prisma.maintenanceRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenanceRequestWithIdOnly = await prisma.maintenanceRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaintenanceRequestFindManyArgs>(args?: SelectSubset<T, MaintenanceRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MaintenanceRequest.
     * @param {MaintenanceRequestCreateArgs} args - Arguments to create a MaintenanceRequest.
     * @example
     * // Create one MaintenanceRequest
     * const MaintenanceRequest = await prisma.maintenanceRequest.create({
     *   data: {
     *     // ... data to create a MaintenanceRequest
     *   }
     * })
     * 
     */
    create<T extends MaintenanceRequestCreateArgs>(args: SelectSubset<T, MaintenanceRequestCreateArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MaintenanceRequests.
     * @param {MaintenanceRequestCreateManyArgs} args - Arguments to create many MaintenanceRequests.
     * @example
     * // Create many MaintenanceRequests
     * const maintenanceRequest = await prisma.maintenanceRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaintenanceRequestCreateManyArgs>(args?: SelectSubset<T, MaintenanceRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MaintenanceRequests and returns the data saved in the database.
     * @param {MaintenanceRequestCreateManyAndReturnArgs} args - Arguments to create many MaintenanceRequests.
     * @example
     * // Create many MaintenanceRequests
     * const maintenanceRequest = await prisma.maintenanceRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MaintenanceRequests and only return the `id`
     * const maintenanceRequestWithIdOnly = await prisma.maintenanceRequest.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaintenanceRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, MaintenanceRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MaintenanceRequest.
     * @param {MaintenanceRequestDeleteArgs} args - Arguments to delete one MaintenanceRequest.
     * @example
     * // Delete one MaintenanceRequest
     * const MaintenanceRequest = await prisma.maintenanceRequest.delete({
     *   where: {
     *     // ... filter to delete one MaintenanceRequest
     *   }
     * })
     * 
     */
    delete<T extends MaintenanceRequestDeleteArgs>(args: SelectSubset<T, MaintenanceRequestDeleteArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MaintenanceRequest.
     * @param {MaintenanceRequestUpdateArgs} args - Arguments to update one MaintenanceRequest.
     * @example
     * // Update one MaintenanceRequest
     * const maintenanceRequest = await prisma.maintenanceRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaintenanceRequestUpdateArgs>(args: SelectSubset<T, MaintenanceRequestUpdateArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MaintenanceRequests.
     * @param {MaintenanceRequestDeleteManyArgs} args - Arguments to filter MaintenanceRequests to delete.
     * @example
     * // Delete a few MaintenanceRequests
     * const { count } = await prisma.maintenanceRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaintenanceRequestDeleteManyArgs>(args?: SelectSubset<T, MaintenanceRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaintenanceRequests
     * const maintenanceRequest = await prisma.maintenanceRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaintenanceRequestUpdateManyArgs>(args: SelectSubset<T, MaintenanceRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MaintenanceRequest.
     * @param {MaintenanceRequestUpsertArgs} args - Arguments to update or create a MaintenanceRequest.
     * @example
     * // Update or create a MaintenanceRequest
     * const maintenanceRequest = await prisma.maintenanceRequest.upsert({
     *   create: {
     *     // ... data to create a MaintenanceRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaintenanceRequest we want to update
     *   }
     * })
     */
    upsert<T extends MaintenanceRequestUpsertArgs>(args: SelectSubset<T, MaintenanceRequestUpsertArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MaintenanceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestCountArgs} args - Arguments to filter MaintenanceRequests to count.
     * @example
     * // Count the number of MaintenanceRequests
     * const count = await prisma.maintenanceRequest.count({
     *   where: {
     *     // ... the filter for the MaintenanceRequests we want to count
     *   }
     * })
    **/
    count<T extends MaintenanceRequestCountArgs>(
      args?: Subset<T, MaintenanceRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenanceRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaintenanceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaintenanceRequestAggregateArgs>(args: Subset<T, MaintenanceRequestAggregateArgs>): Prisma.PrismaPromise<GetMaintenanceRequestAggregateType<T>>

    /**
     * Group by MaintenanceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MaintenanceRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaintenanceRequestGroupByArgs['orderBy'] }
        : { orderBy?: MaintenanceRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MaintenanceRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenanceRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaintenanceRequest model
   */
  readonly fields: MaintenanceRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaintenanceRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaintenanceRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    unit<T extends MaintenanceRequest$unitArgs<ExtArgs> = {}>(args?: Subset<T, MaintenanceRequest$unitArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    tenant<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    assignedVendor<T extends MaintenanceRequest$assignedVendorArgs<ExtArgs> = {}>(args?: Subset<T, MaintenanceRequest$assignedVendorArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    payments<T extends MaintenanceRequest$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, MaintenanceRequest$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MaintenanceRequest model
   */ 
  interface MaintenanceRequestFieldRefs {
    readonly id: FieldRef<"MaintenanceRequest", 'String'>
    readonly title: FieldRef<"MaintenanceRequest", 'String'>
    readonly description: FieldRef<"MaintenanceRequest", 'String'>
    readonly category: FieldRef<"MaintenanceRequest", 'String'>
    readonly priority: FieldRef<"MaintenanceRequest", 'MaintenancePriority'>
    readonly status: FieldRef<"MaintenanceRequest", 'MaintenanceStatus'>
    readonly propertyId: FieldRef<"MaintenanceRequest", 'String'>
    readonly unitId: FieldRef<"MaintenanceRequest", 'String'>
    readonly tenantId: FieldRef<"MaintenanceRequest", 'String'>
    readonly assignedVendorId: FieldRef<"MaintenanceRequest", 'String'>
    readonly estimatedCost: FieldRef<"MaintenanceRequest", 'Decimal'>
    readonly actualCost: FieldRef<"MaintenanceRequest", 'Decimal'>
    readonly scheduledDate: FieldRef<"MaintenanceRequest", 'DateTime'>
    readonly completedDate: FieldRef<"MaintenanceRequest", 'DateTime'>
    readonly images: FieldRef<"MaintenanceRequest", 'String[]'>
    readonly notes: FieldRef<"MaintenanceRequest", 'String'>
    readonly createdAt: FieldRef<"MaintenanceRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"MaintenanceRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MaintenanceRequest findUnique
   */
  export type MaintenanceRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRequest to fetch.
     */
    where: MaintenanceRequestWhereUniqueInput
  }

  /**
   * MaintenanceRequest findUniqueOrThrow
   */
  export type MaintenanceRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRequest to fetch.
     */
    where: MaintenanceRequestWhereUniqueInput
  }

  /**
   * MaintenanceRequest findFirst
   */
  export type MaintenanceRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRequest to fetch.
     */
    where?: MaintenanceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceRequests to fetch.
     */
    orderBy?: MaintenanceRequestOrderByWithRelationInput | MaintenanceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceRequests.
     */
    cursor?: MaintenanceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceRequests.
     */
    distinct?: MaintenanceRequestScalarFieldEnum | MaintenanceRequestScalarFieldEnum[]
  }

  /**
   * MaintenanceRequest findFirstOrThrow
   */
  export type MaintenanceRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRequest to fetch.
     */
    where?: MaintenanceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceRequests to fetch.
     */
    orderBy?: MaintenanceRequestOrderByWithRelationInput | MaintenanceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceRequests.
     */
    cursor?: MaintenanceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceRequests.
     */
    distinct?: MaintenanceRequestScalarFieldEnum | MaintenanceRequestScalarFieldEnum[]
  }

  /**
   * MaintenanceRequest findMany
   */
  export type MaintenanceRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRequests to fetch.
     */
    where?: MaintenanceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceRequests to fetch.
     */
    orderBy?: MaintenanceRequestOrderByWithRelationInput | MaintenanceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaintenanceRequests.
     */
    cursor?: MaintenanceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceRequests.
     */
    skip?: number
    distinct?: MaintenanceRequestScalarFieldEnum | MaintenanceRequestScalarFieldEnum[]
  }

  /**
   * MaintenanceRequest create
   */
  export type MaintenanceRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a MaintenanceRequest.
     */
    data: XOR<MaintenanceRequestCreateInput, MaintenanceRequestUncheckedCreateInput>
  }

  /**
   * MaintenanceRequest createMany
   */
  export type MaintenanceRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaintenanceRequests.
     */
    data: MaintenanceRequestCreateManyInput | MaintenanceRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaintenanceRequest createManyAndReturn
   */
  export type MaintenanceRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MaintenanceRequests.
     */
    data: MaintenanceRequestCreateManyInput | MaintenanceRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaintenanceRequest update
   */
  export type MaintenanceRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a MaintenanceRequest.
     */
    data: XOR<MaintenanceRequestUpdateInput, MaintenanceRequestUncheckedUpdateInput>
    /**
     * Choose, which MaintenanceRequest to update.
     */
    where: MaintenanceRequestWhereUniqueInput
  }

  /**
   * MaintenanceRequest updateMany
   */
  export type MaintenanceRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaintenanceRequests.
     */
    data: XOR<MaintenanceRequestUpdateManyMutationInput, MaintenanceRequestUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceRequests to update
     */
    where?: MaintenanceRequestWhereInput
  }

  /**
   * MaintenanceRequest upsert
   */
  export type MaintenanceRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the MaintenanceRequest to update in case it exists.
     */
    where: MaintenanceRequestWhereUniqueInput
    /**
     * In case the MaintenanceRequest found by the `where` argument doesn't exist, create a new MaintenanceRequest with this data.
     */
    create: XOR<MaintenanceRequestCreateInput, MaintenanceRequestUncheckedCreateInput>
    /**
     * In case the MaintenanceRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaintenanceRequestUpdateInput, MaintenanceRequestUncheckedUpdateInput>
  }

  /**
   * MaintenanceRequest delete
   */
  export type MaintenanceRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * Filter which MaintenanceRequest to delete.
     */
    where: MaintenanceRequestWhereUniqueInput
  }

  /**
   * MaintenanceRequest deleteMany
   */
  export type MaintenanceRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceRequests to delete
     */
    where?: MaintenanceRequestWhereInput
  }

  /**
   * MaintenanceRequest.unit
   */
  export type MaintenanceRequest$unitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    where?: UnitWhereInput
  }

  /**
   * MaintenanceRequest.assignedVendor
   */
  export type MaintenanceRequest$assignedVendorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    where?: VendorWhereInput
  }

  /**
   * MaintenanceRequest.payments
   */
  export type MaintenanceRequest$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * MaintenanceRequest without action
   */
  export type MaintenanceRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null
    fees: Decimal | null
    lateFee: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null
    fees: Decimal | null
    lateFee: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    amount: Decimal | null
    type: $Enums.PaymentType | null
    status: $Enums.PaymentStatus | null
    method: string | null
    description: string | null
    dueDate: Date | null
    paidDate: Date | null
    propertyId: string | null
    leaseId: string | null
    tenantId: string | null
    vendorId: string | null
    maintenanceRequestId: string | null
    transactionId: string | null
    fees: Decimal | null
    lateFee: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    amount: Decimal | null
    type: $Enums.PaymentType | null
    status: $Enums.PaymentStatus | null
    method: string | null
    description: string | null
    dueDate: Date | null
    paidDate: Date | null
    propertyId: string | null
    leaseId: string | null
    tenantId: string | null
    vendorId: string | null
    maintenanceRequestId: string | null
    transactionId: string | null
    fees: Decimal | null
    lateFee: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    amount: number
    type: number
    status: number
    method: number
    description: number
    dueDate: number
    paidDate: number
    propertyId: number
    leaseId: number
    tenantId: number
    vendorId: number
    maintenanceRequestId: number
    transactionId: number
    fees: number
    lateFee: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
    fees?: true
    lateFee?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
    fees?: true
    lateFee?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    amount?: true
    type?: true
    status?: true
    method?: true
    description?: true
    dueDate?: true
    paidDate?: true
    propertyId?: true
    leaseId?: true
    tenantId?: true
    vendorId?: true
    maintenanceRequestId?: true
    transactionId?: true
    fees?: true
    lateFee?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    amount?: true
    type?: true
    status?: true
    method?: true
    description?: true
    dueDate?: true
    paidDate?: true
    propertyId?: true
    leaseId?: true
    tenantId?: true
    vendorId?: true
    maintenanceRequestId?: true
    transactionId?: true
    fees?: true
    lateFee?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    amount?: true
    type?: true
    status?: true
    method?: true
    description?: true
    dueDate?: true
    paidDate?: true
    propertyId?: true
    leaseId?: true
    tenantId?: true
    vendorId?: true
    maintenanceRequestId?: true
    transactionId?: true
    fees?: true
    lateFee?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    amount: Decimal
    type: $Enums.PaymentType
    status: $Enums.PaymentStatus
    method: string | null
    description: string
    dueDate: Date | null
    paidDate: Date | null
    propertyId: string | null
    leaseId: string | null
    tenantId: string | null
    vendorId: string | null
    maintenanceRequestId: string | null
    transactionId: string | null
    fees: Decimal | null
    lateFee: Decimal | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    type?: boolean
    status?: boolean
    method?: boolean
    description?: boolean
    dueDate?: boolean
    paidDate?: boolean
    propertyId?: boolean
    leaseId?: boolean
    tenantId?: boolean
    vendorId?: boolean
    maintenanceRequestId?: boolean
    transactionId?: boolean
    fees?: boolean
    lateFee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | Payment$propertyArgs<ExtArgs>
    lease?: boolean | Payment$leaseArgs<ExtArgs>
    tenant?: boolean | Payment$tenantArgs<ExtArgs>
    vendor?: boolean | Payment$vendorArgs<ExtArgs>
    maintenanceRequest?: boolean | Payment$maintenanceRequestArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    type?: boolean
    status?: boolean
    method?: boolean
    description?: boolean
    dueDate?: boolean
    paidDate?: boolean
    propertyId?: boolean
    leaseId?: boolean
    tenantId?: boolean
    vendorId?: boolean
    maintenanceRequestId?: boolean
    transactionId?: boolean
    fees?: boolean
    lateFee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | Payment$propertyArgs<ExtArgs>
    lease?: boolean | Payment$leaseArgs<ExtArgs>
    tenant?: boolean | Payment$tenantArgs<ExtArgs>
    vendor?: boolean | Payment$vendorArgs<ExtArgs>
    maintenanceRequest?: boolean | Payment$maintenanceRequestArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    amount?: boolean
    type?: boolean
    status?: boolean
    method?: boolean
    description?: boolean
    dueDate?: boolean
    paidDate?: boolean
    propertyId?: boolean
    leaseId?: boolean
    tenantId?: boolean
    vendorId?: boolean
    maintenanceRequestId?: boolean
    transactionId?: boolean
    fees?: boolean
    lateFee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | Payment$propertyArgs<ExtArgs>
    lease?: boolean | Payment$leaseArgs<ExtArgs>
    tenant?: boolean | Payment$tenantArgs<ExtArgs>
    vendor?: boolean | Payment$vendorArgs<ExtArgs>
    maintenanceRequest?: boolean | Payment$maintenanceRequestArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | Payment$propertyArgs<ExtArgs>
    lease?: boolean | Payment$leaseArgs<ExtArgs>
    tenant?: boolean | Payment$tenantArgs<ExtArgs>
    vendor?: boolean | Payment$vendorArgs<ExtArgs>
    maintenanceRequest?: boolean | Payment$maintenanceRequestArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs> | null
      lease: Prisma.$LeasePayload<ExtArgs> | null
      tenant: Prisma.$UserPayload<ExtArgs> | null
      vendor: Prisma.$VendorPayload<ExtArgs> | null
      maintenanceRequest: Prisma.$MaintenanceRequestPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: Prisma.Decimal
      type: $Enums.PaymentType
      status: $Enums.PaymentStatus
      method: string | null
      description: string
      dueDate: Date | null
      paidDate: Date | null
      propertyId: string | null
      leaseId: string | null
      tenantId: string | null
      vendorId: string | null
      maintenanceRequestId: string | null
      transactionId: string | null
      fees: Prisma.Decimal | null
      lateFee: Prisma.Decimal | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends Payment$propertyArgs<ExtArgs> = {}>(args?: Subset<T, Payment$propertyArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    lease<T extends Payment$leaseArgs<ExtArgs> = {}>(args?: Subset<T, Payment$leaseArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    tenant<T extends Payment$tenantArgs<ExtArgs> = {}>(args?: Subset<T, Payment$tenantArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    vendor<T extends Payment$vendorArgs<ExtArgs> = {}>(args?: Subset<T, Payment$vendorArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    maintenanceRequest<T extends Payment$maintenanceRequestArgs<ExtArgs> = {}>(args?: Subset<T, Payment$maintenanceRequestArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */ 
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly type: FieldRef<"Payment", 'PaymentType'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly method: FieldRef<"Payment", 'String'>
    readonly description: FieldRef<"Payment", 'String'>
    readonly dueDate: FieldRef<"Payment", 'DateTime'>
    readonly paidDate: FieldRef<"Payment", 'DateTime'>
    readonly propertyId: FieldRef<"Payment", 'String'>
    readonly leaseId: FieldRef<"Payment", 'String'>
    readonly tenantId: FieldRef<"Payment", 'String'>
    readonly vendorId: FieldRef<"Payment", 'String'>
    readonly maintenanceRequestId: FieldRef<"Payment", 'String'>
    readonly transactionId: FieldRef<"Payment", 'String'>
    readonly fees: FieldRef<"Payment", 'Decimal'>
    readonly lateFee: FieldRef<"Payment", 'Decimal'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment.property
   */
  export type Payment$propertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
  }

  /**
   * Payment.lease
   */
  export type Payment$leaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    where?: LeaseWhereInput
  }

  /**
   * Payment.tenant
   */
  export type Payment$tenantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Payment.vendor
   */
  export type Payment$vendorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    where?: VendorWhereInput
  }

  /**
   * Payment.maintenanceRequest
   */
  export type Payment$maintenanceRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    where?: MaintenanceRequestWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    senderId: string | null
    receiverId: string | null
    threadId: string | null
    isRead: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    senderId: string | null
    receiverId: string | null
    threadId: string | null
    isRead: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    senderId: number
    receiverId: number
    threadId: number
    isRead: number
    attachments: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    senderId?: true
    receiverId?: true
    threadId?: true
    isRead?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    senderId?: true
    receiverId?: true
    threadId?: true
    isRead?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    senderId?: true
    receiverId?: true
    threadId?: true
    isRead?: true
    attachments?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    content: string
    senderId: string
    receiverId: string | null
    threadId: string | null
    isRead: boolean
    attachments: string[]
    createdAt: Date
    updatedAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    senderId?: boolean
    receiverId?: boolean
    threadId?: boolean
    isRead?: boolean
    attachments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    senderId?: boolean
    receiverId?: boolean
    threadId?: boolean
    isRead?: boolean
    attachments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    senderId?: boolean
    receiverId?: boolean
    threadId?: boolean
    isRead?: boolean
    attachments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      senderId: string
      receiverId: string | null
      threadId: string | null
      isRead: boolean
      attachments: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */ 
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly receiverId: FieldRef<"Message", 'String'>
    readonly threadId: FieldRef<"Message", 'String'>
    readonly isRead: FieldRef<"Message", 'Boolean'>
    readonly attachments: FieldRef<"Message", 'String[]'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly updatedAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    entity: number
    entityId: number
    details: number
    ipAddress: number
    userAgent: number
    createdAt: number
    _all: number
  }


  export type ActivityLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    details?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: string
    userId: string
    action: string
    entity: string
    entityId: string
    details: JsonValue | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    details?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    details?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    details?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }


  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      action: string
      entity: string
      entityId: string
      details: Prisma.JsonValue | null
      ipAddress: string | null
      userAgent: string | null
      createdAt: Date
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {ActivityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActivityLog model
   */ 
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'String'>
    readonly userId: FieldRef<"ActivityLog", 'String'>
    readonly action: FieldRef<"ActivityLog", 'String'>
    readonly entity: FieldRef<"ActivityLog", 'String'>
    readonly entityId: FieldRef<"ActivityLog", 'String'>
    readonly details: FieldRef<"ActivityLog", 'Json'>
    readonly ipAddress: FieldRef<"ActivityLog", 'String'>
    readonly userAgent: FieldRef<"ActivityLog", 'String'>
    readonly createdAt: FieldRef<"ActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog createManyAndReturn
   */
  export type ActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    logo: 'logo',
    allowTenantRegistration: 'allowTenantRegistration',
    requireVendorApproval: 'requireVendorApproval',
    enableAutomatedPayments: 'enableAutomatedPayments',
    timezone: 'timezone',
    currency: 'currency',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    avatar: 'avatar',
    emailVerified: 'emailVerified',
    phone: 'phone',
    organizationId: 'organizationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode',
    type: 'type',
    description: 'description',
    totalUnits: 'totalUnits',
    yearBuilt: 'yearBuilt',
    squareFeet: 'squareFeet',
    amenities: 'amenities',
    images: 'images',
    organizationId: 'organizationId',
    managerId: 'managerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const UnitScalarFieldEnum: {
    id: 'id',
    number: 'number',
    floor: 'floor',
    bedrooms: 'bedrooms',
    bathrooms: 'bathrooms',
    squareFeet: 'squareFeet',
    monthlyRent: 'monthlyRent',
    securityDeposit: 'securityDeposit',
    isOccupied: 'isOccupied',
    features: 'features',
    propertyId: 'propertyId',
    currentLeaseId: 'currentLeaseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UnitScalarFieldEnum = (typeof UnitScalarFieldEnum)[keyof typeof UnitScalarFieldEnum]


  export const TenantScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    phone: 'phone',
    emergencyContact: 'emergencyContact',
    moveInDate: 'moveInDate',
    moveOutDate: 'moveOutDate',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const LeaseScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    unitId: 'unitId',
    startDate: 'startDate',
    endDate: 'endDate',
    monthlyRent: 'monthlyRent',
    securityDeposit: 'securityDeposit',
    lateFeeDays: 'lateFeeDays',
    lateFeeAmount: 'lateFeeAmount',
    terms: 'terms',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LeaseScalarFieldEnum = (typeof LeaseScalarFieldEnum)[keyof typeof LeaseScalarFieldEnum]


  export const VendorScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    businessName: 'businessName',
    businessLicense: 'businessLicense',
    specialties: 'specialties',
    serviceRadius: 'serviceRadius',
    hourlyRate: 'hourlyRate',
    rating: 'rating',
    completedJobs: 'completedJobs',
    isVerified: 'isVerified',
    availability: 'availability',
    organizationId: 'organizationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VendorScalarFieldEnum = (typeof VendorScalarFieldEnum)[keyof typeof VendorScalarFieldEnum]


  export const MaintenanceRequestScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    priority: 'priority',
    status: 'status',
    propertyId: 'propertyId',
    unitId: 'unitId',
    tenantId: 'tenantId',
    assignedVendorId: 'assignedVendorId',
    estimatedCost: 'estimatedCost',
    actualCost: 'actualCost',
    scheduledDate: 'scheduledDate',
    completedDate: 'completedDate',
    images: 'images',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MaintenanceRequestScalarFieldEnum = (typeof MaintenanceRequestScalarFieldEnum)[keyof typeof MaintenanceRequestScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    type: 'type',
    status: 'status',
    method: 'method',
    description: 'description',
    dueDate: 'dueDate',
    paidDate: 'paidDate',
    propertyId: 'propertyId',
    leaseId: 'leaseId',
    tenantId: 'tenantId',
    vendorId: 'vendorId',
    maintenanceRequestId: 'maintenanceRequestId',
    transactionId: 'transactionId',
    fees: 'fees',
    lateFee: 'lateFee',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    senderId: 'senderId',
    receiverId: 'receiverId',
    threadId: 'threadId',
    isRead: 'isRead',
    attachments: 'attachments',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    details: 'details',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'PropertyType'
   */
  export type EnumPropertyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyType'>
    


  /**
   * Reference to a field of type 'PropertyType[]'
   */
  export type ListEnumPropertyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'MaintenancePriority'
   */
  export type EnumMaintenancePriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaintenancePriority'>
    


  /**
   * Reference to a field of type 'MaintenancePriority[]'
   */
  export type ListEnumMaintenancePriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaintenancePriority[]'>
    


  /**
   * Reference to a field of type 'MaintenanceStatus'
   */
  export type EnumMaintenanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaintenanceStatus'>
    


  /**
   * Reference to a field of type 'MaintenanceStatus[]'
   */
  export type ListEnumMaintenanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaintenanceStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentType'
   */
  export type EnumPaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentType'>
    


  /**
   * Reference to a field of type 'PaymentType[]'
   */
  export type ListEnumPaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentType[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    type?: StringFilter<"Organization"> | string
    logo?: StringNullableFilter<"Organization"> | string | null
    allowTenantRegistration?: BoolFilter<"Organization"> | boolean
    requireVendorApproval?: BoolFilter<"Organization"> | boolean
    enableAutomatedPayments?: BoolFilter<"Organization"> | boolean
    timezone?: StringFilter<"Organization"> | string
    currency?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    users?: UserListRelationFilter
    properties?: PropertyListRelationFilter
    vendors?: VendorListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    logo?: SortOrderInput | SortOrder
    allowTenantRegistration?: SortOrder
    requireVendorApproval?: SortOrder
    enableAutomatedPayments?: SortOrder
    timezone?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    properties?: PropertyOrderByRelationAggregateInput
    vendors?: VendorOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    type?: StringFilter<"Organization"> | string
    logo?: StringNullableFilter<"Organization"> | string | null
    allowTenantRegistration?: BoolFilter<"Organization"> | boolean
    requireVendorApproval?: BoolFilter<"Organization"> | boolean
    enableAutomatedPayments?: BoolFilter<"Organization"> | boolean
    timezone?: StringFilter<"Organization"> | string
    currency?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    users?: UserListRelationFilter
    properties?: PropertyListRelationFilter
    vendors?: VendorListRelationFilter
  }, "id">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    logo?: SortOrderInput | SortOrder
    allowTenantRegistration?: SortOrder
    requireVendorApproval?: SortOrder
    enableAutomatedPayments?: SortOrder
    timezone?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    type?: StringWithAggregatesFilter<"Organization"> | string
    logo?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    allowTenantRegistration?: BoolWithAggregatesFilter<"Organization"> | boolean
    requireVendorApproval?: BoolWithAggregatesFilter<"Organization"> | boolean
    enableAutomatedPayments?: BoolWithAggregatesFilter<"Organization"> | boolean
    timezone?: StringWithAggregatesFilter<"Organization"> | string
    currency?: StringWithAggregatesFilter<"Organization"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    avatar?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    phone?: StringNullableFilter<"User"> | string | null
    organizationId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    tenantProfile?: XOR<TenantNullableRelationFilter, TenantWhereInput> | null
    vendorProfile?: XOR<VendorNullableRelationFilter, VendorWhereInput> | null
    maintenanceRequests?: MaintenanceRequestListRelationFilter
    payments?: PaymentListRelationFilter
    messages?: MessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    phone?: SortOrderInput | SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    tenantProfile?: TenantOrderByWithRelationInput
    vendorProfile?: VendorOrderByWithRelationInput
    maintenanceRequests?: MaintenanceRequestOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    avatar?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    phone?: StringNullableFilter<"User"> | string | null
    organizationId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    tenantProfile?: XOR<TenantNullableRelationFilter, TenantWhereInput> | null
    vendorProfile?: XOR<VendorNullableRelationFilter, VendorWhereInput> | null
    maintenanceRequests?: MaintenanceRequestListRelationFilter
    payments?: PaymentListRelationFilter
    messages?: MessageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    phone?: SortOrderInput | SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    organizationId?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: StringFilter<"Property"> | string
    name?: StringFilter<"Property"> | string
    address?: StringFilter<"Property"> | string
    city?: StringFilter<"Property"> | string
    state?: StringFilter<"Property"> | string
    zipCode?: StringFilter<"Property"> | string
    type?: EnumPropertyTypeFilter<"Property"> | $Enums.PropertyType
    description?: StringNullableFilter<"Property"> | string | null
    totalUnits?: IntFilter<"Property"> | number
    yearBuilt?: IntNullableFilter<"Property"> | number | null
    squareFeet?: IntNullableFilter<"Property"> | number | null
    amenities?: StringNullableListFilter<"Property">
    images?: StringNullableListFilter<"Property">
    organizationId?: StringFilter<"Property"> | string
    managerId?: StringNullableFilter<"Property"> | string | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    units?: UnitListRelationFilter
    maintenanceRequests?: MaintenanceRequestListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    totalUnits?: SortOrder
    yearBuilt?: SortOrderInput | SortOrder
    squareFeet?: SortOrderInput | SortOrder
    amenities?: SortOrder
    images?: SortOrder
    organizationId?: SortOrder
    managerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    units?: UnitOrderByRelationAggregateInput
    maintenanceRequests?: MaintenanceRequestOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    name?: StringFilter<"Property"> | string
    address?: StringFilter<"Property"> | string
    city?: StringFilter<"Property"> | string
    state?: StringFilter<"Property"> | string
    zipCode?: StringFilter<"Property"> | string
    type?: EnumPropertyTypeFilter<"Property"> | $Enums.PropertyType
    description?: StringNullableFilter<"Property"> | string | null
    totalUnits?: IntFilter<"Property"> | number
    yearBuilt?: IntNullableFilter<"Property"> | number | null
    squareFeet?: IntNullableFilter<"Property"> | number | null
    amenities?: StringNullableListFilter<"Property">
    images?: StringNullableListFilter<"Property">
    organizationId?: StringFilter<"Property"> | string
    managerId?: StringNullableFilter<"Property"> | string | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    units?: UnitListRelationFilter
    maintenanceRequests?: MaintenanceRequestListRelationFilter
    payments?: PaymentListRelationFilter
  }, "id">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    totalUnits?: SortOrder
    yearBuilt?: SortOrderInput | SortOrder
    squareFeet?: SortOrderInput | SortOrder
    amenities?: SortOrder
    images?: SortOrder
    organizationId?: SortOrder
    managerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _avg?: PropertyAvgOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
    _sum?: PropertySumOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Property"> | string
    name?: StringWithAggregatesFilter<"Property"> | string
    address?: StringWithAggregatesFilter<"Property"> | string
    city?: StringWithAggregatesFilter<"Property"> | string
    state?: StringWithAggregatesFilter<"Property"> | string
    zipCode?: StringWithAggregatesFilter<"Property"> | string
    type?: EnumPropertyTypeWithAggregatesFilter<"Property"> | $Enums.PropertyType
    description?: StringNullableWithAggregatesFilter<"Property"> | string | null
    totalUnits?: IntWithAggregatesFilter<"Property"> | number
    yearBuilt?: IntNullableWithAggregatesFilter<"Property"> | number | null
    squareFeet?: IntNullableWithAggregatesFilter<"Property"> | number | null
    amenities?: StringNullableListFilter<"Property">
    images?: StringNullableListFilter<"Property">
    organizationId?: StringWithAggregatesFilter<"Property"> | string
    managerId?: StringNullableWithAggregatesFilter<"Property"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
  }

  export type UnitWhereInput = {
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    id?: StringFilter<"Unit"> | string
    number?: StringFilter<"Unit"> | string
    floor?: IntNullableFilter<"Unit"> | number | null
    bedrooms?: IntFilter<"Unit"> | number
    bathrooms?: DecimalFilter<"Unit"> | Decimal | DecimalJsLike | number | string
    squareFeet?: IntFilter<"Unit"> | number
    monthlyRent?: DecimalFilter<"Unit"> | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalFilter<"Unit"> | Decimal | DecimalJsLike | number | string
    isOccupied?: BoolFilter<"Unit"> | boolean
    features?: StringNullableListFilter<"Unit">
    propertyId?: StringFilter<"Unit"> | string
    currentLeaseId?: StringNullableFilter<"Unit"> | string | null
    createdAt?: DateTimeFilter<"Unit"> | Date | string
    updatedAt?: DateTimeFilter<"Unit"> | Date | string
    property?: XOR<PropertyRelationFilter, PropertyWhereInput>
    leases?: LeaseListRelationFilter
    maintenanceRequests?: MaintenanceRequestListRelationFilter
  }

  export type UnitOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    floor?: SortOrderInput | SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareFeet?: SortOrder
    monthlyRent?: SortOrder
    securityDeposit?: SortOrder
    isOccupied?: SortOrder
    features?: SortOrder
    propertyId?: SortOrder
    currentLeaseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
    leases?: LeaseOrderByRelationAggregateInput
    maintenanceRequests?: MaintenanceRequestOrderByRelationAggregateInput
  }

  export type UnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    propertyId_number?: UnitPropertyIdNumberCompoundUniqueInput
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    number?: StringFilter<"Unit"> | string
    floor?: IntNullableFilter<"Unit"> | number | null
    bedrooms?: IntFilter<"Unit"> | number
    bathrooms?: DecimalFilter<"Unit"> | Decimal | DecimalJsLike | number | string
    squareFeet?: IntFilter<"Unit"> | number
    monthlyRent?: DecimalFilter<"Unit"> | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalFilter<"Unit"> | Decimal | DecimalJsLike | number | string
    isOccupied?: BoolFilter<"Unit"> | boolean
    features?: StringNullableListFilter<"Unit">
    propertyId?: StringFilter<"Unit"> | string
    currentLeaseId?: StringNullableFilter<"Unit"> | string | null
    createdAt?: DateTimeFilter<"Unit"> | Date | string
    updatedAt?: DateTimeFilter<"Unit"> | Date | string
    property?: XOR<PropertyRelationFilter, PropertyWhereInput>
    leases?: LeaseListRelationFilter
    maintenanceRequests?: MaintenanceRequestListRelationFilter
  }, "id" | "propertyId_number">

  export type UnitOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    floor?: SortOrderInput | SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareFeet?: SortOrder
    monthlyRent?: SortOrder
    securityDeposit?: SortOrder
    isOccupied?: SortOrder
    features?: SortOrder
    propertyId?: SortOrder
    currentLeaseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UnitCountOrderByAggregateInput
    _avg?: UnitAvgOrderByAggregateInput
    _max?: UnitMaxOrderByAggregateInput
    _min?: UnitMinOrderByAggregateInput
    _sum?: UnitSumOrderByAggregateInput
  }

  export type UnitScalarWhereWithAggregatesInput = {
    AND?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    OR?: UnitScalarWhereWithAggregatesInput[]
    NOT?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Unit"> | string
    number?: StringWithAggregatesFilter<"Unit"> | string
    floor?: IntNullableWithAggregatesFilter<"Unit"> | number | null
    bedrooms?: IntWithAggregatesFilter<"Unit"> | number
    bathrooms?: DecimalWithAggregatesFilter<"Unit"> | Decimal | DecimalJsLike | number | string
    squareFeet?: IntWithAggregatesFilter<"Unit"> | number
    monthlyRent?: DecimalWithAggregatesFilter<"Unit"> | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalWithAggregatesFilter<"Unit"> | Decimal | DecimalJsLike | number | string
    isOccupied?: BoolWithAggregatesFilter<"Unit"> | boolean
    features?: StringNullableListFilter<"Unit">
    propertyId?: StringWithAggregatesFilter<"Unit"> | string
    currentLeaseId?: StringNullableWithAggregatesFilter<"Unit"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Unit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Unit"> | Date | string
  }

  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: StringFilter<"Tenant"> | string
    userId?: StringFilter<"Tenant"> | string
    phone?: StringNullableFilter<"Tenant"> | string | null
    emergencyContact?: JsonNullableFilter<"Tenant">
    moveInDate?: DateTimeNullableFilter<"Tenant"> | Date | string | null
    moveOutDate?: DateTimeNullableFilter<"Tenant"> | Date | string | null
    notes?: StringNullableFilter<"Tenant"> | string | null
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    leases?: LeaseListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrderInput | SortOrder
    emergencyContact?: SortOrderInput | SortOrder
    moveInDate?: SortOrderInput | SortOrder
    moveOutDate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    leases?: LeaseOrderByRelationAggregateInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    phone?: StringNullableFilter<"Tenant"> | string | null
    emergencyContact?: JsonNullableFilter<"Tenant">
    moveInDate?: DateTimeNullableFilter<"Tenant"> | Date | string | null
    moveOutDate?: DateTimeNullableFilter<"Tenant"> | Date | string | null
    notes?: StringNullableFilter<"Tenant"> | string | null
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    leases?: LeaseListRelationFilter
  }, "id" | "userId">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrderInput | SortOrder
    emergencyContact?: SortOrderInput | SortOrder
    moveInDate?: SortOrderInput | SortOrder
    moveOutDate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tenant"> | string
    userId?: StringWithAggregatesFilter<"Tenant"> | string
    phone?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    emergencyContact?: JsonNullableWithAggregatesFilter<"Tenant">
    moveInDate?: DateTimeNullableWithAggregatesFilter<"Tenant"> | Date | string | null
    moveOutDate?: DateTimeNullableWithAggregatesFilter<"Tenant"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  }

  export type LeaseWhereInput = {
    AND?: LeaseWhereInput | LeaseWhereInput[]
    OR?: LeaseWhereInput[]
    NOT?: LeaseWhereInput | LeaseWhereInput[]
    id?: StringFilter<"Lease"> | string
    tenantId?: StringFilter<"Lease"> | string
    unitId?: StringFilter<"Lease"> | string
    startDate?: DateTimeFilter<"Lease"> | Date | string
    endDate?: DateTimeFilter<"Lease"> | Date | string
    monthlyRent?: DecimalFilter<"Lease"> | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalFilter<"Lease"> | Decimal | DecimalJsLike | number | string
    lateFeeDays?: IntFilter<"Lease"> | number
    lateFeeAmount?: DecimalFilter<"Lease"> | Decimal | DecimalJsLike | number | string
    terms?: StringNullableFilter<"Lease"> | string | null
    isActive?: BoolFilter<"Lease"> | boolean
    createdAt?: DateTimeFilter<"Lease"> | Date | string
    updatedAt?: DateTimeFilter<"Lease"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
    unit?: XOR<UnitRelationFilter, UnitWhereInput>
    payments?: PaymentListRelationFilter
  }

  export type LeaseOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    unitId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    monthlyRent?: SortOrder
    securityDeposit?: SortOrder
    lateFeeDays?: SortOrder
    lateFeeAmount?: SortOrder
    terms?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    unit?: UnitOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type LeaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeaseWhereInput | LeaseWhereInput[]
    OR?: LeaseWhereInput[]
    NOT?: LeaseWhereInput | LeaseWhereInput[]
    tenantId?: StringFilter<"Lease"> | string
    unitId?: StringFilter<"Lease"> | string
    startDate?: DateTimeFilter<"Lease"> | Date | string
    endDate?: DateTimeFilter<"Lease"> | Date | string
    monthlyRent?: DecimalFilter<"Lease"> | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalFilter<"Lease"> | Decimal | DecimalJsLike | number | string
    lateFeeDays?: IntFilter<"Lease"> | number
    lateFeeAmount?: DecimalFilter<"Lease"> | Decimal | DecimalJsLike | number | string
    terms?: StringNullableFilter<"Lease"> | string | null
    isActive?: BoolFilter<"Lease"> | boolean
    createdAt?: DateTimeFilter<"Lease"> | Date | string
    updatedAt?: DateTimeFilter<"Lease"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
    unit?: XOR<UnitRelationFilter, UnitWhereInput>
    payments?: PaymentListRelationFilter
  }, "id">

  export type LeaseOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    unitId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    monthlyRent?: SortOrder
    securityDeposit?: SortOrder
    lateFeeDays?: SortOrder
    lateFeeAmount?: SortOrder
    terms?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LeaseCountOrderByAggregateInput
    _avg?: LeaseAvgOrderByAggregateInput
    _max?: LeaseMaxOrderByAggregateInput
    _min?: LeaseMinOrderByAggregateInput
    _sum?: LeaseSumOrderByAggregateInput
  }

  export type LeaseScalarWhereWithAggregatesInput = {
    AND?: LeaseScalarWhereWithAggregatesInput | LeaseScalarWhereWithAggregatesInput[]
    OR?: LeaseScalarWhereWithAggregatesInput[]
    NOT?: LeaseScalarWhereWithAggregatesInput | LeaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lease"> | string
    tenantId?: StringWithAggregatesFilter<"Lease"> | string
    unitId?: StringWithAggregatesFilter<"Lease"> | string
    startDate?: DateTimeWithAggregatesFilter<"Lease"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Lease"> | Date | string
    monthlyRent?: DecimalWithAggregatesFilter<"Lease"> | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalWithAggregatesFilter<"Lease"> | Decimal | DecimalJsLike | number | string
    lateFeeDays?: IntWithAggregatesFilter<"Lease"> | number
    lateFeeAmount?: DecimalWithAggregatesFilter<"Lease"> | Decimal | DecimalJsLike | number | string
    terms?: StringNullableWithAggregatesFilter<"Lease"> | string | null
    isActive?: BoolWithAggregatesFilter<"Lease"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Lease"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lease"> | Date | string
  }

  export type VendorWhereInput = {
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    id?: StringFilter<"Vendor"> | string
    userId?: StringFilter<"Vendor"> | string
    businessName?: StringFilter<"Vendor"> | string
    businessLicense?: StringNullableFilter<"Vendor"> | string | null
    specialties?: StringNullableListFilter<"Vendor">
    serviceRadius?: IntNullableFilter<"Vendor"> | number | null
    hourlyRate?: DecimalNullableFilter<"Vendor"> | Decimal | DecimalJsLike | number | string | null
    rating?: DecimalNullableFilter<"Vendor"> | Decimal | DecimalJsLike | number | string | null
    completedJobs?: IntFilter<"Vendor"> | number
    isVerified?: BoolFilter<"Vendor"> | boolean
    availability?: JsonNullableFilter<"Vendor">
    organizationId?: StringFilter<"Vendor"> | string
    createdAt?: DateTimeFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeFilter<"Vendor"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    maintenanceRequests?: MaintenanceRequestListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type VendorOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    businessLicense?: SortOrderInput | SortOrder
    specialties?: SortOrder
    serviceRadius?: SortOrderInput | SortOrder
    hourlyRate?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    completedJobs?: SortOrder
    isVerified?: SortOrder
    availability?: SortOrderInput | SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    organization?: OrganizationOrderByWithRelationInput
    maintenanceRequests?: MaintenanceRequestOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type VendorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    businessName?: StringFilter<"Vendor"> | string
    businessLicense?: StringNullableFilter<"Vendor"> | string | null
    specialties?: StringNullableListFilter<"Vendor">
    serviceRadius?: IntNullableFilter<"Vendor"> | number | null
    hourlyRate?: DecimalNullableFilter<"Vendor"> | Decimal | DecimalJsLike | number | string | null
    rating?: DecimalNullableFilter<"Vendor"> | Decimal | DecimalJsLike | number | string | null
    completedJobs?: IntFilter<"Vendor"> | number
    isVerified?: BoolFilter<"Vendor"> | boolean
    availability?: JsonNullableFilter<"Vendor">
    organizationId?: StringFilter<"Vendor"> | string
    createdAt?: DateTimeFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeFilter<"Vendor"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    maintenanceRequests?: MaintenanceRequestListRelationFilter
    payments?: PaymentListRelationFilter
  }, "id" | "userId">

  export type VendorOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    businessLicense?: SortOrderInput | SortOrder
    specialties?: SortOrder
    serviceRadius?: SortOrderInput | SortOrder
    hourlyRate?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    completedJobs?: SortOrder
    isVerified?: SortOrder
    availability?: SortOrderInput | SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VendorCountOrderByAggregateInput
    _avg?: VendorAvgOrderByAggregateInput
    _max?: VendorMaxOrderByAggregateInput
    _min?: VendorMinOrderByAggregateInput
    _sum?: VendorSumOrderByAggregateInput
  }

  export type VendorScalarWhereWithAggregatesInput = {
    AND?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    OR?: VendorScalarWhereWithAggregatesInput[]
    NOT?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vendor"> | string
    userId?: StringWithAggregatesFilter<"Vendor"> | string
    businessName?: StringWithAggregatesFilter<"Vendor"> | string
    businessLicense?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    specialties?: StringNullableListFilter<"Vendor">
    serviceRadius?: IntNullableWithAggregatesFilter<"Vendor"> | number | null
    hourlyRate?: DecimalNullableWithAggregatesFilter<"Vendor"> | Decimal | DecimalJsLike | number | string | null
    rating?: DecimalNullableWithAggregatesFilter<"Vendor"> | Decimal | DecimalJsLike | number | string | null
    completedJobs?: IntWithAggregatesFilter<"Vendor"> | number
    isVerified?: BoolWithAggregatesFilter<"Vendor"> | boolean
    availability?: JsonNullableWithAggregatesFilter<"Vendor">
    organizationId?: StringWithAggregatesFilter<"Vendor"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vendor"> | Date | string
  }

  export type MaintenanceRequestWhereInput = {
    AND?: MaintenanceRequestWhereInput | MaintenanceRequestWhereInput[]
    OR?: MaintenanceRequestWhereInput[]
    NOT?: MaintenanceRequestWhereInput | MaintenanceRequestWhereInput[]
    id?: StringFilter<"MaintenanceRequest"> | string
    title?: StringFilter<"MaintenanceRequest"> | string
    description?: StringFilter<"MaintenanceRequest"> | string
    category?: StringFilter<"MaintenanceRequest"> | string
    priority?: EnumMaintenancePriorityFilter<"MaintenanceRequest"> | $Enums.MaintenancePriority
    status?: EnumMaintenanceStatusFilter<"MaintenanceRequest"> | $Enums.MaintenanceStatus
    propertyId?: StringFilter<"MaintenanceRequest"> | string
    unitId?: StringNullableFilter<"MaintenanceRequest"> | string | null
    tenantId?: StringFilter<"MaintenanceRequest"> | string
    assignedVendorId?: StringNullableFilter<"MaintenanceRequest"> | string | null
    estimatedCost?: DecimalNullableFilter<"MaintenanceRequest"> | Decimal | DecimalJsLike | number | string | null
    actualCost?: DecimalNullableFilter<"MaintenanceRequest"> | Decimal | DecimalJsLike | number | string | null
    scheduledDate?: DateTimeNullableFilter<"MaintenanceRequest"> | Date | string | null
    completedDate?: DateTimeNullableFilter<"MaintenanceRequest"> | Date | string | null
    images?: StringNullableListFilter<"MaintenanceRequest">
    notes?: StringNullableFilter<"MaintenanceRequest"> | string | null
    createdAt?: DateTimeFilter<"MaintenanceRequest"> | Date | string
    updatedAt?: DateTimeFilter<"MaintenanceRequest"> | Date | string
    property?: XOR<PropertyRelationFilter, PropertyWhereInput>
    unit?: XOR<UnitNullableRelationFilter, UnitWhereInput> | null
    tenant?: XOR<UserRelationFilter, UserWhereInput>
    assignedVendor?: XOR<VendorNullableRelationFilter, VendorWhereInput> | null
    payments?: PaymentListRelationFilter
  }

  export type MaintenanceRequestOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    propertyId?: SortOrder
    unitId?: SortOrderInput | SortOrder
    tenantId?: SortOrder
    assignedVendorId?: SortOrderInput | SortOrder
    estimatedCost?: SortOrderInput | SortOrder
    actualCost?: SortOrderInput | SortOrder
    scheduledDate?: SortOrderInput | SortOrder
    completedDate?: SortOrderInput | SortOrder
    images?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
    unit?: UnitOrderByWithRelationInput
    tenant?: UserOrderByWithRelationInput
    assignedVendor?: VendorOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type MaintenanceRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaintenanceRequestWhereInput | MaintenanceRequestWhereInput[]
    OR?: MaintenanceRequestWhereInput[]
    NOT?: MaintenanceRequestWhereInput | MaintenanceRequestWhereInput[]
    title?: StringFilter<"MaintenanceRequest"> | string
    description?: StringFilter<"MaintenanceRequest"> | string
    category?: StringFilter<"MaintenanceRequest"> | string
    priority?: EnumMaintenancePriorityFilter<"MaintenanceRequest"> | $Enums.MaintenancePriority
    status?: EnumMaintenanceStatusFilter<"MaintenanceRequest"> | $Enums.MaintenanceStatus
    propertyId?: StringFilter<"MaintenanceRequest"> | string
    unitId?: StringNullableFilter<"MaintenanceRequest"> | string | null
    tenantId?: StringFilter<"MaintenanceRequest"> | string
    assignedVendorId?: StringNullableFilter<"MaintenanceRequest"> | string | null
    estimatedCost?: DecimalNullableFilter<"MaintenanceRequest"> | Decimal | DecimalJsLike | number | string | null
    actualCost?: DecimalNullableFilter<"MaintenanceRequest"> | Decimal | DecimalJsLike | number | string | null
    scheduledDate?: DateTimeNullableFilter<"MaintenanceRequest"> | Date | string | null
    completedDate?: DateTimeNullableFilter<"MaintenanceRequest"> | Date | string | null
    images?: StringNullableListFilter<"MaintenanceRequest">
    notes?: StringNullableFilter<"MaintenanceRequest"> | string | null
    createdAt?: DateTimeFilter<"MaintenanceRequest"> | Date | string
    updatedAt?: DateTimeFilter<"MaintenanceRequest"> | Date | string
    property?: XOR<PropertyRelationFilter, PropertyWhereInput>
    unit?: XOR<UnitNullableRelationFilter, UnitWhereInput> | null
    tenant?: XOR<UserRelationFilter, UserWhereInput>
    assignedVendor?: XOR<VendorNullableRelationFilter, VendorWhereInput> | null
    payments?: PaymentListRelationFilter
  }, "id">

  export type MaintenanceRequestOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    propertyId?: SortOrder
    unitId?: SortOrderInput | SortOrder
    tenantId?: SortOrder
    assignedVendorId?: SortOrderInput | SortOrder
    estimatedCost?: SortOrderInput | SortOrder
    actualCost?: SortOrderInput | SortOrder
    scheduledDate?: SortOrderInput | SortOrder
    completedDate?: SortOrderInput | SortOrder
    images?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MaintenanceRequestCountOrderByAggregateInput
    _avg?: MaintenanceRequestAvgOrderByAggregateInput
    _max?: MaintenanceRequestMaxOrderByAggregateInput
    _min?: MaintenanceRequestMinOrderByAggregateInput
    _sum?: MaintenanceRequestSumOrderByAggregateInput
  }

  export type MaintenanceRequestScalarWhereWithAggregatesInput = {
    AND?: MaintenanceRequestScalarWhereWithAggregatesInput | MaintenanceRequestScalarWhereWithAggregatesInput[]
    OR?: MaintenanceRequestScalarWhereWithAggregatesInput[]
    NOT?: MaintenanceRequestScalarWhereWithAggregatesInput | MaintenanceRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MaintenanceRequest"> | string
    title?: StringWithAggregatesFilter<"MaintenanceRequest"> | string
    description?: StringWithAggregatesFilter<"MaintenanceRequest"> | string
    category?: StringWithAggregatesFilter<"MaintenanceRequest"> | string
    priority?: EnumMaintenancePriorityWithAggregatesFilter<"MaintenanceRequest"> | $Enums.MaintenancePriority
    status?: EnumMaintenanceStatusWithAggregatesFilter<"MaintenanceRequest"> | $Enums.MaintenanceStatus
    propertyId?: StringWithAggregatesFilter<"MaintenanceRequest"> | string
    unitId?: StringNullableWithAggregatesFilter<"MaintenanceRequest"> | string | null
    tenantId?: StringWithAggregatesFilter<"MaintenanceRequest"> | string
    assignedVendorId?: StringNullableWithAggregatesFilter<"MaintenanceRequest"> | string | null
    estimatedCost?: DecimalNullableWithAggregatesFilter<"MaintenanceRequest"> | Decimal | DecimalJsLike | number | string | null
    actualCost?: DecimalNullableWithAggregatesFilter<"MaintenanceRequest"> | Decimal | DecimalJsLike | number | string | null
    scheduledDate?: DateTimeNullableWithAggregatesFilter<"MaintenanceRequest"> | Date | string | null
    completedDate?: DateTimeNullableWithAggregatesFilter<"MaintenanceRequest"> | Date | string | null
    images?: StringNullableListFilter<"MaintenanceRequest">
    notes?: StringNullableWithAggregatesFilter<"MaintenanceRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MaintenanceRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MaintenanceRequest"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    type?: EnumPaymentTypeFilter<"Payment"> | $Enums.PaymentType
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    method?: StringNullableFilter<"Payment"> | string | null
    description?: StringFilter<"Payment"> | string
    dueDate?: DateTimeNullableFilter<"Payment"> | Date | string | null
    paidDate?: DateTimeNullableFilter<"Payment"> | Date | string | null
    propertyId?: StringNullableFilter<"Payment"> | string | null
    leaseId?: StringNullableFilter<"Payment"> | string | null
    tenantId?: StringNullableFilter<"Payment"> | string | null
    vendorId?: StringNullableFilter<"Payment"> | string | null
    maintenanceRequestId?: StringNullableFilter<"Payment"> | string | null
    transactionId?: StringNullableFilter<"Payment"> | string | null
    fees?: DecimalNullableFilter<"Payment"> | Decimal | DecimalJsLike | number | string | null
    lateFee?: DecimalNullableFilter<"Payment"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    property?: XOR<PropertyNullableRelationFilter, PropertyWhereInput> | null
    lease?: XOR<LeaseNullableRelationFilter, LeaseWhereInput> | null
    tenant?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    vendor?: XOR<VendorNullableRelationFilter, VendorWhereInput> | null
    maintenanceRequest?: XOR<MaintenanceRequestNullableRelationFilter, MaintenanceRequestWhereInput> | null
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    status?: SortOrder
    method?: SortOrderInput | SortOrder
    description?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    paidDate?: SortOrderInput | SortOrder
    propertyId?: SortOrderInput | SortOrder
    leaseId?: SortOrderInput | SortOrder
    tenantId?: SortOrderInput | SortOrder
    vendorId?: SortOrderInput | SortOrder
    maintenanceRequestId?: SortOrderInput | SortOrder
    transactionId?: SortOrderInput | SortOrder
    fees?: SortOrderInput | SortOrder
    lateFee?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
    lease?: LeaseOrderByWithRelationInput
    tenant?: UserOrderByWithRelationInput
    vendor?: VendorOrderByWithRelationInput
    maintenanceRequest?: MaintenanceRequestOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    type?: EnumPaymentTypeFilter<"Payment"> | $Enums.PaymentType
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    method?: StringNullableFilter<"Payment"> | string | null
    description?: StringFilter<"Payment"> | string
    dueDate?: DateTimeNullableFilter<"Payment"> | Date | string | null
    paidDate?: DateTimeNullableFilter<"Payment"> | Date | string | null
    propertyId?: StringNullableFilter<"Payment"> | string | null
    leaseId?: StringNullableFilter<"Payment"> | string | null
    tenantId?: StringNullableFilter<"Payment"> | string | null
    vendorId?: StringNullableFilter<"Payment"> | string | null
    maintenanceRequestId?: StringNullableFilter<"Payment"> | string | null
    transactionId?: StringNullableFilter<"Payment"> | string | null
    fees?: DecimalNullableFilter<"Payment"> | Decimal | DecimalJsLike | number | string | null
    lateFee?: DecimalNullableFilter<"Payment"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    property?: XOR<PropertyNullableRelationFilter, PropertyWhereInput> | null
    lease?: XOR<LeaseNullableRelationFilter, LeaseWhereInput> | null
    tenant?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    vendor?: XOR<VendorNullableRelationFilter, VendorWhereInput> | null
    maintenanceRequest?: XOR<MaintenanceRequestNullableRelationFilter, MaintenanceRequestWhereInput> | null
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    status?: SortOrder
    method?: SortOrderInput | SortOrder
    description?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    paidDate?: SortOrderInput | SortOrder
    propertyId?: SortOrderInput | SortOrder
    leaseId?: SortOrderInput | SortOrder
    tenantId?: SortOrderInput | SortOrder
    vendorId?: SortOrderInput | SortOrder
    maintenanceRequestId?: SortOrderInput | SortOrder
    transactionId?: SortOrderInput | SortOrder
    fees?: SortOrderInput | SortOrder
    lateFee?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    type?: EnumPaymentTypeWithAggregatesFilter<"Payment"> | $Enums.PaymentType
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    method?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    description?: StringWithAggregatesFilter<"Payment"> | string
    dueDate?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    paidDate?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    propertyId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    leaseId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    tenantId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    vendorId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    maintenanceRequestId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    transactionId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    fees?: DecimalNullableWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string | null
    lateFee?: DecimalNullableWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringNullableFilter<"Message"> | string | null
    threadId?: StringNullableFilter<"Message"> | string | null
    isRead?: BoolFilter<"Message"> | boolean
    attachments?: StringNullableListFilter<"Message">
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrderInput | SortOrder
    threadId?: SortOrderInput | SortOrder
    isRead?: SortOrder
    attachments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sender?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringNullableFilter<"Message"> | string | null
    threadId?: StringNullableFilter<"Message"> | string | null
    isRead?: BoolFilter<"Message"> | boolean
    attachments?: StringNullableListFilter<"Message">
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrderInput | SortOrder
    threadId?: SortOrderInput | SortOrder
    isRead?: SortOrder
    attachments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    senderId?: StringWithAggregatesFilter<"Message"> | string
    receiverId?: StringNullableWithAggregatesFilter<"Message"> | string | null
    threadId?: StringNullableWithAggregatesFilter<"Message"> | string | null
    isRead?: BoolWithAggregatesFilter<"Message"> | boolean
    attachments?: StringNullableListFilter<"Message">
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    userId?: StringFilter<"ActivityLog"> | string
    action?: StringFilter<"ActivityLog"> | string
    entity?: StringFilter<"ActivityLog"> | string
    entityId?: StringFilter<"ActivityLog"> | string
    details?: JsonNullableFilter<"ActivityLog">
    ipAddress?: StringNullableFilter<"ActivityLog"> | string | null
    userAgent?: StringNullableFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    details?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    userId?: StringFilter<"ActivityLog"> | string
    action?: StringFilter<"ActivityLog"> | string
    entity?: StringFilter<"ActivityLog"> | string
    entityId?: StringFilter<"ActivityLog"> | string
    details?: JsonNullableFilter<"ActivityLog">
    ipAddress?: StringNullableFilter<"ActivityLog"> | string | null
    userAgent?: StringNullableFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    details?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActivityLog"> | string
    userId?: StringWithAggregatesFilter<"ActivityLog"> | string
    action?: StringWithAggregatesFilter<"ActivityLog"> | string
    entity?: StringWithAggregatesFilter<"ActivityLog"> | string
    entityId?: StringWithAggregatesFilter<"ActivityLog"> | string
    details?: JsonNullableWithAggregatesFilter<"ActivityLog">
    ipAddress?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
  }

  export type OrganizationCreateInput = {
    id?: string
    name: string
    type?: string
    logo?: string | null
    allowTenantRegistration?: boolean
    requireVendorApproval?: boolean
    enableAutomatedPayments?: boolean
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
    properties?: PropertyCreateNestedManyWithoutOrganizationInput
    vendors?: VendorCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    name: string
    type?: string
    logo?: string | null
    allowTenantRegistration?: boolean
    requireVendorApproval?: boolean
    enableAutomatedPayments?: boolean
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    properties?: PropertyUncheckedCreateNestedManyWithoutOrganizationInput
    vendors?: VendorUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    allowTenantRegistration?: BoolFieldUpdateOperationsInput | boolean
    requireVendorApproval?: BoolFieldUpdateOperationsInput | boolean
    enableAutomatedPayments?: BoolFieldUpdateOperationsInput | boolean
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
    properties?: PropertyUpdateManyWithoutOrganizationNestedInput
    vendors?: VendorUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    allowTenantRegistration?: BoolFieldUpdateOperationsInput | boolean
    requireVendorApproval?: BoolFieldUpdateOperationsInput | boolean
    enableAutomatedPayments?: BoolFieldUpdateOperationsInput | boolean
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutOrganizationNestedInput
    vendors?: VendorUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    name: string
    type?: string
    logo?: string | null
    allowTenantRegistration?: boolean
    requireVendorApproval?: boolean
    enableAutomatedPayments?: boolean
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    allowTenantRegistration?: BoolFieldUpdateOperationsInput | boolean
    requireVendorApproval?: BoolFieldUpdateOperationsInput | boolean
    enableAutomatedPayments?: BoolFieldUpdateOperationsInput | boolean
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    allowTenantRegistration?: BoolFieldUpdateOperationsInput | boolean
    requireVendorApproval?: BoolFieldUpdateOperationsInput | boolean
    enableAutomatedPayments?: BoolFieldUpdateOperationsInput | boolean
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    avatar?: string | null
    emailVerified?: boolean
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutUsersInput
    tenantProfile?: TenantCreateNestedOneWithoutUserInput
    vendorProfile?: VendorCreateNestedOneWithoutUserInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutTenantInput
    payments?: PaymentCreateNestedManyWithoutTenantInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    avatar?: string | null
    emailVerified?: boolean
    phone?: string | null
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantProfile?: TenantUncheckedCreateNestedOneWithoutUserInput
    vendorProfile?: VendorUncheckedCreateNestedOneWithoutUserInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
    tenantProfile?: TenantUpdateOneWithoutUserNestedInput
    vendorProfile?: VendorUpdateOneWithoutUserNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutTenantNestedInput
    payments?: PaymentUpdateManyWithoutTenantNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantProfile?: TenantUncheckedUpdateOneWithoutUserNestedInput
    vendorProfile?: VendorUncheckedUpdateOneWithoutUserNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutTenantNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    avatar?: string | null
    emailVerified?: boolean
    phone?: string | null
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zipCode: string
    type: $Enums.PropertyType
    description?: string | null
    totalUnits?: number
    yearBuilt?: number | null
    squareFeet?: number | null
    amenities?: PropertyCreateamenitiesInput | string[]
    images?: PropertyCreateimagesInput | string[]
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutPropertiesInput
    units?: UnitCreateNestedManyWithoutPropertyInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutPropertyInput
    payments?: PaymentCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zipCode: string
    type: $Enums.PropertyType
    description?: string | null
    totalUnits?: number
    yearBuilt?: number | null
    squareFeet?: number | null
    amenities?: PropertyCreateamenitiesInput | string[]
    images?: PropertyCreateimagesInput | string[]
    organizationId: string
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    units?: UnitUncheckedCreateNestedManyWithoutPropertyInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutPropertyInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalUnits?: IntFieldUpdateOperationsInput | number
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    squareFeet?: NullableIntFieldUpdateOperationsInput | number | null
    amenities?: PropertyUpdateamenitiesInput | string[]
    images?: PropertyUpdateimagesInput | string[]
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutPropertiesNestedInput
    units?: UnitUpdateManyWithoutPropertyNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutPropertyNestedInput
    payments?: PaymentUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalUnits?: IntFieldUpdateOperationsInput | number
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    squareFeet?: NullableIntFieldUpdateOperationsInput | number | null
    amenities?: PropertyUpdateamenitiesInput | string[]
    images?: PropertyUpdateimagesInput | string[]
    organizationId?: StringFieldUpdateOperationsInput | string
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUncheckedUpdateManyWithoutPropertyNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutPropertyNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateManyInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zipCode: string
    type: $Enums.PropertyType
    description?: string | null
    totalUnits?: number
    yearBuilt?: number | null
    squareFeet?: number | null
    amenities?: PropertyCreateamenitiesInput | string[]
    images?: PropertyCreateimagesInput | string[]
    organizationId: string
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalUnits?: IntFieldUpdateOperationsInput | number
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    squareFeet?: NullableIntFieldUpdateOperationsInput | number | null
    amenities?: PropertyUpdateamenitiesInput | string[]
    images?: PropertyUpdateimagesInput | string[]
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalUnits?: IntFieldUpdateOperationsInput | number
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    squareFeet?: NullableIntFieldUpdateOperationsInput | number | null
    amenities?: PropertyUpdateamenitiesInput | string[]
    images?: PropertyUpdateimagesInput | string[]
    organizationId?: StringFieldUpdateOperationsInput | string
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitCreateInput = {
    id?: string
    number: string
    floor?: number | null
    bedrooms: number
    bathrooms: Decimal | DecimalJsLike | number | string
    squareFeet: number
    monthlyRent: Decimal | DecimalJsLike | number | string
    securityDeposit: Decimal | DecimalJsLike | number | string
    isOccupied?: boolean
    features?: UnitCreatefeaturesInput | string[]
    currentLeaseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutUnitsInput
    leases?: LeaseCreateNestedManyWithoutUnitInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateInput = {
    id?: string
    number: string
    floor?: number | null
    bedrooms: number
    bathrooms: Decimal | DecimalJsLike | number | string
    squareFeet: number
    monthlyRent: Decimal | DecimalJsLike | number | string
    securityDeposit: Decimal | DecimalJsLike | number | string
    isOccupied?: boolean
    features?: UnitCreatefeaturesInput | string[]
    propertyId: string
    currentLeaseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leases?: LeaseUncheckedCreateNestedManyWithoutUnitInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    squareFeet?: IntFieldUpdateOperationsInput | number
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    features?: UnitUpdatefeaturesInput | string[]
    currentLeaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutUnitsNestedInput
    leases?: LeaseUpdateManyWithoutUnitNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    squareFeet?: IntFieldUpdateOperationsInput | number
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    features?: UnitUpdatefeaturesInput | string[]
    propertyId?: StringFieldUpdateOperationsInput | string
    currentLeaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leases?: LeaseUncheckedUpdateManyWithoutUnitNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitCreateManyInput = {
    id?: string
    number: string
    floor?: number | null
    bedrooms: number
    bathrooms: Decimal | DecimalJsLike | number | string
    squareFeet: number
    monthlyRent: Decimal | DecimalJsLike | number | string
    securityDeposit: Decimal | DecimalJsLike | number | string
    isOccupied?: boolean
    features?: UnitCreatefeaturesInput | string[]
    propertyId: string
    currentLeaseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    squareFeet?: IntFieldUpdateOperationsInput | number
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    features?: UnitUpdatefeaturesInput | string[]
    currentLeaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    squareFeet?: IntFieldUpdateOperationsInput | number
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    features?: UnitUpdatefeaturesInput | string[]
    propertyId?: StringFieldUpdateOperationsInput | string
    currentLeaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantCreateInput = {
    id?: string
    phone?: string | null
    emergencyContact?: NullableJsonNullValueInput | InputJsonValue
    moveInDate?: Date | string | null
    moveOutDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTenantProfileInput
    leases?: LeaseCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    userId: string
    phone?: string | null
    emergencyContact?: NullableJsonNullValueInput | InputJsonValue
    moveInDate?: Date | string | null
    moveOutDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leases?: LeaseUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableJsonNullValueInput | InputJsonValue
    moveInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    moveOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTenantProfileNestedInput
    leases?: LeaseUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableJsonNullValueInput | InputJsonValue
    moveInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    moveOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leases?: LeaseUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: string
    userId: string
    phone?: string | null
    emergencyContact?: NullableJsonNullValueInput | InputJsonValue
    moveInDate?: Date | string | null
    moveOutDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableJsonNullValueInput | InputJsonValue
    moveInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    moveOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableJsonNullValueInput | InputJsonValue
    moveInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    moveOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseCreateInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    monthlyRent: Decimal | DecimalJsLike | number | string
    securityDeposit: Decimal | DecimalJsLike | number | string
    lateFeeDays?: number
    lateFeeAmount?: Decimal | DecimalJsLike | number | string
    terms?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutLeasesInput
    unit: UnitCreateNestedOneWithoutLeasesInput
    payments?: PaymentCreateNestedManyWithoutLeaseInput
  }

  export type LeaseUncheckedCreateInput = {
    id?: string
    tenantId: string
    unitId: string
    startDate: Date | string
    endDate: Date | string
    monthlyRent: Decimal | DecimalJsLike | number | string
    securityDeposit: Decimal | DecimalJsLike | number | string
    lateFeeDays?: number
    lateFeeAmount?: Decimal | DecimalJsLike | number | string
    terms?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutLeaseInput
  }

  export type LeaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lateFeeDays?: IntFieldUpdateOperationsInput | number
    lateFeeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutLeasesNestedInput
    unit?: UnitUpdateOneRequiredWithoutLeasesNestedInput
    payments?: PaymentUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lateFeeDays?: IntFieldUpdateOperationsInput | number
    lateFeeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseCreateManyInput = {
    id?: string
    tenantId: string
    unitId: string
    startDate: Date | string
    endDate: Date | string
    monthlyRent: Decimal | DecimalJsLike | number | string
    securityDeposit: Decimal | DecimalJsLike | number | string
    lateFeeDays?: number
    lateFeeAmount?: Decimal | DecimalJsLike | number | string
    terms?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lateFeeDays?: IntFieldUpdateOperationsInput | number
    lateFeeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lateFeeDays?: IntFieldUpdateOperationsInput | number
    lateFeeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorCreateInput = {
    id?: string
    businessName: string
    businessLicense?: string | null
    specialties?: VendorCreatespecialtiesInput | string[]
    serviceRadius?: number | null
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    rating?: Decimal | DecimalJsLike | number | string | null
    completedJobs?: number
    isVerified?: boolean
    availability?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVendorProfileInput
    organization: OrganizationCreateNestedOneWithoutVendorsInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutAssignedVendorInput
    payments?: PaymentCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateInput = {
    id?: string
    userId: string
    businessName: string
    businessLicense?: string | null
    specialties?: VendorCreatespecialtiesInput | string[]
    serviceRadius?: number | null
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    rating?: Decimal | DecimalJsLike | number | string | null
    completedJobs?: number
    isVerified?: boolean
    availability?: NullableJsonNullValueInput | InputJsonValue
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutAssignedVendorInput
    payments?: PaymentUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessLicense?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: VendorUpdatespecialtiesInput | string[]
    serviceRadius?: NullableIntFieldUpdateOperationsInput | number | null
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    completedJobs?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    availability?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVendorProfileNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutVendorsNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutAssignedVendorNestedInput
    payments?: PaymentUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessLicense?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: VendorUpdatespecialtiesInput | string[]
    serviceRadius?: NullableIntFieldUpdateOperationsInput | number | null
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    completedJobs?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    availability?: NullableJsonNullValueInput | InputJsonValue
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutAssignedVendorNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorCreateManyInput = {
    id?: string
    userId: string
    businessName: string
    businessLicense?: string | null
    specialties?: VendorCreatespecialtiesInput | string[]
    serviceRadius?: number | null
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    rating?: Decimal | DecimalJsLike | number | string | null
    completedJobs?: number
    isVerified?: boolean
    availability?: NullableJsonNullValueInput | InputJsonValue
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VendorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessLicense?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: VendorUpdatespecialtiesInput | string[]
    serviceRadius?: NullableIntFieldUpdateOperationsInput | number | null
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    completedJobs?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    availability?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessLicense?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: VendorUpdatespecialtiesInput | string[]
    serviceRadius?: NullableIntFieldUpdateOperationsInput | number | null
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    completedJobs?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    availability?: NullableJsonNullValueInput | InputJsonValue
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRequestCreateInput = {
    id?: string
    title: string
    description: string
    category: string
    priority: $Enums.MaintenancePriority
    status?: $Enums.MaintenanceStatus
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    actualCost?: Decimal | DecimalJsLike | number | string | null
    scheduledDate?: Date | string | null
    completedDate?: Date | string | null
    images?: MaintenanceRequestCreateimagesInput | string[]
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutMaintenanceRequestsInput
    unit?: UnitCreateNestedOneWithoutMaintenanceRequestsInput
    tenant: UserCreateNestedOneWithoutMaintenanceRequestsInput
    assignedVendor?: VendorCreateNestedOneWithoutMaintenanceRequestsInput
    payments?: PaymentCreateNestedManyWithoutMaintenanceRequestInput
  }

  export type MaintenanceRequestUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    category: string
    priority: $Enums.MaintenancePriority
    status?: $Enums.MaintenanceStatus
    propertyId: string
    unitId?: string | null
    tenantId: string
    assignedVendorId?: string | null
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    actualCost?: Decimal | DecimalJsLike | number | string | null
    scheduledDate?: Date | string | null
    completedDate?: Date | string | null
    images?: MaintenanceRequestCreateimagesInput | string[]
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutMaintenanceRequestInput
  }

  export type MaintenanceRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumMaintenancePriorityFieldUpdateOperationsInput | $Enums.MaintenancePriority
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: MaintenanceRequestUpdateimagesInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutMaintenanceRequestsNestedInput
    unit?: UnitUpdateOneWithoutMaintenanceRequestsNestedInput
    tenant?: UserUpdateOneRequiredWithoutMaintenanceRequestsNestedInput
    assignedVendor?: VendorUpdateOneWithoutMaintenanceRequestsNestedInput
    payments?: PaymentUpdateManyWithoutMaintenanceRequestNestedInput
  }

  export type MaintenanceRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumMaintenancePriorityFieldUpdateOperationsInput | $Enums.MaintenancePriority
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    propertyId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    assignedVendorId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: MaintenanceRequestUpdateimagesInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutMaintenanceRequestNestedInput
  }

  export type MaintenanceRequestCreateManyInput = {
    id?: string
    title: string
    description: string
    category: string
    priority: $Enums.MaintenancePriority
    status?: $Enums.MaintenanceStatus
    propertyId: string
    unitId?: string | null
    tenantId: string
    assignedVendorId?: string | null
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    actualCost?: Decimal | DecimalJsLike | number | string | null
    scheduledDate?: Date | string | null
    completedDate?: Date | string | null
    images?: MaintenanceRequestCreateimagesInput | string[]
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumMaintenancePriorityFieldUpdateOperationsInput | $Enums.MaintenancePriority
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: MaintenanceRequestUpdateimagesInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumMaintenancePriorityFieldUpdateOperationsInput | $Enums.MaintenancePriority
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    propertyId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    assignedVendorId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: MaintenanceRequestUpdateimagesInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.PaymentType
    status?: $Enums.PaymentStatus
    method?: string | null
    description: string
    dueDate?: Date | string | null
    paidDate?: Date | string | null
    transactionId?: string | null
    fees?: Decimal | DecimalJsLike | number | string | null
    lateFee?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property?: PropertyCreateNestedOneWithoutPaymentsInput
    lease?: LeaseCreateNestedOneWithoutPaymentsInput
    tenant?: UserCreateNestedOneWithoutPaymentsInput
    vendor?: VendorCreateNestedOneWithoutPaymentsInput
    maintenanceRequest?: MaintenanceRequestCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.PaymentType
    status?: $Enums.PaymentStatus
    method?: string | null
    description: string
    dueDate?: Date | string | null
    paidDate?: Date | string | null
    propertyId?: string | null
    leaseId?: string | null
    tenantId?: string | null
    vendorId?: string | null
    maintenanceRequestId?: string | null
    transactionId?: string | null
    fees?: Decimal | DecimalJsLike | number | string | null
    lateFee?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lateFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneWithoutPaymentsNestedInput
    lease?: LeaseUpdateOneWithoutPaymentsNestedInput
    tenant?: UserUpdateOneWithoutPaymentsNestedInput
    vendor?: VendorUpdateOneWithoutPaymentsNestedInput
    maintenanceRequest?: MaintenanceRequestUpdateOneWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    leaseId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lateFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.PaymentType
    status?: $Enums.PaymentStatus
    method?: string | null
    description: string
    dueDate?: Date | string | null
    paidDate?: Date | string | null
    propertyId?: string | null
    leaseId?: string | null
    tenantId?: string | null
    vendorId?: string | null
    maintenanceRequestId?: string | null
    transactionId?: string | null
    fees?: Decimal | DecimalJsLike | number | string | null
    lateFee?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lateFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    leaseId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lateFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    receiverId?: string | null
    threadId?: string | null
    isRead?: boolean
    attachments?: MessageCreateattachmentsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    content: string
    senderId: string
    receiverId?: string | null
    threadId?: string | null
    isRead?: boolean
    attachments?: MessageCreateattachmentsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    threadId?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    attachments?: MessageUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    threadId?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    attachments?: MessageUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    content: string
    senderId: string
    receiverId?: string | null
    threadId?: string | null
    isRead?: boolean
    attachments?: MessageCreateattachmentsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    threadId?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    attachments?: MessageUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    threadId?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    attachments?: MessageUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateInput = {
    id?: string
    userId: string
    action: string
    entity: string
    entityId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: string
    userId: string
    action: string
    entity: string
    entityId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyInput = {
    id?: string
    userId: string
    action: string
    entity: string
    entityId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type PropertyListRelationFilter = {
    every?: PropertyWhereInput
    some?: PropertyWhereInput
    none?: PropertyWhereInput
  }

  export type VendorListRelationFilter = {
    every?: VendorWhereInput
    some?: VendorWhereInput
    none?: VendorWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VendorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    logo?: SortOrder
    allowTenantRegistration?: SortOrder
    requireVendorApproval?: SortOrder
    enableAutomatedPayments?: SortOrder
    timezone?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    logo?: SortOrder
    allowTenantRegistration?: SortOrder
    requireVendorApproval?: SortOrder
    enableAutomatedPayments?: SortOrder
    timezone?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    logo?: SortOrder
    allowTenantRegistration?: SortOrder
    requireVendorApproval?: SortOrder
    enableAutomatedPayments?: SortOrder
    timezone?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type OrganizationRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type TenantNullableRelationFilter = {
    is?: TenantWhereInput | null
    isNot?: TenantWhereInput | null
  }

  export type VendorNullableRelationFilter = {
    is?: VendorWhereInput | null
    isNot?: VendorWhereInput | null
  }

  export type MaintenanceRequestListRelationFilter = {
    every?: MaintenanceRequestWhereInput
    some?: MaintenanceRequestWhereInput
    none?: MaintenanceRequestWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type MaintenanceRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    emailVerified?: SortOrder
    phone?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    emailVerified?: SortOrder
    phone?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    emailVerified?: SortOrder
    phone?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumPropertyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeFilter<$PrismaModel> | $Enums.PropertyType
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UnitListRelationFilter = {
    every?: UnitWhereInput
    some?: UnitWhereInput
    none?: UnitWhereInput
  }

  export type UnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    type?: SortOrder
    description?: SortOrder
    totalUnits?: SortOrder
    yearBuilt?: SortOrder
    squareFeet?: SortOrder
    amenities?: SortOrder
    images?: SortOrder
    organizationId?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyAvgOrderByAggregateInput = {
    totalUnits?: SortOrder
    yearBuilt?: SortOrder
    squareFeet?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    type?: SortOrder
    description?: SortOrder
    totalUnits?: SortOrder
    yearBuilt?: SortOrder
    squareFeet?: SortOrder
    organizationId?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    type?: SortOrder
    description?: SortOrder
    totalUnits?: SortOrder
    yearBuilt?: SortOrder
    squareFeet?: SortOrder
    organizationId?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertySumOrderByAggregateInput = {
    totalUnits?: SortOrder
    yearBuilt?: SortOrder
    squareFeet?: SortOrder
  }

  export type EnumPropertyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeWithAggregatesFilter<$PrismaModel> | $Enums.PropertyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyTypeFilter<$PrismaModel>
    _max?: NestedEnumPropertyTypeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type PropertyRelationFilter = {
    is?: PropertyWhereInput
    isNot?: PropertyWhereInput
  }

  export type LeaseListRelationFilter = {
    every?: LeaseWhereInput
    some?: LeaseWhereInput
    none?: LeaseWhereInput
  }

  export type LeaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UnitPropertyIdNumberCompoundUniqueInput = {
    propertyId: string
    number: string
  }

  export type UnitCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    floor?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareFeet?: SortOrder
    monthlyRent?: SortOrder
    securityDeposit?: SortOrder
    isOccupied?: SortOrder
    features?: SortOrder
    propertyId?: SortOrder
    currentLeaseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitAvgOrderByAggregateInput = {
    floor?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareFeet?: SortOrder
    monthlyRent?: SortOrder
    securityDeposit?: SortOrder
  }

  export type UnitMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    floor?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareFeet?: SortOrder
    monthlyRent?: SortOrder
    securityDeposit?: SortOrder
    isOccupied?: SortOrder
    propertyId?: SortOrder
    currentLeaseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    floor?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareFeet?: SortOrder
    monthlyRent?: SortOrder
    securityDeposit?: SortOrder
    isOccupied?: SortOrder
    propertyId?: SortOrder
    currentLeaseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitSumOrderByAggregateInput = {
    floor?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareFeet?: SortOrder
    monthlyRent?: SortOrder
    securityDeposit?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    emergencyContact?: SortOrder
    moveInDate?: SortOrder
    moveOutDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    moveInDate?: SortOrder
    moveOutDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    moveInDate?: SortOrder
    moveOutDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TenantRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type UnitRelationFilter = {
    is?: UnitWhereInput
    isNot?: UnitWhereInput
  }

  export type LeaseCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    unitId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    monthlyRent?: SortOrder
    securityDeposit?: SortOrder
    lateFeeDays?: SortOrder
    lateFeeAmount?: SortOrder
    terms?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaseAvgOrderByAggregateInput = {
    monthlyRent?: SortOrder
    securityDeposit?: SortOrder
    lateFeeDays?: SortOrder
    lateFeeAmount?: SortOrder
  }

  export type LeaseMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    unitId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    monthlyRent?: SortOrder
    securityDeposit?: SortOrder
    lateFeeDays?: SortOrder
    lateFeeAmount?: SortOrder
    terms?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaseMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    unitId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    monthlyRent?: SortOrder
    securityDeposit?: SortOrder
    lateFeeDays?: SortOrder
    lateFeeAmount?: SortOrder
    terms?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaseSumOrderByAggregateInput = {
    monthlyRent?: SortOrder
    securityDeposit?: SortOrder
    lateFeeDays?: SortOrder
    lateFeeAmount?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type VendorCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    businessLicense?: SortOrder
    specialties?: SortOrder
    serviceRadius?: SortOrder
    hourlyRate?: SortOrder
    rating?: SortOrder
    completedJobs?: SortOrder
    isVerified?: SortOrder
    availability?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorAvgOrderByAggregateInput = {
    serviceRadius?: SortOrder
    hourlyRate?: SortOrder
    rating?: SortOrder
    completedJobs?: SortOrder
  }

  export type VendorMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    businessLicense?: SortOrder
    serviceRadius?: SortOrder
    hourlyRate?: SortOrder
    rating?: SortOrder
    completedJobs?: SortOrder
    isVerified?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    businessLicense?: SortOrder
    serviceRadius?: SortOrder
    hourlyRate?: SortOrder
    rating?: SortOrder
    completedJobs?: SortOrder
    isVerified?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorSumOrderByAggregateInput = {
    serviceRadius?: SortOrder
    hourlyRate?: SortOrder
    rating?: SortOrder
    completedJobs?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumMaintenancePriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.MaintenancePriority | EnumMaintenancePriorityFieldRefInput<$PrismaModel>
    in?: $Enums.MaintenancePriority[] | ListEnumMaintenancePriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaintenancePriority[] | ListEnumMaintenancePriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumMaintenancePriorityFilter<$PrismaModel> | $Enums.MaintenancePriority
  }

  export type EnumMaintenanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MaintenanceStatus | EnumMaintenanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaintenanceStatus[] | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaintenanceStatus[] | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaintenanceStatusFilter<$PrismaModel> | $Enums.MaintenanceStatus
  }

  export type UnitNullableRelationFilter = {
    is?: UnitWhereInput | null
    isNot?: UnitWhereInput | null
  }

  export type MaintenanceRequestCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    propertyId?: SortOrder
    unitId?: SortOrder
    tenantId?: SortOrder
    assignedVendorId?: SortOrder
    estimatedCost?: SortOrder
    actualCost?: SortOrder
    scheduledDate?: SortOrder
    completedDate?: SortOrder
    images?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaintenanceRequestAvgOrderByAggregateInput = {
    estimatedCost?: SortOrder
    actualCost?: SortOrder
  }

  export type MaintenanceRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    propertyId?: SortOrder
    unitId?: SortOrder
    tenantId?: SortOrder
    assignedVendorId?: SortOrder
    estimatedCost?: SortOrder
    actualCost?: SortOrder
    scheduledDate?: SortOrder
    completedDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaintenanceRequestMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    propertyId?: SortOrder
    unitId?: SortOrder
    tenantId?: SortOrder
    assignedVendorId?: SortOrder
    estimatedCost?: SortOrder
    actualCost?: SortOrder
    scheduledDate?: SortOrder
    completedDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaintenanceRequestSumOrderByAggregateInput = {
    estimatedCost?: SortOrder
    actualCost?: SortOrder
  }

  export type EnumMaintenancePriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaintenancePriority | EnumMaintenancePriorityFieldRefInput<$PrismaModel>
    in?: $Enums.MaintenancePriority[] | ListEnumMaintenancePriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaintenancePriority[] | ListEnumMaintenancePriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumMaintenancePriorityWithAggregatesFilter<$PrismaModel> | $Enums.MaintenancePriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaintenancePriorityFilter<$PrismaModel>
    _max?: NestedEnumMaintenancePriorityFilter<$PrismaModel>
  }

  export type EnumMaintenanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaintenanceStatus | EnumMaintenanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaintenanceStatus[] | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaintenanceStatus[] | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaintenanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.MaintenanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaintenanceStatusFilter<$PrismaModel>
    _max?: NestedEnumMaintenanceStatusFilter<$PrismaModel>
  }

  export type EnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type PropertyNullableRelationFilter = {
    is?: PropertyWhereInput | null
    isNot?: PropertyWhereInput | null
  }

  export type LeaseNullableRelationFilter = {
    is?: LeaseWhereInput | null
    isNot?: LeaseWhereInput | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MaintenanceRequestNullableRelationFilter = {
    is?: MaintenanceRequestWhereInput | null
    isNot?: MaintenanceRequestWhereInput | null
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    status?: SortOrder
    method?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    paidDate?: SortOrder
    propertyId?: SortOrder
    leaseId?: SortOrder
    tenantId?: SortOrder
    vendorId?: SortOrder
    maintenanceRequestId?: SortOrder
    transactionId?: SortOrder
    fees?: SortOrder
    lateFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
    fees?: SortOrder
    lateFee?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    status?: SortOrder
    method?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    paidDate?: SortOrder
    propertyId?: SortOrder
    leaseId?: SortOrder
    tenantId?: SortOrder
    vendorId?: SortOrder
    maintenanceRequestId?: SortOrder
    transactionId?: SortOrder
    fees?: SortOrder
    lateFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    status?: SortOrder
    method?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    paidDate?: SortOrder
    propertyId?: SortOrder
    leaseId?: SortOrder
    tenantId?: SortOrder
    vendorId?: SortOrder
    maintenanceRequestId?: SortOrder
    transactionId?: SortOrder
    fees?: SortOrder
    lateFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
    fees?: SortOrder
    lateFee?: SortOrder
  }

  export type EnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    threadId?: SortOrder
    isRead?: SortOrder
    attachments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    threadId?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    threadId?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    details?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PropertyCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<PropertyCreateWithoutOrganizationInput, PropertyUncheckedCreateWithoutOrganizationInput> | PropertyCreateWithoutOrganizationInput[] | PropertyUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOrganizationInput | PropertyCreateOrConnectWithoutOrganizationInput[]
    createMany?: PropertyCreateManyOrganizationInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type VendorCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<VendorCreateWithoutOrganizationInput, VendorUncheckedCreateWithoutOrganizationInput> | VendorCreateWithoutOrganizationInput[] | VendorUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: VendorCreateOrConnectWithoutOrganizationInput | VendorCreateOrConnectWithoutOrganizationInput[]
    createMany?: VendorCreateManyOrganizationInputEnvelope
    connect?: VendorWhereUniqueInput | VendorWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<PropertyCreateWithoutOrganizationInput, PropertyUncheckedCreateWithoutOrganizationInput> | PropertyCreateWithoutOrganizationInput[] | PropertyUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOrganizationInput | PropertyCreateOrConnectWithoutOrganizationInput[]
    createMany?: PropertyCreateManyOrganizationInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type VendorUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<VendorCreateWithoutOrganizationInput, VendorUncheckedCreateWithoutOrganizationInput> | VendorCreateWithoutOrganizationInput[] | VendorUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: VendorCreateOrConnectWithoutOrganizationInput | VendorCreateOrConnectWithoutOrganizationInput[]
    createMany?: VendorCreateManyOrganizationInputEnvelope
    connect?: VendorWhereUniqueInput | VendorWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PropertyUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<PropertyCreateWithoutOrganizationInput, PropertyUncheckedCreateWithoutOrganizationInput> | PropertyCreateWithoutOrganizationInput[] | PropertyUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOrganizationInput | PropertyCreateOrConnectWithoutOrganizationInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutOrganizationInput | PropertyUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: PropertyCreateManyOrganizationInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutOrganizationInput | PropertyUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutOrganizationInput | PropertyUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type VendorUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<VendorCreateWithoutOrganizationInput, VendorUncheckedCreateWithoutOrganizationInput> | VendorCreateWithoutOrganizationInput[] | VendorUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: VendorCreateOrConnectWithoutOrganizationInput | VendorCreateOrConnectWithoutOrganizationInput[]
    upsert?: VendorUpsertWithWhereUniqueWithoutOrganizationInput | VendorUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: VendorCreateManyOrganizationInputEnvelope
    set?: VendorWhereUniqueInput | VendorWhereUniqueInput[]
    disconnect?: VendorWhereUniqueInput | VendorWhereUniqueInput[]
    delete?: VendorWhereUniqueInput | VendorWhereUniqueInput[]
    connect?: VendorWhereUniqueInput | VendorWhereUniqueInput[]
    update?: VendorUpdateWithWhereUniqueWithoutOrganizationInput | VendorUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: VendorUpdateManyWithWhereWithoutOrganizationInput | VendorUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: VendorScalarWhereInput | VendorScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<PropertyCreateWithoutOrganizationInput, PropertyUncheckedCreateWithoutOrganizationInput> | PropertyCreateWithoutOrganizationInput[] | PropertyUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOrganizationInput | PropertyCreateOrConnectWithoutOrganizationInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutOrganizationInput | PropertyUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: PropertyCreateManyOrganizationInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutOrganizationInput | PropertyUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutOrganizationInput | PropertyUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type VendorUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<VendorCreateWithoutOrganizationInput, VendorUncheckedCreateWithoutOrganizationInput> | VendorCreateWithoutOrganizationInput[] | VendorUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: VendorCreateOrConnectWithoutOrganizationInput | VendorCreateOrConnectWithoutOrganizationInput[]
    upsert?: VendorUpsertWithWhereUniqueWithoutOrganizationInput | VendorUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: VendorCreateManyOrganizationInputEnvelope
    set?: VendorWhereUniqueInput | VendorWhereUniqueInput[]
    disconnect?: VendorWhereUniqueInput | VendorWhereUniqueInput[]
    delete?: VendorWhereUniqueInput | VendorWhereUniqueInput[]
    connect?: VendorWhereUniqueInput | VendorWhereUniqueInput[]
    update?: VendorUpdateWithWhereUniqueWithoutOrganizationInput | VendorUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: VendorUpdateManyWithWhereWithoutOrganizationInput | VendorUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: VendorScalarWhereInput | VendorScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutUsersInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutUserInput = {
    create?: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUserInput
    connect?: TenantWhereUniqueInput
  }

  export type VendorCreateNestedOneWithoutUserInput = {
    create?: XOR<VendorCreateWithoutUserInput, VendorUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorCreateOrConnectWithoutUserInput
    connect?: VendorWhereUniqueInput
  }

  export type MaintenanceRequestCreateNestedManyWithoutTenantInput = {
    create?: XOR<MaintenanceRequestCreateWithoutTenantInput, MaintenanceRequestUncheckedCreateWithoutTenantInput> | MaintenanceRequestCreateWithoutTenantInput[] | MaintenanceRequestUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutTenantInput | MaintenanceRequestCreateOrConnectWithoutTenantInput[]
    createMany?: MaintenanceRequestCreateManyTenantInputEnvelope
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutTenantInput = {
    create?: XOR<PaymentCreateWithoutTenantInput, PaymentUncheckedCreateWithoutTenantInput> | PaymentCreateWithoutTenantInput[] | PaymentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTenantInput | PaymentCreateOrConnectWithoutTenantInput[]
    createMany?: PaymentCreateManyTenantInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type TenantUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUserInput
    connect?: TenantWhereUniqueInput
  }

  export type VendorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<VendorCreateWithoutUserInput, VendorUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorCreateOrConnectWithoutUserInput
    connect?: VendorWhereUniqueInput
  }

  export type MaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<MaintenanceRequestCreateWithoutTenantInput, MaintenanceRequestUncheckedCreateWithoutTenantInput> | MaintenanceRequestCreateWithoutTenantInput[] | MaintenanceRequestUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutTenantInput | MaintenanceRequestCreateOrConnectWithoutTenantInput[]
    createMany?: MaintenanceRequestCreateManyTenantInputEnvelope
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<PaymentCreateWithoutTenantInput, PaymentUncheckedCreateWithoutTenantInput> | PaymentCreateWithoutTenantInput[] | PaymentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTenantInput | PaymentCreateOrConnectWithoutTenantInput[]
    createMany?: PaymentCreateManyTenantInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type OrganizationUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    upsert?: OrganizationUpsertWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutUsersInput, OrganizationUpdateWithoutUsersInput>, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type TenantUpdateOneWithoutUserNestedInput = {
    create?: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUserInput
    upsert?: TenantUpsertWithoutUserInput
    disconnect?: TenantWhereInput | boolean
    delete?: TenantWhereInput | boolean
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutUserInput, TenantUpdateWithoutUserInput>, TenantUncheckedUpdateWithoutUserInput>
  }

  export type VendorUpdateOneWithoutUserNestedInput = {
    create?: XOR<VendorCreateWithoutUserInput, VendorUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorCreateOrConnectWithoutUserInput
    upsert?: VendorUpsertWithoutUserInput
    disconnect?: VendorWhereInput | boolean
    delete?: VendorWhereInput | boolean
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutUserInput, VendorUpdateWithoutUserInput>, VendorUncheckedUpdateWithoutUserInput>
  }

  export type MaintenanceRequestUpdateManyWithoutTenantNestedInput = {
    create?: XOR<MaintenanceRequestCreateWithoutTenantInput, MaintenanceRequestUncheckedCreateWithoutTenantInput> | MaintenanceRequestCreateWithoutTenantInput[] | MaintenanceRequestUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutTenantInput | MaintenanceRequestCreateOrConnectWithoutTenantInput[]
    upsert?: MaintenanceRequestUpsertWithWhereUniqueWithoutTenantInput | MaintenanceRequestUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: MaintenanceRequestCreateManyTenantInputEnvelope
    set?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    disconnect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    delete?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    update?: MaintenanceRequestUpdateWithWhereUniqueWithoutTenantInput | MaintenanceRequestUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: MaintenanceRequestUpdateManyWithWhereWithoutTenantInput | MaintenanceRequestUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: MaintenanceRequestScalarWhereInput | MaintenanceRequestScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PaymentCreateWithoutTenantInput, PaymentUncheckedCreateWithoutTenantInput> | PaymentCreateWithoutTenantInput[] | PaymentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTenantInput | PaymentCreateOrConnectWithoutTenantInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutTenantInput | PaymentUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PaymentCreateManyTenantInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutTenantInput | PaymentUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutTenantInput | PaymentUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type TenantUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUserInput
    upsert?: TenantUpsertWithoutUserInput
    disconnect?: TenantWhereInput | boolean
    delete?: TenantWhereInput | boolean
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutUserInput, TenantUpdateWithoutUserInput>, TenantUncheckedUpdateWithoutUserInput>
  }

  export type VendorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<VendorCreateWithoutUserInput, VendorUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorCreateOrConnectWithoutUserInput
    upsert?: VendorUpsertWithoutUserInput
    disconnect?: VendorWhereInput | boolean
    delete?: VendorWhereInput | boolean
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutUserInput, VendorUpdateWithoutUserInput>, VendorUncheckedUpdateWithoutUserInput>
  }

  export type MaintenanceRequestUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<MaintenanceRequestCreateWithoutTenantInput, MaintenanceRequestUncheckedCreateWithoutTenantInput> | MaintenanceRequestCreateWithoutTenantInput[] | MaintenanceRequestUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutTenantInput | MaintenanceRequestCreateOrConnectWithoutTenantInput[]
    upsert?: MaintenanceRequestUpsertWithWhereUniqueWithoutTenantInput | MaintenanceRequestUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: MaintenanceRequestCreateManyTenantInputEnvelope
    set?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    disconnect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    delete?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    update?: MaintenanceRequestUpdateWithWhereUniqueWithoutTenantInput | MaintenanceRequestUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: MaintenanceRequestUpdateManyWithWhereWithoutTenantInput | MaintenanceRequestUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: MaintenanceRequestScalarWhereInput | MaintenanceRequestScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PaymentCreateWithoutTenantInput, PaymentUncheckedCreateWithoutTenantInput> | PaymentCreateWithoutTenantInput[] | PaymentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTenantInput | PaymentCreateOrConnectWithoutTenantInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutTenantInput | PaymentUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PaymentCreateManyTenantInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutTenantInput | PaymentUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutTenantInput | PaymentUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type PropertyCreateamenitiesInput = {
    set: string[]
  }

  export type PropertyCreateimagesInput = {
    set: string[]
  }

  export type OrganizationCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<OrganizationCreateWithoutPropertiesInput, OrganizationUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutPropertiesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UnitCreateNestedManyWithoutPropertyInput = {
    create?: XOR<UnitCreateWithoutPropertyInput, UnitUncheckedCreateWithoutPropertyInput> | UnitCreateWithoutPropertyInput[] | UnitUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutPropertyInput | UnitCreateOrConnectWithoutPropertyInput[]
    createMany?: UnitCreateManyPropertyInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type MaintenanceRequestCreateNestedManyWithoutPropertyInput = {
    create?: XOR<MaintenanceRequestCreateWithoutPropertyInput, MaintenanceRequestUncheckedCreateWithoutPropertyInput> | MaintenanceRequestCreateWithoutPropertyInput[] | MaintenanceRequestUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutPropertyInput | MaintenanceRequestCreateOrConnectWithoutPropertyInput[]
    createMany?: MaintenanceRequestCreateManyPropertyInputEnvelope
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PaymentCreateWithoutPropertyInput, PaymentUncheckedCreateWithoutPropertyInput> | PaymentCreateWithoutPropertyInput[] | PaymentUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPropertyInput | PaymentCreateOrConnectWithoutPropertyInput[]
    createMany?: PaymentCreateManyPropertyInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type UnitUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<UnitCreateWithoutPropertyInput, UnitUncheckedCreateWithoutPropertyInput> | UnitCreateWithoutPropertyInput[] | UnitUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutPropertyInput | UnitCreateOrConnectWithoutPropertyInput[]
    createMany?: UnitCreateManyPropertyInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type MaintenanceRequestUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<MaintenanceRequestCreateWithoutPropertyInput, MaintenanceRequestUncheckedCreateWithoutPropertyInput> | MaintenanceRequestCreateWithoutPropertyInput[] | MaintenanceRequestUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutPropertyInput | MaintenanceRequestCreateOrConnectWithoutPropertyInput[]
    createMany?: MaintenanceRequestCreateManyPropertyInputEnvelope
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PaymentCreateWithoutPropertyInput, PaymentUncheckedCreateWithoutPropertyInput> | PaymentCreateWithoutPropertyInput[] | PaymentUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPropertyInput | PaymentCreateOrConnectWithoutPropertyInput[]
    createMany?: PaymentCreateManyPropertyInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumPropertyTypeFieldUpdateOperationsInput = {
    set?: $Enums.PropertyType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PropertyUpdateamenitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PropertyUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type OrganizationUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<OrganizationCreateWithoutPropertiesInput, OrganizationUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutPropertiesInput
    upsert?: OrganizationUpsertWithoutPropertiesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutPropertiesInput, OrganizationUpdateWithoutPropertiesInput>, OrganizationUncheckedUpdateWithoutPropertiesInput>
  }

  export type UnitUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<UnitCreateWithoutPropertyInput, UnitUncheckedCreateWithoutPropertyInput> | UnitCreateWithoutPropertyInput[] | UnitUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutPropertyInput | UnitCreateOrConnectWithoutPropertyInput[]
    upsert?: UnitUpsertWithWhereUniqueWithoutPropertyInput | UnitUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: UnitCreateManyPropertyInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?: UnitUpdateWithWhereUniqueWithoutPropertyInput | UnitUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: UnitUpdateManyWithWhereWithoutPropertyInput | UnitUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type MaintenanceRequestUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<MaintenanceRequestCreateWithoutPropertyInput, MaintenanceRequestUncheckedCreateWithoutPropertyInput> | MaintenanceRequestCreateWithoutPropertyInput[] | MaintenanceRequestUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutPropertyInput | MaintenanceRequestCreateOrConnectWithoutPropertyInput[]
    upsert?: MaintenanceRequestUpsertWithWhereUniqueWithoutPropertyInput | MaintenanceRequestUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: MaintenanceRequestCreateManyPropertyInputEnvelope
    set?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    disconnect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    delete?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    update?: MaintenanceRequestUpdateWithWhereUniqueWithoutPropertyInput | MaintenanceRequestUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: MaintenanceRequestUpdateManyWithWhereWithoutPropertyInput | MaintenanceRequestUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: MaintenanceRequestScalarWhereInput | MaintenanceRequestScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PaymentCreateWithoutPropertyInput, PaymentUncheckedCreateWithoutPropertyInput> | PaymentCreateWithoutPropertyInput[] | PaymentUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPropertyInput | PaymentCreateOrConnectWithoutPropertyInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutPropertyInput | PaymentUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PaymentCreateManyPropertyInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutPropertyInput | PaymentUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutPropertyInput | PaymentUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UnitUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<UnitCreateWithoutPropertyInput, UnitUncheckedCreateWithoutPropertyInput> | UnitCreateWithoutPropertyInput[] | UnitUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutPropertyInput | UnitCreateOrConnectWithoutPropertyInput[]
    upsert?: UnitUpsertWithWhereUniqueWithoutPropertyInput | UnitUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: UnitCreateManyPropertyInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?: UnitUpdateWithWhereUniqueWithoutPropertyInput | UnitUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: UnitUpdateManyWithWhereWithoutPropertyInput | UnitUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type MaintenanceRequestUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<MaintenanceRequestCreateWithoutPropertyInput, MaintenanceRequestUncheckedCreateWithoutPropertyInput> | MaintenanceRequestCreateWithoutPropertyInput[] | MaintenanceRequestUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutPropertyInput | MaintenanceRequestCreateOrConnectWithoutPropertyInput[]
    upsert?: MaintenanceRequestUpsertWithWhereUniqueWithoutPropertyInput | MaintenanceRequestUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: MaintenanceRequestCreateManyPropertyInputEnvelope
    set?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    disconnect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    delete?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    update?: MaintenanceRequestUpdateWithWhereUniqueWithoutPropertyInput | MaintenanceRequestUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: MaintenanceRequestUpdateManyWithWhereWithoutPropertyInput | MaintenanceRequestUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: MaintenanceRequestScalarWhereInput | MaintenanceRequestScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PaymentCreateWithoutPropertyInput, PaymentUncheckedCreateWithoutPropertyInput> | PaymentCreateWithoutPropertyInput[] | PaymentUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPropertyInput | PaymentCreateOrConnectWithoutPropertyInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutPropertyInput | PaymentUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PaymentCreateManyPropertyInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutPropertyInput | PaymentUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutPropertyInput | PaymentUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UnitCreatefeaturesInput = {
    set: string[]
  }

  export type PropertyCreateNestedOneWithoutUnitsInput = {
    create?: XOR<PropertyCreateWithoutUnitsInput, PropertyUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutUnitsInput
    connect?: PropertyWhereUniqueInput
  }

  export type LeaseCreateNestedManyWithoutUnitInput = {
    create?: XOR<LeaseCreateWithoutUnitInput, LeaseUncheckedCreateWithoutUnitInput> | LeaseCreateWithoutUnitInput[] | LeaseUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutUnitInput | LeaseCreateOrConnectWithoutUnitInput[]
    createMany?: LeaseCreateManyUnitInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type MaintenanceRequestCreateNestedManyWithoutUnitInput = {
    create?: XOR<MaintenanceRequestCreateWithoutUnitInput, MaintenanceRequestUncheckedCreateWithoutUnitInput> | MaintenanceRequestCreateWithoutUnitInput[] | MaintenanceRequestUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutUnitInput | MaintenanceRequestCreateOrConnectWithoutUnitInput[]
    createMany?: MaintenanceRequestCreateManyUnitInputEnvelope
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
  }

  export type LeaseUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<LeaseCreateWithoutUnitInput, LeaseUncheckedCreateWithoutUnitInput> | LeaseCreateWithoutUnitInput[] | LeaseUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutUnitInput | LeaseCreateOrConnectWithoutUnitInput[]
    createMany?: LeaseCreateManyUnitInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type MaintenanceRequestUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<MaintenanceRequestCreateWithoutUnitInput, MaintenanceRequestUncheckedCreateWithoutUnitInput> | MaintenanceRequestCreateWithoutUnitInput[] | MaintenanceRequestUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutUnitInput | MaintenanceRequestCreateOrConnectWithoutUnitInput[]
    createMany?: MaintenanceRequestCreateManyUnitInputEnvelope
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UnitUpdatefeaturesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PropertyUpdateOneRequiredWithoutUnitsNestedInput = {
    create?: XOR<PropertyCreateWithoutUnitsInput, PropertyUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutUnitsInput
    upsert?: PropertyUpsertWithoutUnitsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutUnitsInput, PropertyUpdateWithoutUnitsInput>, PropertyUncheckedUpdateWithoutUnitsInput>
  }

  export type LeaseUpdateManyWithoutUnitNestedInput = {
    create?: XOR<LeaseCreateWithoutUnitInput, LeaseUncheckedCreateWithoutUnitInput> | LeaseCreateWithoutUnitInput[] | LeaseUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutUnitInput | LeaseCreateOrConnectWithoutUnitInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutUnitInput | LeaseUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: LeaseCreateManyUnitInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutUnitInput | LeaseUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutUnitInput | LeaseUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type MaintenanceRequestUpdateManyWithoutUnitNestedInput = {
    create?: XOR<MaintenanceRequestCreateWithoutUnitInput, MaintenanceRequestUncheckedCreateWithoutUnitInput> | MaintenanceRequestCreateWithoutUnitInput[] | MaintenanceRequestUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutUnitInput | MaintenanceRequestCreateOrConnectWithoutUnitInput[]
    upsert?: MaintenanceRequestUpsertWithWhereUniqueWithoutUnitInput | MaintenanceRequestUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: MaintenanceRequestCreateManyUnitInputEnvelope
    set?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    disconnect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    delete?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    update?: MaintenanceRequestUpdateWithWhereUniqueWithoutUnitInput | MaintenanceRequestUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: MaintenanceRequestUpdateManyWithWhereWithoutUnitInput | MaintenanceRequestUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: MaintenanceRequestScalarWhereInput | MaintenanceRequestScalarWhereInput[]
  }

  export type LeaseUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<LeaseCreateWithoutUnitInput, LeaseUncheckedCreateWithoutUnitInput> | LeaseCreateWithoutUnitInput[] | LeaseUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutUnitInput | LeaseCreateOrConnectWithoutUnitInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutUnitInput | LeaseUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: LeaseCreateManyUnitInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutUnitInput | LeaseUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutUnitInput | LeaseUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type MaintenanceRequestUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<MaintenanceRequestCreateWithoutUnitInput, MaintenanceRequestUncheckedCreateWithoutUnitInput> | MaintenanceRequestCreateWithoutUnitInput[] | MaintenanceRequestUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutUnitInput | MaintenanceRequestCreateOrConnectWithoutUnitInput[]
    upsert?: MaintenanceRequestUpsertWithWhereUniqueWithoutUnitInput | MaintenanceRequestUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: MaintenanceRequestCreateManyUnitInputEnvelope
    set?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    disconnect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    delete?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    update?: MaintenanceRequestUpdateWithWhereUniqueWithoutUnitInput | MaintenanceRequestUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: MaintenanceRequestUpdateManyWithWhereWithoutUnitInput | MaintenanceRequestUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: MaintenanceRequestScalarWhereInput | MaintenanceRequestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTenantProfileInput = {
    create?: XOR<UserCreateWithoutTenantProfileInput, UserUncheckedCreateWithoutTenantProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutTenantProfileInput
    connect?: UserWhereUniqueInput
  }

  export type LeaseCreateNestedManyWithoutTenantInput = {
    create?: XOR<LeaseCreateWithoutTenantInput, LeaseUncheckedCreateWithoutTenantInput> | LeaseCreateWithoutTenantInput[] | LeaseUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutTenantInput | LeaseCreateOrConnectWithoutTenantInput[]
    createMany?: LeaseCreateManyTenantInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type LeaseUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<LeaseCreateWithoutTenantInput, LeaseUncheckedCreateWithoutTenantInput> | LeaseCreateWithoutTenantInput[] | LeaseUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutTenantInput | LeaseCreateOrConnectWithoutTenantInput[]
    createMany?: LeaseCreateManyTenantInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutTenantProfileNestedInput = {
    create?: XOR<UserCreateWithoutTenantProfileInput, UserUncheckedCreateWithoutTenantProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutTenantProfileInput
    upsert?: UserUpsertWithoutTenantProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTenantProfileInput, UserUpdateWithoutTenantProfileInput>, UserUncheckedUpdateWithoutTenantProfileInput>
  }

  export type LeaseUpdateManyWithoutTenantNestedInput = {
    create?: XOR<LeaseCreateWithoutTenantInput, LeaseUncheckedCreateWithoutTenantInput> | LeaseCreateWithoutTenantInput[] | LeaseUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutTenantInput | LeaseCreateOrConnectWithoutTenantInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutTenantInput | LeaseUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: LeaseCreateManyTenantInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutTenantInput | LeaseUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutTenantInput | LeaseUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type LeaseUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<LeaseCreateWithoutTenantInput, LeaseUncheckedCreateWithoutTenantInput> | LeaseCreateWithoutTenantInput[] | LeaseUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutTenantInput | LeaseCreateOrConnectWithoutTenantInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutTenantInput | LeaseUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: LeaseCreateManyTenantInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutTenantInput | LeaseUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutTenantInput | LeaseUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutLeasesInput = {
    create?: XOR<TenantCreateWithoutLeasesInput, TenantUncheckedCreateWithoutLeasesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutLeasesInput
    connect?: TenantWhereUniqueInput
  }

  export type UnitCreateNestedOneWithoutLeasesInput = {
    create?: XOR<UnitCreateWithoutLeasesInput, UnitUncheckedCreateWithoutLeasesInput>
    connectOrCreate?: UnitCreateOrConnectWithoutLeasesInput
    connect?: UnitWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutLeaseInput = {
    create?: XOR<PaymentCreateWithoutLeaseInput, PaymentUncheckedCreateWithoutLeaseInput> | PaymentCreateWithoutLeaseInput[] | PaymentUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutLeaseInput | PaymentCreateOrConnectWithoutLeaseInput[]
    createMany?: PaymentCreateManyLeaseInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutLeaseInput = {
    create?: XOR<PaymentCreateWithoutLeaseInput, PaymentUncheckedCreateWithoutLeaseInput> | PaymentCreateWithoutLeaseInput[] | PaymentUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutLeaseInput | PaymentCreateOrConnectWithoutLeaseInput[]
    createMany?: PaymentCreateManyLeaseInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type TenantUpdateOneRequiredWithoutLeasesNestedInput = {
    create?: XOR<TenantCreateWithoutLeasesInput, TenantUncheckedCreateWithoutLeasesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutLeasesInput
    upsert?: TenantUpsertWithoutLeasesInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutLeasesInput, TenantUpdateWithoutLeasesInput>, TenantUncheckedUpdateWithoutLeasesInput>
  }

  export type UnitUpdateOneRequiredWithoutLeasesNestedInput = {
    create?: XOR<UnitCreateWithoutLeasesInput, UnitUncheckedCreateWithoutLeasesInput>
    connectOrCreate?: UnitCreateOrConnectWithoutLeasesInput
    upsert?: UnitUpsertWithoutLeasesInput
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutLeasesInput, UnitUpdateWithoutLeasesInput>, UnitUncheckedUpdateWithoutLeasesInput>
  }

  export type PaymentUpdateManyWithoutLeaseNestedInput = {
    create?: XOR<PaymentCreateWithoutLeaseInput, PaymentUncheckedCreateWithoutLeaseInput> | PaymentCreateWithoutLeaseInput[] | PaymentUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutLeaseInput | PaymentCreateOrConnectWithoutLeaseInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutLeaseInput | PaymentUpsertWithWhereUniqueWithoutLeaseInput[]
    createMany?: PaymentCreateManyLeaseInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutLeaseInput | PaymentUpdateWithWhereUniqueWithoutLeaseInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutLeaseInput | PaymentUpdateManyWithWhereWithoutLeaseInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutLeaseNestedInput = {
    create?: XOR<PaymentCreateWithoutLeaseInput, PaymentUncheckedCreateWithoutLeaseInput> | PaymentCreateWithoutLeaseInput[] | PaymentUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutLeaseInput | PaymentCreateOrConnectWithoutLeaseInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutLeaseInput | PaymentUpsertWithWhereUniqueWithoutLeaseInput[]
    createMany?: PaymentCreateManyLeaseInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutLeaseInput | PaymentUpdateWithWhereUniqueWithoutLeaseInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutLeaseInput | PaymentUpdateManyWithWhereWithoutLeaseInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type VendorCreatespecialtiesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutVendorProfileInput = {
    create?: XOR<UserCreateWithoutVendorProfileInput, UserUncheckedCreateWithoutVendorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutVendorProfileInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutVendorsInput = {
    create?: XOR<OrganizationCreateWithoutVendorsInput, OrganizationUncheckedCreateWithoutVendorsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutVendorsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type MaintenanceRequestCreateNestedManyWithoutAssignedVendorInput = {
    create?: XOR<MaintenanceRequestCreateWithoutAssignedVendorInput, MaintenanceRequestUncheckedCreateWithoutAssignedVendorInput> | MaintenanceRequestCreateWithoutAssignedVendorInput[] | MaintenanceRequestUncheckedCreateWithoutAssignedVendorInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutAssignedVendorInput | MaintenanceRequestCreateOrConnectWithoutAssignedVendorInput[]
    createMany?: MaintenanceRequestCreateManyAssignedVendorInputEnvelope
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutVendorInput = {
    create?: XOR<PaymentCreateWithoutVendorInput, PaymentUncheckedCreateWithoutVendorInput> | PaymentCreateWithoutVendorInput[] | PaymentUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutVendorInput | PaymentCreateOrConnectWithoutVendorInput[]
    createMany?: PaymentCreateManyVendorInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type MaintenanceRequestUncheckedCreateNestedManyWithoutAssignedVendorInput = {
    create?: XOR<MaintenanceRequestCreateWithoutAssignedVendorInput, MaintenanceRequestUncheckedCreateWithoutAssignedVendorInput> | MaintenanceRequestCreateWithoutAssignedVendorInput[] | MaintenanceRequestUncheckedCreateWithoutAssignedVendorInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutAssignedVendorInput | MaintenanceRequestCreateOrConnectWithoutAssignedVendorInput[]
    createMany?: MaintenanceRequestCreateManyAssignedVendorInputEnvelope
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<PaymentCreateWithoutVendorInput, PaymentUncheckedCreateWithoutVendorInput> | PaymentCreateWithoutVendorInput[] | PaymentUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutVendorInput | PaymentCreateOrConnectWithoutVendorInput[]
    createMany?: PaymentCreateManyVendorInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type VendorUpdatespecialtiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutVendorProfileNestedInput = {
    create?: XOR<UserCreateWithoutVendorProfileInput, UserUncheckedCreateWithoutVendorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutVendorProfileInput
    upsert?: UserUpsertWithoutVendorProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVendorProfileInput, UserUpdateWithoutVendorProfileInput>, UserUncheckedUpdateWithoutVendorProfileInput>
  }

  export type OrganizationUpdateOneRequiredWithoutVendorsNestedInput = {
    create?: XOR<OrganizationCreateWithoutVendorsInput, OrganizationUncheckedCreateWithoutVendorsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutVendorsInput
    upsert?: OrganizationUpsertWithoutVendorsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutVendorsInput, OrganizationUpdateWithoutVendorsInput>, OrganizationUncheckedUpdateWithoutVendorsInput>
  }

  export type MaintenanceRequestUpdateManyWithoutAssignedVendorNestedInput = {
    create?: XOR<MaintenanceRequestCreateWithoutAssignedVendorInput, MaintenanceRequestUncheckedCreateWithoutAssignedVendorInput> | MaintenanceRequestCreateWithoutAssignedVendorInput[] | MaintenanceRequestUncheckedCreateWithoutAssignedVendorInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutAssignedVendorInput | MaintenanceRequestCreateOrConnectWithoutAssignedVendorInput[]
    upsert?: MaintenanceRequestUpsertWithWhereUniqueWithoutAssignedVendorInput | MaintenanceRequestUpsertWithWhereUniqueWithoutAssignedVendorInput[]
    createMany?: MaintenanceRequestCreateManyAssignedVendorInputEnvelope
    set?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    disconnect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    delete?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    update?: MaintenanceRequestUpdateWithWhereUniqueWithoutAssignedVendorInput | MaintenanceRequestUpdateWithWhereUniqueWithoutAssignedVendorInput[]
    updateMany?: MaintenanceRequestUpdateManyWithWhereWithoutAssignedVendorInput | MaintenanceRequestUpdateManyWithWhereWithoutAssignedVendorInput[]
    deleteMany?: MaintenanceRequestScalarWhereInput | MaintenanceRequestScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutVendorNestedInput = {
    create?: XOR<PaymentCreateWithoutVendorInput, PaymentUncheckedCreateWithoutVendorInput> | PaymentCreateWithoutVendorInput[] | PaymentUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutVendorInput | PaymentCreateOrConnectWithoutVendorInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutVendorInput | PaymentUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: PaymentCreateManyVendorInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutVendorInput | PaymentUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutVendorInput | PaymentUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type MaintenanceRequestUncheckedUpdateManyWithoutAssignedVendorNestedInput = {
    create?: XOR<MaintenanceRequestCreateWithoutAssignedVendorInput, MaintenanceRequestUncheckedCreateWithoutAssignedVendorInput> | MaintenanceRequestCreateWithoutAssignedVendorInput[] | MaintenanceRequestUncheckedCreateWithoutAssignedVendorInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutAssignedVendorInput | MaintenanceRequestCreateOrConnectWithoutAssignedVendorInput[]
    upsert?: MaintenanceRequestUpsertWithWhereUniqueWithoutAssignedVendorInput | MaintenanceRequestUpsertWithWhereUniqueWithoutAssignedVendorInput[]
    createMany?: MaintenanceRequestCreateManyAssignedVendorInputEnvelope
    set?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    disconnect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    delete?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    update?: MaintenanceRequestUpdateWithWhereUniqueWithoutAssignedVendorInput | MaintenanceRequestUpdateWithWhereUniqueWithoutAssignedVendorInput[]
    updateMany?: MaintenanceRequestUpdateManyWithWhereWithoutAssignedVendorInput | MaintenanceRequestUpdateManyWithWhereWithoutAssignedVendorInput[]
    deleteMany?: MaintenanceRequestScalarWhereInput | MaintenanceRequestScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<PaymentCreateWithoutVendorInput, PaymentUncheckedCreateWithoutVendorInput> | PaymentCreateWithoutVendorInput[] | PaymentUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutVendorInput | PaymentCreateOrConnectWithoutVendorInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutVendorInput | PaymentUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: PaymentCreateManyVendorInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutVendorInput | PaymentUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutVendorInput | PaymentUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type MaintenanceRequestCreateimagesInput = {
    set: string[]
  }

  export type PropertyCreateNestedOneWithoutMaintenanceRequestsInput = {
    create?: XOR<PropertyCreateWithoutMaintenanceRequestsInput, PropertyUncheckedCreateWithoutMaintenanceRequestsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutMaintenanceRequestsInput
    connect?: PropertyWhereUniqueInput
  }

  export type UnitCreateNestedOneWithoutMaintenanceRequestsInput = {
    create?: XOR<UnitCreateWithoutMaintenanceRequestsInput, UnitUncheckedCreateWithoutMaintenanceRequestsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutMaintenanceRequestsInput
    connect?: UnitWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMaintenanceRequestsInput = {
    create?: XOR<UserCreateWithoutMaintenanceRequestsInput, UserUncheckedCreateWithoutMaintenanceRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMaintenanceRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type VendorCreateNestedOneWithoutMaintenanceRequestsInput = {
    create?: XOR<VendorCreateWithoutMaintenanceRequestsInput, VendorUncheckedCreateWithoutMaintenanceRequestsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutMaintenanceRequestsInput
    connect?: VendorWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutMaintenanceRequestInput = {
    create?: XOR<PaymentCreateWithoutMaintenanceRequestInput, PaymentUncheckedCreateWithoutMaintenanceRequestInput> | PaymentCreateWithoutMaintenanceRequestInput[] | PaymentUncheckedCreateWithoutMaintenanceRequestInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutMaintenanceRequestInput | PaymentCreateOrConnectWithoutMaintenanceRequestInput[]
    createMany?: PaymentCreateManyMaintenanceRequestInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutMaintenanceRequestInput = {
    create?: XOR<PaymentCreateWithoutMaintenanceRequestInput, PaymentUncheckedCreateWithoutMaintenanceRequestInput> | PaymentCreateWithoutMaintenanceRequestInput[] | PaymentUncheckedCreateWithoutMaintenanceRequestInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutMaintenanceRequestInput | PaymentCreateOrConnectWithoutMaintenanceRequestInput[]
    createMany?: PaymentCreateManyMaintenanceRequestInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumMaintenancePriorityFieldUpdateOperationsInput = {
    set?: $Enums.MaintenancePriority
  }

  export type EnumMaintenanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.MaintenanceStatus
  }

  export type MaintenanceRequestUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PropertyUpdateOneRequiredWithoutMaintenanceRequestsNestedInput = {
    create?: XOR<PropertyCreateWithoutMaintenanceRequestsInput, PropertyUncheckedCreateWithoutMaintenanceRequestsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutMaintenanceRequestsInput
    upsert?: PropertyUpsertWithoutMaintenanceRequestsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutMaintenanceRequestsInput, PropertyUpdateWithoutMaintenanceRequestsInput>, PropertyUncheckedUpdateWithoutMaintenanceRequestsInput>
  }

  export type UnitUpdateOneWithoutMaintenanceRequestsNestedInput = {
    create?: XOR<UnitCreateWithoutMaintenanceRequestsInput, UnitUncheckedCreateWithoutMaintenanceRequestsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutMaintenanceRequestsInput
    upsert?: UnitUpsertWithoutMaintenanceRequestsInput
    disconnect?: UnitWhereInput | boolean
    delete?: UnitWhereInput | boolean
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutMaintenanceRequestsInput, UnitUpdateWithoutMaintenanceRequestsInput>, UnitUncheckedUpdateWithoutMaintenanceRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutMaintenanceRequestsNestedInput = {
    create?: XOR<UserCreateWithoutMaintenanceRequestsInput, UserUncheckedCreateWithoutMaintenanceRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMaintenanceRequestsInput
    upsert?: UserUpsertWithoutMaintenanceRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMaintenanceRequestsInput, UserUpdateWithoutMaintenanceRequestsInput>, UserUncheckedUpdateWithoutMaintenanceRequestsInput>
  }

  export type VendorUpdateOneWithoutMaintenanceRequestsNestedInput = {
    create?: XOR<VendorCreateWithoutMaintenanceRequestsInput, VendorUncheckedCreateWithoutMaintenanceRequestsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutMaintenanceRequestsInput
    upsert?: VendorUpsertWithoutMaintenanceRequestsInput
    disconnect?: VendorWhereInput | boolean
    delete?: VendorWhereInput | boolean
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutMaintenanceRequestsInput, VendorUpdateWithoutMaintenanceRequestsInput>, VendorUncheckedUpdateWithoutMaintenanceRequestsInput>
  }

  export type PaymentUpdateManyWithoutMaintenanceRequestNestedInput = {
    create?: XOR<PaymentCreateWithoutMaintenanceRequestInput, PaymentUncheckedCreateWithoutMaintenanceRequestInput> | PaymentCreateWithoutMaintenanceRequestInput[] | PaymentUncheckedCreateWithoutMaintenanceRequestInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutMaintenanceRequestInput | PaymentCreateOrConnectWithoutMaintenanceRequestInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutMaintenanceRequestInput | PaymentUpsertWithWhereUniqueWithoutMaintenanceRequestInput[]
    createMany?: PaymentCreateManyMaintenanceRequestInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutMaintenanceRequestInput | PaymentUpdateWithWhereUniqueWithoutMaintenanceRequestInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutMaintenanceRequestInput | PaymentUpdateManyWithWhereWithoutMaintenanceRequestInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutMaintenanceRequestNestedInput = {
    create?: XOR<PaymentCreateWithoutMaintenanceRequestInput, PaymentUncheckedCreateWithoutMaintenanceRequestInput> | PaymentCreateWithoutMaintenanceRequestInput[] | PaymentUncheckedCreateWithoutMaintenanceRequestInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutMaintenanceRequestInput | PaymentCreateOrConnectWithoutMaintenanceRequestInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutMaintenanceRequestInput | PaymentUpsertWithWhereUniqueWithoutMaintenanceRequestInput[]
    createMany?: PaymentCreateManyMaintenanceRequestInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutMaintenanceRequestInput | PaymentUpdateWithWhereUniqueWithoutMaintenanceRequestInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutMaintenanceRequestInput | PaymentUpdateManyWithWhereWithoutMaintenanceRequestInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PropertyCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<PropertyCreateWithoutPaymentsInput, PropertyUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutPaymentsInput
    connect?: PropertyWhereUniqueInput
  }

  export type LeaseCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<LeaseCreateWithoutPaymentsInput, LeaseUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: LeaseCreateOrConnectWithoutPaymentsInput
    connect?: LeaseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type VendorCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<VendorCreateWithoutPaymentsInput, VendorUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutPaymentsInput
    connect?: VendorWhereUniqueInput
  }

  export type MaintenanceRequestCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<MaintenanceRequestCreateWithoutPaymentsInput, MaintenanceRequestUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutPaymentsInput
    connect?: MaintenanceRequestWhereUniqueInput
  }

  export type EnumPaymentTypeFieldUpdateOperationsInput = {
    set?: $Enums.PaymentType
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type PropertyUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<PropertyCreateWithoutPaymentsInput, PropertyUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutPaymentsInput
    upsert?: PropertyUpsertWithoutPaymentsInput
    disconnect?: PropertyWhereInput | boolean
    delete?: PropertyWhereInput | boolean
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutPaymentsInput, PropertyUpdateWithoutPaymentsInput>, PropertyUncheckedUpdateWithoutPaymentsInput>
  }

  export type LeaseUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<LeaseCreateWithoutPaymentsInput, LeaseUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: LeaseCreateOrConnectWithoutPaymentsInput
    upsert?: LeaseUpsertWithoutPaymentsInput
    disconnect?: LeaseWhereInput | boolean
    delete?: LeaseWhereInput | boolean
    connect?: LeaseWhereUniqueInput
    update?: XOR<XOR<LeaseUpdateToOneWithWhereWithoutPaymentsInput, LeaseUpdateWithoutPaymentsInput>, LeaseUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type VendorUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<VendorCreateWithoutPaymentsInput, VendorUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutPaymentsInput
    upsert?: VendorUpsertWithoutPaymentsInput
    disconnect?: VendorWhereInput | boolean
    delete?: VendorWhereInput | boolean
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutPaymentsInput, VendorUpdateWithoutPaymentsInput>, VendorUncheckedUpdateWithoutPaymentsInput>
  }

  export type MaintenanceRequestUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<MaintenanceRequestCreateWithoutPaymentsInput, MaintenanceRequestUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutPaymentsInput
    upsert?: MaintenanceRequestUpsertWithoutPaymentsInput
    disconnect?: MaintenanceRequestWhereInput | boolean
    delete?: MaintenanceRequestWhereInput | boolean
    connect?: MaintenanceRequestWhereUniqueInput
    update?: XOR<XOR<MaintenanceRequestUpdateToOneWithWhereWithoutPaymentsInput, MaintenanceRequestUpdateWithoutPaymentsInput>, MaintenanceRequestUncheckedUpdateWithoutPaymentsInput>
  }

  export type MessageCreateattachmentsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type MessageUpdateattachmentsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumPropertyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeFilter<$PrismaModel> | $Enums.PropertyType
  }

  export type NestedEnumPropertyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeWithAggregatesFilter<$PrismaModel> | $Enums.PropertyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyTypeFilter<$PrismaModel>
    _max?: NestedEnumPropertyTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumMaintenancePriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.MaintenancePriority | EnumMaintenancePriorityFieldRefInput<$PrismaModel>
    in?: $Enums.MaintenancePriority[] | ListEnumMaintenancePriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaintenancePriority[] | ListEnumMaintenancePriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumMaintenancePriorityFilter<$PrismaModel> | $Enums.MaintenancePriority
  }

  export type NestedEnumMaintenanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MaintenanceStatus | EnumMaintenanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaintenanceStatus[] | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaintenanceStatus[] | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaintenanceStatusFilter<$PrismaModel> | $Enums.MaintenanceStatus
  }

  export type NestedEnumMaintenancePriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaintenancePriority | EnumMaintenancePriorityFieldRefInput<$PrismaModel>
    in?: $Enums.MaintenancePriority[] | ListEnumMaintenancePriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaintenancePriority[] | ListEnumMaintenancePriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumMaintenancePriorityWithAggregatesFilter<$PrismaModel> | $Enums.MaintenancePriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaintenancePriorityFilter<$PrismaModel>
    _max?: NestedEnumMaintenancePriorityFilter<$PrismaModel>
  }

  export type NestedEnumMaintenanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaintenanceStatus | EnumMaintenanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaintenanceStatus[] | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaintenanceStatus[] | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaintenanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.MaintenanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaintenanceStatusFilter<$PrismaModel>
    _max?: NestedEnumMaintenanceStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type UserCreateWithoutOrganizationInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    avatar?: string | null
    emailVerified?: boolean
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantProfile?: TenantCreateNestedOneWithoutUserInput
    vendorProfile?: VendorCreateNestedOneWithoutUserInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutTenantInput
    payments?: PaymentCreateNestedManyWithoutTenantInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutOrganizationInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    avatar?: string | null
    emailVerified?: boolean
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantProfile?: TenantUncheckedCreateNestedOneWithoutUserInput
    vendorProfile?: VendorUncheckedCreateNestedOneWithoutUserInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserCreateManyOrganizationInputEnvelope = {
    data: UserCreateManyOrganizationInput | UserCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type PropertyCreateWithoutOrganizationInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zipCode: string
    type: $Enums.PropertyType
    description?: string | null
    totalUnits?: number
    yearBuilt?: number | null
    squareFeet?: number | null
    amenities?: PropertyCreateamenitiesInput | string[]
    images?: PropertyCreateimagesInput | string[]
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    units?: UnitCreateNestedManyWithoutPropertyInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutPropertyInput
    payments?: PaymentCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutOrganizationInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zipCode: string
    type: $Enums.PropertyType
    description?: string | null
    totalUnits?: number
    yearBuilt?: number | null
    squareFeet?: number | null
    amenities?: PropertyCreateamenitiesInput | string[]
    images?: PropertyCreateimagesInput | string[]
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    units?: UnitUncheckedCreateNestedManyWithoutPropertyInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutPropertyInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutOrganizationInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutOrganizationInput, PropertyUncheckedCreateWithoutOrganizationInput>
  }

  export type PropertyCreateManyOrganizationInputEnvelope = {
    data: PropertyCreateManyOrganizationInput | PropertyCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type VendorCreateWithoutOrganizationInput = {
    id?: string
    businessName: string
    businessLicense?: string | null
    specialties?: VendorCreatespecialtiesInput | string[]
    serviceRadius?: number | null
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    rating?: Decimal | DecimalJsLike | number | string | null
    completedJobs?: number
    isVerified?: boolean
    availability?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVendorProfileInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutAssignedVendorInput
    payments?: PaymentCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutOrganizationInput = {
    id?: string
    userId: string
    businessName: string
    businessLicense?: string | null
    specialties?: VendorCreatespecialtiesInput | string[]
    serviceRadius?: number | null
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    rating?: Decimal | DecimalJsLike | number | string | null
    completedJobs?: number
    isVerified?: boolean
    availability?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutAssignedVendorInput
    payments?: PaymentUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutOrganizationInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutOrganizationInput, VendorUncheckedCreateWithoutOrganizationInput>
  }

  export type VendorCreateManyOrganizationInputEnvelope = {
    data: VendorCreateManyOrganizationInput | VendorCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
  }

  export type UserUpdateManyWithWhereWithoutOrganizationInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    avatar?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    phone?: StringNullableFilter<"User"> | string | null
    organizationId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type PropertyUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutOrganizationInput, PropertyUncheckedUpdateWithoutOrganizationInput>
    create: XOR<PropertyCreateWithoutOrganizationInput, PropertyUncheckedCreateWithoutOrganizationInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutOrganizationInput, PropertyUncheckedUpdateWithoutOrganizationInput>
  }

  export type PropertyUpdateManyWithWhereWithoutOrganizationInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type PropertyScalarWhereInput = {
    AND?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    OR?: PropertyScalarWhereInput[]
    NOT?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    id?: StringFilter<"Property"> | string
    name?: StringFilter<"Property"> | string
    address?: StringFilter<"Property"> | string
    city?: StringFilter<"Property"> | string
    state?: StringFilter<"Property"> | string
    zipCode?: StringFilter<"Property"> | string
    type?: EnumPropertyTypeFilter<"Property"> | $Enums.PropertyType
    description?: StringNullableFilter<"Property"> | string | null
    totalUnits?: IntFilter<"Property"> | number
    yearBuilt?: IntNullableFilter<"Property"> | number | null
    squareFeet?: IntNullableFilter<"Property"> | number | null
    amenities?: StringNullableListFilter<"Property">
    images?: StringNullableListFilter<"Property">
    organizationId?: StringFilter<"Property"> | string
    managerId?: StringNullableFilter<"Property"> | string | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
  }

  export type VendorUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: VendorWhereUniqueInput
    update: XOR<VendorUpdateWithoutOrganizationInput, VendorUncheckedUpdateWithoutOrganizationInput>
    create: XOR<VendorCreateWithoutOrganizationInput, VendorUncheckedCreateWithoutOrganizationInput>
  }

  export type VendorUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: VendorWhereUniqueInput
    data: XOR<VendorUpdateWithoutOrganizationInput, VendorUncheckedUpdateWithoutOrganizationInput>
  }

  export type VendorUpdateManyWithWhereWithoutOrganizationInput = {
    where: VendorScalarWhereInput
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type VendorScalarWhereInput = {
    AND?: VendorScalarWhereInput | VendorScalarWhereInput[]
    OR?: VendorScalarWhereInput[]
    NOT?: VendorScalarWhereInput | VendorScalarWhereInput[]
    id?: StringFilter<"Vendor"> | string
    userId?: StringFilter<"Vendor"> | string
    businessName?: StringFilter<"Vendor"> | string
    businessLicense?: StringNullableFilter<"Vendor"> | string | null
    specialties?: StringNullableListFilter<"Vendor">
    serviceRadius?: IntNullableFilter<"Vendor"> | number | null
    hourlyRate?: DecimalNullableFilter<"Vendor"> | Decimal | DecimalJsLike | number | string | null
    rating?: DecimalNullableFilter<"Vendor"> | Decimal | DecimalJsLike | number | string | null
    completedJobs?: IntFilter<"Vendor"> | number
    isVerified?: BoolFilter<"Vendor"> | boolean
    availability?: JsonNullableFilter<"Vendor">
    organizationId?: StringFilter<"Vendor"> | string
    createdAt?: DateTimeFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeFilter<"Vendor"> | Date | string
  }

  export type OrganizationCreateWithoutUsersInput = {
    id?: string
    name: string
    type?: string
    logo?: string | null
    allowTenantRegistration?: boolean
    requireVendorApproval?: boolean
    enableAutomatedPayments?: boolean
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutOrganizationInput
    vendors?: VendorCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    type?: string
    logo?: string | null
    allowTenantRegistration?: boolean
    requireVendorApproval?: boolean
    enableAutomatedPayments?: boolean
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutOrganizationInput
    vendors?: VendorUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutUsersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
  }

  export type TenantCreateWithoutUserInput = {
    id?: string
    phone?: string | null
    emergencyContact?: NullableJsonNullValueInput | InputJsonValue
    moveInDate?: Date | string | null
    moveOutDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leases?: LeaseCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutUserInput = {
    id?: string
    phone?: string | null
    emergencyContact?: NullableJsonNullValueInput | InputJsonValue
    moveInDate?: Date | string | null
    moveOutDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leases?: LeaseUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutUserInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput>
  }

  export type VendorCreateWithoutUserInput = {
    id?: string
    businessName: string
    businessLicense?: string | null
    specialties?: VendorCreatespecialtiesInput | string[]
    serviceRadius?: number | null
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    rating?: Decimal | DecimalJsLike | number | string | null
    completedJobs?: number
    isVerified?: boolean
    availability?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutVendorsInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutAssignedVendorInput
    payments?: PaymentCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutUserInput = {
    id?: string
    businessName: string
    businessLicense?: string | null
    specialties?: VendorCreatespecialtiesInput | string[]
    serviceRadius?: number | null
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    rating?: Decimal | DecimalJsLike | number | string | null
    completedJobs?: number
    isVerified?: boolean
    availability?: NullableJsonNullValueInput | InputJsonValue
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutAssignedVendorInput
    payments?: PaymentUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutUserInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutUserInput, VendorUncheckedCreateWithoutUserInput>
  }

  export type MaintenanceRequestCreateWithoutTenantInput = {
    id?: string
    title: string
    description: string
    category: string
    priority: $Enums.MaintenancePriority
    status?: $Enums.MaintenanceStatus
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    actualCost?: Decimal | DecimalJsLike | number | string | null
    scheduledDate?: Date | string | null
    completedDate?: Date | string | null
    images?: MaintenanceRequestCreateimagesInput | string[]
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutMaintenanceRequestsInput
    unit?: UnitCreateNestedOneWithoutMaintenanceRequestsInput
    assignedVendor?: VendorCreateNestedOneWithoutMaintenanceRequestsInput
    payments?: PaymentCreateNestedManyWithoutMaintenanceRequestInput
  }

  export type MaintenanceRequestUncheckedCreateWithoutTenantInput = {
    id?: string
    title: string
    description: string
    category: string
    priority: $Enums.MaintenancePriority
    status?: $Enums.MaintenanceStatus
    propertyId: string
    unitId?: string | null
    assignedVendorId?: string | null
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    actualCost?: Decimal | DecimalJsLike | number | string | null
    scheduledDate?: Date | string | null
    completedDate?: Date | string | null
    images?: MaintenanceRequestCreateimagesInput | string[]
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutMaintenanceRequestInput
  }

  export type MaintenanceRequestCreateOrConnectWithoutTenantInput = {
    where: MaintenanceRequestWhereUniqueInput
    create: XOR<MaintenanceRequestCreateWithoutTenantInput, MaintenanceRequestUncheckedCreateWithoutTenantInput>
  }

  export type MaintenanceRequestCreateManyTenantInputEnvelope = {
    data: MaintenanceRequestCreateManyTenantInput | MaintenanceRequestCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutTenantInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.PaymentType
    status?: $Enums.PaymentStatus
    method?: string | null
    description: string
    dueDate?: Date | string | null
    paidDate?: Date | string | null
    transactionId?: string | null
    fees?: Decimal | DecimalJsLike | number | string | null
    lateFee?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property?: PropertyCreateNestedOneWithoutPaymentsInput
    lease?: LeaseCreateNestedOneWithoutPaymentsInput
    vendor?: VendorCreateNestedOneWithoutPaymentsInput
    maintenanceRequest?: MaintenanceRequestCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutTenantInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.PaymentType
    status?: $Enums.PaymentStatus
    method?: string | null
    description: string
    dueDate?: Date | string | null
    paidDate?: Date | string | null
    propertyId?: string | null
    leaseId?: string | null
    vendorId?: string | null
    maintenanceRequestId?: string | null
    transactionId?: string | null
    fees?: Decimal | DecimalJsLike | number | string | null
    lateFee?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutTenantInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutTenantInput, PaymentUncheckedCreateWithoutTenantInput>
  }

  export type PaymentCreateManyTenantInputEnvelope = {
    data: PaymentCreateManyTenantInput | PaymentCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    content: string
    receiverId?: string | null
    threadId?: string | null
    isRead?: boolean
    attachments?: MessageCreateattachmentsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    content: string
    receiverId?: string | null
    threadId?: string | null
    isRead?: boolean
    attachments?: MessageCreateattachmentsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutUsersInput = {
    update: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutUsersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type OrganizationUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    allowTenantRegistration?: BoolFieldUpdateOperationsInput | boolean
    requireVendorApproval?: BoolFieldUpdateOperationsInput | boolean
    enableAutomatedPayments?: BoolFieldUpdateOperationsInput | boolean
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutOrganizationNestedInput
    vendors?: VendorUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    allowTenantRegistration?: BoolFieldUpdateOperationsInput | boolean
    requireVendorApproval?: BoolFieldUpdateOperationsInput | boolean
    enableAutomatedPayments?: BoolFieldUpdateOperationsInput | boolean
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutOrganizationNestedInput
    vendors?: VendorUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type TenantUpsertWithoutUserInput = {
    update: XOR<TenantUpdateWithoutUserInput, TenantUncheckedUpdateWithoutUserInput>
    create: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutUserInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutUserInput, TenantUncheckedUpdateWithoutUserInput>
  }

  export type TenantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableJsonNullValueInput | InputJsonValue
    moveInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    moveOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leases?: LeaseUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableJsonNullValueInput | InputJsonValue
    moveInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    moveOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leases?: LeaseUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type VendorUpsertWithoutUserInput = {
    update: XOR<VendorUpdateWithoutUserInput, VendorUncheckedUpdateWithoutUserInput>
    create: XOR<VendorCreateWithoutUserInput, VendorUncheckedCreateWithoutUserInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutUserInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutUserInput, VendorUncheckedUpdateWithoutUserInput>
  }

  export type VendorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessLicense?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: VendorUpdatespecialtiesInput | string[]
    serviceRadius?: NullableIntFieldUpdateOperationsInput | number | null
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    completedJobs?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    availability?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutVendorsNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutAssignedVendorNestedInput
    payments?: PaymentUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessLicense?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: VendorUpdatespecialtiesInput | string[]
    serviceRadius?: NullableIntFieldUpdateOperationsInput | number | null
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    completedJobs?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    availability?: NullableJsonNullValueInput | InputJsonValue
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutAssignedVendorNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type MaintenanceRequestUpsertWithWhereUniqueWithoutTenantInput = {
    where: MaintenanceRequestWhereUniqueInput
    update: XOR<MaintenanceRequestUpdateWithoutTenantInput, MaintenanceRequestUncheckedUpdateWithoutTenantInput>
    create: XOR<MaintenanceRequestCreateWithoutTenantInput, MaintenanceRequestUncheckedCreateWithoutTenantInput>
  }

  export type MaintenanceRequestUpdateWithWhereUniqueWithoutTenantInput = {
    where: MaintenanceRequestWhereUniqueInput
    data: XOR<MaintenanceRequestUpdateWithoutTenantInput, MaintenanceRequestUncheckedUpdateWithoutTenantInput>
  }

  export type MaintenanceRequestUpdateManyWithWhereWithoutTenantInput = {
    where: MaintenanceRequestScalarWhereInput
    data: XOR<MaintenanceRequestUpdateManyMutationInput, MaintenanceRequestUncheckedUpdateManyWithoutTenantInput>
  }

  export type MaintenanceRequestScalarWhereInput = {
    AND?: MaintenanceRequestScalarWhereInput | MaintenanceRequestScalarWhereInput[]
    OR?: MaintenanceRequestScalarWhereInput[]
    NOT?: MaintenanceRequestScalarWhereInput | MaintenanceRequestScalarWhereInput[]
    id?: StringFilter<"MaintenanceRequest"> | string
    title?: StringFilter<"MaintenanceRequest"> | string
    description?: StringFilter<"MaintenanceRequest"> | string
    category?: StringFilter<"MaintenanceRequest"> | string
    priority?: EnumMaintenancePriorityFilter<"MaintenanceRequest"> | $Enums.MaintenancePriority
    status?: EnumMaintenanceStatusFilter<"MaintenanceRequest"> | $Enums.MaintenanceStatus
    propertyId?: StringFilter<"MaintenanceRequest"> | string
    unitId?: StringNullableFilter<"MaintenanceRequest"> | string | null
    tenantId?: StringFilter<"MaintenanceRequest"> | string
    assignedVendorId?: StringNullableFilter<"MaintenanceRequest"> | string | null
    estimatedCost?: DecimalNullableFilter<"MaintenanceRequest"> | Decimal | DecimalJsLike | number | string | null
    actualCost?: DecimalNullableFilter<"MaintenanceRequest"> | Decimal | DecimalJsLike | number | string | null
    scheduledDate?: DateTimeNullableFilter<"MaintenanceRequest"> | Date | string | null
    completedDate?: DateTimeNullableFilter<"MaintenanceRequest"> | Date | string | null
    images?: StringNullableListFilter<"MaintenanceRequest">
    notes?: StringNullableFilter<"MaintenanceRequest"> | string | null
    createdAt?: DateTimeFilter<"MaintenanceRequest"> | Date | string
    updatedAt?: DateTimeFilter<"MaintenanceRequest"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutTenantInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutTenantInput, PaymentUncheckedUpdateWithoutTenantInput>
    create: XOR<PaymentCreateWithoutTenantInput, PaymentUncheckedCreateWithoutTenantInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutTenantInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutTenantInput, PaymentUncheckedUpdateWithoutTenantInput>
  }

  export type PaymentUpdateManyWithWhereWithoutTenantInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutTenantInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    type?: EnumPaymentTypeFilter<"Payment"> | $Enums.PaymentType
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    method?: StringNullableFilter<"Payment"> | string | null
    description?: StringFilter<"Payment"> | string
    dueDate?: DateTimeNullableFilter<"Payment"> | Date | string | null
    paidDate?: DateTimeNullableFilter<"Payment"> | Date | string | null
    propertyId?: StringNullableFilter<"Payment"> | string | null
    leaseId?: StringNullableFilter<"Payment"> | string | null
    tenantId?: StringNullableFilter<"Payment"> | string | null
    vendorId?: StringNullableFilter<"Payment"> | string | null
    maintenanceRequestId?: StringNullableFilter<"Payment"> | string | null
    transactionId?: StringNullableFilter<"Payment"> | string | null
    fees?: DecimalNullableFilter<"Payment"> | Decimal | DecimalJsLike | number | string | null
    lateFee?: DecimalNullableFilter<"Payment"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringNullableFilter<"Message"> | string | null
    threadId?: StringNullableFilter<"Message"> | string | null
    isRead?: BoolFilter<"Message"> | boolean
    attachments?: StringNullableListFilter<"Message">
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type OrganizationCreateWithoutPropertiesInput = {
    id?: string
    name: string
    type?: string
    logo?: string | null
    allowTenantRegistration?: boolean
    requireVendorApproval?: boolean
    enableAutomatedPayments?: boolean
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
    vendors?: VendorCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutPropertiesInput = {
    id?: string
    name: string
    type?: string
    logo?: string | null
    allowTenantRegistration?: boolean
    requireVendorApproval?: boolean
    enableAutomatedPayments?: boolean
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    vendors?: VendorUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutPropertiesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutPropertiesInput, OrganizationUncheckedCreateWithoutPropertiesInput>
  }

  export type UnitCreateWithoutPropertyInput = {
    id?: string
    number: string
    floor?: number | null
    bedrooms: number
    bathrooms: Decimal | DecimalJsLike | number | string
    squareFeet: number
    monthlyRent: Decimal | DecimalJsLike | number | string
    securityDeposit: Decimal | DecimalJsLike | number | string
    isOccupied?: boolean
    features?: UnitCreatefeaturesInput | string[]
    currentLeaseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leases?: LeaseCreateNestedManyWithoutUnitInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutPropertyInput = {
    id?: string
    number: string
    floor?: number | null
    bedrooms: number
    bathrooms: Decimal | DecimalJsLike | number | string
    squareFeet: number
    monthlyRent: Decimal | DecimalJsLike | number | string
    securityDeposit: Decimal | DecimalJsLike | number | string
    isOccupied?: boolean
    features?: UnitCreatefeaturesInput | string[]
    currentLeaseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leases?: LeaseUncheckedCreateNestedManyWithoutUnitInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutPropertyInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutPropertyInput, UnitUncheckedCreateWithoutPropertyInput>
  }

  export type UnitCreateManyPropertyInputEnvelope = {
    data: UnitCreateManyPropertyInput | UnitCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type MaintenanceRequestCreateWithoutPropertyInput = {
    id?: string
    title: string
    description: string
    category: string
    priority: $Enums.MaintenancePriority
    status?: $Enums.MaintenanceStatus
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    actualCost?: Decimal | DecimalJsLike | number | string | null
    scheduledDate?: Date | string | null
    completedDate?: Date | string | null
    images?: MaintenanceRequestCreateimagesInput | string[]
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unit?: UnitCreateNestedOneWithoutMaintenanceRequestsInput
    tenant: UserCreateNestedOneWithoutMaintenanceRequestsInput
    assignedVendor?: VendorCreateNestedOneWithoutMaintenanceRequestsInput
    payments?: PaymentCreateNestedManyWithoutMaintenanceRequestInput
  }

  export type MaintenanceRequestUncheckedCreateWithoutPropertyInput = {
    id?: string
    title: string
    description: string
    category: string
    priority: $Enums.MaintenancePriority
    status?: $Enums.MaintenanceStatus
    unitId?: string | null
    tenantId: string
    assignedVendorId?: string | null
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    actualCost?: Decimal | DecimalJsLike | number | string | null
    scheduledDate?: Date | string | null
    completedDate?: Date | string | null
    images?: MaintenanceRequestCreateimagesInput | string[]
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutMaintenanceRequestInput
  }

  export type MaintenanceRequestCreateOrConnectWithoutPropertyInput = {
    where: MaintenanceRequestWhereUniqueInput
    create: XOR<MaintenanceRequestCreateWithoutPropertyInput, MaintenanceRequestUncheckedCreateWithoutPropertyInput>
  }

  export type MaintenanceRequestCreateManyPropertyInputEnvelope = {
    data: MaintenanceRequestCreateManyPropertyInput | MaintenanceRequestCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutPropertyInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.PaymentType
    status?: $Enums.PaymentStatus
    method?: string | null
    description: string
    dueDate?: Date | string | null
    paidDate?: Date | string | null
    transactionId?: string | null
    fees?: Decimal | DecimalJsLike | number | string | null
    lateFee?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lease?: LeaseCreateNestedOneWithoutPaymentsInput
    tenant?: UserCreateNestedOneWithoutPaymentsInput
    vendor?: VendorCreateNestedOneWithoutPaymentsInput
    maintenanceRequest?: MaintenanceRequestCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutPropertyInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.PaymentType
    status?: $Enums.PaymentStatus
    method?: string | null
    description: string
    dueDate?: Date | string | null
    paidDate?: Date | string | null
    leaseId?: string | null
    tenantId?: string | null
    vendorId?: string | null
    maintenanceRequestId?: string | null
    transactionId?: string | null
    fees?: Decimal | DecimalJsLike | number | string | null
    lateFee?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutPropertyInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutPropertyInput, PaymentUncheckedCreateWithoutPropertyInput>
  }

  export type PaymentCreateManyPropertyInputEnvelope = {
    data: PaymentCreateManyPropertyInput | PaymentCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutPropertiesInput = {
    update: XOR<OrganizationUpdateWithoutPropertiesInput, OrganizationUncheckedUpdateWithoutPropertiesInput>
    create: XOR<OrganizationCreateWithoutPropertiesInput, OrganizationUncheckedCreateWithoutPropertiesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutPropertiesInput, OrganizationUncheckedUpdateWithoutPropertiesInput>
  }

  export type OrganizationUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    allowTenantRegistration?: BoolFieldUpdateOperationsInput | boolean
    requireVendorApproval?: BoolFieldUpdateOperationsInput | boolean
    enableAutomatedPayments?: BoolFieldUpdateOperationsInput | boolean
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
    vendors?: VendorUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    allowTenantRegistration?: BoolFieldUpdateOperationsInput | boolean
    requireVendorApproval?: BoolFieldUpdateOperationsInput | boolean
    enableAutomatedPayments?: BoolFieldUpdateOperationsInput | boolean
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    vendors?: VendorUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UnitUpsertWithWhereUniqueWithoutPropertyInput = {
    where: UnitWhereUniqueInput
    update: XOR<UnitUpdateWithoutPropertyInput, UnitUncheckedUpdateWithoutPropertyInput>
    create: XOR<UnitCreateWithoutPropertyInput, UnitUncheckedCreateWithoutPropertyInput>
  }

  export type UnitUpdateWithWhereUniqueWithoutPropertyInput = {
    where: UnitWhereUniqueInput
    data: XOR<UnitUpdateWithoutPropertyInput, UnitUncheckedUpdateWithoutPropertyInput>
  }

  export type UnitUpdateManyWithWhereWithoutPropertyInput = {
    where: UnitScalarWhereInput
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyWithoutPropertyInput>
  }

  export type UnitScalarWhereInput = {
    AND?: UnitScalarWhereInput | UnitScalarWhereInput[]
    OR?: UnitScalarWhereInput[]
    NOT?: UnitScalarWhereInput | UnitScalarWhereInput[]
    id?: StringFilter<"Unit"> | string
    number?: StringFilter<"Unit"> | string
    floor?: IntNullableFilter<"Unit"> | number | null
    bedrooms?: IntFilter<"Unit"> | number
    bathrooms?: DecimalFilter<"Unit"> | Decimal | DecimalJsLike | number | string
    squareFeet?: IntFilter<"Unit"> | number
    monthlyRent?: DecimalFilter<"Unit"> | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalFilter<"Unit"> | Decimal | DecimalJsLike | number | string
    isOccupied?: BoolFilter<"Unit"> | boolean
    features?: StringNullableListFilter<"Unit">
    propertyId?: StringFilter<"Unit"> | string
    currentLeaseId?: StringNullableFilter<"Unit"> | string | null
    createdAt?: DateTimeFilter<"Unit"> | Date | string
    updatedAt?: DateTimeFilter<"Unit"> | Date | string
  }

  export type MaintenanceRequestUpsertWithWhereUniqueWithoutPropertyInput = {
    where: MaintenanceRequestWhereUniqueInput
    update: XOR<MaintenanceRequestUpdateWithoutPropertyInput, MaintenanceRequestUncheckedUpdateWithoutPropertyInput>
    create: XOR<MaintenanceRequestCreateWithoutPropertyInput, MaintenanceRequestUncheckedCreateWithoutPropertyInput>
  }

  export type MaintenanceRequestUpdateWithWhereUniqueWithoutPropertyInput = {
    where: MaintenanceRequestWhereUniqueInput
    data: XOR<MaintenanceRequestUpdateWithoutPropertyInput, MaintenanceRequestUncheckedUpdateWithoutPropertyInput>
  }

  export type MaintenanceRequestUpdateManyWithWhereWithoutPropertyInput = {
    where: MaintenanceRequestScalarWhereInput
    data: XOR<MaintenanceRequestUpdateManyMutationInput, MaintenanceRequestUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutPropertyInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutPropertyInput, PaymentUncheckedUpdateWithoutPropertyInput>
    create: XOR<PaymentCreateWithoutPropertyInput, PaymentUncheckedCreateWithoutPropertyInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutPropertyInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutPropertyInput, PaymentUncheckedUpdateWithoutPropertyInput>
  }

  export type PaymentUpdateManyWithWhereWithoutPropertyInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertyCreateWithoutUnitsInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zipCode: string
    type: $Enums.PropertyType
    description?: string | null
    totalUnits?: number
    yearBuilt?: number | null
    squareFeet?: number | null
    amenities?: PropertyCreateamenitiesInput | string[]
    images?: PropertyCreateimagesInput | string[]
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutPropertiesInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutPropertyInput
    payments?: PaymentCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutUnitsInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zipCode: string
    type: $Enums.PropertyType
    description?: string | null
    totalUnits?: number
    yearBuilt?: number | null
    squareFeet?: number | null
    amenities?: PropertyCreateamenitiesInput | string[]
    images?: PropertyCreateimagesInput | string[]
    organizationId: string
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutPropertyInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutUnitsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutUnitsInput, PropertyUncheckedCreateWithoutUnitsInput>
  }

  export type LeaseCreateWithoutUnitInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    monthlyRent: Decimal | DecimalJsLike | number | string
    securityDeposit: Decimal | DecimalJsLike | number | string
    lateFeeDays?: number
    lateFeeAmount?: Decimal | DecimalJsLike | number | string
    terms?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutLeasesInput
    payments?: PaymentCreateNestedManyWithoutLeaseInput
  }

  export type LeaseUncheckedCreateWithoutUnitInput = {
    id?: string
    tenantId: string
    startDate: Date | string
    endDate: Date | string
    monthlyRent: Decimal | DecimalJsLike | number | string
    securityDeposit: Decimal | DecimalJsLike | number | string
    lateFeeDays?: number
    lateFeeAmount?: Decimal | DecimalJsLike | number | string
    terms?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutLeaseInput
  }

  export type LeaseCreateOrConnectWithoutUnitInput = {
    where: LeaseWhereUniqueInput
    create: XOR<LeaseCreateWithoutUnitInput, LeaseUncheckedCreateWithoutUnitInput>
  }

  export type LeaseCreateManyUnitInputEnvelope = {
    data: LeaseCreateManyUnitInput | LeaseCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type MaintenanceRequestCreateWithoutUnitInput = {
    id?: string
    title: string
    description: string
    category: string
    priority: $Enums.MaintenancePriority
    status?: $Enums.MaintenanceStatus
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    actualCost?: Decimal | DecimalJsLike | number | string | null
    scheduledDate?: Date | string | null
    completedDate?: Date | string | null
    images?: MaintenanceRequestCreateimagesInput | string[]
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutMaintenanceRequestsInput
    tenant: UserCreateNestedOneWithoutMaintenanceRequestsInput
    assignedVendor?: VendorCreateNestedOneWithoutMaintenanceRequestsInput
    payments?: PaymentCreateNestedManyWithoutMaintenanceRequestInput
  }

  export type MaintenanceRequestUncheckedCreateWithoutUnitInput = {
    id?: string
    title: string
    description: string
    category: string
    priority: $Enums.MaintenancePriority
    status?: $Enums.MaintenanceStatus
    propertyId: string
    tenantId: string
    assignedVendorId?: string | null
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    actualCost?: Decimal | DecimalJsLike | number | string | null
    scheduledDate?: Date | string | null
    completedDate?: Date | string | null
    images?: MaintenanceRequestCreateimagesInput | string[]
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutMaintenanceRequestInput
  }

  export type MaintenanceRequestCreateOrConnectWithoutUnitInput = {
    where: MaintenanceRequestWhereUniqueInput
    create: XOR<MaintenanceRequestCreateWithoutUnitInput, MaintenanceRequestUncheckedCreateWithoutUnitInput>
  }

  export type MaintenanceRequestCreateManyUnitInputEnvelope = {
    data: MaintenanceRequestCreateManyUnitInput | MaintenanceRequestCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithoutUnitsInput = {
    update: XOR<PropertyUpdateWithoutUnitsInput, PropertyUncheckedUpdateWithoutUnitsInput>
    create: XOR<PropertyCreateWithoutUnitsInput, PropertyUncheckedCreateWithoutUnitsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutUnitsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutUnitsInput, PropertyUncheckedUpdateWithoutUnitsInput>
  }

  export type PropertyUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalUnits?: IntFieldUpdateOperationsInput | number
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    squareFeet?: NullableIntFieldUpdateOperationsInput | number | null
    amenities?: PropertyUpdateamenitiesInput | string[]
    images?: PropertyUpdateimagesInput | string[]
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutPropertiesNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutPropertyNestedInput
    payments?: PaymentUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalUnits?: IntFieldUpdateOperationsInput | number
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    squareFeet?: NullableIntFieldUpdateOperationsInput | number | null
    amenities?: PropertyUpdateamenitiesInput | string[]
    images?: PropertyUpdateimagesInput | string[]
    organizationId?: StringFieldUpdateOperationsInput | string
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutPropertyNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type LeaseUpsertWithWhereUniqueWithoutUnitInput = {
    where: LeaseWhereUniqueInput
    update: XOR<LeaseUpdateWithoutUnitInput, LeaseUncheckedUpdateWithoutUnitInput>
    create: XOR<LeaseCreateWithoutUnitInput, LeaseUncheckedCreateWithoutUnitInput>
  }

  export type LeaseUpdateWithWhereUniqueWithoutUnitInput = {
    where: LeaseWhereUniqueInput
    data: XOR<LeaseUpdateWithoutUnitInput, LeaseUncheckedUpdateWithoutUnitInput>
  }

  export type LeaseUpdateManyWithWhereWithoutUnitInput = {
    where: LeaseScalarWhereInput
    data: XOR<LeaseUpdateManyMutationInput, LeaseUncheckedUpdateManyWithoutUnitInput>
  }

  export type LeaseScalarWhereInput = {
    AND?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
    OR?: LeaseScalarWhereInput[]
    NOT?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
    id?: StringFilter<"Lease"> | string
    tenantId?: StringFilter<"Lease"> | string
    unitId?: StringFilter<"Lease"> | string
    startDate?: DateTimeFilter<"Lease"> | Date | string
    endDate?: DateTimeFilter<"Lease"> | Date | string
    monthlyRent?: DecimalFilter<"Lease"> | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalFilter<"Lease"> | Decimal | DecimalJsLike | number | string
    lateFeeDays?: IntFilter<"Lease"> | number
    lateFeeAmount?: DecimalFilter<"Lease"> | Decimal | DecimalJsLike | number | string
    terms?: StringNullableFilter<"Lease"> | string | null
    isActive?: BoolFilter<"Lease"> | boolean
    createdAt?: DateTimeFilter<"Lease"> | Date | string
    updatedAt?: DateTimeFilter<"Lease"> | Date | string
  }

  export type MaintenanceRequestUpsertWithWhereUniqueWithoutUnitInput = {
    where: MaintenanceRequestWhereUniqueInput
    update: XOR<MaintenanceRequestUpdateWithoutUnitInput, MaintenanceRequestUncheckedUpdateWithoutUnitInput>
    create: XOR<MaintenanceRequestCreateWithoutUnitInput, MaintenanceRequestUncheckedCreateWithoutUnitInput>
  }

  export type MaintenanceRequestUpdateWithWhereUniqueWithoutUnitInput = {
    where: MaintenanceRequestWhereUniqueInput
    data: XOR<MaintenanceRequestUpdateWithoutUnitInput, MaintenanceRequestUncheckedUpdateWithoutUnitInput>
  }

  export type MaintenanceRequestUpdateManyWithWhereWithoutUnitInput = {
    where: MaintenanceRequestScalarWhereInput
    data: XOR<MaintenanceRequestUpdateManyMutationInput, MaintenanceRequestUncheckedUpdateManyWithoutUnitInput>
  }

  export type UserCreateWithoutTenantProfileInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    avatar?: string | null
    emailVerified?: boolean
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutUsersInput
    vendorProfile?: VendorCreateNestedOneWithoutUserInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutTenantInput
    payments?: PaymentCreateNestedManyWithoutTenantInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutTenantProfileInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    avatar?: string | null
    emailVerified?: boolean
    phone?: string | null
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorProfile?: VendorUncheckedCreateNestedOneWithoutUserInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutTenantProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTenantProfileInput, UserUncheckedCreateWithoutTenantProfileInput>
  }

  export type LeaseCreateWithoutTenantInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    monthlyRent: Decimal | DecimalJsLike | number | string
    securityDeposit: Decimal | DecimalJsLike | number | string
    lateFeeDays?: number
    lateFeeAmount?: Decimal | DecimalJsLike | number | string
    terms?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    unit: UnitCreateNestedOneWithoutLeasesInput
    payments?: PaymentCreateNestedManyWithoutLeaseInput
  }

  export type LeaseUncheckedCreateWithoutTenantInput = {
    id?: string
    unitId: string
    startDate: Date | string
    endDate: Date | string
    monthlyRent: Decimal | DecimalJsLike | number | string
    securityDeposit: Decimal | DecimalJsLike | number | string
    lateFeeDays?: number
    lateFeeAmount?: Decimal | DecimalJsLike | number | string
    terms?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutLeaseInput
  }

  export type LeaseCreateOrConnectWithoutTenantInput = {
    where: LeaseWhereUniqueInput
    create: XOR<LeaseCreateWithoutTenantInput, LeaseUncheckedCreateWithoutTenantInput>
  }

  export type LeaseCreateManyTenantInputEnvelope = {
    data: LeaseCreateManyTenantInput | LeaseCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTenantProfileInput = {
    update: XOR<UserUpdateWithoutTenantProfileInput, UserUncheckedUpdateWithoutTenantProfileInput>
    create: XOR<UserCreateWithoutTenantProfileInput, UserUncheckedCreateWithoutTenantProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTenantProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTenantProfileInput, UserUncheckedUpdateWithoutTenantProfileInput>
  }

  export type UserUpdateWithoutTenantProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
    vendorProfile?: VendorUpdateOneWithoutUserNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutTenantNestedInput
    payments?: PaymentUpdateManyWithoutTenantNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutTenantProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorUncheckedUpdateOneWithoutUserNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutTenantNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type LeaseUpsertWithWhereUniqueWithoutTenantInput = {
    where: LeaseWhereUniqueInput
    update: XOR<LeaseUpdateWithoutTenantInput, LeaseUncheckedUpdateWithoutTenantInput>
    create: XOR<LeaseCreateWithoutTenantInput, LeaseUncheckedCreateWithoutTenantInput>
  }

  export type LeaseUpdateWithWhereUniqueWithoutTenantInput = {
    where: LeaseWhereUniqueInput
    data: XOR<LeaseUpdateWithoutTenantInput, LeaseUncheckedUpdateWithoutTenantInput>
  }

  export type LeaseUpdateManyWithWhereWithoutTenantInput = {
    where: LeaseScalarWhereInput
    data: XOR<LeaseUpdateManyMutationInput, LeaseUncheckedUpdateManyWithoutTenantInput>
  }

  export type TenantCreateWithoutLeasesInput = {
    id?: string
    phone?: string | null
    emergencyContact?: NullableJsonNullValueInput | InputJsonValue
    moveInDate?: Date | string | null
    moveOutDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTenantProfileInput
  }

  export type TenantUncheckedCreateWithoutLeasesInput = {
    id?: string
    userId: string
    phone?: string | null
    emergencyContact?: NullableJsonNullValueInput | InputJsonValue
    moveInDate?: Date | string | null
    moveOutDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantCreateOrConnectWithoutLeasesInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutLeasesInput, TenantUncheckedCreateWithoutLeasesInput>
  }

  export type UnitCreateWithoutLeasesInput = {
    id?: string
    number: string
    floor?: number | null
    bedrooms: number
    bathrooms: Decimal | DecimalJsLike | number | string
    squareFeet: number
    monthlyRent: Decimal | DecimalJsLike | number | string
    securityDeposit: Decimal | DecimalJsLike | number | string
    isOccupied?: boolean
    features?: UnitCreatefeaturesInput | string[]
    currentLeaseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutUnitsInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutLeasesInput = {
    id?: string
    number: string
    floor?: number | null
    bedrooms: number
    bathrooms: Decimal | DecimalJsLike | number | string
    squareFeet: number
    monthlyRent: Decimal | DecimalJsLike | number | string
    securityDeposit: Decimal | DecimalJsLike | number | string
    isOccupied?: boolean
    features?: UnitCreatefeaturesInput | string[]
    propertyId: string
    currentLeaseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutLeasesInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutLeasesInput, UnitUncheckedCreateWithoutLeasesInput>
  }

  export type PaymentCreateWithoutLeaseInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.PaymentType
    status?: $Enums.PaymentStatus
    method?: string | null
    description: string
    dueDate?: Date | string | null
    paidDate?: Date | string | null
    transactionId?: string | null
    fees?: Decimal | DecimalJsLike | number | string | null
    lateFee?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property?: PropertyCreateNestedOneWithoutPaymentsInput
    tenant?: UserCreateNestedOneWithoutPaymentsInput
    vendor?: VendorCreateNestedOneWithoutPaymentsInput
    maintenanceRequest?: MaintenanceRequestCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutLeaseInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.PaymentType
    status?: $Enums.PaymentStatus
    method?: string | null
    description: string
    dueDate?: Date | string | null
    paidDate?: Date | string | null
    propertyId?: string | null
    tenantId?: string | null
    vendorId?: string | null
    maintenanceRequestId?: string | null
    transactionId?: string | null
    fees?: Decimal | DecimalJsLike | number | string | null
    lateFee?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutLeaseInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutLeaseInput, PaymentUncheckedCreateWithoutLeaseInput>
  }

  export type PaymentCreateManyLeaseInputEnvelope = {
    data: PaymentCreateManyLeaseInput | PaymentCreateManyLeaseInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutLeasesInput = {
    update: XOR<TenantUpdateWithoutLeasesInput, TenantUncheckedUpdateWithoutLeasesInput>
    create: XOR<TenantCreateWithoutLeasesInput, TenantUncheckedCreateWithoutLeasesInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutLeasesInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutLeasesInput, TenantUncheckedUpdateWithoutLeasesInput>
  }

  export type TenantUpdateWithoutLeasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableJsonNullValueInput | InputJsonValue
    moveInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    moveOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTenantProfileNestedInput
  }

  export type TenantUncheckedUpdateWithoutLeasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableJsonNullValueInput | InputJsonValue
    moveInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    moveOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitUpsertWithoutLeasesInput = {
    update: XOR<UnitUpdateWithoutLeasesInput, UnitUncheckedUpdateWithoutLeasesInput>
    create: XOR<UnitCreateWithoutLeasesInput, UnitUncheckedCreateWithoutLeasesInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutLeasesInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutLeasesInput, UnitUncheckedUpdateWithoutLeasesInput>
  }

  export type UnitUpdateWithoutLeasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    squareFeet?: IntFieldUpdateOperationsInput | number
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    features?: UnitUpdatefeaturesInput | string[]
    currentLeaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutUnitsNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutLeasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    squareFeet?: IntFieldUpdateOperationsInput | number
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    features?: UnitUpdatefeaturesInput | string[]
    propertyId?: StringFieldUpdateOperationsInput | string
    currentLeaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutLeaseInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutLeaseInput, PaymentUncheckedUpdateWithoutLeaseInput>
    create: XOR<PaymentCreateWithoutLeaseInput, PaymentUncheckedCreateWithoutLeaseInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutLeaseInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutLeaseInput, PaymentUncheckedUpdateWithoutLeaseInput>
  }

  export type PaymentUpdateManyWithWhereWithoutLeaseInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutLeaseInput>
  }

  export type UserCreateWithoutVendorProfileInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    avatar?: string | null
    emailVerified?: boolean
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutUsersInput
    tenantProfile?: TenantCreateNestedOneWithoutUserInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutTenantInput
    payments?: PaymentCreateNestedManyWithoutTenantInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutVendorProfileInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    avatar?: string | null
    emailVerified?: boolean
    phone?: string | null
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantProfile?: TenantUncheckedCreateNestedOneWithoutUserInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutVendorProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVendorProfileInput, UserUncheckedCreateWithoutVendorProfileInput>
  }

  export type OrganizationCreateWithoutVendorsInput = {
    id?: string
    name: string
    type?: string
    logo?: string | null
    allowTenantRegistration?: boolean
    requireVendorApproval?: boolean
    enableAutomatedPayments?: boolean
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
    properties?: PropertyCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutVendorsInput = {
    id?: string
    name: string
    type?: string
    logo?: string | null
    allowTenantRegistration?: boolean
    requireVendorApproval?: boolean
    enableAutomatedPayments?: boolean
    timezone?: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    properties?: PropertyUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutVendorsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutVendorsInput, OrganizationUncheckedCreateWithoutVendorsInput>
  }

  export type MaintenanceRequestCreateWithoutAssignedVendorInput = {
    id?: string
    title: string
    description: string
    category: string
    priority: $Enums.MaintenancePriority
    status?: $Enums.MaintenanceStatus
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    actualCost?: Decimal | DecimalJsLike | number | string | null
    scheduledDate?: Date | string | null
    completedDate?: Date | string | null
    images?: MaintenanceRequestCreateimagesInput | string[]
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutMaintenanceRequestsInput
    unit?: UnitCreateNestedOneWithoutMaintenanceRequestsInput
    tenant: UserCreateNestedOneWithoutMaintenanceRequestsInput
    payments?: PaymentCreateNestedManyWithoutMaintenanceRequestInput
  }

  export type MaintenanceRequestUncheckedCreateWithoutAssignedVendorInput = {
    id?: string
    title: string
    description: string
    category: string
    priority: $Enums.MaintenancePriority
    status?: $Enums.MaintenanceStatus
    propertyId: string
    unitId?: string | null
    tenantId: string
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    actualCost?: Decimal | DecimalJsLike | number | string | null
    scheduledDate?: Date | string | null
    completedDate?: Date | string | null
    images?: MaintenanceRequestCreateimagesInput | string[]
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutMaintenanceRequestInput
  }

  export type MaintenanceRequestCreateOrConnectWithoutAssignedVendorInput = {
    where: MaintenanceRequestWhereUniqueInput
    create: XOR<MaintenanceRequestCreateWithoutAssignedVendorInput, MaintenanceRequestUncheckedCreateWithoutAssignedVendorInput>
  }

  export type MaintenanceRequestCreateManyAssignedVendorInputEnvelope = {
    data: MaintenanceRequestCreateManyAssignedVendorInput | MaintenanceRequestCreateManyAssignedVendorInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutVendorInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.PaymentType
    status?: $Enums.PaymentStatus
    method?: string | null
    description: string
    dueDate?: Date | string | null
    paidDate?: Date | string | null
    transactionId?: string | null
    fees?: Decimal | DecimalJsLike | number | string | null
    lateFee?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property?: PropertyCreateNestedOneWithoutPaymentsInput
    lease?: LeaseCreateNestedOneWithoutPaymentsInput
    tenant?: UserCreateNestedOneWithoutPaymentsInput
    maintenanceRequest?: MaintenanceRequestCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutVendorInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.PaymentType
    status?: $Enums.PaymentStatus
    method?: string | null
    description: string
    dueDate?: Date | string | null
    paidDate?: Date | string | null
    propertyId?: string | null
    leaseId?: string | null
    tenantId?: string | null
    maintenanceRequestId?: string | null
    transactionId?: string | null
    fees?: Decimal | DecimalJsLike | number | string | null
    lateFee?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutVendorInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutVendorInput, PaymentUncheckedCreateWithoutVendorInput>
  }

  export type PaymentCreateManyVendorInputEnvelope = {
    data: PaymentCreateManyVendorInput | PaymentCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVendorProfileInput = {
    update: XOR<UserUpdateWithoutVendorProfileInput, UserUncheckedUpdateWithoutVendorProfileInput>
    create: XOR<UserCreateWithoutVendorProfileInput, UserUncheckedCreateWithoutVendorProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVendorProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVendorProfileInput, UserUncheckedUpdateWithoutVendorProfileInput>
  }

  export type UserUpdateWithoutVendorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
    tenantProfile?: TenantUpdateOneWithoutUserNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutTenantNestedInput
    payments?: PaymentUpdateManyWithoutTenantNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutVendorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantProfile?: TenantUncheckedUpdateOneWithoutUserNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutTenantNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type OrganizationUpsertWithoutVendorsInput = {
    update: XOR<OrganizationUpdateWithoutVendorsInput, OrganizationUncheckedUpdateWithoutVendorsInput>
    create: XOR<OrganizationCreateWithoutVendorsInput, OrganizationUncheckedCreateWithoutVendorsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutVendorsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutVendorsInput, OrganizationUncheckedUpdateWithoutVendorsInput>
  }

  export type OrganizationUpdateWithoutVendorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    allowTenantRegistration?: BoolFieldUpdateOperationsInput | boolean
    requireVendorApproval?: BoolFieldUpdateOperationsInput | boolean
    enableAutomatedPayments?: BoolFieldUpdateOperationsInput | boolean
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
    properties?: PropertyUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutVendorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    allowTenantRegistration?: BoolFieldUpdateOperationsInput | boolean
    requireVendorApproval?: BoolFieldUpdateOperationsInput | boolean
    enableAutomatedPayments?: BoolFieldUpdateOperationsInput | boolean
    timezone?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type MaintenanceRequestUpsertWithWhereUniqueWithoutAssignedVendorInput = {
    where: MaintenanceRequestWhereUniqueInput
    update: XOR<MaintenanceRequestUpdateWithoutAssignedVendorInput, MaintenanceRequestUncheckedUpdateWithoutAssignedVendorInput>
    create: XOR<MaintenanceRequestCreateWithoutAssignedVendorInput, MaintenanceRequestUncheckedCreateWithoutAssignedVendorInput>
  }

  export type MaintenanceRequestUpdateWithWhereUniqueWithoutAssignedVendorInput = {
    where: MaintenanceRequestWhereUniqueInput
    data: XOR<MaintenanceRequestUpdateWithoutAssignedVendorInput, MaintenanceRequestUncheckedUpdateWithoutAssignedVendorInput>
  }

  export type MaintenanceRequestUpdateManyWithWhereWithoutAssignedVendorInput = {
    where: MaintenanceRequestScalarWhereInput
    data: XOR<MaintenanceRequestUpdateManyMutationInput, MaintenanceRequestUncheckedUpdateManyWithoutAssignedVendorInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutVendorInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutVendorInput, PaymentUncheckedUpdateWithoutVendorInput>
    create: XOR<PaymentCreateWithoutVendorInput, PaymentUncheckedCreateWithoutVendorInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutVendorInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutVendorInput, PaymentUncheckedUpdateWithoutVendorInput>
  }

  export type PaymentUpdateManyWithWhereWithoutVendorInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutVendorInput>
  }

  export type PropertyCreateWithoutMaintenanceRequestsInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zipCode: string
    type: $Enums.PropertyType
    description?: string | null
    totalUnits?: number
    yearBuilt?: number | null
    squareFeet?: number | null
    amenities?: PropertyCreateamenitiesInput | string[]
    images?: PropertyCreateimagesInput | string[]
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutPropertiesInput
    units?: UnitCreateNestedManyWithoutPropertyInput
    payments?: PaymentCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutMaintenanceRequestsInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zipCode: string
    type: $Enums.PropertyType
    description?: string | null
    totalUnits?: number
    yearBuilt?: number | null
    squareFeet?: number | null
    amenities?: PropertyCreateamenitiesInput | string[]
    images?: PropertyCreateimagesInput | string[]
    organizationId: string
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    units?: UnitUncheckedCreateNestedManyWithoutPropertyInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutMaintenanceRequestsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutMaintenanceRequestsInput, PropertyUncheckedCreateWithoutMaintenanceRequestsInput>
  }

  export type UnitCreateWithoutMaintenanceRequestsInput = {
    id?: string
    number: string
    floor?: number | null
    bedrooms: number
    bathrooms: Decimal | DecimalJsLike | number | string
    squareFeet: number
    monthlyRent: Decimal | DecimalJsLike | number | string
    securityDeposit: Decimal | DecimalJsLike | number | string
    isOccupied?: boolean
    features?: UnitCreatefeaturesInput | string[]
    currentLeaseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutUnitsInput
    leases?: LeaseCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutMaintenanceRequestsInput = {
    id?: string
    number: string
    floor?: number | null
    bedrooms: number
    bathrooms: Decimal | DecimalJsLike | number | string
    squareFeet: number
    monthlyRent: Decimal | DecimalJsLike | number | string
    securityDeposit: Decimal | DecimalJsLike | number | string
    isOccupied?: boolean
    features?: UnitCreatefeaturesInput | string[]
    propertyId: string
    currentLeaseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leases?: LeaseUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutMaintenanceRequestsInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutMaintenanceRequestsInput, UnitUncheckedCreateWithoutMaintenanceRequestsInput>
  }

  export type UserCreateWithoutMaintenanceRequestsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    avatar?: string | null
    emailVerified?: boolean
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutUsersInput
    tenantProfile?: TenantCreateNestedOneWithoutUserInput
    vendorProfile?: VendorCreateNestedOneWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutTenantInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutMaintenanceRequestsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    avatar?: string | null
    emailVerified?: boolean
    phone?: string | null
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantProfile?: TenantUncheckedCreateNestedOneWithoutUserInput
    vendorProfile?: VendorUncheckedCreateNestedOneWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutMaintenanceRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMaintenanceRequestsInput, UserUncheckedCreateWithoutMaintenanceRequestsInput>
  }

  export type VendorCreateWithoutMaintenanceRequestsInput = {
    id?: string
    businessName: string
    businessLicense?: string | null
    specialties?: VendorCreatespecialtiesInput | string[]
    serviceRadius?: number | null
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    rating?: Decimal | DecimalJsLike | number | string | null
    completedJobs?: number
    isVerified?: boolean
    availability?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVendorProfileInput
    organization: OrganizationCreateNestedOneWithoutVendorsInput
    payments?: PaymentCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutMaintenanceRequestsInput = {
    id?: string
    userId: string
    businessName: string
    businessLicense?: string | null
    specialties?: VendorCreatespecialtiesInput | string[]
    serviceRadius?: number | null
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    rating?: Decimal | DecimalJsLike | number | string | null
    completedJobs?: number
    isVerified?: boolean
    availability?: NullableJsonNullValueInput | InputJsonValue
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutMaintenanceRequestsInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutMaintenanceRequestsInput, VendorUncheckedCreateWithoutMaintenanceRequestsInput>
  }

  export type PaymentCreateWithoutMaintenanceRequestInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.PaymentType
    status?: $Enums.PaymentStatus
    method?: string | null
    description: string
    dueDate?: Date | string | null
    paidDate?: Date | string | null
    transactionId?: string | null
    fees?: Decimal | DecimalJsLike | number | string | null
    lateFee?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property?: PropertyCreateNestedOneWithoutPaymentsInput
    lease?: LeaseCreateNestedOneWithoutPaymentsInput
    tenant?: UserCreateNestedOneWithoutPaymentsInput
    vendor?: VendorCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutMaintenanceRequestInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.PaymentType
    status?: $Enums.PaymentStatus
    method?: string | null
    description: string
    dueDate?: Date | string | null
    paidDate?: Date | string | null
    propertyId?: string | null
    leaseId?: string | null
    tenantId?: string | null
    vendorId?: string | null
    transactionId?: string | null
    fees?: Decimal | DecimalJsLike | number | string | null
    lateFee?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutMaintenanceRequestInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutMaintenanceRequestInput, PaymentUncheckedCreateWithoutMaintenanceRequestInput>
  }

  export type PaymentCreateManyMaintenanceRequestInputEnvelope = {
    data: PaymentCreateManyMaintenanceRequestInput | PaymentCreateManyMaintenanceRequestInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithoutMaintenanceRequestsInput = {
    update: XOR<PropertyUpdateWithoutMaintenanceRequestsInput, PropertyUncheckedUpdateWithoutMaintenanceRequestsInput>
    create: XOR<PropertyCreateWithoutMaintenanceRequestsInput, PropertyUncheckedCreateWithoutMaintenanceRequestsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutMaintenanceRequestsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutMaintenanceRequestsInput, PropertyUncheckedUpdateWithoutMaintenanceRequestsInput>
  }

  export type PropertyUpdateWithoutMaintenanceRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalUnits?: IntFieldUpdateOperationsInput | number
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    squareFeet?: NullableIntFieldUpdateOperationsInput | number | null
    amenities?: PropertyUpdateamenitiesInput | string[]
    images?: PropertyUpdateimagesInput | string[]
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutPropertiesNestedInput
    units?: UnitUpdateManyWithoutPropertyNestedInput
    payments?: PaymentUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutMaintenanceRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalUnits?: IntFieldUpdateOperationsInput | number
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    squareFeet?: NullableIntFieldUpdateOperationsInput | number | null
    amenities?: PropertyUpdateamenitiesInput | string[]
    images?: PropertyUpdateimagesInput | string[]
    organizationId?: StringFieldUpdateOperationsInput | string
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUncheckedUpdateManyWithoutPropertyNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type UnitUpsertWithoutMaintenanceRequestsInput = {
    update: XOR<UnitUpdateWithoutMaintenanceRequestsInput, UnitUncheckedUpdateWithoutMaintenanceRequestsInput>
    create: XOR<UnitCreateWithoutMaintenanceRequestsInput, UnitUncheckedCreateWithoutMaintenanceRequestsInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutMaintenanceRequestsInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutMaintenanceRequestsInput, UnitUncheckedUpdateWithoutMaintenanceRequestsInput>
  }

  export type UnitUpdateWithoutMaintenanceRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    squareFeet?: IntFieldUpdateOperationsInput | number
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    features?: UnitUpdatefeaturesInput | string[]
    currentLeaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutUnitsNestedInput
    leases?: LeaseUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutMaintenanceRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    squareFeet?: IntFieldUpdateOperationsInput | number
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    features?: UnitUpdatefeaturesInput | string[]
    propertyId?: StringFieldUpdateOperationsInput | string
    currentLeaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leases?: LeaseUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UserUpsertWithoutMaintenanceRequestsInput = {
    update: XOR<UserUpdateWithoutMaintenanceRequestsInput, UserUncheckedUpdateWithoutMaintenanceRequestsInput>
    create: XOR<UserCreateWithoutMaintenanceRequestsInput, UserUncheckedCreateWithoutMaintenanceRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMaintenanceRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMaintenanceRequestsInput, UserUncheckedUpdateWithoutMaintenanceRequestsInput>
  }

  export type UserUpdateWithoutMaintenanceRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
    tenantProfile?: TenantUpdateOneWithoutUserNestedInput
    vendorProfile?: VendorUpdateOneWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutTenantNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutMaintenanceRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantProfile?: TenantUncheckedUpdateOneWithoutUserNestedInput
    vendorProfile?: VendorUncheckedUpdateOneWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type VendorUpsertWithoutMaintenanceRequestsInput = {
    update: XOR<VendorUpdateWithoutMaintenanceRequestsInput, VendorUncheckedUpdateWithoutMaintenanceRequestsInput>
    create: XOR<VendorCreateWithoutMaintenanceRequestsInput, VendorUncheckedCreateWithoutMaintenanceRequestsInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutMaintenanceRequestsInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutMaintenanceRequestsInput, VendorUncheckedUpdateWithoutMaintenanceRequestsInput>
  }

  export type VendorUpdateWithoutMaintenanceRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessLicense?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: VendorUpdatespecialtiesInput | string[]
    serviceRadius?: NullableIntFieldUpdateOperationsInput | number | null
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    completedJobs?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    availability?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVendorProfileNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutVendorsNestedInput
    payments?: PaymentUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutMaintenanceRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessLicense?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: VendorUpdatespecialtiesInput | string[]
    serviceRadius?: NullableIntFieldUpdateOperationsInput | number | null
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    completedJobs?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    availability?: NullableJsonNullValueInput | InputJsonValue
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutMaintenanceRequestInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutMaintenanceRequestInput, PaymentUncheckedUpdateWithoutMaintenanceRequestInput>
    create: XOR<PaymentCreateWithoutMaintenanceRequestInput, PaymentUncheckedCreateWithoutMaintenanceRequestInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutMaintenanceRequestInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutMaintenanceRequestInput, PaymentUncheckedUpdateWithoutMaintenanceRequestInput>
  }

  export type PaymentUpdateManyWithWhereWithoutMaintenanceRequestInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutMaintenanceRequestInput>
  }

  export type PropertyCreateWithoutPaymentsInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zipCode: string
    type: $Enums.PropertyType
    description?: string | null
    totalUnits?: number
    yearBuilt?: number | null
    squareFeet?: number | null
    amenities?: PropertyCreateamenitiesInput | string[]
    images?: PropertyCreateimagesInput | string[]
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutPropertiesInput
    units?: UnitCreateNestedManyWithoutPropertyInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutPaymentsInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zipCode: string
    type: $Enums.PropertyType
    description?: string | null
    totalUnits?: number
    yearBuilt?: number | null
    squareFeet?: number | null
    amenities?: PropertyCreateamenitiesInput | string[]
    images?: PropertyCreateimagesInput | string[]
    organizationId: string
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    units?: UnitUncheckedCreateNestedManyWithoutPropertyInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutPaymentsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutPaymentsInput, PropertyUncheckedCreateWithoutPaymentsInput>
  }

  export type LeaseCreateWithoutPaymentsInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    monthlyRent: Decimal | DecimalJsLike | number | string
    securityDeposit: Decimal | DecimalJsLike | number | string
    lateFeeDays?: number
    lateFeeAmount?: Decimal | DecimalJsLike | number | string
    terms?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutLeasesInput
    unit: UnitCreateNestedOneWithoutLeasesInput
  }

  export type LeaseUncheckedCreateWithoutPaymentsInput = {
    id?: string
    tenantId: string
    unitId: string
    startDate: Date | string
    endDate: Date | string
    monthlyRent: Decimal | DecimalJsLike | number | string
    securityDeposit: Decimal | DecimalJsLike | number | string
    lateFeeDays?: number
    lateFeeAmount?: Decimal | DecimalJsLike | number | string
    terms?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaseCreateOrConnectWithoutPaymentsInput = {
    where: LeaseWhereUniqueInput
    create: XOR<LeaseCreateWithoutPaymentsInput, LeaseUncheckedCreateWithoutPaymentsInput>
  }

  export type UserCreateWithoutPaymentsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    avatar?: string | null
    emailVerified?: boolean
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutUsersInput
    tenantProfile?: TenantCreateNestedOneWithoutUserInput
    vendorProfile?: VendorCreateNestedOneWithoutUserInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutTenantInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    avatar?: string | null
    emailVerified?: boolean
    phone?: string | null
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantProfile?: TenantUncheckedCreateNestedOneWithoutUserInput
    vendorProfile?: VendorUncheckedCreateNestedOneWithoutUserInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type VendorCreateWithoutPaymentsInput = {
    id?: string
    businessName: string
    businessLicense?: string | null
    specialties?: VendorCreatespecialtiesInput | string[]
    serviceRadius?: number | null
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    rating?: Decimal | DecimalJsLike | number | string | null
    completedJobs?: number
    isVerified?: boolean
    availability?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVendorProfileInput
    organization: OrganizationCreateNestedOneWithoutVendorsInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutAssignedVendorInput
  }

  export type VendorUncheckedCreateWithoutPaymentsInput = {
    id?: string
    userId: string
    businessName: string
    businessLicense?: string | null
    specialties?: VendorCreatespecialtiesInput | string[]
    serviceRadius?: number | null
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    rating?: Decimal | DecimalJsLike | number | string | null
    completedJobs?: number
    isVerified?: boolean
    availability?: NullableJsonNullValueInput | InputJsonValue
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutAssignedVendorInput
  }

  export type VendorCreateOrConnectWithoutPaymentsInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutPaymentsInput, VendorUncheckedCreateWithoutPaymentsInput>
  }

  export type MaintenanceRequestCreateWithoutPaymentsInput = {
    id?: string
    title: string
    description: string
    category: string
    priority: $Enums.MaintenancePriority
    status?: $Enums.MaintenanceStatus
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    actualCost?: Decimal | DecimalJsLike | number | string | null
    scheduledDate?: Date | string | null
    completedDate?: Date | string | null
    images?: MaintenanceRequestCreateimagesInput | string[]
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutMaintenanceRequestsInput
    unit?: UnitCreateNestedOneWithoutMaintenanceRequestsInput
    tenant: UserCreateNestedOneWithoutMaintenanceRequestsInput
    assignedVendor?: VendorCreateNestedOneWithoutMaintenanceRequestsInput
  }

  export type MaintenanceRequestUncheckedCreateWithoutPaymentsInput = {
    id?: string
    title: string
    description: string
    category: string
    priority: $Enums.MaintenancePriority
    status?: $Enums.MaintenanceStatus
    propertyId: string
    unitId?: string | null
    tenantId: string
    assignedVendorId?: string | null
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    actualCost?: Decimal | DecimalJsLike | number | string | null
    scheduledDate?: Date | string | null
    completedDate?: Date | string | null
    images?: MaintenanceRequestCreateimagesInput | string[]
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceRequestCreateOrConnectWithoutPaymentsInput = {
    where: MaintenanceRequestWhereUniqueInput
    create: XOR<MaintenanceRequestCreateWithoutPaymentsInput, MaintenanceRequestUncheckedCreateWithoutPaymentsInput>
  }

  export type PropertyUpsertWithoutPaymentsInput = {
    update: XOR<PropertyUpdateWithoutPaymentsInput, PropertyUncheckedUpdateWithoutPaymentsInput>
    create: XOR<PropertyCreateWithoutPaymentsInput, PropertyUncheckedCreateWithoutPaymentsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutPaymentsInput, PropertyUncheckedUpdateWithoutPaymentsInput>
  }

  export type PropertyUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalUnits?: IntFieldUpdateOperationsInput | number
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    squareFeet?: NullableIntFieldUpdateOperationsInput | number | null
    amenities?: PropertyUpdateamenitiesInput | string[]
    images?: PropertyUpdateimagesInput | string[]
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutPropertiesNestedInput
    units?: UnitUpdateManyWithoutPropertyNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalUnits?: IntFieldUpdateOperationsInput | number
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    squareFeet?: NullableIntFieldUpdateOperationsInput | number | null
    amenities?: PropertyUpdateamenitiesInput | string[]
    images?: PropertyUpdateimagesInput | string[]
    organizationId?: StringFieldUpdateOperationsInput | string
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUncheckedUpdateManyWithoutPropertyNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type LeaseUpsertWithoutPaymentsInput = {
    update: XOR<LeaseUpdateWithoutPaymentsInput, LeaseUncheckedUpdateWithoutPaymentsInput>
    create: XOR<LeaseCreateWithoutPaymentsInput, LeaseUncheckedCreateWithoutPaymentsInput>
    where?: LeaseWhereInput
  }

  export type LeaseUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: LeaseWhereInput
    data: XOR<LeaseUpdateWithoutPaymentsInput, LeaseUncheckedUpdateWithoutPaymentsInput>
  }

  export type LeaseUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lateFeeDays?: IntFieldUpdateOperationsInput | number
    lateFeeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutLeasesNestedInput
    unit?: UnitUpdateOneRequiredWithoutLeasesNestedInput
  }

  export type LeaseUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lateFeeDays?: IntFieldUpdateOperationsInput | number
    lateFeeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
    tenantProfile?: TenantUpdateOneWithoutUserNestedInput
    vendorProfile?: VendorUpdateOneWithoutUserNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutTenantNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantProfile?: TenantUncheckedUpdateOneWithoutUserNestedInput
    vendorProfile?: VendorUncheckedUpdateOneWithoutUserNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutTenantNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type VendorUpsertWithoutPaymentsInput = {
    update: XOR<VendorUpdateWithoutPaymentsInput, VendorUncheckedUpdateWithoutPaymentsInput>
    create: XOR<VendorCreateWithoutPaymentsInput, VendorUncheckedCreateWithoutPaymentsInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutPaymentsInput, VendorUncheckedUpdateWithoutPaymentsInput>
  }

  export type VendorUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessLicense?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: VendorUpdatespecialtiesInput | string[]
    serviceRadius?: NullableIntFieldUpdateOperationsInput | number | null
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    completedJobs?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    availability?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVendorProfileNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutVendorsNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutAssignedVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessLicense?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: VendorUpdatespecialtiesInput | string[]
    serviceRadius?: NullableIntFieldUpdateOperationsInput | number | null
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    completedJobs?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    availability?: NullableJsonNullValueInput | InputJsonValue
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutAssignedVendorNestedInput
  }

  export type MaintenanceRequestUpsertWithoutPaymentsInput = {
    update: XOR<MaintenanceRequestUpdateWithoutPaymentsInput, MaintenanceRequestUncheckedUpdateWithoutPaymentsInput>
    create: XOR<MaintenanceRequestCreateWithoutPaymentsInput, MaintenanceRequestUncheckedCreateWithoutPaymentsInput>
    where?: MaintenanceRequestWhereInput
  }

  export type MaintenanceRequestUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: MaintenanceRequestWhereInput
    data: XOR<MaintenanceRequestUpdateWithoutPaymentsInput, MaintenanceRequestUncheckedUpdateWithoutPaymentsInput>
  }

  export type MaintenanceRequestUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumMaintenancePriorityFieldUpdateOperationsInput | $Enums.MaintenancePriority
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: MaintenanceRequestUpdateimagesInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutMaintenanceRequestsNestedInput
    unit?: UnitUpdateOneWithoutMaintenanceRequestsNestedInput
    tenant?: UserUpdateOneRequiredWithoutMaintenanceRequestsNestedInput
    assignedVendor?: VendorUpdateOneWithoutMaintenanceRequestsNestedInput
  }

  export type MaintenanceRequestUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumMaintenancePriorityFieldUpdateOperationsInput | $Enums.MaintenancePriority
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    propertyId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    assignedVendorId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: MaintenanceRequestUpdateimagesInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutMessagesInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    avatar?: string | null
    emailVerified?: boolean
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutUsersInput
    tenantProfile?: TenantCreateNestedOneWithoutUserInput
    vendorProfile?: VendorCreateNestedOneWithoutUserInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutTenantInput
    payments?: PaymentCreateNestedManyWithoutTenantInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    avatar?: string | null
    emailVerified?: boolean
    phone?: string | null
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantProfile?: TenantUncheckedCreateNestedOneWithoutUserInput
    vendorProfile?: VendorUncheckedCreateNestedOneWithoutUserInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput
    payments?: PaymentUncheckedCreateNestedManyWithoutTenantInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
    tenantProfile?: TenantUpdateOneWithoutUserNestedInput
    vendorProfile?: VendorUpdateOneWithoutUserNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutTenantNestedInput
    payments?: PaymentUpdateManyWithoutTenantNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantProfile?: TenantUncheckedUpdateOneWithoutUserNestedInput
    vendorProfile?: VendorUncheckedUpdateOneWithoutUserNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutTenantNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type UserCreateManyOrganizationInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    avatar?: string | null
    emailVerified?: boolean
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyCreateManyOrganizationInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zipCode: string
    type: $Enums.PropertyType
    description?: string | null
    totalUnits?: number
    yearBuilt?: number | null
    squareFeet?: number | null
    amenities?: PropertyCreateamenitiesInput | string[]
    images?: PropertyCreateimagesInput | string[]
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VendorCreateManyOrganizationInput = {
    id?: string
    userId: string
    businessName: string
    businessLicense?: string | null
    specialties?: VendorCreatespecialtiesInput | string[]
    serviceRadius?: number | null
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    rating?: Decimal | DecimalJsLike | number | string | null
    completedJobs?: number
    isVerified?: boolean
    availability?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantProfile?: TenantUpdateOneWithoutUserNestedInput
    vendorProfile?: VendorUpdateOneWithoutUserNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutTenantNestedInput
    payments?: PaymentUpdateManyWithoutTenantNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantProfile?: TenantUncheckedUpdateOneWithoutUserNestedInput
    vendorProfile?: VendorUncheckedUpdateOneWithoutUserNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutTenantNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutTenantNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalUnits?: IntFieldUpdateOperationsInput | number
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    squareFeet?: NullableIntFieldUpdateOperationsInput | number | null
    amenities?: PropertyUpdateamenitiesInput | string[]
    images?: PropertyUpdateimagesInput | string[]
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUpdateManyWithoutPropertyNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutPropertyNestedInput
    payments?: PaymentUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalUnits?: IntFieldUpdateOperationsInput | number
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    squareFeet?: NullableIntFieldUpdateOperationsInput | number | null
    amenities?: PropertyUpdateamenitiesInput | string[]
    images?: PropertyUpdateimagesInput | string[]
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUncheckedUpdateManyWithoutPropertyNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutPropertyNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    totalUnits?: IntFieldUpdateOperationsInput | number
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    squareFeet?: NullableIntFieldUpdateOperationsInput | number | null
    amenities?: PropertyUpdateamenitiesInput | string[]
    images?: PropertyUpdateimagesInput | string[]
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessLicense?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: VendorUpdatespecialtiesInput | string[]
    serviceRadius?: NullableIntFieldUpdateOperationsInput | number | null
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    completedJobs?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    availability?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVendorProfileNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutAssignedVendorNestedInput
    payments?: PaymentUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessLicense?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: VendorUpdatespecialtiesInput | string[]
    serviceRadius?: NullableIntFieldUpdateOperationsInput | number | null
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    completedJobs?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    availability?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutAssignedVendorNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessLicense?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: VendorUpdatespecialtiesInput | string[]
    serviceRadius?: NullableIntFieldUpdateOperationsInput | number | null
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    completedJobs?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    availability?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRequestCreateManyTenantInput = {
    id?: string
    title: string
    description: string
    category: string
    priority: $Enums.MaintenancePriority
    status?: $Enums.MaintenanceStatus
    propertyId: string
    unitId?: string | null
    assignedVendorId?: string | null
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    actualCost?: Decimal | DecimalJsLike | number | string | null
    scheduledDate?: Date | string | null
    completedDate?: Date | string | null
    images?: MaintenanceRequestCreateimagesInput | string[]
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManyTenantInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.PaymentType
    status?: $Enums.PaymentStatus
    method?: string | null
    description: string
    dueDate?: Date | string | null
    paidDate?: Date | string | null
    propertyId?: string | null
    leaseId?: string | null
    vendorId?: string | null
    maintenanceRequestId?: string | null
    transactionId?: string | null
    fees?: Decimal | DecimalJsLike | number | string | null
    lateFee?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateManySenderInput = {
    id?: string
    content: string
    receiverId?: string | null
    threadId?: string | null
    isRead?: boolean
    attachments?: MessageCreateattachmentsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceRequestUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumMaintenancePriorityFieldUpdateOperationsInput | $Enums.MaintenancePriority
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: MaintenanceRequestUpdateimagesInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutMaintenanceRequestsNestedInput
    unit?: UnitUpdateOneWithoutMaintenanceRequestsNestedInput
    assignedVendor?: VendorUpdateOneWithoutMaintenanceRequestsNestedInput
    payments?: PaymentUpdateManyWithoutMaintenanceRequestNestedInput
  }

  export type MaintenanceRequestUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumMaintenancePriorityFieldUpdateOperationsInput | $Enums.MaintenancePriority
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    propertyId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedVendorId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: MaintenanceRequestUpdateimagesInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutMaintenanceRequestNestedInput
  }

  export type MaintenanceRequestUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumMaintenancePriorityFieldUpdateOperationsInput | $Enums.MaintenancePriority
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    propertyId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedVendorId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: MaintenanceRequestUpdateimagesInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lateFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneWithoutPaymentsNestedInput
    lease?: LeaseUpdateOneWithoutPaymentsNestedInput
    vendor?: VendorUpdateOneWithoutPaymentsNestedInput
    maintenanceRequest?: MaintenanceRequestUpdateOneWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    leaseId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lateFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    leaseId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lateFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    threadId?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    attachments?: MessageUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    threadId?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    attachments?: MessageUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    threadId?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    attachments?: MessageUpdateattachmentsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitCreateManyPropertyInput = {
    id?: string
    number: string
    floor?: number | null
    bedrooms: number
    bathrooms: Decimal | DecimalJsLike | number | string
    squareFeet: number
    monthlyRent: Decimal | DecimalJsLike | number | string
    securityDeposit: Decimal | DecimalJsLike | number | string
    isOccupied?: boolean
    features?: UnitCreatefeaturesInput | string[]
    currentLeaseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceRequestCreateManyPropertyInput = {
    id?: string
    title: string
    description: string
    category: string
    priority: $Enums.MaintenancePriority
    status?: $Enums.MaintenanceStatus
    unitId?: string | null
    tenantId: string
    assignedVendorId?: string | null
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    actualCost?: Decimal | DecimalJsLike | number | string | null
    scheduledDate?: Date | string | null
    completedDate?: Date | string | null
    images?: MaintenanceRequestCreateimagesInput | string[]
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManyPropertyInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.PaymentType
    status?: $Enums.PaymentStatus
    method?: string | null
    description: string
    dueDate?: Date | string | null
    paidDate?: Date | string | null
    leaseId?: string | null
    tenantId?: string | null
    vendorId?: string | null
    maintenanceRequestId?: string | null
    transactionId?: string | null
    fees?: Decimal | DecimalJsLike | number | string | null
    lateFee?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    squareFeet?: IntFieldUpdateOperationsInput | number
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    features?: UnitUpdatefeaturesInput | string[]
    currentLeaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leases?: LeaseUpdateManyWithoutUnitNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    squareFeet?: IntFieldUpdateOperationsInput | number
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    features?: UnitUpdatefeaturesInput | string[]
    currentLeaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leases?: LeaseUncheckedUpdateManyWithoutUnitNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    squareFeet?: IntFieldUpdateOperationsInput | number
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isOccupied?: BoolFieldUpdateOperationsInput | boolean
    features?: UnitUpdatefeaturesInput | string[]
    currentLeaseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRequestUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumMaintenancePriorityFieldUpdateOperationsInput | $Enums.MaintenancePriority
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: MaintenanceRequestUpdateimagesInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneWithoutMaintenanceRequestsNestedInput
    tenant?: UserUpdateOneRequiredWithoutMaintenanceRequestsNestedInput
    assignedVendor?: VendorUpdateOneWithoutMaintenanceRequestsNestedInput
    payments?: PaymentUpdateManyWithoutMaintenanceRequestNestedInput
  }

  export type MaintenanceRequestUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumMaintenancePriorityFieldUpdateOperationsInput | $Enums.MaintenancePriority
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    assignedVendorId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: MaintenanceRequestUpdateimagesInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutMaintenanceRequestNestedInput
  }

  export type MaintenanceRequestUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumMaintenancePriorityFieldUpdateOperationsInput | $Enums.MaintenancePriority
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    assignedVendorId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: MaintenanceRequestUpdateimagesInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lateFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lease?: LeaseUpdateOneWithoutPaymentsNestedInput
    tenant?: UserUpdateOneWithoutPaymentsNestedInput
    vendor?: VendorUpdateOneWithoutPaymentsNestedInput
    maintenanceRequest?: MaintenanceRequestUpdateOneWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaseId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lateFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaseId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lateFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseCreateManyUnitInput = {
    id?: string
    tenantId: string
    startDate: Date | string
    endDate: Date | string
    monthlyRent: Decimal | DecimalJsLike | number | string
    securityDeposit: Decimal | DecimalJsLike | number | string
    lateFeeDays?: number
    lateFeeAmount?: Decimal | DecimalJsLike | number | string
    terms?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceRequestCreateManyUnitInput = {
    id?: string
    title: string
    description: string
    category: string
    priority: $Enums.MaintenancePriority
    status?: $Enums.MaintenanceStatus
    propertyId: string
    tenantId: string
    assignedVendorId?: string | null
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    actualCost?: Decimal | DecimalJsLike | number | string | null
    scheduledDate?: Date | string | null
    completedDate?: Date | string | null
    images?: MaintenanceRequestCreateimagesInput | string[]
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaseUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lateFeeDays?: IntFieldUpdateOperationsInput | number
    lateFeeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutLeasesNestedInput
    payments?: PaymentUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lateFeeDays?: IntFieldUpdateOperationsInput | number
    lateFeeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lateFeeDays?: IntFieldUpdateOperationsInput | number
    lateFeeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRequestUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumMaintenancePriorityFieldUpdateOperationsInput | $Enums.MaintenancePriority
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: MaintenanceRequestUpdateimagesInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutMaintenanceRequestsNestedInput
    tenant?: UserUpdateOneRequiredWithoutMaintenanceRequestsNestedInput
    assignedVendor?: VendorUpdateOneWithoutMaintenanceRequestsNestedInput
    payments?: PaymentUpdateManyWithoutMaintenanceRequestNestedInput
  }

  export type MaintenanceRequestUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumMaintenancePriorityFieldUpdateOperationsInput | $Enums.MaintenancePriority
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    propertyId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    assignedVendorId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: MaintenanceRequestUpdateimagesInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutMaintenanceRequestNestedInput
  }

  export type MaintenanceRequestUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumMaintenancePriorityFieldUpdateOperationsInput | $Enums.MaintenancePriority
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    propertyId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    assignedVendorId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: MaintenanceRequestUpdateimagesInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseCreateManyTenantInput = {
    id?: string
    unitId: string
    startDate: Date | string
    endDate: Date | string
    monthlyRent: Decimal | DecimalJsLike | number | string
    securityDeposit: Decimal | DecimalJsLike | number | string
    lateFeeDays?: number
    lateFeeAmount?: Decimal | DecimalJsLike | number | string
    terms?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaseUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lateFeeDays?: IntFieldUpdateOperationsInput | number
    lateFeeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneRequiredWithoutLeasesNestedInput
    payments?: PaymentUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lateFeeDays?: IntFieldUpdateOperationsInput | number
    lateFeeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lateFeeDays?: IntFieldUpdateOperationsInput | number
    lateFeeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    terms?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyLeaseInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.PaymentType
    status?: $Enums.PaymentStatus
    method?: string | null
    description: string
    dueDate?: Date | string | null
    paidDate?: Date | string | null
    propertyId?: string | null
    tenantId?: string | null
    vendorId?: string | null
    maintenanceRequestId?: string | null
    transactionId?: string | null
    fees?: Decimal | DecimalJsLike | number | string | null
    lateFee?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateWithoutLeaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lateFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneWithoutPaymentsNestedInput
    tenant?: UserUpdateOneWithoutPaymentsNestedInput
    vendor?: VendorUpdateOneWithoutPaymentsNestedInput
    maintenanceRequest?: MaintenanceRequestUpdateOneWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutLeaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lateFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutLeaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lateFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRequestCreateManyAssignedVendorInput = {
    id?: string
    title: string
    description: string
    category: string
    priority: $Enums.MaintenancePriority
    status?: $Enums.MaintenanceStatus
    propertyId: string
    unitId?: string | null
    tenantId: string
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    actualCost?: Decimal | DecimalJsLike | number | string | null
    scheduledDate?: Date | string | null
    completedDate?: Date | string | null
    images?: MaintenanceRequestCreateimagesInput | string[]
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManyVendorInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.PaymentType
    status?: $Enums.PaymentStatus
    method?: string | null
    description: string
    dueDate?: Date | string | null
    paidDate?: Date | string | null
    propertyId?: string | null
    leaseId?: string | null
    tenantId?: string | null
    maintenanceRequestId?: string | null
    transactionId?: string | null
    fees?: Decimal | DecimalJsLike | number | string | null
    lateFee?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceRequestUpdateWithoutAssignedVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumMaintenancePriorityFieldUpdateOperationsInput | $Enums.MaintenancePriority
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: MaintenanceRequestUpdateimagesInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutMaintenanceRequestsNestedInput
    unit?: UnitUpdateOneWithoutMaintenanceRequestsNestedInput
    tenant?: UserUpdateOneRequiredWithoutMaintenanceRequestsNestedInput
    payments?: PaymentUpdateManyWithoutMaintenanceRequestNestedInput
  }

  export type MaintenanceRequestUncheckedUpdateWithoutAssignedVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumMaintenancePriorityFieldUpdateOperationsInput | $Enums.MaintenancePriority
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    propertyId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: MaintenanceRequestUpdateimagesInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutMaintenanceRequestNestedInput
  }

  export type MaintenanceRequestUncheckedUpdateManyWithoutAssignedVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumMaintenancePriorityFieldUpdateOperationsInput | $Enums.MaintenancePriority
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    propertyId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: MaintenanceRequestUpdateimagesInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lateFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneWithoutPaymentsNestedInput
    lease?: LeaseUpdateOneWithoutPaymentsNestedInput
    tenant?: UserUpdateOneWithoutPaymentsNestedInput
    maintenanceRequest?: MaintenanceRequestUpdateOneWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    leaseId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lateFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    leaseId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    maintenanceRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lateFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyMaintenanceRequestInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.PaymentType
    status?: $Enums.PaymentStatus
    method?: string | null
    description: string
    dueDate?: Date | string | null
    paidDate?: Date | string | null
    propertyId?: string | null
    leaseId?: string | null
    tenantId?: string | null
    vendorId?: string | null
    transactionId?: string | null
    fees?: Decimal | DecimalJsLike | number | string | null
    lateFee?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateWithoutMaintenanceRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lateFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneWithoutPaymentsNestedInput
    lease?: LeaseUpdateOneWithoutPaymentsNestedInput
    tenant?: UserUpdateOneWithoutPaymentsNestedInput
    vendor?: VendorUpdateOneWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutMaintenanceRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    leaseId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lateFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutMaintenanceRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    leaseId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lateFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use OrganizationCountOutputTypeDefaultArgs instead
     */
    export type OrganizationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrganizationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PropertyCountOutputTypeDefaultArgs instead
     */
    export type PropertyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PropertyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UnitCountOutputTypeDefaultArgs instead
     */
    export type UnitCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UnitCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TenantCountOutputTypeDefaultArgs instead
     */
    export type TenantCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TenantCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LeaseCountOutputTypeDefaultArgs instead
     */
    export type LeaseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LeaseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VendorCountOutputTypeDefaultArgs instead
     */
    export type VendorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VendorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MaintenanceRequestCountOutputTypeDefaultArgs instead
     */
    export type MaintenanceRequestCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MaintenanceRequestCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrganizationDefaultArgs instead
     */
    export type OrganizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrganizationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PropertyDefaultArgs instead
     */
    export type PropertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PropertyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UnitDefaultArgs instead
     */
    export type UnitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UnitDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TenantDefaultArgs instead
     */
    export type TenantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TenantDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LeaseDefaultArgs instead
     */
    export type LeaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LeaseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VendorDefaultArgs instead
     */
    export type VendorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VendorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MaintenanceRequestDefaultArgs instead
     */
    export type MaintenanceRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MaintenanceRequestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentDefaultArgs instead
     */
    export type PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MessageDefaultArgs instead
     */
    export type MessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MessageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActivityLogDefaultArgs instead
     */
    export type ActivityLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActivityLogDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}