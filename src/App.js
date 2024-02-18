

import React, { createContext, useReducer } from 'react';
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
import AdminLayout from './components/layouts/AdminLayout';
import  AdminUsers  from './pages/AdminUsers';
import Admincontact  from './pages/Admin-Contact';
import PropertyDetails from './pages/PropertyDetails';
import { initialState,reducer } from '../src/reducer/UseReducer';

//1.contextAPI
export const UserContext = createContext();

const App = () => {
  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    
  <div className='max-w-[1440px] mx-auto bg-white'>
    <UserContext.Provider value={{state,dispatch}}>
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

   <Route path="/admin" element={<AdminLayout/>}> 
    <Route path="users" element={<AdminUsers/>} /> 
    <Route path="contacts" element={<Admincontact/>} />
</Route>


   <Route path='/contact' element={<Footer />} />  
  
   </Routes>
   <Footer/> 
   </UserContext.Provider>
    </div>
   
  );
};

export default App;