import React, {lazy, Suspense} from "react";
import {Route, Routes, Navigate, BrowserRouter} from "react-router-dom";

import * as ROUTES from "./constants/routes";

const Login = lazy(() => import ("./pages/login"));
const Signup = lazy(() => import ("./pages/signup"));
const Notfound = lazy(() => import ("./pages/notfound"));
const Dashboard = lazy(() => import ("./pages/dashboard"));

function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={<div>Loading...</div>}>

				<Routes>

					<Route path={ROUTES.LOGIN}     element={<Login />}></Route>
					<Route path={ROUTES.SIGN_UP}   element={<Signup />}></Route>
					<Route path={ROUTES.NOT_FOUND} element={<Notfound />}></Route>
					<Route path={ROUTES.DASHBOARD} element={<Dashboard />}></Route>
					<Route path="*" element={<Navigate to="/notfound" replace />}></Route>

				</Routes>

			</Suspense>
		</BrowserRouter>
	);
}

export default App;