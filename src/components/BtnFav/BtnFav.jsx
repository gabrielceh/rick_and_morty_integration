import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions/actionsFavorites';
import { ToastContext } from '../../context/ToastContext';
import { BtnFavContainer, BtnFavStyled } from './BtnFav.style';

function BtnFav({
	id,
	name,
	status,
	species,
	gender,
	origin,
	image,
	location,
	className,
}) {
	const [isFav, setIsFav] = useState({
		fav: false,
		labelFav: '🤍',
	});
	const { addToast } = useContext(ToastContext);
	const dispatch = useDispatch();
	const favorites = useSelector((state) => state.favorites.allCharactersFav);

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

	const handleClick = (event) => {
		event.preventDefault();
		if (isFav.fav) {
			setIsFav({
				fav: false,
				labelFav: '🤍',
			});
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
			setIsFav({
				fav: true,
				labelFav: '❤️',
			});
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
				})
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
	);
}

export default BtnFav;
