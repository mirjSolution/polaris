'use client'

import { ClerkProvider, useAuth, UserButton } from "@clerk/nextjs"
import { Authenticated, AuthLoading, ConvexReactClient, Unauthenticated } from "convex/react"
import { ConvexProviderWithClerk } from "convex/react-clerk"

import { UnauthenticatedView } from "@/features/auth/components/unauthenticated-view"
import { AuthLoadingView } from "@/features/auth/components/auth-loading"

import { ThemeProvider } from "./theme-provider"

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

export const Providers = ({children}: {children: React.ReactNode}) => {
    return <ClerkProvider>
         <ThemeProvider attribute={"class"} defaultTheme="dark" enableSystem disableTransitionOnChange>
            <ConvexProviderWithClerk client={convex} useAuth={useAuth}> 
                <Authenticated>
                    <UserButton />
                    {children}
                </Authenticated>
                <Unauthenticated>
                   <UnauthenticatedView />
                </Unauthenticated>
                <AuthLoading>
                   <AuthLoadingView />
                </AuthLoading>
            </ConvexProviderWithClerk>
         </ThemeProvider>
    </ClerkProvider>
}