import React from 'react';
import {ClerkProvider} from '@clerk/nextjs';
import {dark} from '@clerk/themes'
type AuthProviderProps = {
    children: React.ReactNode
};

const AuthProvider:React.FC<AuthProviderProps> = ({children}) => {
    
    return <ClerkProvider appearance={{baseTheme:dark}}>{children}</ClerkProvider>
}
export default AuthProvider;