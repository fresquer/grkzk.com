'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';

import { useRouter, usePathname } from 'next/navigation';

export default function Menu() {

    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname()

    const links = [
        {
            label: 'work',
            url: '/',
        },
        {
            label: 'no place for fear',
            url: '/no-place-for-fear',
        },
        {
            label: 'about me',
            url: '/about-me',
        },
    ]

    return (
        <div className="text-white flex justify-between items-center py-4 px-8 border-b border-[#2f2f2f]">
            <div>
                <Link href="/">
                    <img src="/images/grkzk-logo.svg" alt="logo" />
                </Link>
            </div>
            <nav className='hidden md:block'>
                <ul className="flex gap-8">
                    {links.map((link, index) => (
                        <li key={index} className={`text-white hover:underline ${pathname === link.url ? 'underline' : ''}`}>
                            <Link href={link.url} className="text-white">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            {
                isOpen &&
                <div
                    className='absolute bg-black bg-opacity-90 w-screen h-screen top-0 left-0'
                >
                    <div

                        className='absolute top-[25px] right-[25px] text-[#525252]'
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                    <ul className="flex gap-24 h-full flex-col items-center justify-center text-5xl p-16 text-center">
                        {
                            links.map((link, index) => (
                                <li key={index} className={`text-white ${pathname === link.url ? 'underline' : ''}`} onClick={() => setIsOpen(false)}>
                                    <Link href={link.url} className="text-white">
                                        {link.label}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul >
                </div >
            }
            <div id="hamburger" className="cursor-pointer md:hidden text-[#525252]" onClick={() => setIsOpen(!isOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </div>
        </div >
    )
}
