import axiosApi from "../../axiosApi";

export const POST_URL_REQUEST = 'POST_URL_REQUEST';
export const POST_URL_SUCCESS = 'POST_URL_SUCCESS';
export const POST_URL_FAILURE = 'POST_URL_FAILURE';

export const postUrlRequest = () => ({type: POST_URL_REQUEST});
export const postUrlSuccess = data => ({type: POST_URL_SUCCESS, data});
export const postUrlFailure = error => ({type: POST_URL_FAILURE, error});

export const postUrl = data => {
	return async dispatch => {
		try {
			dispatch(postUrlRequest());
			const response = await axiosApi.post('/', data);
			dispatch(postUrlSuccess(response.data));
		} catch (e) {
			dispatch(postUrlFailure(e));
		}
	}
};



