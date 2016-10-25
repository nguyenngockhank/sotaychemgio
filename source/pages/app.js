import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';

import Helmet from "react-helmet";


const App = React.createClass({



	render() {
	    return (
      		<div>
      			<Helmet 
      				link={[
	                    {"rel": "canonical", "href": "/public/images/favico.png"},
	                ]}
      				titleTemplate="%s - Sổ tay chém gió"  />
      			{this.props.children}
      		</div>
	    );
	}
})


export default withRouter(App);