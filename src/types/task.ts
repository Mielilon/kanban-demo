type TagType = {
  name: string
  color: string
};

export type TaskType = {
  status: number
  id: number
  priority: string
  category: string
  title: string
  board: number
  order: number
  dueDate: string
  startDate: string
  tags: TagType[]
};
