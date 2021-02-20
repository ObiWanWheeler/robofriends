import React from 'react';

import CardList from './CardList.jsx';

import SearchBox from './SearchBox.jsx';

import "./App.css"
import "tachyons";

const robot_endpoint = "https://jsonplaceholder.typicode.com/users";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: '',
        }
    }

    componentDidMount() {
        fetch(robot_endpoint)
        .then(response => response.json())
        .then(users => this.setState( {robots: users }));
    }

    render() {

        if (this.state.robots.length === 0) {
            return <h1>Loading...</h1>
        }

        const filteredBots = this.filterRobots();

        return (
            <div className="tc">
                <h1 className="f1">RobotFriends</h1>
                <SearchBox searchChange={this.OnSearchChange} />
                <CardList robots={filteredBots} requestedRobots={this.state.searchField}/>
            </div>
        )
    }

    filterRobots() {
        return this.state.robots.filter(
            robot => {
                return robot.name.toLowerCase().includes(this.state.searchField.trim().toLowerCase());
            });
    }

    OnSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    };
}

export default App;