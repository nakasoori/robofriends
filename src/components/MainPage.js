import React, { Component } from 'react';
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList'
import { robots } from '../robots';
import ErrorBoundry from '../components/ErrorBoundry'
import './MainPage.css';
import Scroll from '../components/Scroll'
import Header from '../components/Header'

//Using STATE
//State is something that can change and affect our app
//Usually lives within the parent component 
class MainPage extends Component {
	componentDidMount() {
		//console.log(this.props.store.getState())
		this.props.onRequestRobots()
	}

	filterRobots = () => {
		return this.props.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
		})	
	}

	render() {
		const { onSearchChange, robots, isPending } = this.props;
		return (
			<div className='tc'>
				<Header/>
				<SearchBox searchChange={this.props.onSearchChange}/>
				<Scroll>
					{isPending ? <h1>Loading</h1> :
						<ErrorBoundry>
							<CardList robots={this.filterRobots()}/>
						</ErrorBoundry>
					}
				</Scroll>
			</div>
		)
	}
} 

export default MainPage;