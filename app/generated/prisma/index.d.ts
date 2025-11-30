
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
 * Model Verb
 * 
 */
export type Verb = $Result.DefaultSelection<Prisma.$VerbPayload>
/**
 * Model Present
 * 
 */
export type Present = $Result.DefaultSelection<Prisma.$PresentPayload>
/**
 * Model PresentPerfect
 * 
 */
export type PresentPerfect = $Result.DefaultSelection<Prisma.$PresentPerfectPayload>
/**
 * Model Past
 * 
 */
export type Past = $Result.DefaultSelection<Prisma.$PastPayload>
/**
 * Model PastPerfect
 * 
 */
export type PastPerfect = $Result.DefaultSelection<Prisma.$PastPerfectPayload>
/**
 * Model Future
 * 
 */
export type Future = $Result.DefaultSelection<Prisma.$FuturePayload>
/**
 * Model FuturePerfect
 * 
 */
export type FuturePerfect = $Result.DefaultSelection<Prisma.$FuturePerfectPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Verbs
 * const verbs = await prisma.verb.findMany()
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
   * // Fetch zero or more Verbs
   * const verbs = await prisma.verb.findMany()
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
   * `prisma.verb`: Exposes CRUD operations for the **Verb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verbs
    * const verbs = await prisma.verb.findMany()
    * ```
    */
  get verb(): Prisma.VerbDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.present`: Exposes CRUD operations for the **Present** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Presents
    * const presents = await prisma.present.findMany()
    * ```
    */
  get present(): Prisma.PresentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.presentPerfect`: Exposes CRUD operations for the **PresentPerfect** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PresentPerfects
    * const presentPerfects = await prisma.presentPerfect.findMany()
    * ```
    */
  get presentPerfect(): Prisma.PresentPerfectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.past`: Exposes CRUD operations for the **Past** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pasts
    * const pasts = await prisma.past.findMany()
    * ```
    */
  get past(): Prisma.PastDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pastPerfect`: Exposes CRUD operations for the **PastPerfect** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PastPerfects
    * const pastPerfects = await prisma.pastPerfect.findMany()
    * ```
    */
  get pastPerfect(): Prisma.PastPerfectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.future`: Exposes CRUD operations for the **Future** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Futures
    * const futures = await prisma.future.findMany()
    * ```
    */
  get future(): Prisma.FutureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.futurePerfect`: Exposes CRUD operations for the **FuturePerfect** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FuturePerfects
    * const futurePerfects = await prisma.futurePerfect.findMany()
    * ```
    */
  get futurePerfect(): Prisma.FuturePerfectDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Verb: 'Verb',
    Present: 'Present',
    PresentPerfect: 'PresentPerfect',
    Past: 'Past',
    PastPerfect: 'PastPerfect',
    Future: 'Future',
    FuturePerfect: 'FuturePerfect'
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
      modelProps: "verb" | "present" | "presentPerfect" | "past" | "pastPerfect" | "future" | "futurePerfect"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Verb: {
        payload: Prisma.$VerbPayload<ExtArgs>
        fields: Prisma.VerbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbPayload>
          }
          findFirst: {
            args: Prisma.VerbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbPayload>
          }
          findMany: {
            args: Prisma.VerbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbPayload>[]
          }
          create: {
            args: Prisma.VerbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbPayload>
          }
          createMany: {
            args: Prisma.VerbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerbCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbPayload>[]
          }
          delete: {
            args: Prisma.VerbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbPayload>
          }
          update: {
            args: Prisma.VerbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbPayload>
          }
          deleteMany: {
            args: Prisma.VerbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerbUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbPayload>[]
          }
          upsert: {
            args: Prisma.VerbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerbPayload>
          }
          aggregate: {
            args: Prisma.VerbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerb>
          }
          groupBy: {
            args: Prisma.VerbGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerbGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerbCountArgs<ExtArgs>
            result: $Utils.Optional<VerbCountAggregateOutputType> | number
          }
        }
      }
      Present: {
        payload: Prisma.$PresentPayload<ExtArgs>
        fields: Prisma.PresentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PresentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PresentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentPayload>
          }
          findFirst: {
            args: Prisma.PresentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PresentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentPayload>
          }
          findMany: {
            args: Prisma.PresentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentPayload>[]
          }
          create: {
            args: Prisma.PresentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentPayload>
          }
          createMany: {
            args: Prisma.PresentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PresentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentPayload>[]
          }
          delete: {
            args: Prisma.PresentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentPayload>
          }
          update: {
            args: Prisma.PresentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentPayload>
          }
          deleteMany: {
            args: Prisma.PresentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PresentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PresentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentPayload>[]
          }
          upsert: {
            args: Prisma.PresentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentPayload>
          }
          aggregate: {
            args: Prisma.PresentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePresent>
          }
          groupBy: {
            args: Prisma.PresentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PresentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PresentCountArgs<ExtArgs>
            result: $Utils.Optional<PresentCountAggregateOutputType> | number
          }
        }
      }
      PresentPerfect: {
        payload: Prisma.$PresentPerfectPayload<ExtArgs>
        fields: Prisma.PresentPerfectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PresentPerfectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentPerfectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PresentPerfectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentPerfectPayload>
          }
          findFirst: {
            args: Prisma.PresentPerfectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentPerfectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PresentPerfectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentPerfectPayload>
          }
          findMany: {
            args: Prisma.PresentPerfectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentPerfectPayload>[]
          }
          create: {
            args: Prisma.PresentPerfectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentPerfectPayload>
          }
          createMany: {
            args: Prisma.PresentPerfectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PresentPerfectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentPerfectPayload>[]
          }
          delete: {
            args: Prisma.PresentPerfectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentPerfectPayload>
          }
          update: {
            args: Prisma.PresentPerfectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentPerfectPayload>
          }
          deleteMany: {
            args: Prisma.PresentPerfectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PresentPerfectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PresentPerfectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentPerfectPayload>[]
          }
          upsert: {
            args: Prisma.PresentPerfectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentPerfectPayload>
          }
          aggregate: {
            args: Prisma.PresentPerfectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePresentPerfect>
          }
          groupBy: {
            args: Prisma.PresentPerfectGroupByArgs<ExtArgs>
            result: $Utils.Optional<PresentPerfectGroupByOutputType>[]
          }
          count: {
            args: Prisma.PresentPerfectCountArgs<ExtArgs>
            result: $Utils.Optional<PresentPerfectCountAggregateOutputType> | number
          }
        }
      }
      Past: {
        payload: Prisma.$PastPayload<ExtArgs>
        fields: Prisma.PastFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PastFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PastFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastPayload>
          }
          findFirst: {
            args: Prisma.PastFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PastFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastPayload>
          }
          findMany: {
            args: Prisma.PastFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastPayload>[]
          }
          create: {
            args: Prisma.PastCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastPayload>
          }
          createMany: {
            args: Prisma.PastCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PastCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastPayload>[]
          }
          delete: {
            args: Prisma.PastDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastPayload>
          }
          update: {
            args: Prisma.PastUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastPayload>
          }
          deleteMany: {
            args: Prisma.PastDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PastUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PastUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastPayload>[]
          }
          upsert: {
            args: Prisma.PastUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastPayload>
          }
          aggregate: {
            args: Prisma.PastAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePast>
          }
          groupBy: {
            args: Prisma.PastGroupByArgs<ExtArgs>
            result: $Utils.Optional<PastGroupByOutputType>[]
          }
          count: {
            args: Prisma.PastCountArgs<ExtArgs>
            result: $Utils.Optional<PastCountAggregateOutputType> | number
          }
        }
      }
      PastPerfect: {
        payload: Prisma.$PastPerfectPayload<ExtArgs>
        fields: Prisma.PastPerfectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PastPerfectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastPerfectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PastPerfectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastPerfectPayload>
          }
          findFirst: {
            args: Prisma.PastPerfectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastPerfectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PastPerfectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastPerfectPayload>
          }
          findMany: {
            args: Prisma.PastPerfectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastPerfectPayload>[]
          }
          create: {
            args: Prisma.PastPerfectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastPerfectPayload>
          }
          createMany: {
            args: Prisma.PastPerfectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PastPerfectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastPerfectPayload>[]
          }
          delete: {
            args: Prisma.PastPerfectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastPerfectPayload>
          }
          update: {
            args: Prisma.PastPerfectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastPerfectPayload>
          }
          deleteMany: {
            args: Prisma.PastPerfectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PastPerfectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PastPerfectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastPerfectPayload>[]
          }
          upsert: {
            args: Prisma.PastPerfectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastPerfectPayload>
          }
          aggregate: {
            args: Prisma.PastPerfectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePastPerfect>
          }
          groupBy: {
            args: Prisma.PastPerfectGroupByArgs<ExtArgs>
            result: $Utils.Optional<PastPerfectGroupByOutputType>[]
          }
          count: {
            args: Prisma.PastPerfectCountArgs<ExtArgs>
            result: $Utils.Optional<PastPerfectCountAggregateOutputType> | number
          }
        }
      }
      Future: {
        payload: Prisma.$FuturePayload<ExtArgs>
        fields: Prisma.FutureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FutureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FutureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuturePayload>
          }
          findFirst: {
            args: Prisma.FutureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FutureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuturePayload>
          }
          findMany: {
            args: Prisma.FutureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuturePayload>[]
          }
          create: {
            args: Prisma.FutureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuturePayload>
          }
          createMany: {
            args: Prisma.FutureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FutureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuturePayload>[]
          }
          delete: {
            args: Prisma.FutureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuturePayload>
          }
          update: {
            args: Prisma.FutureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuturePayload>
          }
          deleteMany: {
            args: Prisma.FutureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FutureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FutureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuturePayload>[]
          }
          upsert: {
            args: Prisma.FutureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuturePayload>
          }
          aggregate: {
            args: Prisma.FutureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuture>
          }
          groupBy: {
            args: Prisma.FutureGroupByArgs<ExtArgs>
            result: $Utils.Optional<FutureGroupByOutputType>[]
          }
          count: {
            args: Prisma.FutureCountArgs<ExtArgs>
            result: $Utils.Optional<FutureCountAggregateOutputType> | number
          }
        }
      }
      FuturePerfect: {
        payload: Prisma.$FuturePerfectPayload<ExtArgs>
        fields: Prisma.FuturePerfectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FuturePerfectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuturePerfectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FuturePerfectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuturePerfectPayload>
          }
          findFirst: {
            args: Prisma.FuturePerfectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuturePerfectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FuturePerfectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuturePerfectPayload>
          }
          findMany: {
            args: Prisma.FuturePerfectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuturePerfectPayload>[]
          }
          create: {
            args: Prisma.FuturePerfectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuturePerfectPayload>
          }
          createMany: {
            args: Prisma.FuturePerfectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FuturePerfectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuturePerfectPayload>[]
          }
          delete: {
            args: Prisma.FuturePerfectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuturePerfectPayload>
          }
          update: {
            args: Prisma.FuturePerfectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuturePerfectPayload>
          }
          deleteMany: {
            args: Prisma.FuturePerfectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FuturePerfectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FuturePerfectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuturePerfectPayload>[]
          }
          upsert: {
            args: Prisma.FuturePerfectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuturePerfectPayload>
          }
          aggregate: {
            args: Prisma.FuturePerfectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuturePerfect>
          }
          groupBy: {
            args: Prisma.FuturePerfectGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuturePerfectGroupByOutputType>[]
          }
          count: {
            args: Prisma.FuturePerfectCountArgs<ExtArgs>
            result: $Utils.Optional<FuturePerfectCountAggregateOutputType> | number
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
    verb?: VerbOmit
    present?: PresentOmit
    presentPerfect?: PresentPerfectOmit
    past?: PastOmit
    pastPerfect?: PastPerfectOmit
    future?: FutureOmit
    futurePerfect?: FuturePerfectOmit
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
   * Count Type VerbCountOutputType
   */

  export type VerbCountOutputType = {
    present: number
    presentPerfect: number
    past: number
    pastPerfect: number
    future: number
    futurePerfect: number
  }

  export type VerbCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    present?: boolean | VerbCountOutputTypeCountPresentArgs
    presentPerfect?: boolean | VerbCountOutputTypeCountPresentPerfectArgs
    past?: boolean | VerbCountOutputTypeCountPastArgs
    pastPerfect?: boolean | VerbCountOutputTypeCountPastPerfectArgs
    future?: boolean | VerbCountOutputTypeCountFutureArgs
    futurePerfect?: boolean | VerbCountOutputTypeCountFuturePerfectArgs
  }

  // Custom InputTypes
  /**
   * VerbCountOutputType without action
   */
  export type VerbCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerbCountOutputType
     */
    select?: VerbCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VerbCountOutputType without action
   */
  export type VerbCountOutputTypeCountPresentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresentWhereInput
  }

  /**
   * VerbCountOutputType without action
   */
  export type VerbCountOutputTypeCountPresentPerfectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresentPerfectWhereInput
  }

  /**
   * VerbCountOutputType without action
   */
  export type VerbCountOutputTypeCountPastArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PastWhereInput
  }

  /**
   * VerbCountOutputType without action
   */
  export type VerbCountOutputTypeCountPastPerfectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PastPerfectWhereInput
  }

  /**
   * VerbCountOutputType without action
   */
  export type VerbCountOutputTypeCountFutureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FutureWhereInput
  }

  /**
   * VerbCountOutputType without action
   */
  export type VerbCountOutputTypeCountFuturePerfectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuturePerfectWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Verb
   */

  export type AggregateVerb = {
    _count: VerbCountAggregateOutputType | null
    _avg: VerbAvgAggregateOutputType | null
    _sum: VerbSumAggregateOutputType | null
    _min: VerbMinAggregateOutputType | null
    _max: VerbMaxAggregateOutputType | null
  }

  export type VerbAvgAggregateOutputType = {
    id: number | null
  }

  export type VerbSumAggregateOutputType = {
    id: number | null
  }

  export type VerbMinAggregateOutputType = {
    id: number | null
    englishVerb: string | null
    englishSentence: string | null
  }

  export type VerbMaxAggregateOutputType = {
    id: number | null
    englishVerb: string | null
    englishSentence: string | null
  }

  export type VerbCountAggregateOutputType = {
    id: number
    englishVerb: number
    englishSentence: number
    _all: number
  }


  export type VerbAvgAggregateInputType = {
    id?: true
  }

  export type VerbSumAggregateInputType = {
    id?: true
  }

  export type VerbMinAggregateInputType = {
    id?: true
    englishVerb?: true
    englishSentence?: true
  }

  export type VerbMaxAggregateInputType = {
    id?: true
    englishVerb?: true
    englishSentence?: true
  }

  export type VerbCountAggregateInputType = {
    id?: true
    englishVerb?: true
    englishSentence?: true
    _all?: true
  }

  export type VerbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verb to aggregate.
     */
    where?: VerbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verbs to fetch.
     */
    orderBy?: VerbOrderByWithRelationInput | VerbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verbs
    **/
    _count?: true | VerbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VerbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VerbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerbMaxAggregateInputType
  }

  export type GetVerbAggregateType<T extends VerbAggregateArgs> = {
        [P in keyof T & keyof AggregateVerb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerb[P]>
      : GetScalarType<T[P], AggregateVerb[P]>
  }




  export type VerbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerbWhereInput
    orderBy?: VerbOrderByWithAggregationInput | VerbOrderByWithAggregationInput[]
    by: VerbScalarFieldEnum[] | VerbScalarFieldEnum
    having?: VerbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerbCountAggregateInputType | true
    _avg?: VerbAvgAggregateInputType
    _sum?: VerbSumAggregateInputType
    _min?: VerbMinAggregateInputType
    _max?: VerbMaxAggregateInputType
  }

  export type VerbGroupByOutputType = {
    id: number
    englishVerb: string
    englishSentence: string
    _count: VerbCountAggregateOutputType | null
    _avg: VerbAvgAggregateOutputType | null
    _sum: VerbSumAggregateOutputType | null
    _min: VerbMinAggregateOutputType | null
    _max: VerbMaxAggregateOutputType | null
  }

  type GetVerbGroupByPayload<T extends VerbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerbGroupByOutputType[P]>
            : GetScalarType<T[P], VerbGroupByOutputType[P]>
        }
      >
    >


  export type VerbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    englishVerb?: boolean
    englishSentence?: boolean
    present?: boolean | Verb$presentArgs<ExtArgs>
    presentPerfect?: boolean | Verb$presentPerfectArgs<ExtArgs>
    past?: boolean | Verb$pastArgs<ExtArgs>
    pastPerfect?: boolean | Verb$pastPerfectArgs<ExtArgs>
    future?: boolean | Verb$futureArgs<ExtArgs>
    futurePerfect?: boolean | Verb$futurePerfectArgs<ExtArgs>
    _count?: boolean | VerbCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verb"]>

  export type VerbSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    englishVerb?: boolean
    englishSentence?: boolean
  }, ExtArgs["result"]["verb"]>

  export type VerbSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    englishVerb?: boolean
    englishSentence?: boolean
  }, ExtArgs["result"]["verb"]>

  export type VerbSelectScalar = {
    id?: boolean
    englishVerb?: boolean
    englishSentence?: boolean
  }

  export type VerbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "englishVerb" | "englishSentence", ExtArgs["result"]["verb"]>
  export type VerbInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    present?: boolean | Verb$presentArgs<ExtArgs>
    presentPerfect?: boolean | Verb$presentPerfectArgs<ExtArgs>
    past?: boolean | Verb$pastArgs<ExtArgs>
    pastPerfect?: boolean | Verb$pastPerfectArgs<ExtArgs>
    future?: boolean | Verb$futureArgs<ExtArgs>
    futurePerfect?: boolean | Verb$futurePerfectArgs<ExtArgs>
    _count?: boolean | VerbCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VerbIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VerbIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VerbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verb"
    objects: {
      present: Prisma.$PresentPayload<ExtArgs>[]
      presentPerfect: Prisma.$PresentPerfectPayload<ExtArgs>[]
      past: Prisma.$PastPayload<ExtArgs>[]
      pastPerfect: Prisma.$PastPerfectPayload<ExtArgs>[]
      future: Prisma.$FuturePayload<ExtArgs>[]
      futurePerfect: Prisma.$FuturePerfectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      englishVerb: string
      englishSentence: string
    }, ExtArgs["result"]["verb"]>
    composites: {}
  }

  type VerbGetPayload<S extends boolean | null | undefined | VerbDefaultArgs> = $Result.GetResult<Prisma.$VerbPayload, S>

  type VerbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerbCountAggregateInputType | true
    }

  export interface VerbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verb'], meta: { name: 'Verb' } }
    /**
     * Find zero or one Verb that matches the filter.
     * @param {VerbFindUniqueArgs} args - Arguments to find a Verb
     * @example
     * // Get one Verb
     * const verb = await prisma.verb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerbFindUniqueArgs>(args: SelectSubset<T, VerbFindUniqueArgs<ExtArgs>>): Prisma__VerbClient<$Result.GetResult<Prisma.$VerbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verb that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerbFindUniqueOrThrowArgs} args - Arguments to find a Verb
     * @example
     * // Get one Verb
     * const verb = await prisma.verb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerbFindUniqueOrThrowArgs>(args: SelectSubset<T, VerbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerbClient<$Result.GetResult<Prisma.$VerbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerbFindFirstArgs} args - Arguments to find a Verb
     * @example
     * // Get one Verb
     * const verb = await prisma.verb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerbFindFirstArgs>(args?: SelectSubset<T, VerbFindFirstArgs<ExtArgs>>): Prisma__VerbClient<$Result.GetResult<Prisma.$VerbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerbFindFirstOrThrowArgs} args - Arguments to find a Verb
     * @example
     * // Get one Verb
     * const verb = await prisma.verb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerbFindFirstOrThrowArgs>(args?: SelectSubset<T, VerbFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerbClient<$Result.GetResult<Prisma.$VerbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verbs
     * const verbs = await prisma.verb.findMany()
     * 
     * // Get first 10 Verbs
     * const verbs = await prisma.verb.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verbWithIdOnly = await prisma.verb.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerbFindManyArgs>(args?: SelectSubset<T, VerbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verb.
     * @param {VerbCreateArgs} args - Arguments to create a Verb.
     * @example
     * // Create one Verb
     * const Verb = await prisma.verb.create({
     *   data: {
     *     // ... data to create a Verb
     *   }
     * })
     * 
     */
    create<T extends VerbCreateArgs>(args: SelectSubset<T, VerbCreateArgs<ExtArgs>>): Prisma__VerbClient<$Result.GetResult<Prisma.$VerbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verbs.
     * @param {VerbCreateManyArgs} args - Arguments to create many Verbs.
     * @example
     * // Create many Verbs
     * const verb = await prisma.verb.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerbCreateManyArgs>(args?: SelectSubset<T, VerbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verbs and returns the data saved in the database.
     * @param {VerbCreateManyAndReturnArgs} args - Arguments to create many Verbs.
     * @example
     * // Create many Verbs
     * const verb = await prisma.verb.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verbs and only return the `id`
     * const verbWithIdOnly = await prisma.verb.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerbCreateManyAndReturnArgs>(args?: SelectSubset<T, VerbCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerbPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verb.
     * @param {VerbDeleteArgs} args - Arguments to delete one Verb.
     * @example
     * // Delete one Verb
     * const Verb = await prisma.verb.delete({
     *   where: {
     *     // ... filter to delete one Verb
     *   }
     * })
     * 
     */
    delete<T extends VerbDeleteArgs>(args: SelectSubset<T, VerbDeleteArgs<ExtArgs>>): Prisma__VerbClient<$Result.GetResult<Prisma.$VerbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verb.
     * @param {VerbUpdateArgs} args - Arguments to update one Verb.
     * @example
     * // Update one Verb
     * const verb = await prisma.verb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerbUpdateArgs>(args: SelectSubset<T, VerbUpdateArgs<ExtArgs>>): Prisma__VerbClient<$Result.GetResult<Prisma.$VerbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verbs.
     * @param {VerbDeleteManyArgs} args - Arguments to filter Verbs to delete.
     * @example
     * // Delete a few Verbs
     * const { count } = await prisma.verb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerbDeleteManyArgs>(args?: SelectSubset<T, VerbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verbs
     * const verb = await prisma.verb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerbUpdateManyArgs>(args: SelectSubset<T, VerbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verbs and returns the data updated in the database.
     * @param {VerbUpdateManyAndReturnArgs} args - Arguments to update many Verbs.
     * @example
     * // Update many Verbs
     * const verb = await prisma.verb.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verbs and only return the `id`
     * const verbWithIdOnly = await prisma.verb.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends VerbUpdateManyAndReturnArgs>(args: SelectSubset<T, VerbUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerbPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verb.
     * @param {VerbUpsertArgs} args - Arguments to update or create a Verb.
     * @example
     * // Update or create a Verb
     * const verb = await prisma.verb.upsert({
     *   create: {
     *     // ... data to create a Verb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verb we want to update
     *   }
     * })
     */
    upsert<T extends VerbUpsertArgs>(args: SelectSubset<T, VerbUpsertArgs<ExtArgs>>): Prisma__VerbClient<$Result.GetResult<Prisma.$VerbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerbCountArgs} args - Arguments to filter Verbs to count.
     * @example
     * // Count the number of Verbs
     * const count = await prisma.verb.count({
     *   where: {
     *     // ... the filter for the Verbs we want to count
     *   }
     * })
    **/
    count<T extends VerbCountArgs>(
      args?: Subset<T, VerbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerbAggregateArgs>(args: Subset<T, VerbAggregateArgs>): Prisma.PrismaPromise<GetVerbAggregateType<T>>

    /**
     * Group by Verb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerbGroupByArgs} args - Group by arguments.
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
      T extends VerbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerbGroupByArgs['orderBy'] }
        : { orderBy?: VerbGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verb model
   */
  readonly fields: VerbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    present<T extends Verb$presentArgs<ExtArgs> = {}>(args?: Subset<T, Verb$presentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    presentPerfect<T extends Verb$presentPerfectArgs<ExtArgs> = {}>(args?: Subset<T, Verb$presentPerfectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresentPerfectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    past<T extends Verb$pastArgs<ExtArgs> = {}>(args?: Subset<T, Verb$pastArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PastPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pastPerfect<T extends Verb$pastPerfectArgs<ExtArgs> = {}>(args?: Subset<T, Verb$pastPerfectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PastPerfectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    future<T extends Verb$futureArgs<ExtArgs> = {}>(args?: Subset<T, Verb$futureArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    futurePerfect<T extends Verb$futurePerfectArgs<ExtArgs> = {}>(args?: Subset<T, Verb$futurePerfectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuturePerfectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Verb model
   */
  interface VerbFieldRefs {
    readonly id: FieldRef<"Verb", 'Int'>
    readonly englishVerb: FieldRef<"Verb", 'String'>
    readonly englishSentence: FieldRef<"Verb", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Verb findUnique
   */
  export type VerbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verb
     */
    select?: VerbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verb
     */
    omit?: VerbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerbInclude<ExtArgs> | null
    /**
     * Filter, which Verb to fetch.
     */
    where: VerbWhereUniqueInput
  }

  /**
   * Verb findUniqueOrThrow
   */
  export type VerbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verb
     */
    select?: VerbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verb
     */
    omit?: VerbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerbInclude<ExtArgs> | null
    /**
     * Filter, which Verb to fetch.
     */
    where: VerbWhereUniqueInput
  }

  /**
   * Verb findFirst
   */
  export type VerbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verb
     */
    select?: VerbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verb
     */
    omit?: VerbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerbInclude<ExtArgs> | null
    /**
     * Filter, which Verb to fetch.
     */
    where?: VerbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verbs to fetch.
     */
    orderBy?: VerbOrderByWithRelationInput | VerbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verbs.
     */
    cursor?: VerbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verbs.
     */
    distinct?: VerbScalarFieldEnum | VerbScalarFieldEnum[]
  }

  /**
   * Verb findFirstOrThrow
   */
  export type VerbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verb
     */
    select?: VerbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verb
     */
    omit?: VerbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerbInclude<ExtArgs> | null
    /**
     * Filter, which Verb to fetch.
     */
    where?: VerbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verbs to fetch.
     */
    orderBy?: VerbOrderByWithRelationInput | VerbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verbs.
     */
    cursor?: VerbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verbs.
     */
    distinct?: VerbScalarFieldEnum | VerbScalarFieldEnum[]
  }

  /**
   * Verb findMany
   */
  export type VerbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verb
     */
    select?: VerbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verb
     */
    omit?: VerbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerbInclude<ExtArgs> | null
    /**
     * Filter, which Verbs to fetch.
     */
    where?: VerbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verbs to fetch.
     */
    orderBy?: VerbOrderByWithRelationInput | VerbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verbs.
     */
    cursor?: VerbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verbs.
     */
    skip?: number
    distinct?: VerbScalarFieldEnum | VerbScalarFieldEnum[]
  }

  /**
   * Verb create
   */
  export type VerbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verb
     */
    select?: VerbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verb
     */
    omit?: VerbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerbInclude<ExtArgs> | null
    /**
     * The data needed to create a Verb.
     */
    data: XOR<VerbCreateInput, VerbUncheckedCreateInput>
  }

  /**
   * Verb createMany
   */
  export type VerbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verbs.
     */
    data: VerbCreateManyInput | VerbCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verb createManyAndReturn
   */
  export type VerbCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verb
     */
    select?: VerbSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verb
     */
    omit?: VerbOmit<ExtArgs> | null
    /**
     * The data used to create many Verbs.
     */
    data: VerbCreateManyInput | VerbCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verb update
   */
  export type VerbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verb
     */
    select?: VerbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verb
     */
    omit?: VerbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerbInclude<ExtArgs> | null
    /**
     * The data needed to update a Verb.
     */
    data: XOR<VerbUpdateInput, VerbUncheckedUpdateInput>
    /**
     * Choose, which Verb to update.
     */
    where: VerbWhereUniqueInput
  }

  /**
   * Verb updateMany
   */
  export type VerbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verbs.
     */
    data: XOR<VerbUpdateManyMutationInput, VerbUncheckedUpdateManyInput>
    /**
     * Filter which Verbs to update
     */
    where?: VerbWhereInput
    /**
     * Limit how many Verbs to update.
     */
    limit?: number
  }

  /**
   * Verb updateManyAndReturn
   */
  export type VerbUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verb
     */
    select?: VerbSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verb
     */
    omit?: VerbOmit<ExtArgs> | null
    /**
     * The data used to update Verbs.
     */
    data: XOR<VerbUpdateManyMutationInput, VerbUncheckedUpdateManyInput>
    /**
     * Filter which Verbs to update
     */
    where?: VerbWhereInput
    /**
     * Limit how many Verbs to update.
     */
    limit?: number
  }

  /**
   * Verb upsert
   */
  export type VerbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verb
     */
    select?: VerbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verb
     */
    omit?: VerbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerbInclude<ExtArgs> | null
    /**
     * The filter to search for the Verb to update in case it exists.
     */
    where: VerbWhereUniqueInput
    /**
     * In case the Verb found by the `where` argument doesn't exist, create a new Verb with this data.
     */
    create: XOR<VerbCreateInput, VerbUncheckedCreateInput>
    /**
     * In case the Verb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerbUpdateInput, VerbUncheckedUpdateInput>
  }

  /**
   * Verb delete
   */
  export type VerbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verb
     */
    select?: VerbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verb
     */
    omit?: VerbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerbInclude<ExtArgs> | null
    /**
     * Filter which Verb to delete.
     */
    where: VerbWhereUniqueInput
  }

  /**
   * Verb deleteMany
   */
  export type VerbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verbs to delete
     */
    where?: VerbWhereInput
    /**
     * Limit how many Verbs to delete.
     */
    limit?: number
  }

  /**
   * Verb.present
   */
  export type Verb$presentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Present
     */
    select?: PresentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Present
     */
    omit?: PresentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentInclude<ExtArgs> | null
    where?: PresentWhereInput
    orderBy?: PresentOrderByWithRelationInput | PresentOrderByWithRelationInput[]
    cursor?: PresentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PresentScalarFieldEnum | PresentScalarFieldEnum[]
  }

  /**
   * Verb.presentPerfect
   */
  export type Verb$presentPerfectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresentPerfect
     */
    select?: PresentPerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresentPerfect
     */
    omit?: PresentPerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentPerfectInclude<ExtArgs> | null
    where?: PresentPerfectWhereInput
    orderBy?: PresentPerfectOrderByWithRelationInput | PresentPerfectOrderByWithRelationInput[]
    cursor?: PresentPerfectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PresentPerfectScalarFieldEnum | PresentPerfectScalarFieldEnum[]
  }

  /**
   * Verb.past
   */
  export type Verb$pastArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Past
     */
    select?: PastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Past
     */
    omit?: PastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastInclude<ExtArgs> | null
    where?: PastWhereInput
    orderBy?: PastOrderByWithRelationInput | PastOrderByWithRelationInput[]
    cursor?: PastWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PastScalarFieldEnum | PastScalarFieldEnum[]
  }

  /**
   * Verb.pastPerfect
   */
  export type Verb$pastPerfectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PastPerfect
     */
    select?: PastPerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PastPerfect
     */
    omit?: PastPerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastPerfectInclude<ExtArgs> | null
    where?: PastPerfectWhereInput
    orderBy?: PastPerfectOrderByWithRelationInput | PastPerfectOrderByWithRelationInput[]
    cursor?: PastPerfectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PastPerfectScalarFieldEnum | PastPerfectScalarFieldEnum[]
  }

  /**
   * Verb.future
   */
  export type Verb$futureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Future
     */
    select?: FutureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Future
     */
    omit?: FutureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FutureInclude<ExtArgs> | null
    where?: FutureWhereInput
    orderBy?: FutureOrderByWithRelationInput | FutureOrderByWithRelationInput[]
    cursor?: FutureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FutureScalarFieldEnum | FutureScalarFieldEnum[]
  }

  /**
   * Verb.futurePerfect
   */
  export type Verb$futurePerfectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuturePerfect
     */
    select?: FuturePerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuturePerfect
     */
    omit?: FuturePerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuturePerfectInclude<ExtArgs> | null
    where?: FuturePerfectWhereInput
    orderBy?: FuturePerfectOrderByWithRelationInput | FuturePerfectOrderByWithRelationInput[]
    cursor?: FuturePerfectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FuturePerfectScalarFieldEnum | FuturePerfectScalarFieldEnum[]
  }

  /**
   * Verb without action
   */
  export type VerbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verb
     */
    select?: VerbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verb
     */
    omit?: VerbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerbInclude<ExtArgs> | null
  }


  /**
   * Model Present
   */

  export type AggregatePresent = {
    _count: PresentCountAggregateOutputType | null
    _avg: PresentAvgAggregateOutputType | null
    _sum: PresentSumAggregateOutputType | null
    _min: PresentMinAggregateOutputType | null
    _max: PresentMaxAggregateOutputType | null
  }

  export type PresentAvgAggregateOutputType = {
    id: number | null
    verbId: number | null
  }

  export type PresentSumAggregateOutputType = {
    id: number | null
    verbId: number | null
  }

  export type PresentMinAggregateOutputType = {
    id: number | null
    verbId: number | null
    germanVerb: string | null
    germanSentence: string | null
    audio: string | null
  }

  export type PresentMaxAggregateOutputType = {
    id: number | null
    verbId: number | null
    germanVerb: string | null
    germanSentence: string | null
    audio: string | null
  }

  export type PresentCountAggregateOutputType = {
    id: number
    verbId: number
    germanVerb: number
    germanSentence: number
    audio: number
    _all: number
  }


  export type PresentAvgAggregateInputType = {
    id?: true
    verbId?: true
  }

  export type PresentSumAggregateInputType = {
    id?: true
    verbId?: true
  }

  export type PresentMinAggregateInputType = {
    id?: true
    verbId?: true
    germanVerb?: true
    germanSentence?: true
    audio?: true
  }

  export type PresentMaxAggregateInputType = {
    id?: true
    verbId?: true
    germanVerb?: true
    germanSentence?: true
    audio?: true
  }

  export type PresentCountAggregateInputType = {
    id?: true
    verbId?: true
    germanVerb?: true
    germanSentence?: true
    audio?: true
    _all?: true
  }

  export type PresentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Present to aggregate.
     */
    where?: PresentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presents to fetch.
     */
    orderBy?: PresentOrderByWithRelationInput | PresentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PresentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Presents
    **/
    _count?: true | PresentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PresentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PresentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PresentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PresentMaxAggregateInputType
  }

  export type GetPresentAggregateType<T extends PresentAggregateArgs> = {
        [P in keyof T & keyof AggregatePresent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePresent[P]>
      : GetScalarType<T[P], AggregatePresent[P]>
  }




  export type PresentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresentWhereInput
    orderBy?: PresentOrderByWithAggregationInput | PresentOrderByWithAggregationInput[]
    by: PresentScalarFieldEnum[] | PresentScalarFieldEnum
    having?: PresentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PresentCountAggregateInputType | true
    _avg?: PresentAvgAggregateInputType
    _sum?: PresentSumAggregateInputType
    _min?: PresentMinAggregateInputType
    _max?: PresentMaxAggregateInputType
  }

  export type PresentGroupByOutputType = {
    id: number
    verbId: number
    germanVerb: string
    germanSentence: string
    audio: string
    _count: PresentCountAggregateOutputType | null
    _avg: PresentAvgAggregateOutputType | null
    _sum: PresentSumAggregateOutputType | null
    _min: PresentMinAggregateOutputType | null
    _max: PresentMaxAggregateOutputType | null
  }

  type GetPresentGroupByPayload<T extends PresentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PresentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PresentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PresentGroupByOutputType[P]>
            : GetScalarType<T[P], PresentGroupByOutputType[P]>
        }
      >
    >


  export type PresentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verbId?: boolean
    germanVerb?: boolean
    germanSentence?: boolean
    audio?: boolean
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["present"]>

  export type PresentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verbId?: boolean
    germanVerb?: boolean
    germanSentence?: boolean
    audio?: boolean
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["present"]>

  export type PresentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verbId?: boolean
    germanVerb?: boolean
    germanSentence?: boolean
    audio?: boolean
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["present"]>

  export type PresentSelectScalar = {
    id?: boolean
    verbId?: boolean
    germanVerb?: boolean
    germanSentence?: boolean
    audio?: boolean
  }

  export type PresentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "verbId" | "germanVerb" | "germanSentence" | "audio", ExtArgs["result"]["present"]>
  export type PresentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }
  export type PresentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }
  export type PresentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }

  export type $PresentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Present"
    objects: {
      verb: Prisma.$VerbPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      verbId: number
      germanVerb: string
      germanSentence: string
      audio: string
    }, ExtArgs["result"]["present"]>
    composites: {}
  }

  type PresentGetPayload<S extends boolean | null | undefined | PresentDefaultArgs> = $Result.GetResult<Prisma.$PresentPayload, S>

  type PresentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PresentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PresentCountAggregateInputType | true
    }

  export interface PresentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Present'], meta: { name: 'Present' } }
    /**
     * Find zero or one Present that matches the filter.
     * @param {PresentFindUniqueArgs} args - Arguments to find a Present
     * @example
     * // Get one Present
     * const present = await prisma.present.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PresentFindUniqueArgs>(args: SelectSubset<T, PresentFindUniqueArgs<ExtArgs>>): Prisma__PresentClient<$Result.GetResult<Prisma.$PresentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Present that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PresentFindUniqueOrThrowArgs} args - Arguments to find a Present
     * @example
     * // Get one Present
     * const present = await prisma.present.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PresentFindUniqueOrThrowArgs>(args: SelectSubset<T, PresentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PresentClient<$Result.GetResult<Prisma.$PresentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Present that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentFindFirstArgs} args - Arguments to find a Present
     * @example
     * // Get one Present
     * const present = await prisma.present.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PresentFindFirstArgs>(args?: SelectSubset<T, PresentFindFirstArgs<ExtArgs>>): Prisma__PresentClient<$Result.GetResult<Prisma.$PresentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Present that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentFindFirstOrThrowArgs} args - Arguments to find a Present
     * @example
     * // Get one Present
     * const present = await prisma.present.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PresentFindFirstOrThrowArgs>(args?: SelectSubset<T, PresentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PresentClient<$Result.GetResult<Prisma.$PresentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Presents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Presents
     * const presents = await prisma.present.findMany()
     * 
     * // Get first 10 Presents
     * const presents = await prisma.present.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const presentWithIdOnly = await prisma.present.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PresentFindManyArgs>(args?: SelectSubset<T, PresentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Present.
     * @param {PresentCreateArgs} args - Arguments to create a Present.
     * @example
     * // Create one Present
     * const Present = await prisma.present.create({
     *   data: {
     *     // ... data to create a Present
     *   }
     * })
     * 
     */
    create<T extends PresentCreateArgs>(args: SelectSubset<T, PresentCreateArgs<ExtArgs>>): Prisma__PresentClient<$Result.GetResult<Prisma.$PresentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Presents.
     * @param {PresentCreateManyArgs} args - Arguments to create many Presents.
     * @example
     * // Create many Presents
     * const present = await prisma.present.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PresentCreateManyArgs>(args?: SelectSubset<T, PresentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Presents and returns the data saved in the database.
     * @param {PresentCreateManyAndReturnArgs} args - Arguments to create many Presents.
     * @example
     * // Create many Presents
     * const present = await prisma.present.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Presents and only return the `id`
     * const presentWithIdOnly = await prisma.present.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PresentCreateManyAndReturnArgs>(args?: SelectSubset<T, PresentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Present.
     * @param {PresentDeleteArgs} args - Arguments to delete one Present.
     * @example
     * // Delete one Present
     * const Present = await prisma.present.delete({
     *   where: {
     *     // ... filter to delete one Present
     *   }
     * })
     * 
     */
    delete<T extends PresentDeleteArgs>(args: SelectSubset<T, PresentDeleteArgs<ExtArgs>>): Prisma__PresentClient<$Result.GetResult<Prisma.$PresentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Present.
     * @param {PresentUpdateArgs} args - Arguments to update one Present.
     * @example
     * // Update one Present
     * const present = await prisma.present.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PresentUpdateArgs>(args: SelectSubset<T, PresentUpdateArgs<ExtArgs>>): Prisma__PresentClient<$Result.GetResult<Prisma.$PresentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Presents.
     * @param {PresentDeleteManyArgs} args - Arguments to filter Presents to delete.
     * @example
     * // Delete a few Presents
     * const { count } = await prisma.present.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PresentDeleteManyArgs>(args?: SelectSubset<T, PresentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Presents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Presents
     * const present = await prisma.present.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PresentUpdateManyArgs>(args: SelectSubset<T, PresentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Presents and returns the data updated in the database.
     * @param {PresentUpdateManyAndReturnArgs} args - Arguments to update many Presents.
     * @example
     * // Update many Presents
     * const present = await prisma.present.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Presents and only return the `id`
     * const presentWithIdOnly = await prisma.present.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends PresentUpdateManyAndReturnArgs>(args: SelectSubset<T, PresentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Present.
     * @param {PresentUpsertArgs} args - Arguments to update or create a Present.
     * @example
     * // Update or create a Present
     * const present = await prisma.present.upsert({
     *   create: {
     *     // ... data to create a Present
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Present we want to update
     *   }
     * })
     */
    upsert<T extends PresentUpsertArgs>(args: SelectSubset<T, PresentUpsertArgs<ExtArgs>>): Prisma__PresentClient<$Result.GetResult<Prisma.$PresentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Presents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentCountArgs} args - Arguments to filter Presents to count.
     * @example
     * // Count the number of Presents
     * const count = await prisma.present.count({
     *   where: {
     *     // ... the filter for the Presents we want to count
     *   }
     * })
    **/
    count<T extends PresentCountArgs>(
      args?: Subset<T, PresentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PresentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Present.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PresentAggregateArgs>(args: Subset<T, PresentAggregateArgs>): Prisma.PrismaPromise<GetPresentAggregateType<T>>

    /**
     * Group by Present.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentGroupByArgs} args - Group by arguments.
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
      T extends PresentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PresentGroupByArgs['orderBy'] }
        : { orderBy?: PresentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PresentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPresentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Present model
   */
  readonly fields: PresentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Present.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PresentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    verb<T extends VerbDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VerbDefaultArgs<ExtArgs>>): Prisma__VerbClient<$Result.GetResult<Prisma.$VerbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Present model
   */
  interface PresentFieldRefs {
    readonly id: FieldRef<"Present", 'Int'>
    readonly verbId: FieldRef<"Present", 'Int'>
    readonly germanVerb: FieldRef<"Present", 'String'>
    readonly germanSentence: FieldRef<"Present", 'String'>
    readonly audio: FieldRef<"Present", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Present findUnique
   */
  export type PresentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Present
     */
    select?: PresentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Present
     */
    omit?: PresentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentInclude<ExtArgs> | null
    /**
     * Filter, which Present to fetch.
     */
    where: PresentWhereUniqueInput
  }

  /**
   * Present findUniqueOrThrow
   */
  export type PresentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Present
     */
    select?: PresentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Present
     */
    omit?: PresentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentInclude<ExtArgs> | null
    /**
     * Filter, which Present to fetch.
     */
    where: PresentWhereUniqueInput
  }

  /**
   * Present findFirst
   */
  export type PresentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Present
     */
    select?: PresentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Present
     */
    omit?: PresentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentInclude<ExtArgs> | null
    /**
     * Filter, which Present to fetch.
     */
    where?: PresentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presents to fetch.
     */
    orderBy?: PresentOrderByWithRelationInput | PresentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Presents.
     */
    cursor?: PresentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Presents.
     */
    distinct?: PresentScalarFieldEnum | PresentScalarFieldEnum[]
  }

  /**
   * Present findFirstOrThrow
   */
  export type PresentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Present
     */
    select?: PresentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Present
     */
    omit?: PresentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentInclude<ExtArgs> | null
    /**
     * Filter, which Present to fetch.
     */
    where?: PresentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presents to fetch.
     */
    orderBy?: PresentOrderByWithRelationInput | PresentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Presents.
     */
    cursor?: PresentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Presents.
     */
    distinct?: PresentScalarFieldEnum | PresentScalarFieldEnum[]
  }

  /**
   * Present findMany
   */
  export type PresentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Present
     */
    select?: PresentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Present
     */
    omit?: PresentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentInclude<ExtArgs> | null
    /**
     * Filter, which Presents to fetch.
     */
    where?: PresentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presents to fetch.
     */
    orderBy?: PresentOrderByWithRelationInput | PresentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Presents.
     */
    cursor?: PresentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presents.
     */
    skip?: number
    distinct?: PresentScalarFieldEnum | PresentScalarFieldEnum[]
  }

  /**
   * Present create
   */
  export type PresentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Present
     */
    select?: PresentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Present
     */
    omit?: PresentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentInclude<ExtArgs> | null
    /**
     * The data needed to create a Present.
     */
    data: XOR<PresentCreateInput, PresentUncheckedCreateInput>
  }

  /**
   * Present createMany
   */
  export type PresentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Presents.
     */
    data: PresentCreateManyInput | PresentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Present createManyAndReturn
   */
  export type PresentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Present
     */
    select?: PresentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Present
     */
    omit?: PresentOmit<ExtArgs> | null
    /**
     * The data used to create many Presents.
     */
    data: PresentCreateManyInput | PresentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Present update
   */
  export type PresentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Present
     */
    select?: PresentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Present
     */
    omit?: PresentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentInclude<ExtArgs> | null
    /**
     * The data needed to update a Present.
     */
    data: XOR<PresentUpdateInput, PresentUncheckedUpdateInput>
    /**
     * Choose, which Present to update.
     */
    where: PresentWhereUniqueInput
  }

  /**
   * Present updateMany
   */
  export type PresentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Presents.
     */
    data: XOR<PresentUpdateManyMutationInput, PresentUncheckedUpdateManyInput>
    /**
     * Filter which Presents to update
     */
    where?: PresentWhereInput
    /**
     * Limit how many Presents to update.
     */
    limit?: number
  }

  /**
   * Present updateManyAndReturn
   */
  export type PresentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Present
     */
    select?: PresentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Present
     */
    omit?: PresentOmit<ExtArgs> | null
    /**
     * The data used to update Presents.
     */
    data: XOR<PresentUpdateManyMutationInput, PresentUncheckedUpdateManyInput>
    /**
     * Filter which Presents to update
     */
    where?: PresentWhereInput
    /**
     * Limit how many Presents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Present upsert
   */
  export type PresentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Present
     */
    select?: PresentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Present
     */
    omit?: PresentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentInclude<ExtArgs> | null
    /**
     * The filter to search for the Present to update in case it exists.
     */
    where: PresentWhereUniqueInput
    /**
     * In case the Present found by the `where` argument doesn't exist, create a new Present with this data.
     */
    create: XOR<PresentCreateInput, PresentUncheckedCreateInput>
    /**
     * In case the Present was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PresentUpdateInput, PresentUncheckedUpdateInput>
  }

  /**
   * Present delete
   */
  export type PresentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Present
     */
    select?: PresentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Present
     */
    omit?: PresentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentInclude<ExtArgs> | null
    /**
     * Filter which Present to delete.
     */
    where: PresentWhereUniqueInput
  }

  /**
   * Present deleteMany
   */
  export type PresentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Presents to delete
     */
    where?: PresentWhereInput
    /**
     * Limit how many Presents to delete.
     */
    limit?: number
  }

  /**
   * Present without action
   */
  export type PresentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Present
     */
    select?: PresentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Present
     */
    omit?: PresentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentInclude<ExtArgs> | null
  }


  /**
   * Model PresentPerfect
   */

  export type AggregatePresentPerfect = {
    _count: PresentPerfectCountAggregateOutputType | null
    _avg: PresentPerfectAvgAggregateOutputType | null
    _sum: PresentPerfectSumAggregateOutputType | null
    _min: PresentPerfectMinAggregateOutputType | null
    _max: PresentPerfectMaxAggregateOutputType | null
  }

  export type PresentPerfectAvgAggregateOutputType = {
    id: number | null
    verbId: number | null
  }

  export type PresentPerfectSumAggregateOutputType = {
    id: number | null
    verbId: number | null
  }

  export type PresentPerfectMinAggregateOutputType = {
    id: number | null
    verbId: number | null
    germanVerb: string | null
    germanSentence: string | null
    audio: string | null
  }

  export type PresentPerfectMaxAggregateOutputType = {
    id: number | null
    verbId: number | null
    germanVerb: string | null
    germanSentence: string | null
    audio: string | null
  }

  export type PresentPerfectCountAggregateOutputType = {
    id: number
    verbId: number
    germanVerb: number
    germanSentence: number
    audio: number
    _all: number
  }


  export type PresentPerfectAvgAggregateInputType = {
    id?: true
    verbId?: true
  }

  export type PresentPerfectSumAggregateInputType = {
    id?: true
    verbId?: true
  }

  export type PresentPerfectMinAggregateInputType = {
    id?: true
    verbId?: true
    germanVerb?: true
    germanSentence?: true
    audio?: true
  }

  export type PresentPerfectMaxAggregateInputType = {
    id?: true
    verbId?: true
    germanVerb?: true
    germanSentence?: true
    audio?: true
  }

  export type PresentPerfectCountAggregateInputType = {
    id?: true
    verbId?: true
    germanVerb?: true
    germanSentence?: true
    audio?: true
    _all?: true
  }

  export type PresentPerfectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PresentPerfect to aggregate.
     */
    where?: PresentPerfectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PresentPerfects to fetch.
     */
    orderBy?: PresentPerfectOrderByWithRelationInput | PresentPerfectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PresentPerfectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PresentPerfects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PresentPerfects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PresentPerfects
    **/
    _count?: true | PresentPerfectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PresentPerfectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PresentPerfectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PresentPerfectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PresentPerfectMaxAggregateInputType
  }

  export type GetPresentPerfectAggregateType<T extends PresentPerfectAggregateArgs> = {
        [P in keyof T & keyof AggregatePresentPerfect]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePresentPerfect[P]>
      : GetScalarType<T[P], AggregatePresentPerfect[P]>
  }




  export type PresentPerfectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresentPerfectWhereInput
    orderBy?: PresentPerfectOrderByWithAggregationInput | PresentPerfectOrderByWithAggregationInput[]
    by: PresentPerfectScalarFieldEnum[] | PresentPerfectScalarFieldEnum
    having?: PresentPerfectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PresentPerfectCountAggregateInputType | true
    _avg?: PresentPerfectAvgAggregateInputType
    _sum?: PresentPerfectSumAggregateInputType
    _min?: PresentPerfectMinAggregateInputType
    _max?: PresentPerfectMaxAggregateInputType
  }

  export type PresentPerfectGroupByOutputType = {
    id: number
    verbId: number
    germanVerb: string
    germanSentence: string
    audio: string
    _count: PresentPerfectCountAggregateOutputType | null
    _avg: PresentPerfectAvgAggregateOutputType | null
    _sum: PresentPerfectSumAggregateOutputType | null
    _min: PresentPerfectMinAggregateOutputType | null
    _max: PresentPerfectMaxAggregateOutputType | null
  }

  type GetPresentPerfectGroupByPayload<T extends PresentPerfectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PresentPerfectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PresentPerfectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PresentPerfectGroupByOutputType[P]>
            : GetScalarType<T[P], PresentPerfectGroupByOutputType[P]>
        }
      >
    >


  export type PresentPerfectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verbId?: boolean
    germanVerb?: boolean
    germanSentence?: boolean
    audio?: boolean
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["presentPerfect"]>

  export type PresentPerfectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verbId?: boolean
    germanVerb?: boolean
    germanSentence?: boolean
    audio?: boolean
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["presentPerfect"]>

  export type PresentPerfectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verbId?: boolean
    germanVerb?: boolean
    germanSentence?: boolean
    audio?: boolean
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["presentPerfect"]>

  export type PresentPerfectSelectScalar = {
    id?: boolean
    verbId?: boolean
    germanVerb?: boolean
    germanSentence?: boolean
    audio?: boolean
  }

  export type PresentPerfectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "verbId" | "germanVerb" | "germanSentence" | "audio", ExtArgs["result"]["presentPerfect"]>
  export type PresentPerfectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }
  export type PresentPerfectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }
  export type PresentPerfectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }

  export type $PresentPerfectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PresentPerfect"
    objects: {
      verb: Prisma.$VerbPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      verbId: number
      germanVerb: string
      germanSentence: string
      audio: string
    }, ExtArgs["result"]["presentPerfect"]>
    composites: {}
  }

  type PresentPerfectGetPayload<S extends boolean | null | undefined | PresentPerfectDefaultArgs> = $Result.GetResult<Prisma.$PresentPerfectPayload, S>

  type PresentPerfectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PresentPerfectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PresentPerfectCountAggregateInputType | true
    }

  export interface PresentPerfectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PresentPerfect'], meta: { name: 'PresentPerfect' } }
    /**
     * Find zero or one PresentPerfect that matches the filter.
     * @param {PresentPerfectFindUniqueArgs} args - Arguments to find a PresentPerfect
     * @example
     * // Get one PresentPerfect
     * const presentPerfect = await prisma.presentPerfect.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PresentPerfectFindUniqueArgs>(args: SelectSubset<T, PresentPerfectFindUniqueArgs<ExtArgs>>): Prisma__PresentPerfectClient<$Result.GetResult<Prisma.$PresentPerfectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PresentPerfect that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PresentPerfectFindUniqueOrThrowArgs} args - Arguments to find a PresentPerfect
     * @example
     * // Get one PresentPerfect
     * const presentPerfect = await prisma.presentPerfect.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PresentPerfectFindUniqueOrThrowArgs>(args: SelectSubset<T, PresentPerfectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PresentPerfectClient<$Result.GetResult<Prisma.$PresentPerfectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PresentPerfect that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentPerfectFindFirstArgs} args - Arguments to find a PresentPerfect
     * @example
     * // Get one PresentPerfect
     * const presentPerfect = await prisma.presentPerfect.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PresentPerfectFindFirstArgs>(args?: SelectSubset<T, PresentPerfectFindFirstArgs<ExtArgs>>): Prisma__PresentPerfectClient<$Result.GetResult<Prisma.$PresentPerfectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PresentPerfect that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentPerfectFindFirstOrThrowArgs} args - Arguments to find a PresentPerfect
     * @example
     * // Get one PresentPerfect
     * const presentPerfect = await prisma.presentPerfect.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PresentPerfectFindFirstOrThrowArgs>(args?: SelectSubset<T, PresentPerfectFindFirstOrThrowArgs<ExtArgs>>): Prisma__PresentPerfectClient<$Result.GetResult<Prisma.$PresentPerfectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PresentPerfects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentPerfectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PresentPerfects
     * const presentPerfects = await prisma.presentPerfect.findMany()
     * 
     * // Get first 10 PresentPerfects
     * const presentPerfects = await prisma.presentPerfect.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const presentPerfectWithIdOnly = await prisma.presentPerfect.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PresentPerfectFindManyArgs>(args?: SelectSubset<T, PresentPerfectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresentPerfectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PresentPerfect.
     * @param {PresentPerfectCreateArgs} args - Arguments to create a PresentPerfect.
     * @example
     * // Create one PresentPerfect
     * const PresentPerfect = await prisma.presentPerfect.create({
     *   data: {
     *     // ... data to create a PresentPerfect
     *   }
     * })
     * 
     */
    create<T extends PresentPerfectCreateArgs>(args: SelectSubset<T, PresentPerfectCreateArgs<ExtArgs>>): Prisma__PresentPerfectClient<$Result.GetResult<Prisma.$PresentPerfectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PresentPerfects.
     * @param {PresentPerfectCreateManyArgs} args - Arguments to create many PresentPerfects.
     * @example
     * // Create many PresentPerfects
     * const presentPerfect = await prisma.presentPerfect.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PresentPerfectCreateManyArgs>(args?: SelectSubset<T, PresentPerfectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PresentPerfects and returns the data saved in the database.
     * @param {PresentPerfectCreateManyAndReturnArgs} args - Arguments to create many PresentPerfects.
     * @example
     * // Create many PresentPerfects
     * const presentPerfect = await prisma.presentPerfect.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PresentPerfects and only return the `id`
     * const presentPerfectWithIdOnly = await prisma.presentPerfect.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PresentPerfectCreateManyAndReturnArgs>(args?: SelectSubset<T, PresentPerfectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresentPerfectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PresentPerfect.
     * @param {PresentPerfectDeleteArgs} args - Arguments to delete one PresentPerfect.
     * @example
     * // Delete one PresentPerfect
     * const PresentPerfect = await prisma.presentPerfect.delete({
     *   where: {
     *     // ... filter to delete one PresentPerfect
     *   }
     * })
     * 
     */
    delete<T extends PresentPerfectDeleteArgs>(args: SelectSubset<T, PresentPerfectDeleteArgs<ExtArgs>>): Prisma__PresentPerfectClient<$Result.GetResult<Prisma.$PresentPerfectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PresentPerfect.
     * @param {PresentPerfectUpdateArgs} args - Arguments to update one PresentPerfect.
     * @example
     * // Update one PresentPerfect
     * const presentPerfect = await prisma.presentPerfect.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PresentPerfectUpdateArgs>(args: SelectSubset<T, PresentPerfectUpdateArgs<ExtArgs>>): Prisma__PresentPerfectClient<$Result.GetResult<Prisma.$PresentPerfectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PresentPerfects.
     * @param {PresentPerfectDeleteManyArgs} args - Arguments to filter PresentPerfects to delete.
     * @example
     * // Delete a few PresentPerfects
     * const { count } = await prisma.presentPerfect.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PresentPerfectDeleteManyArgs>(args?: SelectSubset<T, PresentPerfectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PresentPerfects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentPerfectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PresentPerfects
     * const presentPerfect = await prisma.presentPerfect.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PresentPerfectUpdateManyArgs>(args: SelectSubset<T, PresentPerfectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PresentPerfects and returns the data updated in the database.
     * @param {PresentPerfectUpdateManyAndReturnArgs} args - Arguments to update many PresentPerfects.
     * @example
     * // Update many PresentPerfects
     * const presentPerfect = await prisma.presentPerfect.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PresentPerfects and only return the `id`
     * const presentPerfectWithIdOnly = await prisma.presentPerfect.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends PresentPerfectUpdateManyAndReturnArgs>(args: SelectSubset<T, PresentPerfectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresentPerfectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PresentPerfect.
     * @param {PresentPerfectUpsertArgs} args - Arguments to update or create a PresentPerfect.
     * @example
     * // Update or create a PresentPerfect
     * const presentPerfect = await prisma.presentPerfect.upsert({
     *   create: {
     *     // ... data to create a PresentPerfect
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PresentPerfect we want to update
     *   }
     * })
     */
    upsert<T extends PresentPerfectUpsertArgs>(args: SelectSubset<T, PresentPerfectUpsertArgs<ExtArgs>>): Prisma__PresentPerfectClient<$Result.GetResult<Prisma.$PresentPerfectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PresentPerfects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentPerfectCountArgs} args - Arguments to filter PresentPerfects to count.
     * @example
     * // Count the number of PresentPerfects
     * const count = await prisma.presentPerfect.count({
     *   where: {
     *     // ... the filter for the PresentPerfects we want to count
     *   }
     * })
    **/
    count<T extends PresentPerfectCountArgs>(
      args?: Subset<T, PresentPerfectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PresentPerfectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PresentPerfect.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentPerfectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PresentPerfectAggregateArgs>(args: Subset<T, PresentPerfectAggregateArgs>): Prisma.PrismaPromise<GetPresentPerfectAggregateType<T>>

    /**
     * Group by PresentPerfect.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentPerfectGroupByArgs} args - Group by arguments.
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
      T extends PresentPerfectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PresentPerfectGroupByArgs['orderBy'] }
        : { orderBy?: PresentPerfectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PresentPerfectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPresentPerfectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PresentPerfect model
   */
  readonly fields: PresentPerfectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PresentPerfect.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PresentPerfectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    verb<T extends VerbDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VerbDefaultArgs<ExtArgs>>): Prisma__VerbClient<$Result.GetResult<Prisma.$VerbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PresentPerfect model
   */
  interface PresentPerfectFieldRefs {
    readonly id: FieldRef<"PresentPerfect", 'Int'>
    readonly verbId: FieldRef<"PresentPerfect", 'Int'>
    readonly germanVerb: FieldRef<"PresentPerfect", 'String'>
    readonly germanSentence: FieldRef<"PresentPerfect", 'String'>
    readonly audio: FieldRef<"PresentPerfect", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PresentPerfect findUnique
   */
  export type PresentPerfectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresentPerfect
     */
    select?: PresentPerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresentPerfect
     */
    omit?: PresentPerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentPerfectInclude<ExtArgs> | null
    /**
     * Filter, which PresentPerfect to fetch.
     */
    where: PresentPerfectWhereUniqueInput
  }

  /**
   * PresentPerfect findUniqueOrThrow
   */
  export type PresentPerfectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresentPerfect
     */
    select?: PresentPerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresentPerfect
     */
    omit?: PresentPerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentPerfectInclude<ExtArgs> | null
    /**
     * Filter, which PresentPerfect to fetch.
     */
    where: PresentPerfectWhereUniqueInput
  }

  /**
   * PresentPerfect findFirst
   */
  export type PresentPerfectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresentPerfect
     */
    select?: PresentPerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresentPerfect
     */
    omit?: PresentPerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentPerfectInclude<ExtArgs> | null
    /**
     * Filter, which PresentPerfect to fetch.
     */
    where?: PresentPerfectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PresentPerfects to fetch.
     */
    orderBy?: PresentPerfectOrderByWithRelationInput | PresentPerfectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PresentPerfects.
     */
    cursor?: PresentPerfectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PresentPerfects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PresentPerfects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PresentPerfects.
     */
    distinct?: PresentPerfectScalarFieldEnum | PresentPerfectScalarFieldEnum[]
  }

  /**
   * PresentPerfect findFirstOrThrow
   */
  export type PresentPerfectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresentPerfect
     */
    select?: PresentPerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresentPerfect
     */
    omit?: PresentPerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentPerfectInclude<ExtArgs> | null
    /**
     * Filter, which PresentPerfect to fetch.
     */
    where?: PresentPerfectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PresentPerfects to fetch.
     */
    orderBy?: PresentPerfectOrderByWithRelationInput | PresentPerfectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PresentPerfects.
     */
    cursor?: PresentPerfectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PresentPerfects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PresentPerfects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PresentPerfects.
     */
    distinct?: PresentPerfectScalarFieldEnum | PresentPerfectScalarFieldEnum[]
  }

  /**
   * PresentPerfect findMany
   */
  export type PresentPerfectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresentPerfect
     */
    select?: PresentPerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresentPerfect
     */
    omit?: PresentPerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentPerfectInclude<ExtArgs> | null
    /**
     * Filter, which PresentPerfects to fetch.
     */
    where?: PresentPerfectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PresentPerfects to fetch.
     */
    orderBy?: PresentPerfectOrderByWithRelationInput | PresentPerfectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PresentPerfects.
     */
    cursor?: PresentPerfectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PresentPerfects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PresentPerfects.
     */
    skip?: number
    distinct?: PresentPerfectScalarFieldEnum | PresentPerfectScalarFieldEnum[]
  }

  /**
   * PresentPerfect create
   */
  export type PresentPerfectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresentPerfect
     */
    select?: PresentPerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresentPerfect
     */
    omit?: PresentPerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentPerfectInclude<ExtArgs> | null
    /**
     * The data needed to create a PresentPerfect.
     */
    data: XOR<PresentPerfectCreateInput, PresentPerfectUncheckedCreateInput>
  }

  /**
   * PresentPerfect createMany
   */
  export type PresentPerfectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PresentPerfects.
     */
    data: PresentPerfectCreateManyInput | PresentPerfectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PresentPerfect createManyAndReturn
   */
  export type PresentPerfectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresentPerfect
     */
    select?: PresentPerfectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PresentPerfect
     */
    omit?: PresentPerfectOmit<ExtArgs> | null
    /**
     * The data used to create many PresentPerfects.
     */
    data: PresentPerfectCreateManyInput | PresentPerfectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentPerfectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PresentPerfect update
   */
  export type PresentPerfectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresentPerfect
     */
    select?: PresentPerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresentPerfect
     */
    omit?: PresentPerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentPerfectInclude<ExtArgs> | null
    /**
     * The data needed to update a PresentPerfect.
     */
    data: XOR<PresentPerfectUpdateInput, PresentPerfectUncheckedUpdateInput>
    /**
     * Choose, which PresentPerfect to update.
     */
    where: PresentPerfectWhereUniqueInput
  }

  /**
   * PresentPerfect updateMany
   */
  export type PresentPerfectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PresentPerfects.
     */
    data: XOR<PresentPerfectUpdateManyMutationInput, PresentPerfectUncheckedUpdateManyInput>
    /**
     * Filter which PresentPerfects to update
     */
    where?: PresentPerfectWhereInput
    /**
     * Limit how many PresentPerfects to update.
     */
    limit?: number
  }

  /**
   * PresentPerfect updateManyAndReturn
   */
  export type PresentPerfectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresentPerfect
     */
    select?: PresentPerfectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PresentPerfect
     */
    omit?: PresentPerfectOmit<ExtArgs> | null
    /**
     * The data used to update PresentPerfects.
     */
    data: XOR<PresentPerfectUpdateManyMutationInput, PresentPerfectUncheckedUpdateManyInput>
    /**
     * Filter which PresentPerfects to update
     */
    where?: PresentPerfectWhereInput
    /**
     * Limit how many PresentPerfects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentPerfectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PresentPerfect upsert
   */
  export type PresentPerfectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresentPerfect
     */
    select?: PresentPerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresentPerfect
     */
    omit?: PresentPerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentPerfectInclude<ExtArgs> | null
    /**
     * The filter to search for the PresentPerfect to update in case it exists.
     */
    where: PresentPerfectWhereUniqueInput
    /**
     * In case the PresentPerfect found by the `where` argument doesn't exist, create a new PresentPerfect with this data.
     */
    create: XOR<PresentPerfectCreateInput, PresentPerfectUncheckedCreateInput>
    /**
     * In case the PresentPerfect was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PresentPerfectUpdateInput, PresentPerfectUncheckedUpdateInput>
  }

  /**
   * PresentPerfect delete
   */
  export type PresentPerfectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresentPerfect
     */
    select?: PresentPerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresentPerfect
     */
    omit?: PresentPerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentPerfectInclude<ExtArgs> | null
    /**
     * Filter which PresentPerfect to delete.
     */
    where: PresentPerfectWhereUniqueInput
  }

  /**
   * PresentPerfect deleteMany
   */
  export type PresentPerfectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PresentPerfects to delete
     */
    where?: PresentPerfectWhereInput
    /**
     * Limit how many PresentPerfects to delete.
     */
    limit?: number
  }

  /**
   * PresentPerfect without action
   */
  export type PresentPerfectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresentPerfect
     */
    select?: PresentPerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresentPerfect
     */
    omit?: PresentPerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentPerfectInclude<ExtArgs> | null
  }


  /**
   * Model Past
   */

  export type AggregatePast = {
    _count: PastCountAggregateOutputType | null
    _avg: PastAvgAggregateOutputType | null
    _sum: PastSumAggregateOutputType | null
    _min: PastMinAggregateOutputType | null
    _max: PastMaxAggregateOutputType | null
  }

  export type PastAvgAggregateOutputType = {
    id: number | null
    verbId: number | null
  }

  export type PastSumAggregateOutputType = {
    id: number | null
    verbId: number | null
  }

  export type PastMinAggregateOutputType = {
    id: number | null
    verbId: number | null
    germanVerb: string | null
    germanSentence: string | null
    audio: string | null
  }

  export type PastMaxAggregateOutputType = {
    id: number | null
    verbId: number | null
    germanVerb: string | null
    germanSentence: string | null
    audio: string | null
  }

  export type PastCountAggregateOutputType = {
    id: number
    verbId: number
    germanVerb: number
    germanSentence: number
    audio: number
    _all: number
  }


  export type PastAvgAggregateInputType = {
    id?: true
    verbId?: true
  }

  export type PastSumAggregateInputType = {
    id?: true
    verbId?: true
  }

  export type PastMinAggregateInputType = {
    id?: true
    verbId?: true
    germanVerb?: true
    germanSentence?: true
    audio?: true
  }

  export type PastMaxAggregateInputType = {
    id?: true
    verbId?: true
    germanVerb?: true
    germanSentence?: true
    audio?: true
  }

  export type PastCountAggregateInputType = {
    id?: true
    verbId?: true
    germanVerb?: true
    germanSentence?: true
    audio?: true
    _all?: true
  }

  export type PastAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Past to aggregate.
     */
    where?: PastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pasts to fetch.
     */
    orderBy?: PastOrderByWithRelationInput | PastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pasts
    **/
    _count?: true | PastCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PastAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PastSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PastMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PastMaxAggregateInputType
  }

  export type GetPastAggregateType<T extends PastAggregateArgs> = {
        [P in keyof T & keyof AggregatePast]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePast[P]>
      : GetScalarType<T[P], AggregatePast[P]>
  }




  export type PastGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PastWhereInput
    orderBy?: PastOrderByWithAggregationInput | PastOrderByWithAggregationInput[]
    by: PastScalarFieldEnum[] | PastScalarFieldEnum
    having?: PastScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PastCountAggregateInputType | true
    _avg?: PastAvgAggregateInputType
    _sum?: PastSumAggregateInputType
    _min?: PastMinAggregateInputType
    _max?: PastMaxAggregateInputType
  }

  export type PastGroupByOutputType = {
    id: number
    verbId: number
    germanVerb: string
    germanSentence: string
    audio: string
    _count: PastCountAggregateOutputType | null
    _avg: PastAvgAggregateOutputType | null
    _sum: PastSumAggregateOutputType | null
    _min: PastMinAggregateOutputType | null
    _max: PastMaxAggregateOutputType | null
  }

  type GetPastGroupByPayload<T extends PastGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PastGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PastGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PastGroupByOutputType[P]>
            : GetScalarType<T[P], PastGroupByOutputType[P]>
        }
      >
    >


  export type PastSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verbId?: boolean
    germanVerb?: boolean
    germanSentence?: boolean
    audio?: boolean
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["past"]>

  export type PastSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verbId?: boolean
    germanVerb?: boolean
    germanSentence?: boolean
    audio?: boolean
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["past"]>

  export type PastSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verbId?: boolean
    germanVerb?: boolean
    germanSentence?: boolean
    audio?: boolean
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["past"]>

  export type PastSelectScalar = {
    id?: boolean
    verbId?: boolean
    germanVerb?: boolean
    germanSentence?: boolean
    audio?: boolean
  }

  export type PastOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "verbId" | "germanVerb" | "germanSentence" | "audio", ExtArgs["result"]["past"]>
  export type PastInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }
  export type PastIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }
  export type PastIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }

  export type $PastPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Past"
    objects: {
      verb: Prisma.$VerbPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      verbId: number
      germanVerb: string
      germanSentence: string
      audio: string
    }, ExtArgs["result"]["past"]>
    composites: {}
  }

  type PastGetPayload<S extends boolean | null | undefined | PastDefaultArgs> = $Result.GetResult<Prisma.$PastPayload, S>

  type PastCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PastFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PastCountAggregateInputType | true
    }

  export interface PastDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Past'], meta: { name: 'Past' } }
    /**
     * Find zero or one Past that matches the filter.
     * @param {PastFindUniqueArgs} args - Arguments to find a Past
     * @example
     * // Get one Past
     * const past = await prisma.past.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PastFindUniqueArgs>(args: SelectSubset<T, PastFindUniqueArgs<ExtArgs>>): Prisma__PastClient<$Result.GetResult<Prisma.$PastPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Past that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PastFindUniqueOrThrowArgs} args - Arguments to find a Past
     * @example
     * // Get one Past
     * const past = await prisma.past.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PastFindUniqueOrThrowArgs>(args: SelectSubset<T, PastFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PastClient<$Result.GetResult<Prisma.$PastPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Past that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PastFindFirstArgs} args - Arguments to find a Past
     * @example
     * // Get one Past
     * const past = await prisma.past.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PastFindFirstArgs>(args?: SelectSubset<T, PastFindFirstArgs<ExtArgs>>): Prisma__PastClient<$Result.GetResult<Prisma.$PastPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Past that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PastFindFirstOrThrowArgs} args - Arguments to find a Past
     * @example
     * // Get one Past
     * const past = await prisma.past.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PastFindFirstOrThrowArgs>(args?: SelectSubset<T, PastFindFirstOrThrowArgs<ExtArgs>>): Prisma__PastClient<$Result.GetResult<Prisma.$PastPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pasts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PastFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pasts
     * const pasts = await prisma.past.findMany()
     * 
     * // Get first 10 Pasts
     * const pasts = await prisma.past.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pastWithIdOnly = await prisma.past.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PastFindManyArgs>(args?: SelectSubset<T, PastFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PastPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Past.
     * @param {PastCreateArgs} args - Arguments to create a Past.
     * @example
     * // Create one Past
     * const Past = await prisma.past.create({
     *   data: {
     *     // ... data to create a Past
     *   }
     * })
     * 
     */
    create<T extends PastCreateArgs>(args: SelectSubset<T, PastCreateArgs<ExtArgs>>): Prisma__PastClient<$Result.GetResult<Prisma.$PastPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pasts.
     * @param {PastCreateManyArgs} args - Arguments to create many Pasts.
     * @example
     * // Create many Pasts
     * const past = await prisma.past.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PastCreateManyArgs>(args?: SelectSubset<T, PastCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pasts and returns the data saved in the database.
     * @param {PastCreateManyAndReturnArgs} args - Arguments to create many Pasts.
     * @example
     * // Create many Pasts
     * const past = await prisma.past.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pasts and only return the `id`
     * const pastWithIdOnly = await prisma.past.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PastCreateManyAndReturnArgs>(args?: SelectSubset<T, PastCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PastPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Past.
     * @param {PastDeleteArgs} args - Arguments to delete one Past.
     * @example
     * // Delete one Past
     * const Past = await prisma.past.delete({
     *   where: {
     *     // ... filter to delete one Past
     *   }
     * })
     * 
     */
    delete<T extends PastDeleteArgs>(args: SelectSubset<T, PastDeleteArgs<ExtArgs>>): Prisma__PastClient<$Result.GetResult<Prisma.$PastPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Past.
     * @param {PastUpdateArgs} args - Arguments to update one Past.
     * @example
     * // Update one Past
     * const past = await prisma.past.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PastUpdateArgs>(args: SelectSubset<T, PastUpdateArgs<ExtArgs>>): Prisma__PastClient<$Result.GetResult<Prisma.$PastPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pasts.
     * @param {PastDeleteManyArgs} args - Arguments to filter Pasts to delete.
     * @example
     * // Delete a few Pasts
     * const { count } = await prisma.past.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PastDeleteManyArgs>(args?: SelectSubset<T, PastDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PastUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pasts
     * const past = await prisma.past.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PastUpdateManyArgs>(args: SelectSubset<T, PastUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pasts and returns the data updated in the database.
     * @param {PastUpdateManyAndReturnArgs} args - Arguments to update many Pasts.
     * @example
     * // Update many Pasts
     * const past = await prisma.past.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pasts and only return the `id`
     * const pastWithIdOnly = await prisma.past.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends PastUpdateManyAndReturnArgs>(args: SelectSubset<T, PastUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PastPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Past.
     * @param {PastUpsertArgs} args - Arguments to update or create a Past.
     * @example
     * // Update or create a Past
     * const past = await prisma.past.upsert({
     *   create: {
     *     // ... data to create a Past
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Past we want to update
     *   }
     * })
     */
    upsert<T extends PastUpsertArgs>(args: SelectSubset<T, PastUpsertArgs<ExtArgs>>): Prisma__PastClient<$Result.GetResult<Prisma.$PastPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PastCountArgs} args - Arguments to filter Pasts to count.
     * @example
     * // Count the number of Pasts
     * const count = await prisma.past.count({
     *   where: {
     *     // ... the filter for the Pasts we want to count
     *   }
     * })
    **/
    count<T extends PastCountArgs>(
      args?: Subset<T, PastCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PastCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Past.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PastAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PastAggregateArgs>(args: Subset<T, PastAggregateArgs>): Prisma.PrismaPromise<GetPastAggregateType<T>>

    /**
     * Group by Past.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PastGroupByArgs} args - Group by arguments.
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
      T extends PastGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PastGroupByArgs['orderBy'] }
        : { orderBy?: PastGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PastGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPastGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Past model
   */
  readonly fields: PastFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Past.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PastClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    verb<T extends VerbDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VerbDefaultArgs<ExtArgs>>): Prisma__VerbClient<$Result.GetResult<Prisma.$VerbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Past model
   */
  interface PastFieldRefs {
    readonly id: FieldRef<"Past", 'Int'>
    readonly verbId: FieldRef<"Past", 'Int'>
    readonly germanVerb: FieldRef<"Past", 'String'>
    readonly germanSentence: FieldRef<"Past", 'String'>
    readonly audio: FieldRef<"Past", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Past findUnique
   */
  export type PastFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Past
     */
    select?: PastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Past
     */
    omit?: PastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastInclude<ExtArgs> | null
    /**
     * Filter, which Past to fetch.
     */
    where: PastWhereUniqueInput
  }

  /**
   * Past findUniqueOrThrow
   */
  export type PastFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Past
     */
    select?: PastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Past
     */
    omit?: PastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastInclude<ExtArgs> | null
    /**
     * Filter, which Past to fetch.
     */
    where: PastWhereUniqueInput
  }

  /**
   * Past findFirst
   */
  export type PastFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Past
     */
    select?: PastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Past
     */
    omit?: PastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastInclude<ExtArgs> | null
    /**
     * Filter, which Past to fetch.
     */
    where?: PastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pasts to fetch.
     */
    orderBy?: PastOrderByWithRelationInput | PastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pasts.
     */
    cursor?: PastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pasts.
     */
    distinct?: PastScalarFieldEnum | PastScalarFieldEnum[]
  }

  /**
   * Past findFirstOrThrow
   */
  export type PastFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Past
     */
    select?: PastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Past
     */
    omit?: PastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastInclude<ExtArgs> | null
    /**
     * Filter, which Past to fetch.
     */
    where?: PastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pasts to fetch.
     */
    orderBy?: PastOrderByWithRelationInput | PastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pasts.
     */
    cursor?: PastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pasts.
     */
    distinct?: PastScalarFieldEnum | PastScalarFieldEnum[]
  }

  /**
   * Past findMany
   */
  export type PastFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Past
     */
    select?: PastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Past
     */
    omit?: PastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastInclude<ExtArgs> | null
    /**
     * Filter, which Pasts to fetch.
     */
    where?: PastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pasts to fetch.
     */
    orderBy?: PastOrderByWithRelationInput | PastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pasts.
     */
    cursor?: PastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pasts.
     */
    skip?: number
    distinct?: PastScalarFieldEnum | PastScalarFieldEnum[]
  }

  /**
   * Past create
   */
  export type PastCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Past
     */
    select?: PastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Past
     */
    omit?: PastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastInclude<ExtArgs> | null
    /**
     * The data needed to create a Past.
     */
    data: XOR<PastCreateInput, PastUncheckedCreateInput>
  }

  /**
   * Past createMany
   */
  export type PastCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pasts.
     */
    data: PastCreateManyInput | PastCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Past createManyAndReturn
   */
  export type PastCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Past
     */
    select?: PastSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Past
     */
    omit?: PastOmit<ExtArgs> | null
    /**
     * The data used to create many Pasts.
     */
    data: PastCreateManyInput | PastCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Past update
   */
  export type PastUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Past
     */
    select?: PastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Past
     */
    omit?: PastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastInclude<ExtArgs> | null
    /**
     * The data needed to update a Past.
     */
    data: XOR<PastUpdateInput, PastUncheckedUpdateInput>
    /**
     * Choose, which Past to update.
     */
    where: PastWhereUniqueInput
  }

  /**
   * Past updateMany
   */
  export type PastUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pasts.
     */
    data: XOR<PastUpdateManyMutationInput, PastUncheckedUpdateManyInput>
    /**
     * Filter which Pasts to update
     */
    where?: PastWhereInput
    /**
     * Limit how many Pasts to update.
     */
    limit?: number
  }

  /**
   * Past updateManyAndReturn
   */
  export type PastUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Past
     */
    select?: PastSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Past
     */
    omit?: PastOmit<ExtArgs> | null
    /**
     * The data used to update Pasts.
     */
    data: XOR<PastUpdateManyMutationInput, PastUncheckedUpdateManyInput>
    /**
     * Filter which Pasts to update
     */
    where?: PastWhereInput
    /**
     * Limit how many Pasts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Past upsert
   */
  export type PastUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Past
     */
    select?: PastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Past
     */
    omit?: PastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastInclude<ExtArgs> | null
    /**
     * The filter to search for the Past to update in case it exists.
     */
    where: PastWhereUniqueInput
    /**
     * In case the Past found by the `where` argument doesn't exist, create a new Past with this data.
     */
    create: XOR<PastCreateInput, PastUncheckedCreateInput>
    /**
     * In case the Past was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PastUpdateInput, PastUncheckedUpdateInput>
  }

  /**
   * Past delete
   */
  export type PastDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Past
     */
    select?: PastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Past
     */
    omit?: PastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastInclude<ExtArgs> | null
    /**
     * Filter which Past to delete.
     */
    where: PastWhereUniqueInput
  }

  /**
   * Past deleteMany
   */
  export type PastDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pasts to delete
     */
    where?: PastWhereInput
    /**
     * Limit how many Pasts to delete.
     */
    limit?: number
  }

  /**
   * Past without action
   */
  export type PastDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Past
     */
    select?: PastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Past
     */
    omit?: PastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastInclude<ExtArgs> | null
  }


  /**
   * Model PastPerfect
   */

  export type AggregatePastPerfect = {
    _count: PastPerfectCountAggregateOutputType | null
    _avg: PastPerfectAvgAggregateOutputType | null
    _sum: PastPerfectSumAggregateOutputType | null
    _min: PastPerfectMinAggregateOutputType | null
    _max: PastPerfectMaxAggregateOutputType | null
  }

  export type PastPerfectAvgAggregateOutputType = {
    id: number | null
    verbId: number | null
  }

  export type PastPerfectSumAggregateOutputType = {
    id: number | null
    verbId: number | null
  }

  export type PastPerfectMinAggregateOutputType = {
    id: number | null
    verbId: number | null
    germanVerb: string | null
    germanSentence: string | null
    audio: string | null
  }

  export type PastPerfectMaxAggregateOutputType = {
    id: number | null
    verbId: number | null
    germanVerb: string | null
    germanSentence: string | null
    audio: string | null
  }

  export type PastPerfectCountAggregateOutputType = {
    id: number
    verbId: number
    germanVerb: number
    germanSentence: number
    audio: number
    _all: number
  }


  export type PastPerfectAvgAggregateInputType = {
    id?: true
    verbId?: true
  }

  export type PastPerfectSumAggregateInputType = {
    id?: true
    verbId?: true
  }

  export type PastPerfectMinAggregateInputType = {
    id?: true
    verbId?: true
    germanVerb?: true
    germanSentence?: true
    audio?: true
  }

  export type PastPerfectMaxAggregateInputType = {
    id?: true
    verbId?: true
    germanVerb?: true
    germanSentence?: true
    audio?: true
  }

  export type PastPerfectCountAggregateInputType = {
    id?: true
    verbId?: true
    germanVerb?: true
    germanSentence?: true
    audio?: true
    _all?: true
  }

  export type PastPerfectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PastPerfect to aggregate.
     */
    where?: PastPerfectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PastPerfects to fetch.
     */
    orderBy?: PastPerfectOrderByWithRelationInput | PastPerfectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PastPerfectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PastPerfects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PastPerfects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PastPerfects
    **/
    _count?: true | PastPerfectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PastPerfectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PastPerfectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PastPerfectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PastPerfectMaxAggregateInputType
  }

  export type GetPastPerfectAggregateType<T extends PastPerfectAggregateArgs> = {
        [P in keyof T & keyof AggregatePastPerfect]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePastPerfect[P]>
      : GetScalarType<T[P], AggregatePastPerfect[P]>
  }




  export type PastPerfectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PastPerfectWhereInput
    orderBy?: PastPerfectOrderByWithAggregationInput | PastPerfectOrderByWithAggregationInput[]
    by: PastPerfectScalarFieldEnum[] | PastPerfectScalarFieldEnum
    having?: PastPerfectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PastPerfectCountAggregateInputType | true
    _avg?: PastPerfectAvgAggregateInputType
    _sum?: PastPerfectSumAggregateInputType
    _min?: PastPerfectMinAggregateInputType
    _max?: PastPerfectMaxAggregateInputType
  }

  export type PastPerfectGroupByOutputType = {
    id: number
    verbId: number
    germanVerb: string
    germanSentence: string
    audio: string
    _count: PastPerfectCountAggregateOutputType | null
    _avg: PastPerfectAvgAggregateOutputType | null
    _sum: PastPerfectSumAggregateOutputType | null
    _min: PastPerfectMinAggregateOutputType | null
    _max: PastPerfectMaxAggregateOutputType | null
  }

  type GetPastPerfectGroupByPayload<T extends PastPerfectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PastPerfectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PastPerfectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PastPerfectGroupByOutputType[P]>
            : GetScalarType<T[P], PastPerfectGroupByOutputType[P]>
        }
      >
    >


  export type PastPerfectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verbId?: boolean
    germanVerb?: boolean
    germanSentence?: boolean
    audio?: boolean
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pastPerfect"]>

  export type PastPerfectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verbId?: boolean
    germanVerb?: boolean
    germanSentence?: boolean
    audio?: boolean
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pastPerfect"]>

  export type PastPerfectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verbId?: boolean
    germanVerb?: boolean
    germanSentence?: boolean
    audio?: boolean
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pastPerfect"]>

  export type PastPerfectSelectScalar = {
    id?: boolean
    verbId?: boolean
    germanVerb?: boolean
    germanSentence?: boolean
    audio?: boolean
  }

  export type PastPerfectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "verbId" | "germanVerb" | "germanSentence" | "audio", ExtArgs["result"]["pastPerfect"]>
  export type PastPerfectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }
  export type PastPerfectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }
  export type PastPerfectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }

  export type $PastPerfectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PastPerfect"
    objects: {
      verb: Prisma.$VerbPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      verbId: number
      germanVerb: string
      germanSentence: string
      audio: string
    }, ExtArgs["result"]["pastPerfect"]>
    composites: {}
  }

  type PastPerfectGetPayload<S extends boolean | null | undefined | PastPerfectDefaultArgs> = $Result.GetResult<Prisma.$PastPerfectPayload, S>

  type PastPerfectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PastPerfectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PastPerfectCountAggregateInputType | true
    }

  export interface PastPerfectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PastPerfect'], meta: { name: 'PastPerfect' } }
    /**
     * Find zero or one PastPerfect that matches the filter.
     * @param {PastPerfectFindUniqueArgs} args - Arguments to find a PastPerfect
     * @example
     * // Get one PastPerfect
     * const pastPerfect = await prisma.pastPerfect.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PastPerfectFindUniqueArgs>(args: SelectSubset<T, PastPerfectFindUniqueArgs<ExtArgs>>): Prisma__PastPerfectClient<$Result.GetResult<Prisma.$PastPerfectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PastPerfect that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PastPerfectFindUniqueOrThrowArgs} args - Arguments to find a PastPerfect
     * @example
     * // Get one PastPerfect
     * const pastPerfect = await prisma.pastPerfect.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PastPerfectFindUniqueOrThrowArgs>(args: SelectSubset<T, PastPerfectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PastPerfectClient<$Result.GetResult<Prisma.$PastPerfectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PastPerfect that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PastPerfectFindFirstArgs} args - Arguments to find a PastPerfect
     * @example
     * // Get one PastPerfect
     * const pastPerfect = await prisma.pastPerfect.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PastPerfectFindFirstArgs>(args?: SelectSubset<T, PastPerfectFindFirstArgs<ExtArgs>>): Prisma__PastPerfectClient<$Result.GetResult<Prisma.$PastPerfectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PastPerfect that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PastPerfectFindFirstOrThrowArgs} args - Arguments to find a PastPerfect
     * @example
     * // Get one PastPerfect
     * const pastPerfect = await prisma.pastPerfect.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PastPerfectFindFirstOrThrowArgs>(args?: SelectSubset<T, PastPerfectFindFirstOrThrowArgs<ExtArgs>>): Prisma__PastPerfectClient<$Result.GetResult<Prisma.$PastPerfectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PastPerfects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PastPerfectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PastPerfects
     * const pastPerfects = await prisma.pastPerfect.findMany()
     * 
     * // Get first 10 PastPerfects
     * const pastPerfects = await prisma.pastPerfect.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pastPerfectWithIdOnly = await prisma.pastPerfect.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PastPerfectFindManyArgs>(args?: SelectSubset<T, PastPerfectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PastPerfectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PastPerfect.
     * @param {PastPerfectCreateArgs} args - Arguments to create a PastPerfect.
     * @example
     * // Create one PastPerfect
     * const PastPerfect = await prisma.pastPerfect.create({
     *   data: {
     *     // ... data to create a PastPerfect
     *   }
     * })
     * 
     */
    create<T extends PastPerfectCreateArgs>(args: SelectSubset<T, PastPerfectCreateArgs<ExtArgs>>): Prisma__PastPerfectClient<$Result.GetResult<Prisma.$PastPerfectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PastPerfects.
     * @param {PastPerfectCreateManyArgs} args - Arguments to create many PastPerfects.
     * @example
     * // Create many PastPerfects
     * const pastPerfect = await prisma.pastPerfect.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PastPerfectCreateManyArgs>(args?: SelectSubset<T, PastPerfectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PastPerfects and returns the data saved in the database.
     * @param {PastPerfectCreateManyAndReturnArgs} args - Arguments to create many PastPerfects.
     * @example
     * // Create many PastPerfects
     * const pastPerfect = await prisma.pastPerfect.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PastPerfects and only return the `id`
     * const pastPerfectWithIdOnly = await prisma.pastPerfect.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PastPerfectCreateManyAndReturnArgs>(args?: SelectSubset<T, PastPerfectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PastPerfectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PastPerfect.
     * @param {PastPerfectDeleteArgs} args - Arguments to delete one PastPerfect.
     * @example
     * // Delete one PastPerfect
     * const PastPerfect = await prisma.pastPerfect.delete({
     *   where: {
     *     // ... filter to delete one PastPerfect
     *   }
     * })
     * 
     */
    delete<T extends PastPerfectDeleteArgs>(args: SelectSubset<T, PastPerfectDeleteArgs<ExtArgs>>): Prisma__PastPerfectClient<$Result.GetResult<Prisma.$PastPerfectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PastPerfect.
     * @param {PastPerfectUpdateArgs} args - Arguments to update one PastPerfect.
     * @example
     * // Update one PastPerfect
     * const pastPerfect = await prisma.pastPerfect.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PastPerfectUpdateArgs>(args: SelectSubset<T, PastPerfectUpdateArgs<ExtArgs>>): Prisma__PastPerfectClient<$Result.GetResult<Prisma.$PastPerfectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PastPerfects.
     * @param {PastPerfectDeleteManyArgs} args - Arguments to filter PastPerfects to delete.
     * @example
     * // Delete a few PastPerfects
     * const { count } = await prisma.pastPerfect.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PastPerfectDeleteManyArgs>(args?: SelectSubset<T, PastPerfectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PastPerfects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PastPerfectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PastPerfects
     * const pastPerfect = await prisma.pastPerfect.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PastPerfectUpdateManyArgs>(args: SelectSubset<T, PastPerfectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PastPerfects and returns the data updated in the database.
     * @param {PastPerfectUpdateManyAndReturnArgs} args - Arguments to update many PastPerfects.
     * @example
     * // Update many PastPerfects
     * const pastPerfect = await prisma.pastPerfect.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PastPerfects and only return the `id`
     * const pastPerfectWithIdOnly = await prisma.pastPerfect.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends PastPerfectUpdateManyAndReturnArgs>(args: SelectSubset<T, PastPerfectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PastPerfectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PastPerfect.
     * @param {PastPerfectUpsertArgs} args - Arguments to update or create a PastPerfect.
     * @example
     * // Update or create a PastPerfect
     * const pastPerfect = await prisma.pastPerfect.upsert({
     *   create: {
     *     // ... data to create a PastPerfect
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PastPerfect we want to update
     *   }
     * })
     */
    upsert<T extends PastPerfectUpsertArgs>(args: SelectSubset<T, PastPerfectUpsertArgs<ExtArgs>>): Prisma__PastPerfectClient<$Result.GetResult<Prisma.$PastPerfectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PastPerfects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PastPerfectCountArgs} args - Arguments to filter PastPerfects to count.
     * @example
     * // Count the number of PastPerfects
     * const count = await prisma.pastPerfect.count({
     *   where: {
     *     // ... the filter for the PastPerfects we want to count
     *   }
     * })
    **/
    count<T extends PastPerfectCountArgs>(
      args?: Subset<T, PastPerfectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PastPerfectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PastPerfect.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PastPerfectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PastPerfectAggregateArgs>(args: Subset<T, PastPerfectAggregateArgs>): Prisma.PrismaPromise<GetPastPerfectAggregateType<T>>

    /**
     * Group by PastPerfect.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PastPerfectGroupByArgs} args - Group by arguments.
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
      T extends PastPerfectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PastPerfectGroupByArgs['orderBy'] }
        : { orderBy?: PastPerfectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PastPerfectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPastPerfectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PastPerfect model
   */
  readonly fields: PastPerfectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PastPerfect.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PastPerfectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    verb<T extends VerbDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VerbDefaultArgs<ExtArgs>>): Prisma__VerbClient<$Result.GetResult<Prisma.$VerbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PastPerfect model
   */
  interface PastPerfectFieldRefs {
    readonly id: FieldRef<"PastPerfect", 'Int'>
    readonly verbId: FieldRef<"PastPerfect", 'Int'>
    readonly germanVerb: FieldRef<"PastPerfect", 'String'>
    readonly germanSentence: FieldRef<"PastPerfect", 'String'>
    readonly audio: FieldRef<"PastPerfect", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PastPerfect findUnique
   */
  export type PastPerfectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PastPerfect
     */
    select?: PastPerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PastPerfect
     */
    omit?: PastPerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastPerfectInclude<ExtArgs> | null
    /**
     * Filter, which PastPerfect to fetch.
     */
    where: PastPerfectWhereUniqueInput
  }

  /**
   * PastPerfect findUniqueOrThrow
   */
  export type PastPerfectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PastPerfect
     */
    select?: PastPerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PastPerfect
     */
    omit?: PastPerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastPerfectInclude<ExtArgs> | null
    /**
     * Filter, which PastPerfect to fetch.
     */
    where: PastPerfectWhereUniqueInput
  }

  /**
   * PastPerfect findFirst
   */
  export type PastPerfectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PastPerfect
     */
    select?: PastPerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PastPerfect
     */
    omit?: PastPerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastPerfectInclude<ExtArgs> | null
    /**
     * Filter, which PastPerfect to fetch.
     */
    where?: PastPerfectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PastPerfects to fetch.
     */
    orderBy?: PastPerfectOrderByWithRelationInput | PastPerfectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PastPerfects.
     */
    cursor?: PastPerfectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PastPerfects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PastPerfects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PastPerfects.
     */
    distinct?: PastPerfectScalarFieldEnum | PastPerfectScalarFieldEnum[]
  }

  /**
   * PastPerfect findFirstOrThrow
   */
  export type PastPerfectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PastPerfect
     */
    select?: PastPerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PastPerfect
     */
    omit?: PastPerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastPerfectInclude<ExtArgs> | null
    /**
     * Filter, which PastPerfect to fetch.
     */
    where?: PastPerfectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PastPerfects to fetch.
     */
    orderBy?: PastPerfectOrderByWithRelationInput | PastPerfectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PastPerfects.
     */
    cursor?: PastPerfectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PastPerfects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PastPerfects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PastPerfects.
     */
    distinct?: PastPerfectScalarFieldEnum | PastPerfectScalarFieldEnum[]
  }

  /**
   * PastPerfect findMany
   */
  export type PastPerfectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PastPerfect
     */
    select?: PastPerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PastPerfect
     */
    omit?: PastPerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastPerfectInclude<ExtArgs> | null
    /**
     * Filter, which PastPerfects to fetch.
     */
    where?: PastPerfectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PastPerfects to fetch.
     */
    orderBy?: PastPerfectOrderByWithRelationInput | PastPerfectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PastPerfects.
     */
    cursor?: PastPerfectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PastPerfects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PastPerfects.
     */
    skip?: number
    distinct?: PastPerfectScalarFieldEnum | PastPerfectScalarFieldEnum[]
  }

  /**
   * PastPerfect create
   */
  export type PastPerfectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PastPerfect
     */
    select?: PastPerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PastPerfect
     */
    omit?: PastPerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastPerfectInclude<ExtArgs> | null
    /**
     * The data needed to create a PastPerfect.
     */
    data: XOR<PastPerfectCreateInput, PastPerfectUncheckedCreateInput>
  }

  /**
   * PastPerfect createMany
   */
  export type PastPerfectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PastPerfects.
     */
    data: PastPerfectCreateManyInput | PastPerfectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PastPerfect createManyAndReturn
   */
  export type PastPerfectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PastPerfect
     */
    select?: PastPerfectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PastPerfect
     */
    omit?: PastPerfectOmit<ExtArgs> | null
    /**
     * The data used to create many PastPerfects.
     */
    data: PastPerfectCreateManyInput | PastPerfectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastPerfectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PastPerfect update
   */
  export type PastPerfectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PastPerfect
     */
    select?: PastPerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PastPerfect
     */
    omit?: PastPerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastPerfectInclude<ExtArgs> | null
    /**
     * The data needed to update a PastPerfect.
     */
    data: XOR<PastPerfectUpdateInput, PastPerfectUncheckedUpdateInput>
    /**
     * Choose, which PastPerfect to update.
     */
    where: PastPerfectWhereUniqueInput
  }

  /**
   * PastPerfect updateMany
   */
  export type PastPerfectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PastPerfects.
     */
    data: XOR<PastPerfectUpdateManyMutationInput, PastPerfectUncheckedUpdateManyInput>
    /**
     * Filter which PastPerfects to update
     */
    where?: PastPerfectWhereInput
    /**
     * Limit how many PastPerfects to update.
     */
    limit?: number
  }

  /**
   * PastPerfect updateManyAndReturn
   */
  export type PastPerfectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PastPerfect
     */
    select?: PastPerfectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PastPerfect
     */
    omit?: PastPerfectOmit<ExtArgs> | null
    /**
     * The data used to update PastPerfects.
     */
    data: XOR<PastPerfectUpdateManyMutationInput, PastPerfectUncheckedUpdateManyInput>
    /**
     * Filter which PastPerfects to update
     */
    where?: PastPerfectWhereInput
    /**
     * Limit how many PastPerfects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastPerfectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PastPerfect upsert
   */
  export type PastPerfectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PastPerfect
     */
    select?: PastPerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PastPerfect
     */
    omit?: PastPerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastPerfectInclude<ExtArgs> | null
    /**
     * The filter to search for the PastPerfect to update in case it exists.
     */
    where: PastPerfectWhereUniqueInput
    /**
     * In case the PastPerfect found by the `where` argument doesn't exist, create a new PastPerfect with this data.
     */
    create: XOR<PastPerfectCreateInput, PastPerfectUncheckedCreateInput>
    /**
     * In case the PastPerfect was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PastPerfectUpdateInput, PastPerfectUncheckedUpdateInput>
  }

  /**
   * PastPerfect delete
   */
  export type PastPerfectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PastPerfect
     */
    select?: PastPerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PastPerfect
     */
    omit?: PastPerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastPerfectInclude<ExtArgs> | null
    /**
     * Filter which PastPerfect to delete.
     */
    where: PastPerfectWhereUniqueInput
  }

  /**
   * PastPerfect deleteMany
   */
  export type PastPerfectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PastPerfects to delete
     */
    where?: PastPerfectWhereInput
    /**
     * Limit how many PastPerfects to delete.
     */
    limit?: number
  }

  /**
   * PastPerfect without action
   */
  export type PastPerfectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PastPerfect
     */
    select?: PastPerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PastPerfect
     */
    omit?: PastPerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastPerfectInclude<ExtArgs> | null
  }


  /**
   * Model Future
   */

  export type AggregateFuture = {
    _count: FutureCountAggregateOutputType | null
    _avg: FutureAvgAggregateOutputType | null
    _sum: FutureSumAggregateOutputType | null
    _min: FutureMinAggregateOutputType | null
    _max: FutureMaxAggregateOutputType | null
  }

  export type FutureAvgAggregateOutputType = {
    id: number | null
    verbId: number | null
  }

  export type FutureSumAggregateOutputType = {
    id: number | null
    verbId: number | null
  }

  export type FutureMinAggregateOutputType = {
    id: number | null
    verbId: number | null
    germanVerb: string | null
    germanSentence: string | null
    audio: string | null
  }

  export type FutureMaxAggregateOutputType = {
    id: number | null
    verbId: number | null
    germanVerb: string | null
    germanSentence: string | null
    audio: string | null
  }

  export type FutureCountAggregateOutputType = {
    id: number
    verbId: number
    germanVerb: number
    germanSentence: number
    audio: number
    _all: number
  }


  export type FutureAvgAggregateInputType = {
    id?: true
    verbId?: true
  }

  export type FutureSumAggregateInputType = {
    id?: true
    verbId?: true
  }

  export type FutureMinAggregateInputType = {
    id?: true
    verbId?: true
    germanVerb?: true
    germanSentence?: true
    audio?: true
  }

  export type FutureMaxAggregateInputType = {
    id?: true
    verbId?: true
    germanVerb?: true
    germanSentence?: true
    audio?: true
  }

  export type FutureCountAggregateInputType = {
    id?: true
    verbId?: true
    germanVerb?: true
    germanSentence?: true
    audio?: true
    _all?: true
  }

  export type FutureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Future to aggregate.
     */
    where?: FutureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Futures to fetch.
     */
    orderBy?: FutureOrderByWithRelationInput | FutureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FutureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Futures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Futures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Futures
    **/
    _count?: true | FutureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FutureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FutureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FutureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FutureMaxAggregateInputType
  }

  export type GetFutureAggregateType<T extends FutureAggregateArgs> = {
        [P in keyof T & keyof AggregateFuture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuture[P]>
      : GetScalarType<T[P], AggregateFuture[P]>
  }




  export type FutureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FutureWhereInput
    orderBy?: FutureOrderByWithAggregationInput | FutureOrderByWithAggregationInput[]
    by: FutureScalarFieldEnum[] | FutureScalarFieldEnum
    having?: FutureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FutureCountAggregateInputType | true
    _avg?: FutureAvgAggregateInputType
    _sum?: FutureSumAggregateInputType
    _min?: FutureMinAggregateInputType
    _max?: FutureMaxAggregateInputType
  }

  export type FutureGroupByOutputType = {
    id: number
    verbId: number
    germanVerb: string
    germanSentence: string
    audio: string
    _count: FutureCountAggregateOutputType | null
    _avg: FutureAvgAggregateOutputType | null
    _sum: FutureSumAggregateOutputType | null
    _min: FutureMinAggregateOutputType | null
    _max: FutureMaxAggregateOutputType | null
  }

  type GetFutureGroupByPayload<T extends FutureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FutureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FutureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FutureGroupByOutputType[P]>
            : GetScalarType<T[P], FutureGroupByOutputType[P]>
        }
      >
    >


  export type FutureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verbId?: boolean
    germanVerb?: boolean
    germanSentence?: boolean
    audio?: boolean
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["future"]>

  export type FutureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verbId?: boolean
    germanVerb?: boolean
    germanSentence?: boolean
    audio?: boolean
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["future"]>

  export type FutureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verbId?: boolean
    germanVerb?: boolean
    germanSentence?: boolean
    audio?: boolean
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["future"]>

  export type FutureSelectScalar = {
    id?: boolean
    verbId?: boolean
    germanVerb?: boolean
    germanSentence?: boolean
    audio?: boolean
  }

  export type FutureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "verbId" | "germanVerb" | "germanSentence" | "audio", ExtArgs["result"]["future"]>
  export type FutureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }
  export type FutureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }
  export type FutureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }

  export type $FuturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Future"
    objects: {
      verb: Prisma.$VerbPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      verbId: number
      germanVerb: string
      germanSentence: string
      audio: string
    }, ExtArgs["result"]["future"]>
    composites: {}
  }

  type FutureGetPayload<S extends boolean | null | undefined | FutureDefaultArgs> = $Result.GetResult<Prisma.$FuturePayload, S>

  type FutureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FutureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FutureCountAggregateInputType | true
    }

  export interface FutureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Future'], meta: { name: 'Future' } }
    /**
     * Find zero or one Future that matches the filter.
     * @param {FutureFindUniqueArgs} args - Arguments to find a Future
     * @example
     * // Get one Future
     * const future = await prisma.future.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FutureFindUniqueArgs>(args: SelectSubset<T, FutureFindUniqueArgs<ExtArgs>>): Prisma__FutureClient<$Result.GetResult<Prisma.$FuturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Future that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FutureFindUniqueOrThrowArgs} args - Arguments to find a Future
     * @example
     * // Get one Future
     * const future = await prisma.future.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FutureFindUniqueOrThrowArgs>(args: SelectSubset<T, FutureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FutureClient<$Result.GetResult<Prisma.$FuturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Future that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FutureFindFirstArgs} args - Arguments to find a Future
     * @example
     * // Get one Future
     * const future = await prisma.future.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FutureFindFirstArgs>(args?: SelectSubset<T, FutureFindFirstArgs<ExtArgs>>): Prisma__FutureClient<$Result.GetResult<Prisma.$FuturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Future that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FutureFindFirstOrThrowArgs} args - Arguments to find a Future
     * @example
     * // Get one Future
     * const future = await prisma.future.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FutureFindFirstOrThrowArgs>(args?: SelectSubset<T, FutureFindFirstOrThrowArgs<ExtArgs>>): Prisma__FutureClient<$Result.GetResult<Prisma.$FuturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Futures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FutureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Futures
     * const futures = await prisma.future.findMany()
     * 
     * // Get first 10 Futures
     * const futures = await prisma.future.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const futureWithIdOnly = await prisma.future.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FutureFindManyArgs>(args?: SelectSubset<T, FutureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Future.
     * @param {FutureCreateArgs} args - Arguments to create a Future.
     * @example
     * // Create one Future
     * const Future = await prisma.future.create({
     *   data: {
     *     // ... data to create a Future
     *   }
     * })
     * 
     */
    create<T extends FutureCreateArgs>(args: SelectSubset<T, FutureCreateArgs<ExtArgs>>): Prisma__FutureClient<$Result.GetResult<Prisma.$FuturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Futures.
     * @param {FutureCreateManyArgs} args - Arguments to create many Futures.
     * @example
     * // Create many Futures
     * const future = await prisma.future.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FutureCreateManyArgs>(args?: SelectSubset<T, FutureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Futures and returns the data saved in the database.
     * @param {FutureCreateManyAndReturnArgs} args - Arguments to create many Futures.
     * @example
     * // Create many Futures
     * const future = await prisma.future.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Futures and only return the `id`
     * const futureWithIdOnly = await prisma.future.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FutureCreateManyAndReturnArgs>(args?: SelectSubset<T, FutureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Future.
     * @param {FutureDeleteArgs} args - Arguments to delete one Future.
     * @example
     * // Delete one Future
     * const Future = await prisma.future.delete({
     *   where: {
     *     // ... filter to delete one Future
     *   }
     * })
     * 
     */
    delete<T extends FutureDeleteArgs>(args: SelectSubset<T, FutureDeleteArgs<ExtArgs>>): Prisma__FutureClient<$Result.GetResult<Prisma.$FuturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Future.
     * @param {FutureUpdateArgs} args - Arguments to update one Future.
     * @example
     * // Update one Future
     * const future = await prisma.future.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FutureUpdateArgs>(args: SelectSubset<T, FutureUpdateArgs<ExtArgs>>): Prisma__FutureClient<$Result.GetResult<Prisma.$FuturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Futures.
     * @param {FutureDeleteManyArgs} args - Arguments to filter Futures to delete.
     * @example
     * // Delete a few Futures
     * const { count } = await prisma.future.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FutureDeleteManyArgs>(args?: SelectSubset<T, FutureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Futures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FutureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Futures
     * const future = await prisma.future.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FutureUpdateManyArgs>(args: SelectSubset<T, FutureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Futures and returns the data updated in the database.
     * @param {FutureUpdateManyAndReturnArgs} args - Arguments to update many Futures.
     * @example
     * // Update many Futures
     * const future = await prisma.future.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Futures and only return the `id`
     * const futureWithIdOnly = await prisma.future.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends FutureUpdateManyAndReturnArgs>(args: SelectSubset<T, FutureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Future.
     * @param {FutureUpsertArgs} args - Arguments to update or create a Future.
     * @example
     * // Update or create a Future
     * const future = await prisma.future.upsert({
     *   create: {
     *     // ... data to create a Future
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Future we want to update
     *   }
     * })
     */
    upsert<T extends FutureUpsertArgs>(args: SelectSubset<T, FutureUpsertArgs<ExtArgs>>): Prisma__FutureClient<$Result.GetResult<Prisma.$FuturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Futures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FutureCountArgs} args - Arguments to filter Futures to count.
     * @example
     * // Count the number of Futures
     * const count = await prisma.future.count({
     *   where: {
     *     // ... the filter for the Futures we want to count
     *   }
     * })
    **/
    count<T extends FutureCountArgs>(
      args?: Subset<T, FutureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FutureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Future.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FutureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FutureAggregateArgs>(args: Subset<T, FutureAggregateArgs>): Prisma.PrismaPromise<GetFutureAggregateType<T>>

    /**
     * Group by Future.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FutureGroupByArgs} args - Group by arguments.
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
      T extends FutureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FutureGroupByArgs['orderBy'] }
        : { orderBy?: FutureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FutureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFutureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Future model
   */
  readonly fields: FutureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Future.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FutureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    verb<T extends VerbDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VerbDefaultArgs<ExtArgs>>): Prisma__VerbClient<$Result.GetResult<Prisma.$VerbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Future model
   */
  interface FutureFieldRefs {
    readonly id: FieldRef<"Future", 'Int'>
    readonly verbId: FieldRef<"Future", 'Int'>
    readonly germanVerb: FieldRef<"Future", 'String'>
    readonly germanSentence: FieldRef<"Future", 'String'>
    readonly audio: FieldRef<"Future", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Future findUnique
   */
  export type FutureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Future
     */
    select?: FutureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Future
     */
    omit?: FutureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FutureInclude<ExtArgs> | null
    /**
     * Filter, which Future to fetch.
     */
    where: FutureWhereUniqueInput
  }

  /**
   * Future findUniqueOrThrow
   */
  export type FutureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Future
     */
    select?: FutureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Future
     */
    omit?: FutureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FutureInclude<ExtArgs> | null
    /**
     * Filter, which Future to fetch.
     */
    where: FutureWhereUniqueInput
  }

  /**
   * Future findFirst
   */
  export type FutureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Future
     */
    select?: FutureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Future
     */
    omit?: FutureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FutureInclude<ExtArgs> | null
    /**
     * Filter, which Future to fetch.
     */
    where?: FutureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Futures to fetch.
     */
    orderBy?: FutureOrderByWithRelationInput | FutureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Futures.
     */
    cursor?: FutureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Futures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Futures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Futures.
     */
    distinct?: FutureScalarFieldEnum | FutureScalarFieldEnum[]
  }

  /**
   * Future findFirstOrThrow
   */
  export type FutureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Future
     */
    select?: FutureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Future
     */
    omit?: FutureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FutureInclude<ExtArgs> | null
    /**
     * Filter, which Future to fetch.
     */
    where?: FutureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Futures to fetch.
     */
    orderBy?: FutureOrderByWithRelationInput | FutureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Futures.
     */
    cursor?: FutureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Futures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Futures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Futures.
     */
    distinct?: FutureScalarFieldEnum | FutureScalarFieldEnum[]
  }

  /**
   * Future findMany
   */
  export type FutureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Future
     */
    select?: FutureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Future
     */
    omit?: FutureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FutureInclude<ExtArgs> | null
    /**
     * Filter, which Futures to fetch.
     */
    where?: FutureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Futures to fetch.
     */
    orderBy?: FutureOrderByWithRelationInput | FutureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Futures.
     */
    cursor?: FutureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Futures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Futures.
     */
    skip?: number
    distinct?: FutureScalarFieldEnum | FutureScalarFieldEnum[]
  }

  /**
   * Future create
   */
  export type FutureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Future
     */
    select?: FutureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Future
     */
    omit?: FutureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FutureInclude<ExtArgs> | null
    /**
     * The data needed to create a Future.
     */
    data: XOR<FutureCreateInput, FutureUncheckedCreateInput>
  }

  /**
   * Future createMany
   */
  export type FutureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Futures.
     */
    data: FutureCreateManyInput | FutureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Future createManyAndReturn
   */
  export type FutureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Future
     */
    select?: FutureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Future
     */
    omit?: FutureOmit<ExtArgs> | null
    /**
     * The data used to create many Futures.
     */
    data: FutureCreateManyInput | FutureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FutureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Future update
   */
  export type FutureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Future
     */
    select?: FutureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Future
     */
    omit?: FutureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FutureInclude<ExtArgs> | null
    /**
     * The data needed to update a Future.
     */
    data: XOR<FutureUpdateInput, FutureUncheckedUpdateInput>
    /**
     * Choose, which Future to update.
     */
    where: FutureWhereUniqueInput
  }

  /**
   * Future updateMany
   */
  export type FutureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Futures.
     */
    data: XOR<FutureUpdateManyMutationInput, FutureUncheckedUpdateManyInput>
    /**
     * Filter which Futures to update
     */
    where?: FutureWhereInput
    /**
     * Limit how many Futures to update.
     */
    limit?: number
  }

  /**
   * Future updateManyAndReturn
   */
  export type FutureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Future
     */
    select?: FutureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Future
     */
    omit?: FutureOmit<ExtArgs> | null
    /**
     * The data used to update Futures.
     */
    data: XOR<FutureUpdateManyMutationInput, FutureUncheckedUpdateManyInput>
    /**
     * Filter which Futures to update
     */
    where?: FutureWhereInput
    /**
     * Limit how many Futures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FutureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Future upsert
   */
  export type FutureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Future
     */
    select?: FutureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Future
     */
    omit?: FutureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FutureInclude<ExtArgs> | null
    /**
     * The filter to search for the Future to update in case it exists.
     */
    where: FutureWhereUniqueInput
    /**
     * In case the Future found by the `where` argument doesn't exist, create a new Future with this data.
     */
    create: XOR<FutureCreateInput, FutureUncheckedCreateInput>
    /**
     * In case the Future was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FutureUpdateInput, FutureUncheckedUpdateInput>
  }

  /**
   * Future delete
   */
  export type FutureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Future
     */
    select?: FutureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Future
     */
    omit?: FutureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FutureInclude<ExtArgs> | null
    /**
     * Filter which Future to delete.
     */
    where: FutureWhereUniqueInput
  }

  /**
   * Future deleteMany
   */
  export type FutureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Futures to delete
     */
    where?: FutureWhereInput
    /**
     * Limit how many Futures to delete.
     */
    limit?: number
  }

  /**
   * Future without action
   */
  export type FutureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Future
     */
    select?: FutureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Future
     */
    omit?: FutureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FutureInclude<ExtArgs> | null
  }


  /**
   * Model FuturePerfect
   */

  export type AggregateFuturePerfect = {
    _count: FuturePerfectCountAggregateOutputType | null
    _avg: FuturePerfectAvgAggregateOutputType | null
    _sum: FuturePerfectSumAggregateOutputType | null
    _min: FuturePerfectMinAggregateOutputType | null
    _max: FuturePerfectMaxAggregateOutputType | null
  }

  export type FuturePerfectAvgAggregateOutputType = {
    id: number | null
    verbId: number | null
  }

  export type FuturePerfectSumAggregateOutputType = {
    id: number | null
    verbId: number | null
  }

  export type FuturePerfectMinAggregateOutputType = {
    id: number | null
    verbId: number | null
    germanVerb: string | null
    germanSentence: string | null
    audio: string | null
  }

  export type FuturePerfectMaxAggregateOutputType = {
    id: number | null
    verbId: number | null
    germanVerb: string | null
    germanSentence: string | null
    audio: string | null
  }

  export type FuturePerfectCountAggregateOutputType = {
    id: number
    verbId: number
    germanVerb: number
    germanSentence: number
    audio: number
    _all: number
  }


  export type FuturePerfectAvgAggregateInputType = {
    id?: true
    verbId?: true
  }

  export type FuturePerfectSumAggregateInputType = {
    id?: true
    verbId?: true
  }

  export type FuturePerfectMinAggregateInputType = {
    id?: true
    verbId?: true
    germanVerb?: true
    germanSentence?: true
    audio?: true
  }

  export type FuturePerfectMaxAggregateInputType = {
    id?: true
    verbId?: true
    germanVerb?: true
    germanSentence?: true
    audio?: true
  }

  export type FuturePerfectCountAggregateInputType = {
    id?: true
    verbId?: true
    germanVerb?: true
    germanSentence?: true
    audio?: true
    _all?: true
  }

  export type FuturePerfectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FuturePerfect to aggregate.
     */
    where?: FuturePerfectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FuturePerfects to fetch.
     */
    orderBy?: FuturePerfectOrderByWithRelationInput | FuturePerfectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FuturePerfectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FuturePerfects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FuturePerfects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FuturePerfects
    **/
    _count?: true | FuturePerfectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FuturePerfectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FuturePerfectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuturePerfectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuturePerfectMaxAggregateInputType
  }

  export type GetFuturePerfectAggregateType<T extends FuturePerfectAggregateArgs> = {
        [P in keyof T & keyof AggregateFuturePerfect]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuturePerfect[P]>
      : GetScalarType<T[P], AggregateFuturePerfect[P]>
  }




  export type FuturePerfectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuturePerfectWhereInput
    orderBy?: FuturePerfectOrderByWithAggregationInput | FuturePerfectOrderByWithAggregationInput[]
    by: FuturePerfectScalarFieldEnum[] | FuturePerfectScalarFieldEnum
    having?: FuturePerfectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuturePerfectCountAggregateInputType | true
    _avg?: FuturePerfectAvgAggregateInputType
    _sum?: FuturePerfectSumAggregateInputType
    _min?: FuturePerfectMinAggregateInputType
    _max?: FuturePerfectMaxAggregateInputType
  }

  export type FuturePerfectGroupByOutputType = {
    id: number
    verbId: number
    germanVerb: string
    germanSentence: string
    audio: string
    _count: FuturePerfectCountAggregateOutputType | null
    _avg: FuturePerfectAvgAggregateOutputType | null
    _sum: FuturePerfectSumAggregateOutputType | null
    _min: FuturePerfectMinAggregateOutputType | null
    _max: FuturePerfectMaxAggregateOutputType | null
  }

  type GetFuturePerfectGroupByPayload<T extends FuturePerfectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuturePerfectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuturePerfectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuturePerfectGroupByOutputType[P]>
            : GetScalarType<T[P], FuturePerfectGroupByOutputType[P]>
        }
      >
    >


  export type FuturePerfectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verbId?: boolean
    germanVerb?: boolean
    germanSentence?: boolean
    audio?: boolean
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["futurePerfect"]>

  export type FuturePerfectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verbId?: boolean
    germanVerb?: boolean
    germanSentence?: boolean
    audio?: boolean
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["futurePerfect"]>

  export type FuturePerfectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verbId?: boolean
    germanVerb?: boolean
    germanSentence?: boolean
    audio?: boolean
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["futurePerfect"]>

  export type FuturePerfectSelectScalar = {
    id?: boolean
    verbId?: boolean
    germanVerb?: boolean
    germanSentence?: boolean
    audio?: boolean
  }

  export type FuturePerfectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "verbId" | "germanVerb" | "germanSentence" | "audio", ExtArgs["result"]["futurePerfect"]>
  export type FuturePerfectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }
  export type FuturePerfectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }
  export type FuturePerfectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verb?: boolean | VerbDefaultArgs<ExtArgs>
  }

  export type $FuturePerfectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FuturePerfect"
    objects: {
      verb: Prisma.$VerbPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      verbId: number
      germanVerb: string
      germanSentence: string
      audio: string
    }, ExtArgs["result"]["futurePerfect"]>
    composites: {}
  }

  type FuturePerfectGetPayload<S extends boolean | null | undefined | FuturePerfectDefaultArgs> = $Result.GetResult<Prisma.$FuturePerfectPayload, S>

  type FuturePerfectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FuturePerfectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuturePerfectCountAggregateInputType | true
    }

  export interface FuturePerfectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FuturePerfect'], meta: { name: 'FuturePerfect' } }
    /**
     * Find zero or one FuturePerfect that matches the filter.
     * @param {FuturePerfectFindUniqueArgs} args - Arguments to find a FuturePerfect
     * @example
     * // Get one FuturePerfect
     * const futurePerfect = await prisma.futurePerfect.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FuturePerfectFindUniqueArgs>(args: SelectSubset<T, FuturePerfectFindUniqueArgs<ExtArgs>>): Prisma__FuturePerfectClient<$Result.GetResult<Prisma.$FuturePerfectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FuturePerfect that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FuturePerfectFindUniqueOrThrowArgs} args - Arguments to find a FuturePerfect
     * @example
     * // Get one FuturePerfect
     * const futurePerfect = await prisma.futurePerfect.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FuturePerfectFindUniqueOrThrowArgs>(args: SelectSubset<T, FuturePerfectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FuturePerfectClient<$Result.GetResult<Prisma.$FuturePerfectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FuturePerfect that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuturePerfectFindFirstArgs} args - Arguments to find a FuturePerfect
     * @example
     * // Get one FuturePerfect
     * const futurePerfect = await prisma.futurePerfect.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FuturePerfectFindFirstArgs>(args?: SelectSubset<T, FuturePerfectFindFirstArgs<ExtArgs>>): Prisma__FuturePerfectClient<$Result.GetResult<Prisma.$FuturePerfectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FuturePerfect that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuturePerfectFindFirstOrThrowArgs} args - Arguments to find a FuturePerfect
     * @example
     * // Get one FuturePerfect
     * const futurePerfect = await prisma.futurePerfect.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FuturePerfectFindFirstOrThrowArgs>(args?: SelectSubset<T, FuturePerfectFindFirstOrThrowArgs<ExtArgs>>): Prisma__FuturePerfectClient<$Result.GetResult<Prisma.$FuturePerfectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FuturePerfects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuturePerfectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FuturePerfects
     * const futurePerfects = await prisma.futurePerfect.findMany()
     * 
     * // Get first 10 FuturePerfects
     * const futurePerfects = await prisma.futurePerfect.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const futurePerfectWithIdOnly = await prisma.futurePerfect.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FuturePerfectFindManyArgs>(args?: SelectSubset<T, FuturePerfectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuturePerfectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FuturePerfect.
     * @param {FuturePerfectCreateArgs} args - Arguments to create a FuturePerfect.
     * @example
     * // Create one FuturePerfect
     * const FuturePerfect = await prisma.futurePerfect.create({
     *   data: {
     *     // ... data to create a FuturePerfect
     *   }
     * })
     * 
     */
    create<T extends FuturePerfectCreateArgs>(args: SelectSubset<T, FuturePerfectCreateArgs<ExtArgs>>): Prisma__FuturePerfectClient<$Result.GetResult<Prisma.$FuturePerfectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FuturePerfects.
     * @param {FuturePerfectCreateManyArgs} args - Arguments to create many FuturePerfects.
     * @example
     * // Create many FuturePerfects
     * const futurePerfect = await prisma.futurePerfect.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FuturePerfectCreateManyArgs>(args?: SelectSubset<T, FuturePerfectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FuturePerfects and returns the data saved in the database.
     * @param {FuturePerfectCreateManyAndReturnArgs} args - Arguments to create many FuturePerfects.
     * @example
     * // Create many FuturePerfects
     * const futurePerfect = await prisma.futurePerfect.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FuturePerfects and only return the `id`
     * const futurePerfectWithIdOnly = await prisma.futurePerfect.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FuturePerfectCreateManyAndReturnArgs>(args?: SelectSubset<T, FuturePerfectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuturePerfectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FuturePerfect.
     * @param {FuturePerfectDeleteArgs} args - Arguments to delete one FuturePerfect.
     * @example
     * // Delete one FuturePerfect
     * const FuturePerfect = await prisma.futurePerfect.delete({
     *   where: {
     *     // ... filter to delete one FuturePerfect
     *   }
     * })
     * 
     */
    delete<T extends FuturePerfectDeleteArgs>(args: SelectSubset<T, FuturePerfectDeleteArgs<ExtArgs>>): Prisma__FuturePerfectClient<$Result.GetResult<Prisma.$FuturePerfectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FuturePerfect.
     * @param {FuturePerfectUpdateArgs} args - Arguments to update one FuturePerfect.
     * @example
     * // Update one FuturePerfect
     * const futurePerfect = await prisma.futurePerfect.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FuturePerfectUpdateArgs>(args: SelectSubset<T, FuturePerfectUpdateArgs<ExtArgs>>): Prisma__FuturePerfectClient<$Result.GetResult<Prisma.$FuturePerfectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FuturePerfects.
     * @param {FuturePerfectDeleteManyArgs} args - Arguments to filter FuturePerfects to delete.
     * @example
     * // Delete a few FuturePerfects
     * const { count } = await prisma.futurePerfect.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FuturePerfectDeleteManyArgs>(args?: SelectSubset<T, FuturePerfectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FuturePerfects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuturePerfectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FuturePerfects
     * const futurePerfect = await prisma.futurePerfect.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FuturePerfectUpdateManyArgs>(args: SelectSubset<T, FuturePerfectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FuturePerfects and returns the data updated in the database.
     * @param {FuturePerfectUpdateManyAndReturnArgs} args - Arguments to update many FuturePerfects.
     * @example
     * // Update many FuturePerfects
     * const futurePerfect = await prisma.futurePerfect.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FuturePerfects and only return the `id`
     * const futurePerfectWithIdOnly = await prisma.futurePerfect.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends FuturePerfectUpdateManyAndReturnArgs>(args: SelectSubset<T, FuturePerfectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuturePerfectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FuturePerfect.
     * @param {FuturePerfectUpsertArgs} args - Arguments to update or create a FuturePerfect.
     * @example
     * // Update or create a FuturePerfect
     * const futurePerfect = await prisma.futurePerfect.upsert({
     *   create: {
     *     // ... data to create a FuturePerfect
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FuturePerfect we want to update
     *   }
     * })
     */
    upsert<T extends FuturePerfectUpsertArgs>(args: SelectSubset<T, FuturePerfectUpsertArgs<ExtArgs>>): Prisma__FuturePerfectClient<$Result.GetResult<Prisma.$FuturePerfectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FuturePerfects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuturePerfectCountArgs} args - Arguments to filter FuturePerfects to count.
     * @example
     * // Count the number of FuturePerfects
     * const count = await prisma.futurePerfect.count({
     *   where: {
     *     // ... the filter for the FuturePerfects we want to count
     *   }
     * })
    **/
    count<T extends FuturePerfectCountArgs>(
      args?: Subset<T, FuturePerfectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuturePerfectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FuturePerfect.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuturePerfectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FuturePerfectAggregateArgs>(args: Subset<T, FuturePerfectAggregateArgs>): Prisma.PrismaPromise<GetFuturePerfectAggregateType<T>>

    /**
     * Group by FuturePerfect.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuturePerfectGroupByArgs} args - Group by arguments.
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
      T extends FuturePerfectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FuturePerfectGroupByArgs['orderBy'] }
        : { orderBy?: FuturePerfectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FuturePerfectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuturePerfectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FuturePerfect model
   */
  readonly fields: FuturePerfectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FuturePerfect.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FuturePerfectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    verb<T extends VerbDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VerbDefaultArgs<ExtArgs>>): Prisma__VerbClient<$Result.GetResult<Prisma.$VerbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FuturePerfect model
   */
  interface FuturePerfectFieldRefs {
    readonly id: FieldRef<"FuturePerfect", 'Int'>
    readonly verbId: FieldRef<"FuturePerfect", 'Int'>
    readonly germanVerb: FieldRef<"FuturePerfect", 'String'>
    readonly germanSentence: FieldRef<"FuturePerfect", 'String'>
    readonly audio: FieldRef<"FuturePerfect", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FuturePerfect findUnique
   */
  export type FuturePerfectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuturePerfect
     */
    select?: FuturePerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuturePerfect
     */
    omit?: FuturePerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuturePerfectInclude<ExtArgs> | null
    /**
     * Filter, which FuturePerfect to fetch.
     */
    where: FuturePerfectWhereUniqueInput
  }

  /**
   * FuturePerfect findUniqueOrThrow
   */
  export type FuturePerfectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuturePerfect
     */
    select?: FuturePerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuturePerfect
     */
    omit?: FuturePerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuturePerfectInclude<ExtArgs> | null
    /**
     * Filter, which FuturePerfect to fetch.
     */
    where: FuturePerfectWhereUniqueInput
  }

  /**
   * FuturePerfect findFirst
   */
  export type FuturePerfectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuturePerfect
     */
    select?: FuturePerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuturePerfect
     */
    omit?: FuturePerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuturePerfectInclude<ExtArgs> | null
    /**
     * Filter, which FuturePerfect to fetch.
     */
    where?: FuturePerfectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FuturePerfects to fetch.
     */
    orderBy?: FuturePerfectOrderByWithRelationInput | FuturePerfectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FuturePerfects.
     */
    cursor?: FuturePerfectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FuturePerfects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FuturePerfects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FuturePerfects.
     */
    distinct?: FuturePerfectScalarFieldEnum | FuturePerfectScalarFieldEnum[]
  }

  /**
   * FuturePerfect findFirstOrThrow
   */
  export type FuturePerfectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuturePerfect
     */
    select?: FuturePerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuturePerfect
     */
    omit?: FuturePerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuturePerfectInclude<ExtArgs> | null
    /**
     * Filter, which FuturePerfect to fetch.
     */
    where?: FuturePerfectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FuturePerfects to fetch.
     */
    orderBy?: FuturePerfectOrderByWithRelationInput | FuturePerfectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FuturePerfects.
     */
    cursor?: FuturePerfectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FuturePerfects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FuturePerfects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FuturePerfects.
     */
    distinct?: FuturePerfectScalarFieldEnum | FuturePerfectScalarFieldEnum[]
  }

  /**
   * FuturePerfect findMany
   */
  export type FuturePerfectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuturePerfect
     */
    select?: FuturePerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuturePerfect
     */
    omit?: FuturePerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuturePerfectInclude<ExtArgs> | null
    /**
     * Filter, which FuturePerfects to fetch.
     */
    where?: FuturePerfectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FuturePerfects to fetch.
     */
    orderBy?: FuturePerfectOrderByWithRelationInput | FuturePerfectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FuturePerfects.
     */
    cursor?: FuturePerfectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FuturePerfects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FuturePerfects.
     */
    skip?: number
    distinct?: FuturePerfectScalarFieldEnum | FuturePerfectScalarFieldEnum[]
  }

  /**
   * FuturePerfect create
   */
  export type FuturePerfectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuturePerfect
     */
    select?: FuturePerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuturePerfect
     */
    omit?: FuturePerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuturePerfectInclude<ExtArgs> | null
    /**
     * The data needed to create a FuturePerfect.
     */
    data: XOR<FuturePerfectCreateInput, FuturePerfectUncheckedCreateInput>
  }

  /**
   * FuturePerfect createMany
   */
  export type FuturePerfectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FuturePerfects.
     */
    data: FuturePerfectCreateManyInput | FuturePerfectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FuturePerfect createManyAndReturn
   */
  export type FuturePerfectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuturePerfect
     */
    select?: FuturePerfectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FuturePerfect
     */
    omit?: FuturePerfectOmit<ExtArgs> | null
    /**
     * The data used to create many FuturePerfects.
     */
    data: FuturePerfectCreateManyInput | FuturePerfectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuturePerfectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FuturePerfect update
   */
  export type FuturePerfectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuturePerfect
     */
    select?: FuturePerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuturePerfect
     */
    omit?: FuturePerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuturePerfectInclude<ExtArgs> | null
    /**
     * The data needed to update a FuturePerfect.
     */
    data: XOR<FuturePerfectUpdateInput, FuturePerfectUncheckedUpdateInput>
    /**
     * Choose, which FuturePerfect to update.
     */
    where: FuturePerfectWhereUniqueInput
  }

  /**
   * FuturePerfect updateMany
   */
  export type FuturePerfectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FuturePerfects.
     */
    data: XOR<FuturePerfectUpdateManyMutationInput, FuturePerfectUncheckedUpdateManyInput>
    /**
     * Filter which FuturePerfects to update
     */
    where?: FuturePerfectWhereInput
    /**
     * Limit how many FuturePerfects to update.
     */
    limit?: number
  }

  /**
   * FuturePerfect updateManyAndReturn
   */
  export type FuturePerfectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuturePerfect
     */
    select?: FuturePerfectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FuturePerfect
     */
    omit?: FuturePerfectOmit<ExtArgs> | null
    /**
     * The data used to update FuturePerfects.
     */
    data: XOR<FuturePerfectUpdateManyMutationInput, FuturePerfectUncheckedUpdateManyInput>
    /**
     * Filter which FuturePerfects to update
     */
    where?: FuturePerfectWhereInput
    /**
     * Limit how many FuturePerfects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuturePerfectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FuturePerfect upsert
   */
  export type FuturePerfectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuturePerfect
     */
    select?: FuturePerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuturePerfect
     */
    omit?: FuturePerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuturePerfectInclude<ExtArgs> | null
    /**
     * The filter to search for the FuturePerfect to update in case it exists.
     */
    where: FuturePerfectWhereUniqueInput
    /**
     * In case the FuturePerfect found by the `where` argument doesn't exist, create a new FuturePerfect with this data.
     */
    create: XOR<FuturePerfectCreateInput, FuturePerfectUncheckedCreateInput>
    /**
     * In case the FuturePerfect was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FuturePerfectUpdateInput, FuturePerfectUncheckedUpdateInput>
  }

  /**
   * FuturePerfect delete
   */
  export type FuturePerfectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuturePerfect
     */
    select?: FuturePerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuturePerfect
     */
    omit?: FuturePerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuturePerfectInclude<ExtArgs> | null
    /**
     * Filter which FuturePerfect to delete.
     */
    where: FuturePerfectWhereUniqueInput
  }

  /**
   * FuturePerfect deleteMany
   */
  export type FuturePerfectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FuturePerfects to delete
     */
    where?: FuturePerfectWhereInput
    /**
     * Limit how many FuturePerfects to delete.
     */
    limit?: number
  }

  /**
   * FuturePerfect without action
   */
  export type FuturePerfectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuturePerfect
     */
    select?: FuturePerfectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuturePerfect
     */
    omit?: FuturePerfectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuturePerfectInclude<ExtArgs> | null
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


  export const VerbScalarFieldEnum: {
    id: 'id',
    englishVerb: 'englishVerb',
    englishSentence: 'englishSentence'
  };

  export type VerbScalarFieldEnum = (typeof VerbScalarFieldEnum)[keyof typeof VerbScalarFieldEnum]


  export const PresentScalarFieldEnum: {
    id: 'id',
    verbId: 'verbId',
    germanVerb: 'germanVerb',
    germanSentence: 'germanSentence',
    audio: 'audio'
  };

  export type PresentScalarFieldEnum = (typeof PresentScalarFieldEnum)[keyof typeof PresentScalarFieldEnum]


  export const PresentPerfectScalarFieldEnum: {
    id: 'id',
    verbId: 'verbId',
    germanVerb: 'germanVerb',
    germanSentence: 'germanSentence',
    audio: 'audio'
  };

  export type PresentPerfectScalarFieldEnum = (typeof PresentPerfectScalarFieldEnum)[keyof typeof PresentPerfectScalarFieldEnum]


  export const PastScalarFieldEnum: {
    id: 'id',
    verbId: 'verbId',
    germanVerb: 'germanVerb',
    germanSentence: 'germanSentence',
    audio: 'audio'
  };

  export type PastScalarFieldEnum = (typeof PastScalarFieldEnum)[keyof typeof PastScalarFieldEnum]


  export const PastPerfectScalarFieldEnum: {
    id: 'id',
    verbId: 'verbId',
    germanVerb: 'germanVerb',
    germanSentence: 'germanSentence',
    audio: 'audio'
  };

  export type PastPerfectScalarFieldEnum = (typeof PastPerfectScalarFieldEnum)[keyof typeof PastPerfectScalarFieldEnum]


  export const FutureScalarFieldEnum: {
    id: 'id',
    verbId: 'verbId',
    germanVerb: 'germanVerb',
    germanSentence: 'germanSentence',
    audio: 'audio'
  };

  export type FutureScalarFieldEnum = (typeof FutureScalarFieldEnum)[keyof typeof FutureScalarFieldEnum]


  export const FuturePerfectScalarFieldEnum: {
    id: 'id',
    verbId: 'verbId',
    germanVerb: 'germanVerb',
    germanSentence: 'germanSentence',
    audio: 'audio'
  };

  export type FuturePerfectScalarFieldEnum = (typeof FuturePerfectScalarFieldEnum)[keyof typeof FuturePerfectScalarFieldEnum]


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


  export type VerbWhereInput = {
    AND?: VerbWhereInput | VerbWhereInput[]
    OR?: VerbWhereInput[]
    NOT?: VerbWhereInput | VerbWhereInput[]
    id?: IntFilter<"Verb"> | number
    englishVerb?: StringFilter<"Verb"> | string
    englishSentence?: StringFilter<"Verb"> | string
    present?: PresentListRelationFilter
    presentPerfect?: PresentPerfectListRelationFilter
    past?: PastListRelationFilter
    pastPerfect?: PastPerfectListRelationFilter
    future?: FutureListRelationFilter
    futurePerfect?: FuturePerfectListRelationFilter
  }

  export type VerbOrderByWithRelationInput = {
    id?: SortOrder
    englishVerb?: SortOrder
    englishSentence?: SortOrder
    present?: PresentOrderByRelationAggregateInput
    presentPerfect?: PresentPerfectOrderByRelationAggregateInput
    past?: PastOrderByRelationAggregateInput
    pastPerfect?: PastPerfectOrderByRelationAggregateInput
    future?: FutureOrderByRelationAggregateInput
    futurePerfect?: FuturePerfectOrderByRelationAggregateInput
  }

  export type VerbWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VerbWhereInput | VerbWhereInput[]
    OR?: VerbWhereInput[]
    NOT?: VerbWhereInput | VerbWhereInput[]
    englishVerb?: StringFilter<"Verb"> | string
    englishSentence?: StringFilter<"Verb"> | string
    present?: PresentListRelationFilter
    presentPerfect?: PresentPerfectListRelationFilter
    past?: PastListRelationFilter
    pastPerfect?: PastPerfectListRelationFilter
    future?: FutureListRelationFilter
    futurePerfect?: FuturePerfectListRelationFilter
  }, "id">

  export type VerbOrderByWithAggregationInput = {
    id?: SortOrder
    englishVerb?: SortOrder
    englishSentence?: SortOrder
    _count?: VerbCountOrderByAggregateInput
    _avg?: VerbAvgOrderByAggregateInput
    _max?: VerbMaxOrderByAggregateInput
    _min?: VerbMinOrderByAggregateInput
    _sum?: VerbSumOrderByAggregateInput
  }

  export type VerbScalarWhereWithAggregatesInput = {
    AND?: VerbScalarWhereWithAggregatesInput | VerbScalarWhereWithAggregatesInput[]
    OR?: VerbScalarWhereWithAggregatesInput[]
    NOT?: VerbScalarWhereWithAggregatesInput | VerbScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Verb"> | number
    englishVerb?: StringWithAggregatesFilter<"Verb"> | string
    englishSentence?: StringWithAggregatesFilter<"Verb"> | string
  }

  export type PresentWhereInput = {
    AND?: PresentWhereInput | PresentWhereInput[]
    OR?: PresentWhereInput[]
    NOT?: PresentWhereInput | PresentWhereInput[]
    id?: IntFilter<"Present"> | number
    verbId?: IntFilter<"Present"> | number
    germanVerb?: StringFilter<"Present"> | string
    germanSentence?: StringFilter<"Present"> | string
    audio?: StringFilter<"Present"> | string
    verb?: XOR<VerbScalarRelationFilter, VerbWhereInput>
  }

  export type PresentOrderByWithRelationInput = {
    id?: SortOrder
    verbId?: SortOrder
    germanVerb?: SortOrder
    germanSentence?: SortOrder
    audio?: SortOrder
    verb?: VerbOrderByWithRelationInput
  }

  export type PresentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PresentWhereInput | PresentWhereInput[]
    OR?: PresentWhereInput[]
    NOT?: PresentWhereInput | PresentWhereInput[]
    verbId?: IntFilter<"Present"> | number
    germanVerb?: StringFilter<"Present"> | string
    germanSentence?: StringFilter<"Present"> | string
    audio?: StringFilter<"Present"> | string
    verb?: XOR<VerbScalarRelationFilter, VerbWhereInput>
  }, "id">

  export type PresentOrderByWithAggregationInput = {
    id?: SortOrder
    verbId?: SortOrder
    germanVerb?: SortOrder
    germanSentence?: SortOrder
    audio?: SortOrder
    _count?: PresentCountOrderByAggregateInput
    _avg?: PresentAvgOrderByAggregateInput
    _max?: PresentMaxOrderByAggregateInput
    _min?: PresentMinOrderByAggregateInput
    _sum?: PresentSumOrderByAggregateInput
  }

  export type PresentScalarWhereWithAggregatesInput = {
    AND?: PresentScalarWhereWithAggregatesInput | PresentScalarWhereWithAggregatesInput[]
    OR?: PresentScalarWhereWithAggregatesInput[]
    NOT?: PresentScalarWhereWithAggregatesInput | PresentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Present"> | number
    verbId?: IntWithAggregatesFilter<"Present"> | number
    germanVerb?: StringWithAggregatesFilter<"Present"> | string
    germanSentence?: StringWithAggregatesFilter<"Present"> | string
    audio?: StringWithAggregatesFilter<"Present"> | string
  }

  export type PresentPerfectWhereInput = {
    AND?: PresentPerfectWhereInput | PresentPerfectWhereInput[]
    OR?: PresentPerfectWhereInput[]
    NOT?: PresentPerfectWhereInput | PresentPerfectWhereInput[]
    id?: IntFilter<"PresentPerfect"> | number
    verbId?: IntFilter<"PresentPerfect"> | number
    germanVerb?: StringFilter<"PresentPerfect"> | string
    germanSentence?: StringFilter<"PresentPerfect"> | string
    audio?: StringFilter<"PresentPerfect"> | string
    verb?: XOR<VerbScalarRelationFilter, VerbWhereInput>
  }

  export type PresentPerfectOrderByWithRelationInput = {
    id?: SortOrder
    verbId?: SortOrder
    germanVerb?: SortOrder
    germanSentence?: SortOrder
    audio?: SortOrder
    verb?: VerbOrderByWithRelationInput
  }

  export type PresentPerfectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PresentPerfectWhereInput | PresentPerfectWhereInput[]
    OR?: PresentPerfectWhereInput[]
    NOT?: PresentPerfectWhereInput | PresentPerfectWhereInput[]
    verbId?: IntFilter<"PresentPerfect"> | number
    germanVerb?: StringFilter<"PresentPerfect"> | string
    germanSentence?: StringFilter<"PresentPerfect"> | string
    audio?: StringFilter<"PresentPerfect"> | string
    verb?: XOR<VerbScalarRelationFilter, VerbWhereInput>
  }, "id">

  export type PresentPerfectOrderByWithAggregationInput = {
    id?: SortOrder
    verbId?: SortOrder
    germanVerb?: SortOrder
    germanSentence?: SortOrder
    audio?: SortOrder
    _count?: PresentPerfectCountOrderByAggregateInput
    _avg?: PresentPerfectAvgOrderByAggregateInput
    _max?: PresentPerfectMaxOrderByAggregateInput
    _min?: PresentPerfectMinOrderByAggregateInput
    _sum?: PresentPerfectSumOrderByAggregateInput
  }

  export type PresentPerfectScalarWhereWithAggregatesInput = {
    AND?: PresentPerfectScalarWhereWithAggregatesInput | PresentPerfectScalarWhereWithAggregatesInput[]
    OR?: PresentPerfectScalarWhereWithAggregatesInput[]
    NOT?: PresentPerfectScalarWhereWithAggregatesInput | PresentPerfectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PresentPerfect"> | number
    verbId?: IntWithAggregatesFilter<"PresentPerfect"> | number
    germanVerb?: StringWithAggregatesFilter<"PresentPerfect"> | string
    germanSentence?: StringWithAggregatesFilter<"PresentPerfect"> | string
    audio?: StringWithAggregatesFilter<"PresentPerfect"> | string
  }

  export type PastWhereInput = {
    AND?: PastWhereInput | PastWhereInput[]
    OR?: PastWhereInput[]
    NOT?: PastWhereInput | PastWhereInput[]
    id?: IntFilter<"Past"> | number
    verbId?: IntFilter<"Past"> | number
    germanVerb?: StringFilter<"Past"> | string
    germanSentence?: StringFilter<"Past"> | string
    audio?: StringFilter<"Past"> | string
    verb?: XOR<VerbScalarRelationFilter, VerbWhereInput>
  }

  export type PastOrderByWithRelationInput = {
    id?: SortOrder
    verbId?: SortOrder
    germanVerb?: SortOrder
    germanSentence?: SortOrder
    audio?: SortOrder
    verb?: VerbOrderByWithRelationInput
  }

  export type PastWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PastWhereInput | PastWhereInput[]
    OR?: PastWhereInput[]
    NOT?: PastWhereInput | PastWhereInput[]
    verbId?: IntFilter<"Past"> | number
    germanVerb?: StringFilter<"Past"> | string
    germanSentence?: StringFilter<"Past"> | string
    audio?: StringFilter<"Past"> | string
    verb?: XOR<VerbScalarRelationFilter, VerbWhereInput>
  }, "id">

  export type PastOrderByWithAggregationInput = {
    id?: SortOrder
    verbId?: SortOrder
    germanVerb?: SortOrder
    germanSentence?: SortOrder
    audio?: SortOrder
    _count?: PastCountOrderByAggregateInput
    _avg?: PastAvgOrderByAggregateInput
    _max?: PastMaxOrderByAggregateInput
    _min?: PastMinOrderByAggregateInput
    _sum?: PastSumOrderByAggregateInput
  }

  export type PastScalarWhereWithAggregatesInput = {
    AND?: PastScalarWhereWithAggregatesInput | PastScalarWhereWithAggregatesInput[]
    OR?: PastScalarWhereWithAggregatesInput[]
    NOT?: PastScalarWhereWithAggregatesInput | PastScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Past"> | number
    verbId?: IntWithAggregatesFilter<"Past"> | number
    germanVerb?: StringWithAggregatesFilter<"Past"> | string
    germanSentence?: StringWithAggregatesFilter<"Past"> | string
    audio?: StringWithAggregatesFilter<"Past"> | string
  }

  export type PastPerfectWhereInput = {
    AND?: PastPerfectWhereInput | PastPerfectWhereInput[]
    OR?: PastPerfectWhereInput[]
    NOT?: PastPerfectWhereInput | PastPerfectWhereInput[]
    id?: IntFilter<"PastPerfect"> | number
    verbId?: IntFilter<"PastPerfect"> | number
    germanVerb?: StringFilter<"PastPerfect"> | string
    germanSentence?: StringFilter<"PastPerfect"> | string
    audio?: StringFilter<"PastPerfect"> | string
    verb?: XOR<VerbScalarRelationFilter, VerbWhereInput>
  }

  export type PastPerfectOrderByWithRelationInput = {
    id?: SortOrder
    verbId?: SortOrder
    germanVerb?: SortOrder
    germanSentence?: SortOrder
    audio?: SortOrder
    verb?: VerbOrderByWithRelationInput
  }

  export type PastPerfectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PastPerfectWhereInput | PastPerfectWhereInput[]
    OR?: PastPerfectWhereInput[]
    NOT?: PastPerfectWhereInput | PastPerfectWhereInput[]
    verbId?: IntFilter<"PastPerfect"> | number
    germanVerb?: StringFilter<"PastPerfect"> | string
    germanSentence?: StringFilter<"PastPerfect"> | string
    audio?: StringFilter<"PastPerfect"> | string
    verb?: XOR<VerbScalarRelationFilter, VerbWhereInput>
  }, "id">

  export type PastPerfectOrderByWithAggregationInput = {
    id?: SortOrder
    verbId?: SortOrder
    germanVerb?: SortOrder
    germanSentence?: SortOrder
    audio?: SortOrder
    _count?: PastPerfectCountOrderByAggregateInput
    _avg?: PastPerfectAvgOrderByAggregateInput
    _max?: PastPerfectMaxOrderByAggregateInput
    _min?: PastPerfectMinOrderByAggregateInput
    _sum?: PastPerfectSumOrderByAggregateInput
  }

  export type PastPerfectScalarWhereWithAggregatesInput = {
    AND?: PastPerfectScalarWhereWithAggregatesInput | PastPerfectScalarWhereWithAggregatesInput[]
    OR?: PastPerfectScalarWhereWithAggregatesInput[]
    NOT?: PastPerfectScalarWhereWithAggregatesInput | PastPerfectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PastPerfect"> | number
    verbId?: IntWithAggregatesFilter<"PastPerfect"> | number
    germanVerb?: StringWithAggregatesFilter<"PastPerfect"> | string
    germanSentence?: StringWithAggregatesFilter<"PastPerfect"> | string
    audio?: StringWithAggregatesFilter<"PastPerfect"> | string
  }

  export type FutureWhereInput = {
    AND?: FutureWhereInput | FutureWhereInput[]
    OR?: FutureWhereInput[]
    NOT?: FutureWhereInput | FutureWhereInput[]
    id?: IntFilter<"Future"> | number
    verbId?: IntFilter<"Future"> | number
    germanVerb?: StringFilter<"Future"> | string
    germanSentence?: StringFilter<"Future"> | string
    audio?: StringFilter<"Future"> | string
    verb?: XOR<VerbScalarRelationFilter, VerbWhereInput>
  }

  export type FutureOrderByWithRelationInput = {
    id?: SortOrder
    verbId?: SortOrder
    germanVerb?: SortOrder
    germanSentence?: SortOrder
    audio?: SortOrder
    verb?: VerbOrderByWithRelationInput
  }

  export type FutureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FutureWhereInput | FutureWhereInput[]
    OR?: FutureWhereInput[]
    NOT?: FutureWhereInput | FutureWhereInput[]
    verbId?: IntFilter<"Future"> | number
    germanVerb?: StringFilter<"Future"> | string
    germanSentence?: StringFilter<"Future"> | string
    audio?: StringFilter<"Future"> | string
    verb?: XOR<VerbScalarRelationFilter, VerbWhereInput>
  }, "id">

  export type FutureOrderByWithAggregationInput = {
    id?: SortOrder
    verbId?: SortOrder
    germanVerb?: SortOrder
    germanSentence?: SortOrder
    audio?: SortOrder
    _count?: FutureCountOrderByAggregateInput
    _avg?: FutureAvgOrderByAggregateInput
    _max?: FutureMaxOrderByAggregateInput
    _min?: FutureMinOrderByAggregateInput
    _sum?: FutureSumOrderByAggregateInput
  }

  export type FutureScalarWhereWithAggregatesInput = {
    AND?: FutureScalarWhereWithAggregatesInput | FutureScalarWhereWithAggregatesInput[]
    OR?: FutureScalarWhereWithAggregatesInput[]
    NOT?: FutureScalarWhereWithAggregatesInput | FutureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Future"> | number
    verbId?: IntWithAggregatesFilter<"Future"> | number
    germanVerb?: StringWithAggregatesFilter<"Future"> | string
    germanSentence?: StringWithAggregatesFilter<"Future"> | string
    audio?: StringWithAggregatesFilter<"Future"> | string
  }

  export type FuturePerfectWhereInput = {
    AND?: FuturePerfectWhereInput | FuturePerfectWhereInput[]
    OR?: FuturePerfectWhereInput[]
    NOT?: FuturePerfectWhereInput | FuturePerfectWhereInput[]
    id?: IntFilter<"FuturePerfect"> | number
    verbId?: IntFilter<"FuturePerfect"> | number
    germanVerb?: StringFilter<"FuturePerfect"> | string
    germanSentence?: StringFilter<"FuturePerfect"> | string
    audio?: StringFilter<"FuturePerfect"> | string
    verb?: XOR<VerbScalarRelationFilter, VerbWhereInput>
  }

  export type FuturePerfectOrderByWithRelationInput = {
    id?: SortOrder
    verbId?: SortOrder
    germanVerb?: SortOrder
    germanSentence?: SortOrder
    audio?: SortOrder
    verb?: VerbOrderByWithRelationInput
  }

  export type FuturePerfectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FuturePerfectWhereInput | FuturePerfectWhereInput[]
    OR?: FuturePerfectWhereInput[]
    NOT?: FuturePerfectWhereInput | FuturePerfectWhereInput[]
    verbId?: IntFilter<"FuturePerfect"> | number
    germanVerb?: StringFilter<"FuturePerfect"> | string
    germanSentence?: StringFilter<"FuturePerfect"> | string
    audio?: StringFilter<"FuturePerfect"> | string
    verb?: XOR<VerbScalarRelationFilter, VerbWhereInput>
  }, "id">

  export type FuturePerfectOrderByWithAggregationInput = {
    id?: SortOrder
    verbId?: SortOrder
    germanVerb?: SortOrder
    germanSentence?: SortOrder
    audio?: SortOrder
    _count?: FuturePerfectCountOrderByAggregateInput
    _avg?: FuturePerfectAvgOrderByAggregateInput
    _max?: FuturePerfectMaxOrderByAggregateInput
    _min?: FuturePerfectMinOrderByAggregateInput
    _sum?: FuturePerfectSumOrderByAggregateInput
  }

  export type FuturePerfectScalarWhereWithAggregatesInput = {
    AND?: FuturePerfectScalarWhereWithAggregatesInput | FuturePerfectScalarWhereWithAggregatesInput[]
    OR?: FuturePerfectScalarWhereWithAggregatesInput[]
    NOT?: FuturePerfectScalarWhereWithAggregatesInput | FuturePerfectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FuturePerfect"> | number
    verbId?: IntWithAggregatesFilter<"FuturePerfect"> | number
    germanVerb?: StringWithAggregatesFilter<"FuturePerfect"> | string
    germanSentence?: StringWithAggregatesFilter<"FuturePerfect"> | string
    audio?: StringWithAggregatesFilter<"FuturePerfect"> | string
  }

  export type VerbCreateInput = {
    englishVerb: string
    englishSentence: string
    present?: PresentCreateNestedManyWithoutVerbInput
    presentPerfect?: PresentPerfectCreateNestedManyWithoutVerbInput
    past?: PastCreateNestedManyWithoutVerbInput
    pastPerfect?: PastPerfectCreateNestedManyWithoutVerbInput
    future?: FutureCreateNestedManyWithoutVerbInput
    futurePerfect?: FuturePerfectCreateNestedManyWithoutVerbInput
  }

  export type VerbUncheckedCreateInput = {
    id?: number
    englishVerb: string
    englishSentence: string
    present?: PresentUncheckedCreateNestedManyWithoutVerbInput
    presentPerfect?: PresentPerfectUncheckedCreateNestedManyWithoutVerbInput
    past?: PastUncheckedCreateNestedManyWithoutVerbInput
    pastPerfect?: PastPerfectUncheckedCreateNestedManyWithoutVerbInput
    future?: FutureUncheckedCreateNestedManyWithoutVerbInput
    futurePerfect?: FuturePerfectUncheckedCreateNestedManyWithoutVerbInput
  }

  export type VerbUpdateInput = {
    englishVerb?: StringFieldUpdateOperationsInput | string
    englishSentence?: StringFieldUpdateOperationsInput | string
    present?: PresentUpdateManyWithoutVerbNestedInput
    presentPerfect?: PresentPerfectUpdateManyWithoutVerbNestedInput
    past?: PastUpdateManyWithoutVerbNestedInput
    pastPerfect?: PastPerfectUpdateManyWithoutVerbNestedInput
    future?: FutureUpdateManyWithoutVerbNestedInput
    futurePerfect?: FuturePerfectUpdateManyWithoutVerbNestedInput
  }

  export type VerbUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    englishVerb?: StringFieldUpdateOperationsInput | string
    englishSentence?: StringFieldUpdateOperationsInput | string
    present?: PresentUncheckedUpdateManyWithoutVerbNestedInput
    presentPerfect?: PresentPerfectUncheckedUpdateManyWithoutVerbNestedInput
    past?: PastUncheckedUpdateManyWithoutVerbNestedInput
    pastPerfect?: PastPerfectUncheckedUpdateManyWithoutVerbNestedInput
    future?: FutureUncheckedUpdateManyWithoutVerbNestedInput
    futurePerfect?: FuturePerfectUncheckedUpdateManyWithoutVerbNestedInput
  }

  export type VerbCreateManyInput = {
    id?: number
    englishVerb: string
    englishSentence: string
  }

  export type VerbUpdateManyMutationInput = {
    englishVerb?: StringFieldUpdateOperationsInput | string
    englishSentence?: StringFieldUpdateOperationsInput | string
  }

  export type VerbUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    englishVerb?: StringFieldUpdateOperationsInput | string
    englishSentence?: StringFieldUpdateOperationsInput | string
  }

  export type PresentCreateInput = {
    germanVerb: string
    germanSentence: string
    audio: string
    verb: VerbCreateNestedOneWithoutPresentInput
  }

  export type PresentUncheckedCreateInput = {
    id?: number
    verbId: number
    germanVerb: string
    germanSentence: string
    audio: string
  }

  export type PresentUpdateInput = {
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
    verb?: VerbUpdateOneRequiredWithoutPresentNestedInput
  }

  export type PresentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    verbId?: IntFieldUpdateOperationsInput | number
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type PresentCreateManyInput = {
    id?: number
    verbId: number
    germanVerb: string
    germanSentence: string
    audio: string
  }

  export type PresentUpdateManyMutationInput = {
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type PresentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    verbId?: IntFieldUpdateOperationsInput | number
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type PresentPerfectCreateInput = {
    germanVerb: string
    germanSentence: string
    audio: string
    verb: VerbCreateNestedOneWithoutPresentPerfectInput
  }

  export type PresentPerfectUncheckedCreateInput = {
    id?: number
    verbId: number
    germanVerb: string
    germanSentence: string
    audio: string
  }

  export type PresentPerfectUpdateInput = {
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
    verb?: VerbUpdateOneRequiredWithoutPresentPerfectNestedInput
  }

  export type PresentPerfectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    verbId?: IntFieldUpdateOperationsInput | number
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type PresentPerfectCreateManyInput = {
    id?: number
    verbId: number
    germanVerb: string
    germanSentence: string
    audio: string
  }

  export type PresentPerfectUpdateManyMutationInput = {
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type PresentPerfectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    verbId?: IntFieldUpdateOperationsInput | number
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type PastCreateInput = {
    germanVerb: string
    germanSentence: string
    audio: string
    verb: VerbCreateNestedOneWithoutPastInput
  }

  export type PastUncheckedCreateInput = {
    id?: number
    verbId: number
    germanVerb: string
    germanSentence: string
    audio: string
  }

  export type PastUpdateInput = {
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
    verb?: VerbUpdateOneRequiredWithoutPastNestedInput
  }

  export type PastUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    verbId?: IntFieldUpdateOperationsInput | number
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type PastCreateManyInput = {
    id?: number
    verbId: number
    germanVerb: string
    germanSentence: string
    audio: string
  }

  export type PastUpdateManyMutationInput = {
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type PastUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    verbId?: IntFieldUpdateOperationsInput | number
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type PastPerfectCreateInput = {
    germanVerb: string
    germanSentence: string
    audio: string
    verb: VerbCreateNestedOneWithoutPastPerfectInput
  }

  export type PastPerfectUncheckedCreateInput = {
    id?: number
    verbId: number
    germanVerb: string
    germanSentence: string
    audio: string
  }

  export type PastPerfectUpdateInput = {
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
    verb?: VerbUpdateOneRequiredWithoutPastPerfectNestedInput
  }

  export type PastPerfectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    verbId?: IntFieldUpdateOperationsInput | number
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type PastPerfectCreateManyInput = {
    id?: number
    verbId: number
    germanVerb: string
    germanSentence: string
    audio: string
  }

  export type PastPerfectUpdateManyMutationInput = {
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type PastPerfectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    verbId?: IntFieldUpdateOperationsInput | number
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type FutureCreateInput = {
    germanVerb: string
    germanSentence: string
    audio: string
    verb: VerbCreateNestedOneWithoutFutureInput
  }

  export type FutureUncheckedCreateInput = {
    id?: number
    verbId: number
    germanVerb: string
    germanSentence: string
    audio: string
  }

  export type FutureUpdateInput = {
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
    verb?: VerbUpdateOneRequiredWithoutFutureNestedInput
  }

  export type FutureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    verbId?: IntFieldUpdateOperationsInput | number
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type FutureCreateManyInput = {
    id?: number
    verbId: number
    germanVerb: string
    germanSentence: string
    audio: string
  }

  export type FutureUpdateManyMutationInput = {
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type FutureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    verbId?: IntFieldUpdateOperationsInput | number
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type FuturePerfectCreateInput = {
    germanVerb: string
    germanSentence: string
    audio: string
    verb: VerbCreateNestedOneWithoutFuturePerfectInput
  }

  export type FuturePerfectUncheckedCreateInput = {
    id?: number
    verbId: number
    germanVerb: string
    germanSentence: string
    audio: string
  }

  export type FuturePerfectUpdateInput = {
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
    verb?: VerbUpdateOneRequiredWithoutFuturePerfectNestedInput
  }

  export type FuturePerfectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    verbId?: IntFieldUpdateOperationsInput | number
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type FuturePerfectCreateManyInput = {
    id?: number
    verbId: number
    germanVerb: string
    germanSentence: string
    audio: string
  }

  export type FuturePerfectUpdateManyMutationInput = {
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type FuturePerfectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    verbId?: IntFieldUpdateOperationsInput | number
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
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

  export type PresentListRelationFilter = {
    every?: PresentWhereInput
    some?: PresentWhereInput
    none?: PresentWhereInput
  }

  export type PresentPerfectListRelationFilter = {
    every?: PresentPerfectWhereInput
    some?: PresentPerfectWhereInput
    none?: PresentPerfectWhereInput
  }

  export type PastListRelationFilter = {
    every?: PastWhereInput
    some?: PastWhereInput
    none?: PastWhereInput
  }

  export type PastPerfectListRelationFilter = {
    every?: PastPerfectWhereInput
    some?: PastPerfectWhereInput
    none?: PastPerfectWhereInput
  }

  export type FutureListRelationFilter = {
    every?: FutureWhereInput
    some?: FutureWhereInput
    none?: FutureWhereInput
  }

  export type FuturePerfectListRelationFilter = {
    every?: FuturePerfectWhereInput
    some?: FuturePerfectWhereInput
    none?: FuturePerfectWhereInput
  }

  export type PresentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PresentPerfectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PastOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PastPerfectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FutureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FuturePerfectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VerbCountOrderByAggregateInput = {
    id?: SortOrder
    englishVerb?: SortOrder
    englishSentence?: SortOrder
  }

  export type VerbAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VerbMaxOrderByAggregateInput = {
    id?: SortOrder
    englishVerb?: SortOrder
    englishSentence?: SortOrder
  }

  export type VerbMinOrderByAggregateInput = {
    id?: SortOrder
    englishVerb?: SortOrder
    englishSentence?: SortOrder
  }

  export type VerbSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type VerbScalarRelationFilter = {
    is?: VerbWhereInput
    isNot?: VerbWhereInput
  }

  export type PresentCountOrderByAggregateInput = {
    id?: SortOrder
    verbId?: SortOrder
    germanVerb?: SortOrder
    germanSentence?: SortOrder
    audio?: SortOrder
  }

  export type PresentAvgOrderByAggregateInput = {
    id?: SortOrder
    verbId?: SortOrder
  }

  export type PresentMaxOrderByAggregateInput = {
    id?: SortOrder
    verbId?: SortOrder
    germanVerb?: SortOrder
    germanSentence?: SortOrder
    audio?: SortOrder
  }

  export type PresentMinOrderByAggregateInput = {
    id?: SortOrder
    verbId?: SortOrder
    germanVerb?: SortOrder
    germanSentence?: SortOrder
    audio?: SortOrder
  }

  export type PresentSumOrderByAggregateInput = {
    id?: SortOrder
    verbId?: SortOrder
  }

  export type PresentPerfectCountOrderByAggregateInput = {
    id?: SortOrder
    verbId?: SortOrder
    germanVerb?: SortOrder
    germanSentence?: SortOrder
    audio?: SortOrder
  }

  export type PresentPerfectAvgOrderByAggregateInput = {
    id?: SortOrder
    verbId?: SortOrder
  }

  export type PresentPerfectMaxOrderByAggregateInput = {
    id?: SortOrder
    verbId?: SortOrder
    germanVerb?: SortOrder
    germanSentence?: SortOrder
    audio?: SortOrder
  }

  export type PresentPerfectMinOrderByAggregateInput = {
    id?: SortOrder
    verbId?: SortOrder
    germanVerb?: SortOrder
    germanSentence?: SortOrder
    audio?: SortOrder
  }

  export type PresentPerfectSumOrderByAggregateInput = {
    id?: SortOrder
    verbId?: SortOrder
  }

  export type PastCountOrderByAggregateInput = {
    id?: SortOrder
    verbId?: SortOrder
    germanVerb?: SortOrder
    germanSentence?: SortOrder
    audio?: SortOrder
  }

  export type PastAvgOrderByAggregateInput = {
    id?: SortOrder
    verbId?: SortOrder
  }

  export type PastMaxOrderByAggregateInput = {
    id?: SortOrder
    verbId?: SortOrder
    germanVerb?: SortOrder
    germanSentence?: SortOrder
    audio?: SortOrder
  }

  export type PastMinOrderByAggregateInput = {
    id?: SortOrder
    verbId?: SortOrder
    germanVerb?: SortOrder
    germanSentence?: SortOrder
    audio?: SortOrder
  }

  export type PastSumOrderByAggregateInput = {
    id?: SortOrder
    verbId?: SortOrder
  }

  export type PastPerfectCountOrderByAggregateInput = {
    id?: SortOrder
    verbId?: SortOrder
    germanVerb?: SortOrder
    germanSentence?: SortOrder
    audio?: SortOrder
  }

  export type PastPerfectAvgOrderByAggregateInput = {
    id?: SortOrder
    verbId?: SortOrder
  }

  export type PastPerfectMaxOrderByAggregateInput = {
    id?: SortOrder
    verbId?: SortOrder
    germanVerb?: SortOrder
    germanSentence?: SortOrder
    audio?: SortOrder
  }

  export type PastPerfectMinOrderByAggregateInput = {
    id?: SortOrder
    verbId?: SortOrder
    germanVerb?: SortOrder
    germanSentence?: SortOrder
    audio?: SortOrder
  }

  export type PastPerfectSumOrderByAggregateInput = {
    id?: SortOrder
    verbId?: SortOrder
  }

  export type FutureCountOrderByAggregateInput = {
    id?: SortOrder
    verbId?: SortOrder
    germanVerb?: SortOrder
    germanSentence?: SortOrder
    audio?: SortOrder
  }

  export type FutureAvgOrderByAggregateInput = {
    id?: SortOrder
    verbId?: SortOrder
  }

  export type FutureMaxOrderByAggregateInput = {
    id?: SortOrder
    verbId?: SortOrder
    germanVerb?: SortOrder
    germanSentence?: SortOrder
    audio?: SortOrder
  }

  export type FutureMinOrderByAggregateInput = {
    id?: SortOrder
    verbId?: SortOrder
    germanVerb?: SortOrder
    germanSentence?: SortOrder
    audio?: SortOrder
  }

  export type FutureSumOrderByAggregateInput = {
    id?: SortOrder
    verbId?: SortOrder
  }

  export type FuturePerfectCountOrderByAggregateInput = {
    id?: SortOrder
    verbId?: SortOrder
    germanVerb?: SortOrder
    germanSentence?: SortOrder
    audio?: SortOrder
  }

  export type FuturePerfectAvgOrderByAggregateInput = {
    id?: SortOrder
    verbId?: SortOrder
  }

  export type FuturePerfectMaxOrderByAggregateInput = {
    id?: SortOrder
    verbId?: SortOrder
    germanVerb?: SortOrder
    germanSentence?: SortOrder
    audio?: SortOrder
  }

  export type FuturePerfectMinOrderByAggregateInput = {
    id?: SortOrder
    verbId?: SortOrder
    germanVerb?: SortOrder
    germanSentence?: SortOrder
    audio?: SortOrder
  }

  export type FuturePerfectSumOrderByAggregateInput = {
    id?: SortOrder
    verbId?: SortOrder
  }

  export type PresentCreateNestedManyWithoutVerbInput = {
    create?: XOR<PresentCreateWithoutVerbInput, PresentUncheckedCreateWithoutVerbInput> | PresentCreateWithoutVerbInput[] | PresentUncheckedCreateWithoutVerbInput[]
    connectOrCreate?: PresentCreateOrConnectWithoutVerbInput | PresentCreateOrConnectWithoutVerbInput[]
    createMany?: PresentCreateManyVerbInputEnvelope
    connect?: PresentWhereUniqueInput | PresentWhereUniqueInput[]
  }

  export type PresentPerfectCreateNestedManyWithoutVerbInput = {
    create?: XOR<PresentPerfectCreateWithoutVerbInput, PresentPerfectUncheckedCreateWithoutVerbInput> | PresentPerfectCreateWithoutVerbInput[] | PresentPerfectUncheckedCreateWithoutVerbInput[]
    connectOrCreate?: PresentPerfectCreateOrConnectWithoutVerbInput | PresentPerfectCreateOrConnectWithoutVerbInput[]
    createMany?: PresentPerfectCreateManyVerbInputEnvelope
    connect?: PresentPerfectWhereUniqueInput | PresentPerfectWhereUniqueInput[]
  }

  export type PastCreateNestedManyWithoutVerbInput = {
    create?: XOR<PastCreateWithoutVerbInput, PastUncheckedCreateWithoutVerbInput> | PastCreateWithoutVerbInput[] | PastUncheckedCreateWithoutVerbInput[]
    connectOrCreate?: PastCreateOrConnectWithoutVerbInput | PastCreateOrConnectWithoutVerbInput[]
    createMany?: PastCreateManyVerbInputEnvelope
    connect?: PastWhereUniqueInput | PastWhereUniqueInput[]
  }

  export type PastPerfectCreateNestedManyWithoutVerbInput = {
    create?: XOR<PastPerfectCreateWithoutVerbInput, PastPerfectUncheckedCreateWithoutVerbInput> | PastPerfectCreateWithoutVerbInput[] | PastPerfectUncheckedCreateWithoutVerbInput[]
    connectOrCreate?: PastPerfectCreateOrConnectWithoutVerbInput | PastPerfectCreateOrConnectWithoutVerbInput[]
    createMany?: PastPerfectCreateManyVerbInputEnvelope
    connect?: PastPerfectWhereUniqueInput | PastPerfectWhereUniqueInput[]
  }

  export type FutureCreateNestedManyWithoutVerbInput = {
    create?: XOR<FutureCreateWithoutVerbInput, FutureUncheckedCreateWithoutVerbInput> | FutureCreateWithoutVerbInput[] | FutureUncheckedCreateWithoutVerbInput[]
    connectOrCreate?: FutureCreateOrConnectWithoutVerbInput | FutureCreateOrConnectWithoutVerbInput[]
    createMany?: FutureCreateManyVerbInputEnvelope
    connect?: FutureWhereUniqueInput | FutureWhereUniqueInput[]
  }

  export type FuturePerfectCreateNestedManyWithoutVerbInput = {
    create?: XOR<FuturePerfectCreateWithoutVerbInput, FuturePerfectUncheckedCreateWithoutVerbInput> | FuturePerfectCreateWithoutVerbInput[] | FuturePerfectUncheckedCreateWithoutVerbInput[]
    connectOrCreate?: FuturePerfectCreateOrConnectWithoutVerbInput | FuturePerfectCreateOrConnectWithoutVerbInput[]
    createMany?: FuturePerfectCreateManyVerbInputEnvelope
    connect?: FuturePerfectWhereUniqueInput | FuturePerfectWhereUniqueInput[]
  }

  export type PresentUncheckedCreateNestedManyWithoutVerbInput = {
    create?: XOR<PresentCreateWithoutVerbInput, PresentUncheckedCreateWithoutVerbInput> | PresentCreateWithoutVerbInput[] | PresentUncheckedCreateWithoutVerbInput[]
    connectOrCreate?: PresentCreateOrConnectWithoutVerbInput | PresentCreateOrConnectWithoutVerbInput[]
    createMany?: PresentCreateManyVerbInputEnvelope
    connect?: PresentWhereUniqueInput | PresentWhereUniqueInput[]
  }

  export type PresentPerfectUncheckedCreateNestedManyWithoutVerbInput = {
    create?: XOR<PresentPerfectCreateWithoutVerbInput, PresentPerfectUncheckedCreateWithoutVerbInput> | PresentPerfectCreateWithoutVerbInput[] | PresentPerfectUncheckedCreateWithoutVerbInput[]
    connectOrCreate?: PresentPerfectCreateOrConnectWithoutVerbInput | PresentPerfectCreateOrConnectWithoutVerbInput[]
    createMany?: PresentPerfectCreateManyVerbInputEnvelope
    connect?: PresentPerfectWhereUniqueInput | PresentPerfectWhereUniqueInput[]
  }

  export type PastUncheckedCreateNestedManyWithoutVerbInput = {
    create?: XOR<PastCreateWithoutVerbInput, PastUncheckedCreateWithoutVerbInput> | PastCreateWithoutVerbInput[] | PastUncheckedCreateWithoutVerbInput[]
    connectOrCreate?: PastCreateOrConnectWithoutVerbInput | PastCreateOrConnectWithoutVerbInput[]
    createMany?: PastCreateManyVerbInputEnvelope
    connect?: PastWhereUniqueInput | PastWhereUniqueInput[]
  }

  export type PastPerfectUncheckedCreateNestedManyWithoutVerbInput = {
    create?: XOR<PastPerfectCreateWithoutVerbInput, PastPerfectUncheckedCreateWithoutVerbInput> | PastPerfectCreateWithoutVerbInput[] | PastPerfectUncheckedCreateWithoutVerbInput[]
    connectOrCreate?: PastPerfectCreateOrConnectWithoutVerbInput | PastPerfectCreateOrConnectWithoutVerbInput[]
    createMany?: PastPerfectCreateManyVerbInputEnvelope
    connect?: PastPerfectWhereUniqueInput | PastPerfectWhereUniqueInput[]
  }

  export type FutureUncheckedCreateNestedManyWithoutVerbInput = {
    create?: XOR<FutureCreateWithoutVerbInput, FutureUncheckedCreateWithoutVerbInput> | FutureCreateWithoutVerbInput[] | FutureUncheckedCreateWithoutVerbInput[]
    connectOrCreate?: FutureCreateOrConnectWithoutVerbInput | FutureCreateOrConnectWithoutVerbInput[]
    createMany?: FutureCreateManyVerbInputEnvelope
    connect?: FutureWhereUniqueInput | FutureWhereUniqueInput[]
  }

  export type FuturePerfectUncheckedCreateNestedManyWithoutVerbInput = {
    create?: XOR<FuturePerfectCreateWithoutVerbInput, FuturePerfectUncheckedCreateWithoutVerbInput> | FuturePerfectCreateWithoutVerbInput[] | FuturePerfectUncheckedCreateWithoutVerbInput[]
    connectOrCreate?: FuturePerfectCreateOrConnectWithoutVerbInput | FuturePerfectCreateOrConnectWithoutVerbInput[]
    createMany?: FuturePerfectCreateManyVerbInputEnvelope
    connect?: FuturePerfectWhereUniqueInput | FuturePerfectWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PresentUpdateManyWithoutVerbNestedInput = {
    create?: XOR<PresentCreateWithoutVerbInput, PresentUncheckedCreateWithoutVerbInput> | PresentCreateWithoutVerbInput[] | PresentUncheckedCreateWithoutVerbInput[]
    connectOrCreate?: PresentCreateOrConnectWithoutVerbInput | PresentCreateOrConnectWithoutVerbInput[]
    upsert?: PresentUpsertWithWhereUniqueWithoutVerbInput | PresentUpsertWithWhereUniqueWithoutVerbInput[]
    createMany?: PresentCreateManyVerbInputEnvelope
    set?: PresentWhereUniqueInput | PresentWhereUniqueInput[]
    disconnect?: PresentWhereUniqueInput | PresentWhereUniqueInput[]
    delete?: PresentWhereUniqueInput | PresentWhereUniqueInput[]
    connect?: PresentWhereUniqueInput | PresentWhereUniqueInput[]
    update?: PresentUpdateWithWhereUniqueWithoutVerbInput | PresentUpdateWithWhereUniqueWithoutVerbInput[]
    updateMany?: PresentUpdateManyWithWhereWithoutVerbInput | PresentUpdateManyWithWhereWithoutVerbInput[]
    deleteMany?: PresentScalarWhereInput | PresentScalarWhereInput[]
  }

  export type PresentPerfectUpdateManyWithoutVerbNestedInput = {
    create?: XOR<PresentPerfectCreateWithoutVerbInput, PresentPerfectUncheckedCreateWithoutVerbInput> | PresentPerfectCreateWithoutVerbInput[] | PresentPerfectUncheckedCreateWithoutVerbInput[]
    connectOrCreate?: PresentPerfectCreateOrConnectWithoutVerbInput | PresentPerfectCreateOrConnectWithoutVerbInput[]
    upsert?: PresentPerfectUpsertWithWhereUniqueWithoutVerbInput | PresentPerfectUpsertWithWhereUniqueWithoutVerbInput[]
    createMany?: PresentPerfectCreateManyVerbInputEnvelope
    set?: PresentPerfectWhereUniqueInput | PresentPerfectWhereUniqueInput[]
    disconnect?: PresentPerfectWhereUniqueInput | PresentPerfectWhereUniqueInput[]
    delete?: PresentPerfectWhereUniqueInput | PresentPerfectWhereUniqueInput[]
    connect?: PresentPerfectWhereUniqueInput | PresentPerfectWhereUniqueInput[]
    update?: PresentPerfectUpdateWithWhereUniqueWithoutVerbInput | PresentPerfectUpdateWithWhereUniqueWithoutVerbInput[]
    updateMany?: PresentPerfectUpdateManyWithWhereWithoutVerbInput | PresentPerfectUpdateManyWithWhereWithoutVerbInput[]
    deleteMany?: PresentPerfectScalarWhereInput | PresentPerfectScalarWhereInput[]
  }

  export type PastUpdateManyWithoutVerbNestedInput = {
    create?: XOR<PastCreateWithoutVerbInput, PastUncheckedCreateWithoutVerbInput> | PastCreateWithoutVerbInput[] | PastUncheckedCreateWithoutVerbInput[]
    connectOrCreate?: PastCreateOrConnectWithoutVerbInput | PastCreateOrConnectWithoutVerbInput[]
    upsert?: PastUpsertWithWhereUniqueWithoutVerbInput | PastUpsertWithWhereUniqueWithoutVerbInput[]
    createMany?: PastCreateManyVerbInputEnvelope
    set?: PastWhereUniqueInput | PastWhereUniqueInput[]
    disconnect?: PastWhereUniqueInput | PastWhereUniqueInput[]
    delete?: PastWhereUniqueInput | PastWhereUniqueInput[]
    connect?: PastWhereUniqueInput | PastWhereUniqueInput[]
    update?: PastUpdateWithWhereUniqueWithoutVerbInput | PastUpdateWithWhereUniqueWithoutVerbInput[]
    updateMany?: PastUpdateManyWithWhereWithoutVerbInput | PastUpdateManyWithWhereWithoutVerbInput[]
    deleteMany?: PastScalarWhereInput | PastScalarWhereInput[]
  }

  export type PastPerfectUpdateManyWithoutVerbNestedInput = {
    create?: XOR<PastPerfectCreateWithoutVerbInput, PastPerfectUncheckedCreateWithoutVerbInput> | PastPerfectCreateWithoutVerbInput[] | PastPerfectUncheckedCreateWithoutVerbInput[]
    connectOrCreate?: PastPerfectCreateOrConnectWithoutVerbInput | PastPerfectCreateOrConnectWithoutVerbInput[]
    upsert?: PastPerfectUpsertWithWhereUniqueWithoutVerbInput | PastPerfectUpsertWithWhereUniqueWithoutVerbInput[]
    createMany?: PastPerfectCreateManyVerbInputEnvelope
    set?: PastPerfectWhereUniqueInput | PastPerfectWhereUniqueInput[]
    disconnect?: PastPerfectWhereUniqueInput | PastPerfectWhereUniqueInput[]
    delete?: PastPerfectWhereUniqueInput | PastPerfectWhereUniqueInput[]
    connect?: PastPerfectWhereUniqueInput | PastPerfectWhereUniqueInput[]
    update?: PastPerfectUpdateWithWhereUniqueWithoutVerbInput | PastPerfectUpdateWithWhereUniqueWithoutVerbInput[]
    updateMany?: PastPerfectUpdateManyWithWhereWithoutVerbInput | PastPerfectUpdateManyWithWhereWithoutVerbInput[]
    deleteMany?: PastPerfectScalarWhereInput | PastPerfectScalarWhereInput[]
  }

  export type FutureUpdateManyWithoutVerbNestedInput = {
    create?: XOR<FutureCreateWithoutVerbInput, FutureUncheckedCreateWithoutVerbInput> | FutureCreateWithoutVerbInput[] | FutureUncheckedCreateWithoutVerbInput[]
    connectOrCreate?: FutureCreateOrConnectWithoutVerbInput | FutureCreateOrConnectWithoutVerbInput[]
    upsert?: FutureUpsertWithWhereUniqueWithoutVerbInput | FutureUpsertWithWhereUniqueWithoutVerbInput[]
    createMany?: FutureCreateManyVerbInputEnvelope
    set?: FutureWhereUniqueInput | FutureWhereUniqueInput[]
    disconnect?: FutureWhereUniqueInput | FutureWhereUniqueInput[]
    delete?: FutureWhereUniqueInput | FutureWhereUniqueInput[]
    connect?: FutureWhereUniqueInput | FutureWhereUniqueInput[]
    update?: FutureUpdateWithWhereUniqueWithoutVerbInput | FutureUpdateWithWhereUniqueWithoutVerbInput[]
    updateMany?: FutureUpdateManyWithWhereWithoutVerbInput | FutureUpdateManyWithWhereWithoutVerbInput[]
    deleteMany?: FutureScalarWhereInput | FutureScalarWhereInput[]
  }

  export type FuturePerfectUpdateManyWithoutVerbNestedInput = {
    create?: XOR<FuturePerfectCreateWithoutVerbInput, FuturePerfectUncheckedCreateWithoutVerbInput> | FuturePerfectCreateWithoutVerbInput[] | FuturePerfectUncheckedCreateWithoutVerbInput[]
    connectOrCreate?: FuturePerfectCreateOrConnectWithoutVerbInput | FuturePerfectCreateOrConnectWithoutVerbInput[]
    upsert?: FuturePerfectUpsertWithWhereUniqueWithoutVerbInput | FuturePerfectUpsertWithWhereUniqueWithoutVerbInput[]
    createMany?: FuturePerfectCreateManyVerbInputEnvelope
    set?: FuturePerfectWhereUniqueInput | FuturePerfectWhereUniqueInput[]
    disconnect?: FuturePerfectWhereUniqueInput | FuturePerfectWhereUniqueInput[]
    delete?: FuturePerfectWhereUniqueInput | FuturePerfectWhereUniqueInput[]
    connect?: FuturePerfectWhereUniqueInput | FuturePerfectWhereUniqueInput[]
    update?: FuturePerfectUpdateWithWhereUniqueWithoutVerbInput | FuturePerfectUpdateWithWhereUniqueWithoutVerbInput[]
    updateMany?: FuturePerfectUpdateManyWithWhereWithoutVerbInput | FuturePerfectUpdateManyWithWhereWithoutVerbInput[]
    deleteMany?: FuturePerfectScalarWhereInput | FuturePerfectScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PresentUncheckedUpdateManyWithoutVerbNestedInput = {
    create?: XOR<PresentCreateWithoutVerbInput, PresentUncheckedCreateWithoutVerbInput> | PresentCreateWithoutVerbInput[] | PresentUncheckedCreateWithoutVerbInput[]
    connectOrCreate?: PresentCreateOrConnectWithoutVerbInput | PresentCreateOrConnectWithoutVerbInput[]
    upsert?: PresentUpsertWithWhereUniqueWithoutVerbInput | PresentUpsertWithWhereUniqueWithoutVerbInput[]
    createMany?: PresentCreateManyVerbInputEnvelope
    set?: PresentWhereUniqueInput | PresentWhereUniqueInput[]
    disconnect?: PresentWhereUniqueInput | PresentWhereUniqueInput[]
    delete?: PresentWhereUniqueInput | PresentWhereUniqueInput[]
    connect?: PresentWhereUniqueInput | PresentWhereUniqueInput[]
    update?: PresentUpdateWithWhereUniqueWithoutVerbInput | PresentUpdateWithWhereUniqueWithoutVerbInput[]
    updateMany?: PresentUpdateManyWithWhereWithoutVerbInput | PresentUpdateManyWithWhereWithoutVerbInput[]
    deleteMany?: PresentScalarWhereInput | PresentScalarWhereInput[]
  }

  export type PresentPerfectUncheckedUpdateManyWithoutVerbNestedInput = {
    create?: XOR<PresentPerfectCreateWithoutVerbInput, PresentPerfectUncheckedCreateWithoutVerbInput> | PresentPerfectCreateWithoutVerbInput[] | PresentPerfectUncheckedCreateWithoutVerbInput[]
    connectOrCreate?: PresentPerfectCreateOrConnectWithoutVerbInput | PresentPerfectCreateOrConnectWithoutVerbInput[]
    upsert?: PresentPerfectUpsertWithWhereUniqueWithoutVerbInput | PresentPerfectUpsertWithWhereUniqueWithoutVerbInput[]
    createMany?: PresentPerfectCreateManyVerbInputEnvelope
    set?: PresentPerfectWhereUniqueInput | PresentPerfectWhereUniqueInput[]
    disconnect?: PresentPerfectWhereUniqueInput | PresentPerfectWhereUniqueInput[]
    delete?: PresentPerfectWhereUniqueInput | PresentPerfectWhereUniqueInput[]
    connect?: PresentPerfectWhereUniqueInput | PresentPerfectWhereUniqueInput[]
    update?: PresentPerfectUpdateWithWhereUniqueWithoutVerbInput | PresentPerfectUpdateWithWhereUniqueWithoutVerbInput[]
    updateMany?: PresentPerfectUpdateManyWithWhereWithoutVerbInput | PresentPerfectUpdateManyWithWhereWithoutVerbInput[]
    deleteMany?: PresentPerfectScalarWhereInput | PresentPerfectScalarWhereInput[]
  }

  export type PastUncheckedUpdateManyWithoutVerbNestedInput = {
    create?: XOR<PastCreateWithoutVerbInput, PastUncheckedCreateWithoutVerbInput> | PastCreateWithoutVerbInput[] | PastUncheckedCreateWithoutVerbInput[]
    connectOrCreate?: PastCreateOrConnectWithoutVerbInput | PastCreateOrConnectWithoutVerbInput[]
    upsert?: PastUpsertWithWhereUniqueWithoutVerbInput | PastUpsertWithWhereUniqueWithoutVerbInput[]
    createMany?: PastCreateManyVerbInputEnvelope
    set?: PastWhereUniqueInput | PastWhereUniqueInput[]
    disconnect?: PastWhereUniqueInput | PastWhereUniqueInput[]
    delete?: PastWhereUniqueInput | PastWhereUniqueInput[]
    connect?: PastWhereUniqueInput | PastWhereUniqueInput[]
    update?: PastUpdateWithWhereUniqueWithoutVerbInput | PastUpdateWithWhereUniqueWithoutVerbInput[]
    updateMany?: PastUpdateManyWithWhereWithoutVerbInput | PastUpdateManyWithWhereWithoutVerbInput[]
    deleteMany?: PastScalarWhereInput | PastScalarWhereInput[]
  }

  export type PastPerfectUncheckedUpdateManyWithoutVerbNestedInput = {
    create?: XOR<PastPerfectCreateWithoutVerbInput, PastPerfectUncheckedCreateWithoutVerbInput> | PastPerfectCreateWithoutVerbInput[] | PastPerfectUncheckedCreateWithoutVerbInput[]
    connectOrCreate?: PastPerfectCreateOrConnectWithoutVerbInput | PastPerfectCreateOrConnectWithoutVerbInput[]
    upsert?: PastPerfectUpsertWithWhereUniqueWithoutVerbInput | PastPerfectUpsertWithWhereUniqueWithoutVerbInput[]
    createMany?: PastPerfectCreateManyVerbInputEnvelope
    set?: PastPerfectWhereUniqueInput | PastPerfectWhereUniqueInput[]
    disconnect?: PastPerfectWhereUniqueInput | PastPerfectWhereUniqueInput[]
    delete?: PastPerfectWhereUniqueInput | PastPerfectWhereUniqueInput[]
    connect?: PastPerfectWhereUniqueInput | PastPerfectWhereUniqueInput[]
    update?: PastPerfectUpdateWithWhereUniqueWithoutVerbInput | PastPerfectUpdateWithWhereUniqueWithoutVerbInput[]
    updateMany?: PastPerfectUpdateManyWithWhereWithoutVerbInput | PastPerfectUpdateManyWithWhereWithoutVerbInput[]
    deleteMany?: PastPerfectScalarWhereInput | PastPerfectScalarWhereInput[]
  }

  export type FutureUncheckedUpdateManyWithoutVerbNestedInput = {
    create?: XOR<FutureCreateWithoutVerbInput, FutureUncheckedCreateWithoutVerbInput> | FutureCreateWithoutVerbInput[] | FutureUncheckedCreateWithoutVerbInput[]
    connectOrCreate?: FutureCreateOrConnectWithoutVerbInput | FutureCreateOrConnectWithoutVerbInput[]
    upsert?: FutureUpsertWithWhereUniqueWithoutVerbInput | FutureUpsertWithWhereUniqueWithoutVerbInput[]
    createMany?: FutureCreateManyVerbInputEnvelope
    set?: FutureWhereUniqueInput | FutureWhereUniqueInput[]
    disconnect?: FutureWhereUniqueInput | FutureWhereUniqueInput[]
    delete?: FutureWhereUniqueInput | FutureWhereUniqueInput[]
    connect?: FutureWhereUniqueInput | FutureWhereUniqueInput[]
    update?: FutureUpdateWithWhereUniqueWithoutVerbInput | FutureUpdateWithWhereUniqueWithoutVerbInput[]
    updateMany?: FutureUpdateManyWithWhereWithoutVerbInput | FutureUpdateManyWithWhereWithoutVerbInput[]
    deleteMany?: FutureScalarWhereInput | FutureScalarWhereInput[]
  }

  export type FuturePerfectUncheckedUpdateManyWithoutVerbNestedInput = {
    create?: XOR<FuturePerfectCreateWithoutVerbInput, FuturePerfectUncheckedCreateWithoutVerbInput> | FuturePerfectCreateWithoutVerbInput[] | FuturePerfectUncheckedCreateWithoutVerbInput[]
    connectOrCreate?: FuturePerfectCreateOrConnectWithoutVerbInput | FuturePerfectCreateOrConnectWithoutVerbInput[]
    upsert?: FuturePerfectUpsertWithWhereUniqueWithoutVerbInput | FuturePerfectUpsertWithWhereUniqueWithoutVerbInput[]
    createMany?: FuturePerfectCreateManyVerbInputEnvelope
    set?: FuturePerfectWhereUniqueInput | FuturePerfectWhereUniqueInput[]
    disconnect?: FuturePerfectWhereUniqueInput | FuturePerfectWhereUniqueInput[]
    delete?: FuturePerfectWhereUniqueInput | FuturePerfectWhereUniqueInput[]
    connect?: FuturePerfectWhereUniqueInput | FuturePerfectWhereUniqueInput[]
    update?: FuturePerfectUpdateWithWhereUniqueWithoutVerbInput | FuturePerfectUpdateWithWhereUniqueWithoutVerbInput[]
    updateMany?: FuturePerfectUpdateManyWithWhereWithoutVerbInput | FuturePerfectUpdateManyWithWhereWithoutVerbInput[]
    deleteMany?: FuturePerfectScalarWhereInput | FuturePerfectScalarWhereInput[]
  }

  export type VerbCreateNestedOneWithoutPresentInput = {
    create?: XOR<VerbCreateWithoutPresentInput, VerbUncheckedCreateWithoutPresentInput>
    connectOrCreate?: VerbCreateOrConnectWithoutPresentInput
    connect?: VerbWhereUniqueInput
  }

  export type VerbUpdateOneRequiredWithoutPresentNestedInput = {
    create?: XOR<VerbCreateWithoutPresentInput, VerbUncheckedCreateWithoutPresentInput>
    connectOrCreate?: VerbCreateOrConnectWithoutPresentInput
    upsert?: VerbUpsertWithoutPresentInput
    connect?: VerbWhereUniqueInput
    update?: XOR<XOR<VerbUpdateToOneWithWhereWithoutPresentInput, VerbUpdateWithoutPresentInput>, VerbUncheckedUpdateWithoutPresentInput>
  }

  export type VerbCreateNestedOneWithoutPresentPerfectInput = {
    create?: XOR<VerbCreateWithoutPresentPerfectInput, VerbUncheckedCreateWithoutPresentPerfectInput>
    connectOrCreate?: VerbCreateOrConnectWithoutPresentPerfectInput
    connect?: VerbWhereUniqueInput
  }

  export type VerbUpdateOneRequiredWithoutPresentPerfectNestedInput = {
    create?: XOR<VerbCreateWithoutPresentPerfectInput, VerbUncheckedCreateWithoutPresentPerfectInput>
    connectOrCreate?: VerbCreateOrConnectWithoutPresentPerfectInput
    upsert?: VerbUpsertWithoutPresentPerfectInput
    connect?: VerbWhereUniqueInput
    update?: XOR<XOR<VerbUpdateToOneWithWhereWithoutPresentPerfectInput, VerbUpdateWithoutPresentPerfectInput>, VerbUncheckedUpdateWithoutPresentPerfectInput>
  }

  export type VerbCreateNestedOneWithoutPastInput = {
    create?: XOR<VerbCreateWithoutPastInput, VerbUncheckedCreateWithoutPastInput>
    connectOrCreate?: VerbCreateOrConnectWithoutPastInput
    connect?: VerbWhereUniqueInput
  }

  export type VerbUpdateOneRequiredWithoutPastNestedInput = {
    create?: XOR<VerbCreateWithoutPastInput, VerbUncheckedCreateWithoutPastInput>
    connectOrCreate?: VerbCreateOrConnectWithoutPastInput
    upsert?: VerbUpsertWithoutPastInput
    connect?: VerbWhereUniqueInput
    update?: XOR<XOR<VerbUpdateToOneWithWhereWithoutPastInput, VerbUpdateWithoutPastInput>, VerbUncheckedUpdateWithoutPastInput>
  }

  export type VerbCreateNestedOneWithoutPastPerfectInput = {
    create?: XOR<VerbCreateWithoutPastPerfectInput, VerbUncheckedCreateWithoutPastPerfectInput>
    connectOrCreate?: VerbCreateOrConnectWithoutPastPerfectInput
    connect?: VerbWhereUniqueInput
  }

  export type VerbUpdateOneRequiredWithoutPastPerfectNestedInput = {
    create?: XOR<VerbCreateWithoutPastPerfectInput, VerbUncheckedCreateWithoutPastPerfectInput>
    connectOrCreate?: VerbCreateOrConnectWithoutPastPerfectInput
    upsert?: VerbUpsertWithoutPastPerfectInput
    connect?: VerbWhereUniqueInput
    update?: XOR<XOR<VerbUpdateToOneWithWhereWithoutPastPerfectInput, VerbUpdateWithoutPastPerfectInput>, VerbUncheckedUpdateWithoutPastPerfectInput>
  }

  export type VerbCreateNestedOneWithoutFutureInput = {
    create?: XOR<VerbCreateWithoutFutureInput, VerbUncheckedCreateWithoutFutureInput>
    connectOrCreate?: VerbCreateOrConnectWithoutFutureInput
    connect?: VerbWhereUniqueInput
  }

  export type VerbUpdateOneRequiredWithoutFutureNestedInput = {
    create?: XOR<VerbCreateWithoutFutureInput, VerbUncheckedCreateWithoutFutureInput>
    connectOrCreate?: VerbCreateOrConnectWithoutFutureInput
    upsert?: VerbUpsertWithoutFutureInput
    connect?: VerbWhereUniqueInput
    update?: XOR<XOR<VerbUpdateToOneWithWhereWithoutFutureInput, VerbUpdateWithoutFutureInput>, VerbUncheckedUpdateWithoutFutureInput>
  }

  export type VerbCreateNestedOneWithoutFuturePerfectInput = {
    create?: XOR<VerbCreateWithoutFuturePerfectInput, VerbUncheckedCreateWithoutFuturePerfectInput>
    connectOrCreate?: VerbCreateOrConnectWithoutFuturePerfectInput
    connect?: VerbWhereUniqueInput
  }

  export type VerbUpdateOneRequiredWithoutFuturePerfectNestedInput = {
    create?: XOR<VerbCreateWithoutFuturePerfectInput, VerbUncheckedCreateWithoutFuturePerfectInput>
    connectOrCreate?: VerbCreateOrConnectWithoutFuturePerfectInput
    upsert?: VerbUpsertWithoutFuturePerfectInput
    connect?: VerbWhereUniqueInput
    update?: XOR<XOR<VerbUpdateToOneWithWhereWithoutFuturePerfectInput, VerbUpdateWithoutFuturePerfectInput>, VerbUncheckedUpdateWithoutFuturePerfectInput>
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

  export type PresentCreateWithoutVerbInput = {
    germanVerb: string
    germanSentence: string
    audio: string
  }

  export type PresentUncheckedCreateWithoutVerbInput = {
    id?: number
    germanVerb: string
    germanSentence: string
    audio: string
  }

  export type PresentCreateOrConnectWithoutVerbInput = {
    where: PresentWhereUniqueInput
    create: XOR<PresentCreateWithoutVerbInput, PresentUncheckedCreateWithoutVerbInput>
  }

  export type PresentCreateManyVerbInputEnvelope = {
    data: PresentCreateManyVerbInput | PresentCreateManyVerbInput[]
    skipDuplicates?: boolean
  }

  export type PresentPerfectCreateWithoutVerbInput = {
    germanVerb: string
    germanSentence: string
    audio: string
  }

  export type PresentPerfectUncheckedCreateWithoutVerbInput = {
    id?: number
    germanVerb: string
    germanSentence: string
    audio: string
  }

  export type PresentPerfectCreateOrConnectWithoutVerbInput = {
    where: PresentPerfectWhereUniqueInput
    create: XOR<PresentPerfectCreateWithoutVerbInput, PresentPerfectUncheckedCreateWithoutVerbInput>
  }

  export type PresentPerfectCreateManyVerbInputEnvelope = {
    data: PresentPerfectCreateManyVerbInput | PresentPerfectCreateManyVerbInput[]
    skipDuplicates?: boolean
  }

  export type PastCreateWithoutVerbInput = {
    germanVerb: string
    germanSentence: string
    audio: string
  }

  export type PastUncheckedCreateWithoutVerbInput = {
    id?: number
    germanVerb: string
    germanSentence: string
    audio: string
  }

  export type PastCreateOrConnectWithoutVerbInput = {
    where: PastWhereUniqueInput
    create: XOR<PastCreateWithoutVerbInput, PastUncheckedCreateWithoutVerbInput>
  }

  export type PastCreateManyVerbInputEnvelope = {
    data: PastCreateManyVerbInput | PastCreateManyVerbInput[]
    skipDuplicates?: boolean
  }

  export type PastPerfectCreateWithoutVerbInput = {
    germanVerb: string
    germanSentence: string
    audio: string
  }

  export type PastPerfectUncheckedCreateWithoutVerbInput = {
    id?: number
    germanVerb: string
    germanSentence: string
    audio: string
  }

  export type PastPerfectCreateOrConnectWithoutVerbInput = {
    where: PastPerfectWhereUniqueInput
    create: XOR<PastPerfectCreateWithoutVerbInput, PastPerfectUncheckedCreateWithoutVerbInput>
  }

  export type PastPerfectCreateManyVerbInputEnvelope = {
    data: PastPerfectCreateManyVerbInput | PastPerfectCreateManyVerbInput[]
    skipDuplicates?: boolean
  }

  export type FutureCreateWithoutVerbInput = {
    germanVerb: string
    germanSentence: string
    audio: string
  }

  export type FutureUncheckedCreateWithoutVerbInput = {
    id?: number
    germanVerb: string
    germanSentence: string
    audio: string
  }

  export type FutureCreateOrConnectWithoutVerbInput = {
    where: FutureWhereUniqueInput
    create: XOR<FutureCreateWithoutVerbInput, FutureUncheckedCreateWithoutVerbInput>
  }

  export type FutureCreateManyVerbInputEnvelope = {
    data: FutureCreateManyVerbInput | FutureCreateManyVerbInput[]
    skipDuplicates?: boolean
  }

  export type FuturePerfectCreateWithoutVerbInput = {
    germanVerb: string
    germanSentence: string
    audio: string
  }

  export type FuturePerfectUncheckedCreateWithoutVerbInput = {
    id?: number
    germanVerb: string
    germanSentence: string
    audio: string
  }

  export type FuturePerfectCreateOrConnectWithoutVerbInput = {
    where: FuturePerfectWhereUniqueInput
    create: XOR<FuturePerfectCreateWithoutVerbInput, FuturePerfectUncheckedCreateWithoutVerbInput>
  }

  export type FuturePerfectCreateManyVerbInputEnvelope = {
    data: FuturePerfectCreateManyVerbInput | FuturePerfectCreateManyVerbInput[]
    skipDuplicates?: boolean
  }

  export type PresentUpsertWithWhereUniqueWithoutVerbInput = {
    where: PresentWhereUniqueInput
    update: XOR<PresentUpdateWithoutVerbInput, PresentUncheckedUpdateWithoutVerbInput>
    create: XOR<PresentCreateWithoutVerbInput, PresentUncheckedCreateWithoutVerbInput>
  }

  export type PresentUpdateWithWhereUniqueWithoutVerbInput = {
    where: PresentWhereUniqueInput
    data: XOR<PresentUpdateWithoutVerbInput, PresentUncheckedUpdateWithoutVerbInput>
  }

  export type PresentUpdateManyWithWhereWithoutVerbInput = {
    where: PresentScalarWhereInput
    data: XOR<PresentUpdateManyMutationInput, PresentUncheckedUpdateManyWithoutVerbInput>
  }

  export type PresentScalarWhereInput = {
    AND?: PresentScalarWhereInput | PresentScalarWhereInput[]
    OR?: PresentScalarWhereInput[]
    NOT?: PresentScalarWhereInput | PresentScalarWhereInput[]
    id?: IntFilter<"Present"> | number
    verbId?: IntFilter<"Present"> | number
    germanVerb?: StringFilter<"Present"> | string
    germanSentence?: StringFilter<"Present"> | string
    audio?: StringFilter<"Present"> | string
  }

  export type PresentPerfectUpsertWithWhereUniqueWithoutVerbInput = {
    where: PresentPerfectWhereUniqueInput
    update: XOR<PresentPerfectUpdateWithoutVerbInput, PresentPerfectUncheckedUpdateWithoutVerbInput>
    create: XOR<PresentPerfectCreateWithoutVerbInput, PresentPerfectUncheckedCreateWithoutVerbInput>
  }

  export type PresentPerfectUpdateWithWhereUniqueWithoutVerbInput = {
    where: PresentPerfectWhereUniqueInput
    data: XOR<PresentPerfectUpdateWithoutVerbInput, PresentPerfectUncheckedUpdateWithoutVerbInput>
  }

  export type PresentPerfectUpdateManyWithWhereWithoutVerbInput = {
    where: PresentPerfectScalarWhereInput
    data: XOR<PresentPerfectUpdateManyMutationInput, PresentPerfectUncheckedUpdateManyWithoutVerbInput>
  }

  export type PresentPerfectScalarWhereInput = {
    AND?: PresentPerfectScalarWhereInput | PresentPerfectScalarWhereInput[]
    OR?: PresentPerfectScalarWhereInput[]
    NOT?: PresentPerfectScalarWhereInput | PresentPerfectScalarWhereInput[]
    id?: IntFilter<"PresentPerfect"> | number
    verbId?: IntFilter<"PresentPerfect"> | number
    germanVerb?: StringFilter<"PresentPerfect"> | string
    germanSentence?: StringFilter<"PresentPerfect"> | string
    audio?: StringFilter<"PresentPerfect"> | string
  }

  export type PastUpsertWithWhereUniqueWithoutVerbInput = {
    where: PastWhereUniqueInput
    update: XOR<PastUpdateWithoutVerbInput, PastUncheckedUpdateWithoutVerbInput>
    create: XOR<PastCreateWithoutVerbInput, PastUncheckedCreateWithoutVerbInput>
  }

  export type PastUpdateWithWhereUniqueWithoutVerbInput = {
    where: PastWhereUniqueInput
    data: XOR<PastUpdateWithoutVerbInput, PastUncheckedUpdateWithoutVerbInput>
  }

  export type PastUpdateManyWithWhereWithoutVerbInput = {
    where: PastScalarWhereInput
    data: XOR<PastUpdateManyMutationInput, PastUncheckedUpdateManyWithoutVerbInput>
  }

  export type PastScalarWhereInput = {
    AND?: PastScalarWhereInput | PastScalarWhereInput[]
    OR?: PastScalarWhereInput[]
    NOT?: PastScalarWhereInput | PastScalarWhereInput[]
    id?: IntFilter<"Past"> | number
    verbId?: IntFilter<"Past"> | number
    germanVerb?: StringFilter<"Past"> | string
    germanSentence?: StringFilter<"Past"> | string
    audio?: StringFilter<"Past"> | string
  }

  export type PastPerfectUpsertWithWhereUniqueWithoutVerbInput = {
    where: PastPerfectWhereUniqueInput
    update: XOR<PastPerfectUpdateWithoutVerbInput, PastPerfectUncheckedUpdateWithoutVerbInput>
    create: XOR<PastPerfectCreateWithoutVerbInput, PastPerfectUncheckedCreateWithoutVerbInput>
  }

  export type PastPerfectUpdateWithWhereUniqueWithoutVerbInput = {
    where: PastPerfectWhereUniqueInput
    data: XOR<PastPerfectUpdateWithoutVerbInput, PastPerfectUncheckedUpdateWithoutVerbInput>
  }

  export type PastPerfectUpdateManyWithWhereWithoutVerbInput = {
    where: PastPerfectScalarWhereInput
    data: XOR<PastPerfectUpdateManyMutationInput, PastPerfectUncheckedUpdateManyWithoutVerbInput>
  }

  export type PastPerfectScalarWhereInput = {
    AND?: PastPerfectScalarWhereInput | PastPerfectScalarWhereInput[]
    OR?: PastPerfectScalarWhereInput[]
    NOT?: PastPerfectScalarWhereInput | PastPerfectScalarWhereInput[]
    id?: IntFilter<"PastPerfect"> | number
    verbId?: IntFilter<"PastPerfect"> | number
    germanVerb?: StringFilter<"PastPerfect"> | string
    germanSentence?: StringFilter<"PastPerfect"> | string
    audio?: StringFilter<"PastPerfect"> | string
  }

  export type FutureUpsertWithWhereUniqueWithoutVerbInput = {
    where: FutureWhereUniqueInput
    update: XOR<FutureUpdateWithoutVerbInput, FutureUncheckedUpdateWithoutVerbInput>
    create: XOR<FutureCreateWithoutVerbInput, FutureUncheckedCreateWithoutVerbInput>
  }

  export type FutureUpdateWithWhereUniqueWithoutVerbInput = {
    where: FutureWhereUniqueInput
    data: XOR<FutureUpdateWithoutVerbInput, FutureUncheckedUpdateWithoutVerbInput>
  }

  export type FutureUpdateManyWithWhereWithoutVerbInput = {
    where: FutureScalarWhereInput
    data: XOR<FutureUpdateManyMutationInput, FutureUncheckedUpdateManyWithoutVerbInput>
  }

  export type FutureScalarWhereInput = {
    AND?: FutureScalarWhereInput | FutureScalarWhereInput[]
    OR?: FutureScalarWhereInput[]
    NOT?: FutureScalarWhereInput | FutureScalarWhereInput[]
    id?: IntFilter<"Future"> | number
    verbId?: IntFilter<"Future"> | number
    germanVerb?: StringFilter<"Future"> | string
    germanSentence?: StringFilter<"Future"> | string
    audio?: StringFilter<"Future"> | string
  }

  export type FuturePerfectUpsertWithWhereUniqueWithoutVerbInput = {
    where: FuturePerfectWhereUniqueInput
    update: XOR<FuturePerfectUpdateWithoutVerbInput, FuturePerfectUncheckedUpdateWithoutVerbInput>
    create: XOR<FuturePerfectCreateWithoutVerbInput, FuturePerfectUncheckedCreateWithoutVerbInput>
  }

  export type FuturePerfectUpdateWithWhereUniqueWithoutVerbInput = {
    where: FuturePerfectWhereUniqueInput
    data: XOR<FuturePerfectUpdateWithoutVerbInput, FuturePerfectUncheckedUpdateWithoutVerbInput>
  }

  export type FuturePerfectUpdateManyWithWhereWithoutVerbInput = {
    where: FuturePerfectScalarWhereInput
    data: XOR<FuturePerfectUpdateManyMutationInput, FuturePerfectUncheckedUpdateManyWithoutVerbInput>
  }

  export type FuturePerfectScalarWhereInput = {
    AND?: FuturePerfectScalarWhereInput | FuturePerfectScalarWhereInput[]
    OR?: FuturePerfectScalarWhereInput[]
    NOT?: FuturePerfectScalarWhereInput | FuturePerfectScalarWhereInput[]
    id?: IntFilter<"FuturePerfect"> | number
    verbId?: IntFilter<"FuturePerfect"> | number
    germanVerb?: StringFilter<"FuturePerfect"> | string
    germanSentence?: StringFilter<"FuturePerfect"> | string
    audio?: StringFilter<"FuturePerfect"> | string
  }

  export type VerbCreateWithoutPresentInput = {
    englishVerb: string
    englishSentence: string
    presentPerfect?: PresentPerfectCreateNestedManyWithoutVerbInput
    past?: PastCreateNestedManyWithoutVerbInput
    pastPerfect?: PastPerfectCreateNestedManyWithoutVerbInput
    future?: FutureCreateNestedManyWithoutVerbInput
    futurePerfect?: FuturePerfectCreateNestedManyWithoutVerbInput
  }

  export type VerbUncheckedCreateWithoutPresentInput = {
    id?: number
    englishVerb: string
    englishSentence: string
    presentPerfect?: PresentPerfectUncheckedCreateNestedManyWithoutVerbInput
    past?: PastUncheckedCreateNestedManyWithoutVerbInput
    pastPerfect?: PastPerfectUncheckedCreateNestedManyWithoutVerbInput
    future?: FutureUncheckedCreateNestedManyWithoutVerbInput
    futurePerfect?: FuturePerfectUncheckedCreateNestedManyWithoutVerbInput
  }

  export type VerbCreateOrConnectWithoutPresentInput = {
    where: VerbWhereUniqueInput
    create: XOR<VerbCreateWithoutPresentInput, VerbUncheckedCreateWithoutPresentInput>
  }

  export type VerbUpsertWithoutPresentInput = {
    update: XOR<VerbUpdateWithoutPresentInput, VerbUncheckedUpdateWithoutPresentInput>
    create: XOR<VerbCreateWithoutPresentInput, VerbUncheckedCreateWithoutPresentInput>
    where?: VerbWhereInput
  }

  export type VerbUpdateToOneWithWhereWithoutPresentInput = {
    where?: VerbWhereInput
    data: XOR<VerbUpdateWithoutPresentInput, VerbUncheckedUpdateWithoutPresentInput>
  }

  export type VerbUpdateWithoutPresentInput = {
    englishVerb?: StringFieldUpdateOperationsInput | string
    englishSentence?: StringFieldUpdateOperationsInput | string
    presentPerfect?: PresentPerfectUpdateManyWithoutVerbNestedInput
    past?: PastUpdateManyWithoutVerbNestedInput
    pastPerfect?: PastPerfectUpdateManyWithoutVerbNestedInput
    future?: FutureUpdateManyWithoutVerbNestedInput
    futurePerfect?: FuturePerfectUpdateManyWithoutVerbNestedInput
  }

  export type VerbUncheckedUpdateWithoutPresentInput = {
    id?: IntFieldUpdateOperationsInput | number
    englishVerb?: StringFieldUpdateOperationsInput | string
    englishSentence?: StringFieldUpdateOperationsInput | string
    presentPerfect?: PresentPerfectUncheckedUpdateManyWithoutVerbNestedInput
    past?: PastUncheckedUpdateManyWithoutVerbNestedInput
    pastPerfect?: PastPerfectUncheckedUpdateManyWithoutVerbNestedInput
    future?: FutureUncheckedUpdateManyWithoutVerbNestedInput
    futurePerfect?: FuturePerfectUncheckedUpdateManyWithoutVerbNestedInput
  }

  export type VerbCreateWithoutPresentPerfectInput = {
    englishVerb: string
    englishSentence: string
    present?: PresentCreateNestedManyWithoutVerbInput
    past?: PastCreateNestedManyWithoutVerbInput
    pastPerfect?: PastPerfectCreateNestedManyWithoutVerbInput
    future?: FutureCreateNestedManyWithoutVerbInput
    futurePerfect?: FuturePerfectCreateNestedManyWithoutVerbInput
  }

  export type VerbUncheckedCreateWithoutPresentPerfectInput = {
    id?: number
    englishVerb: string
    englishSentence: string
    present?: PresentUncheckedCreateNestedManyWithoutVerbInput
    past?: PastUncheckedCreateNestedManyWithoutVerbInput
    pastPerfect?: PastPerfectUncheckedCreateNestedManyWithoutVerbInput
    future?: FutureUncheckedCreateNestedManyWithoutVerbInput
    futurePerfect?: FuturePerfectUncheckedCreateNestedManyWithoutVerbInput
  }

  export type VerbCreateOrConnectWithoutPresentPerfectInput = {
    where: VerbWhereUniqueInput
    create: XOR<VerbCreateWithoutPresentPerfectInput, VerbUncheckedCreateWithoutPresentPerfectInput>
  }

  export type VerbUpsertWithoutPresentPerfectInput = {
    update: XOR<VerbUpdateWithoutPresentPerfectInput, VerbUncheckedUpdateWithoutPresentPerfectInput>
    create: XOR<VerbCreateWithoutPresentPerfectInput, VerbUncheckedCreateWithoutPresentPerfectInput>
    where?: VerbWhereInput
  }

  export type VerbUpdateToOneWithWhereWithoutPresentPerfectInput = {
    where?: VerbWhereInput
    data: XOR<VerbUpdateWithoutPresentPerfectInput, VerbUncheckedUpdateWithoutPresentPerfectInput>
  }

  export type VerbUpdateWithoutPresentPerfectInput = {
    englishVerb?: StringFieldUpdateOperationsInput | string
    englishSentence?: StringFieldUpdateOperationsInput | string
    present?: PresentUpdateManyWithoutVerbNestedInput
    past?: PastUpdateManyWithoutVerbNestedInput
    pastPerfect?: PastPerfectUpdateManyWithoutVerbNestedInput
    future?: FutureUpdateManyWithoutVerbNestedInput
    futurePerfect?: FuturePerfectUpdateManyWithoutVerbNestedInput
  }

  export type VerbUncheckedUpdateWithoutPresentPerfectInput = {
    id?: IntFieldUpdateOperationsInput | number
    englishVerb?: StringFieldUpdateOperationsInput | string
    englishSentence?: StringFieldUpdateOperationsInput | string
    present?: PresentUncheckedUpdateManyWithoutVerbNestedInput
    past?: PastUncheckedUpdateManyWithoutVerbNestedInput
    pastPerfect?: PastPerfectUncheckedUpdateManyWithoutVerbNestedInput
    future?: FutureUncheckedUpdateManyWithoutVerbNestedInput
    futurePerfect?: FuturePerfectUncheckedUpdateManyWithoutVerbNestedInput
  }

  export type VerbCreateWithoutPastInput = {
    englishVerb: string
    englishSentence: string
    present?: PresentCreateNestedManyWithoutVerbInput
    presentPerfect?: PresentPerfectCreateNestedManyWithoutVerbInput
    pastPerfect?: PastPerfectCreateNestedManyWithoutVerbInput
    future?: FutureCreateNestedManyWithoutVerbInput
    futurePerfect?: FuturePerfectCreateNestedManyWithoutVerbInput
  }

  export type VerbUncheckedCreateWithoutPastInput = {
    id?: number
    englishVerb: string
    englishSentence: string
    present?: PresentUncheckedCreateNestedManyWithoutVerbInput
    presentPerfect?: PresentPerfectUncheckedCreateNestedManyWithoutVerbInput
    pastPerfect?: PastPerfectUncheckedCreateNestedManyWithoutVerbInput
    future?: FutureUncheckedCreateNestedManyWithoutVerbInput
    futurePerfect?: FuturePerfectUncheckedCreateNestedManyWithoutVerbInput
  }

  export type VerbCreateOrConnectWithoutPastInput = {
    where: VerbWhereUniqueInput
    create: XOR<VerbCreateWithoutPastInput, VerbUncheckedCreateWithoutPastInput>
  }

  export type VerbUpsertWithoutPastInput = {
    update: XOR<VerbUpdateWithoutPastInput, VerbUncheckedUpdateWithoutPastInput>
    create: XOR<VerbCreateWithoutPastInput, VerbUncheckedCreateWithoutPastInput>
    where?: VerbWhereInput
  }

  export type VerbUpdateToOneWithWhereWithoutPastInput = {
    where?: VerbWhereInput
    data: XOR<VerbUpdateWithoutPastInput, VerbUncheckedUpdateWithoutPastInput>
  }

  export type VerbUpdateWithoutPastInput = {
    englishVerb?: StringFieldUpdateOperationsInput | string
    englishSentence?: StringFieldUpdateOperationsInput | string
    present?: PresentUpdateManyWithoutVerbNestedInput
    presentPerfect?: PresentPerfectUpdateManyWithoutVerbNestedInput
    pastPerfect?: PastPerfectUpdateManyWithoutVerbNestedInput
    future?: FutureUpdateManyWithoutVerbNestedInput
    futurePerfect?: FuturePerfectUpdateManyWithoutVerbNestedInput
  }

  export type VerbUncheckedUpdateWithoutPastInput = {
    id?: IntFieldUpdateOperationsInput | number
    englishVerb?: StringFieldUpdateOperationsInput | string
    englishSentence?: StringFieldUpdateOperationsInput | string
    present?: PresentUncheckedUpdateManyWithoutVerbNestedInput
    presentPerfect?: PresentPerfectUncheckedUpdateManyWithoutVerbNestedInput
    pastPerfect?: PastPerfectUncheckedUpdateManyWithoutVerbNestedInput
    future?: FutureUncheckedUpdateManyWithoutVerbNestedInput
    futurePerfect?: FuturePerfectUncheckedUpdateManyWithoutVerbNestedInput
  }

  export type VerbCreateWithoutPastPerfectInput = {
    englishVerb: string
    englishSentence: string
    present?: PresentCreateNestedManyWithoutVerbInput
    presentPerfect?: PresentPerfectCreateNestedManyWithoutVerbInput
    past?: PastCreateNestedManyWithoutVerbInput
    future?: FutureCreateNestedManyWithoutVerbInput
    futurePerfect?: FuturePerfectCreateNestedManyWithoutVerbInput
  }

  export type VerbUncheckedCreateWithoutPastPerfectInput = {
    id?: number
    englishVerb: string
    englishSentence: string
    present?: PresentUncheckedCreateNestedManyWithoutVerbInput
    presentPerfect?: PresentPerfectUncheckedCreateNestedManyWithoutVerbInput
    past?: PastUncheckedCreateNestedManyWithoutVerbInput
    future?: FutureUncheckedCreateNestedManyWithoutVerbInput
    futurePerfect?: FuturePerfectUncheckedCreateNestedManyWithoutVerbInput
  }

  export type VerbCreateOrConnectWithoutPastPerfectInput = {
    where: VerbWhereUniqueInput
    create: XOR<VerbCreateWithoutPastPerfectInput, VerbUncheckedCreateWithoutPastPerfectInput>
  }

  export type VerbUpsertWithoutPastPerfectInput = {
    update: XOR<VerbUpdateWithoutPastPerfectInput, VerbUncheckedUpdateWithoutPastPerfectInput>
    create: XOR<VerbCreateWithoutPastPerfectInput, VerbUncheckedCreateWithoutPastPerfectInput>
    where?: VerbWhereInput
  }

  export type VerbUpdateToOneWithWhereWithoutPastPerfectInput = {
    where?: VerbWhereInput
    data: XOR<VerbUpdateWithoutPastPerfectInput, VerbUncheckedUpdateWithoutPastPerfectInput>
  }

  export type VerbUpdateWithoutPastPerfectInput = {
    englishVerb?: StringFieldUpdateOperationsInput | string
    englishSentence?: StringFieldUpdateOperationsInput | string
    present?: PresentUpdateManyWithoutVerbNestedInput
    presentPerfect?: PresentPerfectUpdateManyWithoutVerbNestedInput
    past?: PastUpdateManyWithoutVerbNestedInput
    future?: FutureUpdateManyWithoutVerbNestedInput
    futurePerfect?: FuturePerfectUpdateManyWithoutVerbNestedInput
  }

  export type VerbUncheckedUpdateWithoutPastPerfectInput = {
    id?: IntFieldUpdateOperationsInput | number
    englishVerb?: StringFieldUpdateOperationsInput | string
    englishSentence?: StringFieldUpdateOperationsInput | string
    present?: PresentUncheckedUpdateManyWithoutVerbNestedInput
    presentPerfect?: PresentPerfectUncheckedUpdateManyWithoutVerbNestedInput
    past?: PastUncheckedUpdateManyWithoutVerbNestedInput
    future?: FutureUncheckedUpdateManyWithoutVerbNestedInput
    futurePerfect?: FuturePerfectUncheckedUpdateManyWithoutVerbNestedInput
  }

  export type VerbCreateWithoutFutureInput = {
    englishVerb: string
    englishSentence: string
    present?: PresentCreateNestedManyWithoutVerbInput
    presentPerfect?: PresentPerfectCreateNestedManyWithoutVerbInput
    past?: PastCreateNestedManyWithoutVerbInput
    pastPerfect?: PastPerfectCreateNestedManyWithoutVerbInput
    futurePerfect?: FuturePerfectCreateNestedManyWithoutVerbInput
  }

  export type VerbUncheckedCreateWithoutFutureInput = {
    id?: number
    englishVerb: string
    englishSentence: string
    present?: PresentUncheckedCreateNestedManyWithoutVerbInput
    presentPerfect?: PresentPerfectUncheckedCreateNestedManyWithoutVerbInput
    past?: PastUncheckedCreateNestedManyWithoutVerbInput
    pastPerfect?: PastPerfectUncheckedCreateNestedManyWithoutVerbInput
    futurePerfect?: FuturePerfectUncheckedCreateNestedManyWithoutVerbInput
  }

  export type VerbCreateOrConnectWithoutFutureInput = {
    where: VerbWhereUniqueInput
    create: XOR<VerbCreateWithoutFutureInput, VerbUncheckedCreateWithoutFutureInput>
  }

  export type VerbUpsertWithoutFutureInput = {
    update: XOR<VerbUpdateWithoutFutureInput, VerbUncheckedUpdateWithoutFutureInput>
    create: XOR<VerbCreateWithoutFutureInput, VerbUncheckedCreateWithoutFutureInput>
    where?: VerbWhereInput
  }

  export type VerbUpdateToOneWithWhereWithoutFutureInput = {
    where?: VerbWhereInput
    data: XOR<VerbUpdateWithoutFutureInput, VerbUncheckedUpdateWithoutFutureInput>
  }

  export type VerbUpdateWithoutFutureInput = {
    englishVerb?: StringFieldUpdateOperationsInput | string
    englishSentence?: StringFieldUpdateOperationsInput | string
    present?: PresentUpdateManyWithoutVerbNestedInput
    presentPerfect?: PresentPerfectUpdateManyWithoutVerbNestedInput
    past?: PastUpdateManyWithoutVerbNestedInput
    pastPerfect?: PastPerfectUpdateManyWithoutVerbNestedInput
    futurePerfect?: FuturePerfectUpdateManyWithoutVerbNestedInput
  }

  export type VerbUncheckedUpdateWithoutFutureInput = {
    id?: IntFieldUpdateOperationsInput | number
    englishVerb?: StringFieldUpdateOperationsInput | string
    englishSentence?: StringFieldUpdateOperationsInput | string
    present?: PresentUncheckedUpdateManyWithoutVerbNestedInput
    presentPerfect?: PresentPerfectUncheckedUpdateManyWithoutVerbNestedInput
    past?: PastUncheckedUpdateManyWithoutVerbNestedInput
    pastPerfect?: PastPerfectUncheckedUpdateManyWithoutVerbNestedInput
    futurePerfect?: FuturePerfectUncheckedUpdateManyWithoutVerbNestedInput
  }

  export type VerbCreateWithoutFuturePerfectInput = {
    englishVerb: string
    englishSentence: string
    present?: PresentCreateNestedManyWithoutVerbInput
    presentPerfect?: PresentPerfectCreateNestedManyWithoutVerbInput
    past?: PastCreateNestedManyWithoutVerbInput
    pastPerfect?: PastPerfectCreateNestedManyWithoutVerbInput
    future?: FutureCreateNestedManyWithoutVerbInput
  }

  export type VerbUncheckedCreateWithoutFuturePerfectInput = {
    id?: number
    englishVerb: string
    englishSentence: string
    present?: PresentUncheckedCreateNestedManyWithoutVerbInput
    presentPerfect?: PresentPerfectUncheckedCreateNestedManyWithoutVerbInput
    past?: PastUncheckedCreateNestedManyWithoutVerbInput
    pastPerfect?: PastPerfectUncheckedCreateNestedManyWithoutVerbInput
    future?: FutureUncheckedCreateNestedManyWithoutVerbInput
  }

  export type VerbCreateOrConnectWithoutFuturePerfectInput = {
    where: VerbWhereUniqueInput
    create: XOR<VerbCreateWithoutFuturePerfectInput, VerbUncheckedCreateWithoutFuturePerfectInput>
  }

  export type VerbUpsertWithoutFuturePerfectInput = {
    update: XOR<VerbUpdateWithoutFuturePerfectInput, VerbUncheckedUpdateWithoutFuturePerfectInput>
    create: XOR<VerbCreateWithoutFuturePerfectInput, VerbUncheckedCreateWithoutFuturePerfectInput>
    where?: VerbWhereInput
  }

  export type VerbUpdateToOneWithWhereWithoutFuturePerfectInput = {
    where?: VerbWhereInput
    data: XOR<VerbUpdateWithoutFuturePerfectInput, VerbUncheckedUpdateWithoutFuturePerfectInput>
  }

  export type VerbUpdateWithoutFuturePerfectInput = {
    englishVerb?: StringFieldUpdateOperationsInput | string
    englishSentence?: StringFieldUpdateOperationsInput | string
    present?: PresentUpdateManyWithoutVerbNestedInput
    presentPerfect?: PresentPerfectUpdateManyWithoutVerbNestedInput
    past?: PastUpdateManyWithoutVerbNestedInput
    pastPerfect?: PastPerfectUpdateManyWithoutVerbNestedInput
    future?: FutureUpdateManyWithoutVerbNestedInput
  }

  export type VerbUncheckedUpdateWithoutFuturePerfectInput = {
    id?: IntFieldUpdateOperationsInput | number
    englishVerb?: StringFieldUpdateOperationsInput | string
    englishSentence?: StringFieldUpdateOperationsInput | string
    present?: PresentUncheckedUpdateManyWithoutVerbNestedInput
    presentPerfect?: PresentPerfectUncheckedUpdateManyWithoutVerbNestedInput
    past?: PastUncheckedUpdateManyWithoutVerbNestedInput
    pastPerfect?: PastPerfectUncheckedUpdateManyWithoutVerbNestedInput
    future?: FutureUncheckedUpdateManyWithoutVerbNestedInput
  }

  export type PresentCreateManyVerbInput = {
    id?: number
    germanVerb: string
    germanSentence: string
    audio: string
  }

  export type PresentPerfectCreateManyVerbInput = {
    id?: number
    germanVerb: string
    germanSentence: string
    audio: string
  }

  export type PastCreateManyVerbInput = {
    id?: number
    germanVerb: string
    germanSentence: string
    audio: string
  }

  export type PastPerfectCreateManyVerbInput = {
    id?: number
    germanVerb: string
    germanSentence: string
    audio: string
  }

  export type FutureCreateManyVerbInput = {
    id?: number
    germanVerb: string
    germanSentence: string
    audio: string
  }

  export type FuturePerfectCreateManyVerbInput = {
    id?: number
    germanVerb: string
    germanSentence: string
    audio: string
  }

  export type PresentUpdateWithoutVerbInput = {
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type PresentUncheckedUpdateWithoutVerbInput = {
    id?: IntFieldUpdateOperationsInput | number
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type PresentUncheckedUpdateManyWithoutVerbInput = {
    id?: IntFieldUpdateOperationsInput | number
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type PresentPerfectUpdateWithoutVerbInput = {
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type PresentPerfectUncheckedUpdateWithoutVerbInput = {
    id?: IntFieldUpdateOperationsInput | number
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type PresentPerfectUncheckedUpdateManyWithoutVerbInput = {
    id?: IntFieldUpdateOperationsInput | number
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type PastUpdateWithoutVerbInput = {
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type PastUncheckedUpdateWithoutVerbInput = {
    id?: IntFieldUpdateOperationsInput | number
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type PastUncheckedUpdateManyWithoutVerbInput = {
    id?: IntFieldUpdateOperationsInput | number
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type PastPerfectUpdateWithoutVerbInput = {
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type PastPerfectUncheckedUpdateWithoutVerbInput = {
    id?: IntFieldUpdateOperationsInput | number
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type PastPerfectUncheckedUpdateManyWithoutVerbInput = {
    id?: IntFieldUpdateOperationsInput | number
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type FutureUpdateWithoutVerbInput = {
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type FutureUncheckedUpdateWithoutVerbInput = {
    id?: IntFieldUpdateOperationsInput | number
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type FutureUncheckedUpdateManyWithoutVerbInput = {
    id?: IntFieldUpdateOperationsInput | number
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type FuturePerfectUpdateWithoutVerbInput = {
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type FuturePerfectUncheckedUpdateWithoutVerbInput = {
    id?: IntFieldUpdateOperationsInput | number
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
  }

  export type FuturePerfectUncheckedUpdateManyWithoutVerbInput = {
    id?: IntFieldUpdateOperationsInput | number
    germanVerb?: StringFieldUpdateOperationsInput | string
    germanSentence?: StringFieldUpdateOperationsInput | string
    audio?: StringFieldUpdateOperationsInput | string
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