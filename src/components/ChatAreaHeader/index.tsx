import { Avatar, Card, CardHeader } from "@mui/material";

export default function ChatAreaHeader() {
  return (
    <Card className="w-full max-w-none" sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">DC</Avatar>}
        title="Full name"
        subheader="Joined at: 21 Sep 2023"
      />
    </Card>
  );
}
