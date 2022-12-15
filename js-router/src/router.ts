const ROUTE_CHANGE = "ROUTE_CHANGE";

export const init = (onRouteChange: () => void) => {
  window.addEventListener(ROUTE_CHANGE, () => {
    onRouteChange();
  });
};

export const routeChange = (url: string, params?: CustomEventInit<unknown>) => {
  history.pushState("", "", url);
  window.dispatchEvent(new CustomEvent(ROUTE_CHANGE, params));
};
