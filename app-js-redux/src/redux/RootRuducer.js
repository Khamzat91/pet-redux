import { combineReducers } from "redux";
import { CHANGE_THEME, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT } from "./types";

const initialThemeState = {
  value: "light",
  disabled: false
};

const initialCounterState = {};

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});

export function counterReducer(state = 0, action) {
  if (action.type === INCREMENT) {
    return state + 1;
  } else if (action.type === DECREMENT) {
    return state - 1;
  }
  return state;
}

export function themeReducer(state = initialThemeState, action) {
  switch (action.type) {
    case CHANGE_THEME: {
      return { ...state, value: action.payload };
    }
    case ENABLE_BUTTONS: {
        return {...state, disabled: false}
    }
    case DISABLE_BUTTONS: {
        return {...state, disabled: true}
    }
    default:
      return state;
  }
}
