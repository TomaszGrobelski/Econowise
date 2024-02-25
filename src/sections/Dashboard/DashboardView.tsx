import InfoCard from 'src/components/InfoCard/InfoCard';
import PageContainer from 'src/components/containers/PageContainer';
import NavBar from 'src/components/navbar/NavBar';
import DashboardHeader from './DashboardHeader';

const DashboardView = () => {
    const financeList = [
        { name: 'Shopping Debit', money: 600, icon: 'ion:card' },
        { name: 'Transfer Other Country', money: 300, icon: 'fluent:money-hand-16-regular' },
        { name: 'Investment', money: 520, icon: 'arcticons:invest' },
        { name: 'Education', money: 170, icon: 'cil:education' },
    ];

    return (
        <PageContainer>
            <NavBar />
            <div>
                <DashboardHeader />
                <div className='grid grid-cols-4 gap-2'>
                    {financeList.map((item) => (
                        <InfoCard money={item.money} icon={item.icon} description={item.name} />
                    ))}
                </div>
            </div>
        </PageContainer>
    );
};

export default DashboardView;
