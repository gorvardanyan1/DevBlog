import React, { useContext } from 'react'
import { Formik } from 'formik'
import '../../style/form.style.scss'
import { FaFacebook } from 'react-icons/fa'
import { FaGooglePlus } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { signUpSchemas } from '../../schemas/signUpSchema'
import { auth, provider, googlePopUp } from '../../firbaseConfig/firbaseAuth'
import { userContext } from '../../context/UserContext'


import { createUserWithEmailAndPassword } from 'firebase/auth'
const SignUp = () => {
    const [state, dispatch] = useContext(userContext)
    function handleSignUpSubmit(values, actions) {
        createUserWithEmailAndPassword(auth, "asatur@gmail.com", "123456779")
            .then(result => console.log(result.user))
            .catch(err => console.log(err.code))
    }
    async function handleAuthGoogle() {
        const user = await googlePopUp(auth, provider)
        dispatch({
            type: "AUTH",
            payload: user
        })
    }
    return (

        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                age: "",
                email: "",
                password: "",
                repeatPassword: ""
            }}
            onSubmit={handleSignUpSubmit}
            validationSchema={signUpSchemas}
        >
            {({ errors, touched, handleChange, handleBlur, handleSubmit, handleReset, values }) => {
                return (
                    <>
                        <form onSubmit={handleSubmit} >
                            <fieldset>
                                <legend>Sign Up</legend>
                                <input value={values.firstName} onChange={handleChange} onBlur={handleBlur} type="text" name='firstName' placeholder='Last name' />
                                {errors.firstName && touched.firstName && <span>{errors.firstName}</span>}
                                <input value={values.lastName} onChange={handleChange} onBlur={handleBlur} type="text" name='lastName' placeholder='First name' />
                                {errors.lastName && touched.lastName && <span>{errors.lastName}</span>}
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
                            <div onClick={handleAuthGoogle}><FaGooglePlus /></div>
                            <div><AiFillTwitterCircle /></div>
                        </div>
                    </>
                )
            }}
        </Formik >
    )
}

export default SignUp