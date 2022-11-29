import { containers, titles, buttons } from '../../styles';

function About() {
  return (
    <main className={containers.container_dark}>
      <h1 className={titles.h1_white}>ABOUT</h1>
      <button className={buttons.button_dark}>Go Home</button>
    </main>
  );
}

export default About;
