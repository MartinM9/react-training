import React, {Component} from 'react';

class Random extends Component {
    render() {
        return(
            <p>Random value between {this.props.min} and {this.props.max} => {Math.floor(Math.random() * (`${this.props.max}` - `${this.props.min}` + 1) + `${this.props.min}`)}</p>
        )
    }
}

export default Random;