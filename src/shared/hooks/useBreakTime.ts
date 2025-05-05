import { useEffect, useState } from "react";

export function useBreakTime(start = "16:30", end = "16:59") {
  const [isBreakTime, setIsBreakTime] = useState(false);

  useEffect(() => {
    const toMinutes = (time: string) => {
      const [h, m] = time.split(":").map(Number);
      return h * 60 + m;
    };

    const startMin = toMinutes(start);
    const endMin = toMinutes(end);

    const check = () => {
      const now = new Date();
      const mins = now.getHours() * 60 + now.getMinutes();

      const inRange =
        startMin <= endMin
          ? mins >= startMin && mins < endMin + 1 // same-day window
          : mins >= startMin || mins < endMin + 1; // overnight window

      setIsBreakTime(inRange);
    };

    check();

    const now = new Date();
    const delay = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    const timeout = setTimeout(() => {
      check();
      const interval = setInterval(check, 60000);
      cleanup = () => clearInterval(interval);
    }, delay);

    let cleanup = () => clearTimeout(timeout);
    return () => cleanup();
  }, [start, end]);

  return isBreakTime;
}
