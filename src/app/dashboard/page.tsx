import ChatArea from "@/components/ChatArea";
import FriendsList from "@/components/FriendsList";

export default function DashboardPage() {
  return (
    <main className="h-screen flex bg-slate-100">
      <FriendsList />
      <ChatArea />
    </main>
  );
}
