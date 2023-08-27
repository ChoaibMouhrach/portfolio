export default function Background() {
  return (
    <>
      <div className="z-0 absolute top-0 left-0 overflox-x-hidden max-w-full">
        <div className="bg-primary h-[600px] w-[600px] rounded-full blur-3xl" />
        <div className="bg-primary h-[600px] w-[600px] rounded-full blur-3xl ml-auto" />
      </div>
      <div className="fixed top-0 left-0 h-full w-full bg-white backdrop-blur-3xl opacity-50" />
    </>
  );
}
