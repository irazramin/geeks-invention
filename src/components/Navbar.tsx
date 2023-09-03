'use client'
import React, {useEffect, useState} from 'react';

const Navbar = () => {
    const [header, setHeader]: any = useState("header")

    const listenScrollEvent = (event: any): any => {
        if (window.scrollY < window.innerHeight) {
            return setHeader("#000000")
        }
        if (window.scrollY > (window.innerHeight) && window.scrollY < (window.innerHeight*2)) {
            return setHeader("#3f2caa")
        }
        if (window.scrollY > (window.innerHeight*2) && window.scrollY < (window.innerHeight*3)) {
            return setHeader("#01B5AC")
        }
        if (window.scrollY > (window.innerHeight*3)) {
            return setHeader("#000000")
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
        console.log(window.innerHeight*2)
        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <header className={`bg-[${header}] bg-opacity-70 py-[20px] md:px-[40px] px-[15px] fixed w-full top-0 left-0 z-50 transition-all duration-300 transparent flex md:flex-row flex-col  items-center justify-between absolute md:relative `}>
            <a className="order-2 md:order-1" href=""><img src="/geeks-logo-white.svg" alt=""/></a>
            <nav className="order-1 md:order-2">
                <ul className="flex flex-wrap">
                    <li className='border-b border-[#f16522] border-transparent pl-[13px] '><a href="#" className="text-[14px] leading-[17px] uppercase relative text-white py-[5px] px-[8px] ">Home</a></li>
                    <li className='border-b hover:border-[#f16522] border-transparent pl-[13px]'><a href="#" className="text-[14px] leading-[17px] uppercase relative text-white py-[5px] px-[8px]">Works</a></li>
                    <li className='border-b hover:border-[#f16522] border-transparent pl-[13px]'><a href="#" className="text-[14px] leading-[17px] uppercase relative text-white py-[5px] px-[8px]">Technologies</a></li>
                    <li className='border-b hover:border-[#f16522] border-transparent pl-[13px]'><a href="#" className="text-[14px] leading-[17px] uppercase relative text-white py-[5px] px-[8px]">Services</a></li>
                    <li className='border-b hover:border-[#f16522] border-transparent pl-[13px]'><a href="#" className="text-[14px] leading-[17px] uppercase relative text-white py-[5px] px-[8px]">Company</a></li>
                    <li className='border-b hover:border-[#f16522] border-transparent pl-[13px]'><a href="#" className="text-[14px] leading-[17px] uppercase relative text-white py-[5px] px-[8px]">Contacts</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;