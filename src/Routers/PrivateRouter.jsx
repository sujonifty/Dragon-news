import { useContext } from "react";
import { authContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRouter = (children) => {
    const {user}= useContext(authContext);
    if(user){
       return children;
    }
    return (
        <Navigate to="/login"></Navigate>
    );
};

export default PrivateRouter;