import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ROUTES_NAMES } from '../../helpers/routesName';
import { addCharacterById } from '../../redux/actions/actionCharacters';
import { BtnOutlineStyled } from '../../styled/BtnStyles.style';

function BtnGetRandom({ onModalClose }) {
	// https://rickandmortyapi.com/documentation/#get-all-characters primer y ultimo id
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const generateRandom = () => Math.floor(Math.random() * (826 - 1 + 1) + 1);

	const handleClick = () => {
		let random = generateRandom();
		dispatch(addCharacterById(random));
		onModalClose();
		navigate(ROUTES_NAMES.HOME);
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
