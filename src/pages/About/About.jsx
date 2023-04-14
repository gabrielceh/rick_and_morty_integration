import TitleSection from '../../components/Title/TitleSection';
import { ContainerStyled } from '../../styled/container.styled';

import { projects, skills, aboutMainImage } from '../../helpers/aboutData';
import {
	AboutContainserStyled,
	ImageCard,
	MainImageAbout,
	ParragraphsContainer,
	ProjectCard,
	ProjectCardInfo,
	ProjectSection,
	SectionAboutTitles,
	SkillCaption,
	SkillFigure,
	SkillsContainer,
	SocialLinksContainer,
	SocialSection,
	WelcomeSection,
} from './About.styled';
import LinkedInICon from '../../components/icons/LinkedInIcon';
import InstagramIcon from '../../components/icons/InstagramIcon';

function About() {
	return (
		<>
			<ContainerStyled>
				<TitleSection
					title='HELLO!!'
					color='emerald'
				/>
				<AboutContainserStyled>
					<WelcomeSection>
						<MainImageAbout
							src={aboutMainImage.img}
							alt={aboutMainImage.alt}
						/>
						<ParragraphsContainer>
							<p>
								My name is Gabriel Cervantes Hurtado and I'm a web developer
								student in Henry.{' '}
							</p>
							<p>
								For about 2 years I have been developing my skills in the world
								of web programming.
							</p>
							<p>
								Currently, I am acquiring knowledge in the backend to be a Full
								Stack developer.
							</p>
							<p>
								I have experience using JS, React and JS frameworks like Vue,
								Next, as well as Tailwind for css.
							</p>
						</ParragraphsContainer>
					</WelcomeSection>

					<ProjectSection>
						<SectionAboutTitles>Projects</SectionAboutTitles>
						{projects.map((project) => (
							<ProjectCard key={project.id}>
								<a
									href={project.url}
									target='_blank'
									rel='noopener noreferrer'>
									<ImageCard
										src={project.img}
										alt={project.name}
									/>
								</a>
								<ProjectCardInfo>
									<h3>{project.name}</h3>
									<p>{project.description}</p>
								</ProjectCardInfo>
							</ProjectCard>
						))}
					</ProjectSection>

					<section>
						<SectionAboutTitles>Skills</SectionAboutTitles>
						<SkillsContainer>
							{skills.map((skill) => (
								<SkillFigure key={skill.id}>
									{skill.component()}
									<SkillCaption>{skill.name}</SkillCaption>
								</SkillFigure>
							))}
						</SkillsContainer>
					</section>

					<SocialSection>
						<SectionAboutTitles>Contact</SectionAboutTitles>
						<SocialLinksContainer>
							<a
								href='https://www.linkedin.com/in/gabriel-cervantes-hurtado/'
								target='_blank'
								rel='noopener noreferrer'>
								<LinkedInICon className='social-icon' />
							</a>
							<a
								href='https://www.instagram.com/gabo_cervantes/'
								target='_blank'
								rel='noopener noreferrer'>
								<InstagramIcon className='social-icon' />
							</a>
						</SocialLinksContainer>
					</SocialSection>
				</AboutContainserStyled>
			</ContainerStyled>
		</>
	);
}

export default About;
