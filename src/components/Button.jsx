import React from "react";

export default function Button(props) {
  const { text, func } = props;
  return (
    <div>
      <button
        onClick={func}
        className="whiteBorderShadow mx-auto flex justify-center rounded-md bg-slate-950  px-8 py-4 duration-300"
      >
        <p className="text-white">{text}</p>
      </button>
    </div>
  );
}
