import AddButton from 'src/components/buttons/AddButton';
import { useState } from 'react';
import ShoppingModal from '../Modal/ShoppingModal';

const ShoppingHeader = () => {
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    return (
        <div className='flex w-full items-center justify-between  gap-12'>
            <h2>Shopping</h2>
            <AddButton onClick={handleOpenModal} />
            <ShoppingModal openModal={openModal} handleCloseModal={handleCloseModal} />
        </div>
    );
};

export default ShoppingHeader;
