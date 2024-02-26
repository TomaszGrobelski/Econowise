import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { style } from './modal.style';
import AddCustomButton from './AddCustomButton';
import CloseCustomButton from './CloseCustomButton';

interface ShoppingModalProps {
    openModal: boolean;
    handleCloseModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ShoppingModal = ({ openModal, handleCloseModal }: ShoppingModalProps) => {
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
                <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                    <input
                        className=' pl-2 shadow-sm shadow-main outline-none'
                        placeholder='List name'
                        type='text'
                        name=''
                        id=''
                    />
                </Typography>
                <div className='space-x-6 pt-4'>
                    <AddCustomButton />
                    <CloseCustomButton onClick={handleCloseModal} />
                </div>
            </Box>
        </Modal>
    );
};

export default ShoppingModal;
