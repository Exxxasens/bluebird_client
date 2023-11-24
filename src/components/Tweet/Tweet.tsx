interface TweetProps {
    username: string;
    content: string;
}

const Tweet: React.FC<TweetProps> = ({ username, content }) => {
    return (
        <div className="bg-dark-light p-6 rounded-lg">
            <h3 className="">@{username}</h3>
            <div className="text-[#8C8C8C] mt-3"> {content} </div>
        </div>
    );
};

export default Tweet;
