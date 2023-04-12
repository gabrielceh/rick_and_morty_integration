import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCharacterById } from '../redux/actions/actionCharacters';

function Prueba() {
	const characters = useSelector((state) => state.characters);
	const loader = useSelector((state) => state.loader);

	const dispatch = useDispatch();

	useEffect(() => {
		console.log(characters);
	}, [characters]);

	const handleAdd = () => {
		let random = Math.floor(Math.random() * 826);
		dispatch(addCharacterById(random));
	};

	const handleAddOne = () => {
		dispatch(addCharacterById(1));
	};

	return (
		<div>
			{loader ? 'loading: true' : 'loading: false'}
			<button onClick={handleAdd}>Add</button>
			<button onClick={handleAddOne}>Add 1</button>
		</div>
	);
}

export default Prueba;
