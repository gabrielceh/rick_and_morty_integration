import { createGlobalStyle } from 'styled-components';

import waveImage from './assets/images/wave2.svg';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
	background-image: url(${waveImage});
	background-size: auto 100%;
	background-repeat: no-repeat;
	background-position: 10% 250px;
	background-attachment: fixed;
    transition: all 0.50s ease-in-out;
  }
  `;
