import { User } from '@clerk/nextjs/server';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs';
import { ModeToggle } from '../../ui/mode-toggle';
type SiteNavigationProps = {
    user?: User | null;
};

const SiteNavigation:React.FC<SiteNavigationProps> = ({user}) => {
    
    return (
        <div className="p-4 flex items-center justify-between bg-black z-50 fixed w-full">
            <aside className="flex items-center gap-2">
                <Image src={'/assets/plura-logo.svg'} alt="logo" width={40} height={40}/>
                <div className="bg-gradient-to-b from-primary to-secondary-foreground text-transparent bg-clip-text relative">
                <h1 className="text-xl font-bold text-center">Wezb .</h1>
              </div>
            </aside>
            <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] ">
                <ul className="flex items-center jusitfy-center gap-8">
                    <Link href={'#'} className="text-white">Pricing</Link>
                    <Link href={'#'} className="text-white">About</Link>
                    <Link href={'#'} className="text-white">Documentation</Link>
                    <Link href={'#'} className="text-white">Features</Link>
                </ul>
            </nav>
            <aside className="flex gap-2 items-center">
                <Link href={'/agency/sign-in'} className=" text-white p-2 px-4 rounded-md hover:bg-primary bg-gradient-to-r from-primary to-secondary-foreground relative">
                    Login
                </Link>
                <UserButton/>
                <ModeToggle/>
            </aside>
        </div>
    )
}
export default SiteNavigation;