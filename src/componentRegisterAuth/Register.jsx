import React from 'react';
import { useFormik } from 'formik';

export default () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor='firstName'>First Name</label>
      <input
        id='firstName'
        name='firstName'
        type='firstName'
        onChange={formik.handleChange}
        value={formik.values.firstName}
        style={{ width: '20%' }}
      />

      <label htmlFor='password'>Password </label>
      <input
        id='password'
        name='password'
        type='password'
        onChange={formik.handleChange}
        style={{ width: '20%' }}
        value={formik.values.password}
      />
      <button type='submit' style={{ width: '20%' }}>
        Submit
      </button>
    </form>
  );
};
