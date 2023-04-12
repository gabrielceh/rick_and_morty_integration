import imageError from '../../assets/images/rick-morty_error.png';
import { ContainerStyled } from '../../styled/container.styled';
import { Image404Styled, Page404ContainerStyled } from './Page404.styled';

function Page404() {
	return (
		<Page404ContainerStyled>
			<ContainerStyled className='page-404-container'>
				<Image404Styled
					src={imageError}
					alt='Error 404 rick and morty'
				/>
				<h1>404</h1>
				<p>Oh, geez! That page can’t be found.</p>
			</ContainerStyled>
		</Page404ContainerStyled>
	);
}

export default Page404;
