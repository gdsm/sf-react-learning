import React, { Component, ErrorInfo, ReactNode } from 'react'

/*
- Error boundaries can only be used with class components.
*/

interface ErrorState {
    hasError: Boolean
}

interface ErrorProp {
    hasError: Boolean
}

export default class ErrorBoundary extends React.Component<ErrorProp, ErrorState> {

    constructor(props: ErrorProp) {
        super(props)
        this.state = {hasError: false}
    }

    public static getDerivedStateFromError(error: Error): ErrorState {
        console.log("getDerivedStateFromError")
        return {hasError: true}
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.error("Uncaught error:", error, errorInfo);
    }

    render(): React.ReactNode {
        if (this.state.hasError) {
            return <label>Some Error has occured</label>
        } else {
            return <>
                <label>Yeah !! No Error</label>
            </>
        }
    }
}