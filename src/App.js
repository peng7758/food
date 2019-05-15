import React from "react"
import { Route,Switch,Redirect } from 'react-router-dom'
import Home from './views/home/index'
import Login from './views/login/index'

class App extends React.Component{
    render(){
        return(
           <Switch>
               <Route path="/login" component={ Login }></Route>
               <Route path="/home" component={ Home }></Route>
               <Redirect to="/home/user"></Redirect>
           </Switch>
        )
    }
}


export default App