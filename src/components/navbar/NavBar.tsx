import { navbarList } from './navbarList';

const NavBar = () => {
    return (
        <div className=" w-48 h-screen bg-main flex justify-center">
            <nav>
                <ul className='flex flex-col gap-2'>
                    {navbarList.map((item) => (
                        <li className='text-white text-[1.1rem]' key={item.name}>{item.name}</li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
