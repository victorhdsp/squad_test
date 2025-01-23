import { Icomment } from "../types/comments"
import TimeAgo from 'javascript-time-ago'
import pt from 'javascript-time-ago/locale/pt'

interface CommentCardProps extends Icomment {
}
TimeAgo.addDefaultLocale(pt)
const timeAgo = new TimeAgo('pt-BR')

export function CommentCard(item: CommentCardProps) {
  const timestamp = timeAgo.format(parseInt(item.timestamp) || 0, "round");

  return (
    <div className="flex gap-4 pl-4 border-l">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-medium">{item.author.name}</span>
          <span className="text-sm text-muted-foreground">{timestamp}</span>
        </div>
        <p className="text-sm text-muted-foreground">{item.content}</p>
      </div>
    </div>
  )
}