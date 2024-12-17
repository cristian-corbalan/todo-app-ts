import { type Todo as TodoType } from '../types';

type Props = TodoType;

const Todo: React.FC<Props> = ({ id, title, completed }) => {
  return (
    <div>
      <input id={id} className="toggle" checked={completed} type="checkbox" onChange={() => {}} />
      <label htmlFor={id}>{title}</label>
      <button className="destroy" onClick={() => {}}></button>
    </div>
  );
};

export default Todo;
