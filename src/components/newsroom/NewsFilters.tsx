import { X, Calendar, SlidersHorizontal } from "lucide-react";
import type { NewsroomFilters } from "../../types/newsroom";

interface NewsFiltersProps {
  filters: NewsroomFilters;
  onFiltersChange: (filters: NewsroomFilters) => void;
  organizations: string[];
  activeFilterCount: number;
}

const DATE_OPTIONS: { value: NewsroomFilters["dateRange"]; label: string }[] = [
  { value: "all", label: "All Time" },
  { value: "24h", label: "Past 24 Hours" },
  { value: "week", label: "Past Week" },
  { value: "month", label: "Past Month" },
];

export function NewsFilters({
  filters,
  onFiltersChange,
  organizations,
  activeFilterCount,
}: NewsFiltersProps) {
  const updateFilter = <K extends keyof NewsroomFilters>(key: K, value: NewsroomFilters[K]) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const clearAll = () => {
    onFiltersChange({
      search: "",
      organization: "",
      dateRange: "all",
    });
  };

  const hasActiveFilters = activeFilterCount > 0;

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={14} className="text-accent/60" />
          <h3 className="text-[0.8125rem] font-semibold text-white/80 uppercase tracking-[0.1em]">
            Filters
          </h3>
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearAll}
            className="flex items-center gap-1 text-[0.6875rem] font-medium text-accent/70 transition-colors hover:text-accent"
          >
            <X size={12} />
            Clear
          </button>
        )}
      </div>

      <div className="space-y-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
        <div>
          <label
            htmlFor="org-filter"
            className="mb-2 block text-[0.75rem] font-medium text-gray-400 tracking-wide"
          >
            Organization
          </label>
          <select
            id="org-filter"
            value={filters.organization}
            onChange={(e) => updateFilter("organization", e.target.value)}
            className="w-full rounded-lg border border-white/[0.08] bg-white/[0.04] py-2 px-3 text-[0.8125rem] text-white/80 focus:border-accent/40 focus:outline-none focus:ring-1 focus:ring-accent/20 transition-colors appearance-none cursor-pointer [color-scheme:dark]"
          >
            <option value="" className="bg-dark text-white">
              All Organizations
            </option>
            {organizations.map((org) => (
              <option key={org} value={org} className="bg-dark text-white">
                {org}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="date-filter"
            className="mb-2 block text-[0.75rem] font-medium text-gray-400 tracking-wide"
          >
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              Date Range
            </span>
          </label>
          <div className="grid grid-cols-2 gap-1.5">
            {DATE_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => updateFilter("dateRange", opt.value)}
                className={`rounded-md py-1.5 px-2.5 text-[0.6875rem] font-medium transition-all duration-200 ${
                  filters.dateRange === opt.value
                    ? "bg-accent/15 text-accent border border-accent/30"
                    : "text-gray-500 border border-white/[0.06] hover:text-gray-300 hover:border-white/[0.12]"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {hasActiveFilters && (
        <div className="rounded-lg bg-accent/[0.07] border border-accent/10 px-3.5 py-2 text-center text-[0.75rem] font-medium text-accent/80">
          {activeFilterCount} filter{activeFilterCount !== 1 ? "s" : ""} active
        </div>
      )}
    </div>
  );
}
