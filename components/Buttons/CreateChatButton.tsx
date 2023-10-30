"use client";

import { MessageSquarePlus } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useToast } from "../ui/use-toast";
import { useSubscriptionStore } from "@/store/SubscriptionStore";
import LoadingSpinner from "../LoadingSpinner";

function CreateChatButton({ isLarge }: { isLarge?: boolean }) {
  const router = useRouter();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const subscription = useSubscriptionStore((state) => state.subscription);

  const createNewChat = async () => {
    // router.push(`/chat/${chatId}`);
  };

  if (isLarge) {
    return (
      <div>
        <Button variant={"default"} onClick={createNewChat}>
          {loading ? <LoadingSpinner /> : "Create a New Chat"}
        </Button>
      </div>
    );
  }
  return (
    <Button variant={"ghost"}>
      <MessageSquarePlus />
    </Button>
  );
}

export default CreateChatButton;
