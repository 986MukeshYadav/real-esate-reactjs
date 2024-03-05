import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';
import { UserContext } from '../App';


const Header = () => {
  const {state} = useContext(UserContext);
  const RenderMenu = () =>{
      if(state){
        return(
          <>
          <Link className='hover:text-voilet-900 transition' to='/Home'> Home </Link>
          <Link className=' text-black px-4 py-3 rounded-lg  transition' to='/HouseList' >Property</Link>
          <Link className='hover:text-voilet-900 transition' to='/About'>About</Link>
          <Link className=' text-black px-4 py-3 rounded-lg  transition' to='/Footer'>Contact</Link>
          <Link className=' text-black px-4 py-3 rounded-lg  transition' to='/AboutMe'>DashBoard</Link>
          <Link className='bg-red-700 hover:bg-red-800 text-white px-4 py-3 rounded-lg  transition' to='/logout'>Logout
          </Link>
          </>
        )
      }else{
        return(
          <>
           <Link className='hover:text-voilet-900 transition' to='/Home'> Home </Link>
          <Link className=' text-black px-4 py-3 rounded-lg  transition' to='/HouseList' >Property</Link>
          <Link className='hover:text-voilet-900 transition' to='/About'>About</Link>
          <Link className=' text-black px-4 py-3 rounded-lg  transition' to='/Footer'>Contact</Link>
          <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg  transition' to='/signIn'>Join us
          </Link>
          </>
        )
      }
  }

  return (
    <header className='py-6 mb-5 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <Link to='/'>
          <img src={Logo} alt='' />
        </Link>
        {/* buttons*/}
        <div className='flex items-center gap-6'>
          {/* Link to the SignIn page */}
          {/* <Link className='hover:text-voilet-900 transition' to='/Home'> Home </Link>
          <Link className=' text-black px-4 py-3 rounded-lg  transition' to='/HouseList' >Property</Link>
          <Link className='hover:text-voilet-900 transition' to='/About'>About</Link>
          <Link className=' text-black px-4 py-3 rounded-lg  transition' to='/Footer'>Contact</Link>
          <Link className=' text-black px-4 py-3 rounded-lg  transition' to='/AboutMe'>DashBoard</Link>
          <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg  transition' to='/signIn'>Join us
          </Link>
          <Link className='bg-red-700 hover:bg-red-800 text-white px-4 py-3 rounded-lg  transition' to='/logout'>Logout
          </Link> */}
          <RenderMenu/>
        </div>
      </div>
    </header>
  );
};

export default Header;