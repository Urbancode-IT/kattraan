import { Button, Input, Card } from "@shadcn/ui";

export default function UpdateEmailForm() {
  return (
    <Card className="max-w-md mx-auto mt-10 p-6">
      <h2 className="text-2xl font-bold mb-4">Update Email</h2>
      <form>
        <Input type="email" placeholder="New Email" className="mb-3" />
        <Button type="submit" className="w-full">Update Email</Button>
      </form>
    </Card>
  );
}
