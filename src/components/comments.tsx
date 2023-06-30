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
}

interface CommentsState {
	comments: Comment[];
	isLoading: boolean;
}

export default class Comments extends Component<CommentsProps, CommentsState> {
	render() {
		const { postID } = this.props;

		return <div>postID = {this.props.postID}</div>;
	}
}
