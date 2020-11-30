import React, { useState, useEffect} from 'react';
import Logo from './Logo';
import Button from '@material-ui/core/Button';
import { Switch, TextField } from '@material-ui/core'


function Login() {

  const [values, setValues] = useState({ email: '', password: '' })

  

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  const sms = () => {
    if (values.email && values.password) {
      alert("You are login successfully!")
  } 
  }



  return (

    <>
      <Logo />

      
      <div className="log">
        <form onSubmit={handleSubmit}>
          <h1>Log In </h1>

          <div className="txt-field">

            <TextField label="a@example.com"
              variant="outlined"
              type="email"
              value={values.email}
              required autoFocus
              onChange={e => setValues({ ...values, email: e.target.value })} />
            <br></br><br></br><br></br>

            <TextField label="password"
              variant="outlined"
              value={values.password}
              type="password"
              required
              onChange={e => setValues({ ...values, password: e.target.value })}
            />


          </div>
          <div className="btn">
            <Button type="submit" variant="contained" color="primary" onClick={sms}>LogIn</Button>
          </div>
        </form>
        <h5>Do you haven't a account? Please click <a href="#">here</a> </h5>
      </div>
    
    </>
  )
}

export default Login
