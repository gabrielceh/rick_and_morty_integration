import styled from 'styled-components';

export const BtnFavContainer = styled.div`
	&.detail {
		width: 40%;
		display: grid;
		place-content: center;
	}
`;

export const BtnFavStyled = styled.button`
	cursor: pointer;
	border: none;
	outline: none;
	background-color: transparent;
	transition: scale 0.05s ease-in-out;

	&:hover {
		scale: 1.2;
	}

	&.detail {
		font-size: ${({ theme }) => theme.fontSize.xl_4};
		padding: 1rem;
		scale: 1.2;
	}
	&:hover.detail {
		animation-name: shake;
		animation-duration: 01s;
		animation-iteration-count: infinite;
	}

	&:active {
		scale: 0.9;
	}

	@keyframes shake {
		0% {
			transform: translate(1px, 1px) rotate(0deg);
		}
		10% {
			transform: translate(-1px, -2px) rotate(-1deg);
		}
		20% {
			transform: translate(-3px, 0px) rotate(1deg);
		}
		30% {
			transform: translate(3px, 2px) rotate(0deg);
		}
		40% {
			transform: translate(1px, -1px) rotate(1deg);
		}
		50% {
			transform: translate(-1px, 2px) rotate(-1deg);
		}
		60% {
			transform: translate(-3px, 1px) rotate(0deg);
		}
		70% {
			transform: translate(3px, 1px) rotate(-1deg);
		}
		80% {
			transform: translate(-1px, -1px) rotate(1deg);
		}
		90% {
			transform: translate(1px, 2px) rotate(0deg);
		}
		100% {
			transform: translate(1px, -2px) rotate(-1deg);
		}
	}
`;
