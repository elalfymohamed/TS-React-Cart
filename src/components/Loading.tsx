import * as React from "react"

export const Loading: React.FC = () => {
  return (
    <div className="loading-page">
      <div className="loading-page_content">
        <div className="loading-page_animation">
          <div className="ball" />
          <div className="ball" />
          <div className="ball" />
        </div>
      </div>
    </div>
  );
};