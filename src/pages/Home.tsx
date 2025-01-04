import { useTheme } from "../context/ThemeContext";
import Frame from "../components/ui/Frame/Frame";
import "./Home.css";

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className={`home ${theme}`}>
      <div className="home-header">
        <Frame>
          <img src="/Asset-2smaller.png" alt="logo" />
          {/* <h1>
            <span>S</span>ean <span>C</span>
            ravener's
          </h1>
          <h1>Portfolio</h1>
          <button onClick={() => setTheme(theme === "bg" ? "gradient" : "bg")}>
            Switch Theme
          </button> */}
        </Frame>
      </div>
    </div>
  );
};

export default Home;
