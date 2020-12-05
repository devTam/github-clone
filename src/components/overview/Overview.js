import React from 'react';
import PinnedRepo from '../pinnedRepo/PinnedRepo';
import './overview.css';

const Overview = () => {
  return (
    <div className="overview-container">
      <div className="pinned-container">
        <h2 className="pinned-text">
          <span>Pinned</span>
          <span className="customize-btn">Customize your pins</span>
        </h2>

        <ol className="pinned-items">
            <PinnedRepo />
            <PinnedRepo />
            <PinnedRepo />
            <PinnedRepo />
            <PinnedRepo />
        </ol>
      </div>

      <div className="contributions">
          <h2 className="contributions-text">
              <span>642 contributions in the last year</span>
              <span className="contributions-btn">
                  contributions settings
                  <i className="fas fa-caret-down"></i>
              </span>
          </h2>
          <div className="graph-container">
              <div className="graph-content">
              <img className='graph-img' src="https://ghchart.rshah.org/40c463/devTam" alt="my github chart" />
              </div>
          </div>
      </div>
    </div>
  );
};

export default Overview;
