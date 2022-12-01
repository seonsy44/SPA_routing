import useAbout from '../../hooks/useAbout';
import { containers, titles, buttons } from '../../styles';

function About() {
  const { handleClick } = useAbout();

  return (
    <main className={containers.container_dark}>
      <h1 className={titles.h1_white}>ABOUT</h1>
      <button onClick={handleClick} className={buttons.button_dark}>
        Go Home
      </button>
    </main>
  );
}

export default About;
