import React from "react";

export default function SectionWrapper(props) {
  const { children, header, title, id } = props;
  return (
    <section id={id} className="flex min-h-screen flex-col gap-10">
      <div className="flex flex-col items-center justify-center gap-1 bg-orange-100 py-10">
        <p className="font-semibold uppercase">{header}</p>
        <h2 className="lg:text6xl text-3xl font-bold sm:text-4xl md:text-5xl">
          {title[0]}{" "}
          <span className="whiteWithStroke uppercase">{title[1]}</span>{" "}
          {title[2]}
        </h2>
      </div>
      <div className="mx-auto flex w-full max-w-[800px] flex-col gap-10 p-4">
        {children}
      </div>
    </section>
  );
}
