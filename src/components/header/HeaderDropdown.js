import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import { signOut } from '../../redux/actions';
import './headerDropdown.css';

const HeaderDropdown = ({ signOut, username }) => {
    const history = useHistory()
    const handleClick = () => {
        auth.signOut();
        signOut();
        history.push('/');
    }
  return (
    <div className="header-dropdown">
      <div className="signin">
        <div className="username-container">
  Signed in as <strong className="username-header">{username}</strong>
        </div>
      </div>
      <div className="dropdown-divider"></div>

      <div className="status-container">
        <div className="status-inner">
          <div className="status-details">
            <div className="emoji-container">
              <svg
                className="dropdown-svg"
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
            <div className="message-wrapper">
              <span className="text-gray">Set status</span>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown-divider"></div>
      <div className="dropdown-item">
        Your profile
      </div>
      <div className="dropdown-item">
        Your repositories
      </div>
      <div className="dropdown-item">
        Your organizations
      </div>
      <div className="dropdown-item">
        Your projects
      </div>
      <div className="dropdown-item">
        Your stars
      </div>
      <div className="dropdown-item">
        Your gists
      </div>
      <div className="dropdown-divider"></div>

      <div className="dropdown-item">
        Upgrade
      </div>

      <div className="hide-sm hide-md feature-preview-details position-relative">
        <div className="dropdown-item btn-link">
          Feature preview
        </div>
        <span
          className="feature-preview-indicator js-feature-preview-indicator"
          hidden=""
        ></span>
      </div>

      <div className="dropdown-item">
        Help
      </div>
      <div className="dropdown-item">
        Settings
      </div>

      <button onClick={ handleClick } className="dropdown-item dropdown-signout">
        Sign out
      </button>
    </div>
  );
};
const mapStateToProps = ({data}) => ({
  username: data ? data.login : ''
})

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderDropdown);
