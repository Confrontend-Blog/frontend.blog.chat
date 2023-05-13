import React from "react";
import ReactDOM from "react-dom/client";
import ChatRoom from "./chat-room/chat-room.tsx";
import { GlobalStyle } from "./index.styled.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ChatRoom />
  </React.StrictMode>
);
