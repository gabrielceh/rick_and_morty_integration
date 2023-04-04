import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DarkModeProvider from './context/DarkModeContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	//   <React.StrictMode>
	<DarkModeProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</DarkModeProvider>
	// </React.StrictMode>
);
