import { Icon } from "@iconify/react/dist/iconify.js";

interface IIconButton {
    children: React.ReactNode;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    isLoading?: boolean;
}
const IconButton = ({ children, onClick, isLoading }: IIconButton) => {
    return (
        <button className='relative z-20 w-4 hover:scale-110' onClick={onClick}>
            {isLoading ? <Icon icon='eos-icons:bubble-loading' /> : children}
        </button>
    );
};

export default IconButton;
