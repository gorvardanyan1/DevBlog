import React from 'react'

const SignIn = () => {
  return (
    <form action="" method="post">
      <fieldset>
        <legend>Sign In</legend>
        <input type="text" name="userName" placeholder='User Name' />
        <input type="password" name='password' placeholder='Password' />
        <input type="submit" value="Sign In" />
      </fieldset>
    </form>
  )
}

export default SignIn