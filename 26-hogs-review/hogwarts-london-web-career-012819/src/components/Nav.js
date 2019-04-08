import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {

	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>

			<div>
				<label htmlFor="greased">Greased: </label>
				<input 
					onChange={props.handleCheck} 
					checked={props.greased} 
					type="checkbox" 
					name="greased" />
				<label>Sort: </label>
				<select onChange={props.handleSortChange} name="sortValue">
					<option value="none">No Sort</option>
					<option value="name">Name</option>
					<option value="weight">Weight</option>
				</select>
			</div>
		</div>
	)
}

export default Nav
