import axios from 'axios';
import { endpoints } from 'src/utils/axios';
import { AxiosResponse } from 'axios';
import { IShoppingList } from 'src/types/shopping';

interface IApi {
    getShoppingList: () => Promise<IShoppingList[]>;
    addNewShoppingList: (body: IShoppingList) => Promise<unknown>;
}

export const api = (): IApi => {
    const responseHandler = <T>(response: AxiosResponse<T>): T => response.data;

    const getShoppingList = (): Promise<IShoppingList[]> =>
        axios.get(`${endpoints.shopping.base}`).then(responseHandler);

    const addNewShoppingList = (body: IShoppingList): Promise<unknown> =>
        axios.post('https://econowise-server.vercel.app/shopping', body);

    return {
        getShoppingList,
        addNewShoppingList,
    };
};
