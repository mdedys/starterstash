declare type Prefix<T, P extends string> = {
  [K in keyof T as K extends string ? `${P}${K}` : never]: T[K];
};

declare type StyledProps<T> = Prefix<T, "$">;
