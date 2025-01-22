"use client";

import { AnnouncementCard } from "@/components/announcement-card"
import { getAnnouncements } from "@/lib/pre_api";
import { Iannouncement } from "@/types/announcement";
import { useEffect, useState } from "react"

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState<{ [key: string]: Iannouncement }>()

  useEffect(() => {
    getAnnouncements().then(data => {
      setAnnouncements(data)
    })
  }, [])

  return (
    <div className="flex min-h-screen">
      <main className="flex-1 px-6 py-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Announcements</h2>

          <div className="space-y-6">
            {
              announcements ? (
                Object.keys(announcements).map((id) => (
                  <AnnouncementCard key={id} {...announcements[id]} />
                ))
              ) :
              (<h2>Sem avisos</h2>)
            }
          </div>
        </div>
      </main>
    </div>
  )
}