import PropTypes from 'prop-types';
import css from 'components/App/App.module.css';
export const Section = ({ title, children }) => {
  return (
    <>
      <div className={css.container}>
        <p className={css.title}>{title}</p>
        {children}
      </div>
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
