import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { orderFav, filterFav } from '../../redux/actions/actionsFavorites';

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

function Favorites({ onClose }) {
	const [aux, setAux] = useState(false);

	const myFavorites = useSelector((state) => state.favorites.myFavorites);
	const dispatch = useDispatch();

	useEffect(() => {
		console.log(myFavorites);
	}, []);

	const handleOrder = (event) => {
		let order = event.target.value;
		if (order.trim()) {
			dispatch(orderFav(order));
		}
	};

	const handleFilter = (event) => {
		let filter = event.target.value;
		if (filter.trim()) {
			console.log(filter);
			dispatch(filterFav(filter));
		}
	};

	return (
		<ContainerStyled>
			<TitleSection title='Mis Favoritos' />
			<SelectSectionStyled>
				<SelectFavorites
					options={selectOrder}
					handleChange={handleOrder}
					label='Ordenar: '
					name='favorites-order'
				/>
				<SelectFavorites
					options={selectFilter}
					handleChange={handleFilter}
					label='Filtrar: '
					name='favorites-filter'
				/>
			</SelectSectionStyled>
			<Cards
				characters={myFavorites}
				onClose={onClose}
			/>
		</ContainerStyled>
	);
}

export default Favorites;
