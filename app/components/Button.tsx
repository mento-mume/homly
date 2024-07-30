import PropTypes from "prop-types";

interface ButtonProps {
  variant: "primary" | "secondary" | "tertiary";
  size: "big" | "small";
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}
const Button = ({
  variant,
  size,
  disabled = false,
  children,
  onClick,
}: ButtonProps) => {
  // Define base styles
  const baseStyles =
    "font-semibold rounded-3xl px-5 py-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  // Define variant styles
  const variantStyles = {
    primary: "bg-[#2E0855] text-white hover:bg-[#090211] active:bg-[#745A8E]",
    secondary:
      "border border-[#2E0855] text-[#2E0855]  hover:text-[#090211] active:bg-[#745A8E]",
    tertiary:
      "border border-2 border-white bg-[#2E0855] text-white hover:bg-[#090211] active:bg-[#745A8E]",
  };

  // Define size styles
  const sizeStyles = {
    big: "w-40 h-12", // Width 107px, Height 47px
    small: "w-24 h-12", // Width 93px, Height 47px
  };

  // Define disabled styles
  const disabledStyles = "opacity-50 cursor-not-allowed";

  // Combine all styles
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
    disabled ? disabledStyles : ""
  }`;

  return (
    <button className={styles} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

// Define PropTypes for the Button component
Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]).isRequired,
  size: PropTypes.oneOf(["big", "small"]).isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
export default Button;
