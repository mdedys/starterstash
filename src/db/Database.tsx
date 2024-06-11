import { PropsWithChildren, createContext, useContext } from "react";

const Context = createContext({});

export default function Database(props: PropsWithChildren) {
  return <Context.Provider value={{}}>{props.children}</Context.Provider>;
}

export function useDatabase() {
  return useContext(Context);
}
