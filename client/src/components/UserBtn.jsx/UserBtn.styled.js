import styled from 'styled-components';

export const UserHeaderContainer = styled.div`
	position: relative;
`;

export const UserBtnStyled = styled.div`
	position: relative;
	cursor: pointer;
	width: 1.5rem;
	height: 1.5rem;
	overflow: hidden;
	background-color: ${({ theme }) => theme.colors.slate['200']};
	border-radius: 100%;
	outline: ${({ theme }) => `3px solid ${theme.colors.slate['50']}`};

	& svg {
		position: relative;
		left: -0.25rem;
		fill: ${({ theme }) => theme.colors.slate['300']};
	}
`;

export const MenuUserHeader = styled.nav`
	position: absolute;
	top: 50px;
	left: -135px;
	overflow: hidden;
	background-color: ${({ theme }) => `${theme.body}ee`};
	backdrop-filter: blur(5px);
	border: ${({ theme }) => `1px solid ${theme.colors.emerald['300']}`};
	border-radius: 10px;
	transition: background-color 0.5s ease-in-out;

	animation-name: start;
	animation-duration: 0.3s;
	animation-timing-function: ease-in-out;
	animation-iteration-count: 1;
	animation-fill-mode: forwards;

	@keyframes start {
		0% {
			width: 0%;
			opacity: 0;
			box-shadow: ${({ theme }) => `0px 0px 0px ${theme.colors.emerald['50']}`};
		}

		100% {
			width: 200px;
			opacity: 1;
			box-shadow: ${({ theme }) =>
				`0px 0px 10px ${theme.colors.emerald['500']}`};
		}
	}
`;

export const MenuUserITems = styled.div`
	cursor: pointer;
	padding: 1rem 1rem;
	border-bottom: ${({ theme }) => `1px solid ${theme.colors.emerald['300']}`};
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;

	&:nth-last-child(1) {
		border-bottom: none;
	}

	&:hover {
		color: ${({ theme }) => theme.colors.yellow['400']};
	}

	&::selection {
		color: ${({ theme }) => theme.colors.emerald['500']};
		background-color: ${({ theme }) => theme.colors.yellow['400']};
	}
`;
