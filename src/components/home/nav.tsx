import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { UPWORK_URL } from "@/config";

const Nav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <nav className={cn("h-16 animate duration-200 fixed top-0 left-0 w-full z-50", isScrolled ? "backdrop-blur-2xl border-b" : "")} >
      <div className="h-full container flex items-center justify-between" >
        <div className="text-xl" >
          ChoaibMouhrach
        </div>
        <div>
          <Button asChild>
            <Link href={UPWORK_URL} target="_blank" >
              Let&apos;s Talk
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
