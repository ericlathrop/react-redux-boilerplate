import createHistory from "history/lib/createBrowserHistory";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { IndexRoute, Route } from "react-router";

import { ReduxRouter, reduxReactRouter } from "redux-router";
import { compose, createStore } from "redux";

import reducer from "./reducer";
import App from "./pages/app.jsx";
import Contact from "./pages/contact.jsx";
import HomePage from "./pages/home-page.jsx";

const routes = (
	<Route component={App}
		path="/">
		<IndexRoute component={HomePage} />
		<Route component={Contact}
			path="contact-us" />
	</Route>
);

const store = compose(
		reduxReactRouter({
			routes,
			createHistory
		})
	)(createStore)(reducer);

render(<Provider store={store}>
	<ReduxRouter />
</Provider>, document.getElementById("container"));
