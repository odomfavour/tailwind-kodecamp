import { Routes, Route } from 'react-router-dom';

import Home from './pages/Index';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Recruit from './pages/Recruits';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/recruits' element={<Recruit />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  );
}

export default App;
