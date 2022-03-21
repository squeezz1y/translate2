import React from "react";
import "./Cards"
import "./Cards.scss"



export default function Cards(props) {
	   let newClassName = `color_bg  ${props.alt}`
		let bg_img = `url(${props.image})`
		let { title,  price, pupess, alt} = props
	return (
		
		<div>
			<div className="card">
			<div className="wrapper">
				<div className={newClassName}></div>
				<div className="card_img" style={{"backgroundImage": bg_img }}></div>
				<div className="heart"></div>
				<div className="cardInfo">
					<h1>{title}</h1>
					<p>{alt}</p>
				</div>
				<div className="action">
					<div className="priceGroup">
						<p>{pupess}</p>
						<p className="price">{price}</p>
					</div>
				</div>
			</div>

			</div>
		</div>
		
	)
}