import { routerStateReducer } from "redux-router";

let defaultState = {
};

export default function(state = defaultState, action) {
	// FIXME: make immutable
	return Object.assign({}, state, { router: routerStateReducer(state.router, action) });
}
