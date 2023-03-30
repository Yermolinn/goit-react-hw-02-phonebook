import PropTypes from 'prop-types';

import css from './Filter.module.css';

export const Filter = ({ onHandleChange, filter }) => {
  return (
    <div className={css.filter}>
      <label className={css.label}>
        <span className={css.text}>Find contacts by name</span>
        <input
          className={css.input}
          type="text"
          name="filter"
          onChange={onHandleChange}
          value={filter}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  onHandleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
