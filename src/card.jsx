import React from 'react';

import 'tachyons';
import './card.css';


class Card extends React.Component {
    
    render() {
        const { name, username, email, id } = this.props;
        return(
            <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <img src={`https://robohash.org/${this.props.id}?200x200`} alt="robot img"></img>
                <h2>
                    {id} <br/>
                    {name} <br/>
                    {username}
                </h2>
                <h5>
                    {email}
                </h5>
            </div>
        )
    }
}

export default Card;