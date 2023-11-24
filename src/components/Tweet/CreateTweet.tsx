const CreateTweet = () => {
    return (
        <div className="flex flex-col p-6 bg-dark-light rounded-lg">
            <h2 className="font-medium text-2xl">Новый твит</h2>
            <textarea
                className="auth-input mt-3 bg-transparent !outline-none"
                placeholder="Что нового?"
            />
            <div className="mt-3">
                <button className="button py-2.5 px-4">Опубликовать</button>
            </div>
        </div>
    );
};

export default CreateTweet;
