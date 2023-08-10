import Link from 'next/link';

const NotFound = (): React.ReactElement => {
  return (
    <div className='w-full flex-center h-screen flex-col mx-auto gap-2'>
      <h1 className='text-dark text-6xl md:text-9xl font-bold'>404</h1>
      <p className='text-white'>There isn&apos;t anything here.</p>
      <Link href='/' className='text-accent'>
        Go back
      </Link>
    </div>
  );
};

export default NotFound;
