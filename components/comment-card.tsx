import { Icomment } from "../types/comments"

interface CommentCardProps extends Icomment {
}

export function CommentCard(item: CommentCardProps) {
  return (
    <div className="flex gap-4 pl-4 border-l">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-medium">{item.author.name}</span>
          <span className="text-sm text-muted-foreground">{item.date}</span>
        </div>
        <p className="text-sm text-muted-foreground">{item.content}</p>
      </div>
    </div>
  )
}