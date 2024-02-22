import { navbarList } from './navbarList';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className=" w-48 h-screen bg-main flex justify-center">
            <nav>
                <ul className="flex flex-col gap-2">
                    {navbarList.map((item) => (
                        <Link
                            key={item.name}
                            to={item.link}
                            className="text-white text-[1.1rem]"
                        >
                            {item.name}
                        </Link>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
