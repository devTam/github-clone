import React from 'react';
import { connect } from 'react-redux';
import Repo from '../repo/Repo';
import './repositories.css';

const Repositories = ({ repos }) => {
  return (
    <div className="main-content">
      <div className="repo-search">
        <form>
          <div className="repo-search-container">
            <div className="searchbar flex-auto">
              <input type="search" placeholder="Find a repository..." />
            </div>

            <div className="search-params">
              <div className="details">
                <summary className="sidebar-btn">
                  <i className="select">Type:</i>
                  <span className="menu-button">All</span>
                  <i className="fas fa-caret-down"></i>
                </summary>
              </div>
              <div className="details flex-auto">
                <summary className="sidebar-btn">
                  <i className="select">Language:</i>
                  <span className="menu-button">All</span>
                  <i className="fas fa-caret-down"></i>
                </summary>
              </div>
              <div className="btn-primary">
                <svg
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                  ></path>
                </svg>
                New
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* <!-- DYNAMIC CONTENT --> */}

      <div id="user-repo-list">
        <ul className="repo-list">
          {repos &&
            repos.map((repo) => (
              <Repo
                key={repo.name}
                name={repo.name}
                starCount={repo.stargazerCount}
                description={repo.description}
                updated={repo.updatedAt}
                forkCount={repo.forkCount}
                language={repo.primaryLanguage && repo.primaryLanguage.name}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = ({ data }) => ({
  repos: data && data.repositories.nodes,
});

export default connect(mapStateToProps)(Repositories);
