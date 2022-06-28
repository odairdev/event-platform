import { useContext } from "react";
import { MenuContext } from "../contexts/MenuContext";

export function useBurger() {
  const context = useContext(MenuContext)

  return context
}