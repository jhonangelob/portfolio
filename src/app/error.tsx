'use client';

const Error = (): React.ReactElement => {
  return (
    <div className='w-full flex-center h-[calc(100vh-145px)] md:h-[calc(100vh-179px)] flex-col mx-auto gap-2'>
      <h1 className='text-dark text-6xl md:text-9xl font-bold'>404</h1>
      <p className='text-white'>There isn&apos;t anything here.</p>
    </div>
  );
};

export default Error;
