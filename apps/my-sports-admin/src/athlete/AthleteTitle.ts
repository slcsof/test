import { Athlete as TAthlete } from "../api/athlete/Athlete";

export const ATHLETE_TITLE_FIELD = "id";

export const AthleteTitle = (record: TAthlete): string => {
  return record.id || String(record.id);
};
