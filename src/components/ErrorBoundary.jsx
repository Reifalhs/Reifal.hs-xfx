import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state sehingga render fallback UI saat terjadi error
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Anda dapat melaporkan error ke layanan pelacakan error di sini, seperti Sentry atau LogRocket
        console.error("Error caught by ErrorBoundary: ", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Anda dapat merender fallback UI apa pun
            return <h1>Something went wrong. Please try again later.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
