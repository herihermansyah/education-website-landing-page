import React from "react";
import SubTitle from "./sub-title";
import Image from "next/image";

function Course() {
  return (
    <section className="container mx-auto xl:w-main px-4 md:px-0 flex flex-col lg:flex-row gap-10 items-center justify-between mt-58.75">
      <Image
        src="/courseimage.svg"
        alt="course image"
        width={480}
        height={379}
        loading="eager"
      />
      <div className="flex flex-col gap-4.75">
        <SubTitle
          title="Welcome to the online centers"
          titleClass="lg:w-[407px]"
        />
        <ul className="text-[24px] list-disc flex flex-col gap-3 pl-6">
          <li>Start learning from your experience</li>
          <li>Enhance your skills with us now</li>
          <li>Do your favorite course</li>
        </ul>
      </div>
    </section>
  );
}

export default Course;
