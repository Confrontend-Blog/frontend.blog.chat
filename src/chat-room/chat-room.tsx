import { useState, useEffect } from "react";
import * as S from "./chat-room.styled";
import { Avatar, TextField } from "@mui/material";

import {
  Message,
  getMessages,
  sendMessage as sendMessageToServer,
} from "@Confrontend/chatly";

const ChatRoom = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");

  const sendMessage = (event: React.FormEvent) => {
    event.preventDefault();

    sendMessageToServer("sender", "receiver", inputValue);
    setInputValue("");
  };

  useEffect(() => {
    async function fetchData() {
      const response = await getMessages("sender", "receiver");
      console.log(response);

      setMessages(response);
      const chatContainer = document.getElementById("chatContainer");
      chatContainer?.scrollTo(0, chatContainer.scrollHeight);
    }

    fetchData();
  }, []);

  return (
    <S.RoomContainer>
      <S.ChatContainer id="chatContainer">
        {messages.map((message) => (
          <S.MessageContainer key={message.id}>
            <Avatar src={""} alt="Profile picture" />
            <S.MessageBubble>{message.text}</S.MessageBubble>
          </S.MessageContainer>
        ))}
      </S.ChatContainer>
      <S.MessageInputContainer>
        <form onSubmit={sendMessage}>
          <TextField
            fullWidth
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message here..."
            inputProps={{ autoComplete: "off" }}
          />
        </form>
      </S.MessageInputContainer>
    </S.RoomContainer>
  );
};

export default ChatRoom;
