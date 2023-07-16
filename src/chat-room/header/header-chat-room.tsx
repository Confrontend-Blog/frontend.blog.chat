import { styled } from "../../utils/styled";
import { Avatar } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useContext } from "react";
import { ChatPartnerContext } from "../../utils/chat-partner.provider";

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

type HeaderChatRoomProps = {
  title: string;
};

function HeaderChatRoom({ title }: HeaderChatRoomProps) {
  const { setChatPartner } = useContext(ChatPartnerContext);
  function onBack() {
    setChatPartner(null);
  }
  return (
    <Container>
      <ArrowBack onClick={onBack} />
      <Avatar />
      <Text>{title}</Text>
    </Container>
  );
}

export default HeaderChatRoom;
