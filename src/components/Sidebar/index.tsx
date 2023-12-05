import { NavLink, NavLinkProps } from "react-router-dom";
import useAppDispatch from "../../hooks/useAppDispatch";
import { logout } from "../../store/slices/authSlice";
import React from "react";

interface SidebarButtonProps extends Omit<NavLinkProps, "children"> {
    children: React.ReactNode;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ children, ...rest }) => {
    return (
        <NavLink {...rest}>
            {({ isActive }) => (
                <button
                    className={`sidebar-button ${
                        isActive ? "sidebar-active" : ""
                    }`}
                >
                    {children}
                </button>
            )}
        </NavLink>
    );
};

interface SidebarProps extends React.PropsWithChildren {}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    const dispatch = useAppDispatch();

    return (
        <div className="max-w-5xl w-full flex">
            <div className="max-w-[18rem] p-6 flex flex-col gap-4 w-full border-r-[#2E2E2E] border-r-2 h-screen sticky top-0">
                <SidebarButton to="/">Главная</SidebarButton>
                <SidebarButton to="/profile">Мой профиль</SidebarButton>
                <SidebarButton to="/following">Мои подписки</SidebarButton>
                <SidebarButton to="/followers">Мои подписчики</SidebarButton>
                <button
                    className="sidebar-button mt-auto"
                    onClick={() => dispatch(logout())}
                >
                    Выход
                </button>
            </div>
            <div className="flex flex-col w-full border-r-2 border-r-[#2E2E2E]">
                {children}
            </div>
        </div>
    );
};

export default Sidebar;
