import React from 'react';
import{Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from './components/Signin';  
import SignUp from './components/Signup';   
import HouseList from './components/HouseList';  
import About from './components/About'; 
import AboutMe from './components/AboutMe';  
import Home from './pages/Home';
import Logout from './components/Logout';
import PropertyDetails from './pages/PropertyDetails';

const App = () => {
  return (
  <div className='max-w-[1440px] mx-auto bg-white'>
   <Header/>
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/property/:id' element={<PropertyDetails/>}/>
   <Route path='/signin' element={<SignIn />} />  {/* Add the SignIn route */}
   <Route path='/signUp' element={<SignUp />} />  {/* Add the SignUp route */}
   <Route path='/Home' element={<Home />} /> 
   <Route path='/About' element={<About />} /> 
   <Route path='/AboutMe' element={<AboutMe />} /> 
   <Route path='/logout' element={< Logout />} /> 
   <Route path='/HouseList' element={<HouseList />} /> 
   <Route path='/contact' element={<Footer />} />  
   
   </Routes>
   <Footer/> 
    </div>
  );
};

export default App;