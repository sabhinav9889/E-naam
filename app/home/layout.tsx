import React from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '../components/themetoggle';
import { ProfileAvatar } from '../components/avatar';
import Link from 'next/link';
// /app/auth/signup/layout.tsx
// Correct layout.tsx example
export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <SidebarProvider>
          <AppSidebar />
          <main className="flex w-full">
            <div className="absolute z-10 cursor-pointer">
              <SidebarTrigger />
            </div>
            <div className="w-full justify-end flex gap-4 absolute z-10 right-4 mt-4">
              <ModeToggle />
              <Link href="/home/profile">
                <ProfileAvatar
                  name="abhinav"
                  url="https://github.com/shadcn.png"
                  tooltipcontent="profile"
                />
              </Link>
            </div>
            {children}
          </main>
        </SidebarProvider>
      </ThemeProvider>
    </>
  );
}
