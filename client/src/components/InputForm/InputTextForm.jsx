import React from 'react';
import { ErrorFormMessageStyled } from '../LoginForm/LoginForm.styled';

function InputTextForm({ type, label, name, value, error, handleChange }) {
	return (
		<div>
			<label htmlFor='email'>{label}</label>
			<input
				type={type}
				name={name}
				id='email'
				value={value}
				onChange={handleChange}
			/>
			{error[name] ? <ErrorFormMessageStyled>{error[name]}</ErrorFormMessageStyled> : <span></span>}
		</div>
	);
}

export default InputTextForm;
