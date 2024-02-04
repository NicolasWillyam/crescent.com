import Link from 'next/link';
import React from 'react'
import { FiSearch } from "react-icons/fi";
import { PiHandbag } from "react-icons/pi";

interface NavigationItem {
  id: number;
  label: string;
  path: string;
}

const navigationData: NavigationItem[] = [
  { id: 1, label: 'Home', path: '/' },
  { id: 2, label: 'About', path: '/about' },
  { id: 3, label: 'Policy', path: '/policy' },
  { id: 4, label: 'Categories', path: '/categories' },
  { id: 5, label: 'Events', path: '/events' },
];

function Header() {
  return (
    <div className="w-full h-[80px] bg-[#FFF] duration-500  flex items-center justify-between fixed top-0 cursor-pointer">
        <div className="Logo absolute w-full text-center">
            <span className='font-bold text-[#000] text-[30px] uppercase'>crescent</span>
        </div>
        <div className="px-[60px] w-full flex items-center justify-between">
            <div className="left-bar">
                <nav>
                    <ul className='flex items-center font-medium text-[#000000]'>
                    {navigationData.map((item) => (
                        <li className='mr-[40px] text-[14px]' key={item.id}>
                            <Link href={item.path}>{item.label}</Link> 
                        </li>
                    ))}
                    </ul>
                </nav>
            </div>
            <div className="right-bar text-[#000] flex items-center">
                <span className="mx-[20px]"><FiSearch size={20}/></span>
                <span className="mx-[20px]"><PiHandbag size={20}/></span>
                <button className='text-[14px] ml-[20px] font-medium'>Login</button>
            
            </div>
            
            </div>
    </div>
   
  )
}

export default Header