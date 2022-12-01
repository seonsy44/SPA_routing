import useRouter from './useRouter';

function useAbout() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return { handleClick };
}

export default useAbout;
