import { useState } from 'react';
import { TodoTitle } from '../types';

type Props = {
  onSaveTodo: ({ title }: TodoTitle) => void;
};

const CreateTodo: React.FC<Props> = ({ onSaveTodo }) => {
  const [inputValue, setInputValue] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSaveTodo({ title: inputValue });
    setInputValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        type="text"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        aria-label="¿Qué quieres hacer?"
        placeholder="¿Qué quieres hacer?"
        autoFocus
      />
    </form>
  );
};

export default CreateTodo;
