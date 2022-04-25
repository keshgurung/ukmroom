
import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './pages/Header';


function App() {
  return (
    <>
    <Router>
      <Header />
    <div className="App">
      <Routes>
      {/* <Route exact path='/' element={<Home />} />        */}
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />       
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
