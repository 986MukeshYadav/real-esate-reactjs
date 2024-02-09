import React from 'react';


//import routes and route
import{Routes,Route} from 'react-router-dom';


//import components
// import Header from './components/Header';
// import Footer from './components/Footer';
// import SignIn from './components/Signin';
 import Signup from './components/Signup'; 
//import Sidebar from "./components/Sidebar";
//import pages
// import Home from './pages/Home';
// import PropertyDetails from './pages/PropertyDetails';
const App = () => {
  return (
  <div className='max-w-[1440px] mx-auto bg-white'>
  <Signup/>
    </div>
  );
  
};

export default App;
  // {/* <Header/>
  //  <Routes>
  //  <Route path='/' element={<Home/>}/>
  //  <Route path='/property/:id' element={<PropertyDetails/>}/>
  //  <Route path='/signin' element={<SignIn />} />  {/* Add the SignIn route */}
  //  <Route path='/signUp' element={<SignUp />} />  {/* Add the SignUp route */}
  //  </Routes>
  //  <Footer/>  */}*/