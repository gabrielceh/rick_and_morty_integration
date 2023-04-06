import { useState } from 'react';
import styled from 'styled-components';
import { validateLoginForm } from '../helpers/validation';

const initialState = {
	email: '',
	password: '',
};

function LoginForm({ login }) {
	const [userData, setUserData] = useState(initialState);
	const [errors, setErrors] = useState({});

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

		login(userData);
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

			<BtnFormSubmitStyled type='submit'>Submit</BtnFormSubmitStyled>
		</FormLoginContainerStyled>
	);
}

export default LoginForm;

const FormLoginContainerStyled = styled.form`
	/* background-color: ${({ theme }) => theme.colors.yellow['100']}; */
	height: 350px;
	width: 80%;
	max-width: 400px;
	min-width: 250px;
	color: ${({ theme }) => theme.colors.slate['800']};
	padding: 2rem 1.5rem;
	display: grid;
	flex-direction: column;
	border-radius: 5px;
	gap: 1rem;
`;

const InputContainerStyled = styled.div`
	display: grid;
	align-items: start;
`;

const InputFormStyled = styled.input`
	width: 100%;
	height: 45px;
	padding: 0 1rem;
	background-color: ${({ theme }) => theme.body};
	font-family: 'ChakraPetch';
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: 500;
	color: ${({ theme }) => theme.text};
	border-radius: 10px;
	border: ${({ theme }) => `1px solid ${theme.colors.gray['300']}`};
	outline: none;

	&.error {
		border: ${({ theme }) => `2px solid ${theme.colors.red['400']}`};
	}

	&:focus {
		outline: ${({ theme }) => `2px solid ${theme.colors.yellow['500']}`};
		border: 2px solid transparent;
	}
`;

const LabelFormStyled = styled.label`
	align-self: center;
	color: ${({ theme }) => theme.colors.emerald['500']};
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: 700;
	padding-left: 0.5rem;
`;

const ErrorFormMessageStyled = styled.span`
	text-align: center;
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: bold;
	color: ${({ theme }) => theme.colors.red['400']};
	align-self: start;
`;

const BtnFormSubmitStyled = styled.button`
	cursor: pointer;
	width: 100%;
	height: 40px;
	border: none;
	background: ${({ theme }) => theme.colors.yellow['200']};
	border-radius: 10px;
	color: ${({ theme }) => theme.colors.emerald['700']};
	font-family: 'ChakraPetch';
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: 700;

	&:hover {
		animation-name: buttonScale;
		animation-iteration-count: infinite;
		animation-duration: 2s;
		animation-timing-function: ease-in-out;
		animation-direction: alternate;
	}

	@keyframes buttonScale {
		0% {
			scale: 0.9;
			background: ${({ theme }) => theme.colors.yellow['100']};
		}

		50% {
			scale: 1;
			background: ${({ theme }) => theme.colors.yellow['200']};
		}

		100% {
			scale: 1.1;
			background: ${({ theme }) => theme.colors.yellow['300']};
		}
	}
`;
