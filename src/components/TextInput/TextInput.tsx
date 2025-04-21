import clsx from "clsx";
import { ChangeEvent, useState } from "react";

type TextinputProps = {
  type?: string;
  label?: string;
  placeholder?: string;
  state?: "default" | "hover" | "focus" | "error";
  disable?: boolean;
  fontSize?: string;
  width?: string;
  height?: string;
  rounded?: string;
  required?: boolean;
};

const TextInput = (props: TextinputProps) => {
  const [userInput, setUserInput] = useState<string>("");

  const type = props.type || "text";
  const state = props.state || "default";

  const baseClass =
    "border-3 px-2 py-2 text-sm max-[368px]:w-full sm:text-base md:text-lg transition-colors";

  const stateClasses = {
    default: "border-black",
    hover: "hover:border-blue-500",
    focus: "focus:ring-2 focus:ring-blue-500",
    error: "border-red-500"
  };

  const handleUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  return (
    <input
      type={type}
      id={props.label}
      aria-label={props.label}
      aria-required={props.required ?? false}
      placeholder={props.placeholder}
      disabled={props.disable}
      value={userInput}
      onChange={handleUserInput}
      style={{
        width: props.width || "300px",
        height: props.height || "7vh",
        fontSize: props.fontSize || "16px",
        borderRadius: props.rounded || "5px"
      }}
      className={clsx(baseClass, stateClasses[state])}
    />
  );
};

export default TextInput;
