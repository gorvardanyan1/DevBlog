import React, { useState } from 'react'
import { Formik } from 'formik'
import { addFormSchema } from '../../../schemas/addFormSchema';
import '../../../style/addForm.style.scss'
import { useNavigate } from 'react-router-dom';
const AddBlogs = () => {


  const navigate = useNavigate()
  function addFormSubmit(value, actions) {
    fetch('/addMainData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value),
    })
      .then((response) => response.json())
      .then((data) => {
      
        navigate('/blogs/blogCreaterPage')
        return data
      })

      .catch((error) => {
        console.error('Error:', error);

      });

  }
  return (
    <div className='addFormDiv'>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          userName: "",
          password: ""
        }}
        onSubmit={addFormSubmit}
        validationSchema={addFormSchema}
      >
        {
          ({ errors, touched, values, isSubmitting, handleBlur, handleChange, handleSubmit, handleReset }) => {
            return (
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="author's first name" name='firstName' value={values.firstName} onChange={handleChange} onBlur={handleBlur} />
                <input type="text" placeholder="author's last name" name="lastName" value={values.lastName} onChange={handleChange} onBlur={handleBlur} />
                {/* <input type="file" placeholder="author's Image" name="imgAuthor" /> */}
                <input type="text" placeholder='user name' name='userName' value={values.userName} onChange={handleChange} onBlur={handleBlur} />
                <input type="password" placeholder='security password' name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                <input type="submit" value="Add" />
              </form>
            )
          }
        }
      </Formik>
    </div >
  )
}

export default AddBlogs