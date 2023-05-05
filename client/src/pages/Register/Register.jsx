import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/actions/actionUser';
import { validateRegisterForm } from '../../helpers/validation';
import { ToastContext } from '../../context/ToastContext';

import InputTextForm from '../../components/InputForm/InputTextForm';

const initialForm = {
	email: '',
	password: '',
	repeatPassword: '',
};

function Register() {
	const [form, setForm] = useState(initialForm);
	const [errors, setErrors] = useState({});
	const { addToast } = useContext(ToastContext);

	const loader = useSelector((state) => state.loader);
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		if (user.error) {
			addToast({
				title: 'Error',
				description: user.error,
				type: 'error',
			});
		}
	}, [user]);

	const handleChange = (event) => {
		const inputName = event.target.name;
		const value = event.target.value;

		setForm({
			...form,
			[inputName]: value,
		});

		setErrors(
			validateRegisterForm({
				...form,
				[inputName]: value,
			})
		);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		for (let input in form) {
			if (!form[input].trim()) {
				return addToast({
					title: 'Warning',
					description: `Enter all the data`,
					type: 'warning',
				});
			}
		}

		for (let error in errors) {
			if (errors[error]) {
				return addToast({
					title: 'Warning',
					description: `${errors[error]}`,
					type: 'error',
				});
			}
		}

		dispatch(registerUser(form));
	};

	return (
		<div>
			<form
				action=''
				onSubmit={handleSubmit}>
				<InputTextForm
					type='email'
					label='You Email'
					name='email'
					value={form.email}
					handleChange={handleChange}
					error={errors}
				/>

				<InputTextForm
					type='password'
					label='You password'
					name='password'
					value={form.password}
					handleChange={handleChange}
					error={errors}
				/>

				<InputTextForm
					type='password'
					label='Repeat your password'
					name='repeatPassword'
					value={form.repeatPassword}
					handleChange={handleChange}
					error={errors}
				/>

				<button type='submit'>Register</button>
			</form>
		</div>
	);
}

export default Register;
