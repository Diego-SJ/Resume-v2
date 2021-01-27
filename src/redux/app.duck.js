import { LAN_EN, LAN_ES } from '../constants/strings';
import axios from 'axios';

// Constants
const mediumApi = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@diegosj';
const initialState = {
	isShow: false,
	language: LAN_EN,
	blog: [],
	fetching: false
};

const SHOW_HIDE_SIDEMENU = 'SHOW_HIDE_SIDEMENU';
const HIDE_SIDEMENU = 'HIDE_SIDEMENU';
const HANDLE_LANGUAGE = 'HANDLE_LANGUAGE';
const FETCHING = 'FETCHING';
const SET_BLOGS = 'SET_BLOGS';

// Reducer
const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCHING:
			return { ...state, fetching: payload };
		case SHOW_HIDE_SIDEMENU:
			return { ...state, isShow: payload };
		case HIDE_SIDEMENU:
			return { ...state, isShow: payload };
		case HANDLE_LANGUAGE:
			return { ...state, language: payload };
		case SET_BLOGS:
			return { ...state, blog: payload, fetching: false };
		default:
			return state;
	}
};

export default reducer;

// Actions
export const switchLanguageAction = () => (dispatch, getState) => {
	let currentLanguage = getState().app.language;
	currentLanguage = currentLanguage === LAN_EN ? LAN_ES : LAN_EN;
	dispatch({
		type: HANDLE_LANGUAGE,
		payload: currentLanguage
	});
};

export const showOrHideMenuAction = () => (dispatch, getState) => {
	const { isShow } = getState().app;

	dispatch({
		type: SHOW_HIDE_SIDEMENU,
		payload: !isShow
	});
};

export const onlyHideMenuAction = () => (dispatch) => {
	dispatch({
		type: HIDE_SIDEMENU,
		payload: false
	});
};

export const fetchMediumHistories = () => async (dispatch) => {
	try {
		dispatch({ type: FETCHING, payload: true });
		const result = (await axios.get(mediumApi)).data;
		const histories = result.items.map((history) => {
			return {
				title: history.title,
				date: history.pubDate,
				link: history.link,
				thumbnail: history.thumbnail,
				content: history.content,
				tags: history.categories
			};
		});
		dispatch({ type: SET_BLOGS, payload: histories });
	} catch (error) {
		console.log(error);
	}
};
