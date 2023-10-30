import { authOptions } from "@/auth";
import ChatList from "@/components/Chat/ChatList";
import { getDocs } from "firebase/firestore";
import { getServerSession } from "next-auth";

async function ChatsPage() {
  const session = await getServerSession(authOptions);

  const chatsSnapShot = await getDocs(
    chatMembersCollectionGroupRef(session?.user.id)
  );

  return (
    <div>
      {/* Chat Permissions */}

      {/* ChatList */}
      <ChatList />
    </div>
  );
}

export default ChatsPage;
