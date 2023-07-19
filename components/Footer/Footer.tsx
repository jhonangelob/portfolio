import { Props } from './types';

const Footer = ({}: Props): React.ReactElement => {
  return (
    <footer
      className='flex-center relative w-full bg-background bottom-0 p-4'
      id='footer'
    >
      <p className='text-gray font-thin text-xs md:text-sm'>
        © 2022 Jhon Angelo Bustarde
      </p>
    </footer>
  );
};

export default Footer;
