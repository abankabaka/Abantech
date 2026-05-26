import { NextResponse } from "next/server";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function POST(req: Request) {
  try {
    const { password } = await req.json();

    if (!password || password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized access." }, { status: 401 });
    }

    // Fetch messages
    const messagesRef = collection(db, "messages");
    const messagesQuery = query(messagesRef, orderBy("createdAt", "desc"));
    const messagesSnapshot = await getDocs(messagesQuery);
    const messages = messagesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Fetch subscribers
    const subscribersRef = collection(db, "subscribers");
    const subscribersQuery = query(subscribersRef, orderBy("createdAt", "desc"));
    const subscribersSnapshot = await getDocs(subscribersQuery);
    const subscribers = subscribersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    return NextResponse.json({ messages, subscribers });
  } catch (error) {
    console.error("Admin API Error:", error);
    return NextResponse.json({ error: "Failed to fetch data." }, { status: 500 });
  }
}
