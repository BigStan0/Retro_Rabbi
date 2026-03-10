import React from "react";

function Button({
  onButtonClick,
  buttonText,
  icon,
  buttonVariant = "primary",
  disabled = false,
  className = "",
}) {
  const buttonStyles = {
    primary: "bg-green-600 text-white hover:bg-green-700",
    disabled: "bg-gray-300 text-gray-500 cursor-not-allowed",
  };
  return (
    <div>
      {buttonText && (
        <button
          onClick={onButtonClick}
          disabled={disabled}
          className={`border-primary/50 hover:bg-primary hover:text-black`}
        >
          {buttonText}
          {icon}
        </button>
      )}
    </div>
  );
}

export default Button;
