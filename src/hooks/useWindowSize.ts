import { Breakpoints } from "@/theme/themen.util";
import { useEffect, useState } from "react";

export type BreakpointKey = keyof typeof Breakpoints;

const breakpointVals = Object.keys(Breakpoints)
  .map((bp) => ({ bp, val: Breakpoints[bp as BreakpointKey] }))
  .sort((a, b) => b.val - a.val);

export type WindowSizeShape = {
  width: number;
  height: number;
  breakpoint: BreakpointKey;
};
export const useWindowSize = (): WindowSizeShape => {
  const [windowSize, setWindowSize] = useState<WindowSizeShape>({
    width: 0,
    height: 0,
    breakpoint: "xs",
  });
  useEffect(() => {
    // Handler to call on window resize
    const onResize = () => {
      // Set window width/height to state

      const width = window.innerWidth;
      const height = window.innerHeight;

      let i = 0;
      while (width < breakpointVals[i].val) {
        i += 1;
      }
      const breakpoint = breakpointVals[i].bp as BreakpointKey;

      setWindowSize({
        width,
        height,
        breakpoint,
      });
    };
    window.addEventListener("resize", onResize);
    onResize();
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return windowSize;
};

export default useWindowSize;
