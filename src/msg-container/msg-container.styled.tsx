import styled from "styled-components";
import { Box } from "@mui/material";
import { Avatar } from "@mui/material";

export const MessageContainer = styled.div<{ hasTitle: boolean }>`
  display: grid;
  grid-template-areas: ${props => props.hasTitle ? 
    `"avatar title"
     "avatar bubble"` : 
    `"avatar bubble"`};
  justify-content: start;
  align-items: center;
  column-gap: 1em;
  row-gap: 0.1em;
  max-height: 4em;
  margin-bottom: 1em;
`;

export const MessageTitle = styled.div`
  grid-area: title;
  display: flex;
  align-items: start;
`;

export const MessageBubble = styled(Box)`
  grid-area: bubble;
  width: fit-content;
  background: #444;
  color: #eee;
  padding: 0.5em;
  /* margin-bottom: 10px; */
  border-radius: 10px;
`;

export const MessageAvatar = styled(Avatar)`
  grid-area: avatar;
  height: 4em;
`;
