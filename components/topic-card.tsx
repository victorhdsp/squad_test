"use client";

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Itopic } from "@/types/topic"
import { MessageCircle, Heart, Send } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { CommentCard } from "./comment-card"
import { useState } from "react"
import { TopicViewDialog } from "./topic-view-dialog";

interface TopicCardProps extends Itopic {}

export function TopicCard(item: TopicCardProps) {
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
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">{item.title}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{item.author.name}</span>
              <span>•</span>
              <span>{item.timestamp}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-2">{item.excerpt}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Badge variant="secondary">{item.category}</Badge>
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-1">
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm">{item.replies}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="h-4 w-4" />
              <span className="text-sm">{item.likes}</span>
            </div>
          </div>
        </CardFooter>
      </Card>

      <TopicViewDialog {...item} isOpen={isOpen} toogleOpenState={setIsOpen} />
    </>
  )
}