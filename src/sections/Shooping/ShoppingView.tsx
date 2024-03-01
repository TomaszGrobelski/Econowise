import AppLayout from 'src/components/layouts/AppLayout';
import ShoppingHeader from './Header/ShoppingHeader';
import { useQuery } from 'react-query';
import { fetchShoppingList } from 'src/API/fetchShoppingList';
import IsLoading from 'src/components/api/IsLoading';
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
// import ShoppingLabel from './List/ShoppingLabel';
import Accordion, { AccordionSlots } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import { Icon } from '@iconify/react/dist/iconify.js';
import { shoppingCategories } from './shoppingCategoryList';

interface IItems {
    product: string;
    quantity: number;
}

interface IShoppingItem {
    id: number;
    name: string;
    category: string;
    items: IItems[];
}

const ShoppingView = () => {
    const {
        data: shopping,
        isLoading,
        isError,
        error,
    } = useQuery<IShoppingItem[], AxiosError>('shopping', fetchShoppingList);
    const [displayedShoppingList, setDisplayedShoppingList] = useState<IShoppingItem[]>([]);
    const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

    // const list = [
    //     { id: 1, name: 'tom', category: 'dom i ogród', items: [{ product: 'tom', quantity: 2 }] },
    // ];

    useEffect(() => {
        if (shopping) {
            setDisplayedShoppingList(shopping);
            // setDisplayedShoppingList(list);
            console.log(shopping);
        }
    }, [shopping]);

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

    return (
        <AppLayout>
            <div className=' w-full max-w-[900px] space-y-8 p-4'>
                <ShoppingHeader />
                <div>
                    <ul className='space-y-3'>
                        {displayedShoppingList.map((item: IShoppingItem) => (
                            
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
                                        <div className='grid grid-cols-2 gap-10'>
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
                                        </div>
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul className='space-y-4'>

                                        {/* {JSON.parse(item.items).map((pos) => (
                                            <li key={pos.product}>
                                                <ShoppingLabel name={pos.product} />
                                            </li>
                                        ))} */}
                                    </ul>
                                    <div className='flex pt-4'>
                                        <input
                                            className='w-full border-b-[1px] pl-12 outline-none'
                                            type='text'
                                        />
                                        <button>
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
