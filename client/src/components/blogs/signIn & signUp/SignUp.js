import React from 'react'
import { Formik } from 'formik'
import '../../../style/form.style.scss'
import { FaFacebook } from 'react-icons/fa'
import { FaGooglePlus } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { signUpSchemas } from '../../../schemas/signUpSchema'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
    const navigate = useNavigate()
    function handleSignUpSubmit(value, actions) {
        const { resetForm, setSubmitting } = actions
        const { firstName, lastName, userName, age, email, password } = value
        const registerData = { firstName, lastName, userName, age, email, password }

        resetForm()
        setSubmitting(true)
        fetch('/sign/up', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(registerData)
        })
            .then(result => {
                setSubmitting(false)
                result && navigate('/blogs/signin')

            })
    }
    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                userName: "",
                age: "",
                email: "",
                password: "",
                repeatPassword: ""
            }}
            onSubmit={handleSignUpSubmit}
            validationSchema={signUpSchemas}
        >
            {({ errors, touched, handleChange, handleBlur, handleSubmit, values, isSubmitting }) => {
                return (
                    <>
                        <form onSubmit={handleSubmit} >
                            <fieldset disabled={isSubmitting}>
                                <legend>Sign Up</legend>
                                <input value={values.firstName} onChange={handleChange} onBlur={handleBlur} type="text" name='firstName' placeholder='Last name' />
                                {errors.firstName && touched.firstName && <span>{errors.firstName}</span>}
                                <input value={values.lastName} onChange={handleChange} onBlur={handleBlur} type="text" name='lastName' placeholder='First name' />
                                {errors.lastName && touched.lastName && <span>{errors.lastName}</span>}
                                <input value={values.userName} onChange={handleChange} onBlur={handleBlur} type="text" name="userName" placeholder='User name' />
                                {errors.userName && touched.userName && <span>{errors.userName}</span>}
                                <input value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" name='email' placeholder='Email' />
                                {errors.email && touched.email && <span>{errors.email}</span>}
                                <input value={values.age} onChange={handleChange} onBlur={handleBlur} type="number" name='age' placeholder='Age' />
                                {errors.age && touched.age && <span>{errors.age}</span>}
                                <input value={values.password} onChange={handleChange} onBlur={handleBlur} type="password" name='password' placeholder='Password' />
                                {errors.password && touched.password && <span>{errors.password}</span>}
                                <input value={values.repeatPassword} onChange={handleChange} onBlur={handleBlur} type="password" name='repeatPassword' placeholder='Repeat password' />
                                {errors.repeatPassword && touched.repeatPassword && <span>{errors.repeatPassword}</span>}
                                <input type="submit" value="Sign Up" />
                            </fieldset>
                        </form>
                        <div className='socialLinks'>
                            <div ><FaFacebook /></div>
                            <div ><FaGooglePlus /></div>
                            <div><AiFillTwitterCircle /></div>
                        </div>
                    </>
                )
            }}
        </Formik >
    )
}

export default SignUp