import requests from '@/utils/requests'
import { useRouter } from 'next/router'
import React from 'react'

function Nav() {
    const router = useRouter();

    return (
        <nav>
            <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap scrollbar-hide space-x-10 sm:space-x-20 overflow-x-scroll'>
                {Object.entries(requests).map(([key, { title, url }]) => (
                    <h2 onClick={() => router.push(`/?genre=${key}`)} key={key} className='cursor-pointer transition duration-100 transform hover:scale-125 last:pr-24 hover:text-white active:text-[#4ade80] '>{title}</h2>
                ))}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12 " />
        </nav>
    )
}

export default Nav
