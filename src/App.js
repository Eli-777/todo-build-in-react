import React,{useState} from 'react'
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom'

import TodoApp from './views/TodoApp'
import Login from './views/Login'
import NotFound from './views/NotFound'

import './App.scss';



function App() {
  const [isLogin, setIsLogin] = useState(false)
  const isAtLogin = useRouteMatch('/login')

  //不是在登入頁並且沒登入就轉到登入頁
  //如果只有 isLogin 做條件控制會無限迴圈，因為登入狀況沒改變就一直轉址
  if(!isLogin && !isAtLogin) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="app">
      <Switch>
        {/* 這裡是進入主畫面時有登入就進 todo 頁面，沒有就進登入頁面 */}
        <Route exact path="/">
          {
            isLogin ? <Redirect to="/todos" /> : <Redirect to="/login" />
          }
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/todos">
          <TodoApp />
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
