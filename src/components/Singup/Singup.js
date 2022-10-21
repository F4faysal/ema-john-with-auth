import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contex/UseContaxe';

const Singup = () => {
const [error , setError] = useState(null)
const {creatUser} = useContext(AuthContext);

    const  submitFromHAndelar = (event) => {
        event.preventDefault()
        const form = event.target
        const email= form.email.value;
        const password= form.password.value;
        const confirm= form.confirm.value;
       
        if(password.length < 6){
            setError('Password must 6 desit ')
            return;
        }

        if (password !== confirm){
            setError('Password not match !! plase TryAgen')
            return ;
        }

        creatUser(email , password)
        .then((r) => {
            // Signed in 
            const user = r.user;
            console.log(user)
            form.reset()
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(' ---------> ',errorMessage)
          });
    }

    return (
        <div className="from-Continer">
        <form onSubmit={submitFromHAndelar} on>
          <h3 className="titel">Login</h3>
          <div className="mail-fild">
            '<label htmlFor="">Email</label>
            <input type="email" name="email" id=""  required/>
          </div>
          <div className="mail-fild">
            <label htmlFor="Password">Password</label>
            <input type="password" name="password" id="" required />
          </div>
          <div className="mail-fild">
            <label htmlFor="Confirm">Confirm Password</label>
            <input type="password" name="confirm" id=""  required/>
          </div>
          <p>{error}</p>
          <button  className="submit-bin" name='submit' type="submit">
            submit
          </button>
        </form>    
        <p>Already have an account?  <Link to={'/Login'} >Login</Link>  </p>
        <hr /><small>or</small><hr />
      </div>
    );
};

export default Singup;