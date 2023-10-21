
import { Link, useNavigate } from 'react-router-dom';
import CommonLogin from './CommonLogin';
import { useContext } from 'react';
import { AuthContext } from './Provider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
  const {createUser,handleUpdateProfile}=useContext(AuthContext);
  const navigate=useNavigate();

    const handleSinUp=(e)=>{
         e.preventDefault();
         const name=e.target.name.value;
         const image=e.target.image.value;
         const email=e.target.email.value;
         const password=e.target.password.value;
         console.log(name,image,email,password);

            // validation 
      
        if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/.test(password)){
            toast.error('password must be  at least 6 characters and strong password')
            return
        }
        
        createUser(email,password)
        .then(()=>{
            handleUpdateProfile(name,image)
            .then(()=>{
                toast.success('User create successfully');
                navigate('/login')
            })
        })
        .catch((error)=>{
         toast.error(error.massage);

        })

    }

    return (
        <div>
            
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
 
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSinUp} className="card-body">

      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="write name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name='image' placeholder="write photoURL" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder=" write email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="write password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <label className="label">
         Have an account? <Link to="/login" className="label-text-alt link link-hover">Please Login</Link>
        </label>
        <CommonLogin></CommonLogin>
      </form>
    </div>
  </div>
           </div>
        </div>
    );
};

export default Register;