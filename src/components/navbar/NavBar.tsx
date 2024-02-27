import { navbarList } from './navbarList';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';

const NavBar = () => {
    const [expand, setExpand] = useState(true);

    return (
        <div className={` ${expand ? 'w-48' : 'w-16'} relative h-screen  justify-center bg-main`}>
            <button className='absolute right-3 top-2' onClick={() => setExpand(!expand)}>
                {expand ? (
                    <Icon icon='subway:left-arrow' width={23} color='white' />
                ) : (
                    <Icon icon='subway:right-arrow' width={23} color='white' />
                )}
            </button>
            <nav>
                <ul className='flex flex-col gap-6 pt-16'>
                    {navbarList.map((item) => (
                        <Link key={item.name} to={item.link} className='text-[1.1rem] text-white'>
                            <div className='flex items-center gap-2 pl-2'>
                                <Icon icon={item.icon} width={22} />
                                {expand && item.name}
                            </div>
                        </Link>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
