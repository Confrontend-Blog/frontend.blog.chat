import { useContext, useEffect } from "react";
import { ChatPartnerContext } from "../utils/chat-partner.provider";
import * as S from "./chats-list.styled";
import HeaderChatList from "./header/header-chat-list";
import NewChat from "./new-chat/new-chat";

export default function ChatsList() {
  const { chatPartner } = useContext(ChatPartnerContext);

  useEffect(() => {
    console.log(chatPartner);
  }, [chatPartner]);

  return (
    <>
      <HeaderChatList>
        <NewChat />
      </HeaderChatList>
      <S.MessageContainer href="">
        <S.AvatarWrapper />
        <S.TitleWrapper>{"Hamed Fa."}</S.TitleWrapper>
        <S.LastMessage>{"Last message you send to me"}</S.LastMessage>
      </S.MessageContainer>
    </>
  );
}
