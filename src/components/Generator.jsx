import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/swoldier";
import Button from "./Button";

function Header({ index, title, description }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl font-semibold text-red-700 sm:text-4xl md:text-5xl">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="mx-auto text-sm sm:text-base">{description}</p>
    </div>
  );
}

export default function Generator({
  muscles,
  setMuscles,
  workout,
  setWorkout,
  goals,
  setGoals,
  updateWorkoutGen,
}) {
  const [showModal, setShowModal] = useState(false);

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
      return;
    }

    if (muscles.length > 2) {
      setShowModal(false);
      return;
    }

    if (workout !== "individual") {
      setMuscles([muscleGroup]);
      setShowModal(false);
      return;
    }

    setMuscles([...muscles, muscleGroup]);
    if (muscles.length === 2) {
      setShowModal(false);
    }
  }

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <SectionWrapper
      id={"generate"}
      header={"generate your workout"}
      title={["It's", "Huge", "o'clock"]}
    >
      <Header
        index={"01"}
        title={"Pick your poison"}
        description={"Select the workout you wish to endure"}
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {Object.keys(WORKOUTS).map((type) => (
          <button
            onClick={() => {
              setMuscles([]);
              setWorkout(type);
            }}
            className={`rounded-lg border-2 bg-slate-950 py-4 text-white duration-200 hover:border-red-700 ${
              type === workout ? "border-red-700" : ""
            }`}
            key={type}
          >
            <p className="capitalize">{type.replaceAll("_", " ")}</p>
          </button>
        ))}
      </div>
      <Header
        index={"02"}
        title={"Lock On Targets"}
        description={"Select the muscles judged for annihilation"}
      />
      <div className="flex flex-col rounded-lg border-2 border-solid border-white bg-slate-950 text-white">
        <button
          onClick={toggleModal}
          className="relative flex items-center justify-center p-3"
        >
          <p className="capitalize">
            {muscles.length === 0 ? "Select muscle group" : muscles.join(" ")}
          </p>
          <i className="fa-solid fa-caret-down absolute right-3  top-1/2 -translate-y-1/2"></i>
        </button>
        {showModal && (
          <div className="flex flex-col">
            {(workout === "individual"
              ? WORKOUTS["individual"]
              : Object.keys(WORKOUTS[workout])
            ).map((muscleGroup) => (
              <button
                onClick={() => {
                  updateMuscles(muscleGroup);
                }}
                className={`duration-200 hover:text-red-700 ${
                  muscles.includes(muscleGroup) ? "text-red-700" : ""
                }`}
                key={muscleGroup}
              >
                <p className="uppercase">{muscleGroup.replaceAll("_", " ")}</p>
              </button>
            ))}
          </div>
        )}
      </div>
      <Header
        index={"03"}
        title={"Become Juggernaut"}
        description={"Select your ultimate objective"}
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {Object.keys(SCHEMES).map((scheme) => (
          <button
            onClick={() => {
              setGoals(scheme);
            }}
            className={`rounded-lg border-2 bg-slate-950 py-4 text-white duration-200 hover:border-red-700 ${
              scheme === goals ? "border-red-700" : ""
            }`}
            key={scheme}
          >
            <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
          </button>
        ))}
      </div>
      <Button func={updateWorkoutGen} text="Create Plan" />
    </SectionWrapper>
  );
}
