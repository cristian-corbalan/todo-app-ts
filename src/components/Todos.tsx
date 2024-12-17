import { type ListOfTodos, type TodoId, TodoToggleCompleted } from '../types';
import Todo from './Todo.tsx';

interface Props {
  todos: ListOfTodos;
  onRemoveTodo: (id: TodoId) => void;
  onToggleCompleteTodo: ({ id, completed }: TodoToggleCompleted) => void;
}

const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <Todo
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            onToggleCompleteTodo={onToggleCompleteTodo}
          />
        </li>
      ))}
    </ul>
  );
};

export default Todos;
