/*
            <div className="flex flex-col px-4 py-6">
                <h1 className="text-3xl font-medium">Мои подписки</h1>
                <div className="flex flex-col gap-4 mt-4">
                    {user &&
                        user.following.map((following) => (
                            <div className="flex flex-row bg-dark-light text-base p-4 rounded-md">
                                <div className="mr-auto flex items-center">
                                    @{following.name}
                                </div>
                                <div>
                                    <button className="action-button flex flex-row items-center">
                                        <div className="mr-1">
                                            <FiX />
                                        </div>
                                        <div>Отписаться</div>
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
*/

import { FiX } from "react-icons/fi";
import SidebarPageLayout from "../components/layouts/SidebarPageLayout";
import useAppSelector from "../hooks/useAppSelector";

const Following = () => {
    const user = useAppSelector((state) => state.auth.user);
    return (
        <SidebarPageLayout heading="Мои подписки">
            <div className="flex flex-col px-4 py-6">
                <div className="flex flex-col gap-4">
                    {user &&
                        user.following.map((following) => (
                            <div className="flex flex-row bg-dark-light text-base p-4 rounded-md">
                                <div className="mr-auto flex items-center">
                                    @{following.name}
                                </div>
                                <div>
                                    <button className="action-button flex flex-row items-center">
                                        <div className="mr-1">
                                            <FiX />
                                        </div>
                                        <div>Отписаться</div>
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </SidebarPageLayout>
    );
};

export default Following;
