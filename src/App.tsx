import { useState } from 'react';
import Todos from './components/Todos.tsx';

const mockTodos = [
  { id: 't1', title: 'Learn TypeScript', completed: false },
  { id: 't2', title: 'Build a Todo App', completed: true },
  { id: 't3', title: 'Refactor code', completed: false },
];

export default function App(): JSX.Element {
  const [todos, setTodos] = useState(mockTodos);

  return (
    <div className="todoapp">
      <Todos todos={todos} />
    </div>
  );
}
