import CreateTweet from "../components/Tweet/CreateTweet";
import Tweet from "../components/Tweet/Tweet";
import SidebarPageLayout from "../components/layouts/SidebarPageLayout";

const Main = () => {
    return (
        <SidebarPageLayout heading="Главная">
            <CreateTweet />
            <div className="flex items-center px-4 py-6">
                <h1 className="text-3xl font-medium">Все твиты</h1>
            </div>
            <div className="flex flex-col gap-4">
                <Tweet
                    username="Vasya"
                    content="xdkjfakdjfkasf dkfjakdf dajfkdajfkasjdf sdakfjkdsajfkasjf safksadkfjksafjsdkfjdafdkafjdafadsfdfaff"
                ></Tweet>
                <Tweet
                    username="Exxasens"
                    content="xdkjfakdjfkasf dkfjakdf dajfkdajfkasjdf sdakfjkdsajfkasjf safksadkfjksafjsdkfjdafdkafjdafadsfdfaff"
                ></Tweet>
                <Tweet
                    username="Exxasens"
                    content="xdkjfakdjfkasf dkfjakdf dajfkdajfkasjdf sdakfjkdsajfkasjf safksadkfjksafjsdkfjdafdkafjdafadsfdfaff"
                ></Tweet>
                <Tweet
                    username="Exxasens"
                    content="xdkjfakdjfkasf dkfjakdf dajfkdajfkasjdf sdakfjkdsajfkasjf safksadkfjksafjsdkfjdafdkafjdafadsfdfaff"
                ></Tweet>
                <Tweet
                    username="Exxasens"
                    content="xdkjfakdjfkasf dkfjakdf dajfkdajfkasjdf sdakfjkdsajfkasjf safksadkfjksafjsdkfjdafdkafjdafadsfdfaff"
                ></Tweet>
                <Tweet
                    username="Exxasens"
                    content="xdkjfakdjfkasf dkfjakdf dajfkdajfkasjdf sdakfjkdsajfkasjf safksadkfjksafjsdkfjdafdkafjdafadsfdfaff"
                ></Tweet>
                <Tweet
                    username="Exxasens"
                    content="xdkjfakdjfkasf dkfjakdf dajfkdajfkasjdf sdakfjkdsajfkasjf safksadkfjksafjsdkfjdafdkafjdafadsfdfaff"
                ></Tweet>
            </div>
        </SidebarPageLayout>
    );
};

export default Main;
