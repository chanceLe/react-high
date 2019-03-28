import React from 'react';

 const withDebug = WrapComponent => {
	
	
	
	return class extends React.Component{
		componentWillMount(){
			this.props = {
				...this.props,
				type:'aaa'
			}
		}
		render(){
			console.log("debug33333",this.props)
			return (
			<div {...this.props}>
				<WrapComponent {...this.props}/>
			</div>
			)
		}
	}
	
}

export default withDebug;