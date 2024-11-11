import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="min-h-screen hero bg-base-200">
  <div className="flex-col hero-content ">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login</h1>
    </div>
    <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="mt-6 form-control">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

      <p className="text-sm text-center text-gray-500">
        New to our website?
        <Link to={'/register'} className="font-semibold text-primary hover:border-green-600">Register</Link>
      </p>
    </div>
  </div>
 </div>
    );
};

export default Login;