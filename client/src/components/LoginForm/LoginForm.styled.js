import styled from 'styled-components';

export const FormLoginContainerStyled = styled.form`
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

export const InputContainerStyled = styled.div`
	display: grid;
	align-items: start;
`;

export const InputFormStyled = styled.input`
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
	transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;

	&.error {
		border: ${({ theme }) => `2px solid ${theme.colors.red['400']}`};
	}

	&:focus {
		outline: ${({ theme }) => `2px solid ${theme.colors.yellow['500']}`};
		border: 2px solid transparent;
	}
`;

export const LabelFormStyled = styled.label`
	align-self: center;
	color: ${({ theme }) => theme.colors.emerald['500']};
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: 700;
	padding-left: 0.5rem;
`;

export const ErrorFormMessageStyled = styled.span`
	text-align: center;
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: bold;
	color: ${({ theme }) => theme.colors.red['400']};
	align-self: start;
`;

export const BtnFormSubmitStyled = styled.button`
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
			scale: 1;
			background: ${({ theme }) => theme.colors.yellow['100']};
		}

		100% {
			scale: 1.05;
			background: ${({ theme }) => theme.colors.yellow['300']};
		}
	}
`;
