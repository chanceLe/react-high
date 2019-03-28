import React  from 'react';
// import {Button }  from 'antd';
/*
Context 设计目的是为共享那些被认为对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言。
*/

const ThemeContext = React.createContext("light");

const ThemeButton = (props)=>{
	return (
	 <ThemeContext.Consumer>
		{theme =>{
			console.log(theme)
			return (
			<button {...props} theme={theme}>按钮</button>
			)
		} }
	 </ThemeContext.Consumer>
	)
}

const Toolbar = (props)=>{
	return (
		<div>
			<ThemeButton />
		</div>
	)
}
export default class Context extends React.PureComponent{
	render(){
		return (
		<>
		<ThemeContext.Provider value="dark" >
		<Toolbar />
		
		</ThemeContext.Provider>
		
		<Toolbar />
		</>
		)
	}
}