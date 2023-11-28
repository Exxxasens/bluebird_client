import { Outlet, Navigate } from "react-router-dom";
import useAppSelector from "../../hooks/useAppSelector";

const AuthenticationLayout: React.FC<React.PropsWithChildren> = ({
    children
}) => {
    const token = useAppSelector((state) => state.auth.token);

    if (token) {
        return <Navigate to="/" />;
    }

    return (
        <div className="flex flex-col items-center justify-center">
            {children || <Outlet />}
        </div>
    );
};

export default AuthenticationLayout;
