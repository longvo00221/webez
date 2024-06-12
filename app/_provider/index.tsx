'use client'

import React from 'react'

import ToastProvider from './Toast'
import { ThemeProvider } from './Theme'
import AuthProvider from './Auth'
export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
     <AuthProvider>
       <div>
        <ToastProvider />
        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
            
                {children}
           
        </ThemeProvider>
      
      </div>
     </AuthProvider>
  )
}
