import React, { PropTypes } from 'react';
import { withRouter, Link } from 'react-router';

import App from "./app";
import Helmet from "react-helmet";
import Banner from '../common/banner'


const Home = React.createClass({
	render() {
	    return (
	      	<App>
	      		<Helmet title="Home" />

	
				 <Banner />


				 <Link to={`/contact`}>LINK TO CONTACT PAGE</Link>
	      	</App>
	    );
	}
})


export default withRouter(Home);