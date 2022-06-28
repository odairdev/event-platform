import { createContext, ReactNode, useState } from "react";

interface MenuContextProviderProps {
  children: ReactNode
}

interface MenuContextData {
  isBurgerOpen: boolean
  toggleBurger: () => void
}

export const MenuContext = createContext<MenuContextData>({} as MenuContextData)

export function MenuContextProvider({ children }: MenuContextProviderProps) {
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false)

  const toggleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen)
  }

  return (
    <MenuContext.Provider value={{isBurgerOpen, toggleBurger}}>
    {children}
  </MenuContext.Provider>
  )
}