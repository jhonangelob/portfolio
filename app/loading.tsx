const Loading = (): React.ReactElement => {
  return (
    <div className='flex-center h-screen w-screen bg-black2'>
      <div
        className='animate-spin inline-block w-14 h-14 md:w-16 md:h-16 border-[10px] border-accent border-t-black2 rounded-full z-20'
        role='status'
        aria-label='loading'
      />
    </div>
  );
};

export default Loading;
