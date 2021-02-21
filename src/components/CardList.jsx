import Card from './Card.jsx'
import React from 'react';


class CardList extends React.Component {
    
    render(){
        return(
            [this.props.robots.map(robot => {
                return (
                    <Card 
                        key={robot.id} 
                        id={robot.id} 
                        name={robot.name} 
                        username={robot.username} 
                        email={robot.email}
                    />
                    );
            })]  
        )   
    }
}

export default CardList;