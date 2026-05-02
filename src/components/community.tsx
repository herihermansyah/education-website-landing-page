import React from "react";
import SubTitle from "./sub-title";
import {Button} from "./ui/button";
import Image from "next/image";

function Community() {
  return (
    <section className="container mx-auto xl:w-main px-4 md:px-0 lg:relative mt-51.5 lg:block flex flex-col gap-10 items-center justify-center overflow-hidden lg:h-195">
      <div className="flex">
        <div className="flex flex-col items-center gap-15.75">
          <SubTitle
            className="gap-5.5"
            title="Start growing with our community"
            titleClass="text-center md:w-[531px]"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
            descriptionClass="text-center"
          />
          <Button className="bg-orange rounded-[10px] font-bold text-[20px] px-10 py-6">
            Join community
          </Button>
        </div>
      </div>
      <div className="lg:absolute top-10 -z-10 lg:-right-5">
        <Image
          src="/communityimage.svg"
          alt="community image"
          width={996}
          height={664}
          loading="eager"
        />
      </div>
    </section>
  );
}

export default Community;
