import Link from 'next/link';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
const CurrencyItem = ({ coin }) => {
  const router = useRouter();
  console.log(coin);
  return (
    <div className="w-full">
      <div className="flex justify-center items-center px-10 h-96">
        <div className="border-2 w-2/4 max-h-px-500 border-gray-100">
          <div className="flex">
            <div className="justify-left py-2 px-4">
              <Image
                layout="fixed"
                alt="logo"
                className="mx-auto"
                src={coin?.image.large}
                width={100}
                height={100}
              />
            </div>
            <div className="w-auto mx-auto">
              <p>Blockchain: {coin?.name}</p>
              <p>Category: {coin.categories}</p>
              <p>Genesis date: {coin.genesis_date}</p>
              <div>
                <a href="https://www.reddit.com/r/Bitcoin/">
                  Reddit:
                  <span className="text-blue-700">
                    {' '}
                    {coin.links.subreddit_url}
                  </span>
                </a>
              </div>
              <div>
                <a href="http://www.bitcoin.org">
                  Website:
                  <span className="text-blue-700"> {coin.links.homepage}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyItem;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res =
    await fetch(`https://api.coingecko.com/api/v3/coins/${context.query.id}
      `);
  const coin = await res.json();
  return {
    props: {
      coin,
    },
  };
};
