
import PropTypes from 'prop-types';

export const PasswordIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 25 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 11c-1.1 0-2 .9-2 2v1h4v-1c0-1.1-.9-2-2-2zm0-7a5 5 0 015 5v2H7V9a5 5 0 015-5z"
    />
    <rect
      width="18"
      height="10"
      x="3"
      y="11"
      rx="2"
      ry="2"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

// Validación de props
PasswordIcon.propTypes = {
  className: PropTypes.string, // Validamos que className sea una cadena de texto
};

// Valor por defecto opcional
PasswordIcon.defaultProps = {
  className: '', // Valor por defecto si no se pasa ninguna clase
};
