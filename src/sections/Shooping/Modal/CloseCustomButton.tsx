import CustomButton from 'src/components/buttons/CustomButton';

interface CloseCustomButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CloseCustomButton = ({ onClick }: CloseCustomButtonProps) => {
    return (
        <CustomButton onClick={onClick} additionalClass='bg-red-500 text-white border-red-800'>
            Close
        </CustomButton>
    );
};

export default CloseCustomButton;
