import CreateTweet from "../components/Tweet/CreateTweet";
import FollowingTweetList from "../components/Tweet/FollowingTweetList";
import SidebarPageLayout from "../components/layouts/SidebarPageLayout";

const Main = () => {
    return (
        <SidebarPageLayout heading="Главная">
            <CreateTweet />
            <div className="flex items-center px-4 py-6">
                <h1 className="text-3xl font-medium">Все твиты</h1>
            </div>
            <FollowingTweetList />
        </SidebarPageLayout>
    );
};

export default Main;
