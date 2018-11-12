import React, { Component } from "react";
import axios from 'axios'; 
import StarWarsDisplay from './StarWarsDisplay'; 

export default class CharacterListContainer extends Component {
	constructor() {
		super()
		this.state = {
			characters: []
		}
	}

	componentDidMount() {
		axios.get(`https://swapi.co/api/people`).then(characters => {
			console.log('characters', characters.data.results)
			this.setState({ characters: characters.data.results })
		}).catch(error => {
			console.log('error', error)
		})
	}

	render() {
		return <StarWarsDisplay characters={this.state.characters} /> 
	}
}
