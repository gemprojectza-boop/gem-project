import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-red-50 text-red-800 p-8 font-sans">
          <h1 className="text-4xl font-bold mb-4">Something went wrong.</h1>
          <p className="text-lg mb-8 text-center">
            We're sorry for the inconvenience. Please try refreshing the page or navigating back home.
          </p>
          <div className="bg-white p-4 mt-4 rounded-lg shadow-lg w-full max-w-3xl text-center">
              <h2 className="text-xl font-semibold text-brand-text-primary mb-2">Error Details</h2>
              <pre className="text-center text-sm text-gray-700 bg-gray-100 p-3 rounded overflow-auto" style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo?.componentStack}
              </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;