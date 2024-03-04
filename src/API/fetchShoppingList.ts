import axios from 'axios';


const fetchShoppingList = async () => {
    const response = await axios.get('http://localhost:3000/shopping');
    return response.data;
};

export { fetchShoppingList };
