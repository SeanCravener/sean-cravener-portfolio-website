import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./Background.css";
interface BackgroundProps {
  children: React.ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`background background-${theme}`}>
      <div className="cloud-row row1">
        <img src="/clouds.png" alt="cloud" />
        <img src="/clouds.png" alt="cloud" />
        <img src="/clouds.png" alt="cloud" />
        <img src="/clouds.png" alt="cloud" />
        <img src="/clouds.png" alt="cloud" />
        <img src="/clouds.png" alt="cloud" />
        <img src="/clouds.png" alt="cloud" />
        <img src="/clouds.png" alt="cloud" />
      </div>

      {children}
    </div>
  );
};

export default Background;
