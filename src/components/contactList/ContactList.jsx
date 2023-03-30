import PropTypes from 'prop-types';
import { Contact } from './Contact';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, deleteContacts }) => {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <li className={css.item} key={id}>
              <Contact name={name} number={number} />
              <button
                className={css.button}
                type="button"
                onClick={() => deleteContacts(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  ).isRequired,
};
