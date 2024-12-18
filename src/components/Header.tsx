import { TodoTitle } from '../types';
import typeScriptLogo from '../assets/typescript.svg';
import CreateTodo from './CreateTodo.tsx';

type Props = {
  onAddTodo: ({ title }: TodoTitle) => void;
};

const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className="header">
      <h1>
        todo
        <img src={typeScriptLogo} alt="TypeScript logo" width="60px" height="60px" />
      </h1>

      <CreateTodo onSaveTodo={onAddTodo} />
    </header>
  );
};

export default Header;
