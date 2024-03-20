const BaseUrl = import.meta.env.VITE_BASE_URL;

export const endpoints ={
    shopping:{
        base: `${BaseUrl}/shopping`,
        deleteList:`${BaseUrl}/shopping/clear`,
        addItem: `${BaseUrl}/shopping/item-add`
    }
}