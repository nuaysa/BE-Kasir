
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
 * Model Kategori
 * 
 */
export type Kategori = $Result.DefaultSelection<Prisma.$KategoriPayload>
/**
 * Model Produk
 * 
 */
export type Produk = $Result.DefaultSelection<Prisma.$ProdukPayload>
/**
 * Model Stok
 * 
 */
export type Stok = $Result.DefaultSelection<Prisma.$StokPayload>
/**
 * Model Penjualan
 * 
 */
export type Penjualan = $Result.DefaultSelection<Prisma.$PenjualanPayload>
/**
 * Model MetodeBayar
 * 
 */
export type MetodeBayar = $Result.DefaultSelection<Prisma.$MetodeBayarPayload>
/**
 * Model PenjualanDetail
 * 
 */
export type PenjualanDetail = $Result.DefaultSelection<Prisma.$PenjualanDetailPayload>
/**
 * Model Pengguna
 * 
 */
export type Pengguna = $Result.DefaultSelection<Prisma.$PenggunaPayload>
/**
 * Model KomisiKategori
 * 
 */
export type KomisiKategori = $Result.DefaultSelection<Prisma.$KomisiKategoriPayload>
/**
 * Model KomisiKasir
 * 
 */
export type KomisiKasir = $Result.DefaultSelection<Prisma.$KomisiKasirPayload>
/**
 * Model LaporanHarian
 * 
 */
export type LaporanHarian = $Result.DefaultSelection<Prisma.$LaporanHarianPayload>
/**
 * Model Suplier
 * 
 */
export type Suplier = $Result.DefaultSelection<Prisma.$SuplierPayload>
/**
 * Model Pembelian
 * 
 */
export type Pembelian = $Result.DefaultSelection<Prisma.$PembelianPayload>
/**
 * Model PembelianDetail
 * 
 */
export type PembelianDetail = $Result.DefaultSelection<Prisma.$PembelianDetailPayload>
/**
 * Model Piutang
 * 
 */
export type Piutang = $Result.DefaultSelection<Prisma.$PiutangPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StatusPiutang: {
  BelumLunas: 'BelumLunas',
  Lunas: 'Lunas'
};

export type StatusPiutang = (typeof StatusPiutang)[keyof typeof StatusPiutang]


export const StatusStok: {
  Tersedia: 'Tersedia',
  Terjual: 'Terjual',
  Kadaluarsa: 'Kadaluarsa',
  Retur: 'Retur',
  Rusak: 'Rusak'
};

export type StatusStok = (typeof StatusStok)[keyof typeof StatusStok]


export const JenisPenjualan: {
  Eceran: 'Eceran',
  Grosir: 'Grosir'
};

export type JenisPenjualan = (typeof JenisPenjualan)[keyof typeof JenisPenjualan]


export const Role: {
  Admin: 'Admin',
  Kasir: 'Kasir'
};

export type Role = (typeof Role)[keyof typeof Role]


export const StatusPembelian: {
  Lunas: 'Lunas',
  Kredit: 'Kredit'
};

export type StatusPembelian = (typeof StatusPembelian)[keyof typeof StatusPembelian]

}

export type StatusPiutang = $Enums.StatusPiutang

export const StatusPiutang: typeof $Enums.StatusPiutang

export type StatusStok = $Enums.StatusStok

export const StatusStok: typeof $Enums.StatusStok

export type JenisPenjualan = $Enums.JenisPenjualan

export const JenisPenjualan: typeof $Enums.JenisPenjualan

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type StatusPembelian = $Enums.StatusPembelian

export const StatusPembelian: typeof $Enums.StatusPembelian

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Kategoris
 * const kategoris = await prisma.kategori.findMany()
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
   * // Fetch zero or more Kategoris
   * const kategoris = await prisma.kategori.findMany()
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.kategori`: Exposes CRUD operations for the **Kategori** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kategoris
    * const kategoris = await prisma.kategori.findMany()
    * ```
    */
  get kategori(): Prisma.KategoriDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produk`: Exposes CRUD operations for the **Produk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produks
    * const produks = await prisma.produk.findMany()
    * ```
    */
  get produk(): Prisma.ProdukDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stok`: Exposes CRUD operations for the **Stok** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stoks
    * const stoks = await prisma.stok.findMany()
    * ```
    */
  get stok(): Prisma.StokDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.penjualan`: Exposes CRUD operations for the **Penjualan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Penjualans
    * const penjualans = await prisma.penjualan.findMany()
    * ```
    */
  get penjualan(): Prisma.PenjualanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metodeBayar`: Exposes CRUD operations for the **MetodeBayar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MetodeBayars
    * const metodeBayars = await prisma.metodeBayar.findMany()
    * ```
    */
  get metodeBayar(): Prisma.MetodeBayarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.penjualanDetail`: Exposes CRUD operations for the **PenjualanDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PenjualanDetails
    * const penjualanDetails = await prisma.penjualanDetail.findMany()
    * ```
    */
  get penjualanDetail(): Prisma.PenjualanDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pengguna`: Exposes CRUD operations for the **Pengguna** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Penggunas
    * const penggunas = await prisma.pengguna.findMany()
    * ```
    */
  get pengguna(): Prisma.PenggunaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.komisiKategori`: Exposes CRUD operations for the **KomisiKategori** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KomisiKategoris
    * const komisiKategoris = await prisma.komisiKategori.findMany()
    * ```
    */
  get komisiKategori(): Prisma.KomisiKategoriDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.komisiKasir`: Exposes CRUD operations for the **KomisiKasir** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KomisiKasirs
    * const komisiKasirs = await prisma.komisiKasir.findMany()
    * ```
    */
  get komisiKasir(): Prisma.KomisiKasirDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.laporanHarian`: Exposes CRUD operations for the **LaporanHarian** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LaporanHarians
    * const laporanHarians = await prisma.laporanHarian.findMany()
    * ```
    */
  get laporanHarian(): Prisma.LaporanHarianDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.suplier`: Exposes CRUD operations for the **Suplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Supliers
    * const supliers = await prisma.suplier.findMany()
    * ```
    */
  get suplier(): Prisma.SuplierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pembelian`: Exposes CRUD operations for the **Pembelian** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pembelians
    * const pembelians = await prisma.pembelian.findMany()
    * ```
    */
  get pembelian(): Prisma.PembelianDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pembelianDetail`: Exposes CRUD operations for the **PembelianDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PembelianDetails
    * const pembelianDetails = await prisma.pembelianDetail.findMany()
    * ```
    */
  get pembelianDetail(): Prisma.PembelianDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.piutang`: Exposes CRUD operations for the **Piutang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Piutangs
    * const piutangs = await prisma.piutang.findMany()
    * ```
    */
  get piutang(): Prisma.PiutangDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.3.1
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
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
    Kategori: 'Kategori',
    Produk: 'Produk',
    Stok: 'Stok',
    Penjualan: 'Penjualan',
    MetodeBayar: 'MetodeBayar',
    PenjualanDetail: 'PenjualanDetail',
    Pengguna: 'Pengguna',
    KomisiKategori: 'KomisiKategori',
    KomisiKasir: 'KomisiKasir',
    LaporanHarian: 'LaporanHarian',
    Suplier: 'Suplier',
    Pembelian: 'Pembelian',
    PembelianDetail: 'PembelianDetail',
    Piutang: 'Piutang'
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
      modelProps: "kategori" | "produk" | "stok" | "penjualan" | "metodeBayar" | "penjualanDetail" | "pengguna" | "komisiKategori" | "komisiKasir" | "laporanHarian" | "suplier" | "pembelian" | "pembelianDetail" | "piutang"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Kategori: {
        payload: Prisma.$KategoriPayload<ExtArgs>
        fields: Prisma.KategoriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KategoriFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KategoriFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          findFirst: {
            args: Prisma.KategoriFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KategoriFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          findMany: {
            args: Prisma.KategoriFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>[]
          }
          create: {
            args: Prisma.KategoriCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          createMany: {
            args: Prisma.KategoriCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KategoriCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>[]
          }
          delete: {
            args: Prisma.KategoriDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          update: {
            args: Prisma.KategoriUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          deleteMany: {
            args: Prisma.KategoriDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KategoriUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KategoriUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>[]
          }
          upsert: {
            args: Prisma.KategoriUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          aggregate: {
            args: Prisma.KategoriAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKategori>
          }
          groupBy: {
            args: Prisma.KategoriGroupByArgs<ExtArgs>
            result: $Utils.Optional<KategoriGroupByOutputType>[]
          }
          count: {
            args: Prisma.KategoriCountArgs<ExtArgs>
            result: $Utils.Optional<KategoriCountAggregateOutputType> | number
          }
        }
      }
      Produk: {
        payload: Prisma.$ProdukPayload<ExtArgs>
        fields: Prisma.ProdukFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdukFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdukFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          findFirst: {
            args: Prisma.ProdukFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdukFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          findMany: {
            args: Prisma.ProdukFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>[]
          }
          create: {
            args: Prisma.ProdukCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          createMany: {
            args: Prisma.ProdukCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProdukCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>[]
          }
          delete: {
            args: Prisma.ProdukDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          update: {
            args: Prisma.ProdukUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          deleteMany: {
            args: Prisma.ProdukDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdukUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProdukUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>[]
          }
          upsert: {
            args: Prisma.ProdukUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          aggregate: {
            args: Prisma.ProdukAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduk>
          }
          groupBy: {
            args: Prisma.ProdukGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdukGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdukCountArgs<ExtArgs>
            result: $Utils.Optional<ProdukCountAggregateOutputType> | number
          }
        }
      }
      Stok: {
        payload: Prisma.$StokPayload<ExtArgs>
        fields: Prisma.StokFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StokFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StokFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload>
          }
          findFirst: {
            args: Prisma.StokFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StokFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload>
          }
          findMany: {
            args: Prisma.StokFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload>[]
          }
          create: {
            args: Prisma.StokCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload>
          }
          createMany: {
            args: Prisma.StokCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StokCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload>[]
          }
          delete: {
            args: Prisma.StokDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload>
          }
          update: {
            args: Prisma.StokUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload>
          }
          deleteMany: {
            args: Prisma.StokDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StokUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StokUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload>[]
          }
          upsert: {
            args: Prisma.StokUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload>
          }
          aggregate: {
            args: Prisma.StokAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStok>
          }
          groupBy: {
            args: Prisma.StokGroupByArgs<ExtArgs>
            result: $Utils.Optional<StokGroupByOutputType>[]
          }
          count: {
            args: Prisma.StokCountArgs<ExtArgs>
            result: $Utils.Optional<StokCountAggregateOutputType> | number
          }
        }
      }
      Penjualan: {
        payload: Prisma.$PenjualanPayload<ExtArgs>
        fields: Prisma.PenjualanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PenjualanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PenjualanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualanPayload>
          }
          findFirst: {
            args: Prisma.PenjualanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PenjualanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualanPayload>
          }
          findMany: {
            args: Prisma.PenjualanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualanPayload>[]
          }
          create: {
            args: Prisma.PenjualanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualanPayload>
          }
          createMany: {
            args: Prisma.PenjualanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PenjualanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualanPayload>[]
          }
          delete: {
            args: Prisma.PenjualanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualanPayload>
          }
          update: {
            args: Prisma.PenjualanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualanPayload>
          }
          deleteMany: {
            args: Prisma.PenjualanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PenjualanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PenjualanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualanPayload>[]
          }
          upsert: {
            args: Prisma.PenjualanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualanPayload>
          }
          aggregate: {
            args: Prisma.PenjualanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePenjualan>
          }
          groupBy: {
            args: Prisma.PenjualanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PenjualanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PenjualanCountArgs<ExtArgs>
            result: $Utils.Optional<PenjualanCountAggregateOutputType> | number
          }
        }
      }
      MetodeBayar: {
        payload: Prisma.$MetodeBayarPayload<ExtArgs>
        fields: Prisma.MetodeBayarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetodeBayarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodeBayarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetodeBayarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodeBayarPayload>
          }
          findFirst: {
            args: Prisma.MetodeBayarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodeBayarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetodeBayarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodeBayarPayload>
          }
          findMany: {
            args: Prisma.MetodeBayarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodeBayarPayload>[]
          }
          create: {
            args: Prisma.MetodeBayarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodeBayarPayload>
          }
          createMany: {
            args: Prisma.MetodeBayarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetodeBayarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodeBayarPayload>[]
          }
          delete: {
            args: Prisma.MetodeBayarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodeBayarPayload>
          }
          update: {
            args: Prisma.MetodeBayarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodeBayarPayload>
          }
          deleteMany: {
            args: Prisma.MetodeBayarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetodeBayarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetodeBayarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodeBayarPayload>[]
          }
          upsert: {
            args: Prisma.MetodeBayarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodeBayarPayload>
          }
          aggregate: {
            args: Prisma.MetodeBayarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetodeBayar>
          }
          groupBy: {
            args: Prisma.MetodeBayarGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetodeBayarGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetodeBayarCountArgs<ExtArgs>
            result: $Utils.Optional<MetodeBayarCountAggregateOutputType> | number
          }
        }
      }
      PenjualanDetail: {
        payload: Prisma.$PenjualanDetailPayload<ExtArgs>
        fields: Prisma.PenjualanDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PenjualanDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualanDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PenjualanDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualanDetailPayload>
          }
          findFirst: {
            args: Prisma.PenjualanDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualanDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PenjualanDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualanDetailPayload>
          }
          findMany: {
            args: Prisma.PenjualanDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualanDetailPayload>[]
          }
          create: {
            args: Prisma.PenjualanDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualanDetailPayload>
          }
          createMany: {
            args: Prisma.PenjualanDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PenjualanDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualanDetailPayload>[]
          }
          delete: {
            args: Prisma.PenjualanDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualanDetailPayload>
          }
          update: {
            args: Prisma.PenjualanDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualanDetailPayload>
          }
          deleteMany: {
            args: Prisma.PenjualanDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PenjualanDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PenjualanDetailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualanDetailPayload>[]
          }
          upsert: {
            args: Prisma.PenjualanDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualanDetailPayload>
          }
          aggregate: {
            args: Prisma.PenjualanDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePenjualanDetail>
          }
          groupBy: {
            args: Prisma.PenjualanDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<PenjualanDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.PenjualanDetailCountArgs<ExtArgs>
            result: $Utils.Optional<PenjualanDetailCountAggregateOutputType> | number
          }
        }
      }
      Pengguna: {
        payload: Prisma.$PenggunaPayload<ExtArgs>
        fields: Prisma.PenggunaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PenggunaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenggunaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PenggunaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenggunaPayload>
          }
          findFirst: {
            args: Prisma.PenggunaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenggunaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PenggunaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenggunaPayload>
          }
          findMany: {
            args: Prisma.PenggunaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenggunaPayload>[]
          }
          create: {
            args: Prisma.PenggunaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenggunaPayload>
          }
          createMany: {
            args: Prisma.PenggunaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PenggunaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenggunaPayload>[]
          }
          delete: {
            args: Prisma.PenggunaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenggunaPayload>
          }
          update: {
            args: Prisma.PenggunaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenggunaPayload>
          }
          deleteMany: {
            args: Prisma.PenggunaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PenggunaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PenggunaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenggunaPayload>[]
          }
          upsert: {
            args: Prisma.PenggunaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenggunaPayload>
          }
          aggregate: {
            args: Prisma.PenggunaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePengguna>
          }
          groupBy: {
            args: Prisma.PenggunaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PenggunaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PenggunaCountArgs<ExtArgs>
            result: $Utils.Optional<PenggunaCountAggregateOutputType> | number
          }
        }
      }
      KomisiKategori: {
        payload: Prisma.$KomisiKategoriPayload<ExtArgs>
        fields: Prisma.KomisiKategoriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KomisiKategoriFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomisiKategoriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KomisiKategoriFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomisiKategoriPayload>
          }
          findFirst: {
            args: Prisma.KomisiKategoriFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomisiKategoriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KomisiKategoriFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomisiKategoriPayload>
          }
          findMany: {
            args: Prisma.KomisiKategoriFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomisiKategoriPayload>[]
          }
          create: {
            args: Prisma.KomisiKategoriCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomisiKategoriPayload>
          }
          createMany: {
            args: Prisma.KomisiKategoriCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KomisiKategoriCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomisiKategoriPayload>[]
          }
          delete: {
            args: Prisma.KomisiKategoriDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomisiKategoriPayload>
          }
          update: {
            args: Prisma.KomisiKategoriUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomisiKategoriPayload>
          }
          deleteMany: {
            args: Prisma.KomisiKategoriDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KomisiKategoriUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KomisiKategoriUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomisiKategoriPayload>[]
          }
          upsert: {
            args: Prisma.KomisiKategoriUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomisiKategoriPayload>
          }
          aggregate: {
            args: Prisma.KomisiKategoriAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKomisiKategori>
          }
          groupBy: {
            args: Prisma.KomisiKategoriGroupByArgs<ExtArgs>
            result: $Utils.Optional<KomisiKategoriGroupByOutputType>[]
          }
          count: {
            args: Prisma.KomisiKategoriCountArgs<ExtArgs>
            result: $Utils.Optional<KomisiKategoriCountAggregateOutputType> | number
          }
        }
      }
      KomisiKasir: {
        payload: Prisma.$KomisiKasirPayload<ExtArgs>
        fields: Prisma.KomisiKasirFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KomisiKasirFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomisiKasirPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KomisiKasirFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomisiKasirPayload>
          }
          findFirst: {
            args: Prisma.KomisiKasirFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomisiKasirPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KomisiKasirFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomisiKasirPayload>
          }
          findMany: {
            args: Prisma.KomisiKasirFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomisiKasirPayload>[]
          }
          create: {
            args: Prisma.KomisiKasirCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomisiKasirPayload>
          }
          createMany: {
            args: Prisma.KomisiKasirCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KomisiKasirCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomisiKasirPayload>[]
          }
          delete: {
            args: Prisma.KomisiKasirDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomisiKasirPayload>
          }
          update: {
            args: Prisma.KomisiKasirUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomisiKasirPayload>
          }
          deleteMany: {
            args: Prisma.KomisiKasirDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KomisiKasirUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KomisiKasirUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomisiKasirPayload>[]
          }
          upsert: {
            args: Prisma.KomisiKasirUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KomisiKasirPayload>
          }
          aggregate: {
            args: Prisma.KomisiKasirAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKomisiKasir>
          }
          groupBy: {
            args: Prisma.KomisiKasirGroupByArgs<ExtArgs>
            result: $Utils.Optional<KomisiKasirGroupByOutputType>[]
          }
          count: {
            args: Prisma.KomisiKasirCountArgs<ExtArgs>
            result: $Utils.Optional<KomisiKasirCountAggregateOutputType> | number
          }
        }
      }
      LaporanHarian: {
        payload: Prisma.$LaporanHarianPayload<ExtArgs>
        fields: Prisma.LaporanHarianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LaporanHarianFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanHarianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LaporanHarianFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanHarianPayload>
          }
          findFirst: {
            args: Prisma.LaporanHarianFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanHarianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LaporanHarianFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanHarianPayload>
          }
          findMany: {
            args: Prisma.LaporanHarianFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanHarianPayload>[]
          }
          create: {
            args: Prisma.LaporanHarianCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanHarianPayload>
          }
          createMany: {
            args: Prisma.LaporanHarianCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LaporanHarianCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanHarianPayload>[]
          }
          delete: {
            args: Prisma.LaporanHarianDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanHarianPayload>
          }
          update: {
            args: Prisma.LaporanHarianUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanHarianPayload>
          }
          deleteMany: {
            args: Prisma.LaporanHarianDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LaporanHarianUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LaporanHarianUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanHarianPayload>[]
          }
          upsert: {
            args: Prisma.LaporanHarianUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanHarianPayload>
          }
          aggregate: {
            args: Prisma.LaporanHarianAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLaporanHarian>
          }
          groupBy: {
            args: Prisma.LaporanHarianGroupByArgs<ExtArgs>
            result: $Utils.Optional<LaporanHarianGroupByOutputType>[]
          }
          count: {
            args: Prisma.LaporanHarianCountArgs<ExtArgs>
            result: $Utils.Optional<LaporanHarianCountAggregateOutputType> | number
          }
        }
      }
      Suplier: {
        payload: Prisma.$SuplierPayload<ExtArgs>
        fields: Prisma.SuplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuplierPayload>
          }
          findFirst: {
            args: Prisma.SuplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuplierPayload>
          }
          findMany: {
            args: Prisma.SuplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuplierPayload>[]
          }
          create: {
            args: Prisma.SuplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuplierPayload>
          }
          createMany: {
            args: Prisma.SuplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SuplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuplierPayload>[]
          }
          delete: {
            args: Prisma.SuplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuplierPayload>
          }
          update: {
            args: Prisma.SuplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuplierPayload>
          }
          deleteMany: {
            args: Prisma.SuplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SuplierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuplierPayload>[]
          }
          upsert: {
            args: Prisma.SuplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuplierPayload>
          }
          aggregate: {
            args: Prisma.SuplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuplier>
          }
          groupBy: {
            args: Prisma.SuplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuplierCountArgs<ExtArgs>
            result: $Utils.Optional<SuplierCountAggregateOutputType> | number
          }
        }
      }
      Pembelian: {
        payload: Prisma.$PembelianPayload<ExtArgs>
        fields: Prisma.PembelianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PembelianFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PembelianFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianPayload>
          }
          findFirst: {
            args: Prisma.PembelianFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PembelianFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianPayload>
          }
          findMany: {
            args: Prisma.PembelianFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianPayload>[]
          }
          create: {
            args: Prisma.PembelianCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianPayload>
          }
          createMany: {
            args: Prisma.PembelianCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PembelianCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianPayload>[]
          }
          delete: {
            args: Prisma.PembelianDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianPayload>
          }
          update: {
            args: Prisma.PembelianUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianPayload>
          }
          deleteMany: {
            args: Prisma.PembelianDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PembelianUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PembelianUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianPayload>[]
          }
          upsert: {
            args: Prisma.PembelianUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianPayload>
          }
          aggregate: {
            args: Prisma.PembelianAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePembelian>
          }
          groupBy: {
            args: Prisma.PembelianGroupByArgs<ExtArgs>
            result: $Utils.Optional<PembelianGroupByOutputType>[]
          }
          count: {
            args: Prisma.PembelianCountArgs<ExtArgs>
            result: $Utils.Optional<PembelianCountAggregateOutputType> | number
          }
        }
      }
      PembelianDetail: {
        payload: Prisma.$PembelianDetailPayload<ExtArgs>
        fields: Prisma.PembelianDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PembelianDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PembelianDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianDetailPayload>
          }
          findFirst: {
            args: Prisma.PembelianDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PembelianDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianDetailPayload>
          }
          findMany: {
            args: Prisma.PembelianDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianDetailPayload>[]
          }
          create: {
            args: Prisma.PembelianDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianDetailPayload>
          }
          createMany: {
            args: Prisma.PembelianDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PembelianDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianDetailPayload>[]
          }
          delete: {
            args: Prisma.PembelianDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianDetailPayload>
          }
          update: {
            args: Prisma.PembelianDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianDetailPayload>
          }
          deleteMany: {
            args: Prisma.PembelianDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PembelianDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PembelianDetailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianDetailPayload>[]
          }
          upsert: {
            args: Prisma.PembelianDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianDetailPayload>
          }
          aggregate: {
            args: Prisma.PembelianDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePembelianDetail>
          }
          groupBy: {
            args: Prisma.PembelianDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<PembelianDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.PembelianDetailCountArgs<ExtArgs>
            result: $Utils.Optional<PembelianDetailCountAggregateOutputType> | number
          }
        }
      }
      Piutang: {
        payload: Prisma.$PiutangPayload<ExtArgs>
        fields: Prisma.PiutangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PiutangFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PiutangFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangPayload>
          }
          findFirst: {
            args: Prisma.PiutangFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PiutangFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangPayload>
          }
          findMany: {
            args: Prisma.PiutangFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangPayload>[]
          }
          create: {
            args: Prisma.PiutangCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangPayload>
          }
          createMany: {
            args: Prisma.PiutangCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PiutangCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangPayload>[]
          }
          delete: {
            args: Prisma.PiutangDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangPayload>
          }
          update: {
            args: Prisma.PiutangUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangPayload>
          }
          deleteMany: {
            args: Prisma.PiutangDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PiutangUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PiutangUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangPayload>[]
          }
          upsert: {
            args: Prisma.PiutangUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PiutangPayload>
          }
          aggregate: {
            args: Prisma.PiutangAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePiutang>
          }
          groupBy: {
            args: Prisma.PiutangGroupByArgs<ExtArgs>
            result: $Utils.Optional<PiutangGroupByOutputType>[]
          }
          count: {
            args: Prisma.PiutangCountArgs<ExtArgs>
            result: $Utils.Optional<PiutangCountAggregateOutputType> | number
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
    kategori?: KategoriOmit
    produk?: ProdukOmit
    stok?: StokOmit
    penjualan?: PenjualanOmit
    metodeBayar?: MetodeBayarOmit
    penjualanDetail?: PenjualanDetailOmit
    pengguna?: PenggunaOmit
    komisiKategori?: KomisiKategoriOmit
    komisiKasir?: KomisiKasirOmit
    laporanHarian?: LaporanHarianOmit
    suplier?: SuplierOmit
    pembelian?: PembelianOmit
    pembelianDetail?: PembelianDetailOmit
    piutang?: PiutangOmit
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
   * Count Type KategoriCountOutputType
   */

  export type KategoriCountOutputType = {
    Produk: number
    komisi: number
  }

  export type KategoriCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Produk?: boolean | KategoriCountOutputTypeCountProdukArgs
    komisi?: boolean | KategoriCountOutputTypeCountKomisiArgs
  }

  // Custom InputTypes
  /**
   * KategoriCountOutputType without action
   */
  export type KategoriCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriCountOutputType
     */
    select?: KategoriCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KategoriCountOutputType without action
   */
  export type KategoriCountOutputTypeCountProdukArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdukWhereInput
  }

  /**
   * KategoriCountOutputType without action
   */
  export type KategoriCountOutputTypeCountKomisiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KomisiKategoriWhereInput
  }


  /**
   * Count Type ProdukCountOutputType
   */

  export type ProdukCountOutputType = {
    Stok: number
    PembelianDetail: number
    PenjualanDetail: number
  }

  export type ProdukCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Stok?: boolean | ProdukCountOutputTypeCountStokArgs
    PembelianDetail?: boolean | ProdukCountOutputTypeCountPembelianDetailArgs
    PenjualanDetail?: boolean | ProdukCountOutputTypeCountPenjualanDetailArgs
  }

  // Custom InputTypes
  /**
   * ProdukCountOutputType without action
   */
  export type ProdukCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdukCountOutputType
     */
    select?: ProdukCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdukCountOutputType without action
   */
  export type ProdukCountOutputTypeCountStokArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StokWhereInput
  }

  /**
   * ProdukCountOutputType without action
   */
  export type ProdukCountOutputTypeCountPembelianDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PembelianDetailWhereInput
  }

  /**
   * ProdukCountOutputType without action
   */
  export type ProdukCountOutputTypeCountPenjualanDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PenjualanDetailWhereInput
  }


  /**
   * Count Type StokCountOutputType
   */

  export type StokCountOutputType = {
    PenjualanDetail: number
  }

  export type StokCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PenjualanDetail?: boolean | StokCountOutputTypeCountPenjualanDetailArgs
  }

  // Custom InputTypes
  /**
   * StokCountOutputType without action
   */
  export type StokCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StokCountOutputType
     */
    select?: StokCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StokCountOutputType without action
   */
  export type StokCountOutputTypeCountPenjualanDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PenjualanDetailWhereInput
  }


  /**
   * Count Type PenjualanCountOutputType
   */

  export type PenjualanCountOutputType = {
    PenjualanDetail: number
  }

  export type PenjualanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PenjualanDetail?: boolean | PenjualanCountOutputTypeCountPenjualanDetailArgs
  }

  // Custom InputTypes
  /**
   * PenjualanCountOutputType without action
   */
  export type PenjualanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenjualanCountOutputType
     */
    select?: PenjualanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PenjualanCountOutputType without action
   */
  export type PenjualanCountOutputTypeCountPenjualanDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PenjualanDetailWhereInput
  }


  /**
   * Count Type MetodeBayarCountOutputType
   */

  export type MetodeBayarCountOutputType = {
    Penjualan: number
  }

  export type MetodeBayarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Penjualan?: boolean | MetodeBayarCountOutputTypeCountPenjualanArgs
  }

  // Custom InputTypes
  /**
   * MetodeBayarCountOutputType without action
   */
  export type MetodeBayarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodeBayarCountOutputType
     */
    select?: MetodeBayarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MetodeBayarCountOutputType without action
   */
  export type MetodeBayarCountOutputTypeCountPenjualanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PenjualanWhereInput
  }


  /**
   * Count Type PenjualanDetailCountOutputType
   */

  export type PenjualanDetailCountOutputType = {
    Komisi: number
  }

  export type PenjualanDetailCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Komisi?: boolean | PenjualanDetailCountOutputTypeCountKomisiArgs
  }

  // Custom InputTypes
  /**
   * PenjualanDetailCountOutputType without action
   */
  export type PenjualanDetailCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenjualanDetailCountOutputType
     */
    select?: PenjualanDetailCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PenjualanDetailCountOutputType without action
   */
  export type PenjualanDetailCountOutputTypeCountKomisiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KomisiKasirWhereInput
  }


  /**
   * Count Type PenggunaCountOutputType
   */

  export type PenggunaCountOutputType = {
    Penjualan: number
    Komisi: number
  }

  export type PenggunaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Penjualan?: boolean | PenggunaCountOutputTypeCountPenjualanArgs
    Komisi?: boolean | PenggunaCountOutputTypeCountKomisiArgs
  }

  // Custom InputTypes
  /**
   * PenggunaCountOutputType without action
   */
  export type PenggunaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenggunaCountOutputType
     */
    select?: PenggunaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PenggunaCountOutputType without action
   */
  export type PenggunaCountOutputTypeCountPenjualanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PenjualanWhereInput
  }

  /**
   * PenggunaCountOutputType without action
   */
  export type PenggunaCountOutputTypeCountKomisiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KomisiKasirWhereInput
  }


  /**
   * Count Type SuplierCountOutputType
   */

  export type SuplierCountOutputType = {
    Pembelian: number
  }

  export type SuplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pembelian?: boolean | SuplierCountOutputTypeCountPembelianArgs
  }

  // Custom InputTypes
  /**
   * SuplierCountOutputType without action
   */
  export type SuplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuplierCountOutputType
     */
    select?: SuplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SuplierCountOutputType without action
   */
  export type SuplierCountOutputTypeCountPembelianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PembelianWhereInput
  }


  /**
   * Count Type PembelianCountOutputType
   */

  export type PembelianCountOutputType = {
    PembelianDetail: number
    Piutang: number
  }

  export type PembelianCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PembelianDetail?: boolean | PembelianCountOutputTypeCountPembelianDetailArgs
    Piutang?: boolean | PembelianCountOutputTypeCountPiutangArgs
  }

  // Custom InputTypes
  /**
   * PembelianCountOutputType without action
   */
  export type PembelianCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembelianCountOutputType
     */
    select?: PembelianCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PembelianCountOutputType without action
   */
  export type PembelianCountOutputTypeCountPembelianDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PembelianDetailWhereInput
  }

  /**
   * PembelianCountOutputType without action
   */
  export type PembelianCountOutputTypeCountPiutangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PiutangWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Kategori
   */

  export type AggregateKategori = {
    _count: KategoriCountAggregateOutputType | null
    _avg: KategoriAvgAggregateOutputType | null
    _sum: KategoriSumAggregateOutputType | null
    _min: KategoriMinAggregateOutputType | null
    _max: KategoriMaxAggregateOutputType | null
  }

  export type KategoriAvgAggregateOutputType = {
    id: number | null
  }

  export type KategoriSumAggregateOutputType = {
    id: number | null
  }

  export type KategoriMinAggregateOutputType = {
    id: number | null
    nama: string | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type KategoriMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type KategoriCountAggregateOutputType = {
    id: number
    nama: number
    isDeleted: number
    deletedAt: number
    _all: number
  }


  export type KategoriAvgAggregateInputType = {
    id?: true
  }

  export type KategoriSumAggregateInputType = {
    id?: true
  }

  export type KategoriMinAggregateInputType = {
    id?: true
    nama?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type KategoriMaxAggregateInputType = {
    id?: true
    nama?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type KategoriCountAggregateInputType = {
    id?: true
    nama?: true
    isDeleted?: true
    deletedAt?: true
    _all?: true
  }

  export type KategoriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kategori to aggregate.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kategoris
    **/
    _count?: true | KategoriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KategoriAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KategoriSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KategoriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KategoriMaxAggregateInputType
  }

  export type GetKategoriAggregateType<T extends KategoriAggregateArgs> = {
        [P in keyof T & keyof AggregateKategori]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKategori[P]>
      : GetScalarType<T[P], AggregateKategori[P]>
  }




  export type KategoriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KategoriWhereInput
    orderBy?: KategoriOrderByWithAggregationInput | KategoriOrderByWithAggregationInput[]
    by: KategoriScalarFieldEnum[] | KategoriScalarFieldEnum
    having?: KategoriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KategoriCountAggregateInputType | true
    _avg?: KategoriAvgAggregateInputType
    _sum?: KategoriSumAggregateInputType
    _min?: KategoriMinAggregateInputType
    _max?: KategoriMaxAggregateInputType
  }

  export type KategoriGroupByOutputType = {
    id: number
    nama: string
    isDeleted: boolean
    deletedAt: Date | null
    _count: KategoriCountAggregateOutputType | null
    _avg: KategoriAvgAggregateOutputType | null
    _sum: KategoriSumAggregateOutputType | null
    _min: KategoriMinAggregateOutputType | null
    _max: KategoriMaxAggregateOutputType | null
  }

  type GetKategoriGroupByPayload<T extends KategoriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KategoriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KategoriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KategoriGroupByOutputType[P]>
            : GetScalarType<T[P], KategoriGroupByOutputType[P]>
        }
      >
    >


  export type KategoriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    Produk?: boolean | Kategori$ProdukArgs<ExtArgs>
    komisi?: boolean | Kategori$komisiArgs<ExtArgs>
    _count?: boolean | KategoriCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kategori"]>

  export type KategoriSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["kategori"]>

  export type KategoriSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["kategori"]>

  export type KategoriSelectScalar = {
    id?: boolean
    nama?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
  }

  export type KategoriOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "isDeleted" | "deletedAt", ExtArgs["result"]["kategori"]>
  export type KategoriInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Produk?: boolean | Kategori$ProdukArgs<ExtArgs>
    komisi?: boolean | Kategori$komisiArgs<ExtArgs>
    _count?: boolean | KategoriCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KategoriIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type KategoriIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $KategoriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kategori"
    objects: {
      Produk: Prisma.$ProdukPayload<ExtArgs>[]
      komisi: Prisma.$KomisiKategoriPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      isDeleted: boolean
      deletedAt: Date | null
    }, ExtArgs["result"]["kategori"]>
    composites: {}
  }

  type KategoriGetPayload<S extends boolean | null | undefined | KategoriDefaultArgs> = $Result.GetResult<Prisma.$KategoriPayload, S>

  type KategoriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KategoriFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KategoriCountAggregateInputType | true
    }

  export interface KategoriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kategori'], meta: { name: 'Kategori' } }
    /**
     * Find zero or one Kategori that matches the filter.
     * @param {KategoriFindUniqueArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KategoriFindUniqueArgs>(args: SelectSubset<T, KategoriFindUniqueArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Kategori that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KategoriFindUniqueOrThrowArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KategoriFindUniqueOrThrowArgs>(args: SelectSubset<T, KategoriFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Kategori that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriFindFirstArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KategoriFindFirstArgs>(args?: SelectSubset<T, KategoriFindFirstArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Kategori that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriFindFirstOrThrowArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KategoriFindFirstOrThrowArgs>(args?: SelectSubset<T, KategoriFindFirstOrThrowArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Kategoris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kategoris
     * const kategoris = await prisma.kategori.findMany()
     * 
     * // Get first 10 Kategoris
     * const kategoris = await prisma.kategori.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kategoriWithIdOnly = await prisma.kategori.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KategoriFindManyArgs>(args?: SelectSubset<T, KategoriFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Kategori.
     * @param {KategoriCreateArgs} args - Arguments to create a Kategori.
     * @example
     * // Create one Kategori
     * const Kategori = await prisma.kategori.create({
     *   data: {
     *     // ... data to create a Kategori
     *   }
     * })
     * 
     */
    create<T extends KategoriCreateArgs>(args: SelectSubset<T, KategoriCreateArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Kategoris.
     * @param {KategoriCreateManyArgs} args - Arguments to create many Kategoris.
     * @example
     * // Create many Kategoris
     * const kategori = await prisma.kategori.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KategoriCreateManyArgs>(args?: SelectSubset<T, KategoriCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kategoris and returns the data saved in the database.
     * @param {KategoriCreateManyAndReturnArgs} args - Arguments to create many Kategoris.
     * @example
     * // Create many Kategoris
     * const kategori = await prisma.kategori.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kategoris and only return the `id`
     * const kategoriWithIdOnly = await prisma.kategori.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KategoriCreateManyAndReturnArgs>(args?: SelectSubset<T, KategoriCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Kategori.
     * @param {KategoriDeleteArgs} args - Arguments to delete one Kategori.
     * @example
     * // Delete one Kategori
     * const Kategori = await prisma.kategori.delete({
     *   where: {
     *     // ... filter to delete one Kategori
     *   }
     * })
     * 
     */
    delete<T extends KategoriDeleteArgs>(args: SelectSubset<T, KategoriDeleteArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Kategori.
     * @param {KategoriUpdateArgs} args - Arguments to update one Kategori.
     * @example
     * // Update one Kategori
     * const kategori = await prisma.kategori.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KategoriUpdateArgs>(args: SelectSubset<T, KategoriUpdateArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Kategoris.
     * @param {KategoriDeleteManyArgs} args - Arguments to filter Kategoris to delete.
     * @example
     * // Delete a few Kategoris
     * const { count } = await prisma.kategori.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KategoriDeleteManyArgs>(args?: SelectSubset<T, KategoriDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kategoris
     * const kategori = await prisma.kategori.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KategoriUpdateManyArgs>(args: SelectSubset<T, KategoriUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kategoris and returns the data updated in the database.
     * @param {KategoriUpdateManyAndReturnArgs} args - Arguments to update many Kategoris.
     * @example
     * // Update many Kategoris
     * const kategori = await prisma.kategori.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kategoris and only return the `id`
     * const kategoriWithIdOnly = await prisma.kategori.updateManyAndReturn({
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
    updateManyAndReturn<T extends KategoriUpdateManyAndReturnArgs>(args: SelectSubset<T, KategoriUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Kategori.
     * @param {KategoriUpsertArgs} args - Arguments to update or create a Kategori.
     * @example
     * // Update or create a Kategori
     * const kategori = await prisma.kategori.upsert({
     *   create: {
     *     // ... data to create a Kategori
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kategori we want to update
     *   }
     * })
     */
    upsert<T extends KategoriUpsertArgs>(args: SelectSubset<T, KategoriUpsertArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Kategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriCountArgs} args - Arguments to filter Kategoris to count.
     * @example
     * // Count the number of Kategoris
     * const count = await prisma.kategori.count({
     *   where: {
     *     // ... the filter for the Kategoris we want to count
     *   }
     * })
    **/
    count<T extends KategoriCountArgs>(
      args?: Subset<T, KategoriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KategoriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KategoriAggregateArgs>(args: Subset<T, KategoriAggregateArgs>): Prisma.PrismaPromise<GetKategoriAggregateType<T>>

    /**
     * Group by Kategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriGroupByArgs} args - Group by arguments.
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
      T extends KategoriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KategoriGroupByArgs['orderBy'] }
        : { orderBy?: KategoriGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KategoriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKategoriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kategori model
   */
  readonly fields: KategoriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kategori.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KategoriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Produk<T extends Kategori$ProdukArgs<ExtArgs> = {}>(args?: Subset<T, Kategori$ProdukArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    komisi<T extends Kategori$komisiArgs<ExtArgs> = {}>(args?: Subset<T, Kategori$komisiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KomisiKategoriPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Kategori model
   */ 
  interface KategoriFieldRefs {
    readonly id: FieldRef<"Kategori", 'Int'>
    readonly nama: FieldRef<"Kategori", 'String'>
    readonly isDeleted: FieldRef<"Kategori", 'Boolean'>
    readonly deletedAt: FieldRef<"Kategori", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Kategori findUnique
   */
  export type KategoriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori findUniqueOrThrow
   */
  export type KategoriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori findFirst
   */
  export type KategoriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kategoris.
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kategoris.
     */
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * Kategori findFirstOrThrow
   */
  export type KategoriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kategoris.
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kategoris.
     */
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * Kategori findMany
   */
  export type KategoriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategoris to fetch.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kategoris.
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * Kategori create
   */
  export type KategoriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * The data needed to create a Kategori.
     */
    data: XOR<KategoriCreateInput, KategoriUncheckedCreateInput>
  }

  /**
   * Kategori createMany
   */
  export type KategoriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kategoris.
     */
    data: KategoriCreateManyInput | KategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kategori createManyAndReturn
   */
  export type KategoriCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * The data used to create many Kategoris.
     */
    data: KategoriCreateManyInput | KategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kategori update
   */
  export type KategoriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * The data needed to update a Kategori.
     */
    data: XOR<KategoriUpdateInput, KategoriUncheckedUpdateInput>
    /**
     * Choose, which Kategori to update.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori updateMany
   */
  export type KategoriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kategoris.
     */
    data: XOR<KategoriUpdateManyMutationInput, KategoriUncheckedUpdateManyInput>
    /**
     * Filter which Kategoris to update
     */
    where?: KategoriWhereInput
    /**
     * Limit how many Kategoris to update.
     */
    limit?: number
  }

  /**
   * Kategori updateManyAndReturn
   */
  export type KategoriUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * The data used to update Kategoris.
     */
    data: XOR<KategoriUpdateManyMutationInput, KategoriUncheckedUpdateManyInput>
    /**
     * Filter which Kategoris to update
     */
    where?: KategoriWhereInput
    /**
     * Limit how many Kategoris to update.
     */
    limit?: number
  }

  /**
   * Kategori upsert
   */
  export type KategoriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * The filter to search for the Kategori to update in case it exists.
     */
    where: KategoriWhereUniqueInput
    /**
     * In case the Kategori found by the `where` argument doesn't exist, create a new Kategori with this data.
     */
    create: XOR<KategoriCreateInput, KategoriUncheckedCreateInput>
    /**
     * In case the Kategori was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KategoriUpdateInput, KategoriUncheckedUpdateInput>
  }

  /**
   * Kategori delete
   */
  export type KategoriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter which Kategori to delete.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori deleteMany
   */
  export type KategoriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kategoris to delete
     */
    where?: KategoriWhereInput
    /**
     * Limit how many Kategoris to delete.
     */
    limit?: number
  }

  /**
   * Kategori.Produk
   */
  export type Kategori$ProdukArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    where?: ProdukWhereInput
    orderBy?: ProdukOrderByWithRelationInput | ProdukOrderByWithRelationInput[]
    cursor?: ProdukWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * Kategori.komisi
   */
  export type Kategori$komisiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KomisiKategori
     */
    select?: KomisiKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KomisiKategori
     */
    omit?: KomisiKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomisiKategoriInclude<ExtArgs> | null
    where?: KomisiKategoriWhereInput
    orderBy?: KomisiKategoriOrderByWithRelationInput | KomisiKategoriOrderByWithRelationInput[]
    cursor?: KomisiKategoriWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KomisiKategoriScalarFieldEnum | KomisiKategoriScalarFieldEnum[]
  }

  /**
   * Kategori without action
   */
  export type KategoriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
  }


  /**
   * Model Produk
   */

  export type AggregateProduk = {
    _count: ProdukCountAggregateOutputType | null
    _avg: ProdukAvgAggregateOutputType | null
    _sum: ProdukSumAggregateOutputType | null
    _min: ProdukMinAggregateOutputType | null
    _max: ProdukMaxAggregateOutputType | null
  }

  export type ProdukAvgAggregateOutputType = {
    id: number | null
    kategoriId: number | null
    hargaBeli: number | null
    hargaJualRetail: number | null
    hargaJualGrosir: number | null
    qtyMinGrosir: number | null
  }

  export type ProdukSumAggregateOutputType = {
    id: number | null
    kategoriId: number | null
    hargaBeli: number | null
    hargaJualRetail: number | null
    hargaJualGrosir: number | null
    qtyMinGrosir: number | null
  }

  export type ProdukMinAggregateOutputType = {
    id: number | null
    nama: string | null
    kategoriId: number | null
    hargaBeli: number | null
    hargaJualRetail: number | null
    hargaJualGrosir: number | null
    qtyMinGrosir: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type ProdukMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    kategoriId: number | null
    hargaBeli: number | null
    hargaJualRetail: number | null
    hargaJualGrosir: number | null
    qtyMinGrosir: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type ProdukCountAggregateOutputType = {
    id: number
    nama: number
    kategoriId: number
    hargaBeli: number
    hargaJualRetail: number
    hargaJualGrosir: number
    qtyMinGrosir: number
    isDeleted: number
    deletedAt: number
    _all: number
  }


  export type ProdukAvgAggregateInputType = {
    id?: true
    kategoriId?: true
    hargaBeli?: true
    hargaJualRetail?: true
    hargaJualGrosir?: true
    qtyMinGrosir?: true
  }

  export type ProdukSumAggregateInputType = {
    id?: true
    kategoriId?: true
    hargaBeli?: true
    hargaJualRetail?: true
    hargaJualGrosir?: true
    qtyMinGrosir?: true
  }

  export type ProdukMinAggregateInputType = {
    id?: true
    nama?: true
    kategoriId?: true
    hargaBeli?: true
    hargaJualRetail?: true
    hargaJualGrosir?: true
    qtyMinGrosir?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type ProdukMaxAggregateInputType = {
    id?: true
    nama?: true
    kategoriId?: true
    hargaBeli?: true
    hargaJualRetail?: true
    hargaJualGrosir?: true
    qtyMinGrosir?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type ProdukCountAggregateInputType = {
    id?: true
    nama?: true
    kategoriId?: true
    hargaBeli?: true
    hargaJualRetail?: true
    hargaJualGrosir?: true
    qtyMinGrosir?: true
    isDeleted?: true
    deletedAt?: true
    _all?: true
  }

  export type ProdukAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produk to aggregate.
     */
    where?: ProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produks to fetch.
     */
    orderBy?: ProdukOrderByWithRelationInput | ProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produks
    **/
    _count?: true | ProdukCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdukAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdukSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdukMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdukMaxAggregateInputType
  }

  export type GetProdukAggregateType<T extends ProdukAggregateArgs> = {
        [P in keyof T & keyof AggregateProduk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduk[P]>
      : GetScalarType<T[P], AggregateProduk[P]>
  }




  export type ProdukGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdukWhereInput
    orderBy?: ProdukOrderByWithAggregationInput | ProdukOrderByWithAggregationInput[]
    by: ProdukScalarFieldEnum[] | ProdukScalarFieldEnum
    having?: ProdukScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdukCountAggregateInputType | true
    _avg?: ProdukAvgAggregateInputType
    _sum?: ProdukSumAggregateInputType
    _min?: ProdukMinAggregateInputType
    _max?: ProdukMaxAggregateInputType
  }

  export type ProdukGroupByOutputType = {
    id: number
    nama: string
    kategoriId: number
    hargaBeli: number
    hargaJualRetail: number
    hargaJualGrosir: number
    qtyMinGrosir: number
    isDeleted: boolean
    deletedAt: Date | null
    _count: ProdukCountAggregateOutputType | null
    _avg: ProdukAvgAggregateOutputType | null
    _sum: ProdukSumAggregateOutputType | null
    _min: ProdukMinAggregateOutputType | null
    _max: ProdukMaxAggregateOutputType | null
  }

  type GetProdukGroupByPayload<T extends ProdukGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdukGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdukGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdukGroupByOutputType[P]>
            : GetScalarType<T[P], ProdukGroupByOutputType[P]>
        }
      >
    >


  export type ProdukSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    kategoriId?: boolean
    hargaBeli?: boolean
    hargaJualRetail?: boolean
    hargaJualGrosir?: boolean
    qtyMinGrosir?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
    Stok?: boolean | Produk$StokArgs<ExtArgs>
    PembelianDetail?: boolean | Produk$PembelianDetailArgs<ExtArgs>
    PenjualanDetail?: boolean | Produk$PenjualanDetailArgs<ExtArgs>
    _count?: boolean | ProdukCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produk"]>

  export type ProdukSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    kategoriId?: boolean
    hargaBeli?: boolean
    hargaJualRetail?: boolean
    hargaJualGrosir?: boolean
    qtyMinGrosir?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produk"]>

  export type ProdukSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    kategoriId?: boolean
    hargaBeli?: boolean
    hargaJualRetail?: boolean
    hargaJualGrosir?: boolean
    qtyMinGrosir?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produk"]>

  export type ProdukSelectScalar = {
    id?: boolean
    nama?: boolean
    kategoriId?: boolean
    hargaBeli?: boolean
    hargaJualRetail?: boolean
    hargaJualGrosir?: boolean
    qtyMinGrosir?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
  }

  export type ProdukOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "kategoriId" | "hargaBeli" | "hargaJualRetail" | "hargaJualGrosir" | "qtyMinGrosir" | "isDeleted" | "deletedAt", ExtArgs["result"]["produk"]>
  export type ProdukInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
    Stok?: boolean | Produk$StokArgs<ExtArgs>
    PembelianDetail?: boolean | Produk$PembelianDetailArgs<ExtArgs>
    PenjualanDetail?: boolean | Produk$PenjualanDetailArgs<ExtArgs>
    _count?: boolean | ProdukCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProdukIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }
  export type ProdukIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }

  export type $ProdukPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produk"
    objects: {
      kategori: Prisma.$KategoriPayload<ExtArgs>
      Stok: Prisma.$StokPayload<ExtArgs>[]
      PembelianDetail: Prisma.$PembelianDetailPayload<ExtArgs>[]
      PenjualanDetail: Prisma.$PenjualanDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      kategoriId: number
      hargaBeli: number
      hargaJualRetail: number
      hargaJualGrosir: number
      qtyMinGrosir: number
      isDeleted: boolean
      deletedAt: Date | null
    }, ExtArgs["result"]["produk"]>
    composites: {}
  }

  type ProdukGetPayload<S extends boolean | null | undefined | ProdukDefaultArgs> = $Result.GetResult<Prisma.$ProdukPayload, S>

  type ProdukCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdukFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdukCountAggregateInputType | true
    }

  export interface ProdukDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produk'], meta: { name: 'Produk' } }
    /**
     * Find zero or one Produk that matches the filter.
     * @param {ProdukFindUniqueArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdukFindUniqueArgs>(args: SelectSubset<T, ProdukFindUniqueArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Produk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdukFindUniqueOrThrowArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdukFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdukFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Produk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukFindFirstArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdukFindFirstArgs>(args?: SelectSubset<T, ProdukFindFirstArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Produk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukFindFirstOrThrowArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdukFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdukFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Produks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produks
     * const produks = await prisma.produk.findMany()
     * 
     * // Get first 10 Produks
     * const produks = await prisma.produk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produkWithIdOnly = await prisma.produk.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProdukFindManyArgs>(args?: SelectSubset<T, ProdukFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Produk.
     * @param {ProdukCreateArgs} args - Arguments to create a Produk.
     * @example
     * // Create one Produk
     * const Produk = await prisma.produk.create({
     *   data: {
     *     // ... data to create a Produk
     *   }
     * })
     * 
     */
    create<T extends ProdukCreateArgs>(args: SelectSubset<T, ProdukCreateArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Produks.
     * @param {ProdukCreateManyArgs} args - Arguments to create many Produks.
     * @example
     * // Create many Produks
     * const produk = await prisma.produk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdukCreateManyArgs>(args?: SelectSubset<T, ProdukCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produks and returns the data saved in the database.
     * @param {ProdukCreateManyAndReturnArgs} args - Arguments to create many Produks.
     * @example
     * // Create many Produks
     * const produk = await prisma.produk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produks and only return the `id`
     * const produkWithIdOnly = await prisma.produk.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProdukCreateManyAndReturnArgs>(args?: SelectSubset<T, ProdukCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Produk.
     * @param {ProdukDeleteArgs} args - Arguments to delete one Produk.
     * @example
     * // Delete one Produk
     * const Produk = await prisma.produk.delete({
     *   where: {
     *     // ... filter to delete one Produk
     *   }
     * })
     * 
     */
    delete<T extends ProdukDeleteArgs>(args: SelectSubset<T, ProdukDeleteArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Produk.
     * @param {ProdukUpdateArgs} args - Arguments to update one Produk.
     * @example
     * // Update one Produk
     * const produk = await prisma.produk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdukUpdateArgs>(args: SelectSubset<T, ProdukUpdateArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Produks.
     * @param {ProdukDeleteManyArgs} args - Arguments to filter Produks to delete.
     * @example
     * // Delete a few Produks
     * const { count } = await prisma.produk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdukDeleteManyArgs>(args?: SelectSubset<T, ProdukDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produks
     * const produk = await prisma.produk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdukUpdateManyArgs>(args: SelectSubset<T, ProdukUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produks and returns the data updated in the database.
     * @param {ProdukUpdateManyAndReturnArgs} args - Arguments to update many Produks.
     * @example
     * // Update many Produks
     * const produk = await prisma.produk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produks and only return the `id`
     * const produkWithIdOnly = await prisma.produk.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProdukUpdateManyAndReturnArgs>(args: SelectSubset<T, ProdukUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Produk.
     * @param {ProdukUpsertArgs} args - Arguments to update or create a Produk.
     * @example
     * // Update or create a Produk
     * const produk = await prisma.produk.upsert({
     *   create: {
     *     // ... data to create a Produk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produk we want to update
     *   }
     * })
     */
    upsert<T extends ProdukUpsertArgs>(args: SelectSubset<T, ProdukUpsertArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukCountArgs} args - Arguments to filter Produks to count.
     * @example
     * // Count the number of Produks
     * const count = await prisma.produk.count({
     *   where: {
     *     // ... the filter for the Produks we want to count
     *   }
     * })
    **/
    count<T extends ProdukCountArgs>(
      args?: Subset<T, ProdukCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdukCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdukAggregateArgs>(args: Subset<T, ProdukAggregateArgs>): Prisma.PrismaPromise<GetProdukAggregateType<T>>

    /**
     * Group by Produk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukGroupByArgs} args - Group by arguments.
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
      T extends ProdukGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdukGroupByArgs['orderBy'] }
        : { orderBy?: ProdukGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProdukGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdukGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produk model
   */
  readonly fields: ProdukFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdukClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kategori<T extends KategoriDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KategoriDefaultArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    Stok<T extends Produk$StokArgs<ExtArgs> = {}>(args?: Subset<T, Produk$StokArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    PembelianDetail<T extends Produk$PembelianDetailArgs<ExtArgs> = {}>(args?: Subset<T, Produk$PembelianDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembelianDetailPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    PenjualanDetail<T extends Produk$PenjualanDetailArgs<ExtArgs> = {}>(args?: Subset<T, Produk$PenjualanDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenjualanDetailPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Produk model
   */ 
  interface ProdukFieldRefs {
    readonly id: FieldRef<"Produk", 'Int'>
    readonly nama: FieldRef<"Produk", 'String'>
    readonly kategoriId: FieldRef<"Produk", 'Int'>
    readonly hargaBeli: FieldRef<"Produk", 'Int'>
    readonly hargaJualRetail: FieldRef<"Produk", 'Int'>
    readonly hargaJualGrosir: FieldRef<"Produk", 'Int'>
    readonly qtyMinGrosir: FieldRef<"Produk", 'Int'>
    readonly isDeleted: FieldRef<"Produk", 'Boolean'>
    readonly deletedAt: FieldRef<"Produk", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Produk findUnique
   */
  export type ProdukFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter, which Produk to fetch.
     */
    where: ProdukWhereUniqueInput
  }

  /**
   * Produk findUniqueOrThrow
   */
  export type ProdukFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter, which Produk to fetch.
     */
    where: ProdukWhereUniqueInput
  }

  /**
   * Produk findFirst
   */
  export type ProdukFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter, which Produk to fetch.
     */
    where?: ProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produks to fetch.
     */
    orderBy?: ProdukOrderByWithRelationInput | ProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produks.
     */
    cursor?: ProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produks.
     */
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * Produk findFirstOrThrow
   */
  export type ProdukFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter, which Produk to fetch.
     */
    where?: ProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produks to fetch.
     */
    orderBy?: ProdukOrderByWithRelationInput | ProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produks.
     */
    cursor?: ProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produks.
     */
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * Produk findMany
   */
  export type ProdukFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter, which Produks to fetch.
     */
    where?: ProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produks to fetch.
     */
    orderBy?: ProdukOrderByWithRelationInput | ProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produks.
     */
    cursor?: ProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produks.
     */
    skip?: number
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * Produk create
   */
  export type ProdukCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * The data needed to create a Produk.
     */
    data: XOR<ProdukCreateInput, ProdukUncheckedCreateInput>
  }

  /**
   * Produk createMany
   */
  export type ProdukCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produks.
     */
    data: ProdukCreateManyInput | ProdukCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produk createManyAndReturn
   */
  export type ProdukCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * The data used to create many Produks.
     */
    data: ProdukCreateManyInput | ProdukCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produk update
   */
  export type ProdukUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * The data needed to update a Produk.
     */
    data: XOR<ProdukUpdateInput, ProdukUncheckedUpdateInput>
    /**
     * Choose, which Produk to update.
     */
    where: ProdukWhereUniqueInput
  }

  /**
   * Produk updateMany
   */
  export type ProdukUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produks.
     */
    data: XOR<ProdukUpdateManyMutationInput, ProdukUncheckedUpdateManyInput>
    /**
     * Filter which Produks to update
     */
    where?: ProdukWhereInput
    /**
     * Limit how many Produks to update.
     */
    limit?: number
  }

  /**
   * Produk updateManyAndReturn
   */
  export type ProdukUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * The data used to update Produks.
     */
    data: XOR<ProdukUpdateManyMutationInput, ProdukUncheckedUpdateManyInput>
    /**
     * Filter which Produks to update
     */
    where?: ProdukWhereInput
    /**
     * Limit how many Produks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produk upsert
   */
  export type ProdukUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * The filter to search for the Produk to update in case it exists.
     */
    where: ProdukWhereUniqueInput
    /**
     * In case the Produk found by the `where` argument doesn't exist, create a new Produk with this data.
     */
    create: XOR<ProdukCreateInput, ProdukUncheckedCreateInput>
    /**
     * In case the Produk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdukUpdateInput, ProdukUncheckedUpdateInput>
  }

  /**
   * Produk delete
   */
  export type ProdukDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter which Produk to delete.
     */
    where: ProdukWhereUniqueInput
  }

  /**
   * Produk deleteMany
   */
  export type ProdukDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produks to delete
     */
    where?: ProdukWhereInput
    /**
     * Limit how many Produks to delete.
     */
    limit?: number
  }

  /**
   * Produk.Stok
   */
  export type Produk$StokArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
    where?: StokWhereInput
    orderBy?: StokOrderByWithRelationInput | StokOrderByWithRelationInput[]
    cursor?: StokWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StokScalarFieldEnum | StokScalarFieldEnum[]
  }

  /**
   * Produk.PembelianDetail
   */
  export type Produk$PembelianDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembelianDetail
     */
    select?: PembelianDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PembelianDetail
     */
    omit?: PembelianDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianDetailInclude<ExtArgs> | null
    where?: PembelianDetailWhereInput
    orderBy?: PembelianDetailOrderByWithRelationInput | PembelianDetailOrderByWithRelationInput[]
    cursor?: PembelianDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PembelianDetailScalarFieldEnum | PembelianDetailScalarFieldEnum[]
  }

  /**
   * Produk.PenjualanDetail
   */
  export type Produk$PenjualanDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenjualanDetail
     */
    select?: PenjualanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PenjualanDetail
     */
    omit?: PenjualanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualanDetailInclude<ExtArgs> | null
    where?: PenjualanDetailWhereInput
    orderBy?: PenjualanDetailOrderByWithRelationInput | PenjualanDetailOrderByWithRelationInput[]
    cursor?: PenjualanDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PenjualanDetailScalarFieldEnum | PenjualanDetailScalarFieldEnum[]
  }

  /**
   * Produk without action
   */
  export type ProdukDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
  }


  /**
   * Model Stok
   */

  export type AggregateStok = {
    _count: StokCountAggregateOutputType | null
    _avg: StokAvgAggregateOutputType | null
    _sum: StokSumAggregateOutputType | null
    _min: StokMinAggregateOutputType | null
    _max: StokMaxAggregateOutputType | null
  }

  export type StokAvgAggregateOutputType = {
    id: number | null
    produkId: number | null
    qty: number | null
  }

  export type StokSumAggregateOutputType = {
    id: number | null
    produkId: number | null
    qty: number | null
  }

  export type StokMinAggregateOutputType = {
    id: number | null
    produkId: number | null
    serialNumber: string | null
    expiredDate: Date | null
    qty: number | null
    status: $Enums.StatusStok | null
    createdAt: Date | null
  }

  export type StokMaxAggregateOutputType = {
    id: number | null
    produkId: number | null
    serialNumber: string | null
    expiredDate: Date | null
    qty: number | null
    status: $Enums.StatusStok | null
    createdAt: Date | null
  }

  export type StokCountAggregateOutputType = {
    id: number
    produkId: number
    serialNumber: number
    expiredDate: number
    qty: number
    status: number
    createdAt: number
    _all: number
  }


  export type StokAvgAggregateInputType = {
    id?: true
    produkId?: true
    qty?: true
  }

  export type StokSumAggregateInputType = {
    id?: true
    produkId?: true
    qty?: true
  }

  export type StokMinAggregateInputType = {
    id?: true
    produkId?: true
    serialNumber?: true
    expiredDate?: true
    qty?: true
    status?: true
    createdAt?: true
  }

  export type StokMaxAggregateInputType = {
    id?: true
    produkId?: true
    serialNumber?: true
    expiredDate?: true
    qty?: true
    status?: true
    createdAt?: true
  }

  export type StokCountAggregateInputType = {
    id?: true
    produkId?: true
    serialNumber?: true
    expiredDate?: true
    qty?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type StokAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stok to aggregate.
     */
    where?: StokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stoks to fetch.
     */
    orderBy?: StokOrderByWithRelationInput | StokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stoks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stoks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stoks
    **/
    _count?: true | StokCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StokAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StokSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StokMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StokMaxAggregateInputType
  }

  export type GetStokAggregateType<T extends StokAggregateArgs> = {
        [P in keyof T & keyof AggregateStok]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStok[P]>
      : GetScalarType<T[P], AggregateStok[P]>
  }




  export type StokGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StokWhereInput
    orderBy?: StokOrderByWithAggregationInput | StokOrderByWithAggregationInput[]
    by: StokScalarFieldEnum[] | StokScalarFieldEnum
    having?: StokScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StokCountAggregateInputType | true
    _avg?: StokAvgAggregateInputType
    _sum?: StokSumAggregateInputType
    _min?: StokMinAggregateInputType
    _max?: StokMaxAggregateInputType
  }

  export type StokGroupByOutputType = {
    id: number
    produkId: number
    serialNumber: string | null
    expiredDate: Date | null
    qty: number
    status: $Enums.StatusStok
    createdAt: Date
    _count: StokCountAggregateOutputType | null
    _avg: StokAvgAggregateOutputType | null
    _sum: StokSumAggregateOutputType | null
    _min: StokMinAggregateOutputType | null
    _max: StokMaxAggregateOutputType | null
  }

  type GetStokGroupByPayload<T extends StokGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StokGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StokGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StokGroupByOutputType[P]>
            : GetScalarType<T[P], StokGroupByOutputType[P]>
        }
      >
    >


  export type StokSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produkId?: boolean
    serialNumber?: boolean
    expiredDate?: boolean
    qty?: boolean
    status?: boolean
    createdAt?: boolean
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
    PenjualanDetail?: boolean | Stok$PenjualanDetailArgs<ExtArgs>
    _count?: boolean | StokCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stok"]>

  export type StokSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produkId?: boolean
    serialNumber?: boolean
    expiredDate?: boolean
    qty?: boolean
    status?: boolean
    createdAt?: boolean
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stok"]>

  export type StokSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produkId?: boolean
    serialNumber?: boolean
    expiredDate?: boolean
    qty?: boolean
    status?: boolean
    createdAt?: boolean
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stok"]>

  export type StokSelectScalar = {
    id?: boolean
    produkId?: boolean
    serialNumber?: boolean
    expiredDate?: boolean
    qty?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type StokOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "produkId" | "serialNumber" | "expiredDate" | "qty" | "status" | "createdAt", ExtArgs["result"]["stok"]>
  export type StokInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
    PenjualanDetail?: boolean | Stok$PenjualanDetailArgs<ExtArgs>
    _count?: boolean | StokCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StokIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }
  export type StokIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }

  export type $StokPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stok"
    objects: {
      produk: Prisma.$ProdukPayload<ExtArgs>
      PenjualanDetail: Prisma.$PenjualanDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      produkId: number
      serialNumber: string | null
      expiredDate: Date | null
      qty: number
      status: $Enums.StatusStok
      createdAt: Date
    }, ExtArgs["result"]["stok"]>
    composites: {}
  }

  type StokGetPayload<S extends boolean | null | undefined | StokDefaultArgs> = $Result.GetResult<Prisma.$StokPayload, S>

  type StokCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StokFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StokCountAggregateInputType | true
    }

  export interface StokDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stok'], meta: { name: 'Stok' } }
    /**
     * Find zero or one Stok that matches the filter.
     * @param {StokFindUniqueArgs} args - Arguments to find a Stok
     * @example
     * // Get one Stok
     * const stok = await prisma.stok.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StokFindUniqueArgs>(args: SelectSubset<T, StokFindUniqueArgs<ExtArgs>>): Prisma__StokClient<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Stok that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StokFindUniqueOrThrowArgs} args - Arguments to find a Stok
     * @example
     * // Get one Stok
     * const stok = await prisma.stok.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StokFindUniqueOrThrowArgs>(args: SelectSubset<T, StokFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StokClient<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Stok that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokFindFirstArgs} args - Arguments to find a Stok
     * @example
     * // Get one Stok
     * const stok = await prisma.stok.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StokFindFirstArgs>(args?: SelectSubset<T, StokFindFirstArgs<ExtArgs>>): Prisma__StokClient<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Stok that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokFindFirstOrThrowArgs} args - Arguments to find a Stok
     * @example
     * // Get one Stok
     * const stok = await prisma.stok.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StokFindFirstOrThrowArgs>(args?: SelectSubset<T, StokFindFirstOrThrowArgs<ExtArgs>>): Prisma__StokClient<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Stoks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stoks
     * const stoks = await prisma.stok.findMany()
     * 
     * // Get first 10 Stoks
     * const stoks = await prisma.stok.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stokWithIdOnly = await prisma.stok.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StokFindManyArgs>(args?: SelectSubset<T, StokFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Stok.
     * @param {StokCreateArgs} args - Arguments to create a Stok.
     * @example
     * // Create one Stok
     * const Stok = await prisma.stok.create({
     *   data: {
     *     // ... data to create a Stok
     *   }
     * })
     * 
     */
    create<T extends StokCreateArgs>(args: SelectSubset<T, StokCreateArgs<ExtArgs>>): Prisma__StokClient<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Stoks.
     * @param {StokCreateManyArgs} args - Arguments to create many Stoks.
     * @example
     * // Create many Stoks
     * const stok = await prisma.stok.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StokCreateManyArgs>(args?: SelectSubset<T, StokCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stoks and returns the data saved in the database.
     * @param {StokCreateManyAndReturnArgs} args - Arguments to create many Stoks.
     * @example
     * // Create many Stoks
     * const stok = await prisma.stok.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stoks and only return the `id`
     * const stokWithIdOnly = await prisma.stok.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StokCreateManyAndReturnArgs>(args?: SelectSubset<T, StokCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Stok.
     * @param {StokDeleteArgs} args - Arguments to delete one Stok.
     * @example
     * // Delete one Stok
     * const Stok = await prisma.stok.delete({
     *   where: {
     *     // ... filter to delete one Stok
     *   }
     * })
     * 
     */
    delete<T extends StokDeleteArgs>(args: SelectSubset<T, StokDeleteArgs<ExtArgs>>): Prisma__StokClient<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Stok.
     * @param {StokUpdateArgs} args - Arguments to update one Stok.
     * @example
     * // Update one Stok
     * const stok = await prisma.stok.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StokUpdateArgs>(args: SelectSubset<T, StokUpdateArgs<ExtArgs>>): Prisma__StokClient<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Stoks.
     * @param {StokDeleteManyArgs} args - Arguments to filter Stoks to delete.
     * @example
     * // Delete a few Stoks
     * const { count } = await prisma.stok.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StokDeleteManyArgs>(args?: SelectSubset<T, StokDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stoks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stoks
     * const stok = await prisma.stok.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StokUpdateManyArgs>(args: SelectSubset<T, StokUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stoks and returns the data updated in the database.
     * @param {StokUpdateManyAndReturnArgs} args - Arguments to update many Stoks.
     * @example
     * // Update many Stoks
     * const stok = await prisma.stok.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stoks and only return the `id`
     * const stokWithIdOnly = await prisma.stok.updateManyAndReturn({
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
    updateManyAndReturn<T extends StokUpdateManyAndReturnArgs>(args: SelectSubset<T, StokUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Stok.
     * @param {StokUpsertArgs} args - Arguments to update or create a Stok.
     * @example
     * // Update or create a Stok
     * const stok = await prisma.stok.upsert({
     *   create: {
     *     // ... data to create a Stok
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stok we want to update
     *   }
     * })
     */
    upsert<T extends StokUpsertArgs>(args: SelectSubset<T, StokUpsertArgs<ExtArgs>>): Prisma__StokClient<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Stoks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokCountArgs} args - Arguments to filter Stoks to count.
     * @example
     * // Count the number of Stoks
     * const count = await prisma.stok.count({
     *   where: {
     *     // ... the filter for the Stoks we want to count
     *   }
     * })
    **/
    count<T extends StokCountArgs>(
      args?: Subset<T, StokCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StokCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stok.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StokAggregateArgs>(args: Subset<T, StokAggregateArgs>): Prisma.PrismaPromise<GetStokAggregateType<T>>

    /**
     * Group by Stok.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokGroupByArgs} args - Group by arguments.
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
      T extends StokGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StokGroupByArgs['orderBy'] }
        : { orderBy?: StokGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StokGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStokGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stok model
   */
  readonly fields: StokFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stok.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StokClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produk<T extends ProdukDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdukDefaultArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    PenjualanDetail<T extends Stok$PenjualanDetailArgs<ExtArgs> = {}>(args?: Subset<T, Stok$PenjualanDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenjualanDetailPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Stok model
   */ 
  interface StokFieldRefs {
    readonly id: FieldRef<"Stok", 'Int'>
    readonly produkId: FieldRef<"Stok", 'Int'>
    readonly serialNumber: FieldRef<"Stok", 'String'>
    readonly expiredDate: FieldRef<"Stok", 'DateTime'>
    readonly qty: FieldRef<"Stok", 'Int'>
    readonly status: FieldRef<"Stok", 'StatusStok'>
    readonly createdAt: FieldRef<"Stok", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Stok findUnique
   */
  export type StokFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
    /**
     * Filter, which Stok to fetch.
     */
    where: StokWhereUniqueInput
  }

  /**
   * Stok findUniqueOrThrow
   */
  export type StokFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
    /**
     * Filter, which Stok to fetch.
     */
    where: StokWhereUniqueInput
  }

  /**
   * Stok findFirst
   */
  export type StokFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
    /**
     * Filter, which Stok to fetch.
     */
    where?: StokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stoks to fetch.
     */
    orderBy?: StokOrderByWithRelationInput | StokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stoks.
     */
    cursor?: StokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stoks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stoks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stoks.
     */
    distinct?: StokScalarFieldEnum | StokScalarFieldEnum[]
  }

  /**
   * Stok findFirstOrThrow
   */
  export type StokFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
    /**
     * Filter, which Stok to fetch.
     */
    where?: StokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stoks to fetch.
     */
    orderBy?: StokOrderByWithRelationInput | StokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stoks.
     */
    cursor?: StokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stoks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stoks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stoks.
     */
    distinct?: StokScalarFieldEnum | StokScalarFieldEnum[]
  }

  /**
   * Stok findMany
   */
  export type StokFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
    /**
     * Filter, which Stoks to fetch.
     */
    where?: StokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stoks to fetch.
     */
    orderBy?: StokOrderByWithRelationInput | StokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stoks.
     */
    cursor?: StokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stoks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stoks.
     */
    skip?: number
    distinct?: StokScalarFieldEnum | StokScalarFieldEnum[]
  }

  /**
   * Stok create
   */
  export type StokCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
    /**
     * The data needed to create a Stok.
     */
    data: XOR<StokCreateInput, StokUncheckedCreateInput>
  }

  /**
   * Stok createMany
   */
  export type StokCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stoks.
     */
    data: StokCreateManyInput | StokCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stok createManyAndReturn
   */
  export type StokCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * The data used to create many Stoks.
     */
    data: StokCreateManyInput | StokCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stok update
   */
  export type StokUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
    /**
     * The data needed to update a Stok.
     */
    data: XOR<StokUpdateInput, StokUncheckedUpdateInput>
    /**
     * Choose, which Stok to update.
     */
    where: StokWhereUniqueInput
  }

  /**
   * Stok updateMany
   */
  export type StokUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stoks.
     */
    data: XOR<StokUpdateManyMutationInput, StokUncheckedUpdateManyInput>
    /**
     * Filter which Stoks to update
     */
    where?: StokWhereInput
    /**
     * Limit how many Stoks to update.
     */
    limit?: number
  }

  /**
   * Stok updateManyAndReturn
   */
  export type StokUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * The data used to update Stoks.
     */
    data: XOR<StokUpdateManyMutationInput, StokUncheckedUpdateManyInput>
    /**
     * Filter which Stoks to update
     */
    where?: StokWhereInput
    /**
     * Limit how many Stoks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stok upsert
   */
  export type StokUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
    /**
     * The filter to search for the Stok to update in case it exists.
     */
    where: StokWhereUniqueInput
    /**
     * In case the Stok found by the `where` argument doesn't exist, create a new Stok with this data.
     */
    create: XOR<StokCreateInput, StokUncheckedCreateInput>
    /**
     * In case the Stok was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StokUpdateInput, StokUncheckedUpdateInput>
  }

  /**
   * Stok delete
   */
  export type StokDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
    /**
     * Filter which Stok to delete.
     */
    where: StokWhereUniqueInput
  }

  /**
   * Stok deleteMany
   */
  export type StokDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stoks to delete
     */
    where?: StokWhereInput
    /**
     * Limit how many Stoks to delete.
     */
    limit?: number
  }

  /**
   * Stok.PenjualanDetail
   */
  export type Stok$PenjualanDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenjualanDetail
     */
    select?: PenjualanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PenjualanDetail
     */
    omit?: PenjualanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualanDetailInclude<ExtArgs> | null
    where?: PenjualanDetailWhereInput
    orderBy?: PenjualanDetailOrderByWithRelationInput | PenjualanDetailOrderByWithRelationInput[]
    cursor?: PenjualanDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PenjualanDetailScalarFieldEnum | PenjualanDetailScalarFieldEnum[]
  }

  /**
   * Stok without action
   */
  export type StokDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
  }


  /**
   * Model Penjualan
   */

  export type AggregatePenjualan = {
    _count: PenjualanCountAggregateOutputType | null
    _avg: PenjualanAvgAggregateOutputType | null
    _sum: PenjualanSumAggregateOutputType | null
    _min: PenjualanMinAggregateOutputType | null
    _max: PenjualanMaxAggregateOutputType | null
  }

  export type PenjualanAvgAggregateOutputType = {
    id: number | null
    total: number | null
    kasirId: number | null
    metodeBayarId: number | null
  }

  export type PenjualanSumAggregateOutputType = {
    id: number | null
    total: number | null
    kasirId: number | null
    metodeBayarId: number | null
  }

  export type PenjualanMinAggregateOutputType = {
    id: number | null
    tanggal: Date | null
    total: number | null
    kasirId: number | null
    metodeBayarId: number | null
    createdAt: Date | null
  }

  export type PenjualanMaxAggregateOutputType = {
    id: number | null
    tanggal: Date | null
    total: number | null
    kasirId: number | null
    metodeBayarId: number | null
    createdAt: Date | null
  }

  export type PenjualanCountAggregateOutputType = {
    id: number
    tanggal: number
    total: number
    kasirId: number
    metodeBayarId: number
    createdAt: number
    _all: number
  }


  export type PenjualanAvgAggregateInputType = {
    id?: true
    total?: true
    kasirId?: true
    metodeBayarId?: true
  }

  export type PenjualanSumAggregateInputType = {
    id?: true
    total?: true
    kasirId?: true
    metodeBayarId?: true
  }

  export type PenjualanMinAggregateInputType = {
    id?: true
    tanggal?: true
    total?: true
    kasirId?: true
    metodeBayarId?: true
    createdAt?: true
  }

  export type PenjualanMaxAggregateInputType = {
    id?: true
    tanggal?: true
    total?: true
    kasirId?: true
    metodeBayarId?: true
    createdAt?: true
  }

  export type PenjualanCountAggregateInputType = {
    id?: true
    tanggal?: true
    total?: true
    kasirId?: true
    metodeBayarId?: true
    createdAt?: true
    _all?: true
  }

  export type PenjualanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Penjualan to aggregate.
     */
    where?: PenjualanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penjualans to fetch.
     */
    orderBy?: PenjualanOrderByWithRelationInput | PenjualanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PenjualanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penjualans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penjualans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Penjualans
    **/
    _count?: true | PenjualanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PenjualanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PenjualanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PenjualanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PenjualanMaxAggregateInputType
  }

  export type GetPenjualanAggregateType<T extends PenjualanAggregateArgs> = {
        [P in keyof T & keyof AggregatePenjualan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePenjualan[P]>
      : GetScalarType<T[P], AggregatePenjualan[P]>
  }




  export type PenjualanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PenjualanWhereInput
    orderBy?: PenjualanOrderByWithAggregationInput | PenjualanOrderByWithAggregationInput[]
    by: PenjualanScalarFieldEnum[] | PenjualanScalarFieldEnum
    having?: PenjualanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PenjualanCountAggregateInputType | true
    _avg?: PenjualanAvgAggregateInputType
    _sum?: PenjualanSumAggregateInputType
    _min?: PenjualanMinAggregateInputType
    _max?: PenjualanMaxAggregateInputType
  }

  export type PenjualanGroupByOutputType = {
    id: number
    tanggal: Date
    total: number
    kasirId: number
    metodeBayarId: number
    createdAt: Date
    _count: PenjualanCountAggregateOutputType | null
    _avg: PenjualanAvgAggregateOutputType | null
    _sum: PenjualanSumAggregateOutputType | null
    _min: PenjualanMinAggregateOutputType | null
    _max: PenjualanMaxAggregateOutputType | null
  }

  type GetPenjualanGroupByPayload<T extends PenjualanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PenjualanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PenjualanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PenjualanGroupByOutputType[P]>
            : GetScalarType<T[P], PenjualanGroupByOutputType[P]>
        }
      >
    >


  export type PenjualanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    total?: boolean
    kasirId?: boolean
    metodeBayarId?: boolean
    createdAt?: boolean
    kasir?: boolean | PenggunaDefaultArgs<ExtArgs>
    metodeBayar?: boolean | MetodeBayarDefaultArgs<ExtArgs>
    PenjualanDetail?: boolean | Penjualan$PenjualanDetailArgs<ExtArgs>
    _count?: boolean | PenjualanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penjualan"]>

  export type PenjualanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    total?: boolean
    kasirId?: boolean
    metodeBayarId?: boolean
    createdAt?: boolean
    kasir?: boolean | PenggunaDefaultArgs<ExtArgs>
    metodeBayar?: boolean | MetodeBayarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penjualan"]>

  export type PenjualanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    total?: boolean
    kasirId?: boolean
    metodeBayarId?: boolean
    createdAt?: boolean
    kasir?: boolean | PenggunaDefaultArgs<ExtArgs>
    metodeBayar?: boolean | MetodeBayarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penjualan"]>

  export type PenjualanSelectScalar = {
    id?: boolean
    tanggal?: boolean
    total?: boolean
    kasirId?: boolean
    metodeBayarId?: boolean
    createdAt?: boolean
  }

  export type PenjualanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tanggal" | "total" | "kasirId" | "metodeBayarId" | "createdAt", ExtArgs["result"]["penjualan"]>
  export type PenjualanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kasir?: boolean | PenggunaDefaultArgs<ExtArgs>
    metodeBayar?: boolean | MetodeBayarDefaultArgs<ExtArgs>
    PenjualanDetail?: boolean | Penjualan$PenjualanDetailArgs<ExtArgs>
    _count?: boolean | PenjualanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PenjualanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kasir?: boolean | PenggunaDefaultArgs<ExtArgs>
    metodeBayar?: boolean | MetodeBayarDefaultArgs<ExtArgs>
  }
  export type PenjualanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kasir?: boolean | PenggunaDefaultArgs<ExtArgs>
    metodeBayar?: boolean | MetodeBayarDefaultArgs<ExtArgs>
  }

  export type $PenjualanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Penjualan"
    objects: {
      kasir: Prisma.$PenggunaPayload<ExtArgs>
      metodeBayar: Prisma.$MetodeBayarPayload<ExtArgs>
      PenjualanDetail: Prisma.$PenjualanDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tanggal: Date
      total: number
      kasirId: number
      metodeBayarId: number
      createdAt: Date
    }, ExtArgs["result"]["penjualan"]>
    composites: {}
  }

  type PenjualanGetPayload<S extends boolean | null | undefined | PenjualanDefaultArgs> = $Result.GetResult<Prisma.$PenjualanPayload, S>

  type PenjualanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PenjualanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PenjualanCountAggregateInputType | true
    }

  export interface PenjualanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Penjualan'], meta: { name: 'Penjualan' } }
    /**
     * Find zero or one Penjualan that matches the filter.
     * @param {PenjualanFindUniqueArgs} args - Arguments to find a Penjualan
     * @example
     * // Get one Penjualan
     * const penjualan = await prisma.penjualan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PenjualanFindUniqueArgs>(args: SelectSubset<T, PenjualanFindUniqueArgs<ExtArgs>>): Prisma__PenjualanClient<$Result.GetResult<Prisma.$PenjualanPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Penjualan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PenjualanFindUniqueOrThrowArgs} args - Arguments to find a Penjualan
     * @example
     * // Get one Penjualan
     * const penjualan = await prisma.penjualan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PenjualanFindUniqueOrThrowArgs>(args: SelectSubset<T, PenjualanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PenjualanClient<$Result.GetResult<Prisma.$PenjualanPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Penjualan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjualanFindFirstArgs} args - Arguments to find a Penjualan
     * @example
     * // Get one Penjualan
     * const penjualan = await prisma.penjualan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PenjualanFindFirstArgs>(args?: SelectSubset<T, PenjualanFindFirstArgs<ExtArgs>>): Prisma__PenjualanClient<$Result.GetResult<Prisma.$PenjualanPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Penjualan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjualanFindFirstOrThrowArgs} args - Arguments to find a Penjualan
     * @example
     * // Get one Penjualan
     * const penjualan = await prisma.penjualan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PenjualanFindFirstOrThrowArgs>(args?: SelectSubset<T, PenjualanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PenjualanClient<$Result.GetResult<Prisma.$PenjualanPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Penjualans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjualanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Penjualans
     * const penjualans = await prisma.penjualan.findMany()
     * 
     * // Get first 10 Penjualans
     * const penjualans = await prisma.penjualan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const penjualanWithIdOnly = await prisma.penjualan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PenjualanFindManyArgs>(args?: SelectSubset<T, PenjualanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenjualanPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Penjualan.
     * @param {PenjualanCreateArgs} args - Arguments to create a Penjualan.
     * @example
     * // Create one Penjualan
     * const Penjualan = await prisma.penjualan.create({
     *   data: {
     *     // ... data to create a Penjualan
     *   }
     * })
     * 
     */
    create<T extends PenjualanCreateArgs>(args: SelectSubset<T, PenjualanCreateArgs<ExtArgs>>): Prisma__PenjualanClient<$Result.GetResult<Prisma.$PenjualanPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Penjualans.
     * @param {PenjualanCreateManyArgs} args - Arguments to create many Penjualans.
     * @example
     * // Create many Penjualans
     * const penjualan = await prisma.penjualan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PenjualanCreateManyArgs>(args?: SelectSubset<T, PenjualanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Penjualans and returns the data saved in the database.
     * @param {PenjualanCreateManyAndReturnArgs} args - Arguments to create many Penjualans.
     * @example
     * // Create many Penjualans
     * const penjualan = await prisma.penjualan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Penjualans and only return the `id`
     * const penjualanWithIdOnly = await prisma.penjualan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PenjualanCreateManyAndReturnArgs>(args?: SelectSubset<T, PenjualanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenjualanPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Penjualan.
     * @param {PenjualanDeleteArgs} args - Arguments to delete one Penjualan.
     * @example
     * // Delete one Penjualan
     * const Penjualan = await prisma.penjualan.delete({
     *   where: {
     *     // ... filter to delete one Penjualan
     *   }
     * })
     * 
     */
    delete<T extends PenjualanDeleteArgs>(args: SelectSubset<T, PenjualanDeleteArgs<ExtArgs>>): Prisma__PenjualanClient<$Result.GetResult<Prisma.$PenjualanPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Penjualan.
     * @param {PenjualanUpdateArgs} args - Arguments to update one Penjualan.
     * @example
     * // Update one Penjualan
     * const penjualan = await prisma.penjualan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PenjualanUpdateArgs>(args: SelectSubset<T, PenjualanUpdateArgs<ExtArgs>>): Prisma__PenjualanClient<$Result.GetResult<Prisma.$PenjualanPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Penjualans.
     * @param {PenjualanDeleteManyArgs} args - Arguments to filter Penjualans to delete.
     * @example
     * // Delete a few Penjualans
     * const { count } = await prisma.penjualan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PenjualanDeleteManyArgs>(args?: SelectSubset<T, PenjualanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penjualans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjualanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Penjualans
     * const penjualan = await prisma.penjualan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PenjualanUpdateManyArgs>(args: SelectSubset<T, PenjualanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penjualans and returns the data updated in the database.
     * @param {PenjualanUpdateManyAndReturnArgs} args - Arguments to update many Penjualans.
     * @example
     * // Update many Penjualans
     * const penjualan = await prisma.penjualan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Penjualans and only return the `id`
     * const penjualanWithIdOnly = await prisma.penjualan.updateManyAndReturn({
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
    updateManyAndReturn<T extends PenjualanUpdateManyAndReturnArgs>(args: SelectSubset<T, PenjualanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenjualanPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Penjualan.
     * @param {PenjualanUpsertArgs} args - Arguments to update or create a Penjualan.
     * @example
     * // Update or create a Penjualan
     * const penjualan = await prisma.penjualan.upsert({
     *   create: {
     *     // ... data to create a Penjualan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Penjualan we want to update
     *   }
     * })
     */
    upsert<T extends PenjualanUpsertArgs>(args: SelectSubset<T, PenjualanUpsertArgs<ExtArgs>>): Prisma__PenjualanClient<$Result.GetResult<Prisma.$PenjualanPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Penjualans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjualanCountArgs} args - Arguments to filter Penjualans to count.
     * @example
     * // Count the number of Penjualans
     * const count = await prisma.penjualan.count({
     *   where: {
     *     // ... the filter for the Penjualans we want to count
     *   }
     * })
    **/
    count<T extends PenjualanCountArgs>(
      args?: Subset<T, PenjualanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PenjualanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Penjualan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjualanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PenjualanAggregateArgs>(args: Subset<T, PenjualanAggregateArgs>): Prisma.PrismaPromise<GetPenjualanAggregateType<T>>

    /**
     * Group by Penjualan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjualanGroupByArgs} args - Group by arguments.
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
      T extends PenjualanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PenjualanGroupByArgs['orderBy'] }
        : { orderBy?: PenjualanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PenjualanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPenjualanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Penjualan model
   */
  readonly fields: PenjualanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Penjualan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PenjualanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kasir<T extends PenggunaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PenggunaDefaultArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    metodeBayar<T extends MetodeBayarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MetodeBayarDefaultArgs<ExtArgs>>): Prisma__MetodeBayarClient<$Result.GetResult<Prisma.$MetodeBayarPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    PenjualanDetail<T extends Penjualan$PenjualanDetailArgs<ExtArgs> = {}>(args?: Subset<T, Penjualan$PenjualanDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenjualanDetailPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Penjualan model
   */ 
  interface PenjualanFieldRefs {
    readonly id: FieldRef<"Penjualan", 'Int'>
    readonly tanggal: FieldRef<"Penjualan", 'DateTime'>
    readonly total: FieldRef<"Penjualan", 'Int'>
    readonly kasirId: FieldRef<"Penjualan", 'Int'>
    readonly metodeBayarId: FieldRef<"Penjualan", 'Int'>
    readonly createdAt: FieldRef<"Penjualan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Penjualan findUnique
   */
  export type PenjualanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjualan
     */
    select?: PenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penjualan
     */
    omit?: PenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualanInclude<ExtArgs> | null
    /**
     * Filter, which Penjualan to fetch.
     */
    where: PenjualanWhereUniqueInput
  }

  /**
   * Penjualan findUniqueOrThrow
   */
  export type PenjualanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjualan
     */
    select?: PenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penjualan
     */
    omit?: PenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualanInclude<ExtArgs> | null
    /**
     * Filter, which Penjualan to fetch.
     */
    where: PenjualanWhereUniqueInput
  }

  /**
   * Penjualan findFirst
   */
  export type PenjualanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjualan
     */
    select?: PenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penjualan
     */
    omit?: PenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualanInclude<ExtArgs> | null
    /**
     * Filter, which Penjualan to fetch.
     */
    where?: PenjualanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penjualans to fetch.
     */
    orderBy?: PenjualanOrderByWithRelationInput | PenjualanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Penjualans.
     */
    cursor?: PenjualanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penjualans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penjualans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Penjualans.
     */
    distinct?: PenjualanScalarFieldEnum | PenjualanScalarFieldEnum[]
  }

  /**
   * Penjualan findFirstOrThrow
   */
  export type PenjualanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjualan
     */
    select?: PenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penjualan
     */
    omit?: PenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualanInclude<ExtArgs> | null
    /**
     * Filter, which Penjualan to fetch.
     */
    where?: PenjualanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penjualans to fetch.
     */
    orderBy?: PenjualanOrderByWithRelationInput | PenjualanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Penjualans.
     */
    cursor?: PenjualanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penjualans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penjualans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Penjualans.
     */
    distinct?: PenjualanScalarFieldEnum | PenjualanScalarFieldEnum[]
  }

  /**
   * Penjualan findMany
   */
  export type PenjualanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjualan
     */
    select?: PenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penjualan
     */
    omit?: PenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualanInclude<ExtArgs> | null
    /**
     * Filter, which Penjualans to fetch.
     */
    where?: PenjualanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penjualans to fetch.
     */
    orderBy?: PenjualanOrderByWithRelationInput | PenjualanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Penjualans.
     */
    cursor?: PenjualanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penjualans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penjualans.
     */
    skip?: number
    distinct?: PenjualanScalarFieldEnum | PenjualanScalarFieldEnum[]
  }

  /**
   * Penjualan create
   */
  export type PenjualanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjualan
     */
    select?: PenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penjualan
     */
    omit?: PenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualanInclude<ExtArgs> | null
    /**
     * The data needed to create a Penjualan.
     */
    data: XOR<PenjualanCreateInput, PenjualanUncheckedCreateInput>
  }

  /**
   * Penjualan createMany
   */
  export type PenjualanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Penjualans.
     */
    data: PenjualanCreateManyInput | PenjualanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Penjualan createManyAndReturn
   */
  export type PenjualanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjualan
     */
    select?: PenjualanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Penjualan
     */
    omit?: PenjualanOmit<ExtArgs> | null
    /**
     * The data used to create many Penjualans.
     */
    data: PenjualanCreateManyInput | PenjualanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Penjualan update
   */
  export type PenjualanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjualan
     */
    select?: PenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penjualan
     */
    omit?: PenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualanInclude<ExtArgs> | null
    /**
     * The data needed to update a Penjualan.
     */
    data: XOR<PenjualanUpdateInput, PenjualanUncheckedUpdateInput>
    /**
     * Choose, which Penjualan to update.
     */
    where: PenjualanWhereUniqueInput
  }

  /**
   * Penjualan updateMany
   */
  export type PenjualanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Penjualans.
     */
    data: XOR<PenjualanUpdateManyMutationInput, PenjualanUncheckedUpdateManyInput>
    /**
     * Filter which Penjualans to update
     */
    where?: PenjualanWhereInput
    /**
     * Limit how many Penjualans to update.
     */
    limit?: number
  }

  /**
   * Penjualan updateManyAndReturn
   */
  export type PenjualanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjualan
     */
    select?: PenjualanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Penjualan
     */
    omit?: PenjualanOmit<ExtArgs> | null
    /**
     * The data used to update Penjualans.
     */
    data: XOR<PenjualanUpdateManyMutationInput, PenjualanUncheckedUpdateManyInput>
    /**
     * Filter which Penjualans to update
     */
    where?: PenjualanWhereInput
    /**
     * Limit how many Penjualans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Penjualan upsert
   */
  export type PenjualanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjualan
     */
    select?: PenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penjualan
     */
    omit?: PenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualanInclude<ExtArgs> | null
    /**
     * The filter to search for the Penjualan to update in case it exists.
     */
    where: PenjualanWhereUniqueInput
    /**
     * In case the Penjualan found by the `where` argument doesn't exist, create a new Penjualan with this data.
     */
    create: XOR<PenjualanCreateInput, PenjualanUncheckedCreateInput>
    /**
     * In case the Penjualan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PenjualanUpdateInput, PenjualanUncheckedUpdateInput>
  }

  /**
   * Penjualan delete
   */
  export type PenjualanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjualan
     */
    select?: PenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penjualan
     */
    omit?: PenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualanInclude<ExtArgs> | null
    /**
     * Filter which Penjualan to delete.
     */
    where: PenjualanWhereUniqueInput
  }

  /**
   * Penjualan deleteMany
   */
  export type PenjualanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Penjualans to delete
     */
    where?: PenjualanWhereInput
    /**
     * Limit how many Penjualans to delete.
     */
    limit?: number
  }

  /**
   * Penjualan.PenjualanDetail
   */
  export type Penjualan$PenjualanDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenjualanDetail
     */
    select?: PenjualanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PenjualanDetail
     */
    omit?: PenjualanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualanDetailInclude<ExtArgs> | null
    where?: PenjualanDetailWhereInput
    orderBy?: PenjualanDetailOrderByWithRelationInput | PenjualanDetailOrderByWithRelationInput[]
    cursor?: PenjualanDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PenjualanDetailScalarFieldEnum | PenjualanDetailScalarFieldEnum[]
  }

  /**
   * Penjualan without action
   */
  export type PenjualanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjualan
     */
    select?: PenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penjualan
     */
    omit?: PenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualanInclude<ExtArgs> | null
  }


  /**
   * Model MetodeBayar
   */

  export type AggregateMetodeBayar = {
    _count: MetodeBayarCountAggregateOutputType | null
    _avg: MetodeBayarAvgAggregateOutputType | null
    _sum: MetodeBayarSumAggregateOutputType | null
    _min: MetodeBayarMinAggregateOutputType | null
    _max: MetodeBayarMaxAggregateOutputType | null
  }

  export type MetodeBayarAvgAggregateOutputType = {
    id: number | null
  }

  export type MetodeBayarSumAggregateOutputType = {
    id: number | null
  }

  export type MetodeBayarMinAggregateOutputType = {
    id: number | null
    nama: string | null
  }

  export type MetodeBayarMaxAggregateOutputType = {
    id: number | null
    nama: string | null
  }

  export type MetodeBayarCountAggregateOutputType = {
    id: number
    nama: number
    _all: number
  }


  export type MetodeBayarAvgAggregateInputType = {
    id?: true
  }

  export type MetodeBayarSumAggregateInputType = {
    id?: true
  }

  export type MetodeBayarMinAggregateInputType = {
    id?: true
    nama?: true
  }

  export type MetodeBayarMaxAggregateInputType = {
    id?: true
    nama?: true
  }

  export type MetodeBayarCountAggregateInputType = {
    id?: true
    nama?: true
    _all?: true
  }

  export type MetodeBayarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetodeBayar to aggregate.
     */
    where?: MetodeBayarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetodeBayars to fetch.
     */
    orderBy?: MetodeBayarOrderByWithRelationInput | MetodeBayarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetodeBayarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetodeBayars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetodeBayars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MetodeBayars
    **/
    _count?: true | MetodeBayarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetodeBayarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetodeBayarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetodeBayarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetodeBayarMaxAggregateInputType
  }

  export type GetMetodeBayarAggregateType<T extends MetodeBayarAggregateArgs> = {
        [P in keyof T & keyof AggregateMetodeBayar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetodeBayar[P]>
      : GetScalarType<T[P], AggregateMetodeBayar[P]>
  }




  export type MetodeBayarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetodeBayarWhereInput
    orderBy?: MetodeBayarOrderByWithAggregationInput | MetodeBayarOrderByWithAggregationInput[]
    by: MetodeBayarScalarFieldEnum[] | MetodeBayarScalarFieldEnum
    having?: MetodeBayarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetodeBayarCountAggregateInputType | true
    _avg?: MetodeBayarAvgAggregateInputType
    _sum?: MetodeBayarSumAggregateInputType
    _min?: MetodeBayarMinAggregateInputType
    _max?: MetodeBayarMaxAggregateInputType
  }

  export type MetodeBayarGroupByOutputType = {
    id: number
    nama: string
    _count: MetodeBayarCountAggregateOutputType | null
    _avg: MetodeBayarAvgAggregateOutputType | null
    _sum: MetodeBayarSumAggregateOutputType | null
    _min: MetodeBayarMinAggregateOutputType | null
    _max: MetodeBayarMaxAggregateOutputType | null
  }

  type GetMetodeBayarGroupByPayload<T extends MetodeBayarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetodeBayarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetodeBayarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetodeBayarGroupByOutputType[P]>
            : GetScalarType<T[P], MetodeBayarGroupByOutputType[P]>
        }
      >
    >


  export type MetodeBayarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    Penjualan?: boolean | MetodeBayar$PenjualanArgs<ExtArgs>
    _count?: boolean | MetodeBayarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metodeBayar"]>

  export type MetodeBayarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
  }, ExtArgs["result"]["metodeBayar"]>

  export type MetodeBayarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
  }, ExtArgs["result"]["metodeBayar"]>

  export type MetodeBayarSelectScalar = {
    id?: boolean
    nama?: boolean
  }

  export type MetodeBayarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama", ExtArgs["result"]["metodeBayar"]>
  export type MetodeBayarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Penjualan?: boolean | MetodeBayar$PenjualanArgs<ExtArgs>
    _count?: boolean | MetodeBayarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MetodeBayarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MetodeBayarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MetodeBayarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MetodeBayar"
    objects: {
      Penjualan: Prisma.$PenjualanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
    }, ExtArgs["result"]["metodeBayar"]>
    composites: {}
  }

  type MetodeBayarGetPayload<S extends boolean | null | undefined | MetodeBayarDefaultArgs> = $Result.GetResult<Prisma.$MetodeBayarPayload, S>

  type MetodeBayarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetodeBayarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetodeBayarCountAggregateInputType | true
    }

  export interface MetodeBayarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MetodeBayar'], meta: { name: 'MetodeBayar' } }
    /**
     * Find zero or one MetodeBayar that matches the filter.
     * @param {MetodeBayarFindUniqueArgs} args - Arguments to find a MetodeBayar
     * @example
     * // Get one MetodeBayar
     * const metodeBayar = await prisma.metodeBayar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetodeBayarFindUniqueArgs>(args: SelectSubset<T, MetodeBayarFindUniqueArgs<ExtArgs>>): Prisma__MetodeBayarClient<$Result.GetResult<Prisma.$MetodeBayarPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one MetodeBayar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetodeBayarFindUniqueOrThrowArgs} args - Arguments to find a MetodeBayar
     * @example
     * // Get one MetodeBayar
     * const metodeBayar = await prisma.metodeBayar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetodeBayarFindUniqueOrThrowArgs>(args: SelectSubset<T, MetodeBayarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetodeBayarClient<$Result.GetResult<Prisma.$MetodeBayarPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first MetodeBayar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetodeBayarFindFirstArgs} args - Arguments to find a MetodeBayar
     * @example
     * // Get one MetodeBayar
     * const metodeBayar = await prisma.metodeBayar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetodeBayarFindFirstArgs>(args?: SelectSubset<T, MetodeBayarFindFirstArgs<ExtArgs>>): Prisma__MetodeBayarClient<$Result.GetResult<Prisma.$MetodeBayarPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first MetodeBayar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetodeBayarFindFirstOrThrowArgs} args - Arguments to find a MetodeBayar
     * @example
     * // Get one MetodeBayar
     * const metodeBayar = await prisma.metodeBayar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetodeBayarFindFirstOrThrowArgs>(args?: SelectSubset<T, MetodeBayarFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetodeBayarClient<$Result.GetResult<Prisma.$MetodeBayarPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more MetodeBayars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetodeBayarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MetodeBayars
     * const metodeBayars = await prisma.metodeBayar.findMany()
     * 
     * // Get first 10 MetodeBayars
     * const metodeBayars = await prisma.metodeBayar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metodeBayarWithIdOnly = await prisma.metodeBayar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetodeBayarFindManyArgs>(args?: SelectSubset<T, MetodeBayarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetodeBayarPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a MetodeBayar.
     * @param {MetodeBayarCreateArgs} args - Arguments to create a MetodeBayar.
     * @example
     * // Create one MetodeBayar
     * const MetodeBayar = await prisma.metodeBayar.create({
     *   data: {
     *     // ... data to create a MetodeBayar
     *   }
     * })
     * 
     */
    create<T extends MetodeBayarCreateArgs>(args: SelectSubset<T, MetodeBayarCreateArgs<ExtArgs>>): Prisma__MetodeBayarClient<$Result.GetResult<Prisma.$MetodeBayarPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many MetodeBayars.
     * @param {MetodeBayarCreateManyArgs} args - Arguments to create many MetodeBayars.
     * @example
     * // Create many MetodeBayars
     * const metodeBayar = await prisma.metodeBayar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetodeBayarCreateManyArgs>(args?: SelectSubset<T, MetodeBayarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MetodeBayars and returns the data saved in the database.
     * @param {MetodeBayarCreateManyAndReturnArgs} args - Arguments to create many MetodeBayars.
     * @example
     * // Create many MetodeBayars
     * const metodeBayar = await prisma.metodeBayar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MetodeBayars and only return the `id`
     * const metodeBayarWithIdOnly = await prisma.metodeBayar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetodeBayarCreateManyAndReturnArgs>(args?: SelectSubset<T, MetodeBayarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetodeBayarPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a MetodeBayar.
     * @param {MetodeBayarDeleteArgs} args - Arguments to delete one MetodeBayar.
     * @example
     * // Delete one MetodeBayar
     * const MetodeBayar = await prisma.metodeBayar.delete({
     *   where: {
     *     // ... filter to delete one MetodeBayar
     *   }
     * })
     * 
     */
    delete<T extends MetodeBayarDeleteArgs>(args: SelectSubset<T, MetodeBayarDeleteArgs<ExtArgs>>): Prisma__MetodeBayarClient<$Result.GetResult<Prisma.$MetodeBayarPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one MetodeBayar.
     * @param {MetodeBayarUpdateArgs} args - Arguments to update one MetodeBayar.
     * @example
     * // Update one MetodeBayar
     * const metodeBayar = await prisma.metodeBayar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetodeBayarUpdateArgs>(args: SelectSubset<T, MetodeBayarUpdateArgs<ExtArgs>>): Prisma__MetodeBayarClient<$Result.GetResult<Prisma.$MetodeBayarPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more MetodeBayars.
     * @param {MetodeBayarDeleteManyArgs} args - Arguments to filter MetodeBayars to delete.
     * @example
     * // Delete a few MetodeBayars
     * const { count } = await prisma.metodeBayar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetodeBayarDeleteManyArgs>(args?: SelectSubset<T, MetodeBayarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetodeBayars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetodeBayarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MetodeBayars
     * const metodeBayar = await prisma.metodeBayar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetodeBayarUpdateManyArgs>(args: SelectSubset<T, MetodeBayarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetodeBayars and returns the data updated in the database.
     * @param {MetodeBayarUpdateManyAndReturnArgs} args - Arguments to update many MetodeBayars.
     * @example
     * // Update many MetodeBayars
     * const metodeBayar = await prisma.metodeBayar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MetodeBayars and only return the `id`
     * const metodeBayarWithIdOnly = await prisma.metodeBayar.updateManyAndReturn({
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
    updateManyAndReturn<T extends MetodeBayarUpdateManyAndReturnArgs>(args: SelectSubset<T, MetodeBayarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetodeBayarPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one MetodeBayar.
     * @param {MetodeBayarUpsertArgs} args - Arguments to update or create a MetodeBayar.
     * @example
     * // Update or create a MetodeBayar
     * const metodeBayar = await prisma.metodeBayar.upsert({
     *   create: {
     *     // ... data to create a MetodeBayar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MetodeBayar we want to update
     *   }
     * })
     */
    upsert<T extends MetodeBayarUpsertArgs>(args: SelectSubset<T, MetodeBayarUpsertArgs<ExtArgs>>): Prisma__MetodeBayarClient<$Result.GetResult<Prisma.$MetodeBayarPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of MetodeBayars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetodeBayarCountArgs} args - Arguments to filter MetodeBayars to count.
     * @example
     * // Count the number of MetodeBayars
     * const count = await prisma.metodeBayar.count({
     *   where: {
     *     // ... the filter for the MetodeBayars we want to count
     *   }
     * })
    **/
    count<T extends MetodeBayarCountArgs>(
      args?: Subset<T, MetodeBayarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetodeBayarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MetodeBayar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetodeBayarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MetodeBayarAggregateArgs>(args: Subset<T, MetodeBayarAggregateArgs>): Prisma.PrismaPromise<GetMetodeBayarAggregateType<T>>

    /**
     * Group by MetodeBayar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetodeBayarGroupByArgs} args - Group by arguments.
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
      T extends MetodeBayarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetodeBayarGroupByArgs['orderBy'] }
        : { orderBy?: MetodeBayarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MetodeBayarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetodeBayarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MetodeBayar model
   */
  readonly fields: MetodeBayarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MetodeBayar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetodeBayarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Penjualan<T extends MetodeBayar$PenjualanArgs<ExtArgs> = {}>(args?: Subset<T, MetodeBayar$PenjualanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenjualanPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the MetodeBayar model
   */ 
  interface MetodeBayarFieldRefs {
    readonly id: FieldRef<"MetodeBayar", 'Int'>
    readonly nama: FieldRef<"MetodeBayar", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MetodeBayar findUnique
   */
  export type MetodeBayarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodeBayar
     */
    select?: MetodeBayarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodeBayar
     */
    omit?: MetodeBayarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodeBayarInclude<ExtArgs> | null
    /**
     * Filter, which MetodeBayar to fetch.
     */
    where: MetodeBayarWhereUniqueInput
  }

  /**
   * MetodeBayar findUniqueOrThrow
   */
  export type MetodeBayarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodeBayar
     */
    select?: MetodeBayarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodeBayar
     */
    omit?: MetodeBayarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodeBayarInclude<ExtArgs> | null
    /**
     * Filter, which MetodeBayar to fetch.
     */
    where: MetodeBayarWhereUniqueInput
  }

  /**
   * MetodeBayar findFirst
   */
  export type MetodeBayarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodeBayar
     */
    select?: MetodeBayarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodeBayar
     */
    omit?: MetodeBayarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodeBayarInclude<ExtArgs> | null
    /**
     * Filter, which MetodeBayar to fetch.
     */
    where?: MetodeBayarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetodeBayars to fetch.
     */
    orderBy?: MetodeBayarOrderByWithRelationInput | MetodeBayarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetodeBayars.
     */
    cursor?: MetodeBayarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetodeBayars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetodeBayars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetodeBayars.
     */
    distinct?: MetodeBayarScalarFieldEnum | MetodeBayarScalarFieldEnum[]
  }

  /**
   * MetodeBayar findFirstOrThrow
   */
  export type MetodeBayarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodeBayar
     */
    select?: MetodeBayarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodeBayar
     */
    omit?: MetodeBayarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodeBayarInclude<ExtArgs> | null
    /**
     * Filter, which MetodeBayar to fetch.
     */
    where?: MetodeBayarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetodeBayars to fetch.
     */
    orderBy?: MetodeBayarOrderByWithRelationInput | MetodeBayarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetodeBayars.
     */
    cursor?: MetodeBayarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetodeBayars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetodeBayars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetodeBayars.
     */
    distinct?: MetodeBayarScalarFieldEnum | MetodeBayarScalarFieldEnum[]
  }

  /**
   * MetodeBayar findMany
   */
  export type MetodeBayarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodeBayar
     */
    select?: MetodeBayarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodeBayar
     */
    omit?: MetodeBayarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodeBayarInclude<ExtArgs> | null
    /**
     * Filter, which MetodeBayars to fetch.
     */
    where?: MetodeBayarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetodeBayars to fetch.
     */
    orderBy?: MetodeBayarOrderByWithRelationInput | MetodeBayarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MetodeBayars.
     */
    cursor?: MetodeBayarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetodeBayars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetodeBayars.
     */
    skip?: number
    distinct?: MetodeBayarScalarFieldEnum | MetodeBayarScalarFieldEnum[]
  }

  /**
   * MetodeBayar create
   */
  export type MetodeBayarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodeBayar
     */
    select?: MetodeBayarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodeBayar
     */
    omit?: MetodeBayarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodeBayarInclude<ExtArgs> | null
    /**
     * The data needed to create a MetodeBayar.
     */
    data: XOR<MetodeBayarCreateInput, MetodeBayarUncheckedCreateInput>
  }

  /**
   * MetodeBayar createMany
   */
  export type MetodeBayarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MetodeBayars.
     */
    data: MetodeBayarCreateManyInput | MetodeBayarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MetodeBayar createManyAndReturn
   */
  export type MetodeBayarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodeBayar
     */
    select?: MetodeBayarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetodeBayar
     */
    omit?: MetodeBayarOmit<ExtArgs> | null
    /**
     * The data used to create many MetodeBayars.
     */
    data: MetodeBayarCreateManyInput | MetodeBayarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MetodeBayar update
   */
  export type MetodeBayarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodeBayar
     */
    select?: MetodeBayarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodeBayar
     */
    omit?: MetodeBayarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodeBayarInclude<ExtArgs> | null
    /**
     * The data needed to update a MetodeBayar.
     */
    data: XOR<MetodeBayarUpdateInput, MetodeBayarUncheckedUpdateInput>
    /**
     * Choose, which MetodeBayar to update.
     */
    where: MetodeBayarWhereUniqueInput
  }

  /**
   * MetodeBayar updateMany
   */
  export type MetodeBayarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MetodeBayars.
     */
    data: XOR<MetodeBayarUpdateManyMutationInput, MetodeBayarUncheckedUpdateManyInput>
    /**
     * Filter which MetodeBayars to update
     */
    where?: MetodeBayarWhereInput
    /**
     * Limit how many MetodeBayars to update.
     */
    limit?: number
  }

  /**
   * MetodeBayar updateManyAndReturn
   */
  export type MetodeBayarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodeBayar
     */
    select?: MetodeBayarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetodeBayar
     */
    omit?: MetodeBayarOmit<ExtArgs> | null
    /**
     * The data used to update MetodeBayars.
     */
    data: XOR<MetodeBayarUpdateManyMutationInput, MetodeBayarUncheckedUpdateManyInput>
    /**
     * Filter which MetodeBayars to update
     */
    where?: MetodeBayarWhereInput
    /**
     * Limit how many MetodeBayars to update.
     */
    limit?: number
  }

  /**
   * MetodeBayar upsert
   */
  export type MetodeBayarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodeBayar
     */
    select?: MetodeBayarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodeBayar
     */
    omit?: MetodeBayarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodeBayarInclude<ExtArgs> | null
    /**
     * The filter to search for the MetodeBayar to update in case it exists.
     */
    where: MetodeBayarWhereUniqueInput
    /**
     * In case the MetodeBayar found by the `where` argument doesn't exist, create a new MetodeBayar with this data.
     */
    create: XOR<MetodeBayarCreateInput, MetodeBayarUncheckedCreateInput>
    /**
     * In case the MetodeBayar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetodeBayarUpdateInput, MetodeBayarUncheckedUpdateInput>
  }

  /**
   * MetodeBayar delete
   */
  export type MetodeBayarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodeBayar
     */
    select?: MetodeBayarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodeBayar
     */
    omit?: MetodeBayarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodeBayarInclude<ExtArgs> | null
    /**
     * Filter which MetodeBayar to delete.
     */
    where: MetodeBayarWhereUniqueInput
  }

  /**
   * MetodeBayar deleteMany
   */
  export type MetodeBayarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetodeBayars to delete
     */
    where?: MetodeBayarWhereInput
    /**
     * Limit how many MetodeBayars to delete.
     */
    limit?: number
  }

  /**
   * MetodeBayar.Penjualan
   */
  export type MetodeBayar$PenjualanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjualan
     */
    select?: PenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penjualan
     */
    omit?: PenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualanInclude<ExtArgs> | null
    where?: PenjualanWhereInput
    orderBy?: PenjualanOrderByWithRelationInput | PenjualanOrderByWithRelationInput[]
    cursor?: PenjualanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PenjualanScalarFieldEnum | PenjualanScalarFieldEnum[]
  }

  /**
   * MetodeBayar without action
   */
  export type MetodeBayarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodeBayar
     */
    select?: MetodeBayarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodeBayar
     */
    omit?: MetodeBayarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodeBayarInclude<ExtArgs> | null
  }


  /**
   * Model PenjualanDetail
   */

  export type AggregatePenjualanDetail = {
    _count: PenjualanDetailCountAggregateOutputType | null
    _avg: PenjualanDetailAvgAggregateOutputType | null
    _sum: PenjualanDetailSumAggregateOutputType | null
    _min: PenjualanDetailMinAggregateOutputType | null
    _max: PenjualanDetailMaxAggregateOutputType | null
  }

  export type PenjualanDetailAvgAggregateOutputType = {
    id: number | null
    produkId: number | null
    penjualanId: number | null
    stokId: number | null
    harga: number | null
    qty: number | null
  }

  export type PenjualanDetailSumAggregateOutputType = {
    id: number | null
    produkId: number | null
    penjualanId: number | null
    stokId: number | null
    harga: number | null
    qty: number | null
  }

  export type PenjualanDetailMinAggregateOutputType = {
    id: number | null
    produkId: number | null
    penjualanId: number | null
    stokId: number | null
    harga: number | null
    qty: number | null
    tipe: $Enums.JenisPenjualan | null
  }

  export type PenjualanDetailMaxAggregateOutputType = {
    id: number | null
    produkId: number | null
    penjualanId: number | null
    stokId: number | null
    harga: number | null
    qty: number | null
    tipe: $Enums.JenisPenjualan | null
  }

  export type PenjualanDetailCountAggregateOutputType = {
    id: number
    produkId: number
    penjualanId: number
    stokId: number
    harga: number
    qty: number
    tipe: number
    _all: number
  }


  export type PenjualanDetailAvgAggregateInputType = {
    id?: true
    produkId?: true
    penjualanId?: true
    stokId?: true
    harga?: true
    qty?: true
  }

  export type PenjualanDetailSumAggregateInputType = {
    id?: true
    produkId?: true
    penjualanId?: true
    stokId?: true
    harga?: true
    qty?: true
  }

  export type PenjualanDetailMinAggregateInputType = {
    id?: true
    produkId?: true
    penjualanId?: true
    stokId?: true
    harga?: true
    qty?: true
    tipe?: true
  }

  export type PenjualanDetailMaxAggregateInputType = {
    id?: true
    produkId?: true
    penjualanId?: true
    stokId?: true
    harga?: true
    qty?: true
    tipe?: true
  }

  export type PenjualanDetailCountAggregateInputType = {
    id?: true
    produkId?: true
    penjualanId?: true
    stokId?: true
    harga?: true
    qty?: true
    tipe?: true
    _all?: true
  }

  export type PenjualanDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PenjualanDetail to aggregate.
     */
    where?: PenjualanDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PenjualanDetails to fetch.
     */
    orderBy?: PenjualanDetailOrderByWithRelationInput | PenjualanDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PenjualanDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PenjualanDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PenjualanDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PenjualanDetails
    **/
    _count?: true | PenjualanDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PenjualanDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PenjualanDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PenjualanDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PenjualanDetailMaxAggregateInputType
  }

  export type GetPenjualanDetailAggregateType<T extends PenjualanDetailAggregateArgs> = {
        [P in keyof T & keyof AggregatePenjualanDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePenjualanDetail[P]>
      : GetScalarType<T[P], AggregatePenjualanDetail[P]>
  }




  export type PenjualanDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PenjualanDetailWhereInput
    orderBy?: PenjualanDetailOrderByWithAggregationInput | PenjualanDetailOrderByWithAggregationInput[]
    by: PenjualanDetailScalarFieldEnum[] | PenjualanDetailScalarFieldEnum
    having?: PenjualanDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PenjualanDetailCountAggregateInputType | true
    _avg?: PenjualanDetailAvgAggregateInputType
    _sum?: PenjualanDetailSumAggregateInputType
    _min?: PenjualanDetailMinAggregateInputType
    _max?: PenjualanDetailMaxAggregateInputType
  }

  export type PenjualanDetailGroupByOutputType = {
    id: number
    produkId: number
    penjualanId: number
    stokId: number
    harga: number
    qty: number
    tipe: $Enums.JenisPenjualan
    _count: PenjualanDetailCountAggregateOutputType | null
    _avg: PenjualanDetailAvgAggregateOutputType | null
    _sum: PenjualanDetailSumAggregateOutputType | null
    _min: PenjualanDetailMinAggregateOutputType | null
    _max: PenjualanDetailMaxAggregateOutputType | null
  }

  type GetPenjualanDetailGroupByPayload<T extends PenjualanDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PenjualanDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PenjualanDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PenjualanDetailGroupByOutputType[P]>
            : GetScalarType<T[P], PenjualanDetailGroupByOutputType[P]>
        }
      >
    >


  export type PenjualanDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produkId?: boolean
    penjualanId?: boolean
    stokId?: boolean
    harga?: boolean
    qty?: boolean
    tipe?: boolean
    penjualan?: boolean | PenjualanDefaultArgs<ExtArgs>
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
    stok?: boolean | StokDefaultArgs<ExtArgs>
    Komisi?: boolean | PenjualanDetail$KomisiArgs<ExtArgs>
    _count?: boolean | PenjualanDetailCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penjualanDetail"]>

  export type PenjualanDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produkId?: boolean
    penjualanId?: boolean
    stokId?: boolean
    harga?: boolean
    qty?: boolean
    tipe?: boolean
    penjualan?: boolean | PenjualanDefaultArgs<ExtArgs>
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
    stok?: boolean | StokDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penjualanDetail"]>

  export type PenjualanDetailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produkId?: boolean
    penjualanId?: boolean
    stokId?: boolean
    harga?: boolean
    qty?: boolean
    tipe?: boolean
    penjualan?: boolean | PenjualanDefaultArgs<ExtArgs>
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
    stok?: boolean | StokDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penjualanDetail"]>

  export type PenjualanDetailSelectScalar = {
    id?: boolean
    produkId?: boolean
    penjualanId?: boolean
    stokId?: boolean
    harga?: boolean
    qty?: boolean
    tipe?: boolean
  }

  export type PenjualanDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "produkId" | "penjualanId" | "stokId" | "harga" | "qty" | "tipe", ExtArgs["result"]["penjualanDetail"]>
  export type PenjualanDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penjualan?: boolean | PenjualanDefaultArgs<ExtArgs>
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
    stok?: boolean | StokDefaultArgs<ExtArgs>
    Komisi?: boolean | PenjualanDetail$KomisiArgs<ExtArgs>
    _count?: boolean | PenjualanDetailCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PenjualanDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penjualan?: boolean | PenjualanDefaultArgs<ExtArgs>
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
    stok?: boolean | StokDefaultArgs<ExtArgs>
  }
  export type PenjualanDetailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penjualan?: boolean | PenjualanDefaultArgs<ExtArgs>
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
    stok?: boolean | StokDefaultArgs<ExtArgs>
  }

  export type $PenjualanDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PenjualanDetail"
    objects: {
      penjualan: Prisma.$PenjualanPayload<ExtArgs>
      produk: Prisma.$ProdukPayload<ExtArgs>
      stok: Prisma.$StokPayload<ExtArgs>
      Komisi: Prisma.$KomisiKasirPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      produkId: number
      penjualanId: number
      stokId: number
      harga: number
      qty: number
      tipe: $Enums.JenisPenjualan
    }, ExtArgs["result"]["penjualanDetail"]>
    composites: {}
  }

  type PenjualanDetailGetPayload<S extends boolean | null | undefined | PenjualanDetailDefaultArgs> = $Result.GetResult<Prisma.$PenjualanDetailPayload, S>

  type PenjualanDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PenjualanDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PenjualanDetailCountAggregateInputType | true
    }

  export interface PenjualanDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PenjualanDetail'], meta: { name: 'PenjualanDetail' } }
    /**
     * Find zero or one PenjualanDetail that matches the filter.
     * @param {PenjualanDetailFindUniqueArgs} args - Arguments to find a PenjualanDetail
     * @example
     * // Get one PenjualanDetail
     * const penjualanDetail = await prisma.penjualanDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PenjualanDetailFindUniqueArgs>(args: SelectSubset<T, PenjualanDetailFindUniqueArgs<ExtArgs>>): Prisma__PenjualanDetailClient<$Result.GetResult<Prisma.$PenjualanDetailPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PenjualanDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PenjualanDetailFindUniqueOrThrowArgs} args - Arguments to find a PenjualanDetail
     * @example
     * // Get one PenjualanDetail
     * const penjualanDetail = await prisma.penjualanDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PenjualanDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, PenjualanDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PenjualanDetailClient<$Result.GetResult<Prisma.$PenjualanDetailPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PenjualanDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjualanDetailFindFirstArgs} args - Arguments to find a PenjualanDetail
     * @example
     * // Get one PenjualanDetail
     * const penjualanDetail = await prisma.penjualanDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PenjualanDetailFindFirstArgs>(args?: SelectSubset<T, PenjualanDetailFindFirstArgs<ExtArgs>>): Prisma__PenjualanDetailClient<$Result.GetResult<Prisma.$PenjualanDetailPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PenjualanDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjualanDetailFindFirstOrThrowArgs} args - Arguments to find a PenjualanDetail
     * @example
     * // Get one PenjualanDetail
     * const penjualanDetail = await prisma.penjualanDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PenjualanDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, PenjualanDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__PenjualanDetailClient<$Result.GetResult<Prisma.$PenjualanDetailPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PenjualanDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjualanDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PenjualanDetails
     * const penjualanDetails = await prisma.penjualanDetail.findMany()
     * 
     * // Get first 10 PenjualanDetails
     * const penjualanDetails = await prisma.penjualanDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const penjualanDetailWithIdOnly = await prisma.penjualanDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PenjualanDetailFindManyArgs>(args?: SelectSubset<T, PenjualanDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenjualanDetailPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PenjualanDetail.
     * @param {PenjualanDetailCreateArgs} args - Arguments to create a PenjualanDetail.
     * @example
     * // Create one PenjualanDetail
     * const PenjualanDetail = await prisma.penjualanDetail.create({
     *   data: {
     *     // ... data to create a PenjualanDetail
     *   }
     * })
     * 
     */
    create<T extends PenjualanDetailCreateArgs>(args: SelectSubset<T, PenjualanDetailCreateArgs<ExtArgs>>): Prisma__PenjualanDetailClient<$Result.GetResult<Prisma.$PenjualanDetailPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PenjualanDetails.
     * @param {PenjualanDetailCreateManyArgs} args - Arguments to create many PenjualanDetails.
     * @example
     * // Create many PenjualanDetails
     * const penjualanDetail = await prisma.penjualanDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PenjualanDetailCreateManyArgs>(args?: SelectSubset<T, PenjualanDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PenjualanDetails and returns the data saved in the database.
     * @param {PenjualanDetailCreateManyAndReturnArgs} args - Arguments to create many PenjualanDetails.
     * @example
     * // Create many PenjualanDetails
     * const penjualanDetail = await prisma.penjualanDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PenjualanDetails and only return the `id`
     * const penjualanDetailWithIdOnly = await prisma.penjualanDetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PenjualanDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, PenjualanDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenjualanDetailPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a PenjualanDetail.
     * @param {PenjualanDetailDeleteArgs} args - Arguments to delete one PenjualanDetail.
     * @example
     * // Delete one PenjualanDetail
     * const PenjualanDetail = await prisma.penjualanDetail.delete({
     *   where: {
     *     // ... filter to delete one PenjualanDetail
     *   }
     * })
     * 
     */
    delete<T extends PenjualanDetailDeleteArgs>(args: SelectSubset<T, PenjualanDetailDeleteArgs<ExtArgs>>): Prisma__PenjualanDetailClient<$Result.GetResult<Prisma.$PenjualanDetailPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PenjualanDetail.
     * @param {PenjualanDetailUpdateArgs} args - Arguments to update one PenjualanDetail.
     * @example
     * // Update one PenjualanDetail
     * const penjualanDetail = await prisma.penjualanDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PenjualanDetailUpdateArgs>(args: SelectSubset<T, PenjualanDetailUpdateArgs<ExtArgs>>): Prisma__PenjualanDetailClient<$Result.GetResult<Prisma.$PenjualanDetailPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PenjualanDetails.
     * @param {PenjualanDetailDeleteManyArgs} args - Arguments to filter PenjualanDetails to delete.
     * @example
     * // Delete a few PenjualanDetails
     * const { count } = await prisma.penjualanDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PenjualanDetailDeleteManyArgs>(args?: SelectSubset<T, PenjualanDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PenjualanDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjualanDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PenjualanDetails
     * const penjualanDetail = await prisma.penjualanDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PenjualanDetailUpdateManyArgs>(args: SelectSubset<T, PenjualanDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PenjualanDetails and returns the data updated in the database.
     * @param {PenjualanDetailUpdateManyAndReturnArgs} args - Arguments to update many PenjualanDetails.
     * @example
     * // Update many PenjualanDetails
     * const penjualanDetail = await prisma.penjualanDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PenjualanDetails and only return the `id`
     * const penjualanDetailWithIdOnly = await prisma.penjualanDetail.updateManyAndReturn({
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
    updateManyAndReturn<T extends PenjualanDetailUpdateManyAndReturnArgs>(args: SelectSubset<T, PenjualanDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenjualanDetailPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one PenjualanDetail.
     * @param {PenjualanDetailUpsertArgs} args - Arguments to update or create a PenjualanDetail.
     * @example
     * // Update or create a PenjualanDetail
     * const penjualanDetail = await prisma.penjualanDetail.upsert({
     *   create: {
     *     // ... data to create a PenjualanDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PenjualanDetail we want to update
     *   }
     * })
     */
    upsert<T extends PenjualanDetailUpsertArgs>(args: SelectSubset<T, PenjualanDetailUpsertArgs<ExtArgs>>): Prisma__PenjualanDetailClient<$Result.GetResult<Prisma.$PenjualanDetailPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PenjualanDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjualanDetailCountArgs} args - Arguments to filter PenjualanDetails to count.
     * @example
     * // Count the number of PenjualanDetails
     * const count = await prisma.penjualanDetail.count({
     *   where: {
     *     // ... the filter for the PenjualanDetails we want to count
     *   }
     * })
    **/
    count<T extends PenjualanDetailCountArgs>(
      args?: Subset<T, PenjualanDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PenjualanDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PenjualanDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjualanDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PenjualanDetailAggregateArgs>(args: Subset<T, PenjualanDetailAggregateArgs>): Prisma.PrismaPromise<GetPenjualanDetailAggregateType<T>>

    /**
     * Group by PenjualanDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjualanDetailGroupByArgs} args - Group by arguments.
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
      T extends PenjualanDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PenjualanDetailGroupByArgs['orderBy'] }
        : { orderBy?: PenjualanDetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PenjualanDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPenjualanDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PenjualanDetail model
   */
  readonly fields: PenjualanDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PenjualanDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PenjualanDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    penjualan<T extends PenjualanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PenjualanDefaultArgs<ExtArgs>>): Prisma__PenjualanClient<$Result.GetResult<Prisma.$PenjualanPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    produk<T extends ProdukDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdukDefaultArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    stok<T extends StokDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StokDefaultArgs<ExtArgs>>): Prisma__StokClient<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    Komisi<T extends PenjualanDetail$KomisiArgs<ExtArgs> = {}>(args?: Subset<T, PenjualanDetail$KomisiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KomisiKasirPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the PenjualanDetail model
   */ 
  interface PenjualanDetailFieldRefs {
    readonly id: FieldRef<"PenjualanDetail", 'Int'>
    readonly produkId: FieldRef<"PenjualanDetail", 'Int'>
    readonly penjualanId: FieldRef<"PenjualanDetail", 'Int'>
    readonly stokId: FieldRef<"PenjualanDetail", 'Int'>
    readonly harga: FieldRef<"PenjualanDetail", 'Int'>
    readonly qty: FieldRef<"PenjualanDetail", 'Int'>
    readonly tipe: FieldRef<"PenjualanDetail", 'JenisPenjualan'>
  }
    

  // Custom InputTypes
  /**
   * PenjualanDetail findUnique
   */
  export type PenjualanDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenjualanDetail
     */
    select?: PenjualanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PenjualanDetail
     */
    omit?: PenjualanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualanDetailInclude<ExtArgs> | null
    /**
     * Filter, which PenjualanDetail to fetch.
     */
    where: PenjualanDetailWhereUniqueInput
  }

  /**
   * PenjualanDetail findUniqueOrThrow
   */
  export type PenjualanDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenjualanDetail
     */
    select?: PenjualanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PenjualanDetail
     */
    omit?: PenjualanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualanDetailInclude<ExtArgs> | null
    /**
     * Filter, which PenjualanDetail to fetch.
     */
    where: PenjualanDetailWhereUniqueInput
  }

  /**
   * PenjualanDetail findFirst
   */
  export type PenjualanDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenjualanDetail
     */
    select?: PenjualanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PenjualanDetail
     */
    omit?: PenjualanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualanDetailInclude<ExtArgs> | null
    /**
     * Filter, which PenjualanDetail to fetch.
     */
    where?: PenjualanDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PenjualanDetails to fetch.
     */
    orderBy?: PenjualanDetailOrderByWithRelationInput | PenjualanDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PenjualanDetails.
     */
    cursor?: PenjualanDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PenjualanDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PenjualanDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PenjualanDetails.
     */
    distinct?: PenjualanDetailScalarFieldEnum | PenjualanDetailScalarFieldEnum[]
  }

  /**
   * PenjualanDetail findFirstOrThrow
   */
  export type PenjualanDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenjualanDetail
     */
    select?: PenjualanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PenjualanDetail
     */
    omit?: PenjualanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualanDetailInclude<ExtArgs> | null
    /**
     * Filter, which PenjualanDetail to fetch.
     */
    where?: PenjualanDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PenjualanDetails to fetch.
     */
    orderBy?: PenjualanDetailOrderByWithRelationInput | PenjualanDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PenjualanDetails.
     */
    cursor?: PenjualanDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PenjualanDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PenjualanDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PenjualanDetails.
     */
    distinct?: PenjualanDetailScalarFieldEnum | PenjualanDetailScalarFieldEnum[]
  }

  /**
   * PenjualanDetail findMany
   */
  export type PenjualanDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenjualanDetail
     */
    select?: PenjualanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PenjualanDetail
     */
    omit?: PenjualanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualanDetailInclude<ExtArgs> | null
    /**
     * Filter, which PenjualanDetails to fetch.
     */
    where?: PenjualanDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PenjualanDetails to fetch.
     */
    orderBy?: PenjualanDetailOrderByWithRelationInput | PenjualanDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PenjualanDetails.
     */
    cursor?: PenjualanDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PenjualanDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PenjualanDetails.
     */
    skip?: number
    distinct?: PenjualanDetailScalarFieldEnum | PenjualanDetailScalarFieldEnum[]
  }

  /**
   * PenjualanDetail create
   */
  export type PenjualanDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenjualanDetail
     */
    select?: PenjualanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PenjualanDetail
     */
    omit?: PenjualanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualanDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a PenjualanDetail.
     */
    data: XOR<PenjualanDetailCreateInput, PenjualanDetailUncheckedCreateInput>
  }

  /**
   * PenjualanDetail createMany
   */
  export type PenjualanDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PenjualanDetails.
     */
    data: PenjualanDetailCreateManyInput | PenjualanDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PenjualanDetail createManyAndReturn
   */
  export type PenjualanDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenjualanDetail
     */
    select?: PenjualanDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PenjualanDetail
     */
    omit?: PenjualanDetailOmit<ExtArgs> | null
    /**
     * The data used to create many PenjualanDetails.
     */
    data: PenjualanDetailCreateManyInput | PenjualanDetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualanDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PenjualanDetail update
   */
  export type PenjualanDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenjualanDetail
     */
    select?: PenjualanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PenjualanDetail
     */
    omit?: PenjualanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualanDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a PenjualanDetail.
     */
    data: XOR<PenjualanDetailUpdateInput, PenjualanDetailUncheckedUpdateInput>
    /**
     * Choose, which PenjualanDetail to update.
     */
    where: PenjualanDetailWhereUniqueInput
  }

  /**
   * PenjualanDetail updateMany
   */
  export type PenjualanDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PenjualanDetails.
     */
    data: XOR<PenjualanDetailUpdateManyMutationInput, PenjualanDetailUncheckedUpdateManyInput>
    /**
     * Filter which PenjualanDetails to update
     */
    where?: PenjualanDetailWhereInput
    /**
     * Limit how many PenjualanDetails to update.
     */
    limit?: number
  }

  /**
   * PenjualanDetail updateManyAndReturn
   */
  export type PenjualanDetailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenjualanDetail
     */
    select?: PenjualanDetailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PenjualanDetail
     */
    omit?: PenjualanDetailOmit<ExtArgs> | null
    /**
     * The data used to update PenjualanDetails.
     */
    data: XOR<PenjualanDetailUpdateManyMutationInput, PenjualanDetailUncheckedUpdateManyInput>
    /**
     * Filter which PenjualanDetails to update
     */
    where?: PenjualanDetailWhereInput
    /**
     * Limit how many PenjualanDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualanDetailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PenjualanDetail upsert
   */
  export type PenjualanDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenjualanDetail
     */
    select?: PenjualanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PenjualanDetail
     */
    omit?: PenjualanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualanDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the PenjualanDetail to update in case it exists.
     */
    where: PenjualanDetailWhereUniqueInput
    /**
     * In case the PenjualanDetail found by the `where` argument doesn't exist, create a new PenjualanDetail with this data.
     */
    create: XOR<PenjualanDetailCreateInput, PenjualanDetailUncheckedCreateInput>
    /**
     * In case the PenjualanDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PenjualanDetailUpdateInput, PenjualanDetailUncheckedUpdateInput>
  }

  /**
   * PenjualanDetail delete
   */
  export type PenjualanDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenjualanDetail
     */
    select?: PenjualanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PenjualanDetail
     */
    omit?: PenjualanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualanDetailInclude<ExtArgs> | null
    /**
     * Filter which PenjualanDetail to delete.
     */
    where: PenjualanDetailWhereUniqueInput
  }

  /**
   * PenjualanDetail deleteMany
   */
  export type PenjualanDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PenjualanDetails to delete
     */
    where?: PenjualanDetailWhereInput
    /**
     * Limit how many PenjualanDetails to delete.
     */
    limit?: number
  }

  /**
   * PenjualanDetail.Komisi
   */
  export type PenjualanDetail$KomisiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KomisiKasir
     */
    select?: KomisiKasirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KomisiKasir
     */
    omit?: KomisiKasirOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomisiKasirInclude<ExtArgs> | null
    where?: KomisiKasirWhereInput
    orderBy?: KomisiKasirOrderByWithRelationInput | KomisiKasirOrderByWithRelationInput[]
    cursor?: KomisiKasirWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KomisiKasirScalarFieldEnum | KomisiKasirScalarFieldEnum[]
  }

  /**
   * PenjualanDetail without action
   */
  export type PenjualanDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenjualanDetail
     */
    select?: PenjualanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PenjualanDetail
     */
    omit?: PenjualanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualanDetailInclude<ExtArgs> | null
  }


  /**
   * Model Pengguna
   */

  export type AggregatePengguna = {
    _count: PenggunaCountAggregateOutputType | null
    _avg: PenggunaAvgAggregateOutputType | null
    _sum: PenggunaSumAggregateOutputType | null
    _min: PenggunaMinAggregateOutputType | null
    _max: PenggunaMaxAggregateOutputType | null
  }

  export type PenggunaAvgAggregateOutputType = {
    id: number | null
  }

  export type PenggunaSumAggregateOutputType = {
    id: number | null
  }

  export type PenggunaMinAggregateOutputType = {
    id: number | null
    nama: string | null
    username: string | null
    password: string | null
    email: string | null
    role: $Enums.Role | null
    verifikasi: boolean | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type PenggunaMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    username: string | null
    password: string | null
    email: string | null
    role: $Enums.Role | null
    verifikasi: boolean | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type PenggunaCountAggregateOutputType = {
    id: number
    nama: number
    username: number
    password: number
    email: number
    role: number
    verifikasi: number
    isDeleted: number
    deletedAt: number
    _all: number
  }


  export type PenggunaAvgAggregateInputType = {
    id?: true
  }

  export type PenggunaSumAggregateInputType = {
    id?: true
  }

  export type PenggunaMinAggregateInputType = {
    id?: true
    nama?: true
    username?: true
    password?: true
    email?: true
    role?: true
    verifikasi?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type PenggunaMaxAggregateInputType = {
    id?: true
    nama?: true
    username?: true
    password?: true
    email?: true
    role?: true
    verifikasi?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type PenggunaCountAggregateInputType = {
    id?: true
    nama?: true
    username?: true
    password?: true
    email?: true
    role?: true
    verifikasi?: true
    isDeleted?: true
    deletedAt?: true
    _all?: true
  }

  export type PenggunaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pengguna to aggregate.
     */
    where?: PenggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penggunas to fetch.
     */
    orderBy?: PenggunaOrderByWithRelationInput | PenggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PenggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penggunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Penggunas
    **/
    _count?: true | PenggunaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PenggunaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PenggunaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PenggunaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PenggunaMaxAggregateInputType
  }

  export type GetPenggunaAggregateType<T extends PenggunaAggregateArgs> = {
        [P in keyof T & keyof AggregatePengguna]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePengguna[P]>
      : GetScalarType<T[P], AggregatePengguna[P]>
  }




  export type PenggunaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PenggunaWhereInput
    orderBy?: PenggunaOrderByWithAggregationInput | PenggunaOrderByWithAggregationInput[]
    by: PenggunaScalarFieldEnum[] | PenggunaScalarFieldEnum
    having?: PenggunaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PenggunaCountAggregateInputType | true
    _avg?: PenggunaAvgAggregateInputType
    _sum?: PenggunaSumAggregateInputType
    _min?: PenggunaMinAggregateInputType
    _max?: PenggunaMaxAggregateInputType
  }

  export type PenggunaGroupByOutputType = {
    id: number
    nama: string
    username: string
    password: string
    email: string
    role: $Enums.Role
    verifikasi: boolean
    isDeleted: boolean
    deletedAt: Date | null
    _count: PenggunaCountAggregateOutputType | null
    _avg: PenggunaAvgAggregateOutputType | null
    _sum: PenggunaSumAggregateOutputType | null
    _min: PenggunaMinAggregateOutputType | null
    _max: PenggunaMaxAggregateOutputType | null
  }

  type GetPenggunaGroupByPayload<T extends PenggunaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PenggunaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PenggunaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PenggunaGroupByOutputType[P]>
            : GetScalarType<T[P], PenggunaGroupByOutputType[P]>
        }
      >
    >


  export type PenggunaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    verifikasi?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    Penjualan?: boolean | Pengguna$PenjualanArgs<ExtArgs>
    Komisi?: boolean | Pengguna$KomisiArgs<ExtArgs>
    _count?: boolean | PenggunaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pengguna"]>

  export type PenggunaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    verifikasi?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["pengguna"]>

  export type PenggunaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    verifikasi?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["pengguna"]>

  export type PenggunaSelectScalar = {
    id?: boolean
    nama?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    verifikasi?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
  }

  export type PenggunaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "username" | "password" | "email" | "role" | "verifikasi" | "isDeleted" | "deletedAt", ExtArgs["result"]["pengguna"]>
  export type PenggunaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Penjualan?: boolean | Pengguna$PenjualanArgs<ExtArgs>
    Komisi?: boolean | Pengguna$KomisiArgs<ExtArgs>
    _count?: boolean | PenggunaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PenggunaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PenggunaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PenggunaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pengguna"
    objects: {
      Penjualan: Prisma.$PenjualanPayload<ExtArgs>[]
      Komisi: Prisma.$KomisiKasirPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      username: string
      password: string
      email: string
      role: $Enums.Role
      verifikasi: boolean
      isDeleted: boolean
      deletedAt: Date | null
    }, ExtArgs["result"]["pengguna"]>
    composites: {}
  }

  type PenggunaGetPayload<S extends boolean | null | undefined | PenggunaDefaultArgs> = $Result.GetResult<Prisma.$PenggunaPayload, S>

  type PenggunaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PenggunaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PenggunaCountAggregateInputType | true
    }

  export interface PenggunaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pengguna'], meta: { name: 'Pengguna' } }
    /**
     * Find zero or one Pengguna that matches the filter.
     * @param {PenggunaFindUniqueArgs} args - Arguments to find a Pengguna
     * @example
     * // Get one Pengguna
     * const pengguna = await prisma.pengguna.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PenggunaFindUniqueArgs>(args: SelectSubset<T, PenggunaFindUniqueArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Pengguna that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PenggunaFindUniqueOrThrowArgs} args - Arguments to find a Pengguna
     * @example
     * // Get one Pengguna
     * const pengguna = await prisma.pengguna.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PenggunaFindUniqueOrThrowArgs>(args: SelectSubset<T, PenggunaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Pengguna that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenggunaFindFirstArgs} args - Arguments to find a Pengguna
     * @example
     * // Get one Pengguna
     * const pengguna = await prisma.pengguna.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PenggunaFindFirstArgs>(args?: SelectSubset<T, PenggunaFindFirstArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Pengguna that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenggunaFindFirstOrThrowArgs} args - Arguments to find a Pengguna
     * @example
     * // Get one Pengguna
     * const pengguna = await prisma.pengguna.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PenggunaFindFirstOrThrowArgs>(args?: SelectSubset<T, PenggunaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Penggunas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenggunaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Penggunas
     * const penggunas = await prisma.pengguna.findMany()
     * 
     * // Get first 10 Penggunas
     * const penggunas = await prisma.pengguna.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const penggunaWithIdOnly = await prisma.pengguna.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PenggunaFindManyArgs>(args?: SelectSubset<T, PenggunaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Pengguna.
     * @param {PenggunaCreateArgs} args - Arguments to create a Pengguna.
     * @example
     * // Create one Pengguna
     * const Pengguna = await prisma.pengguna.create({
     *   data: {
     *     // ... data to create a Pengguna
     *   }
     * })
     * 
     */
    create<T extends PenggunaCreateArgs>(args: SelectSubset<T, PenggunaCreateArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Penggunas.
     * @param {PenggunaCreateManyArgs} args - Arguments to create many Penggunas.
     * @example
     * // Create many Penggunas
     * const pengguna = await prisma.pengguna.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PenggunaCreateManyArgs>(args?: SelectSubset<T, PenggunaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Penggunas and returns the data saved in the database.
     * @param {PenggunaCreateManyAndReturnArgs} args - Arguments to create many Penggunas.
     * @example
     * // Create many Penggunas
     * const pengguna = await prisma.pengguna.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Penggunas and only return the `id`
     * const penggunaWithIdOnly = await prisma.pengguna.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PenggunaCreateManyAndReturnArgs>(args?: SelectSubset<T, PenggunaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Pengguna.
     * @param {PenggunaDeleteArgs} args - Arguments to delete one Pengguna.
     * @example
     * // Delete one Pengguna
     * const Pengguna = await prisma.pengguna.delete({
     *   where: {
     *     // ... filter to delete one Pengguna
     *   }
     * })
     * 
     */
    delete<T extends PenggunaDeleteArgs>(args: SelectSubset<T, PenggunaDeleteArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Pengguna.
     * @param {PenggunaUpdateArgs} args - Arguments to update one Pengguna.
     * @example
     * // Update one Pengguna
     * const pengguna = await prisma.pengguna.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PenggunaUpdateArgs>(args: SelectSubset<T, PenggunaUpdateArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Penggunas.
     * @param {PenggunaDeleteManyArgs} args - Arguments to filter Penggunas to delete.
     * @example
     * // Delete a few Penggunas
     * const { count } = await prisma.pengguna.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PenggunaDeleteManyArgs>(args?: SelectSubset<T, PenggunaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penggunas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenggunaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Penggunas
     * const pengguna = await prisma.pengguna.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PenggunaUpdateManyArgs>(args: SelectSubset<T, PenggunaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penggunas and returns the data updated in the database.
     * @param {PenggunaUpdateManyAndReturnArgs} args - Arguments to update many Penggunas.
     * @example
     * // Update many Penggunas
     * const pengguna = await prisma.pengguna.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Penggunas and only return the `id`
     * const penggunaWithIdOnly = await prisma.pengguna.updateManyAndReturn({
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
    updateManyAndReturn<T extends PenggunaUpdateManyAndReturnArgs>(args: SelectSubset<T, PenggunaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Pengguna.
     * @param {PenggunaUpsertArgs} args - Arguments to update or create a Pengguna.
     * @example
     * // Update or create a Pengguna
     * const pengguna = await prisma.pengguna.upsert({
     *   create: {
     *     // ... data to create a Pengguna
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pengguna we want to update
     *   }
     * })
     */
    upsert<T extends PenggunaUpsertArgs>(args: SelectSubset<T, PenggunaUpsertArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Penggunas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenggunaCountArgs} args - Arguments to filter Penggunas to count.
     * @example
     * // Count the number of Penggunas
     * const count = await prisma.pengguna.count({
     *   where: {
     *     // ... the filter for the Penggunas we want to count
     *   }
     * })
    **/
    count<T extends PenggunaCountArgs>(
      args?: Subset<T, PenggunaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PenggunaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pengguna.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenggunaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PenggunaAggregateArgs>(args: Subset<T, PenggunaAggregateArgs>): Prisma.PrismaPromise<GetPenggunaAggregateType<T>>

    /**
     * Group by Pengguna.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenggunaGroupByArgs} args - Group by arguments.
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
      T extends PenggunaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PenggunaGroupByArgs['orderBy'] }
        : { orderBy?: PenggunaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PenggunaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPenggunaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pengguna model
   */
  readonly fields: PenggunaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pengguna.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PenggunaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Penjualan<T extends Pengguna$PenjualanArgs<ExtArgs> = {}>(args?: Subset<T, Pengguna$PenjualanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenjualanPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Komisi<T extends Pengguna$KomisiArgs<ExtArgs> = {}>(args?: Subset<T, Pengguna$KomisiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KomisiKasirPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Pengguna model
   */ 
  interface PenggunaFieldRefs {
    readonly id: FieldRef<"Pengguna", 'Int'>
    readonly nama: FieldRef<"Pengguna", 'String'>
    readonly username: FieldRef<"Pengguna", 'String'>
    readonly password: FieldRef<"Pengguna", 'String'>
    readonly email: FieldRef<"Pengguna", 'String'>
    readonly role: FieldRef<"Pengguna", 'Role'>
    readonly verifikasi: FieldRef<"Pengguna", 'Boolean'>
    readonly isDeleted: FieldRef<"Pengguna", 'Boolean'>
    readonly deletedAt: FieldRef<"Pengguna", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pengguna findUnique
   */
  export type PenggunaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
    /**
     * Filter, which Pengguna to fetch.
     */
    where: PenggunaWhereUniqueInput
  }

  /**
   * Pengguna findUniqueOrThrow
   */
  export type PenggunaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
    /**
     * Filter, which Pengguna to fetch.
     */
    where: PenggunaWhereUniqueInput
  }

  /**
   * Pengguna findFirst
   */
  export type PenggunaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
    /**
     * Filter, which Pengguna to fetch.
     */
    where?: PenggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penggunas to fetch.
     */
    orderBy?: PenggunaOrderByWithRelationInput | PenggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Penggunas.
     */
    cursor?: PenggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penggunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Penggunas.
     */
    distinct?: PenggunaScalarFieldEnum | PenggunaScalarFieldEnum[]
  }

  /**
   * Pengguna findFirstOrThrow
   */
  export type PenggunaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
    /**
     * Filter, which Pengguna to fetch.
     */
    where?: PenggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penggunas to fetch.
     */
    orderBy?: PenggunaOrderByWithRelationInput | PenggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Penggunas.
     */
    cursor?: PenggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penggunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Penggunas.
     */
    distinct?: PenggunaScalarFieldEnum | PenggunaScalarFieldEnum[]
  }

  /**
   * Pengguna findMany
   */
  export type PenggunaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
    /**
     * Filter, which Penggunas to fetch.
     */
    where?: PenggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penggunas to fetch.
     */
    orderBy?: PenggunaOrderByWithRelationInput | PenggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Penggunas.
     */
    cursor?: PenggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penggunas.
     */
    skip?: number
    distinct?: PenggunaScalarFieldEnum | PenggunaScalarFieldEnum[]
  }

  /**
   * Pengguna create
   */
  export type PenggunaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
    /**
     * The data needed to create a Pengguna.
     */
    data: XOR<PenggunaCreateInput, PenggunaUncheckedCreateInput>
  }

  /**
   * Pengguna createMany
   */
  export type PenggunaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Penggunas.
     */
    data: PenggunaCreateManyInput | PenggunaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pengguna createManyAndReturn
   */
  export type PenggunaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * The data used to create many Penggunas.
     */
    data: PenggunaCreateManyInput | PenggunaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pengguna update
   */
  export type PenggunaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
    /**
     * The data needed to update a Pengguna.
     */
    data: XOR<PenggunaUpdateInput, PenggunaUncheckedUpdateInput>
    /**
     * Choose, which Pengguna to update.
     */
    where: PenggunaWhereUniqueInput
  }

  /**
   * Pengguna updateMany
   */
  export type PenggunaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Penggunas.
     */
    data: XOR<PenggunaUpdateManyMutationInput, PenggunaUncheckedUpdateManyInput>
    /**
     * Filter which Penggunas to update
     */
    where?: PenggunaWhereInput
    /**
     * Limit how many Penggunas to update.
     */
    limit?: number
  }

  /**
   * Pengguna updateManyAndReturn
   */
  export type PenggunaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * The data used to update Penggunas.
     */
    data: XOR<PenggunaUpdateManyMutationInput, PenggunaUncheckedUpdateManyInput>
    /**
     * Filter which Penggunas to update
     */
    where?: PenggunaWhereInput
    /**
     * Limit how many Penggunas to update.
     */
    limit?: number
  }

  /**
   * Pengguna upsert
   */
  export type PenggunaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
    /**
     * The filter to search for the Pengguna to update in case it exists.
     */
    where: PenggunaWhereUniqueInput
    /**
     * In case the Pengguna found by the `where` argument doesn't exist, create a new Pengguna with this data.
     */
    create: XOR<PenggunaCreateInput, PenggunaUncheckedCreateInput>
    /**
     * In case the Pengguna was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PenggunaUpdateInput, PenggunaUncheckedUpdateInput>
  }

  /**
   * Pengguna delete
   */
  export type PenggunaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
    /**
     * Filter which Pengguna to delete.
     */
    where: PenggunaWhereUniqueInput
  }

  /**
   * Pengguna deleteMany
   */
  export type PenggunaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Penggunas to delete
     */
    where?: PenggunaWhereInput
    /**
     * Limit how many Penggunas to delete.
     */
    limit?: number
  }

  /**
   * Pengguna.Penjualan
   */
  export type Pengguna$PenjualanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjualan
     */
    select?: PenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penjualan
     */
    omit?: PenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualanInclude<ExtArgs> | null
    where?: PenjualanWhereInput
    orderBy?: PenjualanOrderByWithRelationInput | PenjualanOrderByWithRelationInput[]
    cursor?: PenjualanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PenjualanScalarFieldEnum | PenjualanScalarFieldEnum[]
  }

  /**
   * Pengguna.Komisi
   */
  export type Pengguna$KomisiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KomisiKasir
     */
    select?: KomisiKasirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KomisiKasir
     */
    omit?: KomisiKasirOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomisiKasirInclude<ExtArgs> | null
    where?: KomisiKasirWhereInput
    orderBy?: KomisiKasirOrderByWithRelationInput | KomisiKasirOrderByWithRelationInput[]
    cursor?: KomisiKasirWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KomisiKasirScalarFieldEnum | KomisiKasirScalarFieldEnum[]
  }

  /**
   * Pengguna without action
   */
  export type PenggunaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengguna
     */
    select?: PenggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengguna
     */
    omit?: PenggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenggunaInclude<ExtArgs> | null
  }


  /**
   * Model KomisiKategori
   */

  export type AggregateKomisiKategori = {
    _count: KomisiKategoriCountAggregateOutputType | null
    _avg: KomisiKategoriAvgAggregateOutputType | null
    _sum: KomisiKategoriSumAggregateOutputType | null
    _min: KomisiKategoriMinAggregateOutputType | null
    _max: KomisiKategoriMaxAggregateOutputType | null
  }

  export type KomisiKategoriAvgAggregateOutputType = {
    id: number | null
    kategoriId: number | null
    persen: number | null
  }

  export type KomisiKategoriSumAggregateOutputType = {
    id: number | null
    kategoriId: number | null
    persen: number | null
  }

  export type KomisiKategoriMinAggregateOutputType = {
    id: number | null
    kategoriId: number | null
    persen: number | null
    createdAt: Date | null
  }

  export type KomisiKategoriMaxAggregateOutputType = {
    id: number | null
    kategoriId: number | null
    persen: number | null
    createdAt: Date | null
  }

  export type KomisiKategoriCountAggregateOutputType = {
    id: number
    kategoriId: number
    persen: number
    createdAt: number
    _all: number
  }


  export type KomisiKategoriAvgAggregateInputType = {
    id?: true
    kategoriId?: true
    persen?: true
  }

  export type KomisiKategoriSumAggregateInputType = {
    id?: true
    kategoriId?: true
    persen?: true
  }

  export type KomisiKategoriMinAggregateInputType = {
    id?: true
    kategoriId?: true
    persen?: true
    createdAt?: true
  }

  export type KomisiKategoriMaxAggregateInputType = {
    id?: true
    kategoriId?: true
    persen?: true
    createdAt?: true
  }

  export type KomisiKategoriCountAggregateInputType = {
    id?: true
    kategoriId?: true
    persen?: true
    createdAt?: true
    _all?: true
  }

  export type KomisiKategoriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KomisiKategori to aggregate.
     */
    where?: KomisiKategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KomisiKategoris to fetch.
     */
    orderBy?: KomisiKategoriOrderByWithRelationInput | KomisiKategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KomisiKategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KomisiKategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KomisiKategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KomisiKategoris
    **/
    _count?: true | KomisiKategoriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KomisiKategoriAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KomisiKategoriSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KomisiKategoriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KomisiKategoriMaxAggregateInputType
  }

  export type GetKomisiKategoriAggregateType<T extends KomisiKategoriAggregateArgs> = {
        [P in keyof T & keyof AggregateKomisiKategori]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKomisiKategori[P]>
      : GetScalarType<T[P], AggregateKomisiKategori[P]>
  }




  export type KomisiKategoriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KomisiKategoriWhereInput
    orderBy?: KomisiKategoriOrderByWithAggregationInput | KomisiKategoriOrderByWithAggregationInput[]
    by: KomisiKategoriScalarFieldEnum[] | KomisiKategoriScalarFieldEnum
    having?: KomisiKategoriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KomisiKategoriCountAggregateInputType | true
    _avg?: KomisiKategoriAvgAggregateInputType
    _sum?: KomisiKategoriSumAggregateInputType
    _min?: KomisiKategoriMinAggregateInputType
    _max?: KomisiKategoriMaxAggregateInputType
  }

  export type KomisiKategoriGroupByOutputType = {
    id: number
    kategoriId: number
    persen: number
    createdAt: Date
    _count: KomisiKategoriCountAggregateOutputType | null
    _avg: KomisiKategoriAvgAggregateOutputType | null
    _sum: KomisiKategoriSumAggregateOutputType | null
    _min: KomisiKategoriMinAggregateOutputType | null
    _max: KomisiKategoriMaxAggregateOutputType | null
  }

  type GetKomisiKategoriGroupByPayload<T extends KomisiKategoriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KomisiKategoriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KomisiKategoriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KomisiKategoriGroupByOutputType[P]>
            : GetScalarType<T[P], KomisiKategoriGroupByOutputType[P]>
        }
      >
    >


  export type KomisiKategoriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kategoriId?: boolean
    persen?: boolean
    createdAt?: boolean
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["komisiKategori"]>

  export type KomisiKategoriSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kategoriId?: boolean
    persen?: boolean
    createdAt?: boolean
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["komisiKategori"]>

  export type KomisiKategoriSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kategoriId?: boolean
    persen?: boolean
    createdAt?: boolean
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["komisiKategori"]>

  export type KomisiKategoriSelectScalar = {
    id?: boolean
    kategoriId?: boolean
    persen?: boolean
    createdAt?: boolean
  }

  export type KomisiKategoriOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kategoriId" | "persen" | "createdAt", ExtArgs["result"]["komisiKategori"]>
  export type KomisiKategoriInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }
  export type KomisiKategoriIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }
  export type KomisiKategoriIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }

  export type $KomisiKategoriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KomisiKategori"
    objects: {
      kategori: Prisma.$KategoriPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      kategoriId: number
      persen: number
      createdAt: Date
    }, ExtArgs["result"]["komisiKategori"]>
    composites: {}
  }

  type KomisiKategoriGetPayload<S extends boolean | null | undefined | KomisiKategoriDefaultArgs> = $Result.GetResult<Prisma.$KomisiKategoriPayload, S>

  type KomisiKategoriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KomisiKategoriFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KomisiKategoriCountAggregateInputType | true
    }

  export interface KomisiKategoriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KomisiKategori'], meta: { name: 'KomisiKategori' } }
    /**
     * Find zero or one KomisiKategori that matches the filter.
     * @param {KomisiKategoriFindUniqueArgs} args - Arguments to find a KomisiKategori
     * @example
     * // Get one KomisiKategori
     * const komisiKategori = await prisma.komisiKategori.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KomisiKategoriFindUniqueArgs>(args: SelectSubset<T, KomisiKategoriFindUniqueArgs<ExtArgs>>): Prisma__KomisiKategoriClient<$Result.GetResult<Prisma.$KomisiKategoriPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one KomisiKategori that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KomisiKategoriFindUniqueOrThrowArgs} args - Arguments to find a KomisiKategori
     * @example
     * // Get one KomisiKategori
     * const komisiKategori = await prisma.komisiKategori.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KomisiKategoriFindUniqueOrThrowArgs>(args: SelectSubset<T, KomisiKategoriFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KomisiKategoriClient<$Result.GetResult<Prisma.$KomisiKategoriPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first KomisiKategori that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KomisiKategoriFindFirstArgs} args - Arguments to find a KomisiKategori
     * @example
     * // Get one KomisiKategori
     * const komisiKategori = await prisma.komisiKategori.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KomisiKategoriFindFirstArgs>(args?: SelectSubset<T, KomisiKategoriFindFirstArgs<ExtArgs>>): Prisma__KomisiKategoriClient<$Result.GetResult<Prisma.$KomisiKategoriPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first KomisiKategori that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KomisiKategoriFindFirstOrThrowArgs} args - Arguments to find a KomisiKategori
     * @example
     * // Get one KomisiKategori
     * const komisiKategori = await prisma.komisiKategori.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KomisiKategoriFindFirstOrThrowArgs>(args?: SelectSubset<T, KomisiKategoriFindFirstOrThrowArgs<ExtArgs>>): Prisma__KomisiKategoriClient<$Result.GetResult<Prisma.$KomisiKategoriPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more KomisiKategoris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KomisiKategoriFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KomisiKategoris
     * const komisiKategoris = await prisma.komisiKategori.findMany()
     * 
     * // Get first 10 KomisiKategoris
     * const komisiKategoris = await prisma.komisiKategori.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const komisiKategoriWithIdOnly = await prisma.komisiKategori.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KomisiKategoriFindManyArgs>(args?: SelectSubset<T, KomisiKategoriFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KomisiKategoriPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a KomisiKategori.
     * @param {KomisiKategoriCreateArgs} args - Arguments to create a KomisiKategori.
     * @example
     * // Create one KomisiKategori
     * const KomisiKategori = await prisma.komisiKategori.create({
     *   data: {
     *     // ... data to create a KomisiKategori
     *   }
     * })
     * 
     */
    create<T extends KomisiKategoriCreateArgs>(args: SelectSubset<T, KomisiKategoriCreateArgs<ExtArgs>>): Prisma__KomisiKategoriClient<$Result.GetResult<Prisma.$KomisiKategoriPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many KomisiKategoris.
     * @param {KomisiKategoriCreateManyArgs} args - Arguments to create many KomisiKategoris.
     * @example
     * // Create many KomisiKategoris
     * const komisiKategori = await prisma.komisiKategori.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KomisiKategoriCreateManyArgs>(args?: SelectSubset<T, KomisiKategoriCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KomisiKategoris and returns the data saved in the database.
     * @param {KomisiKategoriCreateManyAndReturnArgs} args - Arguments to create many KomisiKategoris.
     * @example
     * // Create many KomisiKategoris
     * const komisiKategori = await prisma.komisiKategori.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KomisiKategoris and only return the `id`
     * const komisiKategoriWithIdOnly = await prisma.komisiKategori.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KomisiKategoriCreateManyAndReturnArgs>(args?: SelectSubset<T, KomisiKategoriCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KomisiKategoriPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a KomisiKategori.
     * @param {KomisiKategoriDeleteArgs} args - Arguments to delete one KomisiKategori.
     * @example
     * // Delete one KomisiKategori
     * const KomisiKategori = await prisma.komisiKategori.delete({
     *   where: {
     *     // ... filter to delete one KomisiKategori
     *   }
     * })
     * 
     */
    delete<T extends KomisiKategoriDeleteArgs>(args: SelectSubset<T, KomisiKategoriDeleteArgs<ExtArgs>>): Prisma__KomisiKategoriClient<$Result.GetResult<Prisma.$KomisiKategoriPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one KomisiKategori.
     * @param {KomisiKategoriUpdateArgs} args - Arguments to update one KomisiKategori.
     * @example
     * // Update one KomisiKategori
     * const komisiKategori = await prisma.komisiKategori.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KomisiKategoriUpdateArgs>(args: SelectSubset<T, KomisiKategoriUpdateArgs<ExtArgs>>): Prisma__KomisiKategoriClient<$Result.GetResult<Prisma.$KomisiKategoriPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more KomisiKategoris.
     * @param {KomisiKategoriDeleteManyArgs} args - Arguments to filter KomisiKategoris to delete.
     * @example
     * // Delete a few KomisiKategoris
     * const { count } = await prisma.komisiKategori.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KomisiKategoriDeleteManyArgs>(args?: SelectSubset<T, KomisiKategoriDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KomisiKategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KomisiKategoriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KomisiKategoris
     * const komisiKategori = await prisma.komisiKategori.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KomisiKategoriUpdateManyArgs>(args: SelectSubset<T, KomisiKategoriUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KomisiKategoris and returns the data updated in the database.
     * @param {KomisiKategoriUpdateManyAndReturnArgs} args - Arguments to update many KomisiKategoris.
     * @example
     * // Update many KomisiKategoris
     * const komisiKategori = await prisma.komisiKategori.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KomisiKategoris and only return the `id`
     * const komisiKategoriWithIdOnly = await prisma.komisiKategori.updateManyAndReturn({
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
    updateManyAndReturn<T extends KomisiKategoriUpdateManyAndReturnArgs>(args: SelectSubset<T, KomisiKategoriUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KomisiKategoriPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one KomisiKategori.
     * @param {KomisiKategoriUpsertArgs} args - Arguments to update or create a KomisiKategori.
     * @example
     * // Update or create a KomisiKategori
     * const komisiKategori = await prisma.komisiKategori.upsert({
     *   create: {
     *     // ... data to create a KomisiKategori
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KomisiKategori we want to update
     *   }
     * })
     */
    upsert<T extends KomisiKategoriUpsertArgs>(args: SelectSubset<T, KomisiKategoriUpsertArgs<ExtArgs>>): Prisma__KomisiKategoriClient<$Result.GetResult<Prisma.$KomisiKategoriPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of KomisiKategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KomisiKategoriCountArgs} args - Arguments to filter KomisiKategoris to count.
     * @example
     * // Count the number of KomisiKategoris
     * const count = await prisma.komisiKategori.count({
     *   where: {
     *     // ... the filter for the KomisiKategoris we want to count
     *   }
     * })
    **/
    count<T extends KomisiKategoriCountArgs>(
      args?: Subset<T, KomisiKategoriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KomisiKategoriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KomisiKategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KomisiKategoriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KomisiKategoriAggregateArgs>(args: Subset<T, KomisiKategoriAggregateArgs>): Prisma.PrismaPromise<GetKomisiKategoriAggregateType<T>>

    /**
     * Group by KomisiKategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KomisiKategoriGroupByArgs} args - Group by arguments.
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
      T extends KomisiKategoriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KomisiKategoriGroupByArgs['orderBy'] }
        : { orderBy?: KomisiKategoriGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KomisiKategoriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKomisiKategoriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KomisiKategori model
   */
  readonly fields: KomisiKategoriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KomisiKategori.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KomisiKategoriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kategori<T extends KategoriDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KategoriDefaultArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the KomisiKategori model
   */ 
  interface KomisiKategoriFieldRefs {
    readonly id: FieldRef<"KomisiKategori", 'Int'>
    readonly kategoriId: FieldRef<"KomisiKategori", 'Int'>
    readonly persen: FieldRef<"KomisiKategori", 'Int'>
    readonly createdAt: FieldRef<"KomisiKategori", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KomisiKategori findUnique
   */
  export type KomisiKategoriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KomisiKategori
     */
    select?: KomisiKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KomisiKategori
     */
    omit?: KomisiKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomisiKategoriInclude<ExtArgs> | null
    /**
     * Filter, which KomisiKategori to fetch.
     */
    where: KomisiKategoriWhereUniqueInput
  }

  /**
   * KomisiKategori findUniqueOrThrow
   */
  export type KomisiKategoriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KomisiKategori
     */
    select?: KomisiKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KomisiKategori
     */
    omit?: KomisiKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomisiKategoriInclude<ExtArgs> | null
    /**
     * Filter, which KomisiKategori to fetch.
     */
    where: KomisiKategoriWhereUniqueInput
  }

  /**
   * KomisiKategori findFirst
   */
  export type KomisiKategoriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KomisiKategori
     */
    select?: KomisiKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KomisiKategori
     */
    omit?: KomisiKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomisiKategoriInclude<ExtArgs> | null
    /**
     * Filter, which KomisiKategori to fetch.
     */
    where?: KomisiKategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KomisiKategoris to fetch.
     */
    orderBy?: KomisiKategoriOrderByWithRelationInput | KomisiKategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KomisiKategoris.
     */
    cursor?: KomisiKategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KomisiKategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KomisiKategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KomisiKategoris.
     */
    distinct?: KomisiKategoriScalarFieldEnum | KomisiKategoriScalarFieldEnum[]
  }

  /**
   * KomisiKategori findFirstOrThrow
   */
  export type KomisiKategoriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KomisiKategori
     */
    select?: KomisiKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KomisiKategori
     */
    omit?: KomisiKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomisiKategoriInclude<ExtArgs> | null
    /**
     * Filter, which KomisiKategori to fetch.
     */
    where?: KomisiKategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KomisiKategoris to fetch.
     */
    orderBy?: KomisiKategoriOrderByWithRelationInput | KomisiKategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KomisiKategoris.
     */
    cursor?: KomisiKategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KomisiKategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KomisiKategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KomisiKategoris.
     */
    distinct?: KomisiKategoriScalarFieldEnum | KomisiKategoriScalarFieldEnum[]
  }

  /**
   * KomisiKategori findMany
   */
  export type KomisiKategoriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KomisiKategori
     */
    select?: KomisiKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KomisiKategori
     */
    omit?: KomisiKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomisiKategoriInclude<ExtArgs> | null
    /**
     * Filter, which KomisiKategoris to fetch.
     */
    where?: KomisiKategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KomisiKategoris to fetch.
     */
    orderBy?: KomisiKategoriOrderByWithRelationInput | KomisiKategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KomisiKategoris.
     */
    cursor?: KomisiKategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KomisiKategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KomisiKategoris.
     */
    skip?: number
    distinct?: KomisiKategoriScalarFieldEnum | KomisiKategoriScalarFieldEnum[]
  }

  /**
   * KomisiKategori create
   */
  export type KomisiKategoriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KomisiKategori
     */
    select?: KomisiKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KomisiKategori
     */
    omit?: KomisiKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomisiKategoriInclude<ExtArgs> | null
    /**
     * The data needed to create a KomisiKategori.
     */
    data: XOR<KomisiKategoriCreateInput, KomisiKategoriUncheckedCreateInput>
  }

  /**
   * KomisiKategori createMany
   */
  export type KomisiKategoriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KomisiKategoris.
     */
    data: KomisiKategoriCreateManyInput | KomisiKategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KomisiKategori createManyAndReturn
   */
  export type KomisiKategoriCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KomisiKategori
     */
    select?: KomisiKategoriSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KomisiKategori
     */
    omit?: KomisiKategoriOmit<ExtArgs> | null
    /**
     * The data used to create many KomisiKategoris.
     */
    data: KomisiKategoriCreateManyInput | KomisiKategoriCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomisiKategoriIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * KomisiKategori update
   */
  export type KomisiKategoriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KomisiKategori
     */
    select?: KomisiKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KomisiKategori
     */
    omit?: KomisiKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomisiKategoriInclude<ExtArgs> | null
    /**
     * The data needed to update a KomisiKategori.
     */
    data: XOR<KomisiKategoriUpdateInput, KomisiKategoriUncheckedUpdateInput>
    /**
     * Choose, which KomisiKategori to update.
     */
    where: KomisiKategoriWhereUniqueInput
  }

  /**
   * KomisiKategori updateMany
   */
  export type KomisiKategoriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KomisiKategoris.
     */
    data: XOR<KomisiKategoriUpdateManyMutationInput, KomisiKategoriUncheckedUpdateManyInput>
    /**
     * Filter which KomisiKategoris to update
     */
    where?: KomisiKategoriWhereInput
    /**
     * Limit how many KomisiKategoris to update.
     */
    limit?: number
  }

  /**
   * KomisiKategori updateManyAndReturn
   */
  export type KomisiKategoriUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KomisiKategori
     */
    select?: KomisiKategoriSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KomisiKategori
     */
    omit?: KomisiKategoriOmit<ExtArgs> | null
    /**
     * The data used to update KomisiKategoris.
     */
    data: XOR<KomisiKategoriUpdateManyMutationInput, KomisiKategoriUncheckedUpdateManyInput>
    /**
     * Filter which KomisiKategoris to update
     */
    where?: KomisiKategoriWhereInput
    /**
     * Limit how many KomisiKategoris to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomisiKategoriIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * KomisiKategori upsert
   */
  export type KomisiKategoriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KomisiKategori
     */
    select?: KomisiKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KomisiKategori
     */
    omit?: KomisiKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomisiKategoriInclude<ExtArgs> | null
    /**
     * The filter to search for the KomisiKategori to update in case it exists.
     */
    where: KomisiKategoriWhereUniqueInput
    /**
     * In case the KomisiKategori found by the `where` argument doesn't exist, create a new KomisiKategori with this data.
     */
    create: XOR<KomisiKategoriCreateInput, KomisiKategoriUncheckedCreateInput>
    /**
     * In case the KomisiKategori was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KomisiKategoriUpdateInput, KomisiKategoriUncheckedUpdateInput>
  }

  /**
   * KomisiKategori delete
   */
  export type KomisiKategoriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KomisiKategori
     */
    select?: KomisiKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KomisiKategori
     */
    omit?: KomisiKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomisiKategoriInclude<ExtArgs> | null
    /**
     * Filter which KomisiKategori to delete.
     */
    where: KomisiKategoriWhereUniqueInput
  }

  /**
   * KomisiKategori deleteMany
   */
  export type KomisiKategoriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KomisiKategoris to delete
     */
    where?: KomisiKategoriWhereInput
    /**
     * Limit how many KomisiKategoris to delete.
     */
    limit?: number
  }

  /**
   * KomisiKategori without action
   */
  export type KomisiKategoriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KomisiKategori
     */
    select?: KomisiKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KomisiKategori
     */
    omit?: KomisiKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomisiKategoriInclude<ExtArgs> | null
  }


  /**
   * Model KomisiKasir
   */

  export type AggregateKomisiKasir = {
    _count: KomisiKasirCountAggregateOutputType | null
    _avg: KomisiKasirAvgAggregateOutputType | null
    _sum: KomisiKasirSumAggregateOutputType | null
    _min: KomisiKasirMinAggregateOutputType | null
    _max: KomisiKasirMaxAggregateOutputType | null
  }

  export type KomisiKasirAvgAggregateOutputType = {
    id: number | null
    penjualanDetailId: number | null
    kasirId: number | null
    jumlah: number | null
  }

  export type KomisiKasirSumAggregateOutputType = {
    id: number | null
    penjualanDetailId: number | null
    kasirId: number | null
    jumlah: number | null
  }

  export type KomisiKasirMinAggregateOutputType = {
    id: number | null
    penjualanDetailId: number | null
    kasirId: number | null
    jumlah: number | null
    createdAt: Date | null
  }

  export type KomisiKasirMaxAggregateOutputType = {
    id: number | null
    penjualanDetailId: number | null
    kasirId: number | null
    jumlah: number | null
    createdAt: Date | null
  }

  export type KomisiKasirCountAggregateOutputType = {
    id: number
    penjualanDetailId: number
    kasirId: number
    jumlah: number
    createdAt: number
    _all: number
  }


  export type KomisiKasirAvgAggregateInputType = {
    id?: true
    penjualanDetailId?: true
    kasirId?: true
    jumlah?: true
  }

  export type KomisiKasirSumAggregateInputType = {
    id?: true
    penjualanDetailId?: true
    kasirId?: true
    jumlah?: true
  }

  export type KomisiKasirMinAggregateInputType = {
    id?: true
    penjualanDetailId?: true
    kasirId?: true
    jumlah?: true
    createdAt?: true
  }

  export type KomisiKasirMaxAggregateInputType = {
    id?: true
    penjualanDetailId?: true
    kasirId?: true
    jumlah?: true
    createdAt?: true
  }

  export type KomisiKasirCountAggregateInputType = {
    id?: true
    penjualanDetailId?: true
    kasirId?: true
    jumlah?: true
    createdAt?: true
    _all?: true
  }

  export type KomisiKasirAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KomisiKasir to aggregate.
     */
    where?: KomisiKasirWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KomisiKasirs to fetch.
     */
    orderBy?: KomisiKasirOrderByWithRelationInput | KomisiKasirOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KomisiKasirWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KomisiKasirs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KomisiKasirs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KomisiKasirs
    **/
    _count?: true | KomisiKasirCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KomisiKasirAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KomisiKasirSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KomisiKasirMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KomisiKasirMaxAggregateInputType
  }

  export type GetKomisiKasirAggregateType<T extends KomisiKasirAggregateArgs> = {
        [P in keyof T & keyof AggregateKomisiKasir]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKomisiKasir[P]>
      : GetScalarType<T[P], AggregateKomisiKasir[P]>
  }




  export type KomisiKasirGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KomisiKasirWhereInput
    orderBy?: KomisiKasirOrderByWithAggregationInput | KomisiKasirOrderByWithAggregationInput[]
    by: KomisiKasirScalarFieldEnum[] | KomisiKasirScalarFieldEnum
    having?: KomisiKasirScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KomisiKasirCountAggregateInputType | true
    _avg?: KomisiKasirAvgAggregateInputType
    _sum?: KomisiKasirSumAggregateInputType
    _min?: KomisiKasirMinAggregateInputType
    _max?: KomisiKasirMaxAggregateInputType
  }

  export type KomisiKasirGroupByOutputType = {
    id: number
    penjualanDetailId: number
    kasirId: number
    jumlah: number
    createdAt: Date
    _count: KomisiKasirCountAggregateOutputType | null
    _avg: KomisiKasirAvgAggregateOutputType | null
    _sum: KomisiKasirSumAggregateOutputType | null
    _min: KomisiKasirMinAggregateOutputType | null
    _max: KomisiKasirMaxAggregateOutputType | null
  }

  type GetKomisiKasirGroupByPayload<T extends KomisiKasirGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KomisiKasirGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KomisiKasirGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KomisiKasirGroupByOutputType[P]>
            : GetScalarType<T[P], KomisiKasirGroupByOutputType[P]>
        }
      >
    >


  export type KomisiKasirSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    penjualanDetailId?: boolean
    kasirId?: boolean
    jumlah?: boolean
    createdAt?: boolean
    penjualanDetail?: boolean | PenjualanDetailDefaultArgs<ExtArgs>
    kasir?: boolean | PenggunaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["komisiKasir"]>

  export type KomisiKasirSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    penjualanDetailId?: boolean
    kasirId?: boolean
    jumlah?: boolean
    createdAt?: boolean
    penjualanDetail?: boolean | PenjualanDetailDefaultArgs<ExtArgs>
    kasir?: boolean | PenggunaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["komisiKasir"]>

  export type KomisiKasirSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    penjualanDetailId?: boolean
    kasirId?: boolean
    jumlah?: boolean
    createdAt?: boolean
    penjualanDetail?: boolean | PenjualanDetailDefaultArgs<ExtArgs>
    kasir?: boolean | PenggunaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["komisiKasir"]>

  export type KomisiKasirSelectScalar = {
    id?: boolean
    penjualanDetailId?: boolean
    kasirId?: boolean
    jumlah?: boolean
    createdAt?: boolean
  }

  export type KomisiKasirOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "penjualanDetailId" | "kasirId" | "jumlah" | "createdAt", ExtArgs["result"]["komisiKasir"]>
  export type KomisiKasirInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penjualanDetail?: boolean | PenjualanDetailDefaultArgs<ExtArgs>
    kasir?: boolean | PenggunaDefaultArgs<ExtArgs>
  }
  export type KomisiKasirIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penjualanDetail?: boolean | PenjualanDetailDefaultArgs<ExtArgs>
    kasir?: boolean | PenggunaDefaultArgs<ExtArgs>
  }
  export type KomisiKasirIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penjualanDetail?: boolean | PenjualanDetailDefaultArgs<ExtArgs>
    kasir?: boolean | PenggunaDefaultArgs<ExtArgs>
  }

  export type $KomisiKasirPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KomisiKasir"
    objects: {
      penjualanDetail: Prisma.$PenjualanDetailPayload<ExtArgs>
      kasir: Prisma.$PenggunaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      penjualanDetailId: number
      kasirId: number
      jumlah: number
      createdAt: Date
    }, ExtArgs["result"]["komisiKasir"]>
    composites: {}
  }

  type KomisiKasirGetPayload<S extends boolean | null | undefined | KomisiKasirDefaultArgs> = $Result.GetResult<Prisma.$KomisiKasirPayload, S>

  type KomisiKasirCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KomisiKasirFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KomisiKasirCountAggregateInputType | true
    }

  export interface KomisiKasirDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KomisiKasir'], meta: { name: 'KomisiKasir' } }
    /**
     * Find zero or one KomisiKasir that matches the filter.
     * @param {KomisiKasirFindUniqueArgs} args - Arguments to find a KomisiKasir
     * @example
     * // Get one KomisiKasir
     * const komisiKasir = await prisma.komisiKasir.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KomisiKasirFindUniqueArgs>(args: SelectSubset<T, KomisiKasirFindUniqueArgs<ExtArgs>>): Prisma__KomisiKasirClient<$Result.GetResult<Prisma.$KomisiKasirPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one KomisiKasir that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KomisiKasirFindUniqueOrThrowArgs} args - Arguments to find a KomisiKasir
     * @example
     * // Get one KomisiKasir
     * const komisiKasir = await prisma.komisiKasir.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KomisiKasirFindUniqueOrThrowArgs>(args: SelectSubset<T, KomisiKasirFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KomisiKasirClient<$Result.GetResult<Prisma.$KomisiKasirPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first KomisiKasir that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KomisiKasirFindFirstArgs} args - Arguments to find a KomisiKasir
     * @example
     * // Get one KomisiKasir
     * const komisiKasir = await prisma.komisiKasir.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KomisiKasirFindFirstArgs>(args?: SelectSubset<T, KomisiKasirFindFirstArgs<ExtArgs>>): Prisma__KomisiKasirClient<$Result.GetResult<Prisma.$KomisiKasirPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first KomisiKasir that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KomisiKasirFindFirstOrThrowArgs} args - Arguments to find a KomisiKasir
     * @example
     * // Get one KomisiKasir
     * const komisiKasir = await prisma.komisiKasir.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KomisiKasirFindFirstOrThrowArgs>(args?: SelectSubset<T, KomisiKasirFindFirstOrThrowArgs<ExtArgs>>): Prisma__KomisiKasirClient<$Result.GetResult<Prisma.$KomisiKasirPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more KomisiKasirs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KomisiKasirFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KomisiKasirs
     * const komisiKasirs = await prisma.komisiKasir.findMany()
     * 
     * // Get first 10 KomisiKasirs
     * const komisiKasirs = await prisma.komisiKasir.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const komisiKasirWithIdOnly = await prisma.komisiKasir.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KomisiKasirFindManyArgs>(args?: SelectSubset<T, KomisiKasirFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KomisiKasirPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a KomisiKasir.
     * @param {KomisiKasirCreateArgs} args - Arguments to create a KomisiKasir.
     * @example
     * // Create one KomisiKasir
     * const KomisiKasir = await prisma.komisiKasir.create({
     *   data: {
     *     // ... data to create a KomisiKasir
     *   }
     * })
     * 
     */
    create<T extends KomisiKasirCreateArgs>(args: SelectSubset<T, KomisiKasirCreateArgs<ExtArgs>>): Prisma__KomisiKasirClient<$Result.GetResult<Prisma.$KomisiKasirPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many KomisiKasirs.
     * @param {KomisiKasirCreateManyArgs} args - Arguments to create many KomisiKasirs.
     * @example
     * // Create many KomisiKasirs
     * const komisiKasir = await prisma.komisiKasir.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KomisiKasirCreateManyArgs>(args?: SelectSubset<T, KomisiKasirCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KomisiKasirs and returns the data saved in the database.
     * @param {KomisiKasirCreateManyAndReturnArgs} args - Arguments to create many KomisiKasirs.
     * @example
     * // Create many KomisiKasirs
     * const komisiKasir = await prisma.komisiKasir.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KomisiKasirs and only return the `id`
     * const komisiKasirWithIdOnly = await prisma.komisiKasir.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KomisiKasirCreateManyAndReturnArgs>(args?: SelectSubset<T, KomisiKasirCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KomisiKasirPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a KomisiKasir.
     * @param {KomisiKasirDeleteArgs} args - Arguments to delete one KomisiKasir.
     * @example
     * // Delete one KomisiKasir
     * const KomisiKasir = await prisma.komisiKasir.delete({
     *   where: {
     *     // ... filter to delete one KomisiKasir
     *   }
     * })
     * 
     */
    delete<T extends KomisiKasirDeleteArgs>(args: SelectSubset<T, KomisiKasirDeleteArgs<ExtArgs>>): Prisma__KomisiKasirClient<$Result.GetResult<Prisma.$KomisiKasirPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one KomisiKasir.
     * @param {KomisiKasirUpdateArgs} args - Arguments to update one KomisiKasir.
     * @example
     * // Update one KomisiKasir
     * const komisiKasir = await prisma.komisiKasir.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KomisiKasirUpdateArgs>(args: SelectSubset<T, KomisiKasirUpdateArgs<ExtArgs>>): Prisma__KomisiKasirClient<$Result.GetResult<Prisma.$KomisiKasirPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more KomisiKasirs.
     * @param {KomisiKasirDeleteManyArgs} args - Arguments to filter KomisiKasirs to delete.
     * @example
     * // Delete a few KomisiKasirs
     * const { count } = await prisma.komisiKasir.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KomisiKasirDeleteManyArgs>(args?: SelectSubset<T, KomisiKasirDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KomisiKasirs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KomisiKasirUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KomisiKasirs
     * const komisiKasir = await prisma.komisiKasir.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KomisiKasirUpdateManyArgs>(args: SelectSubset<T, KomisiKasirUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KomisiKasirs and returns the data updated in the database.
     * @param {KomisiKasirUpdateManyAndReturnArgs} args - Arguments to update many KomisiKasirs.
     * @example
     * // Update many KomisiKasirs
     * const komisiKasir = await prisma.komisiKasir.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KomisiKasirs and only return the `id`
     * const komisiKasirWithIdOnly = await prisma.komisiKasir.updateManyAndReturn({
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
    updateManyAndReturn<T extends KomisiKasirUpdateManyAndReturnArgs>(args: SelectSubset<T, KomisiKasirUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KomisiKasirPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one KomisiKasir.
     * @param {KomisiKasirUpsertArgs} args - Arguments to update or create a KomisiKasir.
     * @example
     * // Update or create a KomisiKasir
     * const komisiKasir = await prisma.komisiKasir.upsert({
     *   create: {
     *     // ... data to create a KomisiKasir
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KomisiKasir we want to update
     *   }
     * })
     */
    upsert<T extends KomisiKasirUpsertArgs>(args: SelectSubset<T, KomisiKasirUpsertArgs<ExtArgs>>): Prisma__KomisiKasirClient<$Result.GetResult<Prisma.$KomisiKasirPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of KomisiKasirs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KomisiKasirCountArgs} args - Arguments to filter KomisiKasirs to count.
     * @example
     * // Count the number of KomisiKasirs
     * const count = await prisma.komisiKasir.count({
     *   where: {
     *     // ... the filter for the KomisiKasirs we want to count
     *   }
     * })
    **/
    count<T extends KomisiKasirCountArgs>(
      args?: Subset<T, KomisiKasirCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KomisiKasirCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KomisiKasir.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KomisiKasirAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KomisiKasirAggregateArgs>(args: Subset<T, KomisiKasirAggregateArgs>): Prisma.PrismaPromise<GetKomisiKasirAggregateType<T>>

    /**
     * Group by KomisiKasir.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KomisiKasirGroupByArgs} args - Group by arguments.
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
      T extends KomisiKasirGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KomisiKasirGroupByArgs['orderBy'] }
        : { orderBy?: KomisiKasirGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KomisiKasirGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKomisiKasirGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KomisiKasir model
   */
  readonly fields: KomisiKasirFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KomisiKasir.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KomisiKasirClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    penjualanDetail<T extends PenjualanDetailDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PenjualanDetailDefaultArgs<ExtArgs>>): Prisma__PenjualanDetailClient<$Result.GetResult<Prisma.$PenjualanDetailPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    kasir<T extends PenggunaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PenggunaDefaultArgs<ExtArgs>>): Prisma__PenggunaClient<$Result.GetResult<Prisma.$PenggunaPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the KomisiKasir model
   */ 
  interface KomisiKasirFieldRefs {
    readonly id: FieldRef<"KomisiKasir", 'Int'>
    readonly penjualanDetailId: FieldRef<"KomisiKasir", 'Int'>
    readonly kasirId: FieldRef<"KomisiKasir", 'Int'>
    readonly jumlah: FieldRef<"KomisiKasir", 'Int'>
    readonly createdAt: FieldRef<"KomisiKasir", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KomisiKasir findUnique
   */
  export type KomisiKasirFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KomisiKasir
     */
    select?: KomisiKasirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KomisiKasir
     */
    omit?: KomisiKasirOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomisiKasirInclude<ExtArgs> | null
    /**
     * Filter, which KomisiKasir to fetch.
     */
    where: KomisiKasirWhereUniqueInput
  }

  /**
   * KomisiKasir findUniqueOrThrow
   */
  export type KomisiKasirFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KomisiKasir
     */
    select?: KomisiKasirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KomisiKasir
     */
    omit?: KomisiKasirOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomisiKasirInclude<ExtArgs> | null
    /**
     * Filter, which KomisiKasir to fetch.
     */
    where: KomisiKasirWhereUniqueInput
  }

  /**
   * KomisiKasir findFirst
   */
  export type KomisiKasirFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KomisiKasir
     */
    select?: KomisiKasirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KomisiKasir
     */
    omit?: KomisiKasirOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomisiKasirInclude<ExtArgs> | null
    /**
     * Filter, which KomisiKasir to fetch.
     */
    where?: KomisiKasirWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KomisiKasirs to fetch.
     */
    orderBy?: KomisiKasirOrderByWithRelationInput | KomisiKasirOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KomisiKasirs.
     */
    cursor?: KomisiKasirWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KomisiKasirs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KomisiKasirs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KomisiKasirs.
     */
    distinct?: KomisiKasirScalarFieldEnum | KomisiKasirScalarFieldEnum[]
  }

  /**
   * KomisiKasir findFirstOrThrow
   */
  export type KomisiKasirFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KomisiKasir
     */
    select?: KomisiKasirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KomisiKasir
     */
    omit?: KomisiKasirOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomisiKasirInclude<ExtArgs> | null
    /**
     * Filter, which KomisiKasir to fetch.
     */
    where?: KomisiKasirWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KomisiKasirs to fetch.
     */
    orderBy?: KomisiKasirOrderByWithRelationInput | KomisiKasirOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KomisiKasirs.
     */
    cursor?: KomisiKasirWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KomisiKasirs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KomisiKasirs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KomisiKasirs.
     */
    distinct?: KomisiKasirScalarFieldEnum | KomisiKasirScalarFieldEnum[]
  }

  /**
   * KomisiKasir findMany
   */
  export type KomisiKasirFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KomisiKasir
     */
    select?: KomisiKasirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KomisiKasir
     */
    omit?: KomisiKasirOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomisiKasirInclude<ExtArgs> | null
    /**
     * Filter, which KomisiKasirs to fetch.
     */
    where?: KomisiKasirWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KomisiKasirs to fetch.
     */
    orderBy?: KomisiKasirOrderByWithRelationInput | KomisiKasirOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KomisiKasirs.
     */
    cursor?: KomisiKasirWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KomisiKasirs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KomisiKasirs.
     */
    skip?: number
    distinct?: KomisiKasirScalarFieldEnum | KomisiKasirScalarFieldEnum[]
  }

  /**
   * KomisiKasir create
   */
  export type KomisiKasirCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KomisiKasir
     */
    select?: KomisiKasirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KomisiKasir
     */
    omit?: KomisiKasirOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomisiKasirInclude<ExtArgs> | null
    /**
     * The data needed to create a KomisiKasir.
     */
    data: XOR<KomisiKasirCreateInput, KomisiKasirUncheckedCreateInput>
  }

  /**
   * KomisiKasir createMany
   */
  export type KomisiKasirCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KomisiKasirs.
     */
    data: KomisiKasirCreateManyInput | KomisiKasirCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KomisiKasir createManyAndReturn
   */
  export type KomisiKasirCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KomisiKasir
     */
    select?: KomisiKasirSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KomisiKasir
     */
    omit?: KomisiKasirOmit<ExtArgs> | null
    /**
     * The data used to create many KomisiKasirs.
     */
    data: KomisiKasirCreateManyInput | KomisiKasirCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomisiKasirIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * KomisiKasir update
   */
  export type KomisiKasirUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KomisiKasir
     */
    select?: KomisiKasirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KomisiKasir
     */
    omit?: KomisiKasirOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomisiKasirInclude<ExtArgs> | null
    /**
     * The data needed to update a KomisiKasir.
     */
    data: XOR<KomisiKasirUpdateInput, KomisiKasirUncheckedUpdateInput>
    /**
     * Choose, which KomisiKasir to update.
     */
    where: KomisiKasirWhereUniqueInput
  }

  /**
   * KomisiKasir updateMany
   */
  export type KomisiKasirUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KomisiKasirs.
     */
    data: XOR<KomisiKasirUpdateManyMutationInput, KomisiKasirUncheckedUpdateManyInput>
    /**
     * Filter which KomisiKasirs to update
     */
    where?: KomisiKasirWhereInput
    /**
     * Limit how many KomisiKasirs to update.
     */
    limit?: number
  }

  /**
   * KomisiKasir updateManyAndReturn
   */
  export type KomisiKasirUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KomisiKasir
     */
    select?: KomisiKasirSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KomisiKasir
     */
    omit?: KomisiKasirOmit<ExtArgs> | null
    /**
     * The data used to update KomisiKasirs.
     */
    data: XOR<KomisiKasirUpdateManyMutationInput, KomisiKasirUncheckedUpdateManyInput>
    /**
     * Filter which KomisiKasirs to update
     */
    where?: KomisiKasirWhereInput
    /**
     * Limit how many KomisiKasirs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomisiKasirIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * KomisiKasir upsert
   */
  export type KomisiKasirUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KomisiKasir
     */
    select?: KomisiKasirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KomisiKasir
     */
    omit?: KomisiKasirOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomisiKasirInclude<ExtArgs> | null
    /**
     * The filter to search for the KomisiKasir to update in case it exists.
     */
    where: KomisiKasirWhereUniqueInput
    /**
     * In case the KomisiKasir found by the `where` argument doesn't exist, create a new KomisiKasir with this data.
     */
    create: XOR<KomisiKasirCreateInput, KomisiKasirUncheckedCreateInput>
    /**
     * In case the KomisiKasir was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KomisiKasirUpdateInput, KomisiKasirUncheckedUpdateInput>
  }

  /**
   * KomisiKasir delete
   */
  export type KomisiKasirDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KomisiKasir
     */
    select?: KomisiKasirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KomisiKasir
     */
    omit?: KomisiKasirOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomisiKasirInclude<ExtArgs> | null
    /**
     * Filter which KomisiKasir to delete.
     */
    where: KomisiKasirWhereUniqueInput
  }

  /**
   * KomisiKasir deleteMany
   */
  export type KomisiKasirDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KomisiKasirs to delete
     */
    where?: KomisiKasirWhereInput
    /**
     * Limit how many KomisiKasirs to delete.
     */
    limit?: number
  }

  /**
   * KomisiKasir without action
   */
  export type KomisiKasirDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KomisiKasir
     */
    select?: KomisiKasirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KomisiKasir
     */
    omit?: KomisiKasirOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KomisiKasirInclude<ExtArgs> | null
  }


  /**
   * Model LaporanHarian
   */

  export type AggregateLaporanHarian = {
    _count: LaporanHarianCountAggregateOutputType | null
    _avg: LaporanHarianAvgAggregateOutputType | null
    _sum: LaporanHarianSumAggregateOutputType | null
    _min: LaporanHarianMinAggregateOutputType | null
    _max: LaporanHarianMaxAggregateOutputType | null
  }

  export type LaporanHarianAvgAggregateOutputType = {
    id: number | null
    stokAwal: number | null
    stokAkhir: number | null
    totalPenjualan: number | null
    totalHPP: number | null
    totalLaba: number | null
    totalKomisi: number | null
  }

  export type LaporanHarianSumAggregateOutputType = {
    id: number | null
    stokAwal: number | null
    stokAkhir: number | null
    totalPenjualan: number | null
    totalHPP: number | null
    totalLaba: number | null
    totalKomisi: number | null
  }

  export type LaporanHarianMinAggregateOutputType = {
    id: number | null
    tanggal: Date | null
    stokAwal: number | null
    stokAkhir: number | null
    totalPenjualan: number | null
    totalHPP: number | null
    totalLaba: number | null
    totalKomisi: number | null
  }

  export type LaporanHarianMaxAggregateOutputType = {
    id: number | null
    tanggal: Date | null
    stokAwal: number | null
    stokAkhir: number | null
    totalPenjualan: number | null
    totalHPP: number | null
    totalLaba: number | null
    totalKomisi: number | null
  }

  export type LaporanHarianCountAggregateOutputType = {
    id: number
    tanggal: number
    stokAwal: number
    stokAkhir: number
    totalPenjualan: number
    totalHPP: number
    totalLaba: number
    totalKomisi: number
    _all: number
  }


  export type LaporanHarianAvgAggregateInputType = {
    id?: true
    stokAwal?: true
    stokAkhir?: true
    totalPenjualan?: true
    totalHPP?: true
    totalLaba?: true
    totalKomisi?: true
  }

  export type LaporanHarianSumAggregateInputType = {
    id?: true
    stokAwal?: true
    stokAkhir?: true
    totalPenjualan?: true
    totalHPP?: true
    totalLaba?: true
    totalKomisi?: true
  }

  export type LaporanHarianMinAggregateInputType = {
    id?: true
    tanggal?: true
    stokAwal?: true
    stokAkhir?: true
    totalPenjualan?: true
    totalHPP?: true
    totalLaba?: true
    totalKomisi?: true
  }

  export type LaporanHarianMaxAggregateInputType = {
    id?: true
    tanggal?: true
    stokAwal?: true
    stokAkhir?: true
    totalPenjualan?: true
    totalHPP?: true
    totalLaba?: true
    totalKomisi?: true
  }

  export type LaporanHarianCountAggregateInputType = {
    id?: true
    tanggal?: true
    stokAwal?: true
    stokAkhir?: true
    totalPenjualan?: true
    totalHPP?: true
    totalLaba?: true
    totalKomisi?: true
    _all?: true
  }

  export type LaporanHarianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LaporanHarian to aggregate.
     */
    where?: LaporanHarianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaporanHarians to fetch.
     */
    orderBy?: LaporanHarianOrderByWithRelationInput | LaporanHarianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LaporanHarianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaporanHarians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaporanHarians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LaporanHarians
    **/
    _count?: true | LaporanHarianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LaporanHarianAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LaporanHarianSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LaporanHarianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LaporanHarianMaxAggregateInputType
  }

  export type GetLaporanHarianAggregateType<T extends LaporanHarianAggregateArgs> = {
        [P in keyof T & keyof AggregateLaporanHarian]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLaporanHarian[P]>
      : GetScalarType<T[P], AggregateLaporanHarian[P]>
  }




  export type LaporanHarianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaporanHarianWhereInput
    orderBy?: LaporanHarianOrderByWithAggregationInput | LaporanHarianOrderByWithAggregationInput[]
    by: LaporanHarianScalarFieldEnum[] | LaporanHarianScalarFieldEnum
    having?: LaporanHarianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LaporanHarianCountAggregateInputType | true
    _avg?: LaporanHarianAvgAggregateInputType
    _sum?: LaporanHarianSumAggregateInputType
    _min?: LaporanHarianMinAggregateInputType
    _max?: LaporanHarianMaxAggregateInputType
  }

  export type LaporanHarianGroupByOutputType = {
    id: number
    tanggal: Date
    stokAwal: number
    stokAkhir: number
    totalPenjualan: number
    totalHPP: number
    totalLaba: number
    totalKomisi: number
    _count: LaporanHarianCountAggregateOutputType | null
    _avg: LaporanHarianAvgAggregateOutputType | null
    _sum: LaporanHarianSumAggregateOutputType | null
    _min: LaporanHarianMinAggregateOutputType | null
    _max: LaporanHarianMaxAggregateOutputType | null
  }

  type GetLaporanHarianGroupByPayload<T extends LaporanHarianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LaporanHarianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LaporanHarianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LaporanHarianGroupByOutputType[P]>
            : GetScalarType<T[P], LaporanHarianGroupByOutputType[P]>
        }
      >
    >


  export type LaporanHarianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    stokAwal?: boolean
    stokAkhir?: boolean
    totalPenjualan?: boolean
    totalHPP?: boolean
    totalLaba?: boolean
    totalKomisi?: boolean
  }, ExtArgs["result"]["laporanHarian"]>

  export type LaporanHarianSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    stokAwal?: boolean
    stokAkhir?: boolean
    totalPenjualan?: boolean
    totalHPP?: boolean
    totalLaba?: boolean
    totalKomisi?: boolean
  }, ExtArgs["result"]["laporanHarian"]>

  export type LaporanHarianSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    stokAwal?: boolean
    stokAkhir?: boolean
    totalPenjualan?: boolean
    totalHPP?: boolean
    totalLaba?: boolean
    totalKomisi?: boolean
  }, ExtArgs["result"]["laporanHarian"]>

  export type LaporanHarianSelectScalar = {
    id?: boolean
    tanggal?: boolean
    stokAwal?: boolean
    stokAkhir?: boolean
    totalPenjualan?: boolean
    totalHPP?: boolean
    totalLaba?: boolean
    totalKomisi?: boolean
  }

  export type LaporanHarianOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tanggal" | "stokAwal" | "stokAkhir" | "totalPenjualan" | "totalHPP" | "totalLaba" | "totalKomisi", ExtArgs["result"]["laporanHarian"]>

  export type $LaporanHarianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LaporanHarian"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tanggal: Date
      stokAwal: number
      stokAkhir: number
      totalPenjualan: number
      totalHPP: number
      totalLaba: number
      totalKomisi: number
    }, ExtArgs["result"]["laporanHarian"]>
    composites: {}
  }

  type LaporanHarianGetPayload<S extends boolean | null | undefined | LaporanHarianDefaultArgs> = $Result.GetResult<Prisma.$LaporanHarianPayload, S>

  type LaporanHarianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LaporanHarianFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LaporanHarianCountAggregateInputType | true
    }

  export interface LaporanHarianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LaporanHarian'], meta: { name: 'LaporanHarian' } }
    /**
     * Find zero or one LaporanHarian that matches the filter.
     * @param {LaporanHarianFindUniqueArgs} args - Arguments to find a LaporanHarian
     * @example
     * // Get one LaporanHarian
     * const laporanHarian = await prisma.laporanHarian.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LaporanHarianFindUniqueArgs>(args: SelectSubset<T, LaporanHarianFindUniqueArgs<ExtArgs>>): Prisma__LaporanHarianClient<$Result.GetResult<Prisma.$LaporanHarianPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one LaporanHarian that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LaporanHarianFindUniqueOrThrowArgs} args - Arguments to find a LaporanHarian
     * @example
     * // Get one LaporanHarian
     * const laporanHarian = await prisma.laporanHarian.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LaporanHarianFindUniqueOrThrowArgs>(args: SelectSubset<T, LaporanHarianFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LaporanHarianClient<$Result.GetResult<Prisma.$LaporanHarianPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first LaporanHarian that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanHarianFindFirstArgs} args - Arguments to find a LaporanHarian
     * @example
     * // Get one LaporanHarian
     * const laporanHarian = await prisma.laporanHarian.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LaporanHarianFindFirstArgs>(args?: SelectSubset<T, LaporanHarianFindFirstArgs<ExtArgs>>): Prisma__LaporanHarianClient<$Result.GetResult<Prisma.$LaporanHarianPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first LaporanHarian that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanHarianFindFirstOrThrowArgs} args - Arguments to find a LaporanHarian
     * @example
     * // Get one LaporanHarian
     * const laporanHarian = await prisma.laporanHarian.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LaporanHarianFindFirstOrThrowArgs>(args?: SelectSubset<T, LaporanHarianFindFirstOrThrowArgs<ExtArgs>>): Prisma__LaporanHarianClient<$Result.GetResult<Prisma.$LaporanHarianPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more LaporanHarians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanHarianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LaporanHarians
     * const laporanHarians = await prisma.laporanHarian.findMany()
     * 
     * // Get first 10 LaporanHarians
     * const laporanHarians = await prisma.laporanHarian.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const laporanHarianWithIdOnly = await prisma.laporanHarian.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LaporanHarianFindManyArgs>(args?: SelectSubset<T, LaporanHarianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanHarianPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a LaporanHarian.
     * @param {LaporanHarianCreateArgs} args - Arguments to create a LaporanHarian.
     * @example
     * // Create one LaporanHarian
     * const LaporanHarian = await prisma.laporanHarian.create({
     *   data: {
     *     // ... data to create a LaporanHarian
     *   }
     * })
     * 
     */
    create<T extends LaporanHarianCreateArgs>(args: SelectSubset<T, LaporanHarianCreateArgs<ExtArgs>>): Prisma__LaporanHarianClient<$Result.GetResult<Prisma.$LaporanHarianPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many LaporanHarians.
     * @param {LaporanHarianCreateManyArgs} args - Arguments to create many LaporanHarians.
     * @example
     * // Create many LaporanHarians
     * const laporanHarian = await prisma.laporanHarian.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LaporanHarianCreateManyArgs>(args?: SelectSubset<T, LaporanHarianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LaporanHarians and returns the data saved in the database.
     * @param {LaporanHarianCreateManyAndReturnArgs} args - Arguments to create many LaporanHarians.
     * @example
     * // Create many LaporanHarians
     * const laporanHarian = await prisma.laporanHarian.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LaporanHarians and only return the `id`
     * const laporanHarianWithIdOnly = await prisma.laporanHarian.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LaporanHarianCreateManyAndReturnArgs>(args?: SelectSubset<T, LaporanHarianCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanHarianPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a LaporanHarian.
     * @param {LaporanHarianDeleteArgs} args - Arguments to delete one LaporanHarian.
     * @example
     * // Delete one LaporanHarian
     * const LaporanHarian = await prisma.laporanHarian.delete({
     *   where: {
     *     // ... filter to delete one LaporanHarian
     *   }
     * })
     * 
     */
    delete<T extends LaporanHarianDeleteArgs>(args: SelectSubset<T, LaporanHarianDeleteArgs<ExtArgs>>): Prisma__LaporanHarianClient<$Result.GetResult<Prisma.$LaporanHarianPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one LaporanHarian.
     * @param {LaporanHarianUpdateArgs} args - Arguments to update one LaporanHarian.
     * @example
     * // Update one LaporanHarian
     * const laporanHarian = await prisma.laporanHarian.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LaporanHarianUpdateArgs>(args: SelectSubset<T, LaporanHarianUpdateArgs<ExtArgs>>): Prisma__LaporanHarianClient<$Result.GetResult<Prisma.$LaporanHarianPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more LaporanHarians.
     * @param {LaporanHarianDeleteManyArgs} args - Arguments to filter LaporanHarians to delete.
     * @example
     * // Delete a few LaporanHarians
     * const { count } = await prisma.laporanHarian.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LaporanHarianDeleteManyArgs>(args?: SelectSubset<T, LaporanHarianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LaporanHarians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanHarianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LaporanHarians
     * const laporanHarian = await prisma.laporanHarian.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LaporanHarianUpdateManyArgs>(args: SelectSubset<T, LaporanHarianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LaporanHarians and returns the data updated in the database.
     * @param {LaporanHarianUpdateManyAndReturnArgs} args - Arguments to update many LaporanHarians.
     * @example
     * // Update many LaporanHarians
     * const laporanHarian = await prisma.laporanHarian.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LaporanHarians and only return the `id`
     * const laporanHarianWithIdOnly = await prisma.laporanHarian.updateManyAndReturn({
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
    updateManyAndReturn<T extends LaporanHarianUpdateManyAndReturnArgs>(args: SelectSubset<T, LaporanHarianUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanHarianPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one LaporanHarian.
     * @param {LaporanHarianUpsertArgs} args - Arguments to update or create a LaporanHarian.
     * @example
     * // Update or create a LaporanHarian
     * const laporanHarian = await prisma.laporanHarian.upsert({
     *   create: {
     *     // ... data to create a LaporanHarian
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LaporanHarian we want to update
     *   }
     * })
     */
    upsert<T extends LaporanHarianUpsertArgs>(args: SelectSubset<T, LaporanHarianUpsertArgs<ExtArgs>>): Prisma__LaporanHarianClient<$Result.GetResult<Prisma.$LaporanHarianPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of LaporanHarians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanHarianCountArgs} args - Arguments to filter LaporanHarians to count.
     * @example
     * // Count the number of LaporanHarians
     * const count = await prisma.laporanHarian.count({
     *   where: {
     *     // ... the filter for the LaporanHarians we want to count
     *   }
     * })
    **/
    count<T extends LaporanHarianCountArgs>(
      args?: Subset<T, LaporanHarianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LaporanHarianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LaporanHarian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanHarianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LaporanHarianAggregateArgs>(args: Subset<T, LaporanHarianAggregateArgs>): Prisma.PrismaPromise<GetLaporanHarianAggregateType<T>>

    /**
     * Group by LaporanHarian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanHarianGroupByArgs} args - Group by arguments.
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
      T extends LaporanHarianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LaporanHarianGroupByArgs['orderBy'] }
        : { orderBy?: LaporanHarianGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LaporanHarianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLaporanHarianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LaporanHarian model
   */
  readonly fields: LaporanHarianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LaporanHarian.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LaporanHarianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the LaporanHarian model
   */ 
  interface LaporanHarianFieldRefs {
    readonly id: FieldRef<"LaporanHarian", 'Int'>
    readonly tanggal: FieldRef<"LaporanHarian", 'DateTime'>
    readonly stokAwal: FieldRef<"LaporanHarian", 'Int'>
    readonly stokAkhir: FieldRef<"LaporanHarian", 'Int'>
    readonly totalPenjualan: FieldRef<"LaporanHarian", 'Int'>
    readonly totalHPP: FieldRef<"LaporanHarian", 'Int'>
    readonly totalLaba: FieldRef<"LaporanHarian", 'Int'>
    readonly totalKomisi: FieldRef<"LaporanHarian", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LaporanHarian findUnique
   */
  export type LaporanHarianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanHarian
     */
    select?: LaporanHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanHarian
     */
    omit?: LaporanHarianOmit<ExtArgs> | null
    /**
     * Filter, which LaporanHarian to fetch.
     */
    where: LaporanHarianWhereUniqueInput
  }

  /**
   * LaporanHarian findUniqueOrThrow
   */
  export type LaporanHarianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanHarian
     */
    select?: LaporanHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanHarian
     */
    omit?: LaporanHarianOmit<ExtArgs> | null
    /**
     * Filter, which LaporanHarian to fetch.
     */
    where: LaporanHarianWhereUniqueInput
  }

  /**
   * LaporanHarian findFirst
   */
  export type LaporanHarianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanHarian
     */
    select?: LaporanHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanHarian
     */
    omit?: LaporanHarianOmit<ExtArgs> | null
    /**
     * Filter, which LaporanHarian to fetch.
     */
    where?: LaporanHarianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaporanHarians to fetch.
     */
    orderBy?: LaporanHarianOrderByWithRelationInput | LaporanHarianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LaporanHarians.
     */
    cursor?: LaporanHarianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaporanHarians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaporanHarians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LaporanHarians.
     */
    distinct?: LaporanHarianScalarFieldEnum | LaporanHarianScalarFieldEnum[]
  }

  /**
   * LaporanHarian findFirstOrThrow
   */
  export type LaporanHarianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanHarian
     */
    select?: LaporanHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanHarian
     */
    omit?: LaporanHarianOmit<ExtArgs> | null
    /**
     * Filter, which LaporanHarian to fetch.
     */
    where?: LaporanHarianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaporanHarians to fetch.
     */
    orderBy?: LaporanHarianOrderByWithRelationInput | LaporanHarianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LaporanHarians.
     */
    cursor?: LaporanHarianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaporanHarians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaporanHarians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LaporanHarians.
     */
    distinct?: LaporanHarianScalarFieldEnum | LaporanHarianScalarFieldEnum[]
  }

  /**
   * LaporanHarian findMany
   */
  export type LaporanHarianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanHarian
     */
    select?: LaporanHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanHarian
     */
    omit?: LaporanHarianOmit<ExtArgs> | null
    /**
     * Filter, which LaporanHarians to fetch.
     */
    where?: LaporanHarianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaporanHarians to fetch.
     */
    orderBy?: LaporanHarianOrderByWithRelationInput | LaporanHarianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LaporanHarians.
     */
    cursor?: LaporanHarianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaporanHarians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaporanHarians.
     */
    skip?: number
    distinct?: LaporanHarianScalarFieldEnum | LaporanHarianScalarFieldEnum[]
  }

  /**
   * LaporanHarian create
   */
  export type LaporanHarianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanHarian
     */
    select?: LaporanHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanHarian
     */
    omit?: LaporanHarianOmit<ExtArgs> | null
    /**
     * The data needed to create a LaporanHarian.
     */
    data: XOR<LaporanHarianCreateInput, LaporanHarianUncheckedCreateInput>
  }

  /**
   * LaporanHarian createMany
   */
  export type LaporanHarianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LaporanHarians.
     */
    data: LaporanHarianCreateManyInput | LaporanHarianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LaporanHarian createManyAndReturn
   */
  export type LaporanHarianCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanHarian
     */
    select?: LaporanHarianSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanHarian
     */
    omit?: LaporanHarianOmit<ExtArgs> | null
    /**
     * The data used to create many LaporanHarians.
     */
    data: LaporanHarianCreateManyInput | LaporanHarianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LaporanHarian update
   */
  export type LaporanHarianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanHarian
     */
    select?: LaporanHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanHarian
     */
    omit?: LaporanHarianOmit<ExtArgs> | null
    /**
     * The data needed to update a LaporanHarian.
     */
    data: XOR<LaporanHarianUpdateInput, LaporanHarianUncheckedUpdateInput>
    /**
     * Choose, which LaporanHarian to update.
     */
    where: LaporanHarianWhereUniqueInput
  }

  /**
   * LaporanHarian updateMany
   */
  export type LaporanHarianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LaporanHarians.
     */
    data: XOR<LaporanHarianUpdateManyMutationInput, LaporanHarianUncheckedUpdateManyInput>
    /**
     * Filter which LaporanHarians to update
     */
    where?: LaporanHarianWhereInput
    /**
     * Limit how many LaporanHarians to update.
     */
    limit?: number
  }

  /**
   * LaporanHarian updateManyAndReturn
   */
  export type LaporanHarianUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanHarian
     */
    select?: LaporanHarianSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanHarian
     */
    omit?: LaporanHarianOmit<ExtArgs> | null
    /**
     * The data used to update LaporanHarians.
     */
    data: XOR<LaporanHarianUpdateManyMutationInput, LaporanHarianUncheckedUpdateManyInput>
    /**
     * Filter which LaporanHarians to update
     */
    where?: LaporanHarianWhereInput
    /**
     * Limit how many LaporanHarians to update.
     */
    limit?: number
  }

  /**
   * LaporanHarian upsert
   */
  export type LaporanHarianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanHarian
     */
    select?: LaporanHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanHarian
     */
    omit?: LaporanHarianOmit<ExtArgs> | null
    /**
     * The filter to search for the LaporanHarian to update in case it exists.
     */
    where: LaporanHarianWhereUniqueInput
    /**
     * In case the LaporanHarian found by the `where` argument doesn't exist, create a new LaporanHarian with this data.
     */
    create: XOR<LaporanHarianCreateInput, LaporanHarianUncheckedCreateInput>
    /**
     * In case the LaporanHarian was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LaporanHarianUpdateInput, LaporanHarianUncheckedUpdateInput>
  }

  /**
   * LaporanHarian delete
   */
  export type LaporanHarianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanHarian
     */
    select?: LaporanHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanHarian
     */
    omit?: LaporanHarianOmit<ExtArgs> | null
    /**
     * Filter which LaporanHarian to delete.
     */
    where: LaporanHarianWhereUniqueInput
  }

  /**
   * LaporanHarian deleteMany
   */
  export type LaporanHarianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LaporanHarians to delete
     */
    where?: LaporanHarianWhereInput
    /**
     * Limit how many LaporanHarians to delete.
     */
    limit?: number
  }

  /**
   * LaporanHarian without action
   */
  export type LaporanHarianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanHarian
     */
    select?: LaporanHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaporanHarian
     */
    omit?: LaporanHarianOmit<ExtArgs> | null
  }


  /**
   * Model Suplier
   */

  export type AggregateSuplier = {
    _count: SuplierCountAggregateOutputType | null
    _avg: SuplierAvgAggregateOutputType | null
    _sum: SuplierSumAggregateOutputType | null
    _min: SuplierMinAggregateOutputType | null
    _max: SuplierMaxAggregateOutputType | null
  }

  export type SuplierAvgAggregateOutputType = {
    id: number | null
  }

  export type SuplierSumAggregateOutputType = {
    id: number | null
  }

  export type SuplierMinAggregateOutputType = {
    id: number | null
    nama: string | null
    kontak: string | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type SuplierMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    kontak: string | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type SuplierCountAggregateOutputType = {
    id: number
    nama: number
    kontak: number
    isDeleted: number
    deletedAt: number
    _all: number
  }


  export type SuplierAvgAggregateInputType = {
    id?: true
  }

  export type SuplierSumAggregateInputType = {
    id?: true
  }

  export type SuplierMinAggregateInputType = {
    id?: true
    nama?: true
    kontak?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type SuplierMaxAggregateInputType = {
    id?: true
    nama?: true
    kontak?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type SuplierCountAggregateInputType = {
    id?: true
    nama?: true
    kontak?: true
    isDeleted?: true
    deletedAt?: true
    _all?: true
  }

  export type SuplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suplier to aggregate.
     */
    where?: SuplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supliers to fetch.
     */
    orderBy?: SuplierOrderByWithRelationInput | SuplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Supliers
    **/
    _count?: true | SuplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SuplierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SuplierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuplierMaxAggregateInputType
  }

  export type GetSuplierAggregateType<T extends SuplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSuplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuplier[P]>
      : GetScalarType<T[P], AggregateSuplier[P]>
  }




  export type SuplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuplierWhereInput
    orderBy?: SuplierOrderByWithAggregationInput | SuplierOrderByWithAggregationInput[]
    by: SuplierScalarFieldEnum[] | SuplierScalarFieldEnum
    having?: SuplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuplierCountAggregateInputType | true
    _avg?: SuplierAvgAggregateInputType
    _sum?: SuplierSumAggregateInputType
    _min?: SuplierMinAggregateInputType
    _max?: SuplierMaxAggregateInputType
  }

  export type SuplierGroupByOutputType = {
    id: number
    nama: string
    kontak: string | null
    isDeleted: boolean
    deletedAt: Date | null
    _count: SuplierCountAggregateOutputType | null
    _avg: SuplierAvgAggregateOutputType | null
    _sum: SuplierSumAggregateOutputType | null
    _min: SuplierMinAggregateOutputType | null
    _max: SuplierMaxAggregateOutputType | null
  }

  type GetSuplierGroupByPayload<T extends SuplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuplierGroupByOutputType[P]>
            : GetScalarType<T[P], SuplierGroupByOutputType[P]>
        }
      >
    >


  export type SuplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    kontak?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    Pembelian?: boolean | Suplier$PembelianArgs<ExtArgs>
    _count?: boolean | SuplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suplier"]>

  export type SuplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    kontak?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["suplier"]>

  export type SuplierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    kontak?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["suplier"]>

  export type SuplierSelectScalar = {
    id?: boolean
    nama?: boolean
    kontak?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
  }

  export type SuplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "kontak" | "isDeleted" | "deletedAt", ExtArgs["result"]["suplier"]>
  export type SuplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pembelian?: boolean | Suplier$PembelianArgs<ExtArgs>
    _count?: boolean | SuplierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SuplierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SuplierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SuplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Suplier"
    objects: {
      Pembelian: Prisma.$PembelianPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      kontak: string | null
      isDeleted: boolean
      deletedAt: Date | null
    }, ExtArgs["result"]["suplier"]>
    composites: {}
  }

  type SuplierGetPayload<S extends boolean | null | undefined | SuplierDefaultArgs> = $Result.GetResult<Prisma.$SuplierPayload, S>

  type SuplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SuplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuplierCountAggregateInputType | true
    }

  export interface SuplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Suplier'], meta: { name: 'Suplier' } }
    /**
     * Find zero or one Suplier that matches the filter.
     * @param {SuplierFindUniqueArgs} args - Arguments to find a Suplier
     * @example
     * // Get one Suplier
     * const suplier = await prisma.suplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuplierFindUniqueArgs>(args: SelectSubset<T, SuplierFindUniqueArgs<ExtArgs>>): Prisma__SuplierClient<$Result.GetResult<Prisma.$SuplierPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Suplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuplierFindUniqueOrThrowArgs} args - Arguments to find a Suplier
     * @example
     * // Get one Suplier
     * const suplier = await prisma.suplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuplierFindUniqueOrThrowArgs>(args: SelectSubset<T, SuplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuplierClient<$Result.GetResult<Prisma.$SuplierPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Suplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuplierFindFirstArgs} args - Arguments to find a Suplier
     * @example
     * // Get one Suplier
     * const suplier = await prisma.suplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuplierFindFirstArgs>(args?: SelectSubset<T, SuplierFindFirstArgs<ExtArgs>>): Prisma__SuplierClient<$Result.GetResult<Prisma.$SuplierPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Suplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuplierFindFirstOrThrowArgs} args - Arguments to find a Suplier
     * @example
     * // Get one Suplier
     * const suplier = await prisma.suplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuplierFindFirstOrThrowArgs>(args?: SelectSubset<T, SuplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuplierClient<$Result.GetResult<Prisma.$SuplierPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Supliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Supliers
     * const supliers = await prisma.suplier.findMany()
     * 
     * // Get first 10 Supliers
     * const supliers = await prisma.suplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const suplierWithIdOnly = await prisma.suplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuplierFindManyArgs>(args?: SelectSubset<T, SuplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuplierPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Suplier.
     * @param {SuplierCreateArgs} args - Arguments to create a Suplier.
     * @example
     * // Create one Suplier
     * const Suplier = await prisma.suplier.create({
     *   data: {
     *     // ... data to create a Suplier
     *   }
     * })
     * 
     */
    create<T extends SuplierCreateArgs>(args: SelectSubset<T, SuplierCreateArgs<ExtArgs>>): Prisma__SuplierClient<$Result.GetResult<Prisma.$SuplierPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Supliers.
     * @param {SuplierCreateManyArgs} args - Arguments to create many Supliers.
     * @example
     * // Create many Supliers
     * const suplier = await prisma.suplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuplierCreateManyArgs>(args?: SelectSubset<T, SuplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Supliers and returns the data saved in the database.
     * @param {SuplierCreateManyAndReturnArgs} args - Arguments to create many Supliers.
     * @example
     * // Create many Supliers
     * const suplier = await prisma.suplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Supliers and only return the `id`
     * const suplierWithIdOnly = await prisma.suplier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SuplierCreateManyAndReturnArgs>(args?: SelectSubset<T, SuplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuplierPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Suplier.
     * @param {SuplierDeleteArgs} args - Arguments to delete one Suplier.
     * @example
     * // Delete one Suplier
     * const Suplier = await prisma.suplier.delete({
     *   where: {
     *     // ... filter to delete one Suplier
     *   }
     * })
     * 
     */
    delete<T extends SuplierDeleteArgs>(args: SelectSubset<T, SuplierDeleteArgs<ExtArgs>>): Prisma__SuplierClient<$Result.GetResult<Prisma.$SuplierPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Suplier.
     * @param {SuplierUpdateArgs} args - Arguments to update one Suplier.
     * @example
     * // Update one Suplier
     * const suplier = await prisma.suplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuplierUpdateArgs>(args: SelectSubset<T, SuplierUpdateArgs<ExtArgs>>): Prisma__SuplierClient<$Result.GetResult<Prisma.$SuplierPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Supliers.
     * @param {SuplierDeleteManyArgs} args - Arguments to filter Supliers to delete.
     * @example
     * // Delete a few Supliers
     * const { count } = await prisma.suplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuplierDeleteManyArgs>(args?: SelectSubset<T, SuplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Supliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Supliers
     * const suplier = await prisma.suplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuplierUpdateManyArgs>(args: SelectSubset<T, SuplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Supliers and returns the data updated in the database.
     * @param {SuplierUpdateManyAndReturnArgs} args - Arguments to update many Supliers.
     * @example
     * // Update many Supliers
     * const suplier = await prisma.suplier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Supliers and only return the `id`
     * const suplierWithIdOnly = await prisma.suplier.updateManyAndReturn({
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
    updateManyAndReturn<T extends SuplierUpdateManyAndReturnArgs>(args: SelectSubset<T, SuplierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuplierPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Suplier.
     * @param {SuplierUpsertArgs} args - Arguments to update or create a Suplier.
     * @example
     * // Update or create a Suplier
     * const suplier = await prisma.suplier.upsert({
     *   create: {
     *     // ... data to create a Suplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Suplier we want to update
     *   }
     * })
     */
    upsert<T extends SuplierUpsertArgs>(args: SelectSubset<T, SuplierUpsertArgs<ExtArgs>>): Prisma__SuplierClient<$Result.GetResult<Prisma.$SuplierPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Supliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuplierCountArgs} args - Arguments to filter Supliers to count.
     * @example
     * // Count the number of Supliers
     * const count = await prisma.suplier.count({
     *   where: {
     *     // ... the filter for the Supliers we want to count
     *   }
     * })
    **/
    count<T extends SuplierCountArgs>(
      args?: Subset<T, SuplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Suplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuplierAggregateArgs>(args: Subset<T, SuplierAggregateArgs>): Prisma.PrismaPromise<GetSuplierAggregateType<T>>

    /**
     * Group by Suplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuplierGroupByArgs} args - Group by arguments.
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
      T extends SuplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuplierGroupByArgs['orderBy'] }
        : { orderBy?: SuplierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SuplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Suplier model
   */
  readonly fields: SuplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Suplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pembelian<T extends Suplier$PembelianArgs<ExtArgs> = {}>(args?: Subset<T, Suplier$PembelianArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Suplier model
   */ 
  interface SuplierFieldRefs {
    readonly id: FieldRef<"Suplier", 'Int'>
    readonly nama: FieldRef<"Suplier", 'String'>
    readonly kontak: FieldRef<"Suplier", 'String'>
    readonly isDeleted: FieldRef<"Suplier", 'Boolean'>
    readonly deletedAt: FieldRef<"Suplier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Suplier findUnique
   */
  export type SuplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suplier
     */
    select?: SuplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suplier
     */
    omit?: SuplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuplierInclude<ExtArgs> | null
    /**
     * Filter, which Suplier to fetch.
     */
    where: SuplierWhereUniqueInput
  }

  /**
   * Suplier findUniqueOrThrow
   */
  export type SuplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suplier
     */
    select?: SuplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suplier
     */
    omit?: SuplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuplierInclude<ExtArgs> | null
    /**
     * Filter, which Suplier to fetch.
     */
    where: SuplierWhereUniqueInput
  }

  /**
   * Suplier findFirst
   */
  export type SuplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suplier
     */
    select?: SuplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suplier
     */
    omit?: SuplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuplierInclude<ExtArgs> | null
    /**
     * Filter, which Suplier to fetch.
     */
    where?: SuplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supliers to fetch.
     */
    orderBy?: SuplierOrderByWithRelationInput | SuplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Supliers.
     */
    cursor?: SuplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Supliers.
     */
    distinct?: SuplierScalarFieldEnum | SuplierScalarFieldEnum[]
  }

  /**
   * Suplier findFirstOrThrow
   */
  export type SuplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suplier
     */
    select?: SuplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suplier
     */
    omit?: SuplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuplierInclude<ExtArgs> | null
    /**
     * Filter, which Suplier to fetch.
     */
    where?: SuplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supliers to fetch.
     */
    orderBy?: SuplierOrderByWithRelationInput | SuplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Supliers.
     */
    cursor?: SuplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Supliers.
     */
    distinct?: SuplierScalarFieldEnum | SuplierScalarFieldEnum[]
  }

  /**
   * Suplier findMany
   */
  export type SuplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suplier
     */
    select?: SuplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suplier
     */
    omit?: SuplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuplierInclude<ExtArgs> | null
    /**
     * Filter, which Supliers to fetch.
     */
    where?: SuplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supliers to fetch.
     */
    orderBy?: SuplierOrderByWithRelationInput | SuplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Supliers.
     */
    cursor?: SuplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supliers.
     */
    skip?: number
    distinct?: SuplierScalarFieldEnum | SuplierScalarFieldEnum[]
  }

  /**
   * Suplier create
   */
  export type SuplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suplier
     */
    select?: SuplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suplier
     */
    omit?: SuplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuplierInclude<ExtArgs> | null
    /**
     * The data needed to create a Suplier.
     */
    data: XOR<SuplierCreateInput, SuplierUncheckedCreateInput>
  }

  /**
   * Suplier createMany
   */
  export type SuplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Supliers.
     */
    data: SuplierCreateManyInput | SuplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Suplier createManyAndReturn
   */
  export type SuplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suplier
     */
    select?: SuplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Suplier
     */
    omit?: SuplierOmit<ExtArgs> | null
    /**
     * The data used to create many Supliers.
     */
    data: SuplierCreateManyInput | SuplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Suplier update
   */
  export type SuplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suplier
     */
    select?: SuplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suplier
     */
    omit?: SuplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuplierInclude<ExtArgs> | null
    /**
     * The data needed to update a Suplier.
     */
    data: XOR<SuplierUpdateInput, SuplierUncheckedUpdateInput>
    /**
     * Choose, which Suplier to update.
     */
    where: SuplierWhereUniqueInput
  }

  /**
   * Suplier updateMany
   */
  export type SuplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Supliers.
     */
    data: XOR<SuplierUpdateManyMutationInput, SuplierUncheckedUpdateManyInput>
    /**
     * Filter which Supliers to update
     */
    where?: SuplierWhereInput
    /**
     * Limit how many Supliers to update.
     */
    limit?: number
  }

  /**
   * Suplier updateManyAndReturn
   */
  export type SuplierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suplier
     */
    select?: SuplierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Suplier
     */
    omit?: SuplierOmit<ExtArgs> | null
    /**
     * The data used to update Supliers.
     */
    data: XOR<SuplierUpdateManyMutationInput, SuplierUncheckedUpdateManyInput>
    /**
     * Filter which Supliers to update
     */
    where?: SuplierWhereInput
    /**
     * Limit how many Supliers to update.
     */
    limit?: number
  }

  /**
   * Suplier upsert
   */
  export type SuplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suplier
     */
    select?: SuplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suplier
     */
    omit?: SuplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuplierInclude<ExtArgs> | null
    /**
     * The filter to search for the Suplier to update in case it exists.
     */
    where: SuplierWhereUniqueInput
    /**
     * In case the Suplier found by the `where` argument doesn't exist, create a new Suplier with this data.
     */
    create: XOR<SuplierCreateInput, SuplierUncheckedCreateInput>
    /**
     * In case the Suplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuplierUpdateInput, SuplierUncheckedUpdateInput>
  }

  /**
   * Suplier delete
   */
  export type SuplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suplier
     */
    select?: SuplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suplier
     */
    omit?: SuplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuplierInclude<ExtArgs> | null
    /**
     * Filter which Suplier to delete.
     */
    where: SuplierWhereUniqueInput
  }

  /**
   * Suplier deleteMany
   */
  export type SuplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supliers to delete
     */
    where?: SuplierWhereInput
    /**
     * Limit how many Supliers to delete.
     */
    limit?: number
  }

  /**
   * Suplier.Pembelian
   */
  export type Suplier$PembelianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian
     */
    omit?: PembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianInclude<ExtArgs> | null
    where?: PembelianWhereInput
    orderBy?: PembelianOrderByWithRelationInput | PembelianOrderByWithRelationInput[]
    cursor?: PembelianWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PembelianScalarFieldEnum | PembelianScalarFieldEnum[]
  }

  /**
   * Suplier without action
   */
  export type SuplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suplier
     */
    select?: SuplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suplier
     */
    omit?: SuplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuplierInclude<ExtArgs> | null
  }


  /**
   * Model Pembelian
   */

  export type AggregatePembelian = {
    _count: PembelianCountAggregateOutputType | null
    _avg: PembelianAvgAggregateOutputType | null
    _sum: PembelianSumAggregateOutputType | null
    _min: PembelianMinAggregateOutputType | null
    _max: PembelianMaxAggregateOutputType | null
  }

  export type PembelianAvgAggregateOutputType = {
    id: number | null
    suplierId: number | null
    total: number | null
  }

  export type PembelianSumAggregateOutputType = {
    id: number | null
    suplierId: number | null
    total: number | null
  }

  export type PembelianMinAggregateOutputType = {
    id: number | null
    suplierId: number | null
    tanggal: Date | null
    total: number | null
    status: $Enums.StatusPembelian | null
    createdAt: Date | null
  }

  export type PembelianMaxAggregateOutputType = {
    id: number | null
    suplierId: number | null
    tanggal: Date | null
    total: number | null
    status: $Enums.StatusPembelian | null
    createdAt: Date | null
  }

  export type PembelianCountAggregateOutputType = {
    id: number
    suplierId: number
    tanggal: number
    total: number
    status: number
    createdAt: number
    _all: number
  }


  export type PembelianAvgAggregateInputType = {
    id?: true
    suplierId?: true
    total?: true
  }

  export type PembelianSumAggregateInputType = {
    id?: true
    suplierId?: true
    total?: true
  }

  export type PembelianMinAggregateInputType = {
    id?: true
    suplierId?: true
    tanggal?: true
    total?: true
    status?: true
    createdAt?: true
  }

  export type PembelianMaxAggregateInputType = {
    id?: true
    suplierId?: true
    tanggal?: true
    total?: true
    status?: true
    createdAt?: true
  }

  export type PembelianCountAggregateInputType = {
    id?: true
    suplierId?: true
    tanggal?: true
    total?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type PembelianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pembelian to aggregate.
     */
    where?: PembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembelians to fetch.
     */
    orderBy?: PembelianOrderByWithRelationInput | PembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembelians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pembelians
    **/
    _count?: true | PembelianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PembelianAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PembelianSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PembelianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PembelianMaxAggregateInputType
  }

  export type GetPembelianAggregateType<T extends PembelianAggregateArgs> = {
        [P in keyof T & keyof AggregatePembelian]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePembelian[P]>
      : GetScalarType<T[P], AggregatePembelian[P]>
  }




  export type PembelianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PembelianWhereInput
    orderBy?: PembelianOrderByWithAggregationInput | PembelianOrderByWithAggregationInput[]
    by: PembelianScalarFieldEnum[] | PembelianScalarFieldEnum
    having?: PembelianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PembelianCountAggregateInputType | true
    _avg?: PembelianAvgAggregateInputType
    _sum?: PembelianSumAggregateInputType
    _min?: PembelianMinAggregateInputType
    _max?: PembelianMaxAggregateInputType
  }

  export type PembelianGroupByOutputType = {
    id: number
    suplierId: number
    tanggal: Date
    total: number
    status: $Enums.StatusPembelian
    createdAt: Date
    _count: PembelianCountAggregateOutputType | null
    _avg: PembelianAvgAggregateOutputType | null
    _sum: PembelianSumAggregateOutputType | null
    _min: PembelianMinAggregateOutputType | null
    _max: PembelianMaxAggregateOutputType | null
  }

  type GetPembelianGroupByPayload<T extends PembelianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PembelianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PembelianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PembelianGroupByOutputType[P]>
            : GetScalarType<T[P], PembelianGroupByOutputType[P]>
        }
      >
    >


  export type PembelianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    suplierId?: boolean
    tanggal?: boolean
    total?: boolean
    status?: boolean
    createdAt?: boolean
    suplier?: boolean | SuplierDefaultArgs<ExtArgs>
    PembelianDetail?: boolean | Pembelian$PembelianDetailArgs<ExtArgs>
    Piutang?: boolean | Pembelian$PiutangArgs<ExtArgs>
    _count?: boolean | PembelianCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pembelian"]>

  export type PembelianSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    suplierId?: boolean
    tanggal?: boolean
    total?: boolean
    status?: boolean
    createdAt?: boolean
    suplier?: boolean | SuplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pembelian"]>

  export type PembelianSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    suplierId?: boolean
    tanggal?: boolean
    total?: boolean
    status?: boolean
    createdAt?: boolean
    suplier?: boolean | SuplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pembelian"]>

  export type PembelianSelectScalar = {
    id?: boolean
    suplierId?: boolean
    tanggal?: boolean
    total?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type PembelianOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "suplierId" | "tanggal" | "total" | "status" | "createdAt", ExtArgs["result"]["pembelian"]>
  export type PembelianInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suplier?: boolean | SuplierDefaultArgs<ExtArgs>
    PembelianDetail?: boolean | Pembelian$PembelianDetailArgs<ExtArgs>
    Piutang?: boolean | Pembelian$PiutangArgs<ExtArgs>
    _count?: boolean | PembelianCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PembelianIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suplier?: boolean | SuplierDefaultArgs<ExtArgs>
  }
  export type PembelianIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suplier?: boolean | SuplierDefaultArgs<ExtArgs>
  }

  export type $PembelianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pembelian"
    objects: {
      suplier: Prisma.$SuplierPayload<ExtArgs>
      PembelianDetail: Prisma.$PembelianDetailPayload<ExtArgs>[]
      Piutang: Prisma.$PiutangPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      suplierId: number
      tanggal: Date
      total: number
      status: $Enums.StatusPembelian
      createdAt: Date
    }, ExtArgs["result"]["pembelian"]>
    composites: {}
  }

  type PembelianGetPayload<S extends boolean | null | undefined | PembelianDefaultArgs> = $Result.GetResult<Prisma.$PembelianPayload, S>

  type PembelianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PembelianFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PembelianCountAggregateInputType | true
    }

  export interface PembelianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pembelian'], meta: { name: 'Pembelian' } }
    /**
     * Find zero or one Pembelian that matches the filter.
     * @param {PembelianFindUniqueArgs} args - Arguments to find a Pembelian
     * @example
     * // Get one Pembelian
     * const pembelian = await prisma.pembelian.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PembelianFindUniqueArgs>(args: SelectSubset<T, PembelianFindUniqueArgs<ExtArgs>>): Prisma__PembelianClient<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Pembelian that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PembelianFindUniqueOrThrowArgs} args - Arguments to find a Pembelian
     * @example
     * // Get one Pembelian
     * const pembelian = await prisma.pembelian.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PembelianFindUniqueOrThrowArgs>(args: SelectSubset<T, PembelianFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PembelianClient<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Pembelian that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembelianFindFirstArgs} args - Arguments to find a Pembelian
     * @example
     * // Get one Pembelian
     * const pembelian = await prisma.pembelian.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PembelianFindFirstArgs>(args?: SelectSubset<T, PembelianFindFirstArgs<ExtArgs>>): Prisma__PembelianClient<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Pembelian that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembelianFindFirstOrThrowArgs} args - Arguments to find a Pembelian
     * @example
     * // Get one Pembelian
     * const pembelian = await prisma.pembelian.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PembelianFindFirstOrThrowArgs>(args?: SelectSubset<T, PembelianFindFirstOrThrowArgs<ExtArgs>>): Prisma__PembelianClient<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Pembelians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembelianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pembelians
     * const pembelians = await prisma.pembelian.findMany()
     * 
     * // Get first 10 Pembelians
     * const pembelians = await prisma.pembelian.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pembelianWithIdOnly = await prisma.pembelian.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PembelianFindManyArgs>(args?: SelectSubset<T, PembelianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Pembelian.
     * @param {PembelianCreateArgs} args - Arguments to create a Pembelian.
     * @example
     * // Create one Pembelian
     * const Pembelian = await prisma.pembelian.create({
     *   data: {
     *     // ... data to create a Pembelian
     *   }
     * })
     * 
     */
    create<T extends PembelianCreateArgs>(args: SelectSubset<T, PembelianCreateArgs<ExtArgs>>): Prisma__PembelianClient<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Pembelians.
     * @param {PembelianCreateManyArgs} args - Arguments to create many Pembelians.
     * @example
     * // Create many Pembelians
     * const pembelian = await prisma.pembelian.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PembelianCreateManyArgs>(args?: SelectSubset<T, PembelianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pembelians and returns the data saved in the database.
     * @param {PembelianCreateManyAndReturnArgs} args - Arguments to create many Pembelians.
     * @example
     * // Create many Pembelians
     * const pembelian = await prisma.pembelian.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pembelians and only return the `id`
     * const pembelianWithIdOnly = await prisma.pembelian.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PembelianCreateManyAndReturnArgs>(args?: SelectSubset<T, PembelianCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Pembelian.
     * @param {PembelianDeleteArgs} args - Arguments to delete one Pembelian.
     * @example
     * // Delete one Pembelian
     * const Pembelian = await prisma.pembelian.delete({
     *   where: {
     *     // ... filter to delete one Pembelian
     *   }
     * })
     * 
     */
    delete<T extends PembelianDeleteArgs>(args: SelectSubset<T, PembelianDeleteArgs<ExtArgs>>): Prisma__PembelianClient<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Pembelian.
     * @param {PembelianUpdateArgs} args - Arguments to update one Pembelian.
     * @example
     * // Update one Pembelian
     * const pembelian = await prisma.pembelian.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PembelianUpdateArgs>(args: SelectSubset<T, PembelianUpdateArgs<ExtArgs>>): Prisma__PembelianClient<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Pembelians.
     * @param {PembelianDeleteManyArgs} args - Arguments to filter Pembelians to delete.
     * @example
     * // Delete a few Pembelians
     * const { count } = await prisma.pembelian.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PembelianDeleteManyArgs>(args?: SelectSubset<T, PembelianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pembelians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembelianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pembelians
     * const pembelian = await prisma.pembelian.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PembelianUpdateManyArgs>(args: SelectSubset<T, PembelianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pembelians and returns the data updated in the database.
     * @param {PembelianUpdateManyAndReturnArgs} args - Arguments to update many Pembelians.
     * @example
     * // Update many Pembelians
     * const pembelian = await prisma.pembelian.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pembelians and only return the `id`
     * const pembelianWithIdOnly = await prisma.pembelian.updateManyAndReturn({
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
    updateManyAndReturn<T extends PembelianUpdateManyAndReturnArgs>(args: SelectSubset<T, PembelianUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Pembelian.
     * @param {PembelianUpsertArgs} args - Arguments to update or create a Pembelian.
     * @example
     * // Update or create a Pembelian
     * const pembelian = await prisma.pembelian.upsert({
     *   create: {
     *     // ... data to create a Pembelian
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pembelian we want to update
     *   }
     * })
     */
    upsert<T extends PembelianUpsertArgs>(args: SelectSubset<T, PembelianUpsertArgs<ExtArgs>>): Prisma__PembelianClient<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Pembelians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembelianCountArgs} args - Arguments to filter Pembelians to count.
     * @example
     * // Count the number of Pembelians
     * const count = await prisma.pembelian.count({
     *   where: {
     *     // ... the filter for the Pembelians we want to count
     *   }
     * })
    **/
    count<T extends PembelianCountArgs>(
      args?: Subset<T, PembelianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PembelianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pembelian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembelianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PembelianAggregateArgs>(args: Subset<T, PembelianAggregateArgs>): Prisma.PrismaPromise<GetPembelianAggregateType<T>>

    /**
     * Group by Pembelian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembelianGroupByArgs} args - Group by arguments.
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
      T extends PembelianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PembelianGroupByArgs['orderBy'] }
        : { orderBy?: PembelianGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PembelianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPembelianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pembelian model
   */
  readonly fields: PembelianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pembelian.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PembelianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    suplier<T extends SuplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SuplierDefaultArgs<ExtArgs>>): Prisma__SuplierClient<$Result.GetResult<Prisma.$SuplierPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    PembelianDetail<T extends Pembelian$PembelianDetailArgs<ExtArgs> = {}>(args?: Subset<T, Pembelian$PembelianDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembelianDetailPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Piutang<T extends Pembelian$PiutangArgs<ExtArgs> = {}>(args?: Subset<T, Pembelian$PiutangArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PiutangPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Pembelian model
   */ 
  interface PembelianFieldRefs {
    readonly id: FieldRef<"Pembelian", 'Int'>
    readonly suplierId: FieldRef<"Pembelian", 'Int'>
    readonly tanggal: FieldRef<"Pembelian", 'DateTime'>
    readonly total: FieldRef<"Pembelian", 'Int'>
    readonly status: FieldRef<"Pembelian", 'StatusPembelian'>
    readonly createdAt: FieldRef<"Pembelian", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pembelian findUnique
   */
  export type PembelianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian
     */
    omit?: PembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianInclude<ExtArgs> | null
    /**
     * Filter, which Pembelian to fetch.
     */
    where: PembelianWhereUniqueInput
  }

  /**
   * Pembelian findUniqueOrThrow
   */
  export type PembelianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian
     */
    omit?: PembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianInclude<ExtArgs> | null
    /**
     * Filter, which Pembelian to fetch.
     */
    where: PembelianWhereUniqueInput
  }

  /**
   * Pembelian findFirst
   */
  export type PembelianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian
     */
    omit?: PembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianInclude<ExtArgs> | null
    /**
     * Filter, which Pembelian to fetch.
     */
    where?: PembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembelians to fetch.
     */
    orderBy?: PembelianOrderByWithRelationInput | PembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pembelians.
     */
    cursor?: PembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembelians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pembelians.
     */
    distinct?: PembelianScalarFieldEnum | PembelianScalarFieldEnum[]
  }

  /**
   * Pembelian findFirstOrThrow
   */
  export type PembelianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian
     */
    omit?: PembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianInclude<ExtArgs> | null
    /**
     * Filter, which Pembelian to fetch.
     */
    where?: PembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembelians to fetch.
     */
    orderBy?: PembelianOrderByWithRelationInput | PembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pembelians.
     */
    cursor?: PembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembelians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pembelians.
     */
    distinct?: PembelianScalarFieldEnum | PembelianScalarFieldEnum[]
  }

  /**
   * Pembelian findMany
   */
  export type PembelianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian
     */
    omit?: PembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianInclude<ExtArgs> | null
    /**
     * Filter, which Pembelians to fetch.
     */
    where?: PembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembelians to fetch.
     */
    orderBy?: PembelianOrderByWithRelationInput | PembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pembelians.
     */
    cursor?: PembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembelians.
     */
    skip?: number
    distinct?: PembelianScalarFieldEnum | PembelianScalarFieldEnum[]
  }

  /**
   * Pembelian create
   */
  export type PembelianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian
     */
    omit?: PembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianInclude<ExtArgs> | null
    /**
     * The data needed to create a Pembelian.
     */
    data: XOR<PembelianCreateInput, PembelianUncheckedCreateInput>
  }

  /**
   * Pembelian createMany
   */
  export type PembelianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pembelians.
     */
    data: PembelianCreateManyInput | PembelianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pembelian createManyAndReturn
   */
  export type PembelianCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian
     */
    omit?: PembelianOmit<ExtArgs> | null
    /**
     * The data used to create many Pembelians.
     */
    data: PembelianCreateManyInput | PembelianCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pembelian update
   */
  export type PembelianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian
     */
    omit?: PembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianInclude<ExtArgs> | null
    /**
     * The data needed to update a Pembelian.
     */
    data: XOR<PembelianUpdateInput, PembelianUncheckedUpdateInput>
    /**
     * Choose, which Pembelian to update.
     */
    where: PembelianWhereUniqueInput
  }

  /**
   * Pembelian updateMany
   */
  export type PembelianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pembelians.
     */
    data: XOR<PembelianUpdateManyMutationInput, PembelianUncheckedUpdateManyInput>
    /**
     * Filter which Pembelians to update
     */
    where?: PembelianWhereInput
    /**
     * Limit how many Pembelians to update.
     */
    limit?: number
  }

  /**
   * Pembelian updateManyAndReturn
   */
  export type PembelianUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian
     */
    omit?: PembelianOmit<ExtArgs> | null
    /**
     * The data used to update Pembelians.
     */
    data: XOR<PembelianUpdateManyMutationInput, PembelianUncheckedUpdateManyInput>
    /**
     * Filter which Pembelians to update
     */
    where?: PembelianWhereInput
    /**
     * Limit how many Pembelians to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pembelian upsert
   */
  export type PembelianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian
     */
    omit?: PembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianInclude<ExtArgs> | null
    /**
     * The filter to search for the Pembelian to update in case it exists.
     */
    where: PembelianWhereUniqueInput
    /**
     * In case the Pembelian found by the `where` argument doesn't exist, create a new Pembelian with this data.
     */
    create: XOR<PembelianCreateInput, PembelianUncheckedCreateInput>
    /**
     * In case the Pembelian was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PembelianUpdateInput, PembelianUncheckedUpdateInput>
  }

  /**
   * Pembelian delete
   */
  export type PembelianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian
     */
    omit?: PembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianInclude<ExtArgs> | null
    /**
     * Filter which Pembelian to delete.
     */
    where: PembelianWhereUniqueInput
  }

  /**
   * Pembelian deleteMany
   */
  export type PembelianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pembelians to delete
     */
    where?: PembelianWhereInput
    /**
     * Limit how many Pembelians to delete.
     */
    limit?: number
  }

  /**
   * Pembelian.PembelianDetail
   */
  export type Pembelian$PembelianDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembelianDetail
     */
    select?: PembelianDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PembelianDetail
     */
    omit?: PembelianDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianDetailInclude<ExtArgs> | null
    where?: PembelianDetailWhereInput
    orderBy?: PembelianDetailOrderByWithRelationInput | PembelianDetailOrderByWithRelationInput[]
    cursor?: PembelianDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PembelianDetailScalarFieldEnum | PembelianDetailScalarFieldEnum[]
  }

  /**
   * Pembelian.Piutang
   */
  export type Pembelian$PiutangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piutang
     */
    select?: PiutangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piutang
     */
    omit?: PiutangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangInclude<ExtArgs> | null
    where?: PiutangWhereInput
    orderBy?: PiutangOrderByWithRelationInput | PiutangOrderByWithRelationInput[]
    cursor?: PiutangWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PiutangScalarFieldEnum | PiutangScalarFieldEnum[]
  }

  /**
   * Pembelian without action
   */
  export type PembelianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian
     */
    omit?: PembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianInclude<ExtArgs> | null
  }


  /**
   * Model PembelianDetail
   */

  export type AggregatePembelianDetail = {
    _count: PembelianDetailCountAggregateOutputType | null
    _avg: PembelianDetailAvgAggregateOutputType | null
    _sum: PembelianDetailSumAggregateOutputType | null
    _min: PembelianDetailMinAggregateOutputType | null
    _max: PembelianDetailMaxAggregateOutputType | null
  }

  export type PembelianDetailAvgAggregateOutputType = {
    id: number | null
    pembelianId: number | null
    produkId: number | null
    qty: number | null
    harga: number | null
  }

  export type PembelianDetailSumAggregateOutputType = {
    id: number | null
    pembelianId: number | null
    produkId: number | null
    qty: number | null
    harga: number | null
  }

  export type PembelianDetailMinAggregateOutputType = {
    id: number | null
    pembelianId: number | null
    produkId: number | null
    qty: number | null
    harga: number | null
  }

  export type PembelianDetailMaxAggregateOutputType = {
    id: number | null
    pembelianId: number | null
    produkId: number | null
    qty: number | null
    harga: number | null
  }

  export type PembelianDetailCountAggregateOutputType = {
    id: number
    pembelianId: number
    produkId: number
    qty: number
    harga: number
    _all: number
  }


  export type PembelianDetailAvgAggregateInputType = {
    id?: true
    pembelianId?: true
    produkId?: true
    qty?: true
    harga?: true
  }

  export type PembelianDetailSumAggregateInputType = {
    id?: true
    pembelianId?: true
    produkId?: true
    qty?: true
    harga?: true
  }

  export type PembelianDetailMinAggregateInputType = {
    id?: true
    pembelianId?: true
    produkId?: true
    qty?: true
    harga?: true
  }

  export type PembelianDetailMaxAggregateInputType = {
    id?: true
    pembelianId?: true
    produkId?: true
    qty?: true
    harga?: true
  }

  export type PembelianDetailCountAggregateInputType = {
    id?: true
    pembelianId?: true
    produkId?: true
    qty?: true
    harga?: true
    _all?: true
  }

  export type PembelianDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PembelianDetail to aggregate.
     */
    where?: PembelianDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PembelianDetails to fetch.
     */
    orderBy?: PembelianDetailOrderByWithRelationInput | PembelianDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PembelianDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PembelianDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PembelianDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PembelianDetails
    **/
    _count?: true | PembelianDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PembelianDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PembelianDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PembelianDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PembelianDetailMaxAggregateInputType
  }

  export type GetPembelianDetailAggregateType<T extends PembelianDetailAggregateArgs> = {
        [P in keyof T & keyof AggregatePembelianDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePembelianDetail[P]>
      : GetScalarType<T[P], AggregatePembelianDetail[P]>
  }




  export type PembelianDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PembelianDetailWhereInput
    orderBy?: PembelianDetailOrderByWithAggregationInput | PembelianDetailOrderByWithAggregationInput[]
    by: PembelianDetailScalarFieldEnum[] | PembelianDetailScalarFieldEnum
    having?: PembelianDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PembelianDetailCountAggregateInputType | true
    _avg?: PembelianDetailAvgAggregateInputType
    _sum?: PembelianDetailSumAggregateInputType
    _min?: PembelianDetailMinAggregateInputType
    _max?: PembelianDetailMaxAggregateInputType
  }

  export type PembelianDetailGroupByOutputType = {
    id: number
    pembelianId: number
    produkId: number
    qty: number
    harga: number
    _count: PembelianDetailCountAggregateOutputType | null
    _avg: PembelianDetailAvgAggregateOutputType | null
    _sum: PembelianDetailSumAggregateOutputType | null
    _min: PembelianDetailMinAggregateOutputType | null
    _max: PembelianDetailMaxAggregateOutputType | null
  }

  type GetPembelianDetailGroupByPayload<T extends PembelianDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PembelianDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PembelianDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PembelianDetailGroupByOutputType[P]>
            : GetScalarType<T[P], PembelianDetailGroupByOutputType[P]>
        }
      >
    >


  export type PembelianDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pembelianId?: boolean
    produkId?: boolean
    qty?: boolean
    harga?: boolean
    pembelian?: boolean | PembelianDefaultArgs<ExtArgs>
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pembelianDetail"]>

  export type PembelianDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pembelianId?: boolean
    produkId?: boolean
    qty?: boolean
    harga?: boolean
    pembelian?: boolean | PembelianDefaultArgs<ExtArgs>
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pembelianDetail"]>

  export type PembelianDetailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pembelianId?: boolean
    produkId?: boolean
    qty?: boolean
    harga?: boolean
    pembelian?: boolean | PembelianDefaultArgs<ExtArgs>
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pembelianDetail"]>

  export type PembelianDetailSelectScalar = {
    id?: boolean
    pembelianId?: boolean
    produkId?: boolean
    qty?: boolean
    harga?: boolean
  }

  export type PembelianDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pembelianId" | "produkId" | "qty" | "harga", ExtArgs["result"]["pembelianDetail"]>
  export type PembelianDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pembelian?: boolean | PembelianDefaultArgs<ExtArgs>
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }
  export type PembelianDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pembelian?: boolean | PembelianDefaultArgs<ExtArgs>
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }
  export type PembelianDetailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pembelian?: boolean | PembelianDefaultArgs<ExtArgs>
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }

  export type $PembelianDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PembelianDetail"
    objects: {
      pembelian: Prisma.$PembelianPayload<ExtArgs>
      produk: Prisma.$ProdukPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pembelianId: number
      produkId: number
      qty: number
      harga: number
    }, ExtArgs["result"]["pembelianDetail"]>
    composites: {}
  }

  type PembelianDetailGetPayload<S extends boolean | null | undefined | PembelianDetailDefaultArgs> = $Result.GetResult<Prisma.$PembelianDetailPayload, S>

  type PembelianDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PembelianDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PembelianDetailCountAggregateInputType | true
    }

  export interface PembelianDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PembelianDetail'], meta: { name: 'PembelianDetail' } }
    /**
     * Find zero or one PembelianDetail that matches the filter.
     * @param {PembelianDetailFindUniqueArgs} args - Arguments to find a PembelianDetail
     * @example
     * // Get one PembelianDetail
     * const pembelianDetail = await prisma.pembelianDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PembelianDetailFindUniqueArgs>(args: SelectSubset<T, PembelianDetailFindUniqueArgs<ExtArgs>>): Prisma__PembelianDetailClient<$Result.GetResult<Prisma.$PembelianDetailPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PembelianDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PembelianDetailFindUniqueOrThrowArgs} args - Arguments to find a PembelianDetail
     * @example
     * // Get one PembelianDetail
     * const pembelianDetail = await prisma.pembelianDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PembelianDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, PembelianDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PembelianDetailClient<$Result.GetResult<Prisma.$PembelianDetailPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PembelianDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembelianDetailFindFirstArgs} args - Arguments to find a PembelianDetail
     * @example
     * // Get one PembelianDetail
     * const pembelianDetail = await prisma.pembelianDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PembelianDetailFindFirstArgs>(args?: SelectSubset<T, PembelianDetailFindFirstArgs<ExtArgs>>): Prisma__PembelianDetailClient<$Result.GetResult<Prisma.$PembelianDetailPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PembelianDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembelianDetailFindFirstOrThrowArgs} args - Arguments to find a PembelianDetail
     * @example
     * // Get one PembelianDetail
     * const pembelianDetail = await prisma.pembelianDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PembelianDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, PembelianDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__PembelianDetailClient<$Result.GetResult<Prisma.$PembelianDetailPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PembelianDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembelianDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PembelianDetails
     * const pembelianDetails = await prisma.pembelianDetail.findMany()
     * 
     * // Get first 10 PembelianDetails
     * const pembelianDetails = await prisma.pembelianDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pembelianDetailWithIdOnly = await prisma.pembelianDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PembelianDetailFindManyArgs>(args?: SelectSubset<T, PembelianDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembelianDetailPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PembelianDetail.
     * @param {PembelianDetailCreateArgs} args - Arguments to create a PembelianDetail.
     * @example
     * // Create one PembelianDetail
     * const PembelianDetail = await prisma.pembelianDetail.create({
     *   data: {
     *     // ... data to create a PembelianDetail
     *   }
     * })
     * 
     */
    create<T extends PembelianDetailCreateArgs>(args: SelectSubset<T, PembelianDetailCreateArgs<ExtArgs>>): Prisma__PembelianDetailClient<$Result.GetResult<Prisma.$PembelianDetailPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PembelianDetails.
     * @param {PembelianDetailCreateManyArgs} args - Arguments to create many PembelianDetails.
     * @example
     * // Create many PembelianDetails
     * const pembelianDetail = await prisma.pembelianDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PembelianDetailCreateManyArgs>(args?: SelectSubset<T, PembelianDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PembelianDetails and returns the data saved in the database.
     * @param {PembelianDetailCreateManyAndReturnArgs} args - Arguments to create many PembelianDetails.
     * @example
     * // Create many PembelianDetails
     * const pembelianDetail = await prisma.pembelianDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PembelianDetails and only return the `id`
     * const pembelianDetailWithIdOnly = await prisma.pembelianDetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PembelianDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, PembelianDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembelianDetailPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a PembelianDetail.
     * @param {PembelianDetailDeleteArgs} args - Arguments to delete one PembelianDetail.
     * @example
     * // Delete one PembelianDetail
     * const PembelianDetail = await prisma.pembelianDetail.delete({
     *   where: {
     *     // ... filter to delete one PembelianDetail
     *   }
     * })
     * 
     */
    delete<T extends PembelianDetailDeleteArgs>(args: SelectSubset<T, PembelianDetailDeleteArgs<ExtArgs>>): Prisma__PembelianDetailClient<$Result.GetResult<Prisma.$PembelianDetailPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PembelianDetail.
     * @param {PembelianDetailUpdateArgs} args - Arguments to update one PembelianDetail.
     * @example
     * // Update one PembelianDetail
     * const pembelianDetail = await prisma.pembelianDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PembelianDetailUpdateArgs>(args: SelectSubset<T, PembelianDetailUpdateArgs<ExtArgs>>): Prisma__PembelianDetailClient<$Result.GetResult<Prisma.$PembelianDetailPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PembelianDetails.
     * @param {PembelianDetailDeleteManyArgs} args - Arguments to filter PembelianDetails to delete.
     * @example
     * // Delete a few PembelianDetails
     * const { count } = await prisma.pembelianDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PembelianDetailDeleteManyArgs>(args?: SelectSubset<T, PembelianDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PembelianDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembelianDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PembelianDetails
     * const pembelianDetail = await prisma.pembelianDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PembelianDetailUpdateManyArgs>(args: SelectSubset<T, PembelianDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PembelianDetails and returns the data updated in the database.
     * @param {PembelianDetailUpdateManyAndReturnArgs} args - Arguments to update many PembelianDetails.
     * @example
     * // Update many PembelianDetails
     * const pembelianDetail = await prisma.pembelianDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PembelianDetails and only return the `id`
     * const pembelianDetailWithIdOnly = await prisma.pembelianDetail.updateManyAndReturn({
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
    updateManyAndReturn<T extends PembelianDetailUpdateManyAndReturnArgs>(args: SelectSubset<T, PembelianDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembelianDetailPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one PembelianDetail.
     * @param {PembelianDetailUpsertArgs} args - Arguments to update or create a PembelianDetail.
     * @example
     * // Update or create a PembelianDetail
     * const pembelianDetail = await prisma.pembelianDetail.upsert({
     *   create: {
     *     // ... data to create a PembelianDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PembelianDetail we want to update
     *   }
     * })
     */
    upsert<T extends PembelianDetailUpsertArgs>(args: SelectSubset<T, PembelianDetailUpsertArgs<ExtArgs>>): Prisma__PembelianDetailClient<$Result.GetResult<Prisma.$PembelianDetailPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PembelianDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembelianDetailCountArgs} args - Arguments to filter PembelianDetails to count.
     * @example
     * // Count the number of PembelianDetails
     * const count = await prisma.pembelianDetail.count({
     *   where: {
     *     // ... the filter for the PembelianDetails we want to count
     *   }
     * })
    **/
    count<T extends PembelianDetailCountArgs>(
      args?: Subset<T, PembelianDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PembelianDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PembelianDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembelianDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PembelianDetailAggregateArgs>(args: Subset<T, PembelianDetailAggregateArgs>): Prisma.PrismaPromise<GetPembelianDetailAggregateType<T>>

    /**
     * Group by PembelianDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembelianDetailGroupByArgs} args - Group by arguments.
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
      T extends PembelianDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PembelianDetailGroupByArgs['orderBy'] }
        : { orderBy?: PembelianDetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PembelianDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPembelianDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PembelianDetail model
   */
  readonly fields: PembelianDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PembelianDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PembelianDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pembelian<T extends PembelianDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PembelianDefaultArgs<ExtArgs>>): Prisma__PembelianClient<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    produk<T extends ProdukDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdukDefaultArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the PembelianDetail model
   */ 
  interface PembelianDetailFieldRefs {
    readonly id: FieldRef<"PembelianDetail", 'Int'>
    readonly pembelianId: FieldRef<"PembelianDetail", 'Int'>
    readonly produkId: FieldRef<"PembelianDetail", 'Int'>
    readonly qty: FieldRef<"PembelianDetail", 'Int'>
    readonly harga: FieldRef<"PembelianDetail", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PembelianDetail findUnique
   */
  export type PembelianDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembelianDetail
     */
    select?: PembelianDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PembelianDetail
     */
    omit?: PembelianDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianDetailInclude<ExtArgs> | null
    /**
     * Filter, which PembelianDetail to fetch.
     */
    where: PembelianDetailWhereUniqueInput
  }

  /**
   * PembelianDetail findUniqueOrThrow
   */
  export type PembelianDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembelianDetail
     */
    select?: PembelianDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PembelianDetail
     */
    omit?: PembelianDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianDetailInclude<ExtArgs> | null
    /**
     * Filter, which PembelianDetail to fetch.
     */
    where: PembelianDetailWhereUniqueInput
  }

  /**
   * PembelianDetail findFirst
   */
  export type PembelianDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembelianDetail
     */
    select?: PembelianDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PembelianDetail
     */
    omit?: PembelianDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianDetailInclude<ExtArgs> | null
    /**
     * Filter, which PembelianDetail to fetch.
     */
    where?: PembelianDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PembelianDetails to fetch.
     */
    orderBy?: PembelianDetailOrderByWithRelationInput | PembelianDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PembelianDetails.
     */
    cursor?: PembelianDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PembelianDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PembelianDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PembelianDetails.
     */
    distinct?: PembelianDetailScalarFieldEnum | PembelianDetailScalarFieldEnum[]
  }

  /**
   * PembelianDetail findFirstOrThrow
   */
  export type PembelianDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembelianDetail
     */
    select?: PembelianDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PembelianDetail
     */
    omit?: PembelianDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianDetailInclude<ExtArgs> | null
    /**
     * Filter, which PembelianDetail to fetch.
     */
    where?: PembelianDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PembelianDetails to fetch.
     */
    orderBy?: PembelianDetailOrderByWithRelationInput | PembelianDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PembelianDetails.
     */
    cursor?: PembelianDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PembelianDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PembelianDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PembelianDetails.
     */
    distinct?: PembelianDetailScalarFieldEnum | PembelianDetailScalarFieldEnum[]
  }

  /**
   * PembelianDetail findMany
   */
  export type PembelianDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembelianDetail
     */
    select?: PembelianDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PembelianDetail
     */
    omit?: PembelianDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianDetailInclude<ExtArgs> | null
    /**
     * Filter, which PembelianDetails to fetch.
     */
    where?: PembelianDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PembelianDetails to fetch.
     */
    orderBy?: PembelianDetailOrderByWithRelationInput | PembelianDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PembelianDetails.
     */
    cursor?: PembelianDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PembelianDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PembelianDetails.
     */
    skip?: number
    distinct?: PembelianDetailScalarFieldEnum | PembelianDetailScalarFieldEnum[]
  }

  /**
   * PembelianDetail create
   */
  export type PembelianDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembelianDetail
     */
    select?: PembelianDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PembelianDetail
     */
    omit?: PembelianDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a PembelianDetail.
     */
    data: XOR<PembelianDetailCreateInput, PembelianDetailUncheckedCreateInput>
  }

  /**
   * PembelianDetail createMany
   */
  export type PembelianDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PembelianDetails.
     */
    data: PembelianDetailCreateManyInput | PembelianDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PembelianDetail createManyAndReturn
   */
  export type PembelianDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembelianDetail
     */
    select?: PembelianDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PembelianDetail
     */
    omit?: PembelianDetailOmit<ExtArgs> | null
    /**
     * The data used to create many PembelianDetails.
     */
    data: PembelianDetailCreateManyInput | PembelianDetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PembelianDetail update
   */
  export type PembelianDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembelianDetail
     */
    select?: PembelianDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PembelianDetail
     */
    omit?: PembelianDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a PembelianDetail.
     */
    data: XOR<PembelianDetailUpdateInput, PembelianDetailUncheckedUpdateInput>
    /**
     * Choose, which PembelianDetail to update.
     */
    where: PembelianDetailWhereUniqueInput
  }

  /**
   * PembelianDetail updateMany
   */
  export type PembelianDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PembelianDetails.
     */
    data: XOR<PembelianDetailUpdateManyMutationInput, PembelianDetailUncheckedUpdateManyInput>
    /**
     * Filter which PembelianDetails to update
     */
    where?: PembelianDetailWhereInput
    /**
     * Limit how many PembelianDetails to update.
     */
    limit?: number
  }

  /**
   * PembelianDetail updateManyAndReturn
   */
  export type PembelianDetailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembelianDetail
     */
    select?: PembelianDetailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PembelianDetail
     */
    omit?: PembelianDetailOmit<ExtArgs> | null
    /**
     * The data used to update PembelianDetails.
     */
    data: XOR<PembelianDetailUpdateManyMutationInput, PembelianDetailUncheckedUpdateManyInput>
    /**
     * Filter which PembelianDetails to update
     */
    where?: PembelianDetailWhereInput
    /**
     * Limit how many PembelianDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianDetailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PembelianDetail upsert
   */
  export type PembelianDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembelianDetail
     */
    select?: PembelianDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PembelianDetail
     */
    omit?: PembelianDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the PembelianDetail to update in case it exists.
     */
    where: PembelianDetailWhereUniqueInput
    /**
     * In case the PembelianDetail found by the `where` argument doesn't exist, create a new PembelianDetail with this data.
     */
    create: XOR<PembelianDetailCreateInput, PembelianDetailUncheckedCreateInput>
    /**
     * In case the PembelianDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PembelianDetailUpdateInput, PembelianDetailUncheckedUpdateInput>
  }

  /**
   * PembelianDetail delete
   */
  export type PembelianDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembelianDetail
     */
    select?: PembelianDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PembelianDetail
     */
    omit?: PembelianDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianDetailInclude<ExtArgs> | null
    /**
     * Filter which PembelianDetail to delete.
     */
    where: PembelianDetailWhereUniqueInput
  }

  /**
   * PembelianDetail deleteMany
   */
  export type PembelianDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PembelianDetails to delete
     */
    where?: PembelianDetailWhereInput
    /**
     * Limit how many PembelianDetails to delete.
     */
    limit?: number
  }

  /**
   * PembelianDetail without action
   */
  export type PembelianDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembelianDetail
     */
    select?: PembelianDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PembelianDetail
     */
    omit?: PembelianDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianDetailInclude<ExtArgs> | null
  }


  /**
   * Model Piutang
   */

  export type AggregatePiutang = {
    _count: PiutangCountAggregateOutputType | null
    _avg: PiutangAvgAggregateOutputType | null
    _sum: PiutangSumAggregateOutputType | null
    _min: PiutangMinAggregateOutputType | null
    _max: PiutangMaxAggregateOutputType | null
  }

  export type PiutangAvgAggregateOutputType = {
    id: number | null
    pembelianId: number | null
    jumlah: number | null
  }

  export type PiutangSumAggregateOutputType = {
    id: number | null
    pembelianId: number | null
    jumlah: number | null
  }

  export type PiutangMinAggregateOutputType = {
    id: number | null
    pembelianId: number | null
    jumlah: number | null
    tanggalJatuhTempo: Date | null
    status: $Enums.StatusPiutang | null
  }

  export type PiutangMaxAggregateOutputType = {
    id: number | null
    pembelianId: number | null
    jumlah: number | null
    tanggalJatuhTempo: Date | null
    status: $Enums.StatusPiutang | null
  }

  export type PiutangCountAggregateOutputType = {
    id: number
    pembelianId: number
    jumlah: number
    tanggalJatuhTempo: number
    status: number
    _all: number
  }


  export type PiutangAvgAggregateInputType = {
    id?: true
    pembelianId?: true
    jumlah?: true
  }

  export type PiutangSumAggregateInputType = {
    id?: true
    pembelianId?: true
    jumlah?: true
  }

  export type PiutangMinAggregateInputType = {
    id?: true
    pembelianId?: true
    jumlah?: true
    tanggalJatuhTempo?: true
    status?: true
  }

  export type PiutangMaxAggregateInputType = {
    id?: true
    pembelianId?: true
    jumlah?: true
    tanggalJatuhTempo?: true
    status?: true
  }

  export type PiutangCountAggregateInputType = {
    id?: true
    pembelianId?: true
    jumlah?: true
    tanggalJatuhTempo?: true
    status?: true
    _all?: true
  }

  export type PiutangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Piutang to aggregate.
     */
    where?: PiutangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Piutangs to fetch.
     */
    orderBy?: PiutangOrderByWithRelationInput | PiutangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PiutangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Piutangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Piutangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Piutangs
    **/
    _count?: true | PiutangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PiutangAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PiutangSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PiutangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PiutangMaxAggregateInputType
  }

  export type GetPiutangAggregateType<T extends PiutangAggregateArgs> = {
        [P in keyof T & keyof AggregatePiutang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePiutang[P]>
      : GetScalarType<T[P], AggregatePiutang[P]>
  }




  export type PiutangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PiutangWhereInput
    orderBy?: PiutangOrderByWithAggregationInput | PiutangOrderByWithAggregationInput[]
    by: PiutangScalarFieldEnum[] | PiutangScalarFieldEnum
    having?: PiutangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PiutangCountAggregateInputType | true
    _avg?: PiutangAvgAggregateInputType
    _sum?: PiutangSumAggregateInputType
    _min?: PiutangMinAggregateInputType
    _max?: PiutangMaxAggregateInputType
  }

  export type PiutangGroupByOutputType = {
    id: number
    pembelianId: number
    jumlah: number
    tanggalJatuhTempo: Date
    status: $Enums.StatusPiutang
    _count: PiutangCountAggregateOutputType | null
    _avg: PiutangAvgAggregateOutputType | null
    _sum: PiutangSumAggregateOutputType | null
    _min: PiutangMinAggregateOutputType | null
    _max: PiutangMaxAggregateOutputType | null
  }

  type GetPiutangGroupByPayload<T extends PiutangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PiutangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PiutangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PiutangGroupByOutputType[P]>
            : GetScalarType<T[P], PiutangGroupByOutputType[P]>
        }
      >
    >


  export type PiutangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pembelianId?: boolean
    jumlah?: boolean
    tanggalJatuhTempo?: boolean
    status?: boolean
    pembelian?: boolean | PembelianDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["piutang"]>

  export type PiutangSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pembelianId?: boolean
    jumlah?: boolean
    tanggalJatuhTempo?: boolean
    status?: boolean
    pembelian?: boolean | PembelianDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["piutang"]>

  export type PiutangSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pembelianId?: boolean
    jumlah?: boolean
    tanggalJatuhTempo?: boolean
    status?: boolean
    pembelian?: boolean | PembelianDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["piutang"]>

  export type PiutangSelectScalar = {
    id?: boolean
    pembelianId?: boolean
    jumlah?: boolean
    tanggalJatuhTempo?: boolean
    status?: boolean
  }

  export type PiutangOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pembelianId" | "jumlah" | "tanggalJatuhTempo" | "status", ExtArgs["result"]["piutang"]>
  export type PiutangInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pembelian?: boolean | PembelianDefaultArgs<ExtArgs>
  }
  export type PiutangIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pembelian?: boolean | PembelianDefaultArgs<ExtArgs>
  }
  export type PiutangIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pembelian?: boolean | PembelianDefaultArgs<ExtArgs>
  }

  export type $PiutangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Piutang"
    objects: {
      pembelian: Prisma.$PembelianPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pembelianId: number
      jumlah: number
      tanggalJatuhTempo: Date
      status: $Enums.StatusPiutang
    }, ExtArgs["result"]["piutang"]>
    composites: {}
  }

  type PiutangGetPayload<S extends boolean | null | undefined | PiutangDefaultArgs> = $Result.GetResult<Prisma.$PiutangPayload, S>

  type PiutangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PiutangFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PiutangCountAggregateInputType | true
    }

  export interface PiutangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Piutang'], meta: { name: 'Piutang' } }
    /**
     * Find zero or one Piutang that matches the filter.
     * @param {PiutangFindUniqueArgs} args - Arguments to find a Piutang
     * @example
     * // Get one Piutang
     * const piutang = await prisma.piutang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PiutangFindUniqueArgs>(args: SelectSubset<T, PiutangFindUniqueArgs<ExtArgs>>): Prisma__PiutangClient<$Result.GetResult<Prisma.$PiutangPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Piutang that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PiutangFindUniqueOrThrowArgs} args - Arguments to find a Piutang
     * @example
     * // Get one Piutang
     * const piutang = await prisma.piutang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PiutangFindUniqueOrThrowArgs>(args: SelectSubset<T, PiutangFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PiutangClient<$Result.GetResult<Prisma.$PiutangPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Piutang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiutangFindFirstArgs} args - Arguments to find a Piutang
     * @example
     * // Get one Piutang
     * const piutang = await prisma.piutang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PiutangFindFirstArgs>(args?: SelectSubset<T, PiutangFindFirstArgs<ExtArgs>>): Prisma__PiutangClient<$Result.GetResult<Prisma.$PiutangPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Piutang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiutangFindFirstOrThrowArgs} args - Arguments to find a Piutang
     * @example
     * // Get one Piutang
     * const piutang = await prisma.piutang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PiutangFindFirstOrThrowArgs>(args?: SelectSubset<T, PiutangFindFirstOrThrowArgs<ExtArgs>>): Prisma__PiutangClient<$Result.GetResult<Prisma.$PiutangPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Piutangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiutangFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Piutangs
     * const piutangs = await prisma.piutang.findMany()
     * 
     * // Get first 10 Piutangs
     * const piutangs = await prisma.piutang.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const piutangWithIdOnly = await prisma.piutang.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PiutangFindManyArgs>(args?: SelectSubset<T, PiutangFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PiutangPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Piutang.
     * @param {PiutangCreateArgs} args - Arguments to create a Piutang.
     * @example
     * // Create one Piutang
     * const Piutang = await prisma.piutang.create({
     *   data: {
     *     // ... data to create a Piutang
     *   }
     * })
     * 
     */
    create<T extends PiutangCreateArgs>(args: SelectSubset<T, PiutangCreateArgs<ExtArgs>>): Prisma__PiutangClient<$Result.GetResult<Prisma.$PiutangPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Piutangs.
     * @param {PiutangCreateManyArgs} args - Arguments to create many Piutangs.
     * @example
     * // Create many Piutangs
     * const piutang = await prisma.piutang.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PiutangCreateManyArgs>(args?: SelectSubset<T, PiutangCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Piutangs and returns the data saved in the database.
     * @param {PiutangCreateManyAndReturnArgs} args - Arguments to create many Piutangs.
     * @example
     * // Create many Piutangs
     * const piutang = await prisma.piutang.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Piutangs and only return the `id`
     * const piutangWithIdOnly = await prisma.piutang.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PiutangCreateManyAndReturnArgs>(args?: SelectSubset<T, PiutangCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PiutangPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Piutang.
     * @param {PiutangDeleteArgs} args - Arguments to delete one Piutang.
     * @example
     * // Delete one Piutang
     * const Piutang = await prisma.piutang.delete({
     *   where: {
     *     // ... filter to delete one Piutang
     *   }
     * })
     * 
     */
    delete<T extends PiutangDeleteArgs>(args: SelectSubset<T, PiutangDeleteArgs<ExtArgs>>): Prisma__PiutangClient<$Result.GetResult<Prisma.$PiutangPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Piutang.
     * @param {PiutangUpdateArgs} args - Arguments to update one Piutang.
     * @example
     * // Update one Piutang
     * const piutang = await prisma.piutang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PiutangUpdateArgs>(args: SelectSubset<T, PiutangUpdateArgs<ExtArgs>>): Prisma__PiutangClient<$Result.GetResult<Prisma.$PiutangPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Piutangs.
     * @param {PiutangDeleteManyArgs} args - Arguments to filter Piutangs to delete.
     * @example
     * // Delete a few Piutangs
     * const { count } = await prisma.piutang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PiutangDeleteManyArgs>(args?: SelectSubset<T, PiutangDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Piutangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiutangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Piutangs
     * const piutang = await prisma.piutang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PiutangUpdateManyArgs>(args: SelectSubset<T, PiutangUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Piutangs and returns the data updated in the database.
     * @param {PiutangUpdateManyAndReturnArgs} args - Arguments to update many Piutangs.
     * @example
     * // Update many Piutangs
     * const piutang = await prisma.piutang.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Piutangs and only return the `id`
     * const piutangWithIdOnly = await prisma.piutang.updateManyAndReturn({
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
    updateManyAndReturn<T extends PiutangUpdateManyAndReturnArgs>(args: SelectSubset<T, PiutangUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PiutangPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Piutang.
     * @param {PiutangUpsertArgs} args - Arguments to update or create a Piutang.
     * @example
     * // Update or create a Piutang
     * const piutang = await prisma.piutang.upsert({
     *   create: {
     *     // ... data to create a Piutang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Piutang we want to update
     *   }
     * })
     */
    upsert<T extends PiutangUpsertArgs>(args: SelectSubset<T, PiutangUpsertArgs<ExtArgs>>): Prisma__PiutangClient<$Result.GetResult<Prisma.$PiutangPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Piutangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiutangCountArgs} args - Arguments to filter Piutangs to count.
     * @example
     * // Count the number of Piutangs
     * const count = await prisma.piutang.count({
     *   where: {
     *     // ... the filter for the Piutangs we want to count
     *   }
     * })
    **/
    count<T extends PiutangCountArgs>(
      args?: Subset<T, PiutangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PiutangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Piutang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiutangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PiutangAggregateArgs>(args: Subset<T, PiutangAggregateArgs>): Prisma.PrismaPromise<GetPiutangAggregateType<T>>

    /**
     * Group by Piutang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiutangGroupByArgs} args - Group by arguments.
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
      T extends PiutangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PiutangGroupByArgs['orderBy'] }
        : { orderBy?: PiutangGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PiutangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPiutangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Piutang model
   */
  readonly fields: PiutangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Piutang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PiutangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pembelian<T extends PembelianDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PembelianDefaultArgs<ExtArgs>>): Prisma__PembelianClient<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the Piutang model
   */ 
  interface PiutangFieldRefs {
    readonly id: FieldRef<"Piutang", 'Int'>
    readonly pembelianId: FieldRef<"Piutang", 'Int'>
    readonly jumlah: FieldRef<"Piutang", 'Int'>
    readonly tanggalJatuhTempo: FieldRef<"Piutang", 'DateTime'>
    readonly status: FieldRef<"Piutang", 'StatusPiutang'>
  }
    

  // Custom InputTypes
  /**
   * Piutang findUnique
   */
  export type PiutangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piutang
     */
    select?: PiutangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piutang
     */
    omit?: PiutangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangInclude<ExtArgs> | null
    /**
     * Filter, which Piutang to fetch.
     */
    where: PiutangWhereUniqueInput
  }

  /**
   * Piutang findUniqueOrThrow
   */
  export type PiutangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piutang
     */
    select?: PiutangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piutang
     */
    omit?: PiutangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangInclude<ExtArgs> | null
    /**
     * Filter, which Piutang to fetch.
     */
    where: PiutangWhereUniqueInput
  }

  /**
   * Piutang findFirst
   */
  export type PiutangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piutang
     */
    select?: PiutangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piutang
     */
    omit?: PiutangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangInclude<ExtArgs> | null
    /**
     * Filter, which Piutang to fetch.
     */
    where?: PiutangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Piutangs to fetch.
     */
    orderBy?: PiutangOrderByWithRelationInput | PiutangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Piutangs.
     */
    cursor?: PiutangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Piutangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Piutangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Piutangs.
     */
    distinct?: PiutangScalarFieldEnum | PiutangScalarFieldEnum[]
  }

  /**
   * Piutang findFirstOrThrow
   */
  export type PiutangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piutang
     */
    select?: PiutangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piutang
     */
    omit?: PiutangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangInclude<ExtArgs> | null
    /**
     * Filter, which Piutang to fetch.
     */
    where?: PiutangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Piutangs to fetch.
     */
    orderBy?: PiutangOrderByWithRelationInput | PiutangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Piutangs.
     */
    cursor?: PiutangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Piutangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Piutangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Piutangs.
     */
    distinct?: PiutangScalarFieldEnum | PiutangScalarFieldEnum[]
  }

  /**
   * Piutang findMany
   */
  export type PiutangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piutang
     */
    select?: PiutangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piutang
     */
    omit?: PiutangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangInclude<ExtArgs> | null
    /**
     * Filter, which Piutangs to fetch.
     */
    where?: PiutangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Piutangs to fetch.
     */
    orderBy?: PiutangOrderByWithRelationInput | PiutangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Piutangs.
     */
    cursor?: PiutangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Piutangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Piutangs.
     */
    skip?: number
    distinct?: PiutangScalarFieldEnum | PiutangScalarFieldEnum[]
  }

  /**
   * Piutang create
   */
  export type PiutangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piutang
     */
    select?: PiutangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piutang
     */
    omit?: PiutangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangInclude<ExtArgs> | null
    /**
     * The data needed to create a Piutang.
     */
    data: XOR<PiutangCreateInput, PiutangUncheckedCreateInput>
  }

  /**
   * Piutang createMany
   */
  export type PiutangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Piutangs.
     */
    data: PiutangCreateManyInput | PiutangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Piutang createManyAndReturn
   */
  export type PiutangCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piutang
     */
    select?: PiutangSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Piutang
     */
    omit?: PiutangOmit<ExtArgs> | null
    /**
     * The data used to create many Piutangs.
     */
    data: PiutangCreateManyInput | PiutangCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Piutang update
   */
  export type PiutangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piutang
     */
    select?: PiutangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piutang
     */
    omit?: PiutangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangInclude<ExtArgs> | null
    /**
     * The data needed to update a Piutang.
     */
    data: XOR<PiutangUpdateInput, PiutangUncheckedUpdateInput>
    /**
     * Choose, which Piutang to update.
     */
    where: PiutangWhereUniqueInput
  }

  /**
   * Piutang updateMany
   */
  export type PiutangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Piutangs.
     */
    data: XOR<PiutangUpdateManyMutationInput, PiutangUncheckedUpdateManyInput>
    /**
     * Filter which Piutangs to update
     */
    where?: PiutangWhereInput
    /**
     * Limit how many Piutangs to update.
     */
    limit?: number
  }

  /**
   * Piutang updateManyAndReturn
   */
  export type PiutangUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piutang
     */
    select?: PiutangSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Piutang
     */
    omit?: PiutangOmit<ExtArgs> | null
    /**
     * The data used to update Piutangs.
     */
    data: XOR<PiutangUpdateManyMutationInput, PiutangUncheckedUpdateManyInput>
    /**
     * Filter which Piutangs to update
     */
    where?: PiutangWhereInput
    /**
     * Limit how many Piutangs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Piutang upsert
   */
  export type PiutangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piutang
     */
    select?: PiutangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piutang
     */
    omit?: PiutangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangInclude<ExtArgs> | null
    /**
     * The filter to search for the Piutang to update in case it exists.
     */
    where: PiutangWhereUniqueInput
    /**
     * In case the Piutang found by the `where` argument doesn't exist, create a new Piutang with this data.
     */
    create: XOR<PiutangCreateInput, PiutangUncheckedCreateInput>
    /**
     * In case the Piutang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PiutangUpdateInput, PiutangUncheckedUpdateInput>
  }

  /**
   * Piutang delete
   */
  export type PiutangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piutang
     */
    select?: PiutangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piutang
     */
    omit?: PiutangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangInclude<ExtArgs> | null
    /**
     * Filter which Piutang to delete.
     */
    where: PiutangWhereUniqueInput
  }

  /**
   * Piutang deleteMany
   */
  export type PiutangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Piutangs to delete
     */
    where?: PiutangWhereInput
    /**
     * Limit how many Piutangs to delete.
     */
    limit?: number
  }

  /**
   * Piutang without action
   */
  export type PiutangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Piutang
     */
    select?: PiutangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Piutang
     */
    omit?: PiutangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiutangInclude<ExtArgs> | null
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


  export const KategoriScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt'
  };

  export type KategoriScalarFieldEnum = (typeof KategoriScalarFieldEnum)[keyof typeof KategoriScalarFieldEnum]


  export const ProdukScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    kategoriId: 'kategoriId',
    hargaBeli: 'hargaBeli',
    hargaJualRetail: 'hargaJualRetail',
    hargaJualGrosir: 'hargaJualGrosir',
    qtyMinGrosir: 'qtyMinGrosir',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt'
  };

  export type ProdukScalarFieldEnum = (typeof ProdukScalarFieldEnum)[keyof typeof ProdukScalarFieldEnum]


  export const StokScalarFieldEnum: {
    id: 'id',
    produkId: 'produkId',
    serialNumber: 'serialNumber',
    expiredDate: 'expiredDate',
    qty: 'qty',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type StokScalarFieldEnum = (typeof StokScalarFieldEnum)[keyof typeof StokScalarFieldEnum]


  export const PenjualanScalarFieldEnum: {
    id: 'id',
    tanggal: 'tanggal',
    total: 'total',
    kasirId: 'kasirId',
    metodeBayarId: 'metodeBayarId',
    createdAt: 'createdAt'
  };

  export type PenjualanScalarFieldEnum = (typeof PenjualanScalarFieldEnum)[keyof typeof PenjualanScalarFieldEnum]


  export const MetodeBayarScalarFieldEnum: {
    id: 'id',
    nama: 'nama'
  };

  export type MetodeBayarScalarFieldEnum = (typeof MetodeBayarScalarFieldEnum)[keyof typeof MetodeBayarScalarFieldEnum]


  export const PenjualanDetailScalarFieldEnum: {
    id: 'id',
    produkId: 'produkId',
    penjualanId: 'penjualanId',
    stokId: 'stokId',
    harga: 'harga',
    qty: 'qty',
    tipe: 'tipe'
  };

  export type PenjualanDetailScalarFieldEnum = (typeof PenjualanDetailScalarFieldEnum)[keyof typeof PenjualanDetailScalarFieldEnum]


  export const PenggunaScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    username: 'username',
    password: 'password',
    email: 'email',
    role: 'role',
    verifikasi: 'verifikasi',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt'
  };

  export type PenggunaScalarFieldEnum = (typeof PenggunaScalarFieldEnum)[keyof typeof PenggunaScalarFieldEnum]


  export const KomisiKategoriScalarFieldEnum: {
    id: 'id',
    kategoriId: 'kategoriId',
    persen: 'persen',
    createdAt: 'createdAt'
  };

  export type KomisiKategoriScalarFieldEnum = (typeof KomisiKategoriScalarFieldEnum)[keyof typeof KomisiKategoriScalarFieldEnum]


  export const KomisiKasirScalarFieldEnum: {
    id: 'id',
    penjualanDetailId: 'penjualanDetailId',
    kasirId: 'kasirId',
    jumlah: 'jumlah',
    createdAt: 'createdAt'
  };

  export type KomisiKasirScalarFieldEnum = (typeof KomisiKasirScalarFieldEnum)[keyof typeof KomisiKasirScalarFieldEnum]


  export const LaporanHarianScalarFieldEnum: {
    id: 'id',
    tanggal: 'tanggal',
    stokAwal: 'stokAwal',
    stokAkhir: 'stokAkhir',
    totalPenjualan: 'totalPenjualan',
    totalHPP: 'totalHPP',
    totalLaba: 'totalLaba',
    totalKomisi: 'totalKomisi'
  };

  export type LaporanHarianScalarFieldEnum = (typeof LaporanHarianScalarFieldEnum)[keyof typeof LaporanHarianScalarFieldEnum]


  export const SuplierScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    kontak: 'kontak',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt'
  };

  export type SuplierScalarFieldEnum = (typeof SuplierScalarFieldEnum)[keyof typeof SuplierScalarFieldEnum]


  export const PembelianScalarFieldEnum: {
    id: 'id',
    suplierId: 'suplierId',
    tanggal: 'tanggal',
    total: 'total',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type PembelianScalarFieldEnum = (typeof PembelianScalarFieldEnum)[keyof typeof PembelianScalarFieldEnum]


  export const PembelianDetailScalarFieldEnum: {
    id: 'id',
    pembelianId: 'pembelianId',
    produkId: 'produkId',
    qty: 'qty',
    harga: 'harga'
  };

  export type PembelianDetailScalarFieldEnum = (typeof PembelianDetailScalarFieldEnum)[keyof typeof PembelianDetailScalarFieldEnum]


  export const PiutangScalarFieldEnum: {
    id: 'id',
    pembelianId: 'pembelianId',
    jumlah: 'jumlah',
    tanggalJatuhTempo: 'tanggalJatuhTempo',
    status: 'status'
  };

  export type PiutangScalarFieldEnum = (typeof PiutangScalarFieldEnum)[keyof typeof PiutangScalarFieldEnum]


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
   * Reference to a field of type 'StatusStok'
   */
  export type EnumStatusStokFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusStok'>
    


  /**
   * Reference to a field of type 'StatusStok[]'
   */
  export type ListEnumStatusStokFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusStok[]'>
    


  /**
   * Reference to a field of type 'JenisPenjualan'
   */
  export type EnumJenisPenjualanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisPenjualan'>
    


  /**
   * Reference to a field of type 'JenisPenjualan[]'
   */
  export type ListEnumJenisPenjualanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisPenjualan[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'StatusPembelian'
   */
  export type EnumStatusPembelianFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPembelian'>
    


  /**
   * Reference to a field of type 'StatusPembelian[]'
   */
  export type ListEnumStatusPembelianFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPembelian[]'>
    


  /**
   * Reference to a field of type 'StatusPiutang'
   */
  export type EnumStatusPiutangFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPiutang'>
    


  /**
   * Reference to a field of type 'StatusPiutang[]'
   */
  export type ListEnumStatusPiutangFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPiutang[]'>
    


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


  export type KategoriWhereInput = {
    AND?: KategoriWhereInput | KategoriWhereInput[]
    OR?: KategoriWhereInput[]
    NOT?: KategoriWhereInput | KategoriWhereInput[]
    id?: IntFilter<"Kategori"> | number
    nama?: StringFilter<"Kategori"> | string
    isDeleted?: BoolFilter<"Kategori"> | boolean
    deletedAt?: DateTimeNullableFilter<"Kategori"> | Date | string | null
    Produk?: ProdukListRelationFilter
    komisi?: KomisiKategoriListRelationFilter
  }

  export type KategoriOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    Produk?: ProdukOrderByRelationAggregateInput
    komisi?: KomisiKategoriOrderByRelationAggregateInput
  }

  export type KategoriWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nama?: string
    AND?: KategoriWhereInput | KategoriWhereInput[]
    OR?: KategoriWhereInput[]
    NOT?: KategoriWhereInput | KategoriWhereInput[]
    isDeleted?: BoolFilter<"Kategori"> | boolean
    deletedAt?: DateTimeNullableFilter<"Kategori"> | Date | string | null
    Produk?: ProdukListRelationFilter
    komisi?: KomisiKategoriListRelationFilter
  }, "id" | "nama">

  export type KategoriOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: KategoriCountOrderByAggregateInput
    _avg?: KategoriAvgOrderByAggregateInput
    _max?: KategoriMaxOrderByAggregateInput
    _min?: KategoriMinOrderByAggregateInput
    _sum?: KategoriSumOrderByAggregateInput
  }

  export type KategoriScalarWhereWithAggregatesInput = {
    AND?: KategoriScalarWhereWithAggregatesInput | KategoriScalarWhereWithAggregatesInput[]
    OR?: KategoriScalarWhereWithAggregatesInput[]
    NOT?: KategoriScalarWhereWithAggregatesInput | KategoriScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Kategori"> | number
    nama?: StringWithAggregatesFilter<"Kategori"> | string
    isDeleted?: BoolWithAggregatesFilter<"Kategori"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Kategori"> | Date | string | null
  }

  export type ProdukWhereInput = {
    AND?: ProdukWhereInput | ProdukWhereInput[]
    OR?: ProdukWhereInput[]
    NOT?: ProdukWhereInput | ProdukWhereInput[]
    id?: IntFilter<"Produk"> | number
    nama?: StringFilter<"Produk"> | string
    kategoriId?: IntFilter<"Produk"> | number
    hargaBeli?: IntFilter<"Produk"> | number
    hargaJualRetail?: IntFilter<"Produk"> | number
    hargaJualGrosir?: IntFilter<"Produk"> | number
    qtyMinGrosir?: IntFilter<"Produk"> | number
    isDeleted?: BoolFilter<"Produk"> | boolean
    deletedAt?: DateTimeNullableFilter<"Produk"> | Date | string | null
    kategori?: XOR<KategoriScalarRelationFilter, KategoriWhereInput>
    Stok?: StokListRelationFilter
    PembelianDetail?: PembelianDetailListRelationFilter
    PenjualanDetail?: PenjualanDetailListRelationFilter
  }

  export type ProdukOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    kategoriId?: SortOrder
    hargaBeli?: SortOrder
    hargaJualRetail?: SortOrder
    hargaJualGrosir?: SortOrder
    qtyMinGrosir?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    kategori?: KategoriOrderByWithRelationInput
    Stok?: StokOrderByRelationAggregateInput
    PembelianDetail?: PembelianDetailOrderByRelationAggregateInput
    PenjualanDetail?: PenjualanDetailOrderByRelationAggregateInput
  }

  export type ProdukWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProdukWhereInput | ProdukWhereInput[]
    OR?: ProdukWhereInput[]
    NOT?: ProdukWhereInput | ProdukWhereInput[]
    nama?: StringFilter<"Produk"> | string
    kategoriId?: IntFilter<"Produk"> | number
    hargaBeli?: IntFilter<"Produk"> | number
    hargaJualRetail?: IntFilter<"Produk"> | number
    hargaJualGrosir?: IntFilter<"Produk"> | number
    qtyMinGrosir?: IntFilter<"Produk"> | number
    isDeleted?: BoolFilter<"Produk"> | boolean
    deletedAt?: DateTimeNullableFilter<"Produk"> | Date | string | null
    kategori?: XOR<KategoriScalarRelationFilter, KategoriWhereInput>
    Stok?: StokListRelationFilter
    PembelianDetail?: PembelianDetailListRelationFilter
    PenjualanDetail?: PenjualanDetailListRelationFilter
  }, "id">

  export type ProdukOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    kategoriId?: SortOrder
    hargaBeli?: SortOrder
    hargaJualRetail?: SortOrder
    hargaJualGrosir?: SortOrder
    qtyMinGrosir?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ProdukCountOrderByAggregateInput
    _avg?: ProdukAvgOrderByAggregateInput
    _max?: ProdukMaxOrderByAggregateInput
    _min?: ProdukMinOrderByAggregateInput
    _sum?: ProdukSumOrderByAggregateInput
  }

  export type ProdukScalarWhereWithAggregatesInput = {
    AND?: ProdukScalarWhereWithAggregatesInput | ProdukScalarWhereWithAggregatesInput[]
    OR?: ProdukScalarWhereWithAggregatesInput[]
    NOT?: ProdukScalarWhereWithAggregatesInput | ProdukScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Produk"> | number
    nama?: StringWithAggregatesFilter<"Produk"> | string
    kategoriId?: IntWithAggregatesFilter<"Produk"> | number
    hargaBeli?: IntWithAggregatesFilter<"Produk"> | number
    hargaJualRetail?: IntWithAggregatesFilter<"Produk"> | number
    hargaJualGrosir?: IntWithAggregatesFilter<"Produk"> | number
    qtyMinGrosir?: IntWithAggregatesFilter<"Produk"> | number
    isDeleted?: BoolWithAggregatesFilter<"Produk"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Produk"> | Date | string | null
  }

  export type StokWhereInput = {
    AND?: StokWhereInput | StokWhereInput[]
    OR?: StokWhereInput[]
    NOT?: StokWhereInput | StokWhereInput[]
    id?: IntFilter<"Stok"> | number
    produkId?: IntFilter<"Stok"> | number
    serialNumber?: StringNullableFilter<"Stok"> | string | null
    expiredDate?: DateTimeNullableFilter<"Stok"> | Date | string | null
    qty?: IntFilter<"Stok"> | number
    status?: EnumStatusStokFilter<"Stok"> | $Enums.StatusStok
    createdAt?: DateTimeFilter<"Stok"> | Date | string
    produk?: XOR<ProdukScalarRelationFilter, ProdukWhereInput>
    PenjualanDetail?: PenjualanDetailListRelationFilter
  }

  export type StokOrderByWithRelationInput = {
    id?: SortOrder
    produkId?: SortOrder
    serialNumber?: SortOrderInput | SortOrder
    expiredDate?: SortOrderInput | SortOrder
    qty?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    produk?: ProdukOrderByWithRelationInput
    PenjualanDetail?: PenjualanDetailOrderByRelationAggregateInput
  }

  export type StokWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    serialNumber?: string
    AND?: StokWhereInput | StokWhereInput[]
    OR?: StokWhereInput[]
    NOT?: StokWhereInput | StokWhereInput[]
    produkId?: IntFilter<"Stok"> | number
    expiredDate?: DateTimeNullableFilter<"Stok"> | Date | string | null
    qty?: IntFilter<"Stok"> | number
    status?: EnumStatusStokFilter<"Stok"> | $Enums.StatusStok
    createdAt?: DateTimeFilter<"Stok"> | Date | string
    produk?: XOR<ProdukScalarRelationFilter, ProdukWhereInput>
    PenjualanDetail?: PenjualanDetailListRelationFilter
  }, "id" | "serialNumber">

  export type StokOrderByWithAggregationInput = {
    id?: SortOrder
    produkId?: SortOrder
    serialNumber?: SortOrderInput | SortOrder
    expiredDate?: SortOrderInput | SortOrder
    qty?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: StokCountOrderByAggregateInput
    _avg?: StokAvgOrderByAggregateInput
    _max?: StokMaxOrderByAggregateInput
    _min?: StokMinOrderByAggregateInput
    _sum?: StokSumOrderByAggregateInput
  }

  export type StokScalarWhereWithAggregatesInput = {
    AND?: StokScalarWhereWithAggregatesInput | StokScalarWhereWithAggregatesInput[]
    OR?: StokScalarWhereWithAggregatesInput[]
    NOT?: StokScalarWhereWithAggregatesInput | StokScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Stok"> | number
    produkId?: IntWithAggregatesFilter<"Stok"> | number
    serialNumber?: StringNullableWithAggregatesFilter<"Stok"> | string | null
    expiredDate?: DateTimeNullableWithAggregatesFilter<"Stok"> | Date | string | null
    qty?: IntWithAggregatesFilter<"Stok"> | number
    status?: EnumStatusStokWithAggregatesFilter<"Stok"> | $Enums.StatusStok
    createdAt?: DateTimeWithAggregatesFilter<"Stok"> | Date | string
  }

  export type PenjualanWhereInput = {
    AND?: PenjualanWhereInput | PenjualanWhereInput[]
    OR?: PenjualanWhereInput[]
    NOT?: PenjualanWhereInput | PenjualanWhereInput[]
    id?: IntFilter<"Penjualan"> | number
    tanggal?: DateTimeFilter<"Penjualan"> | Date | string
    total?: IntFilter<"Penjualan"> | number
    kasirId?: IntFilter<"Penjualan"> | number
    metodeBayarId?: IntFilter<"Penjualan"> | number
    createdAt?: DateTimeFilter<"Penjualan"> | Date | string
    kasir?: XOR<PenggunaScalarRelationFilter, PenggunaWhereInput>
    metodeBayar?: XOR<MetodeBayarScalarRelationFilter, MetodeBayarWhereInput>
    PenjualanDetail?: PenjualanDetailListRelationFilter
  }

  export type PenjualanOrderByWithRelationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    total?: SortOrder
    kasirId?: SortOrder
    metodeBayarId?: SortOrder
    createdAt?: SortOrder
    kasir?: PenggunaOrderByWithRelationInput
    metodeBayar?: MetodeBayarOrderByWithRelationInput
    PenjualanDetail?: PenjualanDetailOrderByRelationAggregateInput
  }

  export type PenjualanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PenjualanWhereInput | PenjualanWhereInput[]
    OR?: PenjualanWhereInput[]
    NOT?: PenjualanWhereInput | PenjualanWhereInput[]
    tanggal?: DateTimeFilter<"Penjualan"> | Date | string
    total?: IntFilter<"Penjualan"> | number
    kasirId?: IntFilter<"Penjualan"> | number
    metodeBayarId?: IntFilter<"Penjualan"> | number
    createdAt?: DateTimeFilter<"Penjualan"> | Date | string
    kasir?: XOR<PenggunaScalarRelationFilter, PenggunaWhereInput>
    metodeBayar?: XOR<MetodeBayarScalarRelationFilter, MetodeBayarWhereInput>
    PenjualanDetail?: PenjualanDetailListRelationFilter
  }, "id">

  export type PenjualanOrderByWithAggregationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    total?: SortOrder
    kasirId?: SortOrder
    metodeBayarId?: SortOrder
    createdAt?: SortOrder
    _count?: PenjualanCountOrderByAggregateInput
    _avg?: PenjualanAvgOrderByAggregateInput
    _max?: PenjualanMaxOrderByAggregateInput
    _min?: PenjualanMinOrderByAggregateInput
    _sum?: PenjualanSumOrderByAggregateInput
  }

  export type PenjualanScalarWhereWithAggregatesInput = {
    AND?: PenjualanScalarWhereWithAggregatesInput | PenjualanScalarWhereWithAggregatesInput[]
    OR?: PenjualanScalarWhereWithAggregatesInput[]
    NOT?: PenjualanScalarWhereWithAggregatesInput | PenjualanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Penjualan"> | number
    tanggal?: DateTimeWithAggregatesFilter<"Penjualan"> | Date | string
    total?: IntWithAggregatesFilter<"Penjualan"> | number
    kasirId?: IntWithAggregatesFilter<"Penjualan"> | number
    metodeBayarId?: IntWithAggregatesFilter<"Penjualan"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Penjualan"> | Date | string
  }

  export type MetodeBayarWhereInput = {
    AND?: MetodeBayarWhereInput | MetodeBayarWhereInput[]
    OR?: MetodeBayarWhereInput[]
    NOT?: MetodeBayarWhereInput | MetodeBayarWhereInput[]
    id?: IntFilter<"MetodeBayar"> | number
    nama?: StringFilter<"MetodeBayar"> | string
    Penjualan?: PenjualanListRelationFilter
  }

  export type MetodeBayarOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    Penjualan?: PenjualanOrderByRelationAggregateInput
  }

  export type MetodeBayarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nama?: string
    AND?: MetodeBayarWhereInput | MetodeBayarWhereInput[]
    OR?: MetodeBayarWhereInput[]
    NOT?: MetodeBayarWhereInput | MetodeBayarWhereInput[]
    Penjualan?: PenjualanListRelationFilter
  }, "id" | "nama">

  export type MetodeBayarOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    _count?: MetodeBayarCountOrderByAggregateInput
    _avg?: MetodeBayarAvgOrderByAggregateInput
    _max?: MetodeBayarMaxOrderByAggregateInput
    _min?: MetodeBayarMinOrderByAggregateInput
    _sum?: MetodeBayarSumOrderByAggregateInput
  }

  export type MetodeBayarScalarWhereWithAggregatesInput = {
    AND?: MetodeBayarScalarWhereWithAggregatesInput | MetodeBayarScalarWhereWithAggregatesInput[]
    OR?: MetodeBayarScalarWhereWithAggregatesInput[]
    NOT?: MetodeBayarScalarWhereWithAggregatesInput | MetodeBayarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MetodeBayar"> | number
    nama?: StringWithAggregatesFilter<"MetodeBayar"> | string
  }

  export type PenjualanDetailWhereInput = {
    AND?: PenjualanDetailWhereInput | PenjualanDetailWhereInput[]
    OR?: PenjualanDetailWhereInput[]
    NOT?: PenjualanDetailWhereInput | PenjualanDetailWhereInput[]
    id?: IntFilter<"PenjualanDetail"> | number
    produkId?: IntFilter<"PenjualanDetail"> | number
    penjualanId?: IntFilter<"PenjualanDetail"> | number
    stokId?: IntFilter<"PenjualanDetail"> | number
    harga?: IntFilter<"PenjualanDetail"> | number
    qty?: IntFilter<"PenjualanDetail"> | number
    tipe?: EnumJenisPenjualanFilter<"PenjualanDetail"> | $Enums.JenisPenjualan
    penjualan?: XOR<PenjualanScalarRelationFilter, PenjualanWhereInput>
    produk?: XOR<ProdukScalarRelationFilter, ProdukWhereInput>
    stok?: XOR<StokScalarRelationFilter, StokWhereInput>
    Komisi?: KomisiKasirListRelationFilter
  }

  export type PenjualanDetailOrderByWithRelationInput = {
    id?: SortOrder
    produkId?: SortOrder
    penjualanId?: SortOrder
    stokId?: SortOrder
    harga?: SortOrder
    qty?: SortOrder
    tipe?: SortOrder
    penjualan?: PenjualanOrderByWithRelationInput
    produk?: ProdukOrderByWithRelationInput
    stok?: StokOrderByWithRelationInput
    Komisi?: KomisiKasirOrderByRelationAggregateInput
  }

  export type PenjualanDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PenjualanDetailWhereInput | PenjualanDetailWhereInput[]
    OR?: PenjualanDetailWhereInput[]
    NOT?: PenjualanDetailWhereInput | PenjualanDetailWhereInput[]
    produkId?: IntFilter<"PenjualanDetail"> | number
    penjualanId?: IntFilter<"PenjualanDetail"> | number
    stokId?: IntFilter<"PenjualanDetail"> | number
    harga?: IntFilter<"PenjualanDetail"> | number
    qty?: IntFilter<"PenjualanDetail"> | number
    tipe?: EnumJenisPenjualanFilter<"PenjualanDetail"> | $Enums.JenisPenjualan
    penjualan?: XOR<PenjualanScalarRelationFilter, PenjualanWhereInput>
    produk?: XOR<ProdukScalarRelationFilter, ProdukWhereInput>
    stok?: XOR<StokScalarRelationFilter, StokWhereInput>
    Komisi?: KomisiKasirListRelationFilter
  }, "id">

  export type PenjualanDetailOrderByWithAggregationInput = {
    id?: SortOrder
    produkId?: SortOrder
    penjualanId?: SortOrder
    stokId?: SortOrder
    harga?: SortOrder
    qty?: SortOrder
    tipe?: SortOrder
    _count?: PenjualanDetailCountOrderByAggregateInput
    _avg?: PenjualanDetailAvgOrderByAggregateInput
    _max?: PenjualanDetailMaxOrderByAggregateInput
    _min?: PenjualanDetailMinOrderByAggregateInput
    _sum?: PenjualanDetailSumOrderByAggregateInput
  }

  export type PenjualanDetailScalarWhereWithAggregatesInput = {
    AND?: PenjualanDetailScalarWhereWithAggregatesInput | PenjualanDetailScalarWhereWithAggregatesInput[]
    OR?: PenjualanDetailScalarWhereWithAggregatesInput[]
    NOT?: PenjualanDetailScalarWhereWithAggregatesInput | PenjualanDetailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PenjualanDetail"> | number
    produkId?: IntWithAggregatesFilter<"PenjualanDetail"> | number
    penjualanId?: IntWithAggregatesFilter<"PenjualanDetail"> | number
    stokId?: IntWithAggregatesFilter<"PenjualanDetail"> | number
    harga?: IntWithAggregatesFilter<"PenjualanDetail"> | number
    qty?: IntWithAggregatesFilter<"PenjualanDetail"> | number
    tipe?: EnumJenisPenjualanWithAggregatesFilter<"PenjualanDetail"> | $Enums.JenisPenjualan
  }

  export type PenggunaWhereInput = {
    AND?: PenggunaWhereInput | PenggunaWhereInput[]
    OR?: PenggunaWhereInput[]
    NOT?: PenggunaWhereInput | PenggunaWhereInput[]
    id?: IntFilter<"Pengguna"> | number
    nama?: StringFilter<"Pengguna"> | string
    username?: StringFilter<"Pengguna"> | string
    password?: StringFilter<"Pengguna"> | string
    email?: StringFilter<"Pengguna"> | string
    role?: EnumRoleFilter<"Pengguna"> | $Enums.Role
    verifikasi?: BoolFilter<"Pengguna"> | boolean
    isDeleted?: BoolFilter<"Pengguna"> | boolean
    deletedAt?: DateTimeNullableFilter<"Pengguna"> | Date | string | null
    Penjualan?: PenjualanListRelationFilter
    Komisi?: KomisiKasirListRelationFilter
  }

  export type PenggunaOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    verifikasi?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    Penjualan?: PenjualanOrderByRelationAggregateInput
    Komisi?: KomisiKasirOrderByRelationAggregateInput
  }

  export type PenggunaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: PenggunaWhereInput | PenggunaWhereInput[]
    OR?: PenggunaWhereInput[]
    NOT?: PenggunaWhereInput | PenggunaWhereInput[]
    nama?: StringFilter<"Pengguna"> | string
    password?: StringFilter<"Pengguna"> | string
    role?: EnumRoleFilter<"Pengguna"> | $Enums.Role
    verifikasi?: BoolFilter<"Pengguna"> | boolean
    isDeleted?: BoolFilter<"Pengguna"> | boolean
    deletedAt?: DateTimeNullableFilter<"Pengguna"> | Date | string | null
    Penjualan?: PenjualanListRelationFilter
    Komisi?: KomisiKasirListRelationFilter
  }, "id" | "username" | "email">

  export type PenggunaOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    verifikasi?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: PenggunaCountOrderByAggregateInput
    _avg?: PenggunaAvgOrderByAggregateInput
    _max?: PenggunaMaxOrderByAggregateInput
    _min?: PenggunaMinOrderByAggregateInput
    _sum?: PenggunaSumOrderByAggregateInput
  }

  export type PenggunaScalarWhereWithAggregatesInput = {
    AND?: PenggunaScalarWhereWithAggregatesInput | PenggunaScalarWhereWithAggregatesInput[]
    OR?: PenggunaScalarWhereWithAggregatesInput[]
    NOT?: PenggunaScalarWhereWithAggregatesInput | PenggunaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pengguna"> | number
    nama?: StringWithAggregatesFilter<"Pengguna"> | string
    username?: StringWithAggregatesFilter<"Pengguna"> | string
    password?: StringWithAggregatesFilter<"Pengguna"> | string
    email?: StringWithAggregatesFilter<"Pengguna"> | string
    role?: EnumRoleWithAggregatesFilter<"Pengguna"> | $Enums.Role
    verifikasi?: BoolWithAggregatesFilter<"Pengguna"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"Pengguna"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Pengguna"> | Date | string | null
  }

  export type KomisiKategoriWhereInput = {
    AND?: KomisiKategoriWhereInput | KomisiKategoriWhereInput[]
    OR?: KomisiKategoriWhereInput[]
    NOT?: KomisiKategoriWhereInput | KomisiKategoriWhereInput[]
    id?: IntFilter<"KomisiKategori"> | number
    kategoriId?: IntFilter<"KomisiKategori"> | number
    persen?: IntFilter<"KomisiKategori"> | number
    createdAt?: DateTimeFilter<"KomisiKategori"> | Date | string
    kategori?: XOR<KategoriScalarRelationFilter, KategoriWhereInput>
  }

  export type KomisiKategoriOrderByWithRelationInput = {
    id?: SortOrder
    kategoriId?: SortOrder
    persen?: SortOrder
    createdAt?: SortOrder
    kategori?: KategoriOrderByWithRelationInput
  }

  export type KomisiKategoriWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    kategoriId?: number
    AND?: KomisiKategoriWhereInput | KomisiKategoriWhereInput[]
    OR?: KomisiKategoriWhereInput[]
    NOT?: KomisiKategoriWhereInput | KomisiKategoriWhereInput[]
    persen?: IntFilter<"KomisiKategori"> | number
    createdAt?: DateTimeFilter<"KomisiKategori"> | Date | string
    kategori?: XOR<KategoriScalarRelationFilter, KategoriWhereInput>
  }, "id" | "kategoriId">

  export type KomisiKategoriOrderByWithAggregationInput = {
    id?: SortOrder
    kategoriId?: SortOrder
    persen?: SortOrder
    createdAt?: SortOrder
    _count?: KomisiKategoriCountOrderByAggregateInput
    _avg?: KomisiKategoriAvgOrderByAggregateInput
    _max?: KomisiKategoriMaxOrderByAggregateInput
    _min?: KomisiKategoriMinOrderByAggregateInput
    _sum?: KomisiKategoriSumOrderByAggregateInput
  }

  export type KomisiKategoriScalarWhereWithAggregatesInput = {
    AND?: KomisiKategoriScalarWhereWithAggregatesInput | KomisiKategoriScalarWhereWithAggregatesInput[]
    OR?: KomisiKategoriScalarWhereWithAggregatesInput[]
    NOT?: KomisiKategoriScalarWhereWithAggregatesInput | KomisiKategoriScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"KomisiKategori"> | number
    kategoriId?: IntWithAggregatesFilter<"KomisiKategori"> | number
    persen?: IntWithAggregatesFilter<"KomisiKategori"> | number
    createdAt?: DateTimeWithAggregatesFilter<"KomisiKategori"> | Date | string
  }

  export type KomisiKasirWhereInput = {
    AND?: KomisiKasirWhereInput | KomisiKasirWhereInput[]
    OR?: KomisiKasirWhereInput[]
    NOT?: KomisiKasirWhereInput | KomisiKasirWhereInput[]
    id?: IntFilter<"KomisiKasir"> | number
    penjualanDetailId?: IntFilter<"KomisiKasir"> | number
    kasirId?: IntFilter<"KomisiKasir"> | number
    jumlah?: IntFilter<"KomisiKasir"> | number
    createdAt?: DateTimeFilter<"KomisiKasir"> | Date | string
    penjualanDetail?: XOR<PenjualanDetailScalarRelationFilter, PenjualanDetailWhereInput>
    kasir?: XOR<PenggunaScalarRelationFilter, PenggunaWhereInput>
  }

  export type KomisiKasirOrderByWithRelationInput = {
    id?: SortOrder
    penjualanDetailId?: SortOrder
    kasirId?: SortOrder
    jumlah?: SortOrder
    createdAt?: SortOrder
    penjualanDetail?: PenjualanDetailOrderByWithRelationInput
    kasir?: PenggunaOrderByWithRelationInput
  }

  export type KomisiKasirWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    penjualanDetailId?: number
    AND?: KomisiKasirWhereInput | KomisiKasirWhereInput[]
    OR?: KomisiKasirWhereInput[]
    NOT?: KomisiKasirWhereInput | KomisiKasirWhereInput[]
    kasirId?: IntFilter<"KomisiKasir"> | number
    jumlah?: IntFilter<"KomisiKasir"> | number
    createdAt?: DateTimeFilter<"KomisiKasir"> | Date | string
    penjualanDetail?: XOR<PenjualanDetailScalarRelationFilter, PenjualanDetailWhereInput>
    kasir?: XOR<PenggunaScalarRelationFilter, PenggunaWhereInput>
  }, "id" | "penjualanDetailId">

  export type KomisiKasirOrderByWithAggregationInput = {
    id?: SortOrder
    penjualanDetailId?: SortOrder
    kasirId?: SortOrder
    jumlah?: SortOrder
    createdAt?: SortOrder
    _count?: KomisiKasirCountOrderByAggregateInput
    _avg?: KomisiKasirAvgOrderByAggregateInput
    _max?: KomisiKasirMaxOrderByAggregateInput
    _min?: KomisiKasirMinOrderByAggregateInput
    _sum?: KomisiKasirSumOrderByAggregateInput
  }

  export type KomisiKasirScalarWhereWithAggregatesInput = {
    AND?: KomisiKasirScalarWhereWithAggregatesInput | KomisiKasirScalarWhereWithAggregatesInput[]
    OR?: KomisiKasirScalarWhereWithAggregatesInput[]
    NOT?: KomisiKasirScalarWhereWithAggregatesInput | KomisiKasirScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"KomisiKasir"> | number
    penjualanDetailId?: IntWithAggregatesFilter<"KomisiKasir"> | number
    kasirId?: IntWithAggregatesFilter<"KomisiKasir"> | number
    jumlah?: IntWithAggregatesFilter<"KomisiKasir"> | number
    createdAt?: DateTimeWithAggregatesFilter<"KomisiKasir"> | Date | string
  }

  export type LaporanHarianWhereInput = {
    AND?: LaporanHarianWhereInput | LaporanHarianWhereInput[]
    OR?: LaporanHarianWhereInput[]
    NOT?: LaporanHarianWhereInput | LaporanHarianWhereInput[]
    id?: IntFilter<"LaporanHarian"> | number
    tanggal?: DateTimeFilter<"LaporanHarian"> | Date | string
    stokAwal?: IntFilter<"LaporanHarian"> | number
    stokAkhir?: IntFilter<"LaporanHarian"> | number
    totalPenjualan?: IntFilter<"LaporanHarian"> | number
    totalHPP?: IntFilter<"LaporanHarian"> | number
    totalLaba?: IntFilter<"LaporanHarian"> | number
    totalKomisi?: IntFilter<"LaporanHarian"> | number
  }

  export type LaporanHarianOrderByWithRelationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    stokAwal?: SortOrder
    stokAkhir?: SortOrder
    totalPenjualan?: SortOrder
    totalHPP?: SortOrder
    totalLaba?: SortOrder
    totalKomisi?: SortOrder
  }

  export type LaporanHarianWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tanggal?: Date | string
    AND?: LaporanHarianWhereInput | LaporanHarianWhereInput[]
    OR?: LaporanHarianWhereInput[]
    NOT?: LaporanHarianWhereInput | LaporanHarianWhereInput[]
    stokAwal?: IntFilter<"LaporanHarian"> | number
    stokAkhir?: IntFilter<"LaporanHarian"> | number
    totalPenjualan?: IntFilter<"LaporanHarian"> | number
    totalHPP?: IntFilter<"LaporanHarian"> | number
    totalLaba?: IntFilter<"LaporanHarian"> | number
    totalKomisi?: IntFilter<"LaporanHarian"> | number
  }, "id" | "tanggal">

  export type LaporanHarianOrderByWithAggregationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    stokAwal?: SortOrder
    stokAkhir?: SortOrder
    totalPenjualan?: SortOrder
    totalHPP?: SortOrder
    totalLaba?: SortOrder
    totalKomisi?: SortOrder
    _count?: LaporanHarianCountOrderByAggregateInput
    _avg?: LaporanHarianAvgOrderByAggregateInput
    _max?: LaporanHarianMaxOrderByAggregateInput
    _min?: LaporanHarianMinOrderByAggregateInput
    _sum?: LaporanHarianSumOrderByAggregateInput
  }

  export type LaporanHarianScalarWhereWithAggregatesInput = {
    AND?: LaporanHarianScalarWhereWithAggregatesInput | LaporanHarianScalarWhereWithAggregatesInput[]
    OR?: LaporanHarianScalarWhereWithAggregatesInput[]
    NOT?: LaporanHarianScalarWhereWithAggregatesInput | LaporanHarianScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LaporanHarian"> | number
    tanggal?: DateTimeWithAggregatesFilter<"LaporanHarian"> | Date | string
    stokAwal?: IntWithAggregatesFilter<"LaporanHarian"> | number
    stokAkhir?: IntWithAggregatesFilter<"LaporanHarian"> | number
    totalPenjualan?: IntWithAggregatesFilter<"LaporanHarian"> | number
    totalHPP?: IntWithAggregatesFilter<"LaporanHarian"> | number
    totalLaba?: IntWithAggregatesFilter<"LaporanHarian"> | number
    totalKomisi?: IntWithAggregatesFilter<"LaporanHarian"> | number
  }

  export type SuplierWhereInput = {
    AND?: SuplierWhereInput | SuplierWhereInput[]
    OR?: SuplierWhereInput[]
    NOT?: SuplierWhereInput | SuplierWhereInput[]
    id?: IntFilter<"Suplier"> | number
    nama?: StringFilter<"Suplier"> | string
    kontak?: StringNullableFilter<"Suplier"> | string | null
    isDeleted?: BoolFilter<"Suplier"> | boolean
    deletedAt?: DateTimeNullableFilter<"Suplier"> | Date | string | null
    Pembelian?: PembelianListRelationFilter
  }

  export type SuplierOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    kontak?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    Pembelian?: PembelianOrderByRelationAggregateInput
  }

  export type SuplierWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SuplierWhereInput | SuplierWhereInput[]
    OR?: SuplierWhereInput[]
    NOT?: SuplierWhereInput | SuplierWhereInput[]
    nama?: StringFilter<"Suplier"> | string
    kontak?: StringNullableFilter<"Suplier"> | string | null
    isDeleted?: BoolFilter<"Suplier"> | boolean
    deletedAt?: DateTimeNullableFilter<"Suplier"> | Date | string | null
    Pembelian?: PembelianListRelationFilter
  }, "id">

  export type SuplierOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    kontak?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: SuplierCountOrderByAggregateInput
    _avg?: SuplierAvgOrderByAggregateInput
    _max?: SuplierMaxOrderByAggregateInput
    _min?: SuplierMinOrderByAggregateInput
    _sum?: SuplierSumOrderByAggregateInput
  }

  export type SuplierScalarWhereWithAggregatesInput = {
    AND?: SuplierScalarWhereWithAggregatesInput | SuplierScalarWhereWithAggregatesInput[]
    OR?: SuplierScalarWhereWithAggregatesInput[]
    NOT?: SuplierScalarWhereWithAggregatesInput | SuplierScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Suplier"> | number
    nama?: StringWithAggregatesFilter<"Suplier"> | string
    kontak?: StringNullableWithAggregatesFilter<"Suplier"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"Suplier"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Suplier"> | Date | string | null
  }

  export type PembelianWhereInput = {
    AND?: PembelianWhereInput | PembelianWhereInput[]
    OR?: PembelianWhereInput[]
    NOT?: PembelianWhereInput | PembelianWhereInput[]
    id?: IntFilter<"Pembelian"> | number
    suplierId?: IntFilter<"Pembelian"> | number
    tanggal?: DateTimeFilter<"Pembelian"> | Date | string
    total?: IntFilter<"Pembelian"> | number
    status?: EnumStatusPembelianFilter<"Pembelian"> | $Enums.StatusPembelian
    createdAt?: DateTimeFilter<"Pembelian"> | Date | string
    suplier?: XOR<SuplierScalarRelationFilter, SuplierWhereInput>
    PembelianDetail?: PembelianDetailListRelationFilter
    Piutang?: PiutangListRelationFilter
  }

  export type PembelianOrderByWithRelationInput = {
    id?: SortOrder
    suplierId?: SortOrder
    tanggal?: SortOrder
    total?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    suplier?: SuplierOrderByWithRelationInput
    PembelianDetail?: PembelianDetailOrderByRelationAggregateInput
    Piutang?: PiutangOrderByRelationAggregateInput
  }

  export type PembelianWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PembelianWhereInput | PembelianWhereInput[]
    OR?: PembelianWhereInput[]
    NOT?: PembelianWhereInput | PembelianWhereInput[]
    suplierId?: IntFilter<"Pembelian"> | number
    tanggal?: DateTimeFilter<"Pembelian"> | Date | string
    total?: IntFilter<"Pembelian"> | number
    status?: EnumStatusPembelianFilter<"Pembelian"> | $Enums.StatusPembelian
    createdAt?: DateTimeFilter<"Pembelian"> | Date | string
    suplier?: XOR<SuplierScalarRelationFilter, SuplierWhereInput>
    PembelianDetail?: PembelianDetailListRelationFilter
    Piutang?: PiutangListRelationFilter
  }, "id">

  export type PembelianOrderByWithAggregationInput = {
    id?: SortOrder
    suplierId?: SortOrder
    tanggal?: SortOrder
    total?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: PembelianCountOrderByAggregateInput
    _avg?: PembelianAvgOrderByAggregateInput
    _max?: PembelianMaxOrderByAggregateInput
    _min?: PembelianMinOrderByAggregateInput
    _sum?: PembelianSumOrderByAggregateInput
  }

  export type PembelianScalarWhereWithAggregatesInput = {
    AND?: PembelianScalarWhereWithAggregatesInput | PembelianScalarWhereWithAggregatesInput[]
    OR?: PembelianScalarWhereWithAggregatesInput[]
    NOT?: PembelianScalarWhereWithAggregatesInput | PembelianScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pembelian"> | number
    suplierId?: IntWithAggregatesFilter<"Pembelian"> | number
    tanggal?: DateTimeWithAggregatesFilter<"Pembelian"> | Date | string
    total?: IntWithAggregatesFilter<"Pembelian"> | number
    status?: EnumStatusPembelianWithAggregatesFilter<"Pembelian"> | $Enums.StatusPembelian
    createdAt?: DateTimeWithAggregatesFilter<"Pembelian"> | Date | string
  }

  export type PembelianDetailWhereInput = {
    AND?: PembelianDetailWhereInput | PembelianDetailWhereInput[]
    OR?: PembelianDetailWhereInput[]
    NOT?: PembelianDetailWhereInput | PembelianDetailWhereInput[]
    id?: IntFilter<"PembelianDetail"> | number
    pembelianId?: IntFilter<"PembelianDetail"> | number
    produkId?: IntFilter<"PembelianDetail"> | number
    qty?: IntFilter<"PembelianDetail"> | number
    harga?: IntFilter<"PembelianDetail"> | number
    pembelian?: XOR<PembelianScalarRelationFilter, PembelianWhereInput>
    produk?: XOR<ProdukScalarRelationFilter, ProdukWhereInput>
  }

  export type PembelianDetailOrderByWithRelationInput = {
    id?: SortOrder
    pembelianId?: SortOrder
    produkId?: SortOrder
    qty?: SortOrder
    harga?: SortOrder
    pembelian?: PembelianOrderByWithRelationInput
    produk?: ProdukOrderByWithRelationInput
  }

  export type PembelianDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PembelianDetailWhereInput | PembelianDetailWhereInput[]
    OR?: PembelianDetailWhereInput[]
    NOT?: PembelianDetailWhereInput | PembelianDetailWhereInput[]
    pembelianId?: IntFilter<"PembelianDetail"> | number
    produkId?: IntFilter<"PembelianDetail"> | number
    qty?: IntFilter<"PembelianDetail"> | number
    harga?: IntFilter<"PembelianDetail"> | number
    pembelian?: XOR<PembelianScalarRelationFilter, PembelianWhereInput>
    produk?: XOR<ProdukScalarRelationFilter, ProdukWhereInput>
  }, "id">

  export type PembelianDetailOrderByWithAggregationInput = {
    id?: SortOrder
    pembelianId?: SortOrder
    produkId?: SortOrder
    qty?: SortOrder
    harga?: SortOrder
    _count?: PembelianDetailCountOrderByAggregateInput
    _avg?: PembelianDetailAvgOrderByAggregateInput
    _max?: PembelianDetailMaxOrderByAggregateInput
    _min?: PembelianDetailMinOrderByAggregateInput
    _sum?: PembelianDetailSumOrderByAggregateInput
  }

  export type PembelianDetailScalarWhereWithAggregatesInput = {
    AND?: PembelianDetailScalarWhereWithAggregatesInput | PembelianDetailScalarWhereWithAggregatesInput[]
    OR?: PembelianDetailScalarWhereWithAggregatesInput[]
    NOT?: PembelianDetailScalarWhereWithAggregatesInput | PembelianDetailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PembelianDetail"> | number
    pembelianId?: IntWithAggregatesFilter<"PembelianDetail"> | number
    produkId?: IntWithAggregatesFilter<"PembelianDetail"> | number
    qty?: IntWithAggregatesFilter<"PembelianDetail"> | number
    harga?: IntWithAggregatesFilter<"PembelianDetail"> | number
  }

  export type PiutangWhereInput = {
    AND?: PiutangWhereInput | PiutangWhereInput[]
    OR?: PiutangWhereInput[]
    NOT?: PiutangWhereInput | PiutangWhereInput[]
    id?: IntFilter<"Piutang"> | number
    pembelianId?: IntFilter<"Piutang"> | number
    jumlah?: IntFilter<"Piutang"> | number
    tanggalJatuhTempo?: DateTimeFilter<"Piutang"> | Date | string
    status?: EnumStatusPiutangFilter<"Piutang"> | $Enums.StatusPiutang
    pembelian?: XOR<PembelianScalarRelationFilter, PembelianWhereInput>
  }

  export type PiutangOrderByWithRelationInput = {
    id?: SortOrder
    pembelianId?: SortOrder
    jumlah?: SortOrder
    tanggalJatuhTempo?: SortOrder
    status?: SortOrder
    pembelian?: PembelianOrderByWithRelationInput
  }

  export type PiutangWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PiutangWhereInput | PiutangWhereInput[]
    OR?: PiutangWhereInput[]
    NOT?: PiutangWhereInput | PiutangWhereInput[]
    pembelianId?: IntFilter<"Piutang"> | number
    jumlah?: IntFilter<"Piutang"> | number
    tanggalJatuhTempo?: DateTimeFilter<"Piutang"> | Date | string
    status?: EnumStatusPiutangFilter<"Piutang"> | $Enums.StatusPiutang
    pembelian?: XOR<PembelianScalarRelationFilter, PembelianWhereInput>
  }, "id">

  export type PiutangOrderByWithAggregationInput = {
    id?: SortOrder
    pembelianId?: SortOrder
    jumlah?: SortOrder
    tanggalJatuhTempo?: SortOrder
    status?: SortOrder
    _count?: PiutangCountOrderByAggregateInput
    _avg?: PiutangAvgOrderByAggregateInput
    _max?: PiutangMaxOrderByAggregateInput
    _min?: PiutangMinOrderByAggregateInput
    _sum?: PiutangSumOrderByAggregateInput
  }

  export type PiutangScalarWhereWithAggregatesInput = {
    AND?: PiutangScalarWhereWithAggregatesInput | PiutangScalarWhereWithAggregatesInput[]
    OR?: PiutangScalarWhereWithAggregatesInput[]
    NOT?: PiutangScalarWhereWithAggregatesInput | PiutangScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Piutang"> | number
    pembelianId?: IntWithAggregatesFilter<"Piutang"> | number
    jumlah?: IntWithAggregatesFilter<"Piutang"> | number
    tanggalJatuhTempo?: DateTimeWithAggregatesFilter<"Piutang"> | Date | string
    status?: EnumStatusPiutangWithAggregatesFilter<"Piutang"> | $Enums.StatusPiutang
  }

  export type KategoriCreateInput = {
    nama: string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Produk?: ProdukCreateNestedManyWithoutKategoriInput
    komisi?: KomisiKategoriCreateNestedManyWithoutKategoriInput
  }

  export type KategoriUncheckedCreateInput = {
    id?: number
    nama: string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Produk?: ProdukUncheckedCreateNestedManyWithoutKategoriInput
    komisi?: KomisiKategoriUncheckedCreateNestedManyWithoutKategoriInput
  }

  export type KategoriUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Produk?: ProdukUpdateManyWithoutKategoriNestedInput
    komisi?: KomisiKategoriUpdateManyWithoutKategoriNestedInput
  }

  export type KategoriUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Produk?: ProdukUncheckedUpdateManyWithoutKategoriNestedInput
    komisi?: KomisiKategoriUncheckedUpdateManyWithoutKategoriNestedInput
  }

  export type KategoriCreateManyInput = {
    id?: number
    nama: string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type KategoriUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type KategoriUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProdukCreateInput = {
    nama: string
    hargaBeli: number
    hargaJualRetail: number
    hargaJualGrosir: number
    qtyMinGrosir?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    kategori: KategoriCreateNestedOneWithoutProdukInput
    Stok?: StokCreateNestedManyWithoutProdukInput
    PembelianDetail?: PembelianDetailCreateNestedManyWithoutProdukInput
    PenjualanDetail?: PenjualanDetailCreateNestedManyWithoutProdukInput
  }

  export type ProdukUncheckedCreateInput = {
    id?: number
    nama: string
    kategoriId: number
    hargaBeli: number
    hargaJualRetail: number
    hargaJualGrosir: number
    qtyMinGrosir?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Stok?: StokUncheckedCreateNestedManyWithoutProdukInput
    PembelianDetail?: PembelianDetailUncheckedCreateNestedManyWithoutProdukInput
    PenjualanDetail?: PenjualanDetailUncheckedCreateNestedManyWithoutProdukInput
  }

  export type ProdukUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    hargaBeli?: IntFieldUpdateOperationsInput | number
    hargaJualRetail?: IntFieldUpdateOperationsInput | number
    hargaJualGrosir?: IntFieldUpdateOperationsInput | number
    qtyMinGrosir?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kategori?: KategoriUpdateOneRequiredWithoutProdukNestedInput
    Stok?: StokUpdateManyWithoutProdukNestedInput
    PembelianDetail?: PembelianDetailUpdateManyWithoutProdukNestedInput
    PenjualanDetail?: PenjualanDetailUpdateManyWithoutProdukNestedInput
  }

  export type ProdukUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    kategoriId?: IntFieldUpdateOperationsInput | number
    hargaBeli?: IntFieldUpdateOperationsInput | number
    hargaJualRetail?: IntFieldUpdateOperationsInput | number
    hargaJualGrosir?: IntFieldUpdateOperationsInput | number
    qtyMinGrosir?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Stok?: StokUncheckedUpdateManyWithoutProdukNestedInput
    PembelianDetail?: PembelianDetailUncheckedUpdateManyWithoutProdukNestedInput
    PenjualanDetail?: PenjualanDetailUncheckedUpdateManyWithoutProdukNestedInput
  }

  export type ProdukCreateManyInput = {
    id?: number
    nama: string
    kategoriId: number
    hargaBeli: number
    hargaJualRetail: number
    hargaJualGrosir: number
    qtyMinGrosir?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type ProdukUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    hargaBeli?: IntFieldUpdateOperationsInput | number
    hargaJualRetail?: IntFieldUpdateOperationsInput | number
    hargaJualGrosir?: IntFieldUpdateOperationsInput | number
    qtyMinGrosir?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProdukUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    kategoriId?: IntFieldUpdateOperationsInput | number
    hargaBeli?: IntFieldUpdateOperationsInput | number
    hargaJualRetail?: IntFieldUpdateOperationsInput | number
    hargaJualGrosir?: IntFieldUpdateOperationsInput | number
    qtyMinGrosir?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StokCreateInput = {
    serialNumber?: string | null
    expiredDate?: Date | string | null
    qty: number
    status?: $Enums.StatusStok
    createdAt?: Date | string
    produk: ProdukCreateNestedOneWithoutStokInput
    PenjualanDetail?: PenjualanDetailCreateNestedManyWithoutStokInput
  }

  export type StokUncheckedCreateInput = {
    id?: number
    produkId: number
    serialNumber?: string | null
    expiredDate?: Date | string | null
    qty: number
    status?: $Enums.StatusStok
    createdAt?: Date | string
    PenjualanDetail?: PenjualanDetailUncheckedCreateNestedManyWithoutStokInput
  }

  export type StokUpdateInput = {
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qty?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusStokFieldUpdateOperationsInput | $Enums.StatusStok
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produk?: ProdukUpdateOneRequiredWithoutStokNestedInput
    PenjualanDetail?: PenjualanDetailUpdateManyWithoutStokNestedInput
  }

  export type StokUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    produkId?: IntFieldUpdateOperationsInput | number
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qty?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusStokFieldUpdateOperationsInput | $Enums.StatusStok
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PenjualanDetail?: PenjualanDetailUncheckedUpdateManyWithoutStokNestedInput
  }

  export type StokCreateManyInput = {
    id?: number
    produkId: number
    serialNumber?: string | null
    expiredDate?: Date | string | null
    qty: number
    status?: $Enums.StatusStok
    createdAt?: Date | string
  }

  export type StokUpdateManyMutationInput = {
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qty?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusStokFieldUpdateOperationsInput | $Enums.StatusStok
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StokUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    produkId?: IntFieldUpdateOperationsInput | number
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qty?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusStokFieldUpdateOperationsInput | $Enums.StatusStok
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PenjualanCreateInput = {
    tanggal?: Date | string
    total: number
    createdAt?: Date | string
    kasir: PenggunaCreateNestedOneWithoutPenjualanInput
    metodeBayar: MetodeBayarCreateNestedOneWithoutPenjualanInput
    PenjualanDetail?: PenjualanDetailCreateNestedManyWithoutPenjualanInput
  }

  export type PenjualanUncheckedCreateInput = {
    id?: number
    tanggal?: Date | string
    total: number
    kasirId: number
    metodeBayarId: number
    createdAt?: Date | string
    PenjualanDetail?: PenjualanDetailUncheckedCreateNestedManyWithoutPenjualanInput
  }

  export type PenjualanUpdateInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kasir?: PenggunaUpdateOneRequiredWithoutPenjualanNestedInput
    metodeBayar?: MetodeBayarUpdateOneRequiredWithoutPenjualanNestedInput
    PenjualanDetail?: PenjualanDetailUpdateManyWithoutPenjualanNestedInput
  }

  export type PenjualanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    kasirId?: IntFieldUpdateOperationsInput | number
    metodeBayarId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PenjualanDetail?: PenjualanDetailUncheckedUpdateManyWithoutPenjualanNestedInput
  }

  export type PenjualanCreateManyInput = {
    id?: number
    tanggal?: Date | string
    total: number
    kasirId: number
    metodeBayarId: number
    createdAt?: Date | string
  }

  export type PenjualanUpdateManyMutationInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PenjualanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    kasirId?: IntFieldUpdateOperationsInput | number
    metodeBayarId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetodeBayarCreateInput = {
    nama: string
    Penjualan?: PenjualanCreateNestedManyWithoutMetodeBayarInput
  }

  export type MetodeBayarUncheckedCreateInput = {
    id?: number
    nama: string
    Penjualan?: PenjualanUncheckedCreateNestedManyWithoutMetodeBayarInput
  }

  export type MetodeBayarUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    Penjualan?: PenjualanUpdateManyWithoutMetodeBayarNestedInput
  }

  export type MetodeBayarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    Penjualan?: PenjualanUncheckedUpdateManyWithoutMetodeBayarNestedInput
  }

  export type MetodeBayarCreateManyInput = {
    id?: number
    nama: string
  }

  export type MetodeBayarUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type MetodeBayarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type PenjualanDetailCreateInput = {
    harga: number
    qty?: number
    tipe: $Enums.JenisPenjualan
    penjualan: PenjualanCreateNestedOneWithoutPenjualanDetailInput
    produk: ProdukCreateNestedOneWithoutPenjualanDetailInput
    stok: StokCreateNestedOneWithoutPenjualanDetailInput
    Komisi?: KomisiKasirCreateNestedManyWithoutPenjualanDetailInput
  }

  export type PenjualanDetailUncheckedCreateInput = {
    id?: number
    produkId: number
    penjualanId: number
    stokId: number
    harga: number
    qty?: number
    tipe: $Enums.JenisPenjualan
    Komisi?: KomisiKasirUncheckedCreateNestedManyWithoutPenjualanDetailInput
  }

  export type PenjualanDetailUpdateInput = {
    harga?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    tipe?: EnumJenisPenjualanFieldUpdateOperationsInput | $Enums.JenisPenjualan
    penjualan?: PenjualanUpdateOneRequiredWithoutPenjualanDetailNestedInput
    produk?: ProdukUpdateOneRequiredWithoutPenjualanDetailNestedInput
    stok?: StokUpdateOneRequiredWithoutPenjualanDetailNestedInput
    Komisi?: KomisiKasirUpdateManyWithoutPenjualanDetailNestedInput
  }

  export type PenjualanDetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    produkId?: IntFieldUpdateOperationsInput | number
    penjualanId?: IntFieldUpdateOperationsInput | number
    stokId?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    tipe?: EnumJenisPenjualanFieldUpdateOperationsInput | $Enums.JenisPenjualan
    Komisi?: KomisiKasirUncheckedUpdateManyWithoutPenjualanDetailNestedInput
  }

  export type PenjualanDetailCreateManyInput = {
    id?: number
    produkId: number
    penjualanId: number
    stokId: number
    harga: number
    qty?: number
    tipe: $Enums.JenisPenjualan
  }

  export type PenjualanDetailUpdateManyMutationInput = {
    harga?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    tipe?: EnumJenisPenjualanFieldUpdateOperationsInput | $Enums.JenisPenjualan
  }

  export type PenjualanDetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    produkId?: IntFieldUpdateOperationsInput | number
    penjualanId?: IntFieldUpdateOperationsInput | number
    stokId?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    tipe?: EnumJenisPenjualanFieldUpdateOperationsInput | $Enums.JenisPenjualan
  }

  export type PenggunaCreateInput = {
    nama: string
    username: string
    password: string
    email: string
    role?: $Enums.Role
    verifikasi?: boolean
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Penjualan?: PenjualanCreateNestedManyWithoutKasirInput
    Komisi?: KomisiKasirCreateNestedManyWithoutKasirInput
  }

  export type PenggunaUncheckedCreateInput = {
    id?: number
    nama: string
    username: string
    password: string
    email: string
    role?: $Enums.Role
    verifikasi?: boolean
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Penjualan?: PenjualanUncheckedCreateNestedManyWithoutKasirInput
    Komisi?: KomisiKasirUncheckedCreateNestedManyWithoutKasirInput
  }

  export type PenggunaUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verifikasi?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Penjualan?: PenjualanUpdateManyWithoutKasirNestedInput
    Komisi?: KomisiKasirUpdateManyWithoutKasirNestedInput
  }

  export type PenggunaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verifikasi?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Penjualan?: PenjualanUncheckedUpdateManyWithoutKasirNestedInput
    Komisi?: KomisiKasirUncheckedUpdateManyWithoutKasirNestedInput
  }

  export type PenggunaCreateManyInput = {
    id?: number
    nama: string
    username: string
    password: string
    email: string
    role?: $Enums.Role
    verifikasi?: boolean
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type PenggunaUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verifikasi?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PenggunaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verifikasi?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type KomisiKategoriCreateInput = {
    persen?: number
    createdAt?: Date | string
    kategori: KategoriCreateNestedOneWithoutKomisiInput
  }

  export type KomisiKategoriUncheckedCreateInput = {
    id?: number
    kategoriId: number
    persen?: number
    createdAt?: Date | string
  }

  export type KomisiKategoriUpdateInput = {
    persen?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kategori?: KategoriUpdateOneRequiredWithoutKomisiNestedInput
  }

  export type KomisiKategoriUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    kategoriId?: IntFieldUpdateOperationsInput | number
    persen?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KomisiKategoriCreateManyInput = {
    id?: number
    kategoriId: number
    persen?: number
    createdAt?: Date | string
  }

  export type KomisiKategoriUpdateManyMutationInput = {
    persen?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KomisiKategoriUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    kategoriId?: IntFieldUpdateOperationsInput | number
    persen?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KomisiKasirCreateInput = {
    jumlah: number
    createdAt?: Date | string
    penjualanDetail: PenjualanDetailCreateNestedOneWithoutKomisiInput
    kasir: PenggunaCreateNestedOneWithoutKomisiInput
  }

  export type KomisiKasirUncheckedCreateInput = {
    id?: number
    penjualanDetailId: number
    kasirId: number
    jumlah: number
    createdAt?: Date | string
  }

  export type KomisiKasirUpdateInput = {
    jumlah?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    penjualanDetail?: PenjualanDetailUpdateOneRequiredWithoutKomisiNestedInput
    kasir?: PenggunaUpdateOneRequiredWithoutKomisiNestedInput
  }

  export type KomisiKasirUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    penjualanDetailId?: IntFieldUpdateOperationsInput | number
    kasirId?: IntFieldUpdateOperationsInput | number
    jumlah?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KomisiKasirCreateManyInput = {
    id?: number
    penjualanDetailId: number
    kasirId: number
    jumlah: number
    createdAt?: Date | string
  }

  export type KomisiKasirUpdateManyMutationInput = {
    jumlah?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KomisiKasirUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    penjualanDetailId?: IntFieldUpdateOperationsInput | number
    kasirId?: IntFieldUpdateOperationsInput | number
    jumlah?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanHarianCreateInput = {
    tanggal: Date | string
    stokAwal: number
    stokAkhir: number
    totalPenjualan: number
    totalHPP: number
    totalLaba: number
    totalKomisi: number
  }

  export type LaporanHarianUncheckedCreateInput = {
    id?: number
    tanggal: Date | string
    stokAwal: number
    stokAkhir: number
    totalPenjualan: number
    totalHPP: number
    totalLaba: number
    totalKomisi: number
  }

  export type LaporanHarianUpdateInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    stokAwal?: IntFieldUpdateOperationsInput | number
    stokAkhir?: IntFieldUpdateOperationsInput | number
    totalPenjualan?: IntFieldUpdateOperationsInput | number
    totalHPP?: IntFieldUpdateOperationsInput | number
    totalLaba?: IntFieldUpdateOperationsInput | number
    totalKomisi?: IntFieldUpdateOperationsInput | number
  }

  export type LaporanHarianUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    stokAwal?: IntFieldUpdateOperationsInput | number
    stokAkhir?: IntFieldUpdateOperationsInput | number
    totalPenjualan?: IntFieldUpdateOperationsInput | number
    totalHPP?: IntFieldUpdateOperationsInput | number
    totalLaba?: IntFieldUpdateOperationsInput | number
    totalKomisi?: IntFieldUpdateOperationsInput | number
  }

  export type LaporanHarianCreateManyInput = {
    id?: number
    tanggal: Date | string
    stokAwal: number
    stokAkhir: number
    totalPenjualan: number
    totalHPP: number
    totalLaba: number
    totalKomisi: number
  }

  export type LaporanHarianUpdateManyMutationInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    stokAwal?: IntFieldUpdateOperationsInput | number
    stokAkhir?: IntFieldUpdateOperationsInput | number
    totalPenjualan?: IntFieldUpdateOperationsInput | number
    totalHPP?: IntFieldUpdateOperationsInput | number
    totalLaba?: IntFieldUpdateOperationsInput | number
    totalKomisi?: IntFieldUpdateOperationsInput | number
  }

  export type LaporanHarianUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    stokAwal?: IntFieldUpdateOperationsInput | number
    stokAkhir?: IntFieldUpdateOperationsInput | number
    totalPenjualan?: IntFieldUpdateOperationsInput | number
    totalHPP?: IntFieldUpdateOperationsInput | number
    totalLaba?: IntFieldUpdateOperationsInput | number
    totalKomisi?: IntFieldUpdateOperationsInput | number
  }

  export type SuplierCreateInput = {
    nama: string
    kontak?: string | null
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Pembelian?: PembelianCreateNestedManyWithoutSuplierInput
  }

  export type SuplierUncheckedCreateInput = {
    id?: number
    nama: string
    kontak?: string | null
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Pembelian?: PembelianUncheckedCreateNestedManyWithoutSuplierInput
  }

  export type SuplierUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    kontak?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Pembelian?: PembelianUpdateManyWithoutSuplierNestedInput
  }

  export type SuplierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    kontak?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Pembelian?: PembelianUncheckedUpdateManyWithoutSuplierNestedInput
  }

  export type SuplierCreateManyInput = {
    id?: number
    nama: string
    kontak?: string | null
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type SuplierUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    kontak?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SuplierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    kontak?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PembelianCreateInput = {
    tanggal?: Date | string
    total: number
    status: $Enums.StatusPembelian
    createdAt?: Date | string
    suplier: SuplierCreateNestedOneWithoutPembelianInput
    PembelianDetail?: PembelianDetailCreateNestedManyWithoutPembelianInput
    Piutang?: PiutangCreateNestedManyWithoutPembelianInput
  }

  export type PembelianUncheckedCreateInput = {
    id?: number
    suplierId: number
    tanggal?: Date | string
    total: number
    status: $Enums.StatusPembelian
    createdAt?: Date | string
    PembelianDetail?: PembelianDetailUncheckedCreateNestedManyWithoutPembelianInput
    Piutang?: PiutangUncheckedCreateNestedManyWithoutPembelianInput
  }

  export type PembelianUpdateInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusPembelianFieldUpdateOperationsInput | $Enums.StatusPembelian
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suplier?: SuplierUpdateOneRequiredWithoutPembelianNestedInput
    PembelianDetail?: PembelianDetailUpdateManyWithoutPembelianNestedInput
    Piutang?: PiutangUpdateManyWithoutPembelianNestedInput
  }

  export type PembelianUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    suplierId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusPembelianFieldUpdateOperationsInput | $Enums.StatusPembelian
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PembelianDetail?: PembelianDetailUncheckedUpdateManyWithoutPembelianNestedInput
    Piutang?: PiutangUncheckedUpdateManyWithoutPembelianNestedInput
  }

  export type PembelianCreateManyInput = {
    id?: number
    suplierId: number
    tanggal?: Date | string
    total: number
    status: $Enums.StatusPembelian
    createdAt?: Date | string
  }

  export type PembelianUpdateManyMutationInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusPembelianFieldUpdateOperationsInput | $Enums.StatusPembelian
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PembelianUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    suplierId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusPembelianFieldUpdateOperationsInput | $Enums.StatusPembelian
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PembelianDetailCreateInput = {
    qty: number
    harga: number
    pembelian: PembelianCreateNestedOneWithoutPembelianDetailInput
    produk: ProdukCreateNestedOneWithoutPembelianDetailInput
  }

  export type PembelianDetailUncheckedCreateInput = {
    id?: number
    pembelianId: number
    produkId: number
    qty: number
    harga: number
  }

  export type PembelianDetailUpdateInput = {
    qty?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    pembelian?: PembelianUpdateOneRequiredWithoutPembelianDetailNestedInput
    produk?: ProdukUpdateOneRequiredWithoutPembelianDetailNestedInput
  }

  export type PembelianDetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pembelianId?: IntFieldUpdateOperationsInput | number
    produkId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
  }

  export type PembelianDetailCreateManyInput = {
    id?: number
    pembelianId: number
    produkId: number
    qty: number
    harga: number
  }

  export type PembelianDetailUpdateManyMutationInput = {
    qty?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
  }

  export type PembelianDetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pembelianId?: IntFieldUpdateOperationsInput | number
    produkId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
  }

  export type PiutangCreateInput = {
    jumlah: number
    tanggalJatuhTempo: Date | string
    status: $Enums.StatusPiutang
    pembelian: PembelianCreateNestedOneWithoutPiutangInput
  }

  export type PiutangUncheckedCreateInput = {
    id?: number
    pembelianId: number
    jumlah: number
    tanggalJatuhTempo: Date | string
    status: $Enums.StatusPiutang
  }

  export type PiutangUpdateInput = {
    jumlah?: IntFieldUpdateOperationsInput | number
    tanggalJatuhTempo?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPiutangFieldUpdateOperationsInput | $Enums.StatusPiutang
    pembelian?: PembelianUpdateOneRequiredWithoutPiutangNestedInput
  }

  export type PiutangUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pembelianId?: IntFieldUpdateOperationsInput | number
    jumlah?: IntFieldUpdateOperationsInput | number
    tanggalJatuhTempo?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPiutangFieldUpdateOperationsInput | $Enums.StatusPiutang
  }

  export type PiutangCreateManyInput = {
    id?: number
    pembelianId: number
    jumlah: number
    tanggalJatuhTempo: Date | string
    status: $Enums.StatusPiutang
  }

  export type PiutangUpdateManyMutationInput = {
    jumlah?: IntFieldUpdateOperationsInput | number
    tanggalJatuhTempo?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPiutangFieldUpdateOperationsInput | $Enums.StatusPiutang
  }

  export type PiutangUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pembelianId?: IntFieldUpdateOperationsInput | number
    jumlah?: IntFieldUpdateOperationsInput | number
    tanggalJatuhTempo?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPiutangFieldUpdateOperationsInput | $Enums.StatusPiutang
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ProdukListRelationFilter = {
    every?: ProdukWhereInput
    some?: ProdukWhereInput
    none?: ProdukWhereInput
  }

  export type KomisiKategoriListRelationFilter = {
    every?: KomisiKategoriWhereInput
    some?: KomisiKategoriWhereInput
    none?: KomisiKategoriWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProdukOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KomisiKategoriOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KategoriCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type KategoriAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KategoriMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type KategoriMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type KategoriSumOrderByAggregateInput = {
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type KategoriScalarRelationFilter = {
    is?: KategoriWhereInput
    isNot?: KategoriWhereInput
  }

  export type StokListRelationFilter = {
    every?: StokWhereInput
    some?: StokWhereInput
    none?: StokWhereInput
  }

  export type PembelianDetailListRelationFilter = {
    every?: PembelianDetailWhereInput
    some?: PembelianDetailWhereInput
    none?: PembelianDetailWhereInput
  }

  export type PenjualanDetailListRelationFilter = {
    every?: PenjualanDetailWhereInput
    some?: PenjualanDetailWhereInput
    none?: PenjualanDetailWhereInput
  }

  export type StokOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PembelianDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PenjualanDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProdukCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    kategoriId?: SortOrder
    hargaBeli?: SortOrder
    hargaJualRetail?: SortOrder
    hargaJualGrosir?: SortOrder
    qtyMinGrosir?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProdukAvgOrderByAggregateInput = {
    id?: SortOrder
    kategoriId?: SortOrder
    hargaBeli?: SortOrder
    hargaJualRetail?: SortOrder
    hargaJualGrosir?: SortOrder
    qtyMinGrosir?: SortOrder
  }

  export type ProdukMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    kategoriId?: SortOrder
    hargaBeli?: SortOrder
    hargaJualRetail?: SortOrder
    hargaJualGrosir?: SortOrder
    qtyMinGrosir?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProdukMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    kategoriId?: SortOrder
    hargaBeli?: SortOrder
    hargaJualRetail?: SortOrder
    hargaJualGrosir?: SortOrder
    qtyMinGrosir?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProdukSumOrderByAggregateInput = {
    id?: SortOrder
    kategoriId?: SortOrder
    hargaBeli?: SortOrder
    hargaJualRetail?: SortOrder
    hargaJualGrosir?: SortOrder
    qtyMinGrosir?: SortOrder
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

  export type EnumStatusStokFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusStok | EnumStatusStokFieldRefInput<$PrismaModel>
    in?: $Enums.StatusStok[] | ListEnumStatusStokFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusStok[] | ListEnumStatusStokFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusStokFilter<$PrismaModel> | $Enums.StatusStok
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

  export type ProdukScalarRelationFilter = {
    is?: ProdukWhereInput
    isNot?: ProdukWhereInput
  }

  export type StokCountOrderByAggregateInput = {
    id?: SortOrder
    produkId?: SortOrder
    serialNumber?: SortOrder
    expiredDate?: SortOrder
    qty?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type StokAvgOrderByAggregateInput = {
    id?: SortOrder
    produkId?: SortOrder
    qty?: SortOrder
  }

  export type StokMaxOrderByAggregateInput = {
    id?: SortOrder
    produkId?: SortOrder
    serialNumber?: SortOrder
    expiredDate?: SortOrder
    qty?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type StokMinOrderByAggregateInput = {
    id?: SortOrder
    produkId?: SortOrder
    serialNumber?: SortOrder
    expiredDate?: SortOrder
    qty?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type StokSumOrderByAggregateInput = {
    id?: SortOrder
    produkId?: SortOrder
    qty?: SortOrder
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

  export type EnumStatusStokWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusStok | EnumStatusStokFieldRefInput<$PrismaModel>
    in?: $Enums.StatusStok[] | ListEnumStatusStokFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusStok[] | ListEnumStatusStokFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusStokWithAggregatesFilter<$PrismaModel> | $Enums.StatusStok
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusStokFilter<$PrismaModel>
    _max?: NestedEnumStatusStokFilter<$PrismaModel>
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

  export type PenggunaScalarRelationFilter = {
    is?: PenggunaWhereInput
    isNot?: PenggunaWhereInput
  }

  export type MetodeBayarScalarRelationFilter = {
    is?: MetodeBayarWhereInput
    isNot?: MetodeBayarWhereInput
  }

  export type PenjualanCountOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    total?: SortOrder
    kasirId?: SortOrder
    metodeBayarId?: SortOrder
    createdAt?: SortOrder
  }

  export type PenjualanAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    kasirId?: SortOrder
    metodeBayarId?: SortOrder
  }

  export type PenjualanMaxOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    total?: SortOrder
    kasirId?: SortOrder
    metodeBayarId?: SortOrder
    createdAt?: SortOrder
  }

  export type PenjualanMinOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    total?: SortOrder
    kasirId?: SortOrder
    metodeBayarId?: SortOrder
    createdAt?: SortOrder
  }

  export type PenjualanSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    kasirId?: SortOrder
    metodeBayarId?: SortOrder
  }

  export type PenjualanListRelationFilter = {
    every?: PenjualanWhereInput
    some?: PenjualanWhereInput
    none?: PenjualanWhereInput
  }

  export type PenjualanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MetodeBayarCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type MetodeBayarAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MetodeBayarMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type MetodeBayarMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type MetodeBayarSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumJenisPenjualanFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisPenjualan | EnumJenisPenjualanFieldRefInput<$PrismaModel>
    in?: $Enums.JenisPenjualan[] | ListEnumJenisPenjualanFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisPenjualan[] | ListEnumJenisPenjualanFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisPenjualanFilter<$PrismaModel> | $Enums.JenisPenjualan
  }

  export type PenjualanScalarRelationFilter = {
    is?: PenjualanWhereInput
    isNot?: PenjualanWhereInput
  }

  export type StokScalarRelationFilter = {
    is?: StokWhereInput
    isNot?: StokWhereInput
  }

  export type KomisiKasirListRelationFilter = {
    every?: KomisiKasirWhereInput
    some?: KomisiKasirWhereInput
    none?: KomisiKasirWhereInput
  }

  export type KomisiKasirOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PenjualanDetailCountOrderByAggregateInput = {
    id?: SortOrder
    produkId?: SortOrder
    penjualanId?: SortOrder
    stokId?: SortOrder
    harga?: SortOrder
    qty?: SortOrder
    tipe?: SortOrder
  }

  export type PenjualanDetailAvgOrderByAggregateInput = {
    id?: SortOrder
    produkId?: SortOrder
    penjualanId?: SortOrder
    stokId?: SortOrder
    harga?: SortOrder
    qty?: SortOrder
  }

  export type PenjualanDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    produkId?: SortOrder
    penjualanId?: SortOrder
    stokId?: SortOrder
    harga?: SortOrder
    qty?: SortOrder
    tipe?: SortOrder
  }

  export type PenjualanDetailMinOrderByAggregateInput = {
    id?: SortOrder
    produkId?: SortOrder
    penjualanId?: SortOrder
    stokId?: SortOrder
    harga?: SortOrder
    qty?: SortOrder
    tipe?: SortOrder
  }

  export type PenjualanDetailSumOrderByAggregateInput = {
    id?: SortOrder
    produkId?: SortOrder
    penjualanId?: SortOrder
    stokId?: SortOrder
    harga?: SortOrder
    qty?: SortOrder
  }

  export type EnumJenisPenjualanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisPenjualan | EnumJenisPenjualanFieldRefInput<$PrismaModel>
    in?: $Enums.JenisPenjualan[] | ListEnumJenisPenjualanFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisPenjualan[] | ListEnumJenisPenjualanFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisPenjualanWithAggregatesFilter<$PrismaModel> | $Enums.JenisPenjualan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisPenjualanFilter<$PrismaModel>
    _max?: NestedEnumJenisPenjualanFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type PenggunaCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    verifikasi?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type PenggunaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PenggunaMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    verifikasi?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type PenggunaMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    verifikasi?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type PenggunaSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type KomisiKategoriCountOrderByAggregateInput = {
    id?: SortOrder
    kategoriId?: SortOrder
    persen?: SortOrder
    createdAt?: SortOrder
  }

  export type KomisiKategoriAvgOrderByAggregateInput = {
    id?: SortOrder
    kategoriId?: SortOrder
    persen?: SortOrder
  }

  export type KomisiKategoriMaxOrderByAggregateInput = {
    id?: SortOrder
    kategoriId?: SortOrder
    persen?: SortOrder
    createdAt?: SortOrder
  }

  export type KomisiKategoriMinOrderByAggregateInput = {
    id?: SortOrder
    kategoriId?: SortOrder
    persen?: SortOrder
    createdAt?: SortOrder
  }

  export type KomisiKategoriSumOrderByAggregateInput = {
    id?: SortOrder
    kategoriId?: SortOrder
    persen?: SortOrder
  }

  export type PenjualanDetailScalarRelationFilter = {
    is?: PenjualanDetailWhereInput
    isNot?: PenjualanDetailWhereInput
  }

  export type KomisiKasirCountOrderByAggregateInput = {
    id?: SortOrder
    penjualanDetailId?: SortOrder
    kasirId?: SortOrder
    jumlah?: SortOrder
    createdAt?: SortOrder
  }

  export type KomisiKasirAvgOrderByAggregateInput = {
    id?: SortOrder
    penjualanDetailId?: SortOrder
    kasirId?: SortOrder
    jumlah?: SortOrder
  }

  export type KomisiKasirMaxOrderByAggregateInput = {
    id?: SortOrder
    penjualanDetailId?: SortOrder
    kasirId?: SortOrder
    jumlah?: SortOrder
    createdAt?: SortOrder
  }

  export type KomisiKasirMinOrderByAggregateInput = {
    id?: SortOrder
    penjualanDetailId?: SortOrder
    kasirId?: SortOrder
    jumlah?: SortOrder
    createdAt?: SortOrder
  }

  export type KomisiKasirSumOrderByAggregateInput = {
    id?: SortOrder
    penjualanDetailId?: SortOrder
    kasirId?: SortOrder
    jumlah?: SortOrder
  }

  export type LaporanHarianCountOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    stokAwal?: SortOrder
    stokAkhir?: SortOrder
    totalPenjualan?: SortOrder
    totalHPP?: SortOrder
    totalLaba?: SortOrder
    totalKomisi?: SortOrder
  }

  export type LaporanHarianAvgOrderByAggregateInput = {
    id?: SortOrder
    stokAwal?: SortOrder
    stokAkhir?: SortOrder
    totalPenjualan?: SortOrder
    totalHPP?: SortOrder
    totalLaba?: SortOrder
    totalKomisi?: SortOrder
  }

  export type LaporanHarianMaxOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    stokAwal?: SortOrder
    stokAkhir?: SortOrder
    totalPenjualan?: SortOrder
    totalHPP?: SortOrder
    totalLaba?: SortOrder
    totalKomisi?: SortOrder
  }

  export type LaporanHarianMinOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    stokAwal?: SortOrder
    stokAkhir?: SortOrder
    totalPenjualan?: SortOrder
    totalHPP?: SortOrder
    totalLaba?: SortOrder
    totalKomisi?: SortOrder
  }

  export type LaporanHarianSumOrderByAggregateInput = {
    id?: SortOrder
    stokAwal?: SortOrder
    stokAkhir?: SortOrder
    totalPenjualan?: SortOrder
    totalHPP?: SortOrder
    totalLaba?: SortOrder
    totalKomisi?: SortOrder
  }

  export type PembelianListRelationFilter = {
    every?: PembelianWhereInput
    some?: PembelianWhereInput
    none?: PembelianWhereInput
  }

  export type PembelianOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SuplierCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    kontak?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type SuplierAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SuplierMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    kontak?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type SuplierMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    kontak?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type SuplierSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumStatusPembelianFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPembelian | EnumStatusPembelianFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPembelian[] | ListEnumStatusPembelianFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPembelian[] | ListEnumStatusPembelianFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPembelianFilter<$PrismaModel> | $Enums.StatusPembelian
  }

  export type SuplierScalarRelationFilter = {
    is?: SuplierWhereInput
    isNot?: SuplierWhereInput
  }

  export type PiutangListRelationFilter = {
    every?: PiutangWhereInput
    some?: PiutangWhereInput
    none?: PiutangWhereInput
  }

  export type PiutangOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PembelianCountOrderByAggregateInput = {
    id?: SortOrder
    suplierId?: SortOrder
    tanggal?: SortOrder
    total?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PembelianAvgOrderByAggregateInput = {
    id?: SortOrder
    suplierId?: SortOrder
    total?: SortOrder
  }

  export type PembelianMaxOrderByAggregateInput = {
    id?: SortOrder
    suplierId?: SortOrder
    tanggal?: SortOrder
    total?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PembelianMinOrderByAggregateInput = {
    id?: SortOrder
    suplierId?: SortOrder
    tanggal?: SortOrder
    total?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PembelianSumOrderByAggregateInput = {
    id?: SortOrder
    suplierId?: SortOrder
    total?: SortOrder
  }

  export type EnumStatusPembelianWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPembelian | EnumStatusPembelianFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPembelian[] | ListEnumStatusPembelianFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPembelian[] | ListEnumStatusPembelianFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPembelianWithAggregatesFilter<$PrismaModel> | $Enums.StatusPembelian
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPembelianFilter<$PrismaModel>
    _max?: NestedEnumStatusPembelianFilter<$PrismaModel>
  }

  export type PembelianScalarRelationFilter = {
    is?: PembelianWhereInput
    isNot?: PembelianWhereInput
  }

  export type PembelianDetailCountOrderByAggregateInput = {
    id?: SortOrder
    pembelianId?: SortOrder
    produkId?: SortOrder
    qty?: SortOrder
    harga?: SortOrder
  }

  export type PembelianDetailAvgOrderByAggregateInput = {
    id?: SortOrder
    pembelianId?: SortOrder
    produkId?: SortOrder
    qty?: SortOrder
    harga?: SortOrder
  }

  export type PembelianDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    pembelianId?: SortOrder
    produkId?: SortOrder
    qty?: SortOrder
    harga?: SortOrder
  }

  export type PembelianDetailMinOrderByAggregateInput = {
    id?: SortOrder
    pembelianId?: SortOrder
    produkId?: SortOrder
    qty?: SortOrder
    harga?: SortOrder
  }

  export type PembelianDetailSumOrderByAggregateInput = {
    id?: SortOrder
    pembelianId?: SortOrder
    produkId?: SortOrder
    qty?: SortOrder
    harga?: SortOrder
  }

  export type EnumStatusPiutangFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPiutang | EnumStatusPiutangFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPiutang[] | ListEnumStatusPiutangFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPiutang[] | ListEnumStatusPiutangFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPiutangFilter<$PrismaModel> | $Enums.StatusPiutang
  }

  export type PiutangCountOrderByAggregateInput = {
    id?: SortOrder
    pembelianId?: SortOrder
    jumlah?: SortOrder
    tanggalJatuhTempo?: SortOrder
    status?: SortOrder
  }

  export type PiutangAvgOrderByAggregateInput = {
    id?: SortOrder
    pembelianId?: SortOrder
    jumlah?: SortOrder
  }

  export type PiutangMaxOrderByAggregateInput = {
    id?: SortOrder
    pembelianId?: SortOrder
    jumlah?: SortOrder
    tanggalJatuhTempo?: SortOrder
    status?: SortOrder
  }

  export type PiutangMinOrderByAggregateInput = {
    id?: SortOrder
    pembelianId?: SortOrder
    jumlah?: SortOrder
    tanggalJatuhTempo?: SortOrder
    status?: SortOrder
  }

  export type PiutangSumOrderByAggregateInput = {
    id?: SortOrder
    pembelianId?: SortOrder
    jumlah?: SortOrder
  }

  export type EnumStatusPiutangWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPiutang | EnumStatusPiutangFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPiutang[] | ListEnumStatusPiutangFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPiutang[] | ListEnumStatusPiutangFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPiutangWithAggregatesFilter<$PrismaModel> | $Enums.StatusPiutang
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPiutangFilter<$PrismaModel>
    _max?: NestedEnumStatusPiutangFilter<$PrismaModel>
  }

  export type ProdukCreateNestedManyWithoutKategoriInput = {
    create?: XOR<ProdukCreateWithoutKategoriInput, ProdukUncheckedCreateWithoutKategoriInput> | ProdukCreateWithoutKategoriInput[] | ProdukUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: ProdukCreateOrConnectWithoutKategoriInput | ProdukCreateOrConnectWithoutKategoriInput[]
    createMany?: ProdukCreateManyKategoriInputEnvelope
    connect?: ProdukWhereUniqueInput | ProdukWhereUniqueInput[]
  }

  export type KomisiKategoriCreateNestedManyWithoutKategoriInput = {
    create?: XOR<KomisiKategoriCreateWithoutKategoriInput, KomisiKategoriUncheckedCreateWithoutKategoriInput> | KomisiKategoriCreateWithoutKategoriInput[] | KomisiKategoriUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: KomisiKategoriCreateOrConnectWithoutKategoriInput | KomisiKategoriCreateOrConnectWithoutKategoriInput[]
    createMany?: KomisiKategoriCreateManyKategoriInputEnvelope
    connect?: KomisiKategoriWhereUniqueInput | KomisiKategoriWhereUniqueInput[]
  }

  export type ProdukUncheckedCreateNestedManyWithoutKategoriInput = {
    create?: XOR<ProdukCreateWithoutKategoriInput, ProdukUncheckedCreateWithoutKategoriInput> | ProdukCreateWithoutKategoriInput[] | ProdukUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: ProdukCreateOrConnectWithoutKategoriInput | ProdukCreateOrConnectWithoutKategoriInput[]
    createMany?: ProdukCreateManyKategoriInputEnvelope
    connect?: ProdukWhereUniqueInput | ProdukWhereUniqueInput[]
  }

  export type KomisiKategoriUncheckedCreateNestedManyWithoutKategoriInput = {
    create?: XOR<KomisiKategoriCreateWithoutKategoriInput, KomisiKategoriUncheckedCreateWithoutKategoriInput> | KomisiKategoriCreateWithoutKategoriInput[] | KomisiKategoriUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: KomisiKategoriCreateOrConnectWithoutKategoriInput | KomisiKategoriCreateOrConnectWithoutKategoriInput[]
    createMany?: KomisiKategoriCreateManyKategoriInputEnvelope
    connect?: KomisiKategoriWhereUniqueInput | KomisiKategoriWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProdukUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<ProdukCreateWithoutKategoriInput, ProdukUncheckedCreateWithoutKategoriInput> | ProdukCreateWithoutKategoriInput[] | ProdukUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: ProdukCreateOrConnectWithoutKategoriInput | ProdukCreateOrConnectWithoutKategoriInput[]
    upsert?: ProdukUpsertWithWhereUniqueWithoutKategoriInput | ProdukUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: ProdukCreateManyKategoriInputEnvelope
    set?: ProdukWhereUniqueInput | ProdukWhereUniqueInput[]
    disconnect?: ProdukWhereUniqueInput | ProdukWhereUniqueInput[]
    delete?: ProdukWhereUniqueInput | ProdukWhereUniqueInput[]
    connect?: ProdukWhereUniqueInput | ProdukWhereUniqueInput[]
    update?: ProdukUpdateWithWhereUniqueWithoutKategoriInput | ProdukUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: ProdukUpdateManyWithWhereWithoutKategoriInput | ProdukUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: ProdukScalarWhereInput | ProdukScalarWhereInput[]
  }

  export type KomisiKategoriUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<KomisiKategoriCreateWithoutKategoriInput, KomisiKategoriUncheckedCreateWithoutKategoriInput> | KomisiKategoriCreateWithoutKategoriInput[] | KomisiKategoriUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: KomisiKategoriCreateOrConnectWithoutKategoriInput | KomisiKategoriCreateOrConnectWithoutKategoriInput[]
    upsert?: KomisiKategoriUpsertWithWhereUniqueWithoutKategoriInput | KomisiKategoriUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: KomisiKategoriCreateManyKategoriInputEnvelope
    set?: KomisiKategoriWhereUniqueInput | KomisiKategoriWhereUniqueInput[]
    disconnect?: KomisiKategoriWhereUniqueInput | KomisiKategoriWhereUniqueInput[]
    delete?: KomisiKategoriWhereUniqueInput | KomisiKategoriWhereUniqueInput[]
    connect?: KomisiKategoriWhereUniqueInput | KomisiKategoriWhereUniqueInput[]
    update?: KomisiKategoriUpdateWithWhereUniqueWithoutKategoriInput | KomisiKategoriUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: KomisiKategoriUpdateManyWithWhereWithoutKategoriInput | KomisiKategoriUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: KomisiKategoriScalarWhereInput | KomisiKategoriScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProdukUncheckedUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<ProdukCreateWithoutKategoriInput, ProdukUncheckedCreateWithoutKategoriInput> | ProdukCreateWithoutKategoriInput[] | ProdukUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: ProdukCreateOrConnectWithoutKategoriInput | ProdukCreateOrConnectWithoutKategoriInput[]
    upsert?: ProdukUpsertWithWhereUniqueWithoutKategoriInput | ProdukUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: ProdukCreateManyKategoriInputEnvelope
    set?: ProdukWhereUniqueInput | ProdukWhereUniqueInput[]
    disconnect?: ProdukWhereUniqueInput | ProdukWhereUniqueInput[]
    delete?: ProdukWhereUniqueInput | ProdukWhereUniqueInput[]
    connect?: ProdukWhereUniqueInput | ProdukWhereUniqueInput[]
    update?: ProdukUpdateWithWhereUniqueWithoutKategoriInput | ProdukUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: ProdukUpdateManyWithWhereWithoutKategoriInput | ProdukUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: ProdukScalarWhereInput | ProdukScalarWhereInput[]
  }

  export type KomisiKategoriUncheckedUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<KomisiKategoriCreateWithoutKategoriInput, KomisiKategoriUncheckedCreateWithoutKategoriInput> | KomisiKategoriCreateWithoutKategoriInput[] | KomisiKategoriUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: KomisiKategoriCreateOrConnectWithoutKategoriInput | KomisiKategoriCreateOrConnectWithoutKategoriInput[]
    upsert?: KomisiKategoriUpsertWithWhereUniqueWithoutKategoriInput | KomisiKategoriUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: KomisiKategoriCreateManyKategoriInputEnvelope
    set?: KomisiKategoriWhereUniqueInput | KomisiKategoriWhereUniqueInput[]
    disconnect?: KomisiKategoriWhereUniqueInput | KomisiKategoriWhereUniqueInput[]
    delete?: KomisiKategoriWhereUniqueInput | KomisiKategoriWhereUniqueInput[]
    connect?: KomisiKategoriWhereUniqueInput | KomisiKategoriWhereUniqueInput[]
    update?: KomisiKategoriUpdateWithWhereUniqueWithoutKategoriInput | KomisiKategoriUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: KomisiKategoriUpdateManyWithWhereWithoutKategoriInput | KomisiKategoriUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: KomisiKategoriScalarWhereInput | KomisiKategoriScalarWhereInput[]
  }

  export type KategoriCreateNestedOneWithoutProdukInput = {
    create?: XOR<KategoriCreateWithoutProdukInput, KategoriUncheckedCreateWithoutProdukInput>
    connectOrCreate?: KategoriCreateOrConnectWithoutProdukInput
    connect?: KategoriWhereUniqueInput
  }

  export type StokCreateNestedManyWithoutProdukInput = {
    create?: XOR<StokCreateWithoutProdukInput, StokUncheckedCreateWithoutProdukInput> | StokCreateWithoutProdukInput[] | StokUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: StokCreateOrConnectWithoutProdukInput | StokCreateOrConnectWithoutProdukInput[]
    createMany?: StokCreateManyProdukInputEnvelope
    connect?: StokWhereUniqueInput | StokWhereUniqueInput[]
  }

  export type PembelianDetailCreateNestedManyWithoutProdukInput = {
    create?: XOR<PembelianDetailCreateWithoutProdukInput, PembelianDetailUncheckedCreateWithoutProdukInput> | PembelianDetailCreateWithoutProdukInput[] | PembelianDetailUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: PembelianDetailCreateOrConnectWithoutProdukInput | PembelianDetailCreateOrConnectWithoutProdukInput[]
    createMany?: PembelianDetailCreateManyProdukInputEnvelope
    connect?: PembelianDetailWhereUniqueInput | PembelianDetailWhereUniqueInput[]
  }

  export type PenjualanDetailCreateNestedManyWithoutProdukInput = {
    create?: XOR<PenjualanDetailCreateWithoutProdukInput, PenjualanDetailUncheckedCreateWithoutProdukInput> | PenjualanDetailCreateWithoutProdukInput[] | PenjualanDetailUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: PenjualanDetailCreateOrConnectWithoutProdukInput | PenjualanDetailCreateOrConnectWithoutProdukInput[]
    createMany?: PenjualanDetailCreateManyProdukInputEnvelope
    connect?: PenjualanDetailWhereUniqueInput | PenjualanDetailWhereUniqueInput[]
  }

  export type StokUncheckedCreateNestedManyWithoutProdukInput = {
    create?: XOR<StokCreateWithoutProdukInput, StokUncheckedCreateWithoutProdukInput> | StokCreateWithoutProdukInput[] | StokUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: StokCreateOrConnectWithoutProdukInput | StokCreateOrConnectWithoutProdukInput[]
    createMany?: StokCreateManyProdukInputEnvelope
    connect?: StokWhereUniqueInput | StokWhereUniqueInput[]
  }

  export type PembelianDetailUncheckedCreateNestedManyWithoutProdukInput = {
    create?: XOR<PembelianDetailCreateWithoutProdukInput, PembelianDetailUncheckedCreateWithoutProdukInput> | PembelianDetailCreateWithoutProdukInput[] | PembelianDetailUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: PembelianDetailCreateOrConnectWithoutProdukInput | PembelianDetailCreateOrConnectWithoutProdukInput[]
    createMany?: PembelianDetailCreateManyProdukInputEnvelope
    connect?: PembelianDetailWhereUniqueInput | PembelianDetailWhereUniqueInput[]
  }

  export type PenjualanDetailUncheckedCreateNestedManyWithoutProdukInput = {
    create?: XOR<PenjualanDetailCreateWithoutProdukInput, PenjualanDetailUncheckedCreateWithoutProdukInput> | PenjualanDetailCreateWithoutProdukInput[] | PenjualanDetailUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: PenjualanDetailCreateOrConnectWithoutProdukInput | PenjualanDetailCreateOrConnectWithoutProdukInput[]
    createMany?: PenjualanDetailCreateManyProdukInputEnvelope
    connect?: PenjualanDetailWhereUniqueInput | PenjualanDetailWhereUniqueInput[]
  }

  export type KategoriUpdateOneRequiredWithoutProdukNestedInput = {
    create?: XOR<KategoriCreateWithoutProdukInput, KategoriUncheckedCreateWithoutProdukInput>
    connectOrCreate?: KategoriCreateOrConnectWithoutProdukInput
    upsert?: KategoriUpsertWithoutProdukInput
    connect?: KategoriWhereUniqueInput
    update?: XOR<XOR<KategoriUpdateToOneWithWhereWithoutProdukInput, KategoriUpdateWithoutProdukInput>, KategoriUncheckedUpdateWithoutProdukInput>
  }

  export type StokUpdateManyWithoutProdukNestedInput = {
    create?: XOR<StokCreateWithoutProdukInput, StokUncheckedCreateWithoutProdukInput> | StokCreateWithoutProdukInput[] | StokUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: StokCreateOrConnectWithoutProdukInput | StokCreateOrConnectWithoutProdukInput[]
    upsert?: StokUpsertWithWhereUniqueWithoutProdukInput | StokUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: StokCreateManyProdukInputEnvelope
    set?: StokWhereUniqueInput | StokWhereUniqueInput[]
    disconnect?: StokWhereUniqueInput | StokWhereUniqueInput[]
    delete?: StokWhereUniqueInput | StokWhereUniqueInput[]
    connect?: StokWhereUniqueInput | StokWhereUniqueInput[]
    update?: StokUpdateWithWhereUniqueWithoutProdukInput | StokUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: StokUpdateManyWithWhereWithoutProdukInput | StokUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: StokScalarWhereInput | StokScalarWhereInput[]
  }

  export type PembelianDetailUpdateManyWithoutProdukNestedInput = {
    create?: XOR<PembelianDetailCreateWithoutProdukInput, PembelianDetailUncheckedCreateWithoutProdukInput> | PembelianDetailCreateWithoutProdukInput[] | PembelianDetailUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: PembelianDetailCreateOrConnectWithoutProdukInput | PembelianDetailCreateOrConnectWithoutProdukInput[]
    upsert?: PembelianDetailUpsertWithWhereUniqueWithoutProdukInput | PembelianDetailUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: PembelianDetailCreateManyProdukInputEnvelope
    set?: PembelianDetailWhereUniqueInput | PembelianDetailWhereUniqueInput[]
    disconnect?: PembelianDetailWhereUniqueInput | PembelianDetailWhereUniqueInput[]
    delete?: PembelianDetailWhereUniqueInput | PembelianDetailWhereUniqueInput[]
    connect?: PembelianDetailWhereUniqueInput | PembelianDetailWhereUniqueInput[]
    update?: PembelianDetailUpdateWithWhereUniqueWithoutProdukInput | PembelianDetailUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: PembelianDetailUpdateManyWithWhereWithoutProdukInput | PembelianDetailUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: PembelianDetailScalarWhereInput | PembelianDetailScalarWhereInput[]
  }

  export type PenjualanDetailUpdateManyWithoutProdukNestedInput = {
    create?: XOR<PenjualanDetailCreateWithoutProdukInput, PenjualanDetailUncheckedCreateWithoutProdukInput> | PenjualanDetailCreateWithoutProdukInput[] | PenjualanDetailUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: PenjualanDetailCreateOrConnectWithoutProdukInput | PenjualanDetailCreateOrConnectWithoutProdukInput[]
    upsert?: PenjualanDetailUpsertWithWhereUniqueWithoutProdukInput | PenjualanDetailUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: PenjualanDetailCreateManyProdukInputEnvelope
    set?: PenjualanDetailWhereUniqueInput | PenjualanDetailWhereUniqueInput[]
    disconnect?: PenjualanDetailWhereUniqueInput | PenjualanDetailWhereUniqueInput[]
    delete?: PenjualanDetailWhereUniqueInput | PenjualanDetailWhereUniqueInput[]
    connect?: PenjualanDetailWhereUniqueInput | PenjualanDetailWhereUniqueInput[]
    update?: PenjualanDetailUpdateWithWhereUniqueWithoutProdukInput | PenjualanDetailUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: PenjualanDetailUpdateManyWithWhereWithoutProdukInput | PenjualanDetailUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: PenjualanDetailScalarWhereInput | PenjualanDetailScalarWhereInput[]
  }

  export type StokUncheckedUpdateManyWithoutProdukNestedInput = {
    create?: XOR<StokCreateWithoutProdukInput, StokUncheckedCreateWithoutProdukInput> | StokCreateWithoutProdukInput[] | StokUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: StokCreateOrConnectWithoutProdukInput | StokCreateOrConnectWithoutProdukInput[]
    upsert?: StokUpsertWithWhereUniqueWithoutProdukInput | StokUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: StokCreateManyProdukInputEnvelope
    set?: StokWhereUniqueInput | StokWhereUniqueInput[]
    disconnect?: StokWhereUniqueInput | StokWhereUniqueInput[]
    delete?: StokWhereUniqueInput | StokWhereUniqueInput[]
    connect?: StokWhereUniqueInput | StokWhereUniqueInput[]
    update?: StokUpdateWithWhereUniqueWithoutProdukInput | StokUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: StokUpdateManyWithWhereWithoutProdukInput | StokUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: StokScalarWhereInput | StokScalarWhereInput[]
  }

  export type PembelianDetailUncheckedUpdateManyWithoutProdukNestedInput = {
    create?: XOR<PembelianDetailCreateWithoutProdukInput, PembelianDetailUncheckedCreateWithoutProdukInput> | PembelianDetailCreateWithoutProdukInput[] | PembelianDetailUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: PembelianDetailCreateOrConnectWithoutProdukInput | PembelianDetailCreateOrConnectWithoutProdukInput[]
    upsert?: PembelianDetailUpsertWithWhereUniqueWithoutProdukInput | PembelianDetailUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: PembelianDetailCreateManyProdukInputEnvelope
    set?: PembelianDetailWhereUniqueInput | PembelianDetailWhereUniqueInput[]
    disconnect?: PembelianDetailWhereUniqueInput | PembelianDetailWhereUniqueInput[]
    delete?: PembelianDetailWhereUniqueInput | PembelianDetailWhereUniqueInput[]
    connect?: PembelianDetailWhereUniqueInput | PembelianDetailWhereUniqueInput[]
    update?: PembelianDetailUpdateWithWhereUniqueWithoutProdukInput | PembelianDetailUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: PembelianDetailUpdateManyWithWhereWithoutProdukInput | PembelianDetailUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: PembelianDetailScalarWhereInput | PembelianDetailScalarWhereInput[]
  }

  export type PenjualanDetailUncheckedUpdateManyWithoutProdukNestedInput = {
    create?: XOR<PenjualanDetailCreateWithoutProdukInput, PenjualanDetailUncheckedCreateWithoutProdukInput> | PenjualanDetailCreateWithoutProdukInput[] | PenjualanDetailUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: PenjualanDetailCreateOrConnectWithoutProdukInput | PenjualanDetailCreateOrConnectWithoutProdukInput[]
    upsert?: PenjualanDetailUpsertWithWhereUniqueWithoutProdukInput | PenjualanDetailUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: PenjualanDetailCreateManyProdukInputEnvelope
    set?: PenjualanDetailWhereUniqueInput | PenjualanDetailWhereUniqueInput[]
    disconnect?: PenjualanDetailWhereUniqueInput | PenjualanDetailWhereUniqueInput[]
    delete?: PenjualanDetailWhereUniqueInput | PenjualanDetailWhereUniqueInput[]
    connect?: PenjualanDetailWhereUniqueInput | PenjualanDetailWhereUniqueInput[]
    update?: PenjualanDetailUpdateWithWhereUniqueWithoutProdukInput | PenjualanDetailUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: PenjualanDetailUpdateManyWithWhereWithoutProdukInput | PenjualanDetailUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: PenjualanDetailScalarWhereInput | PenjualanDetailScalarWhereInput[]
  }

  export type ProdukCreateNestedOneWithoutStokInput = {
    create?: XOR<ProdukCreateWithoutStokInput, ProdukUncheckedCreateWithoutStokInput>
    connectOrCreate?: ProdukCreateOrConnectWithoutStokInput
    connect?: ProdukWhereUniqueInput
  }

  export type PenjualanDetailCreateNestedManyWithoutStokInput = {
    create?: XOR<PenjualanDetailCreateWithoutStokInput, PenjualanDetailUncheckedCreateWithoutStokInput> | PenjualanDetailCreateWithoutStokInput[] | PenjualanDetailUncheckedCreateWithoutStokInput[]
    connectOrCreate?: PenjualanDetailCreateOrConnectWithoutStokInput | PenjualanDetailCreateOrConnectWithoutStokInput[]
    createMany?: PenjualanDetailCreateManyStokInputEnvelope
    connect?: PenjualanDetailWhereUniqueInput | PenjualanDetailWhereUniqueInput[]
  }

  export type PenjualanDetailUncheckedCreateNestedManyWithoutStokInput = {
    create?: XOR<PenjualanDetailCreateWithoutStokInput, PenjualanDetailUncheckedCreateWithoutStokInput> | PenjualanDetailCreateWithoutStokInput[] | PenjualanDetailUncheckedCreateWithoutStokInput[]
    connectOrCreate?: PenjualanDetailCreateOrConnectWithoutStokInput | PenjualanDetailCreateOrConnectWithoutStokInput[]
    createMany?: PenjualanDetailCreateManyStokInputEnvelope
    connect?: PenjualanDetailWhereUniqueInput | PenjualanDetailWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumStatusStokFieldUpdateOperationsInput = {
    set?: $Enums.StatusStok
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProdukUpdateOneRequiredWithoutStokNestedInput = {
    create?: XOR<ProdukCreateWithoutStokInput, ProdukUncheckedCreateWithoutStokInput>
    connectOrCreate?: ProdukCreateOrConnectWithoutStokInput
    upsert?: ProdukUpsertWithoutStokInput
    connect?: ProdukWhereUniqueInput
    update?: XOR<XOR<ProdukUpdateToOneWithWhereWithoutStokInput, ProdukUpdateWithoutStokInput>, ProdukUncheckedUpdateWithoutStokInput>
  }

  export type PenjualanDetailUpdateManyWithoutStokNestedInput = {
    create?: XOR<PenjualanDetailCreateWithoutStokInput, PenjualanDetailUncheckedCreateWithoutStokInput> | PenjualanDetailCreateWithoutStokInput[] | PenjualanDetailUncheckedCreateWithoutStokInput[]
    connectOrCreate?: PenjualanDetailCreateOrConnectWithoutStokInput | PenjualanDetailCreateOrConnectWithoutStokInput[]
    upsert?: PenjualanDetailUpsertWithWhereUniqueWithoutStokInput | PenjualanDetailUpsertWithWhereUniqueWithoutStokInput[]
    createMany?: PenjualanDetailCreateManyStokInputEnvelope
    set?: PenjualanDetailWhereUniqueInput | PenjualanDetailWhereUniqueInput[]
    disconnect?: PenjualanDetailWhereUniqueInput | PenjualanDetailWhereUniqueInput[]
    delete?: PenjualanDetailWhereUniqueInput | PenjualanDetailWhereUniqueInput[]
    connect?: PenjualanDetailWhereUniqueInput | PenjualanDetailWhereUniqueInput[]
    update?: PenjualanDetailUpdateWithWhereUniqueWithoutStokInput | PenjualanDetailUpdateWithWhereUniqueWithoutStokInput[]
    updateMany?: PenjualanDetailUpdateManyWithWhereWithoutStokInput | PenjualanDetailUpdateManyWithWhereWithoutStokInput[]
    deleteMany?: PenjualanDetailScalarWhereInput | PenjualanDetailScalarWhereInput[]
  }

  export type PenjualanDetailUncheckedUpdateManyWithoutStokNestedInput = {
    create?: XOR<PenjualanDetailCreateWithoutStokInput, PenjualanDetailUncheckedCreateWithoutStokInput> | PenjualanDetailCreateWithoutStokInput[] | PenjualanDetailUncheckedCreateWithoutStokInput[]
    connectOrCreate?: PenjualanDetailCreateOrConnectWithoutStokInput | PenjualanDetailCreateOrConnectWithoutStokInput[]
    upsert?: PenjualanDetailUpsertWithWhereUniqueWithoutStokInput | PenjualanDetailUpsertWithWhereUniqueWithoutStokInput[]
    createMany?: PenjualanDetailCreateManyStokInputEnvelope
    set?: PenjualanDetailWhereUniqueInput | PenjualanDetailWhereUniqueInput[]
    disconnect?: PenjualanDetailWhereUniqueInput | PenjualanDetailWhereUniqueInput[]
    delete?: PenjualanDetailWhereUniqueInput | PenjualanDetailWhereUniqueInput[]
    connect?: PenjualanDetailWhereUniqueInput | PenjualanDetailWhereUniqueInput[]
    update?: PenjualanDetailUpdateWithWhereUniqueWithoutStokInput | PenjualanDetailUpdateWithWhereUniqueWithoutStokInput[]
    updateMany?: PenjualanDetailUpdateManyWithWhereWithoutStokInput | PenjualanDetailUpdateManyWithWhereWithoutStokInput[]
    deleteMany?: PenjualanDetailScalarWhereInput | PenjualanDetailScalarWhereInput[]
  }

  export type PenggunaCreateNestedOneWithoutPenjualanInput = {
    create?: XOR<PenggunaCreateWithoutPenjualanInput, PenggunaUncheckedCreateWithoutPenjualanInput>
    connectOrCreate?: PenggunaCreateOrConnectWithoutPenjualanInput
    connect?: PenggunaWhereUniqueInput
  }

  export type MetodeBayarCreateNestedOneWithoutPenjualanInput = {
    create?: XOR<MetodeBayarCreateWithoutPenjualanInput, MetodeBayarUncheckedCreateWithoutPenjualanInput>
    connectOrCreate?: MetodeBayarCreateOrConnectWithoutPenjualanInput
    connect?: MetodeBayarWhereUniqueInput
  }

  export type PenjualanDetailCreateNestedManyWithoutPenjualanInput = {
    create?: XOR<PenjualanDetailCreateWithoutPenjualanInput, PenjualanDetailUncheckedCreateWithoutPenjualanInput> | PenjualanDetailCreateWithoutPenjualanInput[] | PenjualanDetailUncheckedCreateWithoutPenjualanInput[]
    connectOrCreate?: PenjualanDetailCreateOrConnectWithoutPenjualanInput | PenjualanDetailCreateOrConnectWithoutPenjualanInput[]
    createMany?: PenjualanDetailCreateManyPenjualanInputEnvelope
    connect?: PenjualanDetailWhereUniqueInput | PenjualanDetailWhereUniqueInput[]
  }

  export type PenjualanDetailUncheckedCreateNestedManyWithoutPenjualanInput = {
    create?: XOR<PenjualanDetailCreateWithoutPenjualanInput, PenjualanDetailUncheckedCreateWithoutPenjualanInput> | PenjualanDetailCreateWithoutPenjualanInput[] | PenjualanDetailUncheckedCreateWithoutPenjualanInput[]
    connectOrCreate?: PenjualanDetailCreateOrConnectWithoutPenjualanInput | PenjualanDetailCreateOrConnectWithoutPenjualanInput[]
    createMany?: PenjualanDetailCreateManyPenjualanInputEnvelope
    connect?: PenjualanDetailWhereUniqueInput | PenjualanDetailWhereUniqueInput[]
  }

  export type PenggunaUpdateOneRequiredWithoutPenjualanNestedInput = {
    create?: XOR<PenggunaCreateWithoutPenjualanInput, PenggunaUncheckedCreateWithoutPenjualanInput>
    connectOrCreate?: PenggunaCreateOrConnectWithoutPenjualanInput
    upsert?: PenggunaUpsertWithoutPenjualanInput
    connect?: PenggunaWhereUniqueInput
    update?: XOR<XOR<PenggunaUpdateToOneWithWhereWithoutPenjualanInput, PenggunaUpdateWithoutPenjualanInput>, PenggunaUncheckedUpdateWithoutPenjualanInput>
  }

  export type MetodeBayarUpdateOneRequiredWithoutPenjualanNestedInput = {
    create?: XOR<MetodeBayarCreateWithoutPenjualanInput, MetodeBayarUncheckedCreateWithoutPenjualanInput>
    connectOrCreate?: MetodeBayarCreateOrConnectWithoutPenjualanInput
    upsert?: MetodeBayarUpsertWithoutPenjualanInput
    connect?: MetodeBayarWhereUniqueInput
    update?: XOR<XOR<MetodeBayarUpdateToOneWithWhereWithoutPenjualanInput, MetodeBayarUpdateWithoutPenjualanInput>, MetodeBayarUncheckedUpdateWithoutPenjualanInput>
  }

  export type PenjualanDetailUpdateManyWithoutPenjualanNestedInput = {
    create?: XOR<PenjualanDetailCreateWithoutPenjualanInput, PenjualanDetailUncheckedCreateWithoutPenjualanInput> | PenjualanDetailCreateWithoutPenjualanInput[] | PenjualanDetailUncheckedCreateWithoutPenjualanInput[]
    connectOrCreate?: PenjualanDetailCreateOrConnectWithoutPenjualanInput | PenjualanDetailCreateOrConnectWithoutPenjualanInput[]
    upsert?: PenjualanDetailUpsertWithWhereUniqueWithoutPenjualanInput | PenjualanDetailUpsertWithWhereUniqueWithoutPenjualanInput[]
    createMany?: PenjualanDetailCreateManyPenjualanInputEnvelope
    set?: PenjualanDetailWhereUniqueInput | PenjualanDetailWhereUniqueInput[]
    disconnect?: PenjualanDetailWhereUniqueInput | PenjualanDetailWhereUniqueInput[]
    delete?: PenjualanDetailWhereUniqueInput | PenjualanDetailWhereUniqueInput[]
    connect?: PenjualanDetailWhereUniqueInput | PenjualanDetailWhereUniqueInput[]
    update?: PenjualanDetailUpdateWithWhereUniqueWithoutPenjualanInput | PenjualanDetailUpdateWithWhereUniqueWithoutPenjualanInput[]
    updateMany?: PenjualanDetailUpdateManyWithWhereWithoutPenjualanInput | PenjualanDetailUpdateManyWithWhereWithoutPenjualanInput[]
    deleteMany?: PenjualanDetailScalarWhereInput | PenjualanDetailScalarWhereInput[]
  }

  export type PenjualanDetailUncheckedUpdateManyWithoutPenjualanNestedInput = {
    create?: XOR<PenjualanDetailCreateWithoutPenjualanInput, PenjualanDetailUncheckedCreateWithoutPenjualanInput> | PenjualanDetailCreateWithoutPenjualanInput[] | PenjualanDetailUncheckedCreateWithoutPenjualanInput[]
    connectOrCreate?: PenjualanDetailCreateOrConnectWithoutPenjualanInput | PenjualanDetailCreateOrConnectWithoutPenjualanInput[]
    upsert?: PenjualanDetailUpsertWithWhereUniqueWithoutPenjualanInput | PenjualanDetailUpsertWithWhereUniqueWithoutPenjualanInput[]
    createMany?: PenjualanDetailCreateManyPenjualanInputEnvelope
    set?: PenjualanDetailWhereUniqueInput | PenjualanDetailWhereUniqueInput[]
    disconnect?: PenjualanDetailWhereUniqueInput | PenjualanDetailWhereUniqueInput[]
    delete?: PenjualanDetailWhereUniqueInput | PenjualanDetailWhereUniqueInput[]
    connect?: PenjualanDetailWhereUniqueInput | PenjualanDetailWhereUniqueInput[]
    update?: PenjualanDetailUpdateWithWhereUniqueWithoutPenjualanInput | PenjualanDetailUpdateWithWhereUniqueWithoutPenjualanInput[]
    updateMany?: PenjualanDetailUpdateManyWithWhereWithoutPenjualanInput | PenjualanDetailUpdateManyWithWhereWithoutPenjualanInput[]
    deleteMany?: PenjualanDetailScalarWhereInput | PenjualanDetailScalarWhereInput[]
  }

  export type PenjualanCreateNestedManyWithoutMetodeBayarInput = {
    create?: XOR<PenjualanCreateWithoutMetodeBayarInput, PenjualanUncheckedCreateWithoutMetodeBayarInput> | PenjualanCreateWithoutMetodeBayarInput[] | PenjualanUncheckedCreateWithoutMetodeBayarInput[]
    connectOrCreate?: PenjualanCreateOrConnectWithoutMetodeBayarInput | PenjualanCreateOrConnectWithoutMetodeBayarInput[]
    createMany?: PenjualanCreateManyMetodeBayarInputEnvelope
    connect?: PenjualanWhereUniqueInput | PenjualanWhereUniqueInput[]
  }

  export type PenjualanUncheckedCreateNestedManyWithoutMetodeBayarInput = {
    create?: XOR<PenjualanCreateWithoutMetodeBayarInput, PenjualanUncheckedCreateWithoutMetodeBayarInput> | PenjualanCreateWithoutMetodeBayarInput[] | PenjualanUncheckedCreateWithoutMetodeBayarInput[]
    connectOrCreate?: PenjualanCreateOrConnectWithoutMetodeBayarInput | PenjualanCreateOrConnectWithoutMetodeBayarInput[]
    createMany?: PenjualanCreateManyMetodeBayarInputEnvelope
    connect?: PenjualanWhereUniqueInput | PenjualanWhereUniqueInput[]
  }

  export type PenjualanUpdateManyWithoutMetodeBayarNestedInput = {
    create?: XOR<PenjualanCreateWithoutMetodeBayarInput, PenjualanUncheckedCreateWithoutMetodeBayarInput> | PenjualanCreateWithoutMetodeBayarInput[] | PenjualanUncheckedCreateWithoutMetodeBayarInput[]
    connectOrCreate?: PenjualanCreateOrConnectWithoutMetodeBayarInput | PenjualanCreateOrConnectWithoutMetodeBayarInput[]
    upsert?: PenjualanUpsertWithWhereUniqueWithoutMetodeBayarInput | PenjualanUpsertWithWhereUniqueWithoutMetodeBayarInput[]
    createMany?: PenjualanCreateManyMetodeBayarInputEnvelope
    set?: PenjualanWhereUniqueInput | PenjualanWhereUniqueInput[]
    disconnect?: PenjualanWhereUniqueInput | PenjualanWhereUniqueInput[]
    delete?: PenjualanWhereUniqueInput | PenjualanWhereUniqueInput[]
    connect?: PenjualanWhereUniqueInput | PenjualanWhereUniqueInput[]
    update?: PenjualanUpdateWithWhereUniqueWithoutMetodeBayarInput | PenjualanUpdateWithWhereUniqueWithoutMetodeBayarInput[]
    updateMany?: PenjualanUpdateManyWithWhereWithoutMetodeBayarInput | PenjualanUpdateManyWithWhereWithoutMetodeBayarInput[]
    deleteMany?: PenjualanScalarWhereInput | PenjualanScalarWhereInput[]
  }

  export type PenjualanUncheckedUpdateManyWithoutMetodeBayarNestedInput = {
    create?: XOR<PenjualanCreateWithoutMetodeBayarInput, PenjualanUncheckedCreateWithoutMetodeBayarInput> | PenjualanCreateWithoutMetodeBayarInput[] | PenjualanUncheckedCreateWithoutMetodeBayarInput[]
    connectOrCreate?: PenjualanCreateOrConnectWithoutMetodeBayarInput | PenjualanCreateOrConnectWithoutMetodeBayarInput[]
    upsert?: PenjualanUpsertWithWhereUniqueWithoutMetodeBayarInput | PenjualanUpsertWithWhereUniqueWithoutMetodeBayarInput[]
    createMany?: PenjualanCreateManyMetodeBayarInputEnvelope
    set?: PenjualanWhereUniqueInput | PenjualanWhereUniqueInput[]
    disconnect?: PenjualanWhereUniqueInput | PenjualanWhereUniqueInput[]
    delete?: PenjualanWhereUniqueInput | PenjualanWhereUniqueInput[]
    connect?: PenjualanWhereUniqueInput | PenjualanWhereUniqueInput[]
    update?: PenjualanUpdateWithWhereUniqueWithoutMetodeBayarInput | PenjualanUpdateWithWhereUniqueWithoutMetodeBayarInput[]
    updateMany?: PenjualanUpdateManyWithWhereWithoutMetodeBayarInput | PenjualanUpdateManyWithWhereWithoutMetodeBayarInput[]
    deleteMany?: PenjualanScalarWhereInput | PenjualanScalarWhereInput[]
  }

  export type PenjualanCreateNestedOneWithoutPenjualanDetailInput = {
    create?: XOR<PenjualanCreateWithoutPenjualanDetailInput, PenjualanUncheckedCreateWithoutPenjualanDetailInput>
    connectOrCreate?: PenjualanCreateOrConnectWithoutPenjualanDetailInput
    connect?: PenjualanWhereUniqueInput
  }

  export type ProdukCreateNestedOneWithoutPenjualanDetailInput = {
    create?: XOR<ProdukCreateWithoutPenjualanDetailInput, ProdukUncheckedCreateWithoutPenjualanDetailInput>
    connectOrCreate?: ProdukCreateOrConnectWithoutPenjualanDetailInput
    connect?: ProdukWhereUniqueInput
  }

  export type StokCreateNestedOneWithoutPenjualanDetailInput = {
    create?: XOR<StokCreateWithoutPenjualanDetailInput, StokUncheckedCreateWithoutPenjualanDetailInput>
    connectOrCreate?: StokCreateOrConnectWithoutPenjualanDetailInput
    connect?: StokWhereUniqueInput
  }

  export type KomisiKasirCreateNestedManyWithoutPenjualanDetailInput = {
    create?: XOR<KomisiKasirCreateWithoutPenjualanDetailInput, KomisiKasirUncheckedCreateWithoutPenjualanDetailInput> | KomisiKasirCreateWithoutPenjualanDetailInput[] | KomisiKasirUncheckedCreateWithoutPenjualanDetailInput[]
    connectOrCreate?: KomisiKasirCreateOrConnectWithoutPenjualanDetailInput | KomisiKasirCreateOrConnectWithoutPenjualanDetailInput[]
    createMany?: KomisiKasirCreateManyPenjualanDetailInputEnvelope
    connect?: KomisiKasirWhereUniqueInput | KomisiKasirWhereUniqueInput[]
  }

  export type KomisiKasirUncheckedCreateNestedManyWithoutPenjualanDetailInput = {
    create?: XOR<KomisiKasirCreateWithoutPenjualanDetailInput, KomisiKasirUncheckedCreateWithoutPenjualanDetailInput> | KomisiKasirCreateWithoutPenjualanDetailInput[] | KomisiKasirUncheckedCreateWithoutPenjualanDetailInput[]
    connectOrCreate?: KomisiKasirCreateOrConnectWithoutPenjualanDetailInput | KomisiKasirCreateOrConnectWithoutPenjualanDetailInput[]
    createMany?: KomisiKasirCreateManyPenjualanDetailInputEnvelope
    connect?: KomisiKasirWhereUniqueInput | KomisiKasirWhereUniqueInput[]
  }

  export type EnumJenisPenjualanFieldUpdateOperationsInput = {
    set?: $Enums.JenisPenjualan
  }

  export type PenjualanUpdateOneRequiredWithoutPenjualanDetailNestedInput = {
    create?: XOR<PenjualanCreateWithoutPenjualanDetailInput, PenjualanUncheckedCreateWithoutPenjualanDetailInput>
    connectOrCreate?: PenjualanCreateOrConnectWithoutPenjualanDetailInput
    upsert?: PenjualanUpsertWithoutPenjualanDetailInput
    connect?: PenjualanWhereUniqueInput
    update?: XOR<XOR<PenjualanUpdateToOneWithWhereWithoutPenjualanDetailInput, PenjualanUpdateWithoutPenjualanDetailInput>, PenjualanUncheckedUpdateWithoutPenjualanDetailInput>
  }

  export type ProdukUpdateOneRequiredWithoutPenjualanDetailNestedInput = {
    create?: XOR<ProdukCreateWithoutPenjualanDetailInput, ProdukUncheckedCreateWithoutPenjualanDetailInput>
    connectOrCreate?: ProdukCreateOrConnectWithoutPenjualanDetailInput
    upsert?: ProdukUpsertWithoutPenjualanDetailInput
    connect?: ProdukWhereUniqueInput
    update?: XOR<XOR<ProdukUpdateToOneWithWhereWithoutPenjualanDetailInput, ProdukUpdateWithoutPenjualanDetailInput>, ProdukUncheckedUpdateWithoutPenjualanDetailInput>
  }

  export type StokUpdateOneRequiredWithoutPenjualanDetailNestedInput = {
    create?: XOR<StokCreateWithoutPenjualanDetailInput, StokUncheckedCreateWithoutPenjualanDetailInput>
    connectOrCreate?: StokCreateOrConnectWithoutPenjualanDetailInput
    upsert?: StokUpsertWithoutPenjualanDetailInput
    connect?: StokWhereUniqueInput
    update?: XOR<XOR<StokUpdateToOneWithWhereWithoutPenjualanDetailInput, StokUpdateWithoutPenjualanDetailInput>, StokUncheckedUpdateWithoutPenjualanDetailInput>
  }

  export type KomisiKasirUpdateManyWithoutPenjualanDetailNestedInput = {
    create?: XOR<KomisiKasirCreateWithoutPenjualanDetailInput, KomisiKasirUncheckedCreateWithoutPenjualanDetailInput> | KomisiKasirCreateWithoutPenjualanDetailInput[] | KomisiKasirUncheckedCreateWithoutPenjualanDetailInput[]
    connectOrCreate?: KomisiKasirCreateOrConnectWithoutPenjualanDetailInput | KomisiKasirCreateOrConnectWithoutPenjualanDetailInput[]
    upsert?: KomisiKasirUpsertWithWhereUniqueWithoutPenjualanDetailInput | KomisiKasirUpsertWithWhereUniqueWithoutPenjualanDetailInput[]
    createMany?: KomisiKasirCreateManyPenjualanDetailInputEnvelope
    set?: KomisiKasirWhereUniqueInput | KomisiKasirWhereUniqueInput[]
    disconnect?: KomisiKasirWhereUniqueInput | KomisiKasirWhereUniqueInput[]
    delete?: KomisiKasirWhereUniqueInput | KomisiKasirWhereUniqueInput[]
    connect?: KomisiKasirWhereUniqueInput | KomisiKasirWhereUniqueInput[]
    update?: KomisiKasirUpdateWithWhereUniqueWithoutPenjualanDetailInput | KomisiKasirUpdateWithWhereUniqueWithoutPenjualanDetailInput[]
    updateMany?: KomisiKasirUpdateManyWithWhereWithoutPenjualanDetailInput | KomisiKasirUpdateManyWithWhereWithoutPenjualanDetailInput[]
    deleteMany?: KomisiKasirScalarWhereInput | KomisiKasirScalarWhereInput[]
  }

  export type KomisiKasirUncheckedUpdateManyWithoutPenjualanDetailNestedInput = {
    create?: XOR<KomisiKasirCreateWithoutPenjualanDetailInput, KomisiKasirUncheckedCreateWithoutPenjualanDetailInput> | KomisiKasirCreateWithoutPenjualanDetailInput[] | KomisiKasirUncheckedCreateWithoutPenjualanDetailInput[]
    connectOrCreate?: KomisiKasirCreateOrConnectWithoutPenjualanDetailInput | KomisiKasirCreateOrConnectWithoutPenjualanDetailInput[]
    upsert?: KomisiKasirUpsertWithWhereUniqueWithoutPenjualanDetailInput | KomisiKasirUpsertWithWhereUniqueWithoutPenjualanDetailInput[]
    createMany?: KomisiKasirCreateManyPenjualanDetailInputEnvelope
    set?: KomisiKasirWhereUniqueInput | KomisiKasirWhereUniqueInput[]
    disconnect?: KomisiKasirWhereUniqueInput | KomisiKasirWhereUniqueInput[]
    delete?: KomisiKasirWhereUniqueInput | KomisiKasirWhereUniqueInput[]
    connect?: KomisiKasirWhereUniqueInput | KomisiKasirWhereUniqueInput[]
    update?: KomisiKasirUpdateWithWhereUniqueWithoutPenjualanDetailInput | KomisiKasirUpdateWithWhereUniqueWithoutPenjualanDetailInput[]
    updateMany?: KomisiKasirUpdateManyWithWhereWithoutPenjualanDetailInput | KomisiKasirUpdateManyWithWhereWithoutPenjualanDetailInput[]
    deleteMany?: KomisiKasirScalarWhereInput | KomisiKasirScalarWhereInput[]
  }

  export type PenjualanCreateNestedManyWithoutKasirInput = {
    create?: XOR<PenjualanCreateWithoutKasirInput, PenjualanUncheckedCreateWithoutKasirInput> | PenjualanCreateWithoutKasirInput[] | PenjualanUncheckedCreateWithoutKasirInput[]
    connectOrCreate?: PenjualanCreateOrConnectWithoutKasirInput | PenjualanCreateOrConnectWithoutKasirInput[]
    createMany?: PenjualanCreateManyKasirInputEnvelope
    connect?: PenjualanWhereUniqueInput | PenjualanWhereUniqueInput[]
  }

  export type KomisiKasirCreateNestedManyWithoutKasirInput = {
    create?: XOR<KomisiKasirCreateWithoutKasirInput, KomisiKasirUncheckedCreateWithoutKasirInput> | KomisiKasirCreateWithoutKasirInput[] | KomisiKasirUncheckedCreateWithoutKasirInput[]
    connectOrCreate?: KomisiKasirCreateOrConnectWithoutKasirInput | KomisiKasirCreateOrConnectWithoutKasirInput[]
    createMany?: KomisiKasirCreateManyKasirInputEnvelope
    connect?: KomisiKasirWhereUniqueInput | KomisiKasirWhereUniqueInput[]
  }

  export type PenjualanUncheckedCreateNestedManyWithoutKasirInput = {
    create?: XOR<PenjualanCreateWithoutKasirInput, PenjualanUncheckedCreateWithoutKasirInput> | PenjualanCreateWithoutKasirInput[] | PenjualanUncheckedCreateWithoutKasirInput[]
    connectOrCreate?: PenjualanCreateOrConnectWithoutKasirInput | PenjualanCreateOrConnectWithoutKasirInput[]
    createMany?: PenjualanCreateManyKasirInputEnvelope
    connect?: PenjualanWhereUniqueInput | PenjualanWhereUniqueInput[]
  }

  export type KomisiKasirUncheckedCreateNestedManyWithoutKasirInput = {
    create?: XOR<KomisiKasirCreateWithoutKasirInput, KomisiKasirUncheckedCreateWithoutKasirInput> | KomisiKasirCreateWithoutKasirInput[] | KomisiKasirUncheckedCreateWithoutKasirInput[]
    connectOrCreate?: KomisiKasirCreateOrConnectWithoutKasirInput | KomisiKasirCreateOrConnectWithoutKasirInput[]
    createMany?: KomisiKasirCreateManyKasirInputEnvelope
    connect?: KomisiKasirWhereUniqueInput | KomisiKasirWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type PenjualanUpdateManyWithoutKasirNestedInput = {
    create?: XOR<PenjualanCreateWithoutKasirInput, PenjualanUncheckedCreateWithoutKasirInput> | PenjualanCreateWithoutKasirInput[] | PenjualanUncheckedCreateWithoutKasirInput[]
    connectOrCreate?: PenjualanCreateOrConnectWithoutKasirInput | PenjualanCreateOrConnectWithoutKasirInput[]
    upsert?: PenjualanUpsertWithWhereUniqueWithoutKasirInput | PenjualanUpsertWithWhereUniqueWithoutKasirInput[]
    createMany?: PenjualanCreateManyKasirInputEnvelope
    set?: PenjualanWhereUniqueInput | PenjualanWhereUniqueInput[]
    disconnect?: PenjualanWhereUniqueInput | PenjualanWhereUniqueInput[]
    delete?: PenjualanWhereUniqueInput | PenjualanWhereUniqueInput[]
    connect?: PenjualanWhereUniqueInput | PenjualanWhereUniqueInput[]
    update?: PenjualanUpdateWithWhereUniqueWithoutKasirInput | PenjualanUpdateWithWhereUniqueWithoutKasirInput[]
    updateMany?: PenjualanUpdateManyWithWhereWithoutKasirInput | PenjualanUpdateManyWithWhereWithoutKasirInput[]
    deleteMany?: PenjualanScalarWhereInput | PenjualanScalarWhereInput[]
  }

  export type KomisiKasirUpdateManyWithoutKasirNestedInput = {
    create?: XOR<KomisiKasirCreateWithoutKasirInput, KomisiKasirUncheckedCreateWithoutKasirInput> | KomisiKasirCreateWithoutKasirInput[] | KomisiKasirUncheckedCreateWithoutKasirInput[]
    connectOrCreate?: KomisiKasirCreateOrConnectWithoutKasirInput | KomisiKasirCreateOrConnectWithoutKasirInput[]
    upsert?: KomisiKasirUpsertWithWhereUniqueWithoutKasirInput | KomisiKasirUpsertWithWhereUniqueWithoutKasirInput[]
    createMany?: KomisiKasirCreateManyKasirInputEnvelope
    set?: KomisiKasirWhereUniqueInput | KomisiKasirWhereUniqueInput[]
    disconnect?: KomisiKasirWhereUniqueInput | KomisiKasirWhereUniqueInput[]
    delete?: KomisiKasirWhereUniqueInput | KomisiKasirWhereUniqueInput[]
    connect?: KomisiKasirWhereUniqueInput | KomisiKasirWhereUniqueInput[]
    update?: KomisiKasirUpdateWithWhereUniqueWithoutKasirInput | KomisiKasirUpdateWithWhereUniqueWithoutKasirInput[]
    updateMany?: KomisiKasirUpdateManyWithWhereWithoutKasirInput | KomisiKasirUpdateManyWithWhereWithoutKasirInput[]
    deleteMany?: KomisiKasirScalarWhereInput | KomisiKasirScalarWhereInput[]
  }

  export type PenjualanUncheckedUpdateManyWithoutKasirNestedInput = {
    create?: XOR<PenjualanCreateWithoutKasirInput, PenjualanUncheckedCreateWithoutKasirInput> | PenjualanCreateWithoutKasirInput[] | PenjualanUncheckedCreateWithoutKasirInput[]
    connectOrCreate?: PenjualanCreateOrConnectWithoutKasirInput | PenjualanCreateOrConnectWithoutKasirInput[]
    upsert?: PenjualanUpsertWithWhereUniqueWithoutKasirInput | PenjualanUpsertWithWhereUniqueWithoutKasirInput[]
    createMany?: PenjualanCreateManyKasirInputEnvelope
    set?: PenjualanWhereUniqueInput | PenjualanWhereUniqueInput[]
    disconnect?: PenjualanWhereUniqueInput | PenjualanWhereUniqueInput[]
    delete?: PenjualanWhereUniqueInput | PenjualanWhereUniqueInput[]
    connect?: PenjualanWhereUniqueInput | PenjualanWhereUniqueInput[]
    update?: PenjualanUpdateWithWhereUniqueWithoutKasirInput | PenjualanUpdateWithWhereUniqueWithoutKasirInput[]
    updateMany?: PenjualanUpdateManyWithWhereWithoutKasirInput | PenjualanUpdateManyWithWhereWithoutKasirInput[]
    deleteMany?: PenjualanScalarWhereInput | PenjualanScalarWhereInput[]
  }

  export type KomisiKasirUncheckedUpdateManyWithoutKasirNestedInput = {
    create?: XOR<KomisiKasirCreateWithoutKasirInput, KomisiKasirUncheckedCreateWithoutKasirInput> | KomisiKasirCreateWithoutKasirInput[] | KomisiKasirUncheckedCreateWithoutKasirInput[]
    connectOrCreate?: KomisiKasirCreateOrConnectWithoutKasirInput | KomisiKasirCreateOrConnectWithoutKasirInput[]
    upsert?: KomisiKasirUpsertWithWhereUniqueWithoutKasirInput | KomisiKasirUpsertWithWhereUniqueWithoutKasirInput[]
    createMany?: KomisiKasirCreateManyKasirInputEnvelope
    set?: KomisiKasirWhereUniqueInput | KomisiKasirWhereUniqueInput[]
    disconnect?: KomisiKasirWhereUniqueInput | KomisiKasirWhereUniqueInput[]
    delete?: KomisiKasirWhereUniqueInput | KomisiKasirWhereUniqueInput[]
    connect?: KomisiKasirWhereUniqueInput | KomisiKasirWhereUniqueInput[]
    update?: KomisiKasirUpdateWithWhereUniqueWithoutKasirInput | KomisiKasirUpdateWithWhereUniqueWithoutKasirInput[]
    updateMany?: KomisiKasirUpdateManyWithWhereWithoutKasirInput | KomisiKasirUpdateManyWithWhereWithoutKasirInput[]
    deleteMany?: KomisiKasirScalarWhereInput | KomisiKasirScalarWhereInput[]
  }

  export type KategoriCreateNestedOneWithoutKomisiInput = {
    create?: XOR<KategoriCreateWithoutKomisiInput, KategoriUncheckedCreateWithoutKomisiInput>
    connectOrCreate?: KategoriCreateOrConnectWithoutKomisiInput
    connect?: KategoriWhereUniqueInput
  }

  export type KategoriUpdateOneRequiredWithoutKomisiNestedInput = {
    create?: XOR<KategoriCreateWithoutKomisiInput, KategoriUncheckedCreateWithoutKomisiInput>
    connectOrCreate?: KategoriCreateOrConnectWithoutKomisiInput
    upsert?: KategoriUpsertWithoutKomisiInput
    connect?: KategoriWhereUniqueInput
    update?: XOR<XOR<KategoriUpdateToOneWithWhereWithoutKomisiInput, KategoriUpdateWithoutKomisiInput>, KategoriUncheckedUpdateWithoutKomisiInput>
  }

  export type PenjualanDetailCreateNestedOneWithoutKomisiInput = {
    create?: XOR<PenjualanDetailCreateWithoutKomisiInput, PenjualanDetailUncheckedCreateWithoutKomisiInput>
    connectOrCreate?: PenjualanDetailCreateOrConnectWithoutKomisiInput
    connect?: PenjualanDetailWhereUniqueInput
  }

  export type PenggunaCreateNestedOneWithoutKomisiInput = {
    create?: XOR<PenggunaCreateWithoutKomisiInput, PenggunaUncheckedCreateWithoutKomisiInput>
    connectOrCreate?: PenggunaCreateOrConnectWithoutKomisiInput
    connect?: PenggunaWhereUniqueInput
  }

  export type PenjualanDetailUpdateOneRequiredWithoutKomisiNestedInput = {
    create?: XOR<PenjualanDetailCreateWithoutKomisiInput, PenjualanDetailUncheckedCreateWithoutKomisiInput>
    connectOrCreate?: PenjualanDetailCreateOrConnectWithoutKomisiInput
    upsert?: PenjualanDetailUpsertWithoutKomisiInput
    connect?: PenjualanDetailWhereUniqueInput
    update?: XOR<XOR<PenjualanDetailUpdateToOneWithWhereWithoutKomisiInput, PenjualanDetailUpdateWithoutKomisiInput>, PenjualanDetailUncheckedUpdateWithoutKomisiInput>
  }

  export type PenggunaUpdateOneRequiredWithoutKomisiNestedInput = {
    create?: XOR<PenggunaCreateWithoutKomisiInput, PenggunaUncheckedCreateWithoutKomisiInput>
    connectOrCreate?: PenggunaCreateOrConnectWithoutKomisiInput
    upsert?: PenggunaUpsertWithoutKomisiInput
    connect?: PenggunaWhereUniqueInput
    update?: XOR<XOR<PenggunaUpdateToOneWithWhereWithoutKomisiInput, PenggunaUpdateWithoutKomisiInput>, PenggunaUncheckedUpdateWithoutKomisiInput>
  }

  export type PembelianCreateNestedManyWithoutSuplierInput = {
    create?: XOR<PembelianCreateWithoutSuplierInput, PembelianUncheckedCreateWithoutSuplierInput> | PembelianCreateWithoutSuplierInput[] | PembelianUncheckedCreateWithoutSuplierInput[]
    connectOrCreate?: PembelianCreateOrConnectWithoutSuplierInput | PembelianCreateOrConnectWithoutSuplierInput[]
    createMany?: PembelianCreateManySuplierInputEnvelope
    connect?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
  }

  export type PembelianUncheckedCreateNestedManyWithoutSuplierInput = {
    create?: XOR<PembelianCreateWithoutSuplierInput, PembelianUncheckedCreateWithoutSuplierInput> | PembelianCreateWithoutSuplierInput[] | PembelianUncheckedCreateWithoutSuplierInput[]
    connectOrCreate?: PembelianCreateOrConnectWithoutSuplierInput | PembelianCreateOrConnectWithoutSuplierInput[]
    createMany?: PembelianCreateManySuplierInputEnvelope
    connect?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
  }

  export type PembelianUpdateManyWithoutSuplierNestedInput = {
    create?: XOR<PembelianCreateWithoutSuplierInput, PembelianUncheckedCreateWithoutSuplierInput> | PembelianCreateWithoutSuplierInput[] | PembelianUncheckedCreateWithoutSuplierInput[]
    connectOrCreate?: PembelianCreateOrConnectWithoutSuplierInput | PembelianCreateOrConnectWithoutSuplierInput[]
    upsert?: PembelianUpsertWithWhereUniqueWithoutSuplierInput | PembelianUpsertWithWhereUniqueWithoutSuplierInput[]
    createMany?: PembelianCreateManySuplierInputEnvelope
    set?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    disconnect?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    delete?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    connect?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    update?: PembelianUpdateWithWhereUniqueWithoutSuplierInput | PembelianUpdateWithWhereUniqueWithoutSuplierInput[]
    updateMany?: PembelianUpdateManyWithWhereWithoutSuplierInput | PembelianUpdateManyWithWhereWithoutSuplierInput[]
    deleteMany?: PembelianScalarWhereInput | PembelianScalarWhereInput[]
  }

  export type PembelianUncheckedUpdateManyWithoutSuplierNestedInput = {
    create?: XOR<PembelianCreateWithoutSuplierInput, PembelianUncheckedCreateWithoutSuplierInput> | PembelianCreateWithoutSuplierInput[] | PembelianUncheckedCreateWithoutSuplierInput[]
    connectOrCreate?: PembelianCreateOrConnectWithoutSuplierInput | PembelianCreateOrConnectWithoutSuplierInput[]
    upsert?: PembelianUpsertWithWhereUniqueWithoutSuplierInput | PembelianUpsertWithWhereUniqueWithoutSuplierInput[]
    createMany?: PembelianCreateManySuplierInputEnvelope
    set?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    disconnect?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    delete?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    connect?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    update?: PembelianUpdateWithWhereUniqueWithoutSuplierInput | PembelianUpdateWithWhereUniqueWithoutSuplierInput[]
    updateMany?: PembelianUpdateManyWithWhereWithoutSuplierInput | PembelianUpdateManyWithWhereWithoutSuplierInput[]
    deleteMany?: PembelianScalarWhereInput | PembelianScalarWhereInput[]
  }

  export type SuplierCreateNestedOneWithoutPembelianInput = {
    create?: XOR<SuplierCreateWithoutPembelianInput, SuplierUncheckedCreateWithoutPembelianInput>
    connectOrCreate?: SuplierCreateOrConnectWithoutPembelianInput
    connect?: SuplierWhereUniqueInput
  }

  export type PembelianDetailCreateNestedManyWithoutPembelianInput = {
    create?: XOR<PembelianDetailCreateWithoutPembelianInput, PembelianDetailUncheckedCreateWithoutPembelianInput> | PembelianDetailCreateWithoutPembelianInput[] | PembelianDetailUncheckedCreateWithoutPembelianInput[]
    connectOrCreate?: PembelianDetailCreateOrConnectWithoutPembelianInput | PembelianDetailCreateOrConnectWithoutPembelianInput[]
    createMany?: PembelianDetailCreateManyPembelianInputEnvelope
    connect?: PembelianDetailWhereUniqueInput | PembelianDetailWhereUniqueInput[]
  }

  export type PiutangCreateNestedManyWithoutPembelianInput = {
    create?: XOR<PiutangCreateWithoutPembelianInput, PiutangUncheckedCreateWithoutPembelianInput> | PiutangCreateWithoutPembelianInput[] | PiutangUncheckedCreateWithoutPembelianInput[]
    connectOrCreate?: PiutangCreateOrConnectWithoutPembelianInput | PiutangCreateOrConnectWithoutPembelianInput[]
    createMany?: PiutangCreateManyPembelianInputEnvelope
    connect?: PiutangWhereUniqueInput | PiutangWhereUniqueInput[]
  }

  export type PembelianDetailUncheckedCreateNestedManyWithoutPembelianInput = {
    create?: XOR<PembelianDetailCreateWithoutPembelianInput, PembelianDetailUncheckedCreateWithoutPembelianInput> | PembelianDetailCreateWithoutPembelianInput[] | PembelianDetailUncheckedCreateWithoutPembelianInput[]
    connectOrCreate?: PembelianDetailCreateOrConnectWithoutPembelianInput | PembelianDetailCreateOrConnectWithoutPembelianInput[]
    createMany?: PembelianDetailCreateManyPembelianInputEnvelope
    connect?: PembelianDetailWhereUniqueInput | PembelianDetailWhereUniqueInput[]
  }

  export type PiutangUncheckedCreateNestedManyWithoutPembelianInput = {
    create?: XOR<PiutangCreateWithoutPembelianInput, PiutangUncheckedCreateWithoutPembelianInput> | PiutangCreateWithoutPembelianInput[] | PiutangUncheckedCreateWithoutPembelianInput[]
    connectOrCreate?: PiutangCreateOrConnectWithoutPembelianInput | PiutangCreateOrConnectWithoutPembelianInput[]
    createMany?: PiutangCreateManyPembelianInputEnvelope
    connect?: PiutangWhereUniqueInput | PiutangWhereUniqueInput[]
  }

  export type EnumStatusPembelianFieldUpdateOperationsInput = {
    set?: $Enums.StatusPembelian
  }

  export type SuplierUpdateOneRequiredWithoutPembelianNestedInput = {
    create?: XOR<SuplierCreateWithoutPembelianInput, SuplierUncheckedCreateWithoutPembelianInput>
    connectOrCreate?: SuplierCreateOrConnectWithoutPembelianInput
    upsert?: SuplierUpsertWithoutPembelianInput
    connect?: SuplierWhereUniqueInput
    update?: XOR<XOR<SuplierUpdateToOneWithWhereWithoutPembelianInput, SuplierUpdateWithoutPembelianInput>, SuplierUncheckedUpdateWithoutPembelianInput>
  }

  export type PembelianDetailUpdateManyWithoutPembelianNestedInput = {
    create?: XOR<PembelianDetailCreateWithoutPembelianInput, PembelianDetailUncheckedCreateWithoutPembelianInput> | PembelianDetailCreateWithoutPembelianInput[] | PembelianDetailUncheckedCreateWithoutPembelianInput[]
    connectOrCreate?: PembelianDetailCreateOrConnectWithoutPembelianInput | PembelianDetailCreateOrConnectWithoutPembelianInput[]
    upsert?: PembelianDetailUpsertWithWhereUniqueWithoutPembelianInput | PembelianDetailUpsertWithWhereUniqueWithoutPembelianInput[]
    createMany?: PembelianDetailCreateManyPembelianInputEnvelope
    set?: PembelianDetailWhereUniqueInput | PembelianDetailWhereUniqueInput[]
    disconnect?: PembelianDetailWhereUniqueInput | PembelianDetailWhereUniqueInput[]
    delete?: PembelianDetailWhereUniqueInput | PembelianDetailWhereUniqueInput[]
    connect?: PembelianDetailWhereUniqueInput | PembelianDetailWhereUniqueInput[]
    update?: PembelianDetailUpdateWithWhereUniqueWithoutPembelianInput | PembelianDetailUpdateWithWhereUniqueWithoutPembelianInput[]
    updateMany?: PembelianDetailUpdateManyWithWhereWithoutPembelianInput | PembelianDetailUpdateManyWithWhereWithoutPembelianInput[]
    deleteMany?: PembelianDetailScalarWhereInput | PembelianDetailScalarWhereInput[]
  }

  export type PiutangUpdateManyWithoutPembelianNestedInput = {
    create?: XOR<PiutangCreateWithoutPembelianInput, PiutangUncheckedCreateWithoutPembelianInput> | PiutangCreateWithoutPembelianInput[] | PiutangUncheckedCreateWithoutPembelianInput[]
    connectOrCreate?: PiutangCreateOrConnectWithoutPembelianInput | PiutangCreateOrConnectWithoutPembelianInput[]
    upsert?: PiutangUpsertWithWhereUniqueWithoutPembelianInput | PiutangUpsertWithWhereUniqueWithoutPembelianInput[]
    createMany?: PiutangCreateManyPembelianInputEnvelope
    set?: PiutangWhereUniqueInput | PiutangWhereUniqueInput[]
    disconnect?: PiutangWhereUniqueInput | PiutangWhereUniqueInput[]
    delete?: PiutangWhereUniqueInput | PiutangWhereUniqueInput[]
    connect?: PiutangWhereUniqueInput | PiutangWhereUniqueInput[]
    update?: PiutangUpdateWithWhereUniqueWithoutPembelianInput | PiutangUpdateWithWhereUniqueWithoutPembelianInput[]
    updateMany?: PiutangUpdateManyWithWhereWithoutPembelianInput | PiutangUpdateManyWithWhereWithoutPembelianInput[]
    deleteMany?: PiutangScalarWhereInput | PiutangScalarWhereInput[]
  }

  export type PembelianDetailUncheckedUpdateManyWithoutPembelianNestedInput = {
    create?: XOR<PembelianDetailCreateWithoutPembelianInput, PembelianDetailUncheckedCreateWithoutPembelianInput> | PembelianDetailCreateWithoutPembelianInput[] | PembelianDetailUncheckedCreateWithoutPembelianInput[]
    connectOrCreate?: PembelianDetailCreateOrConnectWithoutPembelianInput | PembelianDetailCreateOrConnectWithoutPembelianInput[]
    upsert?: PembelianDetailUpsertWithWhereUniqueWithoutPembelianInput | PembelianDetailUpsertWithWhereUniqueWithoutPembelianInput[]
    createMany?: PembelianDetailCreateManyPembelianInputEnvelope
    set?: PembelianDetailWhereUniqueInput | PembelianDetailWhereUniqueInput[]
    disconnect?: PembelianDetailWhereUniqueInput | PembelianDetailWhereUniqueInput[]
    delete?: PembelianDetailWhereUniqueInput | PembelianDetailWhereUniqueInput[]
    connect?: PembelianDetailWhereUniqueInput | PembelianDetailWhereUniqueInput[]
    update?: PembelianDetailUpdateWithWhereUniqueWithoutPembelianInput | PembelianDetailUpdateWithWhereUniqueWithoutPembelianInput[]
    updateMany?: PembelianDetailUpdateManyWithWhereWithoutPembelianInput | PembelianDetailUpdateManyWithWhereWithoutPembelianInput[]
    deleteMany?: PembelianDetailScalarWhereInput | PembelianDetailScalarWhereInput[]
  }

  export type PiutangUncheckedUpdateManyWithoutPembelianNestedInput = {
    create?: XOR<PiutangCreateWithoutPembelianInput, PiutangUncheckedCreateWithoutPembelianInput> | PiutangCreateWithoutPembelianInput[] | PiutangUncheckedCreateWithoutPembelianInput[]
    connectOrCreate?: PiutangCreateOrConnectWithoutPembelianInput | PiutangCreateOrConnectWithoutPembelianInput[]
    upsert?: PiutangUpsertWithWhereUniqueWithoutPembelianInput | PiutangUpsertWithWhereUniqueWithoutPembelianInput[]
    createMany?: PiutangCreateManyPembelianInputEnvelope
    set?: PiutangWhereUniqueInput | PiutangWhereUniqueInput[]
    disconnect?: PiutangWhereUniqueInput | PiutangWhereUniqueInput[]
    delete?: PiutangWhereUniqueInput | PiutangWhereUniqueInput[]
    connect?: PiutangWhereUniqueInput | PiutangWhereUniqueInput[]
    update?: PiutangUpdateWithWhereUniqueWithoutPembelianInput | PiutangUpdateWithWhereUniqueWithoutPembelianInput[]
    updateMany?: PiutangUpdateManyWithWhereWithoutPembelianInput | PiutangUpdateManyWithWhereWithoutPembelianInput[]
    deleteMany?: PiutangScalarWhereInput | PiutangScalarWhereInput[]
  }

  export type PembelianCreateNestedOneWithoutPembelianDetailInput = {
    create?: XOR<PembelianCreateWithoutPembelianDetailInput, PembelianUncheckedCreateWithoutPembelianDetailInput>
    connectOrCreate?: PembelianCreateOrConnectWithoutPembelianDetailInput
    connect?: PembelianWhereUniqueInput
  }

  export type ProdukCreateNestedOneWithoutPembelianDetailInput = {
    create?: XOR<ProdukCreateWithoutPembelianDetailInput, ProdukUncheckedCreateWithoutPembelianDetailInput>
    connectOrCreate?: ProdukCreateOrConnectWithoutPembelianDetailInput
    connect?: ProdukWhereUniqueInput
  }

  export type PembelianUpdateOneRequiredWithoutPembelianDetailNestedInput = {
    create?: XOR<PembelianCreateWithoutPembelianDetailInput, PembelianUncheckedCreateWithoutPembelianDetailInput>
    connectOrCreate?: PembelianCreateOrConnectWithoutPembelianDetailInput
    upsert?: PembelianUpsertWithoutPembelianDetailInput
    connect?: PembelianWhereUniqueInput
    update?: XOR<XOR<PembelianUpdateToOneWithWhereWithoutPembelianDetailInput, PembelianUpdateWithoutPembelianDetailInput>, PembelianUncheckedUpdateWithoutPembelianDetailInput>
  }

  export type ProdukUpdateOneRequiredWithoutPembelianDetailNestedInput = {
    create?: XOR<ProdukCreateWithoutPembelianDetailInput, ProdukUncheckedCreateWithoutPembelianDetailInput>
    connectOrCreate?: ProdukCreateOrConnectWithoutPembelianDetailInput
    upsert?: ProdukUpsertWithoutPembelianDetailInput
    connect?: ProdukWhereUniqueInput
    update?: XOR<XOR<ProdukUpdateToOneWithWhereWithoutPembelianDetailInput, ProdukUpdateWithoutPembelianDetailInput>, ProdukUncheckedUpdateWithoutPembelianDetailInput>
  }

  export type PembelianCreateNestedOneWithoutPiutangInput = {
    create?: XOR<PembelianCreateWithoutPiutangInput, PembelianUncheckedCreateWithoutPiutangInput>
    connectOrCreate?: PembelianCreateOrConnectWithoutPiutangInput
    connect?: PembelianWhereUniqueInput
  }

  export type EnumStatusPiutangFieldUpdateOperationsInput = {
    set?: $Enums.StatusPiutang
  }

  export type PembelianUpdateOneRequiredWithoutPiutangNestedInput = {
    create?: XOR<PembelianCreateWithoutPiutangInput, PembelianUncheckedCreateWithoutPiutangInput>
    connectOrCreate?: PembelianCreateOrConnectWithoutPiutangInput
    upsert?: PembelianUpsertWithoutPiutangInput
    connect?: PembelianWhereUniqueInput
    update?: XOR<XOR<PembelianUpdateToOneWithWhereWithoutPiutangInput, PembelianUpdateWithoutPiutangInput>, PembelianUncheckedUpdateWithoutPiutangInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumStatusStokFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusStok | EnumStatusStokFieldRefInput<$PrismaModel>
    in?: $Enums.StatusStok[] | ListEnumStatusStokFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusStok[] | ListEnumStatusStokFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusStokFilter<$PrismaModel> | $Enums.StatusStok
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

  export type NestedEnumStatusStokWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusStok | EnumStatusStokFieldRefInput<$PrismaModel>
    in?: $Enums.StatusStok[] | ListEnumStatusStokFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusStok[] | ListEnumStatusStokFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusStokWithAggregatesFilter<$PrismaModel> | $Enums.StatusStok
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusStokFilter<$PrismaModel>
    _max?: NestedEnumStatusStokFilter<$PrismaModel>
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

  export type NestedEnumJenisPenjualanFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisPenjualan | EnumJenisPenjualanFieldRefInput<$PrismaModel>
    in?: $Enums.JenisPenjualan[] | ListEnumJenisPenjualanFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisPenjualan[] | ListEnumJenisPenjualanFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisPenjualanFilter<$PrismaModel> | $Enums.JenisPenjualan
  }

  export type NestedEnumJenisPenjualanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisPenjualan | EnumJenisPenjualanFieldRefInput<$PrismaModel>
    in?: $Enums.JenisPenjualan[] | ListEnumJenisPenjualanFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisPenjualan[] | ListEnumJenisPenjualanFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisPenjualanWithAggregatesFilter<$PrismaModel> | $Enums.JenisPenjualan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisPenjualanFilter<$PrismaModel>
    _max?: NestedEnumJenisPenjualanFilter<$PrismaModel>
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

  export type NestedEnumStatusPembelianFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPembelian | EnumStatusPembelianFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPembelian[] | ListEnumStatusPembelianFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPembelian[] | ListEnumStatusPembelianFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPembelianFilter<$PrismaModel> | $Enums.StatusPembelian
  }

  export type NestedEnumStatusPembelianWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPembelian | EnumStatusPembelianFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPembelian[] | ListEnumStatusPembelianFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPembelian[] | ListEnumStatusPembelianFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPembelianWithAggregatesFilter<$PrismaModel> | $Enums.StatusPembelian
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPembelianFilter<$PrismaModel>
    _max?: NestedEnumStatusPembelianFilter<$PrismaModel>
  }

  export type NestedEnumStatusPiutangFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPiutang | EnumStatusPiutangFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPiutang[] | ListEnumStatusPiutangFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPiutang[] | ListEnumStatusPiutangFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPiutangFilter<$PrismaModel> | $Enums.StatusPiutang
  }

  export type NestedEnumStatusPiutangWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPiutang | EnumStatusPiutangFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPiutang[] | ListEnumStatusPiutangFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPiutang[] | ListEnumStatusPiutangFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPiutangWithAggregatesFilter<$PrismaModel> | $Enums.StatusPiutang
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPiutangFilter<$PrismaModel>
    _max?: NestedEnumStatusPiutangFilter<$PrismaModel>
  }

  export type ProdukCreateWithoutKategoriInput = {
    nama: string
    hargaBeli: number
    hargaJualRetail: number
    hargaJualGrosir: number
    qtyMinGrosir?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Stok?: StokCreateNestedManyWithoutProdukInput
    PembelianDetail?: PembelianDetailCreateNestedManyWithoutProdukInput
    PenjualanDetail?: PenjualanDetailCreateNestedManyWithoutProdukInput
  }

  export type ProdukUncheckedCreateWithoutKategoriInput = {
    id?: number
    nama: string
    hargaBeli: number
    hargaJualRetail: number
    hargaJualGrosir: number
    qtyMinGrosir?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Stok?: StokUncheckedCreateNestedManyWithoutProdukInput
    PembelianDetail?: PembelianDetailUncheckedCreateNestedManyWithoutProdukInput
    PenjualanDetail?: PenjualanDetailUncheckedCreateNestedManyWithoutProdukInput
  }

  export type ProdukCreateOrConnectWithoutKategoriInput = {
    where: ProdukWhereUniqueInput
    create: XOR<ProdukCreateWithoutKategoriInput, ProdukUncheckedCreateWithoutKategoriInput>
  }

  export type ProdukCreateManyKategoriInputEnvelope = {
    data: ProdukCreateManyKategoriInput | ProdukCreateManyKategoriInput[]
    skipDuplicates?: boolean
  }

  export type KomisiKategoriCreateWithoutKategoriInput = {
    persen?: number
    createdAt?: Date | string
  }

  export type KomisiKategoriUncheckedCreateWithoutKategoriInput = {
    id?: number
    persen?: number
    createdAt?: Date | string
  }

  export type KomisiKategoriCreateOrConnectWithoutKategoriInput = {
    where: KomisiKategoriWhereUniqueInput
    create: XOR<KomisiKategoriCreateWithoutKategoriInput, KomisiKategoriUncheckedCreateWithoutKategoriInput>
  }

  export type KomisiKategoriCreateManyKategoriInputEnvelope = {
    data: KomisiKategoriCreateManyKategoriInput | KomisiKategoriCreateManyKategoriInput[]
    skipDuplicates?: boolean
  }

  export type ProdukUpsertWithWhereUniqueWithoutKategoriInput = {
    where: ProdukWhereUniqueInput
    update: XOR<ProdukUpdateWithoutKategoriInput, ProdukUncheckedUpdateWithoutKategoriInput>
    create: XOR<ProdukCreateWithoutKategoriInput, ProdukUncheckedCreateWithoutKategoriInput>
  }

  export type ProdukUpdateWithWhereUniqueWithoutKategoriInput = {
    where: ProdukWhereUniqueInput
    data: XOR<ProdukUpdateWithoutKategoriInput, ProdukUncheckedUpdateWithoutKategoriInput>
  }

  export type ProdukUpdateManyWithWhereWithoutKategoriInput = {
    where: ProdukScalarWhereInput
    data: XOR<ProdukUpdateManyMutationInput, ProdukUncheckedUpdateManyWithoutKategoriInput>
  }

  export type ProdukScalarWhereInput = {
    AND?: ProdukScalarWhereInput | ProdukScalarWhereInput[]
    OR?: ProdukScalarWhereInput[]
    NOT?: ProdukScalarWhereInput | ProdukScalarWhereInput[]
    id?: IntFilter<"Produk"> | number
    nama?: StringFilter<"Produk"> | string
    kategoriId?: IntFilter<"Produk"> | number
    hargaBeli?: IntFilter<"Produk"> | number
    hargaJualRetail?: IntFilter<"Produk"> | number
    hargaJualGrosir?: IntFilter<"Produk"> | number
    qtyMinGrosir?: IntFilter<"Produk"> | number
    isDeleted?: BoolFilter<"Produk"> | boolean
    deletedAt?: DateTimeNullableFilter<"Produk"> | Date | string | null
  }

  export type KomisiKategoriUpsertWithWhereUniqueWithoutKategoriInput = {
    where: KomisiKategoriWhereUniqueInput
    update: XOR<KomisiKategoriUpdateWithoutKategoriInput, KomisiKategoriUncheckedUpdateWithoutKategoriInput>
    create: XOR<KomisiKategoriCreateWithoutKategoriInput, KomisiKategoriUncheckedCreateWithoutKategoriInput>
  }

  export type KomisiKategoriUpdateWithWhereUniqueWithoutKategoriInput = {
    where: KomisiKategoriWhereUniqueInput
    data: XOR<KomisiKategoriUpdateWithoutKategoriInput, KomisiKategoriUncheckedUpdateWithoutKategoriInput>
  }

  export type KomisiKategoriUpdateManyWithWhereWithoutKategoriInput = {
    where: KomisiKategoriScalarWhereInput
    data: XOR<KomisiKategoriUpdateManyMutationInput, KomisiKategoriUncheckedUpdateManyWithoutKategoriInput>
  }

  export type KomisiKategoriScalarWhereInput = {
    AND?: KomisiKategoriScalarWhereInput | KomisiKategoriScalarWhereInput[]
    OR?: KomisiKategoriScalarWhereInput[]
    NOT?: KomisiKategoriScalarWhereInput | KomisiKategoriScalarWhereInput[]
    id?: IntFilter<"KomisiKategori"> | number
    kategoriId?: IntFilter<"KomisiKategori"> | number
    persen?: IntFilter<"KomisiKategori"> | number
    createdAt?: DateTimeFilter<"KomisiKategori"> | Date | string
  }

  export type KategoriCreateWithoutProdukInput = {
    nama: string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    komisi?: KomisiKategoriCreateNestedManyWithoutKategoriInput
  }

  export type KategoriUncheckedCreateWithoutProdukInput = {
    id?: number
    nama: string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    komisi?: KomisiKategoriUncheckedCreateNestedManyWithoutKategoriInput
  }

  export type KategoriCreateOrConnectWithoutProdukInput = {
    where: KategoriWhereUniqueInput
    create: XOR<KategoriCreateWithoutProdukInput, KategoriUncheckedCreateWithoutProdukInput>
  }

  export type StokCreateWithoutProdukInput = {
    serialNumber?: string | null
    expiredDate?: Date | string | null
    qty: number
    status?: $Enums.StatusStok
    createdAt?: Date | string
    PenjualanDetail?: PenjualanDetailCreateNestedManyWithoutStokInput
  }

  export type StokUncheckedCreateWithoutProdukInput = {
    id?: number
    serialNumber?: string | null
    expiredDate?: Date | string | null
    qty: number
    status?: $Enums.StatusStok
    createdAt?: Date | string
    PenjualanDetail?: PenjualanDetailUncheckedCreateNestedManyWithoutStokInput
  }

  export type StokCreateOrConnectWithoutProdukInput = {
    where: StokWhereUniqueInput
    create: XOR<StokCreateWithoutProdukInput, StokUncheckedCreateWithoutProdukInput>
  }

  export type StokCreateManyProdukInputEnvelope = {
    data: StokCreateManyProdukInput | StokCreateManyProdukInput[]
    skipDuplicates?: boolean
  }

  export type PembelianDetailCreateWithoutProdukInput = {
    qty: number
    harga: number
    pembelian: PembelianCreateNestedOneWithoutPembelianDetailInput
  }

  export type PembelianDetailUncheckedCreateWithoutProdukInput = {
    id?: number
    pembelianId: number
    qty: number
    harga: number
  }

  export type PembelianDetailCreateOrConnectWithoutProdukInput = {
    where: PembelianDetailWhereUniqueInput
    create: XOR<PembelianDetailCreateWithoutProdukInput, PembelianDetailUncheckedCreateWithoutProdukInput>
  }

  export type PembelianDetailCreateManyProdukInputEnvelope = {
    data: PembelianDetailCreateManyProdukInput | PembelianDetailCreateManyProdukInput[]
    skipDuplicates?: boolean
  }

  export type PenjualanDetailCreateWithoutProdukInput = {
    harga: number
    qty?: number
    tipe: $Enums.JenisPenjualan
    penjualan: PenjualanCreateNestedOneWithoutPenjualanDetailInput
    stok: StokCreateNestedOneWithoutPenjualanDetailInput
    Komisi?: KomisiKasirCreateNestedManyWithoutPenjualanDetailInput
  }

  export type PenjualanDetailUncheckedCreateWithoutProdukInput = {
    id?: number
    penjualanId: number
    stokId: number
    harga: number
    qty?: number
    tipe: $Enums.JenisPenjualan
    Komisi?: KomisiKasirUncheckedCreateNestedManyWithoutPenjualanDetailInput
  }

  export type PenjualanDetailCreateOrConnectWithoutProdukInput = {
    where: PenjualanDetailWhereUniqueInput
    create: XOR<PenjualanDetailCreateWithoutProdukInput, PenjualanDetailUncheckedCreateWithoutProdukInput>
  }

  export type PenjualanDetailCreateManyProdukInputEnvelope = {
    data: PenjualanDetailCreateManyProdukInput | PenjualanDetailCreateManyProdukInput[]
    skipDuplicates?: boolean
  }

  export type KategoriUpsertWithoutProdukInput = {
    update: XOR<KategoriUpdateWithoutProdukInput, KategoriUncheckedUpdateWithoutProdukInput>
    create: XOR<KategoriCreateWithoutProdukInput, KategoriUncheckedCreateWithoutProdukInput>
    where?: KategoriWhereInput
  }

  export type KategoriUpdateToOneWithWhereWithoutProdukInput = {
    where?: KategoriWhereInput
    data: XOR<KategoriUpdateWithoutProdukInput, KategoriUncheckedUpdateWithoutProdukInput>
  }

  export type KategoriUpdateWithoutProdukInput = {
    nama?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    komisi?: KomisiKategoriUpdateManyWithoutKategoriNestedInput
  }

  export type KategoriUncheckedUpdateWithoutProdukInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    komisi?: KomisiKategoriUncheckedUpdateManyWithoutKategoriNestedInput
  }

  export type StokUpsertWithWhereUniqueWithoutProdukInput = {
    where: StokWhereUniqueInput
    update: XOR<StokUpdateWithoutProdukInput, StokUncheckedUpdateWithoutProdukInput>
    create: XOR<StokCreateWithoutProdukInput, StokUncheckedCreateWithoutProdukInput>
  }

  export type StokUpdateWithWhereUniqueWithoutProdukInput = {
    where: StokWhereUniqueInput
    data: XOR<StokUpdateWithoutProdukInput, StokUncheckedUpdateWithoutProdukInput>
  }

  export type StokUpdateManyWithWhereWithoutProdukInput = {
    where: StokScalarWhereInput
    data: XOR<StokUpdateManyMutationInput, StokUncheckedUpdateManyWithoutProdukInput>
  }

  export type StokScalarWhereInput = {
    AND?: StokScalarWhereInput | StokScalarWhereInput[]
    OR?: StokScalarWhereInput[]
    NOT?: StokScalarWhereInput | StokScalarWhereInput[]
    id?: IntFilter<"Stok"> | number
    produkId?: IntFilter<"Stok"> | number
    serialNumber?: StringNullableFilter<"Stok"> | string | null
    expiredDate?: DateTimeNullableFilter<"Stok"> | Date | string | null
    qty?: IntFilter<"Stok"> | number
    status?: EnumStatusStokFilter<"Stok"> | $Enums.StatusStok
    createdAt?: DateTimeFilter<"Stok"> | Date | string
  }

  export type PembelianDetailUpsertWithWhereUniqueWithoutProdukInput = {
    where: PembelianDetailWhereUniqueInput
    update: XOR<PembelianDetailUpdateWithoutProdukInput, PembelianDetailUncheckedUpdateWithoutProdukInput>
    create: XOR<PembelianDetailCreateWithoutProdukInput, PembelianDetailUncheckedCreateWithoutProdukInput>
  }

  export type PembelianDetailUpdateWithWhereUniqueWithoutProdukInput = {
    where: PembelianDetailWhereUniqueInput
    data: XOR<PembelianDetailUpdateWithoutProdukInput, PembelianDetailUncheckedUpdateWithoutProdukInput>
  }

  export type PembelianDetailUpdateManyWithWhereWithoutProdukInput = {
    where: PembelianDetailScalarWhereInput
    data: XOR<PembelianDetailUpdateManyMutationInput, PembelianDetailUncheckedUpdateManyWithoutProdukInput>
  }

  export type PembelianDetailScalarWhereInput = {
    AND?: PembelianDetailScalarWhereInput | PembelianDetailScalarWhereInput[]
    OR?: PembelianDetailScalarWhereInput[]
    NOT?: PembelianDetailScalarWhereInput | PembelianDetailScalarWhereInput[]
    id?: IntFilter<"PembelianDetail"> | number
    pembelianId?: IntFilter<"PembelianDetail"> | number
    produkId?: IntFilter<"PembelianDetail"> | number
    qty?: IntFilter<"PembelianDetail"> | number
    harga?: IntFilter<"PembelianDetail"> | number
  }

  export type PenjualanDetailUpsertWithWhereUniqueWithoutProdukInput = {
    where: PenjualanDetailWhereUniqueInput
    update: XOR<PenjualanDetailUpdateWithoutProdukInput, PenjualanDetailUncheckedUpdateWithoutProdukInput>
    create: XOR<PenjualanDetailCreateWithoutProdukInput, PenjualanDetailUncheckedCreateWithoutProdukInput>
  }

  export type PenjualanDetailUpdateWithWhereUniqueWithoutProdukInput = {
    where: PenjualanDetailWhereUniqueInput
    data: XOR<PenjualanDetailUpdateWithoutProdukInput, PenjualanDetailUncheckedUpdateWithoutProdukInput>
  }

  export type PenjualanDetailUpdateManyWithWhereWithoutProdukInput = {
    where: PenjualanDetailScalarWhereInput
    data: XOR<PenjualanDetailUpdateManyMutationInput, PenjualanDetailUncheckedUpdateManyWithoutProdukInput>
  }

  export type PenjualanDetailScalarWhereInput = {
    AND?: PenjualanDetailScalarWhereInput | PenjualanDetailScalarWhereInput[]
    OR?: PenjualanDetailScalarWhereInput[]
    NOT?: PenjualanDetailScalarWhereInput | PenjualanDetailScalarWhereInput[]
    id?: IntFilter<"PenjualanDetail"> | number
    produkId?: IntFilter<"PenjualanDetail"> | number
    penjualanId?: IntFilter<"PenjualanDetail"> | number
    stokId?: IntFilter<"PenjualanDetail"> | number
    harga?: IntFilter<"PenjualanDetail"> | number
    qty?: IntFilter<"PenjualanDetail"> | number
    tipe?: EnumJenisPenjualanFilter<"PenjualanDetail"> | $Enums.JenisPenjualan
  }

  export type ProdukCreateWithoutStokInput = {
    nama: string
    hargaBeli: number
    hargaJualRetail: number
    hargaJualGrosir: number
    qtyMinGrosir?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    kategori: KategoriCreateNestedOneWithoutProdukInput
    PembelianDetail?: PembelianDetailCreateNestedManyWithoutProdukInput
    PenjualanDetail?: PenjualanDetailCreateNestedManyWithoutProdukInput
  }

  export type ProdukUncheckedCreateWithoutStokInput = {
    id?: number
    nama: string
    kategoriId: number
    hargaBeli: number
    hargaJualRetail: number
    hargaJualGrosir: number
    qtyMinGrosir?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    PembelianDetail?: PembelianDetailUncheckedCreateNestedManyWithoutProdukInput
    PenjualanDetail?: PenjualanDetailUncheckedCreateNestedManyWithoutProdukInput
  }

  export type ProdukCreateOrConnectWithoutStokInput = {
    where: ProdukWhereUniqueInput
    create: XOR<ProdukCreateWithoutStokInput, ProdukUncheckedCreateWithoutStokInput>
  }

  export type PenjualanDetailCreateWithoutStokInput = {
    harga: number
    qty?: number
    tipe: $Enums.JenisPenjualan
    penjualan: PenjualanCreateNestedOneWithoutPenjualanDetailInput
    produk: ProdukCreateNestedOneWithoutPenjualanDetailInput
    Komisi?: KomisiKasirCreateNestedManyWithoutPenjualanDetailInput
  }

  export type PenjualanDetailUncheckedCreateWithoutStokInput = {
    id?: number
    produkId: number
    penjualanId: number
    harga: number
    qty?: number
    tipe: $Enums.JenisPenjualan
    Komisi?: KomisiKasirUncheckedCreateNestedManyWithoutPenjualanDetailInput
  }

  export type PenjualanDetailCreateOrConnectWithoutStokInput = {
    where: PenjualanDetailWhereUniqueInput
    create: XOR<PenjualanDetailCreateWithoutStokInput, PenjualanDetailUncheckedCreateWithoutStokInput>
  }

  export type PenjualanDetailCreateManyStokInputEnvelope = {
    data: PenjualanDetailCreateManyStokInput | PenjualanDetailCreateManyStokInput[]
    skipDuplicates?: boolean
  }

  export type ProdukUpsertWithoutStokInput = {
    update: XOR<ProdukUpdateWithoutStokInput, ProdukUncheckedUpdateWithoutStokInput>
    create: XOR<ProdukCreateWithoutStokInput, ProdukUncheckedCreateWithoutStokInput>
    where?: ProdukWhereInput
  }

  export type ProdukUpdateToOneWithWhereWithoutStokInput = {
    where?: ProdukWhereInput
    data: XOR<ProdukUpdateWithoutStokInput, ProdukUncheckedUpdateWithoutStokInput>
  }

  export type ProdukUpdateWithoutStokInput = {
    nama?: StringFieldUpdateOperationsInput | string
    hargaBeli?: IntFieldUpdateOperationsInput | number
    hargaJualRetail?: IntFieldUpdateOperationsInput | number
    hargaJualGrosir?: IntFieldUpdateOperationsInput | number
    qtyMinGrosir?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kategori?: KategoriUpdateOneRequiredWithoutProdukNestedInput
    PembelianDetail?: PembelianDetailUpdateManyWithoutProdukNestedInput
    PenjualanDetail?: PenjualanDetailUpdateManyWithoutProdukNestedInput
  }

  export type ProdukUncheckedUpdateWithoutStokInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    kategoriId?: IntFieldUpdateOperationsInput | number
    hargaBeli?: IntFieldUpdateOperationsInput | number
    hargaJualRetail?: IntFieldUpdateOperationsInput | number
    hargaJualGrosir?: IntFieldUpdateOperationsInput | number
    qtyMinGrosir?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PembelianDetail?: PembelianDetailUncheckedUpdateManyWithoutProdukNestedInput
    PenjualanDetail?: PenjualanDetailUncheckedUpdateManyWithoutProdukNestedInput
  }

  export type PenjualanDetailUpsertWithWhereUniqueWithoutStokInput = {
    where: PenjualanDetailWhereUniqueInput
    update: XOR<PenjualanDetailUpdateWithoutStokInput, PenjualanDetailUncheckedUpdateWithoutStokInput>
    create: XOR<PenjualanDetailCreateWithoutStokInput, PenjualanDetailUncheckedCreateWithoutStokInput>
  }

  export type PenjualanDetailUpdateWithWhereUniqueWithoutStokInput = {
    where: PenjualanDetailWhereUniqueInput
    data: XOR<PenjualanDetailUpdateWithoutStokInput, PenjualanDetailUncheckedUpdateWithoutStokInput>
  }

  export type PenjualanDetailUpdateManyWithWhereWithoutStokInput = {
    where: PenjualanDetailScalarWhereInput
    data: XOR<PenjualanDetailUpdateManyMutationInput, PenjualanDetailUncheckedUpdateManyWithoutStokInput>
  }

  export type PenggunaCreateWithoutPenjualanInput = {
    nama: string
    username: string
    password: string
    email: string
    role?: $Enums.Role
    verifikasi?: boolean
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Komisi?: KomisiKasirCreateNestedManyWithoutKasirInput
  }

  export type PenggunaUncheckedCreateWithoutPenjualanInput = {
    id?: number
    nama: string
    username: string
    password: string
    email: string
    role?: $Enums.Role
    verifikasi?: boolean
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Komisi?: KomisiKasirUncheckedCreateNestedManyWithoutKasirInput
  }

  export type PenggunaCreateOrConnectWithoutPenjualanInput = {
    where: PenggunaWhereUniqueInput
    create: XOR<PenggunaCreateWithoutPenjualanInput, PenggunaUncheckedCreateWithoutPenjualanInput>
  }

  export type MetodeBayarCreateWithoutPenjualanInput = {
    nama: string
  }

  export type MetodeBayarUncheckedCreateWithoutPenjualanInput = {
    id?: number
    nama: string
  }

  export type MetodeBayarCreateOrConnectWithoutPenjualanInput = {
    where: MetodeBayarWhereUniqueInput
    create: XOR<MetodeBayarCreateWithoutPenjualanInput, MetodeBayarUncheckedCreateWithoutPenjualanInput>
  }

  export type PenjualanDetailCreateWithoutPenjualanInput = {
    harga: number
    qty?: number
    tipe: $Enums.JenisPenjualan
    produk: ProdukCreateNestedOneWithoutPenjualanDetailInput
    stok: StokCreateNestedOneWithoutPenjualanDetailInput
    Komisi?: KomisiKasirCreateNestedManyWithoutPenjualanDetailInput
  }

  export type PenjualanDetailUncheckedCreateWithoutPenjualanInput = {
    id?: number
    produkId: number
    stokId: number
    harga: number
    qty?: number
    tipe: $Enums.JenisPenjualan
    Komisi?: KomisiKasirUncheckedCreateNestedManyWithoutPenjualanDetailInput
  }

  export type PenjualanDetailCreateOrConnectWithoutPenjualanInput = {
    where: PenjualanDetailWhereUniqueInput
    create: XOR<PenjualanDetailCreateWithoutPenjualanInput, PenjualanDetailUncheckedCreateWithoutPenjualanInput>
  }

  export type PenjualanDetailCreateManyPenjualanInputEnvelope = {
    data: PenjualanDetailCreateManyPenjualanInput | PenjualanDetailCreateManyPenjualanInput[]
    skipDuplicates?: boolean
  }

  export type PenggunaUpsertWithoutPenjualanInput = {
    update: XOR<PenggunaUpdateWithoutPenjualanInput, PenggunaUncheckedUpdateWithoutPenjualanInput>
    create: XOR<PenggunaCreateWithoutPenjualanInput, PenggunaUncheckedCreateWithoutPenjualanInput>
    where?: PenggunaWhereInput
  }

  export type PenggunaUpdateToOneWithWhereWithoutPenjualanInput = {
    where?: PenggunaWhereInput
    data: XOR<PenggunaUpdateWithoutPenjualanInput, PenggunaUncheckedUpdateWithoutPenjualanInput>
  }

  export type PenggunaUpdateWithoutPenjualanInput = {
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verifikasi?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Komisi?: KomisiKasirUpdateManyWithoutKasirNestedInput
  }

  export type PenggunaUncheckedUpdateWithoutPenjualanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verifikasi?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Komisi?: KomisiKasirUncheckedUpdateManyWithoutKasirNestedInput
  }

  export type MetodeBayarUpsertWithoutPenjualanInput = {
    update: XOR<MetodeBayarUpdateWithoutPenjualanInput, MetodeBayarUncheckedUpdateWithoutPenjualanInput>
    create: XOR<MetodeBayarCreateWithoutPenjualanInput, MetodeBayarUncheckedCreateWithoutPenjualanInput>
    where?: MetodeBayarWhereInput
  }

  export type MetodeBayarUpdateToOneWithWhereWithoutPenjualanInput = {
    where?: MetodeBayarWhereInput
    data: XOR<MetodeBayarUpdateWithoutPenjualanInput, MetodeBayarUncheckedUpdateWithoutPenjualanInput>
  }

  export type MetodeBayarUpdateWithoutPenjualanInput = {
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type MetodeBayarUncheckedUpdateWithoutPenjualanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type PenjualanDetailUpsertWithWhereUniqueWithoutPenjualanInput = {
    where: PenjualanDetailWhereUniqueInput
    update: XOR<PenjualanDetailUpdateWithoutPenjualanInput, PenjualanDetailUncheckedUpdateWithoutPenjualanInput>
    create: XOR<PenjualanDetailCreateWithoutPenjualanInput, PenjualanDetailUncheckedCreateWithoutPenjualanInput>
  }

  export type PenjualanDetailUpdateWithWhereUniqueWithoutPenjualanInput = {
    where: PenjualanDetailWhereUniqueInput
    data: XOR<PenjualanDetailUpdateWithoutPenjualanInput, PenjualanDetailUncheckedUpdateWithoutPenjualanInput>
  }

  export type PenjualanDetailUpdateManyWithWhereWithoutPenjualanInput = {
    where: PenjualanDetailScalarWhereInput
    data: XOR<PenjualanDetailUpdateManyMutationInput, PenjualanDetailUncheckedUpdateManyWithoutPenjualanInput>
  }

  export type PenjualanCreateWithoutMetodeBayarInput = {
    tanggal?: Date | string
    total: number
    createdAt?: Date | string
    kasir: PenggunaCreateNestedOneWithoutPenjualanInput
    PenjualanDetail?: PenjualanDetailCreateNestedManyWithoutPenjualanInput
  }

  export type PenjualanUncheckedCreateWithoutMetodeBayarInput = {
    id?: number
    tanggal?: Date | string
    total: number
    kasirId: number
    createdAt?: Date | string
    PenjualanDetail?: PenjualanDetailUncheckedCreateNestedManyWithoutPenjualanInput
  }

  export type PenjualanCreateOrConnectWithoutMetodeBayarInput = {
    where: PenjualanWhereUniqueInput
    create: XOR<PenjualanCreateWithoutMetodeBayarInput, PenjualanUncheckedCreateWithoutMetodeBayarInput>
  }

  export type PenjualanCreateManyMetodeBayarInputEnvelope = {
    data: PenjualanCreateManyMetodeBayarInput | PenjualanCreateManyMetodeBayarInput[]
    skipDuplicates?: boolean
  }

  export type PenjualanUpsertWithWhereUniqueWithoutMetodeBayarInput = {
    where: PenjualanWhereUniqueInput
    update: XOR<PenjualanUpdateWithoutMetodeBayarInput, PenjualanUncheckedUpdateWithoutMetodeBayarInput>
    create: XOR<PenjualanCreateWithoutMetodeBayarInput, PenjualanUncheckedCreateWithoutMetodeBayarInput>
  }

  export type PenjualanUpdateWithWhereUniqueWithoutMetodeBayarInput = {
    where: PenjualanWhereUniqueInput
    data: XOR<PenjualanUpdateWithoutMetodeBayarInput, PenjualanUncheckedUpdateWithoutMetodeBayarInput>
  }

  export type PenjualanUpdateManyWithWhereWithoutMetodeBayarInput = {
    where: PenjualanScalarWhereInput
    data: XOR<PenjualanUpdateManyMutationInput, PenjualanUncheckedUpdateManyWithoutMetodeBayarInput>
  }

  export type PenjualanScalarWhereInput = {
    AND?: PenjualanScalarWhereInput | PenjualanScalarWhereInput[]
    OR?: PenjualanScalarWhereInput[]
    NOT?: PenjualanScalarWhereInput | PenjualanScalarWhereInput[]
    id?: IntFilter<"Penjualan"> | number
    tanggal?: DateTimeFilter<"Penjualan"> | Date | string
    total?: IntFilter<"Penjualan"> | number
    kasirId?: IntFilter<"Penjualan"> | number
    metodeBayarId?: IntFilter<"Penjualan"> | number
    createdAt?: DateTimeFilter<"Penjualan"> | Date | string
  }

  export type PenjualanCreateWithoutPenjualanDetailInput = {
    tanggal?: Date | string
    total: number
    createdAt?: Date | string
    kasir: PenggunaCreateNestedOneWithoutPenjualanInput
    metodeBayar: MetodeBayarCreateNestedOneWithoutPenjualanInput
  }

  export type PenjualanUncheckedCreateWithoutPenjualanDetailInput = {
    id?: number
    tanggal?: Date | string
    total: number
    kasirId: number
    metodeBayarId: number
    createdAt?: Date | string
  }

  export type PenjualanCreateOrConnectWithoutPenjualanDetailInput = {
    where: PenjualanWhereUniqueInput
    create: XOR<PenjualanCreateWithoutPenjualanDetailInput, PenjualanUncheckedCreateWithoutPenjualanDetailInput>
  }

  export type ProdukCreateWithoutPenjualanDetailInput = {
    nama: string
    hargaBeli: number
    hargaJualRetail: number
    hargaJualGrosir: number
    qtyMinGrosir?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    kategori: KategoriCreateNestedOneWithoutProdukInput
    Stok?: StokCreateNestedManyWithoutProdukInput
    PembelianDetail?: PembelianDetailCreateNestedManyWithoutProdukInput
  }

  export type ProdukUncheckedCreateWithoutPenjualanDetailInput = {
    id?: number
    nama: string
    kategoriId: number
    hargaBeli: number
    hargaJualRetail: number
    hargaJualGrosir: number
    qtyMinGrosir?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Stok?: StokUncheckedCreateNestedManyWithoutProdukInput
    PembelianDetail?: PembelianDetailUncheckedCreateNestedManyWithoutProdukInput
  }

  export type ProdukCreateOrConnectWithoutPenjualanDetailInput = {
    where: ProdukWhereUniqueInput
    create: XOR<ProdukCreateWithoutPenjualanDetailInput, ProdukUncheckedCreateWithoutPenjualanDetailInput>
  }

  export type StokCreateWithoutPenjualanDetailInput = {
    serialNumber?: string | null
    expiredDate?: Date | string | null
    qty: number
    status?: $Enums.StatusStok
    createdAt?: Date | string
    produk: ProdukCreateNestedOneWithoutStokInput
  }

  export type StokUncheckedCreateWithoutPenjualanDetailInput = {
    id?: number
    produkId: number
    serialNumber?: string | null
    expiredDate?: Date | string | null
    qty: number
    status?: $Enums.StatusStok
    createdAt?: Date | string
  }

  export type StokCreateOrConnectWithoutPenjualanDetailInput = {
    where: StokWhereUniqueInput
    create: XOR<StokCreateWithoutPenjualanDetailInput, StokUncheckedCreateWithoutPenjualanDetailInput>
  }

  export type KomisiKasirCreateWithoutPenjualanDetailInput = {
    jumlah: number
    createdAt?: Date | string
    kasir: PenggunaCreateNestedOneWithoutKomisiInput
  }

  export type KomisiKasirUncheckedCreateWithoutPenjualanDetailInput = {
    id?: number
    kasirId: number
    jumlah: number
    createdAt?: Date | string
  }

  export type KomisiKasirCreateOrConnectWithoutPenjualanDetailInput = {
    where: KomisiKasirWhereUniqueInput
    create: XOR<KomisiKasirCreateWithoutPenjualanDetailInput, KomisiKasirUncheckedCreateWithoutPenjualanDetailInput>
  }

  export type KomisiKasirCreateManyPenjualanDetailInputEnvelope = {
    data: KomisiKasirCreateManyPenjualanDetailInput | KomisiKasirCreateManyPenjualanDetailInput[]
    skipDuplicates?: boolean
  }

  export type PenjualanUpsertWithoutPenjualanDetailInput = {
    update: XOR<PenjualanUpdateWithoutPenjualanDetailInput, PenjualanUncheckedUpdateWithoutPenjualanDetailInput>
    create: XOR<PenjualanCreateWithoutPenjualanDetailInput, PenjualanUncheckedCreateWithoutPenjualanDetailInput>
    where?: PenjualanWhereInput
  }

  export type PenjualanUpdateToOneWithWhereWithoutPenjualanDetailInput = {
    where?: PenjualanWhereInput
    data: XOR<PenjualanUpdateWithoutPenjualanDetailInput, PenjualanUncheckedUpdateWithoutPenjualanDetailInput>
  }

  export type PenjualanUpdateWithoutPenjualanDetailInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kasir?: PenggunaUpdateOneRequiredWithoutPenjualanNestedInput
    metodeBayar?: MetodeBayarUpdateOneRequiredWithoutPenjualanNestedInput
  }

  export type PenjualanUncheckedUpdateWithoutPenjualanDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    kasirId?: IntFieldUpdateOperationsInput | number
    metodeBayarId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProdukUpsertWithoutPenjualanDetailInput = {
    update: XOR<ProdukUpdateWithoutPenjualanDetailInput, ProdukUncheckedUpdateWithoutPenjualanDetailInput>
    create: XOR<ProdukCreateWithoutPenjualanDetailInput, ProdukUncheckedCreateWithoutPenjualanDetailInput>
    where?: ProdukWhereInput
  }

  export type ProdukUpdateToOneWithWhereWithoutPenjualanDetailInput = {
    where?: ProdukWhereInput
    data: XOR<ProdukUpdateWithoutPenjualanDetailInput, ProdukUncheckedUpdateWithoutPenjualanDetailInput>
  }

  export type ProdukUpdateWithoutPenjualanDetailInput = {
    nama?: StringFieldUpdateOperationsInput | string
    hargaBeli?: IntFieldUpdateOperationsInput | number
    hargaJualRetail?: IntFieldUpdateOperationsInput | number
    hargaJualGrosir?: IntFieldUpdateOperationsInput | number
    qtyMinGrosir?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kategori?: KategoriUpdateOneRequiredWithoutProdukNestedInput
    Stok?: StokUpdateManyWithoutProdukNestedInput
    PembelianDetail?: PembelianDetailUpdateManyWithoutProdukNestedInput
  }

  export type ProdukUncheckedUpdateWithoutPenjualanDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    kategoriId?: IntFieldUpdateOperationsInput | number
    hargaBeli?: IntFieldUpdateOperationsInput | number
    hargaJualRetail?: IntFieldUpdateOperationsInput | number
    hargaJualGrosir?: IntFieldUpdateOperationsInput | number
    qtyMinGrosir?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Stok?: StokUncheckedUpdateManyWithoutProdukNestedInput
    PembelianDetail?: PembelianDetailUncheckedUpdateManyWithoutProdukNestedInput
  }

  export type StokUpsertWithoutPenjualanDetailInput = {
    update: XOR<StokUpdateWithoutPenjualanDetailInput, StokUncheckedUpdateWithoutPenjualanDetailInput>
    create: XOR<StokCreateWithoutPenjualanDetailInput, StokUncheckedCreateWithoutPenjualanDetailInput>
    where?: StokWhereInput
  }

  export type StokUpdateToOneWithWhereWithoutPenjualanDetailInput = {
    where?: StokWhereInput
    data: XOR<StokUpdateWithoutPenjualanDetailInput, StokUncheckedUpdateWithoutPenjualanDetailInput>
  }

  export type StokUpdateWithoutPenjualanDetailInput = {
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qty?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusStokFieldUpdateOperationsInput | $Enums.StatusStok
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produk?: ProdukUpdateOneRequiredWithoutStokNestedInput
  }

  export type StokUncheckedUpdateWithoutPenjualanDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    produkId?: IntFieldUpdateOperationsInput | number
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qty?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusStokFieldUpdateOperationsInput | $Enums.StatusStok
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KomisiKasirUpsertWithWhereUniqueWithoutPenjualanDetailInput = {
    where: KomisiKasirWhereUniqueInput
    update: XOR<KomisiKasirUpdateWithoutPenjualanDetailInput, KomisiKasirUncheckedUpdateWithoutPenjualanDetailInput>
    create: XOR<KomisiKasirCreateWithoutPenjualanDetailInput, KomisiKasirUncheckedCreateWithoutPenjualanDetailInput>
  }

  export type KomisiKasirUpdateWithWhereUniqueWithoutPenjualanDetailInput = {
    where: KomisiKasirWhereUniqueInput
    data: XOR<KomisiKasirUpdateWithoutPenjualanDetailInput, KomisiKasirUncheckedUpdateWithoutPenjualanDetailInput>
  }

  export type KomisiKasirUpdateManyWithWhereWithoutPenjualanDetailInput = {
    where: KomisiKasirScalarWhereInput
    data: XOR<KomisiKasirUpdateManyMutationInput, KomisiKasirUncheckedUpdateManyWithoutPenjualanDetailInput>
  }

  export type KomisiKasirScalarWhereInput = {
    AND?: KomisiKasirScalarWhereInput | KomisiKasirScalarWhereInput[]
    OR?: KomisiKasirScalarWhereInput[]
    NOT?: KomisiKasirScalarWhereInput | KomisiKasirScalarWhereInput[]
    id?: IntFilter<"KomisiKasir"> | number
    penjualanDetailId?: IntFilter<"KomisiKasir"> | number
    kasirId?: IntFilter<"KomisiKasir"> | number
    jumlah?: IntFilter<"KomisiKasir"> | number
    createdAt?: DateTimeFilter<"KomisiKasir"> | Date | string
  }

  export type PenjualanCreateWithoutKasirInput = {
    tanggal?: Date | string
    total: number
    createdAt?: Date | string
    metodeBayar: MetodeBayarCreateNestedOneWithoutPenjualanInput
    PenjualanDetail?: PenjualanDetailCreateNestedManyWithoutPenjualanInput
  }

  export type PenjualanUncheckedCreateWithoutKasirInput = {
    id?: number
    tanggal?: Date | string
    total: number
    metodeBayarId: number
    createdAt?: Date | string
    PenjualanDetail?: PenjualanDetailUncheckedCreateNestedManyWithoutPenjualanInput
  }

  export type PenjualanCreateOrConnectWithoutKasirInput = {
    where: PenjualanWhereUniqueInput
    create: XOR<PenjualanCreateWithoutKasirInput, PenjualanUncheckedCreateWithoutKasirInput>
  }

  export type PenjualanCreateManyKasirInputEnvelope = {
    data: PenjualanCreateManyKasirInput | PenjualanCreateManyKasirInput[]
    skipDuplicates?: boolean
  }

  export type KomisiKasirCreateWithoutKasirInput = {
    jumlah: number
    createdAt?: Date | string
    penjualanDetail: PenjualanDetailCreateNestedOneWithoutKomisiInput
  }

  export type KomisiKasirUncheckedCreateWithoutKasirInput = {
    id?: number
    penjualanDetailId: number
    jumlah: number
    createdAt?: Date | string
  }

  export type KomisiKasirCreateOrConnectWithoutKasirInput = {
    where: KomisiKasirWhereUniqueInput
    create: XOR<KomisiKasirCreateWithoutKasirInput, KomisiKasirUncheckedCreateWithoutKasirInput>
  }

  export type KomisiKasirCreateManyKasirInputEnvelope = {
    data: KomisiKasirCreateManyKasirInput | KomisiKasirCreateManyKasirInput[]
    skipDuplicates?: boolean
  }

  export type PenjualanUpsertWithWhereUniqueWithoutKasirInput = {
    where: PenjualanWhereUniqueInput
    update: XOR<PenjualanUpdateWithoutKasirInput, PenjualanUncheckedUpdateWithoutKasirInput>
    create: XOR<PenjualanCreateWithoutKasirInput, PenjualanUncheckedCreateWithoutKasirInput>
  }

  export type PenjualanUpdateWithWhereUniqueWithoutKasirInput = {
    where: PenjualanWhereUniqueInput
    data: XOR<PenjualanUpdateWithoutKasirInput, PenjualanUncheckedUpdateWithoutKasirInput>
  }

  export type PenjualanUpdateManyWithWhereWithoutKasirInput = {
    where: PenjualanScalarWhereInput
    data: XOR<PenjualanUpdateManyMutationInput, PenjualanUncheckedUpdateManyWithoutKasirInput>
  }

  export type KomisiKasirUpsertWithWhereUniqueWithoutKasirInput = {
    where: KomisiKasirWhereUniqueInput
    update: XOR<KomisiKasirUpdateWithoutKasirInput, KomisiKasirUncheckedUpdateWithoutKasirInput>
    create: XOR<KomisiKasirCreateWithoutKasirInput, KomisiKasirUncheckedCreateWithoutKasirInput>
  }

  export type KomisiKasirUpdateWithWhereUniqueWithoutKasirInput = {
    where: KomisiKasirWhereUniqueInput
    data: XOR<KomisiKasirUpdateWithoutKasirInput, KomisiKasirUncheckedUpdateWithoutKasirInput>
  }

  export type KomisiKasirUpdateManyWithWhereWithoutKasirInput = {
    where: KomisiKasirScalarWhereInput
    data: XOR<KomisiKasirUpdateManyMutationInput, KomisiKasirUncheckedUpdateManyWithoutKasirInput>
  }

  export type KategoriCreateWithoutKomisiInput = {
    nama: string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Produk?: ProdukCreateNestedManyWithoutKategoriInput
  }

  export type KategoriUncheckedCreateWithoutKomisiInput = {
    id?: number
    nama: string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Produk?: ProdukUncheckedCreateNestedManyWithoutKategoriInput
  }

  export type KategoriCreateOrConnectWithoutKomisiInput = {
    where: KategoriWhereUniqueInput
    create: XOR<KategoriCreateWithoutKomisiInput, KategoriUncheckedCreateWithoutKomisiInput>
  }

  export type KategoriUpsertWithoutKomisiInput = {
    update: XOR<KategoriUpdateWithoutKomisiInput, KategoriUncheckedUpdateWithoutKomisiInput>
    create: XOR<KategoriCreateWithoutKomisiInput, KategoriUncheckedCreateWithoutKomisiInput>
    where?: KategoriWhereInput
  }

  export type KategoriUpdateToOneWithWhereWithoutKomisiInput = {
    where?: KategoriWhereInput
    data: XOR<KategoriUpdateWithoutKomisiInput, KategoriUncheckedUpdateWithoutKomisiInput>
  }

  export type KategoriUpdateWithoutKomisiInput = {
    nama?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Produk?: ProdukUpdateManyWithoutKategoriNestedInput
  }

  export type KategoriUncheckedUpdateWithoutKomisiInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Produk?: ProdukUncheckedUpdateManyWithoutKategoriNestedInput
  }

  export type PenjualanDetailCreateWithoutKomisiInput = {
    harga: number
    qty?: number
    tipe: $Enums.JenisPenjualan
    penjualan: PenjualanCreateNestedOneWithoutPenjualanDetailInput
    produk: ProdukCreateNestedOneWithoutPenjualanDetailInput
    stok: StokCreateNestedOneWithoutPenjualanDetailInput
  }

  export type PenjualanDetailUncheckedCreateWithoutKomisiInput = {
    id?: number
    produkId: number
    penjualanId: number
    stokId: number
    harga: number
    qty?: number
    tipe: $Enums.JenisPenjualan
  }

  export type PenjualanDetailCreateOrConnectWithoutKomisiInput = {
    where: PenjualanDetailWhereUniqueInput
    create: XOR<PenjualanDetailCreateWithoutKomisiInput, PenjualanDetailUncheckedCreateWithoutKomisiInput>
  }

  export type PenggunaCreateWithoutKomisiInput = {
    nama: string
    username: string
    password: string
    email: string
    role?: $Enums.Role
    verifikasi?: boolean
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Penjualan?: PenjualanCreateNestedManyWithoutKasirInput
  }

  export type PenggunaUncheckedCreateWithoutKomisiInput = {
    id?: number
    nama: string
    username: string
    password: string
    email: string
    role?: $Enums.Role
    verifikasi?: boolean
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Penjualan?: PenjualanUncheckedCreateNestedManyWithoutKasirInput
  }

  export type PenggunaCreateOrConnectWithoutKomisiInput = {
    where: PenggunaWhereUniqueInput
    create: XOR<PenggunaCreateWithoutKomisiInput, PenggunaUncheckedCreateWithoutKomisiInput>
  }

  export type PenjualanDetailUpsertWithoutKomisiInput = {
    update: XOR<PenjualanDetailUpdateWithoutKomisiInput, PenjualanDetailUncheckedUpdateWithoutKomisiInput>
    create: XOR<PenjualanDetailCreateWithoutKomisiInput, PenjualanDetailUncheckedCreateWithoutKomisiInput>
    where?: PenjualanDetailWhereInput
  }

  export type PenjualanDetailUpdateToOneWithWhereWithoutKomisiInput = {
    where?: PenjualanDetailWhereInput
    data: XOR<PenjualanDetailUpdateWithoutKomisiInput, PenjualanDetailUncheckedUpdateWithoutKomisiInput>
  }

  export type PenjualanDetailUpdateWithoutKomisiInput = {
    harga?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    tipe?: EnumJenisPenjualanFieldUpdateOperationsInput | $Enums.JenisPenjualan
    penjualan?: PenjualanUpdateOneRequiredWithoutPenjualanDetailNestedInput
    produk?: ProdukUpdateOneRequiredWithoutPenjualanDetailNestedInput
    stok?: StokUpdateOneRequiredWithoutPenjualanDetailNestedInput
  }

  export type PenjualanDetailUncheckedUpdateWithoutKomisiInput = {
    id?: IntFieldUpdateOperationsInput | number
    produkId?: IntFieldUpdateOperationsInput | number
    penjualanId?: IntFieldUpdateOperationsInput | number
    stokId?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    tipe?: EnumJenisPenjualanFieldUpdateOperationsInput | $Enums.JenisPenjualan
  }

  export type PenggunaUpsertWithoutKomisiInput = {
    update: XOR<PenggunaUpdateWithoutKomisiInput, PenggunaUncheckedUpdateWithoutKomisiInput>
    create: XOR<PenggunaCreateWithoutKomisiInput, PenggunaUncheckedCreateWithoutKomisiInput>
    where?: PenggunaWhereInput
  }

  export type PenggunaUpdateToOneWithWhereWithoutKomisiInput = {
    where?: PenggunaWhereInput
    data: XOR<PenggunaUpdateWithoutKomisiInput, PenggunaUncheckedUpdateWithoutKomisiInput>
  }

  export type PenggunaUpdateWithoutKomisiInput = {
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verifikasi?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Penjualan?: PenjualanUpdateManyWithoutKasirNestedInput
  }

  export type PenggunaUncheckedUpdateWithoutKomisiInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verifikasi?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Penjualan?: PenjualanUncheckedUpdateManyWithoutKasirNestedInput
  }

  export type PembelianCreateWithoutSuplierInput = {
    tanggal?: Date | string
    total: number
    status: $Enums.StatusPembelian
    createdAt?: Date | string
    PembelianDetail?: PembelianDetailCreateNestedManyWithoutPembelianInput
    Piutang?: PiutangCreateNestedManyWithoutPembelianInput
  }

  export type PembelianUncheckedCreateWithoutSuplierInput = {
    id?: number
    tanggal?: Date | string
    total: number
    status: $Enums.StatusPembelian
    createdAt?: Date | string
    PembelianDetail?: PembelianDetailUncheckedCreateNestedManyWithoutPembelianInput
    Piutang?: PiutangUncheckedCreateNestedManyWithoutPembelianInput
  }

  export type PembelianCreateOrConnectWithoutSuplierInput = {
    where: PembelianWhereUniqueInput
    create: XOR<PembelianCreateWithoutSuplierInput, PembelianUncheckedCreateWithoutSuplierInput>
  }

  export type PembelianCreateManySuplierInputEnvelope = {
    data: PembelianCreateManySuplierInput | PembelianCreateManySuplierInput[]
    skipDuplicates?: boolean
  }

  export type PembelianUpsertWithWhereUniqueWithoutSuplierInput = {
    where: PembelianWhereUniqueInput
    update: XOR<PembelianUpdateWithoutSuplierInput, PembelianUncheckedUpdateWithoutSuplierInput>
    create: XOR<PembelianCreateWithoutSuplierInput, PembelianUncheckedCreateWithoutSuplierInput>
  }

  export type PembelianUpdateWithWhereUniqueWithoutSuplierInput = {
    where: PembelianWhereUniqueInput
    data: XOR<PembelianUpdateWithoutSuplierInput, PembelianUncheckedUpdateWithoutSuplierInput>
  }

  export type PembelianUpdateManyWithWhereWithoutSuplierInput = {
    where: PembelianScalarWhereInput
    data: XOR<PembelianUpdateManyMutationInput, PembelianUncheckedUpdateManyWithoutSuplierInput>
  }

  export type PembelianScalarWhereInput = {
    AND?: PembelianScalarWhereInput | PembelianScalarWhereInput[]
    OR?: PembelianScalarWhereInput[]
    NOT?: PembelianScalarWhereInput | PembelianScalarWhereInput[]
    id?: IntFilter<"Pembelian"> | number
    suplierId?: IntFilter<"Pembelian"> | number
    tanggal?: DateTimeFilter<"Pembelian"> | Date | string
    total?: IntFilter<"Pembelian"> | number
    status?: EnumStatusPembelianFilter<"Pembelian"> | $Enums.StatusPembelian
    createdAt?: DateTimeFilter<"Pembelian"> | Date | string
  }

  export type SuplierCreateWithoutPembelianInput = {
    nama: string
    kontak?: string | null
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type SuplierUncheckedCreateWithoutPembelianInput = {
    id?: number
    nama: string
    kontak?: string | null
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type SuplierCreateOrConnectWithoutPembelianInput = {
    where: SuplierWhereUniqueInput
    create: XOR<SuplierCreateWithoutPembelianInput, SuplierUncheckedCreateWithoutPembelianInput>
  }

  export type PembelianDetailCreateWithoutPembelianInput = {
    qty: number
    harga: number
    produk: ProdukCreateNestedOneWithoutPembelianDetailInput
  }

  export type PembelianDetailUncheckedCreateWithoutPembelianInput = {
    id?: number
    produkId: number
    qty: number
    harga: number
  }

  export type PembelianDetailCreateOrConnectWithoutPembelianInput = {
    where: PembelianDetailWhereUniqueInput
    create: XOR<PembelianDetailCreateWithoutPembelianInput, PembelianDetailUncheckedCreateWithoutPembelianInput>
  }

  export type PembelianDetailCreateManyPembelianInputEnvelope = {
    data: PembelianDetailCreateManyPembelianInput | PembelianDetailCreateManyPembelianInput[]
    skipDuplicates?: boolean
  }

  export type PiutangCreateWithoutPembelianInput = {
    jumlah: number
    tanggalJatuhTempo: Date | string
    status: $Enums.StatusPiutang
  }

  export type PiutangUncheckedCreateWithoutPembelianInput = {
    id?: number
    jumlah: number
    tanggalJatuhTempo: Date | string
    status: $Enums.StatusPiutang
  }

  export type PiutangCreateOrConnectWithoutPembelianInput = {
    where: PiutangWhereUniqueInput
    create: XOR<PiutangCreateWithoutPembelianInput, PiutangUncheckedCreateWithoutPembelianInput>
  }

  export type PiutangCreateManyPembelianInputEnvelope = {
    data: PiutangCreateManyPembelianInput | PiutangCreateManyPembelianInput[]
    skipDuplicates?: boolean
  }

  export type SuplierUpsertWithoutPembelianInput = {
    update: XOR<SuplierUpdateWithoutPembelianInput, SuplierUncheckedUpdateWithoutPembelianInput>
    create: XOR<SuplierCreateWithoutPembelianInput, SuplierUncheckedCreateWithoutPembelianInput>
    where?: SuplierWhereInput
  }

  export type SuplierUpdateToOneWithWhereWithoutPembelianInput = {
    where?: SuplierWhereInput
    data: XOR<SuplierUpdateWithoutPembelianInput, SuplierUncheckedUpdateWithoutPembelianInput>
  }

  export type SuplierUpdateWithoutPembelianInput = {
    nama?: StringFieldUpdateOperationsInput | string
    kontak?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SuplierUncheckedUpdateWithoutPembelianInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    kontak?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PembelianDetailUpsertWithWhereUniqueWithoutPembelianInput = {
    where: PembelianDetailWhereUniqueInput
    update: XOR<PembelianDetailUpdateWithoutPembelianInput, PembelianDetailUncheckedUpdateWithoutPembelianInput>
    create: XOR<PembelianDetailCreateWithoutPembelianInput, PembelianDetailUncheckedCreateWithoutPembelianInput>
  }

  export type PembelianDetailUpdateWithWhereUniqueWithoutPembelianInput = {
    where: PembelianDetailWhereUniqueInput
    data: XOR<PembelianDetailUpdateWithoutPembelianInput, PembelianDetailUncheckedUpdateWithoutPembelianInput>
  }

  export type PembelianDetailUpdateManyWithWhereWithoutPembelianInput = {
    where: PembelianDetailScalarWhereInput
    data: XOR<PembelianDetailUpdateManyMutationInput, PembelianDetailUncheckedUpdateManyWithoutPembelianInput>
  }

  export type PiutangUpsertWithWhereUniqueWithoutPembelianInput = {
    where: PiutangWhereUniqueInput
    update: XOR<PiutangUpdateWithoutPembelianInput, PiutangUncheckedUpdateWithoutPembelianInput>
    create: XOR<PiutangCreateWithoutPembelianInput, PiutangUncheckedCreateWithoutPembelianInput>
  }

  export type PiutangUpdateWithWhereUniqueWithoutPembelianInput = {
    where: PiutangWhereUniqueInput
    data: XOR<PiutangUpdateWithoutPembelianInput, PiutangUncheckedUpdateWithoutPembelianInput>
  }

  export type PiutangUpdateManyWithWhereWithoutPembelianInput = {
    where: PiutangScalarWhereInput
    data: XOR<PiutangUpdateManyMutationInput, PiutangUncheckedUpdateManyWithoutPembelianInput>
  }

  export type PiutangScalarWhereInput = {
    AND?: PiutangScalarWhereInput | PiutangScalarWhereInput[]
    OR?: PiutangScalarWhereInput[]
    NOT?: PiutangScalarWhereInput | PiutangScalarWhereInput[]
    id?: IntFilter<"Piutang"> | number
    pembelianId?: IntFilter<"Piutang"> | number
    jumlah?: IntFilter<"Piutang"> | number
    tanggalJatuhTempo?: DateTimeFilter<"Piutang"> | Date | string
    status?: EnumStatusPiutangFilter<"Piutang"> | $Enums.StatusPiutang
  }

  export type PembelianCreateWithoutPembelianDetailInput = {
    tanggal?: Date | string
    total: number
    status: $Enums.StatusPembelian
    createdAt?: Date | string
    suplier: SuplierCreateNestedOneWithoutPembelianInput
    Piutang?: PiutangCreateNestedManyWithoutPembelianInput
  }

  export type PembelianUncheckedCreateWithoutPembelianDetailInput = {
    id?: number
    suplierId: number
    tanggal?: Date | string
    total: number
    status: $Enums.StatusPembelian
    createdAt?: Date | string
    Piutang?: PiutangUncheckedCreateNestedManyWithoutPembelianInput
  }

  export type PembelianCreateOrConnectWithoutPembelianDetailInput = {
    where: PembelianWhereUniqueInput
    create: XOR<PembelianCreateWithoutPembelianDetailInput, PembelianUncheckedCreateWithoutPembelianDetailInput>
  }

  export type ProdukCreateWithoutPembelianDetailInput = {
    nama: string
    hargaBeli: number
    hargaJualRetail: number
    hargaJualGrosir: number
    qtyMinGrosir?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    kategori: KategoriCreateNestedOneWithoutProdukInput
    Stok?: StokCreateNestedManyWithoutProdukInput
    PenjualanDetail?: PenjualanDetailCreateNestedManyWithoutProdukInput
  }

  export type ProdukUncheckedCreateWithoutPembelianDetailInput = {
    id?: number
    nama: string
    kategoriId: number
    hargaBeli: number
    hargaJualRetail: number
    hargaJualGrosir: number
    qtyMinGrosir?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    Stok?: StokUncheckedCreateNestedManyWithoutProdukInput
    PenjualanDetail?: PenjualanDetailUncheckedCreateNestedManyWithoutProdukInput
  }

  export type ProdukCreateOrConnectWithoutPembelianDetailInput = {
    where: ProdukWhereUniqueInput
    create: XOR<ProdukCreateWithoutPembelianDetailInput, ProdukUncheckedCreateWithoutPembelianDetailInput>
  }

  export type PembelianUpsertWithoutPembelianDetailInput = {
    update: XOR<PembelianUpdateWithoutPembelianDetailInput, PembelianUncheckedUpdateWithoutPembelianDetailInput>
    create: XOR<PembelianCreateWithoutPembelianDetailInput, PembelianUncheckedCreateWithoutPembelianDetailInput>
    where?: PembelianWhereInput
  }

  export type PembelianUpdateToOneWithWhereWithoutPembelianDetailInput = {
    where?: PembelianWhereInput
    data: XOR<PembelianUpdateWithoutPembelianDetailInput, PembelianUncheckedUpdateWithoutPembelianDetailInput>
  }

  export type PembelianUpdateWithoutPembelianDetailInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusPembelianFieldUpdateOperationsInput | $Enums.StatusPembelian
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suplier?: SuplierUpdateOneRequiredWithoutPembelianNestedInput
    Piutang?: PiutangUpdateManyWithoutPembelianNestedInput
  }

  export type PembelianUncheckedUpdateWithoutPembelianDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    suplierId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusPembelianFieldUpdateOperationsInput | $Enums.StatusPembelian
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Piutang?: PiutangUncheckedUpdateManyWithoutPembelianNestedInput
  }

  export type ProdukUpsertWithoutPembelianDetailInput = {
    update: XOR<ProdukUpdateWithoutPembelianDetailInput, ProdukUncheckedUpdateWithoutPembelianDetailInput>
    create: XOR<ProdukCreateWithoutPembelianDetailInput, ProdukUncheckedCreateWithoutPembelianDetailInput>
    where?: ProdukWhereInput
  }

  export type ProdukUpdateToOneWithWhereWithoutPembelianDetailInput = {
    where?: ProdukWhereInput
    data: XOR<ProdukUpdateWithoutPembelianDetailInput, ProdukUncheckedUpdateWithoutPembelianDetailInput>
  }

  export type ProdukUpdateWithoutPembelianDetailInput = {
    nama?: StringFieldUpdateOperationsInput | string
    hargaBeli?: IntFieldUpdateOperationsInput | number
    hargaJualRetail?: IntFieldUpdateOperationsInput | number
    hargaJualGrosir?: IntFieldUpdateOperationsInput | number
    qtyMinGrosir?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kategori?: KategoriUpdateOneRequiredWithoutProdukNestedInput
    Stok?: StokUpdateManyWithoutProdukNestedInput
    PenjualanDetail?: PenjualanDetailUpdateManyWithoutProdukNestedInput
  }

  export type ProdukUncheckedUpdateWithoutPembelianDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    kategoriId?: IntFieldUpdateOperationsInput | number
    hargaBeli?: IntFieldUpdateOperationsInput | number
    hargaJualRetail?: IntFieldUpdateOperationsInput | number
    hargaJualGrosir?: IntFieldUpdateOperationsInput | number
    qtyMinGrosir?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Stok?: StokUncheckedUpdateManyWithoutProdukNestedInput
    PenjualanDetail?: PenjualanDetailUncheckedUpdateManyWithoutProdukNestedInput
  }

  export type PembelianCreateWithoutPiutangInput = {
    tanggal?: Date | string
    total: number
    status: $Enums.StatusPembelian
    createdAt?: Date | string
    suplier: SuplierCreateNestedOneWithoutPembelianInput
    PembelianDetail?: PembelianDetailCreateNestedManyWithoutPembelianInput
  }

  export type PembelianUncheckedCreateWithoutPiutangInput = {
    id?: number
    suplierId: number
    tanggal?: Date | string
    total: number
    status: $Enums.StatusPembelian
    createdAt?: Date | string
    PembelianDetail?: PembelianDetailUncheckedCreateNestedManyWithoutPembelianInput
  }

  export type PembelianCreateOrConnectWithoutPiutangInput = {
    where: PembelianWhereUniqueInput
    create: XOR<PembelianCreateWithoutPiutangInput, PembelianUncheckedCreateWithoutPiutangInput>
  }

  export type PembelianUpsertWithoutPiutangInput = {
    update: XOR<PembelianUpdateWithoutPiutangInput, PembelianUncheckedUpdateWithoutPiutangInput>
    create: XOR<PembelianCreateWithoutPiutangInput, PembelianUncheckedCreateWithoutPiutangInput>
    where?: PembelianWhereInput
  }

  export type PembelianUpdateToOneWithWhereWithoutPiutangInput = {
    where?: PembelianWhereInput
    data: XOR<PembelianUpdateWithoutPiutangInput, PembelianUncheckedUpdateWithoutPiutangInput>
  }

  export type PembelianUpdateWithoutPiutangInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusPembelianFieldUpdateOperationsInput | $Enums.StatusPembelian
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suplier?: SuplierUpdateOneRequiredWithoutPembelianNestedInput
    PembelianDetail?: PembelianDetailUpdateManyWithoutPembelianNestedInput
  }

  export type PembelianUncheckedUpdateWithoutPiutangInput = {
    id?: IntFieldUpdateOperationsInput | number
    suplierId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusPembelianFieldUpdateOperationsInput | $Enums.StatusPembelian
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PembelianDetail?: PembelianDetailUncheckedUpdateManyWithoutPembelianNestedInput
  }

  export type ProdukCreateManyKategoriInput = {
    id?: number
    nama: string
    hargaBeli: number
    hargaJualRetail: number
    hargaJualGrosir: number
    qtyMinGrosir?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type KomisiKategoriCreateManyKategoriInput = {
    id?: number
    persen?: number
    createdAt?: Date | string
  }

  export type ProdukUpdateWithoutKategoriInput = {
    nama?: StringFieldUpdateOperationsInput | string
    hargaBeli?: IntFieldUpdateOperationsInput | number
    hargaJualRetail?: IntFieldUpdateOperationsInput | number
    hargaJualGrosir?: IntFieldUpdateOperationsInput | number
    qtyMinGrosir?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Stok?: StokUpdateManyWithoutProdukNestedInput
    PembelianDetail?: PembelianDetailUpdateManyWithoutProdukNestedInput
    PenjualanDetail?: PenjualanDetailUpdateManyWithoutProdukNestedInput
  }

  export type ProdukUncheckedUpdateWithoutKategoriInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    hargaBeli?: IntFieldUpdateOperationsInput | number
    hargaJualRetail?: IntFieldUpdateOperationsInput | number
    hargaJualGrosir?: IntFieldUpdateOperationsInput | number
    qtyMinGrosir?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Stok?: StokUncheckedUpdateManyWithoutProdukNestedInput
    PembelianDetail?: PembelianDetailUncheckedUpdateManyWithoutProdukNestedInput
    PenjualanDetail?: PenjualanDetailUncheckedUpdateManyWithoutProdukNestedInput
  }

  export type ProdukUncheckedUpdateManyWithoutKategoriInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    hargaBeli?: IntFieldUpdateOperationsInput | number
    hargaJualRetail?: IntFieldUpdateOperationsInput | number
    hargaJualGrosir?: IntFieldUpdateOperationsInput | number
    qtyMinGrosir?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type KomisiKategoriUpdateWithoutKategoriInput = {
    persen?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KomisiKategoriUncheckedUpdateWithoutKategoriInput = {
    id?: IntFieldUpdateOperationsInput | number
    persen?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KomisiKategoriUncheckedUpdateManyWithoutKategoriInput = {
    id?: IntFieldUpdateOperationsInput | number
    persen?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StokCreateManyProdukInput = {
    id?: number
    serialNumber?: string | null
    expiredDate?: Date | string | null
    qty: number
    status?: $Enums.StatusStok
    createdAt?: Date | string
  }

  export type PembelianDetailCreateManyProdukInput = {
    id?: number
    pembelianId: number
    qty: number
    harga: number
  }

  export type PenjualanDetailCreateManyProdukInput = {
    id?: number
    penjualanId: number
    stokId: number
    harga: number
    qty?: number
    tipe: $Enums.JenisPenjualan
  }

  export type StokUpdateWithoutProdukInput = {
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qty?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusStokFieldUpdateOperationsInput | $Enums.StatusStok
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PenjualanDetail?: PenjualanDetailUpdateManyWithoutStokNestedInput
  }

  export type StokUncheckedUpdateWithoutProdukInput = {
    id?: IntFieldUpdateOperationsInput | number
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qty?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusStokFieldUpdateOperationsInput | $Enums.StatusStok
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PenjualanDetail?: PenjualanDetailUncheckedUpdateManyWithoutStokNestedInput
  }

  export type StokUncheckedUpdateManyWithoutProdukInput = {
    id?: IntFieldUpdateOperationsInput | number
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qty?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusStokFieldUpdateOperationsInput | $Enums.StatusStok
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PembelianDetailUpdateWithoutProdukInput = {
    qty?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    pembelian?: PembelianUpdateOneRequiredWithoutPembelianDetailNestedInput
  }

  export type PembelianDetailUncheckedUpdateWithoutProdukInput = {
    id?: IntFieldUpdateOperationsInput | number
    pembelianId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
  }

  export type PembelianDetailUncheckedUpdateManyWithoutProdukInput = {
    id?: IntFieldUpdateOperationsInput | number
    pembelianId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
  }

  export type PenjualanDetailUpdateWithoutProdukInput = {
    harga?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    tipe?: EnumJenisPenjualanFieldUpdateOperationsInput | $Enums.JenisPenjualan
    penjualan?: PenjualanUpdateOneRequiredWithoutPenjualanDetailNestedInput
    stok?: StokUpdateOneRequiredWithoutPenjualanDetailNestedInput
    Komisi?: KomisiKasirUpdateManyWithoutPenjualanDetailNestedInput
  }

  export type PenjualanDetailUncheckedUpdateWithoutProdukInput = {
    id?: IntFieldUpdateOperationsInput | number
    penjualanId?: IntFieldUpdateOperationsInput | number
    stokId?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    tipe?: EnumJenisPenjualanFieldUpdateOperationsInput | $Enums.JenisPenjualan
    Komisi?: KomisiKasirUncheckedUpdateManyWithoutPenjualanDetailNestedInput
  }

  export type PenjualanDetailUncheckedUpdateManyWithoutProdukInput = {
    id?: IntFieldUpdateOperationsInput | number
    penjualanId?: IntFieldUpdateOperationsInput | number
    stokId?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    tipe?: EnumJenisPenjualanFieldUpdateOperationsInput | $Enums.JenisPenjualan
  }

  export type PenjualanDetailCreateManyStokInput = {
    id?: number
    produkId: number
    penjualanId: number
    harga: number
    qty?: number
    tipe: $Enums.JenisPenjualan
  }

  export type PenjualanDetailUpdateWithoutStokInput = {
    harga?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    tipe?: EnumJenisPenjualanFieldUpdateOperationsInput | $Enums.JenisPenjualan
    penjualan?: PenjualanUpdateOneRequiredWithoutPenjualanDetailNestedInput
    produk?: ProdukUpdateOneRequiredWithoutPenjualanDetailNestedInput
    Komisi?: KomisiKasirUpdateManyWithoutPenjualanDetailNestedInput
  }

  export type PenjualanDetailUncheckedUpdateWithoutStokInput = {
    id?: IntFieldUpdateOperationsInput | number
    produkId?: IntFieldUpdateOperationsInput | number
    penjualanId?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    tipe?: EnumJenisPenjualanFieldUpdateOperationsInput | $Enums.JenisPenjualan
    Komisi?: KomisiKasirUncheckedUpdateManyWithoutPenjualanDetailNestedInput
  }

  export type PenjualanDetailUncheckedUpdateManyWithoutStokInput = {
    id?: IntFieldUpdateOperationsInput | number
    produkId?: IntFieldUpdateOperationsInput | number
    penjualanId?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    tipe?: EnumJenisPenjualanFieldUpdateOperationsInput | $Enums.JenisPenjualan
  }

  export type PenjualanDetailCreateManyPenjualanInput = {
    id?: number
    produkId: number
    stokId: number
    harga: number
    qty?: number
    tipe: $Enums.JenisPenjualan
  }

  export type PenjualanDetailUpdateWithoutPenjualanInput = {
    harga?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    tipe?: EnumJenisPenjualanFieldUpdateOperationsInput | $Enums.JenisPenjualan
    produk?: ProdukUpdateOneRequiredWithoutPenjualanDetailNestedInput
    stok?: StokUpdateOneRequiredWithoutPenjualanDetailNestedInput
    Komisi?: KomisiKasirUpdateManyWithoutPenjualanDetailNestedInput
  }

  export type PenjualanDetailUncheckedUpdateWithoutPenjualanInput = {
    id?: IntFieldUpdateOperationsInput | number
    produkId?: IntFieldUpdateOperationsInput | number
    stokId?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    tipe?: EnumJenisPenjualanFieldUpdateOperationsInput | $Enums.JenisPenjualan
    Komisi?: KomisiKasirUncheckedUpdateManyWithoutPenjualanDetailNestedInput
  }

  export type PenjualanDetailUncheckedUpdateManyWithoutPenjualanInput = {
    id?: IntFieldUpdateOperationsInput | number
    produkId?: IntFieldUpdateOperationsInput | number
    stokId?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    tipe?: EnumJenisPenjualanFieldUpdateOperationsInput | $Enums.JenisPenjualan
  }

  export type PenjualanCreateManyMetodeBayarInput = {
    id?: number
    tanggal?: Date | string
    total: number
    kasirId: number
    createdAt?: Date | string
  }

  export type PenjualanUpdateWithoutMetodeBayarInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kasir?: PenggunaUpdateOneRequiredWithoutPenjualanNestedInput
    PenjualanDetail?: PenjualanDetailUpdateManyWithoutPenjualanNestedInput
  }

  export type PenjualanUncheckedUpdateWithoutMetodeBayarInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    kasirId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PenjualanDetail?: PenjualanDetailUncheckedUpdateManyWithoutPenjualanNestedInput
  }

  export type PenjualanUncheckedUpdateManyWithoutMetodeBayarInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    kasirId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KomisiKasirCreateManyPenjualanDetailInput = {
    id?: number
    kasirId: number
    jumlah: number
    createdAt?: Date | string
  }

  export type KomisiKasirUpdateWithoutPenjualanDetailInput = {
    jumlah?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kasir?: PenggunaUpdateOneRequiredWithoutKomisiNestedInput
  }

  export type KomisiKasirUncheckedUpdateWithoutPenjualanDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    kasirId?: IntFieldUpdateOperationsInput | number
    jumlah?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KomisiKasirUncheckedUpdateManyWithoutPenjualanDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    kasirId?: IntFieldUpdateOperationsInput | number
    jumlah?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PenjualanCreateManyKasirInput = {
    id?: number
    tanggal?: Date | string
    total: number
    metodeBayarId: number
    createdAt?: Date | string
  }

  export type KomisiKasirCreateManyKasirInput = {
    id?: number
    penjualanDetailId: number
    jumlah: number
    createdAt?: Date | string
  }

  export type PenjualanUpdateWithoutKasirInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metodeBayar?: MetodeBayarUpdateOneRequiredWithoutPenjualanNestedInput
    PenjualanDetail?: PenjualanDetailUpdateManyWithoutPenjualanNestedInput
  }

  export type PenjualanUncheckedUpdateWithoutKasirInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    metodeBayarId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PenjualanDetail?: PenjualanDetailUncheckedUpdateManyWithoutPenjualanNestedInput
  }

  export type PenjualanUncheckedUpdateManyWithoutKasirInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    metodeBayarId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KomisiKasirUpdateWithoutKasirInput = {
    jumlah?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    penjualanDetail?: PenjualanDetailUpdateOneRequiredWithoutKomisiNestedInput
  }

  export type KomisiKasirUncheckedUpdateWithoutKasirInput = {
    id?: IntFieldUpdateOperationsInput | number
    penjualanDetailId?: IntFieldUpdateOperationsInput | number
    jumlah?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KomisiKasirUncheckedUpdateManyWithoutKasirInput = {
    id?: IntFieldUpdateOperationsInput | number
    penjualanDetailId?: IntFieldUpdateOperationsInput | number
    jumlah?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PembelianCreateManySuplierInput = {
    id?: number
    tanggal?: Date | string
    total: number
    status: $Enums.StatusPembelian
    createdAt?: Date | string
  }

  export type PembelianUpdateWithoutSuplierInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusPembelianFieldUpdateOperationsInput | $Enums.StatusPembelian
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PembelianDetail?: PembelianDetailUpdateManyWithoutPembelianNestedInput
    Piutang?: PiutangUpdateManyWithoutPembelianNestedInput
  }

  export type PembelianUncheckedUpdateWithoutSuplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusPembelianFieldUpdateOperationsInput | $Enums.StatusPembelian
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PembelianDetail?: PembelianDetailUncheckedUpdateManyWithoutPembelianNestedInput
    Piutang?: PiutangUncheckedUpdateManyWithoutPembelianNestedInput
  }

  export type PembelianUncheckedUpdateManyWithoutSuplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusPembelianFieldUpdateOperationsInput | $Enums.StatusPembelian
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PembelianDetailCreateManyPembelianInput = {
    id?: number
    produkId: number
    qty: number
    harga: number
  }

  export type PiutangCreateManyPembelianInput = {
    id?: number
    jumlah: number
    tanggalJatuhTempo: Date | string
    status: $Enums.StatusPiutang
  }

  export type PembelianDetailUpdateWithoutPembelianInput = {
    qty?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    produk?: ProdukUpdateOneRequiredWithoutPembelianDetailNestedInput
  }

  export type PembelianDetailUncheckedUpdateWithoutPembelianInput = {
    id?: IntFieldUpdateOperationsInput | number
    produkId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
  }

  export type PembelianDetailUncheckedUpdateManyWithoutPembelianInput = {
    id?: IntFieldUpdateOperationsInput | number
    produkId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
  }

  export type PiutangUpdateWithoutPembelianInput = {
    jumlah?: IntFieldUpdateOperationsInput | number
    tanggalJatuhTempo?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPiutangFieldUpdateOperationsInput | $Enums.StatusPiutang
  }

  export type PiutangUncheckedUpdateWithoutPembelianInput = {
    id?: IntFieldUpdateOperationsInput | number
    jumlah?: IntFieldUpdateOperationsInput | number
    tanggalJatuhTempo?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPiutangFieldUpdateOperationsInput | $Enums.StatusPiutang
  }

  export type PiutangUncheckedUpdateManyWithoutPembelianInput = {
    id?: IntFieldUpdateOperationsInput | number
    jumlah?: IntFieldUpdateOperationsInput | number
    tanggalJatuhTempo?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPiutangFieldUpdateOperationsInput | $Enums.StatusPiutang
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