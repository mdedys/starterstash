import AuthProvider from "./auth/AuthProvider";
import Firebase from "./firebase/Firebase";
import globals from "./globals";
import ThemeProvider from "./ui/theme/ThemeProvider";

function App() {
  return (
    <>
      <div className={globals} />
      <ThemeProvider theme="light" />
      <Firebase>
        <AuthProvider></AuthProvider>
      </Firebase>
    </>
  );
}

export default App;
