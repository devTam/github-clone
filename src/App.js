import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { connect } from "react-redux";

function App({ token }) {
 

  return (
    <div className="App">
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path='/' render={() => token ? (<Redirect to='/profile' />) : (<Login />)} />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  token: state.token
})



export default connect(mapStateToProps)(App);
