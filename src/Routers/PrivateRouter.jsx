import { useContext } from "react";
import { authContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRouter = ({children}) => {
    const {user, loading}= useContext(authContext);
    const location = useLocation();
    console.log(location.pathname);
    if(loading){
        <span className="loading loading-bars loading-lg"></span>
    }
    if(user){
       return children;
    }
    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

export default PrivateRouter;