import { useForm } from "react-hook-form";
import zod from "zod";
import ErrorMessage from "../Authentication/ErrorMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateTweetMutation } from "../../api/tweetApi";

const CreateTweetSchema = zod.object({
    content: zod.string().min(2, "Сообщение обязательно")
});

type CreateTweetSchemaType = zod.infer<typeof CreateTweetSchema>;

const CreateTweet = () => {
    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors }
    } = useForm<CreateTweetSchemaType>({
        defaultValues: {
            content: ""
        },
        resolver: zodResolver(CreateTweetSchema)
    });

    const [createTweet, { isLoading }] = useCreateTweetMutation();

    function onTweetCreate(data: CreateTweetSchemaType) {
        createTweet(data)
            .then((result) => {
                console.log(result);
                reset({ content: "" });
            })
            .catch((error) => {
                setError("root.serverError", {
                    message: String(error)
                });
            });
    }

    return (
        <form
            className="flex flex-col p-6 bg-dark-light rounded-lg"
            onSubmit={handleSubmit(onTweetCreate)}
        >
            <h2 className="font-medium text-2xl">Новый твит</h2>
            <textarea
                className="auth-input mt-3 bg-transparent !outline-none"
                placeholder="Что нового?"
                {...register("content")}
            />
            {errors.content?.message && (
                <ErrorMessage>{errors.content?.message}</ErrorMessage>
            )}
            <div className="mt-3">
                <button
                    className="button py-2.5 px-4"
                    type="submit"
                    disabled={isLoading}
                >
                    Опубликовать
                </button>
            </div>
        </form>
    );
};

export default CreateTweet;
