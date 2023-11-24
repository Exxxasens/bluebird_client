import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Main from "../../pages/Main";

const App = () => {
    return (
        <BrowserRouter>
            <div className="flex justify-center min-h-screen">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
