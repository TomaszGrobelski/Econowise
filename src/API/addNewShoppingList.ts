import axios from 'axios';

interface IItems {
    product: string;
    quantity: number;
}

const addNewShoppingList = async (listName:string, category:string) => {
    const newList = {
        name: listName,
        category: category,
        items: [] as IItems[],
    };

    try {
        const response = await axios.post('https://econowise-server.vercel.app/shopping-list', newList);
        console.log('Shopping list added successfully:', response.data);
    } catch (error) {
        console.error('Error adding shopping list:', error);
    }
};

export { addNewShoppingList };
