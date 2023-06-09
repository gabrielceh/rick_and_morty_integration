import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
	orderFav,
	filterFav,
	getFavs,
} from '../../redux/actions/actionsFavorites';

import Cards from '../../components/Cards/Cards';
import TitleSection from '../../components/Title/TitleSection';
import { ContainerStyled } from '../../styled/container.styled';
import SelectFavorites from '../../components/Selects/SelectFavorites';
import { SelectSectionStyled } from './Favorites.styled';

const selectOrder = [
	{ value: 'A', label: 'Ascendente' },
	{ value: 'D', label: 'Descendente' },
];

const selectFilter = [
	{ value: 'Male', label: 'Male' },
	{ value: 'Female', label: 'Female' },
	{ value: 'Genderless', label: 'Genderless' },
	{ value: 'unknown', label: 'Unknown' },
	{ value: 'all', label: 'ALL characters' },
];

function Favorites() {
	const [aux, setAux] = useState(false);

	const myFavorites = useSelector((state) => state.favorites.myFavorites);
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getFavs(user.user.userId));
	}, []);

	const handleOrder = (event) => {
		let order = event.target.value;
		if (order.trim()) {
			setAux(!aux);
			dispatch(orderFav(order));
		}
	};

	const handleFilter = (event) => {
		let filter = event.target.value;
		if (filter.trim()) {
			dispatch(filterFav(filter));
		}
	};

	return (
		<ContainerStyled>
			<TitleSection title='My Favorites' />
			<SelectSectionStyled>
				<SelectFavorites
					options={selectOrder}
					handleChange={handleOrder}
					label='Order: '
					name='favorites-order'
				/>
				<SelectFavorites
					options={selectFilter}
					handleChange={handleFilter}
					label='Filter: '
					name='favorites-filter'
				/>
			</SelectSectionStyled>
			<Cards characters={myFavorites} />
		</ContainerStyled>
	);
}

export default Favorites;
