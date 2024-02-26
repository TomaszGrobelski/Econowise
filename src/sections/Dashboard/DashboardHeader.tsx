import SearchInput from 'src/components/inputs/SearchInput';

const DashboardHeader = () => {
    return (
        <div className='flex items-center gap-20'>
            <h1>DashboardView</h1>
            <SearchInput />
        </div>
    );
};

export default DashboardHeader;
