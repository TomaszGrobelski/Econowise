import Accordion, { AccordionSlots } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Fade from '@mui/material/Fade';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import IsLoading from 'src/components/api/IsLoading';
// import axios from 'axios';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { shoppingCategories } from 'src/constans/shopping';
import IconButton from 'src/components/buttons/IconButton';
import { Icon } from '@iconify/react/dist/iconify.js';
import { IShoppingListWithId } from 'src/types/shopping';
import { useShoppingMutation } from 'src/API/shopping/shopping';
import ShoppingLabel from './ShoppingLabel';

interface IShoppingList {
    shopping: IShoppingListWithId[] | undefined;
    isLoading: boolean;
    isError: boolean;
    error: { message: string } | string;
    refetch: VoidFunction;
}
const ShoppingList = ({ shopping, isLoading, isError, error, refetch }: IShoppingList) => {
    const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});
    const [inputValue, setInputValue] = useState('');
    const listMutation = useShoppingMutation();
    console.log(shopping);
    const handleExpansion = (id: number) => {
        setExpanded((prevExpanded) => ({
            ...prevExpanded,
            [id]: !prevExpanded[id],
        }));
    };

    const onSuccess = () => {
        refetch();
    };
    const onError = () => {};

    const { isLoading: addLoading, mutate: addItem } = listMutation.useAddNewItem(
        onSuccess,
        onError
    );

    const handleAddItem = async (listId: number) => {
        console.log(inputValue);
        console.log(listId);
        if (inputValue.length > 0) {
            const body = {
                name: inputValue,
                quantity: 1,
            };
            console.log(body);
            addItem({ listId, body });
        }
    };
    // const handleAddItem = async () => {
    //     console.log(inputValue);
    //     const listId = 51;
    //     const newItem = {
    //         name: inputValue,
    //         quantity: 1,
    //     };

    //     try {
    //         const response = await axios.put(`http://localhost:3000/shopping/item-add/${listId}`, {
    //             newItem,
    //         });
    //         console.log('Response:', response);
    //     } catch (error) {
    //         console.log('Error:', error);
    //     }
    // };

    const { isLoading: deleteLoading, mutate: deleteList } = listMutation.useDeleteList(
        onSuccess,
        onError
    );
    const handleDeleteList = async (id: number) => {
        deleteList(id);
    };
    return (
        <ul className='space-y-3'>
            {isLoading && <IsLoading />}
            {isError && <p>Error: {typeof error === 'string' ? error : error?.message}</p>}

            {shopping &&
                shopping.map((list) => (
                    <Accordion
                        key={list.id}
                        expanded={expanded[list.id]}
                        onChange={() => handleExpansion(list.id)}
                        slots={{ transition: Fade as AccordionSlots['transition'] }}
                        slotProps={{ transition: { timeout: 400 } }}
                        sx={{
                            '& .MuiAccordion-region': {
                                height: expanded[list.id] ? 'auto' : 0,
                            },
                            '& .MuiAccordionDetails-root': {
                                display: expanded[list.id] ? 'block' : 'none',
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
                                    <p className=''>{list.name}</p>
                                    <select
                                        onClick={(e) => e.stopPropagation()}
                                        name='category'
                                        id='category'
                                        className='relative z-10 outline-none '
                                        defaultValue={list.category}
                                    >
                                        {shoppingCategories.map((category) => (
                                            <option key={category.name} value={category.name}>
                                                {category.name}
                                                {category.icon}
                                            </option>
                                        ))}
                                    </select>
                                    <IconButton
                                        isLoading={deleteLoading}
                                        onClick={() => handleDeleteList(list.id)}
                                    >
                                        <Icon icon='ion:trash' color='red' width={20} />
                                    </IconButton>
                                </div>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul className='space-y-4'>
                                {list.items &&
                                    list.items.map((poz) => (
                                        <ShoppingLabel key={poz?.name} name={poz?.name} />
                                    ))}
                            </ul>
                            <div className='flex pt-4'>
                                <input
                                    className='w-full border-b-[1px] pl-12 outline-none'
                                    type='text'
                                    onChange={(e) => setInputValue(e.target.value)}
                                />
                                <button onClick={() => handleAddItem(list.id)}>
                                    {addLoading ? (
                                        <IsLoading />
                                    ) : (
                                        <Icon icon='basil:add-solid' color='#6957E9' width={35} />
                                    )}
                                </button>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                ))}
        </ul>
    );
};

export default ShoppingList;
