interface CustomButtonProps {
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    additionalClass?: string;
}

const CustomButton = ({ children, onClick, additionalClass }: CustomButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={` w-20 rounded-3xl border-[1px] border-black py-1 font-bold hover:opacity-90 ${additionalClass}`}
        >
            {children}
        </button>
    );
};

export default CustomButton;
