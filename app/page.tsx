import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { NotificationsButton } from "@/components/notifications-button"
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
import { Filter, Plus, Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const topics = [
  {
    title: "Best practices for mobile navigation patterns",
    author: {
      name: "Sarah Wilson",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces"
    },
    category: "Mobile Design",
    replies: 24,
    likes: 56,
    excerpt: "I'm working on a complex mobile app and I'm curious about different navigation patterns. What are your thoughts on bottom tabs vs hamburger menus?",
    timestamp: "2 hours ago"
  },
  {
    title: "User testing methods for enterprise applications",
    author: {
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces"
    },
    category: "User Research",
    replies: 18,
    likes: 42,
    excerpt: "Looking for recommendations on effective user testing methods specifically for enterprise applications. What approaches have worked well for you?",
    timestamp: "5 hours ago"
  },
  {
    title: "Design systems: Monolithic vs Distributed",
    author: {
      name: "Emma Rodriguez",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces"
    },
    category: "Design Systems",
    replies: 31,
    likes: 89,
    excerpt: "We're scaling our design system and debating between a monolithic approach versus a more distributed model. Would love to hear experiences from both sides.",
    timestamp: "1 day ago"
  }
]

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Mobile sidebar trigger */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden fixed left-4 top-4 z-50">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <div className="h-full flex flex-col gap-6 p-4">
            <div className="flex items-center justify-between px-2">
              <h1 className="text-xl font-bold">UX Forum</h1>
              <NotificationsButton />
            </div>
            <MainNav />
            <div className="mt-auto">
              <UserNav />
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-64 border-r px-4 py-6 flex-col gap-6">
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
      <main className="flex-1 px-4 lg:px-6 py-6 pt-20 lg:pt-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <h2 className="text-2xl lg:text-3xl font-bold">Topics</h2>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Topic
            </Button>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1">
              <Input placeholder="Search topics..." />
            </div>
            <div className="flex gap-2">
              <Select defaultValue="latest">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="popular">Popular</SelectItem>
                  <SelectItem value="unanswered">Unanswered</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="whitespace-nowrap">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          {/* Topics list */}
          <div className="space-y-4">
            {topics.map((topic, index) => (
              <TopicCard key={index} {...topic} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <div className="flex gap-2 flex-wrap justify-center">
              <Button variant="outline" size="sm">Previous</Button>
              <Button variant="outline" size="sm">1</Button>
              <Button variant="secondary" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}