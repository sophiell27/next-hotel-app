import logo from '../images/logo.svg';
import Link from 'next/link';
import './globals.css';
import Image from 'next/image';
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const loginStatus = true;
  const navData = [
    {
      name: '客房旅宿',
      slug: '/rooms',
    },
    ...(loginStatus && [
      {
        name: 'member',
        slug: '/member',
      },
    ]),
  ];
  return (
    <html lang='en'>
      <body className='mx-auto container'>
        <div className='flex justify-between items-center py-8'>
          <h1>
            <Link href='/'>
              <Image src={logo} alt='logo' className='w-48' />
            </Link>
          </h1>
          <ul className='flex gap-12'>
            {navData.map(({ name, slug }) => (
              <li className='hover:opacity-70 cursor-pointer' key={slug}>
                <Link href={slug}>{name}</Link>
              </li>
            ))}
            <li className='hover:opacity-70 cursor-pointer'>
              <Link
                href='/order'
                className=' bg-foreground py-4 px-8 rounded-md'
              >
                立即訂房
              </Link>
            </li>
          </ul>
        </div>
        {children}
      </body>
    </html>
  );
};
export default RootLayout;
