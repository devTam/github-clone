import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const { SIGN_IN, SIGN_OUT, SIGNED_IN, COLOR, SELECTED_TAB, FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, CHANGE_THEME } = require('./types');

const INITIAL_STATE = {
  token: null,
  currentUser: null,
  dropdown: false,
  selectedTab: 'overview',
  loading: false,
  data: null,
  error: '',
  darkMode: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        token: action.payload,
      };

    case SIGNED_IN:
      return {
        ...state,
        currentUser: action.payload,
      };

    case SIGN_OUT:
      return {
        ...state,
        token: null,
        currentUser: null,
        dropdown: false
      };

    case COLOR:
      return {
        ...state,
        languageColor: action.payload
      };

    case SELECTED_TAB:
      return {
        ...state,
        selectedTab: action.payload
      };

    case CHANGE_THEME:
      return {
        ...state,
        darkMode: !state.darkMode
      };

    case FETCH_DATA_START:
      return {
        ...state,
        loading: true
      }

    case FETCH_DATA_SUCCESS: 
    return {
      ...state,
      loading:false,
      data: action.payload
    }

    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading:false,
        error: action.payload
      }

    default:
      return state;
  }
};

export default persistReducer(persistConfig, reducer);
