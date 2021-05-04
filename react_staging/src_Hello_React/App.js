//create app
import React , {Component} from 'react'
import Hello from './Hello/index';

//或者可以在这里创建并暴露app组件
class App extends Component{
    render() {
        return (
            <Hello/>
        )
    }
}
//expose 'App'
export default App;