"use client";

import { MessageSquarePlus } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

function CreateChatButton() {
  const router = useRouter();

  const createNewChat = async () => {
    router.push(`/chat/${chatId}`);
  };
  return (
    <Button variant={"ghost"}>
      <MessageSquarePlus />
    </Button>
  );
}

export default CreateChatButton;
