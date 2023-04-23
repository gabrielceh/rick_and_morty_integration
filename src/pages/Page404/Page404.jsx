import { useNavigate } from 'react-router-dom';

import imageError from '../../assets/images/rick-morty_error.png';
import { ContainerStyled } from '../../styled/container.styled';
import { Image404Styled, Page404ContainerStyled } from './Page404.styled';
import { useEffect } from 'react';

function Page404() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(-1);
	};

	return (
		<Page404ContainerStyled>
			<ContainerStyled className='page-404-container'>
				<Image404Styled
					src={imageError}
					alt='Error 404 rick and morty'
				/>
				<h1>404</h1>
				<p>Oh, geez! That page can’t be found.</p>

				<button onClick={handleClick}>BACK!</button>
			</ContainerStyled>
		</Page404ContainerStyled>
	);
}

export default Page404;
