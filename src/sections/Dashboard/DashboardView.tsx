import PageContainer from 'src/components/containers/PageContainer';
import SearchInput from 'src/components/inputs/SearchInput';
import NavBar from 'src/components/navbar/NavBar';

const DashboardView = () => {
    return (
        <PageContainer>
            <NavBar />
            DashboardView
            <SearchInput />
            <div className=" text-pr"></div>
        </PageContainer>
    );
};

export default DashboardView;
