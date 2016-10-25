import React, { PropTypes } from 'react';
import { withRouter, Link } from 'react-router';

import App from "./app";
import AppBar from 'material-ui/AppBar';
import Helmet from "react-helmet";

import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import Banner from '../common/banner'



const Home = React.createClass({
	render() {
	    return (
	      	<App>
	      		<Helmet title="Contact" />

				 <Banner />

				 <Link to={`/home`}>LINK TO HOME PAGE</Link>
	      	</App>
	    );
	}
})


export default withRouter(Home);