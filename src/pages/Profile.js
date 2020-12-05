import React, { useState } from 'react';
import Header from '../components/header/Header';
import Overview from '../components/overview/Overview';
import Sidebar from '../components/sidebar/Sidebar';
import Repositories from '../components/repositories/Repositories';
import TabbedNav from '../components/tabbedNav/TabbedNav';
import './profile.css';

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  return (
    <>
      <Header />
      <main className="main">
        <Sidebar />
        <div className="main-repo">
          <TabbedNav
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
          {selectedTab === 'overview' ? <Overview /> : <Repositories />}
        </div>
      </main>
    </>
  );
};

export default Profile;
