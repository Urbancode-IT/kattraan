import { Button, Input, Card } from "@shadcn/ui";

export default function RegisterForm() {
  return (
    <Card className="max-w-md mx-auto mt-10 p-6">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form>
        <Input type="text" placeholder="Name" className="mb-3" />
        <Input type="email" placeholder="Email" className="mb-3" />
        <Input type="password" placeholder="Password" className="mb-3" />
        <Button type="submit" className="w-full">Register</Button>
      </form>
    </Card>
  );
}
