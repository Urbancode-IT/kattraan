import { Button, Input, Card, Textarea } from "@shadcn/ui";

export default function ReportIssueForm() {
  return (
    <Card className="max-w-md mx-auto mt-10 p-6">
      <h2 className="text-2xl font-bold mb-4">Report an Issue</h2>
      <form>
        <Input type="email" placeholder="Your Email" className="mb-3" />
        <Textarea placeholder="Describe the issue..." className="mb-3" />
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </Card>
  );
}
