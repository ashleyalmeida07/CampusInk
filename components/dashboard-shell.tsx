"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Home,
  FileText,
  Award,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  Users,
  CheckSquare,
  Globe,
  MessageSquare,
  Bell,
  Search,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/mode-toggle"

interface DashboardShellProps {
  children: React.ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  const pathname = usePathname()
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  // Determine user role from pathname
  const userRole = pathname?.includes("/admin")
    ? "admin"
    : pathname?.includes("/faculty")
      ? "faculty"
      : pathname?.includes("/recruiter")
        ? "recruiter"
        : "student"

  // Define navigation items based on user role
  const getNavItems = () => {
    const baseItems = [
      {
        title: "Dashboard",
        href: `/dashboard/${userRole}`,
        icon: Home,
      },
      {
        title: "My Profile",
        href: `/dashboard/${userRole}/profile`,
        icon: Users,
      },
    ]

    const roleSpecificItems = {
      admin: [
        {
          title: "Verify Submissions",
          href: `/dashboard/admin/verify`,
          icon: CheckSquare,
        },
        {
          title: "Manage Users",
          href: `/dashboard/admin/users`,
          icon: Users,
        },
        {
          title: "Analytics",
          href: `/dashboard/admin/analytics`,
          icon: BarChart3,
        },
        {
          title: "SDG Mapping",
          href: `/dashboard/admin/sdg-mapping`,
          icon: Globe,
        },
        {
          title: "Settings",
          href: `/dashboard/admin/settings`,
          icon: Settings,
        },
      ],
      faculty: [
        {
          title: "Review Submissions",
          href: `/dashboard/faculty/review`,
          icon: CheckSquare,
        },
        {
          title: "My Endorsements",
          href: `/dashboard/faculty/endorsements`,
          icon: Award,
        },
        {
          title: "Department Analytics",
          href: `/dashboard/faculty/analytics`,
          icon: BarChart3,
        },
      ],
      student: [
        {
          title: "My Achievements",
          href: `/dashboard/student/achievements`,
          icon: Award,
        },
        {
          title: "Submit New",
          href: `/dashboard/student/submit`,
          icon: FileText,
        },
        {
          title: "SDG Contributions",
          href: `/dashboard/student/sdg-contributions`,
          icon: Globe,
        },
        {
          title: "Collaborate",
          href: `/dashboard/student/collaborate`,
          icon: MessageSquare,
        },
      ],
      recruiter: [
        {
          title: "Browse Talents",
          href: `/dashboard/recruiter/talents`,
          icon: Users,
        },
        {
          title: "Saved Profiles",
          href: `/dashboard/recruiter/saved`,
          icon: Award,
        },
        {
          title: "Post Opportunities",
          href: `/dashboard/recruiter/opportunities`,
          icon: FileText,
        },
      ],
    }

    return [...baseItems, ...roleSpecificItems[userRole as keyof typeof roleSpecificItems]]
  }

  const navItems = getNavItems()

  const NavItems = () => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
            pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
          )}
          onClick={() => setIsMobileNavOpen(false)}
        >
          <item.icon className="h-4 w-4" />
          {item.title}
        </Link>
      ))}
    </>
  )

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
     
        </Sheet>
      
        <div className="flex-1 md:flex md:justify-center">
          
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://static.vecteezy.com/system/resources/previews/012/850/918/non_2x/line-icon-for-avtar-vector.jpg"  alt="User" />
                  <AvatarFallback>
                    {userRole === "admin"
                      ? "https://static.vecteezy.com/system/resources/previews/012/850/918/non_2x/line-icon-for-avtar-vector.jpg"
                      : userRole === "faculty"
                        ? "https://static.vecteezy.com/system/resources/previews/012/850/918/non_2x/line-icon-for-avtar-vector.jpg"
                        : userRole === "recruiter"
                          ? "https://static.vecteezy.com/system/resources/previews/012/850/918/non_2x/line-icon-for-avtar-vector.jpg"
                          : "https://static.vecteezy.com/system/resources/previews/012/850/918/non_2x/line-icon-for-avtar-vector.jpg"}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href={`/dashboard/${userRole}/profile`}>Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={`/dashboard/${userRole}/settings`}>Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/login">
                  <div className="flex items-center gap-2">
                    <LogOut className="h-4 w-4" />
                    <span>Log out</span>
                  </div>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r md:block">
          <div className="flex h-full flex-col gap-2 p-4">
            <nav className="flex flex-col gap-2 py-2">
              <NavItems />
            </nav>
          </div>
        </aside>
        <main className="flex-1 p-4 md:p-6">
          <div className="mx-auto max-w-7xl space-y-6">{children}</div>
        </main>
      </div>
    </div>
  )
}
