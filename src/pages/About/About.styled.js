import styled from 'styled-components';

export const AboutContainserStyled = styled.div`
	margin: 0 auto;
	width: 100%;
	max-width: 900px;
	margin-bottom: 2rem;
	display: flex;
	flex-direction: column;
	gap: 3rem;
`;

export const WelcomeSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;

	@media ${({ theme }) => theme.screenSize.tablet} {
		flex-direction: row;
	}
`;

export const MainImageAbout = styled.img`
	width: 300px;
	height: 300px;
	border-radius: 20px;

	@media ${({ theme }) => theme.screenSize.tablet} {
		order: 1;
	}
`;

export const ParragraphsContainer = styled.div`
	width: 100%;
	display: flex;
	gap: 1rem;
	flex-direction: column;
	text-align: justify;
	font-weight: 700;
	font-size: ${({ theme }) => theme.fontSize.base};

	& p {
		font-family: 'PTMono', 'Courier New', Courier, monospace;
		line-height: 1.5rem;
	}

	@media ${({ theme }) => theme.screenSize.tablet} {
		font-size: ${({ theme }) => theme.fontSize.lg};
	}
`;

export const ProjectSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: stretch;
	gap: 2rem;
`;

export const SectionAboutTitles = styled.h2`
	text-align: left;
	color: ${({ theme }) => theme.colors.yellow['400']};
	font-size: ${({ theme }) => theme.fontSize.xl_3};
	align-self: flex-start;
	margin-bottom: 1.5rem;
`;

export const ProjectCard = styled.article`
	width: 100%;
	padding: 1rem;
	background-color: ${({ theme }) => theme.body};
	border: ${({ theme }) => `1px solid ${theme.colors.yellow['300']}`};
	display: flex;
	align-items: center;
	gap: 3rem;
	transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out,
		translate 0.5s ease-in-out;

	&:hover {
		background-color: ${({ theme }) => theme.colors.yellow['300']};
		color: ${({ theme }) => theme.colors.yellow['900']};
		translate: -10px 0px;
	}
`;

export const ImageCard = styled.img`
	width: 70px;
	height: 70px;
	border-radius: 50%;
`;

export const ProjectCardInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const SkillsContainer = styled.div`
	padding: 1rem;
	background-color: ${({ theme }) => theme.colors.emerald['300']};

	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(150px, 150px));
	justify-content: center;

	@media ${({ theme }) => theme.screenSize.tablet} {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 4rem;
	}
`;

export const SkillFigure = styled.figure`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	& svg {
		width: 100px;
		height: 100px;
	}
`;

export const SkillCaption = styled.figcaption`
	display: block;
	/* width: 100%; */
	text-align: center;
	margin-top: 1rem;
	color: ${({ theme }) => theme.colors.emerald['900']};
	font-weight: 700;
	font-size: ${({ theme }) => theme.fontSize.xl};
`;
