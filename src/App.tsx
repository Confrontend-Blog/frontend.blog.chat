import React, { useContext } from "react";
import ChatsList from "./chats-list/chats-list";
import { ChatPartnerContext } from "./utils/chat-partner.provider";
import ChatRoom from "./chat-room/chat-room";

export default function App() {
  const { chatPartner } = useContext(ChatPartnerContext);
  return chatPartner ? <ChatRoom /> : <ChatsList />;
}
