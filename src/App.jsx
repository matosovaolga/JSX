
import React, { Component } from 'react';
import unsplash from './api/unsplash';
import SearchBar from './components/SearchBar';
import ListItem from './components/ListItem';


class App extends Component {

	state = {
		images: []
	};



	onSearchSubmit = async (term) => {
		const res = await unsplash.get('/search/photos', {
			params: {
				query: term
			}
		});

		this.setState({ images: res.data.results });
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ListItem images={this.state.images} />
			</div>
		)
	};

};

export default App;