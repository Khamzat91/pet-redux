import {  CHANGE_THEME, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT } from "./types";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const enableButtons = () => {
    return {
        type: ENABLE_BUTTONS
    }
}

export const disableButtons = () => {
    return {
        type: DISABLE_BUTTONS
    }
}

export const changeTheme = (newTheme) => {
return {
    type: CHANGE_THEME,
    payload: newTheme
}
}

export const asyncIncrement = () => {
  return function (dispatch) {
    dispatch(disableButtons())
    setTimeout(() => {
      dispatch(increment());
      dispatch(enableButtons())
    }, 1500);
  };
};
