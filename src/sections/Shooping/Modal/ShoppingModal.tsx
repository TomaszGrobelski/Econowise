import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { style } from './modal.style';
import AddCustomButton from './AddCustomButton';
import CloseCustomButton from './CloseCustomButton';
import { shoppingCategories } from '../shoppingCategoryList';
import { useState } from 'react';
import { useShoppingMutation } from 'src/API/shopping/shopping';

interface ShoppingModalProps {
    refetch: VoidFunction;
    isOpen: boolean;
    onClose: VoidFunction;
}

const ShoppingModal = ({ isOpen, onClose, refetch }: ShoppingModalProps) => {
    const { useAddNewList } = useShoppingMutation();
    const [listName, setListName] = useState('');
    const [category, setCategory] = useState('inne');

    const onSuccess = () => {
        onClose()
        refetch();
    };
    const onError = () => {};

    const { mutate: mutateAddList } = useAddNewList(onSuccess, onError);

    const handleAddList = () => {
        mutateAddList({ name: listName, category, items: [] });
    };

    return (
        <Modal
            open={isOpen}
            onClose={()=>onClose()}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >
            <Box sx={style}>
                <Typography id='modal-modal-title' variant='h6' component='h2'>
                    Enter a name for the list
                </Typography>
                <Typography className='space-y-4' id='modal-modal-description' sx={{ mt: 2 }}>
                    <input
                        className=' pl-2 shadow-sm shadow-main outline-none'
                        placeholder='List name'
                        type='text'
                        onChange={(e) => setListName(e.target.value)}
                        name=''
                        id=''
                    />
                    <select
                        onClick={(e) => e.stopPropagation()}
                        name='category'
                        id='category'
                        className='relative z-10 p-1 pl-2 shadow-sm shadow-main outline-none '
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {shoppingCategories.map((category) => (
                            <option key={category.name} value={category.name}>
                                {category.name}
                                {category.icon}
                            </option>
                        ))}
                    </select>
                </Typography>
                <div className='space-x-6 pt-4'>
                    <AddCustomButton onClick={handleAddList} />
                    <CloseCustomButton onClick={()=>onClose()} />
                </div>
            </Box>
        </Modal>
    );
};

export default ShoppingModal;
