import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Main from './components/Main';
import Contact from './components/Contact';
import Register from './authentication/Register';
import Login from './authentication/Login';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/" element={<Main/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
