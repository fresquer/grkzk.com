'use client'

import Link from 'next/link';
import { useState } from 'react';

export default function Menu() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="text-white flex justify-between items-center py-4 px-8 border-b border-[#2f2f2f]">
            <div>
                <Link href="/">
                    <img src="/images/grkzk-logo.svg" alt="logo" />
                </Link>
            </div>
            <nav className='hidden md:block'>
                <ul className="flex gap-8">
                    <li className="text-white hover:underline">
                        <Link href="/">work</Link>
                    </li>
                    <li className="text-white hover:underline">
                        <Link href="/no-place-for-fear">no place for fear</Link>
                    </li>
                    <li className="text-white hover:underline">
                        <Link href="/about-me">about me</Link>
                    </li>
                </ul>
            </nav>
            {
                isOpen &&
                <div
                    className='absolute bg-black bg-opacity-90 w-screen h-screen top-0 left-0'
                >
                    <div

                        className='absolute top-1 right-1'
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {/* right cross svg */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                    <ul className="flex gap-16 h-full flex-col items-center justify-center text-3xl p-16 text-center">
                        <li className="text-white hover:underline" onClick={() => setIsOpen(false)}>
                            <Link href="/" >work</Link>
                        </li>
                        <li className="text-white hover:underline" onClick={() => setIsOpen(false)}>
                            <Link href="/no-place-for-fear" >no place for fear</Link>
                        </li>
                        <li className="text-white hover:underline" onClick={() => setIsOpen(false)}>
                            <Link href="/about-me" >about me</Link>
                        </li>
                    </ul >
                </div >
            }
            <div id="hamburger" className="cursor-pointer md:hidden" onClick={() => setIsOpen(!isOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </div>
        </div >
    )
}
