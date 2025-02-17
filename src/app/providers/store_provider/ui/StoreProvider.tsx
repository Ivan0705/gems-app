import { Provider } from "react-redux";
import { store } from "../config/store";

export const StoreProvider = (props: any) => {
  const { children } = props;

  return <Provider store={store}>{children}</Provider>;
};
