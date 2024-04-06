import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../../Providers/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {
    const { user, createUser } = useContext(authContext);
    const handleRegister = (e) => {
        e.preventDefault();
        /*const email =e.target.email.value;
        const password =e.target.password.value;
        const name =e.target.name.value;
        const photo =e.target.photo.value;
        console.log(email, password)
        */
        //another way to get email & password 
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photo = form.get('photo');
        //    console.log(email, password, name, photo);

        //create user
        createUser(email, password)
       .then(result => {
            const user = result.user;
            console.log(user);
            console.log('Registration successfully');
        })
        .catch(error => {
        console.log(error);
        })
    }
return (
    <div>
        <Navbar></Navbar>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl font-semibold border-b p-8">Register your account</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo url</span>
                            </label>
                            <input name="photo" type="text" placeholder="Photo url" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-gray-700 font-bold text-white">Login</button>
                        </div>
                        <p>Already Have An Account ? Please <NavLink className="text-red-600" to="/login">Login</NavLink></p>
                    </form>
                </div>

            </div>
        </div>
    </div>
);
};

export default Register;