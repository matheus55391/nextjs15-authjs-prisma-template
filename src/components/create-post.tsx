"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Code2, ImageIcon, Smile } from "lucide-react"
import { User } from "next-auth"

interface CreatePostProps {
  user: User
}

export function CreatePost({ user }: CreatePostProps) {
  const [content, setContent] = useState("")
  const [showCodeBlock, setShowCodeBlock] = useState(false)
  const [code, setCode] = useState("")

  return (
    <Card className="border-0 border-b rounded-none">
      <CardContent className="p-4">
        <div className="flex gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.image || "/placeholder.svg"} alt={user.name!} />
            <AvatarFallback>{user.name!.charAt(0)}</AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-3">
            <Textarea
              placeholder="O que você está desenvolvendo hoje?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[100px] border-0 resize-none text-lg placeholder:text-muted-foreground focus-visible:ring-0"
            />

            {showCodeBlock && (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">JavaScript</Badge>
                  <Button variant="ghost" size="sm" onClick={() => setShowCodeBlock(false)}>
                    Remover código
                  </Button>
                </div>
                <Textarea
                  placeholder="// Cole seu código aqui..."
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="font-mono text-sm bg-muted"
                />
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowCodeBlock(!showCodeBlock)}
                  className="text-muted-foreground hover:text-primary"
                >
                  <Code2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <ImageIcon className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <Smile className="h-4 w-4" />
                </Button>
              </div>

              <Button disabled={!content.trim()} className="rounded-full px-6">
                Postar
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
