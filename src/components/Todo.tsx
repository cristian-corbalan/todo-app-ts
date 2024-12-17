import { type Todo as TodoType, type TodoId, TodoToggleCompleted } from '../types';

interface Props extends TodoType {
  onRemoveTodo: (id: TodoId) => void;
  onToggleCompleteTodo: ({ id, completed }: TodoToggleCompleted) => void;
}

const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleteTodo }) => {
  function handleChangeCheckbox(event: React.ChangeEvent<HTMLInputElement>) {
    onToggleCompleteTodo({ id, completed: event.target.checked });
  }

  return (
    <div>
      <input id={id} className="toggle" checked={completed} type="checkbox" onChange={handleChangeCheckbox} />
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
