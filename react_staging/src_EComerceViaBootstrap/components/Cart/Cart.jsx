import React, { Component } from 'react'
import Header from './Header'
import List from './List'
import Footer from '../Cart/Footer'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Cart.css'
import { Container } from 'react-bootstrap'

export default class Cart extends Component {
    //初始化状态
  state = {todos:[
    {id:'001', name:'Beef',done:true},
    {id:'002', name:'Potato',done:false},
    {id:'003', name:'Tomato',done:false},
  ]}

  //addToDo 用于添加一个todo，接收的参数是todo对象
  addTodo = (todoObj)=>{
    const {todos} = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({todos: newTodos})
  }

  //用于更新一个todo对象
  updateTodo = (id, done) => {
    //获取状态中的todos
    const {todos} = this.state
    //加工数据
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return {...todoObj, done:done}
      else return todoObj
    })
    this.setState({todos: newTodos})
  }

  //用于删除一个todo对象
  deleteTodo = (id) => {
    const {todos} = this.state
    //删除指定id的todo对象
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })

    //更新状态
    this.setState({todos:newTodos})
  }

  //
  checkAllTodo = (done) => {
    //获取原来的todos
    const {todos} = this.state
    //加工数据
    const newTodos = todos.map((todoObj) => {
      return {...todoObj, done:done}
    })

    this.setState({todos: newTodos})
  }

  //clearAllDone 用于清楚所有已完成的
  clearAllDone = () => {
    //获取原来的todos
    const {todos} = this.state
    //加工数据
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done
    })

    this.setState({todos: newTodos})
  }


    render() {
        const {todos} = this.state
        return (
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <div className="todo-container">
                            <div className="todo-wrap">
                            <Header addTodo={this.addTodo}/>
                            <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                            <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
                            </div>
                        </div>
                    </Col>
                </Row>
                
            </Container>
            
        )
    }
}
