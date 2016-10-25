import React, { PropTypes, Component } from 'react';
import CatItem from './CatItem'

import APP_CONST from '../../constants/app'

// console.log('RIGHT HERE')
function renderItems(items){
	console.log(items)
	const listItems = items.map((item, key) =>
	  	<CatItem {...item} />
	);
	return listItems;
}

const CatSection = (props) => (

  	<div id="catContainer">
  		<h2 className="text-left"><i className="fa fa-list-ul"></i> Danh mục</h2>

  		<div className="row">
	        <div className="col-lg-12">
	            <div>
  					<ul className="media-list">
  						{renderItems(props.items)}
  					 </ul>
	            </div>
	        </div>
	    </div>
  	</div>
);



export default CatSection;