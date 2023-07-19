import { ChangeEventHandler, Component, FormEventHandler, HTMLInputTypeAttribute } from "react";
import { IEntity } from "types";

import { Input, Loader, Select } from ".";

export default class Form<FormProps, FormState> extends Component<FormProps, FormState> {
	handleSubmit: FormEventHandler = async (e) => {
		e.preventDefault();
		// @ts-ignore
		this.onSubmit(this.state);
	};

	handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = ({ target }) => {
		this.setState({ [target.name]: target.value } as unknown as FormState);
	};

	renderSelect = (name: keyof FormState, label: string, options: IEntity.Genre[]) => (
		<Select
			name={name as string}
			label={label}
			value={this.state[name] as string}
			onChange={this.handleChange}
			options={options}
		/>
	);

	renderSubmit = (label: string, isLoading = false) => (
		<button className="btn btn-primary" disabled={isLoading}>
			{isLoading ? <Loader /> : label}
		</button>
	);

	renderInput = (name: keyof FormState, label: string, type?: HTMLInputTypeAttribute) => (
		<Input
			name={name as string}
			label={label}
			type={type}
			value={this.state[name] as string}
			onChange={this.handleChange}
		/>
	);
}
