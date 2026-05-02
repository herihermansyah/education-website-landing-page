import React from "react";
import {Input} from "./ui/input";
import {Button} from "./ui/button";

function Subscribe() {
  return (
    <section className="container mx-auto xl:w-main px-4 md:px-0 bg-cream py-9.5 mt-27.5">
      <form action="">
        <div className="flex md:flex-row flex-col items-center gap-2 justify-between px-11.25">
          <Input
            placeholder="your name"
            className="bg-white rounded-none h-15.75 w-75 placeholder:text-[20px] placeholder:text-center font-semibold capitalize "
          />
          <Input
            placeholder="email address"
            className="bg-white rounded-none h-15.75 w-75 placeholder:text-[20px] placeholder:text-center font-semibold capitalize "
          />
          <Button className="h-15.75 w-75 rounded-none bg-brown2">
            Subscribe
          </Button>
        </div>
      </form>
    </section>
  );
}

export default Subscribe;
