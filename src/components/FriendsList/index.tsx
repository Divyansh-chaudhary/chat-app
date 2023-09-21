"use client";
import Image from "next/image";
import { FriendsListItem } from "../FriendsListItem";

export default function FriendsList() {
  return (
    <article className="min-w-[400px] p-4 flex flex-col">
      <div>
        <input
          type="text"
          id="search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Friends"
        />
      </div>
      <nav
        role="list"
        className="divide-y divide-gray-200 dark:divide-gray-700 flex-1 overflow-auto"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
          <FriendsListItem key={item} />
        ))}
      </nav>
    </article>
  );
}
