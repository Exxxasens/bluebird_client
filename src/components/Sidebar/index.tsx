interface SidebarProps extends React.PropsWithChildren {}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    return (
        <div className="max-w-5xl w-full flex">
            <div className="max-w-[18rem] p-6 flex flex-col gap-4 w-full border-r-[#2E2E2E] border-r-2 h-screen sticky top-0">
                <button className="sidebar-button">Главная</button>
                <button className="sidebar-button">Мой профиль</button>
                <button className="sidebar-button mt-auto">Выход</button>
            </div>
            <div className="flex flex-col w-full border-r-2 border-r-[#2E2E2E]">
                {children}
            </div>
        </div>
    );
};

export default Sidebar;
