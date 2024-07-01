import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalQTY, setOpenCart } from '../app/CartSlice.js';
import { useLocation } from 'react-router-dom';
import classNames from './utils/classNames';
import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo.png';

const Navbar = () => {
    const [navState, setNavState] = useState(false);
    const location = useLocation();
    const currentLocation = location.pathname;
    const dispatch = useDispatch();
    const totalQTY = useSelector(selectTotalQTY);

    const onCartToggle = () => {
        dispatch(setOpenCart({
            cartState: true
        }))
    }

    const onNavScroll = () => {
        if(window.scrollY > 30) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', onNavScroll);

        return () => {
            window.removeEventListener('scroll', onNavScroll);
        }
    },[]);

    const fixedNavRoutes = ['/checkout'];  // routes where nav will be fixed from the starting no matter the scroll position
    const fixedNav = fixedNavRoutes.includes(currentLocation);

    
return (
   <>
      <header 
    //   className={
    //     !navState ? 'absolute top-7 left-0 right-0 opacity-100 z-50' : 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'
    //   }
    className={classNames( fixedNav ? 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme' : (!navState ? 'absolute top-7 left-0 right-0 opacity-100 z-50' : 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme') )}
      >
        <nav className='flex items-center justify-between nike-container'>
            <div className='flex items-center'>
                <img
                    src={logo}
                    alt="logo/img"
                    className={`w-16 h-auto ${(navState || fixedNav) && "filter brightness-0"}`}
                />
            </div>
            <ul className='flex items-center justify-center gap-2'>
                <li className='grid items-center'>
                    <MagnifyingGlassIcon className={`icon-style ${(navState || fixedNav) && "text-slate-900 transition-all duration-300"}`} />
                </li>
                <li className='grid items-center'>
                    <HeartIcon className={`icon-style ${(navState || fixedNav) && "text-slate-900 transition-all duration-300"}`} />
                </li>
                <li className='grid items-center'>
                    <button type='button' onClick={onCartToggle} className='border-none outline-none active:scale-110 transition-all duration-300 relative'>
                        <ShoppingBagIcon className={`icon-style ${(navState || fixedNav) && "text-slate-900 transition-all duration-300"}`} />
                        <div className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${(navState || fixedNav) ? 'bg-slate-900 text-slate-100 shadow-slate-900' : 'bg-slate-100 text-slate-900 shadow-slate-100'}`}>{totalQTY}</div>
                    </button>
                </li>
            </ul>
        </nav>
      </header>
   </>
  )
}

export default Navbar