import { routeChange } from "../router";

type Props = {
  $target: HTMLElement;
};

export type AboutType = {
  render: () => void;
};

export default function AboutPage(this: AboutType, { $target }: Props) {
  const $page = document.createElement("div");
  $page.className = "About";

  $page.innerHTML = `
    <main class='container_dark'>
        <h1 class='h1_white'>ABOUT</h1>
        <button class='button_dark'>Go Home</button>
    </main>`;

  this.render = () => {
    $target.appendChild($page);
  };

  const $button = $page.querySelector("button");
  $button?.addEventListener("click", () => {
    routeChange("/");
  });
}
