import createBrowserHistory from "history/lib/createBrowserHistory";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { IndexRoute, Route, Router } from "react-router";

import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import reducer from "./reducer";
import App from "./pages/app.jsx";
import Contact from "./pages/contact.jsx";
import HomePage from "./pages/home-page.jsx";

import "../css/index.scss";

const routes = (
	<Route component={App}
		path="/">
		<IndexRoute component={HomePage} />
		<Route component={Contact}
			path="contact-us" />
	</Route>
);

const history = createBrowserHistory();
const store = applyMiddleware(thunkMiddleware)(createStore)(reducer);

render(<Provider store={store}>
	<Router history={history} routes={routes} />
</Provider>, document.getElementById("container"));
