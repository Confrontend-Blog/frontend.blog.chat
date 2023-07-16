import { useState, useEffect } from "react";
import * as S from "./chat-room.styled";
import { TextField } from "@mui/material";

// TODO replace me with real users
export const RECEIVER = "receiver";
export const CURRENT_USER = "sender";

import {
  getMessages,
  sendMessage as sendMessageToServer,
} from "@Confrontend/chatly";
import MsgContainer from "./msg-container/msg-container";
import HeaderChatRoom from "./header/header-chat-room";

const ChatRoom = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState("");

  const sendMessage = (event: React.FormEvent) => {
    event.preventDefault();

    sendMessageToServer(CURRENT_USER, RECEIVER, inputValue);
    setInputValue("");
  };

  useEffect(() => {
    async function fetchData() {
      const response = await getMessages(CURRENT_USER, RECEIVER);
      console.log(response);

      setMessages(response);
      const chatContainer = document.getElementById("chatContainer");
      chatContainer?.scrollTo(0, chatContainer.scrollHeight);
    }

    fetchData();
  }, []);

  return (
    <S.RoomContainer>
      <HeaderChatRoom title={RECEIVER} />
      <S.ChatContainer id="chatContainer">
        {messages.map((message) => (
          <MsgContainer
            key={message.id}
            isSender={message.sender === CURRENT_USER}
            message={message.text}
          />
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
