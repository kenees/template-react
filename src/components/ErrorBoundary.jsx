import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError() {
        // 更新 state 使下一次渲染能够显示降级后的 UI
        return { hasError: true };
      }

    componentDidCatch(error, errorInfo) {
        // 你同样可以将错误日志上报给服务器
        this.setState({
            error,
            errorInfo,
        })
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                <h2>Something went wrong.</h2>
                <details style={{whiteSpace: "pre-wrap"}}>
                    {this.state.error && this.state.error.toString()}
                    <br/>
                    {this.state.errorInfo?.componentStack}
                </details>
            </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;