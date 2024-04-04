import { NavLink } from "react-router-dom";

const Login = () => {
 const   handleLogin=(e)=>{
        e.preventDefault();
        /*const email =e.target.email.value;
        const password =e.target.password.value;
        console.log(email, password)
        */
       //another way to get email & password 
       const form = new FormData(e.currentTarget);
       const email = form.get('email');
       const password = form.get('password');
       console.log(email, password);
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-3xl font-semibold border-b p-8">Login your account</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-gray-700 font-bold text-white">Login</button>
                            </div>
                            <p>Dont’t Have An Account ? <NavLink className="text-red-600" to="/register">Register</NavLink></p>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;