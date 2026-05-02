import React from "react";
import SubTitle from "./sub-title";
import {Button} from "./ui/button";
import Image from "next/image";

function Hero() {
  return (
    <section className="container mx-auto mt-18 xl:w-main px-4 md:px-0 flex flex-col-reverse gap-5 lg:flex-row items-center justify-between">
      <div className="flex flex-col gap-8.5 items-start">
        <SubTitle
        className="gap-8.5"
          title="Start learning with us now"
          titleClass="xl:w-[428px]"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laboriosam  voluptates sed beatae?"
          descriptionClass="xl:w-[550px]"
        />
        <Button className="rounded-[10px] bg-brow1 px-7 py-5 font-bold text-[20px] capitalize">
          start learning
        </Button>
      </div>
      <Image
        src="/hero.svg"
        alt="hero image"
        width={487}
        height={487}
        loading="eager"
        className="w-121.75 h-121.75 rounded-2xl"
      />
    </section>
  );
}

export default Hero;
