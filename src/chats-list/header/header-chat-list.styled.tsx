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

const Text = styled("span")`
  color: #eee;
  padding: 0.5em 0.5em 0.5em 1em;
`;

type HeaderChatListProps = {
  title: string;
};

function HeaderChatList({ title }: HeaderChatListProps) {
  return (
    <Container>
      <Avatar />
      <Text>{title}</Text>
    </Container>
  );
}

export default HeaderChatList;