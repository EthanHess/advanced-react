import React, { Component } from "react";
import axios from "axios";
import CarListDisplay from "./CarListDisplay";

export default class CarsListContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cars: []
		};
	}

	componentDidMount() {
		axios.get("/api/cars_list").then((cars) => {
			this.setState({
				cars: cars.data
			});
		});
	}

	render() {
		return <CarListDisplay cars={this.state.cars} />;
	}
}
