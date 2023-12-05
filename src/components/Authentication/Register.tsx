import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import zod from "zod";
import ErrorMessage from "./ErrorMessage";
import { useRegisterMutation } from "../../api/userApi";
import { getErrorMessage } from "../../helpers";

const RegisterSchema = zod.object({
    name: zod.string().min(1, "Введите имя"),
    username: zod
        .string()
        .min(1, "Введите логин")
        .min(4, "Слишком короткий логин"),
    email: zod.string().email("Введите корректную почту"),
    password: zod
        .string()
        .min(1, "Введите пароль")
        .min(5, "Слишком короткий пароль")
});

export type RegisterSchemaType = zod.infer<typeof RegisterSchema>;

const Register = () => {
    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors }
    } = useForm<RegisterSchemaType>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: "",
            username: "",
            email: "",
            password: ""
        }
    });

    const navigate = useNavigate();

    const [registerUser, { isLoading }] = useRegisterMutation();

    function onRegister(data: RegisterSchemaType) {
        registerUser(data)
            .unwrap()
            .then((result) => {
                reset();
                navigate("/login", {
                    state: {
                        message:
                            "Аккаунт успешно создан. Используйте Ваши данные для авторизации."
                    }
                });
            })
            .catch((error) => {
                setError("root.serverError", {
                    message: getErrorMessage(error)
                });
            });
    }

    return (
        <div className="bg-dark-light p-6 rounded-lg w-80">
            <h1 className="text-2xl text-center">Создать аккаунт</h1>
            <form
                className="mt-6 flex flex-col"
                onSubmit={handleSubmit(onRegister)}
            >
                <label className="text-[#CCCCCC] text-base">
                    <p className="mb-1.5">Имя:</p>
                    <input
                        className="auth-input"
                        type="text"
                        placeholder="Введите имя"
                        {...register("name")}
                    />
                    {errors.name?.message && (
                        <ErrorMessage>{errors.name?.message}</ErrorMessage>
                    )}
                </label>
                <label className="text-[#CCCCCC] text-base mt-3">
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
                    <p className="mb-1.5">Почта:</p>
                    <input
                        className="auth-input"
                        type="text"
                        placeholder="Введите почту"
                        {...register("email")}
                    />
                    {errors.email?.message && (
                        <ErrorMessage>{errors.email?.message}</ErrorMessage>
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
                    Есть аккаунт?{" "}
                    <Link className="text-accent" to="/login">
                        Войти
                    </Link>
                </p>
                <button
                    className="button mt-6"
                    type="submit"
                    disabled={isLoading}
                >
                    Зарегистрироваться
                </button>
            </form>
        </div>
    );
};

export default Register;
