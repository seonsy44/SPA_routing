import { useRouterContext } from '../router/Router';

const base = window.location.origin;

function useRouter() {
  const { setCurrentPath } = useRouterContext();

  return {
    push: (path: string) => {
      window.history.pushState('', '', base + path);
      if (setCurrentPath) setCurrentPath(path);
    },
  };
}

export default useRouter;
