import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import './sidebar.css';

const Sidebar = (props) => {
  const {
    avatarUrl,
    name,
    username,
    title,
    followersCount,
    followingCount,
    starredCount,
    email,
  } = props;

  const sidebarRef = useRef();

  const handleScroll = () => {
    if (window.pageYOffset >= 400) {
      sidebarRef && sidebarRef.current.classList.add('under');
    } else {
      sidebarRef.current.classList.remove('under');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[])

  return (
    <section className="main-profile" ref={sidebarRef}>
      <div className="profile-details">
        <div className="profile-image">
          {/* <!-- FROM API --> */}
          <img alt="" src={avatarUrl} />
          <div className="set-status-container">
            <div className="status-img">
              <svg
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"
                ></path>
              </svg>
            </div>
            <p className="status-text">Set status</p>
          </div>
        </div>
        <div className="profile-name">
          <h1>
            {/* <!-- FROM API --> */}
            <span id="profile-name" className="full-name">
              {name}
            </span>
            {/* <!-- FROM API --> */}
            <span id="profile-username" className="username">
              {username}
            </span>
          </h1>
        </div>
      </div>

      {/* <!-- set status --> */}
      <div className="set-status-container status-mobile">
        <div className="status-img">
          <svg
            className="octicon octicon-smiley"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"
            ></path>
          </svg>
        </div>
        <p className="status-text">Set status</p>
      </div>

      {/* <!-- FROM API --> */}
      <p className="job-desc">{title}</p>

      <div className="profile-edit">
        <button className="btn">Edit profile</button>
      </div>

      <div className="email-following-container">
        <div className="following">
          <div className="link-gray">
            <svg
              className="text-gray-light"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"
              ></path>
            </svg>
            {/* <!-- FROM API --> */}
            <span id="followers">{followersCount}</span>
            followers
          </div>
          <span className="dot">.</span>
          <div className="link-gray">
            {/* <!-- FROM API --> */}
            <span id="following">{followingCount}</span>
            following
          </div>
          <span className="dot margin-right">.</span>
          <div className="link-gray">
            <svg
              className="text-gray-light"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
              ></path>
            </svg>
            {/* <!-- FROM API --> */}
            <span id="stars">{starredCount}</span>
          </div>
        </div>

        <div className="email">
          <svg
            className="octicon"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"
            ></path>
          </svg>
          {/* <!-- EMAIL FROM API --> */}
          <div id="profile-email">{email}</div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ data }) => ({
  avatarUrl: data ? data.avatarUrl : '',
  name: data && data.name,
  username: data && data.login,
  title: data && data.bio,
  followersCount: data && data.followers.totalCount,
  followingCount: data && data.following.totalCount,
  starredCount: data && data.starredRepositories.totalCount,
  email: data && data.email,
});

export default connect(mapStateToProps)(Sidebar);
