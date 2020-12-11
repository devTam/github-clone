import { useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { connect } from "react-redux";

const root = document.documentElement;
function App({ currentUser, darkMode }) {
 
  useEffect(() => {
    if(darkMode) {
      root.setAttribute('theme', 'dark')
    }else {
      root.removeAttribute('theme')
    }
  },[darkMode])

  return (
    <div className="app">
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path='/' render={() => currentUser ? (<Redirect to='/profile' />) : (<Login />)} />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({currentUser, darkMode}) => ({
  currentUser,
  darkMode
})



export default connect(mapStateToProps)(App);
