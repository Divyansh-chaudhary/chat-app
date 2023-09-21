"use client";
import { Autocomplete, TextField } from "@mui/material";
import { FriendsListItem } from "../FriendsListItem";

export default function FriendsList() {
  return (
    <article className="min-w-[400px] p-4 flex flex-col">
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={[]}
        renderInput={(params) => (
          <TextField {...params} label="Search Friends" />
        )}
      />
      <nav aria-label="main mailbox folders" className="flex-1 overflow-auto">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
          <FriendsListItem key={item} no={item} />
        ))}
      </nav>
    </article>
  );
}
