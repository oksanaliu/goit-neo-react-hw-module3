import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Мінімум 3 символи')
    .max(50, 'Максимум 50 символів')
    .required('Обов’язкове поле'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Формат: XXX-XX-XX')
    .required('Обов’язкове поле'),
});

function ContactForm({ onAdd }) {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAdd(values);
        resetForm();
      }}
    >
      <Form className={styles.form}>
        <label>Name</label>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="div" className={styles.error} />

        <label>Number</label>
        <Field type="text" name="number" />
        <ErrorMessage name="number" component="div" className={styles.error} />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
