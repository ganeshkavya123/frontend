import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Login from './components/login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </Router>
   
  );
}

export default App;
