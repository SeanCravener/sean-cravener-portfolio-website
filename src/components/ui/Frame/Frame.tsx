import React from "react";
import "./Frame.css";

interface FrameProps {
  children: React.ReactNode;
}

const Frame: React.FC<FrameProps> = ({ children }) => {
  return (
    <div className={`border`}>
      <div className="content">{children}</div>
    </div>
  );
};

export default Frame;
