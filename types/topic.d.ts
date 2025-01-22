import { Icomment } from "./comments"

export type Author = {
  name: string
}

export interface Itopic {
  title: string
  author: Author
  category: string
  replies: number
  likes: number
  excerpt: string
  timestamp: string
  comments: { [key: string]: Icomment }
}