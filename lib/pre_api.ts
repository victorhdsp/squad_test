import { Itopic } from "@/types/topic";

export const getTopics = async () => {
    const requestOptions = {
        method: "GET",
        redirect: "follow" as RequestRedirect
    };
      
    const response = await fetch("https://squad-test-9b9b0-default-rtdb.firebaseio.com/orgs/Rio42/topics.json", requestOptions);
    const data: { [key: string]: Itopic } = await response.json()
    return data;
}