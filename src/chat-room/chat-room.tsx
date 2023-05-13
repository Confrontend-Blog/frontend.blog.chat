import { useState, useEffect } from "react";
import * as S from "./chat-room.styled";
import { TextField } from "@mui/material";

type Message = {
  id: number;
  text: string;
};

const ChatRoom = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");

  const sendMessage = (event: React.FormEvent) => {
    event.preventDefault();

    const newMessage: Message = {
      id: messages.length,
      text: inputValue,
    };

    setMessages([...messages, newMessage]);
    setInputValue("");
  };

  useEffect(() => {
    const chatContainer = document.getElementById("chatContainer");
    chatContainer?.scrollTo(0, chatContainer.scrollHeight);
  }, [messages]);

  return (
    <S.RoomContainer>
      <S.ChatContainer id="chatContainer">
        {messages.map((message) => (
          <S.MessageBubble key={message.id}>{message.text}</S.MessageBubble>
        ))}
      </S.ChatContainer>
      <S.MessageInputContainer>
        <form onSubmit={sendMessage}>
          <TextField
            fullWidth
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message here..."
          />
        </form>
      </S.MessageInputContainer>
    </S.RoomContainer>
  );
};

export default ChatRoom;
