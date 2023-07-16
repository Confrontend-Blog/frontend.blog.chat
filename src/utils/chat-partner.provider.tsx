import { ReactNode, createContext, useState } from "react";

type ChatPartnerContextValue = {
  chatPartner: string | null;
  setChatPartner: (partner: string | null) => void;
};

export const ChatPartnerContext = createContext<ChatPartnerContextValue>({
  chatPartner: null,
  setChatPartner: () => null,
});

type ChatPartnerProviderProps = {
  children: ReactNode;
};

export const ChatPartnerProvider = ({ children }: ChatPartnerProviderProps) => {
  const [chatPartner, setChatPartner] = useState<string | null>(null);

  const updateChatPartner = (partner: string | null) => {
    setChatPartner(partner);
  };

  const contextValue: ChatPartnerContextValue = {
    chatPartner,
    setChatPartner: updateChatPartner,
  };

  return (
    <ChatPartnerContext.Provider value={contextValue}>
      {children}
    </ChatPartnerContext.Provider>
  );
};
