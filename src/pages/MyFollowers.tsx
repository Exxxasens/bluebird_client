import SidebarPageLayout from "../components/layouts/SidebarPageLayout";
import useAppSelector from "../hooks/useAppSelector";

const MyFollowers = () => {
    const user = useAppSelector((state) => state.auth.user);

    return (
        <SidebarPageLayout heading="Мои подписчики">
            <div className="flex flex-col px-4 py-6">
                <div className="flex flex-col gap-4">
                    {user &&
                        user.followers.map((follower) => (
                            <div className="flex flex-row bg-dark-light text-base p-4 rounded-md">
                                <div className="mr-auto flex items-center">
                                    @{follower.name}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </SidebarPageLayout>
    );
};

export default MyFollowers;
