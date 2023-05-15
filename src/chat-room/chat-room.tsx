import { useState, useEffect } from "react";
import * as S from "./chat-room.styled";
import { Avatar, TextField } from "@mui/material";

import { getMessages } from "@Confrontend/chatly";

type Message = {
  id: number;
  text: string;
};

const ChatRoom = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");

  try {
    getMessages("s", "r").then((messages) => {
      console.log(messages);
    });
  } catch (error) {
    console.log(error);
  }

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
