import { Button, Card } from "@shadcn/ui";

export default function UpdateAvatarForm() {
  return (
    <Card className="max-w-md mx-auto mt-10 p-6">
      <h2 className="text-2xl font-bold mb-4">Update Avatar</h2>
      <form>
        <input type="file" accept="image/*" className="mb-3" />
        <Button type="submit" className="w-full">Update Avatar</Button>
      </form>
    </Card>
  );
}
