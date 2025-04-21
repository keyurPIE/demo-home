import React from "react";

interface buttonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

export default function CommonButton({
  text,
  onClick,
  className,
  icon,
}: buttonProps) {
  return (
    <button
      className={`text-white bg-[#1d4ed8] rounded-lg py-[10px] flex items-center gap-2 px-5 ${
        className ?? ""
      }`}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
}
