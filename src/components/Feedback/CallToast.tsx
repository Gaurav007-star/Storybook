import React, { useState } from "react";
import Toast from "./Toast";
import clsx from "clsx";

type CallToastType = {
  icon?: React.ElementType;
  iconSize?: string;
  iconColor?: string;
  label?: string;
  buttonColor?: string;
};

const CallToast = (props: CallToastType) => {
  const Icon = props.icon;
  const customCss = clsx(`bg-[${props.buttonColor}]`);

  const [showToast, setShowToast] = useState<boolean>();

  return (
    <div className="w-max h-max">
      {Icon ? (
        <Icon
          onClick={() => setShowToast(true)}
          style={{
            fontSize: props.iconSize,
            color: props.iconColor
          }}
        />
      ) : (
        <button
          onClick={() => setShowToast(true)}
          className={`px-4 py-2 text-white ${customCss}  rounded-xl shadow hover:bg-blue-700 transition hover:scale-105 cursor-pointer`}
        >
          {props.label}
        </button>
      )}

      <Toast
        message="This is a toast message!"
        status="warning"
        show={showToast}
        onClose={() => setShowToast(false)}
        time={2000}
        position="center"
      />
    </div>
  );
};

export default CallToast;
