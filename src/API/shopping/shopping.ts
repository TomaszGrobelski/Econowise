import { UseQueryResult, useMutation, useQuery } from 'react-query';
import { api } from './api';
import { AxiosError } from 'axios';
import { IShoppingList } from 'src/types/shopping';

export const useShoppingQuery = (): UseQueryResult<IShoppingList[], AxiosError> => {
    const { getShoppingList } = api();
    return useQuery([], () => getShoppingList());
};

export const useShoppingMutation = () => {
    const { addNewShoppingList } = api();

    const useAddNewList = (onSuccess?: VoidFunction, onError?: (error: AxiosError) => void) => {
        useMutation({
            mutationFn: (body: IShoppingList) => addNewShoppingList(body),
            onSuccess,
            onError,
        });
    };

    return {
        useAddNewList,
    };
};
