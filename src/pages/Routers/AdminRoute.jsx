import { Navigate, useLocation } from "react-router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const AdminRoute = ({ children }) => {
    const { user, loading} = useContext(AuthContext);
    const [allUsers, setAllUsers] = useState([]) ;
    useEffect(() => {
      fetch("https://speak-smile-server.vercel.app/users")
        .then((res) => res.json())
        .then((data) => setAllUsers(data));
    }, []);
    const currentStatus = allUsers.find(k => k?.email === user?.email)?.status;

    const location = useLocation();
    
    if(loading){
        return loading(true);
    }
    if (user && currentStatus === 'admin') {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;