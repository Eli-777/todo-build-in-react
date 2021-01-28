import React from 'react'
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom'
import useFacebookLogin from './hooks/useFacebookLogin'

import TodoApp from './views/TodoApp'
import Login from './views/Login'
import NotFound from './views/NotFound'

import './App.scss';



function App() {
  const isAtLogin = useRouteMatch('/login')

  const [response, handleFBLogin, handleFBLogout] = useFacebookLogin();

  if (!response) {
    return <> </>
  }
  if (response !== 'connected' && !isAtLogin) {
    return <Redirect to="/login" />
  }



  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          {
            response === 'connected' ? <Redirect to="/todos" /> : <Redirect to="/login" />
          }
        </Route>
        <Route path="/login">
          <Login response={response} handleFBLogin={handleFBLogin} />
        </Route>
        <Route path="/todos">
          <TodoApp response={response} handleFBLogout={handleFBLogout} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
