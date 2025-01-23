"use client";

import { TopicCard } from "@/components/topic-card"
import { Button } from "@/components/ui/button"
import { getTopics } from "@/api/topic";
import { Itopic } from "@/types/topic";
import { Plus } from "lucide-react"
import { useEffect, useState } from "react"
import { TopicCreateDialog } from "@/components/topic-create-dialog";


export default function Home() {
  const [topics, setTopics] = useState<{ [key: string]: Itopic }>()
  const [createTopicModalState, setCreateTopicModalState] = useState<boolean>(false)

  useEffect(() => {
    getTopics().then(data => setTopics(data))
  }, [])

  const handleCreateTopic = () => {

  }

  return (
    <main className="flex-1 px-6 py-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Posts</h2>
          <Button onClick={() => setCreateTopicModalState(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Novo post
          </Button>
          <TopicCreateDialog
            isOpen={createTopicModalState}
            toogleOpenState={setCreateTopicModalState}
          />
        </div>
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
      </div>
    </main>
  )
}