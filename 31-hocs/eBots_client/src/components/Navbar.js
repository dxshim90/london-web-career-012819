import React from 'react'
import { Grid, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import withAd from '../hocs/withAd'


class Navbar extends React.Component {
	render(){
		return (
			<Grid.Row>
				<Grid.Column width={16}>
					<Menu>
						<Link className="item" to="/shop">
							Shop
						</Link>
						{ this.props.currentUser 
							?
							<Menu.Menu position="right">
								<Menu.Item >
									Welcome, {this.props.currentUser.name} - ${this.props.currentUser.balance}
								</Menu.Item>
								<Menu.Item onClick={this.props.logOut} >
									Log Out!
								</Menu.Item>
							</Menu.Menu>
							:
							<Menu.Menu position="right">
								<Link className="item" to="/login">
									Login
								</Link>
								<Link className="item" to="/signup">
									Sign Up
								</Link>
							</Menu.Menu>
						}
					</Menu>
				</Grid.Column>
			</Grid.Row>
		)
	}
}

export default withAd(Navbar)