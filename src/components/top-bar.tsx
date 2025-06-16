import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MobileNav } from "./mobile-nav"
import { Code2 } from "lucide-react"
import { User } from "next-auth"
import Link from "next/link"

interface TopBarProps {
  user?: User
}

export function TopBar({ user }: TopBarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <MobileNav user={user} />
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-primary">
              <Code2 className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold">DevThreads</span>
          </div>
        </div>

        {user ? (
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.image || "/placeholder.svg"} alt={user.name!} />
            <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
          </Avatar>
        ) : (
          <Link
            href="/api/auth/signin"
            className="px-4 py-2 rounded bg-primary text-primary-foreground font-medium"
          >
            Entrar
          </Link>
        )}
      </div>
    </header>
  )
}
