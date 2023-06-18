import * as Yup from 'yup';

export const signInSchema = Yup.object({
  email: Yup.string().required('Required field').email('E-mail not valid'),
  password: Yup.string()
    .required('Required field')
    .min(6, 'Minimum 6 characters'),
});
