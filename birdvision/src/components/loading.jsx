import React from "react";
import "../style/components.css"

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner-border" style={{width: "4rem", height: "4rem"}} role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default Loading;
