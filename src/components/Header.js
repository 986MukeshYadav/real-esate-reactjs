import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';

const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <Link to='/'>
          <img src={Logo} alt='' />
        </Link>
        {/* buttons*/}
        <div className='flex items-center gap-6'>
          {/* Link to the SignIn page */}
          <Link className='hover:text-voilet-900 transition' to='/signIn'>
            Sign in
          </Link>
          <Link className='hover:text-voilet-900 transition' to='/signIn'>
            Sign in
          </Link>
          <Link className='hover:text-voilet-900 transition' to='/signIn'>
            Sign in
          </Link>
          <Link className='hover:text-voilet-900 transition' to='/signIn'>
            Sign in
          </Link>
          <Link
            className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg  transition'
            to='/signUp'
          >
            Sign in
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
