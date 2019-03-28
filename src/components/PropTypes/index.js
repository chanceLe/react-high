import React   from 'react';

import propTypes from 'prop-types';
export default class PropTypes extends React.PureComponent {
	
	render(){
		return (
			<h1>hello {this.props.name}</h1>
		)
	}
}

PropTypes.propTypes = {
	name:propTypes.string.isRequired
}