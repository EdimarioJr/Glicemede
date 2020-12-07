export interface SamplingPopover {
  value: number;
  lastMealHour: string;
  lastMeal: string;
  fasting: boolean;
}

export interface Sampling {
  id: string;
  date: string;
  value: number;
  hour: string;
  lastMeal: string;
  lastMealHour: string;
  fasting: boolean;
}
