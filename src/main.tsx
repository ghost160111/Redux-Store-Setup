import { ReactNode, StrictMode } from "react";
import { createRoot, Root } from "react-dom/client";
import debug from "constants/debug";
import App from "./App";

const app: ReactNode = debug
? <StrictMode>
    <App />
  </StrictMode>
: <App />;

const root: Root = createRoot(document.getElementById("app")!);
root.render(app);
