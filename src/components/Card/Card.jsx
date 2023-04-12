import { useContext, useEffect, useState } from 'react';
// import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions/actionsFavorites';

import { DarkModeContext } from '../../context/DarkModeContext';
import { Link } from 'react-router-dom';
import {
	ButtonCardStyled,
	ButtonsContainerStyled,
	CardStyled,
	CarsContainerStyled,
	ImgCardStyled,
	InfoBodyStyled,
	InfoContainerStyled,
	InfoHeaderStyled,
	InfoTextStyled,
} from './Card.styles';

function Card2({ id, name, status, species, gender, origin, image, onClose }) {
	const [isFav, setIsFav] = useState(false);
	const { darkMode } = useContext(DarkModeContext);

	const myFavorites = useSelector((state) => state.favorites.myFavorites);
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
	}, [myFavorites]);

	const handleClose = (event) => {
		event.preventDefault();
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
							{/* <InfoTextStyled>{species}</InfoTextStyled> */}
							<InfoTextStyled>ID: {id}</InfoTextStyled>
							<InfoTextStyled>{gender}</InfoTextStyled>
							{/* <InfoTextStyled>Location: {origin.name}</InfoTextStyled> */}
						</InfoBodyStyled>
						<ButtonsContainerStyled>
							<ButtonCardStyled
								onClick={handleClose}
								title='Delete'>
								✖️
							</ButtonCardStyled>
							<ButtonCardStyled
								onClick={handleFavorite}
								title='Add to favorite'>
								{isFav ? '💚' : '🤍'}
							</ButtonCardStyled>
						</ButtonsContainerStyled>
					</InfoContainerStyled>
				</CarsContainerStyled>
			</CardStyled>
		</Link>
	);
}

export default Card2;
