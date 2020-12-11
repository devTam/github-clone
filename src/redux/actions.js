import {
  CHANGE_THEME,
  COLOR,
  FETCH_DATA_FAILURE,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  SELECTED_TAB,
  SIGNED_IN,
  SIGN_IN,
  SIGN_OUT,
} from './types';
import { store } from '../redux/store';
import axios from 'axios'

export const signIn = (token) => ({
  type: SIGN_IN,
  payload: token,
});

export const signedIn = (currentUser) => ({
  type: SIGNED_IN,
  payload: currentUser,
});

export const signOut = () => ({
  type: SIGN_OUT,
});

export const setColor = (color) => ({
  type: COLOR,
  payload: color,
});

export const setSelectedTab = (tab) => ({
  type: SELECTED_TAB,
  payload: tab,
});

export const changeTheme = () => ({
  type: CHANGE_THEME
});

export const fetchStart = () => ({
  type: FETCH_DATA_START,
});

export const fetchSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

const fetchDataAsync = () => {
  return (dispatch) => {
    const token = store.getState().token;
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };
    // FUNCTION TO GET DATE FOR LAST YEAR
    function pad(number) {
      if (number < 10) {
        return '0' + number;
      }
      return number;
    }
    const now = new Date();
    const todayDate = now.toISOString();
    const lastYearDate = `${now.getUTCFullYear() - 1}-${pad(
      now.getMonth() + 1
    )}-${pad(now.getUTCDate())}T${pad(now.getUTCHours())}:${pad(
      now.getUTCMinutes()
    )}:${pad(now.getUTCSeconds())}.${(now.getUTCMilliseconds() / 1000)
      .toFixed(3)
      .slice(2, 5)}Z`;
    const raw = JSON.stringify({
      query: `query { viewer { avatarUrl name email login bio followers {totalCount} following {totalCount} starredRepositories {totalCount } contributionsCollection(from: "${lastYearDate}", to: "${todayDate}"){contributionCalendar{totalContributions}} pinnedItems(first: 5, types:REPOSITORY) { nodes { ... on Repository { id name description primaryLanguage { name } } } } repositories(last: 20, affiliations: [OWNER]) { totalCount nodes {name,stargazerCount,description,updatedAt, forkCount, primaryLanguage { name } }}}}`,
    });
    
    dispatch(fetchStart())
    axios({
      method: 'post',
      headers: headers,
      url: 'https://api.github.com/graphql',
      data: raw
    }).then(results => {
      const response = results.data.data.viewer;
      dispatch(fetchSuccess(response))
    }).catch(error => {
      dispatch(fetchFailure(error.message))
    })
  };
};

export default fetchDataAsync;
