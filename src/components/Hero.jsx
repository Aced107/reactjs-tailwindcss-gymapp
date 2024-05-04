import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[800px] flex-col items-center justify-center gap-10 p-4 text-center">
      <div className="flex flex-col">
        <p className="font-semibold">IT'S TIME TO GET </p>
        <h1 className="text-4xl font-bold uppercase sm:text-5xl md:text-6xl lg:text-7xl">
          Gym<span className="whiteWithStroke">ified</span>
        </h1>
      </div>
      <p className="text-sm font-medium md:text-base">
        Empower your fitness journey with our cutting-edge GYM
        <span className="whiteWithStroke font-medium">IFICATION</span> app,
        delivering personalized workouts, expert guidance, and unparalleled
        motivation to help you achieve your goals, one rep at a time.
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text="Accept & Continue"
      />
    </div>
  );
}
