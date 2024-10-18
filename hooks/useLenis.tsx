import { useEffect } from "react";
import { isAppleDevice } from "@/utils";
import { destroyLenis, initializeLenis } from "@/utils/lenis";

const useLenis = () => {
  useEffect(() => {
    if (!isAppleDevice()) initializeLenis();

    return () => {
      destroyLenis();
    };
  }, []);
};

export default useLenis;
