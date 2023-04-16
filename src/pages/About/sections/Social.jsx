import React from 'react';
import {
	SectionAboutTitles,
	SocialLinksContainer,
	SocialSection,
} from '../About.styled';
import LinkedInICon from '../../../components/icons/LinkedInIcon';
import InstagramIcon from '../../../components/icons/InstagramIcon';
import GithubIcon from '../../../components/icons/GithubIcon';

function Social() {
	return (
		<SocialSection>
			<SectionAboutTitles>Social</SectionAboutTitles>
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
				<a
					href='https://github.com/gabrielceh'
					target='_blank'
					rel='noopener noreferrer'>
					<GithubIcon className='social-icon' />
				</a>
			</SocialLinksContainer>
		</SocialSection>
	);
}

export default Social;
