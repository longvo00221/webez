import AuthProvider from '@/app/_provider/Auth';
import React from 'react';

type MainLayoutProps = {
    children: React.ReactNode
};

const MainLayout:React.FC<MainLayoutProps> = ({children}) => {
    
    return <AuthProvider>{children}</AuthProvider>
}
export default MainLayout;