import React from 'react'
import PropTypes from 'prop-types'


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
            <a className="nav-link" href="/">{props.abouttext}</a>
          </li>
        </ul>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
          
        </form> */}
        <div className="btn-group me-2 " role="group" aria-label="First group">
          <button type="button" className="btn btn-primary" onClick={props.handleB} ></button>
          <button type="button" className="btn btn-danger" onClick={props.handleR}></button>
          <button type="button" className="btn btn-warning" onClick={props.handleY}></button>
          <button type="button" className="btn btn-success" onClick={props.handleG}></button>
        </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} `}>
          <input className="form-check-input mx-1" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {title: PropTypes.string ,
                    abouttext:PropTypes.string}



Navbar.defaultProps = {
    title: 'Set title here',
    abouttext: 'About text here'
}