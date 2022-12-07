import { TaskType } from './task';

export interface GroupItemInterface {
  id: number,
  name: string,
}

export interface FormedGroupItemInterface extends GroupItemInterface {
  tasks: TaskType[]
}
