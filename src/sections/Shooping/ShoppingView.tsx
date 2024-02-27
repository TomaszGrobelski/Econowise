import AppLayout from 'src/components/layouts/AppLayout';
import ShoppingHeader from './Header/ShoppingHeader';
import { ShoppingContextProvider } from 'src/contexts/ShoppingContextProvider';
import { useQuery } from 'react-query';
import { fetchShoppingList } from 'src/API/fetchShoppingList';
import IsLoading from 'src/components/api/IsLoading';

// import ShoppingLabel from './List/ShoppingLabel';
interface IShoppingItem {
    id: number;
    name:string;
    items: string[];
}
const ShoppingView = () => {
    // const contextValue = useContext(ShoppingContext);

    const { data: shoppingList, isLoading, error } = useQuery('shoppingList', fetchShoppingList);
    console.log(shoppingList);
    if (isLoading) {
        return <IsLoading />;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <AppLayout>
            <ShoppingContextProvider>
                <div className=' space-y-8 p-4'>
                    <ShoppingHeader />
                    <div>
                        <ul>
                            {shoppingList.map((item:IShoppingItem) => (
                                <div>{item.name}</div>
                            ))}
                            {/* <ShoppingLabel name={'Sałata'} />
                            <ShoppingLabel name={'Sałata'} />
                            <ShoppingLabel name={'Sałata'} />
                            <ShoppingLabel name={'Sałata'} /> */}
                        </ul>
                    </div>
                </div>
            </ShoppingContextProvider>
        </AppLayout>
    );
};

export default ShoppingView;
