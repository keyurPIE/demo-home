// services/timezoneService.ts
import { apiGet, apiPost } from "@/lib/api";

const TIMEZONE_API = "/api/timezone";
// const TIMEZONE_API = "https://timeapi.io/api/timezone/availabletimezones";
// const TIMEZONE_API = "https://maps.googleapis.com/maps/api/timezone";

export const getTimezones = () => apiGet<string[]>(TIMEZONE_API);

// If you later support saving timezone:
export const saveTimezone = (data: { timezone: string }) =>
  apiPost<{ success: boolean }>(TIMEZONE_API, data);
