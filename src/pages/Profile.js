import React from 'react';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import './profile.css';

const Profile = () => {
    
    return (
        <>
            <Header />
            <main className="main" >
                <Sidebar />
            </main>  
        </>
    )
}


export default Profile;