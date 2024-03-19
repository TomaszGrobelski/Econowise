import AppLayout from 'src/components/layouts/AppLayout';
import ShoppingHeader from './Header/ShoppingHeader';
import IsLoading from 'src/components/api/IsLoading';
import { useState } from 'react';
import Accordion, { AccordionSlots } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import { Icon } from '@iconify/react/dist/iconify.js';
import { shoppingCategories } from 'src/constans/shopping';
import axios from 'axios';
import { useShoppingMutation, useShoppingQuery } from 'src/API/shopping/shopping';
import AddShoppingList from './Header/AddShoppingList';
import IconButton from 'src/components/buttons/IconButton';

const ShoppingView = () => {
    const { data: shopping, isLoading, isError, error, refetch } = useShoppingQuery();
    const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});
    const [inputValue, setInputValue] = useState('');
    const listMutation = useShoppingMutation();

    if (isLoading) {
        return <IsLoading />;
    }

    if (isError) {
        return <p>Error: {error.message}</p>;
    }

    const handleExpansion = (id: number) => {
        setExpanded((prevExpanded) => ({
            ...prevExpanded,
            [id]: !prevExpanded[id],
        }));
    };

    const handleAddItem = async () => {
        console.log(inputValue);
        const listId = 16;
        const newItem = {
            name: 'Jabłko',
            quantity: 1,
        };

        try {
            const response = await axios.put(`http://localhost:3000/shopping/item/${listId}`, {
                newItem,
            });
            console.log('Response:', response);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    const { isLoading: deleteLoading, mutate: deleteList } = listMutation.useDeleteList();
    const handleDeleteList = (id: number) => {
        deleteList(id);
    };
    return (
        <AppLayout>
            <div className=' w-full max-w-[900px] space-y-8 p-4'>
                <div className='flex w-full items-center justify-between  gap-12'>
                    <ShoppingHeader />
                    <AddShoppingList refetch={refetch} />
                </div>
                <div>
                    <ul className='space-y-3'>
                        {shopping &&
                            shopping.map((item) => (
                                <Accordion
                                    expanded={expanded[item.id]}
                                    onChange={() => handleExpansion(item.id)}
                                    slots={{ transition: Fade as AccordionSlots['transition'] }}
                                    slotProps={{ transition: { timeout: 400 } }}
                                    sx={{
                                        '& .MuiAccordion-region': {
                                            height: expanded[item.id] ? 'auto' : 0,
                                        },
                                        '& .MuiAccordionDetails-root': {
                                            display: expanded[item.id] ? 'block' : 'none',
                                        },
                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls='panel1-content'
                                        id='panel1-header'
                                    >
                                        <Typography>
                                            <div className='grid grid-cols-3 gap-10'>
                                                <p className=''>{item.name}</p>
                                                <select
                                                    onClick={(e) => e.stopPropagation()}
                                                    name='category'
                                                    id='category'
                                                    className='relative z-10 outline-none '
                                                    defaultValue={item.category}
                                                >
                                                    {shoppingCategories.map((category) => (
                                                        <option
                                                            key={category.name}
                                                            value={category.name}
                                                        >
                                                            {category.name}
                                                            {category.icon}
                                                        </option>
                                                    ))}
                                                </select>
                                                <IconButton
                                                    isLoading={deleteLoading}
                                                    onClick={()=>handleDeleteList(item.id)}
                                                >
                                                    <Icon icon='ion:trash' color='red' />
                                                </IconButton>
                                            </div>
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <ul className='space-y-4'>
                                            {/* {item.items.map((poz) => (
                                            <li key={poz.name}>{poz.name}</li>
                                        ))} */}
                                        </ul>
                                        <div className='flex pt-4'>
                                            <input
                                                className='w-full border-b-[1px] pl-12 outline-none'
                                                type='text'
                                                onChange={(e) => setInputValue(e.target.value)}
                                            />
                                            <button onClick={handleAddItem}>
                                                <Icon
                                                    icon='basil:add-solid'
                                                    color='#6957E9'
                                                    width={35}
                                                />
                                            </button>
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                    </ul>
                </div>
            </div>
        </AppLayout>
    );
};

export default ShoppingView;
