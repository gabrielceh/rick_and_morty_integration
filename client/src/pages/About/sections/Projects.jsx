import React from 'react';
import {
	ImageCard,
	ProjectCard,
	ProjectCardInfo,
	ProjectSection,
	SectionAboutTitles,
} from '../About.styled';
import { projects } from '../../../helpers/aboutData';

function Projects() {
	return (
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
	);
}

export default Projects;
