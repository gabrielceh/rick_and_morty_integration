import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import Cards from '../components/Cards';

function Favorites({ onClose }) {
	const myFavorites = useSelector((state) => state.myFavorites);

	useEffect(() => {
		console.log(myFavorites);
	}, []);

	return (
		<div>
			<h1>My favorites</h1>
			<Cards
				characters={myFavorites}
				onClose={onClose}
			/>
		</div>
	);
}

export default Favorites;
