import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea"; // Include if not already

import { Eye, EyeOff } from "lucide-react"; // ✅ Using Lucide icons for show/hide

function FormControls({ formControls = [], formData, setFormData }) {
  const [showPasswords, setShowPasswords] = useState({});

  const togglePasswordVisibility = (fieldName) => {
    setShowPasswords((prev) => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }));
  };

  function renderComponentByType(control) {
    const value = formData[control.name] || "";

    switch (control.componentType) {
      case "select":
        return (
          <Select
            onValueChange={(value) =>
              setFormData({ ...formData, [control.name]: value })
            }
            value={value}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={control.label} />
            </SelectTrigger>
            <SelectContent>
              {control.options?.map((option) => (
                <SelectItem key={option.id} value={option.id}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case "textarea":
        return (
          <Textarea
            id={control.name}
            name={control.name}
            placeholder={control.placeholder}
            value={value}
            onChange={(e) =>
              setFormData({ ...formData, [control.name]: e.target.value })
            }
          />
        );

      case "input":
      default:
        const isPassword = control.type === "password";
        const inputType = isPassword
          ? showPasswords[control.name]
            ? "text"
            : "password"
          : control.type;

        return (
          <div className="relative">
            <Input
              id={control.name}
              name={control.name}
              placeholder={control.placeholder}
              type={inputType}
              value={value}
              onChange={(e) =>
                setFormData({ ...formData, [control.name]: e.target.value })
              }
            />
            {isPassword && (
              <button
                type="button"
                onClick={() => togglePasswordVisibility(control.name)}
                className="absolute top-2 right-3 text-gray-600"
              >
                {showPasswords[control.name] ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            )}
          </div>
        );
    }
  }

  return (
    <div className="flex flex-col gap-3">
      {formControls.map((control) => (
        <div key={control.name}>
          <Label htmlFor={control.name}>{control.label}</Label>
          {renderComponentByType(control)}
        </div>
      ))}
    </div>
  );
}

export default FormControls;
