import "./App.css";
import ThemeProvider from "./context/ThemeContext";
import Home from "./pages/Home";
import Background from "./components/Background";

const App = () => {
  return (
    <ThemeProvider>
      <Background>
        <Home />
      </Background>
    </ThemeProvider>
  );
};

export default App;
