import { createContext, useState } from 'react';

interface ShoppingContextProps {
    myData: string;
    setMyData: React.Dispatch<React.SetStateAction<string>>;
}

interface ShoppingContextProviderProps {
    children: React.ReactNode;
}
const ShoppingContext = createContext<ShoppingContextProps | undefined>(undefined);

const ShoppingContextProvider = ({ children }: ShoppingContextProviderProps) => {
    const [myData, setMyData] = useState('Tomasz Context');

    return (
        <ShoppingContext.Provider value={{ myData, setMyData }}>
            {children}
        </ShoppingContext.Provider>
    );
};

export { ShoppingContext, ShoppingContextProvider };
