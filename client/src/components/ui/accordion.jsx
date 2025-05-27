import { useState } from "react";

export function Accordion({ children, type = "multiple" }) {
  return <div className="space-y-2">{children}</div>;
}

export function AccordionItem({ children }) {
  return <div className="border border-gray-700 rounded-md">{children}</div>;
}

export function AccordionTrigger({ title, defaultOpen = false, children }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="w-full">
      <button
        className="w-full text-left px-4 py-3 font-medium text-white bg-gray-800 rounded-t-md hover:bg-gray-700 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          {title}
          <span className="text-gray-400">{isOpen ? "−" : "+"}</span>
        </div>
      </button>
      {isOpen && (
        <div className="px-4 py-3 bg-gray-900 border-t border-gray-700">
          {children}
        </div>
      )}
    </div>
  );
}

export function AccordionContent({ children }) {
  return <div>{children}</div>;
}
