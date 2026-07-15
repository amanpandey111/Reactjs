export interface User {
  id: number;
  name: string;
  email: string;
  department: string;
}

const departments = [
  "Engineering",
  "HR",
  "Finance",
  "Marketing",
  "Sales",
  "Support",
  "Operations",
];

export const users: User[] = Array.from({ length: 10000 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
  department: departments[index % departments.length],
}));