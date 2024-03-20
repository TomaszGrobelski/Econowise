interface IShoppingListItem {
    name: string;
    quantity: number;
}

export interface IShoppingList {
    name: string;
    category: string;
    items: IShoppingListItem[];
}

export interface IShoppingListWithId extends IShoppingList {
    id: number;
}
