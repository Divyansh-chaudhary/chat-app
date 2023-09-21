import { MSG_TYPE } from "@/constants/message";
import { Avatar } from "@mui/material";
import { useMemo } from "react";

export function UserMessage({
  type,
  message,
  userName,
}: {
  type: MsgType;
  message: string;
  userName: string;
}) {
  const isIncoming = useMemo(() => type === MSG_TYPE.incoming, [type]);

  return (
    <div
      className={`flex items-center gap-3 ${
        isIncoming ? "" : "flex-row-reverse"
      }`}
    >
      <Avatar>{userName}</Avatar>
      <div
        className={`w-fit max-w-full md:max-w-[80%] p-2 rounded-lg ${
          isIncoming ? "bg-green-300" : "bg-slate-200 ml-auto"
        }`}
      >
        <p>{message}</p>
      </div>
    </div>
  );
}
