import  { useContext } from 'react';
import { AuthContext } from './Provider/AuthProvider';
import toast from 'react-hot-toast';
import {  useNavigate } from 'react-router-dom';

const CommonLogin = () => {
    const {googleLogin}=useContext(AuthContext);
    const navigate=useNavigate();
   const handleGoogle=()=>{
    googleLogin()
    .then(()=>{
        // console.log(result.user)
        toast.success('User logged in successfully');
        navigate('/home')
    } )
    .catch((error)=>{
        console.log(error);
    })
   }
    return (
        <div>
             <div className="">
              <div onClick={handleGoogle} className="btn btn-primary">Google</div>
             </div>
        </div>
    );
};

export default CommonLogin;