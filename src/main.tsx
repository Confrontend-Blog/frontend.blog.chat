import React from "react";
import ReactDOM from "react-dom/client";
import ChatRoom from "./chat-room/chat-room.tsx";
import { GlobalStyle } from "./index.styled.tsx";
import { firebaseConfig } from "./config/firebase.config.ts";
import { initializeFirebase } from "@Confrontend/chatly";

console.log(import.meta.env.VITE_FIREBASE_API_KEY);

initializeFirebase(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ChatRoom />
  </React.StrictMode>
);
