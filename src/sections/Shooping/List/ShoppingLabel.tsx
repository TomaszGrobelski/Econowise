interface ShoppingLabelProps {
    name: string;
}
const ShoppingLabel = ({ name }: ShoppingLabelProps) => {
    return (
        <div className='flex items-center gap-3 rounded-sm border-[1px] border-green-400 p-1'>
            <input
                type='checkbox'
                name=''
                id=''
                className='size-6 accent-[#008000]'
            />
            <label htmlFor=''>{name}</label>
        </div>
    );
};

export default ShoppingLabel;
