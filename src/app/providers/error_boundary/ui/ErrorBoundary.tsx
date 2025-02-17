import React, { ReactNode, Suspense } from "react";
import { ErrorPage } from "@/widget/error_page";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log("Error: ", error, "ErrorInfo: ", errorInfo);
  }

  render(): ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Suspense fallback="">
          <ErrorPage className="app" />
        </Suspense>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
