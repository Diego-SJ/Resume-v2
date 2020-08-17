// Constants
const initialState = {
  isShow: false,
};

const SHOW_HIDE_SIDEMENU = 'SHOW_HIDE_SIDEMENU';
const HIDE_SIDEMENU = 'HIDE_SIDEMENU';

// Reducer
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_HIDE_SIDEMENU:
      return { ...state, isShow: payload };
    case HIDE_SIDEMENU:
      return { ...state, isShow: payload };
    default:
      return state;
  }
};

export default reducer;

// Actions

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
