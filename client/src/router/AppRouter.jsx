import { Routes, Route } from 'react-router-dom';
import { ROUTES_NAMES } from '../helpers/routesName';

import LoginPage from '../pages/Login/LoginPage';
import HomePage from '../pages/Home/HomePage';
import About from '../pages/About/About';
import Details from '../pages/Details/Details';
import Favorites from '../pages/Favorites/Favorites';
import Prueba from '../components/Prueba';
import Page404 from '../pages/Page404/Page404';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';
import Register from '../pages/Register/Register';

function AppRouter() {
	return (
		<Routes>
			<Route
				path='/'
				element={<PublicRoutes />}>
				<Route
					path={ROUTES_NAMES.LOGIN}
					element={<LoginPage />}
				/>
				<Route
					path={ROUTES_NAMES.REGISTER}
					element={<Register />}
				/>
			</Route>

			<Route
				path='/'
				element={<ProtectedRoutes />}>
				<Route
					path={ROUTES_NAMES.HOME}
					element={<HomePage />}
				/>
				<Route
					path={ROUTES_NAMES.ABOUT}
					element={<About />}
				/>
				<Route
					path={`${ROUTES_NAMES.DETAIL}/:id`}
					element={<Details />}
				/>
				<Route
					path={ROUTES_NAMES.FAVORITES}
					element={<Favorites />}
				/>

				{/* <Route
					path='/test'
					element={<Prueba />}
				/> */}
			</Route>

			<Route
				path='*'
				element={<Page404 />}
			/>
		</Routes>
	);
}

export default AppRouter;
