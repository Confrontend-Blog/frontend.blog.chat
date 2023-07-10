import { Box } from "@mui/material";
import { styled } from "../utils/styled";

const v = {
  messageInput: {
    height: "4rem",
  },
};

export const RoomContainer = styled("div")`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const ChatContainer = styled(Box)`
  position: fixed;
  top: 4em; // Header height
  bottom: ${v.messageInput.height}; // height of the MessageInput
  width: 100%;
  overflow: auto;
  padding: 1em;
  box-sizing: border-box;
`;

export const MessageContainer = styled("div")`
  display: flex;
  align-items: start;
  gap: 10px;
`;

export const MessageInputContainer = styled(Box)`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 5px;
  background-color: #eee;
`;

export const MessageBubble = styled(Box)`
  max-width: 50%;
  width: fit-content;
  background: #444;
  color: #eee;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
`;
