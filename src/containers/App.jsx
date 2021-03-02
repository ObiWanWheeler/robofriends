import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import CardList from '../components/CardList.jsx';
import Scroll from "../components/Scroll.jsx";

import SearchBox from '../components/SearchBox.jsx';

import ErrorBoundry from '../components/ErrorBoundry.jsx'

import "./App.css"
import "tachyons";
import { setSearchField } from '../actions.js';

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    };
};

const mapDispatchToProps = dispatch => {
    return { 
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    };
};

const robot_endpoint = "https://jsonplaceholder.typicode.com/users";


const App = ({ searchField, onSearchChange }) => {

    const [robots, setRobots] = useState([])

    useEffect(() => {
        fetch(robot_endpoint)
        .then(response => response.json())
        .then(robots => setRobots(robots));
    }, []);

    if (robots.length === 0) {
        return <h1>Loading...</h1>
    }

    const filteredBots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.trim().toLowerCase()));
    
    return (
        <div className="tc">
            <h1 className="f1">RobotFriends</h1>
            <SearchBox searchChange={onSearchChange} />

            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredBots}/>
                </ErrorBoundry>
            </Scroll>
        </div>
    )
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App);