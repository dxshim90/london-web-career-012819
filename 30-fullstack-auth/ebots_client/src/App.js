import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import ShopPage from './containers/ShopPage'
import Profile from './containers/Profile'
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

class App extends Component {

	state = {
		currentUser: null
	}

	componentDidMount(){
		const userID = localStorage.getItem("user_id")

		if(userID){
			fetch("http://localhost:3001/api/v1/auto_login", {
				headers: {
					"Authorization": userID
				}
			})
			.then(res => res.json())
			.then(response => {
				if(response.errors){
					alert(response.errors)
				} else {
					this.setCurrentUser(response)
				}
			})
		}
	}

	setCurrentUser = (user) => {
		this.setState({
			currentUser: user
		}, () => {
			localStorage.setItem("user_id", this.state.currentUser.id)
			this.props.history.push(`/users/${this.state.currentUser.id}`)
		})
	}

	render() {
		console.log(this.state.currentUser)
		return (
			<Grid>
				<Navbar />
				<Grid.Row centered>
					<Switch>
						<Route path="/users/:id" component={Profile} />
						<Route path="/shop" component={ShopPage} />
						<Route path="/login" render={(routerProps) => <LoginForm {...routerProps} setCurrentUser={this.setCurrentUser} />} />
						<Route path="/signup" render={(routerProps) => <SignupForm {...routerProps} setCurrentUser={this.setCurrentUser} />}/>
					</Switch>
				</Grid.Row>
			</Grid>
		);
	}
}

export default App;
