import React, { useContext, useState } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'

const NavbarComponent = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const hanldeClickClose = () => {
        setIsMenuOpen(false)
    }

    return (
        <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className='static w-full h-32 bg-[#070924]'>
            <NavbarContent justify='start'>
                <NavbarBrand className='p-2'>
                    <Link className='flex items-center' href={"/"}>
                        <Image src={'/cocktail_logo.png'} alt='Logo' width={100} height={100} />
                        <p className='titleCC text-4xl p-2 ml-2 md:text-6xl'>Cocktail Crazy</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent justify='end' className="hidden md:flex gap-6 pr-6">
                <NavbarItem isActive>
                    <Link className='text-white text-base font-semibold	hover:text-[#f2ff3f] hover:underline hover:cursor-pointer' href="/recipes">
                        Recetas
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link className='text-white text-base font-semibold hover:text-[#F033AE] hover:underline hover:cursor-pointer' href="/ingredients">
                        Ingredientes
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link className='text-white text-base font-semibold hover:text-[#46e8fd] hover:underline hover:cursor-pointer' href="/community">
                        Comunidad
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className="md:hidden text-white" justify="end">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>
            {isMenuOpen && (
                <NavbarMenu className="md:hidden flex flex-col items-end justify-evenly bg-[#070924] z-50 top-28 gap-6">
                    <NavbarMenuItem>
                        <Link className='text-white text-base font-semibold hover:text-[#f2ff3f] hover:underline hover:cursor-pointer' onClick={() => hanldeClickClose()} href="/recipes">
                            Recetas
                        </Link>
                    </NavbarMenuItem>
                    <NavbarMenuItem>
                        <Link className='text-white text-base font-semibold hover:text-[#F033AE] hover:underline hover:cursor-pointer' onClick={() => hanldeClickClose()} href="/ingredients">
                            Ingredientes
                        </Link>
                    </NavbarMenuItem>
                    <NavbarMenuItem>
                        <Link className='text-white text-base font-semibold hover:text-[#46e8fd] hover:underline hover:cursor-pointer' onClick={() => hanldeClickClose()} href="/community">
                            Comunidad
                        </Link>
                    </NavbarMenuItem>
                </NavbarMenu>
            )}
        </Navbar>
    )
}

export default NavbarComponent