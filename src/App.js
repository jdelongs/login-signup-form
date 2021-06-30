import "./App.css"
import { useState } from "react"
import AuthContext from "./Context/AuthContenxt"
import Landing from "./layout/landing"
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
      <div className='App'>{!isAuth ? <Landing /> : <Profile />}</div>
    </AuthContext.Provider>
  )
}

export default App
