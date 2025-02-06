import { InstagramLogo, TiktokLogo, XLogo } from '@phosphor-icons/react'
import Link from 'next/link'
import React from 'react'

const FooterComponent = () => {

    return (
        <footer className='w-full h-auto flex flex-col md:flex-row items-center justify-between bg-[#070924] text-white p-4'>
            <p className='text-center md:text-left mb-2 md:mb-0'>&copy; {new Date().getFullYear()} Todos los derechos reservados</p>
            <div className='flex gap-4'>
                <Link href="https://x.com/home" className='hover:cursor-pointer hover:transform hover:scale-110'>
                    <XLogo size={32} color='#fff'/>
                </Link>
                <Link href="https://www.tiktok.com/" className='hover:cursor-pointer hover:transform hover:scale-110'>
                    <TiktokLogo size={30} color='#fff'/>
                </Link>
                <Link href="https://www.instagram.com/" className='hover:cursor-pointer hover:transform hover:scale-110'>
                    <InstagramLogo size={30} color='#fff'/>
                </Link>
            </div>
        </footer>
    )
}

export default FooterComponent