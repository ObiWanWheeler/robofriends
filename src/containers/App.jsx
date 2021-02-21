import React from 'react';

import CardList from '../components/CardList.jsx';
import Scroll from "../components/Scroll.jsx";

import SearchBox from '../components/SearchBox.jsx';

import ErrorBoundry from '../components/ErrorBoundry.jsx'

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
        const { robots, searchField } = this.state;

        if (robots.length === 0) {
            return <h1>Loading...</h1>
        }

        const filteredBots = this.filterRobots();

        return (
            <div className="tc">
                <h1 className="f1">RobotFriends</h1>
                <SearchBox searchChange={this.OnSearchChange} />

                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredBots} requestedRobots={searchField}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    }

    filterRobots() {
        const { robots, searchField } = this.state;
        return robots.filter(
            robot => {
                return robot.name.toLowerCase().includes(searchField.trim().toLowerCase());
            });
    }

    OnSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    };
}

export default App;