import React, {Component} from 'react';

class Greetings extends Component {
    render() {
        if(this.props.lang === 'de') {
            return (
                <div>
                    <p>Guten tag!</p>
                </div>)
        } else if(this.props.lang === 'nl') {
            return (
                <div>
                    <p>Goedendag</p>
                </div>
            )
        } else if(this.props.lang === 'sk') {
            return (
                <div>
                    <p>Dobry den</p>
                </div>
            )
        } else {
            return (
                <div>
                    <p>Choose from 'de', 'nl' or 'sk'</p>
                </div>
            )
        }
    }
}

export default Greetings