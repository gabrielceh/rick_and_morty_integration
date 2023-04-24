import { useNavigate } from 'react-router-dom';

import { ROUTES_NAMES } from '../../helpers/routesName';
import imageError from '../../assets/images/rick-morty_error.png';
import { ContainerStyled } from '../../styled/container.styled';
import { Image404Styled, Page404ContainerStyled } from './Page404.styled';
import { BtnOutlineStyled } from '../../styled/BtnStyles.style';

function Page404() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(ROUTES_NAMES.HOME);
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

				<BtnOutlineStyled
					color='yellow'
					width='150px'
					onClick={handleClick}>
					BACK to Home!
				</BtnOutlineStyled>
			</ContainerStyled>
		</Page404ContainerStyled>
	);
}

export default Page404;
