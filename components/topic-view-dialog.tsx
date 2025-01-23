"use client";

import { Badge } from "@/components/ui/badge"
import { Itopic } from "@/types/topic"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { CommentCard } from "./comment-card";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

interface TopicCardProps extends Itopic {
    isOpen: boolean
    toogleOpenState: (open: boolean) => void
}

export function TopicViewDialog(item: TopicCardProps) {
  const [newComment, setNewComment] = useState("")

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      // Here you would typically send the comment to your backend
      console.log("New comment:", newComment)
      setNewComment("")
    }
  }

  return (
    <Dialog open={item.isOpen} onOpenChange={() => item.toogleOpenState(false)}>
      <DialogContent className="max-w-2xl h-[80vh]">
        <div className="flex flex-col gap-6">
          <DialogHeader className="">
            <DialogTitle>{item.title}</DialogTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 h-max">
              <span>{item.author.name}</span>
              <span>•</span>
              <span>{item.timestamp}</span>
              <Badge variant="secondary" className="ml-auto">{item.category}</Badge>
            </div>
          </DialogHeader>

          <div className="flex flex-col h-full">
            <div className="border-b py-4">
              <p className="text-muted-foreground">{item.excerpt}</p>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              { item.comments && Object.keys(item.comments).map((id) => {
                if (item.comments[id])
                  return (
                    <CommentCard
                      key={id}
                      {...item.comments[id]}
                    />
                  )
              })}
            </div>

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
        </div>
      </DialogContent>
    </Dialog>
  );
}