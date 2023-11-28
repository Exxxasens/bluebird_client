import { Navigate, Outlet } from "react-router-dom";
import useAppSelector from "../../hooks/useAppSelector";

interface ProtectedRouteProps {
    redirectPath: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ redirectPath }) => {
    const token = useAppSelector((state) => state.auth.token);

    if (!token) {
        return <Navigate to={redirectPath} />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
