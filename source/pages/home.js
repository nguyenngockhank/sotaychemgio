import React, { PropTypes } from 'react';
import { withRouter, Link } from 'react-router';
import Helmet from "react-helmet";
import { Breadcrumb } from 'react-bootstrap';
var Scroll  = require('react-scroll');
var Element = Scroll.Element;

import App from "./app";
import Banner from '../apps/Banner'
import Footer from '../apps/Footer'
import Navbar from '../common/navbar'
import NAVBAR_CONST from '../constants/navbar'

import CatSection from '../apps/Category/CatSection'
import data from '../constants/data'

var link =	<Link to={`/contact`}>LINK TO CONTACT PAGE</Link>


const Home = React.createClass({
	render() {
	    return (
	      	<App>
	      		<Helmet title="Home" />

				<Navbar linkItems={NAVBAR_CONST.HOME} />
				<Banner />
				
				<div className="container">
					<Breadcrumb>
					    <Breadcrumb.Item active> <i className="fa fa-home"></i> Home </Breadcrumb.Item>
					</Breadcrumb>
		         </div>

		        <Element name={NAVBAR_CONST.HOME[1].dest} className="container">
		            <CatSection items={data.cat.data} />
		        </Element>

		        <Element name={NAVBAR_CONST.HOME[3].dest}>
		        	<Footer />
		        </Element>
	      	</App>
	    );
	}
})


export default withRouter(Home);