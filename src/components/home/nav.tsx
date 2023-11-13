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
    <nav className={cn("h-24 animate duration-200 fixed top-0 left-0 w-full z-50", isScrolled ? "backdrop-blur-2xl border-b" : "")} >
      <div className="h-full container flex items-center justify-between" >
        <div className="text-xl" >
          <Link href="/" >
            <svg className="w-13 h-12" viewBox="0 0 191 165" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M65.5524 51.4216C61.4446 49.6522 55.8955 51.0853 53.1582 54.6226L0.259862 122.98L24.908 133.597L82.7627 58.8349L65.5524 51.4216Z" fill="white" />
              <path d="M142.895 21.0627C136.089 18.1309 126.894 20.5055 122.359 26.3665L35.4841 138.629L47.8082 143.938C54.6146 146.87 63.8091 144.495 68.3446 138.634L155.219 26.3713L142.895 21.0627Z" fill="white" />
              <path d="M135.065 71L116 95.636L128.324 100.945C135.13 103.876 144.325 101.502 148.86 95.6408L159.713 81.6171L135.065 71Z" fill="white" />
              <path d="M165.795 31.4036L146.731 56.0396L171.379 66.6567L182.231 52.633C186.766 46.772 184.926 39.644 178.119 36.7121L165.795 31.4036Z" fill="white" />
            </svg>
          </Link>
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
