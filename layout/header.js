import MenuLink from '../components/MenuLink';
import Link from 'next/link'
import { useState } from 'react';

export default function Header() {

    const [opened, setOpened] = useState(false);

    const handleMenu = () => {
        setOpened(!opened)
    }

    return (
        <header className='relative w-full h-screen flex items-center justify-center px-5 md:px-6 shadow-md shadow-gray-300 main-header'>
            <div className='container z-40 md:my-24 flex flex-col md:block'>
                <nav className='w-full'>
                    <div className='flex flex-col md:flex-row md:justify-between md:items-center w-full gap-6 lg:gap-20'>
                        <div className='flex justify-between items-center gap-4'>
                            <Link href='/'>
                                <img src="/logo-rlorentzen.png" alt='logo-rlorentzen.png' />
                            </Link>
                            <div className='md:hidden' onClick={handleMenu}>
                                <span id='menu' className='material-symbols-outlined text-4xl
                                cursor-pointer text-white'>
                                    {opened ? "close" : "menu"}
                                </span>
                            </div>
                        </div>
                        <ul className={`flex flex-col gap-4 md:opacity-100 md:flex md:flex-row md:gap-6`
                            + (opened ? " opacity-100 h-fit" : " opacity-0 h-0")
                            + (opened ? " transition-all" : " transition-none")
                            + " duration-150 ease-in-out delay-200"}>
                            <MenuLink dir={'/'} text={'Inicio'} />
                            <MenuLink dir={'#quienes-somos'} text={'Nosotros'} />
                            <MenuLink dir={'#servicios'} text={'Servicios'} />
                            <MenuLink dir={'#clientes'} text={'Clientes'} />
                            <MenuLink dir={'#galeria'} text={'Galería'} />
                            <MenuLink dir={'#contacto'} text={'Contacto'} />
                        </ul>
                    </div>
                </nav>
                <div className='flex flex-col items-center mt-16 md:mt-[177px]'>
                    <h1 className='text-white drop-shadow-3xl text-center
                        text-4xl md:text-7xl uppercase tracking-wider'
                    >
                        RILORSA
                    </h1>
                    <h2 className='text-white drop-shadow-3xl text-center md:text-3xl md:mt-[39px]'>Servicios y equipos contra incendios</h2>
                </div>
            </div>
        </header>
    );
}