import { Button, Input, Card } from "@shadcn/ui";

export default function ForgotPasswordForm() {
  return (
    <Card className="max-w-md mx-auto mt-10 p-6">
      <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
      <form>
        <Input type="email" placeholder="Email" className="mb-3" />
        <Button type="submit" className="w-full">Send Reset Link</Button>
      </form>
    </Card>
  );
}
