import { createContext, useState, type ReactNode, useCallback, useEffect } from "react";
import { LoadingOverlay } from "../components/shared/LoadingOverlay/LoadingOverlay";

type LoadingContextType = {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
};

type LoadingProviderProps = {
  children: ReactNode;
  initialLoading?: number;
};

const LoadingContext = createContext<LoadingContextType | null>(null);

export function LoadingProvider({ children, initialLoading = 0 }: LoadingProviderProps) {
  const [loadingCount, setLoadingCount] = useState(initialLoading);
  const [visible, setVisible] = useState(false);

  const startLoading = useCallback(() => setLoadingCount((count) => count + 1), []);
  const stopLoading = useCallback(() => setLoadingCount((count) => Math.max(count - 1, 0)), []);

  const isLoading = loadingCount > 0;
  useEffect(() => {
    if (loadingCount === 0 && visible) {
      const timer = setTimeout(() => setVisible(false), 500);
      return () => clearTimeout(timer);
    }
  }, [loadingCount, visible]);

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      <LoadingOverlay isLoading={isLoading} />
      {children}
    </LoadingContext.Provider>
  );
}

export { LoadingContext };
