
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
 * Model Tutor
 * 
 */
export type Tutor = $Result.DefaultSelection<Prisma.$TutorPayload>
/**
 * Model Prestador
 * 
 */
export type Prestador = $Result.DefaultSelection<Prisma.$PrestadorPayload>
/**
 * Model Pet
 * 
 */
export type Pet = $Result.DefaultSelection<Prisma.$PetPayload>
/**
 * Model Servico
 * 
 */
export type Servico = $Result.DefaultSelection<Prisma.$ServicoPayload>
/**
 * Model Agendamento
 * 
 */
export type Agendamento = $Result.DefaultSelection<Prisma.$AgendamentoPayload>
/**
 * Model Reserva
 * 
 */
export type Reserva = $Result.DefaultSelection<Prisma.$ReservaPayload>
/**
 * Model Avaliacao
 * 
 */
export type Avaliacao = $Result.DefaultSelection<Prisma.$AvaliacaoPayload>
/**
 * Model Pagamento
 * 
 */
export type Pagamento = $Result.DefaultSelection<Prisma.$PagamentoPayload>
/**
 * Model Midia
 * 
 */
export type Midia = $Result.DefaultSelection<Prisma.$MidiaPayload>
/**
 * Model Notificacao
 * 
 */
export type Notificacao = $Result.DefaultSelection<Prisma.$NotificacaoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tutors
 * const tutors = await prisma.tutor.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Tutors
   * const tutors = await prisma.tutor.findMany()
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
   * `prisma.tutor`: Exposes CRUD operations for the **Tutor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tutors
    * const tutors = await prisma.tutor.findMany()
    * ```
    */
  get tutor(): Prisma.TutorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prestador`: Exposes CRUD operations for the **Prestador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prestadors
    * const prestadors = await prisma.prestador.findMany()
    * ```
    */
  get prestador(): Prisma.PrestadorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pet`: Exposes CRUD operations for the **Pet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pets
    * const pets = await prisma.pet.findMany()
    * ```
    */
  get pet(): Prisma.PetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servico`: Exposes CRUD operations for the **Servico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicos
    * const servicos = await prisma.servico.findMany()
    * ```
    */
  get servico(): Prisma.ServicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agendamento`: Exposes CRUD operations for the **Agendamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agendamentos
    * const agendamentos = await prisma.agendamento.findMany()
    * ```
    */
  get agendamento(): Prisma.AgendamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reserva`: Exposes CRUD operations for the **Reserva** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservas
    * const reservas = await prisma.reserva.findMany()
    * ```
    */
  get reserva(): Prisma.ReservaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avaliacao`: Exposes CRUD operations for the **Avaliacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avaliacaos
    * const avaliacaos = await prisma.avaliacao.findMany()
    * ```
    */
  get avaliacao(): Prisma.AvaliacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pagamento`: Exposes CRUD operations for the **Pagamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagamentos
    * const pagamentos = await prisma.pagamento.findMany()
    * ```
    */
  get pagamento(): Prisma.PagamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.midia`: Exposes CRUD operations for the **Midia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Midias
    * const midias = await prisma.midia.findMany()
    * ```
    */
  get midia(): Prisma.MidiaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificacao`: Exposes CRUD operations for the **Notificacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notificacaos
    * const notificacaos = await prisma.notificacao.findMany()
    * ```
    */
  get notificacao(): Prisma.NotificacaoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
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
    Tutor: 'Tutor',
    Prestador: 'Prestador',
    Pet: 'Pet',
    Servico: 'Servico',
    Agendamento: 'Agendamento',
    Reserva: 'Reserva',
    Avaliacao: 'Avaliacao',
    Pagamento: 'Pagamento',
    Midia: 'Midia',
    Notificacao: 'Notificacao'
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
      modelProps: "tutor" | "prestador" | "pet" | "servico" | "agendamento" | "reserva" | "avaliacao" | "pagamento" | "midia" | "notificacao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tutor: {
        payload: Prisma.$TutorPayload<ExtArgs>
        fields: Prisma.TutorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TutorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TutorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>
          }
          findFirst: {
            args: Prisma.TutorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TutorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>
          }
          findMany: {
            args: Prisma.TutorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>[]
          }
          create: {
            args: Prisma.TutorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>
          }
          createMany: {
            args: Prisma.TutorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TutorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>[]
          }
          delete: {
            args: Prisma.TutorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>
          }
          update: {
            args: Prisma.TutorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>
          }
          deleteMany: {
            args: Prisma.TutorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TutorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TutorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>[]
          }
          upsert: {
            args: Prisma.TutorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>
          }
          aggregate: {
            args: Prisma.TutorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTutor>
          }
          groupBy: {
            args: Prisma.TutorGroupByArgs<ExtArgs>
            result: $Utils.Optional<TutorGroupByOutputType>[]
          }
          count: {
            args: Prisma.TutorCountArgs<ExtArgs>
            result: $Utils.Optional<TutorCountAggregateOutputType> | number
          }
        }
      }
      Prestador: {
        payload: Prisma.$PrestadorPayload<ExtArgs>
        fields: Prisma.PrestadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrestadorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrestadorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestadorPayload>
          }
          findFirst: {
            args: Prisma.PrestadorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrestadorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestadorPayload>
          }
          findMany: {
            args: Prisma.PrestadorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestadorPayload>[]
          }
          create: {
            args: Prisma.PrestadorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestadorPayload>
          }
          createMany: {
            args: Prisma.PrestadorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrestadorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestadorPayload>[]
          }
          delete: {
            args: Prisma.PrestadorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestadorPayload>
          }
          update: {
            args: Prisma.PrestadorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestadorPayload>
          }
          deleteMany: {
            args: Prisma.PrestadorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrestadorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrestadorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestadorPayload>[]
          }
          upsert: {
            args: Prisma.PrestadorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestadorPayload>
          }
          aggregate: {
            args: Prisma.PrestadorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrestador>
          }
          groupBy: {
            args: Prisma.PrestadorGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrestadorGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrestadorCountArgs<ExtArgs>
            result: $Utils.Optional<PrestadorCountAggregateOutputType> | number
          }
        }
      }
      Pet: {
        payload: Prisma.$PetPayload<ExtArgs>
        fields: Prisma.PetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findFirst: {
            args: Prisma.PetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findMany: {
            args: Prisma.PetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          create: {
            args: Prisma.PetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          createMany: {
            args: Prisma.PetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          delete: {
            args: Prisma.PetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          update: {
            args: Prisma.PetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          deleteMany: {
            args: Prisma.PetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          upsert: {
            args: Prisma.PetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          aggregate: {
            args: Prisma.PetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePet>
          }
          groupBy: {
            args: Prisma.PetGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PetCountArgs<ExtArgs>
            result: $Utils.Optional<PetCountAggregateOutputType> | number
          }
        }
      }
      Servico: {
        payload: Prisma.$ServicoPayload<ExtArgs>
        fields: Prisma.ServicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          findFirst: {
            args: Prisma.ServicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          findMany: {
            args: Prisma.ServicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>[]
          }
          create: {
            args: Prisma.ServicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          createMany: {
            args: Prisma.ServicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServicoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>[]
          }
          delete: {
            args: Prisma.ServicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          update: {
            args: Prisma.ServicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          deleteMany: {
            args: Prisma.ServicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServicoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>[]
          }
          upsert: {
            args: Prisma.ServicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          aggregate: {
            args: Prisma.ServicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServico>
          }
          groupBy: {
            args: Prisma.ServicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicoCountArgs<ExtArgs>
            result: $Utils.Optional<ServicoCountAggregateOutputType> | number
          }
        }
      }
      Agendamento: {
        payload: Prisma.$AgendamentoPayload<ExtArgs>
        fields: Prisma.AgendamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgendamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgendamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          findFirst: {
            args: Prisma.AgendamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgendamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          findMany: {
            args: Prisma.AgendamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>[]
          }
          create: {
            args: Prisma.AgendamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          createMany: {
            args: Prisma.AgendamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgendamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>[]
          }
          delete: {
            args: Prisma.AgendamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          update: {
            args: Prisma.AgendamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          deleteMany: {
            args: Prisma.AgendamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgendamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgendamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>[]
          }
          upsert: {
            args: Prisma.AgendamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          aggregate: {
            args: Prisma.AgendamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgendamento>
          }
          groupBy: {
            args: Prisma.AgendamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgendamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgendamentoCountArgs<ExtArgs>
            result: $Utils.Optional<AgendamentoCountAggregateOutputType> | number
          }
        }
      }
      Reserva: {
        payload: Prisma.$ReservaPayload<ExtArgs>
        fields: Prisma.ReservaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          findFirst: {
            args: Prisma.ReservaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          findMany: {
            args: Prisma.ReservaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>[]
          }
          create: {
            args: Prisma.ReservaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          createMany: {
            args: Prisma.ReservaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>[]
          }
          delete: {
            args: Prisma.ReservaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          update: {
            args: Prisma.ReservaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          deleteMany: {
            args: Prisma.ReservaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReservaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>[]
          }
          upsert: {
            args: Prisma.ReservaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          aggregate: {
            args: Prisma.ReservaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReserva>
          }
          groupBy: {
            args: Prisma.ReservaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservaCountArgs<ExtArgs>
            result: $Utils.Optional<ReservaCountAggregateOutputType> | number
          }
        }
      }
      Avaliacao: {
        payload: Prisma.$AvaliacaoPayload<ExtArgs>
        fields: Prisma.AvaliacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvaliacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvaliacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findFirst: {
            args: Prisma.AvaliacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvaliacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findMany: {
            args: Prisma.AvaliacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          create: {
            args: Prisma.AvaliacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          createMany: {
            args: Prisma.AvaliacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvaliacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          delete: {
            args: Prisma.AvaliacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          update: {
            args: Prisma.AvaliacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          deleteMany: {
            args: Prisma.AvaliacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvaliacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvaliacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          upsert: {
            args: Prisma.AvaliacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          aggregate: {
            args: Prisma.AvaliacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvaliacao>
          }
          groupBy: {
            args: Prisma.AvaliacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvaliacaoCountArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoCountAggregateOutputType> | number
          }
        }
      }
      Pagamento: {
        payload: Prisma.$PagamentoPayload<ExtArgs>
        fields: Prisma.PagamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PagamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PagamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          findFirst: {
            args: Prisma.PagamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PagamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          findMany: {
            args: Prisma.PagamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>[]
          }
          create: {
            args: Prisma.PagamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          createMany: {
            args: Prisma.PagamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PagamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>[]
          }
          delete: {
            args: Prisma.PagamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          update: {
            args: Prisma.PagamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          deleteMany: {
            args: Prisma.PagamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PagamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PagamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>[]
          }
          upsert: {
            args: Prisma.PagamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          aggregate: {
            args: Prisma.PagamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagamento>
          }
          groupBy: {
            args: Prisma.PagamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PagamentoCountArgs<ExtArgs>
            result: $Utils.Optional<PagamentoCountAggregateOutputType> | number
          }
        }
      }
      Midia: {
        payload: Prisma.$MidiaPayload<ExtArgs>
        fields: Prisma.MidiaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MidiaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MidiaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MidiaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MidiaPayload>
          }
          findFirst: {
            args: Prisma.MidiaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MidiaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MidiaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MidiaPayload>
          }
          findMany: {
            args: Prisma.MidiaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MidiaPayload>[]
          }
          create: {
            args: Prisma.MidiaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MidiaPayload>
          }
          createMany: {
            args: Prisma.MidiaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MidiaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MidiaPayload>[]
          }
          delete: {
            args: Prisma.MidiaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MidiaPayload>
          }
          update: {
            args: Prisma.MidiaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MidiaPayload>
          }
          deleteMany: {
            args: Prisma.MidiaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MidiaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MidiaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MidiaPayload>[]
          }
          upsert: {
            args: Prisma.MidiaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MidiaPayload>
          }
          aggregate: {
            args: Prisma.MidiaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMidia>
          }
          groupBy: {
            args: Prisma.MidiaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MidiaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MidiaCountArgs<ExtArgs>
            result: $Utils.Optional<MidiaCountAggregateOutputType> | number
          }
        }
      }
      Notificacao: {
        payload: Prisma.$NotificacaoPayload<ExtArgs>
        fields: Prisma.NotificacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          findFirst: {
            args: Prisma.NotificacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          findMany: {
            args: Prisma.NotificacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          create: {
            args: Prisma.NotificacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          createMany: {
            args: Prisma.NotificacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          delete: {
            args: Prisma.NotificacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          update: {
            args: Prisma.NotificacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          deleteMany: {
            args: Prisma.NotificacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          upsert: {
            args: Prisma.NotificacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          aggregate: {
            args: Prisma.NotificacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificacao>
          }
          groupBy: {
            args: Prisma.NotificacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificacaoCountArgs<ExtArgs>
            result: $Utils.Optional<NotificacaoCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    tutor?: TutorOmit
    prestador?: PrestadorOmit
    pet?: PetOmit
    servico?: ServicoOmit
    agendamento?: AgendamentoOmit
    reserva?: ReservaOmit
    avaliacao?: AvaliacaoOmit
    pagamento?: PagamentoOmit
    midia?: MidiaOmit
    notificacao?: NotificacaoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type TutorCountOutputType
   */

  export type TutorCountOutputType = {
    pets: number
    reservas: number
    notificacoes: number
  }

  export type TutorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | TutorCountOutputTypeCountPetsArgs
    reservas?: boolean | TutorCountOutputTypeCountReservasArgs
    notificacoes?: boolean | TutorCountOutputTypeCountNotificacoesArgs
  }

  // Custom InputTypes
  /**
   * TutorCountOutputType without action
   */
  export type TutorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorCountOutputType
     */
    select?: TutorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TutorCountOutputType without action
   */
  export type TutorCountOutputTypeCountPetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
  }

  /**
   * TutorCountOutputType without action
   */
  export type TutorCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
  }

  /**
   * TutorCountOutputType without action
   */
  export type TutorCountOutputTypeCountNotificacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacaoWhereInput
  }


  /**
   * Count Type PrestadorCountOutputType
   */

  export type PrestadorCountOutputType = {
    servicos_list: number
    agendamentos: number
    notificacoes: number
  }

  export type PrestadorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicos_list?: boolean | PrestadorCountOutputTypeCountServicos_listArgs
    agendamentos?: boolean | PrestadorCountOutputTypeCountAgendamentosArgs
    notificacoes?: boolean | PrestadorCountOutputTypeCountNotificacoesArgs
  }

  // Custom InputTypes
  /**
   * PrestadorCountOutputType without action
   */
  export type PrestadorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestadorCountOutputType
     */
    select?: PrestadorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrestadorCountOutputType without action
   */
  export type PrestadorCountOutputTypeCountServicos_listArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicoWhereInput
  }

  /**
   * PrestadorCountOutputType without action
   */
  export type PrestadorCountOutputTypeCountAgendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendamentoWhereInput
  }

  /**
   * PrestadorCountOutputType without action
   */
  export type PrestadorCountOutputTypeCountNotificacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacaoWhereInput
  }


  /**
   * Count Type PetCountOutputType
   */

  export type PetCountOutputType = {
    reservas: number
  }

  export type PetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | PetCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetCountOutputType
     */
    select?: PetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
  }


  /**
   * Count Type ServicoCountOutputType
   */

  export type ServicoCountOutputType = {
    reservas: number
  }

  export type ServicoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | ServicoCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * ServicoCountOutputType without action
   */
  export type ServicoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicoCountOutputType
     */
    select?: ServicoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServicoCountOutputType without action
   */
  export type ServicoCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
  }


  /**
   * Count Type AgendamentoCountOutputType
   */

  export type AgendamentoCountOutputType = {
    reservas: number
  }

  export type AgendamentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | AgendamentoCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * AgendamentoCountOutputType without action
   */
  export type AgendamentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendamentoCountOutputType
     */
    select?: AgendamentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgendamentoCountOutputType without action
   */
  export type AgendamentoCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
  }


  /**
   * Count Type ReservaCountOutputType
   */

  export type ReservaCountOutputType = {
    avaliacoes: number
    pagamentos: number
    midias: number
  }

  export type ReservaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avaliacoes?: boolean | ReservaCountOutputTypeCountAvaliacoesArgs
    pagamentos?: boolean | ReservaCountOutputTypeCountPagamentosArgs
    midias?: boolean | ReservaCountOutputTypeCountMidiasArgs
  }

  // Custom InputTypes
  /**
   * ReservaCountOutputType without action
   */
  export type ReservaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaCountOutputType
     */
    select?: ReservaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReservaCountOutputType without action
   */
  export type ReservaCountOutputTypeCountAvaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
  }

  /**
   * ReservaCountOutputType without action
   */
  export type ReservaCountOutputTypeCountPagamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagamentoWhereInput
  }

  /**
   * ReservaCountOutputType without action
   */
  export type ReservaCountOutputTypeCountMidiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MidiaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tutor
   */

  export type AggregateTutor = {
    _count: TutorCountAggregateOutputType | null
    _min: TutorMinAggregateOutputType | null
    _max: TutorMaxAggregateOutputType | null
  }

  export type TutorMinAggregateOutputType = {
    id_tutor: string | null
    nome: string | null
    email: string | null
    telefone: string | null
    endereco: string | null
    senha: string | null
  }

  export type TutorMaxAggregateOutputType = {
    id_tutor: string | null
    nome: string | null
    email: string | null
    telefone: string | null
    endereco: string | null
    senha: string | null
  }

  export type TutorCountAggregateOutputType = {
    id_tutor: number
    nome: number
    email: number
    telefone: number
    endereco: number
    senha: number
    _all: number
  }


  export type TutorMinAggregateInputType = {
    id_tutor?: true
    nome?: true
    email?: true
    telefone?: true
    endereco?: true
    senha?: true
  }

  export type TutorMaxAggregateInputType = {
    id_tutor?: true
    nome?: true
    email?: true
    telefone?: true
    endereco?: true
    senha?: true
  }

  export type TutorCountAggregateInputType = {
    id_tutor?: true
    nome?: true
    email?: true
    telefone?: true
    endereco?: true
    senha?: true
    _all?: true
  }

  export type TutorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tutor to aggregate.
     */
    where?: TutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tutors to fetch.
     */
    orderBy?: TutorOrderByWithRelationInput | TutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tutors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tutors
    **/
    _count?: true | TutorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TutorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TutorMaxAggregateInputType
  }

  export type GetTutorAggregateType<T extends TutorAggregateArgs> = {
        [P in keyof T & keyof AggregateTutor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTutor[P]>
      : GetScalarType<T[P], AggregateTutor[P]>
  }




  export type TutorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorWhereInput
    orderBy?: TutorOrderByWithAggregationInput | TutorOrderByWithAggregationInput[]
    by: TutorScalarFieldEnum[] | TutorScalarFieldEnum
    having?: TutorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TutorCountAggregateInputType | true
    _min?: TutorMinAggregateInputType
    _max?: TutorMaxAggregateInputType
  }

  export type TutorGroupByOutputType = {
    id_tutor: string
    nome: string | null
    email: string | null
    telefone: string | null
    endereco: string | null
    senha: string | null
    _count: TutorCountAggregateOutputType | null
    _min: TutorMinAggregateOutputType | null
    _max: TutorMaxAggregateOutputType | null
  }

  type GetTutorGroupByPayload<T extends TutorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TutorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TutorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TutorGroupByOutputType[P]>
            : GetScalarType<T[P], TutorGroupByOutputType[P]>
        }
      >
    >


  export type TutorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tutor?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    endereco?: boolean
    senha?: boolean
    pets?: boolean | Tutor$petsArgs<ExtArgs>
    reservas?: boolean | Tutor$reservasArgs<ExtArgs>
    notificacoes?: boolean | Tutor$notificacoesArgs<ExtArgs>
    _count?: boolean | TutorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutor"]>

  export type TutorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tutor?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    endereco?: boolean
    senha?: boolean
  }, ExtArgs["result"]["tutor"]>

  export type TutorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tutor?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    endereco?: boolean
    senha?: boolean
  }, ExtArgs["result"]["tutor"]>

  export type TutorSelectScalar = {
    id_tutor?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    endereco?: boolean
    senha?: boolean
  }

  export type TutorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_tutor" | "nome" | "email" | "telefone" | "endereco" | "senha", ExtArgs["result"]["tutor"]>
  export type TutorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | Tutor$petsArgs<ExtArgs>
    reservas?: boolean | Tutor$reservasArgs<ExtArgs>
    notificacoes?: boolean | Tutor$notificacoesArgs<ExtArgs>
    _count?: boolean | TutorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TutorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TutorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TutorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tutor"
    objects: {
      pets: Prisma.$PetPayload<ExtArgs>[]
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
      notificacoes: Prisma.$NotificacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_tutor: string
      nome: string | null
      email: string | null
      telefone: string | null
      endereco: string | null
      senha: string | null
    }, ExtArgs["result"]["tutor"]>
    composites: {}
  }

  type TutorGetPayload<S extends boolean | null | undefined | TutorDefaultArgs> = $Result.GetResult<Prisma.$TutorPayload, S>

  type TutorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TutorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TutorCountAggregateInputType | true
    }

  export interface TutorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tutor'], meta: { name: 'Tutor' } }
    /**
     * Find zero or one Tutor that matches the filter.
     * @param {TutorFindUniqueArgs} args - Arguments to find a Tutor
     * @example
     * // Get one Tutor
     * const tutor = await prisma.tutor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TutorFindUniqueArgs>(args: SelectSubset<T, TutorFindUniqueArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tutor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TutorFindUniqueOrThrowArgs} args - Arguments to find a Tutor
     * @example
     * // Get one Tutor
     * const tutor = await prisma.tutor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TutorFindUniqueOrThrowArgs>(args: SelectSubset<T, TutorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tutor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorFindFirstArgs} args - Arguments to find a Tutor
     * @example
     * // Get one Tutor
     * const tutor = await prisma.tutor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TutorFindFirstArgs>(args?: SelectSubset<T, TutorFindFirstArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tutor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorFindFirstOrThrowArgs} args - Arguments to find a Tutor
     * @example
     * // Get one Tutor
     * const tutor = await prisma.tutor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TutorFindFirstOrThrowArgs>(args?: SelectSubset<T, TutorFindFirstOrThrowArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tutors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tutors
     * const tutors = await prisma.tutor.findMany()
     * 
     * // Get first 10 Tutors
     * const tutors = await prisma.tutor.findMany({ take: 10 })
     * 
     * // Only select the `id_tutor`
     * const tutorWithId_tutorOnly = await prisma.tutor.findMany({ select: { id_tutor: true } })
     * 
     */
    findMany<T extends TutorFindManyArgs>(args?: SelectSubset<T, TutorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tutor.
     * @param {TutorCreateArgs} args - Arguments to create a Tutor.
     * @example
     * // Create one Tutor
     * const Tutor = await prisma.tutor.create({
     *   data: {
     *     // ... data to create a Tutor
     *   }
     * })
     * 
     */
    create<T extends TutorCreateArgs>(args: SelectSubset<T, TutorCreateArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tutors.
     * @param {TutorCreateManyArgs} args - Arguments to create many Tutors.
     * @example
     * // Create many Tutors
     * const tutor = await prisma.tutor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TutorCreateManyArgs>(args?: SelectSubset<T, TutorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tutors and returns the data saved in the database.
     * @param {TutorCreateManyAndReturnArgs} args - Arguments to create many Tutors.
     * @example
     * // Create many Tutors
     * const tutor = await prisma.tutor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tutors and only return the `id_tutor`
     * const tutorWithId_tutorOnly = await prisma.tutor.createManyAndReturn({
     *   select: { id_tutor: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TutorCreateManyAndReturnArgs>(args?: SelectSubset<T, TutorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tutor.
     * @param {TutorDeleteArgs} args - Arguments to delete one Tutor.
     * @example
     * // Delete one Tutor
     * const Tutor = await prisma.tutor.delete({
     *   where: {
     *     // ... filter to delete one Tutor
     *   }
     * })
     * 
     */
    delete<T extends TutorDeleteArgs>(args: SelectSubset<T, TutorDeleteArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tutor.
     * @param {TutorUpdateArgs} args - Arguments to update one Tutor.
     * @example
     * // Update one Tutor
     * const tutor = await prisma.tutor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TutorUpdateArgs>(args: SelectSubset<T, TutorUpdateArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tutors.
     * @param {TutorDeleteManyArgs} args - Arguments to filter Tutors to delete.
     * @example
     * // Delete a few Tutors
     * const { count } = await prisma.tutor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TutorDeleteManyArgs>(args?: SelectSubset<T, TutorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tutors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tutors
     * const tutor = await prisma.tutor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TutorUpdateManyArgs>(args: SelectSubset<T, TutorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tutors and returns the data updated in the database.
     * @param {TutorUpdateManyAndReturnArgs} args - Arguments to update many Tutors.
     * @example
     * // Update many Tutors
     * const tutor = await prisma.tutor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tutors and only return the `id_tutor`
     * const tutorWithId_tutorOnly = await prisma.tutor.updateManyAndReturn({
     *   select: { id_tutor: true },
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
    updateManyAndReturn<T extends TutorUpdateManyAndReturnArgs>(args: SelectSubset<T, TutorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tutor.
     * @param {TutorUpsertArgs} args - Arguments to update or create a Tutor.
     * @example
     * // Update or create a Tutor
     * const tutor = await prisma.tutor.upsert({
     *   create: {
     *     // ... data to create a Tutor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tutor we want to update
     *   }
     * })
     */
    upsert<T extends TutorUpsertArgs>(args: SelectSubset<T, TutorUpsertArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tutors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorCountArgs} args - Arguments to filter Tutors to count.
     * @example
     * // Count the number of Tutors
     * const count = await prisma.tutor.count({
     *   where: {
     *     // ... the filter for the Tutors we want to count
     *   }
     * })
    **/
    count<T extends TutorCountArgs>(
      args?: Subset<T, TutorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TutorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tutor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TutorAggregateArgs>(args: Subset<T, TutorAggregateArgs>): Prisma.PrismaPromise<GetTutorAggregateType<T>>

    /**
     * Group by Tutor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorGroupByArgs} args - Group by arguments.
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
      T extends TutorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TutorGroupByArgs['orderBy'] }
        : { orderBy?: TutorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TutorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTutorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tutor model
   */
  readonly fields: TutorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tutor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TutorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pets<T extends Tutor$petsArgs<ExtArgs> = {}>(args?: Subset<T, Tutor$petsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservas<T extends Tutor$reservasArgs<ExtArgs> = {}>(args?: Subset<T, Tutor$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificacoes<T extends Tutor$notificacoesArgs<ExtArgs> = {}>(args?: Subset<T, Tutor$notificacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tutor model
   */
  interface TutorFieldRefs {
    readonly id_tutor: FieldRef<"Tutor", 'String'>
    readonly nome: FieldRef<"Tutor", 'String'>
    readonly email: FieldRef<"Tutor", 'String'>
    readonly telefone: FieldRef<"Tutor", 'String'>
    readonly endereco: FieldRef<"Tutor", 'String'>
    readonly senha: FieldRef<"Tutor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tutor findUnique
   */
  export type TutorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * Filter, which Tutor to fetch.
     */
    where: TutorWhereUniqueInput
  }

  /**
   * Tutor findUniqueOrThrow
   */
  export type TutorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * Filter, which Tutor to fetch.
     */
    where: TutorWhereUniqueInput
  }

  /**
   * Tutor findFirst
   */
  export type TutorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * Filter, which Tutor to fetch.
     */
    where?: TutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tutors to fetch.
     */
    orderBy?: TutorOrderByWithRelationInput | TutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tutors.
     */
    cursor?: TutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tutors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tutors.
     */
    distinct?: TutorScalarFieldEnum | TutorScalarFieldEnum[]
  }

  /**
   * Tutor findFirstOrThrow
   */
  export type TutorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * Filter, which Tutor to fetch.
     */
    where?: TutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tutors to fetch.
     */
    orderBy?: TutorOrderByWithRelationInput | TutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tutors.
     */
    cursor?: TutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tutors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tutors.
     */
    distinct?: TutorScalarFieldEnum | TutorScalarFieldEnum[]
  }

  /**
   * Tutor findMany
   */
  export type TutorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * Filter, which Tutors to fetch.
     */
    where?: TutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tutors to fetch.
     */
    orderBy?: TutorOrderByWithRelationInput | TutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tutors.
     */
    cursor?: TutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tutors.
     */
    skip?: number
    distinct?: TutorScalarFieldEnum | TutorScalarFieldEnum[]
  }

  /**
   * Tutor create
   */
  export type TutorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * The data needed to create a Tutor.
     */
    data: XOR<TutorCreateInput, TutorUncheckedCreateInput>
  }

  /**
   * Tutor createMany
   */
  export type TutorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tutors.
     */
    data: TutorCreateManyInput | TutorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tutor createManyAndReturn
   */
  export type TutorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * The data used to create many Tutors.
     */
    data: TutorCreateManyInput | TutorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tutor update
   */
  export type TutorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * The data needed to update a Tutor.
     */
    data: XOR<TutorUpdateInput, TutorUncheckedUpdateInput>
    /**
     * Choose, which Tutor to update.
     */
    where: TutorWhereUniqueInput
  }

  /**
   * Tutor updateMany
   */
  export type TutorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tutors.
     */
    data: XOR<TutorUpdateManyMutationInput, TutorUncheckedUpdateManyInput>
    /**
     * Filter which Tutors to update
     */
    where?: TutorWhereInput
    /**
     * Limit how many Tutors to update.
     */
    limit?: number
  }

  /**
   * Tutor updateManyAndReturn
   */
  export type TutorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * The data used to update Tutors.
     */
    data: XOR<TutorUpdateManyMutationInput, TutorUncheckedUpdateManyInput>
    /**
     * Filter which Tutors to update
     */
    where?: TutorWhereInput
    /**
     * Limit how many Tutors to update.
     */
    limit?: number
  }

  /**
   * Tutor upsert
   */
  export type TutorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * The filter to search for the Tutor to update in case it exists.
     */
    where: TutorWhereUniqueInput
    /**
     * In case the Tutor found by the `where` argument doesn't exist, create a new Tutor with this data.
     */
    create: XOR<TutorCreateInput, TutorUncheckedCreateInput>
    /**
     * In case the Tutor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TutorUpdateInput, TutorUncheckedUpdateInput>
  }

  /**
   * Tutor delete
   */
  export type TutorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * Filter which Tutor to delete.
     */
    where: TutorWhereUniqueInput
  }

  /**
   * Tutor deleteMany
   */
  export type TutorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tutors to delete
     */
    where?: TutorWhereInput
    /**
     * Limit how many Tutors to delete.
     */
    limit?: number
  }

  /**
   * Tutor.pets
   */
  export type Tutor$petsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    where?: PetWhereInput
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    cursor?: PetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Tutor.reservas
   */
  export type Tutor$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    cursor?: ReservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Tutor.notificacoes
   */
  export type Tutor$notificacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    where?: NotificacaoWhereInput
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    cursor?: NotificacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Tutor without action
   */
  export type TutorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
  }


  /**
   * Model Prestador
   */

  export type AggregatePrestador = {
    _count: PrestadorCountAggregateOutputType | null
    _min: PrestadorMinAggregateOutputType | null
    _max: PrestadorMaxAggregateOutputType | null
  }

  export type PrestadorMinAggregateOutputType = {
    id_prestador: string | null
    nome: string | null
    email: string | null
    telefone: string | null
    endereco: string | null
    senha: string | null
    servicos: string | null
  }

  export type PrestadorMaxAggregateOutputType = {
    id_prestador: string | null
    nome: string | null
    email: string | null
    telefone: string | null
    endereco: string | null
    senha: string | null
    servicos: string | null
  }

  export type PrestadorCountAggregateOutputType = {
    id_prestador: number
    nome: number
    email: number
    telefone: number
    endereco: number
    senha: number
    servicos: number
    _all: number
  }


  export type PrestadorMinAggregateInputType = {
    id_prestador?: true
    nome?: true
    email?: true
    telefone?: true
    endereco?: true
    senha?: true
    servicos?: true
  }

  export type PrestadorMaxAggregateInputType = {
    id_prestador?: true
    nome?: true
    email?: true
    telefone?: true
    endereco?: true
    senha?: true
    servicos?: true
  }

  export type PrestadorCountAggregateInputType = {
    id_prestador?: true
    nome?: true
    email?: true
    telefone?: true
    endereco?: true
    senha?: true
    servicos?: true
    _all?: true
  }

  export type PrestadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prestador to aggregate.
     */
    where?: PrestadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prestadors to fetch.
     */
    orderBy?: PrestadorOrderByWithRelationInput | PrestadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrestadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prestadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prestadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prestadors
    **/
    _count?: true | PrestadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrestadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrestadorMaxAggregateInputType
  }

  export type GetPrestadorAggregateType<T extends PrestadorAggregateArgs> = {
        [P in keyof T & keyof AggregatePrestador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrestador[P]>
      : GetScalarType<T[P], AggregatePrestador[P]>
  }




  export type PrestadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrestadorWhereInput
    orderBy?: PrestadorOrderByWithAggregationInput | PrestadorOrderByWithAggregationInput[]
    by: PrestadorScalarFieldEnum[] | PrestadorScalarFieldEnum
    having?: PrestadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrestadorCountAggregateInputType | true
    _min?: PrestadorMinAggregateInputType
    _max?: PrestadorMaxAggregateInputType
  }

  export type PrestadorGroupByOutputType = {
    id_prestador: string
    nome: string | null
    email: string | null
    telefone: string | null
    endereco: string | null
    senha: string | null
    servicos: string | null
    _count: PrestadorCountAggregateOutputType | null
    _min: PrestadorMinAggregateOutputType | null
    _max: PrestadorMaxAggregateOutputType | null
  }

  type GetPrestadorGroupByPayload<T extends PrestadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrestadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrestadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrestadorGroupByOutputType[P]>
            : GetScalarType<T[P], PrestadorGroupByOutputType[P]>
        }
      >
    >


  export type PrestadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prestador?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    endereco?: boolean
    senha?: boolean
    servicos?: boolean
    servicos_list?: boolean | Prestador$servicos_listArgs<ExtArgs>
    agendamentos?: boolean | Prestador$agendamentosArgs<ExtArgs>
    notificacoes?: boolean | Prestador$notificacoesArgs<ExtArgs>
    _count?: boolean | PrestadorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prestador"]>

  export type PrestadorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prestador?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    endereco?: boolean
    senha?: boolean
    servicos?: boolean
  }, ExtArgs["result"]["prestador"]>

  export type PrestadorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prestador?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    endereco?: boolean
    senha?: boolean
    servicos?: boolean
  }, ExtArgs["result"]["prestador"]>

  export type PrestadorSelectScalar = {
    id_prestador?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    endereco?: boolean
    senha?: boolean
    servicos?: boolean
  }

  export type PrestadorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_prestador" | "nome" | "email" | "telefone" | "endereco" | "senha" | "servicos", ExtArgs["result"]["prestador"]>
  export type PrestadorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicos_list?: boolean | Prestador$servicos_listArgs<ExtArgs>
    agendamentos?: boolean | Prestador$agendamentosArgs<ExtArgs>
    notificacoes?: boolean | Prestador$notificacoesArgs<ExtArgs>
    _count?: boolean | PrestadorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PrestadorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PrestadorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PrestadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prestador"
    objects: {
      servicos_list: Prisma.$ServicoPayload<ExtArgs>[]
      agendamentos: Prisma.$AgendamentoPayload<ExtArgs>[]
      notificacoes: Prisma.$NotificacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_prestador: string
      nome: string | null
      email: string | null
      telefone: string | null
      endereco: string | null
      senha: string | null
      servicos: string | null
    }, ExtArgs["result"]["prestador"]>
    composites: {}
  }

  type PrestadorGetPayload<S extends boolean | null | undefined | PrestadorDefaultArgs> = $Result.GetResult<Prisma.$PrestadorPayload, S>

  type PrestadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrestadorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrestadorCountAggregateInputType | true
    }

  export interface PrestadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prestador'], meta: { name: 'Prestador' } }
    /**
     * Find zero or one Prestador that matches the filter.
     * @param {PrestadorFindUniqueArgs} args - Arguments to find a Prestador
     * @example
     * // Get one Prestador
     * const prestador = await prisma.prestador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrestadorFindUniqueArgs>(args: SelectSubset<T, PrestadorFindUniqueArgs<ExtArgs>>): Prisma__PrestadorClient<$Result.GetResult<Prisma.$PrestadorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prestador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrestadorFindUniqueOrThrowArgs} args - Arguments to find a Prestador
     * @example
     * // Get one Prestador
     * const prestador = await prisma.prestador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrestadorFindUniqueOrThrowArgs>(args: SelectSubset<T, PrestadorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrestadorClient<$Result.GetResult<Prisma.$PrestadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prestador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestadorFindFirstArgs} args - Arguments to find a Prestador
     * @example
     * // Get one Prestador
     * const prestador = await prisma.prestador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrestadorFindFirstArgs>(args?: SelectSubset<T, PrestadorFindFirstArgs<ExtArgs>>): Prisma__PrestadorClient<$Result.GetResult<Prisma.$PrestadorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prestador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestadorFindFirstOrThrowArgs} args - Arguments to find a Prestador
     * @example
     * // Get one Prestador
     * const prestador = await prisma.prestador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrestadorFindFirstOrThrowArgs>(args?: SelectSubset<T, PrestadorFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrestadorClient<$Result.GetResult<Prisma.$PrestadorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prestadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestadorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prestadors
     * const prestadors = await prisma.prestador.findMany()
     * 
     * // Get first 10 Prestadors
     * const prestadors = await prisma.prestador.findMany({ take: 10 })
     * 
     * // Only select the `id_prestador`
     * const prestadorWithId_prestadorOnly = await prisma.prestador.findMany({ select: { id_prestador: true } })
     * 
     */
    findMany<T extends PrestadorFindManyArgs>(args?: SelectSubset<T, PrestadorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prestador.
     * @param {PrestadorCreateArgs} args - Arguments to create a Prestador.
     * @example
     * // Create one Prestador
     * const Prestador = await prisma.prestador.create({
     *   data: {
     *     // ... data to create a Prestador
     *   }
     * })
     * 
     */
    create<T extends PrestadorCreateArgs>(args: SelectSubset<T, PrestadorCreateArgs<ExtArgs>>): Prisma__PrestadorClient<$Result.GetResult<Prisma.$PrestadorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prestadors.
     * @param {PrestadorCreateManyArgs} args - Arguments to create many Prestadors.
     * @example
     * // Create many Prestadors
     * const prestador = await prisma.prestador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrestadorCreateManyArgs>(args?: SelectSubset<T, PrestadorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prestadors and returns the data saved in the database.
     * @param {PrestadorCreateManyAndReturnArgs} args - Arguments to create many Prestadors.
     * @example
     * // Create many Prestadors
     * const prestador = await prisma.prestador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prestadors and only return the `id_prestador`
     * const prestadorWithId_prestadorOnly = await prisma.prestador.createManyAndReturn({
     *   select: { id_prestador: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrestadorCreateManyAndReturnArgs>(args?: SelectSubset<T, PrestadorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestadorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prestador.
     * @param {PrestadorDeleteArgs} args - Arguments to delete one Prestador.
     * @example
     * // Delete one Prestador
     * const Prestador = await prisma.prestador.delete({
     *   where: {
     *     // ... filter to delete one Prestador
     *   }
     * })
     * 
     */
    delete<T extends PrestadorDeleteArgs>(args: SelectSubset<T, PrestadorDeleteArgs<ExtArgs>>): Prisma__PrestadorClient<$Result.GetResult<Prisma.$PrestadorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prestador.
     * @param {PrestadorUpdateArgs} args - Arguments to update one Prestador.
     * @example
     * // Update one Prestador
     * const prestador = await prisma.prestador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrestadorUpdateArgs>(args: SelectSubset<T, PrestadorUpdateArgs<ExtArgs>>): Prisma__PrestadorClient<$Result.GetResult<Prisma.$PrestadorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prestadors.
     * @param {PrestadorDeleteManyArgs} args - Arguments to filter Prestadors to delete.
     * @example
     * // Delete a few Prestadors
     * const { count } = await prisma.prestador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrestadorDeleteManyArgs>(args?: SelectSubset<T, PrestadorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prestadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prestadors
     * const prestador = await prisma.prestador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrestadorUpdateManyArgs>(args: SelectSubset<T, PrestadorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prestadors and returns the data updated in the database.
     * @param {PrestadorUpdateManyAndReturnArgs} args - Arguments to update many Prestadors.
     * @example
     * // Update many Prestadors
     * const prestador = await prisma.prestador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prestadors and only return the `id_prestador`
     * const prestadorWithId_prestadorOnly = await prisma.prestador.updateManyAndReturn({
     *   select: { id_prestador: true },
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
    updateManyAndReturn<T extends PrestadorUpdateManyAndReturnArgs>(args: SelectSubset<T, PrestadorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestadorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prestador.
     * @param {PrestadorUpsertArgs} args - Arguments to update or create a Prestador.
     * @example
     * // Update or create a Prestador
     * const prestador = await prisma.prestador.upsert({
     *   create: {
     *     // ... data to create a Prestador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prestador we want to update
     *   }
     * })
     */
    upsert<T extends PrestadorUpsertArgs>(args: SelectSubset<T, PrestadorUpsertArgs<ExtArgs>>): Prisma__PrestadorClient<$Result.GetResult<Prisma.$PrestadorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prestadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestadorCountArgs} args - Arguments to filter Prestadors to count.
     * @example
     * // Count the number of Prestadors
     * const count = await prisma.prestador.count({
     *   where: {
     *     // ... the filter for the Prestadors we want to count
     *   }
     * })
    **/
    count<T extends PrestadorCountArgs>(
      args?: Subset<T, PrestadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrestadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prestador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrestadorAggregateArgs>(args: Subset<T, PrestadorAggregateArgs>): Prisma.PrismaPromise<GetPrestadorAggregateType<T>>

    /**
     * Group by Prestador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestadorGroupByArgs} args - Group by arguments.
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
      T extends PrestadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrestadorGroupByArgs['orderBy'] }
        : { orderBy?: PrestadorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrestadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrestadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prestador model
   */
  readonly fields: PrestadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prestador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrestadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servicos_list<T extends Prestador$servicos_listArgs<ExtArgs> = {}>(args?: Subset<T, Prestador$servicos_listArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    agendamentos<T extends Prestador$agendamentosArgs<ExtArgs> = {}>(args?: Subset<T, Prestador$agendamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificacoes<T extends Prestador$notificacoesArgs<ExtArgs> = {}>(args?: Subset<T, Prestador$notificacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Prestador model
   */
  interface PrestadorFieldRefs {
    readonly id_prestador: FieldRef<"Prestador", 'String'>
    readonly nome: FieldRef<"Prestador", 'String'>
    readonly email: FieldRef<"Prestador", 'String'>
    readonly telefone: FieldRef<"Prestador", 'String'>
    readonly endereco: FieldRef<"Prestador", 'String'>
    readonly senha: FieldRef<"Prestador", 'String'>
    readonly servicos: FieldRef<"Prestador", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Prestador findUnique
   */
  export type PrestadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestador
     */
    select?: PrestadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestador
     */
    omit?: PrestadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestadorInclude<ExtArgs> | null
    /**
     * Filter, which Prestador to fetch.
     */
    where: PrestadorWhereUniqueInput
  }

  /**
   * Prestador findUniqueOrThrow
   */
  export type PrestadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestador
     */
    select?: PrestadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestador
     */
    omit?: PrestadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestadorInclude<ExtArgs> | null
    /**
     * Filter, which Prestador to fetch.
     */
    where: PrestadorWhereUniqueInput
  }

  /**
   * Prestador findFirst
   */
  export type PrestadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestador
     */
    select?: PrestadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestador
     */
    omit?: PrestadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestadorInclude<ExtArgs> | null
    /**
     * Filter, which Prestador to fetch.
     */
    where?: PrestadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prestadors to fetch.
     */
    orderBy?: PrestadorOrderByWithRelationInput | PrestadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prestadors.
     */
    cursor?: PrestadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prestadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prestadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prestadors.
     */
    distinct?: PrestadorScalarFieldEnum | PrestadorScalarFieldEnum[]
  }

  /**
   * Prestador findFirstOrThrow
   */
  export type PrestadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestador
     */
    select?: PrestadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestador
     */
    omit?: PrestadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestadorInclude<ExtArgs> | null
    /**
     * Filter, which Prestador to fetch.
     */
    where?: PrestadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prestadors to fetch.
     */
    orderBy?: PrestadorOrderByWithRelationInput | PrestadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prestadors.
     */
    cursor?: PrestadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prestadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prestadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prestadors.
     */
    distinct?: PrestadorScalarFieldEnum | PrestadorScalarFieldEnum[]
  }

  /**
   * Prestador findMany
   */
  export type PrestadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestador
     */
    select?: PrestadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestador
     */
    omit?: PrestadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestadorInclude<ExtArgs> | null
    /**
     * Filter, which Prestadors to fetch.
     */
    where?: PrestadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prestadors to fetch.
     */
    orderBy?: PrestadorOrderByWithRelationInput | PrestadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prestadors.
     */
    cursor?: PrestadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prestadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prestadors.
     */
    skip?: number
    distinct?: PrestadorScalarFieldEnum | PrestadorScalarFieldEnum[]
  }

  /**
   * Prestador create
   */
  export type PrestadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestador
     */
    select?: PrestadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestador
     */
    omit?: PrestadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestadorInclude<ExtArgs> | null
    /**
     * The data needed to create a Prestador.
     */
    data: XOR<PrestadorCreateInput, PrestadorUncheckedCreateInput>
  }

  /**
   * Prestador createMany
   */
  export type PrestadorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prestadors.
     */
    data: PrestadorCreateManyInput | PrestadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prestador createManyAndReturn
   */
  export type PrestadorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestador
     */
    select?: PrestadorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prestador
     */
    omit?: PrestadorOmit<ExtArgs> | null
    /**
     * The data used to create many Prestadors.
     */
    data: PrestadorCreateManyInput | PrestadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prestador update
   */
  export type PrestadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestador
     */
    select?: PrestadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestador
     */
    omit?: PrestadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestadorInclude<ExtArgs> | null
    /**
     * The data needed to update a Prestador.
     */
    data: XOR<PrestadorUpdateInput, PrestadorUncheckedUpdateInput>
    /**
     * Choose, which Prestador to update.
     */
    where: PrestadorWhereUniqueInput
  }

  /**
   * Prestador updateMany
   */
  export type PrestadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prestadors.
     */
    data: XOR<PrestadorUpdateManyMutationInput, PrestadorUncheckedUpdateManyInput>
    /**
     * Filter which Prestadors to update
     */
    where?: PrestadorWhereInput
    /**
     * Limit how many Prestadors to update.
     */
    limit?: number
  }

  /**
   * Prestador updateManyAndReturn
   */
  export type PrestadorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestador
     */
    select?: PrestadorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prestador
     */
    omit?: PrestadorOmit<ExtArgs> | null
    /**
     * The data used to update Prestadors.
     */
    data: XOR<PrestadorUpdateManyMutationInput, PrestadorUncheckedUpdateManyInput>
    /**
     * Filter which Prestadors to update
     */
    where?: PrestadorWhereInput
    /**
     * Limit how many Prestadors to update.
     */
    limit?: number
  }

  /**
   * Prestador upsert
   */
  export type PrestadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestador
     */
    select?: PrestadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestador
     */
    omit?: PrestadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestadorInclude<ExtArgs> | null
    /**
     * The filter to search for the Prestador to update in case it exists.
     */
    where: PrestadorWhereUniqueInput
    /**
     * In case the Prestador found by the `where` argument doesn't exist, create a new Prestador with this data.
     */
    create: XOR<PrestadorCreateInput, PrestadorUncheckedCreateInput>
    /**
     * In case the Prestador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrestadorUpdateInput, PrestadorUncheckedUpdateInput>
  }

  /**
   * Prestador delete
   */
  export type PrestadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestador
     */
    select?: PrestadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestador
     */
    omit?: PrestadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestadorInclude<ExtArgs> | null
    /**
     * Filter which Prestador to delete.
     */
    where: PrestadorWhereUniqueInput
  }

  /**
   * Prestador deleteMany
   */
  export type PrestadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prestadors to delete
     */
    where?: PrestadorWhereInput
    /**
     * Limit how many Prestadors to delete.
     */
    limit?: number
  }

  /**
   * Prestador.servicos_list
   */
  export type Prestador$servicos_listArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    where?: ServicoWhereInput
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    cursor?: ServicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Prestador.agendamentos
   */
  export type Prestador$agendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    where?: AgendamentoWhereInput
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    cursor?: AgendamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }

  /**
   * Prestador.notificacoes
   */
  export type Prestador$notificacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    where?: NotificacaoWhereInput
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    cursor?: NotificacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Prestador without action
   */
  export type PrestadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestador
     */
    select?: PrestadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestador
     */
    omit?: PrestadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestadorInclude<ExtArgs> | null
  }


  /**
   * Model Pet
   */

  export type AggregatePet = {
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  export type PetAvgAggregateOutputType = {
    idade: number | null
  }

  export type PetSumAggregateOutputType = {
    idade: number | null
  }

  export type PetMinAggregateOutputType = {
    id_pet: string | null
    id_tutor: string | null
    nome: string | null
    especie: string | null
    raca: string | null
    idade: number | null
    restricoes: string | null
  }

  export type PetMaxAggregateOutputType = {
    id_pet: string | null
    id_tutor: string | null
    nome: string | null
    especie: string | null
    raca: string | null
    idade: number | null
    restricoes: string | null
  }

  export type PetCountAggregateOutputType = {
    id_pet: number
    id_tutor: number
    nome: number
    especie: number
    raca: number
    idade: number
    restricoes: number
    _all: number
  }


  export type PetAvgAggregateInputType = {
    idade?: true
  }

  export type PetSumAggregateInputType = {
    idade?: true
  }

  export type PetMinAggregateInputType = {
    id_pet?: true
    id_tutor?: true
    nome?: true
    especie?: true
    raca?: true
    idade?: true
    restricoes?: true
  }

  export type PetMaxAggregateInputType = {
    id_pet?: true
    id_tutor?: true
    nome?: true
    especie?: true
    raca?: true
    idade?: true
    restricoes?: true
  }

  export type PetCountAggregateInputType = {
    id_pet?: true
    id_tutor?: true
    nome?: true
    especie?: true
    raca?: true
    idade?: true
    restricoes?: true
    _all?: true
  }

  export type PetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pet to aggregate.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pets
    **/
    _count?: true | PetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetMaxAggregateInputType
  }

  export type GetPetAggregateType<T extends PetAggregateArgs> = {
        [P in keyof T & keyof AggregatePet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePet[P]>
      : GetScalarType<T[P], AggregatePet[P]>
  }




  export type PetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
    orderBy?: PetOrderByWithAggregationInput | PetOrderByWithAggregationInput[]
    by: PetScalarFieldEnum[] | PetScalarFieldEnum
    having?: PetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetCountAggregateInputType | true
    _avg?: PetAvgAggregateInputType
    _sum?: PetSumAggregateInputType
    _min?: PetMinAggregateInputType
    _max?: PetMaxAggregateInputType
  }

  export type PetGroupByOutputType = {
    id_pet: string
    id_tutor: string | null
    nome: string | null
    especie: string | null
    raca: string | null
    idade: number | null
    restricoes: string | null
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  type GetPetGroupByPayload<T extends PetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetGroupByOutputType[P]>
            : GetScalarType<T[P], PetGroupByOutputType[P]>
        }
      >
    >


  export type PetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pet?: boolean
    id_tutor?: boolean
    nome?: boolean
    especie?: boolean
    raca?: boolean
    idade?: boolean
    restricoes?: boolean
    tutor?: boolean | Pet$tutorArgs<ExtArgs>
    reservas?: boolean | Pet$reservasArgs<ExtArgs>
    _count?: boolean | PetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pet?: boolean
    id_tutor?: boolean
    nome?: boolean
    especie?: boolean
    raca?: boolean
    idade?: boolean
    restricoes?: boolean
    tutor?: boolean | Pet$tutorArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pet?: boolean
    id_tutor?: boolean
    nome?: boolean
    especie?: boolean
    raca?: boolean
    idade?: boolean
    restricoes?: boolean
    tutor?: boolean | Pet$tutorArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectScalar = {
    id_pet?: boolean
    id_tutor?: boolean
    nome?: boolean
    especie?: boolean
    raca?: boolean
    idade?: boolean
    restricoes?: boolean
  }

  export type PetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pet" | "id_tutor" | "nome" | "especie" | "raca" | "idade" | "restricoes", ExtArgs["result"]["pet"]>
  export type PetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | Pet$tutorArgs<ExtArgs>
    reservas?: boolean | Pet$reservasArgs<ExtArgs>
    _count?: boolean | PetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | Pet$tutorArgs<ExtArgs>
  }
  export type PetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | Pet$tutorArgs<ExtArgs>
  }

  export type $PetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pet"
    objects: {
      tutor: Prisma.$TutorPayload<ExtArgs> | null
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pet: string
      id_tutor: string | null
      nome: string | null
      especie: string | null
      raca: string | null
      idade: number | null
      restricoes: string | null
    }, ExtArgs["result"]["pet"]>
    composites: {}
  }

  type PetGetPayload<S extends boolean | null | undefined | PetDefaultArgs> = $Result.GetResult<Prisma.$PetPayload, S>

  type PetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetCountAggregateInputType | true
    }

  export interface PetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pet'], meta: { name: 'Pet' } }
    /**
     * Find zero or one Pet that matches the filter.
     * @param {PetFindUniqueArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PetFindUniqueArgs>(args: SelectSubset<T, PetFindUniqueArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PetFindUniqueOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PetFindUniqueOrThrowArgs>(args: SelectSubset<T, PetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PetFindFirstArgs>(args?: SelectSubset<T, PetFindFirstArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PetFindFirstOrThrowArgs>(args?: SelectSubset<T, PetFindFirstOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pets
     * const pets = await prisma.pet.findMany()
     * 
     * // Get first 10 Pets
     * const pets = await prisma.pet.findMany({ take: 10 })
     * 
     * // Only select the `id_pet`
     * const petWithId_petOnly = await prisma.pet.findMany({ select: { id_pet: true } })
     * 
     */
    findMany<T extends PetFindManyArgs>(args?: SelectSubset<T, PetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pet.
     * @param {PetCreateArgs} args - Arguments to create a Pet.
     * @example
     * // Create one Pet
     * const Pet = await prisma.pet.create({
     *   data: {
     *     // ... data to create a Pet
     *   }
     * })
     * 
     */
    create<T extends PetCreateArgs>(args: SelectSubset<T, PetCreateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pets.
     * @param {PetCreateManyArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PetCreateManyArgs>(args?: SelectSubset<T, PetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pets and returns the data saved in the database.
     * @param {PetCreateManyAndReturnArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pets and only return the `id_pet`
     * const petWithId_petOnly = await prisma.pet.createManyAndReturn({
     *   select: { id_pet: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PetCreateManyAndReturnArgs>(args?: SelectSubset<T, PetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pet.
     * @param {PetDeleteArgs} args - Arguments to delete one Pet.
     * @example
     * // Delete one Pet
     * const Pet = await prisma.pet.delete({
     *   where: {
     *     // ... filter to delete one Pet
     *   }
     * })
     * 
     */
    delete<T extends PetDeleteArgs>(args: SelectSubset<T, PetDeleteArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pet.
     * @param {PetUpdateArgs} args - Arguments to update one Pet.
     * @example
     * // Update one Pet
     * const pet = await prisma.pet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PetUpdateArgs>(args: SelectSubset<T, PetUpdateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pets.
     * @param {PetDeleteManyArgs} args - Arguments to filter Pets to delete.
     * @example
     * // Delete a few Pets
     * const { count } = await prisma.pet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PetDeleteManyArgs>(args?: SelectSubset<T, PetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PetUpdateManyArgs>(args: SelectSubset<T, PetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets and returns the data updated in the database.
     * @param {PetUpdateManyAndReturnArgs} args - Arguments to update many Pets.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pets and only return the `id_pet`
     * const petWithId_petOnly = await prisma.pet.updateManyAndReturn({
     *   select: { id_pet: true },
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
    updateManyAndReturn<T extends PetUpdateManyAndReturnArgs>(args: SelectSubset<T, PetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pet.
     * @param {PetUpsertArgs} args - Arguments to update or create a Pet.
     * @example
     * // Update or create a Pet
     * const pet = await prisma.pet.upsert({
     *   create: {
     *     // ... data to create a Pet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pet we want to update
     *   }
     * })
     */
    upsert<T extends PetUpsertArgs>(args: SelectSubset<T, PetUpsertArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetCountArgs} args - Arguments to filter Pets to count.
     * @example
     * // Count the number of Pets
     * const count = await prisma.pet.count({
     *   where: {
     *     // ... the filter for the Pets we want to count
     *   }
     * })
    **/
    count<T extends PetCountArgs>(
      args?: Subset<T, PetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PetAggregateArgs>(args: Subset<T, PetAggregateArgs>): Prisma.PrismaPromise<GetPetAggregateType<T>>

    /**
     * Group by Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetGroupByArgs} args - Group by arguments.
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
      T extends PetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PetGroupByArgs['orderBy'] }
        : { orderBy?: PetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pet model
   */
  readonly fields: PetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tutor<T extends Pet$tutorArgs<ExtArgs> = {}>(args?: Subset<T, Pet$tutorArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reservas<T extends Pet$reservasArgs<ExtArgs> = {}>(args?: Subset<T, Pet$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pet model
   */
  interface PetFieldRefs {
    readonly id_pet: FieldRef<"Pet", 'String'>
    readonly id_tutor: FieldRef<"Pet", 'String'>
    readonly nome: FieldRef<"Pet", 'String'>
    readonly especie: FieldRef<"Pet", 'String'>
    readonly raca: FieldRef<"Pet", 'String'>
    readonly idade: FieldRef<"Pet", 'Int'>
    readonly restricoes: FieldRef<"Pet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pet findUnique
   */
  export type PetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findUniqueOrThrow
   */
  export type PetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findFirst
   */
  export type PetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findFirstOrThrow
   */
  export type PetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findMany
   */
  export type PetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pets to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet create
   */
  export type PetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to create a Pet.
     */
    data: XOR<PetCreateInput, PetUncheckedCreateInput>
  }

  /**
   * Pet createMany
   */
  export type PetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pet createManyAndReturn
   */
  export type PetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pet update
   */
  export type PetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to update a Pet.
     */
    data: XOR<PetUpdateInput, PetUncheckedUpdateInput>
    /**
     * Choose, which Pet to update.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet updateMany
   */
  export type PetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pets.
     */
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
  }

  /**
   * Pet updateManyAndReturn
   */
  export type PetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * The data used to update Pets.
     */
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pet upsert
   */
  export type PetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The filter to search for the Pet to update in case it exists.
     */
    where: PetWhereUniqueInput
    /**
     * In case the Pet found by the `where` argument doesn't exist, create a new Pet with this data.
     */
    create: XOR<PetCreateInput, PetUncheckedCreateInput>
    /**
     * In case the Pet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PetUpdateInput, PetUncheckedUpdateInput>
  }

  /**
   * Pet delete
   */
  export type PetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter which Pet to delete.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet deleteMany
   */
  export type PetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pets to delete
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to delete.
     */
    limit?: number
  }

  /**
   * Pet.tutor
   */
  export type Pet$tutorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    where?: TutorWhereInput
  }

  /**
   * Pet.reservas
   */
  export type Pet$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    cursor?: ReservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Pet without action
   */
  export type PetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
  }


  /**
   * Model Servico
   */

  export type AggregateServico = {
    _count: ServicoCountAggregateOutputType | null
    _avg: ServicoAvgAggregateOutputType | null
    _sum: ServicoSumAggregateOutputType | null
    _min: ServicoMinAggregateOutputType | null
    _max: ServicoMaxAggregateOutputType | null
  }

  export type ServicoAvgAggregateOutputType = {
    preco: number | null
  }

  export type ServicoSumAggregateOutputType = {
    preco: number | null
  }

  export type ServicoMinAggregateOutputType = {
    id_servico: string | null
    id_prestador: string | null
    descricao: string | null
    titulo: string | null
    preco: number | null
    tipo: string | null
  }

  export type ServicoMaxAggregateOutputType = {
    id_servico: string | null
    id_prestador: string | null
    descricao: string | null
    titulo: string | null
    preco: number | null
    tipo: string | null
  }

  export type ServicoCountAggregateOutputType = {
    id_servico: number
    id_prestador: number
    descricao: number
    titulo: number
    preco: number
    tipo: number
    _all: number
  }


  export type ServicoAvgAggregateInputType = {
    preco?: true
  }

  export type ServicoSumAggregateInputType = {
    preco?: true
  }

  export type ServicoMinAggregateInputType = {
    id_servico?: true
    id_prestador?: true
    descricao?: true
    titulo?: true
    preco?: true
    tipo?: true
  }

  export type ServicoMaxAggregateInputType = {
    id_servico?: true
    id_prestador?: true
    descricao?: true
    titulo?: true
    preco?: true
    tipo?: true
  }

  export type ServicoCountAggregateInputType = {
    id_servico?: true
    id_prestador?: true
    descricao?: true
    titulo?: true
    preco?: true
    tipo?: true
    _all?: true
  }

  export type ServicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servico to aggregate.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Servicos
    **/
    _count?: true | ServicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicoMaxAggregateInputType
  }

  export type GetServicoAggregateType<T extends ServicoAggregateArgs> = {
        [P in keyof T & keyof AggregateServico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServico[P]>
      : GetScalarType<T[P], AggregateServico[P]>
  }




  export type ServicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicoWhereInput
    orderBy?: ServicoOrderByWithAggregationInput | ServicoOrderByWithAggregationInput[]
    by: ServicoScalarFieldEnum[] | ServicoScalarFieldEnum
    having?: ServicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicoCountAggregateInputType | true
    _avg?: ServicoAvgAggregateInputType
    _sum?: ServicoSumAggregateInputType
    _min?: ServicoMinAggregateInputType
    _max?: ServicoMaxAggregateInputType
  }

  export type ServicoGroupByOutputType = {
    id_servico: string
    id_prestador: string | null
    descricao: string | null
    titulo: string | null
    preco: number | null
    tipo: string | null
    _count: ServicoCountAggregateOutputType | null
    _avg: ServicoAvgAggregateOutputType | null
    _sum: ServicoSumAggregateOutputType | null
    _min: ServicoMinAggregateOutputType | null
    _max: ServicoMaxAggregateOutputType | null
  }

  type GetServicoGroupByPayload<T extends ServicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicoGroupByOutputType[P]>
            : GetScalarType<T[P], ServicoGroupByOutputType[P]>
        }
      >
    >


  export type ServicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_servico?: boolean
    id_prestador?: boolean
    descricao?: boolean
    titulo?: boolean
    preco?: boolean
    tipo?: boolean
    prestador?: boolean | Servico$prestadorArgs<ExtArgs>
    reservas?: boolean | Servico$reservasArgs<ExtArgs>
    _count?: boolean | ServicoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servico"]>

  export type ServicoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_servico?: boolean
    id_prestador?: boolean
    descricao?: boolean
    titulo?: boolean
    preco?: boolean
    tipo?: boolean
    prestador?: boolean | Servico$prestadorArgs<ExtArgs>
  }, ExtArgs["result"]["servico"]>

  export type ServicoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_servico?: boolean
    id_prestador?: boolean
    descricao?: boolean
    titulo?: boolean
    preco?: boolean
    tipo?: boolean
    prestador?: boolean | Servico$prestadorArgs<ExtArgs>
  }, ExtArgs["result"]["servico"]>

  export type ServicoSelectScalar = {
    id_servico?: boolean
    id_prestador?: boolean
    descricao?: boolean
    titulo?: boolean
    preco?: boolean
    tipo?: boolean
  }

  export type ServicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_servico" | "id_prestador" | "descricao" | "titulo" | "preco" | "tipo", ExtArgs["result"]["servico"]>
  export type ServicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestador?: boolean | Servico$prestadorArgs<ExtArgs>
    reservas?: boolean | Servico$reservasArgs<ExtArgs>
    _count?: boolean | ServicoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServicoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestador?: boolean | Servico$prestadorArgs<ExtArgs>
  }
  export type ServicoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestador?: boolean | Servico$prestadorArgs<ExtArgs>
  }

  export type $ServicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Servico"
    objects: {
      prestador: Prisma.$PrestadorPayload<ExtArgs> | null
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_servico: string
      id_prestador: string | null
      descricao: string | null
      titulo: string | null
      preco: number | null
      tipo: string | null
    }, ExtArgs["result"]["servico"]>
    composites: {}
  }

  type ServicoGetPayload<S extends boolean | null | undefined | ServicoDefaultArgs> = $Result.GetResult<Prisma.$ServicoPayload, S>

  type ServicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicoCountAggregateInputType | true
    }

  export interface ServicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Servico'], meta: { name: 'Servico' } }
    /**
     * Find zero or one Servico that matches the filter.
     * @param {ServicoFindUniqueArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicoFindUniqueArgs>(args: SelectSubset<T, ServicoFindUniqueArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicoFindUniqueOrThrowArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicoFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoFindFirstArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicoFindFirstArgs>(args?: SelectSubset<T, ServicoFindFirstArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoFindFirstOrThrowArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicoFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicos
     * const servicos = await prisma.servico.findMany()
     * 
     * // Get first 10 Servicos
     * const servicos = await prisma.servico.findMany({ take: 10 })
     * 
     * // Only select the `id_servico`
     * const servicoWithId_servicoOnly = await prisma.servico.findMany({ select: { id_servico: true } })
     * 
     */
    findMany<T extends ServicoFindManyArgs>(args?: SelectSubset<T, ServicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servico.
     * @param {ServicoCreateArgs} args - Arguments to create a Servico.
     * @example
     * // Create one Servico
     * const Servico = await prisma.servico.create({
     *   data: {
     *     // ... data to create a Servico
     *   }
     * })
     * 
     */
    create<T extends ServicoCreateArgs>(args: SelectSubset<T, ServicoCreateArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servicos.
     * @param {ServicoCreateManyArgs} args - Arguments to create many Servicos.
     * @example
     * // Create many Servicos
     * const servico = await prisma.servico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicoCreateManyArgs>(args?: SelectSubset<T, ServicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Servicos and returns the data saved in the database.
     * @param {ServicoCreateManyAndReturnArgs} args - Arguments to create many Servicos.
     * @example
     * // Create many Servicos
     * const servico = await prisma.servico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Servicos and only return the `id_servico`
     * const servicoWithId_servicoOnly = await prisma.servico.createManyAndReturn({
     *   select: { id_servico: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServicoCreateManyAndReturnArgs>(args?: SelectSubset<T, ServicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Servico.
     * @param {ServicoDeleteArgs} args - Arguments to delete one Servico.
     * @example
     * // Delete one Servico
     * const Servico = await prisma.servico.delete({
     *   where: {
     *     // ... filter to delete one Servico
     *   }
     * })
     * 
     */
    delete<T extends ServicoDeleteArgs>(args: SelectSubset<T, ServicoDeleteArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servico.
     * @param {ServicoUpdateArgs} args - Arguments to update one Servico.
     * @example
     * // Update one Servico
     * const servico = await prisma.servico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicoUpdateArgs>(args: SelectSubset<T, ServicoUpdateArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servicos.
     * @param {ServicoDeleteManyArgs} args - Arguments to filter Servicos to delete.
     * @example
     * // Delete a few Servicos
     * const { count } = await prisma.servico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicoDeleteManyArgs>(args?: SelectSubset<T, ServicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicos
     * const servico = await prisma.servico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicoUpdateManyArgs>(args: SelectSubset<T, ServicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicos and returns the data updated in the database.
     * @param {ServicoUpdateManyAndReturnArgs} args - Arguments to update many Servicos.
     * @example
     * // Update many Servicos
     * const servico = await prisma.servico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Servicos and only return the `id_servico`
     * const servicoWithId_servicoOnly = await prisma.servico.updateManyAndReturn({
     *   select: { id_servico: true },
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
    updateManyAndReturn<T extends ServicoUpdateManyAndReturnArgs>(args: SelectSubset<T, ServicoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Servico.
     * @param {ServicoUpsertArgs} args - Arguments to update or create a Servico.
     * @example
     * // Update or create a Servico
     * const servico = await prisma.servico.upsert({
     *   create: {
     *     // ... data to create a Servico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servico we want to update
     *   }
     * })
     */
    upsert<T extends ServicoUpsertArgs>(args: SelectSubset<T, ServicoUpsertArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoCountArgs} args - Arguments to filter Servicos to count.
     * @example
     * // Count the number of Servicos
     * const count = await prisma.servico.count({
     *   where: {
     *     // ... the filter for the Servicos we want to count
     *   }
     * })
    **/
    count<T extends ServicoCountArgs>(
      args?: Subset<T, ServicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServicoAggregateArgs>(args: Subset<T, ServicoAggregateArgs>): Prisma.PrismaPromise<GetServicoAggregateType<T>>

    /**
     * Group by Servico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoGroupByArgs} args - Group by arguments.
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
      T extends ServicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicoGroupByArgs['orderBy'] }
        : { orderBy?: ServicoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Servico model
   */
  readonly fields: ServicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Servico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prestador<T extends Servico$prestadorArgs<ExtArgs> = {}>(args?: Subset<T, Servico$prestadorArgs<ExtArgs>>): Prisma__PrestadorClient<$Result.GetResult<Prisma.$PrestadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reservas<T extends Servico$reservasArgs<ExtArgs> = {}>(args?: Subset<T, Servico$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Servico model
   */
  interface ServicoFieldRefs {
    readonly id_servico: FieldRef<"Servico", 'String'>
    readonly id_prestador: FieldRef<"Servico", 'String'>
    readonly descricao: FieldRef<"Servico", 'String'>
    readonly titulo: FieldRef<"Servico", 'String'>
    readonly preco: FieldRef<"Servico", 'Float'>
    readonly tipo: FieldRef<"Servico", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Servico findUnique
   */
  export type ServicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico findUniqueOrThrow
   */
  export type ServicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico findFirst
   */
  export type ServicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicos.
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicos.
     */
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Servico findFirstOrThrow
   */
  export type ServicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicos.
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicos.
     */
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Servico findMany
   */
  export type ServicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servicos to fetch.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Servicos.
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Servico create
   */
  export type ServicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * The data needed to create a Servico.
     */
    data: XOR<ServicoCreateInput, ServicoUncheckedCreateInput>
  }

  /**
   * Servico createMany
   */
  export type ServicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Servicos.
     */
    data: ServicoCreateManyInput | ServicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Servico createManyAndReturn
   */
  export type ServicoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * The data used to create many Servicos.
     */
    data: ServicoCreateManyInput | ServicoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Servico update
   */
  export type ServicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * The data needed to update a Servico.
     */
    data: XOR<ServicoUpdateInput, ServicoUncheckedUpdateInput>
    /**
     * Choose, which Servico to update.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico updateMany
   */
  export type ServicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Servicos.
     */
    data: XOR<ServicoUpdateManyMutationInput, ServicoUncheckedUpdateManyInput>
    /**
     * Filter which Servicos to update
     */
    where?: ServicoWhereInput
    /**
     * Limit how many Servicos to update.
     */
    limit?: number
  }

  /**
   * Servico updateManyAndReturn
   */
  export type ServicoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * The data used to update Servicos.
     */
    data: XOR<ServicoUpdateManyMutationInput, ServicoUncheckedUpdateManyInput>
    /**
     * Filter which Servicos to update
     */
    where?: ServicoWhereInput
    /**
     * Limit how many Servicos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Servico upsert
   */
  export type ServicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * The filter to search for the Servico to update in case it exists.
     */
    where: ServicoWhereUniqueInput
    /**
     * In case the Servico found by the `where` argument doesn't exist, create a new Servico with this data.
     */
    create: XOR<ServicoCreateInput, ServicoUncheckedCreateInput>
    /**
     * In case the Servico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicoUpdateInput, ServicoUncheckedUpdateInput>
  }

  /**
   * Servico delete
   */
  export type ServicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter which Servico to delete.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico deleteMany
   */
  export type ServicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicos to delete
     */
    where?: ServicoWhereInput
    /**
     * Limit how many Servicos to delete.
     */
    limit?: number
  }

  /**
   * Servico.prestador
   */
  export type Servico$prestadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestador
     */
    select?: PrestadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestador
     */
    omit?: PrestadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestadorInclude<ExtArgs> | null
    where?: PrestadorWhereInput
  }

  /**
   * Servico.reservas
   */
  export type Servico$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    cursor?: ReservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Servico without action
   */
  export type ServicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
  }


  /**
   * Model Agendamento
   */

  export type AggregateAgendamento = {
    _count: AgendamentoCountAggregateOutputType | null
    _min: AgendamentoMinAggregateOutputType | null
    _max: AgendamentoMaxAggregateOutputType | null
  }

  export type AgendamentoMinAggregateOutputType = {
    id_agendamento: string | null
    id_prestador: string | null
    data_inicio: Date | null
    data_fim: Date | null
    disponivel: boolean | null
  }

  export type AgendamentoMaxAggregateOutputType = {
    id_agendamento: string | null
    id_prestador: string | null
    data_inicio: Date | null
    data_fim: Date | null
    disponivel: boolean | null
  }

  export type AgendamentoCountAggregateOutputType = {
    id_agendamento: number
    id_prestador: number
    data_inicio: number
    data_fim: number
    disponivel: number
    _all: number
  }


  export type AgendamentoMinAggregateInputType = {
    id_agendamento?: true
    id_prestador?: true
    data_inicio?: true
    data_fim?: true
    disponivel?: true
  }

  export type AgendamentoMaxAggregateInputType = {
    id_agendamento?: true
    id_prestador?: true
    data_inicio?: true
    data_fim?: true
    disponivel?: true
  }

  export type AgendamentoCountAggregateInputType = {
    id_agendamento?: true
    id_prestador?: true
    data_inicio?: true
    data_fim?: true
    disponivel?: true
    _all?: true
  }

  export type AgendamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agendamento to aggregate.
     */
    where?: AgendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agendamentos
    **/
    _count?: true | AgendamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgendamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgendamentoMaxAggregateInputType
  }

  export type GetAgendamentoAggregateType<T extends AgendamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateAgendamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgendamento[P]>
      : GetScalarType<T[P], AggregateAgendamento[P]>
  }




  export type AgendamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendamentoWhereInput
    orderBy?: AgendamentoOrderByWithAggregationInput | AgendamentoOrderByWithAggregationInput[]
    by: AgendamentoScalarFieldEnum[] | AgendamentoScalarFieldEnum
    having?: AgendamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgendamentoCountAggregateInputType | true
    _min?: AgendamentoMinAggregateInputType
    _max?: AgendamentoMaxAggregateInputType
  }

  export type AgendamentoGroupByOutputType = {
    id_agendamento: string
    id_prestador: string | null
    data_inicio: Date | null
    data_fim: Date | null
    disponivel: boolean | null
    _count: AgendamentoCountAggregateOutputType | null
    _min: AgendamentoMinAggregateOutputType | null
    _max: AgendamentoMaxAggregateOutputType | null
  }

  type GetAgendamentoGroupByPayload<T extends AgendamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgendamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgendamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgendamentoGroupByOutputType[P]>
            : GetScalarType<T[P], AgendamentoGroupByOutputType[P]>
        }
      >
    >


  export type AgendamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_agendamento?: boolean
    id_prestador?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    disponivel?: boolean
    prestador?: boolean | Agendamento$prestadorArgs<ExtArgs>
    reservas?: boolean | Agendamento$reservasArgs<ExtArgs>
    _count?: boolean | AgendamentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agendamento"]>

  export type AgendamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_agendamento?: boolean
    id_prestador?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    disponivel?: boolean
    prestador?: boolean | Agendamento$prestadorArgs<ExtArgs>
  }, ExtArgs["result"]["agendamento"]>

  export type AgendamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_agendamento?: boolean
    id_prestador?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    disponivel?: boolean
    prestador?: boolean | Agendamento$prestadorArgs<ExtArgs>
  }, ExtArgs["result"]["agendamento"]>

  export type AgendamentoSelectScalar = {
    id_agendamento?: boolean
    id_prestador?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    disponivel?: boolean
  }

  export type AgendamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_agendamento" | "id_prestador" | "data_inicio" | "data_fim" | "disponivel", ExtArgs["result"]["agendamento"]>
  export type AgendamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestador?: boolean | Agendamento$prestadorArgs<ExtArgs>
    reservas?: boolean | Agendamento$reservasArgs<ExtArgs>
    _count?: boolean | AgendamentoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AgendamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestador?: boolean | Agendamento$prestadorArgs<ExtArgs>
  }
  export type AgendamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestador?: boolean | Agendamento$prestadorArgs<ExtArgs>
  }

  export type $AgendamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agendamento"
    objects: {
      prestador: Prisma.$PrestadorPayload<ExtArgs> | null
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_agendamento: string
      id_prestador: string | null
      data_inicio: Date | null
      data_fim: Date | null
      disponivel: boolean | null
    }, ExtArgs["result"]["agendamento"]>
    composites: {}
  }

  type AgendamentoGetPayload<S extends boolean | null | undefined | AgendamentoDefaultArgs> = $Result.GetResult<Prisma.$AgendamentoPayload, S>

  type AgendamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgendamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgendamentoCountAggregateInputType | true
    }

  export interface AgendamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agendamento'], meta: { name: 'Agendamento' } }
    /**
     * Find zero or one Agendamento that matches the filter.
     * @param {AgendamentoFindUniqueArgs} args - Arguments to find a Agendamento
     * @example
     * // Get one Agendamento
     * const agendamento = await prisma.agendamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgendamentoFindUniqueArgs>(args: SelectSubset<T, AgendamentoFindUniqueArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agendamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgendamentoFindUniqueOrThrowArgs} args - Arguments to find a Agendamento
     * @example
     * // Get one Agendamento
     * const agendamento = await prisma.agendamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgendamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, AgendamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agendamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoFindFirstArgs} args - Arguments to find a Agendamento
     * @example
     * // Get one Agendamento
     * const agendamento = await prisma.agendamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgendamentoFindFirstArgs>(args?: SelectSubset<T, AgendamentoFindFirstArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agendamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoFindFirstOrThrowArgs} args - Arguments to find a Agendamento
     * @example
     * // Get one Agendamento
     * const agendamento = await prisma.agendamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgendamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, AgendamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agendamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agendamentos
     * const agendamentos = await prisma.agendamento.findMany()
     * 
     * // Get first 10 Agendamentos
     * const agendamentos = await prisma.agendamento.findMany({ take: 10 })
     * 
     * // Only select the `id_agendamento`
     * const agendamentoWithId_agendamentoOnly = await prisma.agendamento.findMany({ select: { id_agendamento: true } })
     * 
     */
    findMany<T extends AgendamentoFindManyArgs>(args?: SelectSubset<T, AgendamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agendamento.
     * @param {AgendamentoCreateArgs} args - Arguments to create a Agendamento.
     * @example
     * // Create one Agendamento
     * const Agendamento = await prisma.agendamento.create({
     *   data: {
     *     // ... data to create a Agendamento
     *   }
     * })
     * 
     */
    create<T extends AgendamentoCreateArgs>(args: SelectSubset<T, AgendamentoCreateArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agendamentos.
     * @param {AgendamentoCreateManyArgs} args - Arguments to create many Agendamentos.
     * @example
     * // Create many Agendamentos
     * const agendamento = await prisma.agendamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgendamentoCreateManyArgs>(args?: SelectSubset<T, AgendamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agendamentos and returns the data saved in the database.
     * @param {AgendamentoCreateManyAndReturnArgs} args - Arguments to create many Agendamentos.
     * @example
     * // Create many Agendamentos
     * const agendamento = await prisma.agendamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agendamentos and only return the `id_agendamento`
     * const agendamentoWithId_agendamentoOnly = await prisma.agendamento.createManyAndReturn({
     *   select: { id_agendamento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgendamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, AgendamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agendamento.
     * @param {AgendamentoDeleteArgs} args - Arguments to delete one Agendamento.
     * @example
     * // Delete one Agendamento
     * const Agendamento = await prisma.agendamento.delete({
     *   where: {
     *     // ... filter to delete one Agendamento
     *   }
     * })
     * 
     */
    delete<T extends AgendamentoDeleteArgs>(args: SelectSubset<T, AgendamentoDeleteArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agendamento.
     * @param {AgendamentoUpdateArgs} args - Arguments to update one Agendamento.
     * @example
     * // Update one Agendamento
     * const agendamento = await prisma.agendamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgendamentoUpdateArgs>(args: SelectSubset<T, AgendamentoUpdateArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agendamentos.
     * @param {AgendamentoDeleteManyArgs} args - Arguments to filter Agendamentos to delete.
     * @example
     * // Delete a few Agendamentos
     * const { count } = await prisma.agendamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgendamentoDeleteManyArgs>(args?: SelectSubset<T, AgendamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agendamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agendamentos
     * const agendamento = await prisma.agendamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgendamentoUpdateManyArgs>(args: SelectSubset<T, AgendamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agendamentos and returns the data updated in the database.
     * @param {AgendamentoUpdateManyAndReturnArgs} args - Arguments to update many Agendamentos.
     * @example
     * // Update many Agendamentos
     * const agendamento = await prisma.agendamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agendamentos and only return the `id_agendamento`
     * const agendamentoWithId_agendamentoOnly = await prisma.agendamento.updateManyAndReturn({
     *   select: { id_agendamento: true },
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
    updateManyAndReturn<T extends AgendamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, AgendamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agendamento.
     * @param {AgendamentoUpsertArgs} args - Arguments to update or create a Agendamento.
     * @example
     * // Update or create a Agendamento
     * const agendamento = await prisma.agendamento.upsert({
     *   create: {
     *     // ... data to create a Agendamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agendamento we want to update
     *   }
     * })
     */
    upsert<T extends AgendamentoUpsertArgs>(args: SelectSubset<T, AgendamentoUpsertArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agendamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoCountArgs} args - Arguments to filter Agendamentos to count.
     * @example
     * // Count the number of Agendamentos
     * const count = await prisma.agendamento.count({
     *   where: {
     *     // ... the filter for the Agendamentos we want to count
     *   }
     * })
    **/
    count<T extends AgendamentoCountArgs>(
      args?: Subset<T, AgendamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgendamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agendamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgendamentoAggregateArgs>(args: Subset<T, AgendamentoAggregateArgs>): Prisma.PrismaPromise<GetAgendamentoAggregateType<T>>

    /**
     * Group by Agendamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoGroupByArgs} args - Group by arguments.
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
      T extends AgendamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgendamentoGroupByArgs['orderBy'] }
        : { orderBy?: AgendamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgendamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgendamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agendamento model
   */
  readonly fields: AgendamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agendamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgendamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prestador<T extends Agendamento$prestadorArgs<ExtArgs> = {}>(args?: Subset<T, Agendamento$prestadorArgs<ExtArgs>>): Prisma__PrestadorClient<$Result.GetResult<Prisma.$PrestadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reservas<T extends Agendamento$reservasArgs<ExtArgs> = {}>(args?: Subset<T, Agendamento$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Agendamento model
   */
  interface AgendamentoFieldRefs {
    readonly id_agendamento: FieldRef<"Agendamento", 'String'>
    readonly id_prestador: FieldRef<"Agendamento", 'String'>
    readonly data_inicio: FieldRef<"Agendamento", 'DateTime'>
    readonly data_fim: FieldRef<"Agendamento", 'DateTime'>
    readonly disponivel: FieldRef<"Agendamento", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Agendamento findUnique
   */
  export type AgendamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Agendamento to fetch.
     */
    where: AgendamentoWhereUniqueInput
  }

  /**
   * Agendamento findUniqueOrThrow
   */
  export type AgendamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Agendamento to fetch.
     */
    where: AgendamentoWhereUniqueInput
  }

  /**
   * Agendamento findFirst
   */
  export type AgendamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Agendamento to fetch.
     */
    where?: AgendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agendamentos.
     */
    cursor?: AgendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agendamentos.
     */
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }

  /**
   * Agendamento findFirstOrThrow
   */
  export type AgendamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Agendamento to fetch.
     */
    where?: AgendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agendamentos.
     */
    cursor?: AgendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agendamentos.
     */
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }

  /**
   * Agendamento findMany
   */
  export type AgendamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Agendamentos to fetch.
     */
    where?: AgendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agendamentos.
     */
    cursor?: AgendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agendamentos.
     */
    skip?: number
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }

  /**
   * Agendamento create
   */
  export type AgendamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Agendamento.
     */
    data: XOR<AgendamentoCreateInput, AgendamentoUncheckedCreateInput>
  }

  /**
   * Agendamento createMany
   */
  export type AgendamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agendamentos.
     */
    data: AgendamentoCreateManyInput | AgendamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agendamento createManyAndReturn
   */
  export type AgendamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * The data used to create many Agendamentos.
     */
    data: AgendamentoCreateManyInput | AgendamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agendamento update
   */
  export type AgendamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Agendamento.
     */
    data: XOR<AgendamentoUpdateInput, AgendamentoUncheckedUpdateInput>
    /**
     * Choose, which Agendamento to update.
     */
    where: AgendamentoWhereUniqueInput
  }

  /**
   * Agendamento updateMany
   */
  export type AgendamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agendamentos.
     */
    data: XOR<AgendamentoUpdateManyMutationInput, AgendamentoUncheckedUpdateManyInput>
    /**
     * Filter which Agendamentos to update
     */
    where?: AgendamentoWhereInput
    /**
     * Limit how many Agendamentos to update.
     */
    limit?: number
  }

  /**
   * Agendamento updateManyAndReturn
   */
  export type AgendamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * The data used to update Agendamentos.
     */
    data: XOR<AgendamentoUpdateManyMutationInput, AgendamentoUncheckedUpdateManyInput>
    /**
     * Filter which Agendamentos to update
     */
    where?: AgendamentoWhereInput
    /**
     * Limit how many Agendamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agendamento upsert
   */
  export type AgendamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Agendamento to update in case it exists.
     */
    where: AgendamentoWhereUniqueInput
    /**
     * In case the Agendamento found by the `where` argument doesn't exist, create a new Agendamento with this data.
     */
    create: XOR<AgendamentoCreateInput, AgendamentoUncheckedCreateInput>
    /**
     * In case the Agendamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgendamentoUpdateInput, AgendamentoUncheckedUpdateInput>
  }

  /**
   * Agendamento delete
   */
  export type AgendamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter which Agendamento to delete.
     */
    where: AgendamentoWhereUniqueInput
  }

  /**
   * Agendamento deleteMany
   */
  export type AgendamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agendamentos to delete
     */
    where?: AgendamentoWhereInput
    /**
     * Limit how many Agendamentos to delete.
     */
    limit?: number
  }

  /**
   * Agendamento.prestador
   */
  export type Agendamento$prestadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestador
     */
    select?: PrestadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestador
     */
    omit?: PrestadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestadorInclude<ExtArgs> | null
    where?: PrestadorWhereInput
  }

  /**
   * Agendamento.reservas
   */
  export type Agendamento$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    cursor?: ReservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Agendamento without action
   */
  export type AgendamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
  }


  /**
   * Model Reserva
   */

  export type AggregateReserva = {
    _count: ReservaCountAggregateOutputType | null
    _avg: ReservaAvgAggregateOutputType | null
    _sum: ReservaSumAggregateOutputType | null
    _min: ReservaMinAggregateOutputType | null
    _max: ReservaMaxAggregateOutputType | null
  }

  export type ReservaAvgAggregateOutputType = {
    valor: number | null
  }

  export type ReservaSumAggregateOutputType = {
    valor: number | null
  }

  export type ReservaMinAggregateOutputType = {
    id_reserva: string | null
    id_tutor: string | null
    id_pet: string | null
    id_servico: string | null
    id_agendamento: string | null
    status: string | null
    data_reserva: Date | null
    valor: number | null
  }

  export type ReservaMaxAggregateOutputType = {
    id_reserva: string | null
    id_tutor: string | null
    id_pet: string | null
    id_servico: string | null
    id_agendamento: string | null
    status: string | null
    data_reserva: Date | null
    valor: number | null
  }

  export type ReservaCountAggregateOutputType = {
    id_reserva: number
    id_tutor: number
    id_pet: number
    id_servico: number
    id_agendamento: number
    status: number
    data_reserva: number
    valor: number
    _all: number
  }


  export type ReservaAvgAggregateInputType = {
    valor?: true
  }

  export type ReservaSumAggregateInputType = {
    valor?: true
  }

  export type ReservaMinAggregateInputType = {
    id_reserva?: true
    id_tutor?: true
    id_pet?: true
    id_servico?: true
    id_agendamento?: true
    status?: true
    data_reserva?: true
    valor?: true
  }

  export type ReservaMaxAggregateInputType = {
    id_reserva?: true
    id_tutor?: true
    id_pet?: true
    id_servico?: true
    id_agendamento?: true
    status?: true
    data_reserva?: true
    valor?: true
  }

  export type ReservaCountAggregateInputType = {
    id_reserva?: true
    id_tutor?: true
    id_pet?: true
    id_servico?: true
    id_agendamento?: true
    status?: true
    data_reserva?: true
    valor?: true
    _all?: true
  }

  export type ReservaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reserva to aggregate.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservas
    **/
    _count?: true | ReservaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservaMaxAggregateInputType
  }

  export type GetReservaAggregateType<T extends ReservaAggregateArgs> = {
        [P in keyof T & keyof AggregateReserva]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReserva[P]>
      : GetScalarType<T[P], AggregateReserva[P]>
  }




  export type ReservaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithAggregationInput | ReservaOrderByWithAggregationInput[]
    by: ReservaScalarFieldEnum[] | ReservaScalarFieldEnum
    having?: ReservaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservaCountAggregateInputType | true
    _avg?: ReservaAvgAggregateInputType
    _sum?: ReservaSumAggregateInputType
    _min?: ReservaMinAggregateInputType
    _max?: ReservaMaxAggregateInputType
  }

  export type ReservaGroupByOutputType = {
    id_reserva: string
    id_tutor: string | null
    id_pet: string | null
    id_servico: string | null
    id_agendamento: string | null
    status: string | null
    data_reserva: Date | null
    valor: number | null
    _count: ReservaCountAggregateOutputType | null
    _avg: ReservaAvgAggregateOutputType | null
    _sum: ReservaSumAggregateOutputType | null
    _min: ReservaMinAggregateOutputType | null
    _max: ReservaMaxAggregateOutputType | null
  }

  type GetReservaGroupByPayload<T extends ReservaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservaGroupByOutputType[P]>
            : GetScalarType<T[P], ReservaGroupByOutputType[P]>
        }
      >
    >


  export type ReservaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reserva?: boolean
    id_tutor?: boolean
    id_pet?: boolean
    id_servico?: boolean
    id_agendamento?: boolean
    status?: boolean
    data_reserva?: boolean
    valor?: boolean
    tutor?: boolean | Reserva$tutorArgs<ExtArgs>
    pet?: boolean | Reserva$petArgs<ExtArgs>
    servico?: boolean | Reserva$servicoArgs<ExtArgs>
    agendamento?: boolean | Reserva$agendamentoArgs<ExtArgs>
    avaliacoes?: boolean | Reserva$avaliacoesArgs<ExtArgs>
    pagamentos?: boolean | Reserva$pagamentosArgs<ExtArgs>
    midias?: boolean | Reserva$midiasArgs<ExtArgs>
    _count?: boolean | ReservaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type ReservaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reserva?: boolean
    id_tutor?: boolean
    id_pet?: boolean
    id_servico?: boolean
    id_agendamento?: boolean
    status?: boolean
    data_reserva?: boolean
    valor?: boolean
    tutor?: boolean | Reserva$tutorArgs<ExtArgs>
    pet?: boolean | Reserva$petArgs<ExtArgs>
    servico?: boolean | Reserva$servicoArgs<ExtArgs>
    agendamento?: boolean | Reserva$agendamentoArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type ReservaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reserva?: boolean
    id_tutor?: boolean
    id_pet?: boolean
    id_servico?: boolean
    id_agendamento?: boolean
    status?: boolean
    data_reserva?: boolean
    valor?: boolean
    tutor?: boolean | Reserva$tutorArgs<ExtArgs>
    pet?: boolean | Reserva$petArgs<ExtArgs>
    servico?: boolean | Reserva$servicoArgs<ExtArgs>
    agendamento?: boolean | Reserva$agendamentoArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type ReservaSelectScalar = {
    id_reserva?: boolean
    id_tutor?: boolean
    id_pet?: boolean
    id_servico?: boolean
    id_agendamento?: boolean
    status?: boolean
    data_reserva?: boolean
    valor?: boolean
  }

  export type ReservaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_reserva" | "id_tutor" | "id_pet" | "id_servico" | "id_agendamento" | "status" | "data_reserva" | "valor", ExtArgs["result"]["reserva"]>
  export type ReservaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | Reserva$tutorArgs<ExtArgs>
    pet?: boolean | Reserva$petArgs<ExtArgs>
    servico?: boolean | Reserva$servicoArgs<ExtArgs>
    agendamento?: boolean | Reserva$agendamentoArgs<ExtArgs>
    avaliacoes?: boolean | Reserva$avaliacoesArgs<ExtArgs>
    pagamentos?: boolean | Reserva$pagamentosArgs<ExtArgs>
    midias?: boolean | Reserva$midiasArgs<ExtArgs>
    _count?: boolean | ReservaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReservaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | Reserva$tutorArgs<ExtArgs>
    pet?: boolean | Reserva$petArgs<ExtArgs>
    servico?: boolean | Reserva$servicoArgs<ExtArgs>
    agendamento?: boolean | Reserva$agendamentoArgs<ExtArgs>
  }
  export type ReservaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | Reserva$tutorArgs<ExtArgs>
    pet?: boolean | Reserva$petArgs<ExtArgs>
    servico?: boolean | Reserva$servicoArgs<ExtArgs>
    agendamento?: boolean | Reserva$agendamentoArgs<ExtArgs>
  }

  export type $ReservaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reserva"
    objects: {
      tutor: Prisma.$TutorPayload<ExtArgs> | null
      pet: Prisma.$PetPayload<ExtArgs> | null
      servico: Prisma.$ServicoPayload<ExtArgs> | null
      agendamento: Prisma.$AgendamentoPayload<ExtArgs> | null
      avaliacoes: Prisma.$AvaliacaoPayload<ExtArgs>[]
      pagamentos: Prisma.$PagamentoPayload<ExtArgs>[]
      midias: Prisma.$MidiaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_reserva: string
      id_tutor: string | null
      id_pet: string | null
      id_servico: string | null
      id_agendamento: string | null
      status: string | null
      data_reserva: Date | null
      valor: number | null
    }, ExtArgs["result"]["reserva"]>
    composites: {}
  }

  type ReservaGetPayload<S extends boolean | null | undefined | ReservaDefaultArgs> = $Result.GetResult<Prisma.$ReservaPayload, S>

  type ReservaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservaCountAggregateInputType | true
    }

  export interface ReservaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reserva'], meta: { name: 'Reserva' } }
    /**
     * Find zero or one Reserva that matches the filter.
     * @param {ReservaFindUniqueArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservaFindUniqueArgs>(args: SelectSubset<T, ReservaFindUniqueArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reserva that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservaFindUniqueOrThrowArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservaFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reserva that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindFirstArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservaFindFirstArgs>(args?: SelectSubset<T, ReservaFindFirstArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reserva that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindFirstOrThrowArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservaFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservas
     * const reservas = await prisma.reserva.findMany()
     * 
     * // Get first 10 Reservas
     * const reservas = await prisma.reserva.findMany({ take: 10 })
     * 
     * // Only select the `id_reserva`
     * const reservaWithId_reservaOnly = await prisma.reserva.findMany({ select: { id_reserva: true } })
     * 
     */
    findMany<T extends ReservaFindManyArgs>(args?: SelectSubset<T, ReservaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reserva.
     * @param {ReservaCreateArgs} args - Arguments to create a Reserva.
     * @example
     * // Create one Reserva
     * const Reserva = await prisma.reserva.create({
     *   data: {
     *     // ... data to create a Reserva
     *   }
     * })
     * 
     */
    create<T extends ReservaCreateArgs>(args: SelectSubset<T, ReservaCreateArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservas.
     * @param {ReservaCreateManyArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reserva = await prisma.reserva.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservaCreateManyArgs>(args?: SelectSubset<T, ReservaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservas and returns the data saved in the database.
     * @param {ReservaCreateManyAndReturnArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reserva = await prisma.reserva.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservas and only return the `id_reserva`
     * const reservaWithId_reservaOnly = await prisma.reserva.createManyAndReturn({
     *   select: { id_reserva: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservaCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reserva.
     * @param {ReservaDeleteArgs} args - Arguments to delete one Reserva.
     * @example
     * // Delete one Reserva
     * const Reserva = await prisma.reserva.delete({
     *   where: {
     *     // ... filter to delete one Reserva
     *   }
     * })
     * 
     */
    delete<T extends ReservaDeleteArgs>(args: SelectSubset<T, ReservaDeleteArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reserva.
     * @param {ReservaUpdateArgs} args - Arguments to update one Reserva.
     * @example
     * // Update one Reserva
     * const reserva = await prisma.reserva.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservaUpdateArgs>(args: SelectSubset<T, ReservaUpdateArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservas.
     * @param {ReservaDeleteManyArgs} args - Arguments to filter Reservas to delete.
     * @example
     * // Delete a few Reservas
     * const { count } = await prisma.reserva.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservaDeleteManyArgs>(args?: SelectSubset<T, ReservaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservas
     * const reserva = await prisma.reserva.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservaUpdateManyArgs>(args: SelectSubset<T, ReservaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas and returns the data updated in the database.
     * @param {ReservaUpdateManyAndReturnArgs} args - Arguments to update many Reservas.
     * @example
     * // Update many Reservas
     * const reserva = await prisma.reserva.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservas and only return the `id_reserva`
     * const reservaWithId_reservaOnly = await prisma.reserva.updateManyAndReturn({
     *   select: { id_reserva: true },
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
    updateManyAndReturn<T extends ReservaUpdateManyAndReturnArgs>(args: SelectSubset<T, ReservaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reserva.
     * @param {ReservaUpsertArgs} args - Arguments to update or create a Reserva.
     * @example
     * // Update or create a Reserva
     * const reserva = await prisma.reserva.upsert({
     *   create: {
     *     // ... data to create a Reserva
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reserva we want to update
     *   }
     * })
     */
    upsert<T extends ReservaUpsertArgs>(args: SelectSubset<T, ReservaUpsertArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaCountArgs} args - Arguments to filter Reservas to count.
     * @example
     * // Count the number of Reservas
     * const count = await prisma.reserva.count({
     *   where: {
     *     // ... the filter for the Reservas we want to count
     *   }
     * })
    **/
    count<T extends ReservaCountArgs>(
      args?: Subset<T, ReservaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reserva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservaAggregateArgs>(args: Subset<T, ReservaAggregateArgs>): Prisma.PrismaPromise<GetReservaAggregateType<T>>

    /**
     * Group by Reserva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaGroupByArgs} args - Group by arguments.
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
      T extends ReservaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservaGroupByArgs['orderBy'] }
        : { orderBy?: ReservaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reserva model
   */
  readonly fields: ReservaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reserva.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tutor<T extends Reserva$tutorArgs<ExtArgs> = {}>(args?: Subset<T, Reserva$tutorArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pet<T extends Reserva$petArgs<ExtArgs> = {}>(args?: Subset<T, Reserva$petArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    servico<T extends Reserva$servicoArgs<ExtArgs> = {}>(args?: Subset<T, Reserva$servicoArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    agendamento<T extends Reserva$agendamentoArgs<ExtArgs> = {}>(args?: Subset<T, Reserva$agendamentoArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    avaliacoes<T extends Reserva$avaliacoesArgs<ExtArgs> = {}>(args?: Subset<T, Reserva$avaliacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pagamentos<T extends Reserva$pagamentosArgs<ExtArgs> = {}>(args?: Subset<T, Reserva$pagamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    midias<T extends Reserva$midiasArgs<ExtArgs> = {}>(args?: Subset<T, Reserva$midiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MidiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Reserva model
   */
  interface ReservaFieldRefs {
    readonly id_reserva: FieldRef<"Reserva", 'String'>
    readonly id_tutor: FieldRef<"Reserva", 'String'>
    readonly id_pet: FieldRef<"Reserva", 'String'>
    readonly id_servico: FieldRef<"Reserva", 'String'>
    readonly id_agendamento: FieldRef<"Reserva", 'String'>
    readonly status: FieldRef<"Reserva", 'String'>
    readonly data_reserva: FieldRef<"Reserva", 'DateTime'>
    readonly valor: FieldRef<"Reserva", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Reserva findUnique
   */
  export type ReservaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva findUniqueOrThrow
   */
  export type ReservaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva findFirst
   */
  export type ReservaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservas.
     */
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva findFirstOrThrow
   */
  export type ReservaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservas.
     */
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva findMany
   */
  export type ReservaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reservas to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva create
   */
  export type ReservaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The data needed to create a Reserva.
     */
    data: XOR<ReservaCreateInput, ReservaUncheckedCreateInput>
  }

  /**
   * Reserva createMany
   */
  export type ReservaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservas.
     */
    data: ReservaCreateManyInput | ReservaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reserva createManyAndReturn
   */
  export type ReservaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * The data used to create many Reservas.
     */
    data: ReservaCreateManyInput | ReservaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reserva update
   */
  export type ReservaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The data needed to update a Reserva.
     */
    data: XOR<ReservaUpdateInput, ReservaUncheckedUpdateInput>
    /**
     * Choose, which Reserva to update.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva updateMany
   */
  export type ReservaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservas.
     */
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyInput>
    /**
     * Filter which Reservas to update
     */
    where?: ReservaWhereInput
    /**
     * Limit how many Reservas to update.
     */
    limit?: number
  }

  /**
   * Reserva updateManyAndReturn
   */
  export type ReservaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * The data used to update Reservas.
     */
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyInput>
    /**
     * Filter which Reservas to update
     */
    where?: ReservaWhereInput
    /**
     * Limit how many Reservas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reserva upsert
   */
  export type ReservaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The filter to search for the Reserva to update in case it exists.
     */
    where: ReservaWhereUniqueInput
    /**
     * In case the Reserva found by the `where` argument doesn't exist, create a new Reserva with this data.
     */
    create: XOR<ReservaCreateInput, ReservaUncheckedCreateInput>
    /**
     * In case the Reserva was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservaUpdateInput, ReservaUncheckedUpdateInput>
  }

  /**
   * Reserva delete
   */
  export type ReservaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter which Reserva to delete.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva deleteMany
   */
  export type ReservaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservas to delete
     */
    where?: ReservaWhereInput
    /**
     * Limit how many Reservas to delete.
     */
    limit?: number
  }

  /**
   * Reserva.tutor
   */
  export type Reserva$tutorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    where?: TutorWhereInput
  }

  /**
   * Reserva.pet
   */
  export type Reserva$petArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    where?: PetWhereInput
  }

  /**
   * Reserva.servico
   */
  export type Reserva$servicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    where?: ServicoWhereInput
  }

  /**
   * Reserva.agendamento
   */
  export type Reserva$agendamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    where?: AgendamentoWhereInput
  }

  /**
   * Reserva.avaliacoes
   */
  export type Reserva$avaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    cursor?: AvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Reserva.pagamentos
   */
  export type Reserva$pagamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    where?: PagamentoWhereInput
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    cursor?: PagamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Reserva.midias
   */
  export type Reserva$midiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Midia
     */
    select?: MidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Midia
     */
    omit?: MidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MidiaInclude<ExtArgs> | null
    where?: MidiaWhereInput
    orderBy?: MidiaOrderByWithRelationInput | MidiaOrderByWithRelationInput[]
    cursor?: MidiaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MidiaScalarFieldEnum | MidiaScalarFieldEnum[]
  }

  /**
   * Reserva without action
   */
  export type ReservaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
  }


  /**
   * Model Avaliacao
   */

  export type AggregateAvaliacao = {
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  export type AvaliacaoAvgAggregateOutputType = {
    nota: number | null
  }

  export type AvaliacaoSumAggregateOutputType = {
    nota: number | null
  }

  export type AvaliacaoMinAggregateOutputType = {
    id_avaliacao: string | null
    id_reserva: string | null
    nota: number | null
    comentario: string | null
    data_avaliacao: Date | null
  }

  export type AvaliacaoMaxAggregateOutputType = {
    id_avaliacao: string | null
    id_reserva: string | null
    nota: number | null
    comentario: string | null
    data_avaliacao: Date | null
  }

  export type AvaliacaoCountAggregateOutputType = {
    id_avaliacao: number
    id_reserva: number
    nota: number
    comentario: number
    data_avaliacao: number
    _all: number
  }


  export type AvaliacaoAvgAggregateInputType = {
    nota?: true
  }

  export type AvaliacaoSumAggregateInputType = {
    nota?: true
  }

  export type AvaliacaoMinAggregateInputType = {
    id_avaliacao?: true
    id_reserva?: true
    nota?: true
    comentario?: true
    data_avaliacao?: true
  }

  export type AvaliacaoMaxAggregateInputType = {
    id_avaliacao?: true
    id_reserva?: true
    nota?: true
    comentario?: true
    data_avaliacao?: true
  }

  export type AvaliacaoCountAggregateInputType = {
    id_avaliacao?: true
    id_reserva?: true
    nota?: true
    comentario?: true
    data_avaliacao?: true
    _all?: true
  }

  export type AvaliacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacao to aggregate.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avaliacaos
    **/
    _count?: true | AvaliacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvaliacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvaliacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvaliacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type GetAvaliacaoAggregateType<T extends AvaliacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAvaliacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvaliacao[P]>
      : GetScalarType<T[P], AggregateAvaliacao[P]>
  }




  export type AvaliacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithAggregationInput | AvaliacaoOrderByWithAggregationInput[]
    by: AvaliacaoScalarFieldEnum[] | AvaliacaoScalarFieldEnum
    having?: AvaliacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvaliacaoCountAggregateInputType | true
    _avg?: AvaliacaoAvgAggregateInputType
    _sum?: AvaliacaoSumAggregateInputType
    _min?: AvaliacaoMinAggregateInputType
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type AvaliacaoGroupByOutputType = {
    id_avaliacao: string
    id_reserva: string | null
    nota: number | null
    comentario: string | null
    data_avaliacao: Date | null
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  type GetAvaliacaoGroupByPayload<T extends AvaliacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvaliacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvaliacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
            : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
        }
      >
    >


  export type AvaliacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_avaliacao?: boolean
    id_reserva?: boolean
    nota?: boolean
    comentario?: boolean
    data_avaliacao?: boolean
    reserva?: boolean | Avaliacao$reservaArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_avaliacao?: boolean
    id_reserva?: boolean
    nota?: boolean
    comentario?: boolean
    data_avaliacao?: boolean
    reserva?: boolean | Avaliacao$reservaArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_avaliacao?: boolean
    id_reserva?: boolean
    nota?: boolean
    comentario?: boolean
    data_avaliacao?: boolean
    reserva?: boolean | Avaliacao$reservaArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectScalar = {
    id_avaliacao?: boolean
    id_reserva?: boolean
    nota?: boolean
    comentario?: boolean
    data_avaliacao?: boolean
  }

  export type AvaliacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_avaliacao" | "id_reserva" | "nota" | "comentario" | "data_avaliacao", ExtArgs["result"]["avaliacao"]>
  export type AvaliacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | Avaliacao$reservaArgs<ExtArgs>
  }
  export type AvaliacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | Avaliacao$reservaArgs<ExtArgs>
  }
  export type AvaliacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | Avaliacao$reservaArgs<ExtArgs>
  }

  export type $AvaliacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avaliacao"
    objects: {
      reserva: Prisma.$ReservaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_avaliacao: string
      id_reserva: string | null
      nota: number | null
      comentario: string | null
      data_avaliacao: Date | null
    }, ExtArgs["result"]["avaliacao"]>
    composites: {}
  }

  type AvaliacaoGetPayload<S extends boolean | null | undefined | AvaliacaoDefaultArgs> = $Result.GetResult<Prisma.$AvaliacaoPayload, S>

  type AvaliacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvaliacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvaliacaoCountAggregateInputType | true
    }

  export interface AvaliacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avaliacao'], meta: { name: 'Avaliacao' } }
    /**
     * Find zero or one Avaliacao that matches the filter.
     * @param {AvaliacaoFindUniqueArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvaliacaoFindUniqueArgs>(args: SelectSubset<T, AvaliacaoFindUniqueArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avaliacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvaliacaoFindUniqueOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvaliacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, AvaliacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvaliacaoFindFirstArgs>(args?: SelectSubset<T, AvaliacaoFindFirstArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvaliacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, AvaliacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avaliacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany()
     * 
     * // Get first 10 Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany({ take: 10 })
     * 
     * // Only select the `id_avaliacao`
     * const avaliacaoWithId_avaliacaoOnly = await prisma.avaliacao.findMany({ select: { id_avaliacao: true } })
     * 
     */
    findMany<T extends AvaliacaoFindManyArgs>(args?: SelectSubset<T, AvaliacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avaliacao.
     * @param {AvaliacaoCreateArgs} args - Arguments to create a Avaliacao.
     * @example
     * // Create one Avaliacao
     * const Avaliacao = await prisma.avaliacao.create({
     *   data: {
     *     // ... data to create a Avaliacao
     *   }
     * })
     * 
     */
    create<T extends AvaliacaoCreateArgs>(args: SelectSubset<T, AvaliacaoCreateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avaliacaos.
     * @param {AvaliacaoCreateManyArgs} args - Arguments to create many Avaliacaos.
     * @example
     * // Create many Avaliacaos
     * const avaliacao = await prisma.avaliacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvaliacaoCreateManyArgs>(args?: SelectSubset<T, AvaliacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avaliacaos and returns the data saved in the database.
     * @param {AvaliacaoCreateManyAndReturnArgs} args - Arguments to create many Avaliacaos.
     * @example
     * // Create many Avaliacaos
     * const avaliacao = await prisma.avaliacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avaliacaos and only return the `id_avaliacao`
     * const avaliacaoWithId_avaliacaoOnly = await prisma.avaliacao.createManyAndReturn({
     *   select: { id_avaliacao: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvaliacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, AvaliacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Avaliacao.
     * @param {AvaliacaoDeleteArgs} args - Arguments to delete one Avaliacao.
     * @example
     * // Delete one Avaliacao
     * const Avaliacao = await prisma.avaliacao.delete({
     *   where: {
     *     // ... filter to delete one Avaliacao
     *   }
     * })
     * 
     */
    delete<T extends AvaliacaoDeleteArgs>(args: SelectSubset<T, AvaliacaoDeleteArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avaliacao.
     * @param {AvaliacaoUpdateArgs} args - Arguments to update one Avaliacao.
     * @example
     * // Update one Avaliacao
     * const avaliacao = await prisma.avaliacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvaliacaoUpdateArgs>(args: SelectSubset<T, AvaliacaoUpdateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avaliacaos.
     * @param {AvaliacaoDeleteManyArgs} args - Arguments to filter Avaliacaos to delete.
     * @example
     * // Delete a few Avaliacaos
     * const { count } = await prisma.avaliacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvaliacaoDeleteManyArgs>(args?: SelectSubset<T, AvaliacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avaliacaos
     * const avaliacao = await prisma.avaliacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvaliacaoUpdateManyArgs>(args: SelectSubset<T, AvaliacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacaos and returns the data updated in the database.
     * @param {AvaliacaoUpdateManyAndReturnArgs} args - Arguments to update many Avaliacaos.
     * @example
     * // Update many Avaliacaos
     * const avaliacao = await prisma.avaliacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Avaliacaos and only return the `id_avaliacao`
     * const avaliacaoWithId_avaliacaoOnly = await prisma.avaliacao.updateManyAndReturn({
     *   select: { id_avaliacao: true },
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
    updateManyAndReturn<T extends AvaliacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, AvaliacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Avaliacao.
     * @param {AvaliacaoUpsertArgs} args - Arguments to update or create a Avaliacao.
     * @example
     * // Update or create a Avaliacao
     * const avaliacao = await prisma.avaliacao.upsert({
     *   create: {
     *     // ... data to create a Avaliacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avaliacao we want to update
     *   }
     * })
     */
    upsert<T extends AvaliacaoUpsertArgs>(args: SelectSubset<T, AvaliacaoUpsertArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoCountArgs} args - Arguments to filter Avaliacaos to count.
     * @example
     * // Count the number of Avaliacaos
     * const count = await prisma.avaliacao.count({
     *   where: {
     *     // ... the filter for the Avaliacaos we want to count
     *   }
     * })
    **/
    count<T extends AvaliacaoCountArgs>(
      args?: Subset<T, AvaliacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvaliacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvaliacaoAggregateArgs>(args: Subset<T, AvaliacaoAggregateArgs>): Prisma.PrismaPromise<GetAvaliacaoAggregateType<T>>

    /**
     * Group by Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoGroupByArgs} args - Group by arguments.
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
      T extends AvaliacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvaliacaoGroupByArgs['orderBy'] }
        : { orderBy?: AvaliacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvaliacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvaliacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avaliacao model
   */
  readonly fields: AvaliacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avaliacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvaliacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reserva<T extends Avaliacao$reservaArgs<ExtArgs> = {}>(args?: Subset<T, Avaliacao$reservaArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Avaliacao model
   */
  interface AvaliacaoFieldRefs {
    readonly id_avaliacao: FieldRef<"Avaliacao", 'String'>
    readonly id_reserva: FieldRef<"Avaliacao", 'String'>
    readonly nota: FieldRef<"Avaliacao", 'Int'>
    readonly comentario: FieldRef<"Avaliacao", 'String'>
    readonly data_avaliacao: FieldRef<"Avaliacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Avaliacao findUnique
   */
  export type AvaliacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findUniqueOrThrow
   */
  export type AvaliacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findFirst
   */
  export type AvaliacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findFirstOrThrow
   */
  export type AvaliacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findMany
   */
  export type AvaliacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacaos to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao create
   */
  export type AvaliacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Avaliacao.
     */
    data: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
  }

  /**
   * Avaliacao createMany
   */
  export type AvaliacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avaliacaos.
     */
    data: AvaliacaoCreateManyInput | AvaliacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Avaliacao createManyAndReturn
   */
  export type AvaliacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Avaliacaos.
     */
    data: AvaliacaoCreateManyInput | AvaliacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avaliacao update
   */
  export type AvaliacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Avaliacao.
     */
    data: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
    /**
     * Choose, which Avaliacao to update.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao updateMany
   */
  export type AvaliacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avaliacaos.
     */
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which Avaliacaos to update
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to update.
     */
    limit?: number
  }

  /**
   * Avaliacao updateManyAndReturn
   */
  export type AvaliacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * The data used to update Avaliacaos.
     */
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which Avaliacaos to update
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avaliacao upsert
   */
  export type AvaliacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Avaliacao to update in case it exists.
     */
    where: AvaliacaoWhereUniqueInput
    /**
     * In case the Avaliacao found by the `where` argument doesn't exist, create a new Avaliacao with this data.
     */
    create: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
    /**
     * In case the Avaliacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
  }

  /**
   * Avaliacao delete
   */
  export type AvaliacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter which Avaliacao to delete.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao deleteMany
   */
  export type AvaliacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacaos to delete
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to delete.
     */
    limit?: number
  }

  /**
   * Avaliacao.reserva
   */
  export type Avaliacao$reservaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
  }

  /**
   * Avaliacao without action
   */
  export type AvaliacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
  }


  /**
   * Model Pagamento
   */

  export type AggregatePagamento = {
    _count: PagamentoCountAggregateOutputType | null
    _avg: PagamentoAvgAggregateOutputType | null
    _sum: PagamentoSumAggregateOutputType | null
    _min: PagamentoMinAggregateOutputType | null
    _max: PagamentoMaxAggregateOutputType | null
  }

  export type PagamentoAvgAggregateOutputType = {
    valor: number | null
    gorjeta: number | null
  }

  export type PagamentoSumAggregateOutputType = {
    valor: number | null
    gorjeta: number | null
  }

  export type PagamentoMinAggregateOutputType = {
    id_pagamento: string | null
    id_reserva: string | null
    valor: number | null
    forma_pagamento: string | null
    gorjeta: number | null
    status: string | null
    data_pagamento: Date | null
  }

  export type PagamentoMaxAggregateOutputType = {
    id_pagamento: string | null
    id_reserva: string | null
    valor: number | null
    forma_pagamento: string | null
    gorjeta: number | null
    status: string | null
    data_pagamento: Date | null
  }

  export type PagamentoCountAggregateOutputType = {
    id_pagamento: number
    id_reserva: number
    valor: number
    forma_pagamento: number
    gorjeta: number
    status: number
    data_pagamento: number
    _all: number
  }


  export type PagamentoAvgAggregateInputType = {
    valor?: true
    gorjeta?: true
  }

  export type PagamentoSumAggregateInputType = {
    valor?: true
    gorjeta?: true
  }

  export type PagamentoMinAggregateInputType = {
    id_pagamento?: true
    id_reserva?: true
    valor?: true
    forma_pagamento?: true
    gorjeta?: true
    status?: true
    data_pagamento?: true
  }

  export type PagamentoMaxAggregateInputType = {
    id_pagamento?: true
    id_reserva?: true
    valor?: true
    forma_pagamento?: true
    gorjeta?: true
    status?: true
    data_pagamento?: true
  }

  export type PagamentoCountAggregateInputType = {
    id_pagamento?: true
    id_reserva?: true
    valor?: true
    forma_pagamento?: true
    gorjeta?: true
    status?: true
    data_pagamento?: true
    _all?: true
  }

  export type PagamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagamento to aggregate.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pagamentos
    **/
    _count?: true | PagamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagamentoMaxAggregateInputType
  }

  export type GetPagamentoAggregateType<T extends PagamentoAggregateArgs> = {
        [P in keyof T & keyof AggregatePagamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagamento[P]>
      : GetScalarType<T[P], AggregatePagamento[P]>
  }




  export type PagamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagamentoWhereInput
    orderBy?: PagamentoOrderByWithAggregationInput | PagamentoOrderByWithAggregationInput[]
    by: PagamentoScalarFieldEnum[] | PagamentoScalarFieldEnum
    having?: PagamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagamentoCountAggregateInputType | true
    _avg?: PagamentoAvgAggregateInputType
    _sum?: PagamentoSumAggregateInputType
    _min?: PagamentoMinAggregateInputType
    _max?: PagamentoMaxAggregateInputType
  }

  export type PagamentoGroupByOutputType = {
    id_pagamento: string
    id_reserva: string | null
    valor: number | null
    forma_pagamento: string | null
    gorjeta: number | null
    status: string | null
    data_pagamento: Date | null
    _count: PagamentoCountAggregateOutputType | null
    _avg: PagamentoAvgAggregateOutputType | null
    _sum: PagamentoSumAggregateOutputType | null
    _min: PagamentoMinAggregateOutputType | null
    _max: PagamentoMaxAggregateOutputType | null
  }

  type GetPagamentoGroupByPayload<T extends PagamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagamentoGroupByOutputType[P]>
            : GetScalarType<T[P], PagamentoGroupByOutputType[P]>
        }
      >
    >


  export type PagamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pagamento?: boolean
    id_reserva?: boolean
    valor?: boolean
    forma_pagamento?: boolean
    gorjeta?: boolean
    status?: boolean
    data_pagamento?: boolean
    reserva?: boolean | Pagamento$reservaArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type PagamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pagamento?: boolean
    id_reserva?: boolean
    valor?: boolean
    forma_pagamento?: boolean
    gorjeta?: boolean
    status?: boolean
    data_pagamento?: boolean
    reserva?: boolean | Pagamento$reservaArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type PagamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pagamento?: boolean
    id_reserva?: boolean
    valor?: boolean
    forma_pagamento?: boolean
    gorjeta?: boolean
    status?: boolean
    data_pagamento?: boolean
    reserva?: boolean | Pagamento$reservaArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type PagamentoSelectScalar = {
    id_pagamento?: boolean
    id_reserva?: boolean
    valor?: boolean
    forma_pagamento?: boolean
    gorjeta?: boolean
    status?: boolean
    data_pagamento?: boolean
  }

  export type PagamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pagamento" | "id_reserva" | "valor" | "forma_pagamento" | "gorjeta" | "status" | "data_pagamento", ExtArgs["result"]["pagamento"]>
  export type PagamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | Pagamento$reservaArgs<ExtArgs>
  }
  export type PagamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | Pagamento$reservaArgs<ExtArgs>
  }
  export type PagamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | Pagamento$reservaArgs<ExtArgs>
  }

  export type $PagamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pagamento"
    objects: {
      reserva: Prisma.$ReservaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pagamento: string
      id_reserva: string | null
      valor: number | null
      forma_pagamento: string | null
      gorjeta: number | null
      status: string | null
      data_pagamento: Date | null
    }, ExtArgs["result"]["pagamento"]>
    composites: {}
  }

  type PagamentoGetPayload<S extends boolean | null | undefined | PagamentoDefaultArgs> = $Result.GetResult<Prisma.$PagamentoPayload, S>

  type PagamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PagamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PagamentoCountAggregateInputType | true
    }

  export interface PagamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pagamento'], meta: { name: 'Pagamento' } }
    /**
     * Find zero or one Pagamento that matches the filter.
     * @param {PagamentoFindUniqueArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PagamentoFindUniqueArgs>(args: SelectSubset<T, PagamentoFindUniqueArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pagamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PagamentoFindUniqueOrThrowArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PagamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, PagamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoFindFirstArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PagamentoFindFirstArgs>(args?: SelectSubset<T, PagamentoFindFirstArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoFindFirstOrThrowArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PagamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, PagamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pagamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagamentos
     * const pagamentos = await prisma.pagamento.findMany()
     * 
     * // Get first 10 Pagamentos
     * const pagamentos = await prisma.pagamento.findMany({ take: 10 })
     * 
     * // Only select the `id_pagamento`
     * const pagamentoWithId_pagamentoOnly = await prisma.pagamento.findMany({ select: { id_pagamento: true } })
     * 
     */
    findMany<T extends PagamentoFindManyArgs>(args?: SelectSubset<T, PagamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pagamento.
     * @param {PagamentoCreateArgs} args - Arguments to create a Pagamento.
     * @example
     * // Create one Pagamento
     * const Pagamento = await prisma.pagamento.create({
     *   data: {
     *     // ... data to create a Pagamento
     *   }
     * })
     * 
     */
    create<T extends PagamentoCreateArgs>(args: SelectSubset<T, PagamentoCreateArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pagamentos.
     * @param {PagamentoCreateManyArgs} args - Arguments to create many Pagamentos.
     * @example
     * // Create many Pagamentos
     * const pagamento = await prisma.pagamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PagamentoCreateManyArgs>(args?: SelectSubset<T, PagamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pagamentos and returns the data saved in the database.
     * @param {PagamentoCreateManyAndReturnArgs} args - Arguments to create many Pagamentos.
     * @example
     * // Create many Pagamentos
     * const pagamento = await prisma.pagamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pagamentos and only return the `id_pagamento`
     * const pagamentoWithId_pagamentoOnly = await prisma.pagamento.createManyAndReturn({
     *   select: { id_pagamento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PagamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, PagamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pagamento.
     * @param {PagamentoDeleteArgs} args - Arguments to delete one Pagamento.
     * @example
     * // Delete one Pagamento
     * const Pagamento = await prisma.pagamento.delete({
     *   where: {
     *     // ... filter to delete one Pagamento
     *   }
     * })
     * 
     */
    delete<T extends PagamentoDeleteArgs>(args: SelectSubset<T, PagamentoDeleteArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pagamento.
     * @param {PagamentoUpdateArgs} args - Arguments to update one Pagamento.
     * @example
     * // Update one Pagamento
     * const pagamento = await prisma.pagamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PagamentoUpdateArgs>(args: SelectSubset<T, PagamentoUpdateArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pagamentos.
     * @param {PagamentoDeleteManyArgs} args - Arguments to filter Pagamentos to delete.
     * @example
     * // Delete a few Pagamentos
     * const { count } = await prisma.pagamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PagamentoDeleteManyArgs>(args?: SelectSubset<T, PagamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagamentos
     * const pagamento = await prisma.pagamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PagamentoUpdateManyArgs>(args: SelectSubset<T, PagamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagamentos and returns the data updated in the database.
     * @param {PagamentoUpdateManyAndReturnArgs} args - Arguments to update many Pagamentos.
     * @example
     * // Update many Pagamentos
     * const pagamento = await prisma.pagamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pagamentos and only return the `id_pagamento`
     * const pagamentoWithId_pagamentoOnly = await prisma.pagamento.updateManyAndReturn({
     *   select: { id_pagamento: true },
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
    updateManyAndReturn<T extends PagamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, PagamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pagamento.
     * @param {PagamentoUpsertArgs} args - Arguments to update or create a Pagamento.
     * @example
     * // Update or create a Pagamento
     * const pagamento = await prisma.pagamento.upsert({
     *   create: {
     *     // ... data to create a Pagamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pagamento we want to update
     *   }
     * })
     */
    upsert<T extends PagamentoUpsertArgs>(args: SelectSubset<T, PagamentoUpsertArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoCountArgs} args - Arguments to filter Pagamentos to count.
     * @example
     * // Count the number of Pagamentos
     * const count = await prisma.pagamento.count({
     *   where: {
     *     // ... the filter for the Pagamentos we want to count
     *   }
     * })
    **/
    count<T extends PagamentoCountArgs>(
      args?: Subset<T, PagamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PagamentoAggregateArgs>(args: Subset<T, PagamentoAggregateArgs>): Prisma.PrismaPromise<GetPagamentoAggregateType<T>>

    /**
     * Group by Pagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoGroupByArgs} args - Group by arguments.
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
      T extends PagamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PagamentoGroupByArgs['orderBy'] }
        : { orderBy?: PagamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PagamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pagamento model
   */
  readonly fields: PagamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pagamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PagamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reserva<T extends Pagamento$reservaArgs<ExtArgs> = {}>(args?: Subset<T, Pagamento$reservaArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pagamento model
   */
  interface PagamentoFieldRefs {
    readonly id_pagamento: FieldRef<"Pagamento", 'String'>
    readonly id_reserva: FieldRef<"Pagamento", 'String'>
    readonly valor: FieldRef<"Pagamento", 'Float'>
    readonly forma_pagamento: FieldRef<"Pagamento", 'String'>
    readonly gorjeta: FieldRef<"Pagamento", 'Float'>
    readonly status: FieldRef<"Pagamento", 'String'>
    readonly data_pagamento: FieldRef<"Pagamento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pagamento findUnique
   */
  export type PagamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento findUniqueOrThrow
   */
  export type PagamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento findFirst
   */
  export type PagamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagamentos.
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagamentos.
     */
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Pagamento findFirstOrThrow
   */
  export type PagamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagamentos.
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagamentos.
     */
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Pagamento findMany
   */
  export type PagamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamentos to fetch.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pagamentos.
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Pagamento create
   */
  export type PagamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pagamento.
     */
    data: XOR<PagamentoCreateInput, PagamentoUncheckedCreateInput>
  }

  /**
   * Pagamento createMany
   */
  export type PagamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pagamentos.
     */
    data: PagamentoCreateManyInput | PagamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pagamento createManyAndReturn
   */
  export type PagamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * The data used to create many Pagamentos.
     */
    data: PagamentoCreateManyInput | PagamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pagamento update
   */
  export type PagamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pagamento.
     */
    data: XOR<PagamentoUpdateInput, PagamentoUncheckedUpdateInput>
    /**
     * Choose, which Pagamento to update.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento updateMany
   */
  export type PagamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pagamentos.
     */
    data: XOR<PagamentoUpdateManyMutationInput, PagamentoUncheckedUpdateManyInput>
    /**
     * Filter which Pagamentos to update
     */
    where?: PagamentoWhereInput
    /**
     * Limit how many Pagamentos to update.
     */
    limit?: number
  }

  /**
   * Pagamento updateManyAndReturn
   */
  export type PagamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * The data used to update Pagamentos.
     */
    data: XOR<PagamentoUpdateManyMutationInput, PagamentoUncheckedUpdateManyInput>
    /**
     * Filter which Pagamentos to update
     */
    where?: PagamentoWhereInput
    /**
     * Limit how many Pagamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pagamento upsert
   */
  export type PagamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pagamento to update in case it exists.
     */
    where: PagamentoWhereUniqueInput
    /**
     * In case the Pagamento found by the `where` argument doesn't exist, create a new Pagamento with this data.
     */
    create: XOR<PagamentoCreateInput, PagamentoUncheckedCreateInput>
    /**
     * In case the Pagamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PagamentoUpdateInput, PagamentoUncheckedUpdateInput>
  }

  /**
   * Pagamento delete
   */
  export type PagamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter which Pagamento to delete.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento deleteMany
   */
  export type PagamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagamentos to delete
     */
    where?: PagamentoWhereInput
    /**
     * Limit how many Pagamentos to delete.
     */
    limit?: number
  }

  /**
   * Pagamento.reserva
   */
  export type Pagamento$reservaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
  }

  /**
   * Pagamento without action
   */
  export type PagamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
  }


  /**
   * Model Midia
   */

  export type AggregateMidia = {
    _count: MidiaCountAggregateOutputType | null
    _min: MidiaMinAggregateOutputType | null
    _max: MidiaMaxAggregateOutputType | null
  }

  export type MidiaMinAggregateOutputType = {
    id_midia: string | null
    id_reserva: string | null
    tipo: string | null
    caminho_arquivo: string | null
    data_envio: Date | null
  }

  export type MidiaMaxAggregateOutputType = {
    id_midia: string | null
    id_reserva: string | null
    tipo: string | null
    caminho_arquivo: string | null
    data_envio: Date | null
  }

  export type MidiaCountAggregateOutputType = {
    id_midia: number
    id_reserva: number
    tipo: number
    caminho_arquivo: number
    data_envio: number
    _all: number
  }


  export type MidiaMinAggregateInputType = {
    id_midia?: true
    id_reserva?: true
    tipo?: true
    caminho_arquivo?: true
    data_envio?: true
  }

  export type MidiaMaxAggregateInputType = {
    id_midia?: true
    id_reserva?: true
    tipo?: true
    caminho_arquivo?: true
    data_envio?: true
  }

  export type MidiaCountAggregateInputType = {
    id_midia?: true
    id_reserva?: true
    tipo?: true
    caminho_arquivo?: true
    data_envio?: true
    _all?: true
  }

  export type MidiaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Midia to aggregate.
     */
    where?: MidiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Midias to fetch.
     */
    orderBy?: MidiaOrderByWithRelationInput | MidiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MidiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Midias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Midias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Midias
    **/
    _count?: true | MidiaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MidiaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MidiaMaxAggregateInputType
  }

  export type GetMidiaAggregateType<T extends MidiaAggregateArgs> = {
        [P in keyof T & keyof AggregateMidia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMidia[P]>
      : GetScalarType<T[P], AggregateMidia[P]>
  }




  export type MidiaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MidiaWhereInput
    orderBy?: MidiaOrderByWithAggregationInput | MidiaOrderByWithAggregationInput[]
    by: MidiaScalarFieldEnum[] | MidiaScalarFieldEnum
    having?: MidiaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MidiaCountAggregateInputType | true
    _min?: MidiaMinAggregateInputType
    _max?: MidiaMaxAggregateInputType
  }

  export type MidiaGroupByOutputType = {
    id_midia: string
    id_reserva: string | null
    tipo: string | null
    caminho_arquivo: string | null
    data_envio: Date | null
    _count: MidiaCountAggregateOutputType | null
    _min: MidiaMinAggregateOutputType | null
    _max: MidiaMaxAggregateOutputType | null
  }

  type GetMidiaGroupByPayload<T extends MidiaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MidiaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MidiaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MidiaGroupByOutputType[P]>
            : GetScalarType<T[P], MidiaGroupByOutputType[P]>
        }
      >
    >


  export type MidiaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_midia?: boolean
    id_reserva?: boolean
    tipo?: boolean
    caminho_arquivo?: boolean
    data_envio?: boolean
    reserva?: boolean | Midia$reservaArgs<ExtArgs>
  }, ExtArgs["result"]["midia"]>

  export type MidiaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_midia?: boolean
    id_reserva?: boolean
    tipo?: boolean
    caminho_arquivo?: boolean
    data_envio?: boolean
    reserva?: boolean | Midia$reservaArgs<ExtArgs>
  }, ExtArgs["result"]["midia"]>

  export type MidiaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_midia?: boolean
    id_reserva?: boolean
    tipo?: boolean
    caminho_arquivo?: boolean
    data_envio?: boolean
    reserva?: boolean | Midia$reservaArgs<ExtArgs>
  }, ExtArgs["result"]["midia"]>

  export type MidiaSelectScalar = {
    id_midia?: boolean
    id_reserva?: boolean
    tipo?: boolean
    caminho_arquivo?: boolean
    data_envio?: boolean
  }

  export type MidiaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_midia" | "id_reserva" | "tipo" | "caminho_arquivo" | "data_envio", ExtArgs["result"]["midia"]>
  export type MidiaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | Midia$reservaArgs<ExtArgs>
  }
  export type MidiaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | Midia$reservaArgs<ExtArgs>
  }
  export type MidiaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | Midia$reservaArgs<ExtArgs>
  }

  export type $MidiaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Midia"
    objects: {
      reserva: Prisma.$ReservaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_midia: string
      id_reserva: string | null
      tipo: string | null
      caminho_arquivo: string | null
      data_envio: Date | null
    }, ExtArgs["result"]["midia"]>
    composites: {}
  }

  type MidiaGetPayload<S extends boolean | null | undefined | MidiaDefaultArgs> = $Result.GetResult<Prisma.$MidiaPayload, S>

  type MidiaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MidiaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MidiaCountAggregateInputType | true
    }

  export interface MidiaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Midia'], meta: { name: 'Midia' } }
    /**
     * Find zero or one Midia that matches the filter.
     * @param {MidiaFindUniqueArgs} args - Arguments to find a Midia
     * @example
     * // Get one Midia
     * const midia = await prisma.midia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MidiaFindUniqueArgs>(args: SelectSubset<T, MidiaFindUniqueArgs<ExtArgs>>): Prisma__MidiaClient<$Result.GetResult<Prisma.$MidiaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Midia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MidiaFindUniqueOrThrowArgs} args - Arguments to find a Midia
     * @example
     * // Get one Midia
     * const midia = await prisma.midia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MidiaFindUniqueOrThrowArgs>(args: SelectSubset<T, MidiaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MidiaClient<$Result.GetResult<Prisma.$MidiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Midia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MidiaFindFirstArgs} args - Arguments to find a Midia
     * @example
     * // Get one Midia
     * const midia = await prisma.midia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MidiaFindFirstArgs>(args?: SelectSubset<T, MidiaFindFirstArgs<ExtArgs>>): Prisma__MidiaClient<$Result.GetResult<Prisma.$MidiaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Midia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MidiaFindFirstOrThrowArgs} args - Arguments to find a Midia
     * @example
     * // Get one Midia
     * const midia = await prisma.midia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MidiaFindFirstOrThrowArgs>(args?: SelectSubset<T, MidiaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MidiaClient<$Result.GetResult<Prisma.$MidiaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Midias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MidiaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Midias
     * const midias = await prisma.midia.findMany()
     * 
     * // Get first 10 Midias
     * const midias = await prisma.midia.findMany({ take: 10 })
     * 
     * // Only select the `id_midia`
     * const midiaWithId_midiaOnly = await prisma.midia.findMany({ select: { id_midia: true } })
     * 
     */
    findMany<T extends MidiaFindManyArgs>(args?: SelectSubset<T, MidiaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MidiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Midia.
     * @param {MidiaCreateArgs} args - Arguments to create a Midia.
     * @example
     * // Create one Midia
     * const Midia = await prisma.midia.create({
     *   data: {
     *     // ... data to create a Midia
     *   }
     * })
     * 
     */
    create<T extends MidiaCreateArgs>(args: SelectSubset<T, MidiaCreateArgs<ExtArgs>>): Prisma__MidiaClient<$Result.GetResult<Prisma.$MidiaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Midias.
     * @param {MidiaCreateManyArgs} args - Arguments to create many Midias.
     * @example
     * // Create many Midias
     * const midia = await prisma.midia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MidiaCreateManyArgs>(args?: SelectSubset<T, MidiaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Midias and returns the data saved in the database.
     * @param {MidiaCreateManyAndReturnArgs} args - Arguments to create many Midias.
     * @example
     * // Create many Midias
     * const midia = await prisma.midia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Midias and only return the `id_midia`
     * const midiaWithId_midiaOnly = await prisma.midia.createManyAndReturn({
     *   select: { id_midia: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MidiaCreateManyAndReturnArgs>(args?: SelectSubset<T, MidiaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MidiaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Midia.
     * @param {MidiaDeleteArgs} args - Arguments to delete one Midia.
     * @example
     * // Delete one Midia
     * const Midia = await prisma.midia.delete({
     *   where: {
     *     // ... filter to delete one Midia
     *   }
     * })
     * 
     */
    delete<T extends MidiaDeleteArgs>(args: SelectSubset<T, MidiaDeleteArgs<ExtArgs>>): Prisma__MidiaClient<$Result.GetResult<Prisma.$MidiaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Midia.
     * @param {MidiaUpdateArgs} args - Arguments to update one Midia.
     * @example
     * // Update one Midia
     * const midia = await prisma.midia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MidiaUpdateArgs>(args: SelectSubset<T, MidiaUpdateArgs<ExtArgs>>): Prisma__MidiaClient<$Result.GetResult<Prisma.$MidiaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Midias.
     * @param {MidiaDeleteManyArgs} args - Arguments to filter Midias to delete.
     * @example
     * // Delete a few Midias
     * const { count } = await prisma.midia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MidiaDeleteManyArgs>(args?: SelectSubset<T, MidiaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Midias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MidiaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Midias
     * const midia = await prisma.midia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MidiaUpdateManyArgs>(args: SelectSubset<T, MidiaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Midias and returns the data updated in the database.
     * @param {MidiaUpdateManyAndReturnArgs} args - Arguments to update many Midias.
     * @example
     * // Update many Midias
     * const midia = await prisma.midia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Midias and only return the `id_midia`
     * const midiaWithId_midiaOnly = await prisma.midia.updateManyAndReturn({
     *   select: { id_midia: true },
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
    updateManyAndReturn<T extends MidiaUpdateManyAndReturnArgs>(args: SelectSubset<T, MidiaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MidiaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Midia.
     * @param {MidiaUpsertArgs} args - Arguments to update or create a Midia.
     * @example
     * // Update or create a Midia
     * const midia = await prisma.midia.upsert({
     *   create: {
     *     // ... data to create a Midia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Midia we want to update
     *   }
     * })
     */
    upsert<T extends MidiaUpsertArgs>(args: SelectSubset<T, MidiaUpsertArgs<ExtArgs>>): Prisma__MidiaClient<$Result.GetResult<Prisma.$MidiaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Midias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MidiaCountArgs} args - Arguments to filter Midias to count.
     * @example
     * // Count the number of Midias
     * const count = await prisma.midia.count({
     *   where: {
     *     // ... the filter for the Midias we want to count
     *   }
     * })
    **/
    count<T extends MidiaCountArgs>(
      args?: Subset<T, MidiaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MidiaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Midia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MidiaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MidiaAggregateArgs>(args: Subset<T, MidiaAggregateArgs>): Prisma.PrismaPromise<GetMidiaAggregateType<T>>

    /**
     * Group by Midia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MidiaGroupByArgs} args - Group by arguments.
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
      T extends MidiaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MidiaGroupByArgs['orderBy'] }
        : { orderBy?: MidiaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MidiaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMidiaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Midia model
   */
  readonly fields: MidiaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Midia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MidiaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reserva<T extends Midia$reservaArgs<ExtArgs> = {}>(args?: Subset<T, Midia$reservaArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Midia model
   */
  interface MidiaFieldRefs {
    readonly id_midia: FieldRef<"Midia", 'String'>
    readonly id_reserva: FieldRef<"Midia", 'String'>
    readonly tipo: FieldRef<"Midia", 'String'>
    readonly caminho_arquivo: FieldRef<"Midia", 'String'>
    readonly data_envio: FieldRef<"Midia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Midia findUnique
   */
  export type MidiaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Midia
     */
    select?: MidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Midia
     */
    omit?: MidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MidiaInclude<ExtArgs> | null
    /**
     * Filter, which Midia to fetch.
     */
    where: MidiaWhereUniqueInput
  }

  /**
   * Midia findUniqueOrThrow
   */
  export type MidiaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Midia
     */
    select?: MidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Midia
     */
    omit?: MidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MidiaInclude<ExtArgs> | null
    /**
     * Filter, which Midia to fetch.
     */
    where: MidiaWhereUniqueInput
  }

  /**
   * Midia findFirst
   */
  export type MidiaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Midia
     */
    select?: MidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Midia
     */
    omit?: MidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MidiaInclude<ExtArgs> | null
    /**
     * Filter, which Midia to fetch.
     */
    where?: MidiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Midias to fetch.
     */
    orderBy?: MidiaOrderByWithRelationInput | MidiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Midias.
     */
    cursor?: MidiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Midias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Midias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Midias.
     */
    distinct?: MidiaScalarFieldEnum | MidiaScalarFieldEnum[]
  }

  /**
   * Midia findFirstOrThrow
   */
  export type MidiaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Midia
     */
    select?: MidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Midia
     */
    omit?: MidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MidiaInclude<ExtArgs> | null
    /**
     * Filter, which Midia to fetch.
     */
    where?: MidiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Midias to fetch.
     */
    orderBy?: MidiaOrderByWithRelationInput | MidiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Midias.
     */
    cursor?: MidiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Midias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Midias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Midias.
     */
    distinct?: MidiaScalarFieldEnum | MidiaScalarFieldEnum[]
  }

  /**
   * Midia findMany
   */
  export type MidiaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Midia
     */
    select?: MidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Midia
     */
    omit?: MidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MidiaInclude<ExtArgs> | null
    /**
     * Filter, which Midias to fetch.
     */
    where?: MidiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Midias to fetch.
     */
    orderBy?: MidiaOrderByWithRelationInput | MidiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Midias.
     */
    cursor?: MidiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Midias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Midias.
     */
    skip?: number
    distinct?: MidiaScalarFieldEnum | MidiaScalarFieldEnum[]
  }

  /**
   * Midia create
   */
  export type MidiaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Midia
     */
    select?: MidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Midia
     */
    omit?: MidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MidiaInclude<ExtArgs> | null
    /**
     * The data needed to create a Midia.
     */
    data: XOR<MidiaCreateInput, MidiaUncheckedCreateInput>
  }

  /**
   * Midia createMany
   */
  export type MidiaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Midias.
     */
    data: MidiaCreateManyInput | MidiaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Midia createManyAndReturn
   */
  export type MidiaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Midia
     */
    select?: MidiaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Midia
     */
    omit?: MidiaOmit<ExtArgs> | null
    /**
     * The data used to create many Midias.
     */
    data: MidiaCreateManyInput | MidiaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MidiaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Midia update
   */
  export type MidiaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Midia
     */
    select?: MidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Midia
     */
    omit?: MidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MidiaInclude<ExtArgs> | null
    /**
     * The data needed to update a Midia.
     */
    data: XOR<MidiaUpdateInput, MidiaUncheckedUpdateInput>
    /**
     * Choose, which Midia to update.
     */
    where: MidiaWhereUniqueInput
  }

  /**
   * Midia updateMany
   */
  export type MidiaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Midias.
     */
    data: XOR<MidiaUpdateManyMutationInput, MidiaUncheckedUpdateManyInput>
    /**
     * Filter which Midias to update
     */
    where?: MidiaWhereInput
    /**
     * Limit how many Midias to update.
     */
    limit?: number
  }

  /**
   * Midia updateManyAndReturn
   */
  export type MidiaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Midia
     */
    select?: MidiaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Midia
     */
    omit?: MidiaOmit<ExtArgs> | null
    /**
     * The data used to update Midias.
     */
    data: XOR<MidiaUpdateManyMutationInput, MidiaUncheckedUpdateManyInput>
    /**
     * Filter which Midias to update
     */
    where?: MidiaWhereInput
    /**
     * Limit how many Midias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MidiaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Midia upsert
   */
  export type MidiaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Midia
     */
    select?: MidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Midia
     */
    omit?: MidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MidiaInclude<ExtArgs> | null
    /**
     * The filter to search for the Midia to update in case it exists.
     */
    where: MidiaWhereUniqueInput
    /**
     * In case the Midia found by the `where` argument doesn't exist, create a new Midia with this data.
     */
    create: XOR<MidiaCreateInput, MidiaUncheckedCreateInput>
    /**
     * In case the Midia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MidiaUpdateInput, MidiaUncheckedUpdateInput>
  }

  /**
   * Midia delete
   */
  export type MidiaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Midia
     */
    select?: MidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Midia
     */
    omit?: MidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MidiaInclude<ExtArgs> | null
    /**
     * Filter which Midia to delete.
     */
    where: MidiaWhereUniqueInput
  }

  /**
   * Midia deleteMany
   */
  export type MidiaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Midias to delete
     */
    where?: MidiaWhereInput
    /**
     * Limit how many Midias to delete.
     */
    limit?: number
  }

  /**
   * Midia.reserva
   */
  export type Midia$reservaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
  }

  /**
   * Midia without action
   */
  export type MidiaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Midia
     */
    select?: MidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Midia
     */
    omit?: MidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MidiaInclude<ExtArgs> | null
  }


  /**
   * Model Notificacao
   */

  export type AggregateNotificacao = {
    _count: NotificacaoCountAggregateOutputType | null
    _min: NotificacaoMinAggregateOutputType | null
    _max: NotificacaoMaxAggregateOutputType | null
  }

  export type NotificacaoMinAggregateOutputType = {
    id_notificacao: string | null
    id_tutor: string | null
    id_prestador: string | null
    mensagem: string | null
    data_envio: Date | null
    lida: boolean | null
  }

  export type NotificacaoMaxAggregateOutputType = {
    id_notificacao: string | null
    id_tutor: string | null
    id_prestador: string | null
    mensagem: string | null
    data_envio: Date | null
    lida: boolean | null
  }

  export type NotificacaoCountAggregateOutputType = {
    id_notificacao: number
    id_tutor: number
    id_prestador: number
    mensagem: number
    data_envio: number
    lida: number
    _all: number
  }


  export type NotificacaoMinAggregateInputType = {
    id_notificacao?: true
    id_tutor?: true
    id_prestador?: true
    mensagem?: true
    data_envio?: true
    lida?: true
  }

  export type NotificacaoMaxAggregateInputType = {
    id_notificacao?: true
    id_tutor?: true
    id_prestador?: true
    mensagem?: true
    data_envio?: true
    lida?: true
  }

  export type NotificacaoCountAggregateInputType = {
    id_notificacao?: true
    id_tutor?: true
    id_prestador?: true
    mensagem?: true
    data_envio?: true
    lida?: true
    _all?: true
  }

  export type NotificacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacao to aggregate.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notificacaos
    **/
    _count?: true | NotificacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificacaoMaxAggregateInputType
  }

  export type GetNotificacaoAggregateType<T extends NotificacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificacao[P]>
      : GetScalarType<T[P], AggregateNotificacao[P]>
  }




  export type NotificacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacaoWhereInput
    orderBy?: NotificacaoOrderByWithAggregationInput | NotificacaoOrderByWithAggregationInput[]
    by: NotificacaoScalarFieldEnum[] | NotificacaoScalarFieldEnum
    having?: NotificacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificacaoCountAggregateInputType | true
    _min?: NotificacaoMinAggregateInputType
    _max?: NotificacaoMaxAggregateInputType
  }

  export type NotificacaoGroupByOutputType = {
    id_notificacao: string
    id_tutor: string | null
    id_prestador: string | null
    mensagem: string | null
    data_envio: Date | null
    lida: boolean | null
    _count: NotificacaoCountAggregateOutputType | null
    _min: NotificacaoMinAggregateOutputType | null
    _max: NotificacaoMaxAggregateOutputType | null
  }

  type GetNotificacaoGroupByPayload<T extends NotificacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificacaoGroupByOutputType[P]>
            : GetScalarType<T[P], NotificacaoGroupByOutputType[P]>
        }
      >
    >


  export type NotificacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_notificacao?: boolean
    id_tutor?: boolean
    id_prestador?: boolean
    mensagem?: boolean
    data_envio?: boolean
    lida?: boolean
    tutor?: boolean | Notificacao$tutorArgs<ExtArgs>
    prestador?: boolean | Notificacao$prestadorArgs<ExtArgs>
  }, ExtArgs["result"]["notificacao"]>

  export type NotificacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_notificacao?: boolean
    id_tutor?: boolean
    id_prestador?: boolean
    mensagem?: boolean
    data_envio?: boolean
    lida?: boolean
    tutor?: boolean | Notificacao$tutorArgs<ExtArgs>
    prestador?: boolean | Notificacao$prestadorArgs<ExtArgs>
  }, ExtArgs["result"]["notificacao"]>

  export type NotificacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_notificacao?: boolean
    id_tutor?: boolean
    id_prestador?: boolean
    mensagem?: boolean
    data_envio?: boolean
    lida?: boolean
    tutor?: boolean | Notificacao$tutorArgs<ExtArgs>
    prestador?: boolean | Notificacao$prestadorArgs<ExtArgs>
  }, ExtArgs["result"]["notificacao"]>

  export type NotificacaoSelectScalar = {
    id_notificacao?: boolean
    id_tutor?: boolean
    id_prestador?: boolean
    mensagem?: boolean
    data_envio?: boolean
    lida?: boolean
  }

  export type NotificacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_notificacao" | "id_tutor" | "id_prestador" | "mensagem" | "data_envio" | "lida", ExtArgs["result"]["notificacao"]>
  export type NotificacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | Notificacao$tutorArgs<ExtArgs>
    prestador?: boolean | Notificacao$prestadorArgs<ExtArgs>
  }
  export type NotificacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | Notificacao$tutorArgs<ExtArgs>
    prestador?: boolean | Notificacao$prestadorArgs<ExtArgs>
  }
  export type NotificacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | Notificacao$tutorArgs<ExtArgs>
    prestador?: boolean | Notificacao$prestadorArgs<ExtArgs>
  }

  export type $NotificacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notificacao"
    objects: {
      tutor: Prisma.$TutorPayload<ExtArgs> | null
      prestador: Prisma.$PrestadorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_notificacao: string
      id_tutor: string | null
      id_prestador: string | null
      mensagem: string | null
      data_envio: Date | null
      lida: boolean | null
    }, ExtArgs["result"]["notificacao"]>
    composites: {}
  }

  type NotificacaoGetPayload<S extends boolean | null | undefined | NotificacaoDefaultArgs> = $Result.GetResult<Prisma.$NotificacaoPayload, S>

  type NotificacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificacaoCountAggregateInputType | true
    }

  export interface NotificacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notificacao'], meta: { name: 'Notificacao' } }
    /**
     * Find zero or one Notificacao that matches the filter.
     * @param {NotificacaoFindUniqueArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificacaoFindUniqueArgs>(args: SelectSubset<T, NotificacaoFindUniqueArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notificacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificacaoFindUniqueOrThrowArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindFirstArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificacaoFindFirstArgs>(args?: SelectSubset<T, NotificacaoFindFirstArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindFirstOrThrowArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notificacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notificacaos
     * const notificacaos = await prisma.notificacao.findMany()
     * 
     * // Get first 10 Notificacaos
     * const notificacaos = await prisma.notificacao.findMany({ take: 10 })
     * 
     * // Only select the `id_notificacao`
     * const notificacaoWithId_notificacaoOnly = await prisma.notificacao.findMany({ select: { id_notificacao: true } })
     * 
     */
    findMany<T extends NotificacaoFindManyArgs>(args?: SelectSubset<T, NotificacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notificacao.
     * @param {NotificacaoCreateArgs} args - Arguments to create a Notificacao.
     * @example
     * // Create one Notificacao
     * const Notificacao = await prisma.notificacao.create({
     *   data: {
     *     // ... data to create a Notificacao
     *   }
     * })
     * 
     */
    create<T extends NotificacaoCreateArgs>(args: SelectSubset<T, NotificacaoCreateArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notificacaos.
     * @param {NotificacaoCreateManyArgs} args - Arguments to create many Notificacaos.
     * @example
     * // Create many Notificacaos
     * const notificacao = await prisma.notificacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificacaoCreateManyArgs>(args?: SelectSubset<T, NotificacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notificacaos and returns the data saved in the database.
     * @param {NotificacaoCreateManyAndReturnArgs} args - Arguments to create many Notificacaos.
     * @example
     * // Create many Notificacaos
     * const notificacao = await prisma.notificacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notificacaos and only return the `id_notificacao`
     * const notificacaoWithId_notificacaoOnly = await prisma.notificacao.createManyAndReturn({
     *   select: { id_notificacao: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notificacao.
     * @param {NotificacaoDeleteArgs} args - Arguments to delete one Notificacao.
     * @example
     * // Delete one Notificacao
     * const Notificacao = await prisma.notificacao.delete({
     *   where: {
     *     // ... filter to delete one Notificacao
     *   }
     * })
     * 
     */
    delete<T extends NotificacaoDeleteArgs>(args: SelectSubset<T, NotificacaoDeleteArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notificacao.
     * @param {NotificacaoUpdateArgs} args - Arguments to update one Notificacao.
     * @example
     * // Update one Notificacao
     * const notificacao = await prisma.notificacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificacaoUpdateArgs>(args: SelectSubset<T, NotificacaoUpdateArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notificacaos.
     * @param {NotificacaoDeleteManyArgs} args - Arguments to filter Notificacaos to delete.
     * @example
     * // Delete a few Notificacaos
     * const { count } = await prisma.notificacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificacaoDeleteManyArgs>(args?: SelectSubset<T, NotificacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notificacaos
     * const notificacao = await prisma.notificacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificacaoUpdateManyArgs>(args: SelectSubset<T, NotificacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacaos and returns the data updated in the database.
     * @param {NotificacaoUpdateManyAndReturnArgs} args - Arguments to update many Notificacaos.
     * @example
     * // Update many Notificacaos
     * const notificacao = await prisma.notificacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notificacaos and only return the `id_notificacao`
     * const notificacaoWithId_notificacaoOnly = await prisma.notificacao.updateManyAndReturn({
     *   select: { id_notificacao: true },
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
    updateManyAndReturn<T extends NotificacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notificacao.
     * @param {NotificacaoUpsertArgs} args - Arguments to update or create a Notificacao.
     * @example
     * // Update or create a Notificacao
     * const notificacao = await prisma.notificacao.upsert({
     *   create: {
     *     // ... data to create a Notificacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notificacao we want to update
     *   }
     * })
     */
    upsert<T extends NotificacaoUpsertArgs>(args: SelectSubset<T, NotificacaoUpsertArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoCountArgs} args - Arguments to filter Notificacaos to count.
     * @example
     * // Count the number of Notificacaos
     * const count = await prisma.notificacao.count({
     *   where: {
     *     // ... the filter for the Notificacaos we want to count
     *   }
     * })
    **/
    count<T extends NotificacaoCountArgs>(
      args?: Subset<T, NotificacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificacaoAggregateArgs>(args: Subset<T, NotificacaoAggregateArgs>): Prisma.PrismaPromise<GetNotificacaoAggregateType<T>>

    /**
     * Group by Notificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoGroupByArgs} args - Group by arguments.
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
      T extends NotificacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificacaoGroupByArgs['orderBy'] }
        : { orderBy?: NotificacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notificacao model
   */
  readonly fields: NotificacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notificacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tutor<T extends Notificacao$tutorArgs<ExtArgs> = {}>(args?: Subset<T, Notificacao$tutorArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    prestador<T extends Notificacao$prestadorArgs<ExtArgs> = {}>(args?: Subset<T, Notificacao$prestadorArgs<ExtArgs>>): Prisma__PrestadorClient<$Result.GetResult<Prisma.$PrestadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notificacao model
   */
  interface NotificacaoFieldRefs {
    readonly id_notificacao: FieldRef<"Notificacao", 'String'>
    readonly id_tutor: FieldRef<"Notificacao", 'String'>
    readonly id_prestador: FieldRef<"Notificacao", 'String'>
    readonly mensagem: FieldRef<"Notificacao", 'String'>
    readonly data_envio: FieldRef<"Notificacao", 'DateTime'>
    readonly lida: FieldRef<"Notificacao", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Notificacao findUnique
   */
  export type NotificacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao findUniqueOrThrow
   */
  export type NotificacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao findFirst
   */
  export type NotificacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacaos.
     */
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao findFirstOrThrow
   */
  export type NotificacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacaos.
     */
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao findMany
   */
  export type NotificacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacaos to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao create
   */
  export type NotificacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Notificacao.
     */
    data: XOR<NotificacaoCreateInput, NotificacaoUncheckedCreateInput>
  }

  /**
   * Notificacao createMany
   */
  export type NotificacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notificacaos.
     */
    data: NotificacaoCreateManyInput | NotificacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notificacao createManyAndReturn
   */
  export type NotificacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Notificacaos.
     */
    data: NotificacaoCreateManyInput | NotificacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notificacao update
   */
  export type NotificacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Notificacao.
     */
    data: XOR<NotificacaoUpdateInput, NotificacaoUncheckedUpdateInput>
    /**
     * Choose, which Notificacao to update.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao updateMany
   */
  export type NotificacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notificacaos.
     */
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyInput>
    /**
     * Filter which Notificacaos to update
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to update.
     */
    limit?: number
  }

  /**
   * Notificacao updateManyAndReturn
   */
  export type NotificacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * The data used to update Notificacaos.
     */
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyInput>
    /**
     * Filter which Notificacaos to update
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notificacao upsert
   */
  export type NotificacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Notificacao to update in case it exists.
     */
    where: NotificacaoWhereUniqueInput
    /**
     * In case the Notificacao found by the `where` argument doesn't exist, create a new Notificacao with this data.
     */
    create: XOR<NotificacaoCreateInput, NotificacaoUncheckedCreateInput>
    /**
     * In case the Notificacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificacaoUpdateInput, NotificacaoUncheckedUpdateInput>
  }

  /**
   * Notificacao delete
   */
  export type NotificacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter which Notificacao to delete.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao deleteMany
   */
  export type NotificacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacaos to delete
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to delete.
     */
    limit?: number
  }

  /**
   * Notificacao.tutor
   */
  export type Notificacao$tutorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    where?: TutorWhereInput
  }

  /**
   * Notificacao.prestador
   */
  export type Notificacao$prestadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestador
     */
    select?: PrestadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestador
     */
    omit?: PrestadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestadorInclude<ExtArgs> | null
    where?: PrestadorWhereInput
  }

  /**
   * Notificacao without action
   */
  export type NotificacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
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


  export const TutorScalarFieldEnum: {
    id_tutor: 'id_tutor',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    endereco: 'endereco',
    senha: 'senha'
  };

  export type TutorScalarFieldEnum = (typeof TutorScalarFieldEnum)[keyof typeof TutorScalarFieldEnum]


  export const PrestadorScalarFieldEnum: {
    id_prestador: 'id_prestador',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    endereco: 'endereco',
    senha: 'senha',
    servicos: 'servicos'
  };

  export type PrestadorScalarFieldEnum = (typeof PrestadorScalarFieldEnum)[keyof typeof PrestadorScalarFieldEnum]


  export const PetScalarFieldEnum: {
    id_pet: 'id_pet',
    id_tutor: 'id_tutor',
    nome: 'nome',
    especie: 'especie',
    raca: 'raca',
    idade: 'idade',
    restricoes: 'restricoes'
  };

  export type PetScalarFieldEnum = (typeof PetScalarFieldEnum)[keyof typeof PetScalarFieldEnum]


  export const ServicoScalarFieldEnum: {
    id_servico: 'id_servico',
    id_prestador: 'id_prestador',
    descricao: 'descricao',
    titulo: 'titulo',
    preco: 'preco',
    tipo: 'tipo'
  };

  export type ServicoScalarFieldEnum = (typeof ServicoScalarFieldEnum)[keyof typeof ServicoScalarFieldEnum]


  export const AgendamentoScalarFieldEnum: {
    id_agendamento: 'id_agendamento',
    id_prestador: 'id_prestador',
    data_inicio: 'data_inicio',
    data_fim: 'data_fim',
    disponivel: 'disponivel'
  };

  export type AgendamentoScalarFieldEnum = (typeof AgendamentoScalarFieldEnum)[keyof typeof AgendamentoScalarFieldEnum]


  export const ReservaScalarFieldEnum: {
    id_reserva: 'id_reserva',
    id_tutor: 'id_tutor',
    id_pet: 'id_pet',
    id_servico: 'id_servico',
    id_agendamento: 'id_agendamento',
    status: 'status',
    data_reserva: 'data_reserva',
    valor: 'valor'
  };

  export type ReservaScalarFieldEnum = (typeof ReservaScalarFieldEnum)[keyof typeof ReservaScalarFieldEnum]


  export const AvaliacaoScalarFieldEnum: {
    id_avaliacao: 'id_avaliacao',
    id_reserva: 'id_reserva',
    nota: 'nota',
    comentario: 'comentario',
    data_avaliacao: 'data_avaliacao'
  };

  export type AvaliacaoScalarFieldEnum = (typeof AvaliacaoScalarFieldEnum)[keyof typeof AvaliacaoScalarFieldEnum]


  export const PagamentoScalarFieldEnum: {
    id_pagamento: 'id_pagamento',
    id_reserva: 'id_reserva',
    valor: 'valor',
    forma_pagamento: 'forma_pagamento',
    gorjeta: 'gorjeta',
    status: 'status',
    data_pagamento: 'data_pagamento'
  };

  export type PagamentoScalarFieldEnum = (typeof PagamentoScalarFieldEnum)[keyof typeof PagamentoScalarFieldEnum]


  export const MidiaScalarFieldEnum: {
    id_midia: 'id_midia',
    id_reserva: 'id_reserva',
    tipo: 'tipo',
    caminho_arquivo: 'caminho_arquivo',
    data_envio: 'data_envio'
  };

  export type MidiaScalarFieldEnum = (typeof MidiaScalarFieldEnum)[keyof typeof MidiaScalarFieldEnum]


  export const NotificacaoScalarFieldEnum: {
    id_notificacao: 'id_notificacao',
    id_tutor: 'id_tutor',
    id_prestador: 'id_prestador',
    mensagem: 'mensagem',
    data_envio: 'data_envio',
    lida: 'lida'
  };

  export type NotificacaoScalarFieldEnum = (typeof NotificacaoScalarFieldEnum)[keyof typeof NotificacaoScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type TutorWhereInput = {
    AND?: TutorWhereInput | TutorWhereInput[]
    OR?: TutorWhereInput[]
    NOT?: TutorWhereInput | TutorWhereInput[]
    id_tutor?: StringFilter<"Tutor"> | string
    nome?: StringNullableFilter<"Tutor"> | string | null
    email?: StringNullableFilter<"Tutor"> | string | null
    telefone?: StringNullableFilter<"Tutor"> | string | null
    endereco?: StringNullableFilter<"Tutor"> | string | null
    senha?: StringNullableFilter<"Tutor"> | string | null
    pets?: PetListRelationFilter
    reservas?: ReservaListRelationFilter
    notificacoes?: NotificacaoListRelationFilter
  }

  export type TutorOrderByWithRelationInput = {
    id_tutor?: SortOrder
    nome?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    senha?: SortOrderInput | SortOrder
    pets?: PetOrderByRelationAggregateInput
    reservas?: ReservaOrderByRelationAggregateInput
    notificacoes?: NotificacaoOrderByRelationAggregateInput
  }

  export type TutorWhereUniqueInput = Prisma.AtLeast<{
    id_tutor?: string
    AND?: TutorWhereInput | TutorWhereInput[]
    OR?: TutorWhereInput[]
    NOT?: TutorWhereInput | TutorWhereInput[]
    nome?: StringNullableFilter<"Tutor"> | string | null
    email?: StringNullableFilter<"Tutor"> | string | null
    telefone?: StringNullableFilter<"Tutor"> | string | null
    endereco?: StringNullableFilter<"Tutor"> | string | null
    senha?: StringNullableFilter<"Tutor"> | string | null
    pets?: PetListRelationFilter
    reservas?: ReservaListRelationFilter
    notificacoes?: NotificacaoListRelationFilter
  }, "id_tutor">

  export type TutorOrderByWithAggregationInput = {
    id_tutor?: SortOrder
    nome?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    senha?: SortOrderInput | SortOrder
    _count?: TutorCountOrderByAggregateInput
    _max?: TutorMaxOrderByAggregateInput
    _min?: TutorMinOrderByAggregateInput
  }

  export type TutorScalarWhereWithAggregatesInput = {
    AND?: TutorScalarWhereWithAggregatesInput | TutorScalarWhereWithAggregatesInput[]
    OR?: TutorScalarWhereWithAggregatesInput[]
    NOT?: TutorScalarWhereWithAggregatesInput | TutorScalarWhereWithAggregatesInput[]
    id_tutor?: StringWithAggregatesFilter<"Tutor"> | string
    nome?: StringNullableWithAggregatesFilter<"Tutor"> | string | null
    email?: StringNullableWithAggregatesFilter<"Tutor"> | string | null
    telefone?: StringNullableWithAggregatesFilter<"Tutor"> | string | null
    endereco?: StringNullableWithAggregatesFilter<"Tutor"> | string | null
    senha?: StringNullableWithAggregatesFilter<"Tutor"> | string | null
  }

  export type PrestadorWhereInput = {
    AND?: PrestadorWhereInput | PrestadorWhereInput[]
    OR?: PrestadorWhereInput[]
    NOT?: PrestadorWhereInput | PrestadorWhereInput[]
    id_prestador?: StringFilter<"Prestador"> | string
    nome?: StringNullableFilter<"Prestador"> | string | null
    email?: StringNullableFilter<"Prestador"> | string | null
    telefone?: StringNullableFilter<"Prestador"> | string | null
    endereco?: StringNullableFilter<"Prestador"> | string | null
    senha?: StringNullableFilter<"Prestador"> | string | null
    servicos?: StringNullableFilter<"Prestador"> | string | null
    servicos_list?: ServicoListRelationFilter
    agendamentos?: AgendamentoListRelationFilter
    notificacoes?: NotificacaoListRelationFilter
  }

  export type PrestadorOrderByWithRelationInput = {
    id_prestador?: SortOrder
    nome?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    senha?: SortOrderInput | SortOrder
    servicos?: SortOrderInput | SortOrder
    servicos_list?: ServicoOrderByRelationAggregateInput
    agendamentos?: AgendamentoOrderByRelationAggregateInput
    notificacoes?: NotificacaoOrderByRelationAggregateInput
  }

  export type PrestadorWhereUniqueInput = Prisma.AtLeast<{
    id_prestador?: string
    AND?: PrestadorWhereInput | PrestadorWhereInput[]
    OR?: PrestadorWhereInput[]
    NOT?: PrestadorWhereInput | PrestadorWhereInput[]
    nome?: StringNullableFilter<"Prestador"> | string | null
    email?: StringNullableFilter<"Prestador"> | string | null
    telefone?: StringNullableFilter<"Prestador"> | string | null
    endereco?: StringNullableFilter<"Prestador"> | string | null
    senha?: StringNullableFilter<"Prestador"> | string | null
    servicos?: StringNullableFilter<"Prestador"> | string | null
    servicos_list?: ServicoListRelationFilter
    agendamentos?: AgendamentoListRelationFilter
    notificacoes?: NotificacaoListRelationFilter
  }, "id_prestador">

  export type PrestadorOrderByWithAggregationInput = {
    id_prestador?: SortOrder
    nome?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    senha?: SortOrderInput | SortOrder
    servicos?: SortOrderInput | SortOrder
    _count?: PrestadorCountOrderByAggregateInput
    _max?: PrestadorMaxOrderByAggregateInput
    _min?: PrestadorMinOrderByAggregateInput
  }

  export type PrestadorScalarWhereWithAggregatesInput = {
    AND?: PrestadorScalarWhereWithAggregatesInput | PrestadorScalarWhereWithAggregatesInput[]
    OR?: PrestadorScalarWhereWithAggregatesInput[]
    NOT?: PrestadorScalarWhereWithAggregatesInput | PrestadorScalarWhereWithAggregatesInput[]
    id_prestador?: StringWithAggregatesFilter<"Prestador"> | string
    nome?: StringNullableWithAggregatesFilter<"Prestador"> | string | null
    email?: StringNullableWithAggregatesFilter<"Prestador"> | string | null
    telefone?: StringNullableWithAggregatesFilter<"Prestador"> | string | null
    endereco?: StringNullableWithAggregatesFilter<"Prestador"> | string | null
    senha?: StringNullableWithAggregatesFilter<"Prestador"> | string | null
    servicos?: StringNullableWithAggregatesFilter<"Prestador"> | string | null
  }

  export type PetWhereInput = {
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    id_pet?: StringFilter<"Pet"> | string
    id_tutor?: StringNullableFilter<"Pet"> | string | null
    nome?: StringNullableFilter<"Pet"> | string | null
    especie?: StringNullableFilter<"Pet"> | string | null
    raca?: StringNullableFilter<"Pet"> | string | null
    idade?: IntNullableFilter<"Pet"> | number | null
    restricoes?: StringNullableFilter<"Pet"> | string | null
    tutor?: XOR<TutorNullableScalarRelationFilter, TutorWhereInput> | null
    reservas?: ReservaListRelationFilter
  }

  export type PetOrderByWithRelationInput = {
    id_pet?: SortOrder
    id_tutor?: SortOrderInput | SortOrder
    nome?: SortOrderInput | SortOrder
    especie?: SortOrderInput | SortOrder
    raca?: SortOrderInput | SortOrder
    idade?: SortOrderInput | SortOrder
    restricoes?: SortOrderInput | SortOrder
    tutor?: TutorOrderByWithRelationInput
    reservas?: ReservaOrderByRelationAggregateInput
  }

  export type PetWhereUniqueInput = Prisma.AtLeast<{
    id_pet?: string
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    id_tutor?: StringNullableFilter<"Pet"> | string | null
    nome?: StringNullableFilter<"Pet"> | string | null
    especie?: StringNullableFilter<"Pet"> | string | null
    raca?: StringNullableFilter<"Pet"> | string | null
    idade?: IntNullableFilter<"Pet"> | number | null
    restricoes?: StringNullableFilter<"Pet"> | string | null
    tutor?: XOR<TutorNullableScalarRelationFilter, TutorWhereInput> | null
    reservas?: ReservaListRelationFilter
  }, "id_pet">

  export type PetOrderByWithAggregationInput = {
    id_pet?: SortOrder
    id_tutor?: SortOrderInput | SortOrder
    nome?: SortOrderInput | SortOrder
    especie?: SortOrderInput | SortOrder
    raca?: SortOrderInput | SortOrder
    idade?: SortOrderInput | SortOrder
    restricoes?: SortOrderInput | SortOrder
    _count?: PetCountOrderByAggregateInput
    _avg?: PetAvgOrderByAggregateInput
    _max?: PetMaxOrderByAggregateInput
    _min?: PetMinOrderByAggregateInput
    _sum?: PetSumOrderByAggregateInput
  }

  export type PetScalarWhereWithAggregatesInput = {
    AND?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    OR?: PetScalarWhereWithAggregatesInput[]
    NOT?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    id_pet?: StringWithAggregatesFilter<"Pet"> | string
    id_tutor?: StringNullableWithAggregatesFilter<"Pet"> | string | null
    nome?: StringNullableWithAggregatesFilter<"Pet"> | string | null
    especie?: StringNullableWithAggregatesFilter<"Pet"> | string | null
    raca?: StringNullableWithAggregatesFilter<"Pet"> | string | null
    idade?: IntNullableWithAggregatesFilter<"Pet"> | number | null
    restricoes?: StringNullableWithAggregatesFilter<"Pet"> | string | null
  }

  export type ServicoWhereInput = {
    AND?: ServicoWhereInput | ServicoWhereInput[]
    OR?: ServicoWhereInput[]
    NOT?: ServicoWhereInput | ServicoWhereInput[]
    id_servico?: StringFilter<"Servico"> | string
    id_prestador?: StringNullableFilter<"Servico"> | string | null
    descricao?: StringNullableFilter<"Servico"> | string | null
    titulo?: StringNullableFilter<"Servico"> | string | null
    preco?: FloatNullableFilter<"Servico"> | number | null
    tipo?: StringNullableFilter<"Servico"> | string | null
    prestador?: XOR<PrestadorNullableScalarRelationFilter, PrestadorWhereInput> | null
    reservas?: ReservaListRelationFilter
  }

  export type ServicoOrderByWithRelationInput = {
    id_servico?: SortOrder
    id_prestador?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    titulo?: SortOrderInput | SortOrder
    preco?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    prestador?: PrestadorOrderByWithRelationInput
    reservas?: ReservaOrderByRelationAggregateInput
  }

  export type ServicoWhereUniqueInput = Prisma.AtLeast<{
    id_servico?: string
    AND?: ServicoWhereInput | ServicoWhereInput[]
    OR?: ServicoWhereInput[]
    NOT?: ServicoWhereInput | ServicoWhereInput[]
    id_prestador?: StringNullableFilter<"Servico"> | string | null
    descricao?: StringNullableFilter<"Servico"> | string | null
    titulo?: StringNullableFilter<"Servico"> | string | null
    preco?: FloatNullableFilter<"Servico"> | number | null
    tipo?: StringNullableFilter<"Servico"> | string | null
    prestador?: XOR<PrestadorNullableScalarRelationFilter, PrestadorWhereInput> | null
    reservas?: ReservaListRelationFilter
  }, "id_servico">

  export type ServicoOrderByWithAggregationInput = {
    id_servico?: SortOrder
    id_prestador?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    titulo?: SortOrderInput | SortOrder
    preco?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    _count?: ServicoCountOrderByAggregateInput
    _avg?: ServicoAvgOrderByAggregateInput
    _max?: ServicoMaxOrderByAggregateInput
    _min?: ServicoMinOrderByAggregateInput
    _sum?: ServicoSumOrderByAggregateInput
  }

  export type ServicoScalarWhereWithAggregatesInput = {
    AND?: ServicoScalarWhereWithAggregatesInput | ServicoScalarWhereWithAggregatesInput[]
    OR?: ServicoScalarWhereWithAggregatesInput[]
    NOT?: ServicoScalarWhereWithAggregatesInput | ServicoScalarWhereWithAggregatesInput[]
    id_servico?: StringWithAggregatesFilter<"Servico"> | string
    id_prestador?: StringNullableWithAggregatesFilter<"Servico"> | string | null
    descricao?: StringNullableWithAggregatesFilter<"Servico"> | string | null
    titulo?: StringNullableWithAggregatesFilter<"Servico"> | string | null
    preco?: FloatNullableWithAggregatesFilter<"Servico"> | number | null
    tipo?: StringNullableWithAggregatesFilter<"Servico"> | string | null
  }

  export type AgendamentoWhereInput = {
    AND?: AgendamentoWhereInput | AgendamentoWhereInput[]
    OR?: AgendamentoWhereInput[]
    NOT?: AgendamentoWhereInput | AgendamentoWhereInput[]
    id_agendamento?: StringFilter<"Agendamento"> | string
    id_prestador?: StringNullableFilter<"Agendamento"> | string | null
    data_inicio?: DateTimeNullableFilter<"Agendamento"> | Date | string | null
    data_fim?: DateTimeNullableFilter<"Agendamento"> | Date | string | null
    disponivel?: BoolNullableFilter<"Agendamento"> | boolean | null
    prestador?: XOR<PrestadorNullableScalarRelationFilter, PrestadorWhereInput> | null
    reservas?: ReservaListRelationFilter
  }

  export type AgendamentoOrderByWithRelationInput = {
    id_agendamento?: SortOrder
    id_prestador?: SortOrderInput | SortOrder
    data_inicio?: SortOrderInput | SortOrder
    data_fim?: SortOrderInput | SortOrder
    disponivel?: SortOrderInput | SortOrder
    prestador?: PrestadorOrderByWithRelationInput
    reservas?: ReservaOrderByRelationAggregateInput
  }

  export type AgendamentoWhereUniqueInput = Prisma.AtLeast<{
    id_agendamento?: string
    AND?: AgendamentoWhereInput | AgendamentoWhereInput[]
    OR?: AgendamentoWhereInput[]
    NOT?: AgendamentoWhereInput | AgendamentoWhereInput[]
    id_prestador?: StringNullableFilter<"Agendamento"> | string | null
    data_inicio?: DateTimeNullableFilter<"Agendamento"> | Date | string | null
    data_fim?: DateTimeNullableFilter<"Agendamento"> | Date | string | null
    disponivel?: BoolNullableFilter<"Agendamento"> | boolean | null
    prestador?: XOR<PrestadorNullableScalarRelationFilter, PrestadorWhereInput> | null
    reservas?: ReservaListRelationFilter
  }, "id_agendamento">

  export type AgendamentoOrderByWithAggregationInput = {
    id_agendamento?: SortOrder
    id_prestador?: SortOrderInput | SortOrder
    data_inicio?: SortOrderInput | SortOrder
    data_fim?: SortOrderInput | SortOrder
    disponivel?: SortOrderInput | SortOrder
    _count?: AgendamentoCountOrderByAggregateInput
    _max?: AgendamentoMaxOrderByAggregateInput
    _min?: AgendamentoMinOrderByAggregateInput
  }

  export type AgendamentoScalarWhereWithAggregatesInput = {
    AND?: AgendamentoScalarWhereWithAggregatesInput | AgendamentoScalarWhereWithAggregatesInput[]
    OR?: AgendamentoScalarWhereWithAggregatesInput[]
    NOT?: AgendamentoScalarWhereWithAggregatesInput | AgendamentoScalarWhereWithAggregatesInput[]
    id_agendamento?: StringWithAggregatesFilter<"Agendamento"> | string
    id_prestador?: StringNullableWithAggregatesFilter<"Agendamento"> | string | null
    data_inicio?: DateTimeNullableWithAggregatesFilter<"Agendamento"> | Date | string | null
    data_fim?: DateTimeNullableWithAggregatesFilter<"Agendamento"> | Date | string | null
    disponivel?: BoolNullableWithAggregatesFilter<"Agendamento"> | boolean | null
  }

  export type ReservaWhereInput = {
    AND?: ReservaWhereInput | ReservaWhereInput[]
    OR?: ReservaWhereInput[]
    NOT?: ReservaWhereInput | ReservaWhereInput[]
    id_reserva?: StringFilter<"Reserva"> | string
    id_tutor?: StringNullableFilter<"Reserva"> | string | null
    id_pet?: StringNullableFilter<"Reserva"> | string | null
    id_servico?: StringNullableFilter<"Reserva"> | string | null
    id_agendamento?: StringNullableFilter<"Reserva"> | string | null
    status?: StringNullableFilter<"Reserva"> | string | null
    data_reserva?: DateTimeNullableFilter<"Reserva"> | Date | string | null
    valor?: FloatNullableFilter<"Reserva"> | number | null
    tutor?: XOR<TutorNullableScalarRelationFilter, TutorWhereInput> | null
    pet?: XOR<PetNullableScalarRelationFilter, PetWhereInput> | null
    servico?: XOR<ServicoNullableScalarRelationFilter, ServicoWhereInput> | null
    agendamento?: XOR<AgendamentoNullableScalarRelationFilter, AgendamentoWhereInput> | null
    avaliacoes?: AvaliacaoListRelationFilter
    pagamentos?: PagamentoListRelationFilter
    midias?: MidiaListRelationFilter
  }

  export type ReservaOrderByWithRelationInput = {
    id_reserva?: SortOrder
    id_tutor?: SortOrderInput | SortOrder
    id_pet?: SortOrderInput | SortOrder
    id_servico?: SortOrderInput | SortOrder
    id_agendamento?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    data_reserva?: SortOrderInput | SortOrder
    valor?: SortOrderInput | SortOrder
    tutor?: TutorOrderByWithRelationInput
    pet?: PetOrderByWithRelationInput
    servico?: ServicoOrderByWithRelationInput
    agendamento?: AgendamentoOrderByWithRelationInput
    avaliacoes?: AvaliacaoOrderByRelationAggregateInput
    pagamentos?: PagamentoOrderByRelationAggregateInput
    midias?: MidiaOrderByRelationAggregateInput
  }

  export type ReservaWhereUniqueInput = Prisma.AtLeast<{
    id_reserva?: string
    AND?: ReservaWhereInput | ReservaWhereInput[]
    OR?: ReservaWhereInput[]
    NOT?: ReservaWhereInput | ReservaWhereInput[]
    id_tutor?: StringNullableFilter<"Reserva"> | string | null
    id_pet?: StringNullableFilter<"Reserva"> | string | null
    id_servico?: StringNullableFilter<"Reserva"> | string | null
    id_agendamento?: StringNullableFilter<"Reserva"> | string | null
    status?: StringNullableFilter<"Reserva"> | string | null
    data_reserva?: DateTimeNullableFilter<"Reserva"> | Date | string | null
    valor?: FloatNullableFilter<"Reserva"> | number | null
    tutor?: XOR<TutorNullableScalarRelationFilter, TutorWhereInput> | null
    pet?: XOR<PetNullableScalarRelationFilter, PetWhereInput> | null
    servico?: XOR<ServicoNullableScalarRelationFilter, ServicoWhereInput> | null
    agendamento?: XOR<AgendamentoNullableScalarRelationFilter, AgendamentoWhereInput> | null
    avaliacoes?: AvaliacaoListRelationFilter
    pagamentos?: PagamentoListRelationFilter
    midias?: MidiaListRelationFilter
  }, "id_reserva">

  export type ReservaOrderByWithAggregationInput = {
    id_reserva?: SortOrder
    id_tutor?: SortOrderInput | SortOrder
    id_pet?: SortOrderInput | SortOrder
    id_servico?: SortOrderInput | SortOrder
    id_agendamento?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    data_reserva?: SortOrderInput | SortOrder
    valor?: SortOrderInput | SortOrder
    _count?: ReservaCountOrderByAggregateInput
    _avg?: ReservaAvgOrderByAggregateInput
    _max?: ReservaMaxOrderByAggregateInput
    _min?: ReservaMinOrderByAggregateInput
    _sum?: ReservaSumOrderByAggregateInput
  }

  export type ReservaScalarWhereWithAggregatesInput = {
    AND?: ReservaScalarWhereWithAggregatesInput | ReservaScalarWhereWithAggregatesInput[]
    OR?: ReservaScalarWhereWithAggregatesInput[]
    NOT?: ReservaScalarWhereWithAggregatesInput | ReservaScalarWhereWithAggregatesInput[]
    id_reserva?: StringWithAggregatesFilter<"Reserva"> | string
    id_tutor?: StringNullableWithAggregatesFilter<"Reserva"> | string | null
    id_pet?: StringNullableWithAggregatesFilter<"Reserva"> | string | null
    id_servico?: StringNullableWithAggregatesFilter<"Reserva"> | string | null
    id_agendamento?: StringNullableWithAggregatesFilter<"Reserva"> | string | null
    status?: StringNullableWithAggregatesFilter<"Reserva"> | string | null
    data_reserva?: DateTimeNullableWithAggregatesFilter<"Reserva"> | Date | string | null
    valor?: FloatNullableWithAggregatesFilter<"Reserva"> | number | null
  }

  export type AvaliacaoWhereInput = {
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    id_avaliacao?: StringFilter<"Avaliacao"> | string
    id_reserva?: StringNullableFilter<"Avaliacao"> | string | null
    nota?: IntNullableFilter<"Avaliacao"> | number | null
    comentario?: StringNullableFilter<"Avaliacao"> | string | null
    data_avaliacao?: DateTimeNullableFilter<"Avaliacao"> | Date | string | null
    reserva?: XOR<ReservaNullableScalarRelationFilter, ReservaWhereInput> | null
  }

  export type AvaliacaoOrderByWithRelationInput = {
    id_avaliacao?: SortOrder
    id_reserva?: SortOrderInput | SortOrder
    nota?: SortOrderInput | SortOrder
    comentario?: SortOrderInput | SortOrder
    data_avaliacao?: SortOrderInput | SortOrder
    reserva?: ReservaOrderByWithRelationInput
  }

  export type AvaliacaoWhereUniqueInput = Prisma.AtLeast<{
    id_avaliacao?: string
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    id_reserva?: StringNullableFilter<"Avaliacao"> | string | null
    nota?: IntNullableFilter<"Avaliacao"> | number | null
    comentario?: StringNullableFilter<"Avaliacao"> | string | null
    data_avaliacao?: DateTimeNullableFilter<"Avaliacao"> | Date | string | null
    reserva?: XOR<ReservaNullableScalarRelationFilter, ReservaWhereInput> | null
  }, "id_avaliacao">

  export type AvaliacaoOrderByWithAggregationInput = {
    id_avaliacao?: SortOrder
    id_reserva?: SortOrderInput | SortOrder
    nota?: SortOrderInput | SortOrder
    comentario?: SortOrderInput | SortOrder
    data_avaliacao?: SortOrderInput | SortOrder
    _count?: AvaliacaoCountOrderByAggregateInput
    _avg?: AvaliacaoAvgOrderByAggregateInput
    _max?: AvaliacaoMaxOrderByAggregateInput
    _min?: AvaliacaoMinOrderByAggregateInput
    _sum?: AvaliacaoSumOrderByAggregateInput
  }

  export type AvaliacaoScalarWhereWithAggregatesInput = {
    AND?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    OR?: AvaliacaoScalarWhereWithAggregatesInput[]
    NOT?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    id_avaliacao?: StringWithAggregatesFilter<"Avaliacao"> | string
    id_reserva?: StringNullableWithAggregatesFilter<"Avaliacao"> | string | null
    nota?: IntNullableWithAggregatesFilter<"Avaliacao"> | number | null
    comentario?: StringNullableWithAggregatesFilter<"Avaliacao"> | string | null
    data_avaliacao?: DateTimeNullableWithAggregatesFilter<"Avaliacao"> | Date | string | null
  }

  export type PagamentoWhereInput = {
    AND?: PagamentoWhereInput | PagamentoWhereInput[]
    OR?: PagamentoWhereInput[]
    NOT?: PagamentoWhereInput | PagamentoWhereInput[]
    id_pagamento?: StringFilter<"Pagamento"> | string
    id_reserva?: StringNullableFilter<"Pagamento"> | string | null
    valor?: FloatNullableFilter<"Pagamento"> | number | null
    forma_pagamento?: StringNullableFilter<"Pagamento"> | string | null
    gorjeta?: FloatNullableFilter<"Pagamento"> | number | null
    status?: StringNullableFilter<"Pagamento"> | string | null
    data_pagamento?: DateTimeNullableFilter<"Pagamento"> | Date | string | null
    reserva?: XOR<ReservaNullableScalarRelationFilter, ReservaWhereInput> | null
  }

  export type PagamentoOrderByWithRelationInput = {
    id_pagamento?: SortOrder
    id_reserva?: SortOrderInput | SortOrder
    valor?: SortOrderInput | SortOrder
    forma_pagamento?: SortOrderInput | SortOrder
    gorjeta?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    data_pagamento?: SortOrderInput | SortOrder
    reserva?: ReservaOrderByWithRelationInput
  }

  export type PagamentoWhereUniqueInput = Prisma.AtLeast<{
    id_pagamento?: string
    AND?: PagamentoWhereInput | PagamentoWhereInput[]
    OR?: PagamentoWhereInput[]
    NOT?: PagamentoWhereInput | PagamentoWhereInput[]
    id_reserva?: StringNullableFilter<"Pagamento"> | string | null
    valor?: FloatNullableFilter<"Pagamento"> | number | null
    forma_pagamento?: StringNullableFilter<"Pagamento"> | string | null
    gorjeta?: FloatNullableFilter<"Pagamento"> | number | null
    status?: StringNullableFilter<"Pagamento"> | string | null
    data_pagamento?: DateTimeNullableFilter<"Pagamento"> | Date | string | null
    reserva?: XOR<ReservaNullableScalarRelationFilter, ReservaWhereInput> | null
  }, "id_pagamento">

  export type PagamentoOrderByWithAggregationInput = {
    id_pagamento?: SortOrder
    id_reserva?: SortOrderInput | SortOrder
    valor?: SortOrderInput | SortOrder
    forma_pagamento?: SortOrderInput | SortOrder
    gorjeta?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    data_pagamento?: SortOrderInput | SortOrder
    _count?: PagamentoCountOrderByAggregateInput
    _avg?: PagamentoAvgOrderByAggregateInput
    _max?: PagamentoMaxOrderByAggregateInput
    _min?: PagamentoMinOrderByAggregateInput
    _sum?: PagamentoSumOrderByAggregateInput
  }

  export type PagamentoScalarWhereWithAggregatesInput = {
    AND?: PagamentoScalarWhereWithAggregatesInput | PagamentoScalarWhereWithAggregatesInput[]
    OR?: PagamentoScalarWhereWithAggregatesInput[]
    NOT?: PagamentoScalarWhereWithAggregatesInput | PagamentoScalarWhereWithAggregatesInput[]
    id_pagamento?: StringWithAggregatesFilter<"Pagamento"> | string
    id_reserva?: StringNullableWithAggregatesFilter<"Pagamento"> | string | null
    valor?: FloatNullableWithAggregatesFilter<"Pagamento"> | number | null
    forma_pagamento?: StringNullableWithAggregatesFilter<"Pagamento"> | string | null
    gorjeta?: FloatNullableWithAggregatesFilter<"Pagamento"> | number | null
    status?: StringNullableWithAggregatesFilter<"Pagamento"> | string | null
    data_pagamento?: DateTimeNullableWithAggregatesFilter<"Pagamento"> | Date | string | null
  }

  export type MidiaWhereInput = {
    AND?: MidiaWhereInput | MidiaWhereInput[]
    OR?: MidiaWhereInput[]
    NOT?: MidiaWhereInput | MidiaWhereInput[]
    id_midia?: StringFilter<"Midia"> | string
    id_reserva?: StringNullableFilter<"Midia"> | string | null
    tipo?: StringNullableFilter<"Midia"> | string | null
    caminho_arquivo?: StringNullableFilter<"Midia"> | string | null
    data_envio?: DateTimeNullableFilter<"Midia"> | Date | string | null
    reserva?: XOR<ReservaNullableScalarRelationFilter, ReservaWhereInput> | null
  }

  export type MidiaOrderByWithRelationInput = {
    id_midia?: SortOrder
    id_reserva?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    caminho_arquivo?: SortOrderInput | SortOrder
    data_envio?: SortOrderInput | SortOrder
    reserva?: ReservaOrderByWithRelationInput
  }

  export type MidiaWhereUniqueInput = Prisma.AtLeast<{
    id_midia?: string
    AND?: MidiaWhereInput | MidiaWhereInput[]
    OR?: MidiaWhereInput[]
    NOT?: MidiaWhereInput | MidiaWhereInput[]
    id_reserva?: StringNullableFilter<"Midia"> | string | null
    tipo?: StringNullableFilter<"Midia"> | string | null
    caminho_arquivo?: StringNullableFilter<"Midia"> | string | null
    data_envio?: DateTimeNullableFilter<"Midia"> | Date | string | null
    reserva?: XOR<ReservaNullableScalarRelationFilter, ReservaWhereInput> | null
  }, "id_midia">

  export type MidiaOrderByWithAggregationInput = {
    id_midia?: SortOrder
    id_reserva?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    caminho_arquivo?: SortOrderInput | SortOrder
    data_envio?: SortOrderInput | SortOrder
    _count?: MidiaCountOrderByAggregateInput
    _max?: MidiaMaxOrderByAggregateInput
    _min?: MidiaMinOrderByAggregateInput
  }

  export type MidiaScalarWhereWithAggregatesInput = {
    AND?: MidiaScalarWhereWithAggregatesInput | MidiaScalarWhereWithAggregatesInput[]
    OR?: MidiaScalarWhereWithAggregatesInput[]
    NOT?: MidiaScalarWhereWithAggregatesInput | MidiaScalarWhereWithAggregatesInput[]
    id_midia?: StringWithAggregatesFilter<"Midia"> | string
    id_reserva?: StringNullableWithAggregatesFilter<"Midia"> | string | null
    tipo?: StringNullableWithAggregatesFilter<"Midia"> | string | null
    caminho_arquivo?: StringNullableWithAggregatesFilter<"Midia"> | string | null
    data_envio?: DateTimeNullableWithAggregatesFilter<"Midia"> | Date | string | null
  }

  export type NotificacaoWhereInput = {
    AND?: NotificacaoWhereInput | NotificacaoWhereInput[]
    OR?: NotificacaoWhereInput[]
    NOT?: NotificacaoWhereInput | NotificacaoWhereInput[]
    id_notificacao?: StringFilter<"Notificacao"> | string
    id_tutor?: StringNullableFilter<"Notificacao"> | string | null
    id_prestador?: StringNullableFilter<"Notificacao"> | string | null
    mensagem?: StringNullableFilter<"Notificacao"> | string | null
    data_envio?: DateTimeNullableFilter<"Notificacao"> | Date | string | null
    lida?: BoolNullableFilter<"Notificacao"> | boolean | null
    tutor?: XOR<TutorNullableScalarRelationFilter, TutorWhereInput> | null
    prestador?: XOR<PrestadorNullableScalarRelationFilter, PrestadorWhereInput> | null
  }

  export type NotificacaoOrderByWithRelationInput = {
    id_notificacao?: SortOrder
    id_tutor?: SortOrderInput | SortOrder
    id_prestador?: SortOrderInput | SortOrder
    mensagem?: SortOrderInput | SortOrder
    data_envio?: SortOrderInput | SortOrder
    lida?: SortOrderInput | SortOrder
    tutor?: TutorOrderByWithRelationInput
    prestador?: PrestadorOrderByWithRelationInput
  }

  export type NotificacaoWhereUniqueInput = Prisma.AtLeast<{
    id_notificacao?: string
    AND?: NotificacaoWhereInput | NotificacaoWhereInput[]
    OR?: NotificacaoWhereInput[]
    NOT?: NotificacaoWhereInput | NotificacaoWhereInput[]
    id_tutor?: StringNullableFilter<"Notificacao"> | string | null
    id_prestador?: StringNullableFilter<"Notificacao"> | string | null
    mensagem?: StringNullableFilter<"Notificacao"> | string | null
    data_envio?: DateTimeNullableFilter<"Notificacao"> | Date | string | null
    lida?: BoolNullableFilter<"Notificacao"> | boolean | null
    tutor?: XOR<TutorNullableScalarRelationFilter, TutorWhereInput> | null
    prestador?: XOR<PrestadorNullableScalarRelationFilter, PrestadorWhereInput> | null
  }, "id_notificacao">

  export type NotificacaoOrderByWithAggregationInput = {
    id_notificacao?: SortOrder
    id_tutor?: SortOrderInput | SortOrder
    id_prestador?: SortOrderInput | SortOrder
    mensagem?: SortOrderInput | SortOrder
    data_envio?: SortOrderInput | SortOrder
    lida?: SortOrderInput | SortOrder
    _count?: NotificacaoCountOrderByAggregateInput
    _max?: NotificacaoMaxOrderByAggregateInput
    _min?: NotificacaoMinOrderByAggregateInput
  }

  export type NotificacaoScalarWhereWithAggregatesInput = {
    AND?: NotificacaoScalarWhereWithAggregatesInput | NotificacaoScalarWhereWithAggregatesInput[]
    OR?: NotificacaoScalarWhereWithAggregatesInput[]
    NOT?: NotificacaoScalarWhereWithAggregatesInput | NotificacaoScalarWhereWithAggregatesInput[]
    id_notificacao?: StringWithAggregatesFilter<"Notificacao"> | string
    id_tutor?: StringNullableWithAggregatesFilter<"Notificacao"> | string | null
    id_prestador?: StringNullableWithAggregatesFilter<"Notificacao"> | string | null
    mensagem?: StringNullableWithAggregatesFilter<"Notificacao"> | string | null
    data_envio?: DateTimeNullableWithAggregatesFilter<"Notificacao"> | Date | string | null
    lida?: BoolNullableWithAggregatesFilter<"Notificacao"> | boolean | null
  }

  export type TutorCreateInput = {
    id_tutor: string
    nome?: string | null
    email?: string | null
    telefone?: string | null
    endereco?: string | null
    senha?: string | null
    pets?: PetCreateNestedManyWithoutTutorInput
    reservas?: ReservaCreateNestedManyWithoutTutorInput
    notificacoes?: NotificacaoCreateNestedManyWithoutTutorInput
  }

  export type TutorUncheckedCreateInput = {
    id_tutor: string
    nome?: string | null
    email?: string | null
    telefone?: string | null
    endereco?: string | null
    senha?: string | null
    pets?: PetUncheckedCreateNestedManyWithoutTutorInput
    reservas?: ReservaUncheckedCreateNestedManyWithoutTutorInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutTutorInput
  }

  export type TutorUpdateInput = {
    id_tutor?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    pets?: PetUpdateManyWithoutTutorNestedInput
    reservas?: ReservaUpdateManyWithoutTutorNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutTutorNestedInput
  }

  export type TutorUncheckedUpdateInput = {
    id_tutor?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    pets?: PetUncheckedUpdateManyWithoutTutorNestedInput
    reservas?: ReservaUncheckedUpdateManyWithoutTutorNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutTutorNestedInput
  }

  export type TutorCreateManyInput = {
    id_tutor: string
    nome?: string | null
    email?: string | null
    telefone?: string | null
    endereco?: string | null
    senha?: string | null
  }

  export type TutorUpdateManyMutationInput = {
    id_tutor?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TutorUncheckedUpdateManyInput = {
    id_tutor?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrestadorCreateInput = {
    id_prestador: string
    nome?: string | null
    email?: string | null
    telefone?: string | null
    endereco?: string | null
    senha?: string | null
    servicos?: string | null
    servicos_list?: ServicoCreateNestedManyWithoutPrestadorInput
    agendamentos?: AgendamentoCreateNestedManyWithoutPrestadorInput
    notificacoes?: NotificacaoCreateNestedManyWithoutPrestadorInput
  }

  export type PrestadorUncheckedCreateInput = {
    id_prestador: string
    nome?: string | null
    email?: string | null
    telefone?: string | null
    endereco?: string | null
    senha?: string | null
    servicos?: string | null
    servicos_list?: ServicoUncheckedCreateNestedManyWithoutPrestadorInput
    agendamentos?: AgendamentoUncheckedCreateNestedManyWithoutPrestadorInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutPrestadorInput
  }

  export type PrestadorUpdateInput = {
    id_prestador?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    servicos?: NullableStringFieldUpdateOperationsInput | string | null
    servicos_list?: ServicoUpdateManyWithoutPrestadorNestedInput
    agendamentos?: AgendamentoUpdateManyWithoutPrestadorNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutPrestadorNestedInput
  }

  export type PrestadorUncheckedUpdateInput = {
    id_prestador?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    servicos?: NullableStringFieldUpdateOperationsInput | string | null
    servicos_list?: ServicoUncheckedUpdateManyWithoutPrestadorNestedInput
    agendamentos?: AgendamentoUncheckedUpdateManyWithoutPrestadorNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutPrestadorNestedInput
  }

  export type PrestadorCreateManyInput = {
    id_prestador: string
    nome?: string | null
    email?: string | null
    telefone?: string | null
    endereco?: string | null
    senha?: string | null
    servicos?: string | null
  }

  export type PrestadorUpdateManyMutationInput = {
    id_prestador?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    servicos?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrestadorUncheckedUpdateManyInput = {
    id_prestador?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    servicos?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PetCreateInput = {
    id_pet: string
    nome?: string | null
    especie?: string | null
    raca?: string | null
    idade?: number | null
    restricoes?: string | null
    tutor?: TutorCreateNestedOneWithoutPetsInput
    reservas?: ReservaCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateInput = {
    id_pet: string
    id_tutor?: string | null
    nome?: string | null
    especie?: string | null
    raca?: string | null
    idade?: number | null
    restricoes?: string | null
    reservas?: ReservaUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetUpdateInput = {
    id_pet?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    especie?: NullableStringFieldUpdateOperationsInput | string | null
    raca?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    restricoes?: NullableStringFieldUpdateOperationsInput | string | null
    tutor?: TutorUpdateOneWithoutPetsNestedInput
    reservas?: ReservaUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateInput = {
    id_pet?: StringFieldUpdateOperationsInput | string
    id_tutor?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    especie?: NullableStringFieldUpdateOperationsInput | string | null
    raca?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    restricoes?: NullableStringFieldUpdateOperationsInput | string | null
    reservas?: ReservaUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetCreateManyInput = {
    id_pet: string
    id_tutor?: string | null
    nome?: string | null
    especie?: string | null
    raca?: string | null
    idade?: number | null
    restricoes?: string | null
  }

  export type PetUpdateManyMutationInput = {
    id_pet?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    especie?: NullableStringFieldUpdateOperationsInput | string | null
    raca?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    restricoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PetUncheckedUpdateManyInput = {
    id_pet?: StringFieldUpdateOperationsInput | string
    id_tutor?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    especie?: NullableStringFieldUpdateOperationsInput | string | null
    raca?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    restricoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServicoCreateInput = {
    id_servico: string
    descricao?: string | null
    titulo?: string | null
    preco?: number | null
    tipo?: string | null
    prestador?: PrestadorCreateNestedOneWithoutServicos_listInput
    reservas?: ReservaCreateNestedManyWithoutServicoInput
  }

  export type ServicoUncheckedCreateInput = {
    id_servico: string
    id_prestador?: string | null
    descricao?: string | null
    titulo?: string | null
    preco?: number | null
    tipo?: string | null
    reservas?: ReservaUncheckedCreateNestedManyWithoutServicoInput
  }

  export type ServicoUpdateInput = {
    id_servico?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    prestador?: PrestadorUpdateOneWithoutServicos_listNestedInput
    reservas?: ReservaUpdateManyWithoutServicoNestedInput
  }

  export type ServicoUncheckedUpdateInput = {
    id_servico?: StringFieldUpdateOperationsInput | string
    id_prestador?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    reservas?: ReservaUncheckedUpdateManyWithoutServicoNestedInput
  }

  export type ServicoCreateManyInput = {
    id_servico: string
    id_prestador?: string | null
    descricao?: string | null
    titulo?: string | null
    preco?: number | null
    tipo?: string | null
  }

  export type ServicoUpdateManyMutationInput = {
    id_servico?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServicoUncheckedUpdateManyInput = {
    id_servico?: StringFieldUpdateOperationsInput | string
    id_prestador?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgendamentoCreateInput = {
    id_agendamento: string
    data_inicio?: Date | string | null
    data_fim?: Date | string | null
    disponivel?: boolean | null
    prestador?: PrestadorCreateNestedOneWithoutAgendamentosInput
    reservas?: ReservaCreateNestedManyWithoutAgendamentoInput
  }

  export type AgendamentoUncheckedCreateInput = {
    id_agendamento: string
    id_prestador?: string | null
    data_inicio?: Date | string | null
    data_fim?: Date | string | null
    disponivel?: boolean | null
    reservas?: ReservaUncheckedCreateNestedManyWithoutAgendamentoInput
  }

  export type AgendamentoUpdateInput = {
    id_agendamento?: StringFieldUpdateOperationsInput | string
    data_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disponivel?: NullableBoolFieldUpdateOperationsInput | boolean | null
    prestador?: PrestadorUpdateOneWithoutAgendamentosNestedInput
    reservas?: ReservaUpdateManyWithoutAgendamentoNestedInput
  }

  export type AgendamentoUncheckedUpdateInput = {
    id_agendamento?: StringFieldUpdateOperationsInput | string
    id_prestador?: NullableStringFieldUpdateOperationsInput | string | null
    data_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disponivel?: NullableBoolFieldUpdateOperationsInput | boolean | null
    reservas?: ReservaUncheckedUpdateManyWithoutAgendamentoNestedInput
  }

  export type AgendamentoCreateManyInput = {
    id_agendamento: string
    id_prestador?: string | null
    data_inicio?: Date | string | null
    data_fim?: Date | string | null
    disponivel?: boolean | null
  }

  export type AgendamentoUpdateManyMutationInput = {
    id_agendamento?: StringFieldUpdateOperationsInput | string
    data_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disponivel?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type AgendamentoUncheckedUpdateManyInput = {
    id_agendamento?: StringFieldUpdateOperationsInput | string
    id_prestador?: NullableStringFieldUpdateOperationsInput | string | null
    data_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disponivel?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ReservaCreateInput = {
    id_reserva: string
    status?: string | null
    data_reserva?: Date | string | null
    valor?: number | null
    tutor?: TutorCreateNestedOneWithoutReservasInput
    pet?: PetCreateNestedOneWithoutReservasInput
    servico?: ServicoCreateNestedOneWithoutReservasInput
    agendamento?: AgendamentoCreateNestedOneWithoutReservasInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutReservaInput
    pagamentos?: PagamentoCreateNestedManyWithoutReservaInput
    midias?: MidiaCreateNestedManyWithoutReservaInput
  }

  export type ReservaUncheckedCreateInput = {
    id_reserva: string
    id_tutor?: string | null
    id_pet?: string | null
    id_servico?: string | null
    id_agendamento?: string | null
    status?: string | null
    data_reserva?: Date | string | null
    valor?: number | null
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutReservaInput
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutReservaInput
    midias?: MidiaUncheckedCreateNestedManyWithoutReservaInput
  }

  export type ReservaUpdateInput = {
    id_reserva?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    tutor?: TutorUpdateOneWithoutReservasNestedInput
    pet?: PetUpdateOneWithoutReservasNestedInput
    servico?: ServicoUpdateOneWithoutReservasNestedInput
    agendamento?: AgendamentoUpdateOneWithoutReservasNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutReservaNestedInput
    pagamentos?: PagamentoUpdateManyWithoutReservaNestedInput
    midias?: MidiaUpdateManyWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateInput = {
    id_reserva?: StringFieldUpdateOperationsInput | string
    id_tutor?: NullableStringFieldUpdateOperationsInput | string | null
    id_pet?: NullableStringFieldUpdateOperationsInput | string | null
    id_servico?: NullableStringFieldUpdateOperationsInput | string | null
    id_agendamento?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutReservaNestedInput
    pagamentos?: PagamentoUncheckedUpdateManyWithoutReservaNestedInput
    midias?: MidiaUncheckedUpdateManyWithoutReservaNestedInput
  }

  export type ReservaCreateManyInput = {
    id_reserva: string
    id_tutor?: string | null
    id_pet?: string | null
    id_servico?: string | null
    id_agendamento?: string | null
    status?: string | null
    data_reserva?: Date | string | null
    valor?: number | null
  }

  export type ReservaUpdateManyMutationInput = {
    id_reserva?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ReservaUncheckedUpdateManyInput = {
    id_reserva?: StringFieldUpdateOperationsInput | string
    id_tutor?: NullableStringFieldUpdateOperationsInput | string | null
    id_pet?: NullableStringFieldUpdateOperationsInput | string | null
    id_servico?: NullableStringFieldUpdateOperationsInput | string | null
    id_agendamento?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AvaliacaoCreateInput = {
    id_avaliacao: string
    nota?: number | null
    comentario?: string | null
    data_avaliacao?: Date | string | null
    reserva?: ReservaCreateNestedOneWithoutAvaliacoesInput
  }

  export type AvaliacaoUncheckedCreateInput = {
    id_avaliacao: string
    id_reserva?: string | null
    nota?: number | null
    comentario?: string | null
    data_avaliacao?: Date | string | null
  }

  export type AvaliacaoUpdateInput = {
    id_avaliacao?: StringFieldUpdateOperationsInput | string
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    data_avaliacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reserva?: ReservaUpdateOneWithoutAvaliacoesNestedInput
  }

  export type AvaliacaoUncheckedUpdateInput = {
    id_avaliacao?: StringFieldUpdateOperationsInput | string
    id_reserva?: NullableStringFieldUpdateOperationsInput | string | null
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    data_avaliacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AvaliacaoCreateManyInput = {
    id_avaliacao: string
    id_reserva?: string | null
    nota?: number | null
    comentario?: string | null
    data_avaliacao?: Date | string | null
  }

  export type AvaliacaoUpdateManyMutationInput = {
    id_avaliacao?: StringFieldUpdateOperationsInput | string
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    data_avaliacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AvaliacaoUncheckedUpdateManyInput = {
    id_avaliacao?: StringFieldUpdateOperationsInput | string
    id_reserva?: NullableStringFieldUpdateOperationsInput | string | null
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    data_avaliacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PagamentoCreateInput = {
    id_pagamento: string
    valor?: number | null
    forma_pagamento?: string | null
    gorjeta?: number | null
    status?: string | null
    data_pagamento?: Date | string | null
    reserva?: ReservaCreateNestedOneWithoutPagamentosInput
  }

  export type PagamentoUncheckedCreateInput = {
    id_pagamento: string
    id_reserva?: string | null
    valor?: number | null
    forma_pagamento?: string | null
    gorjeta?: number | null
    status?: string | null
    data_pagamento?: Date | string | null
  }

  export type PagamentoUpdateInput = {
    id_pagamento?: StringFieldUpdateOperationsInput | string
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    gorjeta?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reserva?: ReservaUpdateOneWithoutPagamentosNestedInput
  }

  export type PagamentoUncheckedUpdateInput = {
    id_pagamento?: StringFieldUpdateOperationsInput | string
    id_reserva?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    gorjeta?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PagamentoCreateManyInput = {
    id_pagamento: string
    id_reserva?: string | null
    valor?: number | null
    forma_pagamento?: string | null
    gorjeta?: number | null
    status?: string | null
    data_pagamento?: Date | string | null
  }

  export type PagamentoUpdateManyMutationInput = {
    id_pagamento?: StringFieldUpdateOperationsInput | string
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    gorjeta?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PagamentoUncheckedUpdateManyInput = {
    id_pagamento?: StringFieldUpdateOperationsInput | string
    id_reserva?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    gorjeta?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MidiaCreateInput = {
    id_midia: string
    tipo?: string | null
    caminho_arquivo?: string | null
    data_envio?: Date | string | null
    reserva?: ReservaCreateNestedOneWithoutMidiasInput
  }

  export type MidiaUncheckedCreateInput = {
    id_midia: string
    id_reserva?: string | null
    tipo?: string | null
    caminho_arquivo?: string | null
    data_envio?: Date | string | null
  }

  export type MidiaUpdateInput = {
    id_midia?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    caminho_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    data_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reserva?: ReservaUpdateOneWithoutMidiasNestedInput
  }

  export type MidiaUncheckedUpdateInput = {
    id_midia?: StringFieldUpdateOperationsInput | string
    id_reserva?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    caminho_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    data_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MidiaCreateManyInput = {
    id_midia: string
    id_reserva?: string | null
    tipo?: string | null
    caminho_arquivo?: string | null
    data_envio?: Date | string | null
  }

  export type MidiaUpdateManyMutationInput = {
    id_midia?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    caminho_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    data_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MidiaUncheckedUpdateManyInput = {
    id_midia?: StringFieldUpdateOperationsInput | string
    id_reserva?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    caminho_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    data_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificacaoCreateInput = {
    id_notificacao: string
    mensagem?: string | null
    data_envio?: Date | string | null
    lida?: boolean | null
    tutor?: TutorCreateNestedOneWithoutNotificacoesInput
    prestador?: PrestadorCreateNestedOneWithoutNotificacoesInput
  }

  export type NotificacaoUncheckedCreateInput = {
    id_notificacao: string
    id_tutor?: string | null
    id_prestador?: string | null
    mensagem?: string | null
    data_envio?: Date | string | null
    lida?: boolean | null
  }

  export type NotificacaoUpdateInput = {
    id_notificacao?: StringFieldUpdateOperationsInput | string
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    data_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tutor?: TutorUpdateOneWithoutNotificacoesNestedInput
    prestador?: PrestadorUpdateOneWithoutNotificacoesNestedInput
  }

  export type NotificacaoUncheckedUpdateInput = {
    id_notificacao?: StringFieldUpdateOperationsInput | string
    id_tutor?: NullableStringFieldUpdateOperationsInput | string | null
    id_prestador?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    data_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type NotificacaoCreateManyInput = {
    id_notificacao: string
    id_tutor?: string | null
    id_prestador?: string | null
    mensagem?: string | null
    data_envio?: Date | string | null
    lida?: boolean | null
  }

  export type NotificacaoUpdateManyMutationInput = {
    id_notificacao?: StringFieldUpdateOperationsInput | string
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    data_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type NotificacaoUncheckedUpdateManyInput = {
    id_notificacao?: StringFieldUpdateOperationsInput | string
    id_tutor?: NullableStringFieldUpdateOperationsInput | string | null
    id_prestador?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    data_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
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

  export type PetListRelationFilter = {
    every?: PetWhereInput
    some?: PetWhereInput
    none?: PetWhereInput
  }

  export type ReservaListRelationFilter = {
    every?: ReservaWhereInput
    some?: ReservaWhereInput
    none?: ReservaWhereInput
  }

  export type NotificacaoListRelationFilter = {
    every?: NotificacaoWhereInput
    some?: NotificacaoWhereInput
    none?: NotificacaoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TutorCountOrderByAggregateInput = {
    id_tutor?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    senha?: SortOrder
  }

  export type TutorMaxOrderByAggregateInput = {
    id_tutor?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    senha?: SortOrder
  }

  export type TutorMinOrderByAggregateInput = {
    id_tutor?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    senha?: SortOrder
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

  export type ServicoListRelationFilter = {
    every?: ServicoWhereInput
    some?: ServicoWhereInput
    none?: ServicoWhereInput
  }

  export type AgendamentoListRelationFilter = {
    every?: AgendamentoWhereInput
    some?: AgendamentoWhereInput
    none?: AgendamentoWhereInput
  }

  export type ServicoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgendamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrestadorCountOrderByAggregateInput = {
    id_prestador?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    senha?: SortOrder
    servicos?: SortOrder
  }

  export type PrestadorMaxOrderByAggregateInput = {
    id_prestador?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    senha?: SortOrder
    servicos?: SortOrder
  }

  export type PrestadorMinOrderByAggregateInput = {
    id_prestador?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    senha?: SortOrder
    servicos?: SortOrder
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

  export type TutorNullableScalarRelationFilter = {
    is?: TutorWhereInput | null
    isNot?: TutorWhereInput | null
  }

  export type PetCountOrderByAggregateInput = {
    id_pet?: SortOrder
    id_tutor?: SortOrder
    nome?: SortOrder
    especie?: SortOrder
    raca?: SortOrder
    idade?: SortOrder
    restricoes?: SortOrder
  }

  export type PetAvgOrderByAggregateInput = {
    idade?: SortOrder
  }

  export type PetMaxOrderByAggregateInput = {
    id_pet?: SortOrder
    id_tutor?: SortOrder
    nome?: SortOrder
    especie?: SortOrder
    raca?: SortOrder
    idade?: SortOrder
    restricoes?: SortOrder
  }

  export type PetMinOrderByAggregateInput = {
    id_pet?: SortOrder
    id_tutor?: SortOrder
    nome?: SortOrder
    especie?: SortOrder
    raca?: SortOrder
    idade?: SortOrder
    restricoes?: SortOrder
  }

  export type PetSumOrderByAggregateInput = {
    idade?: SortOrder
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PrestadorNullableScalarRelationFilter = {
    is?: PrestadorWhereInput | null
    isNot?: PrestadorWhereInput | null
  }

  export type ServicoCountOrderByAggregateInput = {
    id_servico?: SortOrder
    id_prestador?: SortOrder
    descricao?: SortOrder
    titulo?: SortOrder
    preco?: SortOrder
    tipo?: SortOrder
  }

  export type ServicoAvgOrderByAggregateInput = {
    preco?: SortOrder
  }

  export type ServicoMaxOrderByAggregateInput = {
    id_servico?: SortOrder
    id_prestador?: SortOrder
    descricao?: SortOrder
    titulo?: SortOrder
    preco?: SortOrder
    tipo?: SortOrder
  }

  export type ServicoMinOrderByAggregateInput = {
    id_servico?: SortOrder
    id_prestador?: SortOrder
    descricao?: SortOrder
    titulo?: SortOrder
    preco?: SortOrder
    tipo?: SortOrder
  }

  export type ServicoSumOrderByAggregateInput = {
    preco?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type AgendamentoCountOrderByAggregateInput = {
    id_agendamento?: SortOrder
    id_prestador?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    disponivel?: SortOrder
  }

  export type AgendamentoMaxOrderByAggregateInput = {
    id_agendamento?: SortOrder
    id_prestador?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    disponivel?: SortOrder
  }

  export type AgendamentoMinOrderByAggregateInput = {
    id_agendamento?: SortOrder
    id_prestador?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    disponivel?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type PetNullableScalarRelationFilter = {
    is?: PetWhereInput | null
    isNot?: PetWhereInput | null
  }

  export type ServicoNullableScalarRelationFilter = {
    is?: ServicoWhereInput | null
    isNot?: ServicoWhereInput | null
  }

  export type AgendamentoNullableScalarRelationFilter = {
    is?: AgendamentoWhereInput | null
    isNot?: AgendamentoWhereInput | null
  }

  export type AvaliacaoListRelationFilter = {
    every?: AvaliacaoWhereInput
    some?: AvaliacaoWhereInput
    none?: AvaliacaoWhereInput
  }

  export type PagamentoListRelationFilter = {
    every?: PagamentoWhereInput
    some?: PagamentoWhereInput
    none?: PagamentoWhereInput
  }

  export type MidiaListRelationFilter = {
    every?: MidiaWhereInput
    some?: MidiaWhereInput
    none?: MidiaWhereInput
  }

  export type AvaliacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PagamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MidiaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservaCountOrderByAggregateInput = {
    id_reserva?: SortOrder
    id_tutor?: SortOrder
    id_pet?: SortOrder
    id_servico?: SortOrder
    id_agendamento?: SortOrder
    status?: SortOrder
    data_reserva?: SortOrder
    valor?: SortOrder
  }

  export type ReservaAvgOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type ReservaMaxOrderByAggregateInput = {
    id_reserva?: SortOrder
    id_tutor?: SortOrder
    id_pet?: SortOrder
    id_servico?: SortOrder
    id_agendamento?: SortOrder
    status?: SortOrder
    data_reserva?: SortOrder
    valor?: SortOrder
  }

  export type ReservaMinOrderByAggregateInput = {
    id_reserva?: SortOrder
    id_tutor?: SortOrder
    id_pet?: SortOrder
    id_servico?: SortOrder
    id_agendamento?: SortOrder
    status?: SortOrder
    data_reserva?: SortOrder
    valor?: SortOrder
  }

  export type ReservaSumOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type ReservaNullableScalarRelationFilter = {
    is?: ReservaWhereInput | null
    isNot?: ReservaWhereInput | null
  }

  export type AvaliacaoCountOrderByAggregateInput = {
    id_avaliacao?: SortOrder
    id_reserva?: SortOrder
    nota?: SortOrder
    comentario?: SortOrder
    data_avaliacao?: SortOrder
  }

  export type AvaliacaoAvgOrderByAggregateInput = {
    nota?: SortOrder
  }

  export type AvaliacaoMaxOrderByAggregateInput = {
    id_avaliacao?: SortOrder
    id_reserva?: SortOrder
    nota?: SortOrder
    comentario?: SortOrder
    data_avaliacao?: SortOrder
  }

  export type AvaliacaoMinOrderByAggregateInput = {
    id_avaliacao?: SortOrder
    id_reserva?: SortOrder
    nota?: SortOrder
    comentario?: SortOrder
    data_avaliacao?: SortOrder
  }

  export type AvaliacaoSumOrderByAggregateInput = {
    nota?: SortOrder
  }

  export type PagamentoCountOrderByAggregateInput = {
    id_pagamento?: SortOrder
    id_reserva?: SortOrder
    valor?: SortOrder
    forma_pagamento?: SortOrder
    gorjeta?: SortOrder
    status?: SortOrder
    data_pagamento?: SortOrder
  }

  export type PagamentoAvgOrderByAggregateInput = {
    valor?: SortOrder
    gorjeta?: SortOrder
  }

  export type PagamentoMaxOrderByAggregateInput = {
    id_pagamento?: SortOrder
    id_reserva?: SortOrder
    valor?: SortOrder
    forma_pagamento?: SortOrder
    gorjeta?: SortOrder
    status?: SortOrder
    data_pagamento?: SortOrder
  }

  export type PagamentoMinOrderByAggregateInput = {
    id_pagamento?: SortOrder
    id_reserva?: SortOrder
    valor?: SortOrder
    forma_pagamento?: SortOrder
    gorjeta?: SortOrder
    status?: SortOrder
    data_pagamento?: SortOrder
  }

  export type PagamentoSumOrderByAggregateInput = {
    valor?: SortOrder
    gorjeta?: SortOrder
  }

  export type MidiaCountOrderByAggregateInput = {
    id_midia?: SortOrder
    id_reserva?: SortOrder
    tipo?: SortOrder
    caminho_arquivo?: SortOrder
    data_envio?: SortOrder
  }

  export type MidiaMaxOrderByAggregateInput = {
    id_midia?: SortOrder
    id_reserva?: SortOrder
    tipo?: SortOrder
    caminho_arquivo?: SortOrder
    data_envio?: SortOrder
  }

  export type MidiaMinOrderByAggregateInput = {
    id_midia?: SortOrder
    id_reserva?: SortOrder
    tipo?: SortOrder
    caminho_arquivo?: SortOrder
    data_envio?: SortOrder
  }

  export type NotificacaoCountOrderByAggregateInput = {
    id_notificacao?: SortOrder
    id_tutor?: SortOrder
    id_prestador?: SortOrder
    mensagem?: SortOrder
    data_envio?: SortOrder
    lida?: SortOrder
  }

  export type NotificacaoMaxOrderByAggregateInput = {
    id_notificacao?: SortOrder
    id_tutor?: SortOrder
    id_prestador?: SortOrder
    mensagem?: SortOrder
    data_envio?: SortOrder
    lida?: SortOrder
  }

  export type NotificacaoMinOrderByAggregateInput = {
    id_notificacao?: SortOrder
    id_tutor?: SortOrder
    id_prestador?: SortOrder
    mensagem?: SortOrder
    data_envio?: SortOrder
    lida?: SortOrder
  }

  export type PetCreateNestedManyWithoutTutorInput = {
    create?: XOR<PetCreateWithoutTutorInput, PetUncheckedCreateWithoutTutorInput> | PetCreateWithoutTutorInput[] | PetUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: PetCreateOrConnectWithoutTutorInput | PetCreateOrConnectWithoutTutorInput[]
    createMany?: PetCreateManyTutorInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type ReservaCreateNestedManyWithoutTutorInput = {
    create?: XOR<ReservaCreateWithoutTutorInput, ReservaUncheckedCreateWithoutTutorInput> | ReservaCreateWithoutTutorInput[] | ReservaUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutTutorInput | ReservaCreateOrConnectWithoutTutorInput[]
    createMany?: ReservaCreateManyTutorInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type NotificacaoCreateNestedManyWithoutTutorInput = {
    create?: XOR<NotificacaoCreateWithoutTutorInput, NotificacaoUncheckedCreateWithoutTutorInput> | NotificacaoCreateWithoutTutorInput[] | NotificacaoUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutTutorInput | NotificacaoCreateOrConnectWithoutTutorInput[]
    createMany?: NotificacaoCreateManyTutorInputEnvelope
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
  }

  export type PetUncheckedCreateNestedManyWithoutTutorInput = {
    create?: XOR<PetCreateWithoutTutorInput, PetUncheckedCreateWithoutTutorInput> | PetCreateWithoutTutorInput[] | PetUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: PetCreateOrConnectWithoutTutorInput | PetCreateOrConnectWithoutTutorInput[]
    createMany?: PetCreateManyTutorInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type ReservaUncheckedCreateNestedManyWithoutTutorInput = {
    create?: XOR<ReservaCreateWithoutTutorInput, ReservaUncheckedCreateWithoutTutorInput> | ReservaCreateWithoutTutorInput[] | ReservaUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutTutorInput | ReservaCreateOrConnectWithoutTutorInput[]
    createMany?: ReservaCreateManyTutorInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type NotificacaoUncheckedCreateNestedManyWithoutTutorInput = {
    create?: XOR<NotificacaoCreateWithoutTutorInput, NotificacaoUncheckedCreateWithoutTutorInput> | NotificacaoCreateWithoutTutorInput[] | NotificacaoUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutTutorInput | NotificacaoCreateOrConnectWithoutTutorInput[]
    createMany?: NotificacaoCreateManyTutorInputEnvelope
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PetUpdateManyWithoutTutorNestedInput = {
    create?: XOR<PetCreateWithoutTutorInput, PetUncheckedCreateWithoutTutorInput> | PetCreateWithoutTutorInput[] | PetUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: PetCreateOrConnectWithoutTutorInput | PetCreateOrConnectWithoutTutorInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutTutorInput | PetUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: PetCreateManyTutorInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutTutorInput | PetUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: PetUpdateManyWithWhereWithoutTutorInput | PetUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type ReservaUpdateManyWithoutTutorNestedInput = {
    create?: XOR<ReservaCreateWithoutTutorInput, ReservaUncheckedCreateWithoutTutorInput> | ReservaCreateWithoutTutorInput[] | ReservaUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutTutorInput | ReservaCreateOrConnectWithoutTutorInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutTutorInput | ReservaUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: ReservaCreateManyTutorInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutTutorInput | ReservaUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutTutorInput | ReservaUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type NotificacaoUpdateManyWithoutTutorNestedInput = {
    create?: XOR<NotificacaoCreateWithoutTutorInput, NotificacaoUncheckedCreateWithoutTutorInput> | NotificacaoCreateWithoutTutorInput[] | NotificacaoUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutTutorInput | NotificacaoCreateOrConnectWithoutTutorInput[]
    upsert?: NotificacaoUpsertWithWhereUniqueWithoutTutorInput | NotificacaoUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: NotificacaoCreateManyTutorInputEnvelope
    set?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    disconnect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    delete?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    update?: NotificacaoUpdateWithWhereUniqueWithoutTutorInput | NotificacaoUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: NotificacaoUpdateManyWithWhereWithoutTutorInput | NotificacaoUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
  }

  export type PetUncheckedUpdateManyWithoutTutorNestedInput = {
    create?: XOR<PetCreateWithoutTutorInput, PetUncheckedCreateWithoutTutorInput> | PetCreateWithoutTutorInput[] | PetUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: PetCreateOrConnectWithoutTutorInput | PetCreateOrConnectWithoutTutorInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutTutorInput | PetUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: PetCreateManyTutorInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutTutorInput | PetUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: PetUpdateManyWithWhereWithoutTutorInput | PetUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type ReservaUncheckedUpdateManyWithoutTutorNestedInput = {
    create?: XOR<ReservaCreateWithoutTutorInput, ReservaUncheckedCreateWithoutTutorInput> | ReservaCreateWithoutTutorInput[] | ReservaUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutTutorInput | ReservaCreateOrConnectWithoutTutorInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutTutorInput | ReservaUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: ReservaCreateManyTutorInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutTutorInput | ReservaUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutTutorInput | ReservaUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type NotificacaoUncheckedUpdateManyWithoutTutorNestedInput = {
    create?: XOR<NotificacaoCreateWithoutTutorInput, NotificacaoUncheckedCreateWithoutTutorInput> | NotificacaoCreateWithoutTutorInput[] | NotificacaoUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutTutorInput | NotificacaoCreateOrConnectWithoutTutorInput[]
    upsert?: NotificacaoUpsertWithWhereUniqueWithoutTutorInput | NotificacaoUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: NotificacaoCreateManyTutorInputEnvelope
    set?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    disconnect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    delete?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    update?: NotificacaoUpdateWithWhereUniqueWithoutTutorInput | NotificacaoUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: NotificacaoUpdateManyWithWhereWithoutTutorInput | NotificacaoUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
  }

  export type ServicoCreateNestedManyWithoutPrestadorInput = {
    create?: XOR<ServicoCreateWithoutPrestadorInput, ServicoUncheckedCreateWithoutPrestadorInput> | ServicoCreateWithoutPrestadorInput[] | ServicoUncheckedCreateWithoutPrestadorInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutPrestadorInput | ServicoCreateOrConnectWithoutPrestadorInput[]
    createMany?: ServicoCreateManyPrestadorInputEnvelope
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
  }

  export type AgendamentoCreateNestedManyWithoutPrestadorInput = {
    create?: XOR<AgendamentoCreateWithoutPrestadorInput, AgendamentoUncheckedCreateWithoutPrestadorInput> | AgendamentoCreateWithoutPrestadorInput[] | AgendamentoUncheckedCreateWithoutPrestadorInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutPrestadorInput | AgendamentoCreateOrConnectWithoutPrestadorInput[]
    createMany?: AgendamentoCreateManyPrestadorInputEnvelope
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
  }

  export type NotificacaoCreateNestedManyWithoutPrestadorInput = {
    create?: XOR<NotificacaoCreateWithoutPrestadorInput, NotificacaoUncheckedCreateWithoutPrestadorInput> | NotificacaoCreateWithoutPrestadorInput[] | NotificacaoUncheckedCreateWithoutPrestadorInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutPrestadorInput | NotificacaoCreateOrConnectWithoutPrestadorInput[]
    createMany?: NotificacaoCreateManyPrestadorInputEnvelope
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
  }

  export type ServicoUncheckedCreateNestedManyWithoutPrestadorInput = {
    create?: XOR<ServicoCreateWithoutPrestadorInput, ServicoUncheckedCreateWithoutPrestadorInput> | ServicoCreateWithoutPrestadorInput[] | ServicoUncheckedCreateWithoutPrestadorInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutPrestadorInput | ServicoCreateOrConnectWithoutPrestadorInput[]
    createMany?: ServicoCreateManyPrestadorInputEnvelope
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
  }

  export type AgendamentoUncheckedCreateNestedManyWithoutPrestadorInput = {
    create?: XOR<AgendamentoCreateWithoutPrestadorInput, AgendamentoUncheckedCreateWithoutPrestadorInput> | AgendamentoCreateWithoutPrestadorInput[] | AgendamentoUncheckedCreateWithoutPrestadorInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutPrestadorInput | AgendamentoCreateOrConnectWithoutPrestadorInput[]
    createMany?: AgendamentoCreateManyPrestadorInputEnvelope
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
  }

  export type NotificacaoUncheckedCreateNestedManyWithoutPrestadorInput = {
    create?: XOR<NotificacaoCreateWithoutPrestadorInput, NotificacaoUncheckedCreateWithoutPrestadorInput> | NotificacaoCreateWithoutPrestadorInput[] | NotificacaoUncheckedCreateWithoutPrestadorInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutPrestadorInput | NotificacaoCreateOrConnectWithoutPrestadorInput[]
    createMany?: NotificacaoCreateManyPrestadorInputEnvelope
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
  }

  export type ServicoUpdateManyWithoutPrestadorNestedInput = {
    create?: XOR<ServicoCreateWithoutPrestadorInput, ServicoUncheckedCreateWithoutPrestadorInput> | ServicoCreateWithoutPrestadorInput[] | ServicoUncheckedCreateWithoutPrestadorInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutPrestadorInput | ServicoCreateOrConnectWithoutPrestadorInput[]
    upsert?: ServicoUpsertWithWhereUniqueWithoutPrestadorInput | ServicoUpsertWithWhereUniqueWithoutPrestadorInput[]
    createMany?: ServicoCreateManyPrestadorInputEnvelope
    set?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    disconnect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    delete?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    update?: ServicoUpdateWithWhereUniqueWithoutPrestadorInput | ServicoUpdateWithWhereUniqueWithoutPrestadorInput[]
    updateMany?: ServicoUpdateManyWithWhereWithoutPrestadorInput | ServicoUpdateManyWithWhereWithoutPrestadorInput[]
    deleteMany?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
  }

  export type AgendamentoUpdateManyWithoutPrestadorNestedInput = {
    create?: XOR<AgendamentoCreateWithoutPrestadorInput, AgendamentoUncheckedCreateWithoutPrestadorInput> | AgendamentoCreateWithoutPrestadorInput[] | AgendamentoUncheckedCreateWithoutPrestadorInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutPrestadorInput | AgendamentoCreateOrConnectWithoutPrestadorInput[]
    upsert?: AgendamentoUpsertWithWhereUniqueWithoutPrestadorInput | AgendamentoUpsertWithWhereUniqueWithoutPrestadorInput[]
    createMany?: AgendamentoCreateManyPrestadorInputEnvelope
    set?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    disconnect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    delete?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    update?: AgendamentoUpdateWithWhereUniqueWithoutPrestadorInput | AgendamentoUpdateWithWhereUniqueWithoutPrestadorInput[]
    updateMany?: AgendamentoUpdateManyWithWhereWithoutPrestadorInput | AgendamentoUpdateManyWithWhereWithoutPrestadorInput[]
    deleteMany?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
  }

  export type NotificacaoUpdateManyWithoutPrestadorNestedInput = {
    create?: XOR<NotificacaoCreateWithoutPrestadorInput, NotificacaoUncheckedCreateWithoutPrestadorInput> | NotificacaoCreateWithoutPrestadorInput[] | NotificacaoUncheckedCreateWithoutPrestadorInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutPrestadorInput | NotificacaoCreateOrConnectWithoutPrestadorInput[]
    upsert?: NotificacaoUpsertWithWhereUniqueWithoutPrestadorInput | NotificacaoUpsertWithWhereUniqueWithoutPrestadorInput[]
    createMany?: NotificacaoCreateManyPrestadorInputEnvelope
    set?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    disconnect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    delete?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    update?: NotificacaoUpdateWithWhereUniqueWithoutPrestadorInput | NotificacaoUpdateWithWhereUniqueWithoutPrestadorInput[]
    updateMany?: NotificacaoUpdateManyWithWhereWithoutPrestadorInput | NotificacaoUpdateManyWithWhereWithoutPrestadorInput[]
    deleteMany?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
  }

  export type ServicoUncheckedUpdateManyWithoutPrestadorNestedInput = {
    create?: XOR<ServicoCreateWithoutPrestadorInput, ServicoUncheckedCreateWithoutPrestadorInput> | ServicoCreateWithoutPrestadorInput[] | ServicoUncheckedCreateWithoutPrestadorInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutPrestadorInput | ServicoCreateOrConnectWithoutPrestadorInput[]
    upsert?: ServicoUpsertWithWhereUniqueWithoutPrestadorInput | ServicoUpsertWithWhereUniqueWithoutPrestadorInput[]
    createMany?: ServicoCreateManyPrestadorInputEnvelope
    set?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    disconnect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    delete?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    update?: ServicoUpdateWithWhereUniqueWithoutPrestadorInput | ServicoUpdateWithWhereUniqueWithoutPrestadorInput[]
    updateMany?: ServicoUpdateManyWithWhereWithoutPrestadorInput | ServicoUpdateManyWithWhereWithoutPrestadorInput[]
    deleteMany?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
  }

  export type AgendamentoUncheckedUpdateManyWithoutPrestadorNestedInput = {
    create?: XOR<AgendamentoCreateWithoutPrestadorInput, AgendamentoUncheckedCreateWithoutPrestadorInput> | AgendamentoCreateWithoutPrestadorInput[] | AgendamentoUncheckedCreateWithoutPrestadorInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutPrestadorInput | AgendamentoCreateOrConnectWithoutPrestadorInput[]
    upsert?: AgendamentoUpsertWithWhereUniqueWithoutPrestadorInput | AgendamentoUpsertWithWhereUniqueWithoutPrestadorInput[]
    createMany?: AgendamentoCreateManyPrestadorInputEnvelope
    set?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    disconnect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    delete?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    update?: AgendamentoUpdateWithWhereUniqueWithoutPrestadorInput | AgendamentoUpdateWithWhereUniqueWithoutPrestadorInput[]
    updateMany?: AgendamentoUpdateManyWithWhereWithoutPrestadorInput | AgendamentoUpdateManyWithWhereWithoutPrestadorInput[]
    deleteMany?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
  }

  export type NotificacaoUncheckedUpdateManyWithoutPrestadorNestedInput = {
    create?: XOR<NotificacaoCreateWithoutPrestadorInput, NotificacaoUncheckedCreateWithoutPrestadorInput> | NotificacaoCreateWithoutPrestadorInput[] | NotificacaoUncheckedCreateWithoutPrestadorInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutPrestadorInput | NotificacaoCreateOrConnectWithoutPrestadorInput[]
    upsert?: NotificacaoUpsertWithWhereUniqueWithoutPrestadorInput | NotificacaoUpsertWithWhereUniqueWithoutPrestadorInput[]
    createMany?: NotificacaoCreateManyPrestadorInputEnvelope
    set?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    disconnect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    delete?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    update?: NotificacaoUpdateWithWhereUniqueWithoutPrestadorInput | NotificacaoUpdateWithWhereUniqueWithoutPrestadorInput[]
    updateMany?: NotificacaoUpdateManyWithWhereWithoutPrestadorInput | NotificacaoUpdateManyWithWhereWithoutPrestadorInput[]
    deleteMany?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
  }

  export type TutorCreateNestedOneWithoutPetsInput = {
    create?: XOR<TutorCreateWithoutPetsInput, TutorUncheckedCreateWithoutPetsInput>
    connectOrCreate?: TutorCreateOrConnectWithoutPetsInput
    connect?: TutorWhereUniqueInput
  }

  export type ReservaCreateNestedManyWithoutPetInput = {
    create?: XOR<ReservaCreateWithoutPetInput, ReservaUncheckedCreateWithoutPetInput> | ReservaCreateWithoutPetInput[] | ReservaUncheckedCreateWithoutPetInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutPetInput | ReservaCreateOrConnectWithoutPetInput[]
    createMany?: ReservaCreateManyPetInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type ReservaUncheckedCreateNestedManyWithoutPetInput = {
    create?: XOR<ReservaCreateWithoutPetInput, ReservaUncheckedCreateWithoutPetInput> | ReservaCreateWithoutPetInput[] | ReservaUncheckedCreateWithoutPetInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutPetInput | ReservaCreateOrConnectWithoutPetInput[]
    createMany?: ReservaCreateManyPetInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TutorUpdateOneWithoutPetsNestedInput = {
    create?: XOR<TutorCreateWithoutPetsInput, TutorUncheckedCreateWithoutPetsInput>
    connectOrCreate?: TutorCreateOrConnectWithoutPetsInput
    upsert?: TutorUpsertWithoutPetsInput
    disconnect?: TutorWhereInput | boolean
    delete?: TutorWhereInput | boolean
    connect?: TutorWhereUniqueInput
    update?: XOR<XOR<TutorUpdateToOneWithWhereWithoutPetsInput, TutorUpdateWithoutPetsInput>, TutorUncheckedUpdateWithoutPetsInput>
  }

  export type ReservaUpdateManyWithoutPetNestedInput = {
    create?: XOR<ReservaCreateWithoutPetInput, ReservaUncheckedCreateWithoutPetInput> | ReservaCreateWithoutPetInput[] | ReservaUncheckedCreateWithoutPetInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutPetInput | ReservaCreateOrConnectWithoutPetInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutPetInput | ReservaUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: ReservaCreateManyPetInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutPetInput | ReservaUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutPetInput | ReservaUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type ReservaUncheckedUpdateManyWithoutPetNestedInput = {
    create?: XOR<ReservaCreateWithoutPetInput, ReservaUncheckedCreateWithoutPetInput> | ReservaCreateWithoutPetInput[] | ReservaUncheckedCreateWithoutPetInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutPetInput | ReservaCreateOrConnectWithoutPetInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutPetInput | ReservaUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: ReservaCreateManyPetInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutPetInput | ReservaUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutPetInput | ReservaUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type PrestadorCreateNestedOneWithoutServicos_listInput = {
    create?: XOR<PrestadorCreateWithoutServicos_listInput, PrestadorUncheckedCreateWithoutServicos_listInput>
    connectOrCreate?: PrestadorCreateOrConnectWithoutServicos_listInput
    connect?: PrestadorWhereUniqueInput
  }

  export type ReservaCreateNestedManyWithoutServicoInput = {
    create?: XOR<ReservaCreateWithoutServicoInput, ReservaUncheckedCreateWithoutServicoInput> | ReservaCreateWithoutServicoInput[] | ReservaUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutServicoInput | ReservaCreateOrConnectWithoutServicoInput[]
    createMany?: ReservaCreateManyServicoInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type ReservaUncheckedCreateNestedManyWithoutServicoInput = {
    create?: XOR<ReservaCreateWithoutServicoInput, ReservaUncheckedCreateWithoutServicoInput> | ReservaCreateWithoutServicoInput[] | ReservaUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutServicoInput | ReservaCreateOrConnectWithoutServicoInput[]
    createMany?: ReservaCreateManyServicoInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PrestadorUpdateOneWithoutServicos_listNestedInput = {
    create?: XOR<PrestadorCreateWithoutServicos_listInput, PrestadorUncheckedCreateWithoutServicos_listInput>
    connectOrCreate?: PrestadorCreateOrConnectWithoutServicos_listInput
    upsert?: PrestadorUpsertWithoutServicos_listInput
    disconnect?: PrestadorWhereInput | boolean
    delete?: PrestadorWhereInput | boolean
    connect?: PrestadorWhereUniqueInput
    update?: XOR<XOR<PrestadorUpdateToOneWithWhereWithoutServicos_listInput, PrestadorUpdateWithoutServicos_listInput>, PrestadorUncheckedUpdateWithoutServicos_listInput>
  }

  export type ReservaUpdateManyWithoutServicoNestedInput = {
    create?: XOR<ReservaCreateWithoutServicoInput, ReservaUncheckedCreateWithoutServicoInput> | ReservaCreateWithoutServicoInput[] | ReservaUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutServicoInput | ReservaCreateOrConnectWithoutServicoInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutServicoInput | ReservaUpsertWithWhereUniqueWithoutServicoInput[]
    createMany?: ReservaCreateManyServicoInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutServicoInput | ReservaUpdateWithWhereUniqueWithoutServicoInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutServicoInput | ReservaUpdateManyWithWhereWithoutServicoInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type ReservaUncheckedUpdateManyWithoutServicoNestedInput = {
    create?: XOR<ReservaCreateWithoutServicoInput, ReservaUncheckedCreateWithoutServicoInput> | ReservaCreateWithoutServicoInput[] | ReservaUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutServicoInput | ReservaCreateOrConnectWithoutServicoInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutServicoInput | ReservaUpsertWithWhereUniqueWithoutServicoInput[]
    createMany?: ReservaCreateManyServicoInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutServicoInput | ReservaUpdateWithWhereUniqueWithoutServicoInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutServicoInput | ReservaUpdateManyWithWhereWithoutServicoInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type PrestadorCreateNestedOneWithoutAgendamentosInput = {
    create?: XOR<PrestadorCreateWithoutAgendamentosInput, PrestadorUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: PrestadorCreateOrConnectWithoutAgendamentosInput
    connect?: PrestadorWhereUniqueInput
  }

  export type ReservaCreateNestedManyWithoutAgendamentoInput = {
    create?: XOR<ReservaCreateWithoutAgendamentoInput, ReservaUncheckedCreateWithoutAgendamentoInput> | ReservaCreateWithoutAgendamentoInput[] | ReservaUncheckedCreateWithoutAgendamentoInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutAgendamentoInput | ReservaCreateOrConnectWithoutAgendamentoInput[]
    createMany?: ReservaCreateManyAgendamentoInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type ReservaUncheckedCreateNestedManyWithoutAgendamentoInput = {
    create?: XOR<ReservaCreateWithoutAgendamentoInput, ReservaUncheckedCreateWithoutAgendamentoInput> | ReservaCreateWithoutAgendamentoInput[] | ReservaUncheckedCreateWithoutAgendamentoInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutAgendamentoInput | ReservaCreateOrConnectWithoutAgendamentoInput[]
    createMany?: ReservaCreateManyAgendamentoInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type PrestadorUpdateOneWithoutAgendamentosNestedInput = {
    create?: XOR<PrestadorCreateWithoutAgendamentosInput, PrestadorUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: PrestadorCreateOrConnectWithoutAgendamentosInput
    upsert?: PrestadorUpsertWithoutAgendamentosInput
    disconnect?: PrestadorWhereInput | boolean
    delete?: PrestadorWhereInput | boolean
    connect?: PrestadorWhereUniqueInput
    update?: XOR<XOR<PrestadorUpdateToOneWithWhereWithoutAgendamentosInput, PrestadorUpdateWithoutAgendamentosInput>, PrestadorUncheckedUpdateWithoutAgendamentosInput>
  }

  export type ReservaUpdateManyWithoutAgendamentoNestedInput = {
    create?: XOR<ReservaCreateWithoutAgendamentoInput, ReservaUncheckedCreateWithoutAgendamentoInput> | ReservaCreateWithoutAgendamentoInput[] | ReservaUncheckedCreateWithoutAgendamentoInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutAgendamentoInput | ReservaCreateOrConnectWithoutAgendamentoInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutAgendamentoInput | ReservaUpsertWithWhereUniqueWithoutAgendamentoInput[]
    createMany?: ReservaCreateManyAgendamentoInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutAgendamentoInput | ReservaUpdateWithWhereUniqueWithoutAgendamentoInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutAgendamentoInput | ReservaUpdateManyWithWhereWithoutAgendamentoInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type ReservaUncheckedUpdateManyWithoutAgendamentoNestedInput = {
    create?: XOR<ReservaCreateWithoutAgendamentoInput, ReservaUncheckedCreateWithoutAgendamentoInput> | ReservaCreateWithoutAgendamentoInput[] | ReservaUncheckedCreateWithoutAgendamentoInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutAgendamentoInput | ReservaCreateOrConnectWithoutAgendamentoInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutAgendamentoInput | ReservaUpsertWithWhereUniqueWithoutAgendamentoInput[]
    createMany?: ReservaCreateManyAgendamentoInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutAgendamentoInput | ReservaUpdateWithWhereUniqueWithoutAgendamentoInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutAgendamentoInput | ReservaUpdateManyWithWhereWithoutAgendamentoInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type TutorCreateNestedOneWithoutReservasInput = {
    create?: XOR<TutorCreateWithoutReservasInput, TutorUncheckedCreateWithoutReservasInput>
    connectOrCreate?: TutorCreateOrConnectWithoutReservasInput
    connect?: TutorWhereUniqueInput
  }

  export type PetCreateNestedOneWithoutReservasInput = {
    create?: XOR<PetCreateWithoutReservasInput, PetUncheckedCreateWithoutReservasInput>
    connectOrCreate?: PetCreateOrConnectWithoutReservasInput
    connect?: PetWhereUniqueInput
  }

  export type ServicoCreateNestedOneWithoutReservasInput = {
    create?: XOR<ServicoCreateWithoutReservasInput, ServicoUncheckedCreateWithoutReservasInput>
    connectOrCreate?: ServicoCreateOrConnectWithoutReservasInput
    connect?: ServicoWhereUniqueInput
  }

  export type AgendamentoCreateNestedOneWithoutReservasInput = {
    create?: XOR<AgendamentoCreateWithoutReservasInput, AgendamentoUncheckedCreateWithoutReservasInput>
    connectOrCreate?: AgendamentoCreateOrConnectWithoutReservasInput
    connect?: AgendamentoWhereUniqueInput
  }

  export type AvaliacaoCreateNestedManyWithoutReservaInput = {
    create?: XOR<AvaliacaoCreateWithoutReservaInput, AvaliacaoUncheckedCreateWithoutReservaInput> | AvaliacaoCreateWithoutReservaInput[] | AvaliacaoUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutReservaInput | AvaliacaoCreateOrConnectWithoutReservaInput[]
    createMany?: AvaliacaoCreateManyReservaInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type PagamentoCreateNestedManyWithoutReservaInput = {
    create?: XOR<PagamentoCreateWithoutReservaInput, PagamentoUncheckedCreateWithoutReservaInput> | PagamentoCreateWithoutReservaInput[] | PagamentoUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutReservaInput | PagamentoCreateOrConnectWithoutReservaInput[]
    createMany?: PagamentoCreateManyReservaInputEnvelope
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
  }

  export type MidiaCreateNestedManyWithoutReservaInput = {
    create?: XOR<MidiaCreateWithoutReservaInput, MidiaUncheckedCreateWithoutReservaInput> | MidiaCreateWithoutReservaInput[] | MidiaUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: MidiaCreateOrConnectWithoutReservaInput | MidiaCreateOrConnectWithoutReservaInput[]
    createMany?: MidiaCreateManyReservaInputEnvelope
    connect?: MidiaWhereUniqueInput | MidiaWhereUniqueInput[]
  }

  export type AvaliacaoUncheckedCreateNestedManyWithoutReservaInput = {
    create?: XOR<AvaliacaoCreateWithoutReservaInput, AvaliacaoUncheckedCreateWithoutReservaInput> | AvaliacaoCreateWithoutReservaInput[] | AvaliacaoUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutReservaInput | AvaliacaoCreateOrConnectWithoutReservaInput[]
    createMany?: AvaliacaoCreateManyReservaInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type PagamentoUncheckedCreateNestedManyWithoutReservaInput = {
    create?: XOR<PagamentoCreateWithoutReservaInput, PagamentoUncheckedCreateWithoutReservaInput> | PagamentoCreateWithoutReservaInput[] | PagamentoUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutReservaInput | PagamentoCreateOrConnectWithoutReservaInput[]
    createMany?: PagamentoCreateManyReservaInputEnvelope
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
  }

  export type MidiaUncheckedCreateNestedManyWithoutReservaInput = {
    create?: XOR<MidiaCreateWithoutReservaInput, MidiaUncheckedCreateWithoutReservaInput> | MidiaCreateWithoutReservaInput[] | MidiaUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: MidiaCreateOrConnectWithoutReservaInput | MidiaCreateOrConnectWithoutReservaInput[]
    createMany?: MidiaCreateManyReservaInputEnvelope
    connect?: MidiaWhereUniqueInput | MidiaWhereUniqueInput[]
  }

  export type TutorUpdateOneWithoutReservasNestedInput = {
    create?: XOR<TutorCreateWithoutReservasInput, TutorUncheckedCreateWithoutReservasInput>
    connectOrCreate?: TutorCreateOrConnectWithoutReservasInput
    upsert?: TutorUpsertWithoutReservasInput
    disconnect?: TutorWhereInput | boolean
    delete?: TutorWhereInput | boolean
    connect?: TutorWhereUniqueInput
    update?: XOR<XOR<TutorUpdateToOneWithWhereWithoutReservasInput, TutorUpdateWithoutReservasInput>, TutorUncheckedUpdateWithoutReservasInput>
  }

  export type PetUpdateOneWithoutReservasNestedInput = {
    create?: XOR<PetCreateWithoutReservasInput, PetUncheckedCreateWithoutReservasInput>
    connectOrCreate?: PetCreateOrConnectWithoutReservasInput
    upsert?: PetUpsertWithoutReservasInput
    disconnect?: PetWhereInput | boolean
    delete?: PetWhereInput | boolean
    connect?: PetWhereUniqueInput
    update?: XOR<XOR<PetUpdateToOneWithWhereWithoutReservasInput, PetUpdateWithoutReservasInput>, PetUncheckedUpdateWithoutReservasInput>
  }

  export type ServicoUpdateOneWithoutReservasNestedInput = {
    create?: XOR<ServicoCreateWithoutReservasInput, ServicoUncheckedCreateWithoutReservasInput>
    connectOrCreate?: ServicoCreateOrConnectWithoutReservasInput
    upsert?: ServicoUpsertWithoutReservasInput
    disconnect?: ServicoWhereInput | boolean
    delete?: ServicoWhereInput | boolean
    connect?: ServicoWhereUniqueInput
    update?: XOR<XOR<ServicoUpdateToOneWithWhereWithoutReservasInput, ServicoUpdateWithoutReservasInput>, ServicoUncheckedUpdateWithoutReservasInput>
  }

  export type AgendamentoUpdateOneWithoutReservasNestedInput = {
    create?: XOR<AgendamentoCreateWithoutReservasInput, AgendamentoUncheckedCreateWithoutReservasInput>
    connectOrCreate?: AgendamentoCreateOrConnectWithoutReservasInput
    upsert?: AgendamentoUpsertWithoutReservasInput
    disconnect?: AgendamentoWhereInput | boolean
    delete?: AgendamentoWhereInput | boolean
    connect?: AgendamentoWhereUniqueInput
    update?: XOR<XOR<AgendamentoUpdateToOneWithWhereWithoutReservasInput, AgendamentoUpdateWithoutReservasInput>, AgendamentoUncheckedUpdateWithoutReservasInput>
  }

  export type AvaliacaoUpdateManyWithoutReservaNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutReservaInput, AvaliacaoUncheckedCreateWithoutReservaInput> | AvaliacaoCreateWithoutReservaInput[] | AvaliacaoUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutReservaInput | AvaliacaoCreateOrConnectWithoutReservaInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutReservaInput | AvaliacaoUpsertWithWhereUniqueWithoutReservaInput[]
    createMany?: AvaliacaoCreateManyReservaInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutReservaInput | AvaliacaoUpdateWithWhereUniqueWithoutReservaInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutReservaInput | AvaliacaoUpdateManyWithWhereWithoutReservaInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type PagamentoUpdateManyWithoutReservaNestedInput = {
    create?: XOR<PagamentoCreateWithoutReservaInput, PagamentoUncheckedCreateWithoutReservaInput> | PagamentoCreateWithoutReservaInput[] | PagamentoUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutReservaInput | PagamentoCreateOrConnectWithoutReservaInput[]
    upsert?: PagamentoUpsertWithWhereUniqueWithoutReservaInput | PagamentoUpsertWithWhereUniqueWithoutReservaInput[]
    createMany?: PagamentoCreateManyReservaInputEnvelope
    set?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    disconnect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    delete?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    update?: PagamentoUpdateWithWhereUniqueWithoutReservaInput | PagamentoUpdateWithWhereUniqueWithoutReservaInput[]
    updateMany?: PagamentoUpdateManyWithWhereWithoutReservaInput | PagamentoUpdateManyWithWhereWithoutReservaInput[]
    deleteMany?: PagamentoScalarWhereInput | PagamentoScalarWhereInput[]
  }

  export type MidiaUpdateManyWithoutReservaNestedInput = {
    create?: XOR<MidiaCreateWithoutReservaInput, MidiaUncheckedCreateWithoutReservaInput> | MidiaCreateWithoutReservaInput[] | MidiaUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: MidiaCreateOrConnectWithoutReservaInput | MidiaCreateOrConnectWithoutReservaInput[]
    upsert?: MidiaUpsertWithWhereUniqueWithoutReservaInput | MidiaUpsertWithWhereUniqueWithoutReservaInput[]
    createMany?: MidiaCreateManyReservaInputEnvelope
    set?: MidiaWhereUniqueInput | MidiaWhereUniqueInput[]
    disconnect?: MidiaWhereUniqueInput | MidiaWhereUniqueInput[]
    delete?: MidiaWhereUniqueInput | MidiaWhereUniqueInput[]
    connect?: MidiaWhereUniqueInput | MidiaWhereUniqueInput[]
    update?: MidiaUpdateWithWhereUniqueWithoutReservaInput | MidiaUpdateWithWhereUniqueWithoutReservaInput[]
    updateMany?: MidiaUpdateManyWithWhereWithoutReservaInput | MidiaUpdateManyWithWhereWithoutReservaInput[]
    deleteMany?: MidiaScalarWhereInput | MidiaScalarWhereInput[]
  }

  export type AvaliacaoUncheckedUpdateManyWithoutReservaNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutReservaInput, AvaliacaoUncheckedCreateWithoutReservaInput> | AvaliacaoCreateWithoutReservaInput[] | AvaliacaoUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutReservaInput | AvaliacaoCreateOrConnectWithoutReservaInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutReservaInput | AvaliacaoUpsertWithWhereUniqueWithoutReservaInput[]
    createMany?: AvaliacaoCreateManyReservaInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutReservaInput | AvaliacaoUpdateWithWhereUniqueWithoutReservaInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutReservaInput | AvaliacaoUpdateManyWithWhereWithoutReservaInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type PagamentoUncheckedUpdateManyWithoutReservaNestedInput = {
    create?: XOR<PagamentoCreateWithoutReservaInput, PagamentoUncheckedCreateWithoutReservaInput> | PagamentoCreateWithoutReservaInput[] | PagamentoUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutReservaInput | PagamentoCreateOrConnectWithoutReservaInput[]
    upsert?: PagamentoUpsertWithWhereUniqueWithoutReservaInput | PagamentoUpsertWithWhereUniqueWithoutReservaInput[]
    createMany?: PagamentoCreateManyReservaInputEnvelope
    set?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    disconnect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    delete?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    update?: PagamentoUpdateWithWhereUniqueWithoutReservaInput | PagamentoUpdateWithWhereUniqueWithoutReservaInput[]
    updateMany?: PagamentoUpdateManyWithWhereWithoutReservaInput | PagamentoUpdateManyWithWhereWithoutReservaInput[]
    deleteMany?: PagamentoScalarWhereInput | PagamentoScalarWhereInput[]
  }

  export type MidiaUncheckedUpdateManyWithoutReservaNestedInput = {
    create?: XOR<MidiaCreateWithoutReservaInput, MidiaUncheckedCreateWithoutReservaInput> | MidiaCreateWithoutReservaInput[] | MidiaUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: MidiaCreateOrConnectWithoutReservaInput | MidiaCreateOrConnectWithoutReservaInput[]
    upsert?: MidiaUpsertWithWhereUniqueWithoutReservaInput | MidiaUpsertWithWhereUniqueWithoutReservaInput[]
    createMany?: MidiaCreateManyReservaInputEnvelope
    set?: MidiaWhereUniqueInput | MidiaWhereUniqueInput[]
    disconnect?: MidiaWhereUniqueInput | MidiaWhereUniqueInput[]
    delete?: MidiaWhereUniqueInput | MidiaWhereUniqueInput[]
    connect?: MidiaWhereUniqueInput | MidiaWhereUniqueInput[]
    update?: MidiaUpdateWithWhereUniqueWithoutReservaInput | MidiaUpdateWithWhereUniqueWithoutReservaInput[]
    updateMany?: MidiaUpdateManyWithWhereWithoutReservaInput | MidiaUpdateManyWithWhereWithoutReservaInput[]
    deleteMany?: MidiaScalarWhereInput | MidiaScalarWhereInput[]
  }

  export type ReservaCreateNestedOneWithoutAvaliacoesInput = {
    create?: XOR<ReservaCreateWithoutAvaliacoesInput, ReservaUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: ReservaCreateOrConnectWithoutAvaliacoesInput
    connect?: ReservaWhereUniqueInput
  }

  export type ReservaUpdateOneWithoutAvaliacoesNestedInput = {
    create?: XOR<ReservaCreateWithoutAvaliacoesInput, ReservaUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: ReservaCreateOrConnectWithoutAvaliacoesInput
    upsert?: ReservaUpsertWithoutAvaliacoesInput
    disconnect?: ReservaWhereInput | boolean
    delete?: ReservaWhereInput | boolean
    connect?: ReservaWhereUniqueInput
    update?: XOR<XOR<ReservaUpdateToOneWithWhereWithoutAvaliacoesInput, ReservaUpdateWithoutAvaliacoesInput>, ReservaUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type ReservaCreateNestedOneWithoutPagamentosInput = {
    create?: XOR<ReservaCreateWithoutPagamentosInput, ReservaUncheckedCreateWithoutPagamentosInput>
    connectOrCreate?: ReservaCreateOrConnectWithoutPagamentosInput
    connect?: ReservaWhereUniqueInput
  }

  export type ReservaUpdateOneWithoutPagamentosNestedInput = {
    create?: XOR<ReservaCreateWithoutPagamentosInput, ReservaUncheckedCreateWithoutPagamentosInput>
    connectOrCreate?: ReservaCreateOrConnectWithoutPagamentosInput
    upsert?: ReservaUpsertWithoutPagamentosInput
    disconnect?: ReservaWhereInput | boolean
    delete?: ReservaWhereInput | boolean
    connect?: ReservaWhereUniqueInput
    update?: XOR<XOR<ReservaUpdateToOneWithWhereWithoutPagamentosInput, ReservaUpdateWithoutPagamentosInput>, ReservaUncheckedUpdateWithoutPagamentosInput>
  }

  export type ReservaCreateNestedOneWithoutMidiasInput = {
    create?: XOR<ReservaCreateWithoutMidiasInput, ReservaUncheckedCreateWithoutMidiasInput>
    connectOrCreate?: ReservaCreateOrConnectWithoutMidiasInput
    connect?: ReservaWhereUniqueInput
  }

  export type ReservaUpdateOneWithoutMidiasNestedInput = {
    create?: XOR<ReservaCreateWithoutMidiasInput, ReservaUncheckedCreateWithoutMidiasInput>
    connectOrCreate?: ReservaCreateOrConnectWithoutMidiasInput
    upsert?: ReservaUpsertWithoutMidiasInput
    disconnect?: ReservaWhereInput | boolean
    delete?: ReservaWhereInput | boolean
    connect?: ReservaWhereUniqueInput
    update?: XOR<XOR<ReservaUpdateToOneWithWhereWithoutMidiasInput, ReservaUpdateWithoutMidiasInput>, ReservaUncheckedUpdateWithoutMidiasInput>
  }

  export type TutorCreateNestedOneWithoutNotificacoesInput = {
    create?: XOR<TutorCreateWithoutNotificacoesInput, TutorUncheckedCreateWithoutNotificacoesInput>
    connectOrCreate?: TutorCreateOrConnectWithoutNotificacoesInput
    connect?: TutorWhereUniqueInput
  }

  export type PrestadorCreateNestedOneWithoutNotificacoesInput = {
    create?: XOR<PrestadorCreateWithoutNotificacoesInput, PrestadorUncheckedCreateWithoutNotificacoesInput>
    connectOrCreate?: PrestadorCreateOrConnectWithoutNotificacoesInput
    connect?: PrestadorWhereUniqueInput
  }

  export type TutorUpdateOneWithoutNotificacoesNestedInput = {
    create?: XOR<TutorCreateWithoutNotificacoesInput, TutorUncheckedCreateWithoutNotificacoesInput>
    connectOrCreate?: TutorCreateOrConnectWithoutNotificacoesInput
    upsert?: TutorUpsertWithoutNotificacoesInput
    disconnect?: TutorWhereInput | boolean
    delete?: TutorWhereInput | boolean
    connect?: TutorWhereUniqueInput
    update?: XOR<XOR<TutorUpdateToOneWithWhereWithoutNotificacoesInput, TutorUpdateWithoutNotificacoesInput>, TutorUncheckedUpdateWithoutNotificacoesInput>
  }

  export type PrestadorUpdateOneWithoutNotificacoesNestedInput = {
    create?: XOR<PrestadorCreateWithoutNotificacoesInput, PrestadorUncheckedCreateWithoutNotificacoesInput>
    connectOrCreate?: PrestadorCreateOrConnectWithoutNotificacoesInput
    upsert?: PrestadorUpsertWithoutNotificacoesInput
    disconnect?: PrestadorWhereInput | boolean
    delete?: PrestadorWhereInput | boolean
    connect?: PrestadorWhereUniqueInput
    update?: XOR<XOR<PrestadorUpdateToOneWithWhereWithoutNotificacoesInput, PrestadorUpdateWithoutNotificacoesInput>, PrestadorUncheckedUpdateWithoutNotificacoesInput>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type PetCreateWithoutTutorInput = {
    id_pet: string
    nome?: string | null
    especie?: string | null
    raca?: string | null
    idade?: number | null
    restricoes?: string | null
    reservas?: ReservaCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateWithoutTutorInput = {
    id_pet: string
    nome?: string | null
    especie?: string | null
    raca?: string | null
    idade?: number | null
    restricoes?: string | null
    reservas?: ReservaUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetCreateOrConnectWithoutTutorInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutTutorInput, PetUncheckedCreateWithoutTutorInput>
  }

  export type PetCreateManyTutorInputEnvelope = {
    data: PetCreateManyTutorInput | PetCreateManyTutorInput[]
    skipDuplicates?: boolean
  }

  export type ReservaCreateWithoutTutorInput = {
    id_reserva: string
    status?: string | null
    data_reserva?: Date | string | null
    valor?: number | null
    pet?: PetCreateNestedOneWithoutReservasInput
    servico?: ServicoCreateNestedOneWithoutReservasInput
    agendamento?: AgendamentoCreateNestedOneWithoutReservasInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutReservaInput
    pagamentos?: PagamentoCreateNestedManyWithoutReservaInput
    midias?: MidiaCreateNestedManyWithoutReservaInput
  }

  export type ReservaUncheckedCreateWithoutTutorInput = {
    id_reserva: string
    id_pet?: string | null
    id_servico?: string | null
    id_agendamento?: string | null
    status?: string | null
    data_reserva?: Date | string | null
    valor?: number | null
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutReservaInput
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutReservaInput
    midias?: MidiaUncheckedCreateNestedManyWithoutReservaInput
  }

  export type ReservaCreateOrConnectWithoutTutorInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutTutorInput, ReservaUncheckedCreateWithoutTutorInput>
  }

  export type ReservaCreateManyTutorInputEnvelope = {
    data: ReservaCreateManyTutorInput | ReservaCreateManyTutorInput[]
    skipDuplicates?: boolean
  }

  export type NotificacaoCreateWithoutTutorInput = {
    id_notificacao: string
    mensagem?: string | null
    data_envio?: Date | string | null
    lida?: boolean | null
    prestador?: PrestadorCreateNestedOneWithoutNotificacoesInput
  }

  export type NotificacaoUncheckedCreateWithoutTutorInput = {
    id_notificacao: string
    id_prestador?: string | null
    mensagem?: string | null
    data_envio?: Date | string | null
    lida?: boolean | null
  }

  export type NotificacaoCreateOrConnectWithoutTutorInput = {
    where: NotificacaoWhereUniqueInput
    create: XOR<NotificacaoCreateWithoutTutorInput, NotificacaoUncheckedCreateWithoutTutorInput>
  }

  export type NotificacaoCreateManyTutorInputEnvelope = {
    data: NotificacaoCreateManyTutorInput | NotificacaoCreateManyTutorInput[]
    skipDuplicates?: boolean
  }

  export type PetUpsertWithWhereUniqueWithoutTutorInput = {
    where: PetWhereUniqueInput
    update: XOR<PetUpdateWithoutTutorInput, PetUncheckedUpdateWithoutTutorInput>
    create: XOR<PetCreateWithoutTutorInput, PetUncheckedCreateWithoutTutorInput>
  }

  export type PetUpdateWithWhereUniqueWithoutTutorInput = {
    where: PetWhereUniqueInput
    data: XOR<PetUpdateWithoutTutorInput, PetUncheckedUpdateWithoutTutorInput>
  }

  export type PetUpdateManyWithWhereWithoutTutorInput = {
    where: PetScalarWhereInput
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyWithoutTutorInput>
  }

  export type PetScalarWhereInput = {
    AND?: PetScalarWhereInput | PetScalarWhereInput[]
    OR?: PetScalarWhereInput[]
    NOT?: PetScalarWhereInput | PetScalarWhereInput[]
    id_pet?: StringFilter<"Pet"> | string
    id_tutor?: StringNullableFilter<"Pet"> | string | null
    nome?: StringNullableFilter<"Pet"> | string | null
    especie?: StringNullableFilter<"Pet"> | string | null
    raca?: StringNullableFilter<"Pet"> | string | null
    idade?: IntNullableFilter<"Pet"> | number | null
    restricoes?: StringNullableFilter<"Pet"> | string | null
  }

  export type ReservaUpsertWithWhereUniqueWithoutTutorInput = {
    where: ReservaWhereUniqueInput
    update: XOR<ReservaUpdateWithoutTutorInput, ReservaUncheckedUpdateWithoutTutorInput>
    create: XOR<ReservaCreateWithoutTutorInput, ReservaUncheckedCreateWithoutTutorInput>
  }

  export type ReservaUpdateWithWhereUniqueWithoutTutorInput = {
    where: ReservaWhereUniqueInput
    data: XOR<ReservaUpdateWithoutTutorInput, ReservaUncheckedUpdateWithoutTutorInput>
  }

  export type ReservaUpdateManyWithWhereWithoutTutorInput = {
    where: ReservaScalarWhereInput
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyWithoutTutorInput>
  }

  export type ReservaScalarWhereInput = {
    AND?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
    OR?: ReservaScalarWhereInput[]
    NOT?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
    id_reserva?: StringFilter<"Reserva"> | string
    id_tutor?: StringNullableFilter<"Reserva"> | string | null
    id_pet?: StringNullableFilter<"Reserva"> | string | null
    id_servico?: StringNullableFilter<"Reserva"> | string | null
    id_agendamento?: StringNullableFilter<"Reserva"> | string | null
    status?: StringNullableFilter<"Reserva"> | string | null
    data_reserva?: DateTimeNullableFilter<"Reserva"> | Date | string | null
    valor?: FloatNullableFilter<"Reserva"> | number | null
  }

  export type NotificacaoUpsertWithWhereUniqueWithoutTutorInput = {
    where: NotificacaoWhereUniqueInput
    update: XOR<NotificacaoUpdateWithoutTutorInput, NotificacaoUncheckedUpdateWithoutTutorInput>
    create: XOR<NotificacaoCreateWithoutTutorInput, NotificacaoUncheckedCreateWithoutTutorInput>
  }

  export type NotificacaoUpdateWithWhereUniqueWithoutTutorInput = {
    where: NotificacaoWhereUniqueInput
    data: XOR<NotificacaoUpdateWithoutTutorInput, NotificacaoUncheckedUpdateWithoutTutorInput>
  }

  export type NotificacaoUpdateManyWithWhereWithoutTutorInput = {
    where: NotificacaoScalarWhereInput
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyWithoutTutorInput>
  }

  export type NotificacaoScalarWhereInput = {
    AND?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
    OR?: NotificacaoScalarWhereInput[]
    NOT?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
    id_notificacao?: StringFilter<"Notificacao"> | string
    id_tutor?: StringNullableFilter<"Notificacao"> | string | null
    id_prestador?: StringNullableFilter<"Notificacao"> | string | null
    mensagem?: StringNullableFilter<"Notificacao"> | string | null
    data_envio?: DateTimeNullableFilter<"Notificacao"> | Date | string | null
    lida?: BoolNullableFilter<"Notificacao"> | boolean | null
  }

  export type ServicoCreateWithoutPrestadorInput = {
    id_servico: string
    descricao?: string | null
    titulo?: string | null
    preco?: number | null
    tipo?: string | null
    reservas?: ReservaCreateNestedManyWithoutServicoInput
  }

  export type ServicoUncheckedCreateWithoutPrestadorInput = {
    id_servico: string
    descricao?: string | null
    titulo?: string | null
    preco?: number | null
    tipo?: string | null
    reservas?: ReservaUncheckedCreateNestedManyWithoutServicoInput
  }

  export type ServicoCreateOrConnectWithoutPrestadorInput = {
    where: ServicoWhereUniqueInput
    create: XOR<ServicoCreateWithoutPrestadorInput, ServicoUncheckedCreateWithoutPrestadorInput>
  }

  export type ServicoCreateManyPrestadorInputEnvelope = {
    data: ServicoCreateManyPrestadorInput | ServicoCreateManyPrestadorInput[]
    skipDuplicates?: boolean
  }

  export type AgendamentoCreateWithoutPrestadorInput = {
    id_agendamento: string
    data_inicio?: Date | string | null
    data_fim?: Date | string | null
    disponivel?: boolean | null
    reservas?: ReservaCreateNestedManyWithoutAgendamentoInput
  }

  export type AgendamentoUncheckedCreateWithoutPrestadorInput = {
    id_agendamento: string
    data_inicio?: Date | string | null
    data_fim?: Date | string | null
    disponivel?: boolean | null
    reservas?: ReservaUncheckedCreateNestedManyWithoutAgendamentoInput
  }

  export type AgendamentoCreateOrConnectWithoutPrestadorInput = {
    where: AgendamentoWhereUniqueInput
    create: XOR<AgendamentoCreateWithoutPrestadorInput, AgendamentoUncheckedCreateWithoutPrestadorInput>
  }

  export type AgendamentoCreateManyPrestadorInputEnvelope = {
    data: AgendamentoCreateManyPrestadorInput | AgendamentoCreateManyPrestadorInput[]
    skipDuplicates?: boolean
  }

  export type NotificacaoCreateWithoutPrestadorInput = {
    id_notificacao: string
    mensagem?: string | null
    data_envio?: Date | string | null
    lida?: boolean | null
    tutor?: TutorCreateNestedOneWithoutNotificacoesInput
  }

  export type NotificacaoUncheckedCreateWithoutPrestadorInput = {
    id_notificacao: string
    id_tutor?: string | null
    mensagem?: string | null
    data_envio?: Date | string | null
    lida?: boolean | null
  }

  export type NotificacaoCreateOrConnectWithoutPrestadorInput = {
    where: NotificacaoWhereUniqueInput
    create: XOR<NotificacaoCreateWithoutPrestadorInput, NotificacaoUncheckedCreateWithoutPrestadorInput>
  }

  export type NotificacaoCreateManyPrestadorInputEnvelope = {
    data: NotificacaoCreateManyPrestadorInput | NotificacaoCreateManyPrestadorInput[]
    skipDuplicates?: boolean
  }

  export type ServicoUpsertWithWhereUniqueWithoutPrestadorInput = {
    where: ServicoWhereUniqueInput
    update: XOR<ServicoUpdateWithoutPrestadorInput, ServicoUncheckedUpdateWithoutPrestadorInput>
    create: XOR<ServicoCreateWithoutPrestadorInput, ServicoUncheckedCreateWithoutPrestadorInput>
  }

  export type ServicoUpdateWithWhereUniqueWithoutPrestadorInput = {
    where: ServicoWhereUniqueInput
    data: XOR<ServicoUpdateWithoutPrestadorInput, ServicoUncheckedUpdateWithoutPrestadorInput>
  }

  export type ServicoUpdateManyWithWhereWithoutPrestadorInput = {
    where: ServicoScalarWhereInput
    data: XOR<ServicoUpdateManyMutationInput, ServicoUncheckedUpdateManyWithoutPrestadorInput>
  }

  export type ServicoScalarWhereInput = {
    AND?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
    OR?: ServicoScalarWhereInput[]
    NOT?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
    id_servico?: StringFilter<"Servico"> | string
    id_prestador?: StringNullableFilter<"Servico"> | string | null
    descricao?: StringNullableFilter<"Servico"> | string | null
    titulo?: StringNullableFilter<"Servico"> | string | null
    preco?: FloatNullableFilter<"Servico"> | number | null
    tipo?: StringNullableFilter<"Servico"> | string | null
  }

  export type AgendamentoUpsertWithWhereUniqueWithoutPrestadorInput = {
    where: AgendamentoWhereUniqueInput
    update: XOR<AgendamentoUpdateWithoutPrestadorInput, AgendamentoUncheckedUpdateWithoutPrestadorInput>
    create: XOR<AgendamentoCreateWithoutPrestadorInput, AgendamentoUncheckedCreateWithoutPrestadorInput>
  }

  export type AgendamentoUpdateWithWhereUniqueWithoutPrestadorInput = {
    where: AgendamentoWhereUniqueInput
    data: XOR<AgendamentoUpdateWithoutPrestadorInput, AgendamentoUncheckedUpdateWithoutPrestadorInput>
  }

  export type AgendamentoUpdateManyWithWhereWithoutPrestadorInput = {
    where: AgendamentoScalarWhereInput
    data: XOR<AgendamentoUpdateManyMutationInput, AgendamentoUncheckedUpdateManyWithoutPrestadorInput>
  }

  export type AgendamentoScalarWhereInput = {
    AND?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
    OR?: AgendamentoScalarWhereInput[]
    NOT?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
    id_agendamento?: StringFilter<"Agendamento"> | string
    id_prestador?: StringNullableFilter<"Agendamento"> | string | null
    data_inicio?: DateTimeNullableFilter<"Agendamento"> | Date | string | null
    data_fim?: DateTimeNullableFilter<"Agendamento"> | Date | string | null
    disponivel?: BoolNullableFilter<"Agendamento"> | boolean | null
  }

  export type NotificacaoUpsertWithWhereUniqueWithoutPrestadorInput = {
    where: NotificacaoWhereUniqueInput
    update: XOR<NotificacaoUpdateWithoutPrestadorInput, NotificacaoUncheckedUpdateWithoutPrestadorInput>
    create: XOR<NotificacaoCreateWithoutPrestadorInput, NotificacaoUncheckedCreateWithoutPrestadorInput>
  }

  export type NotificacaoUpdateWithWhereUniqueWithoutPrestadorInput = {
    where: NotificacaoWhereUniqueInput
    data: XOR<NotificacaoUpdateWithoutPrestadorInput, NotificacaoUncheckedUpdateWithoutPrestadorInput>
  }

  export type NotificacaoUpdateManyWithWhereWithoutPrestadorInput = {
    where: NotificacaoScalarWhereInput
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyWithoutPrestadorInput>
  }

  export type TutorCreateWithoutPetsInput = {
    id_tutor: string
    nome?: string | null
    email?: string | null
    telefone?: string | null
    endereco?: string | null
    senha?: string | null
    reservas?: ReservaCreateNestedManyWithoutTutorInput
    notificacoes?: NotificacaoCreateNestedManyWithoutTutorInput
  }

  export type TutorUncheckedCreateWithoutPetsInput = {
    id_tutor: string
    nome?: string | null
    email?: string | null
    telefone?: string | null
    endereco?: string | null
    senha?: string | null
    reservas?: ReservaUncheckedCreateNestedManyWithoutTutorInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutTutorInput
  }

  export type TutorCreateOrConnectWithoutPetsInput = {
    where: TutorWhereUniqueInput
    create: XOR<TutorCreateWithoutPetsInput, TutorUncheckedCreateWithoutPetsInput>
  }

  export type ReservaCreateWithoutPetInput = {
    id_reserva: string
    status?: string | null
    data_reserva?: Date | string | null
    valor?: number | null
    tutor?: TutorCreateNestedOneWithoutReservasInput
    servico?: ServicoCreateNestedOneWithoutReservasInput
    agendamento?: AgendamentoCreateNestedOneWithoutReservasInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutReservaInput
    pagamentos?: PagamentoCreateNestedManyWithoutReservaInput
    midias?: MidiaCreateNestedManyWithoutReservaInput
  }

  export type ReservaUncheckedCreateWithoutPetInput = {
    id_reserva: string
    id_tutor?: string | null
    id_servico?: string | null
    id_agendamento?: string | null
    status?: string | null
    data_reserva?: Date | string | null
    valor?: number | null
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutReservaInput
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutReservaInput
    midias?: MidiaUncheckedCreateNestedManyWithoutReservaInput
  }

  export type ReservaCreateOrConnectWithoutPetInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutPetInput, ReservaUncheckedCreateWithoutPetInput>
  }

  export type ReservaCreateManyPetInputEnvelope = {
    data: ReservaCreateManyPetInput | ReservaCreateManyPetInput[]
    skipDuplicates?: boolean
  }

  export type TutorUpsertWithoutPetsInput = {
    update: XOR<TutorUpdateWithoutPetsInput, TutorUncheckedUpdateWithoutPetsInput>
    create: XOR<TutorCreateWithoutPetsInput, TutorUncheckedCreateWithoutPetsInput>
    where?: TutorWhereInput
  }

  export type TutorUpdateToOneWithWhereWithoutPetsInput = {
    where?: TutorWhereInput
    data: XOR<TutorUpdateWithoutPetsInput, TutorUncheckedUpdateWithoutPetsInput>
  }

  export type TutorUpdateWithoutPetsInput = {
    id_tutor?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    reservas?: ReservaUpdateManyWithoutTutorNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutTutorNestedInput
  }

  export type TutorUncheckedUpdateWithoutPetsInput = {
    id_tutor?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    reservas?: ReservaUncheckedUpdateManyWithoutTutorNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutTutorNestedInput
  }

  export type ReservaUpsertWithWhereUniqueWithoutPetInput = {
    where: ReservaWhereUniqueInput
    update: XOR<ReservaUpdateWithoutPetInput, ReservaUncheckedUpdateWithoutPetInput>
    create: XOR<ReservaCreateWithoutPetInput, ReservaUncheckedCreateWithoutPetInput>
  }

  export type ReservaUpdateWithWhereUniqueWithoutPetInput = {
    where: ReservaWhereUniqueInput
    data: XOR<ReservaUpdateWithoutPetInput, ReservaUncheckedUpdateWithoutPetInput>
  }

  export type ReservaUpdateManyWithWhereWithoutPetInput = {
    where: ReservaScalarWhereInput
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyWithoutPetInput>
  }

  export type PrestadorCreateWithoutServicos_listInput = {
    id_prestador: string
    nome?: string | null
    email?: string | null
    telefone?: string | null
    endereco?: string | null
    senha?: string | null
    servicos?: string | null
    agendamentos?: AgendamentoCreateNestedManyWithoutPrestadorInput
    notificacoes?: NotificacaoCreateNestedManyWithoutPrestadorInput
  }

  export type PrestadorUncheckedCreateWithoutServicos_listInput = {
    id_prestador: string
    nome?: string | null
    email?: string | null
    telefone?: string | null
    endereco?: string | null
    senha?: string | null
    servicos?: string | null
    agendamentos?: AgendamentoUncheckedCreateNestedManyWithoutPrestadorInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutPrestadorInput
  }

  export type PrestadorCreateOrConnectWithoutServicos_listInput = {
    where: PrestadorWhereUniqueInput
    create: XOR<PrestadorCreateWithoutServicos_listInput, PrestadorUncheckedCreateWithoutServicos_listInput>
  }

  export type ReservaCreateWithoutServicoInput = {
    id_reserva: string
    status?: string | null
    data_reserva?: Date | string | null
    valor?: number | null
    tutor?: TutorCreateNestedOneWithoutReservasInput
    pet?: PetCreateNestedOneWithoutReservasInput
    agendamento?: AgendamentoCreateNestedOneWithoutReservasInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutReservaInput
    pagamentos?: PagamentoCreateNestedManyWithoutReservaInput
    midias?: MidiaCreateNestedManyWithoutReservaInput
  }

  export type ReservaUncheckedCreateWithoutServicoInput = {
    id_reserva: string
    id_tutor?: string | null
    id_pet?: string | null
    id_agendamento?: string | null
    status?: string | null
    data_reserva?: Date | string | null
    valor?: number | null
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutReservaInput
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutReservaInput
    midias?: MidiaUncheckedCreateNestedManyWithoutReservaInput
  }

  export type ReservaCreateOrConnectWithoutServicoInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutServicoInput, ReservaUncheckedCreateWithoutServicoInput>
  }

  export type ReservaCreateManyServicoInputEnvelope = {
    data: ReservaCreateManyServicoInput | ReservaCreateManyServicoInput[]
    skipDuplicates?: boolean
  }

  export type PrestadorUpsertWithoutServicos_listInput = {
    update: XOR<PrestadorUpdateWithoutServicos_listInput, PrestadorUncheckedUpdateWithoutServicos_listInput>
    create: XOR<PrestadorCreateWithoutServicos_listInput, PrestadorUncheckedCreateWithoutServicos_listInput>
    where?: PrestadorWhereInput
  }

  export type PrestadorUpdateToOneWithWhereWithoutServicos_listInput = {
    where?: PrestadorWhereInput
    data: XOR<PrestadorUpdateWithoutServicos_listInput, PrestadorUncheckedUpdateWithoutServicos_listInput>
  }

  export type PrestadorUpdateWithoutServicos_listInput = {
    id_prestador?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    servicos?: NullableStringFieldUpdateOperationsInput | string | null
    agendamentos?: AgendamentoUpdateManyWithoutPrestadorNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutPrestadorNestedInput
  }

  export type PrestadorUncheckedUpdateWithoutServicos_listInput = {
    id_prestador?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    servicos?: NullableStringFieldUpdateOperationsInput | string | null
    agendamentos?: AgendamentoUncheckedUpdateManyWithoutPrestadorNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutPrestadorNestedInput
  }

  export type ReservaUpsertWithWhereUniqueWithoutServicoInput = {
    where: ReservaWhereUniqueInput
    update: XOR<ReservaUpdateWithoutServicoInput, ReservaUncheckedUpdateWithoutServicoInput>
    create: XOR<ReservaCreateWithoutServicoInput, ReservaUncheckedCreateWithoutServicoInput>
  }

  export type ReservaUpdateWithWhereUniqueWithoutServicoInput = {
    where: ReservaWhereUniqueInput
    data: XOR<ReservaUpdateWithoutServicoInput, ReservaUncheckedUpdateWithoutServicoInput>
  }

  export type ReservaUpdateManyWithWhereWithoutServicoInput = {
    where: ReservaScalarWhereInput
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyWithoutServicoInput>
  }

  export type PrestadorCreateWithoutAgendamentosInput = {
    id_prestador: string
    nome?: string | null
    email?: string | null
    telefone?: string | null
    endereco?: string | null
    senha?: string | null
    servicos?: string | null
    servicos_list?: ServicoCreateNestedManyWithoutPrestadorInput
    notificacoes?: NotificacaoCreateNestedManyWithoutPrestadorInput
  }

  export type PrestadorUncheckedCreateWithoutAgendamentosInput = {
    id_prestador: string
    nome?: string | null
    email?: string | null
    telefone?: string | null
    endereco?: string | null
    senha?: string | null
    servicos?: string | null
    servicos_list?: ServicoUncheckedCreateNestedManyWithoutPrestadorInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutPrestadorInput
  }

  export type PrestadorCreateOrConnectWithoutAgendamentosInput = {
    where: PrestadorWhereUniqueInput
    create: XOR<PrestadorCreateWithoutAgendamentosInput, PrestadorUncheckedCreateWithoutAgendamentosInput>
  }

  export type ReservaCreateWithoutAgendamentoInput = {
    id_reserva: string
    status?: string | null
    data_reserva?: Date | string | null
    valor?: number | null
    tutor?: TutorCreateNestedOneWithoutReservasInput
    pet?: PetCreateNestedOneWithoutReservasInput
    servico?: ServicoCreateNestedOneWithoutReservasInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutReservaInput
    pagamentos?: PagamentoCreateNestedManyWithoutReservaInput
    midias?: MidiaCreateNestedManyWithoutReservaInput
  }

  export type ReservaUncheckedCreateWithoutAgendamentoInput = {
    id_reserva: string
    id_tutor?: string | null
    id_pet?: string | null
    id_servico?: string | null
    status?: string | null
    data_reserva?: Date | string | null
    valor?: number | null
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutReservaInput
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutReservaInput
    midias?: MidiaUncheckedCreateNestedManyWithoutReservaInput
  }

  export type ReservaCreateOrConnectWithoutAgendamentoInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutAgendamentoInput, ReservaUncheckedCreateWithoutAgendamentoInput>
  }

  export type ReservaCreateManyAgendamentoInputEnvelope = {
    data: ReservaCreateManyAgendamentoInput | ReservaCreateManyAgendamentoInput[]
    skipDuplicates?: boolean
  }

  export type PrestadorUpsertWithoutAgendamentosInput = {
    update: XOR<PrestadorUpdateWithoutAgendamentosInput, PrestadorUncheckedUpdateWithoutAgendamentosInput>
    create: XOR<PrestadorCreateWithoutAgendamentosInput, PrestadorUncheckedCreateWithoutAgendamentosInput>
    where?: PrestadorWhereInput
  }

  export type PrestadorUpdateToOneWithWhereWithoutAgendamentosInput = {
    where?: PrestadorWhereInput
    data: XOR<PrestadorUpdateWithoutAgendamentosInput, PrestadorUncheckedUpdateWithoutAgendamentosInput>
  }

  export type PrestadorUpdateWithoutAgendamentosInput = {
    id_prestador?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    servicos?: NullableStringFieldUpdateOperationsInput | string | null
    servicos_list?: ServicoUpdateManyWithoutPrestadorNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutPrestadorNestedInput
  }

  export type PrestadorUncheckedUpdateWithoutAgendamentosInput = {
    id_prestador?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    servicos?: NullableStringFieldUpdateOperationsInput | string | null
    servicos_list?: ServicoUncheckedUpdateManyWithoutPrestadorNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutPrestadorNestedInput
  }

  export type ReservaUpsertWithWhereUniqueWithoutAgendamentoInput = {
    where: ReservaWhereUniqueInput
    update: XOR<ReservaUpdateWithoutAgendamentoInput, ReservaUncheckedUpdateWithoutAgendamentoInput>
    create: XOR<ReservaCreateWithoutAgendamentoInput, ReservaUncheckedCreateWithoutAgendamentoInput>
  }

  export type ReservaUpdateWithWhereUniqueWithoutAgendamentoInput = {
    where: ReservaWhereUniqueInput
    data: XOR<ReservaUpdateWithoutAgendamentoInput, ReservaUncheckedUpdateWithoutAgendamentoInput>
  }

  export type ReservaUpdateManyWithWhereWithoutAgendamentoInput = {
    where: ReservaScalarWhereInput
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyWithoutAgendamentoInput>
  }

  export type TutorCreateWithoutReservasInput = {
    id_tutor: string
    nome?: string | null
    email?: string | null
    telefone?: string | null
    endereco?: string | null
    senha?: string | null
    pets?: PetCreateNestedManyWithoutTutorInput
    notificacoes?: NotificacaoCreateNestedManyWithoutTutorInput
  }

  export type TutorUncheckedCreateWithoutReservasInput = {
    id_tutor: string
    nome?: string | null
    email?: string | null
    telefone?: string | null
    endereco?: string | null
    senha?: string | null
    pets?: PetUncheckedCreateNestedManyWithoutTutorInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutTutorInput
  }

  export type TutorCreateOrConnectWithoutReservasInput = {
    where: TutorWhereUniqueInput
    create: XOR<TutorCreateWithoutReservasInput, TutorUncheckedCreateWithoutReservasInput>
  }

  export type PetCreateWithoutReservasInput = {
    id_pet: string
    nome?: string | null
    especie?: string | null
    raca?: string | null
    idade?: number | null
    restricoes?: string | null
    tutor?: TutorCreateNestedOneWithoutPetsInput
  }

  export type PetUncheckedCreateWithoutReservasInput = {
    id_pet: string
    id_tutor?: string | null
    nome?: string | null
    especie?: string | null
    raca?: string | null
    idade?: number | null
    restricoes?: string | null
  }

  export type PetCreateOrConnectWithoutReservasInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutReservasInput, PetUncheckedCreateWithoutReservasInput>
  }

  export type ServicoCreateWithoutReservasInput = {
    id_servico: string
    descricao?: string | null
    titulo?: string | null
    preco?: number | null
    tipo?: string | null
    prestador?: PrestadorCreateNestedOneWithoutServicos_listInput
  }

  export type ServicoUncheckedCreateWithoutReservasInput = {
    id_servico: string
    id_prestador?: string | null
    descricao?: string | null
    titulo?: string | null
    preco?: number | null
    tipo?: string | null
  }

  export type ServicoCreateOrConnectWithoutReservasInput = {
    where: ServicoWhereUniqueInput
    create: XOR<ServicoCreateWithoutReservasInput, ServicoUncheckedCreateWithoutReservasInput>
  }

  export type AgendamentoCreateWithoutReservasInput = {
    id_agendamento: string
    data_inicio?: Date | string | null
    data_fim?: Date | string | null
    disponivel?: boolean | null
    prestador?: PrestadorCreateNestedOneWithoutAgendamentosInput
  }

  export type AgendamentoUncheckedCreateWithoutReservasInput = {
    id_agendamento: string
    id_prestador?: string | null
    data_inicio?: Date | string | null
    data_fim?: Date | string | null
    disponivel?: boolean | null
  }

  export type AgendamentoCreateOrConnectWithoutReservasInput = {
    where: AgendamentoWhereUniqueInput
    create: XOR<AgendamentoCreateWithoutReservasInput, AgendamentoUncheckedCreateWithoutReservasInput>
  }

  export type AvaliacaoCreateWithoutReservaInput = {
    id_avaliacao: string
    nota?: number | null
    comentario?: string | null
    data_avaliacao?: Date | string | null
  }

  export type AvaliacaoUncheckedCreateWithoutReservaInput = {
    id_avaliacao: string
    nota?: number | null
    comentario?: string | null
    data_avaliacao?: Date | string | null
  }

  export type AvaliacaoCreateOrConnectWithoutReservaInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutReservaInput, AvaliacaoUncheckedCreateWithoutReservaInput>
  }

  export type AvaliacaoCreateManyReservaInputEnvelope = {
    data: AvaliacaoCreateManyReservaInput | AvaliacaoCreateManyReservaInput[]
    skipDuplicates?: boolean
  }

  export type PagamentoCreateWithoutReservaInput = {
    id_pagamento: string
    valor?: number | null
    forma_pagamento?: string | null
    gorjeta?: number | null
    status?: string | null
    data_pagamento?: Date | string | null
  }

  export type PagamentoUncheckedCreateWithoutReservaInput = {
    id_pagamento: string
    valor?: number | null
    forma_pagamento?: string | null
    gorjeta?: number | null
    status?: string | null
    data_pagamento?: Date | string | null
  }

  export type PagamentoCreateOrConnectWithoutReservaInput = {
    where: PagamentoWhereUniqueInput
    create: XOR<PagamentoCreateWithoutReservaInput, PagamentoUncheckedCreateWithoutReservaInput>
  }

  export type PagamentoCreateManyReservaInputEnvelope = {
    data: PagamentoCreateManyReservaInput | PagamentoCreateManyReservaInput[]
    skipDuplicates?: boolean
  }

  export type MidiaCreateWithoutReservaInput = {
    id_midia: string
    tipo?: string | null
    caminho_arquivo?: string | null
    data_envio?: Date | string | null
  }

  export type MidiaUncheckedCreateWithoutReservaInput = {
    id_midia: string
    tipo?: string | null
    caminho_arquivo?: string | null
    data_envio?: Date | string | null
  }

  export type MidiaCreateOrConnectWithoutReservaInput = {
    where: MidiaWhereUniqueInput
    create: XOR<MidiaCreateWithoutReservaInput, MidiaUncheckedCreateWithoutReservaInput>
  }

  export type MidiaCreateManyReservaInputEnvelope = {
    data: MidiaCreateManyReservaInput | MidiaCreateManyReservaInput[]
    skipDuplicates?: boolean
  }

  export type TutorUpsertWithoutReservasInput = {
    update: XOR<TutorUpdateWithoutReservasInput, TutorUncheckedUpdateWithoutReservasInput>
    create: XOR<TutorCreateWithoutReservasInput, TutorUncheckedCreateWithoutReservasInput>
    where?: TutorWhereInput
  }

  export type TutorUpdateToOneWithWhereWithoutReservasInput = {
    where?: TutorWhereInput
    data: XOR<TutorUpdateWithoutReservasInput, TutorUncheckedUpdateWithoutReservasInput>
  }

  export type TutorUpdateWithoutReservasInput = {
    id_tutor?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    pets?: PetUpdateManyWithoutTutorNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutTutorNestedInput
  }

  export type TutorUncheckedUpdateWithoutReservasInput = {
    id_tutor?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    pets?: PetUncheckedUpdateManyWithoutTutorNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutTutorNestedInput
  }

  export type PetUpsertWithoutReservasInput = {
    update: XOR<PetUpdateWithoutReservasInput, PetUncheckedUpdateWithoutReservasInput>
    create: XOR<PetCreateWithoutReservasInput, PetUncheckedCreateWithoutReservasInput>
    where?: PetWhereInput
  }

  export type PetUpdateToOneWithWhereWithoutReservasInput = {
    where?: PetWhereInput
    data: XOR<PetUpdateWithoutReservasInput, PetUncheckedUpdateWithoutReservasInput>
  }

  export type PetUpdateWithoutReservasInput = {
    id_pet?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    especie?: NullableStringFieldUpdateOperationsInput | string | null
    raca?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    restricoes?: NullableStringFieldUpdateOperationsInput | string | null
    tutor?: TutorUpdateOneWithoutPetsNestedInput
  }

  export type PetUncheckedUpdateWithoutReservasInput = {
    id_pet?: StringFieldUpdateOperationsInput | string
    id_tutor?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    especie?: NullableStringFieldUpdateOperationsInput | string | null
    raca?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    restricoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServicoUpsertWithoutReservasInput = {
    update: XOR<ServicoUpdateWithoutReservasInput, ServicoUncheckedUpdateWithoutReservasInput>
    create: XOR<ServicoCreateWithoutReservasInput, ServicoUncheckedCreateWithoutReservasInput>
    where?: ServicoWhereInput
  }

  export type ServicoUpdateToOneWithWhereWithoutReservasInput = {
    where?: ServicoWhereInput
    data: XOR<ServicoUpdateWithoutReservasInput, ServicoUncheckedUpdateWithoutReservasInput>
  }

  export type ServicoUpdateWithoutReservasInput = {
    id_servico?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    prestador?: PrestadorUpdateOneWithoutServicos_listNestedInput
  }

  export type ServicoUncheckedUpdateWithoutReservasInput = {
    id_servico?: StringFieldUpdateOperationsInput | string
    id_prestador?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgendamentoUpsertWithoutReservasInput = {
    update: XOR<AgendamentoUpdateWithoutReservasInput, AgendamentoUncheckedUpdateWithoutReservasInput>
    create: XOR<AgendamentoCreateWithoutReservasInput, AgendamentoUncheckedCreateWithoutReservasInput>
    where?: AgendamentoWhereInput
  }

  export type AgendamentoUpdateToOneWithWhereWithoutReservasInput = {
    where?: AgendamentoWhereInput
    data: XOR<AgendamentoUpdateWithoutReservasInput, AgendamentoUncheckedUpdateWithoutReservasInput>
  }

  export type AgendamentoUpdateWithoutReservasInput = {
    id_agendamento?: StringFieldUpdateOperationsInput | string
    data_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disponivel?: NullableBoolFieldUpdateOperationsInput | boolean | null
    prestador?: PrestadorUpdateOneWithoutAgendamentosNestedInput
  }

  export type AgendamentoUncheckedUpdateWithoutReservasInput = {
    id_agendamento?: StringFieldUpdateOperationsInput | string
    id_prestador?: NullableStringFieldUpdateOperationsInput | string | null
    data_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disponivel?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type AvaliacaoUpsertWithWhereUniqueWithoutReservaInput = {
    where: AvaliacaoWhereUniqueInput
    update: XOR<AvaliacaoUpdateWithoutReservaInput, AvaliacaoUncheckedUpdateWithoutReservaInput>
    create: XOR<AvaliacaoCreateWithoutReservaInput, AvaliacaoUncheckedCreateWithoutReservaInput>
  }

  export type AvaliacaoUpdateWithWhereUniqueWithoutReservaInput = {
    where: AvaliacaoWhereUniqueInput
    data: XOR<AvaliacaoUpdateWithoutReservaInput, AvaliacaoUncheckedUpdateWithoutReservaInput>
  }

  export type AvaliacaoUpdateManyWithWhereWithoutReservaInput = {
    where: AvaliacaoScalarWhereInput
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyWithoutReservaInput>
  }

  export type AvaliacaoScalarWhereInput = {
    AND?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    OR?: AvaliacaoScalarWhereInput[]
    NOT?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    id_avaliacao?: StringFilter<"Avaliacao"> | string
    id_reserva?: StringNullableFilter<"Avaliacao"> | string | null
    nota?: IntNullableFilter<"Avaliacao"> | number | null
    comentario?: StringNullableFilter<"Avaliacao"> | string | null
    data_avaliacao?: DateTimeNullableFilter<"Avaliacao"> | Date | string | null
  }

  export type PagamentoUpsertWithWhereUniqueWithoutReservaInput = {
    where: PagamentoWhereUniqueInput
    update: XOR<PagamentoUpdateWithoutReservaInput, PagamentoUncheckedUpdateWithoutReservaInput>
    create: XOR<PagamentoCreateWithoutReservaInput, PagamentoUncheckedCreateWithoutReservaInput>
  }

  export type PagamentoUpdateWithWhereUniqueWithoutReservaInput = {
    where: PagamentoWhereUniqueInput
    data: XOR<PagamentoUpdateWithoutReservaInput, PagamentoUncheckedUpdateWithoutReservaInput>
  }

  export type PagamentoUpdateManyWithWhereWithoutReservaInput = {
    where: PagamentoScalarWhereInput
    data: XOR<PagamentoUpdateManyMutationInput, PagamentoUncheckedUpdateManyWithoutReservaInput>
  }

  export type PagamentoScalarWhereInput = {
    AND?: PagamentoScalarWhereInput | PagamentoScalarWhereInput[]
    OR?: PagamentoScalarWhereInput[]
    NOT?: PagamentoScalarWhereInput | PagamentoScalarWhereInput[]
    id_pagamento?: StringFilter<"Pagamento"> | string
    id_reserva?: StringNullableFilter<"Pagamento"> | string | null
    valor?: FloatNullableFilter<"Pagamento"> | number | null
    forma_pagamento?: StringNullableFilter<"Pagamento"> | string | null
    gorjeta?: FloatNullableFilter<"Pagamento"> | number | null
    status?: StringNullableFilter<"Pagamento"> | string | null
    data_pagamento?: DateTimeNullableFilter<"Pagamento"> | Date | string | null
  }

  export type MidiaUpsertWithWhereUniqueWithoutReservaInput = {
    where: MidiaWhereUniqueInput
    update: XOR<MidiaUpdateWithoutReservaInput, MidiaUncheckedUpdateWithoutReservaInput>
    create: XOR<MidiaCreateWithoutReservaInput, MidiaUncheckedCreateWithoutReservaInput>
  }

  export type MidiaUpdateWithWhereUniqueWithoutReservaInput = {
    where: MidiaWhereUniqueInput
    data: XOR<MidiaUpdateWithoutReservaInput, MidiaUncheckedUpdateWithoutReservaInput>
  }

  export type MidiaUpdateManyWithWhereWithoutReservaInput = {
    where: MidiaScalarWhereInput
    data: XOR<MidiaUpdateManyMutationInput, MidiaUncheckedUpdateManyWithoutReservaInput>
  }

  export type MidiaScalarWhereInput = {
    AND?: MidiaScalarWhereInput | MidiaScalarWhereInput[]
    OR?: MidiaScalarWhereInput[]
    NOT?: MidiaScalarWhereInput | MidiaScalarWhereInput[]
    id_midia?: StringFilter<"Midia"> | string
    id_reserva?: StringNullableFilter<"Midia"> | string | null
    tipo?: StringNullableFilter<"Midia"> | string | null
    caminho_arquivo?: StringNullableFilter<"Midia"> | string | null
    data_envio?: DateTimeNullableFilter<"Midia"> | Date | string | null
  }

  export type ReservaCreateWithoutAvaliacoesInput = {
    id_reserva: string
    status?: string | null
    data_reserva?: Date | string | null
    valor?: number | null
    tutor?: TutorCreateNestedOneWithoutReservasInput
    pet?: PetCreateNestedOneWithoutReservasInput
    servico?: ServicoCreateNestedOneWithoutReservasInput
    agendamento?: AgendamentoCreateNestedOneWithoutReservasInput
    pagamentos?: PagamentoCreateNestedManyWithoutReservaInput
    midias?: MidiaCreateNestedManyWithoutReservaInput
  }

  export type ReservaUncheckedCreateWithoutAvaliacoesInput = {
    id_reserva: string
    id_tutor?: string | null
    id_pet?: string | null
    id_servico?: string | null
    id_agendamento?: string | null
    status?: string | null
    data_reserva?: Date | string | null
    valor?: number | null
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutReservaInput
    midias?: MidiaUncheckedCreateNestedManyWithoutReservaInput
  }

  export type ReservaCreateOrConnectWithoutAvaliacoesInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutAvaliacoesInput, ReservaUncheckedCreateWithoutAvaliacoesInput>
  }

  export type ReservaUpsertWithoutAvaliacoesInput = {
    update: XOR<ReservaUpdateWithoutAvaliacoesInput, ReservaUncheckedUpdateWithoutAvaliacoesInput>
    create: XOR<ReservaCreateWithoutAvaliacoesInput, ReservaUncheckedCreateWithoutAvaliacoesInput>
    where?: ReservaWhereInput
  }

  export type ReservaUpdateToOneWithWhereWithoutAvaliacoesInput = {
    where?: ReservaWhereInput
    data: XOR<ReservaUpdateWithoutAvaliacoesInput, ReservaUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type ReservaUpdateWithoutAvaliacoesInput = {
    id_reserva?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    tutor?: TutorUpdateOneWithoutReservasNestedInput
    pet?: PetUpdateOneWithoutReservasNestedInput
    servico?: ServicoUpdateOneWithoutReservasNestedInput
    agendamento?: AgendamentoUpdateOneWithoutReservasNestedInput
    pagamentos?: PagamentoUpdateManyWithoutReservaNestedInput
    midias?: MidiaUpdateManyWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateWithoutAvaliacoesInput = {
    id_reserva?: StringFieldUpdateOperationsInput | string
    id_tutor?: NullableStringFieldUpdateOperationsInput | string | null
    id_pet?: NullableStringFieldUpdateOperationsInput | string | null
    id_servico?: NullableStringFieldUpdateOperationsInput | string | null
    id_agendamento?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    pagamentos?: PagamentoUncheckedUpdateManyWithoutReservaNestedInput
    midias?: MidiaUncheckedUpdateManyWithoutReservaNestedInput
  }

  export type ReservaCreateWithoutPagamentosInput = {
    id_reserva: string
    status?: string | null
    data_reserva?: Date | string | null
    valor?: number | null
    tutor?: TutorCreateNestedOneWithoutReservasInput
    pet?: PetCreateNestedOneWithoutReservasInput
    servico?: ServicoCreateNestedOneWithoutReservasInput
    agendamento?: AgendamentoCreateNestedOneWithoutReservasInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutReservaInput
    midias?: MidiaCreateNestedManyWithoutReservaInput
  }

  export type ReservaUncheckedCreateWithoutPagamentosInput = {
    id_reserva: string
    id_tutor?: string | null
    id_pet?: string | null
    id_servico?: string | null
    id_agendamento?: string | null
    status?: string | null
    data_reserva?: Date | string | null
    valor?: number | null
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutReservaInput
    midias?: MidiaUncheckedCreateNestedManyWithoutReservaInput
  }

  export type ReservaCreateOrConnectWithoutPagamentosInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutPagamentosInput, ReservaUncheckedCreateWithoutPagamentosInput>
  }

  export type ReservaUpsertWithoutPagamentosInput = {
    update: XOR<ReservaUpdateWithoutPagamentosInput, ReservaUncheckedUpdateWithoutPagamentosInput>
    create: XOR<ReservaCreateWithoutPagamentosInput, ReservaUncheckedCreateWithoutPagamentosInput>
    where?: ReservaWhereInput
  }

  export type ReservaUpdateToOneWithWhereWithoutPagamentosInput = {
    where?: ReservaWhereInput
    data: XOR<ReservaUpdateWithoutPagamentosInput, ReservaUncheckedUpdateWithoutPagamentosInput>
  }

  export type ReservaUpdateWithoutPagamentosInput = {
    id_reserva?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    tutor?: TutorUpdateOneWithoutReservasNestedInput
    pet?: PetUpdateOneWithoutReservasNestedInput
    servico?: ServicoUpdateOneWithoutReservasNestedInput
    agendamento?: AgendamentoUpdateOneWithoutReservasNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutReservaNestedInput
    midias?: MidiaUpdateManyWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateWithoutPagamentosInput = {
    id_reserva?: StringFieldUpdateOperationsInput | string
    id_tutor?: NullableStringFieldUpdateOperationsInput | string | null
    id_pet?: NullableStringFieldUpdateOperationsInput | string | null
    id_servico?: NullableStringFieldUpdateOperationsInput | string | null
    id_agendamento?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutReservaNestedInput
    midias?: MidiaUncheckedUpdateManyWithoutReservaNestedInput
  }

  export type ReservaCreateWithoutMidiasInput = {
    id_reserva: string
    status?: string | null
    data_reserva?: Date | string | null
    valor?: number | null
    tutor?: TutorCreateNestedOneWithoutReservasInput
    pet?: PetCreateNestedOneWithoutReservasInput
    servico?: ServicoCreateNestedOneWithoutReservasInput
    agendamento?: AgendamentoCreateNestedOneWithoutReservasInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutReservaInput
    pagamentos?: PagamentoCreateNestedManyWithoutReservaInput
  }

  export type ReservaUncheckedCreateWithoutMidiasInput = {
    id_reserva: string
    id_tutor?: string | null
    id_pet?: string | null
    id_servico?: string | null
    id_agendamento?: string | null
    status?: string | null
    data_reserva?: Date | string | null
    valor?: number | null
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutReservaInput
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutReservaInput
  }

  export type ReservaCreateOrConnectWithoutMidiasInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutMidiasInput, ReservaUncheckedCreateWithoutMidiasInput>
  }

  export type ReservaUpsertWithoutMidiasInput = {
    update: XOR<ReservaUpdateWithoutMidiasInput, ReservaUncheckedUpdateWithoutMidiasInput>
    create: XOR<ReservaCreateWithoutMidiasInput, ReservaUncheckedCreateWithoutMidiasInput>
    where?: ReservaWhereInput
  }

  export type ReservaUpdateToOneWithWhereWithoutMidiasInput = {
    where?: ReservaWhereInput
    data: XOR<ReservaUpdateWithoutMidiasInput, ReservaUncheckedUpdateWithoutMidiasInput>
  }

  export type ReservaUpdateWithoutMidiasInput = {
    id_reserva?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    tutor?: TutorUpdateOneWithoutReservasNestedInput
    pet?: PetUpdateOneWithoutReservasNestedInput
    servico?: ServicoUpdateOneWithoutReservasNestedInput
    agendamento?: AgendamentoUpdateOneWithoutReservasNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutReservaNestedInput
    pagamentos?: PagamentoUpdateManyWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateWithoutMidiasInput = {
    id_reserva?: StringFieldUpdateOperationsInput | string
    id_tutor?: NullableStringFieldUpdateOperationsInput | string | null
    id_pet?: NullableStringFieldUpdateOperationsInput | string | null
    id_servico?: NullableStringFieldUpdateOperationsInput | string | null
    id_agendamento?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutReservaNestedInput
    pagamentos?: PagamentoUncheckedUpdateManyWithoutReservaNestedInput
  }

  export type TutorCreateWithoutNotificacoesInput = {
    id_tutor: string
    nome?: string | null
    email?: string | null
    telefone?: string | null
    endereco?: string | null
    senha?: string | null
    pets?: PetCreateNestedManyWithoutTutorInput
    reservas?: ReservaCreateNestedManyWithoutTutorInput
  }

  export type TutorUncheckedCreateWithoutNotificacoesInput = {
    id_tutor: string
    nome?: string | null
    email?: string | null
    telefone?: string | null
    endereco?: string | null
    senha?: string | null
    pets?: PetUncheckedCreateNestedManyWithoutTutorInput
    reservas?: ReservaUncheckedCreateNestedManyWithoutTutorInput
  }

  export type TutorCreateOrConnectWithoutNotificacoesInput = {
    where: TutorWhereUniqueInput
    create: XOR<TutorCreateWithoutNotificacoesInput, TutorUncheckedCreateWithoutNotificacoesInput>
  }

  export type PrestadorCreateWithoutNotificacoesInput = {
    id_prestador: string
    nome?: string | null
    email?: string | null
    telefone?: string | null
    endereco?: string | null
    senha?: string | null
    servicos?: string | null
    servicos_list?: ServicoCreateNestedManyWithoutPrestadorInput
    agendamentos?: AgendamentoCreateNestedManyWithoutPrestadorInput
  }

  export type PrestadorUncheckedCreateWithoutNotificacoesInput = {
    id_prestador: string
    nome?: string | null
    email?: string | null
    telefone?: string | null
    endereco?: string | null
    senha?: string | null
    servicos?: string | null
    servicos_list?: ServicoUncheckedCreateNestedManyWithoutPrestadorInput
    agendamentos?: AgendamentoUncheckedCreateNestedManyWithoutPrestadorInput
  }

  export type PrestadorCreateOrConnectWithoutNotificacoesInput = {
    where: PrestadorWhereUniqueInput
    create: XOR<PrestadorCreateWithoutNotificacoesInput, PrestadorUncheckedCreateWithoutNotificacoesInput>
  }

  export type TutorUpsertWithoutNotificacoesInput = {
    update: XOR<TutorUpdateWithoutNotificacoesInput, TutorUncheckedUpdateWithoutNotificacoesInput>
    create: XOR<TutorCreateWithoutNotificacoesInput, TutorUncheckedCreateWithoutNotificacoesInput>
    where?: TutorWhereInput
  }

  export type TutorUpdateToOneWithWhereWithoutNotificacoesInput = {
    where?: TutorWhereInput
    data: XOR<TutorUpdateWithoutNotificacoesInput, TutorUncheckedUpdateWithoutNotificacoesInput>
  }

  export type TutorUpdateWithoutNotificacoesInput = {
    id_tutor?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    pets?: PetUpdateManyWithoutTutorNestedInput
    reservas?: ReservaUpdateManyWithoutTutorNestedInput
  }

  export type TutorUncheckedUpdateWithoutNotificacoesInput = {
    id_tutor?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    pets?: PetUncheckedUpdateManyWithoutTutorNestedInput
    reservas?: ReservaUncheckedUpdateManyWithoutTutorNestedInput
  }

  export type PrestadorUpsertWithoutNotificacoesInput = {
    update: XOR<PrestadorUpdateWithoutNotificacoesInput, PrestadorUncheckedUpdateWithoutNotificacoesInput>
    create: XOR<PrestadorCreateWithoutNotificacoesInput, PrestadorUncheckedCreateWithoutNotificacoesInput>
    where?: PrestadorWhereInput
  }

  export type PrestadorUpdateToOneWithWhereWithoutNotificacoesInput = {
    where?: PrestadorWhereInput
    data: XOR<PrestadorUpdateWithoutNotificacoesInput, PrestadorUncheckedUpdateWithoutNotificacoesInput>
  }

  export type PrestadorUpdateWithoutNotificacoesInput = {
    id_prestador?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    servicos?: NullableStringFieldUpdateOperationsInput | string | null
    servicos_list?: ServicoUpdateManyWithoutPrestadorNestedInput
    agendamentos?: AgendamentoUpdateManyWithoutPrestadorNestedInput
  }

  export type PrestadorUncheckedUpdateWithoutNotificacoesInput = {
    id_prestador?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    servicos?: NullableStringFieldUpdateOperationsInput | string | null
    servicos_list?: ServicoUncheckedUpdateManyWithoutPrestadorNestedInput
    agendamentos?: AgendamentoUncheckedUpdateManyWithoutPrestadorNestedInput
  }

  export type PetCreateManyTutorInput = {
    id_pet: string
    nome?: string | null
    especie?: string | null
    raca?: string | null
    idade?: number | null
    restricoes?: string | null
  }

  export type ReservaCreateManyTutorInput = {
    id_reserva: string
    id_pet?: string | null
    id_servico?: string | null
    id_agendamento?: string | null
    status?: string | null
    data_reserva?: Date | string | null
    valor?: number | null
  }

  export type NotificacaoCreateManyTutorInput = {
    id_notificacao: string
    id_prestador?: string | null
    mensagem?: string | null
    data_envio?: Date | string | null
    lida?: boolean | null
  }

  export type PetUpdateWithoutTutorInput = {
    id_pet?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    especie?: NullableStringFieldUpdateOperationsInput | string | null
    raca?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    restricoes?: NullableStringFieldUpdateOperationsInput | string | null
    reservas?: ReservaUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateWithoutTutorInput = {
    id_pet?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    especie?: NullableStringFieldUpdateOperationsInput | string | null
    raca?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    restricoes?: NullableStringFieldUpdateOperationsInput | string | null
    reservas?: ReservaUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateManyWithoutTutorInput = {
    id_pet?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    especie?: NullableStringFieldUpdateOperationsInput | string | null
    raca?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    restricoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReservaUpdateWithoutTutorInput = {
    id_reserva?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    pet?: PetUpdateOneWithoutReservasNestedInput
    servico?: ServicoUpdateOneWithoutReservasNestedInput
    agendamento?: AgendamentoUpdateOneWithoutReservasNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutReservaNestedInput
    pagamentos?: PagamentoUpdateManyWithoutReservaNestedInput
    midias?: MidiaUpdateManyWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateWithoutTutorInput = {
    id_reserva?: StringFieldUpdateOperationsInput | string
    id_pet?: NullableStringFieldUpdateOperationsInput | string | null
    id_servico?: NullableStringFieldUpdateOperationsInput | string | null
    id_agendamento?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutReservaNestedInput
    pagamentos?: PagamentoUncheckedUpdateManyWithoutReservaNestedInput
    midias?: MidiaUncheckedUpdateManyWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateManyWithoutTutorInput = {
    id_reserva?: StringFieldUpdateOperationsInput | string
    id_pet?: NullableStringFieldUpdateOperationsInput | string | null
    id_servico?: NullableStringFieldUpdateOperationsInput | string | null
    id_agendamento?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type NotificacaoUpdateWithoutTutorInput = {
    id_notificacao?: StringFieldUpdateOperationsInput | string
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    data_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
    prestador?: PrestadorUpdateOneWithoutNotificacoesNestedInput
  }

  export type NotificacaoUncheckedUpdateWithoutTutorInput = {
    id_notificacao?: StringFieldUpdateOperationsInput | string
    id_prestador?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    data_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type NotificacaoUncheckedUpdateManyWithoutTutorInput = {
    id_notificacao?: StringFieldUpdateOperationsInput | string
    id_prestador?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    data_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ServicoCreateManyPrestadorInput = {
    id_servico: string
    descricao?: string | null
    titulo?: string | null
    preco?: number | null
    tipo?: string | null
  }

  export type AgendamentoCreateManyPrestadorInput = {
    id_agendamento: string
    data_inicio?: Date | string | null
    data_fim?: Date | string | null
    disponivel?: boolean | null
  }

  export type NotificacaoCreateManyPrestadorInput = {
    id_notificacao: string
    id_tutor?: string | null
    mensagem?: string | null
    data_envio?: Date | string | null
    lida?: boolean | null
  }

  export type ServicoUpdateWithoutPrestadorInput = {
    id_servico?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    reservas?: ReservaUpdateManyWithoutServicoNestedInput
  }

  export type ServicoUncheckedUpdateWithoutPrestadorInput = {
    id_servico?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    reservas?: ReservaUncheckedUpdateManyWithoutServicoNestedInput
  }

  export type ServicoUncheckedUpdateManyWithoutPrestadorInput = {
    id_servico?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgendamentoUpdateWithoutPrestadorInput = {
    id_agendamento?: StringFieldUpdateOperationsInput | string
    data_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disponivel?: NullableBoolFieldUpdateOperationsInput | boolean | null
    reservas?: ReservaUpdateManyWithoutAgendamentoNestedInput
  }

  export type AgendamentoUncheckedUpdateWithoutPrestadorInput = {
    id_agendamento?: StringFieldUpdateOperationsInput | string
    data_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disponivel?: NullableBoolFieldUpdateOperationsInput | boolean | null
    reservas?: ReservaUncheckedUpdateManyWithoutAgendamentoNestedInput
  }

  export type AgendamentoUncheckedUpdateManyWithoutPrestadorInput = {
    id_agendamento?: StringFieldUpdateOperationsInput | string
    data_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disponivel?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type NotificacaoUpdateWithoutPrestadorInput = {
    id_notificacao?: StringFieldUpdateOperationsInput | string
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    data_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tutor?: TutorUpdateOneWithoutNotificacoesNestedInput
  }

  export type NotificacaoUncheckedUpdateWithoutPrestadorInput = {
    id_notificacao?: StringFieldUpdateOperationsInput | string
    id_tutor?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    data_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type NotificacaoUncheckedUpdateManyWithoutPrestadorInput = {
    id_notificacao?: StringFieldUpdateOperationsInput | string
    id_tutor?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem?: NullableStringFieldUpdateOperationsInput | string | null
    data_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lida?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ReservaCreateManyPetInput = {
    id_reserva: string
    id_tutor?: string | null
    id_servico?: string | null
    id_agendamento?: string | null
    status?: string | null
    data_reserva?: Date | string | null
    valor?: number | null
  }

  export type ReservaUpdateWithoutPetInput = {
    id_reserva?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    tutor?: TutorUpdateOneWithoutReservasNestedInput
    servico?: ServicoUpdateOneWithoutReservasNestedInput
    agendamento?: AgendamentoUpdateOneWithoutReservasNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutReservaNestedInput
    pagamentos?: PagamentoUpdateManyWithoutReservaNestedInput
    midias?: MidiaUpdateManyWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateWithoutPetInput = {
    id_reserva?: StringFieldUpdateOperationsInput | string
    id_tutor?: NullableStringFieldUpdateOperationsInput | string | null
    id_servico?: NullableStringFieldUpdateOperationsInput | string | null
    id_agendamento?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutReservaNestedInput
    pagamentos?: PagamentoUncheckedUpdateManyWithoutReservaNestedInput
    midias?: MidiaUncheckedUpdateManyWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateManyWithoutPetInput = {
    id_reserva?: StringFieldUpdateOperationsInput | string
    id_tutor?: NullableStringFieldUpdateOperationsInput | string | null
    id_servico?: NullableStringFieldUpdateOperationsInput | string | null
    id_agendamento?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ReservaCreateManyServicoInput = {
    id_reserva: string
    id_tutor?: string | null
    id_pet?: string | null
    id_agendamento?: string | null
    status?: string | null
    data_reserva?: Date | string | null
    valor?: number | null
  }

  export type ReservaUpdateWithoutServicoInput = {
    id_reserva?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    tutor?: TutorUpdateOneWithoutReservasNestedInput
    pet?: PetUpdateOneWithoutReservasNestedInput
    agendamento?: AgendamentoUpdateOneWithoutReservasNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutReservaNestedInput
    pagamentos?: PagamentoUpdateManyWithoutReservaNestedInput
    midias?: MidiaUpdateManyWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateWithoutServicoInput = {
    id_reserva?: StringFieldUpdateOperationsInput | string
    id_tutor?: NullableStringFieldUpdateOperationsInput | string | null
    id_pet?: NullableStringFieldUpdateOperationsInput | string | null
    id_agendamento?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutReservaNestedInput
    pagamentos?: PagamentoUncheckedUpdateManyWithoutReservaNestedInput
    midias?: MidiaUncheckedUpdateManyWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateManyWithoutServicoInput = {
    id_reserva?: StringFieldUpdateOperationsInput | string
    id_tutor?: NullableStringFieldUpdateOperationsInput | string | null
    id_pet?: NullableStringFieldUpdateOperationsInput | string | null
    id_agendamento?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ReservaCreateManyAgendamentoInput = {
    id_reserva: string
    id_tutor?: string | null
    id_pet?: string | null
    id_servico?: string | null
    status?: string | null
    data_reserva?: Date | string | null
    valor?: number | null
  }

  export type ReservaUpdateWithoutAgendamentoInput = {
    id_reserva?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    tutor?: TutorUpdateOneWithoutReservasNestedInput
    pet?: PetUpdateOneWithoutReservasNestedInput
    servico?: ServicoUpdateOneWithoutReservasNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutReservaNestedInput
    pagamentos?: PagamentoUpdateManyWithoutReservaNestedInput
    midias?: MidiaUpdateManyWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateWithoutAgendamentoInput = {
    id_reserva?: StringFieldUpdateOperationsInput | string
    id_tutor?: NullableStringFieldUpdateOperationsInput | string | null
    id_pet?: NullableStringFieldUpdateOperationsInput | string | null
    id_servico?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutReservaNestedInput
    pagamentos?: PagamentoUncheckedUpdateManyWithoutReservaNestedInput
    midias?: MidiaUncheckedUpdateManyWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateManyWithoutAgendamentoInput = {
    id_reserva?: StringFieldUpdateOperationsInput | string
    id_tutor?: NullableStringFieldUpdateOperationsInput | string | null
    id_pet?: NullableStringFieldUpdateOperationsInput | string | null
    id_servico?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AvaliacaoCreateManyReservaInput = {
    id_avaliacao: string
    nota?: number | null
    comentario?: string | null
    data_avaliacao?: Date | string | null
  }

  export type PagamentoCreateManyReservaInput = {
    id_pagamento: string
    valor?: number | null
    forma_pagamento?: string | null
    gorjeta?: number | null
    status?: string | null
    data_pagamento?: Date | string | null
  }

  export type MidiaCreateManyReservaInput = {
    id_midia: string
    tipo?: string | null
    caminho_arquivo?: string | null
    data_envio?: Date | string | null
  }

  export type AvaliacaoUpdateWithoutReservaInput = {
    id_avaliacao?: StringFieldUpdateOperationsInput | string
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    data_avaliacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AvaliacaoUncheckedUpdateWithoutReservaInput = {
    id_avaliacao?: StringFieldUpdateOperationsInput | string
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    data_avaliacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AvaliacaoUncheckedUpdateManyWithoutReservaInput = {
    id_avaliacao?: StringFieldUpdateOperationsInput | string
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    data_avaliacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PagamentoUpdateWithoutReservaInput = {
    id_pagamento?: StringFieldUpdateOperationsInput | string
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    gorjeta?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PagamentoUncheckedUpdateWithoutReservaInput = {
    id_pagamento?: StringFieldUpdateOperationsInput | string
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    gorjeta?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PagamentoUncheckedUpdateManyWithoutReservaInput = {
    id_pagamento?: StringFieldUpdateOperationsInput | string
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    gorjeta?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MidiaUpdateWithoutReservaInput = {
    id_midia?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    caminho_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    data_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MidiaUncheckedUpdateWithoutReservaInput = {
    id_midia?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    caminho_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    data_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MidiaUncheckedUpdateManyWithoutReservaInput = {
    id_midia?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    caminho_arquivo?: NullableStringFieldUpdateOperationsInput | string | null
    data_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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