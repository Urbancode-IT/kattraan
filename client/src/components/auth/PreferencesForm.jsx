import { Button, Card } from "@shadcn/ui";

export default function PreferencesForm() {
  return (
    <Card className="max-w-md mx-auto mt-10 p-6">
      <h2 className="text-2xl font-bold mb-4">Preferences</h2>
      <form>
        {/* Add preference fields here */}
        <Button type="submit" className="w-full">Save Preferences</Button>
      </form>
    </Card>
  );
}
