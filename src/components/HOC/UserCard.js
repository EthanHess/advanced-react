import React, { Component } from "react";
import myHOC from "./myHOC";

class UserCard extends Component {
	render() {
		const { name, id, age, favoriteColor } = this.props.data;
		return (
			<div className="user-card-container">
				<div>Username: {name}</div>
				<div>Id: {id}</div>
				<div>Age: {age}</div>
				<div>favoriteColor: {favoriteColor}</div>
			</div>
		);
	}
}

export default myHOC(UserCard, "/api/user_data");
