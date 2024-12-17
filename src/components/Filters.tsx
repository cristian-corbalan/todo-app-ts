import { type FilterValues } from '../types';
import { FILTERS_BUTTONS } from '../consts.ts';

interface Props {
  filterSelected: FilterValues;
  onFilterChange: (filter: FilterValues) => void;
}
const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        const isSelected = filterSelected === key;
        const className = isSelected ? 'selected' : '';

        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={(event) => {
                event.preventDefault();
                onFilterChange(key as FilterValues);
              }}
            >
              {literal}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Filters;
