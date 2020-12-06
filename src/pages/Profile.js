import React, { useEffect } from 'react';
import Header from '../components/header/Header';
import Overview from '../components/overview/Overview';
import Sidebar from '../components/sidebar/Sidebar';
import Repositories from '../components/repositories/Repositories';
import TabbedNav from '../components/tabbedNav/TabbedNav';
import './profile.css';
import { connect } from 'react-redux';
import Footer from '../components/footer/Footer';
import fetchDataAsync from '../redux/actions';

const Profile = ({selectedTab, fetchData}) => {

  useEffect(() => {
    fetchData()
  },[fetchData])

  return (
    <>
      <Header />
      <main className="main">
        <Sidebar />
        <div className="main-repo">
          <TabbedNav
          />
          {selectedTab === 'overview' ? <Overview /> : <Repositories />}
        </div>
      </main>
      <Footer />
    </>
  );
};

const mapStateToProps = ({selectedTab}) => ({
  selectedTab,
  
})

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchDataAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
