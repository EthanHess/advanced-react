import React, { Component } from "react";

class CarsListDisplay extends Component {
	render() {
		const carsList = this.props.cars.map((car) => {
			return (
				<div className="car" key={car.id}>
					<h1>{car.make}</h1>
					<h2>{car.model}</h2>
					<div>{car.year}</div>
					<img src={car.image} />
					<div>Mileage: {car.mileage}</div>
				</div>
			);
		});
		return (
			<div className="carlist-container">
				<div>{carsList}</div>
			</div>
		);
	}
}

export default CarsListDisplay;
