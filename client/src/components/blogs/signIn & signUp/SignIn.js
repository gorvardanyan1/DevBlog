import React from 'react'

const SignIn = () => {
  return (
    <form action="" method="post">
      <fieldset>Sign In</fieldset>
      <input type="text" name="userName" />
      <input type="password" name='password' />
      <input type="submit" value="Sign In" />
    </form>
  )
}

export default SignIn