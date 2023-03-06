type TitleProps = {
  children: React.ReactNode;
};

const Title = ({ children }: TitleProps) => {
  return <h2 className="text-xl font-semibold py-4 ">{children}</h2>;
};

export default Title;
