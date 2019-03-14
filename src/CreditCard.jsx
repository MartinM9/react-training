import React, {Component} from 'react';

class CreditCard extends Component {
    render() {
        let background = { 'background': (this.props.bgColor) };
        return(
            <div style={background}>
                <p className='type'>{this.props.type}</p>
                <p className='number'>{this.props.number}</p>
                <div className='expiration-div'>
                    <p>Expires {this.props.expirationMonth}/{this.props.expirationYear}</p>
                    <p>{this.props.bank}</p>
                </div>
                <p className='Owner'>{this.props.owner}</p>
            </div>
        )
    }
}

export default CreditCard;