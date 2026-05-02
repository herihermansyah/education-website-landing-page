import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <div>
      <Image
        src="/logo.svg"
        alt="logo image"
        width={135}
        height={59}
        priority
      />
    </div>
  );
}

export default Logo;
