type ScreenProps = {
  children?: React.ReactNode;
};

const Screen = ({ children }: ScreenProps) => {
  return (
    <div>
      <div className="h-10 bg-primary w-full rounded-t-xl"></div>
      {/* Content */}
      <div className="h-60 lg:h-96 bg-light-black flex items-center justify-center">{children}</div>
      <div className="h-10 bg-primary w-full rounded-b-xl"></div>
      <div className="h-10 bg-primary w-full flex items-stretch justify-between">
        <div className="bg-black h-11 w-24 lg:w-32 rounded-r-full"></div>
        <div className="bg-black h-11 w-24 lg:w-32 rounded-l-full"></div>
      </div>
    </div>
  );
};

export default Screen;
