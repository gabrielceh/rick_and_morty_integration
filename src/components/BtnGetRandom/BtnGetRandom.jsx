import { useNavigate } from 'react-router-dom';
import { BtnOutlineStyled } from '../../styled/BtnStyles.style';

function BtnGetRandom({ onSearch, onModalClose }) {
	// https://rickandmortyapi.com/documentation/#get-all-characters primer y ultimo id
	const navigate = useNavigate();

	const generateRandom = () => Math.floor(Math.random() * (826 - 1 + 1) + 1);

	const handleClick = () => {
		let random = generateRandom();
		onSearch(random);
		onModalClose();
		navigate('/home');
	};

	return (
		<>
			<BtnOutlineStyled
				title='Random Generator'
				color='yellow'
				onClick={handleClick}
				width='5rem'>
				RND
			</BtnOutlineStyled>
		</>
	);
}

export default BtnGetRandom;
