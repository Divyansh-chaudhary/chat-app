"use client";
import { EmojiIcon, ImageIcon, SendIcon } from "@/icons";
import { FormEvent } from "react";

export default function ChatInput() {
  function sendMessage(e: FormEvent<HTMLFormElement>) {
    console.log("e", e);
    e.preventDefault();
  }

  return (
    <form>
      <label htmlFor="chat" className="sr-only">
        Your message
      </label>
      <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
        <button
          type="button"
          className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
        >
          <ImageIcon />
          <span className="sr-only">Upload image</span>
        </button>
        <button
          type="button"
          className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
        >
          <EmojiIcon />
          <span className="sr-only">Add emoji</span>
        </button>
        <input
          id="chat"
          className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your message..."
        />
        <button
          type="submit"
          className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
        >
          <SendIcon />
          <span className="sr-only">Send message</span>
        </button>
      </div>
    </form>
  );
}
