import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='flex items-center justify-between w-full py-6 navbar'>
      <img src={logo} alt="logo" className='w-[124px] h-[32px]' />
      <ul className='items-center justify-end hidden space-x-4 sm:flex'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-0'} text-white hover:text-sky-200`}
          >
            <a href={`${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="hidden space-x-4 sm:flex">
        <button type="button" className={`py-4 px-6 font-poppins font-medium text-[14px] text-primary bg-blue-gradient rounded-[10px] outline-none`}>
          Get Started
        </button>
        <button className="px-4 py-2 text-sm text-white bg-gray-500 rounded-2xl hover:bg-gray-600">Login</button>
      </div>

      {/* Mobile Navbar */}

      <div className='flex items-center justify-end flex-1 sm:hidden'>
        <img
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
          src={toggle ? close : menu}
          alt="menu"
        />

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='flex flex-col items-center justify-end flex-1 list-none'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
              >
                <a href={`${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
