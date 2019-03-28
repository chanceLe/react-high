import React from 'react';

import Debug from './debug.js';
 class News  extends React.Component {
	
	render(){
		console.log(this.props,"高阶组件添加debug")
		return (
		<div {...this.props}>news</div>
		)
	}
}

export default Debug(News)