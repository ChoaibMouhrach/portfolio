interface SectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  title,
  children,
  description,
  className,
}: SectionProps) {
  return (
    <section className="container flex flex-col gap-16">
      <div className="lg:text-center lg:mx-36 flex flex-col gap-2">
        <h3 className="text-2xl lg:text-4xl font-extrabold tracking-wide">
          {title}
        </h3>
        <p className="text-sm lg:text-base text-gray-700">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </section>
  );
}
