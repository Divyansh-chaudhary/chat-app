import { ChatBox } from "../ChatBox";
import ChatAreaHeader from "../ChatAreaHeader";
import ChatInput from "../ChatInput";

export default function ChatArea() {
  return (
    <article className="flex-1 text-black mb-4 mx-4 md:mr-4 flex flex-col">
      <ChatAreaHeader />
      <ChatBox />
      <ChatInput />
    </article>
  );
}
