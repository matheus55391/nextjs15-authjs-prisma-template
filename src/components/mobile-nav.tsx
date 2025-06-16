"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Menu, Home, Search, Bell, Mail, Bookmark, User as UserIcon, Settings, LogOut, Code2, Plus } from "lucide-react"
import { User } from "next-auth"
import { SignOutButton } from "@/components/sign-out-button"

interface MobileNavProps {
  user?: User
}

const navigationItems = [
  { icon: Home, label: "Home", href: "/dashboard", active: true },
  { icon: Search, label: "Explorar", href: "/explore" },
  { icon: Bell, label: "Notificações", href: "/notifications" },
  { icon: Mail, label: "Mensagens", href: "/messages" },
  { icon: Bookmark, label: "Salvos", href: "/bookmarks" },
  { icon: UserIcon, label: "Perfil", href: "/profile" },
  { icon: Settings, label: "Configurações", href: "/settings" },
]

export function MobileNav({ user }: MobileNavProps) {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="sm">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-4">
          <div className="flex flex-col h-full">
            {/* Logo/Brand */}
            <div className="flex items-center gap-2 mb-8">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <Code2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">DevThreads</span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-2">
              {navigationItems.map((item) => (
                <Button
                  key={item.label}
                  variant={item.active ? "secondary" : "ghost"}
                  className="w-full justify-start gap-3 h-12 text-base"
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Button>
              ))}

              <Button className="w-full mt-6 h-12 text-base">
                <Plus className="h-5 w-5 mr-2" />
                Novo Post
              </Button>
            </nav>

            {/* User Profile */}
            <div className="border-t pt-4">
              {user ? (
                <>
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 cursor-pointer">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.image || "/placeholder.svg"} alt={user.name!} />
                      <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{user.name}</p>
                      <p className="text-sm text-muted-foreground truncate">@{user.name}</p>
                    </div>
                  </div>
                  <SignOutButton />
                </>
              ) : (
                <Button variant="secondary" className="w-full mt-2">
                  Login
                </Button>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
