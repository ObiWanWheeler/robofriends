import React from 'react';

class ErrorBoundry extends React.Component {

    constructor() {
        super();
        this.state = {
            hasError: false
        };
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oops. Look's like something went wrong. Our bad!</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundry;