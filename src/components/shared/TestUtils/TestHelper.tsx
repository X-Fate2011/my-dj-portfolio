import { type ReactNode } from "react";
import { render } from "@testing-library/react";
import { LoadingProvider } from "../../../contexts/LoadingContext";

export function renderWithLoadingProvider(ui: ReactNode, initialLoadingCount = 0) {
  return render(<LoadingProvider initialLoading={initialLoadingCount}>{ui}</LoadingProvider>);
}
