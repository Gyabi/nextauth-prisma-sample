'use client'
import { SessionProvider } from "next-auth/react"
import { FC } from "react"

interface NextAuthProviderProps {
    children: React.ReactNode
}

const NextAuthProvider : FC<NextAuthProviderProps> = ({children}) => {
    return (
        <SessionProvider>
        {children}
        </SessionProvider>
    )
}

export default NextAuthProvider