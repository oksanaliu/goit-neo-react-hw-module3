import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Format: XXX-XX-XX')
    .required('Required'),
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
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <label className={styles.label}>Name</label>
          <Field type="text" name="name" className={styles.inputContact} />
          {touched.name && errors.name && (
            <div className={styles.error}>{errors.name}</div>
          )}

          <label className={styles.label}>Number</label>
          <Field type="text" name="number" className={styles.inputContact} />
          {touched.number && errors.number && (
            <div className={styles.error}>{errors.number}</div>
          )}

          <button type="submit" className={styles.button}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
