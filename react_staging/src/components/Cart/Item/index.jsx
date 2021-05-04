import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    state = {mouse: false} //鼠标移入移除

    //鼠标移入，移除的回调
    handleMouse = (flag) => { 
        return () => {
            this.setState({mouse: flag})
        }
    }

    //勾选，或者取消获选某一个todo的回调
    handleCheck = (id) => {
        return (event) => {
            console.log(id, event.target.checked)
            this.props.updateTodo(id, event.target.checked)
        }
    }

    //删除一个todo的回调
    handleDelete = (id) => {
        if (window.confirm('确定删除吗？')) {
            console.log("delete :",id)
            this.props.deleteTodo(id)
        }
    }

    render() {
        const {id, name, done} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor: mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
            </li>
        )
    }
}
