import React,{Component} from 'react';

import List from './List'

/*
组合 和  React.Children 的几个方法 

React.Children.count(this.props.children)  //子元素的个数

React.Children.map(this.props.children,callback)  //遍历子元素

React.children.forEach()  //也是遍历  但 不返回对象

React.Children.only(this.props.children)  //只能有一个子元素   否则报错

React.cloneElement(ele,{})   //克隆元素  第一个参数是元素 第二个参数是属性对象集
*/
export default class Combine extends Component {
	state = {
		list : [
			1,2,3
		]
	}
	render(){
		const cloned = React.cloneElement(<li>cloned</li>,{
			name:"uuuu"
		})
		return (
			<>
			<ol>
			<List list={this.state.list}>
				<li>子1</li>

			</List>
			
			</ol>
			<ul>
				{cloned}
			</ul>
			</>
		)
	}
}