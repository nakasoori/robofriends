import React, { Component } from 'react';
import { connect } from 'react-redux'
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList'
import { robots } from '../robots';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';
import Scroll from '../components/Scroll'
import Header from '../components/Header'

import { setSearchField, requestRobots } from '../actions'

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

//Using STATE
//State is something that can change and affect our app
//Usually lives within the parent component 
class App extends Component {
	componentDidMount() {
		//console.log(this.props.store.getState())
		this.props.onRequestRobots()
	}

	render() {
		const { searchField, onSearchChange, robots, isPending } = this.props;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})	

			return isPending ?
			<h1>Loading</h1> :
			(
				<div className='tc'>
					<Header/>
					<SearchBox searchChange={this.props.onSearchChange}/>
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filteredRobots}/>
						</ErrorBoundry>
					</Scroll>
				</div>
			);
	}
} 

/*
const App = () => {
	return (
		<div className='tc'>
			<h1>RoboFriends</h1>
			<SearchBox />
			<CardList robots={robots}/>
		</div>
	);
}
*/
export default connect(mapStateToProps, mapDispatchToProps)(App);