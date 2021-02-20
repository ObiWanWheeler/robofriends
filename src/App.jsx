import React from 'react';

import CardList from './CardList.jsx';
import { robots } from "./robots";

import SearchBox from './SearchBox.jsx';

import "./App.css"
import "tachyons";


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: '',
        }
    }

    OnSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const filteredBots = robots.filter(
            robot => {
                return robot.name.toLowerCase().includes(this.state.searchField.trim().toLowerCase());
            });
        return (
            <div className="tc">
                <h1 className="f1">RobotFriends</h1>
                <SearchBox searchChange={this.OnSearchChange} />
                <CardList robots={filteredBots} requestedRobots={this.state.searchField}/>
            </div>
        )
    }
}

export default App;