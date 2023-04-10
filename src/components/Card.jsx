import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import { addFav, removeFav } from '../redux/actions';

function Card({
	name,
	status,
	species,
	gender,
	origin,
	image,
	onClose,
	addFav,
	removeFav,
	myFavorites,
}) {
	const [isFav, setisFav] = useState(false);

	const statusIcon = {
		Alive: '🟢',
		Dead: '🔴',
	};

	useEffect(() => {
		console.log(myFavorites);
	}, []);

	return (
		<CardStyled>
			<ImgContainerStyled>
				<ImgCardStyled
					src={image}
					alt={name}
				/>
				<CardNameStyled>
					<span>{statusIcon[status]}</span>
					<span>{name}</span>
				</CardNameStyled>
			</ImgContainerStyled>
			<BtnCloseStyled onClick={onClose}>❌</BtnCloseStyled>
			<FigInfoStyled>
				<div>
					<span>{species}</span>
				</div>
				<span>{gender}</span>
				<span>{origin.name}</span>
			</FigInfoStyled>
		</CardStyled>
	);
}

const mapStateToProps = (state) => {
	return {
		myFavorites: state.myFavorites,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addFav: () => dispatch(addFav()),
		removeFav: () => dispatch(removeFav()),
	};
};

export default connect(mapStateToProps)(Card);

const CardStyled = styled.figure`
	position: relative;
	border: 1px solid #ccc;
	transition: box-shadow 0.3s ease-in-out, border 0.3s ease-in-out;
	border-radius: 7px;
	overflow: hidden;

	&:hover {
		box-shadow: 0px 0px 15px 2px #ccc;
		border: 1px solid transparent;
	}
`;

const BtnCloseStyled = styled.button`
	cursor: pointer;
	position: absolute;
	top: 0;
	right: 0;
	border: none;
	background-color: transparent;
	font-weight: bold;
	font-size: 1.2rem;
	padding: 0.3rem;
	border-radius: 5px;
	transition: background-color 0.3s ease-in-out;

	&:hover {
		background-color: #6e6e6e7b;
		font-size: 1.25rem;
	}
`;

const ImgContainerStyled = styled.div`
	position: relative;
	overflow: hidden;
`;

const CardNameStyled = styled.div`
	position: absolute;
	bottom: 5%;
	left: 2%;
	background-color: #fafd7c;
	padding: 0.3rem 0.5rem;
	font-size: 1.1rem;
	font-weight: bold;
`;

const ImgCardStyled = styled.img`
	width: 100%;
	transition: scale 0.3s ease-in-out;

	&:hover {
		scale: 1.2;
	}
`;

const FigInfoStyled = styled.figcaption`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;
	gap: 1rem;
`;
