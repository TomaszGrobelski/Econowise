import axios from 'axios';


const fetchShoppingList = async () => {
    const response = await axios.get('https://econowise-server.vercel.app/shopping');
    return response.data;
};

export { fetchShoppingList };
