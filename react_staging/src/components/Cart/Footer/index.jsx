import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }

    //清除所有已完成的todo
    handleClearAllDone = () => {
        this.props.clearAllDone()
    }
    
    render() {
        const {todos} = this.props
        //已完成的个数
        const doneCount = todos.reduce((pre, todo) => {return pre + (todo.done? 1 : 0)}, 0)
        //总数
        const total = todos.length
        return (
            <div className="todo-footer">
                <label>
                <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0}/>
                </label>
                <span>
                <span>Selected {doneCount}</span> / All {total}
                </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">Clear your cart</button>
            </div>
        )
    }
}
