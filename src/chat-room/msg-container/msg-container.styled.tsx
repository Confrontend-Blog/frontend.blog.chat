import { Box } from "@mui/material";
import { styled } from "../../utils/styled";

export const MessageContainer = styled("div")<{ $isSender: boolean }>`
  display: flex;
  flex-direction: ${({ $isSender }) => ($isSender ? "row-reverse" : "row")};
`;

export const MessageBubble = styled(Box)<any>`
  width: fit-content;
  background: ${({ $isSender }) => ($isSender ? "#2195f36c" : "#202124")};
  color: #eee;
  padding: 0.5em;
  margin-bottom: 10px;
  border-radius: 10px;
`;
