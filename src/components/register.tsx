import Image from "next/image";
import React from "react";
import SubTitle from "./sub-title";

function Register() {
  return (
    <section className="container mx-auto xl:w-main px-4 md:px-0 flex flex-col lg:flex-row items-center justify-between gap-25.5 mt-58.75">
      <SubTitle title="Start learning by creating free account and get register" />
      <Image
        src="/registerimage.svg"
        alt="register image"
        width={440}
        height={293}
        loading="eager"
      />
    </section>
  );
}

export default Register;
