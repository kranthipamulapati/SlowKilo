import React, {lazy, Suspense} from "react";

import {Route, Routes, BrowserRouter} from "react-router-dom";

import * as ROUTES from "./constants/routes";

const Login = lazy(() => import ("./pages/login"));

function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={<div>Loading...</div>}>

				<Routes>

					<Route path={ROUTES.LOGIN} element={<Login />}></Route>

				</Routes>

			</Suspense>
		</BrowserRouter>
	);
}

export default App;