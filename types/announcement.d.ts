import { Icomment } from "./comments"

export type Author = {
  name: string
  avatar: string
}

export interface Iannouncement {
  id: string
  title: string,
  content: string,
  author: Author,
  date: string,
  comments: Icomment[]
}