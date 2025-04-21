// components/Toast.jsx
import { useEffect, useState } from "react";

type ToastProps = {
  message?: string;
  show?: boolean;
  onClose: () => void;
  time?: number;
  status?: "info" | "error" | "success" | "warning";
  position?: "right" | "left" | "center" | "bottom";
};

const Toast = (props: ToastProps) => {
  const [visible, setVisible] = useState(false);

  // transition effect
  useEffect(() => {
    if (props.show) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(props.onClose, 300); // wait for transition
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [props.show, props.onClose]);

  // set color
  let color = "";

  // set status color
  switch (props.status) {
    case "info":
      color = "bg-blue-500 text-white font-bold";
      break;

    case "error":
      color = "bg-red-500 text-white font-bold";
      break;

    case "success":
      color = "bg-green-500 text-white font-bold";
      break;

    case "warning":
      color = "bg-yellow-500 text-white font-bold";
      break;

    default:
      break;
  }

  // get transition
  const getTransitionClass = () => {
    if (!visible) {
      switch (props.position) {
        case "left":
          return "translate-x-[-100%]";
        case "center":
          return "translate-y-[-100%]";
        case "bottom":
          return "translate-y-full";
        case "right":
        default:
          return "translate-x-full";
      }
    }
    return "translate-x-0";
  };

  // get position
  const getPositionClass = () => {
    switch (props.position) {
      case "left":
        return "top-5 left-5  max-[374px]:w-full";
      case "center":
        return "top-5 left-[37%]  max-[374px]:w-full";
      case "bottom":
        return "bottom-5 right-5  max-[374px]:w-full";
      case "right":
      default:
        return "top-5 right-5  max-[374px]:w-full";
    }
  };

  return (
    <div
      className={`fixed w-80 z-50 transition-transform duration-300 ease-in-out transform ${getTransitionClass()} ${getPositionClass()}`}
      style={{
        marginRight: props.show ? "5px" : ""
      }}
    >
      <div
        className={`${color} border-2 border-black shadow-lg rounded-[10px] p-4 flex items-center space-x-3> h-[10vh]`}
      >
        {props.message}
      </div>
      <button
        onClick={() => {
          setVisible(false);
          setTimeout(props.onClose, 300);
        }}
        className="text-gray-400 hover:text-gray-600 transition"
      ></button>
    </div>
  );
};

export default Toast;
