import * as yup from 'yup'

export const signUpSchemas = yup.object().shape({
    firstName: yup.string().min(2, 'Too short for a first name').required("Required"),
    lastName: yup.string().min(2, 'Too short for a last name').required('Required'),
    age: yup.number().positive('Age must be a positive number').required('Required'),
    email: yup.string().email('Enter a valid Email').required('Required'),
    password: yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Wrond Password').required('Required'),
    repeatPassword: yup.string().oneOf([yup.ref('password')], 'Passwords do not match').required('Required!!!'),
})