import { Component } from "react";
import { getGenres } from "services/fake";
import { IEntity } from "types";

interface GenresState {
	genres: IEntity.Genre[];
	isLoading: boolean;
}

export default class Genres extends Component<{}, GenresState> {
	state: GenresState = {
		genres: [],
		isLoading: true,
	};

	async componentDidMount() {
		const genres = await getGenres();
		this.setState({ genres, isLoading: false });
	}

	render() {
		const { genres } = this.state;

		return (
			<ul className="list-group">
				{genres.map((genre) => (
					<li key={genre._id} className="list-group-item">
						{genre.name}
					</li>
				))}
			</ul>
		);
	}
}
