
interface IPageContainer {
    children: React.ReactNode;
}
const PageContainer = ({ children }: IPageContainer) => {
    return <div className="container flex">{children}</div>;
};

export default PageContainer;
