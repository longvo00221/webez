'use client'

import React from 'react'

import ToastProvider from './Toast'
import { ThemeProvider } from './Theme'
export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
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
  )
}
