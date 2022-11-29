import { createContext, useContext, useMemo, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

type RouterContextType = {
  currentPath: string;
  setCurrentPath: React.Dispatch<React.SetStateAction<string>> | null;
};

const RouterContext = createContext<RouterContextType>({ currentPath: '', setCurrentPath: null });

export const useRouterContext = () => useContext(RouterContext);

function Router({ children }: Props) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const value = useMemo(() => ({ currentPath, setCurrentPath }), [currentPath]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export default Router;
