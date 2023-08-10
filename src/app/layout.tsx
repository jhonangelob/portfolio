import '@/src/styles/globals.css';
import { Poppins } from 'next/font/google';

export const metadata = {
  title: 'jhn',
  description: 'Jhon Angelo Bustarde | Software Engineer',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

type Props = {
  children: React.ReactElement;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en'>
      <body className={`${poppins.className} bg-background`}>{children}</body>
    </html>
  );
};

export default RootLayout;
