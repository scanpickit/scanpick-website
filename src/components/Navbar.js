import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='flex justify-between items-center h-25 mx-auto text-white'>
            <h1 className='w-full text-3xl font-bold text-[#05d79f] m-4'>ScanPick</h1>
            <ul className='hidden md:flex ease-in-out duration-100'>
                <li className='whitespace-nowrap p-4' onClick={() => scrollToSection('Home')}>Home</li>
                <li className='whitespace-nowrap p-4' onClick={() => scrollToSection('AboutUs')}>About Us</li>
                <li className='whitespace-nowrap p-4' onClick={() => scrollToSection('ContactUs')}>Contact Us</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden ease-in-out duration-100'>
                {!nav ? <AiOutlineClose className='m-4' size={20} /> : <AiOutlineMenu className='m-4' size={20} />}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 h-full w-[45%] bg-black ease-in-out duration-100' : 'fixed left-[-100%] top-0 h-full w-[45%] bg-black ease-in-out duration-100'}>
                <h1 className='w-full text-3xl font-bold text-[#05d79f] m-4'>ScanPick</h1>
                <ul className='pt-24 uppercase'>
                    <li className='whitespace-nowrap p-4 border-b border-gray-900'>Home</li>
                    <li className='whitespace-nowrap p-4 border-b border-gray-900' onClick={() => { scrollToSection('AboutUs'); handleNav(); }}>About Us</li>
                    <li className='whitespace-nowrap p-4 border-b border-gray-900'>Product</li>
                    <li className='whitespace-nowrap p-4' onClick={() => { scrollToSection('ContactUs'); handleNav(); }}>Contact Us</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
