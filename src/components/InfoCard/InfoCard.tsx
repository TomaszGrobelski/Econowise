import { Icon } from '@iconify/react/dist/iconify.js';

interface InfoCardProps {
    money: number;
    icon: string;
    description: string;
}

const InfoCard = ({ money, icon, description }: InfoCardProps) => {
    return (
        <div className='flex flex-col items-center gap-3 shadow-sm shadow-black rounded-md p-4'>
            <p>${money}</p>
            <div>
                <Icon icon={icon} width={35} className=' text-main' />
            </div>
            <p className='text-center'>{description}</p>
        </div>
    );
};

export default InfoCard;
