import React from "react";

const ProgressIndicator = ({
  value,
  label,
  backgroundColor,
  color,
  height,
}) => {
  return (
    <div style={{ width: "100%", height, backgroundColor: "#9e9e9e" }}>
      <div
        style={{
          width: `${value}%`,
          height,
          backgroundColor,
          textAlign: "center",
          justifyContent: "center",
          color,
        }}
      >
        {label}
      </div>
    </div>
  );
};

export default ProgressIndicator;
