import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Nav() {
  return (
    <nav className="h-16">
      <div className="container h-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="secondary">
                <Menu className="w-4 h-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-4 md:hidden">
              <SheetHeader>
                <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-2">
                <Link href="/">Services</Link>
                <Link href="/">Technology</Link>
                <Link href="/">About us</Link>
              </div>
            </SheetContent>
          </Sheet>
          <Link className="text-2xl italic font-bold" href="/">{`<Y>`}</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link className="hidden md:block" href="/">
            Services
          </Link>
          <Link className="hidden md:block" href="/">
            Technology
          </Link>
          <Link className="hidden md:block" href="/">
            About us
          </Link>
          <Button asChild size="sm">
            <Link href="/">Talk to us</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
