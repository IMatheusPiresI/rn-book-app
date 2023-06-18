import * as Yup from 'yup';

export const registerSchema = Yup.object({
  name: Yup.string().required('Required field').min(3, 'Minimun 3 characters'),
  email: Yup.string().required('Required field').email('E-mail not valid'),
  password: Yup.string()
    .required('Required field')
    .matches(
      /^(?=.*[A-Z]).{6,}$/,
      'Password must contain at least one uppercase letter',
    ),
  confirmPassword: Yup.string()
    .required('Required field')
    .oneOf([Yup.ref('password')], 'Passwords do not match'),
});
