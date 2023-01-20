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
        console.log('ok');
      })
  }
  function handleChange(e, type) {
    type === 'user' ? setLoginValue(prev => ({ ...prev, userName: e.target.userName }))
      : setLoginValue(prev => ({ ...prev, userName: e.target.password }))
  }


  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <fieldset>
        <legend>Sign In</legend>
        <input onChange={(e) => handleChange(e, 'user')} type="text" name="userName" placeholder='User Name' />
        <input onChange={(e) => handleChange(e, 'password')} type="password" name='password' placeholder='Password' />
        <input type="submit" value="Sign In" />
      </fieldset>
    </form>
  )
}

export default SignIn