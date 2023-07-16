import * as S from "./msg-container.styled";

export type MsgContainerProps = {
  message: string;
  isSender: boolean;
};

export default function MsgContainer({
  message = "No message",
  isSender,
}: MsgContainerProps) {
  return (
    <S.MessageContainer $isSender={isSender}>
      <S.MessageBubble $isSender={isSender}>{message}</S.MessageBubble>
    </S.MessageContainer>
  );
}
