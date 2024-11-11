import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="min-h-screen hero bg-base-200">
  <div className="flex-col hero-content ">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Register</h1>
    </div>
    <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="photo url" name="photo" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
        </div>
        <div className="mt-6 form-control">
          <button className="btn btn-primary">Create Account</button>
        </div>
      </form>

      <p className="text-sm text-center text-gray-500">Already have an account?<Link to={'/login'} className="link link-hover">Login</Link></p>
       </div>
      </div>
        </div>
    );
};

export default Register;