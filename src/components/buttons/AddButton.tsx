import { Icon } from '@iconify/react/dist/iconify.js';

const AddButton = () => {
    return (
        <button className=' flex size-10 items-center justify-center rounded-full bg-green-400 '>
            <Icon icon='material-symbols:list-alt-add' width={24} className='text-white' />
        </button>
    );
};

export default AddButton;
