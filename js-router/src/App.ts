import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import { init } from "./router";
import "./styles.css";

type Props = {
  $target: HTMLElement;
};

type AppType = {
  route: () => void;
};

export default function App(this: AppType, { $target }: Props) {
  this.route = () => {
    const { pathname } = location;

    $target.innerHTML = "";

    if (pathname === "/") new (HomePage as any)({ $target }).render();
    else if (pathname === "/about")
      new (AboutPage as any)({ $target }).render();
  };

  init(this.route);

  this.route();
}
