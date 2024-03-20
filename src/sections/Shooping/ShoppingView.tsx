import AppLayout from 'src/components/layouts/AppLayout';
import ShoppingHeader from './Header/ShoppingHeader';
import { useShoppingQuery } from 'src/API/shopping/shopping';
import AddShoppingList from './Header/AddShoppingList';
import ShoppingList from './List/ShoppingList';

const ShoppingView = () => {
    const { data: shopping, isLoading, isError, error, refetch } = useShoppingQuery();

    const parsedShopping = shopping?.map(item => ({
        ...item,
        items: item.items ? JSON.parse(item.items) : [],
    }));
    return (
        <AppLayout>
            <div className=' w-full max-w-[900px] space-y-8 p-4'>
                <div className='flex w-full items-center justify-between  gap-12'>
                    <ShoppingHeader />
                    <AddShoppingList refetch={refetch} />
                </div>
                <ShoppingList
                    shopping={parsedShopping}
                    isLoading={isLoading}
                    isError={isError}
                    error={error ? error.message : ''}
                    refetch={refetch}
                />
            </div>
        </AppLayout>
    );
};

export default ShoppingView;
