import TitleSection from '../../components/Title/TitleSection';
import { ContainerStyled } from '../../styled/container.styled';
import { AboutContainserStyled } from './About.styled';

import WelcomeAbout from './sections/Welcome';
import ProjectsAbout from './sections/Projects';
import SkillsAbout from './sections/Skills';
import SocialAbout from './sections/Social';

function About() {
	return (
		<>
			<ContainerStyled>
				<TitleSection
					title='HELLO WORLD!!'
					color='emerald'
				/>
				<AboutContainserStyled>
					<WelcomeAbout />
					<ProjectsAbout />
					<SkillsAbout />
					<SocialAbout />
				</AboutContainserStyled>
			</ContainerStyled>
		</>
	);
}

export default About;
