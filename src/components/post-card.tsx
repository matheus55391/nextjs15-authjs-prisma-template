import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal, Code2 } from "lucide-react"

interface PostCardProps {
  post: {
    id: string
    author: {
      name: string
      username: string
      avatar: string
      verified?: boolean
    }
    content: string
    code?: string
    language?: string
    tags: string[]
    timestamp: string
    likes: number
    comments: number
    reposts: number
    liked?: boolean
  }
}

export function PostCard({ post }: PostCardProps) {
  return (
        <Card className="bg-transparent border-0 border-b  shadow-none rounded-none ">
    <CardContent className="p-4">
        <div className="flex gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-semibold">{post.author.name}</span>
                {post.author.verified && (
                  <Badge variant="secondary" className="h-4 px-1">
                    <Code2 className="h-3 w-3" />
                  </Badge>
                )}
                <span className="text-muted-foreground">@{post.author.username}</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground text-sm">{post.timestamp}</span>
              </div>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-3">
              <p className="text-sm leading-relaxed">{post.content}</p>

              {post.code && (
                <div className="rounded-lg bg-muted p-3 font-mono text-sm overflow-x-auto">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.language}
                    </Badge>
                  </div>
                  <pre className="text-xs">{post.code}</pre>
                </div>
              )}

              <div className="flex flex-wrap gap-1">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-6">
                <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-red-500">
                  <Heart className={`h-4 w-4 ${post.liked ? "fill-red-500 text-red-500" : ""}`} />
                  <span className="text-xs">{post.likes}</span>
                </Button>

                <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-blue-500">
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-xs">{post.comments}</span>
                </Button>

                <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-green-500">
                  <Repeat2 className="h-4 w-4" />
                  <span className="text-xs">{post.reposts}</span>
                </Button>
              </div>

              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <Share className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
