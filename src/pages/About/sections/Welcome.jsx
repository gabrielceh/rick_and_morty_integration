import React from 'react';
import {
	MainImageAbout,
	ParragraphsContainer,
	WelcomeSection,
} from '../About.styled';
import { aboutMainImage } from '../../../helpers/aboutData';

function Welcome() {
	return (
		<WelcomeSection>
			<MainImageAbout
				src={aboutMainImage.img}
				alt={aboutMainImage.alt}
			/>
			<ParragraphsContainer>
				<p>
					My name is Gabriel Cervantes Hurtado and I'm a web developer student
					in Henry.{' '}
				</p>
				<p>
					For about 2 years I have been developing my skills in the world of web
					programming.
				</p>
				<p>
					Currently, I am acquiring knowledge in the backend to be a Full Stack
					developer.
				</p>
				<p>
					I have experience using JS, React and JS frameworks like Vue, Next, as
					well as Tailwind for css.
				</p>
			</ParragraphsContainer>
		</WelcomeSection>
	);
}

export default Welcome;
