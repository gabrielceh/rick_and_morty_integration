import { useContext, useEffect, useState } from 'react';
// import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../redux/actions';

import { DarkModeContext } from '../context/DarkModeContext';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

function Card2({ id, name, status, species, gender, origin, image, onClose }) {
	const [isFav, setIsFav] = useState(false);
	const { darkMode } = useContext(DarkModeContext);

	const myFavorites = useSelector((state) => state.myFavorites);
	const dispatch = useDispatch();

	const statusIcon = {
		Alive: '🟢',
		Dead: '🔴',
		unknown: '🔘',
	};

	useEffect(() => {
		myFavorites.forEach((fav) => {
			if (fav.id === id) {
				setIsFav(true);
				return;
			}
		});
	}, []);

	const handleClose = (event) => {
		event.preventDefault();
		console.log('close');
		onClose(id);
		dispatch(removeFav(id));
	};

	const handleFavorite = (event) => {
		event.preventDefault();
		if (isFav) {
			setIsFav(false);
			dispatch(removeFav(id));
		} else {
			setIsFav(true);
			dispatch(
				addFav({
					id,
					name,
					status,
					species,
					gender,
					origin,
					image,
				})
			);
		}
	};

	return (
		<Link to={`/detail/${id}`}>
			<CardStyled darkMode={darkMode}>
				<CarsContainerStyled>
					<ImgCardStyled
						src={image}
						alt={name}
					/>
					<InfoContainerStyled>
						<InfoHeaderStyled>
							<span title={status}>{statusIcon[status]}</span>
							<h3>{name}</h3>
						</InfoHeaderStyled>
						<InfoBodyStyled>
							<InfoTextStyled>{species}</InfoTextStyled>
							<InfoTextStyled>{gender}</InfoTextStyled>
							<InfoTextStyled>Location: {origin.name}</InfoTextStyled>
						</InfoBodyStyled>
						<div>
							<ButtonCloseCardStyled onClick={handleClose}>
								✖️
							</ButtonCloseCardStyled>
							<ButtonCloseCardStyled onClick={handleFavorite}>
								{isFav ? '💚' : '🤍'}
							</ButtonCloseCardStyled>
						</div>
					</InfoContainerStyled>
				</CarsContainerStyled>
			</CardStyled>
		</Link>
	);
}

// const mapStateToProps = (state) => {
// 	return {
// 		myFavorites: state.myFavorites,
// 	};
// };

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		addFav: () => dispatch(addFav()),
// 		removeFav: () => dispatch(removeFav()),
// 	};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Card2);

export default Card2;

const moveFrames = keyframes`
0%{
	scale:1;
}
50%{
	scale:0.9
}
100%{
	/* transform: rotate(360deg); */
	scale: 1;
}
`;

const CardStyled = styled.article`
	cursor: pointer;
	position: relative;
	width: 300px;
	height: 300px;
	transition: box-shadow 0.3s ease-in-out, border 0.3s ease-in-out,
		scale 0.3s ease-in;
	border-radius: 7px;
	overflow: hidden;

	&:hover {
		animation-name: shadowCardFrames;
		animation-duration: 3s;
		animation-iteration-count: infinite;
	}

	&::after,
	&::before {
		content: '';
		position: absolute;
		border-radius: inherit;
		/* z-index: 2; */
	}

	&::before {
		width: 100%;
		height: 100%;
		background-image: ${({ theme }) =>
			`linear-gradient(0deg, ${theme.colors.emerald['400']} 0%, ${theme.colors.yellow['300']} 100%)`};
		/* background-image: ${({ theme }) =>
			`linear-gradient(0deg, ${theme.colors.pink['400']} 0%, ${theme.colors.purple['500']} 100%)`}; */
		scale: 1;
	}

	&:hover::before {
		animation-name: ${moveFrames};
		animation-duration: 3s;
		animation-iteration-count: infinite;
	}

	&::after {
		width: 95%;
		height: 95%;
		background-color: ${({ theme }) => theme.body};
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	@keyframes shadowCardFrames {
		0% {
			box-shadow: ${({ theme, darkMode }) =>
				`0px 0px 25px 5px ${
					darkMode === 'light'
						? theme.colors.emerald['600']
						: theme.colors.emerald['200']
				}`};
		}

		50% {
			box-shadow: ${({ theme, darkMode }) =>
				`0px 0px 0px 0px ${
					darkMode === 'light'
						? theme.colors.emerald['600']
						: theme.colors.emerald['200']
				}`};
		}

		100% {
			box-shadow: ${({ theme, darkMode }) =>
				`0px 0px 25px 5px ${
					darkMode === 'light'
						? theme.colors.emerald['600']
						: theme.colors.emerald['200']
				}`};
		}
	}
`;

const CarsContainerStyled = styled.div`
	width: 96%;
	height: 96%;
	position: absolute;
	top: 50%;
	left: 50%;
	z-index: 1;
	translate: -50% -50%;
	overflow: hidden;
`;

const ImgCardStyled = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	width: 100%;
	transition: scale 0.3s ease-in-out;

	${CardStyled}:hover & {
		scale: 1.2;
	}
`;

const InfoContainerStyled = styled.div`
	position: relative;
	z-index: 1;
	width: 100%;
	height: 0%;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	opacity: 0;
	visibility: hidden;
	transition: background-color 0.3s ease-in-out, height 0.3s ease-in,
		opacity 0.3s ease-in;

	${CardStyled}:hover & {
		background-color: ${(props) => `${props.theme.colors.slate['900']}aa`};
		backdrop-filter: blur(5px);
		opacity: 1;
		visibility: visible;
		height: 100%;
	}
`;

const InfoHeaderStyled = styled.header`
	font-weight: bold;
	color: ${(props) => `${props.theme.colors.slate['50']}`};
	letter-spacing: 0.2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	& h3 {
		font-size: ${(props) => `${props.theme.fontSize.xl}`};
		text-align: center;
		margin-top: 0.5rem;
	}
`;

const InfoBodyStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	align-items: center;
`;

const InfoTextStyled = styled.span`
	color: ${({ theme }) => `${theme.colors.slate['50']}`};
	font-size: ${({ theme }) => `${theme.fontSize.lg}`};
	font-weight: medium;
	text-align: center;
`;

const ButtonCloseCardStyled = styled.button`
	cursor: pointer;
	font-family: 'PTMono';
	border-radius: 50%;
	padding: 0.5rem;
	border: 3px solid white;
	background-color: ${(props) => `${props.theme.colors.yellow['200']}`};
	transition: background-color 0.1s ease-in-out, scale 0.1s ease-in-out;

	&:hover {
		background-color: ${(props) => `${props.theme.colors.yellow['500']}`};
	}
	&:active {
		scale: 0.8;
	}
`;
