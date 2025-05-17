
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
 * Model AuthSession
 * 
 */
export type AuthSession = $Result.DefaultSelection<Prisma.$AuthSessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Quiz
 * 
 */
export type Quiz = $Result.DefaultSelection<Prisma.$QuizPayload>
/**
 * Model QuizQuestion
 * 
 */
export type QuizQuestion = $Result.DefaultSelection<Prisma.$QuizQuestionPayload>
/**
 * Model QuestionAnswerOption
 * 
 */
export type QuestionAnswerOption = $Result.DefaultSelection<Prisma.$QuestionAnswerOptionPayload>
/**
 * Model QuizSession
 * 
 */
export type QuizSession = $Result.DefaultSelection<Prisma.$QuizSessionPayload>
/**
 * Model SessionParticipant
 * 
 */
export type SessionParticipant = $Result.DefaultSelection<Prisma.$SessionParticipantPayload>
/**
 * Model QuestionResponse
 * 
 */
export type QuestionResponse = $Result.DefaultSelection<Prisma.$QuestionResponsePayload>
/**
 * Model QuizCategory
 * 
 */
export type QuizCategory = $Result.DefaultSelection<Prisma.$QuizCategoryPayload>
/**
 * Model QuizLeaderboard
 * 
 */
export type QuizLeaderboard = $Result.DefaultSelection<Prisma.$QuizLeaderboardPayload>
/**
 * Model SessionInvitation
 * 
 */
export type SessionInvitation = $Result.DefaultSelection<Prisma.$SessionInvitationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  PLAYER: 'PLAYER',
  HOST: 'HOST',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const QuestionType: {
  MULTIPLE_CHOICE: 'MULTIPLE_CHOICE',
  TRUE_FALSE: 'TRUE_FALSE'
};

export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType]


export const QuizType: {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE'
};

export type QuizType = (typeof QuizType)[keyof typeof QuizType]


export const SessionStatus: {
  WAITING: 'WAITING',
  STARTED: 'STARTED',
  FINISHED: 'FINISHED'
};

export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type QuestionType = $Enums.QuestionType

export const QuestionType: typeof $Enums.QuestionType

export type QuizType = $Enums.QuizType

export const QuizType: typeof $Enums.QuizType

export type SessionStatus = $Enums.SessionStatus

export const SessionStatus: typeof $Enums.SessionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AuthSessions
 * const authSessions = await prisma.authSession.findMany()
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
   * // Fetch zero or more AuthSessions
   * const authSessions = await prisma.authSession.findMany()
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
   * `prisma.authSession`: Exposes CRUD operations for the **AuthSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthSessions
    * const authSessions = await prisma.authSession.findMany()
    * ```
    */
  get authSession(): Prisma.AuthSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quiz`: Exposes CRUD operations for the **Quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quiz.findMany()
    * ```
    */
  get quiz(): Prisma.QuizDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizQuestion`: Exposes CRUD operations for the **QuizQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizQuestions
    * const quizQuestions = await prisma.quizQuestion.findMany()
    * ```
    */
  get quizQuestion(): Prisma.QuizQuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questionAnswerOption`: Exposes CRUD operations for the **QuestionAnswerOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionAnswerOptions
    * const questionAnswerOptions = await prisma.questionAnswerOption.findMany()
    * ```
    */
  get questionAnswerOption(): Prisma.QuestionAnswerOptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizSession`: Exposes CRUD operations for the **QuizSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizSessions
    * const quizSessions = await prisma.quizSession.findMany()
    * ```
    */
  get quizSession(): Prisma.QuizSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessionParticipant`: Exposes CRUD operations for the **SessionParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SessionParticipants
    * const sessionParticipants = await prisma.sessionParticipant.findMany()
    * ```
    */
  get sessionParticipant(): Prisma.SessionParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questionResponse`: Exposes CRUD operations for the **QuestionResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionResponses
    * const questionResponses = await prisma.questionResponse.findMany()
    * ```
    */
  get questionResponse(): Prisma.QuestionResponseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizCategory`: Exposes CRUD operations for the **QuizCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizCategories
    * const quizCategories = await prisma.quizCategory.findMany()
    * ```
    */
  get quizCategory(): Prisma.QuizCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizLeaderboard`: Exposes CRUD operations for the **QuizLeaderboard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizLeaderboards
    * const quizLeaderboards = await prisma.quizLeaderboard.findMany()
    * ```
    */
  get quizLeaderboard(): Prisma.QuizLeaderboardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessionInvitation`: Exposes CRUD operations for the **SessionInvitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SessionInvitations
    * const sessionInvitations = await prisma.sessionInvitation.findMany()
    * ```
    */
  get sessionInvitation(): Prisma.SessionInvitationDelegate<ExtArgs, ClientOptions>;
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
    AuthSession: 'AuthSession',
    User: 'User',
    Quiz: 'Quiz',
    QuizQuestion: 'QuizQuestion',
    QuestionAnswerOption: 'QuestionAnswerOption',
    QuizSession: 'QuizSession',
    SessionParticipant: 'SessionParticipant',
    QuestionResponse: 'QuestionResponse',
    QuizCategory: 'QuizCategory',
    QuizLeaderboard: 'QuizLeaderboard',
    SessionInvitation: 'SessionInvitation'
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
      modelProps: "authSession" | "user" | "quiz" | "quizQuestion" | "questionAnswerOption" | "quizSession" | "sessionParticipant" | "questionResponse" | "quizCategory" | "quizLeaderboard" | "sessionInvitation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AuthSession: {
        payload: Prisma.$AuthSessionPayload<ExtArgs>
        fields: Prisma.AuthSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          findFirst: {
            args: Prisma.AuthSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          findMany: {
            args: Prisma.AuthSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>[]
          }
          create: {
            args: Prisma.AuthSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          createMany: {
            args: Prisma.AuthSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>[]
          }
          delete: {
            args: Prisma.AuthSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          update: {
            args: Prisma.AuthSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          deleteMany: {
            args: Prisma.AuthSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>[]
          }
          upsert: {
            args: Prisma.AuthSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          aggregate: {
            args: Prisma.AuthSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthSession>
          }
          groupBy: {
            args: Prisma.AuthSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthSessionCountArgs<ExtArgs>
            result: $Utils.Optional<AuthSessionCountAggregateOutputType> | number
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Quiz: {
        payload: Prisma.$QuizPayload<ExtArgs>
        fields: Prisma.QuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findFirst: {
            args: Prisma.QuizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findMany: {
            args: Prisma.QuizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          create: {
            args: Prisma.QuizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          createMany: {
            args: Prisma.QuizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          delete: {
            args: Prisma.QuizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          update: {
            args: Prisma.QuizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          deleteMany: {
            args: Prisma.QuizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          upsert: {
            args: Prisma.QuizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          aggregate: {
            args: Prisma.QuizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuiz>
          }
          groupBy: {
            args: Prisma.QuizGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizCountArgs<ExtArgs>
            result: $Utils.Optional<QuizCountAggregateOutputType> | number
          }
        }
      }
      QuizQuestion: {
        payload: Prisma.$QuizQuestionPayload<ExtArgs>
        fields: Prisma.QuizQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>
          }
          findFirst: {
            args: Prisma.QuizQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>
          }
          findMany: {
            args: Prisma.QuizQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>[]
          }
          create: {
            args: Prisma.QuizQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>
          }
          createMany: {
            args: Prisma.QuizQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>[]
          }
          delete: {
            args: Prisma.QuizQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>
          }
          update: {
            args: Prisma.QuizQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuizQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuizQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>
          }
          aggregate: {
            args: Prisma.QuizQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizQuestion>
          }
          groupBy: {
            args: Prisma.QuizQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuizQuestionCountAggregateOutputType> | number
          }
        }
      }
      QuestionAnswerOption: {
        payload: Prisma.$QuestionAnswerOptionPayload<ExtArgs>
        fields: Prisma.QuestionAnswerOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionAnswerOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAnswerOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionAnswerOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAnswerOptionPayload>
          }
          findFirst: {
            args: Prisma.QuestionAnswerOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAnswerOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionAnswerOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAnswerOptionPayload>
          }
          findMany: {
            args: Prisma.QuestionAnswerOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAnswerOptionPayload>[]
          }
          create: {
            args: Prisma.QuestionAnswerOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAnswerOptionPayload>
          }
          createMany: {
            args: Prisma.QuestionAnswerOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionAnswerOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAnswerOptionPayload>[]
          }
          delete: {
            args: Prisma.QuestionAnswerOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAnswerOptionPayload>
          }
          update: {
            args: Prisma.QuestionAnswerOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAnswerOptionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionAnswerOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionAnswerOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionAnswerOptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAnswerOptionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionAnswerOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionAnswerOptionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAnswerOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestionAnswerOption>
          }
          groupBy: {
            args: Prisma.QuestionAnswerOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionAnswerOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionAnswerOptionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionAnswerOptionCountAggregateOutputType> | number
          }
        }
      }
      QuizSession: {
        payload: Prisma.$QuizSessionPayload<ExtArgs>
        fields: Prisma.QuizSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload>
          }
          findFirst: {
            args: Prisma.QuizSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload>
          }
          findMany: {
            args: Prisma.QuizSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload>[]
          }
          create: {
            args: Prisma.QuizSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload>
          }
          createMany: {
            args: Prisma.QuizSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload>[]
          }
          delete: {
            args: Prisma.QuizSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload>
          }
          update: {
            args: Prisma.QuizSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload>
          }
          deleteMany: {
            args: Prisma.QuizSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload>[]
          }
          upsert: {
            args: Prisma.QuizSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload>
          }
          aggregate: {
            args: Prisma.QuizSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizSession>
          }
          groupBy: {
            args: Prisma.QuizSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizSessionCountArgs<ExtArgs>
            result: $Utils.Optional<QuizSessionCountAggregateOutputType> | number
          }
        }
      }
      SessionParticipant: {
        payload: Prisma.$SessionParticipantPayload<ExtArgs>
        fields: Prisma.SessionParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionParticipantPayload>
          }
          findFirst: {
            args: Prisma.SessionParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionParticipantPayload>
          }
          findMany: {
            args: Prisma.SessionParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionParticipantPayload>[]
          }
          create: {
            args: Prisma.SessionParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionParticipantPayload>
          }
          createMany: {
            args: Prisma.SessionParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionParticipantPayload>[]
          }
          delete: {
            args: Prisma.SessionParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionParticipantPayload>
          }
          update: {
            args: Prisma.SessionParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionParticipantPayload>
          }
          deleteMany: {
            args: Prisma.SessionParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionParticipantPayload>[]
          }
          upsert: {
            args: Prisma.SessionParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionParticipantPayload>
          }
          aggregate: {
            args: Prisma.SessionParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessionParticipant>
          }
          groupBy: {
            args: Prisma.SessionParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<SessionParticipantCountAggregateOutputType> | number
          }
        }
      }
      QuestionResponse: {
        payload: Prisma.$QuestionResponsePayload<ExtArgs>
        fields: Prisma.QuestionResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload>
          }
          findFirst: {
            args: Prisma.QuestionResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload>
          }
          findMany: {
            args: Prisma.QuestionResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload>[]
          }
          create: {
            args: Prisma.QuestionResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload>
          }
          createMany: {
            args: Prisma.QuestionResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload>[]
          }
          delete: {
            args: Prisma.QuestionResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload>
          }
          update: {
            args: Prisma.QuestionResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload>
          }
          deleteMany: {
            args: Prisma.QuestionResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload>[]
          }
          upsert: {
            args: Prisma.QuestionResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload>
          }
          aggregate: {
            args: Prisma.QuestionResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestionResponse>
          }
          groupBy: {
            args: Prisma.QuestionResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionResponseCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionResponseCountAggregateOutputType> | number
          }
        }
      }
      QuizCategory: {
        payload: Prisma.$QuizCategoryPayload<ExtArgs>
        fields: Prisma.QuizCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCategoryPayload>
          }
          findFirst: {
            args: Prisma.QuizCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCategoryPayload>
          }
          findMany: {
            args: Prisma.QuizCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCategoryPayload>[]
          }
          create: {
            args: Prisma.QuizCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCategoryPayload>
          }
          createMany: {
            args: Prisma.QuizCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCategoryPayload>[]
          }
          delete: {
            args: Prisma.QuizCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCategoryPayload>
          }
          update: {
            args: Prisma.QuizCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCategoryPayload>
          }
          deleteMany: {
            args: Prisma.QuizCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCategoryPayload>[]
          }
          upsert: {
            args: Prisma.QuizCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCategoryPayload>
          }
          aggregate: {
            args: Prisma.QuizCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizCategory>
          }
          groupBy: {
            args: Prisma.QuizCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<QuizCategoryCountAggregateOutputType> | number
          }
        }
      }
      QuizLeaderboard: {
        payload: Prisma.$QuizLeaderboardPayload<ExtArgs>
        fields: Prisma.QuizLeaderboardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizLeaderboardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizLeaderboardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizLeaderboardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizLeaderboardPayload>
          }
          findFirst: {
            args: Prisma.QuizLeaderboardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizLeaderboardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizLeaderboardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizLeaderboardPayload>
          }
          findMany: {
            args: Prisma.QuizLeaderboardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizLeaderboardPayload>[]
          }
          create: {
            args: Prisma.QuizLeaderboardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizLeaderboardPayload>
          }
          createMany: {
            args: Prisma.QuizLeaderboardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizLeaderboardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizLeaderboardPayload>[]
          }
          delete: {
            args: Prisma.QuizLeaderboardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizLeaderboardPayload>
          }
          update: {
            args: Prisma.QuizLeaderboardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizLeaderboardPayload>
          }
          deleteMany: {
            args: Prisma.QuizLeaderboardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizLeaderboardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizLeaderboardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizLeaderboardPayload>[]
          }
          upsert: {
            args: Prisma.QuizLeaderboardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizLeaderboardPayload>
          }
          aggregate: {
            args: Prisma.QuizLeaderboardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizLeaderboard>
          }
          groupBy: {
            args: Prisma.QuizLeaderboardGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizLeaderboardGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizLeaderboardCountArgs<ExtArgs>
            result: $Utils.Optional<QuizLeaderboardCountAggregateOutputType> | number
          }
        }
      }
      SessionInvitation: {
        payload: Prisma.$SessionInvitationPayload<ExtArgs>
        fields: Prisma.SessionInvitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionInvitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionInvitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionInvitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionInvitationPayload>
          }
          findFirst: {
            args: Prisma.SessionInvitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionInvitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionInvitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionInvitationPayload>
          }
          findMany: {
            args: Prisma.SessionInvitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionInvitationPayload>[]
          }
          create: {
            args: Prisma.SessionInvitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionInvitationPayload>
          }
          createMany: {
            args: Prisma.SessionInvitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionInvitationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionInvitationPayload>[]
          }
          delete: {
            args: Prisma.SessionInvitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionInvitationPayload>
          }
          update: {
            args: Prisma.SessionInvitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionInvitationPayload>
          }
          deleteMany: {
            args: Prisma.SessionInvitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionInvitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionInvitationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionInvitationPayload>[]
          }
          upsert: {
            args: Prisma.SessionInvitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionInvitationPayload>
          }
          aggregate: {
            args: Prisma.SessionInvitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessionInvitation>
          }
          groupBy: {
            args: Prisma.SessionInvitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionInvitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionInvitationCountArgs<ExtArgs>
            result: $Utils.Optional<SessionInvitationCountAggregateOutputType> | number
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
    authSession?: AuthSessionOmit
    user?: UserOmit
    quiz?: QuizOmit
    quizQuestion?: QuizQuestionOmit
    questionAnswerOption?: QuestionAnswerOptionOmit
    quizSession?: QuizSessionOmit
    sessionParticipant?: SessionParticipantOmit
    questionResponse?: QuestionResponseOmit
    quizCategory?: QuizCategoryOmit
    quizLeaderboard?: QuizLeaderboardOmit
    sessionInvitation?: SessionInvitationOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdQuizzes: number
    hostedSessions: number
    participations: number
    leaderboardEntries: number
    invitations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdQuizzes?: boolean | UserCountOutputTypeCountCreatedQuizzesArgs
    hostedSessions?: boolean | UserCountOutputTypeCountHostedSessionsArgs
    participations?: boolean | UserCountOutputTypeCountParticipationsArgs
    leaderboardEntries?: boolean | UserCountOutputTypeCountLeaderboardEntriesArgs
    invitations?: boolean | UserCountOutputTypeCountInvitationsArgs
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
  export type UserCountOutputTypeCountCreatedQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHostedSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParticipationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionParticipantWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLeaderboardEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizLeaderboardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionInvitationWhereInput
  }


  /**
   * Count Type QuizCountOutputType
   */

  export type QuizCountOutputType = {
    questions: number
    sessions: number
    leaderboardEntries: number
  }

  export type QuizCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | QuizCountOutputTypeCountQuestionsArgs
    sessions?: boolean | QuizCountOutputTypeCountSessionsArgs
    leaderboardEntries?: boolean | QuizCountOutputTypeCountLeaderboardEntriesArgs
  }

  // Custom InputTypes
  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCountOutputType
     */
    select?: QuizCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizQuestionWhereInput
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizSessionWhereInput
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountLeaderboardEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizLeaderboardWhereInput
  }


  /**
   * Count Type QuizQuestionCountOutputType
   */

  export type QuizQuestionCountOutputType = {
    options: number
    responses: number
  }

  export type QuizQuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | QuizQuestionCountOutputTypeCountOptionsArgs
    responses?: boolean | QuizQuestionCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * QuizQuestionCountOutputType without action
   */
  export type QuizQuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestionCountOutputType
     */
    select?: QuizQuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizQuestionCountOutputType without action
   */
  export type QuizQuestionCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionAnswerOptionWhereInput
  }

  /**
   * QuizQuestionCountOutputType without action
   */
  export type QuizQuestionCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionResponseWhereInput
  }


  /**
   * Count Type QuestionAnswerOptionCountOutputType
   */

  export type QuestionAnswerOptionCountOutputType = {
    responses: number
  }

  export type QuestionAnswerOptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | QuestionAnswerOptionCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * QuestionAnswerOptionCountOutputType without action
   */
  export type QuestionAnswerOptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswerOptionCountOutputType
     */
    select?: QuestionAnswerOptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionAnswerOptionCountOutputType without action
   */
  export type QuestionAnswerOptionCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionResponseWhereInput
  }


  /**
   * Count Type QuizSessionCountOutputType
   */

  export type QuizSessionCountOutputType = {
    participants: number
    invitations: number
  }

  export type QuizSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | QuizSessionCountOutputTypeCountParticipantsArgs
    invitations?: boolean | QuizSessionCountOutputTypeCountInvitationsArgs
  }

  // Custom InputTypes
  /**
   * QuizSessionCountOutputType without action
   */
  export type QuizSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSessionCountOutputType
     */
    select?: QuizSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizSessionCountOutputType without action
   */
  export type QuizSessionCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionParticipantWhereInput
  }

  /**
   * QuizSessionCountOutputType without action
   */
  export type QuizSessionCountOutputTypeCountInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionInvitationWhereInput
  }


  /**
   * Count Type SessionParticipantCountOutputType
   */

  export type SessionParticipantCountOutputType = {
    responses: number
  }

  export type SessionParticipantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | SessionParticipantCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * SessionParticipantCountOutputType without action
   */
  export type SessionParticipantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionParticipantCountOutputType
     */
    select?: SessionParticipantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessionParticipantCountOutputType without action
   */
  export type SessionParticipantCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionResponseWhereInput
  }


  /**
   * Count Type QuizCategoryCountOutputType
   */

  export type QuizCategoryCountOutputType = {
    quizzes: number
  }

  export type QuizCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizzes?: boolean | QuizCategoryCountOutputTypeCountQuizzesArgs
  }

  // Custom InputTypes
  /**
   * QuizCategoryCountOutputType without action
   */
  export type QuizCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCategoryCountOutputType
     */
    select?: QuizCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizCategoryCountOutputType without action
   */
  export type QuizCategoryCountOutputTypeCountQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AuthSession
   */

  export type AggregateAuthSession = {
    _count: AuthSessionCountAggregateOutputType | null
    _min: AuthSessionMinAggregateOutputType | null
    _max: AuthSessionMaxAggregateOutputType | null
  }

  export type AuthSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type AuthSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type AuthSessionCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type AuthSessionMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
  }

  export type AuthSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
  }

  export type AuthSessionCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type AuthSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthSession to aggregate.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthSessions
    **/
    _count?: true | AuthSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthSessionMaxAggregateInputType
  }

  export type GetAuthSessionAggregateType<T extends AuthSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthSession[P]>
      : GetScalarType<T[P], AggregateAuthSession[P]>
  }




  export type AuthSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthSessionWhereInput
    orderBy?: AuthSessionOrderByWithAggregationInput | AuthSessionOrderByWithAggregationInput[]
    by: AuthSessionScalarFieldEnum[] | AuthSessionScalarFieldEnum
    having?: AuthSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthSessionCountAggregateInputType | true
    _min?: AuthSessionMinAggregateInputType
    _max?: AuthSessionMaxAggregateInputType
  }

  export type AuthSessionGroupByOutputType = {
    id: string
    userId: string
    createdAt: Date
    expiresAt: Date
    _count: AuthSessionCountAggregateOutputType | null
    _min: AuthSessionMinAggregateOutputType | null
    _max: AuthSessionMaxAggregateOutputType | null
  }

  type GetAuthSessionGroupByPayload<T extends AuthSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthSessionGroupByOutputType[P]>
            : GetScalarType<T[P], AuthSessionGroupByOutputType[P]>
        }
      >
    >


  export type AuthSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["authSession"]>

  export type AuthSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["authSession"]>

  export type AuthSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["authSession"]>

  export type AuthSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type AuthSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "expiresAt", ExtArgs["result"]["authSession"]>

  export type $AuthSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthSession"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      createdAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["authSession"]>
    composites: {}
  }

  type AuthSessionGetPayload<S extends boolean | null | undefined | AuthSessionDefaultArgs> = $Result.GetResult<Prisma.$AuthSessionPayload, S>

  type AuthSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthSessionCountAggregateInputType | true
    }

  export interface AuthSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthSession'], meta: { name: 'AuthSession' } }
    /**
     * Find zero or one AuthSession that matches the filter.
     * @param {AuthSessionFindUniqueArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthSessionFindUniqueArgs>(args: SelectSubset<T, AuthSessionFindUniqueArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthSessionFindUniqueOrThrowArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionFindFirstArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthSessionFindFirstArgs>(args?: SelectSubset<T, AuthSessionFindFirstArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionFindFirstOrThrowArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthSessions
     * const authSessions = await prisma.authSession.findMany()
     * 
     * // Get first 10 AuthSessions
     * const authSessions = await prisma.authSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authSessionWithIdOnly = await prisma.authSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthSessionFindManyArgs>(args?: SelectSubset<T, AuthSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthSession.
     * @param {AuthSessionCreateArgs} args - Arguments to create a AuthSession.
     * @example
     * // Create one AuthSession
     * const AuthSession = await prisma.authSession.create({
     *   data: {
     *     // ... data to create a AuthSession
     *   }
     * })
     * 
     */
    create<T extends AuthSessionCreateArgs>(args: SelectSubset<T, AuthSessionCreateArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthSessions.
     * @param {AuthSessionCreateManyArgs} args - Arguments to create many AuthSessions.
     * @example
     * // Create many AuthSessions
     * const authSession = await prisma.authSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthSessionCreateManyArgs>(args?: SelectSubset<T, AuthSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthSessions and returns the data saved in the database.
     * @param {AuthSessionCreateManyAndReturnArgs} args - Arguments to create many AuthSessions.
     * @example
     * // Create many AuthSessions
     * const authSession = await prisma.authSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthSessions and only return the `id`
     * const authSessionWithIdOnly = await prisma.authSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthSession.
     * @param {AuthSessionDeleteArgs} args - Arguments to delete one AuthSession.
     * @example
     * // Delete one AuthSession
     * const AuthSession = await prisma.authSession.delete({
     *   where: {
     *     // ... filter to delete one AuthSession
     *   }
     * })
     * 
     */
    delete<T extends AuthSessionDeleteArgs>(args: SelectSubset<T, AuthSessionDeleteArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthSession.
     * @param {AuthSessionUpdateArgs} args - Arguments to update one AuthSession.
     * @example
     * // Update one AuthSession
     * const authSession = await prisma.authSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthSessionUpdateArgs>(args: SelectSubset<T, AuthSessionUpdateArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthSessions.
     * @param {AuthSessionDeleteManyArgs} args - Arguments to filter AuthSessions to delete.
     * @example
     * // Delete a few AuthSessions
     * const { count } = await prisma.authSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthSessionDeleteManyArgs>(args?: SelectSubset<T, AuthSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthSessions
     * const authSession = await prisma.authSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthSessionUpdateManyArgs>(args: SelectSubset<T, AuthSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthSessions and returns the data updated in the database.
     * @param {AuthSessionUpdateManyAndReturnArgs} args - Arguments to update many AuthSessions.
     * @example
     * // Update many AuthSessions
     * const authSession = await prisma.authSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthSessions and only return the `id`
     * const authSessionWithIdOnly = await prisma.authSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuthSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthSession.
     * @param {AuthSessionUpsertArgs} args - Arguments to update or create a AuthSession.
     * @example
     * // Update or create a AuthSession
     * const authSession = await prisma.authSession.upsert({
     *   create: {
     *     // ... data to create a AuthSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthSession we want to update
     *   }
     * })
     */
    upsert<T extends AuthSessionUpsertArgs>(args: SelectSubset<T, AuthSessionUpsertArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionCountArgs} args - Arguments to filter AuthSessions to count.
     * @example
     * // Count the number of AuthSessions
     * const count = await prisma.authSession.count({
     *   where: {
     *     // ... the filter for the AuthSessions we want to count
     *   }
     * })
    **/
    count<T extends AuthSessionCountArgs>(
      args?: Subset<T, AuthSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthSessionAggregateArgs>(args: Subset<T, AuthSessionAggregateArgs>): Prisma.PrismaPromise<GetAuthSessionAggregateType<T>>

    /**
     * Group by AuthSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionGroupByArgs} args - Group by arguments.
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
      T extends AuthSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthSessionGroupByArgs['orderBy'] }
        : { orderBy?: AuthSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthSession model
   */
  readonly fields: AuthSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AuthSession model
   */
  interface AuthSessionFieldRefs {
    readonly id: FieldRef<"AuthSession", 'String'>
    readonly userId: FieldRef<"AuthSession", 'String'>
    readonly createdAt: FieldRef<"AuthSession", 'DateTime'>
    readonly expiresAt: FieldRef<"AuthSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuthSession findUnique
   */
  export type AuthSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession findUniqueOrThrow
   */
  export type AuthSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession findFirst
   */
  export type AuthSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthSessions.
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthSessions.
     */
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * AuthSession findFirstOrThrow
   */
  export type AuthSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthSessions.
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthSessions.
     */
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * AuthSession findMany
   */
  export type AuthSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Filter, which AuthSessions to fetch.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthSessions.
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * AuthSession create
   */
  export type AuthSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * The data needed to create a AuthSession.
     */
    data: XOR<AuthSessionCreateInput, AuthSessionUncheckedCreateInput>
  }

  /**
   * AuthSession createMany
   */
  export type AuthSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthSessions.
     */
    data: AuthSessionCreateManyInput | AuthSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthSession createManyAndReturn
   */
  export type AuthSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * The data used to create many AuthSessions.
     */
    data: AuthSessionCreateManyInput | AuthSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthSession update
   */
  export type AuthSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * The data needed to update a AuthSession.
     */
    data: XOR<AuthSessionUpdateInput, AuthSessionUncheckedUpdateInput>
    /**
     * Choose, which AuthSession to update.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession updateMany
   */
  export type AuthSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthSessions.
     */
    data: XOR<AuthSessionUpdateManyMutationInput, AuthSessionUncheckedUpdateManyInput>
    /**
     * Filter which AuthSessions to update
     */
    where?: AuthSessionWhereInput
    /**
     * Limit how many AuthSessions to update.
     */
    limit?: number
  }

  /**
   * AuthSession updateManyAndReturn
   */
  export type AuthSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * The data used to update AuthSessions.
     */
    data: XOR<AuthSessionUpdateManyMutationInput, AuthSessionUncheckedUpdateManyInput>
    /**
     * Filter which AuthSessions to update
     */
    where?: AuthSessionWhereInput
    /**
     * Limit how many AuthSessions to update.
     */
    limit?: number
  }

  /**
   * AuthSession upsert
   */
  export type AuthSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * The filter to search for the AuthSession to update in case it exists.
     */
    where: AuthSessionWhereUniqueInput
    /**
     * In case the AuthSession found by the `where` argument doesn't exist, create a new AuthSession with this data.
     */
    create: XOR<AuthSessionCreateInput, AuthSessionUncheckedCreateInput>
    /**
     * In case the AuthSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthSessionUpdateInput, AuthSessionUncheckedUpdateInput>
  }

  /**
   * AuthSession delete
   */
  export type AuthSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Filter which AuthSession to delete.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession deleteMany
   */
  export type AuthSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthSessions to delete
     */
    where?: AuthSessionWhereInput
    /**
     * Limit how many AuthSessions to delete.
     */
    limit?: number
  }

  /**
   * AuthSession without action
   */
  export type AuthSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
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
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
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
    username: string
    email: string
    password: string
    role: $Enums.Role
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
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdQuizzes?: boolean | User$createdQuizzesArgs<ExtArgs>
    hostedSessions?: boolean | User$hostedSessionsArgs<ExtArgs>
    participations?: boolean | User$participationsArgs<ExtArgs>
    leaderboardEntries?: boolean | User$leaderboardEntriesArgs<ExtArgs>
    invitations?: boolean | User$invitationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdQuizzes?: boolean | User$createdQuizzesArgs<ExtArgs>
    hostedSessions?: boolean | User$hostedSessionsArgs<ExtArgs>
    participations?: boolean | User$participationsArgs<ExtArgs>
    leaderboardEntries?: boolean | User$leaderboardEntriesArgs<ExtArgs>
    invitations?: boolean | User$invitationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdQuizzes: Prisma.$QuizPayload<ExtArgs>[]
      hostedSessions: Prisma.$QuizSessionPayload<ExtArgs>[]
      participations: Prisma.$SessionParticipantPayload<ExtArgs>[]
      leaderboardEntries: Prisma.$QuizLeaderboardPayload<ExtArgs>[]
      invitations: Prisma.$SessionInvitationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdQuizzes<T extends User$createdQuizzesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdQuizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hostedSessions<T extends User$hostedSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$hostedSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participations<T extends User$participationsArgs<ExtArgs> = {}>(args?: Subset<T, User$participationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leaderboardEntries<T extends User$leaderboardEntriesArgs<ExtArgs> = {}>(args?: Subset<T, User$leaderboardEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizLeaderboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invitations<T extends User$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, User$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.createdQuizzes
   */
  export type User$createdQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * User.hostedSessions
   */
  export type User$hostedSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    where?: QuizSessionWhereInput
    orderBy?: QuizSessionOrderByWithRelationInput | QuizSessionOrderByWithRelationInput[]
    cursor?: QuizSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizSessionScalarFieldEnum | QuizSessionScalarFieldEnum[]
  }

  /**
   * User.participations
   */
  export type User$participationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionParticipant
     */
    select?: SessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionParticipant
     */
    omit?: SessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionParticipantInclude<ExtArgs> | null
    where?: SessionParticipantWhereInput
    orderBy?: SessionParticipantOrderByWithRelationInput | SessionParticipantOrderByWithRelationInput[]
    cursor?: SessionParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionParticipantScalarFieldEnum | SessionParticipantScalarFieldEnum[]
  }

  /**
   * User.leaderboardEntries
   */
  export type User$leaderboardEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizLeaderboard
     */
    select?: QuizLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizLeaderboard
     */
    omit?: QuizLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizLeaderboardInclude<ExtArgs> | null
    where?: QuizLeaderboardWhereInput
    orderBy?: QuizLeaderboardOrderByWithRelationInput | QuizLeaderboardOrderByWithRelationInput[]
    cursor?: QuizLeaderboardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizLeaderboardScalarFieldEnum | QuizLeaderboardScalarFieldEnum[]
  }

  /**
   * User.invitations
   */
  export type User$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionInvitation
     */
    select?: SessionInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionInvitation
     */
    omit?: SessionInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInvitationInclude<ExtArgs> | null
    where?: SessionInvitationWhereInput
    orderBy?: SessionInvitationOrderByWithRelationInput | SessionInvitationOrderByWithRelationInput[]
    cursor?: SessionInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionInvitationScalarFieldEnum | SessionInvitationScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Quiz
   */

  export type AggregateQuiz = {
    _count: QuizCountAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  export type QuizMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: $Enums.QuizType | null
    categoryId: string | null
    createdById: string | null
  }

  export type QuizMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: $Enums.QuizType | null
    categoryId: string | null
    createdById: string | null
  }

  export type QuizCountAggregateOutputType = {
    id: number
    title: number
    description: number
    type: number
    categoryId: number
    createdById: number
    _all: number
  }


  export type QuizMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    categoryId?: true
    createdById?: true
  }

  export type QuizMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    categoryId?: true
    createdById?: true
  }

  export type QuizCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    categoryId?: true
    createdById?: true
    _all?: true
  }

  export type QuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quiz to aggregate.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quizzes
    **/
    _count?: true | QuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizMaxAggregateInputType
  }

  export type GetQuizAggregateType<T extends QuizAggregateArgs> = {
        [P in keyof T & keyof AggregateQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuiz[P]>
      : GetScalarType<T[P], AggregateQuiz[P]>
  }




  export type QuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithAggregationInput | QuizOrderByWithAggregationInput[]
    by: QuizScalarFieldEnum[] | QuizScalarFieldEnum
    having?: QuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizCountAggregateInputType | true
    _min?: QuizMinAggregateInputType
    _max?: QuizMaxAggregateInputType
  }

  export type QuizGroupByOutputType = {
    id: string
    title: string
    description: string | null
    type: $Enums.QuizType
    categoryId: string
    createdById: string
    _count: QuizCountAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  type GetQuizGroupByPayload<T extends QuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizGroupByOutputType[P]>
            : GetScalarType<T[P], QuizGroupByOutputType[P]>
        }
      >
    >


  export type QuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    categoryId?: boolean
    createdById?: boolean
    category?: boolean | QuizCategoryDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    questions?: boolean | Quiz$questionsArgs<ExtArgs>
    sessions?: boolean | Quiz$sessionsArgs<ExtArgs>
    leaderboardEntries?: boolean | Quiz$leaderboardEntriesArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    categoryId?: boolean
    createdById?: boolean
    category?: boolean | QuizCategoryDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    categoryId?: boolean
    createdById?: boolean
    category?: boolean | QuizCategoryDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    categoryId?: boolean
    createdById?: boolean
  }

  export type QuizOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "type" | "categoryId" | "createdById", ExtArgs["result"]["quiz"]>
  export type QuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | QuizCategoryDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    questions?: boolean | Quiz$questionsArgs<ExtArgs>
    sessions?: boolean | Quiz$sessionsArgs<ExtArgs>
    leaderboardEntries?: boolean | Quiz$leaderboardEntriesArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | QuizCategoryDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuizIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | QuizCategoryDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $QuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quiz"
    objects: {
      category: Prisma.$QuizCategoryPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
      questions: Prisma.$QuizQuestionPayload<ExtArgs>[]
      sessions: Prisma.$QuizSessionPayload<ExtArgs>[]
      leaderboardEntries: Prisma.$QuizLeaderboardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      type: $Enums.QuizType
      categoryId: string
      createdById: string
    }, ExtArgs["result"]["quiz"]>
    composites: {}
  }

  type QuizGetPayload<S extends boolean | null | undefined | QuizDefaultArgs> = $Result.GetResult<Prisma.$QuizPayload, S>

  type QuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizCountAggregateInputType | true
    }

  export interface QuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quiz'], meta: { name: 'Quiz' } }
    /**
     * Find zero or one Quiz that matches the filter.
     * @param {QuizFindUniqueArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizFindUniqueArgs>(args: SelectSubset<T, QuizFindUniqueArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quiz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizFindUniqueOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizFindFirstArgs>(args?: SelectSubset<T, QuizFindFirstArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quiz.findMany()
     * 
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizWithIdOnly = await prisma.quiz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizFindManyArgs>(args?: SelectSubset<T, QuizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quiz.
     * @param {QuizCreateArgs} args - Arguments to create a Quiz.
     * @example
     * // Create one Quiz
     * const Quiz = await prisma.quiz.create({
     *   data: {
     *     // ... data to create a Quiz
     *   }
     * })
     * 
     */
    create<T extends QuizCreateArgs>(args: SelectSubset<T, QuizCreateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quizzes.
     * @param {QuizCreateManyArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizCreateManyArgs>(args?: SelectSubset<T, QuizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quizzes and returns the data saved in the database.
     * @param {QuizCreateManyAndReturnArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quizzes and only return the `id`
     * const quizWithIdOnly = await prisma.quiz.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Quiz.
     * @param {QuizDeleteArgs} args - Arguments to delete one Quiz.
     * @example
     * // Delete one Quiz
     * const Quiz = await prisma.quiz.delete({
     *   where: {
     *     // ... filter to delete one Quiz
     *   }
     * })
     * 
     */
    delete<T extends QuizDeleteArgs>(args: SelectSubset<T, QuizDeleteArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quiz.
     * @param {QuizUpdateArgs} args - Arguments to update one Quiz.
     * @example
     * // Update one Quiz
     * const quiz = await prisma.quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizUpdateArgs>(args: SelectSubset<T, QuizUpdateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quizzes.
     * @param {QuizDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizDeleteManyArgs>(args?: SelectSubset<T, QuizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizUpdateManyArgs>(args: SelectSubset<T, QuizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes and returns the data updated in the database.
     * @param {QuizUpdateManyAndReturnArgs} args - Arguments to update many Quizzes.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Quizzes and only return the `id`
     * const quizWithIdOnly = await prisma.quiz.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuizUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Quiz.
     * @param {QuizUpsertArgs} args - Arguments to update or create a Quiz.
     * @example
     * // Update or create a Quiz
     * const quiz = await prisma.quiz.upsert({
     *   create: {
     *     // ... data to create a Quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quiz we want to update
     *   }
     * })
     */
    upsert<T extends QuizUpsertArgs>(args: SelectSubset<T, QuizUpsertArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quiz.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
    **/
    count<T extends QuizCountArgs>(
      args?: Subset<T, QuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizAggregateArgs>(args: Subset<T, QuizAggregateArgs>): Prisma.PrismaPromise<GetQuizAggregateType<T>>

    /**
     * Group by Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGroupByArgs} args - Group by arguments.
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
      T extends QuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizGroupByArgs['orderBy'] }
        : { orderBy?: QuizGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quiz model
   */
  readonly fields: QuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends QuizCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizCategoryDefaultArgs<ExtArgs>>): Prisma__QuizCategoryClient<$Result.GetResult<Prisma.$QuizCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends Quiz$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends Quiz$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leaderboardEntries<T extends Quiz$leaderboardEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$leaderboardEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizLeaderboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Quiz model
   */
  interface QuizFieldRefs {
    readonly id: FieldRef<"Quiz", 'String'>
    readonly title: FieldRef<"Quiz", 'String'>
    readonly description: FieldRef<"Quiz", 'String'>
    readonly type: FieldRef<"Quiz", 'QuizType'>
    readonly categoryId: FieldRef<"Quiz", 'String'>
    readonly createdById: FieldRef<"Quiz", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Quiz findUnique
   */
  export type QuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findUniqueOrThrow
   */
  export type QuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findFirst
   */
  export type QuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findFirstOrThrow
   */
  export type QuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findMany
   */
  export type QuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz create
   */
  export type QuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to create a Quiz.
     */
    data: XOR<QuizCreateInput, QuizUncheckedCreateInput>
  }

  /**
   * Quiz createMany
   */
  export type QuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quiz createManyAndReturn
   */
  export type QuizCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quiz update
   */
  export type QuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to update a Quiz.
     */
    data: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
    /**
     * Choose, which Quiz to update.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz updateMany
   */
  export type QuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
  }

  /**
   * Quiz updateManyAndReturn
   */
  export type QuizUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quiz upsert
   */
  export type QuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The filter to search for the Quiz to update in case it exists.
     */
    where: QuizWhereUniqueInput
    /**
     * In case the Quiz found by the `where` argument doesn't exist, create a new Quiz with this data.
     */
    create: XOR<QuizCreateInput, QuizUncheckedCreateInput>
    /**
     * In case the Quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
  }

  /**
   * Quiz delete
   */
  export type QuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter which Quiz to delete.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz deleteMany
   */
  export type QuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quizzes to delete
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to delete.
     */
    limit?: number
  }

  /**
   * Quiz.questions
   */
  export type Quiz$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    where?: QuizQuestionWhereInput
    orderBy?: QuizQuestionOrderByWithRelationInput | QuizQuestionOrderByWithRelationInput[]
    cursor?: QuizQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizQuestionScalarFieldEnum | QuizQuestionScalarFieldEnum[]
  }

  /**
   * Quiz.sessions
   */
  export type Quiz$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    where?: QuizSessionWhereInput
    orderBy?: QuizSessionOrderByWithRelationInput | QuizSessionOrderByWithRelationInput[]
    cursor?: QuizSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizSessionScalarFieldEnum | QuizSessionScalarFieldEnum[]
  }

  /**
   * Quiz.leaderboardEntries
   */
  export type Quiz$leaderboardEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizLeaderboard
     */
    select?: QuizLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizLeaderboard
     */
    omit?: QuizLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizLeaderboardInclude<ExtArgs> | null
    where?: QuizLeaderboardWhereInput
    orderBy?: QuizLeaderboardOrderByWithRelationInput | QuizLeaderboardOrderByWithRelationInput[]
    cursor?: QuizLeaderboardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizLeaderboardScalarFieldEnum | QuizLeaderboardScalarFieldEnum[]
  }

  /**
   * Quiz without action
   */
  export type QuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
  }


  /**
   * Model QuizQuestion
   */

  export type AggregateQuizQuestion = {
    _count: QuizQuestionCountAggregateOutputType | null
    _avg: QuizQuestionAvgAggregateOutputType | null
    _sum: QuizQuestionSumAggregateOutputType | null
    _min: QuizQuestionMinAggregateOutputType | null
    _max: QuizQuestionMaxAggregateOutputType | null
  }

  export type QuizQuestionAvgAggregateOutputType = {
    questionScore: number | null
    timeLimit: number | null
    order: number | null
  }

  export type QuizQuestionSumAggregateOutputType = {
    questionScore: number | null
    timeLimit: number | null
    order: number | null
  }

  export type QuizQuestionMinAggregateOutputType = {
    id: string | null
    text: string | null
    type: $Enums.QuestionType | null
    questionScore: number | null
    timeLimit: number | null
    order: number | null
    quizId: string | null
  }

  export type QuizQuestionMaxAggregateOutputType = {
    id: string | null
    text: string | null
    type: $Enums.QuestionType | null
    questionScore: number | null
    timeLimit: number | null
    order: number | null
    quizId: string | null
  }

  export type QuizQuestionCountAggregateOutputType = {
    id: number
    text: number
    type: number
    questionScore: number
    timeLimit: number
    order: number
    quizId: number
    _all: number
  }


  export type QuizQuestionAvgAggregateInputType = {
    questionScore?: true
    timeLimit?: true
    order?: true
  }

  export type QuizQuestionSumAggregateInputType = {
    questionScore?: true
    timeLimit?: true
    order?: true
  }

  export type QuizQuestionMinAggregateInputType = {
    id?: true
    text?: true
    type?: true
    questionScore?: true
    timeLimit?: true
    order?: true
    quizId?: true
  }

  export type QuizQuestionMaxAggregateInputType = {
    id?: true
    text?: true
    type?: true
    questionScore?: true
    timeLimit?: true
    order?: true
    quizId?: true
  }

  export type QuizQuestionCountAggregateInputType = {
    id?: true
    text?: true
    type?: true
    questionScore?: true
    timeLimit?: true
    order?: true
    quizId?: true
    _all?: true
  }

  export type QuizQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizQuestion to aggregate.
     */
    where?: QuizQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizQuestions to fetch.
     */
    orderBy?: QuizQuestionOrderByWithRelationInput | QuizQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizQuestions
    **/
    _count?: true | QuizQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizQuestionMaxAggregateInputType
  }

  export type GetQuizQuestionAggregateType<T extends QuizQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizQuestion[P]>
      : GetScalarType<T[P], AggregateQuizQuestion[P]>
  }




  export type QuizQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizQuestionWhereInput
    orderBy?: QuizQuestionOrderByWithAggregationInput | QuizQuestionOrderByWithAggregationInput[]
    by: QuizQuestionScalarFieldEnum[] | QuizQuestionScalarFieldEnum
    having?: QuizQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizQuestionCountAggregateInputType | true
    _avg?: QuizQuestionAvgAggregateInputType
    _sum?: QuizQuestionSumAggregateInputType
    _min?: QuizQuestionMinAggregateInputType
    _max?: QuizQuestionMaxAggregateInputType
  }

  export type QuizQuestionGroupByOutputType = {
    id: string
    text: string
    type: $Enums.QuestionType
    questionScore: number
    timeLimit: number
    order: number | null
    quizId: string
    _count: QuizQuestionCountAggregateOutputType | null
    _avg: QuizQuestionAvgAggregateOutputType | null
    _sum: QuizQuestionSumAggregateOutputType | null
    _min: QuizQuestionMinAggregateOutputType | null
    _max: QuizQuestionMaxAggregateOutputType | null
  }

  type GetQuizQuestionGroupByPayload<T extends QuizQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuizQuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuizQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    type?: boolean
    questionScore?: boolean
    timeLimit?: boolean
    order?: boolean
    quizId?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    options?: boolean | QuizQuestion$optionsArgs<ExtArgs>
    responses?: boolean | QuizQuestion$responsesArgs<ExtArgs>
    _count?: boolean | QuizQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizQuestion"]>

  export type QuizQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    type?: boolean
    questionScore?: boolean
    timeLimit?: boolean
    order?: boolean
    quizId?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizQuestion"]>

  export type QuizQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    type?: boolean
    questionScore?: boolean
    timeLimit?: boolean
    order?: boolean
    quizId?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizQuestion"]>

  export type QuizQuestionSelectScalar = {
    id?: boolean
    text?: boolean
    type?: boolean
    questionScore?: boolean
    timeLimit?: boolean
    order?: boolean
    quizId?: boolean
  }

  export type QuizQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "type" | "questionScore" | "timeLimit" | "order" | "quizId", ExtArgs["result"]["quizQuestion"]>
  export type QuizQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    options?: boolean | QuizQuestion$optionsArgs<ExtArgs>
    responses?: boolean | QuizQuestion$responsesArgs<ExtArgs>
    _count?: boolean | QuizQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }
  export type QuizQuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }

  export type $QuizQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizQuestion"
    objects: {
      quiz: Prisma.$QuizPayload<ExtArgs>
      options: Prisma.$QuestionAnswerOptionPayload<ExtArgs>[]
      responses: Prisma.$QuestionResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      type: $Enums.QuestionType
      questionScore: number
      timeLimit: number
      order: number | null
      quizId: string
    }, ExtArgs["result"]["quizQuestion"]>
    composites: {}
  }

  type QuizQuestionGetPayload<S extends boolean | null | undefined | QuizQuestionDefaultArgs> = $Result.GetResult<Prisma.$QuizQuestionPayload, S>

  type QuizQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizQuestionCountAggregateInputType | true
    }

  export interface QuizQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizQuestion'], meta: { name: 'QuizQuestion' } }
    /**
     * Find zero or one QuizQuestion that matches the filter.
     * @param {QuizQuestionFindUniqueArgs} args - Arguments to find a QuizQuestion
     * @example
     * // Get one QuizQuestion
     * const quizQuestion = await prisma.quizQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizQuestionFindUniqueArgs>(args: SelectSubset<T, QuizQuestionFindUniqueArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizQuestionFindUniqueOrThrowArgs} args - Arguments to find a QuizQuestion
     * @example
     * // Get one QuizQuestion
     * const quizQuestion = await prisma.quizQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionFindFirstArgs} args - Arguments to find a QuizQuestion
     * @example
     * // Get one QuizQuestion
     * const quizQuestion = await prisma.quizQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizQuestionFindFirstArgs>(args?: SelectSubset<T, QuizQuestionFindFirstArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionFindFirstOrThrowArgs} args - Arguments to find a QuizQuestion
     * @example
     * // Get one QuizQuestion
     * const quizQuestion = await prisma.quizQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizQuestions
     * const quizQuestions = await prisma.quizQuestion.findMany()
     * 
     * // Get first 10 QuizQuestions
     * const quizQuestions = await prisma.quizQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizQuestionWithIdOnly = await prisma.quizQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizQuestionFindManyArgs>(args?: SelectSubset<T, QuizQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizQuestion.
     * @param {QuizQuestionCreateArgs} args - Arguments to create a QuizQuestion.
     * @example
     * // Create one QuizQuestion
     * const QuizQuestion = await prisma.quizQuestion.create({
     *   data: {
     *     // ... data to create a QuizQuestion
     *   }
     * })
     * 
     */
    create<T extends QuizQuestionCreateArgs>(args: SelectSubset<T, QuizQuestionCreateArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizQuestions.
     * @param {QuizQuestionCreateManyArgs} args - Arguments to create many QuizQuestions.
     * @example
     * // Create many QuizQuestions
     * const quizQuestion = await prisma.quizQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizQuestionCreateManyArgs>(args?: SelectSubset<T, QuizQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizQuestions and returns the data saved in the database.
     * @param {QuizQuestionCreateManyAndReturnArgs} args - Arguments to create many QuizQuestions.
     * @example
     * // Create many QuizQuestions
     * const quizQuestion = await prisma.quizQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizQuestions and only return the `id`
     * const quizQuestionWithIdOnly = await prisma.quizQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizQuestion.
     * @param {QuizQuestionDeleteArgs} args - Arguments to delete one QuizQuestion.
     * @example
     * // Delete one QuizQuestion
     * const QuizQuestion = await prisma.quizQuestion.delete({
     *   where: {
     *     // ... filter to delete one QuizQuestion
     *   }
     * })
     * 
     */
    delete<T extends QuizQuestionDeleteArgs>(args: SelectSubset<T, QuizQuestionDeleteArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizQuestion.
     * @param {QuizQuestionUpdateArgs} args - Arguments to update one QuizQuestion.
     * @example
     * // Update one QuizQuestion
     * const quizQuestion = await prisma.quizQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizQuestionUpdateArgs>(args: SelectSubset<T, QuizQuestionUpdateArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizQuestions.
     * @param {QuizQuestionDeleteManyArgs} args - Arguments to filter QuizQuestions to delete.
     * @example
     * // Delete a few QuizQuestions
     * const { count } = await prisma.quizQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizQuestionDeleteManyArgs>(args?: SelectSubset<T, QuizQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizQuestions
     * const quizQuestion = await prisma.quizQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizQuestionUpdateManyArgs>(args: SelectSubset<T, QuizQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizQuestions and returns the data updated in the database.
     * @param {QuizQuestionUpdateManyAndReturnArgs} args - Arguments to update many QuizQuestions.
     * @example
     * // Update many QuizQuestions
     * const quizQuestion = await prisma.quizQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizQuestions and only return the `id`
     * const quizQuestionWithIdOnly = await prisma.quizQuestion.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuizQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizQuestion.
     * @param {QuizQuestionUpsertArgs} args - Arguments to update or create a QuizQuestion.
     * @example
     * // Update or create a QuizQuestion
     * const quizQuestion = await prisma.quizQuestion.upsert({
     *   create: {
     *     // ... data to create a QuizQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizQuestion we want to update
     *   }
     * })
     */
    upsert<T extends QuizQuestionUpsertArgs>(args: SelectSubset<T, QuizQuestionUpsertArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionCountArgs} args - Arguments to filter QuizQuestions to count.
     * @example
     * // Count the number of QuizQuestions
     * const count = await prisma.quizQuestion.count({
     *   where: {
     *     // ... the filter for the QuizQuestions we want to count
     *   }
     * })
    **/
    count<T extends QuizQuestionCountArgs>(
      args?: Subset<T, QuizQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizQuestionAggregateArgs>(args: Subset<T, QuizQuestionAggregateArgs>): Prisma.PrismaPromise<GetQuizQuestionAggregateType<T>>

    /**
     * Group by QuizQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionGroupByArgs} args - Group by arguments.
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
      T extends QuizQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizQuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuizQuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizQuestion model
   */
  readonly fields: QuizQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    options<T extends QuizQuestion$optionsArgs<ExtArgs> = {}>(args?: Subset<T, QuizQuestion$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionAnswerOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    responses<T extends QuizQuestion$responsesArgs<ExtArgs> = {}>(args?: Subset<T, QuizQuestion$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the QuizQuestion model
   */
  interface QuizQuestionFieldRefs {
    readonly id: FieldRef<"QuizQuestion", 'String'>
    readonly text: FieldRef<"QuizQuestion", 'String'>
    readonly type: FieldRef<"QuizQuestion", 'QuestionType'>
    readonly questionScore: FieldRef<"QuizQuestion", 'Int'>
    readonly timeLimit: FieldRef<"QuizQuestion", 'Int'>
    readonly order: FieldRef<"QuizQuestion", 'Int'>
    readonly quizId: FieldRef<"QuizQuestion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuizQuestion findUnique
   */
  export type QuizQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * Filter, which QuizQuestion to fetch.
     */
    where: QuizQuestionWhereUniqueInput
  }

  /**
   * QuizQuestion findUniqueOrThrow
   */
  export type QuizQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * Filter, which QuizQuestion to fetch.
     */
    where: QuizQuestionWhereUniqueInput
  }

  /**
   * QuizQuestion findFirst
   */
  export type QuizQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * Filter, which QuizQuestion to fetch.
     */
    where?: QuizQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizQuestions to fetch.
     */
    orderBy?: QuizQuestionOrderByWithRelationInput | QuizQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizQuestions.
     */
    cursor?: QuizQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizQuestions.
     */
    distinct?: QuizQuestionScalarFieldEnum | QuizQuestionScalarFieldEnum[]
  }

  /**
   * QuizQuestion findFirstOrThrow
   */
  export type QuizQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * Filter, which QuizQuestion to fetch.
     */
    where?: QuizQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizQuestions to fetch.
     */
    orderBy?: QuizQuestionOrderByWithRelationInput | QuizQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizQuestions.
     */
    cursor?: QuizQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizQuestions.
     */
    distinct?: QuizQuestionScalarFieldEnum | QuizQuestionScalarFieldEnum[]
  }

  /**
   * QuizQuestion findMany
   */
  export type QuizQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * Filter, which QuizQuestions to fetch.
     */
    where?: QuizQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizQuestions to fetch.
     */
    orderBy?: QuizQuestionOrderByWithRelationInput | QuizQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizQuestions.
     */
    cursor?: QuizQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizQuestions.
     */
    skip?: number
    distinct?: QuizQuestionScalarFieldEnum | QuizQuestionScalarFieldEnum[]
  }

  /**
   * QuizQuestion create
   */
  export type QuizQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizQuestion.
     */
    data: XOR<QuizQuestionCreateInput, QuizQuestionUncheckedCreateInput>
  }

  /**
   * QuizQuestion createMany
   */
  export type QuizQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizQuestions.
     */
    data: QuizQuestionCreateManyInput | QuizQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizQuestion createManyAndReturn
   */
  export type QuizQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many QuizQuestions.
     */
    data: QuizQuestionCreateManyInput | QuizQuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizQuestion update
   */
  export type QuizQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizQuestion.
     */
    data: XOR<QuizQuestionUpdateInput, QuizQuestionUncheckedUpdateInput>
    /**
     * Choose, which QuizQuestion to update.
     */
    where: QuizQuestionWhereUniqueInput
  }

  /**
   * QuizQuestion updateMany
   */
  export type QuizQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizQuestions.
     */
    data: XOR<QuizQuestionUpdateManyMutationInput, QuizQuestionUncheckedUpdateManyInput>
    /**
     * Filter which QuizQuestions to update
     */
    where?: QuizQuestionWhereInput
    /**
     * Limit how many QuizQuestions to update.
     */
    limit?: number
  }

  /**
   * QuizQuestion updateManyAndReturn
   */
  export type QuizQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * The data used to update QuizQuestions.
     */
    data: XOR<QuizQuestionUpdateManyMutationInput, QuizQuestionUncheckedUpdateManyInput>
    /**
     * Filter which QuizQuestions to update
     */
    where?: QuizQuestionWhereInput
    /**
     * Limit how many QuizQuestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizQuestion upsert
   */
  export type QuizQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizQuestion to update in case it exists.
     */
    where: QuizQuestionWhereUniqueInput
    /**
     * In case the QuizQuestion found by the `where` argument doesn't exist, create a new QuizQuestion with this data.
     */
    create: XOR<QuizQuestionCreateInput, QuizQuestionUncheckedCreateInput>
    /**
     * In case the QuizQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizQuestionUpdateInput, QuizQuestionUncheckedUpdateInput>
  }

  /**
   * QuizQuestion delete
   */
  export type QuizQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * Filter which QuizQuestion to delete.
     */
    where: QuizQuestionWhereUniqueInput
  }

  /**
   * QuizQuestion deleteMany
   */
  export type QuizQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizQuestions to delete
     */
    where?: QuizQuestionWhereInput
    /**
     * Limit how many QuizQuestions to delete.
     */
    limit?: number
  }

  /**
   * QuizQuestion.options
   */
  export type QuizQuestion$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswerOption
     */
    select?: QuestionAnswerOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswerOption
     */
    omit?: QuestionAnswerOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerOptionInclude<ExtArgs> | null
    where?: QuestionAnswerOptionWhereInput
    orderBy?: QuestionAnswerOptionOrderByWithRelationInput | QuestionAnswerOptionOrderByWithRelationInput[]
    cursor?: QuestionAnswerOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionAnswerOptionScalarFieldEnum | QuestionAnswerOptionScalarFieldEnum[]
  }

  /**
   * QuizQuestion.responses
   */
  export type QuizQuestion$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    where?: QuestionResponseWhereInput
    orderBy?: QuestionResponseOrderByWithRelationInput | QuestionResponseOrderByWithRelationInput[]
    cursor?: QuestionResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionResponseScalarFieldEnum | QuestionResponseScalarFieldEnum[]
  }

  /**
   * QuizQuestion without action
   */
  export type QuizQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
  }


  /**
   * Model QuestionAnswerOption
   */

  export type AggregateQuestionAnswerOption = {
    _count: QuestionAnswerOptionCountAggregateOutputType | null
    _min: QuestionAnswerOptionMinAggregateOutputType | null
    _max: QuestionAnswerOptionMaxAggregateOutputType | null
  }

  export type QuestionAnswerOptionMinAggregateOutputType = {
    id: string | null
    text: string | null
    isCorrect: boolean | null
    questionId: string | null
  }

  export type QuestionAnswerOptionMaxAggregateOutputType = {
    id: string | null
    text: string | null
    isCorrect: boolean | null
    questionId: string | null
  }

  export type QuestionAnswerOptionCountAggregateOutputType = {
    id: number
    text: number
    isCorrect: number
    questionId: number
    _all: number
  }


  export type QuestionAnswerOptionMinAggregateInputType = {
    id?: true
    text?: true
    isCorrect?: true
    questionId?: true
  }

  export type QuestionAnswerOptionMaxAggregateInputType = {
    id?: true
    text?: true
    isCorrect?: true
    questionId?: true
  }

  export type QuestionAnswerOptionCountAggregateInputType = {
    id?: true
    text?: true
    isCorrect?: true
    questionId?: true
    _all?: true
  }

  export type QuestionAnswerOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionAnswerOption to aggregate.
     */
    where?: QuestionAnswerOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionAnswerOptions to fetch.
     */
    orderBy?: QuestionAnswerOptionOrderByWithRelationInput | QuestionAnswerOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionAnswerOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionAnswerOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionAnswerOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestionAnswerOptions
    **/
    _count?: true | QuestionAnswerOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionAnswerOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionAnswerOptionMaxAggregateInputType
  }

  export type GetQuestionAnswerOptionAggregateType<T extends QuestionAnswerOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionAnswerOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionAnswerOption[P]>
      : GetScalarType<T[P], AggregateQuestionAnswerOption[P]>
  }




  export type QuestionAnswerOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionAnswerOptionWhereInput
    orderBy?: QuestionAnswerOptionOrderByWithAggregationInput | QuestionAnswerOptionOrderByWithAggregationInput[]
    by: QuestionAnswerOptionScalarFieldEnum[] | QuestionAnswerOptionScalarFieldEnum
    having?: QuestionAnswerOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionAnswerOptionCountAggregateInputType | true
    _min?: QuestionAnswerOptionMinAggregateInputType
    _max?: QuestionAnswerOptionMaxAggregateInputType
  }

  export type QuestionAnswerOptionGroupByOutputType = {
    id: string
    text: string
    isCorrect: boolean
    questionId: string
    _count: QuestionAnswerOptionCountAggregateOutputType | null
    _min: QuestionAnswerOptionMinAggregateOutputType | null
    _max: QuestionAnswerOptionMaxAggregateOutputType | null
  }

  type GetQuestionAnswerOptionGroupByPayload<T extends QuestionAnswerOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionAnswerOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionAnswerOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionAnswerOptionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionAnswerOptionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionAnswerOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    isCorrect?: boolean
    questionId?: boolean
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
    responses?: boolean | QuestionAnswerOption$responsesArgs<ExtArgs>
    _count?: boolean | QuestionAnswerOptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionAnswerOption"]>

  export type QuestionAnswerOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    isCorrect?: boolean
    questionId?: boolean
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionAnswerOption"]>

  export type QuestionAnswerOptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    isCorrect?: boolean
    questionId?: boolean
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionAnswerOption"]>

  export type QuestionAnswerOptionSelectScalar = {
    id?: boolean
    text?: boolean
    isCorrect?: boolean
    questionId?: boolean
  }

  export type QuestionAnswerOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "isCorrect" | "questionId", ExtArgs["result"]["questionAnswerOption"]>
  export type QuestionAnswerOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
    responses?: boolean | QuestionAnswerOption$responsesArgs<ExtArgs>
    _count?: boolean | QuestionAnswerOptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionAnswerOptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
  }
  export type QuestionAnswerOptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
  }

  export type $QuestionAnswerOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestionAnswerOption"
    objects: {
      question: Prisma.$QuizQuestionPayload<ExtArgs>
      responses: Prisma.$QuestionResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      isCorrect: boolean
      questionId: string
    }, ExtArgs["result"]["questionAnswerOption"]>
    composites: {}
  }

  type QuestionAnswerOptionGetPayload<S extends boolean | null | undefined | QuestionAnswerOptionDefaultArgs> = $Result.GetResult<Prisma.$QuestionAnswerOptionPayload, S>

  type QuestionAnswerOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionAnswerOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionAnswerOptionCountAggregateInputType | true
    }

  export interface QuestionAnswerOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestionAnswerOption'], meta: { name: 'QuestionAnswerOption' } }
    /**
     * Find zero or one QuestionAnswerOption that matches the filter.
     * @param {QuestionAnswerOptionFindUniqueArgs} args - Arguments to find a QuestionAnswerOption
     * @example
     * // Get one QuestionAnswerOption
     * const questionAnswerOption = await prisma.questionAnswerOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionAnswerOptionFindUniqueArgs>(args: SelectSubset<T, QuestionAnswerOptionFindUniqueArgs<ExtArgs>>): Prisma__QuestionAnswerOptionClient<$Result.GetResult<Prisma.$QuestionAnswerOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuestionAnswerOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionAnswerOptionFindUniqueOrThrowArgs} args - Arguments to find a QuestionAnswerOption
     * @example
     * // Get one QuestionAnswerOption
     * const questionAnswerOption = await prisma.questionAnswerOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionAnswerOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionAnswerOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionAnswerOptionClient<$Result.GetResult<Prisma.$QuestionAnswerOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionAnswerOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAnswerOptionFindFirstArgs} args - Arguments to find a QuestionAnswerOption
     * @example
     * // Get one QuestionAnswerOption
     * const questionAnswerOption = await prisma.questionAnswerOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionAnswerOptionFindFirstArgs>(args?: SelectSubset<T, QuestionAnswerOptionFindFirstArgs<ExtArgs>>): Prisma__QuestionAnswerOptionClient<$Result.GetResult<Prisma.$QuestionAnswerOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionAnswerOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAnswerOptionFindFirstOrThrowArgs} args - Arguments to find a QuestionAnswerOption
     * @example
     * // Get one QuestionAnswerOption
     * const questionAnswerOption = await prisma.questionAnswerOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionAnswerOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionAnswerOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionAnswerOptionClient<$Result.GetResult<Prisma.$QuestionAnswerOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuestionAnswerOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAnswerOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionAnswerOptions
     * const questionAnswerOptions = await prisma.questionAnswerOption.findMany()
     * 
     * // Get first 10 QuestionAnswerOptions
     * const questionAnswerOptions = await prisma.questionAnswerOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionAnswerOptionWithIdOnly = await prisma.questionAnswerOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionAnswerOptionFindManyArgs>(args?: SelectSubset<T, QuestionAnswerOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionAnswerOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuestionAnswerOption.
     * @param {QuestionAnswerOptionCreateArgs} args - Arguments to create a QuestionAnswerOption.
     * @example
     * // Create one QuestionAnswerOption
     * const QuestionAnswerOption = await prisma.questionAnswerOption.create({
     *   data: {
     *     // ... data to create a QuestionAnswerOption
     *   }
     * })
     * 
     */
    create<T extends QuestionAnswerOptionCreateArgs>(args: SelectSubset<T, QuestionAnswerOptionCreateArgs<ExtArgs>>): Prisma__QuestionAnswerOptionClient<$Result.GetResult<Prisma.$QuestionAnswerOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuestionAnswerOptions.
     * @param {QuestionAnswerOptionCreateManyArgs} args - Arguments to create many QuestionAnswerOptions.
     * @example
     * // Create many QuestionAnswerOptions
     * const questionAnswerOption = await prisma.questionAnswerOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionAnswerOptionCreateManyArgs>(args?: SelectSubset<T, QuestionAnswerOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuestionAnswerOptions and returns the data saved in the database.
     * @param {QuestionAnswerOptionCreateManyAndReturnArgs} args - Arguments to create many QuestionAnswerOptions.
     * @example
     * // Create many QuestionAnswerOptions
     * const questionAnswerOption = await prisma.questionAnswerOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuestionAnswerOptions and only return the `id`
     * const questionAnswerOptionWithIdOnly = await prisma.questionAnswerOption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionAnswerOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionAnswerOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionAnswerOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuestionAnswerOption.
     * @param {QuestionAnswerOptionDeleteArgs} args - Arguments to delete one QuestionAnswerOption.
     * @example
     * // Delete one QuestionAnswerOption
     * const QuestionAnswerOption = await prisma.questionAnswerOption.delete({
     *   where: {
     *     // ... filter to delete one QuestionAnswerOption
     *   }
     * })
     * 
     */
    delete<T extends QuestionAnswerOptionDeleteArgs>(args: SelectSubset<T, QuestionAnswerOptionDeleteArgs<ExtArgs>>): Prisma__QuestionAnswerOptionClient<$Result.GetResult<Prisma.$QuestionAnswerOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuestionAnswerOption.
     * @param {QuestionAnswerOptionUpdateArgs} args - Arguments to update one QuestionAnswerOption.
     * @example
     * // Update one QuestionAnswerOption
     * const questionAnswerOption = await prisma.questionAnswerOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionAnswerOptionUpdateArgs>(args: SelectSubset<T, QuestionAnswerOptionUpdateArgs<ExtArgs>>): Prisma__QuestionAnswerOptionClient<$Result.GetResult<Prisma.$QuestionAnswerOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuestionAnswerOptions.
     * @param {QuestionAnswerOptionDeleteManyArgs} args - Arguments to filter QuestionAnswerOptions to delete.
     * @example
     * // Delete a few QuestionAnswerOptions
     * const { count } = await prisma.questionAnswerOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionAnswerOptionDeleteManyArgs>(args?: SelectSubset<T, QuestionAnswerOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionAnswerOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAnswerOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionAnswerOptions
     * const questionAnswerOption = await prisma.questionAnswerOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionAnswerOptionUpdateManyArgs>(args: SelectSubset<T, QuestionAnswerOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionAnswerOptions and returns the data updated in the database.
     * @param {QuestionAnswerOptionUpdateManyAndReturnArgs} args - Arguments to update many QuestionAnswerOptions.
     * @example
     * // Update many QuestionAnswerOptions
     * const questionAnswerOption = await prisma.questionAnswerOption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuestionAnswerOptions and only return the `id`
     * const questionAnswerOptionWithIdOnly = await prisma.questionAnswerOption.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestionAnswerOptionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionAnswerOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionAnswerOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuestionAnswerOption.
     * @param {QuestionAnswerOptionUpsertArgs} args - Arguments to update or create a QuestionAnswerOption.
     * @example
     * // Update or create a QuestionAnswerOption
     * const questionAnswerOption = await prisma.questionAnswerOption.upsert({
     *   create: {
     *     // ... data to create a QuestionAnswerOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionAnswerOption we want to update
     *   }
     * })
     */
    upsert<T extends QuestionAnswerOptionUpsertArgs>(args: SelectSubset<T, QuestionAnswerOptionUpsertArgs<ExtArgs>>): Prisma__QuestionAnswerOptionClient<$Result.GetResult<Prisma.$QuestionAnswerOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuestionAnswerOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAnswerOptionCountArgs} args - Arguments to filter QuestionAnswerOptions to count.
     * @example
     * // Count the number of QuestionAnswerOptions
     * const count = await prisma.questionAnswerOption.count({
     *   where: {
     *     // ... the filter for the QuestionAnswerOptions we want to count
     *   }
     * })
    **/
    count<T extends QuestionAnswerOptionCountArgs>(
      args?: Subset<T, QuestionAnswerOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionAnswerOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionAnswerOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAnswerOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAnswerOptionAggregateArgs>(args: Subset<T, QuestionAnswerOptionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAnswerOptionAggregateType<T>>

    /**
     * Group by QuestionAnswerOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAnswerOptionGroupByArgs} args - Group by arguments.
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
      T extends QuestionAnswerOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionAnswerOptionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionAnswerOptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionAnswerOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionAnswerOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestionAnswerOption model
   */
  readonly fields: QuestionAnswerOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionAnswerOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionAnswerOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuizQuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizQuestionDefaultArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    responses<T extends QuestionAnswerOption$responsesArgs<ExtArgs> = {}>(args?: Subset<T, QuestionAnswerOption$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the QuestionAnswerOption model
   */
  interface QuestionAnswerOptionFieldRefs {
    readonly id: FieldRef<"QuestionAnswerOption", 'String'>
    readonly text: FieldRef<"QuestionAnswerOption", 'String'>
    readonly isCorrect: FieldRef<"QuestionAnswerOption", 'Boolean'>
    readonly questionId: FieldRef<"QuestionAnswerOption", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuestionAnswerOption findUnique
   */
  export type QuestionAnswerOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswerOption
     */
    select?: QuestionAnswerOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswerOption
     */
    omit?: QuestionAnswerOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuestionAnswerOption to fetch.
     */
    where: QuestionAnswerOptionWhereUniqueInput
  }

  /**
   * QuestionAnswerOption findUniqueOrThrow
   */
  export type QuestionAnswerOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswerOption
     */
    select?: QuestionAnswerOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswerOption
     */
    omit?: QuestionAnswerOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuestionAnswerOption to fetch.
     */
    where: QuestionAnswerOptionWhereUniqueInput
  }

  /**
   * QuestionAnswerOption findFirst
   */
  export type QuestionAnswerOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswerOption
     */
    select?: QuestionAnswerOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswerOption
     */
    omit?: QuestionAnswerOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuestionAnswerOption to fetch.
     */
    where?: QuestionAnswerOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionAnswerOptions to fetch.
     */
    orderBy?: QuestionAnswerOptionOrderByWithRelationInput | QuestionAnswerOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionAnswerOptions.
     */
    cursor?: QuestionAnswerOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionAnswerOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionAnswerOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionAnswerOptions.
     */
    distinct?: QuestionAnswerOptionScalarFieldEnum | QuestionAnswerOptionScalarFieldEnum[]
  }

  /**
   * QuestionAnswerOption findFirstOrThrow
   */
  export type QuestionAnswerOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswerOption
     */
    select?: QuestionAnswerOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswerOption
     */
    omit?: QuestionAnswerOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuestionAnswerOption to fetch.
     */
    where?: QuestionAnswerOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionAnswerOptions to fetch.
     */
    orderBy?: QuestionAnswerOptionOrderByWithRelationInput | QuestionAnswerOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionAnswerOptions.
     */
    cursor?: QuestionAnswerOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionAnswerOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionAnswerOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionAnswerOptions.
     */
    distinct?: QuestionAnswerOptionScalarFieldEnum | QuestionAnswerOptionScalarFieldEnum[]
  }

  /**
   * QuestionAnswerOption findMany
   */
  export type QuestionAnswerOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswerOption
     */
    select?: QuestionAnswerOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswerOption
     */
    omit?: QuestionAnswerOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuestionAnswerOptions to fetch.
     */
    where?: QuestionAnswerOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionAnswerOptions to fetch.
     */
    orderBy?: QuestionAnswerOptionOrderByWithRelationInput | QuestionAnswerOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestionAnswerOptions.
     */
    cursor?: QuestionAnswerOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionAnswerOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionAnswerOptions.
     */
    skip?: number
    distinct?: QuestionAnswerOptionScalarFieldEnum | QuestionAnswerOptionScalarFieldEnum[]
  }

  /**
   * QuestionAnswerOption create
   */
  export type QuestionAnswerOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswerOption
     */
    select?: QuestionAnswerOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswerOption
     */
    omit?: QuestionAnswerOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestionAnswerOption.
     */
    data: XOR<QuestionAnswerOptionCreateInput, QuestionAnswerOptionUncheckedCreateInput>
  }

  /**
   * QuestionAnswerOption createMany
   */
  export type QuestionAnswerOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestionAnswerOptions.
     */
    data: QuestionAnswerOptionCreateManyInput | QuestionAnswerOptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuestionAnswerOption createManyAndReturn
   */
  export type QuestionAnswerOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswerOption
     */
    select?: QuestionAnswerOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswerOption
     */
    omit?: QuestionAnswerOptionOmit<ExtArgs> | null
    /**
     * The data used to create many QuestionAnswerOptions.
     */
    data: QuestionAnswerOptionCreateManyInput | QuestionAnswerOptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerOptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionAnswerOption update
   */
  export type QuestionAnswerOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswerOption
     */
    select?: QuestionAnswerOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswerOption
     */
    omit?: QuestionAnswerOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestionAnswerOption.
     */
    data: XOR<QuestionAnswerOptionUpdateInput, QuestionAnswerOptionUncheckedUpdateInput>
    /**
     * Choose, which QuestionAnswerOption to update.
     */
    where: QuestionAnswerOptionWhereUniqueInput
  }

  /**
   * QuestionAnswerOption updateMany
   */
  export type QuestionAnswerOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestionAnswerOptions.
     */
    data: XOR<QuestionAnswerOptionUpdateManyMutationInput, QuestionAnswerOptionUncheckedUpdateManyInput>
    /**
     * Filter which QuestionAnswerOptions to update
     */
    where?: QuestionAnswerOptionWhereInput
    /**
     * Limit how many QuestionAnswerOptions to update.
     */
    limit?: number
  }

  /**
   * QuestionAnswerOption updateManyAndReturn
   */
  export type QuestionAnswerOptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswerOption
     */
    select?: QuestionAnswerOptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswerOption
     */
    omit?: QuestionAnswerOptionOmit<ExtArgs> | null
    /**
     * The data used to update QuestionAnswerOptions.
     */
    data: XOR<QuestionAnswerOptionUpdateManyMutationInput, QuestionAnswerOptionUncheckedUpdateManyInput>
    /**
     * Filter which QuestionAnswerOptions to update
     */
    where?: QuestionAnswerOptionWhereInput
    /**
     * Limit how many QuestionAnswerOptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerOptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionAnswerOption upsert
   */
  export type QuestionAnswerOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswerOption
     */
    select?: QuestionAnswerOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswerOption
     */
    omit?: QuestionAnswerOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestionAnswerOption to update in case it exists.
     */
    where: QuestionAnswerOptionWhereUniqueInput
    /**
     * In case the QuestionAnswerOption found by the `where` argument doesn't exist, create a new QuestionAnswerOption with this data.
     */
    create: XOR<QuestionAnswerOptionCreateInput, QuestionAnswerOptionUncheckedCreateInput>
    /**
     * In case the QuestionAnswerOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionAnswerOptionUpdateInput, QuestionAnswerOptionUncheckedUpdateInput>
  }

  /**
   * QuestionAnswerOption delete
   */
  export type QuestionAnswerOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswerOption
     */
    select?: QuestionAnswerOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswerOption
     */
    omit?: QuestionAnswerOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerOptionInclude<ExtArgs> | null
    /**
     * Filter which QuestionAnswerOption to delete.
     */
    where: QuestionAnswerOptionWhereUniqueInput
  }

  /**
   * QuestionAnswerOption deleteMany
   */
  export type QuestionAnswerOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionAnswerOptions to delete
     */
    where?: QuestionAnswerOptionWhereInput
    /**
     * Limit how many QuestionAnswerOptions to delete.
     */
    limit?: number
  }

  /**
   * QuestionAnswerOption.responses
   */
  export type QuestionAnswerOption$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    where?: QuestionResponseWhereInput
    orderBy?: QuestionResponseOrderByWithRelationInput | QuestionResponseOrderByWithRelationInput[]
    cursor?: QuestionResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionResponseScalarFieldEnum | QuestionResponseScalarFieldEnum[]
  }

  /**
   * QuestionAnswerOption without action
   */
  export type QuestionAnswerOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswerOption
     */
    select?: QuestionAnswerOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswerOption
     */
    omit?: QuestionAnswerOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerOptionInclude<ExtArgs> | null
  }


  /**
   * Model QuizSession
   */

  export type AggregateQuizSession = {
    _count: QuizSessionCountAggregateOutputType | null
    _min: QuizSessionMinAggregateOutputType | null
    _max: QuizSessionMaxAggregateOutputType | null
  }

  export type QuizSessionMinAggregateOutputType = {
    id: string | null
    code: string | null
    quizId: string | null
    hostId: string | null
    status: $Enums.SessionStatus | null
    startedAt: Date | null
    endedAt: Date | null
  }

  export type QuizSessionMaxAggregateOutputType = {
    id: string | null
    code: string | null
    quizId: string | null
    hostId: string | null
    status: $Enums.SessionStatus | null
    startedAt: Date | null
    endedAt: Date | null
  }

  export type QuizSessionCountAggregateOutputType = {
    id: number
    code: number
    quizId: number
    hostId: number
    status: number
    startedAt: number
    endedAt: number
    _all: number
  }


  export type QuizSessionMinAggregateInputType = {
    id?: true
    code?: true
    quizId?: true
    hostId?: true
    status?: true
    startedAt?: true
    endedAt?: true
  }

  export type QuizSessionMaxAggregateInputType = {
    id?: true
    code?: true
    quizId?: true
    hostId?: true
    status?: true
    startedAt?: true
    endedAt?: true
  }

  export type QuizSessionCountAggregateInputType = {
    id?: true
    code?: true
    quizId?: true
    hostId?: true
    status?: true
    startedAt?: true
    endedAt?: true
    _all?: true
  }

  export type QuizSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizSession to aggregate.
     */
    where?: QuizSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSessions to fetch.
     */
    orderBy?: QuizSessionOrderByWithRelationInput | QuizSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizSessions
    **/
    _count?: true | QuizSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizSessionMaxAggregateInputType
  }

  export type GetQuizSessionAggregateType<T extends QuizSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizSession[P]>
      : GetScalarType<T[P], AggregateQuizSession[P]>
  }




  export type QuizSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizSessionWhereInput
    orderBy?: QuizSessionOrderByWithAggregationInput | QuizSessionOrderByWithAggregationInput[]
    by: QuizSessionScalarFieldEnum[] | QuizSessionScalarFieldEnum
    having?: QuizSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizSessionCountAggregateInputType | true
    _min?: QuizSessionMinAggregateInputType
    _max?: QuizSessionMaxAggregateInputType
  }

  export type QuizSessionGroupByOutputType = {
    id: string
    code: string
    quizId: string
    hostId: string
    status: $Enums.SessionStatus
    startedAt: Date | null
    endedAt: Date | null
    _count: QuizSessionCountAggregateOutputType | null
    _min: QuizSessionMinAggregateOutputType | null
    _max: QuizSessionMaxAggregateOutputType | null
  }

  type GetQuizSessionGroupByPayload<T extends QuizSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizSessionGroupByOutputType[P]>
            : GetScalarType<T[P], QuizSessionGroupByOutputType[P]>
        }
      >
    >


  export type QuizSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    quizId?: boolean
    hostId?: boolean
    status?: boolean
    startedAt?: boolean
    endedAt?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    host?: boolean | UserDefaultArgs<ExtArgs>
    participants?: boolean | QuizSession$participantsArgs<ExtArgs>
    invitations?: boolean | QuizSession$invitationsArgs<ExtArgs>
    _count?: boolean | QuizSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizSession"]>

  export type QuizSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    quizId?: boolean
    hostId?: boolean
    status?: boolean
    startedAt?: boolean
    endedAt?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    host?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizSession"]>

  export type QuizSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    quizId?: boolean
    hostId?: boolean
    status?: boolean
    startedAt?: boolean
    endedAt?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    host?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizSession"]>

  export type QuizSessionSelectScalar = {
    id?: boolean
    code?: boolean
    quizId?: boolean
    hostId?: boolean
    status?: boolean
    startedAt?: boolean
    endedAt?: boolean
  }

  export type QuizSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "quizId" | "hostId" | "status" | "startedAt" | "endedAt", ExtArgs["result"]["quizSession"]>
  export type QuizSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    host?: boolean | UserDefaultArgs<ExtArgs>
    participants?: boolean | QuizSession$participantsArgs<ExtArgs>
    invitations?: boolean | QuizSession$invitationsArgs<ExtArgs>
    _count?: boolean | QuizSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    host?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuizSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    host?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $QuizSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizSession"
    objects: {
      quiz: Prisma.$QuizPayload<ExtArgs>
      host: Prisma.$UserPayload<ExtArgs>
      participants: Prisma.$SessionParticipantPayload<ExtArgs>[]
      invitations: Prisma.$SessionInvitationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      quizId: string
      hostId: string
      status: $Enums.SessionStatus
      startedAt: Date | null
      endedAt: Date | null
    }, ExtArgs["result"]["quizSession"]>
    composites: {}
  }

  type QuizSessionGetPayload<S extends boolean | null | undefined | QuizSessionDefaultArgs> = $Result.GetResult<Prisma.$QuizSessionPayload, S>

  type QuizSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizSessionCountAggregateInputType | true
    }

  export interface QuizSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizSession'], meta: { name: 'QuizSession' } }
    /**
     * Find zero or one QuizSession that matches the filter.
     * @param {QuizSessionFindUniqueArgs} args - Arguments to find a QuizSession
     * @example
     * // Get one QuizSession
     * const quizSession = await prisma.quizSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizSessionFindUniqueArgs>(args: SelectSubset<T, QuizSessionFindUniqueArgs<ExtArgs>>): Prisma__QuizSessionClient<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizSessionFindUniqueOrThrowArgs} args - Arguments to find a QuizSession
     * @example
     * // Get one QuizSession
     * const quizSession = await prisma.quizSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizSessionClient<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSessionFindFirstArgs} args - Arguments to find a QuizSession
     * @example
     * // Get one QuizSession
     * const quizSession = await prisma.quizSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizSessionFindFirstArgs>(args?: SelectSubset<T, QuizSessionFindFirstArgs<ExtArgs>>): Prisma__QuizSessionClient<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSessionFindFirstOrThrowArgs} args - Arguments to find a QuizSession
     * @example
     * // Get one QuizSession
     * const quizSession = await prisma.quizSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizSessionClient<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizSessions
     * const quizSessions = await prisma.quizSession.findMany()
     * 
     * // Get first 10 QuizSessions
     * const quizSessions = await prisma.quizSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizSessionWithIdOnly = await prisma.quizSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizSessionFindManyArgs>(args?: SelectSubset<T, QuizSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizSession.
     * @param {QuizSessionCreateArgs} args - Arguments to create a QuizSession.
     * @example
     * // Create one QuizSession
     * const QuizSession = await prisma.quizSession.create({
     *   data: {
     *     // ... data to create a QuizSession
     *   }
     * })
     * 
     */
    create<T extends QuizSessionCreateArgs>(args: SelectSubset<T, QuizSessionCreateArgs<ExtArgs>>): Prisma__QuizSessionClient<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizSessions.
     * @param {QuizSessionCreateManyArgs} args - Arguments to create many QuizSessions.
     * @example
     * // Create many QuizSessions
     * const quizSession = await prisma.quizSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizSessionCreateManyArgs>(args?: SelectSubset<T, QuizSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizSessions and returns the data saved in the database.
     * @param {QuizSessionCreateManyAndReturnArgs} args - Arguments to create many QuizSessions.
     * @example
     * // Create many QuizSessions
     * const quizSession = await prisma.quizSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizSessions and only return the `id`
     * const quizSessionWithIdOnly = await prisma.quizSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizSession.
     * @param {QuizSessionDeleteArgs} args - Arguments to delete one QuizSession.
     * @example
     * // Delete one QuizSession
     * const QuizSession = await prisma.quizSession.delete({
     *   where: {
     *     // ... filter to delete one QuizSession
     *   }
     * })
     * 
     */
    delete<T extends QuizSessionDeleteArgs>(args: SelectSubset<T, QuizSessionDeleteArgs<ExtArgs>>): Prisma__QuizSessionClient<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizSession.
     * @param {QuizSessionUpdateArgs} args - Arguments to update one QuizSession.
     * @example
     * // Update one QuizSession
     * const quizSession = await prisma.quizSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizSessionUpdateArgs>(args: SelectSubset<T, QuizSessionUpdateArgs<ExtArgs>>): Prisma__QuizSessionClient<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizSessions.
     * @param {QuizSessionDeleteManyArgs} args - Arguments to filter QuizSessions to delete.
     * @example
     * // Delete a few QuizSessions
     * const { count } = await prisma.quizSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizSessionDeleteManyArgs>(args?: SelectSubset<T, QuizSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizSessions
     * const quizSession = await prisma.quizSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizSessionUpdateManyArgs>(args: SelectSubset<T, QuizSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizSessions and returns the data updated in the database.
     * @param {QuizSessionUpdateManyAndReturnArgs} args - Arguments to update many QuizSessions.
     * @example
     * // Update many QuizSessions
     * const quizSession = await prisma.quizSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizSessions and only return the `id`
     * const quizSessionWithIdOnly = await prisma.quizSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuizSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizSession.
     * @param {QuizSessionUpsertArgs} args - Arguments to update or create a QuizSession.
     * @example
     * // Update or create a QuizSession
     * const quizSession = await prisma.quizSession.upsert({
     *   create: {
     *     // ... data to create a QuizSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizSession we want to update
     *   }
     * })
     */
    upsert<T extends QuizSessionUpsertArgs>(args: SelectSubset<T, QuizSessionUpsertArgs<ExtArgs>>): Prisma__QuizSessionClient<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSessionCountArgs} args - Arguments to filter QuizSessions to count.
     * @example
     * // Count the number of QuizSessions
     * const count = await prisma.quizSession.count({
     *   where: {
     *     // ... the filter for the QuizSessions we want to count
     *   }
     * })
    **/
    count<T extends QuizSessionCountArgs>(
      args?: Subset<T, QuizSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizSessionAggregateArgs>(args: Subset<T, QuizSessionAggregateArgs>): Prisma.PrismaPromise<GetQuizSessionAggregateType<T>>

    /**
     * Group by QuizSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSessionGroupByArgs} args - Group by arguments.
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
      T extends QuizSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizSessionGroupByArgs['orderBy'] }
        : { orderBy?: QuizSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizSession model
   */
  readonly fields: QuizSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    host<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participants<T extends QuizSession$participantsArgs<ExtArgs> = {}>(args?: Subset<T, QuizSession$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invitations<T extends QuizSession$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, QuizSession$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the QuizSession model
   */
  interface QuizSessionFieldRefs {
    readonly id: FieldRef<"QuizSession", 'String'>
    readonly code: FieldRef<"QuizSession", 'String'>
    readonly quizId: FieldRef<"QuizSession", 'String'>
    readonly hostId: FieldRef<"QuizSession", 'String'>
    readonly status: FieldRef<"QuizSession", 'SessionStatus'>
    readonly startedAt: FieldRef<"QuizSession", 'DateTime'>
    readonly endedAt: FieldRef<"QuizSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuizSession findUnique
   */
  export type QuizSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    /**
     * Filter, which QuizSession to fetch.
     */
    where: QuizSessionWhereUniqueInput
  }

  /**
   * QuizSession findUniqueOrThrow
   */
  export type QuizSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    /**
     * Filter, which QuizSession to fetch.
     */
    where: QuizSessionWhereUniqueInput
  }

  /**
   * QuizSession findFirst
   */
  export type QuizSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    /**
     * Filter, which QuizSession to fetch.
     */
    where?: QuizSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSessions to fetch.
     */
    orderBy?: QuizSessionOrderByWithRelationInput | QuizSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizSessions.
     */
    cursor?: QuizSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizSessions.
     */
    distinct?: QuizSessionScalarFieldEnum | QuizSessionScalarFieldEnum[]
  }

  /**
   * QuizSession findFirstOrThrow
   */
  export type QuizSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    /**
     * Filter, which QuizSession to fetch.
     */
    where?: QuizSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSessions to fetch.
     */
    orderBy?: QuizSessionOrderByWithRelationInput | QuizSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizSessions.
     */
    cursor?: QuizSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizSessions.
     */
    distinct?: QuizSessionScalarFieldEnum | QuizSessionScalarFieldEnum[]
  }

  /**
   * QuizSession findMany
   */
  export type QuizSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    /**
     * Filter, which QuizSessions to fetch.
     */
    where?: QuizSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSessions to fetch.
     */
    orderBy?: QuizSessionOrderByWithRelationInput | QuizSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizSessions.
     */
    cursor?: QuizSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSessions.
     */
    skip?: number
    distinct?: QuizSessionScalarFieldEnum | QuizSessionScalarFieldEnum[]
  }

  /**
   * QuizSession create
   */
  export type QuizSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizSession.
     */
    data: XOR<QuizSessionCreateInput, QuizSessionUncheckedCreateInput>
  }

  /**
   * QuizSession createMany
   */
  export type QuizSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizSessions.
     */
    data: QuizSessionCreateManyInput | QuizSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizSession createManyAndReturn
   */
  export type QuizSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * The data used to create many QuizSessions.
     */
    data: QuizSessionCreateManyInput | QuizSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizSession update
   */
  export type QuizSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizSession.
     */
    data: XOR<QuizSessionUpdateInput, QuizSessionUncheckedUpdateInput>
    /**
     * Choose, which QuizSession to update.
     */
    where: QuizSessionWhereUniqueInput
  }

  /**
   * QuizSession updateMany
   */
  export type QuizSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizSessions.
     */
    data: XOR<QuizSessionUpdateManyMutationInput, QuizSessionUncheckedUpdateManyInput>
    /**
     * Filter which QuizSessions to update
     */
    where?: QuizSessionWhereInput
    /**
     * Limit how many QuizSessions to update.
     */
    limit?: number
  }

  /**
   * QuizSession updateManyAndReturn
   */
  export type QuizSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * The data used to update QuizSessions.
     */
    data: XOR<QuizSessionUpdateManyMutationInput, QuizSessionUncheckedUpdateManyInput>
    /**
     * Filter which QuizSessions to update
     */
    where?: QuizSessionWhereInput
    /**
     * Limit how many QuizSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizSession upsert
   */
  export type QuizSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizSession to update in case it exists.
     */
    where: QuizSessionWhereUniqueInput
    /**
     * In case the QuizSession found by the `where` argument doesn't exist, create a new QuizSession with this data.
     */
    create: XOR<QuizSessionCreateInput, QuizSessionUncheckedCreateInput>
    /**
     * In case the QuizSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizSessionUpdateInput, QuizSessionUncheckedUpdateInput>
  }

  /**
   * QuizSession delete
   */
  export type QuizSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    /**
     * Filter which QuizSession to delete.
     */
    where: QuizSessionWhereUniqueInput
  }

  /**
   * QuizSession deleteMany
   */
  export type QuizSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizSessions to delete
     */
    where?: QuizSessionWhereInput
    /**
     * Limit how many QuizSessions to delete.
     */
    limit?: number
  }

  /**
   * QuizSession.participants
   */
  export type QuizSession$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionParticipant
     */
    select?: SessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionParticipant
     */
    omit?: SessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionParticipantInclude<ExtArgs> | null
    where?: SessionParticipantWhereInput
    orderBy?: SessionParticipantOrderByWithRelationInput | SessionParticipantOrderByWithRelationInput[]
    cursor?: SessionParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionParticipantScalarFieldEnum | SessionParticipantScalarFieldEnum[]
  }

  /**
   * QuizSession.invitations
   */
  export type QuizSession$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionInvitation
     */
    select?: SessionInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionInvitation
     */
    omit?: SessionInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInvitationInclude<ExtArgs> | null
    where?: SessionInvitationWhereInput
    orderBy?: SessionInvitationOrderByWithRelationInput | SessionInvitationOrderByWithRelationInput[]
    cursor?: SessionInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionInvitationScalarFieldEnum | SessionInvitationScalarFieldEnum[]
  }

  /**
   * QuizSession without action
   */
  export type QuizSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
  }


  /**
   * Model SessionParticipant
   */

  export type AggregateSessionParticipant = {
    _count: SessionParticipantCountAggregateOutputType | null
    _avg: SessionParticipantAvgAggregateOutputType | null
    _sum: SessionParticipantSumAggregateOutputType | null
    _min: SessionParticipantMinAggregateOutputType | null
    _max: SessionParticipantMaxAggregateOutputType | null
  }

  export type SessionParticipantAvgAggregateOutputType = {
    score: number | null
  }

  export type SessionParticipantSumAggregateOutputType = {
    score: number | null
  }

  export type SessionParticipantMinAggregateOutputType = {
    id: string | null
    userId: string | null
    sessionId: string | null
    score: number | null
    joinedAt: Date | null
  }

  export type SessionParticipantMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    sessionId: string | null
    score: number | null
    joinedAt: Date | null
  }

  export type SessionParticipantCountAggregateOutputType = {
    id: number
    userId: number
    sessionId: number
    score: number
    joinedAt: number
    _all: number
  }


  export type SessionParticipantAvgAggregateInputType = {
    score?: true
  }

  export type SessionParticipantSumAggregateInputType = {
    score?: true
  }

  export type SessionParticipantMinAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    score?: true
    joinedAt?: true
  }

  export type SessionParticipantMaxAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    score?: true
    joinedAt?: true
  }

  export type SessionParticipantCountAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    score?: true
    joinedAt?: true
    _all?: true
  }

  export type SessionParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionParticipant to aggregate.
     */
    where?: SessionParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionParticipants to fetch.
     */
    orderBy?: SessionParticipantOrderByWithRelationInput | SessionParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SessionParticipants
    **/
    _count?: true | SessionParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionParticipantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionParticipantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionParticipantMaxAggregateInputType
  }

  export type GetSessionParticipantAggregateType<T extends SessionParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateSessionParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessionParticipant[P]>
      : GetScalarType<T[P], AggregateSessionParticipant[P]>
  }




  export type SessionParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionParticipantWhereInput
    orderBy?: SessionParticipantOrderByWithAggregationInput | SessionParticipantOrderByWithAggregationInput[]
    by: SessionParticipantScalarFieldEnum[] | SessionParticipantScalarFieldEnum
    having?: SessionParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionParticipantCountAggregateInputType | true
    _avg?: SessionParticipantAvgAggregateInputType
    _sum?: SessionParticipantSumAggregateInputType
    _min?: SessionParticipantMinAggregateInputType
    _max?: SessionParticipantMaxAggregateInputType
  }

  export type SessionParticipantGroupByOutputType = {
    id: string
    userId: string
    sessionId: string
    score: number
    joinedAt: Date
    _count: SessionParticipantCountAggregateOutputType | null
    _avg: SessionParticipantAvgAggregateOutputType | null
    _sum: SessionParticipantSumAggregateOutputType | null
    _min: SessionParticipantMinAggregateOutputType | null
    _max: SessionParticipantMaxAggregateOutputType | null
  }

  type GetSessionParticipantGroupByPayload<T extends SessionParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], SessionParticipantGroupByOutputType[P]>
        }
      >
    >


  export type SessionParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    score?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | QuizSessionDefaultArgs<ExtArgs>
    responses?: boolean | SessionParticipant$responsesArgs<ExtArgs>
    _count?: boolean | SessionParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionParticipant"]>

  export type SessionParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    score?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | QuizSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionParticipant"]>

  export type SessionParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    score?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | QuizSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionParticipant"]>

  export type SessionParticipantSelectScalar = {
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    score?: boolean
    joinedAt?: boolean
  }

  export type SessionParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "sessionId" | "score" | "joinedAt", ExtArgs["result"]["sessionParticipant"]>
  export type SessionParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | QuizSessionDefaultArgs<ExtArgs>
    responses?: boolean | SessionParticipant$responsesArgs<ExtArgs>
    _count?: boolean | SessionParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SessionParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | QuizSessionDefaultArgs<ExtArgs>
  }
  export type SessionParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | QuizSessionDefaultArgs<ExtArgs>
  }

  export type $SessionParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SessionParticipant"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      session: Prisma.$QuizSessionPayload<ExtArgs>
      responses: Prisma.$QuestionResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      sessionId: string
      score: number
      joinedAt: Date
    }, ExtArgs["result"]["sessionParticipant"]>
    composites: {}
  }

  type SessionParticipantGetPayload<S extends boolean | null | undefined | SessionParticipantDefaultArgs> = $Result.GetResult<Prisma.$SessionParticipantPayload, S>

  type SessionParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionParticipantCountAggregateInputType | true
    }

  export interface SessionParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SessionParticipant'], meta: { name: 'SessionParticipant' } }
    /**
     * Find zero or one SessionParticipant that matches the filter.
     * @param {SessionParticipantFindUniqueArgs} args - Arguments to find a SessionParticipant
     * @example
     * // Get one SessionParticipant
     * const sessionParticipant = await prisma.sessionParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionParticipantFindUniqueArgs>(args: SelectSubset<T, SessionParticipantFindUniqueArgs<ExtArgs>>): Prisma__SessionParticipantClient<$Result.GetResult<Prisma.$SessionParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SessionParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionParticipantFindUniqueOrThrowArgs} args - Arguments to find a SessionParticipant
     * @example
     * // Get one SessionParticipant
     * const sessionParticipant = await prisma.sessionParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionParticipantClient<$Result.GetResult<Prisma.$SessionParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionParticipantFindFirstArgs} args - Arguments to find a SessionParticipant
     * @example
     * // Get one SessionParticipant
     * const sessionParticipant = await prisma.sessionParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionParticipantFindFirstArgs>(args?: SelectSubset<T, SessionParticipantFindFirstArgs<ExtArgs>>): Prisma__SessionParticipantClient<$Result.GetResult<Prisma.$SessionParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionParticipantFindFirstOrThrowArgs} args - Arguments to find a SessionParticipant
     * @example
     * // Get one SessionParticipant
     * const sessionParticipant = await prisma.sessionParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionParticipantClient<$Result.GetResult<Prisma.$SessionParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SessionParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SessionParticipants
     * const sessionParticipants = await prisma.sessionParticipant.findMany()
     * 
     * // Get first 10 SessionParticipants
     * const sessionParticipants = await prisma.sessionParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionParticipantWithIdOnly = await prisma.sessionParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionParticipantFindManyArgs>(args?: SelectSubset<T, SessionParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SessionParticipant.
     * @param {SessionParticipantCreateArgs} args - Arguments to create a SessionParticipant.
     * @example
     * // Create one SessionParticipant
     * const SessionParticipant = await prisma.sessionParticipant.create({
     *   data: {
     *     // ... data to create a SessionParticipant
     *   }
     * })
     * 
     */
    create<T extends SessionParticipantCreateArgs>(args: SelectSubset<T, SessionParticipantCreateArgs<ExtArgs>>): Prisma__SessionParticipantClient<$Result.GetResult<Prisma.$SessionParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SessionParticipants.
     * @param {SessionParticipantCreateManyArgs} args - Arguments to create many SessionParticipants.
     * @example
     * // Create many SessionParticipants
     * const sessionParticipant = await prisma.sessionParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionParticipantCreateManyArgs>(args?: SelectSubset<T, SessionParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SessionParticipants and returns the data saved in the database.
     * @param {SessionParticipantCreateManyAndReturnArgs} args - Arguments to create many SessionParticipants.
     * @example
     * // Create many SessionParticipants
     * const sessionParticipant = await prisma.sessionParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SessionParticipants and only return the `id`
     * const sessionParticipantWithIdOnly = await prisma.sessionParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SessionParticipant.
     * @param {SessionParticipantDeleteArgs} args - Arguments to delete one SessionParticipant.
     * @example
     * // Delete one SessionParticipant
     * const SessionParticipant = await prisma.sessionParticipant.delete({
     *   where: {
     *     // ... filter to delete one SessionParticipant
     *   }
     * })
     * 
     */
    delete<T extends SessionParticipantDeleteArgs>(args: SelectSubset<T, SessionParticipantDeleteArgs<ExtArgs>>): Prisma__SessionParticipantClient<$Result.GetResult<Prisma.$SessionParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SessionParticipant.
     * @param {SessionParticipantUpdateArgs} args - Arguments to update one SessionParticipant.
     * @example
     * // Update one SessionParticipant
     * const sessionParticipant = await prisma.sessionParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionParticipantUpdateArgs>(args: SelectSubset<T, SessionParticipantUpdateArgs<ExtArgs>>): Prisma__SessionParticipantClient<$Result.GetResult<Prisma.$SessionParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SessionParticipants.
     * @param {SessionParticipantDeleteManyArgs} args - Arguments to filter SessionParticipants to delete.
     * @example
     * // Delete a few SessionParticipants
     * const { count } = await prisma.sessionParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionParticipantDeleteManyArgs>(args?: SelectSubset<T, SessionParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SessionParticipants
     * const sessionParticipant = await prisma.sessionParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionParticipantUpdateManyArgs>(args: SelectSubset<T, SessionParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionParticipants and returns the data updated in the database.
     * @param {SessionParticipantUpdateManyAndReturnArgs} args - Arguments to update many SessionParticipants.
     * @example
     * // Update many SessionParticipants
     * const sessionParticipant = await prisma.sessionParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SessionParticipants and only return the `id`
     * const sessionParticipantWithIdOnly = await prisma.sessionParticipant.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SessionParticipant.
     * @param {SessionParticipantUpsertArgs} args - Arguments to update or create a SessionParticipant.
     * @example
     * // Update or create a SessionParticipant
     * const sessionParticipant = await prisma.sessionParticipant.upsert({
     *   create: {
     *     // ... data to create a SessionParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SessionParticipant we want to update
     *   }
     * })
     */
    upsert<T extends SessionParticipantUpsertArgs>(args: SelectSubset<T, SessionParticipantUpsertArgs<ExtArgs>>): Prisma__SessionParticipantClient<$Result.GetResult<Prisma.$SessionParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SessionParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionParticipantCountArgs} args - Arguments to filter SessionParticipants to count.
     * @example
     * // Count the number of SessionParticipants
     * const count = await prisma.sessionParticipant.count({
     *   where: {
     *     // ... the filter for the SessionParticipants we want to count
     *   }
     * })
    **/
    count<T extends SessionParticipantCountArgs>(
      args?: Subset<T, SessionParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SessionParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionParticipantAggregateArgs>(args: Subset<T, SessionParticipantAggregateArgs>): Prisma.PrismaPromise<GetSessionParticipantAggregateType<T>>

    /**
     * Group by SessionParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionParticipantGroupByArgs} args - Group by arguments.
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
      T extends SessionParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionParticipantGroupByArgs['orderBy'] }
        : { orderBy?: SessionParticipantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SessionParticipant model
   */
  readonly fields: SessionParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SessionParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    session<T extends QuizSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizSessionDefaultArgs<ExtArgs>>): Prisma__QuizSessionClient<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    responses<T extends SessionParticipant$responsesArgs<ExtArgs> = {}>(args?: Subset<T, SessionParticipant$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SessionParticipant model
   */
  interface SessionParticipantFieldRefs {
    readonly id: FieldRef<"SessionParticipant", 'String'>
    readonly userId: FieldRef<"SessionParticipant", 'String'>
    readonly sessionId: FieldRef<"SessionParticipant", 'String'>
    readonly score: FieldRef<"SessionParticipant", 'Int'>
    readonly joinedAt: FieldRef<"SessionParticipant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SessionParticipant findUnique
   */
  export type SessionParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionParticipant
     */
    select?: SessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionParticipant
     */
    omit?: SessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionParticipantInclude<ExtArgs> | null
    /**
     * Filter, which SessionParticipant to fetch.
     */
    where: SessionParticipantWhereUniqueInput
  }

  /**
   * SessionParticipant findUniqueOrThrow
   */
  export type SessionParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionParticipant
     */
    select?: SessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionParticipant
     */
    omit?: SessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionParticipantInclude<ExtArgs> | null
    /**
     * Filter, which SessionParticipant to fetch.
     */
    where: SessionParticipantWhereUniqueInput
  }

  /**
   * SessionParticipant findFirst
   */
  export type SessionParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionParticipant
     */
    select?: SessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionParticipant
     */
    omit?: SessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionParticipantInclude<ExtArgs> | null
    /**
     * Filter, which SessionParticipant to fetch.
     */
    where?: SessionParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionParticipants to fetch.
     */
    orderBy?: SessionParticipantOrderByWithRelationInput | SessionParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionParticipants.
     */
    cursor?: SessionParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionParticipants.
     */
    distinct?: SessionParticipantScalarFieldEnum | SessionParticipantScalarFieldEnum[]
  }

  /**
   * SessionParticipant findFirstOrThrow
   */
  export type SessionParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionParticipant
     */
    select?: SessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionParticipant
     */
    omit?: SessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionParticipantInclude<ExtArgs> | null
    /**
     * Filter, which SessionParticipant to fetch.
     */
    where?: SessionParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionParticipants to fetch.
     */
    orderBy?: SessionParticipantOrderByWithRelationInput | SessionParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionParticipants.
     */
    cursor?: SessionParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionParticipants.
     */
    distinct?: SessionParticipantScalarFieldEnum | SessionParticipantScalarFieldEnum[]
  }

  /**
   * SessionParticipant findMany
   */
  export type SessionParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionParticipant
     */
    select?: SessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionParticipant
     */
    omit?: SessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionParticipantInclude<ExtArgs> | null
    /**
     * Filter, which SessionParticipants to fetch.
     */
    where?: SessionParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionParticipants to fetch.
     */
    orderBy?: SessionParticipantOrderByWithRelationInput | SessionParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SessionParticipants.
     */
    cursor?: SessionParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionParticipants.
     */
    skip?: number
    distinct?: SessionParticipantScalarFieldEnum | SessionParticipantScalarFieldEnum[]
  }

  /**
   * SessionParticipant create
   */
  export type SessionParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionParticipant
     */
    select?: SessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionParticipant
     */
    omit?: SessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a SessionParticipant.
     */
    data: XOR<SessionParticipantCreateInput, SessionParticipantUncheckedCreateInput>
  }

  /**
   * SessionParticipant createMany
   */
  export type SessionParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SessionParticipants.
     */
    data: SessionParticipantCreateManyInput | SessionParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SessionParticipant createManyAndReturn
   */
  export type SessionParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionParticipant
     */
    select?: SessionParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionParticipant
     */
    omit?: SessionParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many SessionParticipants.
     */
    data: SessionParticipantCreateManyInput | SessionParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionParticipant update
   */
  export type SessionParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionParticipant
     */
    select?: SessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionParticipant
     */
    omit?: SessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a SessionParticipant.
     */
    data: XOR<SessionParticipantUpdateInput, SessionParticipantUncheckedUpdateInput>
    /**
     * Choose, which SessionParticipant to update.
     */
    where: SessionParticipantWhereUniqueInput
  }

  /**
   * SessionParticipant updateMany
   */
  export type SessionParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SessionParticipants.
     */
    data: XOR<SessionParticipantUpdateManyMutationInput, SessionParticipantUncheckedUpdateManyInput>
    /**
     * Filter which SessionParticipants to update
     */
    where?: SessionParticipantWhereInput
    /**
     * Limit how many SessionParticipants to update.
     */
    limit?: number
  }

  /**
   * SessionParticipant updateManyAndReturn
   */
  export type SessionParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionParticipant
     */
    select?: SessionParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionParticipant
     */
    omit?: SessionParticipantOmit<ExtArgs> | null
    /**
     * The data used to update SessionParticipants.
     */
    data: XOR<SessionParticipantUpdateManyMutationInput, SessionParticipantUncheckedUpdateManyInput>
    /**
     * Filter which SessionParticipants to update
     */
    where?: SessionParticipantWhereInput
    /**
     * Limit how many SessionParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionParticipant upsert
   */
  export type SessionParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionParticipant
     */
    select?: SessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionParticipant
     */
    omit?: SessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the SessionParticipant to update in case it exists.
     */
    where: SessionParticipantWhereUniqueInput
    /**
     * In case the SessionParticipant found by the `where` argument doesn't exist, create a new SessionParticipant with this data.
     */
    create: XOR<SessionParticipantCreateInput, SessionParticipantUncheckedCreateInput>
    /**
     * In case the SessionParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionParticipantUpdateInput, SessionParticipantUncheckedUpdateInput>
  }

  /**
   * SessionParticipant delete
   */
  export type SessionParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionParticipant
     */
    select?: SessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionParticipant
     */
    omit?: SessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionParticipantInclude<ExtArgs> | null
    /**
     * Filter which SessionParticipant to delete.
     */
    where: SessionParticipantWhereUniqueInput
  }

  /**
   * SessionParticipant deleteMany
   */
  export type SessionParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionParticipants to delete
     */
    where?: SessionParticipantWhereInput
    /**
     * Limit how many SessionParticipants to delete.
     */
    limit?: number
  }

  /**
   * SessionParticipant.responses
   */
  export type SessionParticipant$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    where?: QuestionResponseWhereInput
    orderBy?: QuestionResponseOrderByWithRelationInput | QuestionResponseOrderByWithRelationInput[]
    cursor?: QuestionResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionResponseScalarFieldEnum | QuestionResponseScalarFieldEnum[]
  }

  /**
   * SessionParticipant without action
   */
  export type SessionParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionParticipant
     */
    select?: SessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionParticipant
     */
    omit?: SessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionParticipantInclude<ExtArgs> | null
  }


  /**
   * Model QuestionResponse
   */

  export type AggregateQuestionResponse = {
    _count: QuestionResponseCountAggregateOutputType | null
    _min: QuestionResponseMinAggregateOutputType | null
    _max: QuestionResponseMaxAggregateOutputType | null
  }

  export type QuestionResponseMinAggregateOutputType = {
    id: string | null
    participantId: string | null
    questionId: string | null
    selectedId: string | null
    submittedAt: Date | null
    isCorrect: boolean | null
  }

  export type QuestionResponseMaxAggregateOutputType = {
    id: string | null
    participantId: string | null
    questionId: string | null
    selectedId: string | null
    submittedAt: Date | null
    isCorrect: boolean | null
  }

  export type QuestionResponseCountAggregateOutputType = {
    id: number
    participantId: number
    questionId: number
    selectedId: number
    submittedAt: number
    isCorrect: number
    _all: number
  }


  export type QuestionResponseMinAggregateInputType = {
    id?: true
    participantId?: true
    questionId?: true
    selectedId?: true
    submittedAt?: true
    isCorrect?: true
  }

  export type QuestionResponseMaxAggregateInputType = {
    id?: true
    participantId?: true
    questionId?: true
    selectedId?: true
    submittedAt?: true
    isCorrect?: true
  }

  export type QuestionResponseCountAggregateInputType = {
    id?: true
    participantId?: true
    questionId?: true
    selectedId?: true
    submittedAt?: true
    isCorrect?: true
    _all?: true
  }

  export type QuestionResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionResponse to aggregate.
     */
    where?: QuestionResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionResponses to fetch.
     */
    orderBy?: QuestionResponseOrderByWithRelationInput | QuestionResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestionResponses
    **/
    _count?: true | QuestionResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionResponseMaxAggregateInputType
  }

  export type GetQuestionResponseAggregateType<T extends QuestionResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionResponse[P]>
      : GetScalarType<T[P], AggregateQuestionResponse[P]>
  }




  export type QuestionResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionResponseWhereInput
    orderBy?: QuestionResponseOrderByWithAggregationInput | QuestionResponseOrderByWithAggregationInput[]
    by: QuestionResponseScalarFieldEnum[] | QuestionResponseScalarFieldEnum
    having?: QuestionResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionResponseCountAggregateInputType | true
    _min?: QuestionResponseMinAggregateInputType
    _max?: QuestionResponseMaxAggregateInputType
  }

  export type QuestionResponseGroupByOutputType = {
    id: string
    participantId: string
    questionId: string
    selectedId: string | null
    submittedAt: Date
    isCorrect: boolean
    _count: QuestionResponseCountAggregateOutputType | null
    _min: QuestionResponseMinAggregateOutputType | null
    _max: QuestionResponseMaxAggregateOutputType | null
  }

  type GetQuestionResponseGroupByPayload<T extends QuestionResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionResponseGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionResponseGroupByOutputType[P]>
        }
      >
    >


  export type QuestionResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participantId?: boolean
    questionId?: boolean
    selectedId?: boolean
    submittedAt?: boolean
    isCorrect?: boolean
    participant?: boolean | SessionParticipantDefaultArgs<ExtArgs>
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
    selectedOption?: boolean | QuestionResponse$selectedOptionArgs<ExtArgs>
  }, ExtArgs["result"]["questionResponse"]>

  export type QuestionResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participantId?: boolean
    questionId?: boolean
    selectedId?: boolean
    submittedAt?: boolean
    isCorrect?: boolean
    participant?: boolean | SessionParticipantDefaultArgs<ExtArgs>
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
    selectedOption?: boolean | QuestionResponse$selectedOptionArgs<ExtArgs>
  }, ExtArgs["result"]["questionResponse"]>

  export type QuestionResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participantId?: boolean
    questionId?: boolean
    selectedId?: boolean
    submittedAt?: boolean
    isCorrect?: boolean
    participant?: boolean | SessionParticipantDefaultArgs<ExtArgs>
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
    selectedOption?: boolean | QuestionResponse$selectedOptionArgs<ExtArgs>
  }, ExtArgs["result"]["questionResponse"]>

  export type QuestionResponseSelectScalar = {
    id?: boolean
    participantId?: boolean
    questionId?: boolean
    selectedId?: boolean
    submittedAt?: boolean
    isCorrect?: boolean
  }

  export type QuestionResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "participantId" | "questionId" | "selectedId" | "submittedAt" | "isCorrect", ExtArgs["result"]["questionResponse"]>
  export type QuestionResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | SessionParticipantDefaultArgs<ExtArgs>
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
    selectedOption?: boolean | QuestionResponse$selectedOptionArgs<ExtArgs>
  }
  export type QuestionResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | SessionParticipantDefaultArgs<ExtArgs>
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
    selectedOption?: boolean | QuestionResponse$selectedOptionArgs<ExtArgs>
  }
  export type QuestionResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | SessionParticipantDefaultArgs<ExtArgs>
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
    selectedOption?: boolean | QuestionResponse$selectedOptionArgs<ExtArgs>
  }

  export type $QuestionResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestionResponse"
    objects: {
      participant: Prisma.$SessionParticipantPayload<ExtArgs>
      question: Prisma.$QuizQuestionPayload<ExtArgs>
      selectedOption: Prisma.$QuestionAnswerOptionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      participantId: string
      questionId: string
      selectedId: string | null
      submittedAt: Date
      isCorrect: boolean
    }, ExtArgs["result"]["questionResponse"]>
    composites: {}
  }

  type QuestionResponseGetPayload<S extends boolean | null | undefined | QuestionResponseDefaultArgs> = $Result.GetResult<Prisma.$QuestionResponsePayload, S>

  type QuestionResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionResponseCountAggregateInputType | true
    }

  export interface QuestionResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestionResponse'], meta: { name: 'QuestionResponse' } }
    /**
     * Find zero or one QuestionResponse that matches the filter.
     * @param {QuestionResponseFindUniqueArgs} args - Arguments to find a QuestionResponse
     * @example
     * // Get one QuestionResponse
     * const questionResponse = await prisma.questionResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionResponseFindUniqueArgs>(args: SelectSubset<T, QuestionResponseFindUniqueArgs<ExtArgs>>): Prisma__QuestionResponseClient<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuestionResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionResponseFindUniqueOrThrowArgs} args - Arguments to find a QuestionResponse
     * @example
     * // Get one QuestionResponse
     * const questionResponse = await prisma.questionResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionResponseClient<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionResponseFindFirstArgs} args - Arguments to find a QuestionResponse
     * @example
     * // Get one QuestionResponse
     * const questionResponse = await prisma.questionResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionResponseFindFirstArgs>(args?: SelectSubset<T, QuestionResponseFindFirstArgs<ExtArgs>>): Prisma__QuestionResponseClient<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionResponseFindFirstOrThrowArgs} args - Arguments to find a QuestionResponse
     * @example
     * // Get one QuestionResponse
     * const questionResponse = await prisma.questionResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionResponseClient<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuestionResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionResponses
     * const questionResponses = await prisma.questionResponse.findMany()
     * 
     * // Get first 10 QuestionResponses
     * const questionResponses = await prisma.questionResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionResponseWithIdOnly = await prisma.questionResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionResponseFindManyArgs>(args?: SelectSubset<T, QuestionResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuestionResponse.
     * @param {QuestionResponseCreateArgs} args - Arguments to create a QuestionResponse.
     * @example
     * // Create one QuestionResponse
     * const QuestionResponse = await prisma.questionResponse.create({
     *   data: {
     *     // ... data to create a QuestionResponse
     *   }
     * })
     * 
     */
    create<T extends QuestionResponseCreateArgs>(args: SelectSubset<T, QuestionResponseCreateArgs<ExtArgs>>): Prisma__QuestionResponseClient<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuestionResponses.
     * @param {QuestionResponseCreateManyArgs} args - Arguments to create many QuestionResponses.
     * @example
     * // Create many QuestionResponses
     * const questionResponse = await prisma.questionResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionResponseCreateManyArgs>(args?: SelectSubset<T, QuestionResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuestionResponses and returns the data saved in the database.
     * @param {QuestionResponseCreateManyAndReturnArgs} args - Arguments to create many QuestionResponses.
     * @example
     * // Create many QuestionResponses
     * const questionResponse = await prisma.questionResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuestionResponses and only return the `id`
     * const questionResponseWithIdOnly = await prisma.questionResponse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuestionResponse.
     * @param {QuestionResponseDeleteArgs} args - Arguments to delete one QuestionResponse.
     * @example
     * // Delete one QuestionResponse
     * const QuestionResponse = await prisma.questionResponse.delete({
     *   where: {
     *     // ... filter to delete one QuestionResponse
     *   }
     * })
     * 
     */
    delete<T extends QuestionResponseDeleteArgs>(args: SelectSubset<T, QuestionResponseDeleteArgs<ExtArgs>>): Prisma__QuestionResponseClient<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuestionResponse.
     * @param {QuestionResponseUpdateArgs} args - Arguments to update one QuestionResponse.
     * @example
     * // Update one QuestionResponse
     * const questionResponse = await prisma.questionResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionResponseUpdateArgs>(args: SelectSubset<T, QuestionResponseUpdateArgs<ExtArgs>>): Prisma__QuestionResponseClient<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuestionResponses.
     * @param {QuestionResponseDeleteManyArgs} args - Arguments to filter QuestionResponses to delete.
     * @example
     * // Delete a few QuestionResponses
     * const { count } = await prisma.questionResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionResponseDeleteManyArgs>(args?: SelectSubset<T, QuestionResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionResponses
     * const questionResponse = await prisma.questionResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionResponseUpdateManyArgs>(args: SelectSubset<T, QuestionResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionResponses and returns the data updated in the database.
     * @param {QuestionResponseUpdateManyAndReturnArgs} args - Arguments to update many QuestionResponses.
     * @example
     * // Update many QuestionResponses
     * const questionResponse = await prisma.questionResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuestionResponses and only return the `id`
     * const questionResponseWithIdOnly = await prisma.questionResponse.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestionResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuestionResponse.
     * @param {QuestionResponseUpsertArgs} args - Arguments to update or create a QuestionResponse.
     * @example
     * // Update or create a QuestionResponse
     * const questionResponse = await prisma.questionResponse.upsert({
     *   create: {
     *     // ... data to create a QuestionResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionResponse we want to update
     *   }
     * })
     */
    upsert<T extends QuestionResponseUpsertArgs>(args: SelectSubset<T, QuestionResponseUpsertArgs<ExtArgs>>): Prisma__QuestionResponseClient<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuestionResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionResponseCountArgs} args - Arguments to filter QuestionResponses to count.
     * @example
     * // Count the number of QuestionResponses
     * const count = await prisma.questionResponse.count({
     *   where: {
     *     // ... the filter for the QuestionResponses we want to count
     *   }
     * })
    **/
    count<T extends QuestionResponseCountArgs>(
      args?: Subset<T, QuestionResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionResponseAggregateArgs>(args: Subset<T, QuestionResponseAggregateArgs>): Prisma.PrismaPromise<GetQuestionResponseAggregateType<T>>

    /**
     * Group by QuestionResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionResponseGroupByArgs} args - Group by arguments.
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
      T extends QuestionResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionResponseGroupByArgs['orderBy'] }
        : { orderBy?: QuestionResponseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestionResponse model
   */
  readonly fields: QuestionResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participant<T extends SessionParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionParticipantDefaultArgs<ExtArgs>>): Prisma__SessionParticipantClient<$Result.GetResult<Prisma.$SessionParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuizQuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizQuestionDefaultArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    selectedOption<T extends QuestionResponse$selectedOptionArgs<ExtArgs> = {}>(args?: Subset<T, QuestionResponse$selectedOptionArgs<ExtArgs>>): Prisma__QuestionAnswerOptionClient<$Result.GetResult<Prisma.$QuestionAnswerOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QuestionResponse model
   */
  interface QuestionResponseFieldRefs {
    readonly id: FieldRef<"QuestionResponse", 'String'>
    readonly participantId: FieldRef<"QuestionResponse", 'String'>
    readonly questionId: FieldRef<"QuestionResponse", 'String'>
    readonly selectedId: FieldRef<"QuestionResponse", 'String'>
    readonly submittedAt: FieldRef<"QuestionResponse", 'DateTime'>
    readonly isCorrect: FieldRef<"QuestionResponse", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * QuestionResponse findUnique
   */
  export type QuestionResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    /**
     * Filter, which QuestionResponse to fetch.
     */
    where: QuestionResponseWhereUniqueInput
  }

  /**
   * QuestionResponse findUniqueOrThrow
   */
  export type QuestionResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    /**
     * Filter, which QuestionResponse to fetch.
     */
    where: QuestionResponseWhereUniqueInput
  }

  /**
   * QuestionResponse findFirst
   */
  export type QuestionResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    /**
     * Filter, which QuestionResponse to fetch.
     */
    where?: QuestionResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionResponses to fetch.
     */
    orderBy?: QuestionResponseOrderByWithRelationInput | QuestionResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionResponses.
     */
    cursor?: QuestionResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionResponses.
     */
    distinct?: QuestionResponseScalarFieldEnum | QuestionResponseScalarFieldEnum[]
  }

  /**
   * QuestionResponse findFirstOrThrow
   */
  export type QuestionResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    /**
     * Filter, which QuestionResponse to fetch.
     */
    where?: QuestionResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionResponses to fetch.
     */
    orderBy?: QuestionResponseOrderByWithRelationInput | QuestionResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionResponses.
     */
    cursor?: QuestionResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionResponses.
     */
    distinct?: QuestionResponseScalarFieldEnum | QuestionResponseScalarFieldEnum[]
  }

  /**
   * QuestionResponse findMany
   */
  export type QuestionResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    /**
     * Filter, which QuestionResponses to fetch.
     */
    where?: QuestionResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionResponses to fetch.
     */
    orderBy?: QuestionResponseOrderByWithRelationInput | QuestionResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestionResponses.
     */
    cursor?: QuestionResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionResponses.
     */
    skip?: number
    distinct?: QuestionResponseScalarFieldEnum | QuestionResponseScalarFieldEnum[]
  }

  /**
   * QuestionResponse create
   */
  export type QuestionResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestionResponse.
     */
    data: XOR<QuestionResponseCreateInput, QuestionResponseUncheckedCreateInput>
  }

  /**
   * QuestionResponse createMany
   */
  export type QuestionResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestionResponses.
     */
    data: QuestionResponseCreateManyInput | QuestionResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuestionResponse createManyAndReturn
   */
  export type QuestionResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * The data used to create many QuestionResponses.
     */
    data: QuestionResponseCreateManyInput | QuestionResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionResponse update
   */
  export type QuestionResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestionResponse.
     */
    data: XOR<QuestionResponseUpdateInput, QuestionResponseUncheckedUpdateInput>
    /**
     * Choose, which QuestionResponse to update.
     */
    where: QuestionResponseWhereUniqueInput
  }

  /**
   * QuestionResponse updateMany
   */
  export type QuestionResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestionResponses.
     */
    data: XOR<QuestionResponseUpdateManyMutationInput, QuestionResponseUncheckedUpdateManyInput>
    /**
     * Filter which QuestionResponses to update
     */
    where?: QuestionResponseWhereInput
    /**
     * Limit how many QuestionResponses to update.
     */
    limit?: number
  }

  /**
   * QuestionResponse updateManyAndReturn
   */
  export type QuestionResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * The data used to update QuestionResponses.
     */
    data: XOR<QuestionResponseUpdateManyMutationInput, QuestionResponseUncheckedUpdateManyInput>
    /**
     * Filter which QuestionResponses to update
     */
    where?: QuestionResponseWhereInput
    /**
     * Limit how many QuestionResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionResponse upsert
   */
  export type QuestionResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestionResponse to update in case it exists.
     */
    where: QuestionResponseWhereUniqueInput
    /**
     * In case the QuestionResponse found by the `where` argument doesn't exist, create a new QuestionResponse with this data.
     */
    create: XOR<QuestionResponseCreateInput, QuestionResponseUncheckedCreateInput>
    /**
     * In case the QuestionResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionResponseUpdateInput, QuestionResponseUncheckedUpdateInput>
  }

  /**
   * QuestionResponse delete
   */
  export type QuestionResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    /**
     * Filter which QuestionResponse to delete.
     */
    where: QuestionResponseWhereUniqueInput
  }

  /**
   * QuestionResponse deleteMany
   */
  export type QuestionResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionResponses to delete
     */
    where?: QuestionResponseWhereInput
    /**
     * Limit how many QuestionResponses to delete.
     */
    limit?: number
  }

  /**
   * QuestionResponse.selectedOption
   */
  export type QuestionResponse$selectedOptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionAnswerOption
     */
    select?: QuestionAnswerOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionAnswerOption
     */
    omit?: QuestionAnswerOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionAnswerOptionInclude<ExtArgs> | null
    where?: QuestionAnswerOptionWhereInput
  }

  /**
   * QuestionResponse without action
   */
  export type QuestionResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
  }


  /**
   * Model QuizCategory
   */

  export type AggregateQuizCategory = {
    _count: QuizCategoryCountAggregateOutputType | null
    _min: QuizCategoryMinAggregateOutputType | null
    _max: QuizCategoryMaxAggregateOutputType | null
  }

  export type QuizCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type QuizCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type QuizCategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type QuizCategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type QuizCategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type QuizCategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type QuizCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizCategory to aggregate.
     */
    where?: QuizCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizCategories to fetch.
     */
    orderBy?: QuizCategoryOrderByWithRelationInput | QuizCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizCategories
    **/
    _count?: true | QuizCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizCategoryMaxAggregateInputType
  }

  export type GetQuizCategoryAggregateType<T extends QuizCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizCategory[P]>
      : GetScalarType<T[P], AggregateQuizCategory[P]>
  }




  export type QuizCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizCategoryWhereInput
    orderBy?: QuizCategoryOrderByWithAggregationInput | QuizCategoryOrderByWithAggregationInput[]
    by: QuizCategoryScalarFieldEnum[] | QuizCategoryScalarFieldEnum
    having?: QuizCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizCategoryCountAggregateInputType | true
    _min?: QuizCategoryMinAggregateInputType
    _max?: QuizCategoryMaxAggregateInputType
  }

  export type QuizCategoryGroupByOutputType = {
    id: string
    name: string
    _count: QuizCategoryCountAggregateOutputType | null
    _min: QuizCategoryMinAggregateOutputType | null
    _max: QuizCategoryMaxAggregateOutputType | null
  }

  type GetQuizCategoryGroupByPayload<T extends QuizCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], QuizCategoryGroupByOutputType[P]>
        }
      >
    >


  export type QuizCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quizzes?: boolean | QuizCategory$quizzesArgs<ExtArgs>
    _count?: boolean | QuizCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizCategory"]>

  export type QuizCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["quizCategory"]>

  export type QuizCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["quizCategory"]>

  export type QuizCategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type QuizCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["quizCategory"]>
  export type QuizCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizzes?: boolean | QuizCategory$quizzesArgs<ExtArgs>
    _count?: boolean | QuizCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type QuizCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QuizCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizCategory"
    objects: {
      quizzes: Prisma.$QuizPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["quizCategory"]>
    composites: {}
  }

  type QuizCategoryGetPayload<S extends boolean | null | undefined | QuizCategoryDefaultArgs> = $Result.GetResult<Prisma.$QuizCategoryPayload, S>

  type QuizCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizCategoryCountAggregateInputType | true
    }

  export interface QuizCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizCategory'], meta: { name: 'QuizCategory' } }
    /**
     * Find zero or one QuizCategory that matches the filter.
     * @param {QuizCategoryFindUniqueArgs} args - Arguments to find a QuizCategory
     * @example
     * // Get one QuizCategory
     * const quizCategory = await prisma.quizCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizCategoryFindUniqueArgs>(args: SelectSubset<T, QuizCategoryFindUniqueArgs<ExtArgs>>): Prisma__QuizCategoryClient<$Result.GetResult<Prisma.$QuizCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizCategoryFindUniqueOrThrowArgs} args - Arguments to find a QuizCategory
     * @example
     * // Get one QuizCategory
     * const quizCategory = await prisma.quizCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizCategoryClient<$Result.GetResult<Prisma.$QuizCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCategoryFindFirstArgs} args - Arguments to find a QuizCategory
     * @example
     * // Get one QuizCategory
     * const quizCategory = await prisma.quizCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizCategoryFindFirstArgs>(args?: SelectSubset<T, QuizCategoryFindFirstArgs<ExtArgs>>): Prisma__QuizCategoryClient<$Result.GetResult<Prisma.$QuizCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCategoryFindFirstOrThrowArgs} args - Arguments to find a QuizCategory
     * @example
     * // Get one QuizCategory
     * const quizCategory = await prisma.quizCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizCategoryClient<$Result.GetResult<Prisma.$QuizCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizCategories
     * const quizCategories = await prisma.quizCategory.findMany()
     * 
     * // Get first 10 QuizCategories
     * const quizCategories = await prisma.quizCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizCategoryWithIdOnly = await prisma.quizCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizCategoryFindManyArgs>(args?: SelectSubset<T, QuizCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizCategory.
     * @param {QuizCategoryCreateArgs} args - Arguments to create a QuizCategory.
     * @example
     * // Create one QuizCategory
     * const QuizCategory = await prisma.quizCategory.create({
     *   data: {
     *     // ... data to create a QuizCategory
     *   }
     * })
     * 
     */
    create<T extends QuizCategoryCreateArgs>(args: SelectSubset<T, QuizCategoryCreateArgs<ExtArgs>>): Prisma__QuizCategoryClient<$Result.GetResult<Prisma.$QuizCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizCategories.
     * @param {QuizCategoryCreateManyArgs} args - Arguments to create many QuizCategories.
     * @example
     * // Create many QuizCategories
     * const quizCategory = await prisma.quizCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizCategoryCreateManyArgs>(args?: SelectSubset<T, QuizCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizCategories and returns the data saved in the database.
     * @param {QuizCategoryCreateManyAndReturnArgs} args - Arguments to create many QuizCategories.
     * @example
     * // Create many QuizCategories
     * const quizCategory = await prisma.quizCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizCategories and only return the `id`
     * const quizCategoryWithIdOnly = await prisma.quizCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizCategory.
     * @param {QuizCategoryDeleteArgs} args - Arguments to delete one QuizCategory.
     * @example
     * // Delete one QuizCategory
     * const QuizCategory = await prisma.quizCategory.delete({
     *   where: {
     *     // ... filter to delete one QuizCategory
     *   }
     * })
     * 
     */
    delete<T extends QuizCategoryDeleteArgs>(args: SelectSubset<T, QuizCategoryDeleteArgs<ExtArgs>>): Prisma__QuizCategoryClient<$Result.GetResult<Prisma.$QuizCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizCategory.
     * @param {QuizCategoryUpdateArgs} args - Arguments to update one QuizCategory.
     * @example
     * // Update one QuizCategory
     * const quizCategory = await prisma.quizCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizCategoryUpdateArgs>(args: SelectSubset<T, QuizCategoryUpdateArgs<ExtArgs>>): Prisma__QuizCategoryClient<$Result.GetResult<Prisma.$QuizCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizCategories.
     * @param {QuizCategoryDeleteManyArgs} args - Arguments to filter QuizCategories to delete.
     * @example
     * // Delete a few QuizCategories
     * const { count } = await prisma.quizCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizCategoryDeleteManyArgs>(args?: SelectSubset<T, QuizCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizCategories
     * const quizCategory = await prisma.quizCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizCategoryUpdateManyArgs>(args: SelectSubset<T, QuizCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizCategories and returns the data updated in the database.
     * @param {QuizCategoryUpdateManyAndReturnArgs} args - Arguments to update many QuizCategories.
     * @example
     * // Update many QuizCategories
     * const quizCategory = await prisma.quizCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizCategories and only return the `id`
     * const quizCategoryWithIdOnly = await prisma.quizCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuizCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizCategory.
     * @param {QuizCategoryUpsertArgs} args - Arguments to update or create a QuizCategory.
     * @example
     * // Update or create a QuizCategory
     * const quizCategory = await prisma.quizCategory.upsert({
     *   create: {
     *     // ... data to create a QuizCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizCategory we want to update
     *   }
     * })
     */
    upsert<T extends QuizCategoryUpsertArgs>(args: SelectSubset<T, QuizCategoryUpsertArgs<ExtArgs>>): Prisma__QuizCategoryClient<$Result.GetResult<Prisma.$QuizCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCategoryCountArgs} args - Arguments to filter QuizCategories to count.
     * @example
     * // Count the number of QuizCategories
     * const count = await prisma.quizCategory.count({
     *   where: {
     *     // ... the filter for the QuizCategories we want to count
     *   }
     * })
    **/
    count<T extends QuizCategoryCountArgs>(
      args?: Subset<T, QuizCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizCategoryAggregateArgs>(args: Subset<T, QuizCategoryAggregateArgs>): Prisma.PrismaPromise<GetQuizCategoryAggregateType<T>>

    /**
     * Group by QuizCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCategoryGroupByArgs} args - Group by arguments.
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
      T extends QuizCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizCategoryGroupByArgs['orderBy'] }
        : { orderBy?: QuizCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizCategory model
   */
  readonly fields: QuizCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quizzes<T extends QuizCategory$quizzesArgs<ExtArgs> = {}>(args?: Subset<T, QuizCategory$quizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the QuizCategory model
   */
  interface QuizCategoryFieldRefs {
    readonly id: FieldRef<"QuizCategory", 'String'>
    readonly name: FieldRef<"QuizCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuizCategory findUnique
   */
  export type QuizCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCategory
     */
    select?: QuizCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCategory
     */
    omit?: QuizCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCategoryInclude<ExtArgs> | null
    /**
     * Filter, which QuizCategory to fetch.
     */
    where: QuizCategoryWhereUniqueInput
  }

  /**
   * QuizCategory findUniqueOrThrow
   */
  export type QuizCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCategory
     */
    select?: QuizCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCategory
     */
    omit?: QuizCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCategoryInclude<ExtArgs> | null
    /**
     * Filter, which QuizCategory to fetch.
     */
    where: QuizCategoryWhereUniqueInput
  }

  /**
   * QuizCategory findFirst
   */
  export type QuizCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCategory
     */
    select?: QuizCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCategory
     */
    omit?: QuizCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCategoryInclude<ExtArgs> | null
    /**
     * Filter, which QuizCategory to fetch.
     */
    where?: QuizCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizCategories to fetch.
     */
    orderBy?: QuizCategoryOrderByWithRelationInput | QuizCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizCategories.
     */
    cursor?: QuizCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizCategories.
     */
    distinct?: QuizCategoryScalarFieldEnum | QuizCategoryScalarFieldEnum[]
  }

  /**
   * QuizCategory findFirstOrThrow
   */
  export type QuizCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCategory
     */
    select?: QuizCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCategory
     */
    omit?: QuizCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCategoryInclude<ExtArgs> | null
    /**
     * Filter, which QuizCategory to fetch.
     */
    where?: QuizCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizCategories to fetch.
     */
    orderBy?: QuizCategoryOrderByWithRelationInput | QuizCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizCategories.
     */
    cursor?: QuizCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizCategories.
     */
    distinct?: QuizCategoryScalarFieldEnum | QuizCategoryScalarFieldEnum[]
  }

  /**
   * QuizCategory findMany
   */
  export type QuizCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCategory
     */
    select?: QuizCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCategory
     */
    omit?: QuizCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCategoryInclude<ExtArgs> | null
    /**
     * Filter, which QuizCategories to fetch.
     */
    where?: QuizCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizCategories to fetch.
     */
    orderBy?: QuizCategoryOrderByWithRelationInput | QuizCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizCategories.
     */
    cursor?: QuizCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizCategories.
     */
    skip?: number
    distinct?: QuizCategoryScalarFieldEnum | QuizCategoryScalarFieldEnum[]
  }

  /**
   * QuizCategory create
   */
  export type QuizCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCategory
     */
    select?: QuizCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCategory
     */
    omit?: QuizCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizCategory.
     */
    data: XOR<QuizCategoryCreateInput, QuizCategoryUncheckedCreateInput>
  }

  /**
   * QuizCategory createMany
   */
  export type QuizCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizCategories.
     */
    data: QuizCategoryCreateManyInput | QuizCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizCategory createManyAndReturn
   */
  export type QuizCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCategory
     */
    select?: QuizCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCategory
     */
    omit?: QuizCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many QuizCategories.
     */
    data: QuizCategoryCreateManyInput | QuizCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizCategory update
   */
  export type QuizCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCategory
     */
    select?: QuizCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCategory
     */
    omit?: QuizCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizCategory.
     */
    data: XOR<QuizCategoryUpdateInput, QuizCategoryUncheckedUpdateInput>
    /**
     * Choose, which QuizCategory to update.
     */
    where: QuizCategoryWhereUniqueInput
  }

  /**
   * QuizCategory updateMany
   */
  export type QuizCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizCategories.
     */
    data: XOR<QuizCategoryUpdateManyMutationInput, QuizCategoryUncheckedUpdateManyInput>
    /**
     * Filter which QuizCategories to update
     */
    where?: QuizCategoryWhereInput
    /**
     * Limit how many QuizCategories to update.
     */
    limit?: number
  }

  /**
   * QuizCategory updateManyAndReturn
   */
  export type QuizCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCategory
     */
    select?: QuizCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCategory
     */
    omit?: QuizCategoryOmit<ExtArgs> | null
    /**
     * The data used to update QuizCategories.
     */
    data: XOR<QuizCategoryUpdateManyMutationInput, QuizCategoryUncheckedUpdateManyInput>
    /**
     * Filter which QuizCategories to update
     */
    where?: QuizCategoryWhereInput
    /**
     * Limit how many QuizCategories to update.
     */
    limit?: number
  }

  /**
   * QuizCategory upsert
   */
  export type QuizCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCategory
     */
    select?: QuizCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCategory
     */
    omit?: QuizCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizCategory to update in case it exists.
     */
    where: QuizCategoryWhereUniqueInput
    /**
     * In case the QuizCategory found by the `where` argument doesn't exist, create a new QuizCategory with this data.
     */
    create: XOR<QuizCategoryCreateInput, QuizCategoryUncheckedCreateInput>
    /**
     * In case the QuizCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizCategoryUpdateInput, QuizCategoryUncheckedUpdateInput>
  }

  /**
   * QuizCategory delete
   */
  export type QuizCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCategory
     */
    select?: QuizCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCategory
     */
    omit?: QuizCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCategoryInclude<ExtArgs> | null
    /**
     * Filter which QuizCategory to delete.
     */
    where: QuizCategoryWhereUniqueInput
  }

  /**
   * QuizCategory deleteMany
   */
  export type QuizCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizCategories to delete
     */
    where?: QuizCategoryWhereInput
    /**
     * Limit how many QuizCategories to delete.
     */
    limit?: number
  }

  /**
   * QuizCategory.quizzes
   */
  export type QuizCategory$quizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * QuizCategory without action
   */
  export type QuizCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCategory
     */
    select?: QuizCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCategory
     */
    omit?: QuizCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCategoryInclude<ExtArgs> | null
  }


  /**
   * Model QuizLeaderboard
   */

  export type AggregateQuizLeaderboard = {
    _count: QuizLeaderboardCountAggregateOutputType | null
    _avg: QuizLeaderboardAvgAggregateOutputType | null
    _sum: QuizLeaderboardSumAggregateOutputType | null
    _min: QuizLeaderboardMinAggregateOutputType | null
    _max: QuizLeaderboardMaxAggregateOutputType | null
  }

  export type QuizLeaderboardAvgAggregateOutputType = {
    score: number | null
    accuracy: number | null
    attempts: number | null
  }

  export type QuizLeaderboardSumAggregateOutputType = {
    score: number | null
    accuracy: number | null
    attempts: number | null
  }

  export type QuizLeaderboardMinAggregateOutputType = {
    id: string | null
    userId: string | null
    quizId: string | null
    score: number | null
    accuracy: number | null
    attempts: number | null
  }

  export type QuizLeaderboardMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    quizId: string | null
    score: number | null
    accuracy: number | null
    attempts: number | null
  }

  export type QuizLeaderboardCountAggregateOutputType = {
    id: number
    userId: number
    quizId: number
    score: number
    accuracy: number
    attempts: number
    _all: number
  }


  export type QuizLeaderboardAvgAggregateInputType = {
    score?: true
    accuracy?: true
    attempts?: true
  }

  export type QuizLeaderboardSumAggregateInputType = {
    score?: true
    accuracy?: true
    attempts?: true
  }

  export type QuizLeaderboardMinAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    score?: true
    accuracy?: true
    attempts?: true
  }

  export type QuizLeaderboardMaxAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    score?: true
    accuracy?: true
    attempts?: true
  }

  export type QuizLeaderboardCountAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    score?: true
    accuracy?: true
    attempts?: true
    _all?: true
  }

  export type QuizLeaderboardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizLeaderboard to aggregate.
     */
    where?: QuizLeaderboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizLeaderboards to fetch.
     */
    orderBy?: QuizLeaderboardOrderByWithRelationInput | QuizLeaderboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizLeaderboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizLeaderboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizLeaderboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizLeaderboards
    **/
    _count?: true | QuizLeaderboardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizLeaderboardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizLeaderboardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizLeaderboardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizLeaderboardMaxAggregateInputType
  }

  export type GetQuizLeaderboardAggregateType<T extends QuizLeaderboardAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizLeaderboard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizLeaderboard[P]>
      : GetScalarType<T[P], AggregateQuizLeaderboard[P]>
  }




  export type QuizLeaderboardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizLeaderboardWhereInput
    orderBy?: QuizLeaderboardOrderByWithAggregationInput | QuizLeaderboardOrderByWithAggregationInput[]
    by: QuizLeaderboardScalarFieldEnum[] | QuizLeaderboardScalarFieldEnum
    having?: QuizLeaderboardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizLeaderboardCountAggregateInputType | true
    _avg?: QuizLeaderboardAvgAggregateInputType
    _sum?: QuizLeaderboardSumAggregateInputType
    _min?: QuizLeaderboardMinAggregateInputType
    _max?: QuizLeaderboardMaxAggregateInputType
  }

  export type QuizLeaderboardGroupByOutputType = {
    id: string
    userId: string
    quizId: string
    score: number
    accuracy: number
    attempts: number
    _count: QuizLeaderboardCountAggregateOutputType | null
    _avg: QuizLeaderboardAvgAggregateOutputType | null
    _sum: QuizLeaderboardSumAggregateOutputType | null
    _min: QuizLeaderboardMinAggregateOutputType | null
    _max: QuizLeaderboardMaxAggregateOutputType | null
  }

  type GetQuizLeaderboardGroupByPayload<T extends QuizLeaderboardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizLeaderboardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizLeaderboardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizLeaderboardGroupByOutputType[P]>
            : GetScalarType<T[P], QuizLeaderboardGroupByOutputType[P]>
        }
      >
    >


  export type QuizLeaderboardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    quizId?: boolean
    score?: boolean
    accuracy?: boolean
    attempts?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizLeaderboard"]>

  export type QuizLeaderboardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    quizId?: boolean
    score?: boolean
    accuracy?: boolean
    attempts?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizLeaderboard"]>

  export type QuizLeaderboardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    quizId?: boolean
    score?: boolean
    accuracy?: boolean
    attempts?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizLeaderboard"]>

  export type QuizLeaderboardSelectScalar = {
    id?: boolean
    userId?: boolean
    quizId?: boolean
    score?: boolean
    accuracy?: boolean
    attempts?: boolean
  }

  export type QuizLeaderboardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "quizId" | "score" | "accuracy" | "attempts", ExtArgs["result"]["quizLeaderboard"]>
  export type QuizLeaderboardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }
  export type QuizLeaderboardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }
  export type QuizLeaderboardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }

  export type $QuizLeaderboardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizLeaderboard"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      quiz: Prisma.$QuizPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      quizId: string
      score: number
      accuracy: number
      attempts: number
    }, ExtArgs["result"]["quizLeaderboard"]>
    composites: {}
  }

  type QuizLeaderboardGetPayload<S extends boolean | null | undefined | QuizLeaderboardDefaultArgs> = $Result.GetResult<Prisma.$QuizLeaderboardPayload, S>

  type QuizLeaderboardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizLeaderboardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizLeaderboardCountAggregateInputType | true
    }

  export interface QuizLeaderboardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizLeaderboard'], meta: { name: 'QuizLeaderboard' } }
    /**
     * Find zero or one QuizLeaderboard that matches the filter.
     * @param {QuizLeaderboardFindUniqueArgs} args - Arguments to find a QuizLeaderboard
     * @example
     * // Get one QuizLeaderboard
     * const quizLeaderboard = await prisma.quizLeaderboard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizLeaderboardFindUniqueArgs>(args: SelectSubset<T, QuizLeaderboardFindUniqueArgs<ExtArgs>>): Prisma__QuizLeaderboardClient<$Result.GetResult<Prisma.$QuizLeaderboardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizLeaderboard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizLeaderboardFindUniqueOrThrowArgs} args - Arguments to find a QuizLeaderboard
     * @example
     * // Get one QuizLeaderboard
     * const quizLeaderboard = await prisma.quizLeaderboard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizLeaderboardFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizLeaderboardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizLeaderboardClient<$Result.GetResult<Prisma.$QuizLeaderboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizLeaderboard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizLeaderboardFindFirstArgs} args - Arguments to find a QuizLeaderboard
     * @example
     * // Get one QuizLeaderboard
     * const quizLeaderboard = await prisma.quizLeaderboard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizLeaderboardFindFirstArgs>(args?: SelectSubset<T, QuizLeaderboardFindFirstArgs<ExtArgs>>): Prisma__QuizLeaderboardClient<$Result.GetResult<Prisma.$QuizLeaderboardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizLeaderboard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizLeaderboardFindFirstOrThrowArgs} args - Arguments to find a QuizLeaderboard
     * @example
     * // Get one QuizLeaderboard
     * const quizLeaderboard = await prisma.quizLeaderboard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizLeaderboardFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizLeaderboardFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizLeaderboardClient<$Result.GetResult<Prisma.$QuizLeaderboardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizLeaderboards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizLeaderboardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizLeaderboards
     * const quizLeaderboards = await prisma.quizLeaderboard.findMany()
     * 
     * // Get first 10 QuizLeaderboards
     * const quizLeaderboards = await prisma.quizLeaderboard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizLeaderboardWithIdOnly = await prisma.quizLeaderboard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizLeaderboardFindManyArgs>(args?: SelectSubset<T, QuizLeaderboardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizLeaderboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizLeaderboard.
     * @param {QuizLeaderboardCreateArgs} args - Arguments to create a QuizLeaderboard.
     * @example
     * // Create one QuizLeaderboard
     * const QuizLeaderboard = await prisma.quizLeaderboard.create({
     *   data: {
     *     // ... data to create a QuizLeaderboard
     *   }
     * })
     * 
     */
    create<T extends QuizLeaderboardCreateArgs>(args: SelectSubset<T, QuizLeaderboardCreateArgs<ExtArgs>>): Prisma__QuizLeaderboardClient<$Result.GetResult<Prisma.$QuizLeaderboardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizLeaderboards.
     * @param {QuizLeaderboardCreateManyArgs} args - Arguments to create many QuizLeaderboards.
     * @example
     * // Create many QuizLeaderboards
     * const quizLeaderboard = await prisma.quizLeaderboard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizLeaderboardCreateManyArgs>(args?: SelectSubset<T, QuizLeaderboardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizLeaderboards and returns the data saved in the database.
     * @param {QuizLeaderboardCreateManyAndReturnArgs} args - Arguments to create many QuizLeaderboards.
     * @example
     * // Create many QuizLeaderboards
     * const quizLeaderboard = await prisma.quizLeaderboard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizLeaderboards and only return the `id`
     * const quizLeaderboardWithIdOnly = await prisma.quizLeaderboard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizLeaderboardCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizLeaderboardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizLeaderboardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizLeaderboard.
     * @param {QuizLeaderboardDeleteArgs} args - Arguments to delete one QuizLeaderboard.
     * @example
     * // Delete one QuizLeaderboard
     * const QuizLeaderboard = await prisma.quizLeaderboard.delete({
     *   where: {
     *     // ... filter to delete one QuizLeaderboard
     *   }
     * })
     * 
     */
    delete<T extends QuizLeaderboardDeleteArgs>(args: SelectSubset<T, QuizLeaderboardDeleteArgs<ExtArgs>>): Prisma__QuizLeaderboardClient<$Result.GetResult<Prisma.$QuizLeaderboardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizLeaderboard.
     * @param {QuizLeaderboardUpdateArgs} args - Arguments to update one QuizLeaderboard.
     * @example
     * // Update one QuizLeaderboard
     * const quizLeaderboard = await prisma.quizLeaderboard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizLeaderboardUpdateArgs>(args: SelectSubset<T, QuizLeaderboardUpdateArgs<ExtArgs>>): Prisma__QuizLeaderboardClient<$Result.GetResult<Prisma.$QuizLeaderboardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizLeaderboards.
     * @param {QuizLeaderboardDeleteManyArgs} args - Arguments to filter QuizLeaderboards to delete.
     * @example
     * // Delete a few QuizLeaderboards
     * const { count } = await prisma.quizLeaderboard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizLeaderboardDeleteManyArgs>(args?: SelectSubset<T, QuizLeaderboardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizLeaderboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizLeaderboardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizLeaderboards
     * const quizLeaderboard = await prisma.quizLeaderboard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizLeaderboardUpdateManyArgs>(args: SelectSubset<T, QuizLeaderboardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizLeaderboards and returns the data updated in the database.
     * @param {QuizLeaderboardUpdateManyAndReturnArgs} args - Arguments to update many QuizLeaderboards.
     * @example
     * // Update many QuizLeaderboards
     * const quizLeaderboard = await prisma.quizLeaderboard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizLeaderboards and only return the `id`
     * const quizLeaderboardWithIdOnly = await prisma.quizLeaderboard.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuizLeaderboardUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizLeaderboardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizLeaderboardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizLeaderboard.
     * @param {QuizLeaderboardUpsertArgs} args - Arguments to update or create a QuizLeaderboard.
     * @example
     * // Update or create a QuizLeaderboard
     * const quizLeaderboard = await prisma.quizLeaderboard.upsert({
     *   create: {
     *     // ... data to create a QuizLeaderboard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizLeaderboard we want to update
     *   }
     * })
     */
    upsert<T extends QuizLeaderboardUpsertArgs>(args: SelectSubset<T, QuizLeaderboardUpsertArgs<ExtArgs>>): Prisma__QuizLeaderboardClient<$Result.GetResult<Prisma.$QuizLeaderboardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizLeaderboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizLeaderboardCountArgs} args - Arguments to filter QuizLeaderboards to count.
     * @example
     * // Count the number of QuizLeaderboards
     * const count = await prisma.quizLeaderboard.count({
     *   where: {
     *     // ... the filter for the QuizLeaderboards we want to count
     *   }
     * })
    **/
    count<T extends QuizLeaderboardCountArgs>(
      args?: Subset<T, QuizLeaderboardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizLeaderboardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizLeaderboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizLeaderboardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizLeaderboardAggregateArgs>(args: Subset<T, QuizLeaderboardAggregateArgs>): Prisma.PrismaPromise<GetQuizLeaderboardAggregateType<T>>

    /**
     * Group by QuizLeaderboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizLeaderboardGroupByArgs} args - Group by arguments.
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
      T extends QuizLeaderboardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizLeaderboardGroupByArgs['orderBy'] }
        : { orderBy?: QuizLeaderboardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizLeaderboardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizLeaderboardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizLeaderboard model
   */
  readonly fields: QuizLeaderboardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizLeaderboard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizLeaderboardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QuizLeaderboard model
   */
  interface QuizLeaderboardFieldRefs {
    readonly id: FieldRef<"QuizLeaderboard", 'String'>
    readonly userId: FieldRef<"QuizLeaderboard", 'String'>
    readonly quizId: FieldRef<"QuizLeaderboard", 'String'>
    readonly score: FieldRef<"QuizLeaderboard", 'Int'>
    readonly accuracy: FieldRef<"QuizLeaderboard", 'Float'>
    readonly attempts: FieldRef<"QuizLeaderboard", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * QuizLeaderboard findUnique
   */
  export type QuizLeaderboardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizLeaderboard
     */
    select?: QuizLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizLeaderboard
     */
    omit?: QuizLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizLeaderboardInclude<ExtArgs> | null
    /**
     * Filter, which QuizLeaderboard to fetch.
     */
    where: QuizLeaderboardWhereUniqueInput
  }

  /**
   * QuizLeaderboard findUniqueOrThrow
   */
  export type QuizLeaderboardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizLeaderboard
     */
    select?: QuizLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizLeaderboard
     */
    omit?: QuizLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizLeaderboardInclude<ExtArgs> | null
    /**
     * Filter, which QuizLeaderboard to fetch.
     */
    where: QuizLeaderboardWhereUniqueInput
  }

  /**
   * QuizLeaderboard findFirst
   */
  export type QuizLeaderboardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizLeaderboard
     */
    select?: QuizLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizLeaderboard
     */
    omit?: QuizLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizLeaderboardInclude<ExtArgs> | null
    /**
     * Filter, which QuizLeaderboard to fetch.
     */
    where?: QuizLeaderboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizLeaderboards to fetch.
     */
    orderBy?: QuizLeaderboardOrderByWithRelationInput | QuizLeaderboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizLeaderboards.
     */
    cursor?: QuizLeaderboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizLeaderboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizLeaderboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizLeaderboards.
     */
    distinct?: QuizLeaderboardScalarFieldEnum | QuizLeaderboardScalarFieldEnum[]
  }

  /**
   * QuizLeaderboard findFirstOrThrow
   */
  export type QuizLeaderboardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizLeaderboard
     */
    select?: QuizLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizLeaderboard
     */
    omit?: QuizLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizLeaderboardInclude<ExtArgs> | null
    /**
     * Filter, which QuizLeaderboard to fetch.
     */
    where?: QuizLeaderboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizLeaderboards to fetch.
     */
    orderBy?: QuizLeaderboardOrderByWithRelationInput | QuizLeaderboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizLeaderboards.
     */
    cursor?: QuizLeaderboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizLeaderboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizLeaderboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizLeaderboards.
     */
    distinct?: QuizLeaderboardScalarFieldEnum | QuizLeaderboardScalarFieldEnum[]
  }

  /**
   * QuizLeaderboard findMany
   */
  export type QuizLeaderboardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizLeaderboard
     */
    select?: QuizLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizLeaderboard
     */
    omit?: QuizLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizLeaderboardInclude<ExtArgs> | null
    /**
     * Filter, which QuizLeaderboards to fetch.
     */
    where?: QuizLeaderboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizLeaderboards to fetch.
     */
    orderBy?: QuizLeaderboardOrderByWithRelationInput | QuizLeaderboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizLeaderboards.
     */
    cursor?: QuizLeaderboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizLeaderboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizLeaderboards.
     */
    skip?: number
    distinct?: QuizLeaderboardScalarFieldEnum | QuizLeaderboardScalarFieldEnum[]
  }

  /**
   * QuizLeaderboard create
   */
  export type QuizLeaderboardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizLeaderboard
     */
    select?: QuizLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizLeaderboard
     */
    omit?: QuizLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizLeaderboardInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizLeaderboard.
     */
    data: XOR<QuizLeaderboardCreateInput, QuizLeaderboardUncheckedCreateInput>
  }

  /**
   * QuizLeaderboard createMany
   */
  export type QuizLeaderboardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizLeaderboards.
     */
    data: QuizLeaderboardCreateManyInput | QuizLeaderboardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizLeaderboard createManyAndReturn
   */
  export type QuizLeaderboardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizLeaderboard
     */
    select?: QuizLeaderboardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizLeaderboard
     */
    omit?: QuizLeaderboardOmit<ExtArgs> | null
    /**
     * The data used to create many QuizLeaderboards.
     */
    data: QuizLeaderboardCreateManyInput | QuizLeaderboardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizLeaderboardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizLeaderboard update
   */
  export type QuizLeaderboardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizLeaderboard
     */
    select?: QuizLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizLeaderboard
     */
    omit?: QuizLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizLeaderboardInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizLeaderboard.
     */
    data: XOR<QuizLeaderboardUpdateInput, QuizLeaderboardUncheckedUpdateInput>
    /**
     * Choose, which QuizLeaderboard to update.
     */
    where: QuizLeaderboardWhereUniqueInput
  }

  /**
   * QuizLeaderboard updateMany
   */
  export type QuizLeaderboardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizLeaderboards.
     */
    data: XOR<QuizLeaderboardUpdateManyMutationInput, QuizLeaderboardUncheckedUpdateManyInput>
    /**
     * Filter which QuizLeaderboards to update
     */
    where?: QuizLeaderboardWhereInput
    /**
     * Limit how many QuizLeaderboards to update.
     */
    limit?: number
  }

  /**
   * QuizLeaderboard updateManyAndReturn
   */
  export type QuizLeaderboardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizLeaderboard
     */
    select?: QuizLeaderboardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizLeaderboard
     */
    omit?: QuizLeaderboardOmit<ExtArgs> | null
    /**
     * The data used to update QuizLeaderboards.
     */
    data: XOR<QuizLeaderboardUpdateManyMutationInput, QuizLeaderboardUncheckedUpdateManyInput>
    /**
     * Filter which QuizLeaderboards to update
     */
    where?: QuizLeaderboardWhereInput
    /**
     * Limit how many QuizLeaderboards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizLeaderboardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizLeaderboard upsert
   */
  export type QuizLeaderboardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizLeaderboard
     */
    select?: QuizLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizLeaderboard
     */
    omit?: QuizLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizLeaderboardInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizLeaderboard to update in case it exists.
     */
    where: QuizLeaderboardWhereUniqueInput
    /**
     * In case the QuizLeaderboard found by the `where` argument doesn't exist, create a new QuizLeaderboard with this data.
     */
    create: XOR<QuizLeaderboardCreateInput, QuizLeaderboardUncheckedCreateInput>
    /**
     * In case the QuizLeaderboard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizLeaderboardUpdateInput, QuizLeaderboardUncheckedUpdateInput>
  }

  /**
   * QuizLeaderboard delete
   */
  export type QuizLeaderboardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizLeaderboard
     */
    select?: QuizLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizLeaderboard
     */
    omit?: QuizLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizLeaderboardInclude<ExtArgs> | null
    /**
     * Filter which QuizLeaderboard to delete.
     */
    where: QuizLeaderboardWhereUniqueInput
  }

  /**
   * QuizLeaderboard deleteMany
   */
  export type QuizLeaderboardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizLeaderboards to delete
     */
    where?: QuizLeaderboardWhereInput
    /**
     * Limit how many QuizLeaderboards to delete.
     */
    limit?: number
  }

  /**
   * QuizLeaderboard without action
   */
  export type QuizLeaderboardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizLeaderboard
     */
    select?: QuizLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizLeaderboard
     */
    omit?: QuizLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizLeaderboardInclude<ExtArgs> | null
  }


  /**
   * Model SessionInvitation
   */

  export type AggregateSessionInvitation = {
    _count: SessionInvitationCountAggregateOutputType | null
    _min: SessionInvitationMinAggregateOutputType | null
    _max: SessionInvitationMaxAggregateOutputType | null
  }

  export type SessionInvitationMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    email: string | null
    userId: string | null
    accepted: boolean | null
    invitedAt: Date | null
  }

  export type SessionInvitationMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    email: string | null
    userId: string | null
    accepted: boolean | null
    invitedAt: Date | null
  }

  export type SessionInvitationCountAggregateOutputType = {
    id: number
    sessionId: number
    email: number
    userId: number
    accepted: number
    invitedAt: number
    _all: number
  }


  export type SessionInvitationMinAggregateInputType = {
    id?: true
    sessionId?: true
    email?: true
    userId?: true
    accepted?: true
    invitedAt?: true
  }

  export type SessionInvitationMaxAggregateInputType = {
    id?: true
    sessionId?: true
    email?: true
    userId?: true
    accepted?: true
    invitedAt?: true
  }

  export type SessionInvitationCountAggregateInputType = {
    id?: true
    sessionId?: true
    email?: true
    userId?: true
    accepted?: true
    invitedAt?: true
    _all?: true
  }

  export type SessionInvitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionInvitation to aggregate.
     */
    where?: SessionInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionInvitations to fetch.
     */
    orderBy?: SessionInvitationOrderByWithRelationInput | SessionInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SessionInvitations
    **/
    _count?: true | SessionInvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionInvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionInvitationMaxAggregateInputType
  }

  export type GetSessionInvitationAggregateType<T extends SessionInvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateSessionInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessionInvitation[P]>
      : GetScalarType<T[P], AggregateSessionInvitation[P]>
  }




  export type SessionInvitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionInvitationWhereInput
    orderBy?: SessionInvitationOrderByWithAggregationInput | SessionInvitationOrderByWithAggregationInput[]
    by: SessionInvitationScalarFieldEnum[] | SessionInvitationScalarFieldEnum
    having?: SessionInvitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionInvitationCountAggregateInputType | true
    _min?: SessionInvitationMinAggregateInputType
    _max?: SessionInvitationMaxAggregateInputType
  }

  export type SessionInvitationGroupByOutputType = {
    id: string
    sessionId: string
    email: string
    userId: string | null
    accepted: boolean
    invitedAt: Date
    _count: SessionInvitationCountAggregateOutputType | null
    _min: SessionInvitationMinAggregateOutputType | null
    _max: SessionInvitationMaxAggregateOutputType | null
  }

  type GetSessionInvitationGroupByPayload<T extends SessionInvitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionInvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionInvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionInvitationGroupByOutputType[P]>
            : GetScalarType<T[P], SessionInvitationGroupByOutputType[P]>
        }
      >
    >


  export type SessionInvitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    email?: boolean
    userId?: boolean
    accepted?: boolean
    invitedAt?: boolean
    session?: boolean | QuizSessionDefaultArgs<ExtArgs>
    user?: boolean | SessionInvitation$userArgs<ExtArgs>
  }, ExtArgs["result"]["sessionInvitation"]>

  export type SessionInvitationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    email?: boolean
    userId?: boolean
    accepted?: boolean
    invitedAt?: boolean
    session?: boolean | QuizSessionDefaultArgs<ExtArgs>
    user?: boolean | SessionInvitation$userArgs<ExtArgs>
  }, ExtArgs["result"]["sessionInvitation"]>

  export type SessionInvitationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    email?: boolean
    userId?: boolean
    accepted?: boolean
    invitedAt?: boolean
    session?: boolean | QuizSessionDefaultArgs<ExtArgs>
    user?: boolean | SessionInvitation$userArgs<ExtArgs>
  }, ExtArgs["result"]["sessionInvitation"]>

  export type SessionInvitationSelectScalar = {
    id?: boolean
    sessionId?: boolean
    email?: boolean
    userId?: boolean
    accepted?: boolean
    invitedAt?: boolean
  }

  export type SessionInvitationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "email" | "userId" | "accepted" | "invitedAt", ExtArgs["result"]["sessionInvitation"]>
  export type SessionInvitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | QuizSessionDefaultArgs<ExtArgs>
    user?: boolean | SessionInvitation$userArgs<ExtArgs>
  }
  export type SessionInvitationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | QuizSessionDefaultArgs<ExtArgs>
    user?: boolean | SessionInvitation$userArgs<ExtArgs>
  }
  export type SessionInvitationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | QuizSessionDefaultArgs<ExtArgs>
    user?: boolean | SessionInvitation$userArgs<ExtArgs>
  }

  export type $SessionInvitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SessionInvitation"
    objects: {
      session: Prisma.$QuizSessionPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      email: string
      userId: string | null
      accepted: boolean
      invitedAt: Date
    }, ExtArgs["result"]["sessionInvitation"]>
    composites: {}
  }

  type SessionInvitationGetPayload<S extends boolean | null | undefined | SessionInvitationDefaultArgs> = $Result.GetResult<Prisma.$SessionInvitationPayload, S>

  type SessionInvitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionInvitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionInvitationCountAggregateInputType | true
    }

  export interface SessionInvitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SessionInvitation'], meta: { name: 'SessionInvitation' } }
    /**
     * Find zero or one SessionInvitation that matches the filter.
     * @param {SessionInvitationFindUniqueArgs} args - Arguments to find a SessionInvitation
     * @example
     * // Get one SessionInvitation
     * const sessionInvitation = await prisma.sessionInvitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionInvitationFindUniqueArgs>(args: SelectSubset<T, SessionInvitationFindUniqueArgs<ExtArgs>>): Prisma__SessionInvitationClient<$Result.GetResult<Prisma.$SessionInvitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SessionInvitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionInvitationFindUniqueOrThrowArgs} args - Arguments to find a SessionInvitation
     * @example
     * // Get one SessionInvitation
     * const sessionInvitation = await prisma.sessionInvitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionInvitationFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionInvitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionInvitationClient<$Result.GetResult<Prisma.$SessionInvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionInvitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionInvitationFindFirstArgs} args - Arguments to find a SessionInvitation
     * @example
     * // Get one SessionInvitation
     * const sessionInvitation = await prisma.sessionInvitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionInvitationFindFirstArgs>(args?: SelectSubset<T, SessionInvitationFindFirstArgs<ExtArgs>>): Prisma__SessionInvitationClient<$Result.GetResult<Prisma.$SessionInvitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionInvitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionInvitationFindFirstOrThrowArgs} args - Arguments to find a SessionInvitation
     * @example
     * // Get one SessionInvitation
     * const sessionInvitation = await prisma.sessionInvitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionInvitationFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionInvitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionInvitationClient<$Result.GetResult<Prisma.$SessionInvitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SessionInvitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionInvitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SessionInvitations
     * const sessionInvitations = await prisma.sessionInvitation.findMany()
     * 
     * // Get first 10 SessionInvitations
     * const sessionInvitations = await prisma.sessionInvitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionInvitationWithIdOnly = await prisma.sessionInvitation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionInvitationFindManyArgs>(args?: SelectSubset<T, SessionInvitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SessionInvitation.
     * @param {SessionInvitationCreateArgs} args - Arguments to create a SessionInvitation.
     * @example
     * // Create one SessionInvitation
     * const SessionInvitation = await prisma.sessionInvitation.create({
     *   data: {
     *     // ... data to create a SessionInvitation
     *   }
     * })
     * 
     */
    create<T extends SessionInvitationCreateArgs>(args: SelectSubset<T, SessionInvitationCreateArgs<ExtArgs>>): Prisma__SessionInvitationClient<$Result.GetResult<Prisma.$SessionInvitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SessionInvitations.
     * @param {SessionInvitationCreateManyArgs} args - Arguments to create many SessionInvitations.
     * @example
     * // Create many SessionInvitations
     * const sessionInvitation = await prisma.sessionInvitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionInvitationCreateManyArgs>(args?: SelectSubset<T, SessionInvitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SessionInvitations and returns the data saved in the database.
     * @param {SessionInvitationCreateManyAndReturnArgs} args - Arguments to create many SessionInvitations.
     * @example
     * // Create many SessionInvitations
     * const sessionInvitation = await prisma.sessionInvitation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SessionInvitations and only return the `id`
     * const sessionInvitationWithIdOnly = await prisma.sessionInvitation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionInvitationCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionInvitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionInvitationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SessionInvitation.
     * @param {SessionInvitationDeleteArgs} args - Arguments to delete one SessionInvitation.
     * @example
     * // Delete one SessionInvitation
     * const SessionInvitation = await prisma.sessionInvitation.delete({
     *   where: {
     *     // ... filter to delete one SessionInvitation
     *   }
     * })
     * 
     */
    delete<T extends SessionInvitationDeleteArgs>(args: SelectSubset<T, SessionInvitationDeleteArgs<ExtArgs>>): Prisma__SessionInvitationClient<$Result.GetResult<Prisma.$SessionInvitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SessionInvitation.
     * @param {SessionInvitationUpdateArgs} args - Arguments to update one SessionInvitation.
     * @example
     * // Update one SessionInvitation
     * const sessionInvitation = await prisma.sessionInvitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionInvitationUpdateArgs>(args: SelectSubset<T, SessionInvitationUpdateArgs<ExtArgs>>): Prisma__SessionInvitationClient<$Result.GetResult<Prisma.$SessionInvitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SessionInvitations.
     * @param {SessionInvitationDeleteManyArgs} args - Arguments to filter SessionInvitations to delete.
     * @example
     * // Delete a few SessionInvitations
     * const { count } = await prisma.sessionInvitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionInvitationDeleteManyArgs>(args?: SelectSubset<T, SessionInvitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionInvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SessionInvitations
     * const sessionInvitation = await prisma.sessionInvitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionInvitationUpdateManyArgs>(args: SelectSubset<T, SessionInvitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionInvitations and returns the data updated in the database.
     * @param {SessionInvitationUpdateManyAndReturnArgs} args - Arguments to update many SessionInvitations.
     * @example
     * // Update many SessionInvitations
     * const sessionInvitation = await prisma.sessionInvitation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SessionInvitations and only return the `id`
     * const sessionInvitationWithIdOnly = await prisma.sessionInvitation.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionInvitationUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionInvitationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionInvitationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SessionInvitation.
     * @param {SessionInvitationUpsertArgs} args - Arguments to update or create a SessionInvitation.
     * @example
     * // Update or create a SessionInvitation
     * const sessionInvitation = await prisma.sessionInvitation.upsert({
     *   create: {
     *     // ... data to create a SessionInvitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SessionInvitation we want to update
     *   }
     * })
     */
    upsert<T extends SessionInvitationUpsertArgs>(args: SelectSubset<T, SessionInvitationUpsertArgs<ExtArgs>>): Prisma__SessionInvitationClient<$Result.GetResult<Prisma.$SessionInvitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SessionInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionInvitationCountArgs} args - Arguments to filter SessionInvitations to count.
     * @example
     * // Count the number of SessionInvitations
     * const count = await prisma.sessionInvitation.count({
     *   where: {
     *     // ... the filter for the SessionInvitations we want to count
     *   }
     * })
    **/
    count<T extends SessionInvitationCountArgs>(
      args?: Subset<T, SessionInvitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionInvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SessionInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionInvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionInvitationAggregateArgs>(args: Subset<T, SessionInvitationAggregateArgs>): Prisma.PrismaPromise<GetSessionInvitationAggregateType<T>>

    /**
     * Group by SessionInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionInvitationGroupByArgs} args - Group by arguments.
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
      T extends SessionInvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionInvitationGroupByArgs['orderBy'] }
        : { orderBy?: SessionInvitationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionInvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SessionInvitation model
   */
  readonly fields: SessionInvitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SessionInvitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionInvitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends QuizSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizSessionDefaultArgs<ExtArgs>>): Prisma__QuizSessionClient<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends SessionInvitation$userArgs<ExtArgs> = {}>(args?: Subset<T, SessionInvitation$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SessionInvitation model
   */
  interface SessionInvitationFieldRefs {
    readonly id: FieldRef<"SessionInvitation", 'String'>
    readonly sessionId: FieldRef<"SessionInvitation", 'String'>
    readonly email: FieldRef<"SessionInvitation", 'String'>
    readonly userId: FieldRef<"SessionInvitation", 'String'>
    readonly accepted: FieldRef<"SessionInvitation", 'Boolean'>
    readonly invitedAt: FieldRef<"SessionInvitation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SessionInvitation findUnique
   */
  export type SessionInvitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionInvitation
     */
    select?: SessionInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionInvitation
     */
    omit?: SessionInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInvitationInclude<ExtArgs> | null
    /**
     * Filter, which SessionInvitation to fetch.
     */
    where: SessionInvitationWhereUniqueInput
  }

  /**
   * SessionInvitation findUniqueOrThrow
   */
  export type SessionInvitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionInvitation
     */
    select?: SessionInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionInvitation
     */
    omit?: SessionInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInvitationInclude<ExtArgs> | null
    /**
     * Filter, which SessionInvitation to fetch.
     */
    where: SessionInvitationWhereUniqueInput
  }

  /**
   * SessionInvitation findFirst
   */
  export type SessionInvitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionInvitation
     */
    select?: SessionInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionInvitation
     */
    omit?: SessionInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInvitationInclude<ExtArgs> | null
    /**
     * Filter, which SessionInvitation to fetch.
     */
    where?: SessionInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionInvitations to fetch.
     */
    orderBy?: SessionInvitationOrderByWithRelationInput | SessionInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionInvitations.
     */
    cursor?: SessionInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionInvitations.
     */
    distinct?: SessionInvitationScalarFieldEnum | SessionInvitationScalarFieldEnum[]
  }

  /**
   * SessionInvitation findFirstOrThrow
   */
  export type SessionInvitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionInvitation
     */
    select?: SessionInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionInvitation
     */
    omit?: SessionInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInvitationInclude<ExtArgs> | null
    /**
     * Filter, which SessionInvitation to fetch.
     */
    where?: SessionInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionInvitations to fetch.
     */
    orderBy?: SessionInvitationOrderByWithRelationInput | SessionInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionInvitations.
     */
    cursor?: SessionInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionInvitations.
     */
    distinct?: SessionInvitationScalarFieldEnum | SessionInvitationScalarFieldEnum[]
  }

  /**
   * SessionInvitation findMany
   */
  export type SessionInvitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionInvitation
     */
    select?: SessionInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionInvitation
     */
    omit?: SessionInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInvitationInclude<ExtArgs> | null
    /**
     * Filter, which SessionInvitations to fetch.
     */
    where?: SessionInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionInvitations to fetch.
     */
    orderBy?: SessionInvitationOrderByWithRelationInput | SessionInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SessionInvitations.
     */
    cursor?: SessionInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionInvitations.
     */
    skip?: number
    distinct?: SessionInvitationScalarFieldEnum | SessionInvitationScalarFieldEnum[]
  }

  /**
   * SessionInvitation create
   */
  export type SessionInvitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionInvitation
     */
    select?: SessionInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionInvitation
     */
    omit?: SessionInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInvitationInclude<ExtArgs> | null
    /**
     * The data needed to create a SessionInvitation.
     */
    data: XOR<SessionInvitationCreateInput, SessionInvitationUncheckedCreateInput>
  }

  /**
   * SessionInvitation createMany
   */
  export type SessionInvitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SessionInvitations.
     */
    data: SessionInvitationCreateManyInput | SessionInvitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SessionInvitation createManyAndReturn
   */
  export type SessionInvitationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionInvitation
     */
    select?: SessionInvitationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionInvitation
     */
    omit?: SessionInvitationOmit<ExtArgs> | null
    /**
     * The data used to create many SessionInvitations.
     */
    data: SessionInvitationCreateManyInput | SessionInvitationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInvitationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionInvitation update
   */
  export type SessionInvitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionInvitation
     */
    select?: SessionInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionInvitation
     */
    omit?: SessionInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInvitationInclude<ExtArgs> | null
    /**
     * The data needed to update a SessionInvitation.
     */
    data: XOR<SessionInvitationUpdateInput, SessionInvitationUncheckedUpdateInput>
    /**
     * Choose, which SessionInvitation to update.
     */
    where: SessionInvitationWhereUniqueInput
  }

  /**
   * SessionInvitation updateMany
   */
  export type SessionInvitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SessionInvitations.
     */
    data: XOR<SessionInvitationUpdateManyMutationInput, SessionInvitationUncheckedUpdateManyInput>
    /**
     * Filter which SessionInvitations to update
     */
    where?: SessionInvitationWhereInput
    /**
     * Limit how many SessionInvitations to update.
     */
    limit?: number
  }

  /**
   * SessionInvitation updateManyAndReturn
   */
  export type SessionInvitationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionInvitation
     */
    select?: SessionInvitationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionInvitation
     */
    omit?: SessionInvitationOmit<ExtArgs> | null
    /**
     * The data used to update SessionInvitations.
     */
    data: XOR<SessionInvitationUpdateManyMutationInput, SessionInvitationUncheckedUpdateManyInput>
    /**
     * Filter which SessionInvitations to update
     */
    where?: SessionInvitationWhereInput
    /**
     * Limit how many SessionInvitations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInvitationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionInvitation upsert
   */
  export type SessionInvitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionInvitation
     */
    select?: SessionInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionInvitation
     */
    omit?: SessionInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInvitationInclude<ExtArgs> | null
    /**
     * The filter to search for the SessionInvitation to update in case it exists.
     */
    where: SessionInvitationWhereUniqueInput
    /**
     * In case the SessionInvitation found by the `where` argument doesn't exist, create a new SessionInvitation with this data.
     */
    create: XOR<SessionInvitationCreateInput, SessionInvitationUncheckedCreateInput>
    /**
     * In case the SessionInvitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionInvitationUpdateInput, SessionInvitationUncheckedUpdateInput>
  }

  /**
   * SessionInvitation delete
   */
  export type SessionInvitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionInvitation
     */
    select?: SessionInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionInvitation
     */
    omit?: SessionInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInvitationInclude<ExtArgs> | null
    /**
     * Filter which SessionInvitation to delete.
     */
    where: SessionInvitationWhereUniqueInput
  }

  /**
   * SessionInvitation deleteMany
   */
  export type SessionInvitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionInvitations to delete
     */
    where?: SessionInvitationWhereInput
    /**
     * Limit how many SessionInvitations to delete.
     */
    limit?: number
  }

  /**
   * SessionInvitation.user
   */
  export type SessionInvitation$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * SessionInvitation without action
   */
  export type SessionInvitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionInvitation
     */
    select?: SessionInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionInvitation
     */
    omit?: SessionInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInvitationInclude<ExtArgs> | null
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


  export const AuthSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type AuthSessionScalarFieldEnum = (typeof AuthSessionScalarFieldEnum)[keyof typeof AuthSessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const QuizScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    type: 'type',
    categoryId: 'categoryId',
    createdById: 'createdById'
  };

  export type QuizScalarFieldEnum = (typeof QuizScalarFieldEnum)[keyof typeof QuizScalarFieldEnum]


  export const QuizQuestionScalarFieldEnum: {
    id: 'id',
    text: 'text',
    type: 'type',
    questionScore: 'questionScore',
    timeLimit: 'timeLimit',
    order: 'order',
    quizId: 'quizId'
  };

  export type QuizQuestionScalarFieldEnum = (typeof QuizQuestionScalarFieldEnum)[keyof typeof QuizQuestionScalarFieldEnum]


  export const QuestionAnswerOptionScalarFieldEnum: {
    id: 'id',
    text: 'text',
    isCorrect: 'isCorrect',
    questionId: 'questionId'
  };

  export type QuestionAnswerOptionScalarFieldEnum = (typeof QuestionAnswerOptionScalarFieldEnum)[keyof typeof QuestionAnswerOptionScalarFieldEnum]


  export const QuizSessionScalarFieldEnum: {
    id: 'id',
    code: 'code',
    quizId: 'quizId',
    hostId: 'hostId',
    status: 'status',
    startedAt: 'startedAt',
    endedAt: 'endedAt'
  };

  export type QuizSessionScalarFieldEnum = (typeof QuizSessionScalarFieldEnum)[keyof typeof QuizSessionScalarFieldEnum]


  export const SessionParticipantScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sessionId: 'sessionId',
    score: 'score',
    joinedAt: 'joinedAt'
  };

  export type SessionParticipantScalarFieldEnum = (typeof SessionParticipantScalarFieldEnum)[keyof typeof SessionParticipantScalarFieldEnum]


  export const QuestionResponseScalarFieldEnum: {
    id: 'id',
    participantId: 'participantId',
    questionId: 'questionId',
    selectedId: 'selectedId',
    submittedAt: 'submittedAt',
    isCorrect: 'isCorrect'
  };

  export type QuestionResponseScalarFieldEnum = (typeof QuestionResponseScalarFieldEnum)[keyof typeof QuestionResponseScalarFieldEnum]


  export const QuizCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type QuizCategoryScalarFieldEnum = (typeof QuizCategoryScalarFieldEnum)[keyof typeof QuizCategoryScalarFieldEnum]


  export const QuizLeaderboardScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    quizId: 'quizId',
    score: 'score',
    accuracy: 'accuracy',
    attempts: 'attempts'
  };

  export type QuizLeaderboardScalarFieldEnum = (typeof QuizLeaderboardScalarFieldEnum)[keyof typeof QuizLeaderboardScalarFieldEnum]


  export const SessionInvitationScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    email: 'email',
    userId: 'userId',
    accepted: 'accepted',
    invitedAt: 'invitedAt'
  };

  export type SessionInvitationScalarFieldEnum = (typeof SessionInvitationScalarFieldEnum)[keyof typeof SessionInvitationScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'QuizType'
   */
  export type EnumQuizTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuizType'>
    


  /**
   * Reference to a field of type 'QuizType[]'
   */
  export type ListEnumQuizTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuizType[]'>
    


  /**
   * Reference to a field of type 'QuestionType'
   */
  export type EnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType'>
    


  /**
   * Reference to a field of type 'QuestionType[]'
   */
  export type ListEnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'SessionStatus'
   */
  export type EnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus'>
    


  /**
   * Reference to a field of type 'SessionStatus[]'
   */
  export type ListEnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus[]'>
    


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


  export type AuthSessionWhereInput = {
    AND?: AuthSessionWhereInput | AuthSessionWhereInput[]
    OR?: AuthSessionWhereInput[]
    NOT?: AuthSessionWhereInput | AuthSessionWhereInput[]
    id?: StringFilter<"AuthSession"> | string
    userId?: StringFilter<"AuthSession"> | string
    createdAt?: DateTimeFilter<"AuthSession"> | Date | string
    expiresAt?: DateTimeFilter<"AuthSession"> | Date | string
  }

  export type AuthSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type AuthSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuthSessionWhereInput | AuthSessionWhereInput[]
    OR?: AuthSessionWhereInput[]
    NOT?: AuthSessionWhereInput | AuthSessionWhereInput[]
    userId?: StringFilter<"AuthSession"> | string
    createdAt?: DateTimeFilter<"AuthSession"> | Date | string
    expiresAt?: DateTimeFilter<"AuthSession"> | Date | string
  }, "id">

  export type AuthSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _count?: AuthSessionCountOrderByAggregateInput
    _max?: AuthSessionMaxOrderByAggregateInput
    _min?: AuthSessionMinOrderByAggregateInput
  }

  export type AuthSessionScalarWhereWithAggregatesInput = {
    AND?: AuthSessionScalarWhereWithAggregatesInput | AuthSessionScalarWhereWithAggregatesInput[]
    OR?: AuthSessionScalarWhereWithAggregatesInput[]
    NOT?: AuthSessionScalarWhereWithAggregatesInput | AuthSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuthSession"> | string
    userId?: StringWithAggregatesFilter<"AuthSession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AuthSession"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"AuthSession"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdQuizzes?: QuizListRelationFilter
    hostedSessions?: QuizSessionListRelationFilter
    participations?: SessionParticipantListRelationFilter
    leaderboardEntries?: QuizLeaderboardListRelationFilter
    invitations?: SessionInvitationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdQuizzes?: QuizOrderByRelationAggregateInput
    hostedSessions?: QuizSessionOrderByRelationAggregateInput
    participations?: SessionParticipantOrderByRelationAggregateInput
    leaderboardEntries?: QuizLeaderboardOrderByRelationAggregateInput
    invitations?: SessionInvitationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdQuizzes?: QuizListRelationFilter
    hostedSessions?: QuizSessionListRelationFilter
    participations?: SessionParticipantListRelationFilter
    leaderboardEntries?: QuizLeaderboardListRelationFilter
    invitations?: SessionInvitationListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
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
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type QuizWhereInput = {
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    id?: StringFilter<"Quiz"> | string
    title?: StringFilter<"Quiz"> | string
    description?: StringNullableFilter<"Quiz"> | string | null
    type?: EnumQuizTypeFilter<"Quiz"> | $Enums.QuizType
    categoryId?: StringFilter<"Quiz"> | string
    createdById?: StringFilter<"Quiz"> | string
    category?: XOR<QuizCategoryScalarRelationFilter, QuizCategoryWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    questions?: QuizQuestionListRelationFilter
    sessions?: QuizSessionListRelationFilter
    leaderboardEntries?: QuizLeaderboardListRelationFilter
  }

  export type QuizOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    categoryId?: SortOrder
    createdById?: SortOrder
    category?: QuizCategoryOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    questions?: QuizQuestionOrderByRelationAggregateInput
    sessions?: QuizSessionOrderByRelationAggregateInput
    leaderboardEntries?: QuizLeaderboardOrderByRelationAggregateInput
  }

  export type QuizWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    title?: StringFilter<"Quiz"> | string
    description?: StringNullableFilter<"Quiz"> | string | null
    type?: EnumQuizTypeFilter<"Quiz"> | $Enums.QuizType
    categoryId?: StringFilter<"Quiz"> | string
    createdById?: StringFilter<"Quiz"> | string
    category?: XOR<QuizCategoryScalarRelationFilter, QuizCategoryWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    questions?: QuizQuestionListRelationFilter
    sessions?: QuizSessionListRelationFilter
    leaderboardEntries?: QuizLeaderboardListRelationFilter
  }, "id">

  export type QuizOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    categoryId?: SortOrder
    createdById?: SortOrder
    _count?: QuizCountOrderByAggregateInput
    _max?: QuizMaxOrderByAggregateInput
    _min?: QuizMinOrderByAggregateInput
  }

  export type QuizScalarWhereWithAggregatesInput = {
    AND?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    OR?: QuizScalarWhereWithAggregatesInput[]
    NOT?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Quiz"> | string
    title?: StringWithAggregatesFilter<"Quiz"> | string
    description?: StringNullableWithAggregatesFilter<"Quiz"> | string | null
    type?: EnumQuizTypeWithAggregatesFilter<"Quiz"> | $Enums.QuizType
    categoryId?: StringWithAggregatesFilter<"Quiz"> | string
    createdById?: StringWithAggregatesFilter<"Quiz"> | string
  }

  export type QuizQuestionWhereInput = {
    AND?: QuizQuestionWhereInput | QuizQuestionWhereInput[]
    OR?: QuizQuestionWhereInput[]
    NOT?: QuizQuestionWhereInput | QuizQuestionWhereInput[]
    id?: StringFilter<"QuizQuestion"> | string
    text?: StringFilter<"QuizQuestion"> | string
    type?: EnumQuestionTypeFilter<"QuizQuestion"> | $Enums.QuestionType
    questionScore?: IntFilter<"QuizQuestion"> | number
    timeLimit?: IntFilter<"QuizQuestion"> | number
    order?: IntNullableFilter<"QuizQuestion"> | number | null
    quizId?: StringFilter<"QuizQuestion"> | string
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    options?: QuestionAnswerOptionListRelationFilter
    responses?: QuestionResponseListRelationFilter
  }

  export type QuizQuestionOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    type?: SortOrder
    questionScore?: SortOrder
    timeLimit?: SortOrder
    order?: SortOrderInput | SortOrder
    quizId?: SortOrder
    quiz?: QuizOrderByWithRelationInput
    options?: QuestionAnswerOptionOrderByRelationAggregateInput
    responses?: QuestionResponseOrderByRelationAggregateInput
  }

  export type QuizQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizQuestionWhereInput | QuizQuestionWhereInput[]
    OR?: QuizQuestionWhereInput[]
    NOT?: QuizQuestionWhereInput | QuizQuestionWhereInput[]
    text?: StringFilter<"QuizQuestion"> | string
    type?: EnumQuestionTypeFilter<"QuizQuestion"> | $Enums.QuestionType
    questionScore?: IntFilter<"QuizQuestion"> | number
    timeLimit?: IntFilter<"QuizQuestion"> | number
    order?: IntNullableFilter<"QuizQuestion"> | number | null
    quizId?: StringFilter<"QuizQuestion"> | string
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    options?: QuestionAnswerOptionListRelationFilter
    responses?: QuestionResponseListRelationFilter
  }, "id">

  export type QuizQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    type?: SortOrder
    questionScore?: SortOrder
    timeLimit?: SortOrder
    order?: SortOrderInput | SortOrder
    quizId?: SortOrder
    _count?: QuizQuestionCountOrderByAggregateInput
    _avg?: QuizQuestionAvgOrderByAggregateInput
    _max?: QuizQuestionMaxOrderByAggregateInput
    _min?: QuizQuestionMinOrderByAggregateInput
    _sum?: QuizQuestionSumOrderByAggregateInput
  }

  export type QuizQuestionScalarWhereWithAggregatesInput = {
    AND?: QuizQuestionScalarWhereWithAggregatesInput | QuizQuestionScalarWhereWithAggregatesInput[]
    OR?: QuizQuestionScalarWhereWithAggregatesInput[]
    NOT?: QuizQuestionScalarWhereWithAggregatesInput | QuizQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizQuestion"> | string
    text?: StringWithAggregatesFilter<"QuizQuestion"> | string
    type?: EnumQuestionTypeWithAggregatesFilter<"QuizQuestion"> | $Enums.QuestionType
    questionScore?: IntWithAggregatesFilter<"QuizQuestion"> | number
    timeLimit?: IntWithAggregatesFilter<"QuizQuestion"> | number
    order?: IntNullableWithAggregatesFilter<"QuizQuestion"> | number | null
    quizId?: StringWithAggregatesFilter<"QuizQuestion"> | string
  }

  export type QuestionAnswerOptionWhereInput = {
    AND?: QuestionAnswerOptionWhereInput | QuestionAnswerOptionWhereInput[]
    OR?: QuestionAnswerOptionWhereInput[]
    NOT?: QuestionAnswerOptionWhereInput | QuestionAnswerOptionWhereInput[]
    id?: StringFilter<"QuestionAnswerOption"> | string
    text?: StringFilter<"QuestionAnswerOption"> | string
    isCorrect?: BoolFilter<"QuestionAnswerOption"> | boolean
    questionId?: StringFilter<"QuestionAnswerOption"> | string
    question?: XOR<QuizQuestionScalarRelationFilter, QuizQuestionWhereInput>
    responses?: QuestionResponseListRelationFilter
  }

  export type QuestionAnswerOptionOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    isCorrect?: SortOrder
    questionId?: SortOrder
    question?: QuizQuestionOrderByWithRelationInput
    responses?: QuestionResponseOrderByRelationAggregateInput
  }

  export type QuestionAnswerOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionAnswerOptionWhereInput | QuestionAnswerOptionWhereInput[]
    OR?: QuestionAnswerOptionWhereInput[]
    NOT?: QuestionAnswerOptionWhereInput | QuestionAnswerOptionWhereInput[]
    text?: StringFilter<"QuestionAnswerOption"> | string
    isCorrect?: BoolFilter<"QuestionAnswerOption"> | boolean
    questionId?: StringFilter<"QuestionAnswerOption"> | string
    question?: XOR<QuizQuestionScalarRelationFilter, QuizQuestionWhereInput>
    responses?: QuestionResponseListRelationFilter
  }, "id">

  export type QuestionAnswerOptionOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    isCorrect?: SortOrder
    questionId?: SortOrder
    _count?: QuestionAnswerOptionCountOrderByAggregateInput
    _max?: QuestionAnswerOptionMaxOrderByAggregateInput
    _min?: QuestionAnswerOptionMinOrderByAggregateInput
  }

  export type QuestionAnswerOptionScalarWhereWithAggregatesInput = {
    AND?: QuestionAnswerOptionScalarWhereWithAggregatesInput | QuestionAnswerOptionScalarWhereWithAggregatesInput[]
    OR?: QuestionAnswerOptionScalarWhereWithAggregatesInput[]
    NOT?: QuestionAnswerOptionScalarWhereWithAggregatesInput | QuestionAnswerOptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuestionAnswerOption"> | string
    text?: StringWithAggregatesFilter<"QuestionAnswerOption"> | string
    isCorrect?: BoolWithAggregatesFilter<"QuestionAnswerOption"> | boolean
    questionId?: StringWithAggregatesFilter<"QuestionAnswerOption"> | string
  }

  export type QuizSessionWhereInput = {
    AND?: QuizSessionWhereInput | QuizSessionWhereInput[]
    OR?: QuizSessionWhereInput[]
    NOT?: QuizSessionWhereInput | QuizSessionWhereInput[]
    id?: StringFilter<"QuizSession"> | string
    code?: StringFilter<"QuizSession"> | string
    quizId?: StringFilter<"QuizSession"> | string
    hostId?: StringFilter<"QuizSession"> | string
    status?: EnumSessionStatusFilter<"QuizSession"> | $Enums.SessionStatus
    startedAt?: DateTimeNullableFilter<"QuizSession"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"QuizSession"> | Date | string | null
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    host?: XOR<UserScalarRelationFilter, UserWhereInput>
    participants?: SessionParticipantListRelationFilter
    invitations?: SessionInvitationListRelationFilter
  }

  export type QuizSessionOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    quizId?: SortOrder
    hostId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    quiz?: QuizOrderByWithRelationInput
    host?: UserOrderByWithRelationInput
    participants?: SessionParticipantOrderByRelationAggregateInput
    invitations?: SessionInvitationOrderByRelationAggregateInput
  }

  export type QuizSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: QuizSessionWhereInput | QuizSessionWhereInput[]
    OR?: QuizSessionWhereInput[]
    NOT?: QuizSessionWhereInput | QuizSessionWhereInput[]
    quizId?: StringFilter<"QuizSession"> | string
    hostId?: StringFilter<"QuizSession"> | string
    status?: EnumSessionStatusFilter<"QuizSession"> | $Enums.SessionStatus
    startedAt?: DateTimeNullableFilter<"QuizSession"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"QuizSession"> | Date | string | null
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    host?: XOR<UserScalarRelationFilter, UserWhereInput>
    participants?: SessionParticipantListRelationFilter
    invitations?: SessionInvitationListRelationFilter
  }, "id" | "code">

  export type QuizSessionOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    quizId?: SortOrder
    hostId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    _count?: QuizSessionCountOrderByAggregateInput
    _max?: QuizSessionMaxOrderByAggregateInput
    _min?: QuizSessionMinOrderByAggregateInput
  }

  export type QuizSessionScalarWhereWithAggregatesInput = {
    AND?: QuizSessionScalarWhereWithAggregatesInput | QuizSessionScalarWhereWithAggregatesInput[]
    OR?: QuizSessionScalarWhereWithAggregatesInput[]
    NOT?: QuizSessionScalarWhereWithAggregatesInput | QuizSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizSession"> | string
    code?: StringWithAggregatesFilter<"QuizSession"> | string
    quizId?: StringWithAggregatesFilter<"QuizSession"> | string
    hostId?: StringWithAggregatesFilter<"QuizSession"> | string
    status?: EnumSessionStatusWithAggregatesFilter<"QuizSession"> | $Enums.SessionStatus
    startedAt?: DateTimeNullableWithAggregatesFilter<"QuizSession"> | Date | string | null
    endedAt?: DateTimeNullableWithAggregatesFilter<"QuizSession"> | Date | string | null
  }

  export type SessionParticipantWhereInput = {
    AND?: SessionParticipantWhereInput | SessionParticipantWhereInput[]
    OR?: SessionParticipantWhereInput[]
    NOT?: SessionParticipantWhereInput | SessionParticipantWhereInput[]
    id?: StringFilter<"SessionParticipant"> | string
    userId?: StringFilter<"SessionParticipant"> | string
    sessionId?: StringFilter<"SessionParticipant"> | string
    score?: IntFilter<"SessionParticipant"> | number
    joinedAt?: DateTimeFilter<"SessionParticipant"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    session?: XOR<QuizSessionScalarRelationFilter, QuizSessionWhereInput>
    responses?: QuestionResponseListRelationFilter
  }

  export type SessionParticipantOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    score?: SortOrder
    joinedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    session?: QuizSessionOrderByWithRelationInput
    responses?: QuestionResponseOrderByRelationAggregateInput
  }

  export type SessionParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_sessionId?: SessionParticipantUserIdSessionIdCompoundUniqueInput
    AND?: SessionParticipantWhereInput | SessionParticipantWhereInput[]
    OR?: SessionParticipantWhereInput[]
    NOT?: SessionParticipantWhereInput | SessionParticipantWhereInput[]
    userId?: StringFilter<"SessionParticipant"> | string
    sessionId?: StringFilter<"SessionParticipant"> | string
    score?: IntFilter<"SessionParticipant"> | number
    joinedAt?: DateTimeFilter<"SessionParticipant"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    session?: XOR<QuizSessionScalarRelationFilter, QuizSessionWhereInput>
    responses?: QuestionResponseListRelationFilter
  }, "id" | "userId_sessionId">

  export type SessionParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    score?: SortOrder
    joinedAt?: SortOrder
    _count?: SessionParticipantCountOrderByAggregateInput
    _avg?: SessionParticipantAvgOrderByAggregateInput
    _max?: SessionParticipantMaxOrderByAggregateInput
    _min?: SessionParticipantMinOrderByAggregateInput
    _sum?: SessionParticipantSumOrderByAggregateInput
  }

  export type SessionParticipantScalarWhereWithAggregatesInput = {
    AND?: SessionParticipantScalarWhereWithAggregatesInput | SessionParticipantScalarWhereWithAggregatesInput[]
    OR?: SessionParticipantScalarWhereWithAggregatesInput[]
    NOT?: SessionParticipantScalarWhereWithAggregatesInput | SessionParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SessionParticipant"> | string
    userId?: StringWithAggregatesFilter<"SessionParticipant"> | string
    sessionId?: StringWithAggregatesFilter<"SessionParticipant"> | string
    score?: IntWithAggregatesFilter<"SessionParticipant"> | number
    joinedAt?: DateTimeWithAggregatesFilter<"SessionParticipant"> | Date | string
  }

  export type QuestionResponseWhereInput = {
    AND?: QuestionResponseWhereInput | QuestionResponseWhereInput[]
    OR?: QuestionResponseWhereInput[]
    NOT?: QuestionResponseWhereInput | QuestionResponseWhereInput[]
    id?: StringFilter<"QuestionResponse"> | string
    participantId?: StringFilter<"QuestionResponse"> | string
    questionId?: StringFilter<"QuestionResponse"> | string
    selectedId?: StringNullableFilter<"QuestionResponse"> | string | null
    submittedAt?: DateTimeFilter<"QuestionResponse"> | Date | string
    isCorrect?: BoolFilter<"QuestionResponse"> | boolean
    participant?: XOR<SessionParticipantScalarRelationFilter, SessionParticipantWhereInput>
    question?: XOR<QuizQuestionScalarRelationFilter, QuizQuestionWhereInput>
    selectedOption?: XOR<QuestionAnswerOptionNullableScalarRelationFilter, QuestionAnswerOptionWhereInput> | null
  }

  export type QuestionResponseOrderByWithRelationInput = {
    id?: SortOrder
    participantId?: SortOrder
    questionId?: SortOrder
    selectedId?: SortOrderInput | SortOrder
    submittedAt?: SortOrder
    isCorrect?: SortOrder
    participant?: SessionParticipantOrderByWithRelationInput
    question?: QuizQuestionOrderByWithRelationInput
    selectedOption?: QuestionAnswerOptionOrderByWithRelationInput
  }

  export type QuestionResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionResponseWhereInput | QuestionResponseWhereInput[]
    OR?: QuestionResponseWhereInput[]
    NOT?: QuestionResponseWhereInput | QuestionResponseWhereInput[]
    participantId?: StringFilter<"QuestionResponse"> | string
    questionId?: StringFilter<"QuestionResponse"> | string
    selectedId?: StringNullableFilter<"QuestionResponse"> | string | null
    submittedAt?: DateTimeFilter<"QuestionResponse"> | Date | string
    isCorrect?: BoolFilter<"QuestionResponse"> | boolean
    participant?: XOR<SessionParticipantScalarRelationFilter, SessionParticipantWhereInput>
    question?: XOR<QuizQuestionScalarRelationFilter, QuizQuestionWhereInput>
    selectedOption?: XOR<QuestionAnswerOptionNullableScalarRelationFilter, QuestionAnswerOptionWhereInput> | null
  }, "id">

  export type QuestionResponseOrderByWithAggregationInput = {
    id?: SortOrder
    participantId?: SortOrder
    questionId?: SortOrder
    selectedId?: SortOrderInput | SortOrder
    submittedAt?: SortOrder
    isCorrect?: SortOrder
    _count?: QuestionResponseCountOrderByAggregateInput
    _max?: QuestionResponseMaxOrderByAggregateInput
    _min?: QuestionResponseMinOrderByAggregateInput
  }

  export type QuestionResponseScalarWhereWithAggregatesInput = {
    AND?: QuestionResponseScalarWhereWithAggregatesInput | QuestionResponseScalarWhereWithAggregatesInput[]
    OR?: QuestionResponseScalarWhereWithAggregatesInput[]
    NOT?: QuestionResponseScalarWhereWithAggregatesInput | QuestionResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuestionResponse"> | string
    participantId?: StringWithAggregatesFilter<"QuestionResponse"> | string
    questionId?: StringWithAggregatesFilter<"QuestionResponse"> | string
    selectedId?: StringNullableWithAggregatesFilter<"QuestionResponse"> | string | null
    submittedAt?: DateTimeWithAggregatesFilter<"QuestionResponse"> | Date | string
    isCorrect?: BoolWithAggregatesFilter<"QuestionResponse"> | boolean
  }

  export type QuizCategoryWhereInput = {
    AND?: QuizCategoryWhereInput | QuizCategoryWhereInput[]
    OR?: QuizCategoryWhereInput[]
    NOT?: QuizCategoryWhereInput | QuizCategoryWhereInput[]
    id?: StringFilter<"QuizCategory"> | string
    name?: StringFilter<"QuizCategory"> | string
    quizzes?: QuizListRelationFilter
  }

  export type QuizCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    quizzes?: QuizOrderByRelationAggregateInput
  }

  export type QuizCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: QuizCategoryWhereInput | QuizCategoryWhereInput[]
    OR?: QuizCategoryWhereInput[]
    NOT?: QuizCategoryWhereInput | QuizCategoryWhereInput[]
    quizzes?: QuizListRelationFilter
  }, "id" | "name">

  export type QuizCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: QuizCategoryCountOrderByAggregateInput
    _max?: QuizCategoryMaxOrderByAggregateInput
    _min?: QuizCategoryMinOrderByAggregateInput
  }

  export type QuizCategoryScalarWhereWithAggregatesInput = {
    AND?: QuizCategoryScalarWhereWithAggregatesInput | QuizCategoryScalarWhereWithAggregatesInput[]
    OR?: QuizCategoryScalarWhereWithAggregatesInput[]
    NOT?: QuizCategoryScalarWhereWithAggregatesInput | QuizCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizCategory"> | string
    name?: StringWithAggregatesFilter<"QuizCategory"> | string
  }

  export type QuizLeaderboardWhereInput = {
    AND?: QuizLeaderboardWhereInput | QuizLeaderboardWhereInput[]
    OR?: QuizLeaderboardWhereInput[]
    NOT?: QuizLeaderboardWhereInput | QuizLeaderboardWhereInput[]
    id?: StringFilter<"QuizLeaderboard"> | string
    userId?: StringFilter<"QuizLeaderboard"> | string
    quizId?: StringFilter<"QuizLeaderboard"> | string
    score?: IntFilter<"QuizLeaderboard"> | number
    accuracy?: FloatFilter<"QuizLeaderboard"> | number
    attempts?: IntFilter<"QuizLeaderboard"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
  }

  export type QuizLeaderboardOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    accuracy?: SortOrder
    attempts?: SortOrder
    user?: UserOrderByWithRelationInput
    quiz?: QuizOrderByWithRelationInput
  }

  export type QuizLeaderboardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizLeaderboardWhereInput | QuizLeaderboardWhereInput[]
    OR?: QuizLeaderboardWhereInput[]
    NOT?: QuizLeaderboardWhereInput | QuizLeaderboardWhereInput[]
    userId?: StringFilter<"QuizLeaderboard"> | string
    quizId?: StringFilter<"QuizLeaderboard"> | string
    score?: IntFilter<"QuizLeaderboard"> | number
    accuracy?: FloatFilter<"QuizLeaderboard"> | number
    attempts?: IntFilter<"QuizLeaderboard"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
  }, "id">

  export type QuizLeaderboardOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    accuracy?: SortOrder
    attempts?: SortOrder
    _count?: QuizLeaderboardCountOrderByAggregateInput
    _avg?: QuizLeaderboardAvgOrderByAggregateInput
    _max?: QuizLeaderboardMaxOrderByAggregateInput
    _min?: QuizLeaderboardMinOrderByAggregateInput
    _sum?: QuizLeaderboardSumOrderByAggregateInput
  }

  export type QuizLeaderboardScalarWhereWithAggregatesInput = {
    AND?: QuizLeaderboardScalarWhereWithAggregatesInput | QuizLeaderboardScalarWhereWithAggregatesInput[]
    OR?: QuizLeaderboardScalarWhereWithAggregatesInput[]
    NOT?: QuizLeaderboardScalarWhereWithAggregatesInput | QuizLeaderboardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizLeaderboard"> | string
    userId?: StringWithAggregatesFilter<"QuizLeaderboard"> | string
    quizId?: StringWithAggregatesFilter<"QuizLeaderboard"> | string
    score?: IntWithAggregatesFilter<"QuizLeaderboard"> | number
    accuracy?: FloatWithAggregatesFilter<"QuizLeaderboard"> | number
    attempts?: IntWithAggregatesFilter<"QuizLeaderboard"> | number
  }

  export type SessionInvitationWhereInput = {
    AND?: SessionInvitationWhereInput | SessionInvitationWhereInput[]
    OR?: SessionInvitationWhereInput[]
    NOT?: SessionInvitationWhereInput | SessionInvitationWhereInput[]
    id?: StringFilter<"SessionInvitation"> | string
    sessionId?: StringFilter<"SessionInvitation"> | string
    email?: StringFilter<"SessionInvitation"> | string
    userId?: StringNullableFilter<"SessionInvitation"> | string | null
    accepted?: BoolFilter<"SessionInvitation"> | boolean
    invitedAt?: DateTimeFilter<"SessionInvitation"> | Date | string
    session?: XOR<QuizSessionScalarRelationFilter, QuizSessionWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type SessionInvitationOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    email?: SortOrder
    userId?: SortOrderInput | SortOrder
    accepted?: SortOrder
    invitedAt?: SortOrder
    session?: QuizSessionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type SessionInvitationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionId_email?: SessionInvitationSessionIdEmailCompoundUniqueInput
    AND?: SessionInvitationWhereInput | SessionInvitationWhereInput[]
    OR?: SessionInvitationWhereInput[]
    NOT?: SessionInvitationWhereInput | SessionInvitationWhereInput[]
    sessionId?: StringFilter<"SessionInvitation"> | string
    email?: StringFilter<"SessionInvitation"> | string
    userId?: StringNullableFilter<"SessionInvitation"> | string | null
    accepted?: BoolFilter<"SessionInvitation"> | boolean
    invitedAt?: DateTimeFilter<"SessionInvitation"> | Date | string
    session?: XOR<QuizSessionScalarRelationFilter, QuizSessionWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "sessionId_email">

  export type SessionInvitationOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    email?: SortOrder
    userId?: SortOrderInput | SortOrder
    accepted?: SortOrder
    invitedAt?: SortOrder
    _count?: SessionInvitationCountOrderByAggregateInput
    _max?: SessionInvitationMaxOrderByAggregateInput
    _min?: SessionInvitationMinOrderByAggregateInput
  }

  export type SessionInvitationScalarWhereWithAggregatesInput = {
    AND?: SessionInvitationScalarWhereWithAggregatesInput | SessionInvitationScalarWhereWithAggregatesInput[]
    OR?: SessionInvitationScalarWhereWithAggregatesInput[]
    NOT?: SessionInvitationScalarWhereWithAggregatesInput | SessionInvitationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SessionInvitation"> | string
    sessionId?: StringWithAggregatesFilter<"SessionInvitation"> | string
    email?: StringWithAggregatesFilter<"SessionInvitation"> | string
    userId?: StringNullableWithAggregatesFilter<"SessionInvitation"> | string | null
    accepted?: BoolWithAggregatesFilter<"SessionInvitation"> | boolean
    invitedAt?: DateTimeWithAggregatesFilter<"SessionInvitation"> | Date | string
  }

  export type AuthSessionCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type AuthSessionUncheckedCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type AuthSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthSessionCreateManyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type AuthSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdQuizzes?: QuizCreateNestedManyWithoutCreatedByInput
    hostedSessions?: QuizSessionCreateNestedManyWithoutHostInput
    participations?: SessionParticipantCreateNestedManyWithoutUserInput
    leaderboardEntries?: QuizLeaderboardCreateNestedManyWithoutUserInput
    invitations?: SessionInvitationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdQuizzes?: QuizUncheckedCreateNestedManyWithoutCreatedByInput
    hostedSessions?: QuizSessionUncheckedCreateNestedManyWithoutHostInput
    participations?: SessionParticipantUncheckedCreateNestedManyWithoutUserInput
    leaderboardEntries?: QuizLeaderboardUncheckedCreateNestedManyWithoutUserInput
    invitations?: SessionInvitationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdQuizzes?: QuizUpdateManyWithoutCreatedByNestedInput
    hostedSessions?: QuizSessionUpdateManyWithoutHostNestedInput
    participations?: SessionParticipantUpdateManyWithoutUserNestedInput
    leaderboardEntries?: QuizLeaderboardUpdateManyWithoutUserNestedInput
    invitations?: SessionInvitationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdQuizzes?: QuizUncheckedUpdateManyWithoutCreatedByNestedInput
    hostedSessions?: QuizSessionUncheckedUpdateManyWithoutHostNestedInput
    participations?: SessionParticipantUncheckedUpdateManyWithoutUserNestedInput
    leaderboardEntries?: QuizLeaderboardUncheckedUpdateManyWithoutUserNestedInput
    invitations?: SessionInvitationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCreateInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.QuizType
    category: QuizCategoryCreateNestedOneWithoutQuizzesInput
    createdBy: UserCreateNestedOneWithoutCreatedQuizzesInput
    questions?: QuizQuestionCreateNestedManyWithoutQuizInput
    sessions?: QuizSessionCreateNestedManyWithoutQuizInput
    leaderboardEntries?: QuizLeaderboardCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.QuizType
    categoryId: string
    createdById: string
    questions?: QuizQuestionUncheckedCreateNestedManyWithoutQuizInput
    sessions?: QuizSessionUncheckedCreateNestedManyWithoutQuizInput
    leaderboardEntries?: QuizLeaderboardUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
    category?: QuizCategoryUpdateOneRequiredWithoutQuizzesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedQuizzesNestedInput
    questions?: QuizQuestionUpdateManyWithoutQuizNestedInput
    sessions?: QuizSessionUpdateManyWithoutQuizNestedInput
    leaderboardEntries?: QuizLeaderboardUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
    categoryId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    questions?: QuizQuestionUncheckedUpdateManyWithoutQuizNestedInput
    sessions?: QuizSessionUncheckedUpdateManyWithoutQuizNestedInput
    leaderboardEntries?: QuizLeaderboardUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.QuizType
    categoryId: string
    createdById: string
  }

  export type QuizUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
  }

  export type QuizUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
    categoryId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type QuizQuestionCreateInput = {
    id?: string
    text: string
    type: $Enums.QuestionType
    questionScore: number
    timeLimit: number
    order?: number | null
    quiz: QuizCreateNestedOneWithoutQuestionsInput
    options?: QuestionAnswerOptionCreateNestedManyWithoutQuestionInput
    responses?: QuestionResponseCreateNestedManyWithoutQuestionInput
  }

  export type QuizQuestionUncheckedCreateInput = {
    id?: string
    text: string
    type: $Enums.QuestionType
    questionScore: number
    timeLimit: number
    order?: number | null
    quizId: string
    options?: QuestionAnswerOptionUncheckedCreateNestedManyWithoutQuestionInput
    responses?: QuestionResponseUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuizQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    questionScore?: IntFieldUpdateOperationsInput | number
    timeLimit?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    quiz?: QuizUpdateOneRequiredWithoutQuestionsNestedInput
    options?: QuestionAnswerOptionUpdateManyWithoutQuestionNestedInput
    responses?: QuestionResponseUpdateManyWithoutQuestionNestedInput
  }

  export type QuizQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    questionScore?: IntFieldUpdateOperationsInput | number
    timeLimit?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    quizId?: StringFieldUpdateOperationsInput | string
    options?: QuestionAnswerOptionUncheckedUpdateManyWithoutQuestionNestedInput
    responses?: QuestionResponseUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuizQuestionCreateManyInput = {
    id?: string
    text: string
    type: $Enums.QuestionType
    questionScore: number
    timeLimit: number
    order?: number | null
    quizId: string
  }

  export type QuizQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    questionScore?: IntFieldUpdateOperationsInput | number
    timeLimit?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type QuizQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    questionScore?: IntFieldUpdateOperationsInput | number
    timeLimit?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    quizId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionAnswerOptionCreateInput = {
    id?: string
    text: string
    isCorrect: boolean
    question: QuizQuestionCreateNestedOneWithoutOptionsInput
    responses?: QuestionResponseCreateNestedManyWithoutSelectedOptionInput
  }

  export type QuestionAnswerOptionUncheckedCreateInput = {
    id?: string
    text: string
    isCorrect: boolean
    questionId: string
    responses?: QuestionResponseUncheckedCreateNestedManyWithoutSelectedOptionInput
  }

  export type QuestionAnswerOptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    question?: QuizQuestionUpdateOneRequiredWithoutOptionsNestedInput
    responses?: QuestionResponseUpdateManyWithoutSelectedOptionNestedInput
  }

  export type QuestionAnswerOptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    questionId?: StringFieldUpdateOperationsInput | string
    responses?: QuestionResponseUncheckedUpdateManyWithoutSelectedOptionNestedInput
  }

  export type QuestionAnswerOptionCreateManyInput = {
    id?: string
    text: string
    isCorrect: boolean
    questionId: string
  }

  export type QuestionAnswerOptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuestionAnswerOptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizSessionCreateInput = {
    id?: string
    code: string
    status?: $Enums.SessionStatus
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    quiz: QuizCreateNestedOneWithoutSessionsInput
    host: UserCreateNestedOneWithoutHostedSessionsInput
    participants?: SessionParticipantCreateNestedManyWithoutSessionInput
    invitations?: SessionInvitationCreateNestedManyWithoutSessionInput
  }

  export type QuizSessionUncheckedCreateInput = {
    id?: string
    code: string
    quizId: string
    hostId: string
    status?: $Enums.SessionStatus
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    participants?: SessionParticipantUncheckedCreateNestedManyWithoutSessionInput
    invitations?: SessionInvitationUncheckedCreateNestedManyWithoutSessionInput
  }

  export type QuizSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quiz?: QuizUpdateOneRequiredWithoutSessionsNestedInput
    host?: UserUpdateOneRequiredWithoutHostedSessionsNestedInput
    participants?: SessionParticipantUpdateManyWithoutSessionNestedInput
    invitations?: SessionInvitationUpdateManyWithoutSessionNestedInput
  }

  export type QuizSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participants?: SessionParticipantUncheckedUpdateManyWithoutSessionNestedInput
    invitations?: SessionInvitationUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type QuizSessionCreateManyInput = {
    id?: string
    code: string
    quizId: string
    hostId: string
    status?: $Enums.SessionStatus
    startedAt?: Date | string | null
    endedAt?: Date | string | null
  }

  export type QuizSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuizSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionParticipantCreateInput = {
    id?: string
    score?: number
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutParticipationsInput
    session: QuizSessionCreateNestedOneWithoutParticipantsInput
    responses?: QuestionResponseCreateNestedManyWithoutParticipantInput
  }

  export type SessionParticipantUncheckedCreateInput = {
    id?: string
    userId: string
    sessionId: string
    score?: number
    joinedAt?: Date | string
    responses?: QuestionResponseUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type SessionParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutParticipationsNestedInput
    session?: QuizSessionUpdateOneRequiredWithoutParticipantsNestedInput
    responses?: QuestionResponseUpdateManyWithoutParticipantNestedInput
  }

  export type SessionParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: QuestionResponseUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type SessionParticipantCreateManyInput = {
    id?: string
    userId: string
    sessionId: string
    score?: number
    joinedAt?: Date | string
  }

  export type SessionParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionResponseCreateInput = {
    id?: string
    submittedAt?: Date | string
    isCorrect: boolean
    participant: SessionParticipantCreateNestedOneWithoutResponsesInput
    question: QuizQuestionCreateNestedOneWithoutResponsesInput
    selectedOption?: QuestionAnswerOptionCreateNestedOneWithoutResponsesInput
  }

  export type QuestionResponseUncheckedCreateInput = {
    id?: string
    participantId: string
    questionId: string
    selectedId?: string | null
    submittedAt?: Date | string
    isCorrect: boolean
  }

  export type QuestionResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    participant?: SessionParticipantUpdateOneRequiredWithoutResponsesNestedInput
    question?: QuizQuestionUpdateOneRequiredWithoutResponsesNestedInput
    selectedOption?: QuestionAnswerOptionUpdateOneWithoutResponsesNestedInput
  }

  export type QuestionResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    selectedId?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuestionResponseCreateManyInput = {
    id?: string
    participantId: string
    questionId: string
    selectedId?: string | null
    submittedAt?: Date | string
    isCorrect: boolean
  }

  export type QuestionResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuestionResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    selectedId?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuizCategoryCreateInput = {
    id?: string
    name: string
    quizzes?: QuizCreateNestedManyWithoutCategoryInput
  }

  export type QuizCategoryUncheckedCreateInput = {
    id?: string
    name: string
    quizzes?: QuizUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type QuizCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quizzes?: QuizUpdateManyWithoutCategoryNestedInput
  }

  export type QuizCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quizzes?: QuizUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type QuizCategoryCreateManyInput = {
    id?: string
    name: string
  }

  export type QuizCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type QuizCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type QuizLeaderboardCreateInput = {
    id?: string
    score: number
    accuracy: number
    attempts: number
    user: UserCreateNestedOneWithoutLeaderboardEntriesInput
    quiz: QuizCreateNestedOneWithoutLeaderboardEntriesInput
  }

  export type QuizLeaderboardUncheckedCreateInput = {
    id?: string
    userId: string
    quizId: string
    score: number
    accuracy: number
    attempts: number
  }

  export type QuizLeaderboardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    attempts?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutLeaderboardEntriesNestedInput
    quiz?: QuizUpdateOneRequiredWithoutLeaderboardEntriesNestedInput
  }

  export type QuizLeaderboardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    attempts?: IntFieldUpdateOperationsInput | number
  }

  export type QuizLeaderboardCreateManyInput = {
    id?: string
    userId: string
    quizId: string
    score: number
    accuracy: number
    attempts: number
  }

  export type QuizLeaderboardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    attempts?: IntFieldUpdateOperationsInput | number
  }

  export type QuizLeaderboardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    attempts?: IntFieldUpdateOperationsInput | number
  }

  export type SessionInvitationCreateInput = {
    id?: string
    email: string
    accepted?: boolean
    invitedAt?: Date | string
    session: QuizSessionCreateNestedOneWithoutInvitationsInput
    user?: UserCreateNestedOneWithoutInvitationsInput
  }

  export type SessionInvitationUncheckedCreateInput = {
    id?: string
    sessionId: string
    email: string
    userId?: string | null
    accepted?: boolean
    invitedAt?: Date | string
  }

  export type SessionInvitationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accepted?: BoolFieldUpdateOperationsInput | boolean
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: QuizSessionUpdateOneRequiredWithoutInvitationsNestedInput
    user?: UserUpdateOneWithoutInvitationsNestedInput
  }

  export type SessionInvitationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    accepted?: BoolFieldUpdateOperationsInput | boolean
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionInvitationCreateManyInput = {
    id?: string
    sessionId: string
    email: string
    userId?: string | null
    accepted?: boolean
    invitedAt?: Date | string
  }

  export type SessionInvitationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accepted?: BoolFieldUpdateOperationsInput | boolean
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionInvitationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    accepted?: BoolFieldUpdateOperationsInput | boolean
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type AuthSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type AuthSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type AuthSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type QuizListRelationFilter = {
    every?: QuizWhereInput
    some?: QuizWhereInput
    none?: QuizWhereInput
  }

  export type QuizSessionListRelationFilter = {
    every?: QuizSessionWhereInput
    some?: QuizSessionWhereInput
    none?: QuizSessionWhereInput
  }

  export type SessionParticipantListRelationFilter = {
    every?: SessionParticipantWhereInput
    some?: SessionParticipantWhereInput
    none?: SessionParticipantWhereInput
  }

  export type QuizLeaderboardListRelationFilter = {
    every?: QuizLeaderboardWhereInput
    some?: QuizLeaderboardWhereInput
    none?: QuizLeaderboardWhereInput
  }

  export type SessionInvitationListRelationFilter = {
    every?: SessionInvitationWhereInput
    some?: SessionInvitationWhereInput
    none?: SessionInvitationWhereInput
  }

  export type QuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizLeaderboardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionInvitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type EnumQuizTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizType | EnumQuizTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuizType[] | ListEnumQuizTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuizType[] | ListEnumQuizTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuizTypeFilter<$PrismaModel> | $Enums.QuizType
  }

  export type QuizCategoryScalarRelationFilter = {
    is?: QuizCategoryWhereInput
    isNot?: QuizCategoryWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type QuizQuestionListRelationFilter = {
    every?: QuizQuestionWhereInput
    some?: QuizQuestionWhereInput
    none?: QuizQuestionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type QuizQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
    createdById?: SortOrder
  }

  export type QuizMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
    createdById?: SortOrder
  }

  export type QuizMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
    createdById?: SortOrder
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

  export type EnumQuizTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizType | EnumQuizTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuizType[] | ListEnumQuizTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuizType[] | ListEnumQuizTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuizTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuizType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuizTypeFilter<$PrismaModel>
    _max?: NestedEnumQuizTypeFilter<$PrismaModel>
  }

  export type EnumQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeFilter<$PrismaModel> | $Enums.QuestionType
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

  export type QuizScalarRelationFilter = {
    is?: QuizWhereInput
    isNot?: QuizWhereInput
  }

  export type QuestionAnswerOptionListRelationFilter = {
    every?: QuestionAnswerOptionWhereInput
    some?: QuestionAnswerOptionWhereInput
    none?: QuestionAnswerOptionWhereInput
  }

  export type QuestionResponseListRelationFilter = {
    every?: QuestionResponseWhereInput
    some?: QuestionResponseWhereInput
    none?: QuestionResponseWhereInput
  }

  export type QuestionAnswerOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    type?: SortOrder
    questionScore?: SortOrder
    timeLimit?: SortOrder
    order?: SortOrder
    quizId?: SortOrder
  }

  export type QuizQuestionAvgOrderByAggregateInput = {
    questionScore?: SortOrder
    timeLimit?: SortOrder
    order?: SortOrder
  }

  export type QuizQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    type?: SortOrder
    questionScore?: SortOrder
    timeLimit?: SortOrder
    order?: SortOrder
    quizId?: SortOrder
  }

  export type QuizQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    type?: SortOrder
    questionScore?: SortOrder
    timeLimit?: SortOrder
    order?: SortOrder
    quizId?: SortOrder
  }

  export type QuizQuestionSumOrderByAggregateInput = {
    questionScore?: SortOrder
    timeLimit?: SortOrder
    order?: SortOrder
  }

  export type EnumQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type QuizQuestionScalarRelationFilter = {
    is?: QuizQuestionWhereInput
    isNot?: QuizQuestionWhereInput
  }

  export type QuestionAnswerOptionCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    isCorrect?: SortOrder
    questionId?: SortOrder
  }

  export type QuestionAnswerOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    isCorrect?: SortOrder
    questionId?: SortOrder
  }

  export type QuestionAnswerOptionMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    isCorrect?: SortOrder
    questionId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
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

  export type QuizSessionCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    quizId?: SortOrder
    hostId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type QuizSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    quizId?: SortOrder
    hostId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type QuizSessionMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    quizId?: SortOrder
    hostId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type EnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
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

  export type QuizSessionScalarRelationFilter = {
    is?: QuizSessionWhereInput
    isNot?: QuizSessionWhereInput
  }

  export type SessionParticipantUserIdSessionIdCompoundUniqueInput = {
    userId: string
    sessionId: string
  }

  export type SessionParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    score?: SortOrder
    joinedAt?: SortOrder
  }

  export type SessionParticipantAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type SessionParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    score?: SortOrder
    joinedAt?: SortOrder
  }

  export type SessionParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    score?: SortOrder
    joinedAt?: SortOrder
  }

  export type SessionParticipantSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type SessionParticipantScalarRelationFilter = {
    is?: SessionParticipantWhereInput
    isNot?: SessionParticipantWhereInput
  }

  export type QuestionAnswerOptionNullableScalarRelationFilter = {
    is?: QuestionAnswerOptionWhereInput | null
    isNot?: QuestionAnswerOptionWhereInput | null
  }

  export type QuestionResponseCountOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
    questionId?: SortOrder
    selectedId?: SortOrder
    submittedAt?: SortOrder
    isCorrect?: SortOrder
  }

  export type QuestionResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
    questionId?: SortOrder
    selectedId?: SortOrder
    submittedAt?: SortOrder
    isCorrect?: SortOrder
  }

  export type QuestionResponseMinOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
    questionId?: SortOrder
    selectedId?: SortOrder
    submittedAt?: SortOrder
    isCorrect?: SortOrder
  }

  export type QuizCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type QuizCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type QuizCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type QuizLeaderboardCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    accuracy?: SortOrder
    attempts?: SortOrder
  }

  export type QuizLeaderboardAvgOrderByAggregateInput = {
    score?: SortOrder
    accuracy?: SortOrder
    attempts?: SortOrder
  }

  export type QuizLeaderboardMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    accuracy?: SortOrder
    attempts?: SortOrder
  }

  export type QuizLeaderboardMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    accuracy?: SortOrder
    attempts?: SortOrder
  }

  export type QuizLeaderboardSumOrderByAggregateInput = {
    score?: SortOrder
    accuracy?: SortOrder
    attempts?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SessionInvitationSessionIdEmailCompoundUniqueInput = {
    sessionId: string
    email: string
  }

  export type SessionInvitationCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    email?: SortOrder
    userId?: SortOrder
    accepted?: SortOrder
    invitedAt?: SortOrder
  }

  export type SessionInvitationMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    email?: SortOrder
    userId?: SortOrder
    accepted?: SortOrder
    invitedAt?: SortOrder
  }

  export type SessionInvitationMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    email?: SortOrder
    userId?: SortOrder
    accepted?: SortOrder
    invitedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type QuizCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<QuizCreateWithoutCreatedByInput, QuizUncheckedCreateWithoutCreatedByInput> | QuizCreateWithoutCreatedByInput[] | QuizUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCreatedByInput | QuizCreateOrConnectWithoutCreatedByInput[]
    createMany?: QuizCreateManyCreatedByInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type QuizSessionCreateNestedManyWithoutHostInput = {
    create?: XOR<QuizSessionCreateWithoutHostInput, QuizSessionUncheckedCreateWithoutHostInput> | QuizSessionCreateWithoutHostInput[] | QuizSessionUncheckedCreateWithoutHostInput[]
    connectOrCreate?: QuizSessionCreateOrConnectWithoutHostInput | QuizSessionCreateOrConnectWithoutHostInput[]
    createMany?: QuizSessionCreateManyHostInputEnvelope
    connect?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
  }

  export type SessionParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionParticipantCreateWithoutUserInput, SessionParticipantUncheckedCreateWithoutUserInput> | SessionParticipantCreateWithoutUserInput[] | SessionParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionParticipantCreateOrConnectWithoutUserInput | SessionParticipantCreateOrConnectWithoutUserInput[]
    createMany?: SessionParticipantCreateManyUserInputEnvelope
    connect?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
  }

  export type QuizLeaderboardCreateNestedManyWithoutUserInput = {
    create?: XOR<QuizLeaderboardCreateWithoutUserInput, QuizLeaderboardUncheckedCreateWithoutUserInput> | QuizLeaderboardCreateWithoutUserInput[] | QuizLeaderboardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizLeaderboardCreateOrConnectWithoutUserInput | QuizLeaderboardCreateOrConnectWithoutUserInput[]
    createMany?: QuizLeaderboardCreateManyUserInputEnvelope
    connect?: QuizLeaderboardWhereUniqueInput | QuizLeaderboardWhereUniqueInput[]
  }

  export type SessionInvitationCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionInvitationCreateWithoutUserInput, SessionInvitationUncheckedCreateWithoutUserInput> | SessionInvitationCreateWithoutUserInput[] | SessionInvitationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionInvitationCreateOrConnectWithoutUserInput | SessionInvitationCreateOrConnectWithoutUserInput[]
    createMany?: SessionInvitationCreateManyUserInputEnvelope
    connect?: SessionInvitationWhereUniqueInput | SessionInvitationWhereUniqueInput[]
  }

  export type QuizUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<QuizCreateWithoutCreatedByInput, QuizUncheckedCreateWithoutCreatedByInput> | QuizCreateWithoutCreatedByInput[] | QuizUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCreatedByInput | QuizCreateOrConnectWithoutCreatedByInput[]
    createMany?: QuizCreateManyCreatedByInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type QuizSessionUncheckedCreateNestedManyWithoutHostInput = {
    create?: XOR<QuizSessionCreateWithoutHostInput, QuizSessionUncheckedCreateWithoutHostInput> | QuizSessionCreateWithoutHostInput[] | QuizSessionUncheckedCreateWithoutHostInput[]
    connectOrCreate?: QuizSessionCreateOrConnectWithoutHostInput | QuizSessionCreateOrConnectWithoutHostInput[]
    createMany?: QuizSessionCreateManyHostInputEnvelope
    connect?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
  }

  export type SessionParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionParticipantCreateWithoutUserInput, SessionParticipantUncheckedCreateWithoutUserInput> | SessionParticipantCreateWithoutUserInput[] | SessionParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionParticipantCreateOrConnectWithoutUserInput | SessionParticipantCreateOrConnectWithoutUserInput[]
    createMany?: SessionParticipantCreateManyUserInputEnvelope
    connect?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
  }

  export type QuizLeaderboardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuizLeaderboardCreateWithoutUserInput, QuizLeaderboardUncheckedCreateWithoutUserInput> | QuizLeaderboardCreateWithoutUserInput[] | QuizLeaderboardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizLeaderboardCreateOrConnectWithoutUserInput | QuizLeaderboardCreateOrConnectWithoutUserInput[]
    createMany?: QuizLeaderboardCreateManyUserInputEnvelope
    connect?: QuizLeaderboardWhereUniqueInput | QuizLeaderboardWhereUniqueInput[]
  }

  export type SessionInvitationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionInvitationCreateWithoutUserInput, SessionInvitationUncheckedCreateWithoutUserInput> | SessionInvitationCreateWithoutUserInput[] | SessionInvitationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionInvitationCreateOrConnectWithoutUserInput | SessionInvitationCreateOrConnectWithoutUserInput[]
    createMany?: SessionInvitationCreateManyUserInputEnvelope
    connect?: SessionInvitationWhereUniqueInput | SessionInvitationWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type QuizUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<QuizCreateWithoutCreatedByInput, QuizUncheckedCreateWithoutCreatedByInput> | QuizCreateWithoutCreatedByInput[] | QuizUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCreatedByInput | QuizCreateOrConnectWithoutCreatedByInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutCreatedByInput | QuizUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: QuizCreateManyCreatedByInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutCreatedByInput | QuizUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutCreatedByInput | QuizUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type QuizSessionUpdateManyWithoutHostNestedInput = {
    create?: XOR<QuizSessionCreateWithoutHostInput, QuizSessionUncheckedCreateWithoutHostInput> | QuizSessionCreateWithoutHostInput[] | QuizSessionUncheckedCreateWithoutHostInput[]
    connectOrCreate?: QuizSessionCreateOrConnectWithoutHostInput | QuizSessionCreateOrConnectWithoutHostInput[]
    upsert?: QuizSessionUpsertWithWhereUniqueWithoutHostInput | QuizSessionUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: QuizSessionCreateManyHostInputEnvelope
    set?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    disconnect?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    delete?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    connect?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    update?: QuizSessionUpdateWithWhereUniqueWithoutHostInput | QuizSessionUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: QuizSessionUpdateManyWithWhereWithoutHostInput | QuizSessionUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: QuizSessionScalarWhereInput | QuizSessionScalarWhereInput[]
  }

  export type SessionParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionParticipantCreateWithoutUserInput, SessionParticipantUncheckedCreateWithoutUserInput> | SessionParticipantCreateWithoutUserInput[] | SessionParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionParticipantCreateOrConnectWithoutUserInput | SessionParticipantCreateOrConnectWithoutUserInput[]
    upsert?: SessionParticipantUpsertWithWhereUniqueWithoutUserInput | SessionParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionParticipantCreateManyUserInputEnvelope
    set?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    disconnect?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    delete?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    connect?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    update?: SessionParticipantUpdateWithWhereUniqueWithoutUserInput | SessionParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionParticipantUpdateManyWithWhereWithoutUserInput | SessionParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionParticipantScalarWhereInput | SessionParticipantScalarWhereInput[]
  }

  export type QuizLeaderboardUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuizLeaderboardCreateWithoutUserInput, QuizLeaderboardUncheckedCreateWithoutUserInput> | QuizLeaderboardCreateWithoutUserInput[] | QuizLeaderboardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizLeaderboardCreateOrConnectWithoutUserInput | QuizLeaderboardCreateOrConnectWithoutUserInput[]
    upsert?: QuizLeaderboardUpsertWithWhereUniqueWithoutUserInput | QuizLeaderboardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuizLeaderboardCreateManyUserInputEnvelope
    set?: QuizLeaderboardWhereUniqueInput | QuizLeaderboardWhereUniqueInput[]
    disconnect?: QuizLeaderboardWhereUniqueInput | QuizLeaderboardWhereUniqueInput[]
    delete?: QuizLeaderboardWhereUniqueInput | QuizLeaderboardWhereUniqueInput[]
    connect?: QuizLeaderboardWhereUniqueInput | QuizLeaderboardWhereUniqueInput[]
    update?: QuizLeaderboardUpdateWithWhereUniqueWithoutUserInput | QuizLeaderboardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuizLeaderboardUpdateManyWithWhereWithoutUserInput | QuizLeaderboardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuizLeaderboardScalarWhereInput | QuizLeaderboardScalarWhereInput[]
  }

  export type SessionInvitationUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionInvitationCreateWithoutUserInput, SessionInvitationUncheckedCreateWithoutUserInput> | SessionInvitationCreateWithoutUserInput[] | SessionInvitationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionInvitationCreateOrConnectWithoutUserInput | SessionInvitationCreateOrConnectWithoutUserInput[]
    upsert?: SessionInvitationUpsertWithWhereUniqueWithoutUserInput | SessionInvitationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionInvitationCreateManyUserInputEnvelope
    set?: SessionInvitationWhereUniqueInput | SessionInvitationWhereUniqueInput[]
    disconnect?: SessionInvitationWhereUniqueInput | SessionInvitationWhereUniqueInput[]
    delete?: SessionInvitationWhereUniqueInput | SessionInvitationWhereUniqueInput[]
    connect?: SessionInvitationWhereUniqueInput | SessionInvitationWhereUniqueInput[]
    update?: SessionInvitationUpdateWithWhereUniqueWithoutUserInput | SessionInvitationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionInvitationUpdateManyWithWhereWithoutUserInput | SessionInvitationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionInvitationScalarWhereInput | SessionInvitationScalarWhereInput[]
  }

  export type QuizUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<QuizCreateWithoutCreatedByInput, QuizUncheckedCreateWithoutCreatedByInput> | QuizCreateWithoutCreatedByInput[] | QuizUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCreatedByInput | QuizCreateOrConnectWithoutCreatedByInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutCreatedByInput | QuizUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: QuizCreateManyCreatedByInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutCreatedByInput | QuizUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutCreatedByInput | QuizUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type QuizSessionUncheckedUpdateManyWithoutHostNestedInput = {
    create?: XOR<QuizSessionCreateWithoutHostInput, QuizSessionUncheckedCreateWithoutHostInput> | QuizSessionCreateWithoutHostInput[] | QuizSessionUncheckedCreateWithoutHostInput[]
    connectOrCreate?: QuizSessionCreateOrConnectWithoutHostInput | QuizSessionCreateOrConnectWithoutHostInput[]
    upsert?: QuizSessionUpsertWithWhereUniqueWithoutHostInput | QuizSessionUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: QuizSessionCreateManyHostInputEnvelope
    set?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    disconnect?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    delete?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    connect?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    update?: QuizSessionUpdateWithWhereUniqueWithoutHostInput | QuizSessionUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: QuizSessionUpdateManyWithWhereWithoutHostInput | QuizSessionUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: QuizSessionScalarWhereInput | QuizSessionScalarWhereInput[]
  }

  export type SessionParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionParticipantCreateWithoutUserInput, SessionParticipantUncheckedCreateWithoutUserInput> | SessionParticipantCreateWithoutUserInput[] | SessionParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionParticipantCreateOrConnectWithoutUserInput | SessionParticipantCreateOrConnectWithoutUserInput[]
    upsert?: SessionParticipantUpsertWithWhereUniqueWithoutUserInput | SessionParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionParticipantCreateManyUserInputEnvelope
    set?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    disconnect?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    delete?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    connect?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    update?: SessionParticipantUpdateWithWhereUniqueWithoutUserInput | SessionParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionParticipantUpdateManyWithWhereWithoutUserInput | SessionParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionParticipantScalarWhereInput | SessionParticipantScalarWhereInput[]
  }

  export type QuizLeaderboardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuizLeaderboardCreateWithoutUserInput, QuizLeaderboardUncheckedCreateWithoutUserInput> | QuizLeaderboardCreateWithoutUserInput[] | QuizLeaderboardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizLeaderboardCreateOrConnectWithoutUserInput | QuizLeaderboardCreateOrConnectWithoutUserInput[]
    upsert?: QuizLeaderboardUpsertWithWhereUniqueWithoutUserInput | QuizLeaderboardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuizLeaderboardCreateManyUserInputEnvelope
    set?: QuizLeaderboardWhereUniqueInput | QuizLeaderboardWhereUniqueInput[]
    disconnect?: QuizLeaderboardWhereUniqueInput | QuizLeaderboardWhereUniqueInput[]
    delete?: QuizLeaderboardWhereUniqueInput | QuizLeaderboardWhereUniqueInput[]
    connect?: QuizLeaderboardWhereUniqueInput | QuizLeaderboardWhereUniqueInput[]
    update?: QuizLeaderboardUpdateWithWhereUniqueWithoutUserInput | QuizLeaderboardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuizLeaderboardUpdateManyWithWhereWithoutUserInput | QuizLeaderboardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuizLeaderboardScalarWhereInput | QuizLeaderboardScalarWhereInput[]
  }

  export type SessionInvitationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionInvitationCreateWithoutUserInput, SessionInvitationUncheckedCreateWithoutUserInput> | SessionInvitationCreateWithoutUserInput[] | SessionInvitationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionInvitationCreateOrConnectWithoutUserInput | SessionInvitationCreateOrConnectWithoutUserInput[]
    upsert?: SessionInvitationUpsertWithWhereUniqueWithoutUserInput | SessionInvitationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionInvitationCreateManyUserInputEnvelope
    set?: SessionInvitationWhereUniqueInput | SessionInvitationWhereUniqueInput[]
    disconnect?: SessionInvitationWhereUniqueInput | SessionInvitationWhereUniqueInput[]
    delete?: SessionInvitationWhereUniqueInput | SessionInvitationWhereUniqueInput[]
    connect?: SessionInvitationWhereUniqueInput | SessionInvitationWhereUniqueInput[]
    update?: SessionInvitationUpdateWithWhereUniqueWithoutUserInput | SessionInvitationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionInvitationUpdateManyWithWhereWithoutUserInput | SessionInvitationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionInvitationScalarWhereInput | SessionInvitationScalarWhereInput[]
  }

  export type QuizCategoryCreateNestedOneWithoutQuizzesInput = {
    create?: XOR<QuizCategoryCreateWithoutQuizzesInput, QuizCategoryUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: QuizCategoryCreateOrConnectWithoutQuizzesInput
    connect?: QuizCategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedQuizzesInput = {
    create?: XOR<UserCreateWithoutCreatedQuizzesInput, UserUncheckedCreateWithoutCreatedQuizzesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedQuizzesInput
    connect?: UserWhereUniqueInput
  }

  export type QuizQuestionCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizQuestionCreateWithoutQuizInput, QuizQuestionUncheckedCreateWithoutQuizInput> | QuizQuestionCreateWithoutQuizInput[] | QuizQuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizQuestionCreateOrConnectWithoutQuizInput | QuizQuestionCreateOrConnectWithoutQuizInput[]
    createMany?: QuizQuestionCreateManyQuizInputEnvelope
    connect?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
  }

  export type QuizSessionCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizSessionCreateWithoutQuizInput, QuizSessionUncheckedCreateWithoutQuizInput> | QuizSessionCreateWithoutQuizInput[] | QuizSessionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizSessionCreateOrConnectWithoutQuizInput | QuizSessionCreateOrConnectWithoutQuizInput[]
    createMany?: QuizSessionCreateManyQuizInputEnvelope
    connect?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
  }

  export type QuizLeaderboardCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizLeaderboardCreateWithoutQuizInput, QuizLeaderboardUncheckedCreateWithoutQuizInput> | QuizLeaderboardCreateWithoutQuizInput[] | QuizLeaderboardUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizLeaderboardCreateOrConnectWithoutQuizInput | QuizLeaderboardCreateOrConnectWithoutQuizInput[]
    createMany?: QuizLeaderboardCreateManyQuizInputEnvelope
    connect?: QuizLeaderboardWhereUniqueInput | QuizLeaderboardWhereUniqueInput[]
  }

  export type QuizQuestionUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizQuestionCreateWithoutQuizInput, QuizQuestionUncheckedCreateWithoutQuizInput> | QuizQuestionCreateWithoutQuizInput[] | QuizQuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizQuestionCreateOrConnectWithoutQuizInput | QuizQuestionCreateOrConnectWithoutQuizInput[]
    createMany?: QuizQuestionCreateManyQuizInputEnvelope
    connect?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
  }

  export type QuizSessionUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizSessionCreateWithoutQuizInput, QuizSessionUncheckedCreateWithoutQuizInput> | QuizSessionCreateWithoutQuizInput[] | QuizSessionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizSessionCreateOrConnectWithoutQuizInput | QuizSessionCreateOrConnectWithoutQuizInput[]
    createMany?: QuizSessionCreateManyQuizInputEnvelope
    connect?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
  }

  export type QuizLeaderboardUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizLeaderboardCreateWithoutQuizInput, QuizLeaderboardUncheckedCreateWithoutQuizInput> | QuizLeaderboardCreateWithoutQuizInput[] | QuizLeaderboardUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizLeaderboardCreateOrConnectWithoutQuizInput | QuizLeaderboardCreateOrConnectWithoutQuizInput[]
    createMany?: QuizLeaderboardCreateManyQuizInputEnvelope
    connect?: QuizLeaderboardWhereUniqueInput | QuizLeaderboardWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumQuizTypeFieldUpdateOperationsInput = {
    set?: $Enums.QuizType
  }

  export type QuizCategoryUpdateOneRequiredWithoutQuizzesNestedInput = {
    create?: XOR<QuizCategoryCreateWithoutQuizzesInput, QuizCategoryUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: QuizCategoryCreateOrConnectWithoutQuizzesInput
    upsert?: QuizCategoryUpsertWithoutQuizzesInput
    connect?: QuizCategoryWhereUniqueInput
    update?: XOR<XOR<QuizCategoryUpdateToOneWithWhereWithoutQuizzesInput, QuizCategoryUpdateWithoutQuizzesInput>, QuizCategoryUncheckedUpdateWithoutQuizzesInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedQuizzesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedQuizzesInput, UserUncheckedCreateWithoutCreatedQuizzesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedQuizzesInput
    upsert?: UserUpsertWithoutCreatedQuizzesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedQuizzesInput, UserUpdateWithoutCreatedQuizzesInput>, UserUncheckedUpdateWithoutCreatedQuizzesInput>
  }

  export type QuizQuestionUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizQuestionCreateWithoutQuizInput, QuizQuestionUncheckedCreateWithoutQuizInput> | QuizQuestionCreateWithoutQuizInput[] | QuizQuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizQuestionCreateOrConnectWithoutQuizInput | QuizQuestionCreateOrConnectWithoutQuizInput[]
    upsert?: QuizQuestionUpsertWithWhereUniqueWithoutQuizInput | QuizQuestionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizQuestionCreateManyQuizInputEnvelope
    set?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    disconnect?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    delete?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    connect?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    update?: QuizQuestionUpdateWithWhereUniqueWithoutQuizInput | QuizQuestionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizQuestionUpdateManyWithWhereWithoutQuizInput | QuizQuestionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizQuestionScalarWhereInput | QuizQuestionScalarWhereInput[]
  }

  export type QuizSessionUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizSessionCreateWithoutQuizInput, QuizSessionUncheckedCreateWithoutQuizInput> | QuizSessionCreateWithoutQuizInput[] | QuizSessionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizSessionCreateOrConnectWithoutQuizInput | QuizSessionCreateOrConnectWithoutQuizInput[]
    upsert?: QuizSessionUpsertWithWhereUniqueWithoutQuizInput | QuizSessionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizSessionCreateManyQuizInputEnvelope
    set?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    disconnect?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    delete?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    connect?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    update?: QuizSessionUpdateWithWhereUniqueWithoutQuizInput | QuizSessionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizSessionUpdateManyWithWhereWithoutQuizInput | QuizSessionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizSessionScalarWhereInput | QuizSessionScalarWhereInput[]
  }

  export type QuizLeaderboardUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizLeaderboardCreateWithoutQuizInput, QuizLeaderboardUncheckedCreateWithoutQuizInput> | QuizLeaderboardCreateWithoutQuizInput[] | QuizLeaderboardUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizLeaderboardCreateOrConnectWithoutQuizInput | QuizLeaderboardCreateOrConnectWithoutQuizInput[]
    upsert?: QuizLeaderboardUpsertWithWhereUniqueWithoutQuizInput | QuizLeaderboardUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizLeaderboardCreateManyQuizInputEnvelope
    set?: QuizLeaderboardWhereUniqueInput | QuizLeaderboardWhereUniqueInput[]
    disconnect?: QuizLeaderboardWhereUniqueInput | QuizLeaderboardWhereUniqueInput[]
    delete?: QuizLeaderboardWhereUniqueInput | QuizLeaderboardWhereUniqueInput[]
    connect?: QuizLeaderboardWhereUniqueInput | QuizLeaderboardWhereUniqueInput[]
    update?: QuizLeaderboardUpdateWithWhereUniqueWithoutQuizInput | QuizLeaderboardUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizLeaderboardUpdateManyWithWhereWithoutQuizInput | QuizLeaderboardUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizLeaderboardScalarWhereInput | QuizLeaderboardScalarWhereInput[]
  }

  export type QuizQuestionUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizQuestionCreateWithoutQuizInput, QuizQuestionUncheckedCreateWithoutQuizInput> | QuizQuestionCreateWithoutQuizInput[] | QuizQuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizQuestionCreateOrConnectWithoutQuizInput | QuizQuestionCreateOrConnectWithoutQuizInput[]
    upsert?: QuizQuestionUpsertWithWhereUniqueWithoutQuizInput | QuizQuestionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizQuestionCreateManyQuizInputEnvelope
    set?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    disconnect?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    delete?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    connect?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    update?: QuizQuestionUpdateWithWhereUniqueWithoutQuizInput | QuizQuestionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizQuestionUpdateManyWithWhereWithoutQuizInput | QuizQuestionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizQuestionScalarWhereInput | QuizQuestionScalarWhereInput[]
  }

  export type QuizSessionUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizSessionCreateWithoutQuizInput, QuizSessionUncheckedCreateWithoutQuizInput> | QuizSessionCreateWithoutQuizInput[] | QuizSessionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizSessionCreateOrConnectWithoutQuizInput | QuizSessionCreateOrConnectWithoutQuizInput[]
    upsert?: QuizSessionUpsertWithWhereUniqueWithoutQuizInput | QuizSessionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizSessionCreateManyQuizInputEnvelope
    set?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    disconnect?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    delete?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    connect?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    update?: QuizSessionUpdateWithWhereUniqueWithoutQuizInput | QuizSessionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizSessionUpdateManyWithWhereWithoutQuizInput | QuizSessionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizSessionScalarWhereInput | QuizSessionScalarWhereInput[]
  }

  export type QuizLeaderboardUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizLeaderboardCreateWithoutQuizInput, QuizLeaderboardUncheckedCreateWithoutQuizInput> | QuizLeaderboardCreateWithoutQuizInput[] | QuizLeaderboardUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizLeaderboardCreateOrConnectWithoutQuizInput | QuizLeaderboardCreateOrConnectWithoutQuizInput[]
    upsert?: QuizLeaderboardUpsertWithWhereUniqueWithoutQuizInput | QuizLeaderboardUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizLeaderboardCreateManyQuizInputEnvelope
    set?: QuizLeaderboardWhereUniqueInput | QuizLeaderboardWhereUniqueInput[]
    disconnect?: QuizLeaderboardWhereUniqueInput | QuizLeaderboardWhereUniqueInput[]
    delete?: QuizLeaderboardWhereUniqueInput | QuizLeaderboardWhereUniqueInput[]
    connect?: QuizLeaderboardWhereUniqueInput | QuizLeaderboardWhereUniqueInput[]
    update?: QuizLeaderboardUpdateWithWhereUniqueWithoutQuizInput | QuizLeaderboardUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizLeaderboardUpdateManyWithWhereWithoutQuizInput | QuizLeaderboardUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizLeaderboardScalarWhereInput | QuizLeaderboardScalarWhereInput[]
  }

  export type QuizCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuestionsInput
    connect?: QuizWhereUniqueInput
  }

  export type QuestionAnswerOptionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionAnswerOptionCreateWithoutQuestionInput, QuestionAnswerOptionUncheckedCreateWithoutQuestionInput> | QuestionAnswerOptionCreateWithoutQuestionInput[] | QuestionAnswerOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionAnswerOptionCreateOrConnectWithoutQuestionInput | QuestionAnswerOptionCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionAnswerOptionCreateManyQuestionInputEnvelope
    connect?: QuestionAnswerOptionWhereUniqueInput | QuestionAnswerOptionWhereUniqueInput[]
  }

  export type QuestionResponseCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionResponseCreateWithoutQuestionInput, QuestionResponseUncheckedCreateWithoutQuestionInput> | QuestionResponseCreateWithoutQuestionInput[] | QuestionResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionResponseCreateOrConnectWithoutQuestionInput | QuestionResponseCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionResponseCreateManyQuestionInputEnvelope
    connect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
  }

  export type QuestionAnswerOptionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionAnswerOptionCreateWithoutQuestionInput, QuestionAnswerOptionUncheckedCreateWithoutQuestionInput> | QuestionAnswerOptionCreateWithoutQuestionInput[] | QuestionAnswerOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionAnswerOptionCreateOrConnectWithoutQuestionInput | QuestionAnswerOptionCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionAnswerOptionCreateManyQuestionInputEnvelope
    connect?: QuestionAnswerOptionWhereUniqueInput | QuestionAnswerOptionWhereUniqueInput[]
  }

  export type QuestionResponseUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionResponseCreateWithoutQuestionInput, QuestionResponseUncheckedCreateWithoutQuestionInput> | QuestionResponseCreateWithoutQuestionInput[] | QuestionResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionResponseCreateOrConnectWithoutQuestionInput | QuestionResponseCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionResponseCreateManyQuestionInputEnvelope
    connect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
  }

  export type EnumQuestionTypeFieldUpdateOperationsInput = {
    set?: $Enums.QuestionType
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

  export type QuizUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuestionsInput
    upsert?: QuizUpsertWithoutQuestionsInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutQuestionsInput, QuizUpdateWithoutQuestionsInput>, QuizUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuestionAnswerOptionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionAnswerOptionCreateWithoutQuestionInput, QuestionAnswerOptionUncheckedCreateWithoutQuestionInput> | QuestionAnswerOptionCreateWithoutQuestionInput[] | QuestionAnswerOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionAnswerOptionCreateOrConnectWithoutQuestionInput | QuestionAnswerOptionCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionAnswerOptionUpsertWithWhereUniqueWithoutQuestionInput | QuestionAnswerOptionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionAnswerOptionCreateManyQuestionInputEnvelope
    set?: QuestionAnswerOptionWhereUniqueInput | QuestionAnswerOptionWhereUniqueInput[]
    disconnect?: QuestionAnswerOptionWhereUniqueInput | QuestionAnswerOptionWhereUniqueInput[]
    delete?: QuestionAnswerOptionWhereUniqueInput | QuestionAnswerOptionWhereUniqueInput[]
    connect?: QuestionAnswerOptionWhereUniqueInput | QuestionAnswerOptionWhereUniqueInput[]
    update?: QuestionAnswerOptionUpdateWithWhereUniqueWithoutQuestionInput | QuestionAnswerOptionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionAnswerOptionUpdateManyWithWhereWithoutQuestionInput | QuestionAnswerOptionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionAnswerOptionScalarWhereInput | QuestionAnswerOptionScalarWhereInput[]
  }

  export type QuestionResponseUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionResponseCreateWithoutQuestionInput, QuestionResponseUncheckedCreateWithoutQuestionInput> | QuestionResponseCreateWithoutQuestionInput[] | QuestionResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionResponseCreateOrConnectWithoutQuestionInput | QuestionResponseCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionResponseUpsertWithWhereUniqueWithoutQuestionInput | QuestionResponseUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionResponseCreateManyQuestionInputEnvelope
    set?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    disconnect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    delete?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    connect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    update?: QuestionResponseUpdateWithWhereUniqueWithoutQuestionInput | QuestionResponseUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionResponseUpdateManyWithWhereWithoutQuestionInput | QuestionResponseUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionResponseScalarWhereInput | QuestionResponseScalarWhereInput[]
  }

  export type QuestionAnswerOptionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionAnswerOptionCreateWithoutQuestionInput, QuestionAnswerOptionUncheckedCreateWithoutQuestionInput> | QuestionAnswerOptionCreateWithoutQuestionInput[] | QuestionAnswerOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionAnswerOptionCreateOrConnectWithoutQuestionInput | QuestionAnswerOptionCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionAnswerOptionUpsertWithWhereUniqueWithoutQuestionInput | QuestionAnswerOptionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionAnswerOptionCreateManyQuestionInputEnvelope
    set?: QuestionAnswerOptionWhereUniqueInput | QuestionAnswerOptionWhereUniqueInput[]
    disconnect?: QuestionAnswerOptionWhereUniqueInput | QuestionAnswerOptionWhereUniqueInput[]
    delete?: QuestionAnswerOptionWhereUniqueInput | QuestionAnswerOptionWhereUniqueInput[]
    connect?: QuestionAnswerOptionWhereUniqueInput | QuestionAnswerOptionWhereUniqueInput[]
    update?: QuestionAnswerOptionUpdateWithWhereUniqueWithoutQuestionInput | QuestionAnswerOptionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionAnswerOptionUpdateManyWithWhereWithoutQuestionInput | QuestionAnswerOptionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionAnswerOptionScalarWhereInput | QuestionAnswerOptionScalarWhereInput[]
  }

  export type QuestionResponseUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionResponseCreateWithoutQuestionInput, QuestionResponseUncheckedCreateWithoutQuestionInput> | QuestionResponseCreateWithoutQuestionInput[] | QuestionResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionResponseCreateOrConnectWithoutQuestionInput | QuestionResponseCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionResponseUpsertWithWhereUniqueWithoutQuestionInput | QuestionResponseUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionResponseCreateManyQuestionInputEnvelope
    set?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    disconnect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    delete?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    connect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    update?: QuestionResponseUpdateWithWhereUniqueWithoutQuestionInput | QuestionResponseUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionResponseUpdateManyWithWhereWithoutQuestionInput | QuestionResponseUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionResponseScalarWhereInput | QuestionResponseScalarWhereInput[]
  }

  export type QuizQuestionCreateNestedOneWithoutOptionsInput = {
    create?: XOR<QuizQuestionCreateWithoutOptionsInput, QuizQuestionUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: QuizQuestionCreateOrConnectWithoutOptionsInput
    connect?: QuizQuestionWhereUniqueInput
  }

  export type QuestionResponseCreateNestedManyWithoutSelectedOptionInput = {
    create?: XOR<QuestionResponseCreateWithoutSelectedOptionInput, QuestionResponseUncheckedCreateWithoutSelectedOptionInput> | QuestionResponseCreateWithoutSelectedOptionInput[] | QuestionResponseUncheckedCreateWithoutSelectedOptionInput[]
    connectOrCreate?: QuestionResponseCreateOrConnectWithoutSelectedOptionInput | QuestionResponseCreateOrConnectWithoutSelectedOptionInput[]
    createMany?: QuestionResponseCreateManySelectedOptionInputEnvelope
    connect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
  }

  export type QuestionResponseUncheckedCreateNestedManyWithoutSelectedOptionInput = {
    create?: XOR<QuestionResponseCreateWithoutSelectedOptionInput, QuestionResponseUncheckedCreateWithoutSelectedOptionInput> | QuestionResponseCreateWithoutSelectedOptionInput[] | QuestionResponseUncheckedCreateWithoutSelectedOptionInput[]
    connectOrCreate?: QuestionResponseCreateOrConnectWithoutSelectedOptionInput | QuestionResponseCreateOrConnectWithoutSelectedOptionInput[]
    createMany?: QuestionResponseCreateManySelectedOptionInputEnvelope
    connect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type QuizQuestionUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<QuizQuestionCreateWithoutOptionsInput, QuizQuestionUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: QuizQuestionCreateOrConnectWithoutOptionsInput
    upsert?: QuizQuestionUpsertWithoutOptionsInput
    connect?: QuizQuestionWhereUniqueInput
    update?: XOR<XOR<QuizQuestionUpdateToOneWithWhereWithoutOptionsInput, QuizQuestionUpdateWithoutOptionsInput>, QuizQuestionUncheckedUpdateWithoutOptionsInput>
  }

  export type QuestionResponseUpdateManyWithoutSelectedOptionNestedInput = {
    create?: XOR<QuestionResponseCreateWithoutSelectedOptionInput, QuestionResponseUncheckedCreateWithoutSelectedOptionInput> | QuestionResponseCreateWithoutSelectedOptionInput[] | QuestionResponseUncheckedCreateWithoutSelectedOptionInput[]
    connectOrCreate?: QuestionResponseCreateOrConnectWithoutSelectedOptionInput | QuestionResponseCreateOrConnectWithoutSelectedOptionInput[]
    upsert?: QuestionResponseUpsertWithWhereUniqueWithoutSelectedOptionInput | QuestionResponseUpsertWithWhereUniqueWithoutSelectedOptionInput[]
    createMany?: QuestionResponseCreateManySelectedOptionInputEnvelope
    set?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    disconnect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    delete?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    connect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    update?: QuestionResponseUpdateWithWhereUniqueWithoutSelectedOptionInput | QuestionResponseUpdateWithWhereUniqueWithoutSelectedOptionInput[]
    updateMany?: QuestionResponseUpdateManyWithWhereWithoutSelectedOptionInput | QuestionResponseUpdateManyWithWhereWithoutSelectedOptionInput[]
    deleteMany?: QuestionResponseScalarWhereInput | QuestionResponseScalarWhereInput[]
  }

  export type QuestionResponseUncheckedUpdateManyWithoutSelectedOptionNestedInput = {
    create?: XOR<QuestionResponseCreateWithoutSelectedOptionInput, QuestionResponseUncheckedCreateWithoutSelectedOptionInput> | QuestionResponseCreateWithoutSelectedOptionInput[] | QuestionResponseUncheckedCreateWithoutSelectedOptionInput[]
    connectOrCreate?: QuestionResponseCreateOrConnectWithoutSelectedOptionInput | QuestionResponseCreateOrConnectWithoutSelectedOptionInput[]
    upsert?: QuestionResponseUpsertWithWhereUniqueWithoutSelectedOptionInput | QuestionResponseUpsertWithWhereUniqueWithoutSelectedOptionInput[]
    createMany?: QuestionResponseCreateManySelectedOptionInputEnvelope
    set?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    disconnect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    delete?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    connect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    update?: QuestionResponseUpdateWithWhereUniqueWithoutSelectedOptionInput | QuestionResponseUpdateWithWhereUniqueWithoutSelectedOptionInput[]
    updateMany?: QuestionResponseUpdateManyWithWhereWithoutSelectedOptionInput | QuestionResponseUpdateManyWithWhereWithoutSelectedOptionInput[]
    deleteMany?: QuestionResponseScalarWhereInput | QuestionResponseScalarWhereInput[]
  }

  export type QuizCreateNestedOneWithoutSessionsInput = {
    create?: XOR<QuizCreateWithoutSessionsInput, QuizUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutSessionsInput
    connect?: QuizWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutHostedSessionsInput = {
    create?: XOR<UserCreateWithoutHostedSessionsInput, UserUncheckedCreateWithoutHostedSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHostedSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type SessionParticipantCreateNestedManyWithoutSessionInput = {
    create?: XOR<SessionParticipantCreateWithoutSessionInput, SessionParticipantUncheckedCreateWithoutSessionInput> | SessionParticipantCreateWithoutSessionInput[] | SessionParticipantUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionParticipantCreateOrConnectWithoutSessionInput | SessionParticipantCreateOrConnectWithoutSessionInput[]
    createMany?: SessionParticipantCreateManySessionInputEnvelope
    connect?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
  }

  export type SessionInvitationCreateNestedManyWithoutSessionInput = {
    create?: XOR<SessionInvitationCreateWithoutSessionInput, SessionInvitationUncheckedCreateWithoutSessionInput> | SessionInvitationCreateWithoutSessionInput[] | SessionInvitationUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionInvitationCreateOrConnectWithoutSessionInput | SessionInvitationCreateOrConnectWithoutSessionInput[]
    createMany?: SessionInvitationCreateManySessionInputEnvelope
    connect?: SessionInvitationWhereUniqueInput | SessionInvitationWhereUniqueInput[]
  }

  export type SessionParticipantUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<SessionParticipantCreateWithoutSessionInput, SessionParticipantUncheckedCreateWithoutSessionInput> | SessionParticipantCreateWithoutSessionInput[] | SessionParticipantUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionParticipantCreateOrConnectWithoutSessionInput | SessionParticipantCreateOrConnectWithoutSessionInput[]
    createMany?: SessionParticipantCreateManySessionInputEnvelope
    connect?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
  }

  export type SessionInvitationUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<SessionInvitationCreateWithoutSessionInput, SessionInvitationUncheckedCreateWithoutSessionInput> | SessionInvitationCreateWithoutSessionInput[] | SessionInvitationUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionInvitationCreateOrConnectWithoutSessionInput | SessionInvitationCreateOrConnectWithoutSessionInput[]
    createMany?: SessionInvitationCreateManySessionInputEnvelope
    connect?: SessionInvitationWhereUniqueInput | SessionInvitationWhereUniqueInput[]
  }

  export type EnumSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SessionStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type QuizUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<QuizCreateWithoutSessionsInput, QuizUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutSessionsInput
    upsert?: QuizUpsertWithoutSessionsInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutSessionsInput, QuizUpdateWithoutSessionsInput>, QuizUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateOneRequiredWithoutHostedSessionsNestedInput = {
    create?: XOR<UserCreateWithoutHostedSessionsInput, UserUncheckedCreateWithoutHostedSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHostedSessionsInput
    upsert?: UserUpsertWithoutHostedSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHostedSessionsInput, UserUpdateWithoutHostedSessionsInput>, UserUncheckedUpdateWithoutHostedSessionsInput>
  }

  export type SessionParticipantUpdateManyWithoutSessionNestedInput = {
    create?: XOR<SessionParticipantCreateWithoutSessionInput, SessionParticipantUncheckedCreateWithoutSessionInput> | SessionParticipantCreateWithoutSessionInput[] | SessionParticipantUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionParticipantCreateOrConnectWithoutSessionInput | SessionParticipantCreateOrConnectWithoutSessionInput[]
    upsert?: SessionParticipantUpsertWithWhereUniqueWithoutSessionInput | SessionParticipantUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: SessionParticipantCreateManySessionInputEnvelope
    set?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    disconnect?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    delete?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    connect?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    update?: SessionParticipantUpdateWithWhereUniqueWithoutSessionInput | SessionParticipantUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: SessionParticipantUpdateManyWithWhereWithoutSessionInput | SessionParticipantUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: SessionParticipantScalarWhereInput | SessionParticipantScalarWhereInput[]
  }

  export type SessionInvitationUpdateManyWithoutSessionNestedInput = {
    create?: XOR<SessionInvitationCreateWithoutSessionInput, SessionInvitationUncheckedCreateWithoutSessionInput> | SessionInvitationCreateWithoutSessionInput[] | SessionInvitationUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionInvitationCreateOrConnectWithoutSessionInput | SessionInvitationCreateOrConnectWithoutSessionInput[]
    upsert?: SessionInvitationUpsertWithWhereUniqueWithoutSessionInput | SessionInvitationUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: SessionInvitationCreateManySessionInputEnvelope
    set?: SessionInvitationWhereUniqueInput | SessionInvitationWhereUniqueInput[]
    disconnect?: SessionInvitationWhereUniqueInput | SessionInvitationWhereUniqueInput[]
    delete?: SessionInvitationWhereUniqueInput | SessionInvitationWhereUniqueInput[]
    connect?: SessionInvitationWhereUniqueInput | SessionInvitationWhereUniqueInput[]
    update?: SessionInvitationUpdateWithWhereUniqueWithoutSessionInput | SessionInvitationUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: SessionInvitationUpdateManyWithWhereWithoutSessionInput | SessionInvitationUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: SessionInvitationScalarWhereInput | SessionInvitationScalarWhereInput[]
  }

  export type SessionParticipantUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<SessionParticipantCreateWithoutSessionInput, SessionParticipantUncheckedCreateWithoutSessionInput> | SessionParticipantCreateWithoutSessionInput[] | SessionParticipantUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionParticipantCreateOrConnectWithoutSessionInput | SessionParticipantCreateOrConnectWithoutSessionInput[]
    upsert?: SessionParticipantUpsertWithWhereUniqueWithoutSessionInput | SessionParticipantUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: SessionParticipantCreateManySessionInputEnvelope
    set?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    disconnect?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    delete?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    connect?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    update?: SessionParticipantUpdateWithWhereUniqueWithoutSessionInput | SessionParticipantUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: SessionParticipantUpdateManyWithWhereWithoutSessionInput | SessionParticipantUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: SessionParticipantScalarWhereInput | SessionParticipantScalarWhereInput[]
  }

  export type SessionInvitationUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<SessionInvitationCreateWithoutSessionInput, SessionInvitationUncheckedCreateWithoutSessionInput> | SessionInvitationCreateWithoutSessionInput[] | SessionInvitationUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionInvitationCreateOrConnectWithoutSessionInput | SessionInvitationCreateOrConnectWithoutSessionInput[]
    upsert?: SessionInvitationUpsertWithWhereUniqueWithoutSessionInput | SessionInvitationUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: SessionInvitationCreateManySessionInputEnvelope
    set?: SessionInvitationWhereUniqueInput | SessionInvitationWhereUniqueInput[]
    disconnect?: SessionInvitationWhereUniqueInput | SessionInvitationWhereUniqueInput[]
    delete?: SessionInvitationWhereUniqueInput | SessionInvitationWhereUniqueInput[]
    connect?: SessionInvitationWhereUniqueInput | SessionInvitationWhereUniqueInput[]
    update?: SessionInvitationUpdateWithWhereUniqueWithoutSessionInput | SessionInvitationUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: SessionInvitationUpdateManyWithWhereWithoutSessionInput | SessionInvitationUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: SessionInvitationScalarWhereInput | SessionInvitationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutParticipationsInput = {
    create?: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipationsInput
    connect?: UserWhereUniqueInput
  }

  export type QuizSessionCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<QuizSessionCreateWithoutParticipantsInput, QuizSessionUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: QuizSessionCreateOrConnectWithoutParticipantsInput
    connect?: QuizSessionWhereUniqueInput
  }

  export type QuestionResponseCreateNestedManyWithoutParticipantInput = {
    create?: XOR<QuestionResponseCreateWithoutParticipantInput, QuestionResponseUncheckedCreateWithoutParticipantInput> | QuestionResponseCreateWithoutParticipantInput[] | QuestionResponseUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: QuestionResponseCreateOrConnectWithoutParticipantInput | QuestionResponseCreateOrConnectWithoutParticipantInput[]
    createMany?: QuestionResponseCreateManyParticipantInputEnvelope
    connect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
  }

  export type QuestionResponseUncheckedCreateNestedManyWithoutParticipantInput = {
    create?: XOR<QuestionResponseCreateWithoutParticipantInput, QuestionResponseUncheckedCreateWithoutParticipantInput> | QuestionResponseCreateWithoutParticipantInput[] | QuestionResponseUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: QuestionResponseCreateOrConnectWithoutParticipantInput | QuestionResponseCreateOrConnectWithoutParticipantInput[]
    createMany?: QuestionResponseCreateManyParticipantInputEnvelope
    connect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutParticipationsNestedInput = {
    create?: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipationsInput
    upsert?: UserUpsertWithoutParticipationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParticipationsInput, UserUpdateWithoutParticipationsInput>, UserUncheckedUpdateWithoutParticipationsInput>
  }

  export type QuizSessionUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<QuizSessionCreateWithoutParticipantsInput, QuizSessionUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: QuizSessionCreateOrConnectWithoutParticipantsInput
    upsert?: QuizSessionUpsertWithoutParticipantsInput
    connect?: QuizSessionWhereUniqueInput
    update?: XOR<XOR<QuizSessionUpdateToOneWithWhereWithoutParticipantsInput, QuizSessionUpdateWithoutParticipantsInput>, QuizSessionUncheckedUpdateWithoutParticipantsInput>
  }

  export type QuestionResponseUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<QuestionResponseCreateWithoutParticipantInput, QuestionResponseUncheckedCreateWithoutParticipantInput> | QuestionResponseCreateWithoutParticipantInput[] | QuestionResponseUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: QuestionResponseCreateOrConnectWithoutParticipantInput | QuestionResponseCreateOrConnectWithoutParticipantInput[]
    upsert?: QuestionResponseUpsertWithWhereUniqueWithoutParticipantInput | QuestionResponseUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: QuestionResponseCreateManyParticipantInputEnvelope
    set?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    disconnect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    delete?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    connect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    update?: QuestionResponseUpdateWithWhereUniqueWithoutParticipantInput | QuestionResponseUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: QuestionResponseUpdateManyWithWhereWithoutParticipantInput | QuestionResponseUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: QuestionResponseScalarWhereInput | QuestionResponseScalarWhereInput[]
  }

  export type QuestionResponseUncheckedUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<QuestionResponseCreateWithoutParticipantInput, QuestionResponseUncheckedCreateWithoutParticipantInput> | QuestionResponseCreateWithoutParticipantInput[] | QuestionResponseUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: QuestionResponseCreateOrConnectWithoutParticipantInput | QuestionResponseCreateOrConnectWithoutParticipantInput[]
    upsert?: QuestionResponseUpsertWithWhereUniqueWithoutParticipantInput | QuestionResponseUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: QuestionResponseCreateManyParticipantInputEnvelope
    set?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    disconnect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    delete?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    connect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    update?: QuestionResponseUpdateWithWhereUniqueWithoutParticipantInput | QuestionResponseUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: QuestionResponseUpdateManyWithWhereWithoutParticipantInput | QuestionResponseUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: QuestionResponseScalarWhereInput | QuestionResponseScalarWhereInput[]
  }

  export type SessionParticipantCreateNestedOneWithoutResponsesInput = {
    create?: XOR<SessionParticipantCreateWithoutResponsesInput, SessionParticipantUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: SessionParticipantCreateOrConnectWithoutResponsesInput
    connect?: SessionParticipantWhereUniqueInput
  }

  export type QuizQuestionCreateNestedOneWithoutResponsesInput = {
    create?: XOR<QuizQuestionCreateWithoutResponsesInput, QuizQuestionUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: QuizQuestionCreateOrConnectWithoutResponsesInput
    connect?: QuizQuestionWhereUniqueInput
  }

  export type QuestionAnswerOptionCreateNestedOneWithoutResponsesInput = {
    create?: XOR<QuestionAnswerOptionCreateWithoutResponsesInput, QuestionAnswerOptionUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: QuestionAnswerOptionCreateOrConnectWithoutResponsesInput
    connect?: QuestionAnswerOptionWhereUniqueInput
  }

  export type SessionParticipantUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<SessionParticipantCreateWithoutResponsesInput, SessionParticipantUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: SessionParticipantCreateOrConnectWithoutResponsesInput
    upsert?: SessionParticipantUpsertWithoutResponsesInput
    connect?: SessionParticipantWhereUniqueInput
    update?: XOR<XOR<SessionParticipantUpdateToOneWithWhereWithoutResponsesInput, SessionParticipantUpdateWithoutResponsesInput>, SessionParticipantUncheckedUpdateWithoutResponsesInput>
  }

  export type QuizQuestionUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<QuizQuestionCreateWithoutResponsesInput, QuizQuestionUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: QuizQuestionCreateOrConnectWithoutResponsesInput
    upsert?: QuizQuestionUpsertWithoutResponsesInput
    connect?: QuizQuestionWhereUniqueInput
    update?: XOR<XOR<QuizQuestionUpdateToOneWithWhereWithoutResponsesInput, QuizQuestionUpdateWithoutResponsesInput>, QuizQuestionUncheckedUpdateWithoutResponsesInput>
  }

  export type QuestionAnswerOptionUpdateOneWithoutResponsesNestedInput = {
    create?: XOR<QuestionAnswerOptionCreateWithoutResponsesInput, QuestionAnswerOptionUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: QuestionAnswerOptionCreateOrConnectWithoutResponsesInput
    upsert?: QuestionAnswerOptionUpsertWithoutResponsesInput
    disconnect?: QuestionAnswerOptionWhereInput | boolean
    delete?: QuestionAnswerOptionWhereInput | boolean
    connect?: QuestionAnswerOptionWhereUniqueInput
    update?: XOR<XOR<QuestionAnswerOptionUpdateToOneWithWhereWithoutResponsesInput, QuestionAnswerOptionUpdateWithoutResponsesInput>, QuestionAnswerOptionUncheckedUpdateWithoutResponsesInput>
  }

  export type QuizCreateNestedManyWithoutCategoryInput = {
    create?: XOR<QuizCreateWithoutCategoryInput, QuizUncheckedCreateWithoutCategoryInput> | QuizCreateWithoutCategoryInput[] | QuizUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCategoryInput | QuizCreateOrConnectWithoutCategoryInput[]
    createMany?: QuizCreateManyCategoryInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type QuizUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<QuizCreateWithoutCategoryInput, QuizUncheckedCreateWithoutCategoryInput> | QuizCreateWithoutCategoryInput[] | QuizUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCategoryInput | QuizCreateOrConnectWithoutCategoryInput[]
    createMany?: QuizCreateManyCategoryInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type QuizUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<QuizCreateWithoutCategoryInput, QuizUncheckedCreateWithoutCategoryInput> | QuizCreateWithoutCategoryInput[] | QuizUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCategoryInput | QuizCreateOrConnectWithoutCategoryInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutCategoryInput | QuizUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: QuizCreateManyCategoryInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutCategoryInput | QuizUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutCategoryInput | QuizUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type QuizUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<QuizCreateWithoutCategoryInput, QuizUncheckedCreateWithoutCategoryInput> | QuizCreateWithoutCategoryInput[] | QuizUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCategoryInput | QuizCreateOrConnectWithoutCategoryInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutCategoryInput | QuizUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: QuizCreateManyCategoryInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutCategoryInput | QuizUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutCategoryInput | QuizUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLeaderboardEntriesInput = {
    create?: XOR<UserCreateWithoutLeaderboardEntriesInput, UserUncheckedCreateWithoutLeaderboardEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeaderboardEntriesInput
    connect?: UserWhereUniqueInput
  }

  export type QuizCreateNestedOneWithoutLeaderboardEntriesInput = {
    create?: XOR<QuizCreateWithoutLeaderboardEntriesInput, QuizUncheckedCreateWithoutLeaderboardEntriesInput>
    connectOrCreate?: QuizCreateOrConnectWithoutLeaderboardEntriesInput
    connect?: QuizWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutLeaderboardEntriesNestedInput = {
    create?: XOR<UserCreateWithoutLeaderboardEntriesInput, UserUncheckedCreateWithoutLeaderboardEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeaderboardEntriesInput
    upsert?: UserUpsertWithoutLeaderboardEntriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLeaderboardEntriesInput, UserUpdateWithoutLeaderboardEntriesInput>, UserUncheckedUpdateWithoutLeaderboardEntriesInput>
  }

  export type QuizUpdateOneRequiredWithoutLeaderboardEntriesNestedInput = {
    create?: XOR<QuizCreateWithoutLeaderboardEntriesInput, QuizUncheckedCreateWithoutLeaderboardEntriesInput>
    connectOrCreate?: QuizCreateOrConnectWithoutLeaderboardEntriesInput
    upsert?: QuizUpsertWithoutLeaderboardEntriesInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutLeaderboardEntriesInput, QuizUpdateWithoutLeaderboardEntriesInput>, QuizUncheckedUpdateWithoutLeaderboardEntriesInput>
  }

  export type QuizSessionCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<QuizSessionCreateWithoutInvitationsInput, QuizSessionUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: QuizSessionCreateOrConnectWithoutInvitationsInput
    connect?: QuizSessionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitationsInput
    connect?: UserWhereUniqueInput
  }

  export type QuizSessionUpdateOneRequiredWithoutInvitationsNestedInput = {
    create?: XOR<QuizSessionCreateWithoutInvitationsInput, QuizSessionUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: QuizSessionCreateOrConnectWithoutInvitationsInput
    upsert?: QuizSessionUpsertWithoutInvitationsInput
    connect?: QuizSessionWhereUniqueInput
    update?: XOR<XOR<QuizSessionUpdateToOneWithWhereWithoutInvitationsInput, QuizSessionUpdateWithoutInvitationsInput>, QuizSessionUncheckedUpdateWithoutInvitationsInput>
  }

  export type UserUpdateOneWithoutInvitationsNestedInput = {
    create?: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitationsInput
    upsert?: UserUpsertWithoutInvitationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvitationsInput, UserUpdateWithoutInvitationsInput>, UserUncheckedUpdateWithoutInvitationsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumQuizTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizType | EnumQuizTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuizType[] | ListEnumQuizTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuizType[] | ListEnumQuizTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuizTypeFilter<$PrismaModel> | $Enums.QuizType
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

  export type NestedEnumQuizTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizType | EnumQuizTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuizType[] | ListEnumQuizTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuizType[] | ListEnumQuizTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuizTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuizType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuizTypeFilter<$PrismaModel>
    _max?: NestedEnumQuizTypeFilter<$PrismaModel>
  }

  export type NestedEnumQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeFilter<$PrismaModel> | $Enums.QuestionType
  }

  export type NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
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

  export type NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type QuizCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.QuizType
    category: QuizCategoryCreateNestedOneWithoutQuizzesInput
    questions?: QuizQuestionCreateNestedManyWithoutQuizInput
    sessions?: QuizSessionCreateNestedManyWithoutQuizInput
    leaderboardEntries?: QuizLeaderboardCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.QuizType
    categoryId: string
    questions?: QuizQuestionUncheckedCreateNestedManyWithoutQuizInput
    sessions?: QuizSessionUncheckedCreateNestedManyWithoutQuizInput
    leaderboardEntries?: QuizLeaderboardUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutCreatedByInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutCreatedByInput, QuizUncheckedCreateWithoutCreatedByInput>
  }

  export type QuizCreateManyCreatedByInputEnvelope = {
    data: QuizCreateManyCreatedByInput | QuizCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type QuizSessionCreateWithoutHostInput = {
    id?: string
    code: string
    status?: $Enums.SessionStatus
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    quiz: QuizCreateNestedOneWithoutSessionsInput
    participants?: SessionParticipantCreateNestedManyWithoutSessionInput
    invitations?: SessionInvitationCreateNestedManyWithoutSessionInput
  }

  export type QuizSessionUncheckedCreateWithoutHostInput = {
    id?: string
    code: string
    quizId: string
    status?: $Enums.SessionStatus
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    participants?: SessionParticipantUncheckedCreateNestedManyWithoutSessionInput
    invitations?: SessionInvitationUncheckedCreateNestedManyWithoutSessionInput
  }

  export type QuizSessionCreateOrConnectWithoutHostInput = {
    where: QuizSessionWhereUniqueInput
    create: XOR<QuizSessionCreateWithoutHostInput, QuizSessionUncheckedCreateWithoutHostInput>
  }

  export type QuizSessionCreateManyHostInputEnvelope = {
    data: QuizSessionCreateManyHostInput | QuizSessionCreateManyHostInput[]
    skipDuplicates?: boolean
  }

  export type SessionParticipantCreateWithoutUserInput = {
    id?: string
    score?: number
    joinedAt?: Date | string
    session: QuizSessionCreateNestedOneWithoutParticipantsInput
    responses?: QuestionResponseCreateNestedManyWithoutParticipantInput
  }

  export type SessionParticipantUncheckedCreateWithoutUserInput = {
    id?: string
    sessionId: string
    score?: number
    joinedAt?: Date | string
    responses?: QuestionResponseUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type SessionParticipantCreateOrConnectWithoutUserInput = {
    where: SessionParticipantWhereUniqueInput
    create: XOR<SessionParticipantCreateWithoutUserInput, SessionParticipantUncheckedCreateWithoutUserInput>
  }

  export type SessionParticipantCreateManyUserInputEnvelope = {
    data: SessionParticipantCreateManyUserInput | SessionParticipantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuizLeaderboardCreateWithoutUserInput = {
    id?: string
    score: number
    accuracy: number
    attempts: number
    quiz: QuizCreateNestedOneWithoutLeaderboardEntriesInput
  }

  export type QuizLeaderboardUncheckedCreateWithoutUserInput = {
    id?: string
    quizId: string
    score: number
    accuracy: number
    attempts: number
  }

  export type QuizLeaderboardCreateOrConnectWithoutUserInput = {
    where: QuizLeaderboardWhereUniqueInput
    create: XOR<QuizLeaderboardCreateWithoutUserInput, QuizLeaderboardUncheckedCreateWithoutUserInput>
  }

  export type QuizLeaderboardCreateManyUserInputEnvelope = {
    data: QuizLeaderboardCreateManyUserInput | QuizLeaderboardCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionInvitationCreateWithoutUserInput = {
    id?: string
    email: string
    accepted?: boolean
    invitedAt?: Date | string
    session: QuizSessionCreateNestedOneWithoutInvitationsInput
  }

  export type SessionInvitationUncheckedCreateWithoutUserInput = {
    id?: string
    sessionId: string
    email: string
    accepted?: boolean
    invitedAt?: Date | string
  }

  export type SessionInvitationCreateOrConnectWithoutUserInput = {
    where: SessionInvitationWhereUniqueInput
    create: XOR<SessionInvitationCreateWithoutUserInput, SessionInvitationUncheckedCreateWithoutUserInput>
  }

  export type SessionInvitationCreateManyUserInputEnvelope = {
    data: SessionInvitationCreateManyUserInput | SessionInvitationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuizUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutCreatedByInput, QuizUncheckedUpdateWithoutCreatedByInput>
    create: XOR<QuizCreateWithoutCreatedByInput, QuizUncheckedCreateWithoutCreatedByInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutCreatedByInput, QuizUncheckedUpdateWithoutCreatedByInput>
  }

  export type QuizUpdateManyWithWhereWithoutCreatedByInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type QuizScalarWhereInput = {
    AND?: QuizScalarWhereInput | QuizScalarWhereInput[]
    OR?: QuizScalarWhereInput[]
    NOT?: QuizScalarWhereInput | QuizScalarWhereInput[]
    id?: StringFilter<"Quiz"> | string
    title?: StringFilter<"Quiz"> | string
    description?: StringNullableFilter<"Quiz"> | string | null
    type?: EnumQuizTypeFilter<"Quiz"> | $Enums.QuizType
    categoryId?: StringFilter<"Quiz"> | string
    createdById?: StringFilter<"Quiz"> | string
  }

  export type QuizSessionUpsertWithWhereUniqueWithoutHostInput = {
    where: QuizSessionWhereUniqueInput
    update: XOR<QuizSessionUpdateWithoutHostInput, QuizSessionUncheckedUpdateWithoutHostInput>
    create: XOR<QuizSessionCreateWithoutHostInput, QuizSessionUncheckedCreateWithoutHostInput>
  }

  export type QuizSessionUpdateWithWhereUniqueWithoutHostInput = {
    where: QuizSessionWhereUniqueInput
    data: XOR<QuizSessionUpdateWithoutHostInput, QuizSessionUncheckedUpdateWithoutHostInput>
  }

  export type QuizSessionUpdateManyWithWhereWithoutHostInput = {
    where: QuizSessionScalarWhereInput
    data: XOR<QuizSessionUpdateManyMutationInput, QuizSessionUncheckedUpdateManyWithoutHostInput>
  }

  export type QuizSessionScalarWhereInput = {
    AND?: QuizSessionScalarWhereInput | QuizSessionScalarWhereInput[]
    OR?: QuizSessionScalarWhereInput[]
    NOT?: QuizSessionScalarWhereInput | QuizSessionScalarWhereInput[]
    id?: StringFilter<"QuizSession"> | string
    code?: StringFilter<"QuizSession"> | string
    quizId?: StringFilter<"QuizSession"> | string
    hostId?: StringFilter<"QuizSession"> | string
    status?: EnumSessionStatusFilter<"QuizSession"> | $Enums.SessionStatus
    startedAt?: DateTimeNullableFilter<"QuizSession"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"QuizSession"> | Date | string | null
  }

  export type SessionParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionParticipantWhereUniqueInput
    update: XOR<SessionParticipantUpdateWithoutUserInput, SessionParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<SessionParticipantCreateWithoutUserInput, SessionParticipantUncheckedCreateWithoutUserInput>
  }

  export type SessionParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionParticipantWhereUniqueInput
    data: XOR<SessionParticipantUpdateWithoutUserInput, SessionParticipantUncheckedUpdateWithoutUserInput>
  }

  export type SessionParticipantUpdateManyWithWhereWithoutUserInput = {
    where: SessionParticipantScalarWhereInput
    data: XOR<SessionParticipantUpdateManyMutationInput, SessionParticipantUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionParticipantScalarWhereInput = {
    AND?: SessionParticipantScalarWhereInput | SessionParticipantScalarWhereInput[]
    OR?: SessionParticipantScalarWhereInput[]
    NOT?: SessionParticipantScalarWhereInput | SessionParticipantScalarWhereInput[]
    id?: StringFilter<"SessionParticipant"> | string
    userId?: StringFilter<"SessionParticipant"> | string
    sessionId?: StringFilter<"SessionParticipant"> | string
    score?: IntFilter<"SessionParticipant"> | number
    joinedAt?: DateTimeFilter<"SessionParticipant"> | Date | string
  }

  export type QuizLeaderboardUpsertWithWhereUniqueWithoutUserInput = {
    where: QuizLeaderboardWhereUniqueInput
    update: XOR<QuizLeaderboardUpdateWithoutUserInput, QuizLeaderboardUncheckedUpdateWithoutUserInput>
    create: XOR<QuizLeaderboardCreateWithoutUserInput, QuizLeaderboardUncheckedCreateWithoutUserInput>
  }

  export type QuizLeaderboardUpdateWithWhereUniqueWithoutUserInput = {
    where: QuizLeaderboardWhereUniqueInput
    data: XOR<QuizLeaderboardUpdateWithoutUserInput, QuizLeaderboardUncheckedUpdateWithoutUserInput>
  }

  export type QuizLeaderboardUpdateManyWithWhereWithoutUserInput = {
    where: QuizLeaderboardScalarWhereInput
    data: XOR<QuizLeaderboardUpdateManyMutationInput, QuizLeaderboardUncheckedUpdateManyWithoutUserInput>
  }

  export type QuizLeaderboardScalarWhereInput = {
    AND?: QuizLeaderboardScalarWhereInput | QuizLeaderboardScalarWhereInput[]
    OR?: QuizLeaderboardScalarWhereInput[]
    NOT?: QuizLeaderboardScalarWhereInput | QuizLeaderboardScalarWhereInput[]
    id?: StringFilter<"QuizLeaderboard"> | string
    userId?: StringFilter<"QuizLeaderboard"> | string
    quizId?: StringFilter<"QuizLeaderboard"> | string
    score?: IntFilter<"QuizLeaderboard"> | number
    accuracy?: FloatFilter<"QuizLeaderboard"> | number
    attempts?: IntFilter<"QuizLeaderboard"> | number
  }

  export type SessionInvitationUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionInvitationWhereUniqueInput
    update: XOR<SessionInvitationUpdateWithoutUserInput, SessionInvitationUncheckedUpdateWithoutUserInput>
    create: XOR<SessionInvitationCreateWithoutUserInput, SessionInvitationUncheckedCreateWithoutUserInput>
  }

  export type SessionInvitationUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionInvitationWhereUniqueInput
    data: XOR<SessionInvitationUpdateWithoutUserInput, SessionInvitationUncheckedUpdateWithoutUserInput>
  }

  export type SessionInvitationUpdateManyWithWhereWithoutUserInput = {
    where: SessionInvitationScalarWhereInput
    data: XOR<SessionInvitationUpdateManyMutationInput, SessionInvitationUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionInvitationScalarWhereInput = {
    AND?: SessionInvitationScalarWhereInput | SessionInvitationScalarWhereInput[]
    OR?: SessionInvitationScalarWhereInput[]
    NOT?: SessionInvitationScalarWhereInput | SessionInvitationScalarWhereInput[]
    id?: StringFilter<"SessionInvitation"> | string
    sessionId?: StringFilter<"SessionInvitation"> | string
    email?: StringFilter<"SessionInvitation"> | string
    userId?: StringNullableFilter<"SessionInvitation"> | string | null
    accepted?: BoolFilter<"SessionInvitation"> | boolean
    invitedAt?: DateTimeFilter<"SessionInvitation"> | Date | string
  }

  export type QuizCategoryCreateWithoutQuizzesInput = {
    id?: string
    name: string
  }

  export type QuizCategoryUncheckedCreateWithoutQuizzesInput = {
    id?: string
    name: string
  }

  export type QuizCategoryCreateOrConnectWithoutQuizzesInput = {
    where: QuizCategoryWhereUniqueInput
    create: XOR<QuizCategoryCreateWithoutQuizzesInput, QuizCategoryUncheckedCreateWithoutQuizzesInput>
  }

  export type UserCreateWithoutCreatedQuizzesInput = {
    id?: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    hostedSessions?: QuizSessionCreateNestedManyWithoutHostInput
    participations?: SessionParticipantCreateNestedManyWithoutUserInput
    leaderboardEntries?: QuizLeaderboardCreateNestedManyWithoutUserInput
    invitations?: SessionInvitationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedQuizzesInput = {
    id?: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    hostedSessions?: QuizSessionUncheckedCreateNestedManyWithoutHostInput
    participations?: SessionParticipantUncheckedCreateNestedManyWithoutUserInput
    leaderboardEntries?: QuizLeaderboardUncheckedCreateNestedManyWithoutUserInput
    invitations?: SessionInvitationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedQuizzesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedQuizzesInput, UserUncheckedCreateWithoutCreatedQuizzesInput>
  }

  export type QuizQuestionCreateWithoutQuizInput = {
    id?: string
    text: string
    type: $Enums.QuestionType
    questionScore: number
    timeLimit: number
    order?: number | null
    options?: QuestionAnswerOptionCreateNestedManyWithoutQuestionInput
    responses?: QuestionResponseCreateNestedManyWithoutQuestionInput
  }

  export type QuizQuestionUncheckedCreateWithoutQuizInput = {
    id?: string
    text: string
    type: $Enums.QuestionType
    questionScore: number
    timeLimit: number
    order?: number | null
    options?: QuestionAnswerOptionUncheckedCreateNestedManyWithoutQuestionInput
    responses?: QuestionResponseUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuizQuestionCreateOrConnectWithoutQuizInput = {
    where: QuizQuestionWhereUniqueInput
    create: XOR<QuizQuestionCreateWithoutQuizInput, QuizQuestionUncheckedCreateWithoutQuizInput>
  }

  export type QuizQuestionCreateManyQuizInputEnvelope = {
    data: QuizQuestionCreateManyQuizInput | QuizQuestionCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type QuizSessionCreateWithoutQuizInput = {
    id?: string
    code: string
    status?: $Enums.SessionStatus
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    host: UserCreateNestedOneWithoutHostedSessionsInput
    participants?: SessionParticipantCreateNestedManyWithoutSessionInput
    invitations?: SessionInvitationCreateNestedManyWithoutSessionInput
  }

  export type QuizSessionUncheckedCreateWithoutQuizInput = {
    id?: string
    code: string
    hostId: string
    status?: $Enums.SessionStatus
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    participants?: SessionParticipantUncheckedCreateNestedManyWithoutSessionInput
    invitations?: SessionInvitationUncheckedCreateNestedManyWithoutSessionInput
  }

  export type QuizSessionCreateOrConnectWithoutQuizInput = {
    where: QuizSessionWhereUniqueInput
    create: XOR<QuizSessionCreateWithoutQuizInput, QuizSessionUncheckedCreateWithoutQuizInput>
  }

  export type QuizSessionCreateManyQuizInputEnvelope = {
    data: QuizSessionCreateManyQuizInput | QuizSessionCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type QuizLeaderboardCreateWithoutQuizInput = {
    id?: string
    score: number
    accuracy: number
    attempts: number
    user: UserCreateNestedOneWithoutLeaderboardEntriesInput
  }

  export type QuizLeaderboardUncheckedCreateWithoutQuizInput = {
    id?: string
    userId: string
    score: number
    accuracy: number
    attempts: number
  }

  export type QuizLeaderboardCreateOrConnectWithoutQuizInput = {
    where: QuizLeaderboardWhereUniqueInput
    create: XOR<QuizLeaderboardCreateWithoutQuizInput, QuizLeaderboardUncheckedCreateWithoutQuizInput>
  }

  export type QuizLeaderboardCreateManyQuizInputEnvelope = {
    data: QuizLeaderboardCreateManyQuizInput | QuizLeaderboardCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type QuizCategoryUpsertWithoutQuizzesInput = {
    update: XOR<QuizCategoryUpdateWithoutQuizzesInput, QuizCategoryUncheckedUpdateWithoutQuizzesInput>
    create: XOR<QuizCategoryCreateWithoutQuizzesInput, QuizCategoryUncheckedCreateWithoutQuizzesInput>
    where?: QuizCategoryWhereInput
  }

  export type QuizCategoryUpdateToOneWithWhereWithoutQuizzesInput = {
    where?: QuizCategoryWhereInput
    data: XOR<QuizCategoryUpdateWithoutQuizzesInput, QuizCategoryUncheckedUpdateWithoutQuizzesInput>
  }

  export type QuizCategoryUpdateWithoutQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type QuizCategoryUncheckedUpdateWithoutQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutCreatedQuizzesInput = {
    update: XOR<UserUpdateWithoutCreatedQuizzesInput, UserUncheckedUpdateWithoutCreatedQuizzesInput>
    create: XOR<UserCreateWithoutCreatedQuizzesInput, UserUncheckedCreateWithoutCreatedQuizzesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedQuizzesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedQuizzesInput, UserUncheckedUpdateWithoutCreatedQuizzesInput>
  }

  export type UserUpdateWithoutCreatedQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostedSessions?: QuizSessionUpdateManyWithoutHostNestedInput
    participations?: SessionParticipantUpdateManyWithoutUserNestedInput
    leaderboardEntries?: QuizLeaderboardUpdateManyWithoutUserNestedInput
    invitations?: SessionInvitationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostedSessions?: QuizSessionUncheckedUpdateManyWithoutHostNestedInput
    participations?: SessionParticipantUncheckedUpdateManyWithoutUserNestedInput
    leaderboardEntries?: QuizLeaderboardUncheckedUpdateManyWithoutUserNestedInput
    invitations?: SessionInvitationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuizQuestionUpsertWithWhereUniqueWithoutQuizInput = {
    where: QuizQuestionWhereUniqueInput
    update: XOR<QuizQuestionUpdateWithoutQuizInput, QuizQuestionUncheckedUpdateWithoutQuizInput>
    create: XOR<QuizQuestionCreateWithoutQuizInput, QuizQuestionUncheckedCreateWithoutQuizInput>
  }

  export type QuizQuestionUpdateWithWhereUniqueWithoutQuizInput = {
    where: QuizQuestionWhereUniqueInput
    data: XOR<QuizQuestionUpdateWithoutQuizInput, QuizQuestionUncheckedUpdateWithoutQuizInput>
  }

  export type QuizQuestionUpdateManyWithWhereWithoutQuizInput = {
    where: QuizQuestionScalarWhereInput
    data: XOR<QuizQuestionUpdateManyMutationInput, QuizQuestionUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuizQuestionScalarWhereInput = {
    AND?: QuizQuestionScalarWhereInput | QuizQuestionScalarWhereInput[]
    OR?: QuizQuestionScalarWhereInput[]
    NOT?: QuizQuestionScalarWhereInput | QuizQuestionScalarWhereInput[]
    id?: StringFilter<"QuizQuestion"> | string
    text?: StringFilter<"QuizQuestion"> | string
    type?: EnumQuestionTypeFilter<"QuizQuestion"> | $Enums.QuestionType
    questionScore?: IntFilter<"QuizQuestion"> | number
    timeLimit?: IntFilter<"QuizQuestion"> | number
    order?: IntNullableFilter<"QuizQuestion"> | number | null
    quizId?: StringFilter<"QuizQuestion"> | string
  }

  export type QuizSessionUpsertWithWhereUniqueWithoutQuizInput = {
    where: QuizSessionWhereUniqueInput
    update: XOR<QuizSessionUpdateWithoutQuizInput, QuizSessionUncheckedUpdateWithoutQuizInput>
    create: XOR<QuizSessionCreateWithoutQuizInput, QuizSessionUncheckedCreateWithoutQuizInput>
  }

  export type QuizSessionUpdateWithWhereUniqueWithoutQuizInput = {
    where: QuizSessionWhereUniqueInput
    data: XOR<QuizSessionUpdateWithoutQuizInput, QuizSessionUncheckedUpdateWithoutQuizInput>
  }

  export type QuizSessionUpdateManyWithWhereWithoutQuizInput = {
    where: QuizSessionScalarWhereInput
    data: XOR<QuizSessionUpdateManyMutationInput, QuizSessionUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuizLeaderboardUpsertWithWhereUniqueWithoutQuizInput = {
    where: QuizLeaderboardWhereUniqueInput
    update: XOR<QuizLeaderboardUpdateWithoutQuizInput, QuizLeaderboardUncheckedUpdateWithoutQuizInput>
    create: XOR<QuizLeaderboardCreateWithoutQuizInput, QuizLeaderboardUncheckedCreateWithoutQuizInput>
  }

  export type QuizLeaderboardUpdateWithWhereUniqueWithoutQuizInput = {
    where: QuizLeaderboardWhereUniqueInput
    data: XOR<QuizLeaderboardUpdateWithoutQuizInput, QuizLeaderboardUncheckedUpdateWithoutQuizInput>
  }

  export type QuizLeaderboardUpdateManyWithWhereWithoutQuizInput = {
    where: QuizLeaderboardScalarWhereInput
    data: XOR<QuizLeaderboardUpdateManyMutationInput, QuizLeaderboardUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuizCreateWithoutQuestionsInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.QuizType
    category: QuizCategoryCreateNestedOneWithoutQuizzesInput
    createdBy: UserCreateNestedOneWithoutCreatedQuizzesInput
    sessions?: QuizSessionCreateNestedManyWithoutQuizInput
    leaderboardEntries?: QuizLeaderboardCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutQuestionsInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.QuizType
    categoryId: string
    createdById: string
    sessions?: QuizSessionUncheckedCreateNestedManyWithoutQuizInput
    leaderboardEntries?: QuizLeaderboardUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutQuestionsInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
  }

  export type QuestionAnswerOptionCreateWithoutQuestionInput = {
    id?: string
    text: string
    isCorrect: boolean
    responses?: QuestionResponseCreateNestedManyWithoutSelectedOptionInput
  }

  export type QuestionAnswerOptionUncheckedCreateWithoutQuestionInput = {
    id?: string
    text: string
    isCorrect: boolean
    responses?: QuestionResponseUncheckedCreateNestedManyWithoutSelectedOptionInput
  }

  export type QuestionAnswerOptionCreateOrConnectWithoutQuestionInput = {
    where: QuestionAnswerOptionWhereUniqueInput
    create: XOR<QuestionAnswerOptionCreateWithoutQuestionInput, QuestionAnswerOptionUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionAnswerOptionCreateManyQuestionInputEnvelope = {
    data: QuestionAnswerOptionCreateManyQuestionInput | QuestionAnswerOptionCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type QuestionResponseCreateWithoutQuestionInput = {
    id?: string
    submittedAt?: Date | string
    isCorrect: boolean
    participant: SessionParticipantCreateNestedOneWithoutResponsesInput
    selectedOption?: QuestionAnswerOptionCreateNestedOneWithoutResponsesInput
  }

  export type QuestionResponseUncheckedCreateWithoutQuestionInput = {
    id?: string
    participantId: string
    selectedId?: string | null
    submittedAt?: Date | string
    isCorrect: boolean
  }

  export type QuestionResponseCreateOrConnectWithoutQuestionInput = {
    where: QuestionResponseWhereUniqueInput
    create: XOR<QuestionResponseCreateWithoutQuestionInput, QuestionResponseUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionResponseCreateManyQuestionInputEnvelope = {
    data: QuestionResponseCreateManyQuestionInput | QuestionResponseCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type QuizUpsertWithoutQuestionsInput = {
    update: XOR<QuizUpdateWithoutQuestionsInput, QuizUncheckedUpdateWithoutQuestionsInput>
    create: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutQuestionsInput, QuizUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuizUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
    category?: QuizCategoryUpdateOneRequiredWithoutQuizzesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedQuizzesNestedInput
    sessions?: QuizSessionUpdateManyWithoutQuizNestedInput
    leaderboardEntries?: QuizLeaderboardUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
    categoryId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    sessions?: QuizSessionUncheckedUpdateManyWithoutQuizNestedInput
    leaderboardEntries?: QuizLeaderboardUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuestionAnswerOptionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: QuestionAnswerOptionWhereUniqueInput
    update: XOR<QuestionAnswerOptionUpdateWithoutQuestionInput, QuestionAnswerOptionUncheckedUpdateWithoutQuestionInput>
    create: XOR<QuestionAnswerOptionCreateWithoutQuestionInput, QuestionAnswerOptionUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionAnswerOptionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: QuestionAnswerOptionWhereUniqueInput
    data: XOR<QuestionAnswerOptionUpdateWithoutQuestionInput, QuestionAnswerOptionUncheckedUpdateWithoutQuestionInput>
  }

  export type QuestionAnswerOptionUpdateManyWithWhereWithoutQuestionInput = {
    where: QuestionAnswerOptionScalarWhereInput
    data: XOR<QuestionAnswerOptionUpdateManyMutationInput, QuestionAnswerOptionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuestionAnswerOptionScalarWhereInput = {
    AND?: QuestionAnswerOptionScalarWhereInput | QuestionAnswerOptionScalarWhereInput[]
    OR?: QuestionAnswerOptionScalarWhereInput[]
    NOT?: QuestionAnswerOptionScalarWhereInput | QuestionAnswerOptionScalarWhereInput[]
    id?: StringFilter<"QuestionAnswerOption"> | string
    text?: StringFilter<"QuestionAnswerOption"> | string
    isCorrect?: BoolFilter<"QuestionAnswerOption"> | boolean
    questionId?: StringFilter<"QuestionAnswerOption"> | string
  }

  export type QuestionResponseUpsertWithWhereUniqueWithoutQuestionInput = {
    where: QuestionResponseWhereUniqueInput
    update: XOR<QuestionResponseUpdateWithoutQuestionInput, QuestionResponseUncheckedUpdateWithoutQuestionInput>
    create: XOR<QuestionResponseCreateWithoutQuestionInput, QuestionResponseUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionResponseUpdateWithWhereUniqueWithoutQuestionInput = {
    where: QuestionResponseWhereUniqueInput
    data: XOR<QuestionResponseUpdateWithoutQuestionInput, QuestionResponseUncheckedUpdateWithoutQuestionInput>
  }

  export type QuestionResponseUpdateManyWithWhereWithoutQuestionInput = {
    where: QuestionResponseScalarWhereInput
    data: XOR<QuestionResponseUpdateManyMutationInput, QuestionResponseUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuestionResponseScalarWhereInput = {
    AND?: QuestionResponseScalarWhereInput | QuestionResponseScalarWhereInput[]
    OR?: QuestionResponseScalarWhereInput[]
    NOT?: QuestionResponseScalarWhereInput | QuestionResponseScalarWhereInput[]
    id?: StringFilter<"QuestionResponse"> | string
    participantId?: StringFilter<"QuestionResponse"> | string
    questionId?: StringFilter<"QuestionResponse"> | string
    selectedId?: StringNullableFilter<"QuestionResponse"> | string | null
    submittedAt?: DateTimeFilter<"QuestionResponse"> | Date | string
    isCorrect?: BoolFilter<"QuestionResponse"> | boolean
  }

  export type QuizQuestionCreateWithoutOptionsInput = {
    id?: string
    text: string
    type: $Enums.QuestionType
    questionScore: number
    timeLimit: number
    order?: number | null
    quiz: QuizCreateNestedOneWithoutQuestionsInput
    responses?: QuestionResponseCreateNestedManyWithoutQuestionInput
  }

  export type QuizQuestionUncheckedCreateWithoutOptionsInput = {
    id?: string
    text: string
    type: $Enums.QuestionType
    questionScore: number
    timeLimit: number
    order?: number | null
    quizId: string
    responses?: QuestionResponseUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuizQuestionCreateOrConnectWithoutOptionsInput = {
    where: QuizQuestionWhereUniqueInput
    create: XOR<QuizQuestionCreateWithoutOptionsInput, QuizQuestionUncheckedCreateWithoutOptionsInput>
  }

  export type QuestionResponseCreateWithoutSelectedOptionInput = {
    id?: string
    submittedAt?: Date | string
    isCorrect: boolean
    participant: SessionParticipantCreateNestedOneWithoutResponsesInput
    question: QuizQuestionCreateNestedOneWithoutResponsesInput
  }

  export type QuestionResponseUncheckedCreateWithoutSelectedOptionInput = {
    id?: string
    participantId: string
    questionId: string
    submittedAt?: Date | string
    isCorrect: boolean
  }

  export type QuestionResponseCreateOrConnectWithoutSelectedOptionInput = {
    where: QuestionResponseWhereUniqueInput
    create: XOR<QuestionResponseCreateWithoutSelectedOptionInput, QuestionResponseUncheckedCreateWithoutSelectedOptionInput>
  }

  export type QuestionResponseCreateManySelectedOptionInputEnvelope = {
    data: QuestionResponseCreateManySelectedOptionInput | QuestionResponseCreateManySelectedOptionInput[]
    skipDuplicates?: boolean
  }

  export type QuizQuestionUpsertWithoutOptionsInput = {
    update: XOR<QuizQuestionUpdateWithoutOptionsInput, QuizQuestionUncheckedUpdateWithoutOptionsInput>
    create: XOR<QuizQuestionCreateWithoutOptionsInput, QuizQuestionUncheckedCreateWithoutOptionsInput>
    where?: QuizQuestionWhereInput
  }

  export type QuizQuestionUpdateToOneWithWhereWithoutOptionsInput = {
    where?: QuizQuestionWhereInput
    data: XOR<QuizQuestionUpdateWithoutOptionsInput, QuizQuestionUncheckedUpdateWithoutOptionsInput>
  }

  export type QuizQuestionUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    questionScore?: IntFieldUpdateOperationsInput | number
    timeLimit?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    quiz?: QuizUpdateOneRequiredWithoutQuestionsNestedInput
    responses?: QuestionResponseUpdateManyWithoutQuestionNestedInput
  }

  export type QuizQuestionUncheckedUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    questionScore?: IntFieldUpdateOperationsInput | number
    timeLimit?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    quizId?: StringFieldUpdateOperationsInput | string
    responses?: QuestionResponseUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionResponseUpsertWithWhereUniqueWithoutSelectedOptionInput = {
    where: QuestionResponseWhereUniqueInput
    update: XOR<QuestionResponseUpdateWithoutSelectedOptionInput, QuestionResponseUncheckedUpdateWithoutSelectedOptionInput>
    create: XOR<QuestionResponseCreateWithoutSelectedOptionInput, QuestionResponseUncheckedCreateWithoutSelectedOptionInput>
  }

  export type QuestionResponseUpdateWithWhereUniqueWithoutSelectedOptionInput = {
    where: QuestionResponseWhereUniqueInput
    data: XOR<QuestionResponseUpdateWithoutSelectedOptionInput, QuestionResponseUncheckedUpdateWithoutSelectedOptionInput>
  }

  export type QuestionResponseUpdateManyWithWhereWithoutSelectedOptionInput = {
    where: QuestionResponseScalarWhereInput
    data: XOR<QuestionResponseUpdateManyMutationInput, QuestionResponseUncheckedUpdateManyWithoutSelectedOptionInput>
  }

  export type QuizCreateWithoutSessionsInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.QuizType
    category: QuizCategoryCreateNestedOneWithoutQuizzesInput
    createdBy: UserCreateNestedOneWithoutCreatedQuizzesInput
    questions?: QuizQuestionCreateNestedManyWithoutQuizInput
    leaderboardEntries?: QuizLeaderboardCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutSessionsInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.QuizType
    categoryId: string
    createdById: string
    questions?: QuizQuestionUncheckedCreateNestedManyWithoutQuizInput
    leaderboardEntries?: QuizLeaderboardUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutSessionsInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutSessionsInput, QuizUncheckedCreateWithoutSessionsInput>
  }

  export type UserCreateWithoutHostedSessionsInput = {
    id?: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdQuizzes?: QuizCreateNestedManyWithoutCreatedByInput
    participations?: SessionParticipantCreateNestedManyWithoutUserInput
    leaderboardEntries?: QuizLeaderboardCreateNestedManyWithoutUserInput
    invitations?: SessionInvitationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHostedSessionsInput = {
    id?: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdQuizzes?: QuizUncheckedCreateNestedManyWithoutCreatedByInput
    participations?: SessionParticipantUncheckedCreateNestedManyWithoutUserInput
    leaderboardEntries?: QuizLeaderboardUncheckedCreateNestedManyWithoutUserInput
    invitations?: SessionInvitationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHostedSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHostedSessionsInput, UserUncheckedCreateWithoutHostedSessionsInput>
  }

  export type SessionParticipantCreateWithoutSessionInput = {
    id?: string
    score?: number
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutParticipationsInput
    responses?: QuestionResponseCreateNestedManyWithoutParticipantInput
  }

  export type SessionParticipantUncheckedCreateWithoutSessionInput = {
    id?: string
    userId: string
    score?: number
    joinedAt?: Date | string
    responses?: QuestionResponseUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type SessionParticipantCreateOrConnectWithoutSessionInput = {
    where: SessionParticipantWhereUniqueInput
    create: XOR<SessionParticipantCreateWithoutSessionInput, SessionParticipantUncheckedCreateWithoutSessionInput>
  }

  export type SessionParticipantCreateManySessionInputEnvelope = {
    data: SessionParticipantCreateManySessionInput | SessionParticipantCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type SessionInvitationCreateWithoutSessionInput = {
    id?: string
    email: string
    accepted?: boolean
    invitedAt?: Date | string
    user?: UserCreateNestedOneWithoutInvitationsInput
  }

  export type SessionInvitationUncheckedCreateWithoutSessionInput = {
    id?: string
    email: string
    userId?: string | null
    accepted?: boolean
    invitedAt?: Date | string
  }

  export type SessionInvitationCreateOrConnectWithoutSessionInput = {
    where: SessionInvitationWhereUniqueInput
    create: XOR<SessionInvitationCreateWithoutSessionInput, SessionInvitationUncheckedCreateWithoutSessionInput>
  }

  export type SessionInvitationCreateManySessionInputEnvelope = {
    data: SessionInvitationCreateManySessionInput | SessionInvitationCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type QuizUpsertWithoutSessionsInput = {
    update: XOR<QuizUpdateWithoutSessionsInput, QuizUncheckedUpdateWithoutSessionsInput>
    create: XOR<QuizCreateWithoutSessionsInput, QuizUncheckedCreateWithoutSessionsInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutSessionsInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutSessionsInput, QuizUncheckedUpdateWithoutSessionsInput>
  }

  export type QuizUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
    category?: QuizCategoryUpdateOneRequiredWithoutQuizzesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedQuizzesNestedInput
    questions?: QuizQuestionUpdateManyWithoutQuizNestedInput
    leaderboardEntries?: QuizLeaderboardUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
    categoryId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    questions?: QuizQuestionUncheckedUpdateManyWithoutQuizNestedInput
    leaderboardEntries?: QuizLeaderboardUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type UserUpsertWithoutHostedSessionsInput = {
    update: XOR<UserUpdateWithoutHostedSessionsInput, UserUncheckedUpdateWithoutHostedSessionsInput>
    create: XOR<UserCreateWithoutHostedSessionsInput, UserUncheckedCreateWithoutHostedSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHostedSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHostedSessionsInput, UserUncheckedUpdateWithoutHostedSessionsInput>
  }

  export type UserUpdateWithoutHostedSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdQuizzes?: QuizUpdateManyWithoutCreatedByNestedInput
    participations?: SessionParticipantUpdateManyWithoutUserNestedInput
    leaderboardEntries?: QuizLeaderboardUpdateManyWithoutUserNestedInput
    invitations?: SessionInvitationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHostedSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdQuizzes?: QuizUncheckedUpdateManyWithoutCreatedByNestedInput
    participations?: SessionParticipantUncheckedUpdateManyWithoutUserNestedInput
    leaderboardEntries?: QuizLeaderboardUncheckedUpdateManyWithoutUserNestedInput
    invitations?: SessionInvitationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SessionParticipantUpsertWithWhereUniqueWithoutSessionInput = {
    where: SessionParticipantWhereUniqueInput
    update: XOR<SessionParticipantUpdateWithoutSessionInput, SessionParticipantUncheckedUpdateWithoutSessionInput>
    create: XOR<SessionParticipantCreateWithoutSessionInput, SessionParticipantUncheckedCreateWithoutSessionInput>
  }

  export type SessionParticipantUpdateWithWhereUniqueWithoutSessionInput = {
    where: SessionParticipantWhereUniqueInput
    data: XOR<SessionParticipantUpdateWithoutSessionInput, SessionParticipantUncheckedUpdateWithoutSessionInput>
  }

  export type SessionParticipantUpdateManyWithWhereWithoutSessionInput = {
    where: SessionParticipantScalarWhereInput
    data: XOR<SessionParticipantUpdateManyMutationInput, SessionParticipantUncheckedUpdateManyWithoutSessionInput>
  }

  export type SessionInvitationUpsertWithWhereUniqueWithoutSessionInput = {
    where: SessionInvitationWhereUniqueInput
    update: XOR<SessionInvitationUpdateWithoutSessionInput, SessionInvitationUncheckedUpdateWithoutSessionInput>
    create: XOR<SessionInvitationCreateWithoutSessionInput, SessionInvitationUncheckedCreateWithoutSessionInput>
  }

  export type SessionInvitationUpdateWithWhereUniqueWithoutSessionInput = {
    where: SessionInvitationWhereUniqueInput
    data: XOR<SessionInvitationUpdateWithoutSessionInput, SessionInvitationUncheckedUpdateWithoutSessionInput>
  }

  export type SessionInvitationUpdateManyWithWhereWithoutSessionInput = {
    where: SessionInvitationScalarWhereInput
    data: XOR<SessionInvitationUpdateManyMutationInput, SessionInvitationUncheckedUpdateManyWithoutSessionInput>
  }

  export type UserCreateWithoutParticipationsInput = {
    id?: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdQuizzes?: QuizCreateNestedManyWithoutCreatedByInput
    hostedSessions?: QuizSessionCreateNestedManyWithoutHostInput
    leaderboardEntries?: QuizLeaderboardCreateNestedManyWithoutUserInput
    invitations?: SessionInvitationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutParticipationsInput = {
    id?: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdQuizzes?: QuizUncheckedCreateNestedManyWithoutCreatedByInput
    hostedSessions?: QuizSessionUncheckedCreateNestedManyWithoutHostInput
    leaderboardEntries?: QuizLeaderboardUncheckedCreateNestedManyWithoutUserInput
    invitations?: SessionInvitationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutParticipationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput>
  }

  export type QuizSessionCreateWithoutParticipantsInput = {
    id?: string
    code: string
    status?: $Enums.SessionStatus
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    quiz: QuizCreateNestedOneWithoutSessionsInput
    host: UserCreateNestedOneWithoutHostedSessionsInput
    invitations?: SessionInvitationCreateNestedManyWithoutSessionInput
  }

  export type QuizSessionUncheckedCreateWithoutParticipantsInput = {
    id?: string
    code: string
    quizId: string
    hostId: string
    status?: $Enums.SessionStatus
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    invitations?: SessionInvitationUncheckedCreateNestedManyWithoutSessionInput
  }

  export type QuizSessionCreateOrConnectWithoutParticipantsInput = {
    where: QuizSessionWhereUniqueInput
    create: XOR<QuizSessionCreateWithoutParticipantsInput, QuizSessionUncheckedCreateWithoutParticipantsInput>
  }

  export type QuestionResponseCreateWithoutParticipantInput = {
    id?: string
    submittedAt?: Date | string
    isCorrect: boolean
    question: QuizQuestionCreateNestedOneWithoutResponsesInput
    selectedOption?: QuestionAnswerOptionCreateNestedOneWithoutResponsesInput
  }

  export type QuestionResponseUncheckedCreateWithoutParticipantInput = {
    id?: string
    questionId: string
    selectedId?: string | null
    submittedAt?: Date | string
    isCorrect: boolean
  }

  export type QuestionResponseCreateOrConnectWithoutParticipantInput = {
    where: QuestionResponseWhereUniqueInput
    create: XOR<QuestionResponseCreateWithoutParticipantInput, QuestionResponseUncheckedCreateWithoutParticipantInput>
  }

  export type QuestionResponseCreateManyParticipantInputEnvelope = {
    data: QuestionResponseCreateManyParticipantInput | QuestionResponseCreateManyParticipantInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutParticipationsInput = {
    update: XOR<UserUpdateWithoutParticipationsInput, UserUncheckedUpdateWithoutParticipationsInput>
    create: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParticipationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParticipationsInput, UserUncheckedUpdateWithoutParticipationsInput>
  }

  export type UserUpdateWithoutParticipationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdQuizzes?: QuizUpdateManyWithoutCreatedByNestedInput
    hostedSessions?: QuizSessionUpdateManyWithoutHostNestedInput
    leaderboardEntries?: QuizLeaderboardUpdateManyWithoutUserNestedInput
    invitations?: SessionInvitationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutParticipationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdQuizzes?: QuizUncheckedUpdateManyWithoutCreatedByNestedInput
    hostedSessions?: QuizSessionUncheckedUpdateManyWithoutHostNestedInput
    leaderboardEntries?: QuizLeaderboardUncheckedUpdateManyWithoutUserNestedInput
    invitations?: SessionInvitationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuizSessionUpsertWithoutParticipantsInput = {
    update: XOR<QuizSessionUpdateWithoutParticipantsInput, QuizSessionUncheckedUpdateWithoutParticipantsInput>
    create: XOR<QuizSessionCreateWithoutParticipantsInput, QuizSessionUncheckedCreateWithoutParticipantsInput>
    where?: QuizSessionWhereInput
  }

  export type QuizSessionUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: QuizSessionWhereInput
    data: XOR<QuizSessionUpdateWithoutParticipantsInput, QuizSessionUncheckedUpdateWithoutParticipantsInput>
  }

  export type QuizSessionUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quiz?: QuizUpdateOneRequiredWithoutSessionsNestedInput
    host?: UserUpdateOneRequiredWithoutHostedSessionsNestedInput
    invitations?: SessionInvitationUpdateManyWithoutSessionNestedInput
  }

  export type QuizSessionUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invitations?: SessionInvitationUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type QuestionResponseUpsertWithWhereUniqueWithoutParticipantInput = {
    where: QuestionResponseWhereUniqueInput
    update: XOR<QuestionResponseUpdateWithoutParticipantInput, QuestionResponseUncheckedUpdateWithoutParticipantInput>
    create: XOR<QuestionResponseCreateWithoutParticipantInput, QuestionResponseUncheckedCreateWithoutParticipantInput>
  }

  export type QuestionResponseUpdateWithWhereUniqueWithoutParticipantInput = {
    where: QuestionResponseWhereUniqueInput
    data: XOR<QuestionResponseUpdateWithoutParticipantInput, QuestionResponseUncheckedUpdateWithoutParticipantInput>
  }

  export type QuestionResponseUpdateManyWithWhereWithoutParticipantInput = {
    where: QuestionResponseScalarWhereInput
    data: XOR<QuestionResponseUpdateManyMutationInput, QuestionResponseUncheckedUpdateManyWithoutParticipantInput>
  }

  export type SessionParticipantCreateWithoutResponsesInput = {
    id?: string
    score?: number
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutParticipationsInput
    session: QuizSessionCreateNestedOneWithoutParticipantsInput
  }

  export type SessionParticipantUncheckedCreateWithoutResponsesInput = {
    id?: string
    userId: string
    sessionId: string
    score?: number
    joinedAt?: Date | string
  }

  export type SessionParticipantCreateOrConnectWithoutResponsesInput = {
    where: SessionParticipantWhereUniqueInput
    create: XOR<SessionParticipantCreateWithoutResponsesInput, SessionParticipantUncheckedCreateWithoutResponsesInput>
  }

  export type QuizQuestionCreateWithoutResponsesInput = {
    id?: string
    text: string
    type: $Enums.QuestionType
    questionScore: number
    timeLimit: number
    order?: number | null
    quiz: QuizCreateNestedOneWithoutQuestionsInput
    options?: QuestionAnswerOptionCreateNestedManyWithoutQuestionInput
  }

  export type QuizQuestionUncheckedCreateWithoutResponsesInput = {
    id?: string
    text: string
    type: $Enums.QuestionType
    questionScore: number
    timeLimit: number
    order?: number | null
    quizId: string
    options?: QuestionAnswerOptionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuizQuestionCreateOrConnectWithoutResponsesInput = {
    where: QuizQuestionWhereUniqueInput
    create: XOR<QuizQuestionCreateWithoutResponsesInput, QuizQuestionUncheckedCreateWithoutResponsesInput>
  }

  export type QuestionAnswerOptionCreateWithoutResponsesInput = {
    id?: string
    text: string
    isCorrect: boolean
    question: QuizQuestionCreateNestedOneWithoutOptionsInput
  }

  export type QuestionAnswerOptionUncheckedCreateWithoutResponsesInput = {
    id?: string
    text: string
    isCorrect: boolean
    questionId: string
  }

  export type QuestionAnswerOptionCreateOrConnectWithoutResponsesInput = {
    where: QuestionAnswerOptionWhereUniqueInput
    create: XOR<QuestionAnswerOptionCreateWithoutResponsesInput, QuestionAnswerOptionUncheckedCreateWithoutResponsesInput>
  }

  export type SessionParticipantUpsertWithoutResponsesInput = {
    update: XOR<SessionParticipantUpdateWithoutResponsesInput, SessionParticipantUncheckedUpdateWithoutResponsesInput>
    create: XOR<SessionParticipantCreateWithoutResponsesInput, SessionParticipantUncheckedCreateWithoutResponsesInput>
    where?: SessionParticipantWhereInput
  }

  export type SessionParticipantUpdateToOneWithWhereWithoutResponsesInput = {
    where?: SessionParticipantWhereInput
    data: XOR<SessionParticipantUpdateWithoutResponsesInput, SessionParticipantUncheckedUpdateWithoutResponsesInput>
  }

  export type SessionParticipantUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutParticipationsNestedInput
    session?: QuizSessionUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type SessionParticipantUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizQuestionUpsertWithoutResponsesInput = {
    update: XOR<QuizQuestionUpdateWithoutResponsesInput, QuizQuestionUncheckedUpdateWithoutResponsesInput>
    create: XOR<QuizQuestionCreateWithoutResponsesInput, QuizQuestionUncheckedCreateWithoutResponsesInput>
    where?: QuizQuestionWhereInput
  }

  export type QuizQuestionUpdateToOneWithWhereWithoutResponsesInput = {
    where?: QuizQuestionWhereInput
    data: XOR<QuizQuestionUpdateWithoutResponsesInput, QuizQuestionUncheckedUpdateWithoutResponsesInput>
  }

  export type QuizQuestionUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    questionScore?: IntFieldUpdateOperationsInput | number
    timeLimit?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    quiz?: QuizUpdateOneRequiredWithoutQuestionsNestedInput
    options?: QuestionAnswerOptionUpdateManyWithoutQuestionNestedInput
  }

  export type QuizQuestionUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    questionScore?: IntFieldUpdateOperationsInput | number
    timeLimit?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    quizId?: StringFieldUpdateOperationsInput | string
    options?: QuestionAnswerOptionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionAnswerOptionUpsertWithoutResponsesInput = {
    update: XOR<QuestionAnswerOptionUpdateWithoutResponsesInput, QuestionAnswerOptionUncheckedUpdateWithoutResponsesInput>
    create: XOR<QuestionAnswerOptionCreateWithoutResponsesInput, QuestionAnswerOptionUncheckedCreateWithoutResponsesInput>
    where?: QuestionAnswerOptionWhereInput
  }

  export type QuestionAnswerOptionUpdateToOneWithWhereWithoutResponsesInput = {
    where?: QuestionAnswerOptionWhereInput
    data: XOR<QuestionAnswerOptionUpdateWithoutResponsesInput, QuestionAnswerOptionUncheckedUpdateWithoutResponsesInput>
  }

  export type QuestionAnswerOptionUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    question?: QuizQuestionUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type QuestionAnswerOptionUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizCreateWithoutCategoryInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.QuizType
    createdBy: UserCreateNestedOneWithoutCreatedQuizzesInput
    questions?: QuizQuestionCreateNestedManyWithoutQuizInput
    sessions?: QuizSessionCreateNestedManyWithoutQuizInput
    leaderboardEntries?: QuizLeaderboardCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.QuizType
    createdById: string
    questions?: QuizQuestionUncheckedCreateNestedManyWithoutQuizInput
    sessions?: QuizSessionUncheckedCreateNestedManyWithoutQuizInput
    leaderboardEntries?: QuizLeaderboardUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutCategoryInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutCategoryInput, QuizUncheckedCreateWithoutCategoryInput>
  }

  export type QuizCreateManyCategoryInputEnvelope = {
    data: QuizCreateManyCategoryInput | QuizCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type QuizUpsertWithWhereUniqueWithoutCategoryInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutCategoryInput, QuizUncheckedUpdateWithoutCategoryInput>
    create: XOR<QuizCreateWithoutCategoryInput, QuizUncheckedCreateWithoutCategoryInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutCategoryInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutCategoryInput, QuizUncheckedUpdateWithoutCategoryInput>
  }

  export type QuizUpdateManyWithWhereWithoutCategoryInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserCreateWithoutLeaderboardEntriesInput = {
    id?: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdQuizzes?: QuizCreateNestedManyWithoutCreatedByInput
    hostedSessions?: QuizSessionCreateNestedManyWithoutHostInput
    participations?: SessionParticipantCreateNestedManyWithoutUserInput
    invitations?: SessionInvitationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLeaderboardEntriesInput = {
    id?: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdQuizzes?: QuizUncheckedCreateNestedManyWithoutCreatedByInput
    hostedSessions?: QuizSessionUncheckedCreateNestedManyWithoutHostInput
    participations?: SessionParticipantUncheckedCreateNestedManyWithoutUserInput
    invitations?: SessionInvitationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLeaderboardEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLeaderboardEntriesInput, UserUncheckedCreateWithoutLeaderboardEntriesInput>
  }

  export type QuizCreateWithoutLeaderboardEntriesInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.QuizType
    category: QuizCategoryCreateNestedOneWithoutQuizzesInput
    createdBy: UserCreateNestedOneWithoutCreatedQuizzesInput
    questions?: QuizQuestionCreateNestedManyWithoutQuizInput
    sessions?: QuizSessionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutLeaderboardEntriesInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.QuizType
    categoryId: string
    createdById: string
    questions?: QuizQuestionUncheckedCreateNestedManyWithoutQuizInput
    sessions?: QuizSessionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutLeaderboardEntriesInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutLeaderboardEntriesInput, QuizUncheckedCreateWithoutLeaderboardEntriesInput>
  }

  export type UserUpsertWithoutLeaderboardEntriesInput = {
    update: XOR<UserUpdateWithoutLeaderboardEntriesInput, UserUncheckedUpdateWithoutLeaderboardEntriesInput>
    create: XOR<UserCreateWithoutLeaderboardEntriesInput, UserUncheckedCreateWithoutLeaderboardEntriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLeaderboardEntriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLeaderboardEntriesInput, UserUncheckedUpdateWithoutLeaderboardEntriesInput>
  }

  export type UserUpdateWithoutLeaderboardEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdQuizzes?: QuizUpdateManyWithoutCreatedByNestedInput
    hostedSessions?: QuizSessionUpdateManyWithoutHostNestedInput
    participations?: SessionParticipantUpdateManyWithoutUserNestedInput
    invitations?: SessionInvitationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLeaderboardEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdQuizzes?: QuizUncheckedUpdateManyWithoutCreatedByNestedInput
    hostedSessions?: QuizSessionUncheckedUpdateManyWithoutHostNestedInput
    participations?: SessionParticipantUncheckedUpdateManyWithoutUserNestedInput
    invitations?: SessionInvitationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuizUpsertWithoutLeaderboardEntriesInput = {
    update: XOR<QuizUpdateWithoutLeaderboardEntriesInput, QuizUncheckedUpdateWithoutLeaderboardEntriesInput>
    create: XOR<QuizCreateWithoutLeaderboardEntriesInput, QuizUncheckedCreateWithoutLeaderboardEntriesInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutLeaderboardEntriesInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutLeaderboardEntriesInput, QuizUncheckedUpdateWithoutLeaderboardEntriesInput>
  }

  export type QuizUpdateWithoutLeaderboardEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
    category?: QuizCategoryUpdateOneRequiredWithoutQuizzesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedQuizzesNestedInput
    questions?: QuizQuestionUpdateManyWithoutQuizNestedInput
    sessions?: QuizSessionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutLeaderboardEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
    categoryId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    questions?: QuizQuestionUncheckedUpdateManyWithoutQuizNestedInput
    sessions?: QuizSessionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizSessionCreateWithoutInvitationsInput = {
    id?: string
    code: string
    status?: $Enums.SessionStatus
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    quiz: QuizCreateNestedOneWithoutSessionsInput
    host: UserCreateNestedOneWithoutHostedSessionsInput
    participants?: SessionParticipantCreateNestedManyWithoutSessionInput
  }

  export type QuizSessionUncheckedCreateWithoutInvitationsInput = {
    id?: string
    code: string
    quizId: string
    hostId: string
    status?: $Enums.SessionStatus
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    participants?: SessionParticipantUncheckedCreateNestedManyWithoutSessionInput
  }

  export type QuizSessionCreateOrConnectWithoutInvitationsInput = {
    where: QuizSessionWhereUniqueInput
    create: XOR<QuizSessionCreateWithoutInvitationsInput, QuizSessionUncheckedCreateWithoutInvitationsInput>
  }

  export type UserCreateWithoutInvitationsInput = {
    id?: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdQuizzes?: QuizCreateNestedManyWithoutCreatedByInput
    hostedSessions?: QuizSessionCreateNestedManyWithoutHostInput
    participations?: SessionParticipantCreateNestedManyWithoutUserInput
    leaderboardEntries?: QuizLeaderboardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvitationsInput = {
    id?: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdQuizzes?: QuizUncheckedCreateNestedManyWithoutCreatedByInput
    hostedSessions?: QuizSessionUncheckedCreateNestedManyWithoutHostInput
    participations?: SessionParticipantUncheckedCreateNestedManyWithoutUserInput
    leaderboardEntries?: QuizLeaderboardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvitationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
  }

  export type QuizSessionUpsertWithoutInvitationsInput = {
    update: XOR<QuizSessionUpdateWithoutInvitationsInput, QuizSessionUncheckedUpdateWithoutInvitationsInput>
    create: XOR<QuizSessionCreateWithoutInvitationsInput, QuizSessionUncheckedCreateWithoutInvitationsInput>
    where?: QuizSessionWhereInput
  }

  export type QuizSessionUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: QuizSessionWhereInput
    data: XOR<QuizSessionUpdateWithoutInvitationsInput, QuizSessionUncheckedUpdateWithoutInvitationsInput>
  }

  export type QuizSessionUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quiz?: QuizUpdateOneRequiredWithoutSessionsNestedInput
    host?: UserUpdateOneRequiredWithoutHostedSessionsNestedInput
    participants?: SessionParticipantUpdateManyWithoutSessionNestedInput
  }

  export type QuizSessionUncheckedUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participants?: SessionParticipantUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type UserUpsertWithoutInvitationsInput = {
    update: XOR<UserUpdateWithoutInvitationsInput, UserUncheckedUpdateWithoutInvitationsInput>
    create: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvitationsInput, UserUncheckedUpdateWithoutInvitationsInput>
  }

  export type UserUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdQuizzes?: QuizUpdateManyWithoutCreatedByNestedInput
    hostedSessions?: QuizSessionUpdateManyWithoutHostNestedInput
    participations?: SessionParticipantUpdateManyWithoutUserNestedInput
    leaderboardEntries?: QuizLeaderboardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdQuizzes?: QuizUncheckedUpdateManyWithoutCreatedByNestedInput
    hostedSessions?: QuizSessionUncheckedUpdateManyWithoutHostNestedInput
    participations?: SessionParticipantUncheckedUpdateManyWithoutUserNestedInput
    leaderboardEntries?: QuizLeaderboardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuizCreateManyCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.QuizType
    categoryId: string
  }

  export type QuizSessionCreateManyHostInput = {
    id?: string
    code: string
    quizId: string
    status?: $Enums.SessionStatus
    startedAt?: Date | string | null
    endedAt?: Date | string | null
  }

  export type SessionParticipantCreateManyUserInput = {
    id?: string
    sessionId: string
    score?: number
    joinedAt?: Date | string
  }

  export type QuizLeaderboardCreateManyUserInput = {
    id?: string
    quizId: string
    score: number
    accuracy: number
    attempts: number
  }

  export type SessionInvitationCreateManyUserInput = {
    id?: string
    sessionId: string
    email: string
    accepted?: boolean
    invitedAt?: Date | string
  }

  export type QuizUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
    category?: QuizCategoryUpdateOneRequiredWithoutQuizzesNestedInput
    questions?: QuizQuestionUpdateManyWithoutQuizNestedInput
    sessions?: QuizSessionUpdateManyWithoutQuizNestedInput
    leaderboardEntries?: QuizLeaderboardUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
    categoryId?: StringFieldUpdateOperationsInput | string
    questions?: QuizQuestionUncheckedUpdateManyWithoutQuizNestedInput
    sessions?: QuizSessionUncheckedUpdateManyWithoutQuizNestedInput
    leaderboardEntries?: QuizLeaderboardUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizSessionUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quiz?: QuizUpdateOneRequiredWithoutSessionsNestedInput
    participants?: SessionParticipantUpdateManyWithoutSessionNestedInput
    invitations?: SessionInvitationUpdateManyWithoutSessionNestedInput
  }

  export type QuizSessionUncheckedUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participants?: SessionParticipantUncheckedUpdateManyWithoutSessionNestedInput
    invitations?: SessionInvitationUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type QuizSessionUncheckedUpdateManyWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionParticipantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: QuizSessionUpdateOneRequiredWithoutParticipantsNestedInput
    responses?: QuestionResponseUpdateManyWithoutParticipantNestedInput
  }

  export type SessionParticipantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: QuestionResponseUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type SessionParticipantUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizLeaderboardUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    attempts?: IntFieldUpdateOperationsInput | number
    quiz?: QuizUpdateOneRequiredWithoutLeaderboardEntriesNestedInput
  }

  export type QuizLeaderboardUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    attempts?: IntFieldUpdateOperationsInput | number
  }

  export type QuizLeaderboardUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    attempts?: IntFieldUpdateOperationsInput | number
  }

  export type SessionInvitationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accepted?: BoolFieldUpdateOperationsInput | boolean
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: QuizSessionUpdateOneRequiredWithoutInvitationsNestedInput
  }

  export type SessionInvitationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accepted?: BoolFieldUpdateOperationsInput | boolean
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionInvitationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accepted?: BoolFieldUpdateOperationsInput | boolean
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizQuestionCreateManyQuizInput = {
    id?: string
    text: string
    type: $Enums.QuestionType
    questionScore: number
    timeLimit: number
    order?: number | null
  }

  export type QuizSessionCreateManyQuizInput = {
    id?: string
    code: string
    hostId: string
    status?: $Enums.SessionStatus
    startedAt?: Date | string | null
    endedAt?: Date | string | null
  }

  export type QuizLeaderboardCreateManyQuizInput = {
    id?: string
    userId: string
    score: number
    accuracy: number
    attempts: number
  }

  export type QuizQuestionUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    questionScore?: IntFieldUpdateOperationsInput | number
    timeLimit?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    options?: QuestionAnswerOptionUpdateManyWithoutQuestionNestedInput
    responses?: QuestionResponseUpdateManyWithoutQuestionNestedInput
  }

  export type QuizQuestionUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    questionScore?: IntFieldUpdateOperationsInput | number
    timeLimit?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
    options?: QuestionAnswerOptionUncheckedUpdateManyWithoutQuestionNestedInput
    responses?: QuestionResponseUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuizQuestionUncheckedUpdateManyWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    questionScore?: IntFieldUpdateOperationsInput | number
    timeLimit?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type QuizSessionUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    host?: UserUpdateOneRequiredWithoutHostedSessionsNestedInput
    participants?: SessionParticipantUpdateManyWithoutSessionNestedInput
    invitations?: SessionInvitationUpdateManyWithoutSessionNestedInput
  }

  export type QuizSessionUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participants?: SessionParticipantUncheckedUpdateManyWithoutSessionNestedInput
    invitations?: SessionInvitationUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type QuizSessionUncheckedUpdateManyWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuizLeaderboardUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    attempts?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutLeaderboardEntriesNestedInput
  }

  export type QuizLeaderboardUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    attempts?: IntFieldUpdateOperationsInput | number
  }

  export type QuizLeaderboardUncheckedUpdateManyWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    attempts?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionAnswerOptionCreateManyQuestionInput = {
    id?: string
    text: string
    isCorrect: boolean
  }

  export type QuestionResponseCreateManyQuestionInput = {
    id?: string
    participantId: string
    selectedId?: string | null
    submittedAt?: Date | string
    isCorrect: boolean
  }

  export type QuestionAnswerOptionUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    responses?: QuestionResponseUpdateManyWithoutSelectedOptionNestedInput
  }

  export type QuestionAnswerOptionUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    responses?: QuestionResponseUncheckedUpdateManyWithoutSelectedOptionNestedInput
  }

  export type QuestionAnswerOptionUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuestionResponseUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    participant?: SessionParticipantUpdateOneRequiredWithoutResponsesNestedInput
    selectedOption?: QuestionAnswerOptionUpdateOneWithoutResponsesNestedInput
  }

  export type QuestionResponseUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    selectedId?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuestionResponseUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    selectedId?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuestionResponseCreateManySelectedOptionInput = {
    id?: string
    participantId: string
    questionId: string
    submittedAt?: Date | string
    isCorrect: boolean
  }

  export type QuestionResponseUpdateWithoutSelectedOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    participant?: SessionParticipantUpdateOneRequiredWithoutResponsesNestedInput
    question?: QuizQuestionUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type QuestionResponseUncheckedUpdateWithoutSelectedOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuestionResponseUncheckedUpdateManyWithoutSelectedOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SessionParticipantCreateManySessionInput = {
    id?: string
    userId: string
    score?: number
    joinedAt?: Date | string
  }

  export type SessionInvitationCreateManySessionInput = {
    id?: string
    email: string
    userId?: string | null
    accepted?: boolean
    invitedAt?: Date | string
  }

  export type SessionParticipantUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutParticipationsNestedInput
    responses?: QuestionResponseUpdateManyWithoutParticipantNestedInput
  }

  export type SessionParticipantUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: QuestionResponseUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type SessionParticipantUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionInvitationUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accepted?: BoolFieldUpdateOperationsInput | boolean
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutInvitationsNestedInput
  }

  export type SessionInvitationUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    accepted?: BoolFieldUpdateOperationsInput | boolean
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionInvitationUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    accepted?: BoolFieldUpdateOperationsInput | boolean
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionResponseCreateManyParticipantInput = {
    id?: string
    questionId: string
    selectedId?: string | null
    submittedAt?: Date | string
    isCorrect: boolean
  }

  export type QuestionResponseUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    question?: QuizQuestionUpdateOneRequiredWithoutResponsesNestedInput
    selectedOption?: QuestionAnswerOptionUpdateOneWithoutResponsesNestedInput
  }

  export type QuestionResponseUncheckedUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    selectedId?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuestionResponseUncheckedUpdateManyWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    selectedId?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuizCreateManyCategoryInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.QuizType
    createdById: string
  }

  export type QuizUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
    createdBy?: UserUpdateOneRequiredWithoutCreatedQuizzesNestedInput
    questions?: QuizQuestionUpdateManyWithoutQuizNestedInput
    sessions?: QuizSessionUpdateManyWithoutQuizNestedInput
    leaderboardEntries?: QuizLeaderboardUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
    createdById?: StringFieldUpdateOperationsInput | string
    questions?: QuizQuestionUncheckedUpdateManyWithoutQuizNestedInput
    sessions?: QuizSessionUncheckedUpdateManyWithoutQuizNestedInput
    leaderboardEntries?: QuizLeaderboardUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
    createdById?: StringFieldUpdateOperationsInput | string
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