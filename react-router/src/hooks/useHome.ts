import useRouter from './useRouter';

function useHome() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/about');
  };

  return { handleClick };
}

export default useHome;
