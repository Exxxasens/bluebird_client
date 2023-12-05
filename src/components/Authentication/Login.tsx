import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import zod from "zod";
import ErrorMessage from "./ErrorMessage";
import { useLoginMutation } from "../../api/userApi";
import { getErrorMessage } from "../../helpers";

const LoginSchema = zod.object({
    username: zod.string().min(1, "Введите логин"),
    password: zod.string().min(1, "Введите пароль")
});

type LoginSchemaType = zod.infer<typeof LoginSchema>;

const Login = () => {
    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors }
    } = useForm<LoginSchemaType>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            username: "",
            password: ""
        }
    });

    const { state } = useLocation();

    const [login, { isLoading }] = useLoginMutation();

    function onLogin({ username, password }: LoginSchemaType) {
        login({ username, password })
            .unwrap()
            .then(() => {
                reset();
            })
            .catch((error) => {
                setError("root.serverError", {
                    message: getErrorMessage(error)
                });
            });
    }

    return (
        <div className="bg-dark-light p-6 rounded-lg w-80">
            <h1 className="text-2xl text-center">Войти в аккаунт</h1>
            <form
                className="mt-4 flex flex-col"
                onSubmit={handleSubmit(onLogin)}
            >
                {state?.message && (
                    <p className="mb-3 text-sm">{state.message}</p>
                )}

                <label className="text-[#CCCCCC] text-base">
                    <p className="mb-1.5">Логин:</p>
                    <input
                        className="auth-input"
                        type="text"
                        placeholder="Введите логин"
                        {...register("username")}
                    />
                    {errors.username?.message && (
                        <ErrorMessage>{errors.username?.message}</ErrorMessage>
                    )}
                </label>
                <label className="text-[#CCCCCC] text-base mt-3">
                    <p className="mb-1.5">Пароль:</p>
                    <input
                        className="auth-input"
                        type="password"
                        placeholder="Введите пароль"
                        {...register("password")}
                    />
                    {errors.password?.message && (
                        <ErrorMessage>{errors.password?.message}</ErrorMessage>
                    )}
                </label>
                {errors.root?.serverError?.message && (
                    <ErrorMessage>
                        {errors.root?.serverError?.message}
                    </ErrorMessage>
                )}
                <p className="mt-3 text-base">
                    Нет аккаунта?{" "}
                    <Link className="text-accent" to="/register">
                        Регистрация
                    </Link>
                </p>

                <button
                    className="button mt-6"
                    type="submit"
                    disabled={isLoading}
                >
                    Войти
                </button>
            </form>
        </div>
    );
};

export default Login;
