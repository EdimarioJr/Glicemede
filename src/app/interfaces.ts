export interface SamplingPopover {
  value: number;
  lastMealHour: string;
  lastMeal: string;
}

export interface Sampling {
  id: number;
  date: string;
  value: number;
  hour: string;
  lastMeal: string;
  lastMealHour: string;
}
