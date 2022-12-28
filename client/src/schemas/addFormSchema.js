import * as yup from 'yup'

export const addFormSchema = yup.object().shape({
    firstName: yup.string().min(3, 'Is too short').max(15, 'Is too Long').required('Required'),
    lastName: yup.string().min(3, 'Is too short').max(15, 'Is too Long').required('Required'),
    userName: yup.string().matches(/^[a-z0-9_.]+$/).required('Required!'),
    password: yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Wrond Password').required(),
})