import { type Todo as TodoType, type TodoId } from '../types';

interface Props extends TodoType {
  onRemoveTodo: (id: TodoId) => void;
}

const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo }) => {
  return (
    <div>
      <input id={id} className="toggle" checked={completed} type="checkbox" onChange={() => {}} />
      <label htmlFor={id}>{title}</label>
      <button
        className="destroy"
        onClick={() => {
          onRemoveTodo({ id });
        }}
      ></button>
    </div>
  );
};

export default Todo;
