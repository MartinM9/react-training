import React, {Component} from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            clickCount: 0
        }
    }

    incrementFunction = () => {
        this.setState({
            clickCount: this.state.clickCount + 1
        })
    }

    decrementFunction = () => {
        this.setState({
            clickCount: this.state.clickCount - 1
        })
    }

    render() {
        return(
            <div>
                <h1>Counter: {this.state.clickCount}</h1>
                <div>
                    <button onClick={() => this.incrementFunction()}>Increment</button>
                    <button onClick={() => this.decrementFunction()}>Decrement</button>
                </div>
            </div>
        )
    }
}

export default Counter