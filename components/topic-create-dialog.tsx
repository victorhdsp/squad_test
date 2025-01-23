"use client";

import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { PostTopic, setTopic } from "@/api/topic";
import { Input } from "./ui/input";

interface TopicCardProps {
    isOpen: boolean
    toogleOpenState: (open: boolean) => void
}

export function TopicCreateDialog(item: TopicCardProps) {
  const [newTitle, setNewTitle] = useState("")
  const [newExcerpt, setNewExcerpt] = useState("")
  const authorName = "kleber";

  const handleSubmitPost = async () => {
    const data: PostTopic = {
      title: newTitle,
      excerpt: newExcerpt,
      category: "idle",
      author: { name: authorName }
    }

    const response = await setTopic(data);
    if (response)
      alert("Topico enviado")
  }

  return (
    <Dialog open={item.isOpen} onOpenChange={() => item.toogleOpenState(false)}>
      <DialogContent className="max-w-2xl h-[80vh]">
        <div className="flex flex-col gap-6">
          <DialogHeader className="">
            <DialogTitle>
              <Input
                placeholder="Escreva seu titulo..."
                className="w-1/2"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col h-full">
            <Textarea 
              placeholder="Escreva sua postagem..." 
              value={newExcerpt}
              onChange={(e) => setNewExcerpt(e.target.value)}
              className="flex-1"
            />
            <div className="border-t pt-4 mt-auto flex">
              <Button 
                size="default"
                onClick={handleSubmitPost}
                disabled={!newExcerpt.trim()}
                className="gap-4 ml-auto"
              >
                <p>Enviar postagem</p>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}