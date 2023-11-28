import { FiHeart, FiTrash } from "react-icons/fi";
import {
    TweetType,
    useDislikeTweetMutation,
    useLikeTweetMutation,
    useRemoveTweetMutation
} from "../../api/tweetApi";
import {
    useFollowUserMutation,
    useUnFollowUserMutation
} from "../../api/userApi";
import useAppSelector from "../../hooks/useAppSelector";

export interface TweetProps {
    tweet: TweetType;
}

const Tweet: React.FC<TweetProps> = ({ tweet }) => {
    const user = useAppSelector((state) => state.auth.user);

    const [removeTweet] = useRemoveTweetMutation();
    const [likeTweet] = useLikeTweetMutation();
    const [dislikeTweet] = useDislikeTweetMutation();
    const [followUser] = useFollowUserMutation();
    const [unFollowUser] = useUnFollowUserMutation();

    const isTweetLiked = tweet.likes.find(
        (likedUser) => likedUser.id === user?.id
    );
    const isFollowed = user?.following.find(
        (followingUser) => tweet.author.id === followingUser.id
    );

    function onRemove() {
        removeTweet({ id: tweet.id });
    }

    function onLike() {
        likeTweet({ id: tweet.id });
    }

    function onDislike() {
        dislikeTweet({ id: tweet.id });
    }

    function onFollowUser() {
        followUser({ id: tweet.author.id, name: tweet.author.name });
    }

    function onUnFollowUser() {
        console.log("!unfollow");
        unFollowUser({ id: tweet.author.id, name: tweet.author.name });
    }

    console.log(isFollowed ? "Вы подписаны" : "Подписаться", user);

    return (
        <div className="bg-dark-light p-6 rounded-lg">
            <div className="flex flex-row items-center">
                <h3 className="font-semibold text-sm mr-4">
                    @{tweet.author.name}
                </h3>
                {user && tweet.author.id !== user.id && (
                    <button
                        className="button-sm tag"
                        onClick={isFollowed ? onUnFollowUser : onFollowUser}
                    >
                        {isFollowed ? "Вы подписаны" : "Подписаться"}
                    </button>
                )}
            </div>
            <div className="text-white/80 mt-3 text-base">{tweet.content}</div>
            <div className="mt-3 w-full flex flex-row">
                <button
                    className={`flex flex-row items-center justify-center text-[#8C8C8C] action-button relative -left-2 ${
                        isTweetLiked && "text-[tomato]"
                    }`}
                    onClick={isTweetLiked ? onDislike : onLike}
                >
                    <FiHeart />
                    <div className="ml-2">{tweet.likes.length}</div>
                </button>
                {user?.id === tweet.author.id && (
                    <button
                        className="ml-auto action-button"
                        onClick={onRemove}
                    >
                        <FiTrash />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Tweet;
