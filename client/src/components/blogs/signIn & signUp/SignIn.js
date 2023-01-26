import React, { useState } from 'react'

const SignIn = () => {
  const [loginValue, setLoginValue] = useState({
    userName: '',
    password: ''
  })
  function handleSubmit(e) {
    e.preventDefault()
    fetch('/sign/in', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(loginValue)
    })
      .then(result => {
        // setSubmitting(false)
        // result && navigate('/blogs/main')
        console.log(loginValue);
      })
      

      
  }
  function handleChange(e) {
    e.target.name === 'userName' ? setLoginValue(prev => {
      return { ...prev, userName: e.target.value }
    })
      :
      setLoginValue(prev => {
        return { ...prev, password: e.target.value }
      })
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <fieldset>
        <legend>Sign In</legend>
        <input onChange={(e) => handleChange(e)} type="text" name="userName" placeholder='User Name' />
        <input onChange={(e) => handleChange(e)} type="password" name='password' placeholder='Password' />
        <input type="submit" value="Sign In" />
      </fieldset>
    </form>
  )
}

export default SignIn