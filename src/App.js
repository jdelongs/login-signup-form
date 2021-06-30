import "./App.css"
import { useState } from "react"
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom"
import AuthContext from "./Context/AuthContext"
import Login from "./pages/login"
import SignUp from "./pages/signup"
import Profile from "./pages/profile"

// // added react context to the project after realizing that passing
// isAuth around was not the greatest used https://reactjs.org/docs/context.html
function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        login: () => setIsAuth(true),
        logout: () => setIsAuth(false),
      }}
    >
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          {isAuth ? (
            <Route exact path='/profile' component={Profile} />
          ) : (
            <Redirect to='/login' />
          )}
        </Switch>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
