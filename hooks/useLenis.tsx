import { useEffect } from "react";
import { destroyLenis, initializeLenis } from "@/utils/lenis";

const useLenis = () => {
  useEffect(() => {
    initializeLenis();

    return () => {
      destroyLenis();
    };
  }, []);
};

export default useLenis;
