declare global {
  interface Window {
    Frontend_Portal_Chat: string;
  }
}

import React from "react";
import ReactDOM from "react-dom/client";
import ChatRoom from "./chat-room/chat-room.tsx";
import { GlobalStyle } from "./index.styled.tsx";
import singleSpaReact from 'single-spa-react';

try {
  // import { firebaseConfig } from "./config/firebase.config.ts";
  // import { initializeFirebase } from "@Confrontend/chatly";

  // const firebaseToken = localStorage.getItem("firebase_token") || "";

  // console.log({ firebaseToken });

  // if (!firebaseToken) {
  //   throw new Error("Firebase token not found");
  // }

  // initializeFirebase(firebaseConfig, firebaseToken);

} catch (error) {
  console.log(error);
}

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient: ReactDOM,
  rootComponent: ChatRoom,
  errorBoundary(err, info, props) {
    return (
      <div className="h-16 flex items-center justify-between px-6 bg-primary text-white">
        Error
      </div>
    );
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
