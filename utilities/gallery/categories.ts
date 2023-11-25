import { MainCategory, SubCategory } from "@/types/gallery";

// Main Categories
export const MAIN_CATEGORIES: MainCategory[] = [
  {
    label: "Themes",
    value: "themes",
  },
  {
    label: "Topics",
    value: "topics",
    isDisabled: true, // Disabled temporarily
  },
  {
    label: "Styles",
    value: "styles",
    isDisabled: true, // Disabled temporarily
  },
];

// Sub Categories
export const SUB_CATEGORIES: SubCategory[] = [
  {
    label: "Invoking Past Victories",
    value: 4356,
  },
  {
    label: "Heroes and Enemies",
    value: 4359,
  },
  {
    label: "City of Leningrad",
    value: 4358,
  },
  {
    label: "Women at War",
    value: 4355,
  },
  {
    label: "Keeping in Touch",
    value: 4357,
  },
];
