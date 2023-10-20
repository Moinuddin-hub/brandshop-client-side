import { useContext } from "react";
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../Page/Login/Provider/AuthProvider";

const Navbar = () => {
  const{user,logOut}=useContext(AuthContext);
    const NavLinks=<>
        <li> <NavLink to="/home"  className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""   }> Home </NavLink> </li>

         <li> <NavLink to="/addProduct"  className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""   }>Add product </NavLink> </li>

         <li> <NavLink to="/myCard"  className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""   }>My Card</NavLink> </li>

 {/* <li> <NavLink to="/updateProduct"  className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""   }>Update</NavLink> </li>  */}
        
    </>
    return (
        <div className="w-[1200px] mx-auto">
            <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {NavLinks}

      </ul>
    </div>
    <div className="w-20">
    <img src="https://i.ibb.co/zFLdx7Z/logo.jpg" alt="" className="" />
    </div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {NavLinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
        user?.email ? <div className=" dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu flex menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost"
                                        onClick={logOut}
                                    >Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost">Login</button>
                            </Link>
}
  </div>
</div>
        </div>
    );
};

export default Navbar;