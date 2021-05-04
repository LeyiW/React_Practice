import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    //键盘事件的回调
    handleKeyUp = (event) => {
        //解构获得keyCode，target
        const {keyCode, target} = event
        //判断是否是回车键
        if (keyCode !== 13) return
        console.log(target.value, keyCode)
        //添加的todo名字不能为空
        if (target.value.trim() === '') {
            alert("input could not be null")
            return
        }
        //准备好一个todo对象
        const todoObj = {id:nanoid(), name: target.value, done: false}
        //将todoObj传给App
        this.props.addTodo(todoObj)
        //清空输入
        target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="Create a item ，press eter"/>
            </div>
        )
    }
}
