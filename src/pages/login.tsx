import { config } from "config";
import { toast } from "react-hot-toast";
import { Auth } from "services";
import { IEntity } from "types";

import { Form } from "components";

interface LoginState {
	email: string;
	password: string;
}

interface LoginProps {
	onLogin: (user: IEntity.User) => void;
}

export default class Login extends Form<LoginProps, LoginState> {
	state: LoginState = {
		email: "",
		password: "",
	};

	onSubmit = async ({ email, password }: LoginState) => {
		try {
			const { data } = await Auth.Login({ email, password });

			const accessToken = data.data;

			localStorage.setItem(config.tokenKEY, accessToken);
			const { data: user } = await Auth.GetMe();

			toast.success(`Hi 👋🏻, ${user?.name}`);
			this.props.onLogin(user);
		} catch (err: any) {
			toast.error(err?.response?.data);
		}
	};

	render() {
		return (
			<>
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("email", "Email")}
					{this.renderInput("password", "Password", "password")}
					{this.renderSubmit("Login")}
				</form>
			</>
		);
	}
}
