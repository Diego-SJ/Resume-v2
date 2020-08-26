import { LAN_EN, LAN_ES } from '../constants/strings';

// Constants
const initialState = {
  isShow: false,
  language: LAN_EN,
};

const SHOW_HIDE_SIDEMENU = 'SHOW_HIDE_SIDEMENU';
const HIDE_SIDEMENU = 'HIDE_SIDEMENU';
const HANDLE_LANGUAGE = 'HANDLE_LANGUAGE';

// Reducer
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_HIDE_SIDEMENU:
      return { ...state, isShow: payload };
    case HIDE_SIDEMENU:
      return { ...state, isShow: payload };
    case HANDLE_LANGUAGE:
      return { ...state, language: payload };
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
    payload: currentLanguage,
  })
}

export const showOrHideMenuAction = () => (dispatch, getState) => {
  const { isShow } = getState().app;

  dispatch({
    type: SHOW_HIDE_SIDEMENU,
    payload: !isShow,
  });
};

export const onlyHideMenuAction = () => (dispatch) => {
  dispatch({
    type: HIDE_SIDEMENU,
    payload: false,
  });
};
