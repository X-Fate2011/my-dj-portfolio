import { useEffect, useState } from "react";

export function useIsDesktop(breakpoint = 1280) {
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= breakpoint);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`);
    const update = (e: MediaQueryListEvent) => setIsDesktop(e.matches);

    mediaQuery.addEventListener("change", update);
    setIsDesktop(mediaQuery.matches);
    return () => mediaQuery.removeEventListener("change", update);
  }, [breakpoint]);

  return isDesktop;
}
