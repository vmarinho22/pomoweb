import { useContext } from "react";
import { RouterContext } from "~src/context/router";

export const useRouter = () => {
  const context = useContext(RouterContext);

  return context;
}