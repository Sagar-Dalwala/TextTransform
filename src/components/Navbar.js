import React, { Component } from 'react'
import PropTypes from 'prop-types'   // import pror types from prop-types
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export class Navbar extends Component {
  render() {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{this.props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{this.props.about}</Link>
              </li>
            </ul>
            <div className="form-check form-switch">
            <input className={`form-check-input`} type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={this.props.toggleMode}/>
            <label className={`form-check-label text-${this.props.mode === 'light' ? 'dark' : 'light '}`} htmlFor="flexSwitchCheckDefault">{this.props.mode==='light' ? 'Dark Mode' : 'Light Mode'}</label>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
Navbar.propTypes = {  // set propType 
    title : PropTypes.string.isRequired,  //required fields.
    about : PropTypes.string.isRequired,
    }
Navbar.defaultProps ={  // set default props type
    title :"Title",  
    about : "About"
}
export default Navbar
