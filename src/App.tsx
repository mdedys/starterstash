import { ThemeProvider } from "@dedees/ui-kit/theme";

import AuthProvider from "./auth/AuthProvider";
import UpdatePrompt from "./components/modals/pwa/UpdatePrompt";
import Database from "./db/Database";
import Firebase from "./firebase/Firebase";
import Global from "./globals";
import Router from "./views/Router";

function App() {
  return (
    <>
      <Global />
      <ThemeProvider theme="light" />
      <Firebase>
        <AuthProvider>
          <Database>
            <Router />
            <UpdatePrompt />
          </Database>
        </AuthProvider>
      </Firebase>
    </>
  );
}

export default App;
