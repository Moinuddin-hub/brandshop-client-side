
import { Link, useNavigate } from 'react-router-dom';
import CommonLogin from './CommonLogin';
import { useContext } from 'react';
import { AuthContext } from './Provider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
   const { singIn}=useContext(AuthContext);
   const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(email,password);

   singIn(email,password)
   .then(()=>{
    toast.success('User logged in successfully');
    navigate('/home')
   })
   .catch((error)=>{
    toast.error(error.message)
   })
  }
   
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <label className="label">
         Have an account? <Link to="/register" className="label-text-alt link link-hover">Please Login</Link>
        </label>
        <CommonLogin></CommonLogin>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;