import React, { Component } from "react";
import axios from "axios";

export default class DataFetcher extends Component {
	constructor(props) {
		super(props) 
		this.state = {
			data: null
		}	
	}

	fetchData = () => {
		axios.get(this.props.url).then(stuff => {
			this.setState({ 
				data: stuff.data 
			})
		}).catch(error => {
			console.log('error', error)
		})
	}

	render() {
		return <div>
			{ 
			this.state.data ? this.props.render(this.state.data)
			: this.fetchData() 
			}
		</div>;
	}
}
