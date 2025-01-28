"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Heart, Send } from "lucide-react"
import { useState } from "react"

interface Comment {
  id: number
  author: {
    name: string
    avatar: string
  }
  content: string
  timestamp: string
}

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
  comments?: Comment[]
}

export function TopicCard({
  title,
  author,
  category,
  replies,
  likes,
  excerpt,
  timestamp,
  comments
}: TopicCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [newComment, setNewComment] = useState("")

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      // Here you would typically send the comment to your backend
      console.log("New comment:", newComment)
      setNewComment("")
    }
  }

  return (
    <>
      <Card 
        className="hover:bg-muted/50 transition-colors cursor-pointer" 
        onClick={() => setIsOpen(true)}
      >
        <CardHeader className="flex flex-row items-center gap-4">
          {/*<Avatar className="h-10 w-10">
            <AvatarImage src={author.avatar} />
            <AvatarFallback>{author.name[0]}</AvatarFallback>
          </Avatar>*/}
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">{title}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{author.name}</span>
              <span>•</span>
              <span>{timestamp}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-2">{excerpt}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Badge variant="secondary">{category}</Badge>
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

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl h-[80vh]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
              {/*<Avatar className="h-8 w-8">
                <AvatarImage src={author.avatar} />
                <AvatarFallback>{author.name[0]}</AvatarFallback>
              </Avatar>*/}
              <span>{author.name}</span>
              <span>•</span>
              <span>{timestamp}</span>
              <Badge variant="secondary" className="ml-auto">{category}</Badge>
            </div>
          </DialogHeader>

          <div className="flex flex-col h-full">
            {/* Topic content */}
            <div className="border-b py-4">
              <p className="text-muted-foreground">{excerpt}</p>
            </div>

            {/* Comments section */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {comments && comments.map((comment) => (
                <div key={comment.id} className="flex gap-4">
                  {/*<Avatar className="h-8 w-8">
                    <AvatarImage src={comment.author.avatar} />
                    <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
                  </Avatar>*/}
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{comment.author.name}</span>
                      <span className="text-sm text-muted-foreground">{comment.timestamp}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{comment.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* New comment input */}
            <div className="border-t pt-4 mt-auto">
              <div className="flex gap-4">
                <Textarea 
                  placeholder="Write a comment..." 
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="flex-1"
                />
                <Button 
                  size="icon"
                  onClick={handleSubmitComment}
                  disabled={!newComment.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}