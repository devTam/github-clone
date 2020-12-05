import React, { useState } from 'react';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import TabbedNav from '../components/tabbedNav/TabbedNav';
import './profile.css';

const Profile = () => {
    const [ selectedTab, setSelectedTab] = useState('overview')
    
    return (
        <>
            <Header />
            <main className="main" >
                <Sidebar />
                <div className="main-repo">
                    <TabbedNav selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
                </div>
            </main>  
        </>
    )
}


export default Profile;