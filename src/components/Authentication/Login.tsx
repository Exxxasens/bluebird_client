import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="bg-dark-light p-6 rounded-md w-80">
            <h1 className="text-2xl text-center">Войти в аккаунт</h1>
            <form className="mt-4 flex flex-col">
                <label className="text-[#CCCCCC] text-base">
                    <p className="mb-1.5">Логин:</p>
                    <input
                        className="auth-input"
                        type="text"
                        placeholder="Введите логин"
                    />
                </label>
                <label className="text-[#CCCCCC] text-base mt-3">
                    <p className="mb-1.5">Пароль:</p>
                    <input
                        className="auth-input"
                        type="password"
                        placeholder="Введите логин"
                    />
                </label>
                <p className="mt-3 text-base">
                    Нет аккаунта?{" "}
                    <Link className="text-accent" to="/register">
                        Регистрация
                    </Link>
                </p>
                <button className="button mt-6">Войти</button>
            </form>
        </div>
    );
};

export default Login;
