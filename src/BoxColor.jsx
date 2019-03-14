import React, {Component} from 'react';

class BoxColor extends Component {
    render() {
        let color = { 'background': `rgb(${this.props.r},${this.props.g},${this.props.b})` };
        return(
            <div style={color}>
                <p>{this.props.r}, {this.props.g}, {this.props.b}</p>
            </div>
        )
    }
}

export default BoxColor