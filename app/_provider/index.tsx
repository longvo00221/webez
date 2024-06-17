'use client'

import React from 'react'

import ToastProvider from './Toast'
import { ThemeProvider } from './Theme'
import AuthProvider from './Auth'
import ModalProvider from './Modal/ModalProvider'
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
            <ModalProvider>
              {children}
            </ModalProvider>
        </ThemeProvider>
      
      </div>
     </AuthProvider>
  )
}
