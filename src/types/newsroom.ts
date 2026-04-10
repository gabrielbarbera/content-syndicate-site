export interface RssFeed {
  title: string;
  link: string;
  description: string;
  language: string;
  items: PressRelease[];
}

export interface PressRelease {
  title: string;
  link: string;
  description: string;
  content?: string;
  pubDate: string;
  category: string[];
  guid: string;
  author?: string;
  location?: string;
  organization?: string;
  source?: "cs" | "industry";
}

export interface NewsroomFilters {
  search: string;
  organization: string;
  dateRange: "24h" | "week" | "month" | "all" | "custom";
  customDateStart?: Date;
  customDateEnd?: Date;
}

export interface PaginationState {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
}
