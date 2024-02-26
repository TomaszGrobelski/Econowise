import PageContainer from '../containers/PageContainer';
import NavBar from '../navbar/NavBar';

interface AppLoyoutProps {
    children: React.ReactNode;
}
const AppLayout = ({ children }: AppLoyoutProps) => {
    return (
        <PageContainer>
            <NavBar />
            {children}
        </PageContainer>
    );
};

export default AppLayout;
