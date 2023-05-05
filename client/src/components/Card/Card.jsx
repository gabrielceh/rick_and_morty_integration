import { useCallback, useContext, useEffect, useState } from 'react';
// import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions/actionsFavorites';
import { removeCharacter } from '../../redux/actions/actionCharacters';
import { isMobile } from '../../helpers/userDeviceInfo';
import { ROUTES_NAMES } from '../../helpers/routesName';

import { DarkModeContext } from '../../context/DarkModeContext';
import { Link, useLocation } from 'react-router-dom';
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

	const [isRemoved, setIsRemoved] = useState(false);
	const [isAdded, setIsAdded] = useState(false);

	const { darkMode } = useContext(DarkModeContext);
	const { addToast } = useContext(ToastContext);

	const myFavorites = useSelector((state) => state.favorites.myFavorites);
	const favoriteError = useSelector((state) => state.favorites.error);
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const locationPage = useLocation();

	const statusIcon = {
		Alive: '🟢',
		Dead: '🔴',
		unknown: '🔘',
	};

	const messageToast = useCallback(
		(tittleSuccess, messageSuccess) => {
			if (favoriteError) {
				addToast(
					{
						title: 'Error',
						description: favoriteError,
						type: 'error',
					},
					'bottom-right'
				);
			} else {
				addToast(
					{
						title: tittleSuccess,
						description: messageSuccess,
						type: 'success',
					},
					'bottom-right'
				);
				setIsFav(!isFav);
			}
		},
		[addToast, favoriteError]
	);

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

	useEffect(() => {
		// Validamos si estamos removiendo
		// Disparamos el error o el caso de exito
		if (isRemoved) messageToast('Removed from favs', `${name} was removed from your favorites`);

		setIsRemoved(false);
	}, [isRemoved, favoriteError, messageToast, name]);

	useEffect(() => {
		// validamos si estamos agregando
		// disparamos el error o el exito
		if (isAdded) messageToast('Added to favs', `${name} was added to your favorites`);

		setIsAdded(false);
	}, [isAdded, favoriteError, messageToast, name]);

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
			setIsAdded(false);
			dispatch(removeFav(id, user.user.userId));
			setIsRemoved(true);
		} else {
			setIsRemoved(false);
			setIsAdded(true);
			dispatch(
				addFav({
					id,
					name,
					status,
					species,
					gender,
					origin,
					image,
					location,
					userId: user.user.userId,
				})
			);
		}
	};

	return (
		<>
			<Link to={`${ROUTES_NAMES.DETAIL}/${id}`}>
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
								{locationPage.pathname !== ROUTES_NAMES.FAVORITES && (
									<ButtonCardStyled
										onClick={handleClose}
										title='Delete'
										className={deviceIsMobile ? 'mobile' : ''}>
										✖️
									</ButtonCardStyled>
								)}
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
