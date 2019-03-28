import React from 'react';

export default class Refs extends React.PureComponent {
	constructor(){
		super();
		this.textInput = React.createRef();
	}
	
	focus = () => {
		this.textInput.current.focus();
	}
	
	render(){
		return (
			<div>
				<input ref={this.textInput} />
				<button onClick={this.focus}>点击使input获取焦点</button>
			</div>
		)
		
	}
}