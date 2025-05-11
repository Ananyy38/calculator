import React from "react";
import PropTypes from "prop-types";
import "./History.css";

const History = ({ history }) => {
  return (
    <div className="component-history">
      <h2>Calculation History</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

History.propTypes = {
  history: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default History;
