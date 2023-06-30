import { Component } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";

interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

interface PostsState {
	posts: Post[];
	isLoading: boolean;
}

interface PostsProps {
	onView: (postID: number) => void;
}

export default class Posts extends Component<PostsProps, PostsState> {
	state: PostsState = {
		posts: [],
		isLoading: true,
	};

	async componentDidMount() {
		const { data: posts } = await axios(`${baseURL}/posts`);

		this.setState({ posts, isLoading: false });
	}

	render() {
		const { posts, isLoading } = this.state;

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
				<h1 className="text-center">Posts</h1>
				<table className="table table-dark table-striped table-bordered">
					<thead>
						<tr>
							<th>#</th>
							<th>title</th>
							<th>body</th>
							<th>actions</th>
						</tr>
					</thead>
					<tbody>
						{posts.map((post) => (
							<tr key={post.id}>
								<td>{post.id}</td>
								<td>{post.title}</td>
								<td>{post.body}</td>
								<td>
									<button className="btn btn-primary" onClick={() => this.props.onView(post.id)}>
										😎
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}
