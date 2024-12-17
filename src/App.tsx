import { useState } from 'react';
import Footer from './components/Footer.tsx';
import Todos from './components/Todos.tsx';
import { TODO_FILTERS } from './consts.ts';
import { FilterValues, type TodoId, type TodoToggleCompleted } from './types';

const mockTodos = [
  { id: 't1', title: 'Learn TypeScript', completed: false },
  { id: 't2', title: 'Build a Todo App', completed: true },
  { id: 't3', title: 'Refactor code', completed: false },
];

export default function App(): JSX.Element {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValues>(TODO_FILTERS.ALL);

  const handleRemove = ({ id }: TodoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  };

  const handleCompleted = ({ id, completed }: TodoToggleCompleted) => {
    const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, completed } : todo));

    setTodos(updatedTodos);
  };

  function handleFilterChange(filter: FilterValues) {
    setFilterSelected(filter);
  }

  const activeCount = todos.filter((todo) => !todo.completed).length;

  const todosToShow = todos.filter(
    (todo) =>
      filterSelected === TODO_FILTERS.ALL ||
      (filterSelected === TODO_FILTERS.ACTIVE && !todo.completed) ||
      (filterSelected === TODO_FILTERS.COMPLETED && todo.completed)
  );

  return (
    <div className="todoapp">
      <Todos todos={todosToShow} onRemoveTodo={handleRemove} onToggleCompleteTodo={handleCompleted} />
      <Footer activeCount={activeCount} filterSelected={filterSelected} handleFilterChange={handleFilterChange} />
    </div>
  );
}
