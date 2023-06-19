import * as Yup from 'yup';

export const registerSchema = Yup.object({
  name: Yup.string()
    .required('Required field')
    .min(3, 'Minimun 3 characters')
    .trim(''),
  email: Yup.string()
    .required('Required field')
    .email('E-mail not valid')
    .trim(''),
  password: Yup.string()
    .required('Required field')
    .min(6, 'Minimun 6 characters')
    .matches(
      /^(?=.*[A-Z]).{6,}$/,
      'Password must contain at least one uppercase letter',
    )
    .trim(''),
  confirmPassword: Yup.string()
    .required('Required field')
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .trim(''),
});
