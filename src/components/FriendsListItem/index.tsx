import { Avatar, Card, CardHeader } from "@mui/material";

export function FriendsListItem({ no }: { no: number }) {
  return (
    <Card className="w-full max-w-none mt-3" sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">{no}</Avatar>}
        title="Full name"
        subheader="Joined at: 21 Sep 2023"
      />
    </Card>
  );
}
