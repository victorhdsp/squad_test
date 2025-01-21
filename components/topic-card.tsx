import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MessageCircle, Heart } from "lucide-react"

interface TopicCardProps {
  title: string
  author: {
    name: string
    avatar: string
  }
  category: string
  replies: number
  likes: number
  excerpt: string
  timestamp: string
}

export function TopicCard({
  title,
  author,
  category,
  replies,
  likes,
  excerpt,
  timestamp,
}: TopicCardProps) {
  return (
    <Card className="hover:bg-muted/50 transition-colors">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Avatar className="h-10 w-10">
          <AvatarImage src={author.avatar} />
          <AvatarFallback>{author.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold">{title}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
            <span>{author.name}</span>
            <span>•</span>
            <span>{timestamp}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">{excerpt}</p>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-4 sm:justify-between">
        <Badge variant="secondary" className="w-fit">{category}</Badge>
        <div className="flex items-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-1">
            <MessageCircle className="h-4 w-4" />
            <span className="text-sm">{replies}</span>
          </div>
          <div className="flex items-center gap-1">
            <Heart className="h-4 w-4" />
            <span className="text-sm">{likes}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}