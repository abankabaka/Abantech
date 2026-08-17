import { NextResponse } from "next/server";

// Use Firebase Admin SDK for server-side access
import { initializeApp, getApps, cert, App } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

function getAdminApp(): App {
  if (getApps().length > 0) return getApps()[0];
  
  return initializeApp({
    credential: cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
  });
}

export async function POST(req: Request) {
  try {
    const { password } = await req.json();

    if (!password || password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized access." }, { status: 401 });
    }

    const app = getAdminApp();
    const db = getFirestore(app);

    // Fetch messages
    const messagesSnapshot = await db
      .collection("messages")
      .orderBy("createdAt", "desc")
      .get();
    const messages = messagesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Fetch subscribers
    const subscribersSnapshot = await db
      .collection("subscribers")
      .orderBy("createdAt", "desc")
      .get();
    const subscribers = subscribersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    return NextResponse.json({ messages, subscribers });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to fetch data.";
    console.error("Admin API Error:", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
