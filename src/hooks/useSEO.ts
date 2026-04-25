import { useLocation } from "react-router-dom";
import { getSEOConfig } from "../lib/seoConfig";

export function useSEO() {
  const location = useLocation();
  return getSEOConfig(location.pathname);
}
