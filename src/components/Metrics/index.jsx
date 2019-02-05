import React from "react";

export default function Metrics({ metrics }) {
  return (
    <div className="metrics">
      <ul>
        {
          metrics.map((metric, i) => (
            <li key={metric.label + i}>
              {metric.label} {metric.value}
            </li>
          ))
        }
      </ul>
    </div>
  );
}
