import React, { Component } from "react";
import ErrorIndicator from "../errorIndicator";

export default class ErrorBoundary extends Component {

    state = {
        hasError: false
    };

    static getDerivedStateFromError(error) {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return { hasError: true };
    }

    componentDidCatch(){
        this.setState({
            hasError: true
        });
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        return this.props.children;
    }
}