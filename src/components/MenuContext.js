import { createContext } from "react";

const MenuContext = createContext(false);

const MenuProvider = MenuContext.Provider;
const MenuConsumer = MenuContext.Consumer;
export { MenuProvider, MenuConsumer };
export default MenuContext;
