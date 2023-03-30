import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const Contact = ({ name, number }) => {
  return (
    <div className={css.itemContainer}>
      <p className={css.text}>{`${name}: ${number}`}</p>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
