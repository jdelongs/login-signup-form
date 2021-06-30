import React from "react"
import LoginSignupLinks from "../components/LoginSignupLinks"
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom"
import Login from "../pages/login"
import SignUp from "../pages/signup"

const Landing = () => {
  return (
    <div className='landing_container'>
      <div className='landing_content'>
        <h3 className='landing_welcome'>Welcome!</h3>
        <Router>
          <LoginSignupLinks />
          <Redirect from='/' to='/login' />
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default Landing
