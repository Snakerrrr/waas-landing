declare module "lenis" {
  interface LenisOptions {
    lerp?: number;
    duration?: number;
    smoothWheel?: boolean;
    smoothTouch?: boolean;
    wheelMultiplier?: number;
    touchMultiplier?: number;
    infinite?: boolean;
  }

  export default class Lenis {
    constructor(options?: LenisOptions);
    raf(time: number): void;
    scrollTo(target: HTMLElement | number | string, options?: Record<string, unknown>): void;
    destroy(): void;
  }
}
