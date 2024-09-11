import React from "react";
import {IProp, IState} from '../commonComponents/types';


/* 
References
https://www.pluralsight.com/guides/render-a-react-component-with-state-and-props-using-typescript

IMP: 
https://www.w3schools.com/react/react_lifecycle.asp
*/

export class LifeCycle extends React.Component<IProp, IState> {

    constructor(prop: IProp) {
        super(prop)
        this.state = {count: 0};
        console.log("LifeCycle.constructor called");
    }

    increment = () => {
        this.setState( {
            count : this.state.count + 1
        })
    }

    render(): React.ReactNode {
        console.log("LifeCycle.render called")
        return <>
            <label>Class Life cycle prop State={this.state.count} prop={this.props.count}</label>
            <button onClick={this.increment}>Increment</button>
        </>
    }

    componentDidMount(): void {
        console.log("LifeCycle.componentDidMount")    
    }

    componentWillUnmount(): void {
        console.log("LifeCycle.componentWillUnmount")    
    }

    componentDidUpdate(prevProps: Readonly<IProp>, prevState: Readonly<IState>, snapshot?: any): void {
        // This life cycle method  is called after render.
        console.log('Component did udpated')
    }
}

export default LifeCycle