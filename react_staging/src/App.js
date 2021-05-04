//create app
import React , {Component} from 'react'
import NavComponent  from "./components/NavComponent/NavComponent";
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home/Home';
import Find_Store from './components/Find_Store/Find_Store';
import Online_Order from './components/Online_Order/Online_Order';
import Footer from'./components/Footer/Footer';
import Cart from './components/Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'


//或者可以在这里创建并暴露app组件
class App extends Component{

    

    render() {
        return (
                <div style={{backgroundColor:'#F8F7F5'}}>
                    <NavComponent/>
                    <div>
                        {/* register the routes */}
                        <Switch>
                            <Route exact path='/' component={Home}></Route>
                            <Route path='/order_online' component={Online_Order}></Route>
                            <Route path='/find_store' component={Find_Store}></Route>
                            <Route path='/cart' component={Cart}></Route>
                        </Switch>
                    </div>
                    
                    <Footer/>
                </div>   
        )
    }
}

export default App;