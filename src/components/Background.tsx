import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./Background.css";
interface BackgroundProps {
  children: React.ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
  const { theme } = useContext(ThemeContext);

  return <div className={`theme theme-${theme}`}>{children}</div>;
};

export default Background;
