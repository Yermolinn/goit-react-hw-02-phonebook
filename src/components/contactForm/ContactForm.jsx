import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import * as Yup from 'yup';

export const ContactForm = ({ contacts, onSubmitData }) => {
  const submitSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .matches(/(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/, {
        message:
          "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan'",
      })
      .required('Required'),
    number: Yup.string()
      .min(7, 'Too Short!')
      .max(20, 'Too Long!')
      .matches(
        /(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/,
        {
          message:
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
        }
      )
      .required('Required'),
  });

  const onSubmit = (values, action) => {
    const obj = {
      name: values.name.trim(),
      number: values.number.trim(),
      id: nanoid(),
    };

    const isIncluded = contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase().trim()
    );

    if (isIncluded) {
      action.resetForm();
      alert(`${values.name.trim()} is already in contacts`);
      return;
    }

    onSubmitData(obj);
    action.resetForm();
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={submitSchema}
        onSubmit={onSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            <span className={css.text}>Name</span>
            <Field className={css.input} type="text" name="name" />
            <ErrorMessage className={css.err} component="div" name="name" />
          </label>
          <label className={css.label}>
            <span className={css.text}>Number</span>
            <Field className={css.input} type="tel" name="number" />
            <ErrorMessage className={css.err} component="div" name="number" />
          </label>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

ContactForm.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};
