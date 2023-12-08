import { AlignJustify } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

// components
import Nav from "./Nav";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";

const NavMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-2xl"
            />
          </div>
          <SocialMedia containerStyles="flex gap-x-6" iconsStyles="text-4xl" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
