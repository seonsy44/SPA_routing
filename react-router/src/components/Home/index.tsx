import useHome from '../../hooks/useHome';
import { containers, titles, buttons } from '../../styles';

function Home() {
  const { handleClick } = useHome();

  return (
    <main className={containers.container_dark}>
      <h1 className={titles.h1_white}>HOME</h1>
      <button onClick={handleClick} className={buttons.button_dark}>
        Go About
      </button>
    </main>
  );
}

export default Home;
