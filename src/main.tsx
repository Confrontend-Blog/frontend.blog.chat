import React from "react";
import { Root, createRoot } from "react-dom/client";
import { firebaseConfig } from "./config/firebase.config";
import { initializeFirebase } from "@Confrontend/chatly";
import "./global.css";
import ChatsList from "./chats-list/chats-list";
import { ChatPartnerProvider } from "./utils/chat-partner.provider";
import App from "./App";

declare global {
  interface Window {
    chatMicroFrontend?: {
      mount: (containerId: string) => void;
      unmount: (containerId: string) => void;
    };
  }
}
// Prepare root instance holder
let rootInstance: Root | null = null;

// Mount method
function mount(containerId: string) {
  // Get the container DOM node
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Container with id "${containerId}" not found.`);
    return;
  }

  // Initialize Firebase
  // TODO get token from gcp
  initializeFirebase(firebaseConfig, firebaseConfig.apiKey);

  // Mount your application into the container
  rootInstance = createRoot(container);
  rootInstance.render(
    <React.StrictMode>
      <ChatPartnerProvider>
        <App />
      </ChatPartnerProvider>
    </React.StrictMode>
  );
}

// Unmount method
function unmount(containerId: string) {
  if (rootInstance) {
    rootInstance.unmount();
    rootInstance = null;
  } else {
    console.error(`Application not mounted to "${containerId}"`);
  }
}

// TODO find a better alternative for testing
mount("root");

// Expose the mount and unmount methods to window
window.chatMicroFrontend = {
  mount,
  unmount,
};
