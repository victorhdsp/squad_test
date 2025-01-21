import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { NotificationsButton } from "@/components/notifications-button"
import { AnnouncementCard } from "@/components/announcement-card"

const announcements = [
  {
    id: "1",
    title: "New Community Guidelines",
    content: "We've updated our community guidelines to ensure a better experience for all members. Please take a moment to review the changes.",
    author: {
      name: "Admin Team",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=faces"
    },
    date: "2024-03-20",
    comments: [
      {
        id: "1",
        author: {
          name: "Sarah Wilson",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces"
        },
        content: "Great updates! The new guidelines are much clearer.",
        date: "2024-03-20"
      },
      {
        id: "2",
        author: {
          name: "Mike Chen",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces"
        },
        content: "Looking forward to seeing how these changes improve our community discussions.",
        date: "2024-03-20"
      }
    ]
  },
  {
    id: "2",
    title: "Platform Maintenance Schedule",
    content: "We will be performing scheduled maintenance this weekend to improve platform performance. Expected downtime: 2 hours.",
    author: {
      name: "Tech Team",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=64&h=64&fit=crop&crop=faces"
    },
    date: "2024-03-19",
    comments: [
      {
        id: "3",
        author: {
          name: "Emma Rodriguez",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces"
        },
        content: "Will this affect any ongoing discussions?",
        date: "2024-03-19"
      }
    ]
  }
]

export default function AnnouncementsPage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r px-4 py-6 flex flex-col gap-6">
        <div className="flex items-center justify-between px-2">
          <h1 className="text-xl font-bold">UX Forum</h1>
          <NotificationsButton />
        </div>
        <MainNav />
        <div className="mt-auto">
          <UserNav />
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 px-6 py-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Announcements</h2>

          <div className="space-y-6">
            {announcements.map((announcement) => (
              <AnnouncementCard
                key={announcement.id}
                {...announcement}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}