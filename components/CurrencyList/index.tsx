import Image from 'next/image';
import Rocket from '../../public/Rocket.svg';
import Link from 'next/link';
import { NextPage } from 'next';

const CurrencyList = ({ currencies }) => {
  return (
    <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl">
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th></th>
            <th>Rank by $</th>
            <th>Blockchain</th>
            <th>Current price</th>
            <th>Market cap</th>
            <th>
              <div className="flex ml-2 items-center justify-center">
                Ath
                <span className="ml-1 py-3">
                  <Rocket style={{ width: '30', height: '30' }} />
                </span>
              </div>
            </th>
          </tr>
        </thead>
        {currencies?.map((currency, index) => (
          <tbody key={index} className="table-auto ">
            <Link href={`/currency/${currency.id}`} passHref>
              <tr>
                <td className="px-1 py-1 20 text-center">
                  <Image
                    alt="Logo"
                    src={currency.image}
                    width={40}
                    layout="fixed"
                    height={40}
                  />
                </td>
                <td className="mx-3 20 text-center">
                  {currency.market_cap_rank}
                </td>
                <td className="mx-3 20 text-center">{currency.name}</td>
                <td className="mx-3 20 text-center">
                  {currency.current_price} <span>$</span>
                </td>
                <td className="mx-3 20 text-center">
                  {currency.market_cap}
                  <span>$</span>
                </td>
                <td className="mx-3 20 text-center">
                  {currency.ath}
                  <span>$</span>
                </td>
              </tr>
            </Link>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default CurrencyList;
