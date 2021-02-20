import React from 'react';
import 'tachyons';
import './card.css';


class Card extends React.Component {
    
    render() {
        return(
            <div className="card tc">
                <h1>{this.props.name}</h1>
                <h5>{this.props.description}</h5>
            </div>
        )
    }
}

export default Card;