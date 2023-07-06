import { Footer, NavBar } from "@/components/ui";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <main className="flex flex-col gap-16">
      <NavBar />
      {children}
      <Footer />
    </main>
  );
};
