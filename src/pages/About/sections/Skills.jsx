import React from 'react';
import {
	SectionAboutTitles,
	SkillCaption,
	SkillFigure,
	SkillsContainer,
} from '../About.styled';
import { skills } from '../../../helpers/aboutData';

function Skills() {
	return (
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
	);
}

export default Skills;
