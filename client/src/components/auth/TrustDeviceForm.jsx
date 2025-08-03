import { Button, Input, Card } from "@shadcn/ui";

export default function TrustDeviceForm() {
  return (
    <Card className="max-w-md mx-auto mt-10 p-6">
      <h2 className="text-2xl font-bold mb-4">Trust This Device</h2>
      <form>
        <Input type="password" placeholder="Enter Password to Trust Device" className="mb-3" />
        <Button type="submit" className="w-full">Trust Device</Button>
      </form>
    </Card>
  );
}
