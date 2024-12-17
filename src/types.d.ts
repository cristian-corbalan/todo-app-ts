export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export type TodoId = Pick<Todo, 'id'>;
export type TodoToggleCompleted = Pick<Todo, 'id' | 'completed'>;

export type ListOfTodos = Todo[];
