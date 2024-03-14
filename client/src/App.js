import React from 'react'
import Home from './Components/home/Home';
import Register from './Components/register/Register'
import Login from './Components/login/Login'
import Healthcare from './Components/domain/Healthcare';
import Ecommerce from './Components/domain/Ecommerce';
import Education  from './Components/domain/Education';
import Finance from './Components/domain/Finance';
import Media from './Components/domain/Media';
import Machine_learning from './Components/domain/Machine_learning';
import { Route, Routes} from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import Results from './Components/Result';



const App = () => {
  return (
    <>
     <NavigationBar />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/hform' element={<Healthcare />} />
        <Route path='/ecom' element={<Ecommerce />} />
        <Route path='/educ' element={<Education />} />
        <Route path='/fin' element={<Finance />} />
        <Route path='/media' element={<Media />} />
        <Route path='/ml' element={<Machine_learning />} />
        <Route path='/result' element={<Results />} />
      </Routes>
    </>
  );
}

export default App