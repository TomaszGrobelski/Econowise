import { useState } from 'react';
import { Icon } from '@iconify/react';

const SearchInput = () => {
    const [value, setValue] = useState('');

    const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    return (
        <label htmlFor="search-bar">
            <input
                id="search-bar"
                className=" border-[1px] rounded-xl outline-none pl-6"
                type="search"
                value={value}
                onChange={handleInputValue}
            />
            <Icon className="relative bottom-6 left-1" icon="ri:search-line" width={21} />
        </label>
    );
};

export default SearchInput;
