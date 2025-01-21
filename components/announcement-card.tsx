import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MessageCircle, Heart } from "lucide-react"
import { CommentCard } from "./comment-card"
import { Iannouncement } from "@/types/announcement"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"

interface AnnouncementCardProps extends Iannouncement {}

export function AnnouncementCard(item: AnnouncementCardProps) {
  return (
    <Card>
        <CardHeader>
            <div className="flex items-center gap-4">
            <Avatar>
                <AvatarImage src={item.author.avatar} />
                <AvatarFallback>{item.author.name[0]}</AvatarFallback>
            </Avatar>
            <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{item.author.name}</span>
                <span>•</span>
                <span>{item.date}</span>
                </div>
            </div>
            </div>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">{item.content}</p>
            
            {/* Comments section */}
            <div className="mt-6 space-y-4">
            <h4 className="font-medium flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Comments
            </h4>
            {item.comments.map((comment) => (
                <CommentCard {...comment}/>
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
  )
}