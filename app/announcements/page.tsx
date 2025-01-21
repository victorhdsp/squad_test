import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { NotificationsButton } from "@/components/notifications-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageCircle, Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

// ... (keep existing announcements data)

export default function AnnouncementsPage() {
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
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">Announcements</h2>

          <div className="space-y-6">
            {announcements.map((announcement) => (
              <Card key={announcement.id}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <Avatar>
                      <AvatarImage src={announcement.author.avatar} />
                      <AvatarFallback>{announcement.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold">{announcement.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
                        <span>{announcement.author.name}</span>
                        <span>•</span>
                        <span>{announcement.date}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{announcement.content}</p>
                  
                  {/* Comments section */}
                  <div className="mt-6 space-y-4">
                    <h4 className="font-medium flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      Comments
                    </h4>
                    {announcement.comments.map((comment) => (
                      <div key={comment.id} className="flex gap-4 pl-4 border-l">
                        <Avatar className="h-8 w-8 flex-shrink-0">
                          <AvatarImage src={comment.author.avatar} />
                          <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-medium">{comment.author.name}</span>
                            <span className="text-sm text-muted-foreground">{comment.date}</span>
                          </div>
                          <p className="text-sm text-muted-foreground break-words">{comment.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full space-y-2">
                    <Textarea placeholder="Write a comment..." />
                    <div className="flex justify-end">
                      <Button>Comment</Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}