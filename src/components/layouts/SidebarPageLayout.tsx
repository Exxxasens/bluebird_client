import Sidebar from "../Sidebar";

interface SidebarPageLayoutProps extends React.PropsWithChildren {
    heading: string;
}

const SidebarPageLayout: React.FC<SidebarPageLayoutProps> = ({
    children,
    heading,
}) => {
    return (
        <Sidebar>
            <div className="border-b-2 border-b-[#2E2E2E] flex items-center px-8 py-6">
                <h1 className="text-3xl font-medium">{heading}</h1>
            </div>
            <div className="flex flex-col p-6">{children}</div>
        </Sidebar>
    );
};

export default SidebarPageLayout;
