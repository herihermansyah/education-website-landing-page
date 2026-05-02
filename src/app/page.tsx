import Community from "@/components/community";
import Course from "@/components/course";
import Hero from "@/components/hero";
import Register from "@/components/register";
import Subscribe from "@/components/subscribe";
import React from "react";

function page() {
  return (
    <div>
      <Hero />
      <Course />
      <Register />
      <Subscribe />
      <Community />
    </div>
  );
}

export default page;
