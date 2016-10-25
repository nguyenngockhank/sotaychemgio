import React, { PropTypes } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import APP_CONST from '../constants/app'


var Scroll  = require('react-scroll');
var Link  = Scroll.Link;

function renderLinks(links){
	const listItems = links.map((link, key) =>
	  	<li  key={key}><Link to={link.dest} {...APP_CONST.INNER_LINK_PROPS} >{link.text}</Link></li>
	);
	return listItems;
}


const MainNav = (props) => (
 	<Navbar className="navbar-custom navbar-fixed-top">
	    <Navbar.Header>
	      <Navbar.Brand>
	        <a href="#">{APP_CONST.APP_NAME}</a>
	      </Navbar.Brand>
	      <Navbar.Toggle />
	    </Navbar.Header>

	    <Navbar.Collapse>
		   	<Nav pullRight>
	        	{renderLinks(props.linkItems)}
	      	</Nav>
	    </Navbar.Collapse>
	</Navbar>
);

export default MainNav;