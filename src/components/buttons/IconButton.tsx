interface IIconButton {
    children: React.ReactNode;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    isLoading?: boolean;
}
const IconButton = ({ children, onClick, isLoading }: IIconButton) => {
    return (
        <button className='relative z-20' onClick={onClick}>
            {isLoading ? <div>isLoading</div> : children}
        </button>
    );
};

export default IconButton;
