import SidebarPageLayout from "../components/layouts/SidebarPageLayout";
import useAppSelector from "../hooks/useAppSelector";

const UserProfile = () => {
    const user = useAppSelector((state) => state.auth.user);

    return (
        <SidebarPageLayout heading="Мой профиль">
            {/* <CreateTweet /> */}
            <div className="flex flex-col gap-4 bg-dark-light rounded-md p-4">
                <h2 className="text-xl">Ваши данные</h2>
                <form className="flex flex-col gap-4">
                    <label className="text-[#CCCCCC] text-base">
                        <p className="mb-1.5">Логин:</p>
                        <input
                            defaultValue={user?.name}
                            className="auth-input"
                            type="text"
                        />
                    </label>
                    <label className="text-[#CCCCCC] text-base">
                        <p className="mb-1.5">id:</p>
                        <input
                            defaultValue={user?.id}
                            className="auth-input"
                            type="text"
                        />
                    </label>
                </form>
            </div>
        </SidebarPageLayout>
    );
};

export default UserProfile;
