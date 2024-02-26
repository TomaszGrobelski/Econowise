import AppLayout from 'src/components/layouts/AppLayout';
import ShoppingHeader from './Header/ShoppingHeader';
import { ShoppingContextProvider} from 'src/contexts/ShoppingContextProvider';
// import { useContext } from 'react';

// import ShoppingLabel from './List/ShoppingLabel';

const ShoppingView = () => {
    // const contextValue = useContext(ShoppingContext);


    return (
        <AppLayout>
            <ShoppingContextProvider>
                <div className=' space-y-8 p-4'>
                    <ShoppingHeader />
                    <div>
                        
                        {/* <ul>
                        <ShoppingLabel name={'Sałata'} />
                        <ShoppingLabel name={'Sałata'} />
                        <ShoppingLabel name={'Sałata'} />
                        <ShoppingLabel name={'Sałata'} />
                    </ul> */}
                    </div>
                </div>
            </ShoppingContextProvider>
        </AppLayout>
    );
};

export default ShoppingView;
