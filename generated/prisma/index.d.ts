
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
 * Model user_s
 * 
 */
export type user_s = $Result.DefaultSelection<Prisma.$user_sPayload>
/**
 * Model profession_s
 * 
 */
export type profession_s = $Result.DefaultSelection<Prisma.$profession_sPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more User_s
 * const user_s = await prisma.user_s.findMany()
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
   * // Fetch zero or more User_s
   * const user_s = await prisma.user_s.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user_s`: Exposes CRUD operations for the **user_s** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_s
    * const user_s = await prisma.user_s.findMany()
    * ```
    */
  get user_s(): Prisma.user_sDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profession_s`: Exposes CRUD operations for the **profession_s** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profession_s
    * const profession_s = await prisma.profession_s.findMany()
    * ```
    */
  get profession_s(): Prisma.profession_sDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    user_s: 'user_s',
    profession_s: 'profession_s'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user_s" | "profession_s"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user_s: {
        payload: Prisma.$user_sPayload<ExtArgs>
        fields: Prisma.user_sFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_sFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_sFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sPayload>
          }
          findFirst: {
            args: Prisma.user_sFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_sFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sPayload>
          }
          findMany: {
            args: Prisma.user_sFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sPayload>[]
          }
          create: {
            args: Prisma.user_sCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sPayload>
          }
          createMany: {
            args: Prisma.user_sCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_sCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sPayload>[]
          }
          delete: {
            args: Prisma.user_sDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sPayload>
          }
          update: {
            args: Prisma.user_sUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sPayload>
          }
          deleteMany: {
            args: Prisma.user_sDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_sUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_sUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sPayload>[]
          }
          upsert: {
            args: Prisma.user_sUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sPayload>
          }
          aggregate: {
            args: Prisma.User_sAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_s>
          }
          groupBy: {
            args: Prisma.user_sGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_sGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_sCountArgs<ExtArgs>
            result: $Utils.Optional<User_sCountAggregateOutputType> | number
          }
        }
      }
      profession_s: {
        payload: Prisma.$profession_sPayload<ExtArgs>
        fields: Prisma.profession_sFieldRefs
        operations: {
          findUnique: {
            args: Prisma.profession_sFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_sPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.profession_sFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_sPayload>
          }
          findFirst: {
            args: Prisma.profession_sFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_sPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.profession_sFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_sPayload>
          }
          findMany: {
            args: Prisma.profession_sFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_sPayload>[]
          }
          create: {
            args: Prisma.profession_sCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_sPayload>
          }
          createMany: {
            args: Prisma.profession_sCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.profession_sCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_sPayload>[]
          }
          delete: {
            args: Prisma.profession_sDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_sPayload>
          }
          update: {
            args: Prisma.profession_sUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_sPayload>
          }
          deleteMany: {
            args: Prisma.profession_sDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.profession_sUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.profession_sUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_sPayload>[]
          }
          upsert: {
            args: Prisma.profession_sUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_sPayload>
          }
          aggregate: {
            args: Prisma.Profession_sAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfession_s>
          }
          groupBy: {
            args: Prisma.profession_sGroupByArgs<ExtArgs>
            result: $Utils.Optional<Profession_sGroupByOutputType>[]
          }
          count: {
            args: Prisma.profession_sCountArgs<ExtArgs>
            result: $Utils.Optional<Profession_sCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user_s?: user_sOmit
    profession_s?: profession_sOmit
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
    | 'updateManyAndReturn'
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
   * Count Type User_sCountOutputType
   */

  export type User_sCountOutputType = {
    profession_s: number
  }

  export type User_sCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profession_s?: boolean | User_sCountOutputTypeCountProfession_sArgs
  }

  // Custom InputTypes
  /**
   * User_sCountOutputType without action
   */
  export type User_sCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_sCountOutputType
     */
    select?: User_sCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * User_sCountOutputType without action
   */
  export type User_sCountOutputTypeCountProfession_sArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profession_sWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user_s
   */

  export type AggregateUser_s = {
    _count: User_sCountAggregateOutputType | null
    _avg: User_sAvgAggregateOutputType | null
    _sum: User_sSumAggregateOutputType | null
    _min: User_sMinAggregateOutputType | null
    _max: User_sMaxAggregateOutputType | null
  }

  export type User_sAvgAggregateOutputType = {
    id_user: number | null
    age: number | null
  }

  export type User_sSumAggregateOutputType = {
    id_user: number | null
    age: number | null
  }

  export type User_sMinAggregateOutputType = {
    id_user: number | null
    name_user: string | null
    last_name: string | null
    age: number | null
  }

  export type User_sMaxAggregateOutputType = {
    id_user: number | null
    name_user: string | null
    last_name: string | null
    age: number | null
  }

  export type User_sCountAggregateOutputType = {
    id_user: number
    name_user: number
    last_name: number
    age: number
    _all: number
  }


  export type User_sAvgAggregateInputType = {
    id_user?: true
    age?: true
  }

  export type User_sSumAggregateInputType = {
    id_user?: true
    age?: true
  }

  export type User_sMinAggregateInputType = {
    id_user?: true
    name_user?: true
    last_name?: true
    age?: true
  }

  export type User_sMaxAggregateInputType = {
    id_user?: true
    name_user?: true
    last_name?: true
    age?: true
  }

  export type User_sCountAggregateInputType = {
    id_user?: true
    name_user?: true
    last_name?: true
    age?: true
    _all?: true
  }

  export type User_sAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_s to aggregate.
     */
    where?: user_sWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_s to fetch.
     */
    orderBy?: user_sOrderByWithRelationInput | user_sOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_sWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_s
    **/
    _count?: true | User_sCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_sAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_sSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_sMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_sMaxAggregateInputType
  }

  export type GetUser_sAggregateType<T extends User_sAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_s]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_s[P]>
      : GetScalarType<T[P], AggregateUser_s[P]>
  }




  export type user_sGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_sWhereInput
    orderBy?: user_sOrderByWithAggregationInput | user_sOrderByWithAggregationInput[]
    by: User_sScalarFieldEnum[] | User_sScalarFieldEnum
    having?: user_sScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_sCountAggregateInputType | true
    _avg?: User_sAvgAggregateInputType
    _sum?: User_sSumAggregateInputType
    _min?: User_sMinAggregateInputType
    _max?: User_sMaxAggregateInputType
  }

  export type User_sGroupByOutputType = {
    id_user: number
    name_user: string | null
    last_name: string | null
    age: number | null
    _count: User_sCountAggregateOutputType | null
    _avg: User_sAvgAggregateOutputType | null
    _sum: User_sSumAggregateOutputType | null
    _min: User_sMinAggregateOutputType | null
    _max: User_sMaxAggregateOutputType | null
  }

  type GetUser_sGroupByPayload<T extends user_sGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_sGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_sGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_sGroupByOutputType[P]>
            : GetScalarType<T[P], User_sGroupByOutputType[P]>
        }
      >
    >


  export type user_sSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    name_user?: boolean
    last_name?: boolean
    age?: boolean
    profession_s?: boolean | user_s$profession_sArgs<ExtArgs>
    _count?: boolean | User_sCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_s"]>

  export type user_sSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    name_user?: boolean
    last_name?: boolean
    age?: boolean
  }, ExtArgs["result"]["user_s"]>

  export type user_sSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    name_user?: boolean
    last_name?: boolean
    age?: boolean
  }, ExtArgs["result"]["user_s"]>

  export type user_sSelectScalar = {
    id_user?: boolean
    name_user?: boolean
    last_name?: boolean
    age?: boolean
  }

  export type user_sOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_user" | "name_user" | "last_name" | "age", ExtArgs["result"]["user_s"]>
  export type user_sInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profession_s?: boolean | user_s$profession_sArgs<ExtArgs>
    _count?: boolean | User_sCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type user_sIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type user_sIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $user_sPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_s"
    objects: {
      profession_s: Prisma.$profession_sPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_user: number
      name_user: string | null
      last_name: string | null
      age: number | null
    }, ExtArgs["result"]["user_s"]>
    composites: {}
  }

  type user_sGetPayload<S extends boolean | null | undefined | user_sDefaultArgs> = $Result.GetResult<Prisma.$user_sPayload, S>

  type user_sCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_sFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_sCountAggregateInputType | true
    }

  export interface user_sDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_s'], meta: { name: 'user_s' } }
    /**
     * Find zero or one User_s that matches the filter.
     * @param {user_sFindUniqueArgs} args - Arguments to find a User_s
     * @example
     * // Get one User_s
     * const user_s = await prisma.user_s.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_sFindUniqueArgs>(args: SelectSubset<T, user_sFindUniqueArgs<ExtArgs>>): Prisma__user_sClient<$Result.GetResult<Prisma.$user_sPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_s that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_sFindUniqueOrThrowArgs} args - Arguments to find a User_s
     * @example
     * // Get one User_s
     * const user_s = await prisma.user_s.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_sFindUniqueOrThrowArgs>(args: SelectSubset<T, user_sFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_sClient<$Result.GetResult<Prisma.$user_sPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_sFindFirstArgs} args - Arguments to find a User_s
     * @example
     * // Get one User_s
     * const user_s = await prisma.user_s.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_sFindFirstArgs>(args?: SelectSubset<T, user_sFindFirstArgs<ExtArgs>>): Prisma__user_sClient<$Result.GetResult<Prisma.$user_sPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_s that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_sFindFirstOrThrowArgs} args - Arguments to find a User_s
     * @example
     * // Get one User_s
     * const user_s = await prisma.user_s.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_sFindFirstOrThrowArgs>(args?: SelectSubset<T, user_sFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_sClient<$Result.GetResult<Prisma.$user_sPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_sFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_s
     * const user_s = await prisma.user_s.findMany()
     * 
     * // Get first 10 User_s
     * const user_s = await prisma.user_s.findMany({ take: 10 })
     * 
     * // Only select the `id_user`
     * const user_sWithId_userOnly = await prisma.user_s.findMany({ select: { id_user: true } })
     * 
     */
    findMany<T extends user_sFindManyArgs>(args?: SelectSubset<T, user_sFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_sPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_s.
     * @param {user_sCreateArgs} args - Arguments to create a User_s.
     * @example
     * // Create one User_s
     * const User_s = await prisma.user_s.create({
     *   data: {
     *     // ... data to create a User_s
     *   }
     * })
     * 
     */
    create<T extends user_sCreateArgs>(args: SelectSubset<T, user_sCreateArgs<ExtArgs>>): Prisma__user_sClient<$Result.GetResult<Prisma.$user_sPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_s.
     * @param {user_sCreateManyArgs} args - Arguments to create many User_s.
     * @example
     * // Create many User_s
     * const user_s = await prisma.user_s.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_sCreateManyArgs>(args?: SelectSubset<T, user_sCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_s and returns the data saved in the database.
     * @param {user_sCreateManyAndReturnArgs} args - Arguments to create many User_s.
     * @example
     * // Create many User_s
     * const user_s = await prisma.user_s.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_s and only return the `id_user`
     * const user_sWithId_userOnly = await prisma.user_s.createManyAndReturn({
     *   select: { id_user: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_sCreateManyAndReturnArgs>(args?: SelectSubset<T, user_sCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_sPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_s.
     * @param {user_sDeleteArgs} args - Arguments to delete one User_s.
     * @example
     * // Delete one User_s
     * const User_s = await prisma.user_s.delete({
     *   where: {
     *     // ... filter to delete one User_s
     *   }
     * })
     * 
     */
    delete<T extends user_sDeleteArgs>(args: SelectSubset<T, user_sDeleteArgs<ExtArgs>>): Prisma__user_sClient<$Result.GetResult<Prisma.$user_sPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_s.
     * @param {user_sUpdateArgs} args - Arguments to update one User_s.
     * @example
     * // Update one User_s
     * const user_s = await prisma.user_s.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_sUpdateArgs>(args: SelectSubset<T, user_sUpdateArgs<ExtArgs>>): Prisma__user_sClient<$Result.GetResult<Prisma.$user_sPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_s.
     * @param {user_sDeleteManyArgs} args - Arguments to filter User_s to delete.
     * @example
     * // Delete a few User_s
     * const { count } = await prisma.user_s.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_sDeleteManyArgs>(args?: SelectSubset<T, user_sDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_sUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_s
     * const user_s = await prisma.user_s.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_sUpdateManyArgs>(args: SelectSubset<T, user_sUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_s and returns the data updated in the database.
     * @param {user_sUpdateManyAndReturnArgs} args - Arguments to update many User_s.
     * @example
     * // Update many User_s
     * const user_s = await prisma.user_s.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_s and only return the `id_user`
     * const user_sWithId_userOnly = await prisma.user_s.updateManyAndReturn({
     *   select: { id_user: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_sUpdateManyAndReturnArgs>(args: SelectSubset<T, user_sUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_sPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_s.
     * @param {user_sUpsertArgs} args - Arguments to update or create a User_s.
     * @example
     * // Update or create a User_s
     * const user_s = await prisma.user_s.upsert({
     *   create: {
     *     // ... data to create a User_s
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_s we want to update
     *   }
     * })
     */
    upsert<T extends user_sUpsertArgs>(args: SelectSubset<T, user_sUpsertArgs<ExtArgs>>): Prisma__user_sClient<$Result.GetResult<Prisma.$user_sPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_sCountArgs} args - Arguments to filter User_s to count.
     * @example
     * // Count the number of User_s
     * const count = await prisma.user_s.count({
     *   where: {
     *     // ... the filter for the User_s we want to count
     *   }
     * })
    **/
    count<T extends user_sCountArgs>(
      args?: Subset<T, user_sCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_sCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_sAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_sAggregateArgs>(args: Subset<T, User_sAggregateArgs>): Prisma.PrismaPromise<GetUser_sAggregateType<T>>

    /**
     * Group by User_s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_sGroupByArgs} args - Group by arguments.
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
      T extends user_sGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_sGroupByArgs['orderBy'] }
        : { orderBy?: user_sGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_sGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_sGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_s model
   */
  readonly fields: user_sFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_s.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_sClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profession_s<T extends user_s$profession_sArgs<ExtArgs> = {}>(args?: Subset<T, user_s$profession_sArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profession_sPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user_s model
   */
  interface user_sFieldRefs {
    readonly id_user: FieldRef<"user_s", 'Int'>
    readonly name_user: FieldRef<"user_s", 'String'>
    readonly last_name: FieldRef<"user_s", 'String'>
    readonly age: FieldRef<"user_s", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * user_s findUnique
   */
  export type user_sFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_s
     */
    select?: user_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_s
     */
    omit?: user_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sInclude<ExtArgs> | null
    /**
     * Filter, which user_s to fetch.
     */
    where: user_sWhereUniqueInput
  }

  /**
   * user_s findUniqueOrThrow
   */
  export type user_sFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_s
     */
    select?: user_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_s
     */
    omit?: user_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sInclude<ExtArgs> | null
    /**
     * Filter, which user_s to fetch.
     */
    where: user_sWhereUniqueInput
  }

  /**
   * user_s findFirst
   */
  export type user_sFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_s
     */
    select?: user_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_s
     */
    omit?: user_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sInclude<ExtArgs> | null
    /**
     * Filter, which user_s to fetch.
     */
    where?: user_sWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_s to fetch.
     */
    orderBy?: user_sOrderByWithRelationInput | user_sOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_s.
     */
    cursor?: user_sWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_s.
     */
    distinct?: User_sScalarFieldEnum | User_sScalarFieldEnum[]
  }

  /**
   * user_s findFirstOrThrow
   */
  export type user_sFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_s
     */
    select?: user_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_s
     */
    omit?: user_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sInclude<ExtArgs> | null
    /**
     * Filter, which user_s to fetch.
     */
    where?: user_sWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_s to fetch.
     */
    orderBy?: user_sOrderByWithRelationInput | user_sOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_s.
     */
    cursor?: user_sWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_s.
     */
    distinct?: User_sScalarFieldEnum | User_sScalarFieldEnum[]
  }

  /**
   * user_s findMany
   */
  export type user_sFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_s
     */
    select?: user_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_s
     */
    omit?: user_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sInclude<ExtArgs> | null
    /**
     * Filter, which user_s to fetch.
     */
    where?: user_sWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_s to fetch.
     */
    orderBy?: user_sOrderByWithRelationInput | user_sOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_s.
     */
    cursor?: user_sWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_s.
     */
    skip?: number
    distinct?: User_sScalarFieldEnum | User_sScalarFieldEnum[]
  }

  /**
   * user_s create
   */
  export type user_sCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_s
     */
    select?: user_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_s
     */
    omit?: user_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sInclude<ExtArgs> | null
    /**
     * The data needed to create a user_s.
     */
    data: XOR<user_sCreateInput, user_sUncheckedCreateInput>
  }

  /**
   * user_s createMany
   */
  export type user_sCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_s.
     */
    data: user_sCreateManyInput | user_sCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_s createManyAndReturn
   */
  export type user_sCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_s
     */
    select?: user_sSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_s
     */
    omit?: user_sOmit<ExtArgs> | null
    /**
     * The data used to create many user_s.
     */
    data: user_sCreateManyInput | user_sCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_s update
   */
  export type user_sUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_s
     */
    select?: user_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_s
     */
    omit?: user_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sInclude<ExtArgs> | null
    /**
     * The data needed to update a user_s.
     */
    data: XOR<user_sUpdateInput, user_sUncheckedUpdateInput>
    /**
     * Choose, which user_s to update.
     */
    where: user_sWhereUniqueInput
  }

  /**
   * user_s updateMany
   */
  export type user_sUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_s.
     */
    data: XOR<user_sUpdateManyMutationInput, user_sUncheckedUpdateManyInput>
    /**
     * Filter which user_s to update
     */
    where?: user_sWhereInput
    /**
     * Limit how many user_s to update.
     */
    limit?: number
  }

  /**
   * user_s updateManyAndReturn
   */
  export type user_sUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_s
     */
    select?: user_sSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_s
     */
    omit?: user_sOmit<ExtArgs> | null
    /**
     * The data used to update user_s.
     */
    data: XOR<user_sUpdateManyMutationInput, user_sUncheckedUpdateManyInput>
    /**
     * Filter which user_s to update
     */
    where?: user_sWhereInput
    /**
     * Limit how many user_s to update.
     */
    limit?: number
  }

  /**
   * user_s upsert
   */
  export type user_sUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_s
     */
    select?: user_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_s
     */
    omit?: user_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sInclude<ExtArgs> | null
    /**
     * The filter to search for the user_s to update in case it exists.
     */
    where: user_sWhereUniqueInput
    /**
     * In case the user_s found by the `where` argument doesn't exist, create a new user_s with this data.
     */
    create: XOR<user_sCreateInput, user_sUncheckedCreateInput>
    /**
     * In case the user_s was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_sUpdateInput, user_sUncheckedUpdateInput>
  }

  /**
   * user_s delete
   */
  export type user_sDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_s
     */
    select?: user_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_s
     */
    omit?: user_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sInclude<ExtArgs> | null
    /**
     * Filter which user_s to delete.
     */
    where: user_sWhereUniqueInput
  }

  /**
   * user_s deleteMany
   */
  export type user_sDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_s to delete
     */
    where?: user_sWhereInput
    /**
     * Limit how many user_s to delete.
     */
    limit?: number
  }

  /**
   * user_s.profession_s
   */
  export type user_s$profession_sArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_s
     */
    select?: profession_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_s
     */
    omit?: profession_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_sInclude<ExtArgs> | null
    where?: profession_sWhereInput
    orderBy?: profession_sOrderByWithRelationInput | profession_sOrderByWithRelationInput[]
    cursor?: profession_sWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Profession_sScalarFieldEnum | Profession_sScalarFieldEnum[]
  }

  /**
   * user_s without action
   */
  export type user_sDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_s
     */
    select?: user_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_s
     */
    omit?: user_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sInclude<ExtArgs> | null
  }


  /**
   * Model profession_s
   */

  export type AggregateProfession_s = {
    _count: Profession_sCountAggregateOutputType | null
    _avg: Profession_sAvgAggregateOutputType | null
    _sum: Profession_sSumAggregateOutputType | null
    _min: Profession_sMinAggregateOutputType | null
    _max: Profession_sMaxAggregateOutputType | null
  }

  export type Profession_sAvgAggregateOutputType = {
    id_profesion: number | null
    id_user_profession: number | null
  }

  export type Profession_sSumAggregateOutputType = {
    id_profesion: number | null
    id_user_profession: number | null
  }

  export type Profession_sMinAggregateOutputType = {
    id_profesion: number | null
    name_profesion: string | null
    id_user_profession: number | null
  }

  export type Profession_sMaxAggregateOutputType = {
    id_profesion: number | null
    name_profesion: string | null
    id_user_profession: number | null
  }

  export type Profession_sCountAggregateOutputType = {
    id_profesion: number
    name_profesion: number
    id_user_profession: number
    _all: number
  }


  export type Profession_sAvgAggregateInputType = {
    id_profesion?: true
    id_user_profession?: true
  }

  export type Profession_sSumAggregateInputType = {
    id_profesion?: true
    id_user_profession?: true
  }

  export type Profession_sMinAggregateInputType = {
    id_profesion?: true
    name_profesion?: true
    id_user_profession?: true
  }

  export type Profession_sMaxAggregateInputType = {
    id_profesion?: true
    name_profesion?: true
    id_user_profession?: true
  }

  export type Profession_sCountAggregateInputType = {
    id_profesion?: true
    name_profesion?: true
    id_user_profession?: true
    _all?: true
  }

  export type Profession_sAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profession_s to aggregate.
     */
    where?: profession_sWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profession_s to fetch.
     */
    orderBy?: profession_sOrderByWithRelationInput | profession_sOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: profession_sWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profession_s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profession_s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profession_s
    **/
    _count?: true | Profession_sCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Profession_sAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Profession_sSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Profession_sMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Profession_sMaxAggregateInputType
  }

  export type GetProfession_sAggregateType<T extends Profession_sAggregateArgs> = {
        [P in keyof T & keyof AggregateProfession_s]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfession_s[P]>
      : GetScalarType<T[P], AggregateProfession_s[P]>
  }




  export type profession_sGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profession_sWhereInput
    orderBy?: profession_sOrderByWithAggregationInput | profession_sOrderByWithAggregationInput[]
    by: Profession_sScalarFieldEnum[] | Profession_sScalarFieldEnum
    having?: profession_sScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Profession_sCountAggregateInputType | true
    _avg?: Profession_sAvgAggregateInputType
    _sum?: Profession_sSumAggregateInputType
    _min?: Profession_sMinAggregateInputType
    _max?: Profession_sMaxAggregateInputType
  }

  export type Profession_sGroupByOutputType = {
    id_profesion: number
    name_profesion: string | null
    id_user_profession: number | null
    _count: Profession_sCountAggregateOutputType | null
    _avg: Profession_sAvgAggregateOutputType | null
    _sum: Profession_sSumAggregateOutputType | null
    _min: Profession_sMinAggregateOutputType | null
    _max: Profession_sMaxAggregateOutputType | null
  }

  type GetProfession_sGroupByPayload<T extends profession_sGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Profession_sGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Profession_sGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Profession_sGroupByOutputType[P]>
            : GetScalarType<T[P], Profession_sGroupByOutputType[P]>
        }
      >
    >


  export type profession_sSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_profesion?: boolean
    name_profesion?: boolean
    id_user_profession?: boolean
    user_s?: boolean | profession_s$user_sArgs<ExtArgs>
  }, ExtArgs["result"]["profession_s"]>

  export type profession_sSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_profesion?: boolean
    name_profesion?: boolean
    id_user_profession?: boolean
    user_s?: boolean | profession_s$user_sArgs<ExtArgs>
  }, ExtArgs["result"]["profession_s"]>

  export type profession_sSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_profesion?: boolean
    name_profesion?: boolean
    id_user_profession?: boolean
    user_s?: boolean | profession_s$user_sArgs<ExtArgs>
  }, ExtArgs["result"]["profession_s"]>

  export type profession_sSelectScalar = {
    id_profesion?: boolean
    name_profesion?: boolean
    id_user_profession?: boolean
  }

  export type profession_sOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_profesion" | "name_profesion" | "id_user_profession", ExtArgs["result"]["profession_s"]>
  export type profession_sInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_s?: boolean | profession_s$user_sArgs<ExtArgs>
  }
  export type profession_sIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_s?: boolean | profession_s$user_sArgs<ExtArgs>
  }
  export type profession_sIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_s?: boolean | profession_s$user_sArgs<ExtArgs>
  }

  export type $profession_sPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "profession_s"
    objects: {
      user_s: Prisma.$user_sPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_profesion: number
      name_profesion: string | null
      id_user_profession: number | null
    }, ExtArgs["result"]["profession_s"]>
    composites: {}
  }

  type profession_sGetPayload<S extends boolean | null | undefined | profession_sDefaultArgs> = $Result.GetResult<Prisma.$profession_sPayload, S>

  type profession_sCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<profession_sFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Profession_sCountAggregateInputType | true
    }

  export interface profession_sDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['profession_s'], meta: { name: 'profession_s' } }
    /**
     * Find zero or one Profession_s that matches the filter.
     * @param {profession_sFindUniqueArgs} args - Arguments to find a Profession_s
     * @example
     * // Get one Profession_s
     * const profession_s = await prisma.profession_s.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends profession_sFindUniqueArgs>(args: SelectSubset<T, profession_sFindUniqueArgs<ExtArgs>>): Prisma__profession_sClient<$Result.GetResult<Prisma.$profession_sPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profession_s that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {profession_sFindUniqueOrThrowArgs} args - Arguments to find a Profession_s
     * @example
     * // Get one Profession_s
     * const profession_s = await prisma.profession_s.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends profession_sFindUniqueOrThrowArgs>(args: SelectSubset<T, profession_sFindUniqueOrThrowArgs<ExtArgs>>): Prisma__profession_sClient<$Result.GetResult<Prisma.$profession_sPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profession_s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profession_sFindFirstArgs} args - Arguments to find a Profession_s
     * @example
     * // Get one Profession_s
     * const profession_s = await prisma.profession_s.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends profession_sFindFirstArgs>(args?: SelectSubset<T, profession_sFindFirstArgs<ExtArgs>>): Prisma__profession_sClient<$Result.GetResult<Prisma.$profession_sPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profession_s that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profession_sFindFirstOrThrowArgs} args - Arguments to find a Profession_s
     * @example
     * // Get one Profession_s
     * const profession_s = await prisma.profession_s.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends profession_sFindFirstOrThrowArgs>(args?: SelectSubset<T, profession_sFindFirstOrThrowArgs<ExtArgs>>): Prisma__profession_sClient<$Result.GetResult<Prisma.$profession_sPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profession_s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profession_sFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profession_s
     * const profession_s = await prisma.profession_s.findMany()
     * 
     * // Get first 10 Profession_s
     * const profession_s = await prisma.profession_s.findMany({ take: 10 })
     * 
     * // Only select the `id_profesion`
     * const profession_sWithId_profesionOnly = await prisma.profession_s.findMany({ select: { id_profesion: true } })
     * 
     */
    findMany<T extends profession_sFindManyArgs>(args?: SelectSubset<T, profession_sFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profession_sPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profession_s.
     * @param {profession_sCreateArgs} args - Arguments to create a Profession_s.
     * @example
     * // Create one Profession_s
     * const Profession_s = await prisma.profession_s.create({
     *   data: {
     *     // ... data to create a Profession_s
     *   }
     * })
     * 
     */
    create<T extends profession_sCreateArgs>(args: SelectSubset<T, profession_sCreateArgs<ExtArgs>>): Prisma__profession_sClient<$Result.GetResult<Prisma.$profession_sPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profession_s.
     * @param {profession_sCreateManyArgs} args - Arguments to create many Profession_s.
     * @example
     * // Create many Profession_s
     * const profession_s = await prisma.profession_s.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends profession_sCreateManyArgs>(args?: SelectSubset<T, profession_sCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profession_s and returns the data saved in the database.
     * @param {profession_sCreateManyAndReturnArgs} args - Arguments to create many Profession_s.
     * @example
     * // Create many Profession_s
     * const profession_s = await prisma.profession_s.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profession_s and only return the `id_profesion`
     * const profession_sWithId_profesionOnly = await prisma.profession_s.createManyAndReturn({
     *   select: { id_profesion: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends profession_sCreateManyAndReturnArgs>(args?: SelectSubset<T, profession_sCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profession_sPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profession_s.
     * @param {profession_sDeleteArgs} args - Arguments to delete one Profession_s.
     * @example
     * // Delete one Profession_s
     * const Profession_s = await prisma.profession_s.delete({
     *   where: {
     *     // ... filter to delete one Profession_s
     *   }
     * })
     * 
     */
    delete<T extends profession_sDeleteArgs>(args: SelectSubset<T, profession_sDeleteArgs<ExtArgs>>): Prisma__profession_sClient<$Result.GetResult<Prisma.$profession_sPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profession_s.
     * @param {profession_sUpdateArgs} args - Arguments to update one Profession_s.
     * @example
     * // Update one Profession_s
     * const profession_s = await prisma.profession_s.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends profession_sUpdateArgs>(args: SelectSubset<T, profession_sUpdateArgs<ExtArgs>>): Prisma__profession_sClient<$Result.GetResult<Prisma.$profession_sPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profession_s.
     * @param {profession_sDeleteManyArgs} args - Arguments to filter Profession_s to delete.
     * @example
     * // Delete a few Profession_s
     * const { count } = await prisma.profession_s.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends profession_sDeleteManyArgs>(args?: SelectSubset<T, profession_sDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profession_s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profession_sUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profession_s
     * const profession_s = await prisma.profession_s.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends profession_sUpdateManyArgs>(args: SelectSubset<T, profession_sUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profession_s and returns the data updated in the database.
     * @param {profession_sUpdateManyAndReturnArgs} args - Arguments to update many Profession_s.
     * @example
     * // Update many Profession_s
     * const profession_s = await prisma.profession_s.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profession_s and only return the `id_profesion`
     * const profession_sWithId_profesionOnly = await prisma.profession_s.updateManyAndReturn({
     *   select: { id_profesion: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends profession_sUpdateManyAndReturnArgs>(args: SelectSubset<T, profession_sUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profession_sPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profession_s.
     * @param {profession_sUpsertArgs} args - Arguments to update or create a Profession_s.
     * @example
     * // Update or create a Profession_s
     * const profession_s = await prisma.profession_s.upsert({
     *   create: {
     *     // ... data to create a Profession_s
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profession_s we want to update
     *   }
     * })
     */
    upsert<T extends profession_sUpsertArgs>(args: SelectSubset<T, profession_sUpsertArgs<ExtArgs>>): Prisma__profession_sClient<$Result.GetResult<Prisma.$profession_sPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profession_s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profession_sCountArgs} args - Arguments to filter Profession_s to count.
     * @example
     * // Count the number of Profession_s
     * const count = await prisma.profession_s.count({
     *   where: {
     *     // ... the filter for the Profession_s we want to count
     *   }
     * })
    **/
    count<T extends profession_sCountArgs>(
      args?: Subset<T, profession_sCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Profession_sCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profession_s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Profession_sAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Profession_sAggregateArgs>(args: Subset<T, Profession_sAggregateArgs>): Prisma.PrismaPromise<GetProfession_sAggregateType<T>>

    /**
     * Group by Profession_s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profession_sGroupByArgs} args - Group by arguments.
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
      T extends profession_sGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: profession_sGroupByArgs['orderBy'] }
        : { orderBy?: profession_sGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, profession_sGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfession_sGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the profession_s model
   */
  readonly fields: profession_sFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for profession_s.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__profession_sClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_s<T extends profession_s$user_sArgs<ExtArgs> = {}>(args?: Subset<T, profession_s$user_sArgs<ExtArgs>>): Prisma__user_sClient<$Result.GetResult<Prisma.$user_sPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the profession_s model
   */
  interface profession_sFieldRefs {
    readonly id_profesion: FieldRef<"profession_s", 'Int'>
    readonly name_profesion: FieldRef<"profession_s", 'String'>
    readonly id_user_profession: FieldRef<"profession_s", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * profession_s findUnique
   */
  export type profession_sFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_s
     */
    select?: profession_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_s
     */
    omit?: profession_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_sInclude<ExtArgs> | null
    /**
     * Filter, which profession_s to fetch.
     */
    where: profession_sWhereUniqueInput
  }

  /**
   * profession_s findUniqueOrThrow
   */
  export type profession_sFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_s
     */
    select?: profession_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_s
     */
    omit?: profession_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_sInclude<ExtArgs> | null
    /**
     * Filter, which profession_s to fetch.
     */
    where: profession_sWhereUniqueInput
  }

  /**
   * profession_s findFirst
   */
  export type profession_sFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_s
     */
    select?: profession_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_s
     */
    omit?: profession_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_sInclude<ExtArgs> | null
    /**
     * Filter, which profession_s to fetch.
     */
    where?: profession_sWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profession_s to fetch.
     */
    orderBy?: profession_sOrderByWithRelationInput | profession_sOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profession_s.
     */
    cursor?: profession_sWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profession_s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profession_s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profession_s.
     */
    distinct?: Profession_sScalarFieldEnum | Profession_sScalarFieldEnum[]
  }

  /**
   * profession_s findFirstOrThrow
   */
  export type profession_sFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_s
     */
    select?: profession_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_s
     */
    omit?: profession_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_sInclude<ExtArgs> | null
    /**
     * Filter, which profession_s to fetch.
     */
    where?: profession_sWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profession_s to fetch.
     */
    orderBy?: profession_sOrderByWithRelationInput | profession_sOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profession_s.
     */
    cursor?: profession_sWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profession_s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profession_s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profession_s.
     */
    distinct?: Profession_sScalarFieldEnum | Profession_sScalarFieldEnum[]
  }

  /**
   * profession_s findMany
   */
  export type profession_sFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_s
     */
    select?: profession_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_s
     */
    omit?: profession_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_sInclude<ExtArgs> | null
    /**
     * Filter, which profession_s to fetch.
     */
    where?: profession_sWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profession_s to fetch.
     */
    orderBy?: profession_sOrderByWithRelationInput | profession_sOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profession_s.
     */
    cursor?: profession_sWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profession_s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profession_s.
     */
    skip?: number
    distinct?: Profession_sScalarFieldEnum | Profession_sScalarFieldEnum[]
  }

  /**
   * profession_s create
   */
  export type profession_sCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_s
     */
    select?: profession_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_s
     */
    omit?: profession_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_sInclude<ExtArgs> | null
    /**
     * The data needed to create a profession_s.
     */
    data: XOR<profession_sCreateInput, profession_sUncheckedCreateInput>
  }

  /**
   * profession_s createMany
   */
  export type profession_sCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many profession_s.
     */
    data: profession_sCreateManyInput | profession_sCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profession_s createManyAndReturn
   */
  export type profession_sCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_s
     */
    select?: profession_sSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profession_s
     */
    omit?: profession_sOmit<ExtArgs> | null
    /**
     * The data used to create many profession_s.
     */
    data: profession_sCreateManyInput | profession_sCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_sIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * profession_s update
   */
  export type profession_sUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_s
     */
    select?: profession_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_s
     */
    omit?: profession_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_sInclude<ExtArgs> | null
    /**
     * The data needed to update a profession_s.
     */
    data: XOR<profession_sUpdateInput, profession_sUncheckedUpdateInput>
    /**
     * Choose, which profession_s to update.
     */
    where: profession_sWhereUniqueInput
  }

  /**
   * profession_s updateMany
   */
  export type profession_sUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update profession_s.
     */
    data: XOR<profession_sUpdateManyMutationInput, profession_sUncheckedUpdateManyInput>
    /**
     * Filter which profession_s to update
     */
    where?: profession_sWhereInput
    /**
     * Limit how many profession_s to update.
     */
    limit?: number
  }

  /**
   * profession_s updateManyAndReturn
   */
  export type profession_sUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_s
     */
    select?: profession_sSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profession_s
     */
    omit?: profession_sOmit<ExtArgs> | null
    /**
     * The data used to update profession_s.
     */
    data: XOR<profession_sUpdateManyMutationInput, profession_sUncheckedUpdateManyInput>
    /**
     * Filter which profession_s to update
     */
    where?: profession_sWhereInput
    /**
     * Limit how many profession_s to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_sIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * profession_s upsert
   */
  export type profession_sUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_s
     */
    select?: profession_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_s
     */
    omit?: profession_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_sInclude<ExtArgs> | null
    /**
     * The filter to search for the profession_s to update in case it exists.
     */
    where: profession_sWhereUniqueInput
    /**
     * In case the profession_s found by the `where` argument doesn't exist, create a new profession_s with this data.
     */
    create: XOR<profession_sCreateInput, profession_sUncheckedCreateInput>
    /**
     * In case the profession_s was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profession_sUpdateInput, profession_sUncheckedUpdateInput>
  }

  /**
   * profession_s delete
   */
  export type profession_sDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_s
     */
    select?: profession_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_s
     */
    omit?: profession_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_sInclude<ExtArgs> | null
    /**
     * Filter which profession_s to delete.
     */
    where: profession_sWhereUniqueInput
  }

  /**
   * profession_s deleteMany
   */
  export type profession_sDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profession_s to delete
     */
    where?: profession_sWhereInput
    /**
     * Limit how many profession_s to delete.
     */
    limit?: number
  }

  /**
   * profession_s.user_s
   */
  export type profession_s$user_sArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_s
     */
    select?: user_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_s
     */
    omit?: user_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_sInclude<ExtArgs> | null
    where?: user_sWhereInput
  }

  /**
   * profession_s without action
   */
  export type profession_sDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_s
     */
    select?: profession_sSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_s
     */
    omit?: profession_sOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_sInclude<ExtArgs> | null
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


  export const User_sScalarFieldEnum: {
    id_user: 'id_user',
    name_user: 'name_user',
    last_name: 'last_name',
    age: 'age'
  };

  export type User_sScalarFieldEnum = (typeof User_sScalarFieldEnum)[keyof typeof User_sScalarFieldEnum]


  export const Profession_sScalarFieldEnum: {
    id_profesion: 'id_profesion',
    name_profesion: 'name_profesion',
    id_user_profession: 'id_user_profession'
  };

  export type Profession_sScalarFieldEnum = (typeof Profession_sScalarFieldEnum)[keyof typeof Profession_sScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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


  export type user_sWhereInput = {
    AND?: user_sWhereInput | user_sWhereInput[]
    OR?: user_sWhereInput[]
    NOT?: user_sWhereInput | user_sWhereInput[]
    id_user?: IntFilter<"user_s"> | number
    name_user?: StringNullableFilter<"user_s"> | string | null
    last_name?: StringNullableFilter<"user_s"> | string | null
    age?: IntNullableFilter<"user_s"> | number | null
    profession_s?: Profession_sListRelationFilter
  }

  export type user_sOrderByWithRelationInput = {
    id_user?: SortOrder
    name_user?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    profession_s?: profession_sOrderByRelationAggregateInput
  }

  export type user_sWhereUniqueInput = Prisma.AtLeast<{
    id_user?: number
    AND?: user_sWhereInput | user_sWhereInput[]
    OR?: user_sWhereInput[]
    NOT?: user_sWhereInput | user_sWhereInput[]
    name_user?: StringNullableFilter<"user_s"> | string | null
    last_name?: StringNullableFilter<"user_s"> | string | null
    age?: IntNullableFilter<"user_s"> | number | null
    profession_s?: Profession_sListRelationFilter
  }, "id_user">

  export type user_sOrderByWithAggregationInput = {
    id_user?: SortOrder
    name_user?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    _count?: user_sCountOrderByAggregateInput
    _avg?: user_sAvgOrderByAggregateInput
    _max?: user_sMaxOrderByAggregateInput
    _min?: user_sMinOrderByAggregateInput
    _sum?: user_sSumOrderByAggregateInput
  }

  export type user_sScalarWhereWithAggregatesInput = {
    AND?: user_sScalarWhereWithAggregatesInput | user_sScalarWhereWithAggregatesInput[]
    OR?: user_sScalarWhereWithAggregatesInput[]
    NOT?: user_sScalarWhereWithAggregatesInput | user_sScalarWhereWithAggregatesInput[]
    id_user?: IntWithAggregatesFilter<"user_s"> | number
    name_user?: StringNullableWithAggregatesFilter<"user_s"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"user_s"> | string | null
    age?: IntNullableWithAggregatesFilter<"user_s"> | number | null
  }

  export type profession_sWhereInput = {
    AND?: profession_sWhereInput | profession_sWhereInput[]
    OR?: profession_sWhereInput[]
    NOT?: profession_sWhereInput | profession_sWhereInput[]
    id_profesion?: IntFilter<"profession_s"> | number
    name_profesion?: StringNullableFilter<"profession_s"> | string | null
    id_user_profession?: IntNullableFilter<"profession_s"> | number | null
    user_s?: XOR<User_sNullableScalarRelationFilter, user_sWhereInput> | null
  }

  export type profession_sOrderByWithRelationInput = {
    id_profesion?: SortOrder
    name_profesion?: SortOrderInput | SortOrder
    id_user_profession?: SortOrderInput | SortOrder
    user_s?: user_sOrderByWithRelationInput
  }

  export type profession_sWhereUniqueInput = Prisma.AtLeast<{
    id_profesion?: number
    AND?: profession_sWhereInput | profession_sWhereInput[]
    OR?: profession_sWhereInput[]
    NOT?: profession_sWhereInput | profession_sWhereInput[]
    name_profesion?: StringNullableFilter<"profession_s"> | string | null
    id_user_profession?: IntNullableFilter<"profession_s"> | number | null
    user_s?: XOR<User_sNullableScalarRelationFilter, user_sWhereInput> | null
  }, "id_profesion">

  export type profession_sOrderByWithAggregationInput = {
    id_profesion?: SortOrder
    name_profesion?: SortOrderInput | SortOrder
    id_user_profession?: SortOrderInput | SortOrder
    _count?: profession_sCountOrderByAggregateInput
    _avg?: profession_sAvgOrderByAggregateInput
    _max?: profession_sMaxOrderByAggregateInput
    _min?: profession_sMinOrderByAggregateInput
    _sum?: profession_sSumOrderByAggregateInput
  }

  export type profession_sScalarWhereWithAggregatesInput = {
    AND?: profession_sScalarWhereWithAggregatesInput | profession_sScalarWhereWithAggregatesInput[]
    OR?: profession_sScalarWhereWithAggregatesInput[]
    NOT?: profession_sScalarWhereWithAggregatesInput | profession_sScalarWhereWithAggregatesInput[]
    id_profesion?: IntWithAggregatesFilter<"profession_s"> | number
    name_profesion?: StringNullableWithAggregatesFilter<"profession_s"> | string | null
    id_user_profession?: IntNullableWithAggregatesFilter<"profession_s"> | number | null
  }

  export type user_sCreateInput = {
    id_user: number
    name_user?: string | null
    last_name?: string | null
    age?: number | null
    profession_s?: profession_sCreateNestedManyWithoutUser_sInput
  }

  export type user_sUncheckedCreateInput = {
    id_user: number
    name_user?: string | null
    last_name?: string | null
    age?: number | null
    profession_s?: profession_sUncheckedCreateNestedManyWithoutUser_sInput
  }

  export type user_sUpdateInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    name_user?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    profession_s?: profession_sUpdateManyWithoutUser_sNestedInput
  }

  export type user_sUncheckedUpdateInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    name_user?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    profession_s?: profession_sUncheckedUpdateManyWithoutUser_sNestedInput
  }

  export type user_sCreateManyInput = {
    id_user: number
    name_user?: string | null
    last_name?: string | null
    age?: number | null
  }

  export type user_sUpdateManyMutationInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    name_user?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type user_sUncheckedUpdateManyInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    name_user?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type profession_sCreateInput = {
    id_profesion: number
    name_profesion?: string | null
    user_s?: user_sCreateNestedOneWithoutProfession_sInput
  }

  export type profession_sUncheckedCreateInput = {
    id_profesion: number
    name_profesion?: string | null
    id_user_profession?: number | null
  }

  export type profession_sUpdateInput = {
    id_profesion?: IntFieldUpdateOperationsInput | number
    name_profesion?: NullableStringFieldUpdateOperationsInput | string | null
    user_s?: user_sUpdateOneWithoutProfession_sNestedInput
  }

  export type profession_sUncheckedUpdateInput = {
    id_profesion?: IntFieldUpdateOperationsInput | number
    name_profesion?: NullableStringFieldUpdateOperationsInput | string | null
    id_user_profession?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type profession_sCreateManyInput = {
    id_profesion: number
    name_profesion?: string | null
    id_user_profession?: number | null
  }

  export type profession_sUpdateManyMutationInput = {
    id_profesion?: IntFieldUpdateOperationsInput | number
    name_profesion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profession_sUncheckedUpdateManyInput = {
    id_profesion?: IntFieldUpdateOperationsInput | number
    name_profesion?: NullableStringFieldUpdateOperationsInput | string | null
    id_user_profession?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type Profession_sListRelationFilter = {
    every?: profession_sWhereInput
    some?: profession_sWhereInput
    none?: profession_sWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type profession_sOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_sCountOrderByAggregateInput = {
    id_user?: SortOrder
    name_user?: SortOrder
    last_name?: SortOrder
    age?: SortOrder
  }

  export type user_sAvgOrderByAggregateInput = {
    id_user?: SortOrder
    age?: SortOrder
  }

  export type user_sMaxOrderByAggregateInput = {
    id_user?: SortOrder
    name_user?: SortOrder
    last_name?: SortOrder
    age?: SortOrder
  }

  export type user_sMinOrderByAggregateInput = {
    id_user?: SortOrder
    name_user?: SortOrder
    last_name?: SortOrder
    age?: SortOrder
  }

  export type user_sSumOrderByAggregateInput = {
    id_user?: SortOrder
    age?: SortOrder
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

  export type User_sNullableScalarRelationFilter = {
    is?: user_sWhereInput | null
    isNot?: user_sWhereInput | null
  }

  export type profession_sCountOrderByAggregateInput = {
    id_profesion?: SortOrder
    name_profesion?: SortOrder
    id_user_profession?: SortOrder
  }

  export type profession_sAvgOrderByAggregateInput = {
    id_profesion?: SortOrder
    id_user_profession?: SortOrder
  }

  export type profession_sMaxOrderByAggregateInput = {
    id_profesion?: SortOrder
    name_profesion?: SortOrder
    id_user_profession?: SortOrder
  }

  export type profession_sMinOrderByAggregateInput = {
    id_profesion?: SortOrder
    name_profesion?: SortOrder
    id_user_profession?: SortOrder
  }

  export type profession_sSumOrderByAggregateInput = {
    id_profesion?: SortOrder
    id_user_profession?: SortOrder
  }

  export type profession_sCreateNestedManyWithoutUser_sInput = {
    create?: XOR<profession_sCreateWithoutUser_sInput, profession_sUncheckedCreateWithoutUser_sInput> | profession_sCreateWithoutUser_sInput[] | profession_sUncheckedCreateWithoutUser_sInput[]
    connectOrCreate?: profession_sCreateOrConnectWithoutUser_sInput | profession_sCreateOrConnectWithoutUser_sInput[]
    createMany?: profession_sCreateManyUser_sInputEnvelope
    connect?: profession_sWhereUniqueInput | profession_sWhereUniqueInput[]
  }

  export type profession_sUncheckedCreateNestedManyWithoutUser_sInput = {
    create?: XOR<profession_sCreateWithoutUser_sInput, profession_sUncheckedCreateWithoutUser_sInput> | profession_sCreateWithoutUser_sInput[] | profession_sUncheckedCreateWithoutUser_sInput[]
    connectOrCreate?: profession_sCreateOrConnectWithoutUser_sInput | profession_sCreateOrConnectWithoutUser_sInput[]
    createMany?: profession_sCreateManyUser_sInputEnvelope
    connect?: profession_sWhereUniqueInput | profession_sWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type profession_sUpdateManyWithoutUser_sNestedInput = {
    create?: XOR<profession_sCreateWithoutUser_sInput, profession_sUncheckedCreateWithoutUser_sInput> | profession_sCreateWithoutUser_sInput[] | profession_sUncheckedCreateWithoutUser_sInput[]
    connectOrCreate?: profession_sCreateOrConnectWithoutUser_sInput | profession_sCreateOrConnectWithoutUser_sInput[]
    upsert?: profession_sUpsertWithWhereUniqueWithoutUser_sInput | profession_sUpsertWithWhereUniqueWithoutUser_sInput[]
    createMany?: profession_sCreateManyUser_sInputEnvelope
    set?: profession_sWhereUniqueInput | profession_sWhereUniqueInput[]
    disconnect?: profession_sWhereUniqueInput | profession_sWhereUniqueInput[]
    delete?: profession_sWhereUniqueInput | profession_sWhereUniqueInput[]
    connect?: profession_sWhereUniqueInput | profession_sWhereUniqueInput[]
    update?: profession_sUpdateWithWhereUniqueWithoutUser_sInput | profession_sUpdateWithWhereUniqueWithoutUser_sInput[]
    updateMany?: profession_sUpdateManyWithWhereWithoutUser_sInput | profession_sUpdateManyWithWhereWithoutUser_sInput[]
    deleteMany?: profession_sScalarWhereInput | profession_sScalarWhereInput[]
  }

  export type profession_sUncheckedUpdateManyWithoutUser_sNestedInput = {
    create?: XOR<profession_sCreateWithoutUser_sInput, profession_sUncheckedCreateWithoutUser_sInput> | profession_sCreateWithoutUser_sInput[] | profession_sUncheckedCreateWithoutUser_sInput[]
    connectOrCreate?: profession_sCreateOrConnectWithoutUser_sInput | profession_sCreateOrConnectWithoutUser_sInput[]
    upsert?: profession_sUpsertWithWhereUniqueWithoutUser_sInput | profession_sUpsertWithWhereUniqueWithoutUser_sInput[]
    createMany?: profession_sCreateManyUser_sInputEnvelope
    set?: profession_sWhereUniqueInput | profession_sWhereUniqueInput[]
    disconnect?: profession_sWhereUniqueInput | profession_sWhereUniqueInput[]
    delete?: profession_sWhereUniqueInput | profession_sWhereUniqueInput[]
    connect?: profession_sWhereUniqueInput | profession_sWhereUniqueInput[]
    update?: profession_sUpdateWithWhereUniqueWithoutUser_sInput | profession_sUpdateWithWhereUniqueWithoutUser_sInput[]
    updateMany?: profession_sUpdateManyWithWhereWithoutUser_sInput | profession_sUpdateManyWithWhereWithoutUser_sInput[]
    deleteMany?: profession_sScalarWhereInput | profession_sScalarWhereInput[]
  }

  export type user_sCreateNestedOneWithoutProfession_sInput = {
    create?: XOR<user_sCreateWithoutProfession_sInput, user_sUncheckedCreateWithoutProfession_sInput>
    connectOrCreate?: user_sCreateOrConnectWithoutProfession_sInput
    connect?: user_sWhereUniqueInput
  }

  export type user_sUpdateOneWithoutProfession_sNestedInput = {
    create?: XOR<user_sCreateWithoutProfession_sInput, user_sUncheckedCreateWithoutProfession_sInput>
    connectOrCreate?: user_sCreateOrConnectWithoutProfession_sInput
    upsert?: user_sUpsertWithoutProfession_sInput
    disconnect?: user_sWhereInput | boolean
    delete?: user_sWhereInput | boolean
    connect?: user_sWhereUniqueInput
    update?: XOR<XOR<user_sUpdateToOneWithWhereWithoutProfession_sInput, user_sUpdateWithoutProfession_sInput>, user_sUncheckedUpdateWithoutProfession_sInput>
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

  export type profession_sCreateWithoutUser_sInput = {
    id_profesion: number
    name_profesion?: string | null
  }

  export type profession_sUncheckedCreateWithoutUser_sInput = {
    id_profesion: number
    name_profesion?: string | null
  }

  export type profession_sCreateOrConnectWithoutUser_sInput = {
    where: profession_sWhereUniqueInput
    create: XOR<profession_sCreateWithoutUser_sInput, profession_sUncheckedCreateWithoutUser_sInput>
  }

  export type profession_sCreateManyUser_sInputEnvelope = {
    data: profession_sCreateManyUser_sInput | profession_sCreateManyUser_sInput[]
    skipDuplicates?: boolean
  }

  export type profession_sUpsertWithWhereUniqueWithoutUser_sInput = {
    where: profession_sWhereUniqueInput
    update: XOR<profession_sUpdateWithoutUser_sInput, profession_sUncheckedUpdateWithoutUser_sInput>
    create: XOR<profession_sCreateWithoutUser_sInput, profession_sUncheckedCreateWithoutUser_sInput>
  }

  export type profession_sUpdateWithWhereUniqueWithoutUser_sInput = {
    where: profession_sWhereUniqueInput
    data: XOR<profession_sUpdateWithoutUser_sInput, profession_sUncheckedUpdateWithoutUser_sInput>
  }

  export type profession_sUpdateManyWithWhereWithoutUser_sInput = {
    where: profession_sScalarWhereInput
    data: XOR<profession_sUpdateManyMutationInput, profession_sUncheckedUpdateManyWithoutUser_sInput>
  }

  export type profession_sScalarWhereInput = {
    AND?: profession_sScalarWhereInput | profession_sScalarWhereInput[]
    OR?: profession_sScalarWhereInput[]
    NOT?: profession_sScalarWhereInput | profession_sScalarWhereInput[]
    id_profesion?: IntFilter<"profession_s"> | number
    name_profesion?: StringNullableFilter<"profession_s"> | string | null
    id_user_profession?: IntNullableFilter<"profession_s"> | number | null
  }

  export type user_sCreateWithoutProfession_sInput = {
    id_user: number
    name_user?: string | null
    last_name?: string | null
    age?: number | null
  }

  export type user_sUncheckedCreateWithoutProfession_sInput = {
    id_user: number
    name_user?: string | null
    last_name?: string | null
    age?: number | null
  }

  export type user_sCreateOrConnectWithoutProfession_sInput = {
    where: user_sWhereUniqueInput
    create: XOR<user_sCreateWithoutProfession_sInput, user_sUncheckedCreateWithoutProfession_sInput>
  }

  export type user_sUpsertWithoutProfession_sInput = {
    update: XOR<user_sUpdateWithoutProfession_sInput, user_sUncheckedUpdateWithoutProfession_sInput>
    create: XOR<user_sCreateWithoutProfession_sInput, user_sUncheckedCreateWithoutProfession_sInput>
    where?: user_sWhereInput
  }

  export type user_sUpdateToOneWithWhereWithoutProfession_sInput = {
    where?: user_sWhereInput
    data: XOR<user_sUpdateWithoutProfession_sInput, user_sUncheckedUpdateWithoutProfession_sInput>
  }

  export type user_sUpdateWithoutProfession_sInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    name_user?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type user_sUncheckedUpdateWithoutProfession_sInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    name_user?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type profession_sCreateManyUser_sInput = {
    id_profesion: number
    name_profesion?: string | null
  }

  export type profession_sUpdateWithoutUser_sInput = {
    id_profesion?: IntFieldUpdateOperationsInput | number
    name_profesion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profession_sUncheckedUpdateWithoutUser_sInput = {
    id_profesion?: IntFieldUpdateOperationsInput | number
    name_profesion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profession_sUncheckedUpdateManyWithoutUser_sInput = {
    id_profesion?: IntFieldUpdateOperationsInput | number
    name_profesion?: NullableStringFieldUpdateOperationsInput | string | null
  }



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