import { routeChange } from "../router";

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
        <button class='button_dark'>Go About</button>
    </main>`;

  this.render = () => {
    $target.appendChild($page);
  };

  const $button = $page.querySelector("button");
  $button?.addEventListener("click", () => {
    routeChange("/about");
  });
}
