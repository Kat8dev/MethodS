import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext  } from "react";

const ProtextedRoute = ({children}) => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <Navigate to="/" />;
    }
    return children;
};

export default ProtextedRoute;