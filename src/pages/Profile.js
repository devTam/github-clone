import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { auth } from '../firebase';
import { signOut } from '../redux/actions';
import './profile.styles.css';

const Profile = ({signOut}) => {
    const history = useHistory()
    const handleClick = () => {
        auth.signOut();
        signOut();
        history.push('/');
    }
    return (
        <div>
            <h1>Welcome</h1>
            <button onClick={handleClick}>Sign Out</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOut())
})

export default connect(null, mapDispatchToProps)(Profile);