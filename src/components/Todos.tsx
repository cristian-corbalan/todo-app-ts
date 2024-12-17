import { type ListOfTodos, type TodoId } from '../types';
import Todo from './Todo.tsx';

interface Props {
  todos: ListOfTodos;
  onRemoveTodo: (id: TodoId) => void;
}

const Todos: React.FC<Props> = ({ todos, onRemoveTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <Todo id={todo.id} title={todo.title} completed={todo.completed} onRemoveTodo={onRemoveTodo} />
        </li>
      ))}
    </ul>
  );
};

export default Todos;
