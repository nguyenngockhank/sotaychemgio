import React from 'react';
import { Route, Redirect, IndexRedirect, IndexRoute } from 'react-router';

import AppPage from './pages/app';
import HomePage from './pages/home';
import ContactPage from './pages/contact';

import RoutesUtil from './utils/RoutesUtil'

export default (
	<Route name="app" component={AppPage} path="/" onEnter={RoutesUtil.redirectToHome} >
		<Route name="app" component={HomePage} path="home" ></Route>
		<Route name="app" component={ContactPage} path="contact" ></Route>
	</Route>
	
)