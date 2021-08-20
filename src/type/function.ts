export type Func<Ret> = (...args: any[]) => Ret
export type Func0<Ret> = () => Ret;
export type Func1<P1, Ret> = (p1: P1) => Ret;
export type Func2<P1, P2, Ret> = (p1: P1, p2: P2) => Ret;
export type Func3<P1, P2, P3, Ret> = (p1: P1, p2: P2, p3: P3) => Ret;
export type Func4<P1, P2, P3, P4, Ret> = (p1: P1, p2: P2, p3: P3, p4: P4) => Ret;
export type Func5<P1, P2, P3, P4, P5, Ret> = (p1: P1, p2: P2, p3: P3, p4: P4, p5: P5) => Ret;
export type Func6<P1, P2, P3, P4, P5, P6, Ret> = (p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6) => Ret;

export type Noop = () => void;
export type Identity<T> = (x: T) => T;