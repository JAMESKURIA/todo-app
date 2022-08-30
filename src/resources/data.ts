export interface Task {
  id: number;
  desc: string;
  date: string;
  completed: boolean;
}

export const tasks: Task[] = [
  {
    id: 1,
    desc: "Pick up mail",
    date: "Today",
    completed: false,
  },
  {
    id: 2,
    desc: "Pick up mail",
    date: "Today",
    completed: false,
  },
  {
    id: 3,
    desc: "Pick up mail",
    date: "Today",
    completed: false,
  },
  {
    id: 4,
    desc: "Pick up mail",
    date: "Today",
    completed: true,
  },
];
