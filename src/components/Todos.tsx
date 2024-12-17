import { type ListOfTodos } from '../types';
import Todo from './Todo.tsx';

interface Props {
  todos: ListOfTodos;
}

const Todos: React.FC<Props> = ({ todos }: { todos: ListOfTodos }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <Todo id={todo.id} title={todo.title} completed={todo.completed} />
        </li>
      ))}
    </ul>
  );
};

export default Todos;
