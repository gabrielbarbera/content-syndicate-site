import { forwardRef } from "react";

interface FormInputProps {
  label?: string;
  name: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  placeholder?: string;
  required?: boolean;
  error?: string;
  options?: { value: string; label: string }[];
  rows?: number;
}

const FormInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  FormInputProps
>(
  (
    { label, name, type = "text", placeholder, required = false, error, options, rows = 4 },
    ref
  ) => {
    const baseClassName =
      "w-full rounded-xl border border-zinc-200 bg-zinc-50 py-3 px-4 text-dark placeholder:text-gray-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all";

    let inputElement;

    if (type === "textarea") {
      inputElement = (
        <textarea
          ref={ref as React.RefObject<HTMLTextAreaElement>}
          name={name}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className={baseClassName + " resize-none"}
        />
      );
    } else if (type === "select") {
      inputElement = (
        <select
          ref={ref as React.RefObject<HTMLSelectElement>}
          name={name}
          required={required}
          className={baseClassName}
        >
          <option value="">{placeholder}</option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    } else {
      inputElement = (
        <input
          ref={ref as React.RefObject<HTMLInputElement>}
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          className={baseClassName}
        />
      );
    }

    return (
      <div>
        {label && (
          <label htmlFor={name} className="mb-2 block text-sm font-semibold text-dark">
            {label}
            {required && <span className="text-accent ml-0.5">*</span>}
          </label>
        )}
        {inputElement}
        {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";

export default FormInput;
