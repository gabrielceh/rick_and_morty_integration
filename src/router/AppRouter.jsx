import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/Login/LoginPage';
import HomePage from '../pages/Home/HomePage';
import About from '../pages/About/About';
import Details from '../pages/Details/Details';
import Favorites from '../pages/Favorites/Favorites';
import Prueba from '../components/Prueba';
import Page404 from '../pages/Page404/Page404';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';

function AppRouter() {
	return (
		<Routes>
			<Route
				path='/'
				element={<PublicRoutes />}>
				<Route
					path='/'
					element={<LoginPage />}
				/>
			</Route>

			<Route
				path='/'
				element={<ProtectedRoutes />}>
				<Route
					path='/home'
					element={<HomePage />}
				/>
				<Route
					path='/About'
					element={<About />}
				/>
				<Route
					path='/detail/:id'
					element={<Details />}
				/>
				<Route
					path='/favorites'
					element={<Favorites />}
				/>
				<Route
					path='/test'
					element={<Prueba />}
				/>
			</Route>

			<Route
				path='*'
				element={<Page404 />}
			/>
		</Routes>
	);
}

export default AppRouter;
