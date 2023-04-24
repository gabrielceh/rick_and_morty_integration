import styled from 'styled-components';

export const BtnOutlineStyled = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${({ width }) => (width ? width : '50px')};
	height: ${({ height }) => (height ? height : '40px')};
	cursor: pointer;
	padding: 0.4rem 0.7rem;
	background: none;
	border: ${({ theme, color }) => `2px solid ${theme.colors[color]['500']}`};
	color: ${({ theme, color }) => theme.colors[color]['500']};
	border-radius: 5px;
	font-size: ${({ theme }) => theme.fontSize.base};
	transition: scale 0.1s ease-in-out, border 0.1s ease-in-out;

	&:hover {
		scale: 1.1;
		border: ${({ theme, color }) => `2px solid ${theme.colors[color]['600']}`};
		color: ${({ theme, color }) => theme.colors[color]['600']};
	}
	&:active {
		scale: 0.8;
	}
`;
