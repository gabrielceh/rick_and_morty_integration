import { useState, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/actionUser';
import { ToastContext } from '../../context/ToastContext';

import { validateLoginForm } from '../../helpers/validation';
import {
	BtnFormSubmitStyled,
	ErrorFormMessageStyled,
	FormLoginContainerStyled,
	InputContainerStyled,
	InputFormStyled,
	LabelFormStyled,
} from './LoginForm.styled';

const initialState = {
	email: 'gabriel@gmail.com',
	password: '123abcd',
};

function LoginForm() {
	const [userData, setUserData] = useState(initialState);
	const [errors, setErrors] = useState({});
	const { addToast } = useContext(ToastContext);

	const loader = useSelector((state) => state.loader);
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		if (user.error) {
			addToast({
				title: 'Removed',
				description: user.error,
				type: 'error',
			});
		}
	}, [user]);

	const handleChange = (event) => {
		const value = event.target.value;
		const property = event.target.name;

		setUserData({ ...userData, [property]: value });
		setErrors(validateLoginForm({ ...userData, [property]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		for (let input in userData) {
			if (!userData[input].trim()) return window.alert(`Ingrese su ${input}`);
		}

		for (let error in errors) {
			if (errors[error]) return window.alert(`${errors[error]}`);
		}

		dispatch(login(userData));
	};

	return (
		<FormLoginContainerStyled onSubmit={handleSubmit}>
			<InputContainerStyled>
				<LabelFormStyled htmlFor='email'>Email</LabelFormStyled>
				<InputFormStyled
					type='text'
					name='email'
					id='email'
					value={userData.email}
					onChange={handleChange}
					placeholder='Ex: gabriel@gmail.com'
					className={errors.email ? 'error' : ''}
					autoComplete='off'
				/>
				{errors.email ? (
					<ErrorFormMessageStyled>{errors.email}</ErrorFormMessageStyled>
				) : (
					<span></span>
				)}
			</InputContainerStyled>

			<InputContainerStyled>
				<LabelFormStyled htmlFor='password'>Password</LabelFormStyled>
				<InputFormStyled
					type='password'
					name='password'
					id='password'
					value={userData.password}
					onChange={handleChange}
					placeholder='ex: 123abcd'
					className={errors.password ? 'error' : ''}
				/>
				{errors.password ? (
					<ErrorFormMessageStyled>{errors.password}</ErrorFormMessageStyled>
				) : (
					<span></span>
				)}
			</InputContainerStyled>

			<BtnFormSubmitStyled type='submit'>
				{loader ? 'Loading' : 'Login'}
			</BtnFormSubmitStyled>
		</FormLoginContainerStyled>
	);
}

export default LoginForm;
