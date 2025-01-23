export type Author = {
    name: string
}

export interface Icomment {
    id: string,
    author: Author,
    content: string,
    timestamp: string
}