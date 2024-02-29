import CustomButton from 'src/components/buttons/CustomButton';

interface AddCustomButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const AddCustomButton = ({onClick}:AddCustomButtonProps) => {
    return (
        <CustomButton onClick={onClick} additionalClass='bg-green-500 text-white border-green-800'>Add</CustomButton>
    );
};

export default AddCustomButton;
