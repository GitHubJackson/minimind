import { createContext } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type jsmindInstance = any;

export interface IMind {
  jm: jsmindInstance;
}

export const MindContext = createContext<IMind>({
  jm: null,
});
