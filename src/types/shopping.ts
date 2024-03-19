interface IShoppingListItem {
    product: string;
    quantity: number;
}

export interface IShoppingList {
    // id?: number;
    name: string;
    category: string;
    items: IShoppingListItem[];
}