import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { signOut } from "@/lib/auth"
import { LogOut } from "lucide-react"
import { User } from "next-auth"
import { SignOutButton } from "./sign-out-button"

interface UserProfileProps {
    user: User
}

export function UserProfile({ user }: UserProfileProps) {


    return (
        <div className="border-t pt-4">
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 cursor-pointer">
                <Avatar className="h-10 w-10">
                    <AvatarImage src={user.image ?? "/placeholder.svg"} alt={user.name ?? undefined} />
                    <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{user.name}</p>
                    {/* username fallback if not present */}
                    <p className="text-sm text-muted-foreground truncate">@{('username' in user && (user as any).username) ? (user as any).username : user.email?.split('@')[0]}</p>
                </div>
            </div>
            <SignOutButton />
        </div>
    )
}
