import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid';

export const ContactForm = ({ addContact }) => {
  const onSubmit = (values, actions) => {
    const contact = {
      id: nanoid(),
      name: values.name.trim(),
      number: values.number.trim(),
    };
    const isUnique = addContact(contact);
    if (isUnique) {
      actions.resetForm();
    }
  };

  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={onSubmit}>
      {({ values, handleChange }) => (
        <Form autoComplete="off">
          <label htmlFor="">
            Name:
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={values.name}
            />
          </label>
          <label htmlFor="">
            Number:
            <input
              type="tel"
              name="number"
              onChange={handleChange}
              value={values.number}
            />
          </label>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
