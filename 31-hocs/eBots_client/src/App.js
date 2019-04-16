import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import ShopPage from './containers/ShopPage'
import Profile from './containers/Profile'
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import withBasic from './hocs/withBasic'


class App extends Component {

	state = {
		currentUser: null
	}

	deduct = (price) => {
		this.setState({
			currentUser: {...this.state.currentUser, balance: this.state.currentUser.balance - price }
		})
	}

	logOut = () => {
		localStorage.removeItem("token")

		this.setState({
			currentUser: null
		}, () => this.props.history.push("/login"))
	}

	componentDidMount(){
		const token = localStorage.getItem("token")

		if(token){
			fetch("http://localhost:3001/api/v1/auto_login", {
				headers: {
					"Authorization": token
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

	login = (response) => {
		this.setState({
			currentUser: response.user
		}, () => {
			localStorage.setItem("token", response.token)
			this.props.history.push("/profile")
		})
	}



	setCurrentUser = (response) => {
		this.setState({
			currentUser: response.user
		}, () => {
			this.props.history.push(this.props.location.pathname)
		})
	}

	render() {
		return (
			<Grid>
				<Navbar logOut={this.logOut} currentUser={this.state.currentUser}/>
				<Grid.Row centered>
					<Switch>
						<Route path="/profile" render={(routerProps) => <Profile {...routerProps} currentUser={this.state.currentUser} />}/>
						<Route path="/shop" render={(routerProps) => <ShopPage {...routerProps} deduct={this.deduct} />} />} />
						<Route path="/login" render={(routerProps) => <LoginForm {...routerProps} login={this.login} />} />
						<Route path="/signup" render={(routerProps) => <SignupForm {...routerProps} login={this.login} />}/>
					</Switch>
				</Grid.Row>
			</Grid>
		);
	}
}

export default App;
