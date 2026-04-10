import { Search, X } from "lucide-react";

interface NewsSearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function NewsSearchBar({
  value,
  onChange,
  placeholder = "Search press releases...",
}: NewsSearchBarProps) {
  return (
    <div className="relative has-[:focus]:[&_svg]:text-accent/60">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 transition-colors duration-200"
        size={15}
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] py-2 pl-9 pr-9 text-[0.8125rem] text-white/90 placeholder:text-gray-600 focus:border-accent/30 focus:outline-none focus:ring-1 focus:ring-accent/15 transition-all duration-200"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 transition-colors hover:text-white"
          aria-label="Clear search"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}
