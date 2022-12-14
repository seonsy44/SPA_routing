type Props = {
  $target: HTMLElement;
};

type AboutType = {
  render: () => void;
};

export default function AboutPage(this: AboutType, { $target }: Props) {
  const $page = document.createElement("div");
  $page.className = "About";

  $page.innerHTML = `
    <main class='container_dark'>
        <h1 class='h1_white'>ABOUT</h1>
        <a href='/' class='button_dark'>Go Home</a>
    </main>`;

  this.render = () => {
    $target.appendChild($page);
  };
}
