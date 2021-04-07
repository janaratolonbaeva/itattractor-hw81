import {POST_URL_FAILURE, POST_URL_REQUEST, POST_URL_SUCCESS} from "../actions/shortenLinkActions";

const initialState = {
	data: {},
	postError: '',
	postLoading: false
};

const shortenLinkReducer = (state = initialState, action) => {
	switch(action.type) {
		case POST_URL_REQUEST:
			return {...state, postLoading: true}
		case POST_URL_SUCCESS:
			return {...state, postLoading: false, data: action.data}
		case POST_URL_FAILURE:
			return {...state, postLoading: false, postError: action.error}
		default:
			return state
	}
};

export default shortenLinkReducer;