import { Author, Itopic } from "../types/topic";

const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    type topicData = Omit<Itopic, "comments" |  "timestamp">;

    function createTopic(item: topicData): void {
      const author: Author = {
          name: item.author.name
      };

    const topic: Itopic = {
        title: item.title,
        author: author,
        category: item.category,
        replies: 0,
        likes: 0,
        excerpt: item.excerpt,
        timestamp: new Date().toISOString(),
        comments: {}
    };
    const raw = JSON.stringify(topic);


    
    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow" as RequestRedirect
    };
    
    fetch("https://squad-test-9b9b0-default-rtdb.firebaseio.com/orgs/Rio42/topics.json", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
            .catch((error) => console.error(error));
      }