import React, { Component } from "react";
import myHoc from "./myHOC";

class StarWars extends Component {
	render() {
		const characterList = this.props.data.results.map((character) => {
			return (
				<div className="star-wars-char">
					<span>name: {character.name}</span>
					<span>height: {character.height}</span>
					<span>mass: {character.mass}</span>
				</div>
			);
		});
		return <div>{characterList}</div>;
	}
}
export default myHoc(StarWars, "https://swapi.co/api/people/");