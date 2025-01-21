import { NextRequest, NextResponse } from "next/server";
import { database } from "../../../firebaseConfig";
import { ref, set, get, child } from "firebase/database";

// Função para salvar dados no Firebase
export async function POST(req: NextRequest) {
  try {
    const { key, value } = await req.json();
    await set(ref(database, key), value);
    return NextResponse.json({ message: "Dados salvos com sucesso!" });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao salvar os dados." }, { status: 500 });
  }
}

// Função para obter dados do Firebase
export async function GET(request: Request) {
  const url = new URL(request.url);
  const topicId = url.searchParams.get("topicId");

  if (!topicId) {
    return NextResponse.json({ error: "Topic ID is required" }, { status: 400 });
  }

  try {
    const commentsRef = ref(database, `topics/${topicId}/comments`);
    const snapshot = await get(commentsRef);

    if (snapshot.exists()) {
      return NextResponse.json(snapshot.val());
    } else {
      return NextResponse.json([]);
    }
  } catch (error) {
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
  }
}
