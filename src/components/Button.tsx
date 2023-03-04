type ButtonProps = {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <div className="group relative overflow-hidden w-fit flex items-center justify-center">
      <div className="absolute bottom-0 translate-y-10 -translate-x-32 group-hover:translate-x-36 transition duration-700 rotate-45 h-36 w-16 bg-white"></div>
      <button onClick={onClick} className="bg-primary p-3 rounded-sm shadow-md text-primary tracking-wider">
        {children}
      </button>
      <span className="absolute font-semibold text-black tracking-wider pointer-events-none">{children}</span>
    </div>
  );
};

export default Button;
