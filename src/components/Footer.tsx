import { FilterValues } from '../types';
import Filters from './Filters.tsx';

interface Props {
  activeCount: number;
  completedCount: number;
  filterSelected: FilterValues;
  onClearCompleted: () => void;
  handleFilterChange: (filter: FilterValues) => void;
}

const Footer: React.FC<Props> = ({
  activeCount,
  completedCount,
  filterSelected,
  onClearCompleted,
  handleFilterChange,
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> tareas pendientes.
        {/*<strong>{completedCount}</strong> tareas completadas*/}
      </span>

      <Filters filterSelected={filterSelected} onFilterChange={handleFilterChange} />
      {completedCount > 0 && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Borrar completadas
        </button>
      )}
    </footer>
  );
};

export default Footer;
