/* eslint-disable */
import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    style={{ backgroundColor: color }}
    className="btn"
  >
    {text}
  </button>
);

Button.defaultProps = {
  color: "gold",
};

// Button.propTypes = {
//   text: PropTypes.string,
//   color: PropTypes.string,
//   onClick: PropTypes.func,
// };

export default Button;
