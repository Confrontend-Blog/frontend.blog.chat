import React from "react";
import ReactDOM from "react-dom/client";
import ChatRoom from "./chat-room/chat-room";
import { GlobalStyle } from "./index.styled";
import { firebaseConfig } from "./config/firebase.config";
import { initializeFirebase } from "@Confrontend/chatly";

try {
  const firebaseToken = localStorage.getItem("firebase_token") || "";

  console.log({ firebaseToken });

  if (!firebaseToken) {
    throw new Error("Firebase token not found");
  }

  initializeFirebase(firebaseConfig, firebaseToken);

  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <GlobalStyle />
      <ChatRoom />
    </React.StrictMode>
  );
} catch (error) {
  console.log(error);
}
