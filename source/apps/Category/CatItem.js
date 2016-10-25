import React, { PropTypes, Component } from 'react';

import APP_CONST from '../../constants/app'


const CatItem = (props) => (
	 <li className="media">
        <a href={'#/cat/' + props.sid}>   
          <div className="media-left">
               <img className="media-object"  alt={props.title} src={APP_CONST.IMAGE_HOST + props.img} />    
          </div>
          <div className="media-body">
            <h3 className="media-heading">{props.title}</h3>
             <p>{props.desc}</p>    
             <i className="fa fa-chevron-right hidden-md-up"></i>
          </div>
           <span className="label-cat">{props.title}</span>
        </a>
    </li>
);



export default CatItem;