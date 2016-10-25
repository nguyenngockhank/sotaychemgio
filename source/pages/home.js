import React, { PropTypes } from 'react';
import { withRouter, Link } from 'react-router';

import App from "./app";
import Helmet from "react-helmet";


import Banner from '../common/banner'
import Navbar from '../common/navbar'


import { Breadcrumb } from 'react-bootstrap';

var Scroll  = require('react-scroll');
var Element    = Scroll.Element;
import NAVBAR_CONST from '../constants/navbar'

const Home = React.createClass({
	render() {
	    return (
	      	<App>
	      		<Helmet title="Home" />

				<Navbar linkItems={NAVBAR_CONST.HOME} />
				<Banner />
				
				<Breadcrumb>
				    <Breadcrumb.Item active> <i className="fa fa-home"></i> Home </Breadcrumb.Item>
				</Breadcrumb>

				<Link to={`/contact`}>LINK TO CONTACT PAGE</Link>

				<div style={{height: '800px'}}>
					<Element name={NAVBAR_CONST.HOME[0].dest} className="element">
			            H11111111111111111111111111
			        </Element>
		        </div>

		        <div style={{height: '800px'}}>
			        <Element name={NAVBAR_CONST.HOME[1].dest}  className="element">
			         H1222222222222222222
			        </Element>
		         </div>
		         <div style={{height: '800px'}}>
			        <Element name={NAVBAR_CONST.HOME[2].dest}  className="element">
			         H1222222222222222222
			        </Element>
		         </div>

		         <div style={{height: '800px'}}>
			        <Element name={NAVBAR_CONST.HOME[3].dest}  className="element">
			         H1222222222222222222
			        </Element>
		         </div>
	      	</App>
	    );
	}
})


export default withRouter(Home);