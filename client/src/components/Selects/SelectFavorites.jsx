import React from 'react';
import {
	LabelBasicStyled,
	OptionBasicStyled,
	SelectBasicStyled,
	SelectContainerStyled,
} from './Selects.styled';

function SelectFavorites({ options = [], name, label, handleChange }) {
	return (
		<SelectContainerStyled>
			<LabelBasicStyled htmlFor={name}>{label}</LabelBasicStyled>
			<SelectBasicStyled
				name={name}
				id={name}
				onChange={handleChange}>
				<option value=''>---SELECT---</option>
				{options.map((option) => (
					<option
						key={option.value}
						value={option.value}>
						{option.label}
					</option>
				))}
			</SelectBasicStyled>
		</SelectContainerStyled>
	);
}

export default SelectFavorites;
