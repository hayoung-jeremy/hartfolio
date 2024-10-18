import Lenis from "lenis";

let globalLenis: Lenis | null = null;

export const initializeLenis = () => {
  if (!globalLenis) {
    globalLenis = new Lenis();
    const raf = (time: number) => {
      globalLenis?.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }
};

export const destroyLenis = () => {
  globalLenis?.destroy();
  globalLenis = null;
};

export const getLenisInstance = () => globalLenis;
