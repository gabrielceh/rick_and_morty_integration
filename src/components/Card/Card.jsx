import { useContext, useEffect, useState } from 'react';
// import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions/actionsFavorites';
import { removeCharacter } from '../../redux/actions/actionCharacters';
import { isMobile } from '../../helpers/userDeviceInfo';

import { DarkModeContext } from '../../context/DarkModeContext';
import { Link } from 'react-router-dom';
import {
	ButtonCardStyled,
	ButtonsContainerStyled,
	CardContainerStyled,
	CardStyled,
	ImgCardStyled,
	InfoBodyStyled,
	InfoContainerStyled,
	InfoHeaderStyled,
	InfoTextStyled,
} from './Card.styles';

import { ToastContext } from '../../context/ToastContext';

function Card2({ id, name, status, species, gender, origin, image, location }) {
	const [isFav, setIsFav] = useState(false);
	const [deviceIsMobile, setDeviceIsMobile] = useState(false);
	const { darkMode } = useContext(DarkModeContext);
	const { addToast } = useContext(ToastContext);

	const myFavorites = useSelector((state) => state.favorites.myFavorites);
	const dispatch = useDispatch();

	const statusIcon = {
		Alive: '🟢',
		Dead: '🔴',
		unknown: '🔘',
	};
	useEffect(() => {
		isMobile.any() ? setDeviceIsMobile(true) : setDeviceIsMobile(false);
	}, []);

	useEffect(() => {
		myFavorites.forEach((fav) => {
			if (fav.id === id) {
				setIsFav(true);
				return;
			}
		});
	}, [myFavorites, id]);

	const handleClose = (event) => {
		event.preventDefault();
		dispatch(removeCharacter(id));
		addToast({
			title: 'Removed',
			description: `${name} was removed 😥`,
			type: 'info',
		});
	};

	const handleFavorite = (event) => {
		event.preventDefault();
		if (isFav) {
			setIsFav(false);
			dispatch(removeFav(id));
			addToast(
				{
					title: 'Removed from favs',
					description: `${name} was removed from your favorites`,
					type: 'info',
				},
				'bottom-right'
			);
		} else {
			setIsFav(true);
			dispatch(
				addFav({ id, name, status, species, gender, origin, image, location })
			);
			addToast(
				{
					title: 'Added to favs',
					description: `${name} was added to your favorites`,
					type: 'success',
				},
				'bottom-right'
			);
		}
	};

	return (
		<>
			<Link to={`/detail/${id}`}>
				<CardStyled darkMode={darkMode}>
					<CardContainerStyled>
						<ImgCardStyled
							src={image}
							alt={name}
						/>
						<InfoContainerStyled className={deviceIsMobile ? 'mobile' : ''}>
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
									title='Delete'
									className={deviceIsMobile ? 'mobile' : ''}>
									✖️
								</ButtonCardStyled>
								<ButtonCardStyled
									onClick={handleFavorite}
									title='Add to favorite'
									className={deviceIsMobile ? 'mobile' : ''}>
									{isFav ? '💚' : '🤍'}
								</ButtonCardStyled>
							</ButtonsContainerStyled>
						</InfoContainerStyled>
					</CardContainerStyled>
				</CardStyled>
			</Link>
		</>
	);
}

export default Card2;
