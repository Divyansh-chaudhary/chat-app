"use client";
import ChatArea from "@/components/ChatArea";
import FriendsList from "@/components/FriendsList";
import { useAppSelector } from "@/redux/hooks";

export default function DashboardPage() {
  const isDrawerOpen = useAppSelector(
    (state) => state.globalReducer.drawerOpen
  );

  return (
    <main className="h-screen flex bg-gray-900">
      <div
        className={`transition-transform  -translate-x-full fixed md:static md:translate-x-0 z-10 bg-gray-900 ${
          isDrawerOpen ? "translate-x-0" : ""
        }`}
      >
        <FriendsList />
      </div>
      <ChatArea />
    </main>
  );
}
