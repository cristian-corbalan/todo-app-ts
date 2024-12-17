import { FilterValues } from '../types';
import Filters from './Filters.tsx';

interface Props {
  activeCount: number;
  filterSelected: FilterValues;
  handleFilterChange: (filter: FilterValues) => void;
}

const Footer: React.FC<Props> = ({ activeCount, filterSelected, handleFilterChange }) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> tareas pendientes.
        {/*<strong>{completedCount}</strong> tareas completadas*/}
      </span>

      <Filters filterSelected={filterSelected} onFilterChange={handleFilterChange} />
    </footer>
  );
};

export default Footer;
