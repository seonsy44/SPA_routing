import { useRouterContext } from './Router';

type Props = {
  children: React.ReactNode;
};

function Routes({ children: routes }: Props) {
  const { currentPath, setCurrentPath } = useRouterContext();

  window.onpopstate = () => {
    if (setCurrentPath) setCurrentPath(window.location.pathname);
  };

  if (!Array.isArray(routes)) return <>{routes}</>;

  return routes.find((route) => route.props.path === currentPath).props.element;
}

export default Routes;
