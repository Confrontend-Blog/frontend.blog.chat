import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import ChatRoom from "./chat-room/chat-room";
import { firebaseConfig } from "./config/firebase.config";
import { initializeFirebase } from "@Confrontend/chatly";
import { token } from "./uesr-token";

try {
  // const firebaseToken = localStorage.getItem("firebase_token") || "";

  // console.log({ firebaseTWoken });

  // if (!firebaseToken) {
  //   throw new Error("Firebase token not found");
  // }

  console.log(token);

  initializeFirebase(firebaseConfig, token);

  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <ChatRoom />
    </React.StrictMode>
  );
} catch (error) {
  console.log("bootstrap");

  console.log(error);
}
