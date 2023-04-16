import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DarkModeProvider from './context/DarkModeContext';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';
import ToastProvider from './context/ToastContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	//   <React.StrictMode>
	<Provider store={store}>
		<DarkModeProvider>
			<ToastProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ToastProvider>
		</DarkModeProvider>
	</Provider>
	// </React.StrictMode>
);
