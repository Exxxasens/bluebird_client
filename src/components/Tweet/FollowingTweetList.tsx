import { useGetTweetsQuery } from "../../api/tweetApi";
import Tweet from "./Tweet";

const FollowingTweetList = () => {
    const { data } = useGetTweetsQuery();
    return (
        <div className="flex flex-col gap-4">
            {data &&
                [...data.tweets]
                    .sort((a, b) => b.id - a.id)
                    .map((tweet) => {
                        return <Tweet tweet={tweet} />;
                    })}
        </div>
    );
};

export default FollowingTweetList;
