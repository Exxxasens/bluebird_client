import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Main from "../../pages/Main";
import AuthenticationLayout from "../layouts/AuthenticationLayout";
import ProtectedRoute from "../Authentication/ProtectedRoute";
import { useGetMeQuery } from "../../api/userApi";
import UserProfile from "../../pages/UserProfile";
import Following from "../../pages/Following";
import MyFollowers from "../../pages/MyFollowers";

const App = () => {
    useGetMeQuery();

    return (
        <BrowserRouter>
            <div className="flex justify-center min-h-screen">
                <Routes>
                    <Route element={<ProtectedRoute redirectPath="/login" />}>
                        <Route path="/" element={<Main />} />
                        <Route path="profile" element={<UserProfile />} />
                        <Route path="following" element={<Following />} />
                        <Route path="followers" element={<MyFollowers />} />
                    </Route>
                    <Route element={<AuthenticationLayout />}>
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
