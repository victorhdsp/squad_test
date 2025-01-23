"use client";

import { TopicCard } from "@/components/topic-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { getTopics } from "@/api/topic";
import { Itopic } from "@/types/topic";
import { Plus } from "lucide-react"
import { useEffect, useState } from "react"


export default function Home() {
  const [topics, setTopics] = useState<{ [key: string]: Itopic }>()

  useEffect(() => {
    getTopics().then(data => setTopics(data))
  }, [])

  return (
    <main className="flex-1 px-6 py-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Posts</h2>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Novo post
          </Button>
        </div>

        {/*
          <div className="flex gap-4 mb-8">
            <div className="flex-1">
              <Input
                placeholder="Search topics..."
                onChange={() => {}}
              />
            </div>
            <Select defaultValue="latest" onValueChange={() => {}}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Últimas</SelectItem>
                <SelectItem value="popular">Popular</SelectItem>
                <SelectItem value="unanswered">Sem resposta</SelectItem>
              </SelectContent>
            </Select>
          </div>
        */}

        <div className="space-y-4">
          {
            topics ? (
              Object.keys(topics).map((keyName) => (
                <TopicCard key={keyName} {...topics[keyName]} />
              ))
            ) : (
              <h2>Sem tópicos</h2>
            )
          }
        </div>

        {/* Pagination */}
        {/* <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Anterior</Button>
            <Button variant="outline" size="sm">1</Button>
            <Button variant="secondary" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">Próxima</Button>
          </div>
        </div> */}
      </div>
    </main>
  )
}