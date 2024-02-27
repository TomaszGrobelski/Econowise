import { useState } from 'react';

interface ShoppingLabelProps {
    name: string;
}

const ShoppingLabel = ({ name }: ShoppingLabelProps) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxToggle = () => {
        setIsChecked((prevChecked) => !prevChecked);
    };
    return (
        <div
            className={`flex cursor-pointer  items-center gap-5 rounded-sm border-b-[1px]  p-1 ${
                isChecked ? 'checked line-through' : 'border-green-400'
            }`}
            onClick={handleCheckboxToggle}
        >
            <input
                type='checkbox'
                name='item'
                id='item'
                className='size-6 cursor-pointer accent-[#008000] '
                checked={isChecked}
            />
            <label className='cursor-pointer' htmlFor='item'>
                {name}
            </label>
        </div>
    );
};

export default ShoppingLabel;
