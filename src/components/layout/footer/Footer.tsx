import { InstagramLogo, TiktokLogo, XLogo } from '@phosphor-icons/react'
import Link from 'next/link'
import React from 'react'

const FooterComponent = () => {

    return (
        <footer className='w-full h-auto flex flex-col md:flex-row items-center justify-between bg-[#070924] text-white p-4'>
            <p className='text-center md:text-left mb-2 md:mb-0'>&copy; {new Date().getFullYear()} Todos los derechos reservados</p>
            <div className='flex gap-4'>
                <Link href="https://x.com/home" className='text-gray-300 hover:text-[#f2ff3f] hover:cursor-pointer'>
                    <XLogo size={32} />
                </Link>
                <Link href="https://www.tiktok.com/" className='text-gray-300 hover:text-[#F033AE] hover:cursor-pointer'>
                    <TiktokLogo size={30} />
                </Link>
                <Link href="https://www.instagram.com/" className='text-gray-300 hover:text-[#46e8fd] hover:cursor-pointer'>
                    <InstagramLogo size={30} />
                </Link>
            </div>
        </footer>
    )
}

export default FooterComponent