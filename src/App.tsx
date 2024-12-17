import { useState } from 'react';
import Todos from './components/Todos.tsx';
import { type TodoId, type TodoToggleCompleted } from './types';

const mockTodos = [
  { id: 't1', title: 'Learn TypeScript', completed: false },
  { id: 't2', title: 'Build a Todo App', completed: true },
  { id: 't3', title: 'Refactor code', completed: false },
];

export default function App(): JSX.Element {
  const [todos, setTodos] = useState(mockTodos);

  const handleRemove = ({ id }: TodoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  };

  const handleCompleted = ({ id, completed }: TodoToggleCompleted) => {
    const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, completed } : todo));

    setTodos(updatedTodos);
  };

  return (
    <div className="todoapp">
      <Todos todos={todos} onRemoveTodo={handleRemove} onToggleCompleteTodo={handleCompleted} />
    </div>
  );
}
