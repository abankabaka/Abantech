require('dotenv').config({ path: '.env.local' });
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

try {
  const app = initializeApp({
    credential: cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
  });
  
  const db = getFirestore(app);
  db.collection("messages").limit(1).get()
    .then(() => {
      console.log("SUCCESS: Connected to Firebase Admin!");
      process.exit(0);
    })
    .catch(err => {
      console.error("FIREBASE ERROR:", err.message);
      process.exit(1);
    });

} catch (e) {
  console.error("INIT ERROR:", e.message);
}
