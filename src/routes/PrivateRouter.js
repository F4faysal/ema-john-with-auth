import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../components/contex/UseContaxe';

const PrivateRouter = ({children}) => {
const { user } = useContext(AuthContext);

  if(user && user.uid){
    return children ;
  }
  else(
    <Navigate to={'login'}></Navigate>
  )
};

export default PrivateRouter;