"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Home, Search, Bell, Mail, Bookmark, User as UserIcon, Settings, LogOut, Code2, Plus } from "lucide-react"
import { UserProfile } from "@/components/user-profile"
import Link from "next/link"
import { User } from "next-auth"

interface SidebarProps {
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

export function Sidebar({ user }: SidebarProps) {
  return (
    <div className="fixed left-0 top-0 h-full w-64 border-r bg-background p-4 flex flex-col">
      {/* Logo/Brand */}
      <div className="flex items-center gap-2 mb-8 px-2">
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
            className={cn("w-full justify-start gap-3 h-12 text-base", item.active && "bg-secondary")}
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
      {
        user ?
          <UserProfile user={user} /> :
          <div className="border-t pt-4">
            <Link href="/login">
              <Button variant="secondary" className="w-full justify-center h-10 mt-2">
                Entrar
              </Button>
            </Link>
          </div>
      }
    </div>
  )
}
