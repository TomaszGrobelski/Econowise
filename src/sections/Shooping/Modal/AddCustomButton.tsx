import CustomButton from 'src/components/buttons/CustomButton';
import { Icon } from '@iconify/react/dist/iconify.js';

interface AddCustomButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    isLoading?: boolean;
}

const AddCustomButton = ({ onClick, isLoading }: AddCustomButtonProps) => {
    return (
        <CustomButton
            onClick={onClick}
            additionalClass='  bg-green-500 text-white border-green-800'
        >
            {isLoading ? <Icon icon='eos-icons:bubble-loading' /> : 'Add'}
        </CustomButton>
    );
};

export default AddCustomButton;
