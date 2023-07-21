import { NavigateFunction } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Auth } from "services";
import { IApi } from "types";
import * as yup from "yup";

import { Form } from "components";

interface RegisterState extends IApi.Auth.Register.Request {
	errors: Partial<IApi.Auth.Register.Request>;
}

interface RegisterProps {
	navigate: NavigateFunction;
}

export default class Register extends Form<RegisterProps, RegisterState> {
	schema = yup.object({
		email: yup.string().email().label("Email").required(),
		password: yup.string().min(5).trim().label("Password"),
		name: yup.string().min(5).trim().label("Name"),
	});

	state: RegisterState = {
		email: "",
		password: "",
		name: "",
		errors: {},
	};

	onSubmit = async ({ name, email, password }: RegisterState) => {
		try {
			await Auth.Register({ name, email, password });
			toast.success("Successfully registered");
			this.props.navigate("/login");
		} catch (err: any) {
			toast.error(err?.response?.data);
		}
	};

	render() {
		return (
			<>
				<h1>Register</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("email", "Email")}
					{this.renderInput("name", "Name")}
					{this.renderInput("password", "Password", "password")}
					{this.renderSubmit("Register")}
				</form>
			</>
		);
	}
}
