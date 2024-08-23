import { useContext } from "react";
import { Context } from "./ContextProvider";

export const useComponentContext = () => useContext(Context);