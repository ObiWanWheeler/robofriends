import React, { useEffect, useState } from 'react';

import CardList from '../components/CardList.jsx';
import Scroll from "../components/Scroll.jsx";

import SearchBox from '../components/SearchBox.jsx';

import ErrorBoundry from '../components/ErrorBoundry.jsx'

import "./App.css"
import "tachyons";

const robot_endpoint = "https://jsonplaceholder.typicode.com/users";


const App = () => {

    const [robots, setRobots] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {
        fetch(robot_endpoint)
        .then(response => response.json())
        .then(robots => setRobots(robots));
    }, []);

    if (robots.length === 0) {
        return <h1>Loading...</h1>
    }

    const filteredBots = robots.filter(robot => robot.name.toLowerCase().includes(input.trim().toLowerCase()));
    
    return (
        <div className="tc">
            <h1 className="f1">RobotFriends</h1>
            <SearchBox searchChange={(event) => {
                setInput(event.target.value);
            }} />

            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredBots}/>
                </ErrorBoundry>
            </Scroll>
        </div>
    )
    
}

export default App;