"use client";

import { useEffect } from "react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";

export default function ChatWidget() {
  useEffect(() => {
    createChat({
      webhookUrl:
        
        "https://primary-production-b3a4b.up.railway.app/webhook/4f2ca5c6-557a-46b7-9881-f085bb3f0b71/chat",
      initialMessages: [
        "Hi there! 👋",
        "Welcom to Honey Store. How can I assist you today?",
      ],
    });
  }, []);

  return null;
}
