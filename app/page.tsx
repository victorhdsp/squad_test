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
import { getTopics } from "@/lib/pre_api";
import useSystemStore from "@/stores/system";
import { Itopic } from "@/types/topic";
import { Plus } from "lucide-react"
import { ChangeEvent, useEffect, useState } from "react"


export default function Home() {
  const [topics, setTopics] = useState<{ [key: string]: Itopic }>()
  const { topic_filters, change_topic_filters } = useSystemStore();

  useEffect(() => {
    console.log(getTopics());
    getTopics().then(data => {
      setTopics(data);
    })
  }, [topic_filters])

  const handleSeach = (e: ChangeEvent<HTMLInputElement>) => {
    change_topic_filters({ search: e.target.value })
  }
  const handleOrderBy = (key: string) => {
    change_topic_filters({ orderBy: key })
  }

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

        <div className="flex gap-4 mb-8">
          <div className="flex-1">
            <Input
              placeholder="Search topics..."
              onChange={handleSeach}
            />
          </div>
          <Select defaultValue="latest" onValueChange={handleOrderBy}>
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

        <div className="space-y-4">
          {
            topics ? (
              Object.keys(topics).map((keyName) => (
                <TopicCard key={keyName} {...topics[keyName]} />
              ))
            ) :
            (<h2>Sem tópicos</h2>)
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