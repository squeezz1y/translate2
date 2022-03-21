import React, { Component } from 'react'
import classes from "../styles/Home.module.scss"
import Cards from "../components/Cards"


export default class Home extends Component {
  render() {
	 return (
		<container className={classes.inner}>
			<div className={classes.intro}>
				
		
			</div>
			<div className="container">
			<div className="row">
				<Cards
				title="Number one"
				images="../"
				price="200"
				pupess="$"
				alt="Text"			
				/>
				<Cards
				title="Number one"
				images="../"
				price="200"
				pupess="$"
				alt="Text"			
				/>
				<Cards
				title="Number one"
				images="../"
				price="200"
				pupess="$"
				alt="Text"			
				/>
				<Cards
				title="Number one"
				images="../"
				price="200"
				pupess="$"
				alt="Text"			
				/>

			</div>
		</div>
			
		</container>
	 )
  }
}

