import axios from "axios";
import { Component } from "react";

interface Comment {
	id: number;
	postId: number;
	name: string;
	email: string;
	body: string;
}

interface CommentsProps {
	postID: number | null;
	onExit: () => void;
}

interface CommentsState {
	comments: Comment[];
	isLoading: boolean;
}

const baseURL = "https://jsonplaceholder.typicode.com";

export default class Comments extends Component<CommentsProps, CommentsState> {
	state: CommentsState = {
		comments: [],
		isLoading: true,
	};

	getComments = async () => {
		this.setState({ isLoading: true });
		const { data: comments } = await axios(`${baseURL}/comments?postId=${this.props.postID}`, {
			headers: {
				"x-auth-token": "your-token",
			},
		});

		this.setState({ comments, isLoading: false });
	};

	async componentDidMount() {
		this.getComments();
	}

	async componentDidUpdate(prevProps: Readonly<CommentsProps>, prevState: Readonly<CommentsState>) {
		if (prevProps.postID !== this.props.postID) this.getComments();
	}

	render() {
		const { postID, onExit } = this.props;
		const { isLoading, comments } = this.state;

		if (isLoading)
			return (
				<div className="d-flex justify-content-center">
					<div className="spinner-border">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			);

		return (
			<div>
				<h1 className="text-center">
					Post-{postID} (
					<button className="btn btn-danger" onClick={onExit}>
						Exit
					</button>
					)
				</h1>
				<table className="table table-dark table-striped table-bordered">
					<thead>
						<tr>
							<th>#</th>
							<th>name</th>
							<th>body</th>
							<th>email</th>
						</tr>
					</thead>
					<tbody>
						{comments.map(({ id, name, body, email }) => (
							<tr key={id}>
								<td>{id}</td>
								<td>{name}</td>
								<td>{body}</td>
								<td>{email}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}
