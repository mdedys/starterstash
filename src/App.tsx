import AuthProvider from "./auth/AuthProvider";
import UpdatePrompt from "./components/modals/pwa/UpdatePrompt";
import Database from "./db/Database";
import Firebase from "./firebase/Firebase";
import globals from "./globals";
import ThemeProvider from "./ui/theme/ThemeProvider";
import Router from "./views/Router";

function App() {
  return (
    <>
      <div className={globals} />
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
