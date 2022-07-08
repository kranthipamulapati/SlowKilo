import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import {UserProvider} from "./context/user";
import {FirebaseProvider} from "./context/firebase";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  	<React.StrictMode>

		<FirebaseProvider>
			<UserProvider>

    			<App />
				
			</UserProvider>
		</FirebaseProvider>

  	</React.StrictMode>
);