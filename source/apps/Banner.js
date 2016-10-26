import React, { PropTypes } from 'react';

import CONST from '../constants'
const APP_CONST = CONST.APP

const Banner = (props) => (
 	<header>
	    <div className="container">
	        <div className="row">
	            <div className="col-lg-12">
	            	<div className="logo-wrapper">
	              	  <img className="img-responsive"  src={APP_CONST.APP_LOGO} alt="logo" />
	                </div>
	                <div className="intro-text">
	                    <h1 className="name">{APP_CONST.APP_NAME}</h1>
	                    <hr className="star-light" />
	                    <span className="skills">{APP_CONST.APP_TITLE}</span>
	                </div>
	            </div>
	        </div>
	    </div>
	</header>

);

export default Banner;