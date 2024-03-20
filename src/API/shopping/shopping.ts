import { UseQueryResult, useMutation, useQuery } from 'react-query';
import { api } from './api';
import { AxiosError } from 'axios';
import { IShoppingList } from 'src/types/shopping';
import { IShoppingListWithId } from 'src/types/shopping';

export const useShoppingQuery = (): UseQueryResult<IShoppingListWithId[], AxiosError> => {
    const { getShoppingList } = api();
    return useQuery([], () => getShoppingList());
};

export const useShoppingMutation = () => {
    const { addNewShoppingList, deleteShoppingList, addNewShoppingItem } = api();

    const useAddNewList = (onSuccess?: VoidFunction, onError?: (error: AxiosError) => void) => {
        return useMutation({
            mutationFn: (body: IShoppingList) => addNewShoppingList(body),
            onSuccess,
            onError,
        });
    };

    const useDeleteList = (onSuccess?: VoidFunction, onError?: (error: AxiosError) => void) => {
        return useMutation({
            mutationFn: (listId: number) => deleteShoppingList(listId),
            onSuccess,
            onError,
        });
    };

    const useAddNewItem = (onSuccess?: VoidFunction, onError?: (error: AxiosError) => void) => {
        return useMutation({
            mutationFn: (listId: number) => addNewShoppingItem(listId),
            onSuccess,
            onError,
        });
    };

    return {
        useAddNewList,
        useDeleteList,
        useAddNewItem,
    };
};
