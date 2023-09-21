"use client";
import { LegacyRef, useEffect, useRef } from "react";
import { UserMessage } from "../UserMessage";

export function ChatBox() {
  const ref = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, []);

  return (
    <section ref={ref} className="flex-1 p-4 overflow-auto flex flex-col gap-3">
      {[
        "DC",
        "df",
        "ef",
        "e",
        "g",
        "q",
        "p",
        "o",
        "i",
        "u",
        "y",
        "t",
        "r",
        "b",
        "m",
      ].map((item) => (
        <UserMessage
          key={item}
          type={Math.round(Math.random()) + 1 === 1 ? "incoming" : "outgoing"}
          message="hello how are you"
          userName={item}
        />
      ))}
    </section>
  );
}
