import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login'
import { getToken } from './helpers/auth'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // const [user, setUser] = useState(null)

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  return (
    <Router>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <Routes>
            {/* <Route path='/register' component={Register} />  old way of expressing react route */}

            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          </Routes>
        </header>
      </div>
      <Footer />
    </Router>
  )
}

export default App
