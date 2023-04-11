import TitleSection from '../components/TitleSection';
import { ContainerStyled } from '../styled/container.styled';

function About() {
	return (
		<>
			<ContainerStyled>
				<TitleSection
					title='About'
					color='emerald'
				/>
			</ContainerStyled>
		</>
	);
}

export default About;
