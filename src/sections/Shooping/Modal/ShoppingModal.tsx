import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { style } from './modal.style';
import AddCustomButton from './AddCustomButton';
import CloseCustomButton from './CloseCustomButton';
import { shoppingCategories } from '../shoppingCategoryList';
import { addNewShoppingList } from 'src/API/addNewShoppingList';
import { useState } from 'react';

interface ShoppingModalProps {
    openModal: boolean;
    handleCloseModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ShoppingModal = ({ openModal, handleCloseModal }: ShoppingModalProps) => {
    const [listName, setListName] = useState('');
    const [category, setCategory] = useState('inne');

    const handleAddList = (e: React.MouseEvent<HTMLButtonElement>) => {
        addNewShoppingList(listName, category);
        handleCloseModal(e);
    };

    return (
        <Modal
            open={openModal}
            onClose={handleCloseModal}
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
                    <CloseCustomButton onClick={handleCloseModal} />
                </div>
            </Box>
        </Modal>
    );
};

export default ShoppingModal;
