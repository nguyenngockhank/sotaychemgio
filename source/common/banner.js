import React, { PropTypes } from 'react';

const style ={
	wrapper: {
		background: '#B8312E',
		color: 'white',
		padding: '25px 0',
		textAlign: 'center',
		fontSize: '1.75em',
		fontFamily: '"Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif',
	},
	logoWrapper: {
		boxShadow: '1px 2px 4px rgba(0, 0, 0, .5)',
		borderRadius: '50%',
		margin: 'auto',
		'maxWidth': '256px',
	},
	logo: {
		display: 'block',
		height: 'auto',
		margin: '0 auto 20px',
		'borderRadius': '50%',
		'maxHeight': '256px',
	},
	introTexTitle: {
		fontSize: '3em',
		
		textTransform: 'uppercase',
	}
}

const Banner = (props) => (
 	<header style={style.wrapper} {...props} >
 		<div style={style.logoWrapper} className="logo-wrapper">
      	  <img style={style.logo} className="img-responsive" src="http://sotaychemgio.com/assets/images/profile.png" alt="logo" />
        </div>
        <div className="intro-text">
        	<h1 style={style.introTexTitle}>So tay chem gio</h1>
        	<span >Quy tụ tinh hoa chém gió</span>
        </div>
 	</header>
);

export default Banner;