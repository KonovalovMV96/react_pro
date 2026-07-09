import type { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

export const AppReduxStoreProvider: FC<PropsWithChildren> = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};
