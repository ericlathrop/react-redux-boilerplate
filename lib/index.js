import createHistory from "history/lib/createBrowserHistory";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Route } from "react-router";

import { ReduxRouter, reduxReactRouter } from "redux-router";
import { compose, createStore } from "redux";

import reducer from "./reducer";
import HomePage from "./pages/home-page.jsx";

let routes = (
	<Route component={HomePage}
		path="/" />
);

let store = compose(
		reduxReactRouter({
			routes,
			createHistory
		})
	)(createStore)(reducer);

render(<Provider store={store}>
	<ReduxRouter>
		{routes}
	</ReduxRouter>
</Provider>, document.getElementById("container"));
