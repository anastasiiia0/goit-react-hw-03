import css from './ContactsForm.module.css';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const formSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  tel: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = {
  username: '',
  tel: '',
};

export default function ContactForm({ onAdd }) {
  const nameFieldId = useId();
  const telFieldId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.username,
      number: values.tel,
    });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      <Form className={css.form}>
        <div className={css.formInputContainer}>
          <label htmlFor={nameFieldId} className={css.formLabel}>
            Name
          </label>
          <Field
            type="text"
            name="username"
            id={nameFieldId}
            className={css.formInput}
          />
          <ErrorMessage
            name="username"
            component="span"
            className={css.formInputError}
          />
        </div>

        <div className={css.formInputContainer}>
          <label htmlFor={telFieldId} className={css.formLabel}>
            Number
          </label>
          <Field
            type="tel"
            name="tel"
            id={telFieldId}
            className={css.formInput}
          />
          <ErrorMessage
            name="tel"
            component="span"
            className={css.formInputError}
          />
        </div>

        <button type="submit" className={css.formSubmitBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
