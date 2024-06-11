import SiteNavigation from '@/app/_components/site/Navigation';
import { useTheme } from 'next-themes';
import React from 'react';

type SiteLayoutProps = {
    children: React.ReactNode
};

const SiteLayout:React.FC<SiteLayoutProps> = ({children}) => {

    return (
    <div>
        <SiteNavigation/>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"/>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"/>
        {children}
    </div>)
}
export default SiteLayout;