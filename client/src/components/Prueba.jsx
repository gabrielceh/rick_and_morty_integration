import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	addCharacterById,
	removeCharacter,
} from '../redux/actions/actionCharacters';

function Prueba() {
	const characters = useSelector((state) => state.characters);
	const loader = useSelector((state) => state.loader);

	const dispatch = useDispatch();

	useEffect(() => {
		console.log(characters.data);
	}, [characters.data]);

	const handleAdd = () => {
		let random = Math.floor(Math.random() * 826);
		dispatch(addCharacterById(random));
	};

	const handleAddOne = () => {
		dispatch(addCharacterById(1));
	};

	const handleDelete = (id) => {
		dispatch(removeCharacter(id));
	};

	return (
		<div>
			<button onClick={handleAdd}>Add</button>
			<button onClick={handleAddOne}>Add 1</button>
			{characters.data.map((character) => (
				<div
					key={character.id}
					style={{ display: 'flex', marginBottom: '1rem' }}>
					<h4>{character.name}</h4>
					<button onClick={() => handleDelete(character.id)}>✖️</button>
				</div>
			))}
			{loader && <h2>Loading...</h2>}
		</div>
	);
}

export default Prueba;
