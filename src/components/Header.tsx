import { Logo } from "./Logo";
import { List } from "phosphor-react";
import { useBurger } from "../hooks/useBurger";

export function Header() {
  const { toggleBurger } = useBurger()

  return (
    <header className="w-full py-5 flex items-center justify-start pl-2 xs:pl-0 xs:justify-center relative bg-gray-700 border-b border-gray-500">
      <div className="hidden xs:block">
        <Logo />
      </div>
      <div className="block xs:hidden">
        <Logo smaller/>
      </div>

      <List
        size={24}
        className="lg:hidden absolute right-4 text-green-500 cursor-pointer"
        onClick={toggleBurger}
      />
    </header>
  );
}
