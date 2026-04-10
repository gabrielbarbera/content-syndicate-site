import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import FormInput from "./FormInput";
import { CheckCircle } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  title: string;
  company: string;
  companyType: string;
  country: string;
  state: string;
  comments: string;
  privacy: boolean;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    title: "",
    company: "",
    companyType: "",
    country: "",
    state: "",
    comments: "",
    privacy: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-xl border border-accent/30 bg-accent/5 p-12 text-center"
      >
        <CheckCircle className="mb-4 text-accent" size={64} />
        <h3 className="mb-2 text-2xl font-semibold text-dark">Thank You!</h3>
        <p className="text-gray-600">We've received your message and will get back to you soon.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <FormInput label="First Name" name="firstName" placeholder="John" required />
        <FormInput label="Last Name" name="lastName" placeholder="Doe" required />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="john@example.com"
          required
        />
        <FormInput label="Phone" name="phone" type="tel" placeholder="(201) 555-0123" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <FormInput label="Title" name="title" placeholder="Marketing Manager" />
        <FormInput label="Company" name="company" placeholder="Acme Corp" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <FormInput
          label="Company Type"
          name="companyType"
          type="select"
          placeholder="Select company type"
          options={[
            { value: "public", label: "Public" },
            { value: "private", label: "Private" },
          ]}
        />
        <FormInput
          label="Country"
          name="country"
          type="select"
          placeholder="Select country"
          options={[
            { value: "us", label: "United States" },
            { value: "ca", label: "Canada" },
            { value: "uk", label: "United Kingdom" },
          ]}
        />
      </div>

      <FormInput label="State/Province" name="state" placeholder="California" />

      <FormInput
        label="Comments"
        name="comments"
        type="textarea"
        placeholder="How can we help you?"
        required
        rows={5}
      />

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="privacy"
          name="privacy"
          checked={formData.privacy}
          onChange={handleInputChange}
          required
          className="mt-1 h-4 w-4 rounded border-zinc-300 text-accent focus:ring-accent/20"
        />
        <label htmlFor="privacy" className="text-sm text-gray-600">
          You agree to our{" "}
          <a href="/privacy" className="text-accent hover:underline">
            Privacy Policy
          </a>
          .
        </label>
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-accent px-8 py-4 font-semibold text-dark shadow-lg shadow-accent/25 transition hover:scale-105 hover:shadow-accent/40"
      >
        Send Message
      </button>
    </form>
  );
}
