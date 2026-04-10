import { useState, useRef, useCallback, type FormEvent, type DragEvent } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Upload,
  X,
  Building2,
  User,
  CreditCard,
  FileText,
  ChevronDown,
} from "lucide-react";

interface CompanyInfo {
  companyName: string;
  country: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postalCode: string;
  referral: string;
  telegram: string;
  primaryPhone: string;
  cellPhone: string;
}
interface AdditionalInfo {
  website: string;
  industry: string;
  companyType: string;
  logo: File | null;
}
interface PrimaryContact {
  firstName: string;
  lastName: string;
  title: string;
  country: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postalCode: string;
  primaryPhone: string;
  cellPhone: string;
  email: string;
  password: string;
  confirmPassword: string;
}
interface BillingContact {
  firstName: string;
  lastName: string;
  title: string;
  country: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postalCode: string;
  primaryPhone: string;
  cellPhone: string;
}

const STEPS = [
  { id: 1, label: "Company", icon: Building2 },
  { id: 2, label: "Details", icon: Building2 },
  { id: 3, label: "Primary Contact", icon: User },
  { id: 4, label: "Billing", icon: CreditCard },
  { id: 5, label: "Terms", icon: FileText },
];

const COUNTRIES = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "Spain",
  "Italy",
  "Netherlands",
  "Brazil",
  "Mexico",
  "Japan",
  "China",
  "India",
  "South Korea",
  "Singapore",
  "UAE",
];

const INDUSTRIES = [
  "Technology",
  "Finance & Banking",
  "Healthcare",
  "Real Estate",
  "Legal",
  "Retail & E-commerce",
  "Media & Entertainment",
  "Education",
  "Energy",
  "Manufacturing",
  "Food & Beverage",
  "Travel & Hospitality",
  "Non-profit",
  "Other",
];

const COMPANY_TYPES = ["Public", "Private", "Non-profit", "Government", "Startup", "Agency"];

const PHONE_CODES = [
  { code: "+1", flag: "🇺🇸", label: "US" },
  { code: "+1", flag: "🇨🇦", label: "CA" },
  { code: "+44", flag: "🇬🇧", label: "UK" },
  { code: "+61", flag: "🇦🇺", label: "AU" },
  { code: "+49", flag: "🇩🇪", label: "DE" },
  { code: "+33", flag: "🇫🇷", label: "FR" },
  { code: "+91", flag: "🇮🇳", label: "IN" },
];

const TERMS_TEXT = `By using the Contentsyndicate.net website ("Site"), users agree to be bound by the following terms of use.

A. Limitations on Scope of Use

Use of the Content Syndicate Site is limited to submission of news releases for distribution via Content Syndicate, retrieving RSS feeds, direct email and the reading of releases, marketing and other materials.

You agree not to use the Content Syndicate Site for any other purposes, including, without limitation, to store, aggregate, reproduce or distribute information available on the Site in any manner or to compete directly or indirectly with Content Syndicate; to interfere with or disrupt the operation of Site or the networks or servers connected to the Site in any manner; to impersonate any person or entity or otherwise misrepresent your affiliation with any person or entity; to upload, post or otherwise transmit any content that infringes the proprietary rights of any third party, or is otherwise unlawful or offensive; to harass or otherwise harm Content Syndicate or any other person or entity; or to engage in commercial activities of any kind without prior consent of Content Syndicate.

Any unauthorized use of the Content Syndicate Site may result in termination of all rights to use the Site and penalties to the full extent provided by law.

All submissions to Content Syndicate are governed by the terms and conditions set forth herein and agreed to by you or an agent of your company. By submitting a press release for dissemination by Content Syndicate, you agree to be bound by the terms and conditions set forth herein.

B. Disclaimer of Warranties

You agree that use of the Site is entirely at your own risk. EXCEPT AS SPECIFICALLY PROVIDED IN THIS AGREEMENT, THE SITE AND THE MATERIALS ON THE SITE ARE PROVIDED AS IS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. Content Syndicate does not make any representations or warranties that the Site or materials on the Site or products and services purchased at or through the Site will meet your requirements or expectations, or that the operation of the Site will be uninterrupted, timely, secure or error-free.

C. Limitation of Liability

You agree that Content Syndicate will not be held liable for any improper or incorrect use of the Site or the materials on the Site and assumes no responsibility for any user's activities on the Site or for the inaccuracy of any content on the Site. In no event will Content Syndicate be liable for any direct, indirect, incidental, special, exemplary or consequential damages, including, without limitation, procurement of substitute goods or services, loss of use, data or profits, or business interruption, arising in any way out of the use of (or inability to use) the Site or the materials on the Site or the inaccuracy of any content on the Site, however caused, under any theory of liability.

D. Disclaimer of Liability for Third-Party Content and Links

You agree that Content Syndicate is not responsible and will not be held liable for any third-party content on the Site or any third-party content, products or services available on other Web sites accessed through links from the Site. Links to third-party sites are for your convenience only, and their inclusion on the Content Syndicate Site does not imply any endorsement, guarantee, warranty or representation by Content Syndicate.

E. Proprietary Rights

The Content Syndicate Site and all materials on the Site, including, without limitation, "Content Syndicate" and all other trademarks and logos on the Site, are protected by copyrights, trademarks, service marks, patents or other proprietary rights and laws. Except as specifically permitted in this Agreement, or by express written consent of Content Syndicate, you may not use the Site or the material on the Site in any manner.

F. Governing Law and Venue

These Terms of Use shall be governed by and construed in accordance with the laws of the United States. Any dispute arising under or related in any way to these Terms & Conditions shall be adjudicated in a court of competent jurisdiction in the state of Wyoming.`;

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-dark mb-2">
        {label}
        {required && <span className="text-accent ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 text-dark placeholder-gray-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all text-sm";
const selectCls = inputCls + " appearance-none cursor-pointer";

function SelectField({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
}) {
  return (
    <div className="relative">
      <select value={value} onChange={(e) => onChange(e.target.value)} className={selectCls}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <ChevronDown
        size={16}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
      />
    </div>
  );
}

function PhoneField({
  value,
  onChange,
  placeholder = "Phone number",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  const [code, setCode] = useState("+1");
  return (
    <div className="flex gap-2">
      <div className="relative">
        <select
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="h-full pl-3 pr-7 py-3 rounded-xl border border-zinc-200 bg-zinc-50 text-dark text-sm focus:border-accent focus:outline-none appearance-none cursor-pointer"
        >
          {PHONE_CODES.map((p) => (
            <option key={p.label} value={p.code}>
              {p.flag} {p.label} {p.code}
            </option>
          ))}
        </select>
        <ChevronDown
          size={14}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
      </div>
      <input
        type="tel"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={inputCls + " flex-1"}
      />
    </div>
  );
}

function StepCompanyInfo({
  data,
  onChange,
}: {
  data: CompanyInfo;
  onChange: (d: Partial<CompanyInfo>) => void;
}) {
  return (
    <div className="space-y-5">
      <Field label="Company name" required>
        <input
          className={inputCls}
          value={data.companyName}
          onChange={(e) => onChange({ companyName: e.target.value })}
          placeholder="Acme Corp"
          required
        />
      </Field>
      <Field label="Country" required>
        <SelectField
          value={data.country}
          onChange={(v) => onChange({ country: v })}
          options={COUNTRIES}
          placeholder="Select country"
        />
      </Field>
      <Field label="Company Address" required>
        <input
          className={inputCls}
          value={data.address1}
          onChange={(e) => onChange({ address1: e.target.value })}
          placeholder="123 Main Street"
          required
        />
      </Field>
      <Field label="Company Address 2">
        <input
          className={inputCls}
          value={data.address2}
          onChange={(e) => onChange({ address2: e.target.value })}
          placeholder="Suite 100"
        />
      </Field>
      <div className="grid grid-cols-2 gap-4">
        <Field label="City" required>
          <input
            className={inputCls}
            value={data.city}
            onChange={(e) => onChange({ city: e.target.value })}
            placeholder="New York"
            required
          />
        </Field>
        <Field label="State / Province">
          <input
            className={inputCls}
            value={data.state}
            onChange={(e) => onChange({ state: e.target.value })}
            placeholder="NY"
          />
        </Field>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Postal Code">
          <input
            className={inputCls}
            value={data.postalCode}
            onChange={(e) => onChange({ postalCode: e.target.value })}
            placeholder="10001"
          />
        </Field>
        <Field label="Referral">
          <input
            className={inputCls}
            value={data.referral}
            onChange={(e) => onChange({ referral: e.target.value })}
            placeholder="How did you hear about us?"
          />
        </Field>
      </div>
      <Field label="Telegram">
        <input
          className={inputCls}
          value={data.telegram}
          onChange={(e) => onChange({ telegram: e.target.value })}
          placeholder="@username"
        />
      </Field>
      <Field label="Primary Phone" required>
        <PhoneField value={data.primaryPhone} onChange={(v) => onChange({ primaryPhone: v })} />
      </Field>
      <Field label="Cell Phone">
        <PhoneField
          value={data.cellPhone}
          onChange={(v) => onChange({ cellPhone: v })}
          placeholder="Cell number"
        />
      </Field>
    </div>
  );
}

function StepAdditionalInfo({
  data,
  onChange,
}: {
  data: AdditionalInfo;
  onChange: (d: Partial<AdditionalInfo>) => void;
}) {
  const [dragging, setDragging] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(
    (file: File) => {
      if (!["image/jpeg", "image/jpg", "image/png"].includes(file.type)) return;
      if (file.size > 256 * 1024) return;
      onChange({ logo: file });
    },
    [onChange]
  );

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  return (
    <div className="space-y-5">
      <Field label="Website" required>
        <input
          className={inputCls}
          type="url"
          value={data.website}
          onChange={(e) => onChange({ website: e.target.value })}
          placeholder="https://yourcompany.com"
          required
        />
      </Field>
      <Field label="Business / Industry" required>
        <SelectField
          value={data.industry}
          onChange={(v) => onChange({ industry: v })}
          options={INDUSTRIES}
          placeholder="Select industry"
        />
      </Field>
      <Field label="Company Type" required>
        <SelectField
          value={data.companyType}
          onChange={(v) => onChange({ companyType: v })}
          options={COMPANY_TYPES}
          placeholder="Select type"
        />
      </Field>
      <Field label="Company Logo" required>
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={onDrop}
          onClick={() => fileRef.current?.click()}
          className={`relative flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed p-8 cursor-pointer transition-all duration-200 ${
            dragging
              ? "border-accent bg-accent/10"
              : "border-zinc-300 hover:border-accent/50 hover:bg-accent/5"
          }`}
        >
          <input
            ref={fileRef}
            type="file"
            accept=".jpeg,.jpg,.png"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleFile(f);
            }}
          />
          {data.logo ? (
            <div className="flex items-center gap-3">
              <img
                src={URL.createObjectURL(data.logo)}
                alt="Logo preview"
                className="h-12 w-auto object-contain rounded"
              />
              <div>
                <p className="font-semibold text-dark text-sm">{data.logo.name}</p>
                <p className="text-xs text-gray-400">{(data.logo.size / 1024).toFixed(1)} KB</p>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onChange({ logo: null });
                }}
                className="ml-2 text-gray-400 hover:text-red-500 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          ) : (
            <>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Upload size={22} />
              </div>
              <div className="text-center">
                <p className="font-semibold text-dark text-sm">Drag & Drop Logo Here</p>
                <p className="text-xs text-gray-400 mt-1">or click to browse</p>
                <p className="text-xs text-gray-400 mt-1">JPEG, JPG, PNG · Max 256 KB</p>
              </div>
            </>
          )}
        </div>
      </Field>
    </div>
  );
}

function StepPrimaryContact({
  data,
  onChange,
  passwordError,
}: {
  data: PrimaryContact;
  onChange: (d: Partial<PrimaryContact>) => void;
  passwordError: string;
}) {
  const [showPw, setShowPw] = useState(false);
  const [showCpw, setShowCpw] = useState(false);
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <Field label="First name" required>
          <input
            className={inputCls}
            value={data.firstName}
            onChange={(e) => onChange({ firstName: e.target.value })}
            placeholder="Jane"
            required
          />
        </Field>
        <Field label="Last name" required>
          <input
            className={inputCls}
            value={data.lastName}
            onChange={(e) => onChange({ lastName: e.target.value })}
            placeholder="Smith"
            required
          />
        </Field>
      </div>
      <Field label="Position / Title">
        <input
          className={inputCls}
          value={data.title}
          onChange={(e) => onChange({ title: e.target.value })}
          placeholder="Marketing Manager"
        />
      </Field>
      <Field label="Country" required>
        <SelectField
          value={data.country}
          onChange={(v) => onChange({ country: v })}
          options={COUNTRIES}
          placeholder="Select country"
        />
      </Field>
      <Field label="Company Address" required>
        <input
          className={inputCls}
          value={data.address1}
          onChange={(e) => onChange({ address1: e.target.value })}
          placeholder="123 Main Street"
          required
        />
      </Field>
      <Field label="Company Address 2">
        <input
          className={inputCls}
          value={data.address2}
          onChange={(e) => onChange({ address2: e.target.value })}
          placeholder="Suite 100"
        />
      </Field>
      <div className="grid grid-cols-2 gap-4">
        <Field label="City" required>
          <input
            className={inputCls}
            value={data.city}
            onChange={(e) => onChange({ city: e.target.value })}
            placeholder="New York"
            required
          />
        </Field>
        <Field label="State / Province">
          <input
            className={inputCls}
            value={data.state}
            onChange={(e) => onChange({ state: e.target.value })}
            placeholder="NY"
          />
        </Field>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Postal Code">
          <input
            className={inputCls}
            value={data.postalCode}
            onChange={(e) => onChange({ postalCode: e.target.value })}
            placeholder="10001"
          />
        </Field>
        <div />
      </div>
      <Field label="Primary Phone" required>
        <PhoneField value={data.primaryPhone} onChange={(v) => onChange({ primaryPhone: v })} />
      </Field>
      <Field label="Cell Phone">
        <PhoneField
          value={data.cellPhone}
          onChange={(v) => onChange({ cellPhone: v })}
          placeholder="Cell number"
        />
      </Field>
      <Field label="Email (Corporate addresses only)" required>
        <input
          className={inputCls}
          type="email"
          value={data.email}
          onChange={(e) => onChange({ email: e.target.value })}
          placeholder="jane@yourcompany.com"
          required
        />
      </Field>
      <Field label="Password (Min 6 chars, one uppercase, one lowercase, one number)" required>
        <div className="relative">
          <input
            className={inputCls + " pr-12"}
            type={showPw ? "text" : "password"}
            value={data.password}
            onChange={(e) => onChange({ password: e.target.value })}
            placeholder="••••••••"
            minLength={6}
            required
          />
          <button
            type="button"
            onClick={() => setShowPw(!showPw)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-dark transition-colors"
          >
            {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </Field>
      <Field label="Repeat Password" required>
        <div className="relative">
          <input
            className={`${inputCls} pr-12 ${passwordError ? "border-red-400 focus:border-red-400 focus:ring-red-200" : ""}`}
            type={showCpw ? "text" : "password"}
            value={data.confirmPassword}
            onChange={(e) => onChange({ confirmPassword: e.target.value })}
            placeholder="••••••••"
            required
          />
          <button
            type="button"
            onClick={() => setShowCpw(!showCpw)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-dark transition-colors"
          >
            {showCpw ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        {passwordError && <p className="mt-1.5 text-xs text-red-500">{passwordError}</p>}
      </Field>
    </div>
  );
}

function StepBillingContact({
  data,
  onChange,
}: {
  data: BillingContact;
  onChange: (d: Partial<BillingContact>) => void;
}) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <Field label="First name" required>
          <input
            className={inputCls}
            value={data.firstName}
            onChange={(e) => onChange({ firstName: e.target.value })}
            placeholder="Jane"
            required
          />
        </Field>
        <Field label="Last name" required>
          <input
            className={inputCls}
            value={data.lastName}
            onChange={(e) => onChange({ lastName: e.target.value })}
            placeholder="Smith"
            required
          />
        </Field>
      </div>
      <Field label="Position / Title">
        <input
          className={inputCls}
          value={data.title}
          onChange={(e) => onChange({ title: e.target.value })}
          placeholder="CFO"
        />
      </Field>
      <Field label="Country" required>
        <SelectField
          value={data.country}
          onChange={(v) => onChange({ country: v })}
          options={COUNTRIES}
          placeholder="Select country"
        />
      </Field>
      <Field label="Address (No P.O. Boxes)" required>
        <input
          className={inputCls}
          value={data.address1}
          onChange={(e) => onChange({ address1: e.target.value })}
          placeholder="123 Main Street"
          required
        />
      </Field>
      <Field label="Address 2">
        <input
          className={inputCls}
          value={data.address2}
          onChange={(e) => onChange({ address2: e.target.value })}
          placeholder="Suite 100"
        />
      </Field>
      <div className="grid grid-cols-2 gap-4">
        <Field label="City" required>
          <input
            className={inputCls}
            value={data.city}
            onChange={(e) => onChange({ city: e.target.value })}
            placeholder="New York"
            required
          />
        </Field>
        <Field label="State / Province">
          <input
            className={inputCls}
            value={data.state}
            onChange={(e) => onChange({ state: e.target.value })}
            placeholder="NY"
          />
        </Field>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Postal Code">
          <input
            className={inputCls}
            value={data.postalCode}
            onChange={(e) => onChange({ postalCode: e.target.value })}
            placeholder="10001"
          />
        </Field>
        <div />
      </div>
      <Field label="Primary Phone" required>
        <PhoneField value={data.primaryPhone} onChange={(v) => onChange({ primaryPhone: v })} />
      </Field>
      <Field label="Cell Phone">
        <PhoneField
          value={data.cellPhone}
          onChange={(v) => onChange({ cellPhone: v })}
          placeholder="Cell number"
        />
      </Field>
    </div>
  );
}

function StepTerms({
  accepted,
  onAccept,
  loading,
}: {
  accepted: boolean;
  onAccept: (v: boolean) => void;
  loading: boolean;
}) {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 h-72 overflow-y-auto text-sm text-gray-600 leading-relaxed whitespace-pre-line font-mono">
        {TERMS_TEXT}
      </div>
      <label className="flex items-start gap-3 cursor-pointer group">
        <div
          className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 transition-all ${accepted ? "bg-accent border-accent" : "border-zinc-300 group-hover:border-accent"}`}
          onClick={() => onAccept(!accepted)}
        >
          {accepted && <CheckCircle2 size={14} className="text-dark" />}
        </div>
        <span className="text-sm text-gray-700 leading-relaxed">
          I have read and agree to the{" "}
          <Link to="/terms" target="_blank" className="text-accent hover:underline font-semibold">
            Terms & Conditions
          </Link>{" "}
          of Content Syndicate.
        </span>
      </label>

      <motion.button
        type="submit"
        disabled={!accepted || loading}
        whileHover={{ scale: !accepted || loading ? 1 : 1.02 }}
        whileTap={{ scale: !accepted || loading ? 1 : 0.98 }}
        className="w-full flex items-center justify-center gap-3 py-4 px-8 bg-accent text-dark font-bold rounded-xl hover:bg-accent/90 transition-all text-lg disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-accent/20"
      >
        {loading ? (
          <span className="animate-pulse">Creating your account…</span>
        ) : (
          <>
            Create Account <ArrowRight size={20} />
          </>
        )}
      </motion.button>
    </div>
  );
}

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [company, setCompany] = useState<CompanyInfo>({
    companyName: "",
    country: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    referral: "",
    telegram: "",
    primaryPhone: "",
    cellPhone: "",
  });
  const [additional, setAdditional] = useState<AdditionalInfo>({
    website: "",
    industry: "",
    companyType: "",
    logo: null,
  });
  const [primary, setPrimary] = useState<PrimaryContact>({
    firstName: "",
    lastName: "",
    title: "",
    country: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    primaryPhone: "",
    cellPhone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [billing, setBilling] = useState<BillingContact>({
    firstName: "",
    lastName: "",
    title: "",
    country: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    primaryPhone: "",
    cellPhone: "",
  });

  const handleNext = () => {
    if (step === 3) {
      if (primary.password !== primary.confirmPassword) {
        setPasswordError("Passwords do not match.");
        return;
      }
      const pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
      if (!pwRegex.test(primary.password)) {
        setPasswordError(
          "Password must be at least 6 characters with one uppercase, one lowercase, and one number."
        );
        return;
      }
      setPasswordError("");
    }
    setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!termsAccepted) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    window.location.href = "https://admin.contentsyndicate.net/signup/client";
  };

  const stepTitles = [
    "Company Information",
    "Additional Company Information",
    "Primary Contact",
    "Billing Contact",
    "Terms & Conditions",
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-dark border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/" className="block">
            <img
              src="/images/Contentsyndicate Logo Dark.svg"
              alt="Content Syndicate"
              className="h-8 w-auto"
            />
          </Link>
          <span className="text-sm text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-accent font-semibold hover:underline">
              Sign in
            </Link>
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight font-display text-dark mb-3">
            Create your Free News Releases Account
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Register now to start distributing press releases to targeted audiences around the
            globe. There is no charge to register an account. You pay only for the services you
            choose.
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed mt-3">
            Content Syndicate is the industry's premier, full-service press release distribution
            newswire. Our global reach includes broadcast and online media outlets, social media
            sites, industry trade publications, leading blogs and industry influencers.
          </p>
        </motion.div>

        {/* Step progress */}
        <div className="mb-10">
          <div className="flex items-center justify-between relative">
            {/* connector line */}
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-zinc-200 -z-10" />
            <div
              className="absolute top-5 left-0 h-0.5 bg-accent -z-10 transition-all duration-500"
              style={{ width: `${((step - 1) / (STEPS.length - 1)) * 100}%` }}
            />
            {STEPS.map((s) => {
              const done = step > s.id;
              const active = step === s.id;
              return (
                <div key={s.id} className="flex flex-col items-center gap-2">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-300 ${
                      done
                        ? "bg-accent border-accent text-dark"
                        : active
                          ? "bg-dark border-dark text-white"
                          : "bg-white border-zinc-300 text-gray-400"
                    }`}
                  >
                    {done ? <CheckCircle2 size={18} /> : s.id}
                  </div>
                  <span
                    className={`text-xs font-semibold hidden sm:block transition-colors ${active ? "text-dark" : done ? "text-accent" : "text-gray-400"}`}
                  >
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-3xl border border-zinc-200 shadow-xl overflow-hidden">
          {/* Section header */}
          <div className="bg-dark px-8 py-6">
            <h2 className="text-xl font-bold text-white font-display">{stepTitles[step - 1]}</h2>
            <p className="text-sm text-gray-400 mt-1">
              Step {step} of {STEPS.length}
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="px-8 py-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  {step === 1 && (
                    <StepCompanyInfo
                      data={company}
                      onChange={(d) => setCompany((p) => ({ ...p, ...d }))}
                    />
                  )}
                  {step === 2 && (
                    <StepAdditionalInfo
                      data={additional}
                      onChange={(d) => setAdditional((p) => ({ ...p, ...d }))}
                    />
                  )}
                  {step === 3 && (
                    <StepPrimaryContact
                      data={primary}
                      onChange={(d) => setPrimary((p) => ({ ...p, ...d }))}
                      passwordError={passwordError}
                    />
                  )}
                  {step === 4 && (
                    <StepBillingContact
                      data={billing}
                      onChange={(d) => setBilling((p) => ({ ...p, ...d }))}
                    />
                  )}
                  {step === 5 && (
                    <StepTerms
                      accepted={termsAccepted}
                      onAccept={setTermsAccepted}
                      loading={loading}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            {step < 5 && (
              <div className="flex items-center justify-between px-8 pb-8">
                <button
                  type="button"
                  onClick={() => {
                    setStep((s) => s - 1);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  disabled={step === 1}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-200 text-gray-500 font-semibold hover:border-accent hover:text-accent transition-all disabled:opacity-30 disabled:cursor-not-allowed text-sm"
                >
                  <ArrowLeft size={16} /> Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2 px-8 py-3 rounded-xl bg-accent text-dark font-bold hover:bg-accent/90 transition-all shadow-lg shadow-accent/20 text-sm"
                >
                  Continue <ArrowRight size={16} />
                </button>
              </div>
            )}
            {step === 5 && (
              <div className="px-8 pb-8">
                <button
                  type="button"
                  onClick={() => {
                    setStep(4);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-200 text-gray-500 font-semibold hover:border-accent hover:text-accent transition-all text-sm mb-6"
                >
                  <ArrowLeft size={16} /> Back
                </button>
              </div>
            )}
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          By creating an account you agree to our{" "}
          <Link to="/terms" className="hover:text-accent underline">
            Terms
          </Link>
          {" & "}
          <Link to="/privacy" className="hover:text-accent underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}
