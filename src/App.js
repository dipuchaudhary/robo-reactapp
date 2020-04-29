import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
			SearchField: ''	
				
		}
	}

	onSearchChange = (event) => {
		this.setState({ SearchField: event.target.value });
		
	}
	render() {
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.SearchField.toLowerCase())
		})
		return (
			<div className='tc'>
				<h1 className='bg-lightest-blue'>Robo Friend</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList robots={filteredRobots} />
			</div>
		);
	}
	
}
export default App;