import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="bg-dark-light p-6 rounded-md w-80">
            <h1 className="text-2xl text-center">Создать аккаунт</h1>
            <form className="mt-6 flex flex-col">
                <label className="text-[#CCCCCC] text-base">
                    <p className="mb-1.5">Имя:</p>
                    <input
                        className="auth-input"
                        type="text"
                        placeholder="Введите имя"
                    />
                </label>
                <label className="text-[#CCCCCC] text-base mt-3">
                    <p className="mb-1.5">Логин:</p>
                    <input
                        className="auth-input"
                        type="text"
                        placeholder="Введите логин"
                    />
                </label>
                <label className="text-[#CCCCCC] text-base mt-3">
                    <p className="mb-1.5">Почта:</p>
                    <input
                        className="auth-input"
                        type="text"
                        placeholder="Введите почту"
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
                    Есть аккаунт?{" "}
                    <Link className="text-accent" to="/login">
                        Войти
                    </Link>
                </p>
                <button className="button mt-6">Войти</button>
            </form>
        </div>
    );
};

export default Register;
