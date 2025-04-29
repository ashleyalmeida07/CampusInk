"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { BookOpen, Menu, Bell, LogOut, Home, FileText, Award, Users, Info, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Mock authentication for demo purposes
// In a real app, this would come from your auth context/provider
const useAuth = () => {
  const pathname = usePathname()
  const isAuthenticated = pathname?.includes("/dashboard")

  // Determine role from URL for demo
  let role = "student"
  if (pathname?.includes("/admin")) role = "admin"
  if (pathname?.includes("/faculty")) role = "faculty"
  if (pathname?.includes("/recruiter")) role = "recruiter"

  const user = isAuthenticated
    ? {
        id: "user-1",
        name:
          role === "admin"
            ? "Admin User"
            : role === "faculty"
              ? "Dr. Faculty"
              : role === "recruiter"
                ? "Recruiter"
                : "Student User",
        email: `${role}@example.com`,
        role: role,
        avatar: "https://static.vecteezy.com/system/resources/previews/012/850/918/non_2x/line-icon-for-avtar-vector.jpg",
      }
    : null

  return { user, isAuthenticated }
}

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const { user, isAuthenticated } = useAuth()

  const routes = [
    {
      href: "/",
      label: "Home",
      icon: Home,
      active: pathname === "/",
    },
    {
      href: "/publications",
      label: "Publications",
      icon: FileText,
      active: pathname === "/publications",
    },
    {
      href: "/achievements",
      label: "Achievements",
      icon: Award,
      active: pathname === "/achievements",
    },
    {
      href: "/collaborate",
      label: "Collaborate",
      icon: Users,
      active: pathname === "/collaborate",
    },
    {
      href: "/about",
      label: "About",
      icon: Info,
      active: pathname === "/about",
    },
    {
      href: "/contact",
      label: "Contact Us",
      icon: MessageSquare,
      active: pathname === "/contact",
    },
  ]

  const handleLogout = () => {
    // In a real app, this would call your logout function
    router.push("/")
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6" />
          <span className="font-bold text-xl">AcademicHub</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                route.active ? "text-primary" : "text-muted-foreground",
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ModeToggle />

          {isAuthenticated ? (
            <>
          

              {/* Notifications */}
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary"></span>
                <span className="sr-only">Notifications</span>
              </Button>

              {/* User menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user?.avatar || "https://static.vecteezy.com/system/resources/previews/012/850/918/non_2x/line-icon-for-avtar-vector.jpg"} alt={user?.name} />
                      <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                 <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href={`/dashboard/${user?.role}/profile`}>Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={`/dashboard/${user?.role}/settings`}>Settings</Link>
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
            </>
          ) : (
            <div className="hidden md:flex space-x-2">
              <Link href="/login">
                <Button variant="outline" size="sm">
                  Log in
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm">Sign up</Button>
              </Link>
            </div>
          )}

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 py-4">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <BookOpen className="h-6 w-6" />
                  <span className="font-bold text-xl">AcademicHub</span>
                </Link>
                <div className="flex flex-col space-y-3">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center text-sm font-medium transition-colors hover:text-primary",
                        route.active ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      <route.icon className="mr-2 h-4 w-4" />
                      {route.label}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col space-y-2 pt-4">
                  {isAuthenticated ? (
                    <>
                      <div className="flex items-center space-x-2 mb-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user?.avatar || "/placeholder.svg"} alt={user?.name} />
                          <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{user?.name}</p>
                          <p className="text-xs text-muted-foreground">{user?.email}</p>
                        </div>
                      </div>
                      <Link href={`/dashboard/${user?.role}`} onClick={() => setIsOpen(false)}>
                        <Button className="w-full">Dashboard</Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => {
                          handleLogout()
                          setIsOpen(false)
                        }}
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Log out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link href="/login" onClick={() => setIsOpen(false)}>
                        <Button variant="outline" className="w-full">
                          Log in
                        </Button>
                      </Link>
                      <Link href="/register" onClick={() => setIsOpen(false)}>
                        <Button className="w-full">Sign up</Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
