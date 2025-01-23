import { Itopic } from "@/types/topic";

const headers = new Headers();
headers.append("Content-Type", "application/json");

const requestOptions = (method: string, body?: any): RequestInit => ({
    method,
    headers,
    body,
    redirect: "follow"
})

const route = "https://squad-test-9b9b0-default-rtdb.firebaseio.com/orgs/Rio42/topics";

export const getTopics = async () => {
    const response = await fetch(`${route}.json`, requestOptions("GET"));
    const data: { [key: string]: Itopic } = await response.json()
    return data;
}

type PostTopic = Omit<Itopic, "comments" | "replies" | "likes" | "timestamp">
export const setTopic = async (data: PostTopic) => {
    const topic: Itopic = {
        ...data,
        comments: {},
        replies: 0,
        likes: 0,
        timestamp: Date.now().toString()
    }
    const response = await fetch(`${route}.json`, requestOptions("POST", topic));
    return response.ok;
}

type PatchTopic = Omit<Itopic, "comments" | "replies" | "likes" | "timestamp">
export const editTopic = async (id: string, data: PatchTopic) => {
    const topic: Partial<Itopic> = {
        ...data,
        timestamp: Date.now().toString()
    }
    const response = await fetch(`${route}/${id}.json`, requestOptions("POST", topic));
    return response.ok;
}