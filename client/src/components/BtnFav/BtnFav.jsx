import React, { useEffect, useState, useContext, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions/actionsFavorites';
import { ToastContext } from '../../context/ToastContext';
import { BtnFavContainer, BtnFavStyled } from './BtnFav.style';

function BtnFav({ id, name, status, species, gender, origin, image, location, className }) {
	const [isFav, setIsFav] = useState({
		fav: false,
		labelFav: '🤍',
	});
	const [isRemoved, setIsRemoved] = useState(false);
	const [isAdded, setIsAdded] = useState(false);

	const { addToast } = useContext(ToastContext);
	const dispatch = useDispatch();
	const favorites = useSelector((state) => state.favorites.allCharactersFav);
	const favoriteError = useSelector((state) => state.favorites.error);
	const user = useSelector((state) => state.user);

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
				setIsFav({ fav: false, labelFav: '🤍' });
			}
		},
		[addToast, favoriteError]
	);

	useEffect(() => {
		favorites.forEach((fav) => {
			if (fav.id === id) {
				setIsFav({
					fav: true,
					labelFav: '❤️',
				});
				return;
			}
		});
	}, [favorites, id]);

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

	const handleClick = async (event) => {
		event.preventDefault();
		if (isFav.fav) {
			setIsAdded(false);
			await dispatch(removeFav(id, user.user.userId));
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

	const hanldeMouseEnter = (event) => {
		if (isFav.fav) {
			setIsFav({
				...isFav,
				labelFav: '💔',
			});
		}
	};
	const hanldeMouseLeave = (event) => {
		if (isFav.fav) {
			setIsFav({
				...isFav,
				labelFav: '❤️',
			});
		}
	};

	return (
		<>
			<BtnFavContainer className={className}>
				<BtnFavStyled
					className={className}
					onClick={handleClick}
					onMouseEnter={hanldeMouseEnter}
					onMouseLeave={hanldeMouseLeave}
					title={isFav.fav ? 'Remove from Favs' : 'Add to Favs'}>
					{isFav.labelFav}
				</BtnFavStyled>
			</BtnFavContainer>
		</>
	);
}

export default BtnFav;
