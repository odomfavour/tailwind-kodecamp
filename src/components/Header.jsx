import { Link } from 'react-router-dom';
import { navLinks } from '../utils/data';

const Header = () => {
  return (
    <nav className='shadow-md py-4'>
      <div className='container w-11/12 mx-auto flex justify-between'>
        <h3 className='font-bold text-amber-950'>Tailwind</h3>
        <ul className='flex gap-3'>
          {navLinks.map((navLink) => {
            const { id, url, name } = navLink;
            return (
              <li key={id}>
                <Link to={url} className='text-green-800'>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
