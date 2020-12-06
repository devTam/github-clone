import React,{ useState } from 'react';
import { connect } from 'react-redux';
import './repo.css';

const Repo = ({color }) => {
    const [starred, setStarred] = useState(false);

    const handleClick= () => {
        setStarred(!starred)
    }

    

    const formatDate = (date) => {
        const rawDate = new Date(date);
        const day = rawDate.getDate();
        var monthNumber = rawDate.getMonth()
        const monthNames = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ];
        const month = monthNames[monthNumber];
        const formattedDate = `${month} ${day}`
        return formattedDate;
    
      }
  return (
    <li className="repo-list-item">
      <div className="list-item-left">
        <h3 className="repoo-name">
          <div>github-clone</div>
        </h3>

        <div className="repo-description">
          <p>A github profile clone with authentication using firebase and UI made with react</p>
        </div>

        <div className="repo-details">
          <span className="primary-language">
            <span className={`language-color ${color === 'javascript' ? 'javascript': color === 'css' ? 'css' : color === 'html' ? 'html' : 'typescript'}`}></span>
            <span className="language">JavaScript</span>
          </span>

          <span className="forks stars">
            <svg
              aria-label="star"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              role="img"
            >
              <path
                fillRule="evenodd"
                d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
              ></path>
            </svg>
            1
          </span>

          <span className="forks">
            <svg
              aria-label="fork"
              className="octicon-repo-forked"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              role="img"
            >
              <path
                fillRule="evenodd"
                d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
              ></path>
            </svg>
            2
          </span>

          <span>Updated on </span>
          <span className="formated-time">{formatDate('2013-09-12T22:42:02Z')}</span>
        </div>
      </div>

      <div className="list-item-right">
        <div>
            {
                !starred ? 
          (<button className="star-btn btn" onClick={handleClick} >
            <svg
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
              ></path>
            </svg>
            Star
          </button>) :
          (<button className="star-btn btn" onClick={handleClick} >
          <svg className="octicon octicon-star-fill mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"></path></svg>
            Unstar
          </button>)
            }
        </div>
      </div>
    </li>
  );
};

const mapStateToProps = ({languageColor, }) => ({
    color: languageColor,

})



export default connect(mapStateToProps)(Repo);
