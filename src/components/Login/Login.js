import React, { useContext, useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { AuthContext } from "../contex/UseContaxe";
import "./Login.css";



const Login = () => {
const navigate = useNavigate();

const [error , setError] = useState(null)
const {signIn} = useContext(AuthContext)

const singInhandelar = (event) => {

    event.preventDefault()
    const form = event.target
    const email= form.email.value;
    const password= form.password.value;
    

    signIn(email , password)
    .then((r) => {
        // Signed in 
        const user = r.user;
        console.log(user)

        if(user)(
            setError('Susfully Login')
        )
        form.reset()
        navigate('/')
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage){
            setError('wrong-password plz try agin')

        }
      });
    
}

  return (
    <div className="from-Continer">
      <form onSubmit={singInhandelar}>
        <h3 className="titel">Login</h3>
        <div className="mail-fild">
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="" />
        </div>
        <div className="mail-fild">
          <label htmlFor="">Password</label>
          <input type="password" name="password" id="" />
        </div>
        <p>{error}</p>
        <button className="submit-bin" type="submit">
          submit
        </button>
      </form>    
      <p>New to Ema-john? <Link to={'/Singup'} >Create New Account</Link>  </p>
      <hr /><small>or</small><hr />
    </div>
  );
};

export default Login;
