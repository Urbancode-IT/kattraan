import { Button, Input, Card } from "@shadcn/ui";

export default function TwoFactorForm() {
  return (
    <Card className="max-w-md mx-auto mt-10 p-6">
      <h2 className="text-2xl font-bold mb-4">Two-Factor Authentication</h2>
      <form>
        <Input type="text" placeholder="Enter 2FA Code" className="mb-3" />
        <Button type="submit" className="w-full">Verify</Button>
      </form>
    </Card>
  );
}
