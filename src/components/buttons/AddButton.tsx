import { Icon } from '@iconify/react/dist/iconify.js';

interface AddButtonProps{
    onClick?:()=>void
}
const AddButton = ({onClick}:AddButtonProps) => {
    return (
        <button onClick={onClick} className=' flex size-10 items-center justify-center rounded-full bg-green-400 '>
            <Icon icon='material-symbols:list-alt-add' width={24} className='text-white' />
        </button>
    );
};

export default AddButton;
