// 根组件
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Admin from './pages/admin/Admin'
import Login from './pages/login/Login'

function App() {
  return <>
    <Router>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/' component={Admin}></Route>
      </Switch>
    </Router>
  </>
}

export default App