import routes from './routes';

import { render } from 'react-dom';
import React from 'react';
import { Router, useRouterHistory } from 'react-router';
import useNamedRoutes from 'use-named-routes';
import createHistory from 'history/lib/createHashHistory';

import tapPlugin from 'react-tap-event-plugin';
tapPlugin();

const history = useNamedRoutes(useRouterHistory(createHistory))({ routes });

const container = document.getElementById('app');

render(<Router history={history} routes={routes} />, container);