import { Avatar } from "@mui/material";
import { styled } from "../utils/styled";

export const MessageContainer = styled("a")`
  display: grid;
  grid-template-areas:
    "avatar title"
    "avatar last-message";

  background-color: #eee;
  justify-content: start;
  align-items: center;
  padding: 0 1em 0 1em;
  border-bottom: 1px double #999;

  &,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;

export const AvatarWrapper = styled(Avatar)`
  grid-area: avatar;
  margin-inline-end: 1em;
`;
export const TitleWrapper = styled("b")`
  grid-area: title;
  padding: 0.5em 0 0 0;
`;

export const LastMessage = styled("div")`
  grid-area: last-message;
  padding: 0.5em 0 0 0;
  margin-bottom: 10px;
  border-radius: 10px;
`;
