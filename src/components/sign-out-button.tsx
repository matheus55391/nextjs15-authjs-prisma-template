"use client"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { signOut } from "next-auth/react"

export function SignOutButton() {
  return (
    <Button
      onClick={() => signOut()}
      variant="ghost"
      className="w-full justify-start gap-3 h-10 mt-2 text-muted-foreground"
    >
      <LogOut className="h-4 w-4" />
      Sair
    </Button>
  )
}
    