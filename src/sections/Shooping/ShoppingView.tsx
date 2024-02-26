import AppLayout from 'src/components/layouts/AppLayout';
import AddButton from 'src/components/buttons/AddButton';
import ShoppingLabel from './List/ShoppingLabel';

const ShoppingView = () => {
    return (
        <AppLayout>
            <div className=' p-4 space-y-8'>
                <div className='flex w-full items-center  justify-between'>
                    <h2>Shopping</h2>
                    <AddButton />
                </div>
                <div>
                    <ul>
                        <ShoppingLabel name={'Sałata'} />
                        <li>1</li>
                        <li>1</li>
                    </ul>
                </div>
            </div>
        </AppLayout>
    );
};

export default ShoppingView;
