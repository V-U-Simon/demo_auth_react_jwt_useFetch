import { SessionProvider } from "src/providers/sessionProvider";
import "./input.css";
import { DataRoutes } from "./Router";

export function App() {
  return (
    <>
      <SessionProvider>
        <DataRoutes />
      </SessionProvider>
    </>
  );
}
