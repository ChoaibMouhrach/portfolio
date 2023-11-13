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
            <svg className="w-14 h-14" viewBox="0 0 191 165" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M94.7933 0.81958L51.2613 57.0734C46.7258 62.9344 48.5667 70.0625 55.3731 72.9943L67.6972 78.3029L119.441 11.4367L94.7933 0.81958Z" fill="white" />
              <path d="M130.571 15.7542L43.6964 128.017C39.1608 133.878 41.0017 141.006 47.8081 143.938L60.1322 149.246L155.219 26.3713L130.571 15.7542Z" fill="white" />
              <path d="M90.0645 129L70.9999 153.636L83.324 158.945C90.1304 161.876 99.3249 159.502 103.86 153.641L114.713 139.617L90.0645 129Z" fill="white" />
              <path d="M121.064 89L102 113.636L126.648 124.253L137.5 110.229C142.036 104.368 140.195 97.2404 133.389 94.3086L121.064 89Z" fill="white" />
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
