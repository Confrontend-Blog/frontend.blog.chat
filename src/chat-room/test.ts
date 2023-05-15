import {
  getFirestore,
  collection,
  query,
  orderBy,
  getDocs,
  Firestore,
} from "firebase/firestore";

import { FirebaseApp } from "firebase/app";

const toLowerCaseNoSpaces = (str: string) => {
  return str.replace(/\s/g, "").toLowerCase();
};

const generateId = (sender: string, receiver: string) => {
  const senderFormatted = toLowerCaseNoSpaces(sender);
  const receiverFormatted = toLowerCaseNoSpaces(receiver);
  return [senderFormatted, receiverFormatted].sort().join("-");
};

export async function getMessages(
  db: Firestore,
  sender: string,
  receiver: string
) {
  try {
    if (!db) {
      throw new Error("No Firebase db");
    }

    // Create a unique chat ID based on the sender and receiver
    const chatId = generateId(sender, receiver);

    // Get all the messages for this chat
    const messagesQuery = query(
      collection(db, "chats", chatId, "messages"),
      orderBy("timestamp")
    );
    const messageSnapshots = await getDocs(messagesQuery);
    const messages = messageSnapshots.docs.map((doc) => doc.data());

    return messages;
  } catch (e) {
    console.error("Error getting messages:", e);
    return [];
  }
}
