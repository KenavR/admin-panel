export interface Func<PropType, ReturnType> {
  (prop: PropType): ReturnType;
}

export interface BiFunc<Prop1Type, Prop2Type, ReturnType> {
  (prop1: Prop1Type, prop2: Prop2Type): ReturnType;
}

export interface Consumer<PropType> {
  (prop: PropType): void;
}

export interface Predicate<PropType> {
  (prop: PropType): boolean;
}

export interface Supplier<ReturnType> {
  (): ReturnType;
}
