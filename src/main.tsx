import React from "react";
import ReactDOM from "react-dom/client";
import ChatRoom from "./chat-room/chat-room.tsx";
import { GlobalStyle } from "./index.styled.tsx";
import { firebaseConfig } from "./config/firebase.config.ts";
import { initializeFirebase } from "@Confrontend/chatly";

const firebaseToken = localStorage.getItem("firebase_token") || ""

console.log({ firebaseToken });

if (!firebaseToken) {
  throw new Error("Firebase token not found");
}

initializeFirebase(
  firebaseConfig,
  firebaseToken
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ChatRoom />
  </React.StrictMode>
);
