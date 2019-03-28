import React,{Component} from 'react';

export default class childs extends React.PureComponent {

	
	render(){

		return (
		<React.Fragment>
			
			{
				React.Children.only(this.props.children)
			}
			{
				React.Children.count(this.props.children)
			}
			{
				React.Children.map(this.props.children,(child,i)=>(<div key={i}>{child}--React.Children.map函数</div>))
			}
		
		</React.Fragment>
		)
	}
	
}