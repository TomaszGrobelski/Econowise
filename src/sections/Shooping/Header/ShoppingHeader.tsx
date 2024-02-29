import AddButton from 'src/components/buttons/AddButton';
import { useState } from 'react';
import ShoppingModal from '../Modal/ShoppingModal';
import axios from 'axios';

const ShoppingHeader = () => {
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const handleDelete = async () => {
        const shoppingIdToDelete = 2;
        try {
            const response = await axios.delete(
                `https://econowise-server.vercel.app/shoppinglist/${shoppingIdToDelete}`
            );
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='flex w-full items-center justify-between  gap-12'>
            <h2>Shopping</h2>
            <button onClick={handleDelete}>Usun</button>
            <AddButton onClick={handleOpenModal} />
            <ShoppingModal openModal={openModal} handleCloseModal={handleCloseModal} />
        </div>
    );
};

export default ShoppingHeader;
