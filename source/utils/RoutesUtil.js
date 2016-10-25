import URI from 'urijs';
import _ from 'lodash';

const RoutesUtil = {

	redirectToHome(nextState, replace) {
		// console.log(nextState)
		if(nextState.location.pathname == '/') {
			replace({ pathname: '/home' })
		}
		// ;
	}

}

export default RoutesUtil;
