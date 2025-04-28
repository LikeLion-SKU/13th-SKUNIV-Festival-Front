import { useRef, useCallback } from "react";

const useClicks = (
  targetClicks: number,
  threshold: number = 1000,
  cb: () => void
): (() => void) => {
  // we’ll keep count and timer in refs so updates are immediate
  const clicksRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const reset = useCallback(() => {
    clicksRef.current = 0;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const handleClick = useCallback(() => {
    // on first click, start/reset the timer
    if (clicksRef.current === 0) {
      timerRef.current = setTimeout(() => {
        reset();
      }, threshold);
    }

    // bump our click count
    clicksRef.current += 1;

    // if we’ve reached the goal, fire cb and reset
    if (clicksRef.current >= targetClicks) {
      cb();
      reset();
    }
  }, [threshold, targetClicks, cb, reset]);

  return handleClick;
};

export default useClicks;
