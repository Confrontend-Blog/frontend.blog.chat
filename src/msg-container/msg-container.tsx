import * as S from "./msg-container.styled";

export type MsgContainerProps = {
  title?: string;
  message: string;
  avatar: {
    src: string;
    alt: string;
  };
};

export default function MsgContainer({
  title,
  message = "No message",
  avatar,
}: MsgContainerProps) {
  return (
    <S.MessageContainer $hasTitle={!!title}>
      {title && <S.MessageTitle>{title}</S.MessageTitle>}
      <S.MessageAvatar src={avatar.src} alt={avatar.alt} />
      <S.MessageBubble>{message}</S.MessageBubble>
    </S.MessageContainer>
  );
}
