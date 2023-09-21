"use client";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import { FormEvent } from "react";

export default function ChatInput() {
  function sendMessage(e: FormEvent<HTMLFormElement>) {
    console.log("e", e);
    e.preventDefault();
  }

  return (
    <section className="p-2 bg-white rounded-r rounded-l">
      <form onSubmit={sendMessage} className="flex items-center gap-3">
        <OutlinedInput className="w-full flex-1" />
        <IconButton>
          <SendIcon />
        </IconButton>
      </form>
    </section>
  );
}
