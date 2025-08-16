import { Button, Input, Card } from "@shadcn/ui";

export default function ChangePasswordForm() {
  return (
    <Card className="max-w-md mx-auto mt-10 p-6">
      <h2 className="text-2xl font-bold mb-4">Change Password</h2>
      <form>
        <Input type="password" placeholder="Current Password" className="mb-3" />
        <Input type="password" placeholder="New Password" className="mb-3" />
        <Button type="submit" className="w-full">Change Password</Button>
      </form>
    </Card>
  );
}
