export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P];
};

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type SchemaMapper<T = unknown> = {
  [P in keyof T]-?: T[P] extends (infer U)[]
    ? SchemaMapper<U>[]
    : T[P] extends object
    ? SchemaMapper<T[P]>
    : Joi.Schema<T[P]>;
};
