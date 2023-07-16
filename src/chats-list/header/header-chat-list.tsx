import { ReactNode } from "react";
import { styled } from "../../utils/styled";
import { Avatar } from "@mui/material";

const Container = styled("div")`
  display: flex;
  align-items: center;
  height: 4em;
  background-color: #222222;
  color: #eee;
  padding: 0.5em 0.5em 0.5em 2em;
`;

type HeaderChatListProps = {
  children: ReactNode;
};

function HeaderChatList({ children }: HeaderChatListProps) {
  return <Container>{children}</Container>;
}

export default HeaderChatList;
