import styled from 'styled-components';

function ErrorMessage({ message, size = 'base' }) {
	return <ErrorStyled size={size}>Error: {message}</ErrorStyled>;
}

export default ErrorMessage;

const ErrorStyled = styled.h2`
	padding: 1rem;
	text-align: center;
	font-size: ${({ theme, size }) => theme.fontSize[size]};
	color: ${({ theme }) => theme.colors.red['500']};
	font-weight: bold;
`;
