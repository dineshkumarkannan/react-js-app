import { Code, Database, Layers, Shield, Users, Zap } from "lucide-react";

export const FEATURE = [
  {
    icon: Code,
    title: "React Hooks",
    description:
      "Learn all about useState, useEffect, useContext, useReducer, and custom hooks.",
    link: "/hooks",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400",
  },
  {
    icon: Layers,
    title: "Forms & Validation",
    description:
      "Master form handling, validation, and user input management in React.",
    link: "/forms",
    color: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400",
  },
  {
    icon: Database,
    title: "Data Fetching",
    description:
      "Explore API intergration, loading states, error handling, and data management.",
    link: "/data-fetching",
    color:
      "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400",
  },
  {
    icon: Users,
    title: "State Management",
    description:
      "Understand Context API, useReducer, and state management patterns.",
    link: "/state-management",
    color:
      "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400",
  },
  {
    icon: Shield,
    title: "Authentication",
    description:
      "Learn about user authentication, protected routes, and security.",
    link: "/auth",
    color: "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Discover optimization techniques, memoization, and best practices.",
    link: "/performance",
    color:
      "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400",
  },
];
