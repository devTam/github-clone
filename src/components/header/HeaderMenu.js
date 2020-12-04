import React from 'react';
import './header.css';

const HeaderMenu = () => {
  return (
    <>
      <div className="mobile-nav-items" id="mobile-nav">
        <div className="mobile-header-search">
          <form className="header-form mobile-header-form">
            <input
              type="text"
              className="header-search-input"
              placeholder="Search or jump to..."
            />
            <img
              src="https://github.githubassets.com/images/search-key-slash.svg"
              alt=""
              className="header-search-key-slash"
            />
          </form>
          <nav className="header-nav mobile-nav">
            <a href="/" className="nav-mobile header-link">
              Dashboard
            </a>
            <a href="/" className="nav-mobile header-link">
              Pull requests
            </a>
            <a href="/" className="nav-mobile header-link">
              Issues
            </a>
            <a href="/" className="nav-mobile header-link">
              Marketplace
            </a>
            <a href="/" className="nav-mobile header-link">
              Explore
            </a>
            <a href="/" className="nav-mobile header-link nav-mobile-profile">
              {/* <!-- FETCH IMAGE FROM API --> */}
              <img
                id="profile-image-mobile"
                width="20"
                height="20"
                alt="profile"
              />
              devTam
            </a>
            <form className="sign-out-form">
              <button className="sign-out nav-mobile header-link">
                <svg
                  className="octicon octicon-sign-out v-align-middle"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 010 1.5h-2.5a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 010 1.5h-2.5A1.75 1.75 0 012 13.25V2.75zm10.44 4.5H6.75a.75.75 0 000 1.5h5.69l-1.97 1.97a.75.75 0 101.06 1.06l3.25-3.25a.75.75 0 000-1.06l-3.25-3.25a.75.75 0 10-1.06 1.06l1.97 1.97z"
                  ></path>
                </svg>
                Sign out
              </button>
            </form>
          </nav>
        </div>
      </div>
    </>
  );
};

export default HeaderMenu;
