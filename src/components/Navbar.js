import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {


  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li>
          </ul>

              <div className="form-check form-switch">
                <label id='blue' className="form-check-label" onClick={props.toggle} htmlFor="flexSwitchCheckDefault"><img src={process.env.PUBLIC_URL + `/blue${props.mode}.png`} width="30" alt='blue'/>&nbsp;&nbsp;</label>
              </div>
              <div className="form-check form-switch">
                <label id='green' className="form-check-label" onClick={props.toggle} htmlFor="flexSwitchCheckDefault"><img src={process.env.PUBLIC_URL + `/green${props.mode}.png`} width="30" alt='blue'/>&nbsp;&nbsp;</label>
              </div>
              <div className="form-check form-switch">

                <label id='red' className="form-check-label" onClick={props.toggle} htmlFor="flexSwitchCheckDefault"><img src={process.env.PUBLIC_URL + `/red${props.mode}.png`} width="30" alt='blue' />&nbsp;</label>
              </div>


        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "Set Title"
}