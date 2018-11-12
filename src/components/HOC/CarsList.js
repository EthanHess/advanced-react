import React, { Component } from "react";
import myHOC from './myHOC'; 
import UserCard from './UserCard'; 

class CarsList extends Component {
	render() {
		const carsList = this.props.data.map((car) => {
			return <div className="car" key={car.id}>
				<h1>{car.make}</h1>
				<h2>{car.model}</h2>
				<div>{car.year}</div>
				<img src={car.image} />
				<div>Mileage: {car.mileage}</div>
			</div>
		})
		return <div className="carlist-container">
			<div>{carsList}</div>
			<UserCard />
		</div>;
	}
}

export default myHOC(CarsList, "/api/cars_list");
