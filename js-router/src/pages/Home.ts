type Props = {
  $target: HTMLElement;
};

type HomeType = {
  render: () => void;
};

export default function HomePage(this: HomeType, { $target }: Props) {
  const $page = document.createElement("div");
  $page.className = "Home";

  $page.innerHTML = `
    <main class='container_dark'>
        <h1 class='h1_white'>HOME</h1>
        <a href='/about' class='button_dark'>Go About</a>
    </main>`;

  this.render = () => {
    $target.appendChild($page);
  };
}
