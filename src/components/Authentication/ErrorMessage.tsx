const ErrorMessage: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <div className="text-sm text-[tomato] mt-2 ml-1">{children}</div>;
};

export default ErrorMessage;
