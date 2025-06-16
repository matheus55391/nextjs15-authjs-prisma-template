import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Hash } from "lucide-react"
import SuggestedUsers from "./suggested-users"

const trendingTopics = [
  { tag: "nextjs15", posts: "2.1k posts" },
  { tag: "react19", posts: "1.8k posts" },
  { tag: "typescript", posts: "3.2k posts" },
  { tag: "tailwindcss", posts: "1.5k posts" },
  { tag: "vercel", posts: "892 posts" },
]

const suggestedUsers = [
  {
    name: "Dan Abramov",
    username: "dan_abramov",
    bio: "React team at Meta",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Kent C. Dodds",
    username: "kentcdodds",
    bio: "Full stack educator",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Theo Browne",
    username: "t3dotgg",
    bio: "CEO @ping_labs",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function TrendingSidebar() {
  return (
    <div className="hidden xl:block w-80 p-4 space-y-4">
      {/* Trending Topics */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Trending em Tech
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {trendingTopics.map((topic, index) => (
            <div
              key={topic.tag}
              className="flex items-center justify-between hover:bg-secondary/50 p-2 rounded-lg cursor-pointer"
            >
              <div>
                <div className="flex items-center gap-1">
                  <Hash className="h-3 w-3 text-muted-foreground" />
                  <span className="font-medium">{topic.tag}</span>
                </div>
                <p className="text-xs text-muted-foreground">{topic.posts}</p>
              </div>
              <span className="text-xs text-muted-foreground">#{index + 1}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Suggested Users */}
      <SuggestedUsers/>
    </div>
  )
}
