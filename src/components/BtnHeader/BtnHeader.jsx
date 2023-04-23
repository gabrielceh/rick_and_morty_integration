import React from 'react';
import { BtnOutlineStyled } from '../../styled/BtnStyles.style';

function BtnHeader({ handleClick, children }) {
	return (
		<BtnOutlineStyled
			color='yellow'
			onClick={handleClick}
			width='5rem'>
			{children}
		</BtnOutlineStyled>
	);
}

export default BtnHeader;
