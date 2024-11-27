import React from "react";

export const ButtonComponent = ({
    buttonText,
    textColor = "white",
    buttonColor = "primary2",
    disabled,
    onclick,
    type,
}) => {
    return (
        <button
            type={type}
            onclick={onclick}
            className={`bg-${buttonColor} text-${textColor} text-lg w-full py-3  text-white rounded-lg font-medium`}
            disabled={disabled}
        >
            {buttonText}
        </button>
    );
};
export default ButtonComponent;