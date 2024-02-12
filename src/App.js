import logo from './logo.svg';

import './App.scss';
import Homepage from './compnents/Homepage';
import { Route, Routes } from 'react-router-dom';
import About from './compnents/About';
import Project from './compnents/Project';
import Contact from './compnents/Contact';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/contacts' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
