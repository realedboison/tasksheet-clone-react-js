import * as yup from 'yup';

const emailRules = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
const nameRules = /^([a-zA-Zà-úÀ-Ú]{2,})+\s+([a-zA-Zà-úÀ-Ú\s]{2,})+$/;

export const signUp = yup.object().shape({
  fullName: yup
    .string()
    .matches(nameRules, { message: 'Enter a valid full name' })
    .required(''),
  email: yup
    .string()
    .matches(emailRules, { message: 'Enter a valid email' })
    .required(''),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .matches(passwordRules, {
      message:
        'Password must be at least 6 characters long with at least 1 uppercase & 1 lowercase letter 1 number and 1 symbol',
    })
    .required(''),
});
