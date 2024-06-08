import globals from "./globals";
import ThemeProvider from "./ui/theme/ThemeProvider";

function App() {
  return (
    <>
      <div className={globals} />
      <ThemeProvider theme="light" />
    </>
  );
}

export default App;
