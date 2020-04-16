import React, { Component } from 'React';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

const GIPHY_API_KEY = '2RNWT8G4JTeXtskdFU8IABq4HETTKX7a';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			gifs: [],
			selectedGifId: 'Zk9mW5OmXTz9e'
		};
	}

	search = query => {
		giphy({ apiKey: GIPHY_API_KEY, https: true }).search(
			{
				q: query,
				rating: 'g',
				limit: 10
			},
			(error, result) => {
				this.setState({ gifs: result.data });
			}
		);
	};

	selectedGif = id => {
		this.setState({
			selectedGifId: id
		});
	};

	render() {
		return (
			<div>
				<div className="left-scene">
					<SearchBar searchFunction={this.search} />
					<div className="selected-gif">
						<Gif id={this.state.selectedGifId} />
					</div>
				</div>
				<div className="right-scene">
					<GifList gifs={this.state.gifs} selectedGif={this.selectedGif} />
				</div>
			</div>
		);
	}
}

export default App;
