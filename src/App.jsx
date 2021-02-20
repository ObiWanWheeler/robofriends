import React from 'react';
import CardList from './CardList.jsx';
import { robots } from "./robots";


class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <h1>RobotFriends</h1>
                
                <CardList robots={robots}/>
            </React.Fragment>
        )
    }
}

export default App;