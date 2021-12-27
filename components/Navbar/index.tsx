import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/Logo.svg';
import Currency from '../../public/Currency.svg';
import Exchange from '../../public/Exchange.svg';

const Navbar = () => {
  return (
    <nav className="grid grid-cols-10 h-16 place-items-center">
      <Link href="/">
        <a className="mx-auto col-start-1 text-xl">
          <Logo style={{ width: '40', height: '40' }} />
        </a>
      </Link>
      <Link href="/currency/">
        <a className=" col-start-5  text-xl">
          <Currency style={{ width: '40', height: '40' }} />
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
