import React, { useState } from "react";

export default function ExerciseCard(props) {
  const [setsCompleted, setSetsCompleted] = useState(0);

  const { exercise, i } = props;

  function handleSetIncrement() {
    setSetsCompleted((setsCompleted + 1) % 6);
  }

  return (
    <div className="flex flex-col gap-4 rounded-md bg-slate-950 p-4 text-white sm:flex-wrap">
      <div className="flex flex-col gap-x-4 sm:flex-row sm:flex-wrap sm:items-center">
        <h4 className="hidden text-3xl font-semibold text-red-700 sm:inline sm:text-4xl md:text-5xl ">
          0{i + 1}
        </h4>
        <h2 className="max-w-full flex-1 truncate whitespace-nowrap text-lg capitalize sm:text-center sm:text-xl md:text-2xl">
          {exercise.name.replaceAll("_", " ")}
        </h2>
        <p className="text-sm capitalize text-slate-400">{exercise.type}</p>
      </div>
      <div className="flex flex-col ">
        <h3 className="text-sm text-slate-400">Muscle Groups</h3>
        <p className="capitalize">{exercise.muscles.join(" & ")}</p>
      </div>
      <div className="flex flex-col gap-2 rounded bg-slate-950">
        {exercise.description.split("___").map((val) => {
          return <div className="text-sm">{val}</div>;
        })}
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:place-items-center">
        {["reps", "rest", "tempo"].map((info) => {
          return (
            <div
              key={info}
              className="flex w-full flex-col rounded border-[1.5px] border-solid border-slate-900 p-2"
            >
              <h3 className="text-sm capitalize text-slate-400">
                {info === "reps" ? `${exercise.unit}` : info}
              </h3>
              <p>{exercise[info]}</p>
            </div>
          );
        })}
        <button
          onClick={handleSetIncrement}
          className="flex w-full flex-col rounded border-[1.5px] border-solid border-white p-2 duration-200 hover:border-red-700"
        >
          <h3 className="text-sm capitalize text-slate-400">Sets Completed</h3>
          <p className="font-medium">{setsCompleted} / 5</p>
        </button>
      </div>
    </div>
  );
}
