import React from 'react';
import { connect } from 'react-redux';
import PinnedRepo from '../pinnedRepo/PinnedRepo';
import './overview.css';

const Overview = ({contributions, pinnedItems}) => {
  return (
    <div className="overview-container">
      <div className="pinned-container">
        <h2 className="pinned-text">
          <span>Pinned</span>
          <span className="customize-btn">Customize your pins</span>
        </h2>

        <ol className="pinned-items">
          {
            pinnedItems && pinnedItems.map(item => (
              <PinnedRepo key={item.id} name={item.name} description={item.description} primaryLanguage={item.primaryLanguage.name} /> 
            ))
          }
            
        </ol>
      </div>

      <div className="contributions">
          <h2 className="contributions-text">
              <span>{contributions} contributions in the last year</span>
              <span className="contributions-btn">contributions settings
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

const mapStateToProps = ({data}) => ({
  contributions: data && data.contributionsCollection.contributionCalendar.totalContributions,
  pinnedItems: data && data.pinnedItems.nodes

})

export default connect(mapStateToProps)(Overview);
